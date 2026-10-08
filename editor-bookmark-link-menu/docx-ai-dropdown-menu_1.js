// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r6' to 'AiDropdownMenu'
// - Renamed export 'D2' to 'AiMenuButton'
// - Renamed export 'zT' to 'AiMenuItem'
// - Renamed export 's8' to 'AiMenuGroup'
// - Renamed export 'H0' to 'AiMenuDivider'
// - Renamed export 'Sr' to 'AiMenuSub'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89647.6be961c3.js
         * chunkId: 89647
         * moduleId: 679475
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var loadingWrapperComponent = require("loading-wrapper-component") /*id: 376931*/;
  var tagComponent = require("tag-component") /*id: 332146*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var downBoldOutlinedIcon = require("down-bold-outlined-icon") /*id: 179352*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var v = ["prefixId"];
  function f(e) {
    e.prefixId;
    var n = objectOmitHelper_1.omitWithSymbols(e, v);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n), reactCoreLibraryReexport.createElement("path", {
      d: "M7.293 4.293a1 1 0 0 0 0 1.414L13.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z",
      fill: "currentColor"
    }));
  }
  var p = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: f
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "RightSmallCcmOutlined"
      }
    }));
  });
  var b = require("done-outlined-icon") /*id: 273065*/.DoneOutlinedIcon;
  var docxAiMenuUtils = require("docx-ai-menu-utils") /*id: 154715*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var incrementalCounterUtil = require("incremental-counter-util") /*id: 767112*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  function x(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  var S = new class {
    showTooltip() {
      this.onShow(!this.visible);
      this.visible = true;
    }
    triggerShow() {
      if (this.visible) {
        this.showTooltip();
      } else {
        this.willShow();
      }
    }
    triggerHide(e) {
      this.isLeaving = false;
      this.onHide(e);
    }
    clearHideTimerIfNecessary() {
      if (this.hideTimer) {
        window.clearTimeout(this.hideTimer);
        this.hideTimer = null;
      }
    }
    enterItemHasTooltip(e, n, i) {
      this.clearHideTimerIfNecessary();
      this.isLeaving = false;
      if (this.currentKey !== e) {
        this.triggerHide(false);
        this.currentKey = e;
        this.onShow = n;
        this.onHide = i;
        this.triggerShow();
      }
    }
    leaveItemHasTooltip() {
      if (!this.isLeaving) {
        this.willShow.cancel();
        this.isLeaving = true;
        if (this.visible) {
          this.willHide();
        } else {
          this.currentKey = "";
        }
      }
    }
    isTooltipShowCurrentKey(e) {
      return this.currentKey === e;
    }
    constructor() {
      x(this, "currentKey", "");
      x(this, "visible", false);
      x(this, "isLeaving", false);
      x(this, "onShow", emptyExportFunction.emptyFunction);
      x(this, "onHide", emptyExportFunction.emptyFunction);
      x(this, "willShow", debounceUtil_1_1.debounce(() => {
        this.showTooltip();
      }, 300));
      x(this, "hideTimer", null);
      x(this, "willHide", () => {
        this.triggerHide(false);
        this.hideTimer = window.setTimeout(() => {
          this.hideTimer = null;
          this.visible = false;
          this.currentKey = "";
        }, 200);
      });
    }
  }();
  var docxAiMenuConstants = require("docx-ai-menu-constants") /*id: 255694*/;
  var stubBooleanFunctions = require("stub-boolean-functions") /*id: 871839*/;
  var touchInteractionUtil = require("touch-interaction-util") /*id: 593236*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let N = () => reactJsxRuntimeCoreReexport.jsx(loadingWrapperComponent.LoadingWrapper, {
    size: "small",
    style: {
      marginLeft: 4
    }
  });
  let L = e => {
    let {
      type: n,
      tagText: i
    } = e;
    if (n === editorConstantsEnums.ReleaseMode.New) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "menu-new-tag",
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: "menu-new-tag-text",
          children: "New"
        })
      });
    } else if (n === editorConstantsEnums.ReleaseMode.Old) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "menu-old-tag",
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: "menu-old-tag-text",
          children: t("LarkCCM_Docs_Board_FlowUMLOldVersion_Tag")
        })
      });
    } else if (n === editorConstantsEnums.ReleaseMode.Debug) {
      return reactJsxRuntimeCoreReexport.jsx("span", {
        className: "menu-tag",
        children: reactJsxRuntimeCoreReexport.jsx(tagComponent.TagComponent, {
          color: "orange",
          size: "extra-small",
          children: "Debug"
        })
      });
    } else if (n === editorConstantsEnums.ReleaseMode.Beta) {
      return reactJsxRuntimeCoreReexport.jsx("span", {
        className: "menu-tag",
        children: reactJsxRuntimeCoreReexport.jsx(tagComponent.TagComponent, {
          size: "extra-small",
          children: "Beta"
        })
      });
    } else if (i) {
      return reactJsxRuntimeCoreReexport.jsx("span", {
        className: "menu-tag-custom",
        children: reactJsxRuntimeCoreReexport.jsx(tagComponent.TagComponent, {
          color: "orange",
          size: "extra-small",
          children: i
        })
      });
    } else {
      return null;
    }
  };
  let Z = e => {
    let {
      tag: n,
      text: i,
      tagText: o
    } = e;
    let a = reactCoreLibraryReexport.useRef(null);
    let [s, u] = reactCoreLibraryReexport.useState(false);
    let [m, d] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (a.current && a.current?.scrollWidth > a.current?.clientWidth) {
        u(true);
      }
    }, [i, n, o]);
    if (i) {
      return reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
        title: i,
        visible: m && s,
        placement: "right",
        onVisibleChange: e => d(e),
        overlayStyle: {
          zIndex: 2070
        },
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: l("menu-text", {
            "menu-text-flex": n || o
          }),
          ref: a,
          children: [i, reactJsxRuntimeCoreReexport.jsx(L, {
            type: n,
            tagText: o
          })]
        })
      });
    } else {
      return null;
    }
  };
  let E = e => {
    let {
      item: {
        icon: n,
        text: i,
        desc: r,
        suffix: o,
        tag: a,
        tagText: s
      },
      showIconColor: c,
      extraContent: u
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "menu-item-content",
      children: [n && reactJsxRuntimeCoreReexport.jsx("div", {
        className: l("menu-icon", {
          "show-icon-color": c
        }),
        children: n
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "menu-item-main-box-wrapper",
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "menu-item-main-box",
          children: [reactJsxRuntimeCoreReexport.jsx(Z, {
            text: i,
            tag: a,
            tagText: s
          }), o && reactJsxRuntimeCoreReexport.jsx("div", {
            className: "menu-suffix",
            children: o
          }), u]
        }), r && reactJsxRuntimeCoreReexport.jsx("div", {
          className: "menu-item-desc",
          children: r
        })]
      })]
    });
  };
  let D = e => {
    let {
      hovered: n,
      actived: i,
      disabled: o,
      setItemRef: a,
      useItemClass: s = true,
      className: c,
      title: u,
      name: m,
      onMouseEnter: d,
      onMouseLeave: h,
      onMouseMove: v,
      onClick: f,
      onTouchToClick: p,
      children: b,
      vertical: w
    } = e;
    let C = reactCoreLibraryReexport.useRef(null);
    let g = reactCoreLibraryReexport.useCallback(e => {
      C.current = e;
      if (a != null) {
        a(e);
      }
    }, []);
    let _ = reactCoreLibraryReexport.useCallback(e => !w || docxAiMenuUtils.isClickOutside(e, C), [w]);
    let x = reactCoreLibraryReexport.useCallback(e => {
      if (browserEnvironmentDetectionUtils.browserDetector.isIPad || browserEnvironmentDetectionUtils.isMiuiBrowser()) {
        if (_(e)) {
          e.persist();
          e.nativeEvent.preventDefault();
          setTimeout(() => {
            if (d != null) {
              d(e);
            }
            if (p != null) {
              p(e);
            }
          });
        }
      } else if (p != null) {
        p(e);
      }
    }, [p]);
    let S = reactCoreLibraryReexport.useCallback(touchInteractionUtil.createTouchHandler({
      onClick: e => x(e)
    }), [x]);
    let T = reactCoreLibraryReexport.useCallback(e => {
      e.preventDefault();
    }, []);
    let N = reactCoreLibraryReexport.useCallback(e => {
      if (stubBooleanFunctions.alwaysFalseStub()) {
        e.nativeEvent.preventDefault();
        setTimeout(() => {
          if (f != null) {
            f(e);
          }
        });
        return;
      }
      if (f != null) {
        f(e);
      }
    }, [f]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: g,
      className: l(c, {
        "panel-menu-item": s,
        "menu-item-hovered": n,
        "menu-item-actived": i,
        "menu-item-disabled": o
      }),
      "data-name": m,
      onTouchStart: S,
      onTouchMove: S,
      onTouchEnd: S,
      onClick: N,
      onMouseEnter: d,
      onMouseLeave: h,
      onMouseMove: v,
      onMouseDown: T,
      title: u,
      children: b
    });
  };
  let $ = e => {
    let {
      vertical: n,
      onMouseEnter: i,
      onMouseLeave: o
    } = e;
    let l = reactCoreLibraryReexport.useCallback(e => {
      e.persist();
      e.nativeEvent.preventDefault();
      if (i != null) {
        i();
      }
    }, [i]);
    let a = reactCoreLibraryReexport.useCallback(touchInteractionUtil.createTouchHandler({
      onClick: e => l(e)
    }), [l]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: docxAiMenuConstants.arrowClass,
      onMouseEnter: i,
      onMouseLeave: o,
      onTouchStart: a,
      onTouchEnd: a,
      onTouchMove: a,
      children: n ? reactJsxRuntimeCoreReexport.jsx(downBoldOutlinedIcon.DownBoldIcon, {
        className: "arrow-down"
      }) : reactJsxRuntimeCoreReexport.jsx(p, {})
    });
  };
  let j = () => reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "item-checked",
    children: reactJsxRuntimeCoreReexport.jsx(b, {})
  }), []);
  let B = reactCoreLibraryReexport.forwardRef((e, n) => {
    let {
      item: i,
      placement: o,
      vertical: l,
      children: a
    } = e;
    let {
      hasTooltip: s,
      visible: u,
      placement: m,
      align: d,
      transitionTime: h,
      showTooltip: v,
      hideTooltip: f
    } = function (e, n) {
      let {
        placement: i,
        vertical: o
      } = n;
      let [l] = reactCoreLibraryReexport.useState(incrementalCounterUtil.incrementalCounter());
      let a = reactCoreLibraryReexport.useMemo(() => (!e.disabled || e.forceShowTip) && !!e.tip, [e.disabled, e.tip]);
      let [s, c] = reactCoreLibraryReexport.useState(false);
      let [u, m] = reactCoreLibraryReexport.useState(false);
      let d = reactCoreLibraryReexport.useMemo(() => {
        return i ?? e.tipPlacement ?? (o ? "top" : "right");
      }, [i, e.tipPlacement, o]);
      let h = reactCoreLibraryReexport.useMemo(() => ({
        targetOffset: ["top", "bottom"].includes(d) ? [0, 4] : [-4, 0]
      }), [o]);
      let v = reactCoreLibraryReexport.useMemo(() => !!u * 0.1, [u]);
      let f = reactCoreLibraryReexport.useCallback(() => {
        if (a) {
          S.enterItemHasTooltip(l, n => {
            var i;
            c(true);
            m(n);
            if ((i = e.onTooltipShow) !== null && i !== undefined) {
              i.call(e);
            }
          }, e => {
            c(false);
            m(e);
          });
        }
      }, [a, l, e.onTooltipShow]);
      let p = reactCoreLibraryReexport.useCallback(() => {
        if (S.isTooltipShowCurrentKey(l)) {
          S.leaveItemHasTooltip();
        }
      }, [l]);
      reactCoreLibraryReexport.useEffect(() => () => p(), [p]);
      return {
        hasTooltip: a,
        visible: s,
        align: h,
        placement: d,
        transitionTime: v,
        showTooltip: f,
        hideTooltip: p
      };
    }(i, {
      placement: o,
      vertical: l
    });
    reactCoreLibraryReexport.useImperativeHandle(n, () => ({
      showTooltip: v,
      hideTooltip: f
    }), [v, f]);
    if (s) {
      return reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
        visible: u,
        overlayStyle: {
          zIndex: 1100
        },
        title: i.tip,
        placement: m,
        popupAlign: d,
        mouseEnterDelay: h,
        trigger: "hover",
        overlayClassName: "toolbar-button-tooltip",
        overlayStyle: {
          zIndex: 2070
        },
        children: a
      });
    } else {
      return a;
    }
  });
  require.d(exports, {
    AiDropdownMenu: function () {
      return B;
    },
    AiMenuButton: function () {
      return N;
    },
    AiMenuItem: function () {
      return E;
    },
    AiMenuGroup: function () {
      return D;
    },
    AiMenuDivider: function () {
      return $;
    },
    AiMenuSub: function () {
      return j;
    }
  });
}