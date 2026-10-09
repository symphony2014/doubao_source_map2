// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'lastElementHelper'
// - Resolved require(715951) to 'last-element-helper'
// - Renamed variable 'r' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'o' to 'throttledOrderByUtil'
// - Resolved require(363890) to 'throttled-order-by-util'
// - Renamed variable 'a' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'l' to 'aliceChatService'
// - Resolved require(756668) to 'alice-chat-service'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'apiErrorChecker'
// - Resolved require(429379) to 'api-error-checker'
// - Renamed variable 'd' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 's' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable '_' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'v' to 'chatSkillPluginRegistry'
// - Resolved require(500651) to 'chat-skill-plugin-registry'
// - Renamed variable 'f' to 'artifactResourceLayout'
// - Resolved require(774071) to 'artifact-resource-layout'
// - Updated imported property 'EM' to 'AliceChatService' (module 756668)
// - Updated imported property 'k' to 'isApiError' (module 429379)
// - Updated imported property 'Z' to 'getLastElement' (module 715951)
// - Updated imported property '$' to 'ArtifactResource' (module 774071)
// - Updated imported property 'Ms' to 'inputToolButtonPlugin' (module 500651)
// - Updated imported property 'pJ' to 'toastInstance' (module 697541)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'Z' to 'throttledOrderBy' (module 363890)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-doccanvasopenurl-url-parse-plugin.631a7e5f.js
         * chunkId: 99709
         * moduleId: 286111
         */
module.exports = function (module, exports, require) {
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatSkillPluginRegistry = require("chat-skill-plugin-registry") /*id: 500651*/;
  var artifactResourceLayout = require("artifact-resource-layout") /*id: 774071*/;
  let p = async e => {
    try {
      let {
        code: t
      } = await (await aliceChatService.AliceChatService()).getConversationBasicInfo({
        conversation_id: e
      });
      return t !== 710022001;
    } catch (e) {
      if (apiErrorChecker.isApiError(e)) {
        return false;
      }
      throw e;
    }
  };
  let m = async e => {
    let {
      conversationId: t,
      artifacts: n,
      pagesId: r
    } = e;
    let o = n.filter(e => e.resource_id === r);
    let a = lastElementHelper.getLastElement(o);
    if (a && (a.resource_type === artifactResourceLayout.ArtifactResource.StepWritingPages || a.resource_type === artifactResourceLayout.ArtifactResource.Pages && (await chatSkillPluginRegistry.inputToolButtonPlugin({
      conversationId: t,
      artifacts: o
    })))) {
      return a;
    }
  };
  let g = async e => {
    let {
      conversationId: t,
      navigate: n,
      chatViewService: i
    } = e;
    if (!i) {
      throw Error("Chat view service is not injected");
    }
    return !!(await p(t)) || (samanthaToastFactory.toastInstance.warning(i18nTranslationUtils.i18nextTranslate("access_writing_doc_failure_for_chat_deletion_toast")), n("/chat", {
      replace: true
    }), i.closeCanvasPanel(), false);
  };
  let y = async e => {
    let {
      payload: t = {},
      navigate: n,
      chatViewService: i
    } = e;
    try {
      if (!("pages_id" in t) || !isStringTypeCheck.isString(t.pages_id)) {
        throw Error("Bad payload format");
      }
      let {
        pages_id: e
      } = t;
      let {
        chatId: u
      } = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig ?? {};
      if (!u || !i || !e) {
        throw Error("Empty chat or doc related value");
      }
      let c = null;
      g({
        conversationId: u,
        navigate: n,
        chatViewService: i
      }).then(e => {
        c = e;
      });
      let {
        data: s = {}
      } = await apiServicesCollection.SamanthaApiService.SearchArtifact({
        conversation_id: u
      });
      let _ = throttledOrderByUtil.throttledOrderBy(s.artifacts, e => e.resource_version);
      let v = await m({
        conversationId: u,
        artifacts: _,
        pagesId: e
      });
      if (!v) {
        throw Error(`Cannot find related artifact by pagesId: ${e}`);
      }
      if (c === false) {
        throw Error("Conversation is not exists and skip open");
      }
      let {
        artifact_id: p = "",
        artifact_key: y = "",
        resource_type: h,
        resource_id: b
      } = v;
      if (h === artifactResourceLayout.ArtifactResource.WriteDoc || h === artifactResourceLayout.ArtifactResource.Pages || !h) {
        i.openCanvasPanel({
          type: h ?? artifactResourceLayout.ArtifactResource.Pages,
          conversationId: u,
          messageId: "",
          artifactId: p,
          artifactKey: h === artifactResourceLayout.ArtifactResource.WriteDoc ? undefined : y,
          autoRefresh: true
        });
        return;
      }
      if (h === artifactResourceLayout.ArtifactResource.StepWritingPages && b) {
        i.openCanvasPanel({
          type: h,
          conversationId: u,
          messageId: "",
          artifactId: b,
          artifactKey: b,
          autoRefresh: false
        });
        return;
      }
      throw Error(`Resource type of ${h} is invalid, related with pages_id: ${e}`);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "open_doc_canvas_by_url_action_error",
        error: e,
        meta: {
          ...t
        }
      });
    }
  };
  exports.default = y;
  require.r(exports);
}