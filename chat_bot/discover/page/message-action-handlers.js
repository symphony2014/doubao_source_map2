// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Nu' to 'processMessageEvent'
// - Renamed export 'US' to 'cleanupMessageItems'
// - Renamed export 'o5' to 'setupMsgListeners'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 551587
         */
module.exports = function (module, exports, require) {
  var messageActionTypes = require("message-action-types") /*id: 902861*/;
  let r = (e, t) => {
    for (let n of e) {
      n.eventEmitter.on("message", e => t.message(e));
    }
  };
  let o = e => {
    for (let t of e) {
      if (t != null) {
        t.eventEmitter.off("message");
      }
      if (t != null) {
        t.drop();
      }
    }
  };
  let a = (e, t) => {
    let {
      event_type: n,
      message: r,
      cmd: o,
      message_list: a
    } = e;
    if (n === messageActionTypes.actionTypes.Message && a) {
      for (let e of a) {
        t.eventEmitter.emit("message", e);
      }
    }
    if (n === messageActionTypes.actionTypes.Message && r) {
      t.eventEmitter.emit("message", r);
    }
  };
  require.d(exports, {
    processMessageEvent: function () {
      return a;
    },
    cleanupMessageItems: function () {
      return o;
    },
    setupMsgListeners: function () {
      return r;
    }
  });
}