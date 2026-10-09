// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'getContentSize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 913591
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  function r(t) {
    var e = getComputedStyle(t);
    var n = e.paddingTop;
    var r = e.paddingLeft;
    var o = e.paddingRight;
    var a = e.paddingBottom;
    var s = e.width;
    var h = e.height;
    return [(isNumberUtil.isNumber(t.clientWidth) ? t.clientWidth : parseInt(s, 10)) - parseFloat(r || "0") - parseFloat(o || "0"), (isNumberUtil.isNumber(t.clientHeight) ? t.clientHeight : parseInt(h, 10)) - parseFloat(n || "0") - parseFloat(a || "0")];
  }
  require.d(exports, {
    getContentSize: function () {
      return r;
    }
  });
}