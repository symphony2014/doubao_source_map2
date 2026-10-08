// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PortalWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 925365
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
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var m = reactCoreLibraryReexport.createContext(null);
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var resolveDomElementUtils = require("resolve-dom-element-utils") /*id: 13199*/;
  var Z = m.Provider;
  var g = function (e) {
    setPrototypeInheritance.setInheritance(t, e);
    var n = wrapNativeSuperHelper.wrapNativeSuper(t);
    function t() {
      var e;
      classCallCheckUtil.classCallCheck(this, t);
      var r = arguments.length;
      var a = Array(r);
      var c = 0;
      for (; c < r; c++) {
        a[c] = arguments[c];
      }
      e = n.call.apply(n, [this].concat(a));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "currentHost", null);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "templateNode", null);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "currentDocument", null);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "portal", null);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "currentWrapperCls", "");
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "firstRender", true);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "getHost", undefined);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "updateRef", function () {
        var n = e.props.innerRef;
        if (n) {
          if (!domElementWindowUtils.isFunction(n) || !n(e.portal)) {
            if (typeofHelper.getType(n) === "object") {
              n.current = e.portal;
            }
          }
        }
      });
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "updateCls", function () {
        var n = e.props;
        var t = n.innerWrapperCls;
        var r = n.wrapperClassName;
        if (e.currentWrapperCls !== r) {
          e.currentWrapperCls = r || "";
          if (e.portal) {
            e.portal.className = conditionalClassnames.default(t, r);
          }
        }
      });
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "innerGetHost", function () {
        return e.getHost(e.currentHost, e.templateNode);
      });
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "upsertHost", function () {
        var n = e.innerGetHost();
        if (n !== e.currentHost) {
          var t = e.currentHost;
          e.currentHost = n;
          if (t && e.portal && t.contains(e.portal)) {
            t.removeChild(e.portal);
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
    classPropertyUtil.defineClassProps(t, [{
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
        var n = this.props.children;
        this.upsertHost();
        if (this.portal) {
          return reactDomEntryWrapper.createPortal(reactCoreLibraryReexport.createElement(Z, {
            value: this.portal
          }, n), this.portal);
        } else {
          return reactCoreLibraryReexport.createElement("span", {
            ref: function (n) {
              return n && (e.templateNode = n);
            }
          });
        }
      }
    }]);
    return t;
  }(reactCoreLibraryReexport.Component);
  var x = function (e) {
    setPrototypeInheritance.setInheritance(t, e);
    var n = wrapNativeSuperHelper.wrapNativeSuper(t);
    function t() {
      var e;
      classCallCheckUtil.classCallCheck(this, t);
      var r = arguments.length;
      var o = Array(r);
      var a = 0;
      for (; a < r; a++) {
        o[a] = arguments[a];
      }
      e = n.call.apply(n, [this].concat(o));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "getHost", function () {
        var n = e.props.container;
        return resolveDomElementUtils.resolveDomElement(n);
      });
      return e;
    }
    return classPropertyUtil.defineClassProps(t);
  }(g);
  var E = function (e) {
    setPrototypeInheritance.setInheritance(t, e);
    var n = wrapNativeSuperHelper.wrapNativeSuper(t);
    function t() {
      var e;
      classCallCheckUtil.classCallCheck(this, t);
      var r = arguments.length;
      var o = Array(r);
      var a = 0;
      for (; a < r; a++) {
        o[a] = arguments[a];
      }
      e = n.call.apply(n, [this].concat(o));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "getHost", function (n, t) {
        var r = e.props;
        var o = r.appendToParentPortal;
        var i = o === undefined || o;
        var a = r.parentPortal;
        var u = a === undefined ? null : a;
        var c = r.iframeRender;
        var l = c !== undefined && c;
        if (!n && (l || i && u) && !t) {
          return null;
        } else if (i && u) {
          return u;
        } else if (l && t) {
          return t.ownerDocument.body;
        } else {
          return document.body;
        }
      });
      return e;
    }
    return classPropertyUtil.defineClassProps(t);
  }(g);
  var b = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var t = reactCoreLibraryReexport.useContext(m);
    var o = reactContextUtilsHooks.useComponentClass("portal")();
    if (e.container === false) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, e.children);
    } else if (e.container !== undefined && e.container !== null) {
      return reactCoreLibraryReexport.createElement(x, objectAssignUtil.objectAssign({}, e, {
        container: e.container,
        innerRef: n,
        innerWrapperCls: o
      }));
    } else {
      return reactCoreLibraryReexport.createElement(E, objectAssignUtil.objectAssign({}, e, {
        parentPortal: t,
        innerWrapperCls: o,
        innerRef: n
      }));
    }
  });
  require.d(exports, {
    PortalWrapper: function () {
      return b;
    }
  });
}