// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'o' to 'promiseAsyncUtilities'
// - Resolved require(592307) to 'promise-async-utilities'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'r' to 'excelCodeInterConstant'
// - Resolved require(374747) to 'excel-code-inter-constant'
// - Renamed variable 'l' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 's' to 'aiSpaceFileReadPdfHandler'
// - Resolved require(937395) to 'ai-space-file-read-pdf-handler'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'qH' to 'validateFiles' (module 900956)
// - Updated imported property 'GR' to 'createDelayedPromise' (module 592307)
// - Updated imported property 'o' to 'excelUrlParseConst' (module 374747)
// - Updated imported property 'k' to 'handleAiSpaceFileRead' (module 937395)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-excelairead-url-parse-plugin.33351e1f.js
         * chunkId: 70942
         * moduleId: 597958
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var excelCodeInterConstant = require("excel-code-inter-constant") /*id: 374747*/;
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var aiSpaceFileReadPdfHandler = require("ai-space-file-read-pdf-handler") /*id: 937395*/;
  async function c(e) {
    let {
      payload: t,
      sendMessage: n,
      sendMessageV2: c,
      navigate: d,
      phase3EndTime: _,
      prehandlerData: u = {},
      preSendConversationId: v
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_AISpaceExcelAIReadHandlerStart"
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - _,
        plugin: aiActionConstants.aiActionConstants.AISpace_ExcelAIRead
      }
    });
    let p = Date.now();
    if (!aiSpaceInputValidators.validateFiles(t)) {
      return;
    }
    let {
      files: m,
      needBindConversation: y,
      isSpaceNext: f
    } = t;
    if (!m[0]) {
      return;
    }
    let g = v || u.conversationId;
    if (g) {
      d(`/chat/${g}`, {
        replace: true
      });
      await promiseAsyncUtilities.createDelayedPromise(excelCodeInterConstant.excelUrlParseConst);
    } else {
      let e = await aiSpaceFileReadPdfHandler.handleAiSpaceFileRead({
        payload: t,
        needBindConversation: y,
        isSpaceNext: f
      });
      if (e) {
        n(e, undefined, false);
      }
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - p,
        plugin: aiActionConstants.aiActionConstants.AISpace_ExcelAIRead
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return c;
    }
  });
}