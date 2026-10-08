// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'slideToastManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58943.d2e657c6.js
         * chunkId: 58943
         * moduleId: 842073
         */
module.exports = function (module, exports, require) {
  var toastNotificationHelper = require("toast-notification-helper") /*id: 83051*/;
  function n(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class a {
    static getSlideToastManger() {
      this.slideToastManger ||= new a();
      return this.slideToastManger;
    }
    init() {
      this.toastKeyList = [];
    }
    genToastOptions(e) {
      let {
        duration: t,
        key: i,
        showCloseIcon: r = false,
        onClose: n
      } = e;
      return {
        duration: t === null || t === 0 ? Infinity : t || 4000,
        id: i,
        customContentProps: {
          showCloseIcon: r
        },
        toasterId: this.toastContainerId,
        onDismiss: () => {
          this.toastKeyList = this.toastKeyList.filter(e => e !== i);
          if (n != null) {
            n();
          }
        }
      };
    }
    constructor() {
      n(this, "toastContainerId", "slide-toast-container");
      n(this, "toastKeyList", []);
      n(this, "showToast", e => {
        var t;
        let {
          type: i = "info",
          ...n
        } = e;
        let a = (t = toastNotificationHelper.toastNotification[i]) === null || t === undefined ? undefined : t.call(toastNotificationHelper.toastNotification, n.content, this.genToastOptions(n));
        this.toastKeyList.push(a);
      });
      n(this, "hideToast", e => {
        if (e) {
          toastNotificationHelper.toastNotification.dismiss(e);
          return;
        }
        this.toastKeyList.forEach(e => {
          toastNotificationHelper.toastNotification.dismiss(e);
        });
      });
      n(this, "destroy", () => {
        this.toastKeyList = [];
      });
    }
  }
  n(a, "slideToastManger", null);
  let l = a.getSlideToastManger();
  require.d(exports, {
    slideToastManager: function () {
      return l;
    }
  });
}