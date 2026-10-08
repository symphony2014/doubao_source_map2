// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'px' to 'formatPx'
// - Renamed export 'em' to 'formatEm'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 839822
         */
module.exports = function (module, exports, require) {
  exports.formatPx = exports.emRounded = exports.formatEm = exports.percent = exports.length2em = exports.MATHSPACE = exports.RELUNITS = exports.UNITS = exports.BIGDIMEN = undefined;
  exports.BIGDIMEN = 1000000;
  exports.UNITS = {
    px: 1,
    in: 96,
    cm: 96 / 2.54,
    mm: 96 / 25.4
  };
  exports.RELUNITS = {
    em: 1,
    ex: 0.431,
    pt: 0.1,
    pc: 1.2,
    mu: 1 / 18
  };
  exports.MATHSPACE = {
    veryverythinmathspace: 1 / 18,
    verythinmathspace: 2 / 18,
    thinmathspace: 3 / 18,
    mediummathspace: 4 / 18,
    thickmathspace: 5 / 18,
    verythickmathspace: 6 / 18,
    veryverythickmathspace: 7 / 18,
    negativeveryverythinmathspace: -1 / 18,
    negativeverythinmathspace: -2 / 18,
    negativethinmathspace: -3 / 18,
    negativemediummathspace: -4 / 18,
    negativethickmathspace: -5 / 18,
    negativeverythickmathspace: -6 / 18,
    negativeveryverythickmathspace: -7 / 18,
    thin: 0.04,
    medium: 0.06,
    thick: 0.1,
    normal: 1,
    big: 2,
    small: 1 / Math.sqrt(2),
    infinity: exports.BIGDIMEN
  };
  exports.length2em = function (t, Q = 0, r = 1, T = 16) {
    if (typeof t != "string") {
      t = String(t);
    }
    if (t === "" || t == null) {
      return Q;
    }
    if (exports.MATHSPACE[t]) {
      return exports.MATHSPACE[t];
    }
    var n = t.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/);
    if (!n) {
      return Q;
    }
    var o = parseFloat(n[1] || "1");
    var i = n[2];
    if (exports.UNITS.hasOwnProperty(i)) {
      return o * exports.UNITS[i] / T / r;
    } else if (exports.RELUNITS.hasOwnProperty(i)) {
      return o * exports.RELUNITS[i];
    } else if (i === "%") {
      return o / 100 * Q;
    } else {
      return o * Q;
    }
  };
  exports.percent = function (t) {
    return (t * 100).toFixed(1).replace(/\.?0+$/, "") + "%";
  };
  exports.formatEm = function (t) {
    if (Math.abs(t) < 0.001) {
      return "0";
    } else {
      return t.toFixed(3).replace(/\.?0+$/, "") + "em";
    }
  };
  exports.emRounded = function (t, e = 16) {
    if (Math.abs(t = (Math.round(t * e) + 0.05) / e) < 0.001) {
      return "0em";
    } else {
      return t.toFixed(3).replace(/\.?0+$/, "") + "em";
    }
  };
  exports.formatPx = function (t, Q = -exports.BIGDIMEN, r = 16) {
    t *= r;
    if (Q && t < Q) {
      t = Q;
    }
    if (Math.abs(t) < 0.1) {
      return "0";
    } else {
      return t.toFixed(1).replace(/\.0$/, "") + "px";
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}