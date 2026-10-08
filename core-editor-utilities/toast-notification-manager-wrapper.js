// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Am' to 'toastManagerWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 314333
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var a;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var assertThisInitialized = require("assert-this-initialized") /*id: 876127*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var wrapNativeSuperHelper = require("wrap-native-super-helper") /*id: 694678*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var uiDefaultContextProvider = require("ui-default-context-provider") /*id: 792028*/;
  var toastNotificationManager = require("toast-notification-manager") /*id: 116233*/;
  function m() {
    var e = document.createElement("div");
    document.body.appendChild(e);
    return e;
  }
  function w(e) {
    if (e) {
      o = e;
    }
  }
  require("empty-module-export-shims") /*id: 967454*/;
  var E = function (e) {
    setPrototypeInheritance.setInheritance(r, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(r);
    function r() {
      var e;
      classCallCheckUtil.classCallCheck(this, r);
      var n = arguments.length;
      var o = Array(n);
      var a = 0;
      for (; a < n; a++) {
        o[a] = arguments[a];
      }
      e = t.call.apply(t, [this].concat(o));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "div", undefined);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "isDefaultContainer", true);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "getContainer", function () {
        var t = e.props.getContainer;
        if (!e.div) {
          var r = t == null ? undefined : t();
          e.div = r || m();
          if (r) {
            e.isDefaultContainer = false;
          }
        }
        return e.div;
      });
      return e;
    }
    classPropertyUtil.defineClassProps(r, [{
      key: "componentWillUnmount",
      value: function () {
        o = undefined;
        if (this.isDefaultContainer && this.div) {
          this.div.remove();
          this.div = undefined;
        }
      }
    }, {
      key: "render",
      value: function () {
        return reactCoreLibraryReexport.createElement(toastNotificationManager.ToastManager, objectAssignUtil.objectAssign({}, this.props, {
          ref: w,
          getContainer: this.getContainer
        }));
      }
    }]);
    return r;
  }(reactCoreLibraryReexport.Component);
  n = function () {
    if (o) {
      return Promise.resolve(o);
    } else {
      return a ||= new Promise(function (e) {
        var t = m();
        reactDomEntryWrapper.render(reactCoreLibraryReexport.createElement(uiDefaultContextProvider.UiProviderWrapper, null, reactCoreLibraryReexport.createElement(E, {
          ref: function () {
            if (o) {
              a = undefined;
              e(o);
            }
          },
          getContainer: function () {
            return t;
          }
        })), t);
      });
    }
  };
  var k = {
    open: function (e) {
      return n().then(function (t) {
        return t.open(e) || "";
      });
    },
    info: function (e, t, r) {
      return n().then(function (n) {
        return n.info(e, t, r);
      });
    },
    success: function (e, t, r) {
      return n().then(function (n) {
        return n.success(e, t, r);
      });
    },
    warning: function (e, t, r) {
      return n().then(function (n) {
        return n.warning(e, t, r);
      });
    },
    warn: function (e, t, r) {
      return n().then(function (n) {
        return n.warn(e, t, r);
      });
    },
    error: function (e, t, r) {
      return n().then(function (n) {
        return n.error(e, t, r);
      });
    },
    loading: function (e, t, r) {
      return n().then(function (n) {
        return n.loading(e, t, r);
      });
    },
    config: function (e) {
      toastNotificationManager.ToastManager.globalConfig = e;
    },
    destroy: function (e) {
      n().then(function (t) {
        return t.destroy(e);
      });
    }
  };
  require.d(exports, {
    toastManagerWrapper: function () {
      return k;
    }
  });
}