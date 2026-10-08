// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'lifecycleManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 597916
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  let o = require("corpc-debug-loggers") /*id: 363765*/.getServiceDebug("lifecycle");
  let s = {
    emitSsrHidden(e, t) {
      if (e) {
        rpcHostManager.RpcHostManager.getInstance().emit(e, "lifecycle.ssrHidden", t);
      }
    },
    emitSsrReady(e, t) {
      if (e) {
        rpcHostManager.RpcHostManager.getInstance().emit(e, "lifecycle.ssrReady", t);
      }
    },
    subscribeEvents(e, t) {
      if (!e) {
        return emptyExportFunction.emptyFunction;
      }
      let n = rpcHostManager.RpcHostManager.getInstance();
      let s = [["onIframeLoaded", "lifecycle.iframeLoaded"], ["onEditorReady", "lifecycle.editorReady"], ["onEditorError", "lifecycle.editorError"], ["ssrMounted", "lifecycle.ssrMounted"]];
      let a = [];
      let l = new Set();
      let c = () => {
        s.forEach(i => {
          let [r, o] = i;
          let s = t[r];
          if (s) {
            a.push(n.on(e, o, e => {
              if (!l.has(r)) {
                l.add(r);
                s(e);
              }
            }));
          }
        });
      };
      let u = () => {
        a.forEach(e => e());
        a = [];
      };
      let d = async () => {
        try {
          let i = await n.call(e, "lifecycle.getStatus");
          if (i.iframeLoaded && t.onIframeLoaded && !l.has("onIframeLoaded")) {
            l.add("onIframeLoaded");
            t.onIframeLoaded();
          }
          if (i.editorReady && t.onEditorReady && !l.has("onEditorReady")) {
            l.add("onEditorReady");
            t.onEditorReady();
          }
        } catch (e) {
          o("[debug] checkAndFireMissedEvents failed:", e);
        }
      };
      if (n.isClientConnected(e)) {
        c();
        d();
      }
      let p = n.onConnection(t => {
        if (t === e && a.length === 0) {
          c();
          d();
        }
      });
      let h = n.onDisconnection(t => {
        if (t === e) {
          u();
        }
      });
      return () => {
        p();
        h();
        u();
      };
    }
  };
  require.d(exports, {
    lifecycleManager: function () {
      return s;
    }
  });
}