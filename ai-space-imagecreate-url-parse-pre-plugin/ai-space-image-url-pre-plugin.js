// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 'i' to 'checkConversationValid'
// - Resolved require(131485) to 'check-conversation-valid'
// - Renamed variable 'a' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'r' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 's' to 'aiSpaceFileUrlResolver'
// - Resolved require(550880) to 'ai-space-file-url-resolver'
// - Updated imported property 'SI' to 'ResourceApiService' (module 147875)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property '$s' to 'validateImages' (module 900956)
// - Updated imported property 'm' to 'resolveFileUrls' (module 550880)
// - Updated imported property 'R' to 'isConversationValid' (module 131485)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-imagecreate-url-parse-pre-plugin.4590ed45.js
         * chunkId: 99002
         * moduleId: 431538
         */
module.exports = function (module, exports, require) {
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let l = async (n, e) => {
    try {
      let {
        data: i
      } = await apiServicesCollection.ResourceApiService.GetFileURL({
        uris: [n],
        type: e
      });
      let {
        main_url: r,
        back_url: l
      } = (i == null ? undefined : i.file_urls?.[0]) ?? {};
      return r || l || "";
    } catch (n) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "GetFileURLApiError",
        error: n
      });
    }
    return "";
  };
  var aiSpaceFileUrlResolver = require("ai-space-file-url-resolver") /*id: 550880*/;
  async function _(n) {
    let {
      payload: e,
      preSendConversationId: t
    } = n;
    if (t) {
      return {};
    }
    if (!aiSpaceInputValidators.validateImages(e)) {
      return;
    }
    let {
      images: a,
      isSpaceNext: r
    } = e;
    let _ = a[0];
    if (!_) {
      return;
    }
    let {
      nodeId: d,
      conversationId: c,
      shareId: u,
      uri: v
    } = _;
    let [p, m] = await Promise.all([r ? l(v, "image") : aiSpaceFileUrlResolver.resolveFileUrls([d], u), checkConversationValid.isConversationValid(c)]);
    let y = r ? p : p == null ? undefined : p[d];
    if (y) {
      return {
        conversationId: m ? c : undefined,
        url: y
      };
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return _;
    }
  });
}