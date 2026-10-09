// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'kE' to 'getPageMainOffset'
// - Renamed export 'pv' to 'hasElementClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 117264
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  function i(e, n) {
    return e && e.classList && isFunctionUtil_1.isFunction(e.classList.contains) && e.classList.contains(n);
  }
  function l() {
    let e = document.querySelector(".page-main");
    return (e == null ? undefined : e.offsetTop) || 0;
  }
  require.d(exports, {
    getPageMainOffset: function () {
      return l;
    },
    hasElementClass: function () {
      return i;
    }
  });
}