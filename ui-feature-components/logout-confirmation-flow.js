// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'createLogoutFlow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 46038
         */
module.exports = function (module, exports, require) {
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var samanthaCheckboxComponents = require("samantha-checkbox-components") /*id: 739837*/;
  var logoutConfirmationDialog = require("logout-confirmation-dialog") /*id: 461101*/;
  var logoutFlowHandler = require("logout-flow-handler") /*id: 692547*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      showLogoutAll: t = false,
      onConfirmShow: n,
      onConfirmCancel: i,
      onConfirmOk: l,
      confirmText: {
        title: s,
        description: c,
        logoutAllText: d,
        okButtonText: p,
        cancelButtonText: u
      }
    } = e;
    return {
      showLogoutConfirm: () => {
        if (n != null) {
          n();
        }
        let e = false;
        logoutConfirmationDialog.showLogoutConfirmation({
          title: s,
          description: c,
          cancelProps: {
            text: u,
            onClick: () => {
              if (i != null) {
                i({
                  logoutAllDevices: e
                });
              }
            }
          },
          okProps: [{
            text: p,
            onClick: async () => {
              await (l == null ? undefined : l({
                logoutAllDevices: e
              }));
            }
          }],
          overrideFooter: t ? t => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx(samanthaCheckboxComponents.CheckboxWrapper, {
              autoFocus: false,
              onChange: t => {
                e = t.target.checked || false;
              },
              children: d
            }), t]
          }) : undefined
        });
      }
    };
  };
  let c = e => {
    let {
      ...t
    } = e;
    let {
      clickEventName: n,
      clickEventParams: r,
      scene: o,
      ...a
    } = t;
    let {
      showLogoutConfirm: c
    } = logoutFlowHandler.createLogoutConfirm({
      ...a,
      scene: o,
      openLogoutConfirm: s,
      onLogout: async e => logoutFlowHandler.logoutWithFlowAccount({
        ...e,
        navigate: e.navigate
      }),
      onCancelLogoutTrack: () => {
        teaAnalyticsEventTracker.trackEvent("click_logout_cancel");
      },
      onConfirmLogoutTrack: () => {
        teaAnalyticsEventTracker.trackEvent("click_logout_confirm");
      },
      onConfirmShowTrack: () => {
        if (n) {
          teaAnalyticsEventTracker.trackEvent(n, r);
        }
      }
    });
    return {
      handleLogout: c
    };
  };
  require.d(exports, {
    createLogoutFlow: function () {
      return c;
    }
  });
}