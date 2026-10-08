// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PortalWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 518899
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var assertThisInitialized = require("assert-this-initialized") /*id: 876127*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var wrapNativeSuperHelper = require("wrap-native-super-helper") /*id: 694678*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var p = reactCoreLibraryReexport.createContext(null);
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var resolveDomElementFromSelector = require("resolve-dom-element-from-selector") /*id: 331611*/;
  var h = p.Provider;
  var v = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var r = arguments.length;
      var a = Array(r);
      var u = 0;
      for (; u < r; u++) {
        a[u] = arguments[u];
      }
      e = t.call.apply(t, [this].concat(a));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "currentHost", null);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "templateNode", null);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "currentDocument", null);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "portal", null);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "currentWrapperCls", "");
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "firstRender", true);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "getHost", undefined);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "updateRef", function () {
        var t = e.props.innerRef;
        if (t) {
          if (!domTypeUtils_1.isFunction(t) || !t(e.portal)) {
            if (typeofHelper.getType(t) === "object") {
              t.current = e.portal;
            }
          }
        }
      });
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "updateCls", function () {
        var t = e.props;
        var n = t.innerWrapperCls;
        var r = t.wrapperClassName;
        if (e.currentWrapperCls !== r) {
          e.currentWrapperCls = r || "";
          if (e.portal) {
            e.portal.className = conditionalClassnames.default(n, r);
          }
        }
      });
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "innerGetHost", function () {
        return e.getHost(e.currentHost, e.templateNode);
      });
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "upsertHost", function () {
        var t = e.innerGetHost();
        if (t !== e.currentHost) {
          var n = e.currentHost;
          e.currentHost = t;
          if (n && e.portal && n.contains(e.portal)) {
            n.removeChild(e.portal);
          }
          if (!e.currentHost) {
            return;
          }
          var r = e.currentHost.ownerDocument;
          if (r && e.currentDocument !== r) {
            e.portal = r.createElement("div");
            e.currentDocument = r;
            if (!e.firstRender) {
              e.setState({});
            }
            e.updateRef();
          }
          if (e.portal) {
            e.currentHost.appendChild(e.portal);
          }
        }
        e.firstRender &&= false;
      });
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "componentDidMount",
      value: function () {
        this.upsertHost();
        this.updateCls();
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        this.upsertHost();
        this.updateCls();
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        if (this.currentHost && this.portal && this.currentHost.contains(this.portal)) {
          this.currentHost.removeChild(this.portal);
        }
        this.portal = null;
        this.currentHost = null;
        this.currentDocument = null;
        this.templateNode = null;
      }
    }, {
      key: "render",
      value: function () {
        var e = this;
        var t = this.props.children;
        this.upsertHost();
        if (this.portal) {
          return reactDomEntryWrapper.createPortal(reactCoreLibraryReexport.createElement(h, {
            value: this.portal
          }, t), this.portal);
        } else {
          return reactCoreLibraryReexport.createElement("span", {
            ref: function (t) {
              return t && (e.templateNode = t);
            }
          });
        }
      }
    }]);
    return n;
  }(reactCoreLibraryReexport.Component);
  var R = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var r = arguments.length;
      var o = Array(r);
      var a = 0;
      for (; a < r; a++) {
        o[a] = arguments[a];
      }
      e = t.call.apply(t, [this].concat(o));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "getHost", function () {
        var t = e.props.container;
        return resolveDomElementFromSelector.resolveDomElement(t);
      });
      return e;
    }
    return classPropertyUtil.defineClassProps(n);
  }(v);
  var T = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var r = arguments.length;
      var o = Array(r);
      var a = 0;
      for (; a < r; a++) {
        o[a] = arguments[a];
      }
      e = t.call.apply(t, [this].concat(o));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "getHost", function (t, n) {
        var r = e.props;
        var o = r.appendToParentPortal;
        var i = o === undefined || o;
        var a = r.parentPortal;
        var c = a === undefined ? null : a;
        var u = r.iframeRender;
        var s = u !== undefined && u;
        if (!t && (s || i && c) && !n) {
          return null;
        } else if (i && c) {
          return c;
        } else if (s && n) {
          return n.ownerDocument.body;
        } else {
          return document.body;
        }
      });
      return e;
    }
    return classPropertyUtil.defineClassProps(n);
  }(v);
  var g = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = reactCoreLibraryReexport.useContext(p);
    var o = uiConfigContextHooks.useClassName("portal")();
    if (e.container === false) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, e.children);
    } else if (e.container !== undefined && e.container !== null) {
      return reactCoreLibraryReexport.createElement(R, objectAssignUtil.objectAssign({}, e, {
        container: e.container,
        innerRef: t,
        innerWrapperCls: o
      }));
    } else {
      return reactCoreLibraryReexport.createElement(T, objectAssignUtil.objectAssign({}, e, {
        parentPortal: n,
        innerWrapperCls: o,
        innerRef: t
      }));
    }
  });
  require.d(exports, {
    PortalWrapper: function () {
      return g;
    }
  });
}