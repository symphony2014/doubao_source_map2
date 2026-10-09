// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable 'r' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'o' to 'pushToastMessageCmdPlugin_1'
// - Resolved require(391652) to 'push-toast-message-cmd-plugin_1'
// - Updated imported property 'Q' to 'pushToastCmdPlugin' (module 391652)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'FN' to 'defaultToast' (module 697541)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 56802
         */
module.exports = function (module, exports, require) {
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var pushToastMessageCmdPlugin_1 = require("push-toast-message-cmd-plugin_1") /*id: 391652*/;
  var s = {
    pushToast: "push-toast-F77Dgs"
  };
  function a(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class l {
    constructor() {
      a(this, "pluginIdentifier", pushToastMessageCmdPlugin_1.pushToastCmdPlugin);
      a(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let {
            conversation_id: o
          } = e.data.data;
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: PushToast",
            meta: {
              conversation_id: o
            }
          });
          if (e.data.data.ext?.toast) {
            samanthaToastFactory.defaultToast.warning({
              showClose: false,
              content: e.data.data.ext?.toast,
              className: s.pushToast
            });
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    PushToastMessageCmdPlugin: function () {
      return l;
    }
  });
}