// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'i' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 'r' to 'getFileUrlsCache'
// - Resolved require(109992) to 'get-file-urls-cache'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property '$s' to 'validateImages' (module 900956)
// - Updated imported property 'o' to 'getFileUrls' (module 109992)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-imageaskdoubao-url-parse-plugin.99b3029f.js
         * chunkId: 6293
         * moduleId: 703434
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var getFileUrlsCache = require("get-file-urls-cache") /*id: 109992*/;
  async function l(n) {
    let {
      payload: o,
      navigate: e,
      phase3EndTime: l,
      addAttachmentDirectly: s
    } = n;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_AISpaceImageAskDoubaoHandlerStart"
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - l,
        plugin: aiActionConstants.aiActionConstants.AISpace_ImageAskDoubao
      }
    });
    let p = Date.now();
    if (!aiSpaceInputValidators.validateImages(o)) {
      return;
    }
    let {
      images: u
    } = o;
    let z = u[0];
    if (!z) {
      return;
    }
    let {
      uri: c,
      name: d,
      size: g
    } = z;
    let f = await getFileUrlsCache.getFileUrls([c], "image");
    let b = f == null ? undefined : f[c];
    s({
      type: "image",
      from: "ai_space",
      fileName: d,
      fileKey: c,
      size: g,
      blobUrl: b,
      url: b
    });
    e("/chat/", {
      replace: true
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - p,
        plugin: aiActionConstants.aiActionConstants.AISpace_ImageAskDoubao
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return l;
    }
  });
}