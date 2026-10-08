// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'OfflineCreateDialogManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 915455
         */
module.exports = function (module, exports, require) {
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  function o(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let a = "OFFLINE_CREATE_SUCCESS";
  class l {
    constructor() {
      o(this, "closeDialog", () => {
        setTimeout(() => {
          toastNotificationManager_1.toastManager.remove(a);
        }, 3000);
      });
      o(this, "showDialog", () => {
        docxErrorToastHandler.handleDocxToast({
          type: "info",
          key: a,
          content: t("LarkCCM_Docs_OfflineUse_NetworkRestored_Toast"),
          duration: 5000,
          showCloseIcon: false
        });
      });
    }
  }
  o(l, "offlineCreateDialog", null);
  o(l, "getInstance", () => {
    if (l.offlineCreateDialog === null) {
      l.offlineCreateDialog = new l();
    }
    return l.offlineCreateDialog;
  });
  require.d(exports, {
    OfflineCreateDialogManager: function () {
      return l;
    }
  });
}