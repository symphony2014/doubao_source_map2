// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Re' to 'isHTMLElement'
// - Renamed export 'Zq' to 'isShadowRoot'
// - Renamed export 'kK' to 'isElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 966927
         */
module.exports = function (module, exports, require) {
  var getWindowUtil = require("get-window-util") /*id: 374363*/;
  function r(e) {
    var t = getWindowUtil.getWindow(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function i(e) {
    var t = getWindowUtil.getWindow(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function u(e) {
    if (typeof ShadowRoot == "undefined") {
      return false;
    }
    var t = getWindowUtil.getWindow(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  require.d(exports, {
    isHTMLElement: function () {
      return i;
    },
    isShadowRoot: function () {
      return u;
    },
    isElement: function () {
      return r;
    }
  });
}