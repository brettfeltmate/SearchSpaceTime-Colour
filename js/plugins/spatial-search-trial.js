/**
 * spatial-search-trial.js
 * plugin for presented a forward & backward masked search array
 * records response and present appropriate feedback
 **/


jsPsych.plugins["spatial-search"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'spatial-search',
    description: '',
    parameters: {
      practice: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: "Practice",
        default: undefined,
        description: "true if this is a practice block."
      },
      search_type: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Search type',
        default: "spatial"
      },
      set_size: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Set size',
        default: null,
        description: 'Number of items to fit into search array'
      },
      target_present:{
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Target present',
        default: undefined,
        description: "Should target be present during trial?"
      },
      TD_cond: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Target-distractor condition',
        default: undefined,
        description: "Condition which defined fill similarity between target and distractors"
      },
      DD_cond: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'distractor-distractor condition',
        default: undefined,
        description: "Condition which defined fill similarity between distractors"
      },
      target_fill: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Target fill',
        default: null,
        description: "RBG value, selected from colourspaces.js, which corresponds to target fill."
      },
      distractor_fills: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: "Distractor Fills",
        default: undefined,
        description: "List from which distractor fills (passed to background-color) are selected from."
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      preview_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Preview duration',
        default: 1000,
        description: 'How long to present target preview before fixation onset'
      },
      fix_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Fixation duration',
        default: 1000,
        description: 'How long to present fixation before onset of first masking array.'
      },
      mask_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Masking stimulus duration',
        default: 600,
        description: 'How long to present masking stimulus.'
      },
      ISI_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Inter-stimulus interval',
        default: 0,
        description: 'Delay between offset of mask and onset of array, or vice-versa.'
      },
      search_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Search array duration',
        default: 480,
        description: 'How long to present search array.'
      },
      response_window: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Response window',
        default: 3000,
        description: 'Duration to listen for response post array-onset before trial self-terminates.'
      },
      feedback_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: "Feedback duration",
        default: 500,
        description: "Duration to present feedback before trial termination"
      }
    }
  }

  plugin.generate_arrays = function() {
    // Initial display consists only of fixation stimulus
    stim_arrays.fixation = $('<div />').addClass('spatial_array').append($('<div />').addClass('fixation'))

    let mask_array = $('<div />').addClass('spatial_array')
    let search_array = $('<div />').addClass('spatial_array')

    // array_stims initially populated w/ fixation stim. Later appended to to reach 25 items
    let mask_array_stims = [$('<div />').addClass('fixation')]
    let search_array_stims = [$('<div />').addClass('fixation')];

    // Remaining spots in mask array filled w/ cells of random colours
    while (mask_array_stims.length < 25) {
      mask_array_stims.push($('<div />').addClass('search-item'))
    }
    // add to array
    mask_array.append(mask_array_stims)

    // store
    stim_arrays.mask = mask_array;


    /*
    * Create search array
    * */

    // spawn target if desired
    if (trial_data.target_present == 'PRESENT') {
      search_array_stims.push($('<div />').addClass('search-item').css(
          {'background-color': `${trial_data.target_fill}`,
            'border': '2px solid red'
          }))
    }

    // Now finish populating stim array
    while (search_array_stims.length < 25) {
      // until set size reached, spawn distractors
      if (search_array_stims.length < trial_data.set_size) {
        // Randomly select distractor fill
        let fill_value = randomChoice(trial_data.distractor_fills)
        search_array_stims.push($('<div />').addClass('search-item').css('background-color', `${fill_value}`))
      }
      // remaining items have no fill
      else { search_array_stims.push($('<div />').addClass('.search-item filler')) }
    }

    $(search_array).append(array_shuffle(search_array_stims))
    // store
    stim_arrays.search = search_array;






  }

  plugin.trial = function(display_element, trial) {

    $('#jspsych-loading-progress-bar-container').remove()

    trial_data = {
      practice_block: trial.practice,
      search_type: trial.search_type,
      set_size: trial.set_size,
      target_present: trial.target_present,
      TD_cond: trial.TD_cond,
      DD_cond: trial.DD_cond,
      target_fill: trial.target_fill,
      distractor_fills: trial.distractor_fills,
      mask_dur: trial.mask_duration,
      search_dur: trial.search_duration,
      ISI: trial.ISI_duration,
      rt: null,
      response: null,
      accuracy: null,
    }

    stim_arrays = {
      fix: null,
      mask: null,
      search: null
    }

    // store response
    var response = {
      rt: null,
      key: null,
      acc: null
    };

    /*
    * Event sequence
    * Pre-mask -> clear screen -> search array -> clear screen -> post-mask -> ITI
    *
    *
    * */

    plugin.generate_arrays()

    // Given it's easier to use search-item here, instead of fixation, is fixation really necessary to define?
    var preview = $('<div />').addClass('search-item').css('background-color', `${trial_data.target_fill}`)

    $(preview).text(`TARGET`)

    // Immediate present target preview
    $(display_element).append(preview)

    jsPsych.pluginAPI.setTimeout( function() {
      $(display_element).html('')
      $(display_element).append(stim_arrays.fixation)
    }, trial.preview_duration)



    // Replace with first masking display
    jsPsych.pluginAPI.setTimeout( function() {
      $(display_element).html('')
      $(display_element).append(stim_arrays.mask)
    }, trial.preview_duration + trial.fix_duration)


    // Remove mask
    jsPsych.pluginAPI.setTimeout(function() {
      $(display_element).html('')
    }, trial.preview_duration + trial.fix_duration + trial.mask_duration)

    // present search array and start the response listener
    var keyboardListener;
    jsPsych.pluginAPI.setTimeout(function() {

      $(display_element).append(stim_arrays.search)

      keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      })
    }, trial.preview_duration + trial.fix_duration + trial.mask_duration + trial.ISI_duration)

    // Following target onset, user has until response_period elapses before trial self-terminates
    jsPsych.pluginAPI.setTimeout(function() {
      jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener) // Stop listening for responses
      end_trial()
    }, trial.preview_duration + trial.fix_duration + trial.mask_duration + trial.ISI_duration + trial.response_window)

    // Remove search array
    jsPsych.pluginAPI.setTimeout(function() {
      $(display_element).html('')
    }, trial.preview_duration + trial.fix_duration + trial.mask_duration + trial.ISI_duration + trial.search_duration)

    // Present post-mask
    jsPsych.pluginAPI.setTimeout(function() {
      $(display_element).append(stim_arrays.mask)
    }, trial.preview_duration + trial.fix_duration + trial.mask_duration + trial.ISI_duration + trial.search_duration + trial.ISI_duration)

    // Replace post-mask with fixation
    jsPsych.pluginAPI.setTimeout(function() {
      $(display_element).html('')
      $(display_element).append(stim_arrays.fixation)
    }, trial.preview_duration + trial.fix_duration + trial.mask_duration + trial.ISI_duration + trial.search_duration + trial.ISI_duration + trial.mask_duration)



    // function to end trial when it is time
    var end_trial = function() {
      $(display_element).html('')
      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // Determine response accuracy (if not timeout)
      if (response.key == null) {
        response.rt = 'TIMEOUT';
        response.key = 'TIMEOUT';
        response.acc = 'TIMEOUT'
      }
      else if (jsPsych.pluginAPI.compareKeys(response.key, trial.choices[0])) {
        response.key = 'PRESENT'
      }
      else {
        response.key = 'ABSENT'
      }

      response.acc = (response.key == trial.target_present) ? 1 : 0


      // gather the data to store for the trial
      trial_data.rt = response.rt
      trial_data.response = response.key
      trial_data.accuracy = response.acc

      // provide feedback on trial performance
      give_feedback(trial_data)

    };

    // function to handle responses by the subject
    var after_response = function(info) {
      // only record the first response
      if (response.key == null) {response = info;}
      end_trial();
    };

    var give_feedback = function(trial_data) {
      data_repo.push(trial_data)

      switch (trial_data.accuracy) {
        case "TIMEOUT":
          $(display_element).append('<p>TIMEOUT</p>')
          break
        case 1:
          $(display_element).append('<p>CORRECT</p>')
          break
        case 0:
          $(display_element).append('<p>INCORRECT</p>')
      }

      jsPsych.pluginAPI.setTimeout( function() {
        $(display_element).html('')
        jsPsych.finishTrial(trial_data)
      }, trial.feedback_duration)
    }




  };

  return plugin;
})();
