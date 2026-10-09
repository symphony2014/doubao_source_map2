// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useSlidePermission'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 60955.e28a9bd4.js
         * chunkId: 60955
         * moduleId: 107107
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var feishuSlidePermissionService = require("feishu-slide-permission-service") /*id: 831253*/;
  var accessStatusConstants = require("access-status-constants") /*id: 76876*/;
  var globalEventEmitter_1 = require("global-event-emitter_1") /*id: 87667*/;
  let d = e => {
    let {
      token: t
    } = e;
    let [r, d] = reactCoreLibraryReexport.useState(undefined);
    let u = reactCoreLibraryReexport.useRef(null);
    let c = () => {
      if (u.current !== null) {
        clearTimeout(u.current);
        u.current = null;
      }
    };
    let v = async () => {
      try {
        let r = false;
        c();
        let {
          data: i,
          code: o
        } = (await feishuSlidePermissionService.getSlidePermissionState({
          docToken: t || ""
        })) || {};
        if ((i == null ? undefined : i.is_owner) === true || (i == null ? undefined : i.actions?.view) === 1) {
          d(accessStatusConstants.AccessStatus.Public);
          r = true;
        } else if (o === 1 || o === 1002) {
          d(accessStatusConstants.AccessStatus.Deleted);
        } else if (isUndefinedCheck.isUndefined(i == null ? undefined : i.is_owner)) {
          d(accessStatusConstants.AccessStatus.Error);
        } else {
          d(accessStatusConstants.AccessStatus.NoAccess);
        }
        if (!r) {
          u.current = setTimeout(() => {
            v();
          }, 60000);
        }
      } catch (e) {
        d(accessStatusConstants.AccessStatus.Error);
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "[AI-PPT] fetchPermission",
          error: e
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (!t) {
        d(accessStatusConstants.AccessStatus.Error);
        return;
      }
      d(undefined);
      v();
      return () => {
        c();
      };
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        if (r !== accessStatusConstants.AccessStatus.NoAccess) {
          d(accessStatusConstants.AccessStatus.NoAccess);
          v();
        }
      };
      globalEventEmitter_1.globalEmitter.on("slides-permission-change-to-no-access", e);
      return () => {
        globalEventEmitter_1.globalEmitter.off("slides-permission-change-to-no-access", e);
      };
    }, [t, r]);
    return {
      permission: r
    };
  };
  require.d(exports, {
    useSlidePermission: function () {
      return d;
    }
  });
}