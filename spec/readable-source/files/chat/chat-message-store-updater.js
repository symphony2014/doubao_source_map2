// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'updateChatMessages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 401891
         */
module.exports = function (module, exports, require) {
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  async function u(e) {
    let {
      conversationId: t,
      immerUpdate: n
    } = e;
    let u = immerCoreImplementation.createDraft(chatMessageStoreFactory.createMessageStore.getState());
    u.messageMap[t] ||= {};
    u.localMessageMap[t] ||= {};
    u.messageListStatusMap[t] ||= {
      hasMore: false,
      lastCursor: 0,
      inIniting: false,
      inLoadingMore: false
    };
    if (!Array.isArray(u.messageLinkMap[t])) {
      u.messageLinkMap[t] = [];
    }
    let c = function (e, t) {
      let {
        messageMap: n,
        messageLinkMap: o,
        messageListStatusMap: l
      } = t;
      return {
        overrideMessages: t => {
          if (Array.isArray(t)) {
            t.forEach(t => {
              if (t.message_id) {
                let o = n[e][t.message_id];
                if (o) {
                  if (objectPathGetDefault.getObjectPathDefault(o, "ext.sp") && !objectPathGetDefault.getObjectPathDefault(t, "ext.sp")) {
                    safeObjectSetWrapper.safeObjectSet(t, "ext.sp", objectPathGetDefault.getObjectPathDefault(o, "ext.sp"));
                  }
                  if (objectPathGetDefault.getObjectPathDefault(o, "ext.sp_v2") && !objectPathGetDefault.getObjectPathDefault(t, "ext.sp_v2")) {
                    safeObjectSetWrapper.safeObjectSet(t, "ext.sp_v2", objectPathGetDefault.getObjectPathDefault(o, "ext.sp_v2"));
                  }
                  if (objectPathGetDefault.getObjectPathDefault(o, "ext.regen") && !objectPathGetDefault.getObjectPathDefault(t, "ext.regen")) {
                    safeObjectSetWrapper.safeObjectSet(t, "ext.regen", objectPathGetDefault.getObjectPathDefault(o, "ext.regen"));
                  }
                }
                n[e][t.message_id] = t;
              }
            });
          }
        },
        overrideMessageLinks: t => {
          o[e] = t;
        },
        overrideRegenerateMessagesAndUpdateLink: t => {
          t.forEach(t => {
            let {
              message_id: i = ""
            } = t;
            if (objectPathGetDefault.getObjectPathDefault(t, "ext.regen_active") !== "1") {
              t.status = chatMessageTypes.PushMessageStatus.InVisible;
            }
            n[e][i] = t;
          });
        },
        resetMessageLink: (t, n) => {
          var i;
          var r;
          var l;
          let s = ((r = o[e]) === null || r === undefined ? undefined : (i = r.findIndex) === null || i === undefined ? undefined : i.call(r, e => t === e.messageId)) ?? -1;
          if (~s) {
            let t = o[e][s];
            if ((l = o[e]) !== null && l !== undefined) {
              l.splice(s, 1, {
                ...t,
                ...n
              });
            }
          }
        },
        setMessageStatus: t => {
          l[e] = t;
        }
      };
    }(t, u);
    await n({
      draftMessageMap: u.messageMap[t],
      draftLocalMessageMap: u.localMessageMap[t],
      draftMessageLinks: u.messageLinkMap[t],
      draftMessageListStatus: u.messageListStatusMap[t]
    }, c);
    let d = [];
    immerCoreImplementation.finishDraft(u, e => d.push(...e));
    try {
      chatMessageStoreFactory.createMessageStore.setState(e => immerCoreImplementation.applyPatches(e, d));
    } catch (e) {
      loggerServiceCore.defaultLogger.console.log(e);
    }
  }
  require.d(exports, {
    updateChatMessages: function () {
      return u;
    }
  });
}