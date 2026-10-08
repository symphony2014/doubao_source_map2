// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'i' to 'promiseAsyncUtilities'
// - Resolved require(592307) to 'promise-async-utilities'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'r' to 'excelCodeInterConstant'
// - Resolved require(374747) to 'excel-code-inter-constant'
// - Renamed variable 'l' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 's' to 'aiSpaceExcelCodeInterpreterUrlParser'
// - Resolved require(806208) to 'ai-space-excel-code-interpreter-url-parser'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'qH' to 'validateFiles' (module 900956)
// - Updated imported property 'GR' to 'createDelayedPromise' (module 592307)
// - Updated imported property 'o' to 'excelUrlParseConst' (module 374747)
// - Updated imported property 'k' to 'parseExcelCodeInterpreterUrl' (module 806208)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-excelcodeinter-url-parse-plugin.ba48918d.js
         * chunkId: 15537
         * moduleId: 48986
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var excelCodeInterConstant = require("excel-code-inter-constant") /*id: 374747*/;
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var aiSpaceExcelCodeInterpreterUrlParser = require("ai-space-excel-code-interpreter-url-parser") /*id: 806208*/;
  async function _(e) {
    let {
      payload: n,
      sendMessage: t,
      navigate: _,
      phase3EndTime: d,
      prehandlerData: c = {},
      preSendConversationId: u
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_AISpaceExcelCodeInterpreterHandlerStart"
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - d,
        plugin: aiActionConstants.aiActionConstants.AISpace_ExcelCodeInterpreter
      }
    });
    let v = Date.now();
    if (!aiSpaceInputValidators.validateFiles(n)) {
      return;
    }
    let {
      files: p,
      needBindConversation: m,
      isSpaceNext: y
    } = n;
    if (!p[0]) {
      return;
    }
    let h = u || c.conversationId;
    if (h) {
      _(`/chat/${h}`, {
        replace: true
      });
      await promiseAsyncUtilities.createDelayedPromise(excelCodeInterConstant.excelUrlParseConst);
    } else {
      let e = await aiSpaceExcelCodeInterpreterUrlParser.parseExcelCodeInterpreterUrl({
        payload: n,
        needBindConversation: m,
        isSpaceNext: y
      });
      if (e) {
        t(e, undefined, false);
      }
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - v,
        plugin: aiActionConstants.aiActionConstants.AISpace_ExcelCodeInterpreter
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return _;
    }
  });
}