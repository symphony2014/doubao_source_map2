// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getDOMNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 285330
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  function o(e) {
    if (e instanceof HTMLElement) {
      return e;
    } else {
      return reactDomEntryWrapper.findDOMNode(e);
    }
  }
  require.d(exports, {
    getDOMNode: function () {
      return o;
    }
  });
}