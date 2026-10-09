// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'toastManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 737977
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var unifiedButtonComponent = require("unified-button-component") /*id: 488299*/;
  var toastNotificationManagerWrapper = require("toast-notification-manager-wrapper") /*id: 314333*/;
  var i18nTranslateUtil = require("i18n-translate-util") /*id: 38843*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  (n = o ||= {}).loading = "loading";
  n.success = "success";
  n.error = "error";
  n.info = "info";
  n.warn = "warning";
  let u = {
    _mapProps(e) {
      let t = Object.assign({}, e);
      let r = "text";
      let n = e.key || `${e.type}_${Date.now()}`;
      Object.assign(t, {
        key: n
      });
      Object.assign(t, e.duration !== undefined ? {
        duration: e.duration
      } : {
        duration: 3000
      });
      Object.assign(t, e.keepAlive ? {
        duration: 0
      } : {});
      Object.assign(t, e.closable ? {
        showCloseIcon: true
      } : {
        showCloseIcon: false
      });
      Object.assign(t, e.cancelable ? {
        action: reactCoreLibraryReexport.createElement(unifiedButtonComponent.UnifiedButton, {
          type: r,
          color: "primary",
          children: e.cancelText || i18nTranslateUtil.t("common.undo"),
          style: {
            margin: "-2px 0 -2px -4px"
          },
          onClick: (...t) => {
            var r;
            var o;
            if ((r = e.onCancel) !== null && r !== undefined) {
              r.call(e, t);
            }
            if (e.closeAfterCancel) {
              if ((o = e.onClose) !== null && o !== undefined) {
                o.call(e);
              }
              toastNotificationManagerWrapper.toastManagerWrapper.destroy(n);
            }
          }
        })
      } : {});
      Object.assign(t, e.actionText ? {
        action: reactCoreLibraryReexport.createElement(unifiedButtonComponent.UnifiedButton, {
          type: r,
          color: "primary",
          children: e.actionText,
          style: {
            margin: "-2px 0 -2px -4px"
          },
          onClick: () => {
            var t;
            var r;
            if ((t = e.onActionClick) !== null && t !== undefined) {
              t.call(e);
            }
            if ((r = e.onClose) !== null && r !== undefined) {
              r.call(e);
            }
            toastNotificationManagerWrapper.toastManagerWrapper.destroy(n);
          }
        })
      } : {});
      return t;
    },
    open(e) {
      Promise.resolve().then(() => toastNotificationManagerWrapper.toastManagerWrapper.open(this._mapProps(e)));
    },
    show(e) {
      this.open(e);
    },
    info(e) {
      Promise.resolve().then(() => toastNotificationManagerWrapper.toastManagerWrapper.info(Object.assign(Object.assign({}, this._mapProps(e)), {
        type: o.info
      })));
    },
    success(e) {
      Promise.resolve().then(() => toastNotificationManagerWrapper.toastManagerWrapper.success(Object.assign(Object.assign({}, this._mapProps(e)), {
        type: o.success
      })));
    },
    update() {},
    error(e) {
      Promise.resolve().then(() => toastNotificationManagerWrapper.toastManagerWrapper.error(Object.assign(Object.assign({}, this._mapProps(e)), {
        type: o.error
      })));
    },
    warning(e) {
      Promise.resolve().then(() => toastNotificationManagerWrapper.toastManagerWrapper.warning(Object.assign(Object.assign({}, this._mapProps(e)), {
        type: o.warn
      })));
    },
    loading(e) {
      Promise.resolve().then(() => toastNotificationManagerWrapper.toastManagerWrapper.loading(this._mapProps(e)));
    },
    remove(e) {
      this.destroy(e);
    },
    removeAll() {
      this.destroy();
    },
    destroy(e) {
      Promise.resolve().then(() => toastNotificationManagerWrapper.toastManagerWrapper.destroy(e));
    },
    config(e) {
      toastNotificationManagerWrapper.toastManagerWrapper.config(e);
    }
  };
  u.config({
    top: browserEnvDetectionUtil.browserDetector.isLark ? 72 : 32
  });
  require.d(exports, {
    toastManager: function () {
      return u;
    }
  });
}