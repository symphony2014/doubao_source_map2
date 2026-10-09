// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'historyService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70666.7b9c3546.js
         * chunkId: 70666
         * moduleId: 573398
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  var corpcDebugLoggers = require("corpc-debug-loggers") /*id: 363765*/;
  var rpcChannelCore = require("rpc-channel-core") /*id: 737542*/;
  let a = corpcDebugLoggers.getServiceDebug("history");
  let l = {
    async openHistory(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t) {
        a("[warn] RpcHost not initialized");
        return;
      }
      if (!e) {
        a("[warn] No client connected");
        return;
      }
      try {
        await t.call(e, "history.openHistory");
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          a("[warn] openHistory failed:", e.message);
        }
        throw e;
      }
    },
    async recoverHistory(e, t, n) {
      let i = rpcHostManager.RpcHostManager.getInstance();
      if (!i) {
        a("[warn] RpcHost not initialized");
        return;
      }
      if (!n) {
        a("[warn] No client connected");
        return;
      }
      try {
        await i.call(n, "history.recoverHistory", {
          docId: e,
          minorVersion: t
        });
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          a("[warn] recoverHistory failed:", e.message);
        }
        throw e;
      }
    },
    subscribeEvents(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        return emptyExportFunction.emptyFunction;
      }
      let o = [["onClose", "history.close"], ["onReady", "history.ready"]];
      let s = [];
      let a = () => {
        o.forEach(i => {
          let [r, o] = i;
          let a = t[r];
          if (a) {
            s.push(n.on(e, o, a));
          }
        });
      };
      let l = () => {
        s.forEach(e => e());
        s = [];
      };
      if (n.isClientConnected(e)) {
        a();
      }
      let c = n.onConnection(t => {
        if (t === e && s.length === 0) {
          a();
        }
      });
      let u = n.onDisconnection(t => {
        if (t === e) {
          l();
        }
      });
      return () => {
        c();
        u();
        l();
      };
    }
  };
  require.d(exports, {
    historyService: function () {
      return l;
    }
  });
}