// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'MultiGeoToastManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_synced-reference-block-manager.b4c09d05.js
         * chunkId: 15277
         * moduleId: 330126
         */
module.exports = function (module, exports, require) {
  var s;
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var uiToastManager = require("ui-toast-manager") /*id: 117371*/;
  var i18nTranslateHelper = require("i18n-translate-helper") /*id: 366664*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  (s = r ||= {}).loading = "loading";
  s.success = "success";
  s.error = "error";
  s.info = "info";
  s.warn = "warning";
  let h = {
    _mapProps(e) {
      let i = Object.assign({}, e);
      let n = "text";
      let s = e.key || `${e.type}_${Date.now()}`;
      Object.assign(i, {
        key: s
      });
      Object.assign(i, e.duration !== undefined ? {
        duration: e.duration
      } : {
        duration: 3000
      });
      Object.assign(i, e.keepAlive ? {
        duration: 0
      } : {});
      Object.assign(i, e.closable ? {
        showCloseIcon: true
      } : {
        showCloseIcon: false
      });
      Object.assign(i, e.cancelable ? {
        action: reactCoreLibraryReexport.createElement(universalButtonWrapper.UniversalButton, {
          type: n,
          color: "primary",
          children: e.cancelText || i18nTranslateHelper.translate("common.undo"),
          style: {
            margin: "-2px 0 -2px -4px"
          },
          onClick: (...i) => {
            var n;
            var r;
            if ((n = e.onCancel) !== null && n !== undefined) {
              n.call(e, i);
            }
            if (e.closeAfterCancel) {
              if ((r = e.onClose) !== null && r !== undefined) {
                r.call(e);
              }
              uiToastManager.toastManager.destroy(s);
            }
          }
        })
      } : {});
      Object.assign(i, e.actionText ? {
        action: reactCoreLibraryReexport.createElement(universalButtonWrapper.UniversalButton, {
          type: n,
          color: "primary",
          children: e.actionText,
          style: {
            margin: "-2px 0 -2px -4px"
          },
          onClick: () => {
            var i;
            var n;
            if ((i = e.onActionClick) !== null && i !== undefined) {
              i.call(e);
            }
            if ((n = e.onClose) !== null && n !== undefined) {
              n.call(e);
            }
            uiToastManager.toastManager.destroy(s);
          }
        })
      } : {});
      return i;
    },
    open(e) {
      Promise.resolve().then(() => uiToastManager.toastManager.open(this._mapProps(e)));
    },
    show(e) {
      this.open(e);
    },
    info(e) {
      Promise.resolve().then(() => uiToastManager.toastManager.info(Object.assign(Object.assign({}, this._mapProps(e)), {
        type: r.info
      })));
    },
    success(e) {
      Promise.resolve().then(() => uiToastManager.toastManager.success(Object.assign(Object.assign({}, this._mapProps(e)), {
        type: r.success
      })));
    },
    update() {},
    error(e) {
      Promise.resolve().then(() => uiToastManager.toastManager.error(Object.assign(Object.assign({}, this._mapProps(e)), {
        type: r.error
      })));
    },
    warning(e) {
      Promise.resolve().then(() => uiToastManager.toastManager.warning(Object.assign(Object.assign({}, this._mapProps(e)), {
        type: r.warn
      })));
    },
    loading(e) {
      Promise.resolve().then(() => uiToastManager.toastManager.loading(this._mapProps(e)));
    },
    remove(e) {
      this.destroy(e);
    },
    removeAll() {
      this.destroy();
    },
    destroy(e) {
      Promise.resolve().then(() => uiToastManager.toastManager.destroy(e));
    },
    config(e) {
      uiToastManager.toastManager.config(e);
    }
  };
  h.config({
    top: browserEnvDetectionUtil.browserDetector.isLark ? 72 : 32
  });
  let d = i18nTranslateHelper.translate("CreationDoc_MultiGeo_900004230");
  let p = new class {
    constructor() {
      this.moveList = [];
      this.multiToastKey = "Toast_key_MultiGeo_900004230";
    }
    get isMobile() {
      return browserEnvDetectionUtil.browserDetector.isMobile && browserEnvDetectionUtil.browserDetector.isLark;
    }
    start(e) {
      if (!~this.moveList.indexOf(e)) {
        this.moveList.push(e);
        this._showTip(e);
      }
    }
    endAll() {
      if (this.moveList.length) {
        this.moveList = [];
        this._destoryTip();
      }
    }
    end(e) {
      let i = this.moveList.indexOf(e);
      if (~i) {
        this.moveList.splice(i, 1);
        this._destoryTip();
      }
    }
    getList() {
      return {
        moveList: this.moveList
      };
    }
    _showTip(e) {
      if (this.isMobile) {
        window.lark.biz.util.showMessage({
          type: "error",
          text: d
        });
      } else {
        if (this.moveList.length > 1) {
          return;
        }
        h.error({
          key: this.multiToastKey,
          content: d,
          duration: 0,
          closable: true,
          onClose: () => this.end(e)
        });
      }
    }
    _destoryTip() {
      if (this.isMobile) {
        window.lark.biz.util.hideMessage();
      } else if (!this.moveList.length) {
        h.destroy(this.multiToastKey);
      }
    }
  }();
  require.d(exports, {
    MultiGeoToastManager: function () {
      return p;
    }
  });
}