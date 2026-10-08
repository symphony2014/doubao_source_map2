// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'handleMessageShowError'
// - Renamed export 'i' to 'checkImageLoadStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15529.1da94c80.js
         * chunkId: 15529
         * moduleId: 36156
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  let l = e => {
    let {
      message: d,
      reason: u,
      error: m,
      from: h,
      meta: p
    } = e;
    let f = m ?? Error(u);
    let g = {
      success: "0",
      reason: u,
      content_type: String((d == null ? undefined : d.content_type) ?? "unknown"),
      skill_id: String((d == null ? undefined : d.skill?.skill_id) ?? "generic"),
      message_from: (d == null ? undefined : d.local_info?.from) ?? "unknown",
      user_type: String((d == null ? undefined : d.user_type) ?? "unknown"),
      conversation_id: d == null ? undefined : d.conversation_id,
      message_id: d == null ? undefined : d.message_id,
      conversation_type: String(d == null ? undefined : d.conversation_type),
      from: h || "unknown",
      ...p
    };
    let v = d == null ? undefined : d.message_id;
    if (function (e) {
      let {
        messageId: t
      } = e;
      return !!t && isNumberUtil.isNumber(chatMessageStoreFactory.createMessageStore.getState().messageShowErrorHasReportedMap[t]);
    }({
      messageId: v
    })) {
      loggerServiceCore.defaultLogger.console.error({
        eventName: "message_show_error_duplicate",
        error: f,
        meta: g
      });
      return;
    }
    (function (e) {
      let {
        messageId: t
      } = e;
      if (!t) {
        return;
      }
      let i = Date.now();
      chatMessageStoreFactory.createMessageStore.setState({
        messageShowErrorHasReportedMap: {
          ...chatMessageStoreFactory.createMessageStore.getState().messageShowErrorHasReportedMap,
          [t]: i
        }
      });
    })({
      messageId: v
    });
    loggerServiceCore.defaultLogger.persist.error({
      eventName: "message_show_error",
      error: f,
      meta: g
    });
  };
  let a = e => {
    let {
      element: t,
      hasImage: i = false,
      defaultNaturalWidth: n = 256,
      defaultNaturalHeight: r = 192,
      onError: o
    } = e;
    if (i) {
      let e = t.querySelectorAll("[data-testid=mdbox_image] picture");
      if (e.length === 0) {
        if (o != null) {
          o({
            reason: "images_render_error"
          });
        }
      } else {
        let t = false;
        e.forEach(e => {
          let i = e.querySelector("img");
          if ((i == null ? undefined : i.complete) && i.naturalWidth && i.naturalHeight && (i.naturalWidth !== n || i.naturalHeight !== r)) {
            t = true;
          }
        });
        if (!t && o != null) {
          o({
            reason: "all_images_load_error"
          });
        }
      }
    }
  };
  require.d(exports, {
    handleMessageShowError: function () {
      return l;
    },
    checkImageLoadStatus: function () {
      return a;
    }
  });
}