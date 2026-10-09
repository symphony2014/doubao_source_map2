// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'aiSpaceActionHandlers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.bea024bf.js
         * chunkId: 83145
         * moduleId: 748480
         */
module.exports = function (module, exports, require) {
  var aiSpaceImageEditUrlHandlerRegistry = require("ai-space-image-edit-url-handler-registry") /*id: 766654*/;
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  let o = [{
    matcher: e => e === aiActionConstants.aiActionConstants.AISpace_FileAIRead,
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-fileairead-url-parse-plugin") /*id: 43257*/]).then(require.bind(require, "ai-space-file-read-handler") /*id: 937900*/).then(t => {
      t.default(e);
    }),
    prehandler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-fileairead-url-parse-pre-plugin") /*id: 96799*/]).then(require.bind(require, "ai-space-file-read-url-parse-pre-plugin") /*id: 95475*/).then(t => t.default(e))
  }, {
    matcher: e => e === aiActionConstants.aiActionConstants.AISpace_LinkAIRead,
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-linkairead-url-parse-plugin") /*id: 72509*/]).then(require.bind(require, "ai-space-link-read-url-plugin") /*id: 117077*/).then(t => {
      t.default(e);
    }),
    prehandler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-linkairead-url-parse-pre-plugin") /*id: 23519*/]).then(require.bind(require, "ai-space-link-parse-pre-plugin") /*id: 250404*/).then(t => t.default(e))
  }, {
    matcher: e => e === aiActionConstants.aiActionConstants.AISpace_WordFileAIRead,
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-wordfileread-url-parse-plugin") /*id: 61906*/]).then(require.bind(require, "ai-space-word-file-read-handler") /*id: 492318*/).then(t => {
      t.default(e);
    }),
    prehandler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-wordfileread-url-parse-pre-plugin") /*id: 47742*/]).then(require.bind(require, "ai-space-file-parse-plugin") /*id: 317864*/).then(t => t.default(e))
  }, {
    matcher: e => e === aiActionConstants.aiActionConstants.AISpace_ExcelAIRead,
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("api-client-services") /*id: 26176*/, require.e("ai-space-excelairead-url-parse-plugin") /*id: 70942*/]).then(require.bind(require, "ai-space-excel-read-handler") /*id: 597958*/).then(t => {
      t.default(e);
    }),
    prehandler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("api-client-services") /*id: 26176*/, require.e("ai-space-excelairead-url-parse-pre-plugin") /*id: 11567*/]).then(require.bind(require, "ai-space-excelairead-url-parse-pre-plugin") /*id: 338708*/).then(t => t.default(e))
  }, {
    matcher: e => e === aiActionConstants.aiActionConstants.AISpace_ExcelCodeInterpreter,
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-excelcodeinter-url-parse-plugin") /*id: 15537*/]).then(require.bind(require, "ai-space-excelcodeinter-url-parse-plugin") /*id: 48986*/).then(t => {
      t.default(e);
    }),
    prehandler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-excelcodeinter-url-parse-pre-plugin") /*id: 13165*/]).then(require.bind(require, "ai-space-conversation-validator") /*id: 744601*/).then(t => t.default(e))
  }, {
    matcher: e => e === aiActionConstants.aiActionConstants.AISpace_ImageAskDoubao,
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-imageaskdoubao-url-parse-plugin") /*id: 6293*/]).then(require.bind(require, "ai-space-image-ask-doubao-handler") /*id: 703434*/).then(t => {
      t.default(e);
    })
  }, {
    matcher: e => e === aiActionConstants.aiActionConstants.AISpace_ImageCreate,
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-imagecreate-url-parse-plugin") /*id: 63494*/]).then(require.bind(require, "ai-space-image-create-handler") /*id: 175254*/).then(t => {
      t.default(e);
    }),
    prehandler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-imagecreate-url-parse-pre-plugin") /*id: 99002*/]).then(require.bind(require, "ai-space-image-url-pre-plugin") /*id: 431538*/).then(t => t.default(e))
  }, aiSpaceImageEditUrlHandlerRegistry.imageEditHandler, {
    matcher: e => e === aiActionConstants.aiActionConstants.AISpace_LinkAskDoubao,
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-linkaskdoubao-url-parse-plugin") /*id: 95510*/]).then(require.bind(require, "ai-space-link-askdoubao-handler") /*id: 163671*/).then(t => {
      t.default(e);
    }),
    prehandler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-linkaskdoubao-url-parse-pre-plugin") /*id: 56601*/]).then(require.bind(require, "ai-space-link-validate-plugin") /*id: 651328*/).then(t => t.default(e))
  }, {
    matcher: e => e === aiActionConstants.aiActionConstants.AISpace_FileAskDoubao,
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-fileaskdoubao-url-parse-plugin") /*id: 52765*/]).then(require.bind(require, "ai-space-file-ask-doubao-url-handler") /*id: 761512*/).then(t => {
      t.default(e);
    }),
    prehandler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-fileaskdoubao-url-parse-pre-plugin") /*id: 38351*/]).then(require.bind(require, "ai-space-fileaskdoubao-url-parse-pre-plugin") /*id: 710236*/).then(t => t.default(e))
  }, {
    matcher: e => [aiActionConstants.aiActionConstants.AISpace_AudioMindMap, aiActionConstants.aiActionConstants.AISpace_AudioRead, aiActionConstants.aiActionConstants.AISpace_VideoMindMap, aiActionConstants.aiActionConstants.AISpace_VideoSummary, aiActionConstants.aiActionConstants.AISpace_VideoRead, aiActionConstants.aiActionConstants.AISpace_AudioSummary].includes(e),
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-mediaread-url-parse-plugin") /*id: 69665*/]).then(require.bind(require, "ai-space-media-parse-plugin_1") /*id: 247960*/).then(t => {
      t.default(e);
    }),
    prehandler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("ai-space-mediaread-url-parse-pre-plugin") /*id: 4942*/]).then(require.bind(require, "ai-space-media-pre-plugin") /*id: 372784*/).then(t => t.default(e))
  }, {
    matcher: e => [aiActionConstants.aiActionConstants.AISpace_Coding_File, aiActionConstants.aiActionConstants.AISpace_Coding_Dir, aiActionConstants.aiActionConstants.AISpace_Coding_Artifact].includes(e),
    handler: e => {
      require.e("ai-space-coding-url-parse-plugin") /*id: 4258*/.then(require.bind(require, "ai-space-coding-url-parse") /*id: 891143*/).then(t => {
        t.default(e);
      });
    },
    prehandler: e => require.e("ai-space-coding-url-parse-pre-plugin") /*id: 51948*/.then(require.bind(require, "coding-url-pre-parse-plugin") /*id: 716594*/).then(t => t.default(e))
  }, {
    matcher: e => e === aiActionConstants.aiActionConstants.AISPace_ImageEditorAction,
    handler: e => require.e("ai-space-imageeditoraction-url-parse-plugin") /*id: 40815*/.then(require.bind(require, "ai-space-image-edit-url-action-handler") /*id: 657994*/).then(t => {
      t.default(e);
    })
  }];
  require.d(exports, {
    aiSpaceActionHandlers: function () {
      return o;
    }
  });
}