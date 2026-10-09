// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'resumeChatTask'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-canvas-openurl-url-parse-plugin.3e6c43f8.js
         * chunkId: 17547
         * moduleId: 663494
         */
module.exports = function (module, exports, require) {
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var samanthaChatTaskStorage = require("samantha-chat-task-storage") /*id: 692465*/;
  let s = async e => {
    let {
      chatId: t,
      loginSource: n = "global_launcher",
      navigate: s
    } = e;
    try {
      if (!t) {
        s("/chat");
      }
      let e = `/chat/${t}`;
      if (n) {
        e += `?loginSource=${n}`;
      }
      s(e, {
        replace: true
      });
      let l = await samanthaChatTaskStorage.loadChatTaskMap();
      let d = objectValuesHelper.getObjectValues(l);
      let c = await chatPluginIocManager.chatProtocolLoader("SamanthaChat");
      if (c != null) {
        c.resumeTask(d);
      }
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "default_chat_open_by_url_action",
        meta: {
          chatId: t,
          loginSource: n
        }
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "default_chat_open_by_url_action_error",
        error: e,
        meta: {
          chatId: t
        }
      });
    }
  };
  require.d(exports, {
    resumeChatTask: function () {
      return s;
    }
  });
}