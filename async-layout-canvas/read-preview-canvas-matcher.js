// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'readPreviewConstant'
// - Resolved require(22478) to 'read-preview-constant'
// - Updated imported property 'w' to 'readPreview' (module 22478)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 545841
         */
module.exports = function (module, exports, require) {
  var readPreviewConstant = require("read-preview-constant") /*id: 22478*/;
  let r = e => {
    let {
      readContent: t
    } = e;
    if (t) {
      return readPreviewConstant.readPreview;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    ReadPreviewCanvasPluginMatcher: function () {
      return r;
    }
  });
}