// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bk' to 'enableSnap'
// - Renamed export 'Eb' to 'snapValue'
// - Renamed export 'ZP' to 'adjustLineCoords'
// - Renamed export 'ux' to 'snapRectCoords'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 574355
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var r = false;
  function o() {
    r = true;
  }
  function a(t) {
    return Math.floor(t) + 0.5;
  }
  function s(t) {
    if (r) {
      if (Math.abs(t.x1 - t.x2) < 0.0001) {
        t.x1 = t.x2 = a(t.x1);
      }
      if (Math.abs(t.y1 - t.y2) < 0.0001) {
        t.y1 = t.y2 = a(t.y1);
      }
      return t;
    }
  }
  function h(t) {
    if (t && isNumberUtil.isNumber(t.x) && isNumberUtil.isNumber(t.y)) {
      var e = t.x;
      var n = t.y;
      var r = t.width;
      var o = t.height;
      t.x = a(t.x);
      t.y = a(t.y);
      var s = Math.round(e + r) + 0.5;
      var h = Math.round(n + o) + 0.5;
      if (t.width > 0 && t.height > 0) {
        t.width = s - t.x;
        t.height = h - t.y;
      }
    }
    return t;
  }
  require.d(exports, {
    enableSnap: function () {
      return o;
    },
    snapValue: function () {
      return a;
    },
    adjustLineCoords: function () {
      return s;
    },
    snapRectCoords: function () {
      return h;
    }
  });
}