// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'imageEditHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 69318.ea56e137.js
         * chunkId: 69318
         * moduleId: 766654
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  let i = {
    matcher: e => e === aiActionConstants.aiActionConstants.AISpace_ImageEdit,
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-imageedit-url-parse-plugin") /*id: 57382*/]).then(require.bind(require, "ai-space-image-edit-url-handler") /*id: 734770*/).then(t => {
      t.default(e);
    }),
    prehandler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("api-client-services") /*id: 26176*/, require.e("ai-space-imageedit-url-parse-pre-plugin") /*id: 81263*/]).then(require.bind(require, "ai-space-image-url-resolver") /*id: 792494*/).then(t => t.default(e))
  };
  require.d(exports, {
    imageEditHandler: function () {
      return i;
    }
  });
}