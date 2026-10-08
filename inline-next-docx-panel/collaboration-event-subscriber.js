// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'collaborationEventSubscriber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 8519
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  let o = require("corpc-debug-loggers") /*id: 363765*/.getServiceDebug("collab");
  let a = {
    subscribeEvents(e, t) {
      if (!e) {
        return emptyExportFunction.emptyFunction;
      }
      let n = rpcHostManager.RpcHostManager.getInstance();
      let a = [["onMemberListChanged", "collab.memberListChanged"], ["onDocumentStateChanged", "collab.documentStateChanged"], ["onUserChanges", "collab.userChanges"]];
      let s = [];
      let l = () => {
        a.forEach(i => {
          let [r, o] = i;
          let a = t[r];
          if (a) {
            s.push(n.on(e, o, a));
          }
        });
      };
      let c = () => {
        s.forEach(e => e());
        s = [];
      };
      let d = async () => {
        try {
          var i;
          var r;
          let o = await n.call(e, "collab.getInitialState");
          if (o.members) {
            if ((i = t.onMemberListChanged) !== null && i !== undefined) {
              i.call(t, o.members);
            }
          }
          if (o.documentState) {
            if ((r = t.onDocumentStateChanged) !== null && r !== undefined) {
              r.call(t, o.documentState);
            }
          }
        } catch (e) {
          o("[debug] queryInitialState failed:", e);
        }
      };
      if (n.isClientConnected(e)) {
        l();
        d();
      }
      let u = n.onConnection(t => {
        if (t === e && s.length === 0) {
          l();
          d();
        }
      });
      let h = n.onDisconnection(t => {
        if (t === e) {
          c();
        }
      });
      return () => {
        c();
        u();
        h();
      };
    },
    getSyncVersion: async e => {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (e && t) {
        try {
          return await t.call(e, "collab.getSyncVersion");
        } catch (e) {
          o("[debug] getSyncVersion failed:", e);
          return;
        }
      }
    }
  };
  require.d(exports, {
    collaborationEventSubscriber: function () {
      return a;
    }
  });
}