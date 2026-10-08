// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'vx' to 'registerClipboardPasteHooks'
// - Renamed export 'xF' to 'areClipboardPasteHooksRegistered'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 924452
         */
module.exports = function (module, exports, require) {
  var deferredPromiseFactory_1 = require("deferred-promise-factory_1") /*id: 397926*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var hookServiceDiConstants_1 = require("hook-service-di-constants_1") /*id: 439395*/;
  var moduleSettingProviderToken = require("module-setting-provider-token") /*id: 609239*/;
  let s = "clipboard_apply_hooks_editable";
  async function c(e) {
    let o = deferredPromiseFactory_1.deferredPromise();
    let r = e.editorAPI.getService(hookServiceDiConstants_1.$$);
    let c = e.editorAPI.getService(moduleSettingProviderToken.moduleSettingToken);
    if (r.shouldStartRegistering(s)) {
      r.setRegisteredStatus(s, hookServiceDiConstants_1.RegistrationStatus.registering);
      e.editorAPI.featureService.loadFeatureConfigs(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, e => {
        e.forEach(e => {
          if (e.hookConfigList || e.blockSetting) {
            let {
              blockSetting: o,
              hookConfigList: n
            } = e;
            if (o) {
              c.addBlockSetting(o);
            }
            if (n) {
              n.forEach(e => {
                let {
                  hookName: o,
                  hookCallback: n,
                  options: i
                } = e;
                r.register(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, o, n, i);
              });
            }
          } else {
            let {
              hookName: o,
              hookCallback: n,
              options: i
            } = e;
            r.register(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, o, n, i);
          }
        });
        r.setRegisteredStatus(s, hookServiceDiConstants_1.RegistrationStatus.registered);
        o.resolve(e);
      }, e => {
        r.setRegisteredStatus(s, hookServiceDiConstants_1.RegistrationStatus.unRegistered);
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_paste_hooks_error", {
          error: e.message
        });
        o.reject(e);
      });
      return o.promise;
    }
  }
  function d(e) {
    return e.editorAPI.getService(hookServiceDiConstants_1.$$).getRegisteredStatus(s) === hookServiceDiConstants_1.RegistrationStatus.registered;
  }
  require.d(exports, {
    registerClipboardPasteHooks: function () {
      return c;
    },
    areClipboardPasteHooksRegistered: function () {
      return d;
    }
  });
}