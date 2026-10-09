// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'fontDataDirectionConstants'
// - Resolved require(385303) to 'font-data-direction-constants'
// - Updated imported property 'V' to 'verticalDir' (module 385303)
// - Updated imported property 'H' to 'horizontalDir' (module 385303)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 114086
         */
module.exports = function (module, exports, require) {
  exports.delimiters = exports.VSIZES = exports.HDW3 = exports.HDW2 = exports.HDW1 = undefined;
  var fontDataDirectionConstants = require("font-data-direction-constants") /*id: 385303*/;
  exports.HDW1 = [0.75, 0.25, 0.875];
  exports.HDW2 = [0.85, 0.349, 0.667];
  exports.HDW3 = [0.583, 0.082, 0.5];
  exports.VSIZES = [1, 1.2, 1.8, 2.4, 3];
  var T = {
    c: 47,
    dir: fontDataDirectionConstants.verticalDir,
    sizes: exports.VSIZES
  };
  var n = {
    c: 175,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [0.5],
    stretch: [0, 175],
    HDW: [0.59, -0.544, 0.5]
  };
  var o = {
    c: 710,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [0.5, 0.556, 1, 1.444, 1.889]
  };
  var i = {
    c: 732,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [0.5, 0.556, 1, 1.444, 1.889]
  };
  var a = {
    c: 8211,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [0.5],
    stretch: [0, 8211],
    HDW: [0.285, -0.248, 0.5]
  };
  var u = {
    c: 8592,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [1],
    stretch: [8592, 8722],
    HDW: exports.HDW3
  };
  var s = {
    c: 8594,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [1],
    stretch: [0, 8722, 8594],
    HDW: exports.HDW3
  };
  var l = {
    c: 8596,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [1],
    stretch: [8592, 8722, 8594],
    HDW: exports.HDW3
  };
  var c = {
    c: 8612,
    dir: fontDataDirectionConstants.horizontalDir,
    stretch: [8592, 8722, 8739],
    HDW: exports.HDW3,
    min: 1.278
  };
  var p = {
    c: 8614,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [1],
    stretch: [8739, 8722, 8594],
    HDW: exports.HDW3
  };
  var h = {
    c: 8656,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [1],
    stretch: [8656, 61],
    HDW: exports.HDW3
  };
  var f = {
    c: 8658,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [1],
    stretch: [0, 61, 8658],
    HDW: exports.HDW3
  };
  var d = {
    c: 8660,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [1],
    stretch: [8656, 61, 8658],
    HDW: exports.HDW3
  };
  var D = {
    c: 8722,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [0.778],
    stretch: [0, 8722],
    HDW: exports.HDW3
  };
  var L = {
    c: 8739,
    dir: fontDataDirectionConstants.verticalDir,
    sizes: [1],
    stretch: [0, 8739],
    HDW: [0.627, 0.015, 0.333]
  };
  var m = {
    c: 9180,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [0.778, 1],
    schar: [8994, 8994],
    variants: [5, 0],
    stretch: [57680, 57684, 57681],
    HDW: [0.32, 0.2, 0.5]
  };
  var y = {
    c: 9181,
    dir: fontDataDirectionConstants.horizontalDir,
    sizes: [0.778, 1],
    schar: [8995, 8995],
    variants: [5, 0],
    stretch: [57682, 57684, 57683],
    HDW: [0.32, 0.2, 0.5]
  };
  var H = {
    c: 9182,
    dir: fontDataDirectionConstants.horizontalDir,
    stretch: [57680, 57684, 57681, 57685],
    HDW: [0.32, 0.2, 0.5],
    min: 1.8
  };
  var v = {
    c: 9183,
    dir: fontDataDirectionConstants.horizontalDir,
    stretch: [57682, 57684, 57683, 57686],
    HDW: [0.32, 0.2, 0.5],
    min: 1.8
  };
  var g = {
    c: 10216,
    dir: fontDataDirectionConstants.verticalDir,
    sizes: exports.VSIZES
  };
  var b = {
    c: 10217,
    dir: fontDataDirectionConstants.verticalDir,
    sizes: exports.VSIZES
  };
  var E = {
    c: 10502,
    dir: fontDataDirectionConstants.horizontalDir,
    stretch: [8656, 61, 8739],
    HDW: exports.HDW3,
    min: 1.278
  };
  var C = {
    c: 10503,
    dir: fontDataDirectionConstants.horizontalDir,
    stretch: [8872, 61, 8658],
    HDW: exports.HDW3,
    min: 1.278
  };
  exports.delimiters = {
    40: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: exports.VSIZES,
      stretch: [9115, 9116, 9117],
      HDW: [0.85, 0.349, 0.875]
    },
    41: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: exports.VSIZES,
      stretch: [9118, 9119, 9120],
      HDW: [0.85, 0.349, 0.875]
    },
    45: D,
    47: T,
    61: {
      dir: fontDataDirectionConstants.horizontalDir,
      sizes: [0.778],
      stretch: [0, 61],
      HDW: exports.HDW3
    },
    91: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: exports.VSIZES,
      stretch: [9121, 9122, 9123],
      HDW: exports.HDW2
    },
    92: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: exports.VSIZES
    },
    93: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: exports.VSIZES,
      stretch: [9124, 9125, 9126],
      HDW: exports.HDW2
    },
    94: o,
    95: a,
    123: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: exports.VSIZES,
      stretch: [9127, 9130, 9129, 9128],
      HDW: [0.85, 0.349, 0.889]
    },
    124: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [1],
      stretch: [0, 8739],
      HDW: [0.75, 0.25, 0.333]
    },
    125: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: exports.VSIZES,
      stretch: [9131, 9130, 9133, 9132],
      HDW: [0.85, 0.349, 0.889]
    },
    126: i,
    175: n,
    710: o,
    713: n,
    732: i,
    770: o,
    771: i,
    818: a,
    8211: a,
    8212: a,
    8213: a,
    8214: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.602, 1],
      schar: [0, 8741],
      variants: [1, 0],
      stretch: [0, 8741],
      HDW: [0.602, 0, 0.556]
    },
    8215: a,
    8254: n,
    8407: s,
    8592: u,
    8593: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.888],
      stretch: [8593, 9168],
      HDW: [0.6, 0, 0.667]
    },
    8594: s,
    8595: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.888],
      stretch: [0, 9168, 8595],
      HDW: [0.6, 0, 0.667]
    },
    8596: l,
    8597: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [1.044],
      stretch: [8593, 9168, 8595],
      HDW: exports.HDW1
    },
    8606: {
      dir: fontDataDirectionConstants.horizontalDir,
      sizes: [1],
      stretch: [8606, 8722],
      HDW: exports.HDW3
    },
    8608: {
      dir: fontDataDirectionConstants.horizontalDir,
      sizes: [1],
      stretch: [0, 8722, 8608],
      HDW: exports.HDW3
    },
    8612: c,
    8613: {
      dir: fontDataDirectionConstants.verticalDir,
      stretch: [8593, 9168, 8869],
      HDW: exports.HDW1,
      min: 1.555
    },
    8614: p,
    8615: {
      dir: fontDataDirectionConstants.verticalDir,
      stretch: [8868, 9168, 8595],
      HDW: exports.HDW1,
      min: 1.555
    },
    8624: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.722],
      stretch: [8624, 9168],
      HDW: exports.HDW1
    },
    8625: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.722],
      stretch: [8625, 9168],
      HDW: exports.HDW1
    },
    8636: {
      dir: fontDataDirectionConstants.horizontalDir,
      sizes: [1],
      stretch: [8636, 8722],
      HDW: exports.HDW3
    },
    8637: {
      dir: fontDataDirectionConstants.horizontalDir,
      sizes: [1],
      stretch: [8637, 8722],
      HDW: exports.HDW3
    },
    8638: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.888],
      stretch: [8638, 9168],
      HDW: exports.HDW1
    },
    8639: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.888],
      stretch: [8639, 9168],
      HDW: exports.HDW1
    },
    8640: {
      dir: fontDataDirectionConstants.horizontalDir,
      sizes: [1],
      stretch: [0, 8722, 8640],
      HDW: exports.HDW3
    },
    8641: {
      dir: fontDataDirectionConstants.horizontalDir,
      sizes: [1],
      stretch: [0, 8722, 8641],
      HDW: exports.HDW3
    },
    8642: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.888],
      stretch: [0, 9168, 8642],
      HDW: exports.HDW1
    },
    8643: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.888],
      stretch: [0, 9168, 8643],
      HDW: exports.HDW1
    },
    8656: h,
    8657: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.888],
      stretch: [8657, 8214],
      HDW: [0.599, 0, 0.778]
    },
    8658: f,
    8659: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.888],
      stretch: [0, 8214, 8659],
      HDW: [0.6, 0, 0.778]
    },
    8660: d,
    8661: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [1.044],
      stretch: [8657, 8214, 8659],
      HDW: [0.75, 0.25, 0.778]
    },
    8666: {
      dir: fontDataDirectionConstants.horizontalDir,
      sizes: [1],
      stretch: [8666, 8801],
      HDW: [0.464, -0.036, 0.5]
    },
    8667: {
      dir: fontDataDirectionConstants.horizontalDir,
      sizes: [1],
      stretch: [0, 8801, 8667],
      HDW: [0.464, -0.036, 0.5]
    },
    8722: D,
    8725: T,
    8730: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: exports.VSIZES,
      stretch: [57345, 57344, 9143],
      fullExt: [0.65, 2.3],
      HDW: [0.85, 0.35, 1.056]
    },
    8739: L,
    8741: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [1],
      stretch: [0, 8741],
      HDW: [0.627, 0.015, 0.556]
    },
    8968: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: exports.VSIZES,
      stretch: [9121, 9122],
      HDW: exports.HDW2
    },
    8969: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: exports.VSIZES,
      stretch: [9124, 9125],
      HDW: exports.HDW2
    },
    8970: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: exports.VSIZES,
      stretch: [0, 9122, 9123],
      HDW: exports.HDW2
    },
    8971: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: exports.VSIZES,
      stretch: [0, 9125, 9126],
      HDW: exports.HDW2
    },
    8978: m,
    8994: m,
    8995: y,
    9001: g,
    9002: b,
    9130: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.32],
      stretch: [9130, 9130, 9130],
      HDW: [0.29, 0.015, 0.889]
    },
    9135: a,
    9136: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.989],
      stretch: [9127, 9130, 9133],
      HDW: [0.75, 0.25, 0.889]
    },
    9137: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.989],
      stretch: [9131, 9130, 9129],
      HDW: [0.75, 0.25, 0.889]
    },
    9140: {
      dir: fontDataDirectionConstants.horizontalDir,
      stretch: [9484, 8722, 9488],
      HDW: exports.HDW3,
      min: 1
    },
    9141: {
      dir: fontDataDirectionConstants.horizontalDir,
      stretch: [9492, 8722, 9496],
      HDW: exports.HDW3,
      min: 1
    },
    9168: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.602, 1],
      schar: [0, 8739],
      variants: [1, 0],
      stretch: [0, 8739],
      HDW: [0.602, 0, 0.333]
    },
    9180: m,
    9181: y,
    9182: H,
    9183: v,
    9184: {
      dir: fontDataDirectionConstants.horizontalDir,
      stretch: [714, 713, 715],
      HDW: [0.59, -0.544, 0.5],
      min: 1
    },
    9185: {
      dir: fontDataDirectionConstants.horizontalDir,
      stretch: [715, 713, 714],
      HDW: [0.59, -0.544, 0.5],
      min: 1
    },
    9472: a,
    10072: L,
    10216: g,
    10217: b,
    10222: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.989],
      stretch: [9127, 9130, 9129],
      HDW: [0.75, 0.25, 0.889]
    },
    10223: {
      dir: fontDataDirectionConstants.verticalDir,
      sizes: [0.989],
      stretch: [9131, 9130, 9133],
      HDW: [0.75, 0.25, 0.889]
    },
    10229: u,
    10230: s,
    10231: l,
    10232: h,
    10233: f,
    10234: d,
    10235: c,
    10236: p,
    10237: E,
    10238: C,
    10502: E,
    10503: C,
    10574: {
      dir: fontDataDirectionConstants.horizontalDir,
      stretch: [8636, 8722, 8640],
      HDW: exports.HDW3,
      min: 2
    },
    10575: {
      dir: fontDataDirectionConstants.verticalDir,
      stretch: [8638, 9168, 8642],
      HDW: exports.HDW1,
      min: 1.776
    },
    10576: {
      dir: fontDataDirectionConstants.horizontalDir,
      stretch: [8637, 8722, 8641],
      HDW: exports.HDW3,
      min: 2
    },
    10577: {
      dir: fontDataDirectionConstants.verticalDir,
      stretch: [8639, 9168, 8643],
      HDW: exports.HDW1,
      min: 0.5
    },
    10586: {
      dir: fontDataDirectionConstants.horizontalDir,
      stretch: [8636, 8722, 8739],
      HDW: exports.HDW3,
      min: 1.278
    },
    10587: {
      dir: fontDataDirectionConstants.horizontalDir,
      stretch: [8739, 8722, 8640],
      HDW: exports.HDW3,
      min: 1.278
    },
    10588: {
      dir: fontDataDirectionConstants.verticalDir,
      stretch: [8638, 9168, 8869],
      HDW: exports.HDW1,
      min: 1.556
    },
    10589: {
      dir: fontDataDirectionConstants.verticalDir,
      stretch: [8868, 9168, 8642],
      HDW: exports.HDW1,
      min: 1.556
    },
    10590: {
      dir: fontDataDirectionConstants.horizontalDir,
      stretch: [8637, 8722, 8739],
      HDW: exports.HDW3,
      min: 1.278
    },
    10591: {
      dir: fontDataDirectionConstants.horizontalDir,
      stretch: [8739, 8722, 8641],
      HDW: exports.HDW3,
      min: 1.278
    },
    10592: {
      dir: fontDataDirectionConstants.verticalDir,
      stretch: [8639, 9168, 8869],
      HDW: exports.HDW1,
      min: 1.776
    },
    10593: {
      dir: fontDataDirectionConstants.verticalDir,
      stretch: [8868, 9168, 8643],
      HDW: exports.HDW1,
      min: 1.776
    },
    12296: g,
    12297: b,
    65079: H,
    65080: v
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}