// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'Dropdown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 534681
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var popupTriggerPopover = require("popup-trigger-popover") /*id: 283846*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var vmContextProvider = require("vm-context-provider") /*id: 393771*/;
  var mergeRefsUtil = require("merge-refs-util") /*id: 590380*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var emotionTransitionFactory = require("emotion-transition-factory") /*id: 592980*/;
  var cubicBezierEasingConstant = require("cubic-bezier-easing-constant") /*id: 598912*/;
  var g = emotionTransitionFactory.styledTransition({
    name: function (e) {
      var t = e.placement;
      return `slide-up-down-${t}`;
    },
    styles: function (e) {
      var t = e.placement.split("-");
      var n = iterableToArrayUtil_1_1.iterableToArray(t, 2);
      var o = n[0];
      var i = n[1];
      var r = "0";
      if (o === "bottom" || o.match(/right|left/) && i === "start") {
        r = "-8px";
      } else if (o === "top" || o.match(/right|left/) && i === "end") {
        r = "8px";
      }
      return {
        appear: `opacity: 0;transform: translateY(${r});`,
        enter: `opacity: 0;transform: translateY(${r});`,
        exitDone: `opacity: 0;transform: translateY(${r});`,
        appearActive: "opacity: 1;transform: translateY(0);",
        enterActive: "opacity: 1;transform: translateY(0);",
        appearDone: "opacity: 1;transform: translateY(0);",
        enterDone: "opacity: 1;transform: translateY(0);",
        exit: "opacity: 1;transform: translateY(0);",
        exitActive: `opacity: 0;transform: translateY(${r});`
      };
    },
    transitions: {
      appearActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}, transform ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}`;
      },
      enterActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}, transform ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}`;
      },
      exitActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}, transform ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}`;
      }
    }
  });
  require("webcrack-shim-init") /*id: 318955*/;
  var p = ["prefixCls", "align", "placement", "showAction", "hideAction", "overlayClassName", "overlayStyle", "trigger", "disabled", "onOverlayClick", "overlay", "children", "udTriggerRef"];
  var v = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.prefixCls;
    var u = e.align;
    var h = e.placement;
    var f = e.showAction;
    var v = e.hideAction;
    var m = e.overlayClassName;
    var C = e.overlayStyle;
    var y = e.trigger;
    var S = y === undefined ? "hover" : y;
    var b = e.disabled;
    var E = e.onOverlayClick;
    var L = e.overlay;
    var w = e.children;
    var I = e.udTriggerRef;
    var k = objectOmitHelper_1.omitWithSymbols(e, p);
    var M = reactContextUtilsHooks.useComponentClass("dropdown");
    var R = popupTriggerPopover.PopperTrigger();
    var T = n || M();
    var x = reactCoreLibraryReexport.useRef(null);
    var Z = reactCoreLibraryReexport.useMemo(function () {
      return mergeRefsUtil.mergeRefs(x, I);
    }, [x, I]);
    var z = reactCoreLibraryReexport.useMemo(function () {
      if (domElementWindowUtils.isFunction(L)) {
        return L();
      } else {
        return L;
      }
    }, [L]);
    var D = reactCoreLibraryReexport.useCallback(function (e) {
      var t;
      if (domElementWindowUtils.isFunction(E)) {
        E(e);
      }
      if (!e || !("domEvent" in e) || !e.domEvent.isDefaultPrevented()) {
        if ((t = x.current) !== null && t !== undefined) {
          t.setVisible(false);
        }
      }
    }, [E]);
    var A = reactCoreLibraryReexport.createElement(vmContextProvider.vmContext.Provider, {
      value: reactCoreLibraryReexport.useMemo(function () {
        return {
          className: `${T}__overlay`,
          onClick: D
        };
      }, [D, T])
    }, z);
    var P = S.indexOf("contextMenu") !== -1;
    return reactCoreLibraryReexport.createElement(R, objectAssignUtil.objectAssign({}, k, {
      disabled: b !== undefined && b,
      alignPoint: P,
      prefixCls: T,
      ref: t,
      udTriggerRef: Z,
      popupClassName: m,
      popupStyle: C,
      action: S,
      showAction: f,
      hideAction: v,
      popupPlacement: h === undefined ? "bottomLeft" : h,
      popupAlign: u,
      popupMotion: "slide-up",
      popup: A,
      showArrow: false,
      arrowHasStroke: false,
      Transition: g,
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
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var moreOutlinedIconComponent = require("more-outlined-icon-component") /*id: 8155*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var b = ["type", "disabled", "htmlType", "children", "overlay", "trigger", "align", "visible", "defaultVisible", "placement", "href", "icon", "title", "className", "style", "getPopupContainer", "onVisibleChange", "buttonsRender", "onClick", "size"];
  v.Button = function (e) {
    var t = e.type;
    var n = e.disabled;
    var o = e.htmlType;
    var l = e.children;
    var s = e.overlay;
    var d = e.trigger;
    var c = e.align;
    var h = e.visible;
    var f = e.defaultVisible;
    var g = e.placement;
    var p = e.href;
    var E = e.icon;
    var L = E === undefined ? reactCoreLibraryReexport.createElement(moreOutlinedIconComponent.MoreOutlinedIcon, null) : E;
    var w = e.title;
    var I = e.className;
    var k = e.style;
    var M = e.getPopupContainer;
    var R = e.onVisibleChange;
    var T = e.buttonsRender;
    var x = e.onClick;
    var Z = e.size;
    var z = objectOmitHelper_1.omitWithSymbols(e, b);
    var D = reactContextUtilsHooks.useComponentClass("dropdown-button");
    var A = objectPropertyAssign.assignObject({
      align: c,
      overlay: s,
      disabled: n,
      visible: h,
      defaultVisible: f,
      placement: g === undefined ? "bottomRight" : g,
      trigger: d,
      onVisibleChange: R,
      getPopupContainer: M
    }, z);
    var P = reactCoreLibraryReexport.createElement(universalButtonWrapper.UniversalButton, {
      size: Z,
      type: t,
      disabled: n,
      onClick: x,
      htmlType: o,
      href: p,
      title: w
    }, l);
    var F = reactCoreLibraryReexport.createElement(universalButtonWrapper.UniversalButton, {
      size: Z,
      disabled: n,
      type: t,
      shape: "square",
      icon: L
    });
    var O = T ? T([P, F]) : [P, F];
    var N = iterableToArrayUtil_1_1.iterableToArray(O, 2);
    var B = N[0];
    var H = N[1];
    return reactCoreLibraryReexport.createElement("div", {
      style: k,
      className: conditionalClassnames.default(D(), I)
    }, B, reactCoreLibraryReexport.createElement(v, A, H));
  };
  var E = v;
  require.d(exports, {
    Dropdown: function () {
      return E;
    }
  });
}