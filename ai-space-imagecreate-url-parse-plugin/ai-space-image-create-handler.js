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
// - Renamed variable '_' to 'aiSpaceImageGenerationRequestBuilder'
// - Resolved require(419450) to 'ai-space-image-generation-request-builder'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property '$s' to 'validateImages' (module 900956)
// - Updated imported property 'GR' to 'createDelayedPromise' (module 592307)
// - Updated imported property 'o' to 'excelUrlParseConst' (module 374747)
// - Updated imported property 'k' to 'buildImageGenerationRequest' (module 419450)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-imagecreate-url-parse-plugin.8344fdc1.js
         * chunkId: 63494
         * moduleId: 175254
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var excelCodeInterConstant = require("excel-code-inter-constant") /*id: 374747*/;
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var aiSpaceImageGenerationRequestBuilder = require("ai-space-image-generation-request-builder") /*id: 419450*/;
  async function s(e) {
    let {
      payload: n,
      sendMessage: t,
      navigate: s,
      sendMessageV2: d,
      phase3EndTime: u,
      prehandlerData: c = {},
      preSendConversationId: v
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_AISpaceImageCreateHandlerStart"
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - u,
        plugin: aiActionConstants.aiActionConstants.AISpace_ImageCreate
      }
    });
    let p = Date.now();
    if (!aiSpaceInputValidators.validateImages(n)) {
      return;
    }
    let {
      images: m,
      needBindConversation: y,
      isSpaceNext: g
    } = n;
    let h = m[0];
    if (!h) {
      return;
    }
    let f = v || c.conversationId;
    if (f) {
      s(`/chat/${f}`, {
        replace: true
      });
      await promiseAsyncUtilities.createDelayedPromise(excelCodeInterConstant.excelUrlParseConst);
    } else {
      let e = await aiSpaceImageGenerationRequestBuilder.buildImageGenerationRequest({
        payload: n,
        shareId: h.shareId,
        needBindConversation: y,
        isSpaceNext: g
      });
      if (e) {
        t(e, undefined, false);
      }
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - p,
        plugin: aiActionConstants.aiActionConstants.AISpace_ImageCreate
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return s;
    }
  });
}