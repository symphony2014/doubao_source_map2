// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'useDocxPermissions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 42326
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var flowDocxEditorContext = require("flow-docx-editor-context") /*id: 912706*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  var corpcDebugLoggers = require("corpc-debug-loggers") /*id: 363765*/;
  var lifecycleEventManager = require("lifecycle-event-manager") /*id: 597916*/;
  let c = corpcDebugLoggers.getServiceDebug("permission");
  let u = {
    async getPermissions(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!e) {
        return null;
      }
      try {
        return await t.call(e, "permission.getPermissions");
      } catch (e) {
        c("[debug] getPermissions failed:", e);
        return null;
      }
    },
    subscribeEvents(e, t) {
      if (!e) {
        return emptyExportFunction.emptyFunction;
      }
      let n = rpcHostManager.RpcHostManager.getInstance();
      let i = [];
      let r = false;
      let a = () => {
        let {
          onPermissionChanged: o
        } = t;
        if (o) {
          i.push(n.on(e, "permission.changed", e => {
            r = true;
            o(e);
          }));
        }
      };
      let u = () => {
        i.forEach(e => e());
        i = [];
      };
      let d = async () => {
        if (!r) {
          try {
            let i = await n.call(e, "permission.getPermissions");
            if (i && t.onPermissionChanged && !r) {
              r = true;
              t.onPermissionChanged({
                permission: i,
                diff: {}
              });
            }
          } catch (e) {
            c("[debug] checkAndFireInitialPermission failed:", e);
          }
        }
      };
      if (n.isClientConnected(e)) {
        a();
        d();
      }
      let p = n.onConnection(t => {
        if (t === e && i.length === 0) {
          a();
          d();
        }
      });
      let h = n.onDisconnection(t => {
        if (t === e) {
          u();
          r = false;
        }
      });
      let f = lifecycleEventManager.lifecycleManager.subscribeEvents(e, {
        onEditorReady: () => {
          d();
        }
      });
      return () => {
        p();
        h();
        f();
        u();
      };
    }
  };
  let d = e => {
    let f = flowDocxEditorContext.useRpcClientId();
    let g = e ?? f;
    let [m, v] = reactCoreLibraryReexport.useState(false);
    let [_, y] = reactCoreLibraryReexport.useState(null);
    let b = reactCoreLibraryReexport.useCallback(e => {
      y(e);
      v(true);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (g) {
        return u.subscribeEvents(g, {
          onPermissionChanged: e => b(e.permission)
        });
      }
    }, [g, b]);
    return {
      hasInit: m,
      isEditable: (_ == null ? undefined : _.editable) ?? "unknown",
      isViewable: ((_ == null ? undefined : _.readable) && !(_ == null ? undefined : _.isDocDeleted) && !(_ == null ? undefined : _.isDocNotFound)) ?? "unknown",
      isCommentable: (_ == null ? undefined : _.commentable) ?? "unknown",
      isOtherCommentDeletable: _ ? _.isManager || _.isOwner : "unknown",
      isViewRecordable: _ ? _.isManager || _.isOwner || _.editable : "unknown",
      isExportable: (_ == null ? undefined : _.exportable) ?? "unknown",
      isCopyable: (_ == null ? undefined : _.copyable) ?? "unknown",
      isDuplicateable: (_ == null ? undefined : _.createCopyAble) ?? "unknown",
      isReportable: _ ? !_.isOwner : "unknown",
      isDeletable: (_ == null ? undefined : _.deletable) ?? "unknown",
      isOwner: (_ == null ? undefined : _.isOwner) ?? "unknown",
      isManageable: (_ == null ? undefined : _.isManager) ?? "unknown",
      canShowCollaboratorInfo: (_ == null ? undefined : _.canShowCollaboratorInfo) ?? "unknown"
    };
  };
  require.d(exports, {
    useDocxPermissions: function () {
      return d;
    }
  });
}