// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Vp' to 'getVisibleHeight'
// - Renamed export 'aZ' to 'getScrollHeight'
// - Renamed export 'cx' to 'getScrollTop'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 884985
         */
module.exports = function (module, exports, require) {
  function n(e) {
    if (e instanceof HTMLElement) {
      return e.scrollTop;
    } else if (e instanceof Document && e.scrollingElement) {
      return e.scrollingElement.scrollTop;
    } else {
      return window.scrollY;
    }
  }
  function o(e) {
    if (e instanceof HTMLElement) {
      return e.offsetHeight;
    } else if (e instanceof Document && e.scrollingElement) {
      return e.scrollingElement.offsetHeight;
    } else {
      return window.innerHeight;
    }
  }
  function l(e) {
    if (e instanceof HTMLElement) {
      return e.scrollHeight;
    } else if (e instanceof Document && e.scrollingElement) {
      return e.scrollingElement.scrollHeight;
    } else {
      return document.documentElement.scrollHeight;
    }
  }
  require.d(exports, {
    getVisibleHeight: function () {
      return o;
    },
    getScrollHeight: function () {
      return l;
    },
    getScrollTop: function () {
      return n;
    }
  });
}