// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E8' to 'maxCaptionLines'
// - Renamed export 'Oo' to 'titleFontSize'
// - Renamed export 'T_' to 'subtitleFontSize'
// - Renamed export 'Uj' to 'coverMaxWidth'
// - Renamed export 'gL' to 'maskOpacity'
// - Renamed export 'hc' to 'wrapperClass'
// - Renamed export 'hp' to 'aiCoverClass'
// - Renamed export 'su' to 'minHeight'
// - Renamed export 'wV' to 'CoverState'
// - Renamed export 'zm' to 'borderRadius'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 338988
         */
module.exports = function (module, exports, require) {
  var n;
  let o = 5;
  let l = 12;
  let s = 520;
  let a = 120;
  let c = "doc-cover-wrapper";
  let d = 0.32;
  let u = 24;
  let h = 36;
  (n = {})[n.UNKNOWN_STATE = 0] = "UNKNOWN_STATE";
  n[n.OPEN = 1] = "OPEN";
  n[n.CLOSED = 2] = "CLOSED";
  let f = n;
  let g = "ai-cover";
  require.d(exports, {
    maxCaptionLines: function () {
      return o;
    },
    titleFontSize: function () {
      return h;
    },
    subtitleFontSize: function () {
      return u;
    },
    coverMaxWidth: function () {
      return s;
    },
    maskOpacity: function () {
      return d;
    },
    wrapperClass: function () {
      return c;
    },
    aiCoverClass: function () {
      return g;
    },
    minHeight: function () {
      return a;
    },
    CoverState: function () {
      return f;
    },
    borderRadius: function () {
      return l;
    }
  });
}