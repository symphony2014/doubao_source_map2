// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GL' to 'superTaskStore'
// - Renamed export 'rw' to 'getSuperTaskStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 654619
         */
module.exports = function (module, exports, require) {
  var reduxPersistStoreFactory = require("redux-persist-store-factory") /*id: 273160*/;
  var chatConstants = require("chat-constants") /*id: 777970*/;
  let o = () => ({
    switchValueConvMap: {},
    taskModeValue: 0,
    guidanceSwitchValue: {
      switchValue: chatConstants.taskTypes.Base
    },
    overloadStatusMap: {},
    model: chatConstants.aiModels.Doubao,
    taskAbConfig: {}
  });
  let a = e => !e || e.startsWith("local");
  let l = e => a(e) ? "local" : e;
  let s = [chatConstants.taskTypes.Base, chatConstants.taskTypes.SuperTask];
  let u = [chatConstants.complexityLevels.Simple, chatConstants.complexityLevels.Complex];
  var superTaskStorePersistence = require("super-task-store-persistence") /*id: 971412*/;
  let d = reduxPersistStoreFactory.createPersistStore({
    id: Symbol("super-task-store"),
    createSlice: (e, t) => ({
      ...o(),
      isSuperTaskEnableByConvId: e => t().getSuperTaskSwitchByConvId(e) === chatConstants.taskTypes.SuperTask,
      getSuperTaskSwitchByConvId: e => {
        let n = t().getStatusByConvId(e).switchValue;
        if (s.includes(n)) {
          return n;
        } else {
          return chatConstants.taskTypes.Base;
        }
      },
      setSuperTaskSwitchByConvId: (e, n) => {
        t().setStatusByConvId(e, {
          switchValue: n
        });
      },
      getTaskModeByConvId: e => {
        let n = t().getStatusByConvId(e).taskModeValue;
        if (u.includes(n)) {
          return n;
        } else {
          return chatConstants.complexityLevels.Simple;
        }
      },
      setTaskModeByConvId: (e, n) => {
        t().setStatusByConvId(e, {
          taskModeValue: n
        });
      },
      getStatusByConvId: e => {
        let {
          switchValueConvMap: n,
          taskModeValue: i,
          guidanceSwitchValue: o,
          taskAbConfig: s
        } = t();
        let u = n[l(e)];
        let c = typeof u == "object" ? {
          ...u
        } : {
          switchValue: u || chatConstants.taskTypes.Base,
          taskModeValue: chatConstants.complexityLevels.Simple
        };
        if (a(e)) {
          c.taskModeValue = i;
          if (s.enable_guidance_switch_memo === false) {
            c.switchValue = o.switchValue || chatConstants.taskTypes.Base;
          }
        }
        return c;
      },
      setStatusByConvId: (n, i) => {
        let {
          switchValueConvMap: r,
          getStatusByConvId: o,
          taskModeValue: s,
          guidanceSwitchValue: u,
          taskAbConfig: c
        } = t();
        let d = (c == null ? undefined : c.enable_guidance_switch_memo) === false && a(n) ? {} : {
          [l(n)]: {
            ...o(n),
            ...i,
            lastUpdate: Date.now()
          }
        };
        e({
          switchValueConvMap: {
            ...r,
            ...d
          },
          taskModeValue: a(n) && i.taskModeValue !== undefined ? i.taskModeValue : s,
          guidanceSwitchValue: a(n) && i.switchValue !== undefined ? {
            localChatId: n,
            switchValue: i.switchValue
          } : u
        });
      },
      updateOverloadMessageToastMap: (n, i) => {
        let r = t().overloadStatusMap;
        if (r[n] !== false) {
          e({
            overloadStatusMap: {
              ...r,
              [n]: i
            }
          });
        }
      },
      setSuperTaskAbConfig: t => {
        e({
          taskAbConfig: t
        });
      },
      isSidebarModeEnable: () => {
        return !!t().taskAbConfig?.enable_sidebar_complex_task;
      },
      isSkillBarModeEnable: () => {
        return !!t().taskAbConfig?.enable_skill_bar;
      }
    }),
    getPersistStorageOptions: superTaskStorePersistence.createPersistOptions
  });
  let h = function () {
    return d;
  };
  require.d(exports, {
    superTaskStore: function () {
      return d;
    },
    getSuperTaskStore: function () {
      return h;
    }
  });
}