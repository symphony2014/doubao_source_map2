// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'chatActionLayoutConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 43144
         */
module.exports = function (module, exports, require) {
  var layoutSizeConstants = require("layout-size-constants") /*id: 416118*/;
  let r = [{
    key: "extra",
    priority: 1,
    keep: true
  }, {
    key: "streaming-loading",
    priority: 1,
    keep: true
  }, {
    key: "undo-redo",
    priority: 1,
    keep: true
  }, {
    key: "transfer",
    priority: 2,
    keep: true
  }, {
    key: "download",
    priority: 3,
    keep: true
  }, {
    key: "copy_all",
    priority: 4,
    keep: true
  }, {
    key: "copy_all",
    priority: 5,
    renderSize: layoutSizeConstants.LayoutSizes.Medium
  }, {
    key: "download",
    priority: 5,
    renderSize: layoutSizeConstants.LayoutSizes.Medium
  }, {
    key: "transfer",
    priority: 5,
    renderSize: layoutSizeConstants.LayoutSizes.Medium
  }, {
    key: "extra",
    renderSize: layoutSizeConstants.LayoutSizes.Medium,
    priority: 5
  }, {
    key: "collab",
    priority: 6
  }, {
    key: "edit-time",
    priority: 7
  }, {
    key: "edit-time",
    renderSize: layoutSizeConstants.LayoutSizes.Medium,
    priority: 8
  }, {
    key: "collab",
    renderSize: layoutSizeConstants.LayoutSizes.Small,
    priority: 9
  }, {
    key: "collab",
    renderSize: layoutSizeConstants.LayoutSizes.Medium,
    priority: 10
  }, {
    key: "docx-title",
    priority: 11
  }];
  require.d(exports, {
    chatActionLayoutConfig: function () {
      return r;
    }
  });
}