var const_lum = [
	'rgb(211, 63, 106)', 'rgb(210, 64, 104)', 'rgb(210, 65, 101)', 'rgb(209, 66, 99)',
	'rgb(209, 67, 96)', 'rgb(208, 68, 94)', 'rgb(208, 69, 91)', 'rgb(207, 70, 89)',
	'rgb(207, 71, 86)', 'rgb(206, 72, 84)', 'rgb(206, 73, 81)', 'rgb(205, 74, 78)',
	'rgb(205, 75, 75)', 'rgb(204, 75, 72)', 'rgb(203, 76, 69)', 'rgb(203, 77, 66)',
	'rgb(202, 78, 63)', 'rgb(202, 79, 59)', 'rgb(201, 80, 56)', 'rgb(200, 81, 52)',
	'rgb(200, 82, 48)', 'rgb(199, 82, 43)', 'rgb(198, 83, 39)', 'rgb(198, 84, 33)',
	'rgb(197, 85, 27)', 'rgb(196, 86, 19)', 'rgb(195, 87, 7)', 'rgb(195, 87, 0)',
	'rgb(194, 88, 0)', 'rgb(193, 89, 0)', 'rgb(192, 90, 0)', 'rgb(191, 91, 0)',
	'rgb(191, 91, 0)', 'rgb(190, 92, 0)', 'rgb(189, 93, 0)', 'rgb(188, 94, 0)',
	'rgb(187, 95, 0)', 'rgb(186, 95, 0)', 'rgb(185, 96, 0)', 'rgb(184, 97, 0)',
	'rgb(183, 98, 0)', 'rgb(183, 98, 0)', 'rgb(182, 99, 0)', 'rgb(181, 100, 0)',
	'rgb(180, 100, 0)', 'rgb(179, 101, 0)', 'rgb(178, 102, 0)', 'rgb(177, 103, 0)',
	'rgb(176, 103, 0)', 'rgb(175, 104, 0)', 'rgb(174, 105, 0)', 'rgb(172, 105, 0)',
	'rgb(171, 106, 0)', 'rgb(170, 107, 0)', 'rgb(169, 107, 0)', 'rgb(168, 108, 0)',
	'rgb(167, 109, 0)', 'rgb(166, 109, 0)', 'rgb(165, 110, 0)', 'rgb(164, 111, 0)',
	'rgb(162, 111, 0)', 'rgb(161, 112, 0)', 'rgb(160, 112, 0)', 'rgb(159, 113, 0)',
	'rgb(157, 114, 0)', 'rgb(156, 114, 0)', 'rgb(155, 115, 0)', 'rgb(154, 115, 0)',
	'rgb(152, 116, 0)', 'rgb(151, 117, 0)', 'rgb(150, 117, 0)', 'rgb(148, 118, 0)',
	'rgb(147, 118, 0)', 'rgb(146, 119, 0)', 'rgb(144, 119, 0)', 'rgb(143, 120, 0)',
	'rgb(141, 120, 0)', 'rgb(140, 121, 0)', 'rgb(138, 122, 0)', 'rgb(137, 122, 0)',
	'rgb(135, 123, 0)', 'rgb(134, 123, 0)', 'rgb(132, 124, 0)', 'rgb(130, 124, 0)',
	'rgb(129, 125, 0)', 'rgb(127, 125, 0)', 'rgb(125, 126, 0)', 'rgb(124, 126, 0)',
	'rgb(122, 127, 0)', 'rgb(120, 127, 0)', 'rgb(118, 128, 0)', 'rgb(116, 128, 0)',
	'rgb(115, 129, 0)', 'rgb(113, 129, 0)', 'rgb(111, 130, 0)', 'rgb(109, 130, 0)',
	'rgb(107, 130, 0)', 'rgb(104, 131, 0)', 'rgb(102, 131, 0)', 'rgb(100, 132, 0)',
	'rgb(98, 132, 0)', 'rgb(95, 133, 0)', 'rgb(93, 133, 0)', 'rgb(90, 134, 0)',
	'rgb(88, 134, 0)', 'rgb(85, 134, 0)', 'rgb(82, 135, 0)', 'rgb(79, 135, 0)',
	'rgb(76, 136, 0)', 'rgb(73, 136, 0)', 'rgb(70, 137, 0)', 'rgb(66, 137, 0)',
	'rgb(63, 137, 0)', 'rgb(59, 138, 0)', 'rgb(54, 138, 0)', 'rgb(49, 138, 0)',
	'rgb(44, 139, 0)', 'rgb(38, 139, 0)', 'rgb(31, 140, 0)', 'rgb(21, 140, 0)',
	'rgb(6, 140, 0)', 'rgb(0, 141, 0)', 'rgb(0, 141, 0)', 'rgb(0, 141, 0)',
	'rgb(0, 142, 0)', 'rgb(0, 142, 0)', 'rgb(0, 142, 0)', 'rgb(0, 143, 0)',
	'rgb(0, 143, 0)', 'rgb(0, 143, 0)', 'rgb(0, 144, 0)', 'rgb(0, 144, 0)',
	'rgb(0, 144, 0)', 'rgb(0, 145, 0)', 'rgb(0, 145, 0)', 'rgb(0, 145, 0)',
	'rgb(0, 146, 0)', 'rgb(0, 146, 0)', 'rgb(0, 146, 0)', 'rgb(0, 146, 0)',
	'rgb(0, 147, 4)', 'rgb(0, 147, 17)', 'rgb(0, 147, 25)', 'rgb(0, 147, 31)',
	'rgb(0, 148, 37)', 'rgb(0, 148, 41)', 'rgb(0, 148, 46)', 'rgb(0, 148, 50)',
	'rgb(0, 149, 53)', 'rgb(0, 149, 57)', 'rgb(0, 149, 60)', 'rgb(0, 149, 63)',
	'rgb(0, 150, 67)', 'rgb(0, 150, 70)', 'rgb(0, 150, 72)', 'rgb(0, 150, 75)',
	'rgb(0, 150, 78)', 'rgb(0, 151, 80)', 'rgb(0, 151, 83)', 'rgb(0, 151, 86)',
	'rgb(0, 151, 88)', 'rgb(0, 151, 90)', 'rgb(0, 151, 93)', 'rgb(0, 152, 95)',
	'rgb(0, 152, 97)', 'rgb(0, 152, 100)', 'rgb(0, 152, 102)', 'rgb(0, 152, 104)',
	'rgb(0, 152, 106)', 'rgb(0, 152, 108)', 'rgb(0, 152, 110)', 'rgb(0, 152, 113)',
	'rgb(0, 153, 115)', 'rgb(0, 153, 117)', 'rgb(0, 153, 119)', 'rgb(0, 153, 121)',
	'rgb(0, 153, 123)', 'rgb(0, 153, 125)', 'rgb(0, 153, 127)', 'rgb(0, 153, 128)',
	'rgb(0, 153, 130)', 'rgb(0, 153, 132)', 'rgb(0, 153, 134)', 'rgb(0, 153, 136)',
	'rgb(0, 153, 138)', 'rgb(0, 153, 140)', 'rgb(0, 153, 141)', 'rgb(0, 153, 143)',
	'rgb(0, 153, 145)', 'rgb(0, 153, 147)', 'rgb(0, 153, 149)', 'rgb(0, 152, 150)',
	'rgb(0, 152, 152)', 'rgb(0, 152, 154)', 'rgb(0, 152, 155)', 'rgb(0, 152, 157)',
	'rgb(0, 152, 159)', 'rgb(0, 152, 161)', 'rgb(0, 152, 162)', 'rgb(0, 151, 164)',
	'rgb(0, 151, 165)', 'rgb(0, 151, 167)', 'rgb(0, 151, 169)', 'rgb(0, 151, 170)',
	'rgb(0, 150, 172)', 'rgb(0, 150, 173)', 'rgb(0, 150, 175)', 'rgb(0, 150, 176)',
	'rgb(0, 149, 178)', 'rgb(0, 149, 179)', 'rgb(0, 149, 181)', 'rgb(0, 148, 182)',
	'rgb(0, 148, 184)', 'rgb(0, 148, 185)', 'rgb(0, 147, 187)', 'rgb(0, 147, 188)',
	'rgb(0, 146, 189)', 'rgb(0, 146, 191)', 'rgb(0, 145, 192)', 'rgb(0, 145, 193)',
	'rgb(0, 145, 195)', 'rgb(0, 144, 196)', 'rgb(0, 144, 197)', 'rgb(0, 143, 198)',
	'rgb(0, 142, 200)', 'rgb(0, 142, 201)', 'rgb(0, 141, 202)', 'rgb(0, 141, 203)',
	'rgb(0, 140, 204)', 'rgb(0, 140, 205)', 'rgb(0, 139, 207)', 'rgb(0, 138, 208)',
	'rgb(0, 138, 209)', 'rgb(0, 137, 210)', 'rgb(0, 136, 211)', 'rgb(0, 135, 212)',
	'rgb(0, 135, 213)', 'rgb(0, 134, 214)', 'rgb(0, 133, 214)', 'rgb(0, 132, 215)',
	'rgb(0, 131, 216)', 'rgb(0, 131, 217)', 'rgb(0, 130, 218)', 'rgb(0, 129, 219)',
	'rgb(0, 128, 219)', 'rgb(0, 127, 220)', 'rgb(0, 126, 221)', 'rgb(0, 125, 221)',
	'rgb(0, 124, 222)', 'rgb(0, 123, 222)', 'rgb(0, 122, 223)', 'rgb(0, 121, 224)',
	'rgb(0, 120, 224)', 'rgb(0, 119, 224)', 'rgb(4, 118, 225)', 'rgb(29, 117, 225)',
	'rgb(42, 116, 226)', 'rgb(52, 115, 226)', 'rgb(61, 114, 226)', 'rgb(68, 112, 227)',
	'rgb(74, 111, 227)', 'rgb(80, 110, 227)', 'rgb(86, 109, 227)', 'rgb(91, 108, 227)',
	'rgb(96, 106, 227)', 'rgb(100, 105, 227)', 'rgb(105, 104, 227)', 'rgb(109, 103, 227)',
	'rgb(113, 101, 227)', 'rgb(116, 100, 227)', 'rgb(120, 99, 227)', 'rgb(124, 97, 227)',
	'rgb(127, 96, 227)', 'rgb(130, 95, 227)', 'rgb(133, 93, 226)', 'rgb(137, 92, 226)',
	'rgb(139, 91, 226)', 'rgb(142, 89, 225)', 'rgb(145, 88, 225)', 'rgb(148, 86, 224)',
	'rgb(150, 85, 224)', 'rgb(153, 84, 224)', 'rgb(156, 82, 223)', 'rgb(158, 81, 222)',
	'rgb(160, 79, 222)', 'rgb(163, 78, 221)', 'rgb(165, 77, 221)', 'rgb(167, 75, 220)',
	'rgb(169, 74, 219)', 'rgb(171, 72, 218)', 'rgb(173, 71, 218)', 'rgb(175, 70, 217)',
	'rgb(177, 68, 216)', 'rgb(178, 67, 215)', 'rgb(180, 65, 214)', 'rgb(182, 64, 213)',
	'rgb(183, 63, 212)', 'rgb(185, 61, 211)', 'rgb(187, 60, 210)', 'rgb(188, 59, 209)',
	'rgb(189, 58, 208)', 'rgb(191, 56, 207)', 'rgb(192, 55, 206)', 'rgb(193, 54, 205)',
	'rgb(195, 53, 204)', 'rgb(196, 52, 202)', 'rgb(197, 51, 201)', 'rgb(198, 49, 200)',
	'rgb(199, 48, 199)', 'rgb(200, 47, 197)', 'rgb(201, 46, 196)', 'rgb(202, 46, 195)',
	'rgb(203, 45, 193)', 'rgb(204, 44, 192)', 'rgb(205, 43, 190)', 'rgb(205, 43, 189)',
	'rgb(206, 42, 188)', 'rgb(207, 41, 186)', 'rgb(208, 41, 185)', 'rgb(208, 40, 183)',
	'rgb(209, 40, 182)', 'rgb(209, 40, 180)', 'rgb(210, 40, 178)', 'rgb(210, 39, 177)',
	'rgb(211, 39, 175)', 'rgb(211, 39, 174)', 'rgb(212, 39, 172)', 'rgb(212, 39, 170)',
	'rgb(213, 40, 169)', 'rgb(213, 40, 167)', 'rgb(213, 40, 165)', 'rgb(213, 40, 163)',
	'rgb(214, 41, 162)', 'rgb(214, 41, 160)', 'rgb(214, 42, 158)', 'rgb(214, 42, 156)',
	'rgb(214, 43, 155)', 'rgb(214, 44, 153)', 'rgb(214, 44, 151)', 'rgb(215, 45, 149)',
	'rgb(215, 46, 147)', 'rgb(215, 46, 145)', 'rgb(215, 47, 143)', 'rgb(214, 48, 142)',
	'rgb(214, 49, 140)', 'rgb(214, 50, 138)', 'rgb(214, 50, 136)', 'rgb(214, 51, 134)',
	'rgb(214, 52, 132)', 'rgb(214, 53, 130)', 'rgb(214, 54, 128)', 'rgb(213, 55, 126)',
	'rgb(213, 56, 123)', 'rgb(213, 57, 121)', 'rgb(213, 58, 119)', 'rgb(212, 59, 117)',
	'rgb(212, 60, 115)', 'rgb(212, 61, 113)', 'rgb(211, 62, 110)', 'rgb(211, 62, 108)'
]