// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'userAgentDeviceDetector'
// - Resolved require(161498) to 'user-agent-device-detector'
// - Renamed variable 'l' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'u' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'd' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable '_' to 'chatAiConstants'
// - Resolved require(447912) to 'chat-ai-constants'
// - Updated imported property 'HF' to 'fetchSourceKey' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'ES' to 'deepThinkMode' (module 447912)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property '_f' to 'isWindowDefined' (module 161498)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-init-dynamic-deep-thinking-init.43edba5e.js
         * chunkId: 22983
         * moduleId: 621646
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  let a = async () => {
    var e;
    var i;
    var t;
    let a = await chatFgStoreHooks.fetchSourceKey("ab_config.ab_results", {
      source: chatStorageKeys.chatStorageKeys.setting,
      defaultValue: undefined
    });
    let r = await chatFgStoreHooks.fetchSourceKey("action_bar_menu_config", {
      source: chatStorageKeys.chatStorageKeys.setting,
      defaultValue: {}
    });
    let s = r == null ? undefined : (e = r.menu_item_list) === null || e === undefined ? undefined : e.find(e => e.menu_type === chatAiConstants.deepThinkMode.DeepThinkAuto);
    let p = r == null ? undefined : (i = r.menu_item_list) === null || i === undefined ? undefined : i.find(e => e.menu_type === chatAiConstants.deepThinkMode.ProModel);
    if (a) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "getDeepthinkingStoreInitValue",
        meta: {
          deep_thinking_btn_memo: a == null ? undefined : a.deep_thinking_btn_memo,
          deep_thinking_auto: a == null ? undefined : a.deep_thinking_auto
        }
      });
      return {
        memoDeepThinkingSwitchValue: (a == null ? undefined : a.deep_thinking_btn_memo) === "1",
        deepThinkingAutoCotMode: a == null ? undefined : a.deep_thinking_auto,
        enableDeepThinkingAutoMode: !!s,
        defaultAutoMode: (r == null ? undefined : r.default_deep_think_auto) === true,
        showActionBarNewTag: !!(r == null ? undefined : r.new_action_bar_tag),
        disableLocalStoreValue: (t = r == null ? undefined : r.tag_disable_memory) !== null && t !== undefined && t,
        ...(((r == null ? undefined : r.menu_item_list?.length) ?? 0) > 0 ? {
          menuLists: r == null ? undefined : r.menu_item_list
        } : {}),
        ...(p ? {} : {
          expertMode: false
        })
      };
    }
  };
  let r = async () => {
    if (userAgentDeviceDetector.isWindowDefined) {
      try {
        let i = await a();
        if (!i) {
          return;
        }
        let n = () => {
          let {
            disableLocalStoreValue: e = false,
            ...n
          } = i;
          o.setState({
            ...n,
            ...(e ? {
              deepThinkingSwitchValue: false,
              deepThinkingSwitchUseAutoCot: true,
              expertMode: false,
              deepThinkingSwitchValueNew: "0"
            } : {})
          });
        };
        let o = chatStoreManager.getStore("deepThinkingControlStore");
        if ("persist" in o && !o.persist.hasHydrated()) {
          var e;
          if ((e = o.persist) === null || e === undefined) {
            return undefined;
          } else {
            return e.onFinishHydration(() => {
              n();
            });
          }
        }
        n();
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "deepthinking onInit error",
          error: e
        });
      }
    }
  };
  let s = () => r();
  let p = {
    lifeCycles: {
      onInit: s
    }
  };
  require.r(exports);
  require.d(exports, {
    onDeepthinkingStoreInit: function () {
      return s;
    },
    deepthinkngControlConfig: function () {
      return p;
    }
  });
}