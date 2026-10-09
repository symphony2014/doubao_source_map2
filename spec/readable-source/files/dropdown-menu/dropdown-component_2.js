// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'Dropdown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99771.2ba6bc81.js
         * chunkId: 99771
         * moduleId: 919086
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var popperSidecarWrapper = require("popper-sidecar-wrapper") /*id: 225893*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var createContextModule = require("create-context-module") /*id: 2998*/;
  var mergeReactRefs = require("merge-react-refs") /*id: 686702*/;
  var slideUpDownTransitionFactory = require("slide-up-down-transition-factory") /*id: 450064*/;
  require("empty-module-export-require-wrapper") /*id: 169566*/;
  var d = ["prefixCls", "align", "placement", "showAction", "hideAction", "overlayClassName", "overlayStyle", "trigger", "disabled", "onOverlayClick", "overlay", "children", "udTriggerRef"];
  var p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.prefixCls;
    var p = e.align;
    var v = e.placement;
    var m = e.showAction;
    var h = e.hideAction;
    var y = e.overlayClassName;
    var E = e.overlayStyle;
    var g = e.trigger;
    var b = g === undefined ? "hover" : g;
    var x = e.disabled;
    var Z = e.onOverlayClick;
    var C = e.overlay;
    var w = e.children;
    var S = e.udTriggerRef;
    var N = objectOmitHelper_1.omitWithSymbols(e, d);
    var R = uiConfigContextHooks.useClassName("dropdown");
    var M = popperSidecarWrapper.usePopperSidecar();
    var _ = n || R();
    var I = reactCoreLibraryReexport.useRef(null);
    var A = reactCoreLibraryReexport.useMemo(function () {
      return mergeReactRefs.mergeRefs(I, S);
    }, [I, S]);
    var P = reactCoreLibraryReexport.useMemo(function () {
      if (domTypeUtils_1.isFunction(C)) {
        return C();
      } else {
        return C;
      }
    }, [C]);
    var O = reactCoreLibraryReexport.useCallback(function (e) {
      var t;
      if (domTypeUtils_1.isFunction(Z)) {
        Z(e);
      }
      if (!e || !("domEvent" in e) || !e.domEvent.isDefaultPrevented()) {
        if ((t = I.current) !== null && t !== undefined) {
          t.setVisible(false);
        }
      }
    }, [Z]);
    var k = reactCoreLibraryReexport.createElement(createContextModule.createContext.Provider, {
      value: reactCoreLibraryReexport.useMemo(function () {
        return {
          className: `${_}__overlay`,
          onClick: O
        };
      }, [O, _])
    }, P);
    var T = b.indexOf("contextMenu") !== -1;
    return reactCoreLibraryReexport.createElement(M, objectAssignUtil.objectAssign({}, N, {
      disabled: x !== undefined && x,
      alignPoint: T,
      prefixCls: _,
      ref: t,
      udTriggerRef: A,
      popupClassName: y,
      popupStyle: E,
      action: b,
      showAction: m,
      hideAction: h,
      popupPlacement: v === undefined ? "bottomLeft" : v,
      popupAlign: p,
      popupMotion: "slide-up",
      popup: k,
      showArrow: false,
      arrowHasStroke: false,
      Transition: slideUpDownTransitionFactory.slideUpDownTransition,
      defaultMainAxisOffsetWithoutArrow: 4,
      __screenshotAlwaysOpenEnabled: true
    }), reactCoreLibraryReexport.useCallback(function (e) {
      var t = e.visible;
      if ("selected" in w.props) {
        return w;
      } else {
        return reactCoreLibraryReexport.cloneElement(w, {
          selected: t
        });
      }
    }, [w]));
  });
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var unifiedButtonComponent = require("unified-button-component") /*id: 488299*/;
  var moreOutlinedIconComponent = require("more-outlined-icon-component") /*id: 8155*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var g = ["type", "disabled", "htmlType", "children", "overlay", "trigger", "align", "visible", "defaultVisible", "placement", "href", "icon", "title", "className", "style", "getPopupContainer", "onVisibleChange", "buttonsRender", "onClick", "size"];
  p.Button = function (e) {
    var t = e.type;
    var n = e.disabled;
    var r = e.htmlType;
    var a = e.children;
    var l = e.overlay;
    var c = e.trigger;
    var s = e.align;
    var f = e.visible;
    var d = e.defaultVisible;
    var b = e.placement;
    var x = e.href;
    var Z = e.icon;
    var C = Z === undefined ? reactCoreLibraryReexport.createElement(moreOutlinedIconComponent.MoreOutlinedIcon, null) : Z;
    var w = e.title;
    var S = e.className;
    var N = e.style;
    var R = e.getPopupContainer;
    var M = e.onVisibleChange;
    var _ = e.buttonsRender;
    var I = e.onClick;
    var A = e.size;
    var P = objectOmitHelper_1.omitWithSymbols(e, g);
    var O = uiConfigContextHooks.useClassName("dropdown-button");
    var k = objectPropertyAssign.assignObject({
      align: s,
      overlay: l,
      disabled: n,
      visible: f,
      defaultVisible: d,
      placement: b === undefined ? "bottomRight" : b,
      trigger: c,
      onVisibleChange: M,
      getPopupContainer: R
    }, P);
    var T = reactCoreLibraryReexport.createElement(unifiedButtonComponent.UnifiedButton, {
      size: A,
      type: t,
      disabled: n,
      onClick: I,
      htmlType: r,
      href: x,
      title: w
    }, a);
    var L = reactCoreLibraryReexport.createElement(unifiedButtonComponent.UnifiedButton, {
      size: A,
      disabled: n,
      type: t,
      shape: "square",
      icon: C
    });
    var K = _ ? _([T, L]) : [T, L];
    var D = iterableToArrayUtil_1_1.iterableToArray(K, 2);
    var z = D[0];
    var F = D[1];
    return reactCoreLibraryReexport.createElement("div", {
      style: N,
      className: conditionalClassnames.default(O(), S)
    }, z, reactCoreLibraryReexport.createElement(p, k, F));
  };
  var b = p;
  require.d(exports, {
    Dropdown: function () {
      return b;
    }
  });
}