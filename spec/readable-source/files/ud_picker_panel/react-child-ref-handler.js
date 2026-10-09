// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'createRefWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 955736
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
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var domElementUtils_1 = require("dom-element-utils_1") /*id: 846713*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var p = ["children", "childRef", "domOnly"];
  var E = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var r = arguments.length;
      var i = Array(r);
      var c = 0;
      for (; c < r; c++) {
        i[c] = arguments[c];
      }
      e = t.call.apply(t, [this].concat(i));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "node", undefined);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "hasRefFuncBeenCalled", false);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "isRefSupported", true);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "updateChildRef", function (t) {
        if (e.node !== t && (!e.domOnly || t === null || domElementUtils_1.isHtmlElement(t) || domElementUtils_1.isSvgElement(t))) {
          reactRefEffectUtils.setRefValue(e.props.childRef, t);
          e.node = t;
        }
      });
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "updateRefWhenLifecycle", function () {
        if (e.domOnly) {
          var t = e.props.children;
          if (!reactRefEffectUtils.isClassComponent(t)) {
            e.updateChildRef(reactDomEntryWrapper.findDOMNode(assertThisInitialized.assertThisInit(e)));
            return;
          }
          if (!e.hasRefFuncBeenCalled) {
            e.updateChildRef(reactDomEntryWrapper.findDOMNode(assertThisInitialized.assertThisInit(e)));
            e.hasRefFuncBeenCalled = false;
          }
        }
      });
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "updateRefWhenSupportRef", function (t) {
        if (t === null) {
          e.updateChildRef(null);
          e.hasRefFuncBeenCalled = false;
          return;
        }
        e.hasRefFuncBeenCalled = true;
        var n;
        var r = (n = e.props.children) == null ? undefined : n.ref;
        if (r) {
          reactRefEffectUtils.setRefValue(r, t);
        }
        if (e.domOnly && t && !domElementUtils_1.isElementNode(t)) {
          e.updateChildRef(reactDomEntryWrapper.findDOMNode(assertThisInitialized.assertThisInit(e)));
          return;
        }
        e.updateChildRef(t);
      });
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
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
        var t = e.children;
        e.childRef;
        e.domOnly;
        var n = objectOmitHelper_1.omitWithSymbols(e, p);
        if (!reactCoreLibraryReexport.isValidElement(t)) {
          return t;
        }
        var o = reactCoreLibraryReexport.cloneElement(t, n);
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
    return n;
  }(reactCoreLibraryReexport.Component);
  function C(e) {
    var t = e.children;
    var n = e.ref;
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var o = r.skipped;
    var i = r.domOnly;
    if (o !== undefined && o || !domTypeUtils_1.isDefined(t)) {
      return t;
    } else {
      return reactCoreLibraryReexport.createElement(E, {
        domOnly: i,
        childRef: n
      }, t);
    }
  }
  require.d(exports, {
    createRefWrapper: function () {
      return C;
    }
  });
}