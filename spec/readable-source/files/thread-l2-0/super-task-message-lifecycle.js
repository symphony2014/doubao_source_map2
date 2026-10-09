// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'arraySliceUtil_3'
// - Resolved require(663848) to 'array-slice-util_3'
// - Renamed variable 'r' to 'genericFilterUtil'
// - Resolved require(159692) to 'generic-filter-util'
// - Renamed variable 'a' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'o' to 'arrayObjectForeach'
// - Resolved require(434194) to 'array-object-foreach'
// - Renamed variable 'l' to 'collectionIncludesUtil'
// - Resolved require(517430) to 'collection-includes-util'
// - Renamed variable 's' to 'collectionMapMatcher'
// - Resolved require(300366) to 'collection-map-matcher'
// - Renamed variable 'c' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'd' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'u' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'h' to 'superTaskStore'
// - Resolved require(654619) to 'super-task-store'
// - Renamed variable 'p' to 'getTaskModeByConversationId'
// - Resolved require(712994) to 'get-task-mode-by-conversation-id'
// - Renamed variable 'm' to 'superTaskSwitchManager'
// - Resolved require(656965) to 'super-task-switch-manager'
// - Renamed variable 'v' to 'superTaskPayloadPlugin'
// - Resolved require(651299) to 'super-task-payload-plugin'
// - Renamed variable 'f' to 'superTaskLifecyclePluginId'
// - Resolved require(471036) to 'super-task-lifecycle-plugin-id'
// - Renamed variable 'g' to 'asyncTaskMessageHandler'
// - Resolved require(661707) to 'async-task-message-handler'
// - Updated imported property 'O' to 'getTaskModeByConvId' (module 712994)
// - Updated imported property 'V' to 'processTaskPayload' (module 651299)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'wu' to 'isEditSourceMessage' (module 661707)
// - Updated imported property 'L7' to 'addFreeChatSkill' (module 661707)
// - Updated imported property 'mO' to 'handleAsyncTask' (module 661707)
// - Updated imported property 'rw' to 'getSuperTaskStore' (module 654619)
// - Updated imported property 'U' to 'getSuperTaskSwitchManager' (module 656965)
// - Updated imported property 'Z' to 'sliceArray' (module 663848)
// - Updated imported property 'Z' to 'genericFilter' (module 159692)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'Z' to 'arrayObjectForeach' (module 434194)
// - Updated imported property 'Z' to 'includes' (module 517430)
// - Updated imported property 'Z' to 'mapWithMatcher' (module 300366)
// - Updated imported property 'd' to 'superTaskLifecycleId' (module 471036)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 849733
         */
module.exports = function (module, exports, require) {
  var arraySliceUtil_3 = require("array-slice-util_3") /*id: 663848*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var getTaskModeByConversationId = require("get-task-mode-by-conversation-id") /*id: 712994*/;
  var superTaskSwitchManager = require("super-task-switch-manager") /*id: 656965*/;
  var superTaskPayloadPlugin = require("super-task-payload-plugin") /*id: 651299*/;
  var superTaskLifecyclePluginId = require("super-task-lifecycle-plugin-id") /*id: 471036*/;
  var asyncTaskMessageHandler = require("async-task-message-handler") /*id: 661707*/;
  let _ = {};
  let b = 0;
  class y {
    async processMessageBefore(e, t) {
      var n;
      let r = {};
      let a = getTaskModeByConversationId.getTaskModeByConvId();
      r.mode = "super";
      await superTaskPayloadPlugin.processTaskPayload(t[0]);
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "super-task-message-life-cycle-plugin",
        meta: {
          input_skill: (n = t[0]) === null || n === undefined ? undefined : n.extraExt?.input_skill,
          taskModeValue: a,
          ...r
        }
      });
      b = 0;
      return t;
    }
    async beforeMessageSending(e, t) {
      try {
        let e = t.conversation_id || "";
        let i = !!asyncTaskMessageHandler.isEditSourceMessage(t);
        if (!!i && !superTaskStore.getSuperTaskStore().getState().isSuperTaskEnableByConvId(e) && !superTaskStore.getSuperTaskStore().getState().isSidebarModeEnable() && !superTaskStore.getSuperTaskStore().getState().isSkillBarModeEnable()) {
          t = asyncTaskMessageHandler.addFreeChatSkill(t);
        }
        await asyncTaskMessageHandler.handleAsyncTask(e, {
          waitTerminate: false,
          cancelTask: i
        }, i => {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "super-task-terminate-last-task",
            meta: {
              task_id: i,
              chat_id: e,
              scene: t.ext?.scene || "default"
            }
          });
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "super-task-terminate-last-task",
          meta: {
            status: "failed",
            message: e == null ? undefined : e.message,
            scene: t.ext?.scene || "default"
          }
        });
      }
      return t;
    }
    onMessageSendingStart(e, t) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "super-task-sending-start"
      });
      return t;
    }
    onMessageSendingEnd(e, t) {
      var i;
      var n;
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `super-task-sending-end-${(n = t.final_status) === null || n === undefined ? undefined : (i = n.message) === null || i === undefined ? undefined : i.toLowerCase()}`
      });
      let {
        conversation_id: r = "",
        local_conversation_id: a = ""
      } = t;
      superTaskSwitchManager.getSuperTaskSwitchManager().executeSync(r, a);
      return t;
    }
    onMessageReceivingUpdate(e, t) {
      if (b <= 0) {
        b = ((t == null ? undefined : t.content_blocks?.length) || 0) - 1;
      }
      let s = arraySliceUtil_3.sliceArray(t == null ? undefined : t.content_blocks, b);
      let d = genericFilterUtil.genericFilter(s, e => {
        return e.block_type === chatConstantsEnum.messageContentType.BLOCK_SUPERTASK_TOOL && e.content_obj?.name;
      });
      let h = t.async_task?.id || "";
      if (h && isEmptyUtil.isEmpty(_[h])) {
        _ = {
          ..._,
          [h]: {}
        };
      }
      let p = _[h];
      if (d.length > 0) {
        arrayObjectForeach.arrayObjectForeach(d, e => {
          let o = e == null ? undefined : e.id;
          let l = e == null ? undefined : e.content_obj?.id;
          let s = e == null ? undefined : e.content_obj?.name;
          let c = e == null ? undefined : e.content_obj?.is_finish;
          let d = e == null ? undefined : e.content_obj?.is_error;
          if (o) {
            if (!isEmptyUtil.isEmpty(p[o]) && c && !p[o].is_finish) {
              let e = Date.now() - (Number(p[o].startTime) || 0);
              p[o] = {
                name: s,
                is_finish: c,
                startTime: Date.now(),
                duration: e,
                is_error: d
              };
              loggerServiceCore.defaultLogger.persist.info({
                eventName: "super_task_tool_execute_finish",
                meta: {
                  name: s,
                  duration: e,
                  tool_id: l,
                  block_id: o,
                  is_error: d
                }
              });
            }
            if (isEmptyUtil.isEmpty(p[o])) {
              p[o] = {
                name: s,
                is_finish: c,
                startTime: Date.now(),
                duration: 0
              };
              loggerServiceCore.defaultLogger.persist.info({
                eventName: "super_task_tool_execute_start",
                meta: {
                  name: s,
                  tool_id: l,
                  block_id: o,
                  is_error: d
                }
              });
              if (c) {
                loggerServiceCore.defaultLogger.persist.info({
                  eventName: "super_task_tool_execute_finish",
                  meta: {
                    name: s,
                    duration: 0,
                    tool_id: l,
                    block_id: o,
                    is_error: d
                  }
                });
              }
            }
          }
        });
      } else {
        delete _[h];
      }
      return t;
    }
    onMessageReceivingEnd(e, t) {
      let a = t.async_task?.id || "";
      if (a) {
        delete _[a];
      }
      if (messageContentTypeAndStatusChecker.u2S(t)) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "super-task-receiving-clear-message"
        });
      }
      let o = genericFilterUtil.genericFilter(t == null ? undefined : t.content_blocks, e => collectionIncludesUtil.includes([chatConstantsEnum.messageContentType.BLOCK_FILE, chatConstantsEnum.messageContentType.BLOCK_CREATION, chatConstantsEnum.messageContentType.BLOCK_RESEARCH, chatConstantsEnum.messageContentType.BLOCK_RESEARCH_WEBPAGE], e.block_type));
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "super-task-receiving-products",
        meta: {
          number: o.length || 0,
          product_blocks_type: collectionMapMatcher.mapWithMatcher(o, e => e == null ? undefined : e.block_type),
          task_id: (t == null ? undefined : t.async_task?.id) || "",
          message_id: (t == null ? undefined : t.message_id) || ""
        }
      });
      return t;
    }
    constructor() {
      var e;
      var t;
      var i;
      e = "pluginIdentifier";
      t = superTaskLifecyclePluginId.superTaskLifecycleId;
      if ((e = typeof (i = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var i = e[Symbol.toPrimitive];
        if (i !== undefined) {
          var n = i.call(e, t || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskMessageLifeCyclePlugin: function () {
      return y;
    }
  });
}