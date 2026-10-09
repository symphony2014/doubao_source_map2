// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FM' to 'isPresentationMode'
// - Renamed export 'l_' to 'getPresentationViewportSize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 659285
         */
module.exports = function (module, exports, require) {
  require("docx-editor-core") /*id: 135760*/;
  require("browser-environment-detection-utils") /*id: 744607*/;
  require("doc-block-type-constants") /*id: 433991*/;
  require("doc-block-zoom-utils") /*id: 735944*/;
  require("block-flash-enhancement-manager") /*id: 710621*/;
  require("layout-manager-token") /*id: 709939*/;
  var viewStateTypeConstants = require("view-state-type-constants") /*id: 739915*/;
  function o() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  function a() {
    let e = o();
    let n = o().width * 0.075;
    let i = o().height * 0.075;
    return {
      width: e.width - n * 2,
      height: e.height - i * 2
    };
  }
  function s() {
    return !!document.querySelector(`.${viewStateTypeConstants.presentationMode}`);
  }
  require.d(exports, {
    isPresentationMode: function () {
      return s;
    },
    getPresentationViewportSize: function () {
      return a;
    }
  });
}