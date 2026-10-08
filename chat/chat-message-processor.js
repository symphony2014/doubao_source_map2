// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'processChatData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 891807
         */
module.exports = function (module, exports, require) {
  var arrayValueFinder = require("array-value-finder") /*id: 421495*/;
  var protocolMessageConstants = require("protocol-message-constants") /*id: 444681*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatMessageTransformer = require("chat-message-transformer") /*id: 319937*/;
  async function h(e) {
    let {
      data: t,
      conversationId: n,
      localInfo: h
    } = e;
    let [m, g] = await Promise.all([Promise.all(((t == null ? undefined : t.message_list) || []).reverse().map(async e => await chatMessageTransformer.transformMessage(e, {
      local_info: h
    }))).then(e => e.map(e => ({
      ...e,
      is_delta: false
    }))), Promise.all(((t == null ? undefined : t.regen_list) || []).reverse().map(async e => await chatMessageTransformer.transformMessage(e, {
      local_info: h
    }))).then(e => e.map(e => ({
      ...e,
      is_delta: false
    })))]);
    let f = m.filter(e => !!localRegenCheck.shouldRegenerate(e) || !!chatMessageStatusCheck.isMessageFinished(e));
    let p = arrayValueFinder.valueFinder(m, e => {
      return (e == null ? undefined : e.async_task?.status) === protocolMessageConstants.asyncTaskStatus.AsyncTaskStatusProcessing;
    });
    chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
      if (e == null) {
        return undefined;
      } else {
        return e.updateSendMessageStatus(n, (p == null ? undefined : p.async_task?.status) === protocolMessageConstants.asyncTaskStatus.AsyncTaskStatusProcessing ? chatStatusActionTypes.chatStatusTypes.Receiving : chatStatusActionTypes.chatStatusTypes.Default);
      }
    });
    if (p) {
      if (p == null ? undefined : p.async_task?.id) {
        chatPluginIocManager.chatProtocolLoader("SamanthaChat").then(async e => {
          var n;
          var i;
          let r = p.async_task?.id || "";
          let o = (await chatStoreManager.getAsyncStore("samanthaChatProtocolStore")).getState().samanthaChatAsyncTaskMap[r];
          if (o) {
            if (e != null && (n = e.resumeAsyncTask) !== null && n !== undefined) {
              n.call(e, [o]);
            }
          } else if (e != null && (i = e.createAsyncTask) !== null && i !== undefined) {
            i.call(e, p, r);
          }
        });
      }
    }
    chatIocServiceLoaderHook.loadServiceAsync("chatIMService").then(e => {
      m.forEach(t => {
        if (e != null) {
          e.checkAndResumeTask({
            message: t
          });
        }
      });
    });
    return {
      hasMore: !!(t == null ? undefined : t.has_more),
      messages: f,
      messageLinks: f.map(e => ({
        messageId: e.message_id || "",
        isLocalMessage: false
      })),
      regenerateList: g
    };
  }
  require.d(exports, {
    processChatData: function () {
      return h;
    }
  });
}