// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'logUpdateSidebarStatus'
// - Renamed export 'd' to 'updateSidebarStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 140188
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let a = (e, t) => {
    try {
      let n = chatStoreManager.getStoreState("flowWebLayoutStore");
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "update_sidebar_status",
        meta: {
          prev_status: n.sidebarStatus,
          next_status: e,
          initial_sidebar_status: objectPathGetDefault.getObjectPathDefault(n, "initialSidebarStatus"),
          canvas_status: chatStoreManager.getStoreState("chatViewCanvasStore").isExpand ? "open" : "closed",
          triggered_by: t ?? "unknown",
          stack: t ? "" : function (e = {}) {
            let {
              skip: t = [],
              maxDepth: n = Infinity,
              includeAnonymous: i = false
            } = e;
            let r = Error();
            if (!r.stack) {
              return [];
            }
            let o = r.stack.split("\n").slice(1);
            let a = [];
            try {
              for (let e of o) {
                if (a.length >= n) {
                  break;
                }
                let r = e.trim();
                if (/^at\s+(https?:\/\/|file:\/\/).+:\d+:\d+$/.test(r) || /^(https?:\/\/|file:\/\/).+:\d+:\d+$/.test(r)) {
                  if (i) {
                    a.push("<anonymous>");
                  }
                  continue;
                }
                let o = r.match(/^at\s+([^\s(]+)\s*\(/) || r.match(/^([^\s@]+)@/);
                if (!o) {
                  continue;
                }
                let l = o[1];
                if (!t.includes(l)) {
                  a.push(l);
                }
              }
              return a;
            } catch (e) {
              var l;
              return ["GET_CALLER_STACK_ERROR", e == null ? undefined : (l = e.toString) === null || l === undefined ? undefined : l.call(e)];
            }
          }({
            skip: ["getCallerFunctionStack", "updateSidebarStatus", "logUpdateSidebarStatus"],
            includeAnonymous: true
          }).join(" <- "),
          window_width: typeof window != "undefined" ? window.innerWidth : 0
        }
      });
    } catch {}
  };
  let l = (e, t) => {
    a(e, t);
    chatStoreManager.getStore("flowWebLayoutStore").setState({
      sidebarStatus: e
    });
  };
  require.d(exports, {
    logUpdateSidebarStatus: function () {
      return a;
    },
    updateSidebarStatus: function () {
      return l;
    }
  });
}