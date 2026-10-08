// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'RefDomWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 908742
         */
module.exports = function (module, exports, require) {
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var assertThisInitialized = require("assert-this-initialized") /*id: 876127*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var wrapNativeSuperHelper = require("wrap-native-super-helper") /*id: 694678*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var domElementUtils = require("dom-element-utils") /*id: 431931*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var m = ["children", "childRef", "domOnly"];
  var h = function (e) {
    setPrototypeInheritance.setInheritance(t, e);
    var n = wrapNativeSuperHelper.wrapNativeSuper(t);
    function t() {
      var e;
      classCallCheckUtil.classCallCheck(this, t);
      var r = arguments.length;
      var i = Array(r);
      var u = 0;
      for (; u < r; u++) {
        i[u] = arguments[u];
      }
      e = n.call.apply(n, [this].concat(i));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "node", undefined);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "hasRefFuncBeenCalled", false);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "isRefSupported", true);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "updateChildRef", function (n) {
        if (e.node !== n && (!e.domOnly || n === null || domElementUtils.isHTMLElement(n) || domElementUtils.isSVGElement(n))) {
          reactRefEffectUtils.setRefValue(e.props.childRef, n);
          e.node = n;
        }
      });
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "updateRefWhenLifecycle", function () {
        if (e.domOnly) {
          var n = e.props.children;
          if (!reactRefEffectUtils.isClassComponent(n)) {
            e.updateChildRef(reactDomEntryWrapper.findDOMNode(assertThisInitialized.assertThisInit(e)));
            return;
          }
          if (!e.hasRefFuncBeenCalled) {
            e.updateChildRef(reactDomEntryWrapper.findDOMNode(assertThisInitialized.assertThisInit(e)));
            e.hasRefFuncBeenCalled = false;
          }
        }
      });
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "updateRefWhenSupportRef", function (n) {
        if (n === null) {
          e.updateChildRef(null);
          e.hasRefFuncBeenCalled = false;
          return;
        }
        e.hasRefFuncBeenCalled = true;
        var t;
        var r = (t = e.props.children) == null ? undefined : t.ref;
        if (r) {
          reactRefEffectUtils.setRefValue(r, n);
        }
        if (e.domOnly && n && !domElementUtils.isElementNode(n)) {
          e.updateChildRef(reactDomEntryWrapper.findDOMNode(assertThisInitialized.assertThisInit(e)));
          return;
        }
        e.updateChildRef(n);
      });
      return e;
    }
    classPropertyUtil.defineClassProps(t, [{
      key: "domOnly",
      get: function () {
        var e = this.props.domOnly;
        return e === undefined || e;
      }
    }, {
      key: "componentDidMount",
      value: function () {
        this.updateRefWhenLifecycle();
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        this.updateRefWhenLifecycle();
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        if (!this.isRefSupported) {
          reactRefEffectUtils.setRefValue(this.props.childRef, null);
          this.hasRefFuncBeenCalled = false;
        }
      }
    }, {
      key: "render",
      value: function () {
        this.isRefSupported = false;
        var e = this.props;
        var n = e.children;
        e.childRef;
        e.domOnly;
        var t = objectOmitHelper_1.omitWithSymbols(e, m);
        if (!reactCoreLibraryReexport.isValidElement(n)) {
          return n;
        }
        var o = reactCoreLibraryReexport.cloneElement(n, t);
        if (reactRefEffectUtils.isClassComponent(o)) {
          this.isRefSupported = true;
          return reactCoreLibraryReexport.cloneElement(o, {
            ref: this.updateRefWhenSupportRef
          });
        } else {
          return o;
        }
      }
    }]);
    return t;
  }(reactCoreLibraryReexport.Component);
  function y(e) {
    var n = e.children;
    var t = e.ref;
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var o = r.skipped;
    var i = r.domOnly;
    if (o !== undefined && o || !domElementWindowUtils.isNotNullOrUndefined(n)) {
      return n;
    } else {
      return reactCoreLibraryReexport.createElement(h, {
        domOnly: i,
        childRef: t
      }, n);
    }
  }
  require.d(exports, {
    RefDomWrapper: function () {
      return y;
    }
  });
}