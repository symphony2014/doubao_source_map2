// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'o' to 'localRegenCheck'
// - Resolved require(965069) to 'local-regen-check'
// - Renamed variable 'a' to 'ttsAudioPlayerButton'
// - Resolved require(688444) to 'tts-audio-player-button'
// - Renamed variable 's' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'l' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'u' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'flowApiConfigManager'
// - Resolved require(691950) to 'flow-api-config-manager'
// - Renamed variable 'f' to 'reactDeepMemoHook'
// - Resolved require(196129) to 'react-deep-memo-hook'
// - Renamed variable 'p' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable 'h' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'm' to 'dbxSonnerToasterWrapper'
// - Resolved require(682910) to 'dbx-sonner-toaster-wrapper'
// - Renamed variable 'v' to 'aiPodcastContentUtils'
// - Resolved require(942305) to 'ai-podcast-content-utils'
// - Renamed variable 'y' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'x' to 'reduxDevtoolsPersistIntegration_1'
// - Resolved require(688840) to 'redux-devtools-persist-integration_1'
// - Renamed variable 'b' to 'reactStoreFactory'
// - Resolved require(960791) to 'react-store-factory'
// - Renamed variable '_' to 'immerCoreImplementation'
// - Resolved require(828474) to 'immer-core-implementation'
// - Renamed variable 'C' to 'storagePersistenceUtil'
// - Resolved require(143136) to 'storage-persistence-util'
// - Renamed variable 'L' to 'downgradeConfigStore'
// - Resolved require(489677) to 'downgrade-config-store'
// - Renamed variable 'j' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'A' to 'infraTtsMessageActionSymbol'
// - Resolved require(653278) to 'infra-tts-message-action-symbol'
// - Updated imported property 'T5' to 'isAiPodcastContent' (module 942305)
// - Updated imported property 'rP' to 'getPodcastWaiting' (module 942305)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Uy' to 'produce' (module 828474)
// - Updated imported property 'C1' to 'createPersistOptions' (module 143136)
// - Updated imported property 'tJ' to 'persistMiddleware' (module 688840)
// - Updated imported property 'XR' to 'withDevToolsEnhancer' (module 688840)
// - Updated imported property 'mW' to 'devToolsMiddleware' (module 688840)
// - Updated imported property 'Ue' to 'createStore' (module 960791)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'N' to 'useDeepMemo' (module 196129)
// - Updated imported property 'ce' to 'getLastMessageInfo' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'b' to 'shouldRegenerate' (module 965069)
// - Updated imported property 'Z' to 'TtsAudioPlayerButton' (module 688444)
// - Updated imported property 'GZ' to 'getFlowApiOptions' (module 691950)
// - Updated imported property 'pJ' to 'toastInstance' (module 697541)
// - Updated imported property 'Y' to 'getDowngradeConfig' (module 489677)
// - Updated imported property 'B' to 'ttsReceiveAction' (module 653278)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action.abe50cdd.js
         * chunkId: 72995
         * moduleId: 353781
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var ttsAudioPlayerButton = require("tts-audio-player-button") /*id: 688444*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var flowApiConfigManager = require("flow-api-config-manager") /*id: 691950*/;
  var reactDeepMemoHook = require("react-deep-memo-hook") /*id: 196129*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  let g = e => aiPodcastContentUtils.isAiPodcastContent(e) ? aiPodcastContentUtils.getPodcastWaiting(e) || "" : e.tts_content || "";
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var storagePersistenceUtil = require("storage-persistence-util") /*id: 143136*/;
  let w = e => {
    try {
      return {
        currentVoice: e.currentVoice
      };
    } catch (t) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "[@chat-voice-store] persist state limit error",
        error: t instanceof Error ? t : Error(String(t))
      });
      return {
        currentVoice: e.currentVoice
      };
    }
  };
  let S = {
    currentVoice: {
      id: "104",
      style_id: "zh_female_taozi_conversation_v4_wvae_bigtts",
      name: "温柔桃子",
      avatarUrl: "data:image/png;base64,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",
      preview: {
        previewMp3Url: "",
        previewText: ""
      },
      tags: [],
      pitch: 0,
      speechRate: 1
    }
  };
  let E = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    let [r] = t;
    return {
      ...S,
      updateCurrentVoice: e => {
        r(immerCoreImplementation.produce(t => {
          t.currentVoice = e;
        }));
      }
    };
  };
  let T = e => {
    let {
      prefix: t,
      isEnableDebug: n,
      reduxDevToolsSnapshot: r,
      merge: i,
      partialize: o,
      storage: a
    } = e;
    let s = storagePersistenceUtil.createPersistOptions({
      name: "chat-voice-store",
      prefix: t || "default",
      merge: i,
      partialize: o ?? w,
      storage: a
    });
    let l = reduxDevtoolsPersistIntegration_1.persistMiddleware(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(E), s);
    if (n && r) {
      return reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.devToolsMiddleware(l, {
        name: `${t}-chat-voice-store`
      }));
    } else {
      return reactStoreFactory.createStore()(l);
    }
  };
  let k = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    let {
      _useChatVoiceStore: r
    } = k.prototype;
    if (!r) {
      (function (e) {
        let {
          _useChatVoiceStore: t
        } = k.prototype || {};
        if (!t) {
          let t = T({
            ...e
          });
          Object.setPrototypeOf(k.prototype, t);
          Object.defineProperties(k, {
            ...Object.getOwnPropertyDescriptors(t)
          });
          k.prototype._useChatVoiceStore = t;
        }
      })({});
    }
    let {
      _useChatVoiceStore: i
    } = k.prototype;
    if (i) {
      return i(...t);
    }
    throw Error("useChatVoiceStore is not initialized");
  };
  let M = function (e, t = deepEqualityUtil_1.isDeepEqual) {
    let n = function () {
      var n = arguments.length;
      var r = Array(n);
      var i = 0;
      for (; i < n; i++) {
        r[i] = arguments[i];
      }
      return k(t => e(t, ...r), t);
    };
    n.raw = e;
    return n;
  }(e => e.currentVoice);
  var downgradeConfigStore = require("downgrade-config-store") /*id: 489677*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let I = e => {
    let {
      message: n
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let y = M();
    let x = reactCoreLibraryReexport.useMemo(() => ({
      flow_web_ext_action_popup_TTS_pause_hover: v("flow_web_ext_action_popup_TTS_pause_hover"),
      flow_web_ext_action_popup_TTS_hover: v("flow_web_ext_action_popup_TTS_hover")
    }), [v]);
    let b = reactDeepMemoHook.useDeepMemo(() => {
      let {
        lastAvailableMessage: t
      } = conversationMessageUtils_1.getLastMessageInfo(chatMessageStoreFactory.createMessageStore.getState(), n.conversation_id || "");
      let r = (t == null ? undefined : t.message_id) === n.message_id;
      let a = n.skill?.skill_id_no_default;
      let u = !isUndefinedCheck.isUndefined(a);
      let d = {
        bot_id: n.bot_id,
        used_skill: +!!u,
        message_id: n.message_id,
        section_id: n.section_id,
        conversation_id: n.conversation_id,
        click_from: r ? "answer" : "long_press_message",
        if_regenerated: +!!localRegenCheck.shouldRegenerate(n)
      };
      if (u) {
        d.skill_id = a;
      }
      return d;
    }, [n]);
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("read_message_show", {
        ...b
      });
    }, [b]);
    return reactJsxRuntimeCoreReexport.jsx(ttsAudioPlayerButton.TtsAudioPlayerButton, {
      i18nConfig: x,
      onGetTtsContent: () => g(n),
      className: "action-btn-rRZksY",
      tooltipSpacing: {
        x: 0,
        y: 8
      },
      style: {
        fontSize: 16
      },
      voiceStyleId: y.style_id,
      voicePitch: y.pitch,
      voiceSpeechRate: y.speechRate,
      getCommonParams: flowApiConfigManager.getFlowApiOptions()?.getCommonParams,
      onClick: e => {
        teaAnalyticsEventTracker.trackEvent("read_message_click", {
          ...b,
          button_name: e ? "read" : "pause"
        });
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "read_message_click",
          meta: {
            ...b,
            button_name: e ? "read" : "pause"
          }
        });
      },
      onTtsStart: () => {
        teaAnalyticsEventTracker.trackEvent("read_message_start", {
          ...b,
          voice_id: y.style_id
        });
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "read_message_start",
          meta: {
            ...b,
            voice_id: y.style_id
          }
        });
      },
      onTtsEnd: e => {
        let {
          currentTime: t,
          reason: n
        } = e || {};
        if (n === "limited") {
          samanthaToastFactory.toastInstance.error(v("desktop_error_toast_overtimes"));
        }
        teaAnalyticsEventTracker.trackEvent("read_message_end", {
          ...b,
          voice_id: y.style_id,
          duration: t || 0
        });
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "read_message_end",
          meta: {
            ...b,
            voice_id: y.style_id,
            duration: t || 0
          }
        });
      },
      clickInterceptor: () => {
        let {
          enable: e,
          toastContent: t
        } = downgradeConfigStore.getDowngradeConfig("tts");
        if (e && t) {
          dbxSonnerToasterWrapper.dbxToastAPI.error(t);
        }
        return e;
      }
    });
  };
  var infraTtsMessageActionSymbol = require("infra-tts-message-action-symbol") /*id: 653278*/;
  function R(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let P = e => {
    let {
      message: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(I, {
      message: t
    });
  };
  class N {
    constructor() {
      R(this, "pluginIdentifier", infraTtsMessageActionSymbol.ttsReceiveAction);
      R(this, "ButtonContentGroups", [P]);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultTTSReceiveMessageActionButtonPlugin: function () {
      return N;
    }
  });
}