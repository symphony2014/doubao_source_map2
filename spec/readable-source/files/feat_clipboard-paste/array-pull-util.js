// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'pullFromArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ratio-whiteboard-canvas.13708e80.js
         * chunkId: 6682
         * moduleId: 768626
         */
module.exports = function (module, exports, require) {
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var arrayFindIndexNan = require("array-find-index-nan") /*id: 806028*/;
  function i(e, t, o, n) {
    var r = o - 1;
    var i = e.length;
    while (++r < i) {
      if (n(e[r], t)) {
        return r;
      }
    }
    return -1;
  }
  var identityWrapper = require("identity-wrapper") /*id: 160775*/;
  var arrayCopyUtil = require("array-copy-util") /*id: 996367*/;
  var l = Array.prototype.splice;
  function c(e, t, o, c) {
    var u = c ? i : arrayFindIndexNan.findIndexWithNaN;
    var p = -1;
    var d = t.length;
    var f = e;
    if (e === t) {
      t = arrayCopyUtil.copyArray(t);
    }
    if (o) {
      f = arrayMapUtil.arrayMap(e, identityWrapper.createWrapper(o));
    }
    while (++p < d) {
      var y = 0;
      var h = t[p];
      var g = o ? o(h) : h;
      while ((y = u(f, g, y, c)) > -1) {
        if (f !== e) {
          l.call(f, y, 1);
        }
        l.call(e, y, 1);
      }
    }
    return e;
  }
  function u(e, t) {
    if (e && e.length && t && t.length) {
      return c(e, t);
    } else {
      return e;
    }
  }
  require.d(exports, {
    pullFromArray: function () {
      return u;
    }
  });
}