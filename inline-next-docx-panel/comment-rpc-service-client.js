// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'commentRpcService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 433602
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  var corpcDebugLoggers = require("corpc-debug-loggers") /*id: 363765*/;
  var rpcChannelCore = require("rpc-channel-core") /*id: 737542*/;
  let s = corpcDebugLoggers.getServiceDebug("comment");
  let l = {
    async toggleCommentViewShow(e, t, n) {
      let i = rpcHostManager.RpcHostManager.getInstance();
      if (!i) {
        s("[warn] RpcHost not initialized");
        return;
      }
      if (!n) {
        s("[warn] No client connected");
        return;
      }
      try {
        await i.call(n, "commentService.toggleCommentViewShow", {
          commentViewIds: e,
          visible: t
        });
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          s("[warn] toggleCommentViewShow failed:", e.message);
        }
        throw e;
      }
    },
    async isCommentViewVisible(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n) {
        s("[warn] RpcHost not initialized");
        return false;
      }
      if (!t) {
        s("[warn] No client connected");
        return false;
      }
      try {
        return await n.call(t, "commentService.isCommentViewVisible", e);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          s("[warn] isCommentViewVisible failed:", e.message);
        }
        throw e;
      }
    },
    subscribeEvents(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        return emptyExportFunction.emptyFunction;
      }
      let o = [["onCommentViewVisibleChange", "commentService.commentViewVisibleChange"], ["onCommentCountChange", "commentService.commentCountChange"]];
      let a = [];
      let s = () => {
        o.forEach(i => {
          let [r, o] = i;
          let s = t[r];
          if (s) {
            a.push(n.on(e, o, s));
          }
        });
      };
      let l = () => {
        a.forEach(e => e());
        a = [];
      };
      if (n.isClientConnected(e)) {
        s();
      }
      let c = n.onConnection(t => {
        if (t === e && a.length === 0) {
          s();
        }
      });
      let d = n.onDisconnection(t => {
        if (t === e) {
          l();
        }
      });
      return () => {
        c();
        d();
        l();
      };
    },
    async toggleHistoryCommentBox(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n) {
        s("[warn] RpcHost not initialized");
        return;
      }
      if (!t) {
        s("[warn] No client connected");
        return;
      }
      try {
        await n.call(t, "commentHistoryService.show", e);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          s("[warn] toggleHistoryCommentBox failed:", e.message);
        }
        throw e;
      }
    },
    async hideHistoryCommentBox(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t) {
        s("[warn] RpcHost not initialized");
        return;
      }
      if (!e) {
        s("[warn] No client connected");
        return;
      }
      try {
        await t.call(e, "commentHistoryService.hide");
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          s("[warn] hideHistoryCommentBox failed:", e.message);
        }
        throw e;
      }
    }
  };
  require.d(exports, {
    commentRpcService: function () {
      return l;
    }
  });
}