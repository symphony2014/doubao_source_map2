// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S2' to 'getRAF'
// - Renamed export 'V_' to 'setRAF'
// - Renamed export 'x5' to 'getCancelRAF'
// - Renamed export 'zC' to 'setCancelRAF'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 87149
         */
module.exports = function (module, exports, require) {
  var i = 0;
  var r = typeof window != "undefined" && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame);
  var o = typeof window != "undefined" && (window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame);
  var a = r ? r.bind(window) : function (t) {
    var e = new Date().getTime();
    var n = Math.max(0, 16 - (e - i));
    var r = setTimeout(function () {
      t(e + n);
    }, n);
    i = e + n;
    return r;
  };
  var s = o ? o.bind(window) : function (t) {
    clearTimeout(t);
  };
  function h(t) {
    a = t;
  }
  function l(t) {
    s = t;
  }
  function u() {
    return a;
  }
  function c() {
    return s;
  }
  require.d(exports, {
    getRAF: function () {
      return u;
    },
    setRAF: function () {
      return h;
    },
    getCancelRAF: function () {
      return c;
    },
    setCancelRAF: function () {
      return l;
    }
  });
}