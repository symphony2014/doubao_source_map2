// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I0' to 'createChatInputStore'
// - Renamed export 'c' to 'initialChatInputState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 172306
         */
module.exports = function (module, exports, require) {
  let i;
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var storagePersistenceUtil = require("storage-persistence-util") /*id: 143136*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  let p = {
    activeSkillTypeMap: {},
    activeSkillFromMap: {},
    sendMessageStatusMap: {},
    skill_drop_down_visible: undefined,
    skillMap: {},
    skills: undefined,
    inputSkills: undefined,
    skillConfig: {
      hidePopoverWhenMountMap: undefined
    },
    skillReportEvents: {},
    userPreferences: {
      transTargetLang: ""
    },
    ultraLongTextNoticeTime: 0,
    editorValue: {
      data: [{
        type: chatFieldTypes.getFieldTypes.Text,
        text: ""
      }]
    },
    actionValue: {},
    modeSelectConfigs: {
      menu_item_list: [{
        menu_type: chatAiConstants.deepThinkMode.DeepThinkOff,
        name: "快速",
        sub_title_name: "适用于大部分情况",
        new_menu_item_tag: false
      }, {
        menu_type: chatAiConstants.deepThinkMode.DeepThinkOn,
        name: "思考",
        sub_title_name: "擅长解决更难的问题",
        new_menu_item_tag: false
      }]
    },
    modeSelectValue: "0"
  };
  let _ = e => {
    try {
      return {
        skills: isEmptyUtil.isEmpty(e.skillMap) ? undefined : e.skills,
        inputSkills: isEmptyUtil.isEmpty(e.inputSkills) ? undefined : e.inputSkills,
        skillMap: e.skillMap,
        userPreferences: e.userPreferences
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "[@chat-input-store] persist state limit error",
        error: e instanceof Error ? e : Error(String(e))
      });
      return {};
    }
  };
  let v = (e, t) => {
    let o = isNullishCheck.isNil(e) ? p : e;
    return {
      ...t,
      skills: t.skills ?? o.skills,
      skillMap: {
        ...o.skillMap,
        ...t.skillMap
      },
      userPreferences: {
        transTargetLang: t.userPreferences.transTargetLang || o.userPreferences?.transTargetLang || p.userPreferences.transTargetLang
      },
      inputSkills: t.inputSkills ?? o.inputSkills
    };
  };
  let b = p;
  let S = (e, t) => ({
    ...p,
    updateActiveSkillTypeMap: function (t, n, i = chatStatusActionTypes.chatActionTypes.Unknown) {
      e(immerCoreImplementation.produce(e => {
        e.activeSkillTypeMap[t] = n;
        e.activeSkillFromMap[t] = {
          skillType: n,
          skillFrom: i
        };
      }));
    },
    closeSkillPanel: t => {
      e(immerCoreImplementation.produce(e => {
        e.activeSkillTypeMap[t] = undefined;
        e.activeSkillFromMap[t] = undefined;
      }));
    },
    resetActiveSkillTypeMap: () => {
      e(() => ({
        activeSkillTypeMap: {},
        activeSkillFromMap: {}
      }));
    },
    checkSupportSkill(e) {
      let {
        inputSkills: n
      } = t();
      return !!n && !!n.find(t => t.skill_type === e);
    },
    getHidePopoverWhenMount: e => {
      var i;
      return !!e && (i = t().skillConfig.hidePopoverWhenMountMap?.[e]) !== null && i !== undefined && i;
    },
    updateHidePopoverWhenMount: (t, n) => {
      e(immerCoreImplementation.produce(e => {
        if (t) {
          e.skillConfig.hidePopoverWhenMountMap ||= {};
          e.skillConfig.hidePopoverWhenMountMap[t] = n;
        }
      }));
    },
    updateInputSkills: t => e({
      inputSkills: t
    }),
    updateSkillMap: t => e({
      skillMap: t
    }),
    updateSkills: t => e({
      skills: t
    }),
    setEditorValue: t => e({
      editorValue: t
    })
  });
  let P = e => t => {
    let n = {
      start: performanceTimeUtil.getPerformanceNow()
    };
    return (t, i) => {
      if (i) {
        n.type = "error";
      } else {
        n.type = "success";
      }
      n.end = performanceTimeUtil.getPerformanceNow();
      n.duration = n.end - n.start;
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${e.name}_hydration`,
        meta: n
      });
    };
  };
  let C = e => {
    var t;
    if (i && userAgentDeviceDetector.isWindowDefined) {
      return i;
    }
    let {
      prefix: n,
      isEnableDebug: a,
      reduxDevToolsSnapshot: l,
      merge: s,
      partialize: d,
      storage: h
    } = e ?? {};
    let m = storagePersistenceUtil.createPersistOptions({
      name: "chat-input-store",
      prefix: n || "default",
      partialize: d ?? _,
      version: 1.5,
      merge: s ?? v,
      storage: h
    });
    let g = P(m);
    m.onRehydrateStorage = g;
    let f = reduxDevtoolsPersistIntegration_1.persistMiddleware(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(S), m);
    return i = (t = e == null ? undefined : e.disablePersist) === null || t === undefined || t ? reactStoreFactory.createStore()(S) : a && l ? reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.devToolsMiddleware(f, {
      name: `${n}-chat-input-store`
    })) : reactStoreFactory.createStore()(f);
  };
  require.d(exports, {
    createChatInputStore: function () {
      return C;
    },
    initialChatInputState: function () {
      return b;
    }
  });
}