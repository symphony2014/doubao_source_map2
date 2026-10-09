// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxAiMenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89647.6be961c3.js
         * chunkId: 89647
         * moduleId: 604848
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var a = eventEmitterUmd;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var m = classnamesUtils;
  var versionCompareUtil = require("version-compare-util") /*id: 147266*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxAiMenuUtils = require("docx-ai-menu-utils") /*id: 154715*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  function b(e, n, i) {
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
  class k {
    clearHideTimer() {
      if (this.hideTimer) {
        window.clearTimeout(this.hideTimer);
        this.hideTimer = null;
      }
    }
    clearShowTimer() {
      if (this.showTimer) {
        window.clearTimeout(this.showTimer);
        this.showTimer = null;
      }
    }
    triggerHideSubmenu(e) {
      if (this.itemHasSubmenu) {
        let {
          onHide: n
        } = this.itemHasSubmenu;
        let i = () => {
          n();
          this.itemHasSubmenu = null;
        };
        this.clearShowTimer();
        if (e) {
          i();
          this.clearHideTimer();
          return;
        }
        this.hideTimer ||= window.setTimeout(() => {
          i();
          this.hideTimer = null;
        }, 200);
      }
    }
    triggerShowSubmenu() {
      if (!this.itemHasSubmenu || this.itemHasSubmenu.visible || this.showTimer) {
        return;
      }
      let e = this.itemHasSubmenu;
      let {
        onShow: n
      } = e;
      this.showTimer = window.setTimeout(() => {
        n();
        e.visible = true;
        this.showTimer = null;
      }, 100);
    }
    clearSubmenuDelayCallbackIfNecessary() {
      if (this.itemHasSubmenu?.key !== this.currentKey) {
        this.leaveItem();
      }
    }
    leaveItem() {
      return this.triggerHideSubmenu(true);
    }
    willLeaveItem() {
      return this.triggerHideSubmenu(false);
    }
    enterItemNormal(e) {
      this.currentKey = e;
      this.itemNormal = {
        key: e
      };
      this.willLeaveItem();
    }
    enterItemHasSubmenu(e) {
      this.clearHideTimer();
      this.currentKey = e.key;
      if (this.itemHasSubmenu?.key !== e.key) {
        this.clearSubmenuDelayCallbackIfNecessary();
        this.itemHasSubmenu = {
          ...e,
          visible: false
        };
      }
      this.triggerShowSubmenu();
    }
    get submenuIsShow() {
      var n;
      return !!this.currentKey && this.currentKey !== this.itemNormal?.key && (!!this.showTimer || (n = this.itemHasSubmenu) !== null && n !== undefined && !!n.visible);
    }
    constructor() {
      b(this, "currentKey", "");
      b(this, "itemNormal", null);
      b(this, "itemHasSubmenu", null);
      b(this, "hideTimer", null);
      b(this, "showTimer", null);
    }
  }
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var useControlledState = require("use-controlled-state") /*id: 80507*/;
  var sizeAbbrevUtils = require("size-abbrev-utils") /*id: 464464*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var svgSpinLoadingComponent = require("svg-spin-loading-component") /*id: 789464*/;
  var forwardRefModule = require("forward-ref-module") /*id: 829710*/;
  require("module-no-op") /*id: 116324*/;
  var N = ["checked", "defaultChecked", "loading", "disabled", "size", "onChange", "onClick", "className", "style", "id", "title", "autoFocus", "unCheckedChildren", "checkedChildren", "prefixCls"];
  var L = Object.assign(forwardRefModule.forwardRef_1(function (e, n) {
    var i = reactContextUtilsHooks.useComponentSize();
    var r = e.checked;
    var l = e.defaultChecked;
    var a = e.loading;
    var s = a !== undefined && a;
    var c = e.disabled;
    var u = e.size;
    var m = e.onChange;
    var d = e.onClick;
    var h = e.className;
    var v = e.style;
    var f = e.id;
    var p = e.title;
    var b = e.autoFocus;
    e.unCheckedChildren;
    e.checkedChildren;
    var k = e.prefixCls;
    var R = objectOmitHelper_1.omitWithSymbols(e, N);
    var L = reactContextUtilsHooks.useComponentClass("switch", k);
    var Z = useControlledState.useControlledState(r ?? (l !== undefined && l), r);
    var E = iterableToArrayUtil_1_1.iterableToArray(Z, 2);
    var D = E[0];
    var $ = E[1];
    var j = c !== undefined && c || s;
    var B = sizeAbbrevUtils.getSizeAbbrev(u === undefined ? i === "large" ? "medium" : i : u);
    return reactCoreLibraryReexport.createElement("button", objectAssignUtil.objectAssign({}, throttledOmitPathStringify.omitPathStringify(R, "error"), {
      onClick: reactCoreLibraryReexport.useCallback(function (e) {
        if (!j) {
          $(function (e) {
            return !e;
          }, function (n) {
            if (m != null) {
              m(n, e);
            }
            if (d != null) {
              d(n, e);
            }
          });
        }
      }, [j, m, d, $]),
      className: conditionalClassnames.default(L(), D && L("-checked"), j && L("-disabled"), h, objectPropertySetter.setObjectProperty({}, L(`-${B}`), B)),
      style: v,
      id: f,
      type: "button",
      role: "switch",
      autoFocus: b,
      title: p,
      ref: n
    }), reactCoreLibraryReexport.createElement("div", {
      className: L("__handler")
    }, s ? reactCoreLibraryReexport.createElement(svgSpinLoadingComponent.SvgSpinLoading, {
      className: L("__loading")
    }) : null));
  }), {
    __UD_SWITCH: true
  });
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var useLatestRefHook = require("use-latest-ref-hook") /*id: 129756*/;
  var overlayUiConstants = require("overlay-ui-constants") /*id: 645442*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  var docxAiMenuConstants = require("docx-ai-menu-constants") /*id: 255694*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var floatingUiPlatformUtils = require("floating-ui-platform-utils") /*id: 541179*/;
  var localeContextProvider = require("locale-context-provider") /*id: 577211*/;
  var popperTriggerComponent = require("popper-trigger-component") /*id: 564146*/;
  var popoverComponent_1 = require("popover-component_1") /*id: 539955*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let O = reactCoreLibraryReexport.memo(e => {
    let {
      desc: n,
      appName: i,
      imgUrl: r,
      helpLink: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: m("docx-menu-guide-panel", {
        "has-img": !!r
      }),
      children: [r && reactJsxRuntimeCoreReexport.jsx("img", {
        className: "guide-panel-thumb",
        src: xssContentSanitizer.sanitizeUrl(r, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9Xc*lNak-zWWpJMWJHSn$$bnBNTWp*c1ltN$ZkbEl6$m5C-$IxWktZbTFhZ*xWSE9-Z*lNMXBzWTJrM%1HTXphR2hq-ldReFkz-zlQ%T09"
        }),
        alt: ""
      }), n && reactJsxRuntimeCoreReexport.jsx("section", {
        className: "guide-panel-desc",
        children: n
      }), i && reactJsxRuntimeCoreReexport.jsx("section", {
        className: "guide-panel-app-name",
        children: t("CreationDoc_ISV_CreatedBy_title", undefined, undefined, i)
      }), o && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "guide-panel-help-link",
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          onPointerDown: e => {
            if (e != null) {
              e.preventDefault();
            }
            if (e != null) {
              e.stopPropagation();
            }
            window.open(xssContentSanitizer.sanitizeUrl(o, null, {
              logType: "js.window.location",
              reportOnly: "false",
              blackConfig: "{}",
              configMode: "merge",
              isCloseSSRReport: false,
              bid: "flow_web",
              region: "cn",
              urlLimit: "-1",
              htmlLimit: "-1",
              isSaveValidUrl: false,
              isRuntimeLog: false,
              isDOMParser: true,
              escapeRule: "escape-report",
              reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
              scmBranch: "release_train_samantha_2026-03-09_1120843696898",
              scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
              scmVersion: "1.0.4.168",
              webpackPluginVersion: "3.4.5",
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9Xc*lNak-zWWpJMWJHSn$$bnBNTWp*c1ltN$ZkbEl6$m5C-$IxWktZbTFhZ*xWSE9-Z*lNMXBzWTJrM%1HTXphR2hq-ldReFkz-zlQ%T09"
            }));
          },
          children: t("LarkCCM_Onboarding_LearnMore_Button")
        })
      })]
    });
  });
  var z = e => {
    let {
      guideInfo: n,
      visible: i,
      children: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(localeContextProvider.localeWrapper, {
      PopperSidecar: popperTriggerComponent.PopperComponent,
      children: reactJsxRuntimeCoreReexport.jsx(popoverComponent_1.Popover, {
        placement: "right",
        visible: n.helpLink ? undefined : i,
        content: reactJsxRuntimeCoreReexport.jsx(O, {
          ...n
        }),
        showAction: n.helpLink ? ["mouseEnter"] : undefined,
        overlayStyle: {
          zIndex: docxAiMenuConstants.menuConstant100,
          borderRadius: docxAiMenuConstants.spaceConstant
        },
        middlewares: [floatingUiPlatformUtils.offsetMiddleware(docxAiMenuConstants.paddingConstant)],
        shift: {
          mainAxis: true,
          crossAxis: false
        },
        flip: {
          mainAxis: true
        },
        destroyOnHide: true,
        initialFocus: null,
        children: r
      })
    });
  };
  var docxAiDropdownMenu_1 = require("docx-ai-dropdown-menu_1") /*id: 679475*/;
  var aiPromptInputCheck = require("ai-prompt-input-check") /*id: 996458*/;
  var docxGuideConstants = require("docx-guide-constants") /*id: 98296*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var Q = require.p + "static/image/sync-share-onboarding.d5bbf778.png";
  (r = {}).SYNCED_BLOCK_SHARE = "docx_synced_operation_bar_share_item_guid";
  r.SYNCED_BLOCK_PARTICULAR = "docx_synced_operation_bar_particular_item_guid";
  r.TEXT_RANGE_SHARE_LINK_ITEM = "docx_text_range_share_link_item_guide";
  r.SYNC_BLOCK_SHARE_TO_IM = "docx_syncedblock_share_to_im";
  let q = r;
  let G = {
    [q.SYNCED_BLOCK_SHARE]: {
      showArry: [true, true, true],
      title: t("LarkCCM_Docs_SyncBlock_ViewCollaborator_Title"),
      content: t("LarkCCM_Docs_SyncBlock_GrantedAccess_Description")
    },
    [q.SYNCED_BLOCK_PARTICULAR]: {
      showArry: [true, true, true],
      title: t("LarkCCM_Docs_SyncBlock_ViewLocation_Title"),
      content: t("LarkCCM_Docs_SyncBlock_SyncReference_Description")
    },
    [q.TEXT_RANGE_SHARE_LINK_ITEM]: {
      showArry: [true, true, true, true, true],
      title: null,
      content: t("LarkCCM_Docs_FwdSection_Onboarding_Descrip"),
      experienceBtnText: t("LarkCCM_Docs_FwdSection_OnboardingTryNow_Button"),
      knowBtnText: t("LarkCCM_Docs_FwdSection_OnboardingGotIt_Button")
    },
    [q.SYNC_BLOCK_SHARE_TO_IM]: {
      showArry: [true, true, true, true, true],
      title: null,
      content: t("LarkCCM_Docs_SyncBlock_ShareToChats_Onboarding"),
      knowBtnClsName: "normal",
      experienceBtnText: t("LarkCCM_Docs_SyncBlock_ShareToChats_TryNow_Button"),
      knowBtnText: t("LarkCCM_Docs_SyncBlock_ShareToChats_GotIt_Button"),
      imgUrl: Q
    }
  };
  let Y = (e, n) => {
    if (!n || !platformDocUtils.boF(platformDocUtils.XmA(reduxStoreInitializer.reduxStore.getState()), e)) {
      reduxStoreInitializer.reduxStore.dispatch(platformDocUtils.zzX(e));
      reduxStoreInitializer.reduxStore.dispatch(platformDocUtils.kH0(e));
    }
  };
  let ee = e => {
    try {
      return G[e];
    } catch {
      return {
        showArry: []
      };
    }
  };
  let et = e => {
    if (!e.isShow) {
      return null;
    }
    let n = () => {
      var n;
      Y(e.guideKey);
      if ((n = e.onClick) !== null && n !== undefined) {
        n.call(e);
      }
    };
    let i = e.btnText || t("LarkCCM_Onboarding_GotIt_Button");
    let r = m(["callout-box-new__btn", e.className]);
    let {
      isPointerDown: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx("button", {
        type: "button",
        className: r,
        onPointerDown: o ? e => {
          if (e != null) {
            e.preventDefault();
          }
          if (e != null) {
            e.stopPropagation();
          }
          n();
        } : undefined,
        onClick: o ? undefined : n,
        children: i
      })
    });
  };
  let en = e => e.imgSrc && e.isShow ? reactJsxRuntimeCoreReexport.jsx("div", {
    className: "callout-box-new__image",
    children: reactJsxRuntimeCoreReexport.jsx("img", {
      src: xssContentSanitizer.sanitizeUrl(e.imgSrc, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9Xc*lNak-zWWpJMWJHSn$$bnBNTWxKMld%Tm5kRm96$m5C-$Ix$jJXak5X-0ZwSFZ-%mpSemwzWWpO-WJHTnBN$3BpTWp$d1ds-zFNRXh1$W5wbFIwWj$Xak5XZWc9PQ"
      })
    })
  }) : null;
  let ei = e => {
    let {
      guideKey: n,
      imgUrl: i,
      isPointerDown: r
    } = e;
    let {
      title: o,
      content: l,
      experienceBtnText: a,
      knowBtnText: s,
      imgUrl: c,
      showArry: u,
      knowBtnClsName: d
    } = ee(n);
    let [h, v, f, p, b] = u;
    let k = m([docxGuideConstants.docxGuidePopoverId, e.className]);
    let w = s || t("LarkCCM_Onboarding_GotIt_Button");
    let C = a || t("LarkCCM_Onboarding_TryItNow_Button");
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `${k} callout-box-new callout-box-bottom-enter-done`,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "callout-box-new__container",
        children: [h ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: "callout-box-new__title",
          children: o
        }) : null, reactJsxRuntimeCoreReexport.jsx(en, {
          imgSrc: i || c || null,
          isShow: b
        }), v ? reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "callout-box-new__content",
          children: [l, " "]
        }) : null, reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "callout-box-new__footer",
          children: [reactJsxRuntimeCoreReexport.jsx(et, {
            isShow: f,
            guideKey: n,
            onClick: e.knowBtnClick,
            btnText: w,
            className: d,
            isPointerDown: r
          }), reactJsxRuntimeCoreReexport.jsx(et, {
            isShow: p,
            guideKey: n,
            onClick: e.experienceBtnClick,
            btnText: C,
            className: "primary",
            isPointerDown: r
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "arrow-box"
      })]
    });
  };
  function er(e) {
    let {
      guideKey: i,
      isOpenNormalMenu: r
    } = e;
    let [l, a] = reactCoreLibraryReexport.useState(false);
    let s = reactCoreLibraryReexport.useCallback(() => document.body, [document.body]);
    let c = reactCoreLibraryReexport.useCallback(e => {
      if (r) {
        a(false);
      } else {
        a(e);
      }
    }, [r, l]);
    return reactJsxRuntimeCoreReexport.jsx(localeContextProvider.localeWrapper, {
      PopperSidecar: popperTriggerComponent.PopperComponent,
      children: reactJsxRuntimeCoreReexport.jsx(popoverComponent_1.Popover, {
        overlayClassName: "menu-guide-popover-overlay",
        getPopupContainer: s,
        enableMaxHeight: false,
        placement: "top",
        mode: "pure",
        visible: l && !r,
        offset: 10,
        initialFocus: null,
        content: reactJsxRuntimeCoreReexport.jsx(ei, {
          knowBtnClick: () => {
            a(false);
          },
          guideKey: i,
          experienceBtnClick: () => {
            var n;
            var i;
            a(false);
            if ((i = e.item.guideV2Info) !== null && i !== undefined && (n = i.experienceCallback) !== null && n !== undefined) {
              n.call(i);
            }
          },
          imgUrl: e.item.guideV2Info?.guideImg,
          isPointerDown: true
        }),
        boundaryPadding: 0,
        onVisibleChange: c,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "menu-temp-content is-show-guide",
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: "subscribe-onboarding-red-dot"
          }), e.children]
        })
      })
    });
  }
  var screenWidthObserverHook = require("screen-width-observer-hook") /*id: 741639*/;
  var userGuideStateUtility = require("user-guide-state-utility") /*id: 642218*/;
  let ea = e => {
    let {
      hovered: n,
      item: i,
      containerClassName: r,
      useItemClass: o,
      vertical: l,
      showIconColor: a,
      extraContent: s
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(docxAiDropdownMenu_1.AiMenuGroup, {
      hovered: n,
      actived: i.active,
      disabled: i.disabled,
      useItemClass: o,
      className: r,
      title: i.title,
      name: i.name,
      vertical: l,
      setItemRef: e.setMenuItemRef,
      onTouchToClick: e.handleTouchToClick,
      onClick: e.handleClick,
      onMouseEnter: e.handleMouseEnter,
      onMouseLeave: e.handleMouseLeave,
      children: reactJsxRuntimeCoreReexport.jsx(docxAiDropdownMenu_1.AiMenuItem, {
        showIconColor: a,
        item: i,
        extraContent: s
      })
    });
  };
  let es = e => {
    let {
      hovered: i,
      item: r,
      useItemClass: l,
      containerClassName: a,
      showIconColor: s,
      extraContent: c,
      vertical: u
    } = e;
    let m = r.guideV2Info?.guideKey;
    let [d, h] = reactCoreLibraryReexport.useState(false);
    let {
      isNarrowScreen: v
    } = screenWidthObserverHook.useScreenWidthObserver();
    let f = m && !userGuideStateUtility.checkGuideState(m);
    let p = n => {
      if (m) {
        Y(m, true);
      }
      if (f) {
        h(!d);
      }
      e.handleClick(n);
    };
    reactCoreLibraryReexport.useEffect(() => () => {
      h(false);
    }, []);
    let b = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx(ea, {
      ...e,
      handleClick: p
    }), [i, r, l, a, s, c, u, e.setMenuItemRef, e.handleTouchToClick, e.handleClick, e.handleMouseEnter, e.handleMouseLeave]);
    if (f) {
      return reactJsxRuntimeCoreReexport.jsx(er, {
        ...e,
        guideKey: m,
        isOpenNormalMenu: d,
        children: b
      });
    } else if (v) {
      return b;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(docxAiDropdownMenu_1.AiDropdownMenu, {
        ref: e.tooltipFactoryRef,
        item: r,
        vertical: u,
        children: b
      });
    }
  };
  let ec = e => {
    let {
      hovered: n,
      showIconColor: i,
      item: r,
      showArrow: l,
      className: a,
      vertical: s = false,
      useItemClass: c,
      onItemClick: u,
      setItemRef: d,
      onMouseEnter: h,
      onMouseLeave: v,
      onItemEnter: p,
      onItemLeave: b,
      children: k,
      mouseModeRef: w,
      onlyHoverArrow: C,
      onArrowEnter: g,
      onArrowLeave: _,
      onSubmenuEnter: x,
      onSubmenuLeave: S
    } = e;
    let T = reactCoreLibraryReexport.useMemo(() => !s && r.active, [s, r.active]);
    let I = reactCoreLibraryReexport.useMemo(() => !docxAiMenuUtils.hasAction(r), [r]);
    let M = reactCoreLibraryReexport.useRef(null);
    let y = reactCoreLibraryReexport.useRef(null);
    let R = reactCoreLibraryReexport.useCallback(e => {
      var n;
      if ((n = M.current) === null || n === undefined) {
        return undefined;
      } else {
        return n.contains(e);
      }
    }, []);
    let N = reactCoreLibraryReexport.useCallback(e => !s || docxAiMenuUtils.isClickOutside(e, M), [s]);
    let L = reactCoreLibraryReexport.useCallback(e => {
      M.current = e;
      if (d != null) {
        d(e);
      }
    }, [d]);
    let Z = reactCoreLibraryReexport.useCallback(() => {
      if (C) {
        var e;
        if (g != null) {
          g();
        }
        if ((e = y.current) !== null && e !== undefined) {
          e.hideTooltip();
        }
      }
    }, [C, g]);
    let E = reactCoreLibraryReexport.useCallback(() => {
      if (C) {
        var e;
        if (_ != null) {
          _();
        }
        if ((e = y.current) !== null && e !== undefined) {
          e.showTooltip();
        }
      }
    }, [C, _]);
    let D = reactCoreLibraryReexport.useCallback(e => {
      var n;
      if ((n = r.onUnMount) !== null && n !== undefined) {
        n.call(r);
      }
      if (!r.disabled && N(e) && docxAiMenuUtils.hasAction(r)) {
        if (u != null) {
          u(r, e);
        }
      }
    }, [r, N, u, r.onUnMount]);
    let $ = reactCoreLibraryReexport.useCallback(e => {
      if (!r.disabled && N(e)) {
        D(e);
        if (!C && p != null) {
          p();
        }
      }
    }, [r.disabled, N, D, C, p]);
    let j = reactCoreLibraryReexport.useCallback(() => {
      var e;
      if ((e = y.current) !== null && e !== undefined) {
        e.showTooltip();
      }
      if (p != null) {
        p();
      }
    }, [p]);
    let B = reactCoreLibraryReexport.useCallback(() => {
      if (b != null) {
        b();
      }
    }, [b]);
    let P = reactCoreLibraryReexport.useCallback(e => {
      if (!R(e.target)) {
        if (x != null) {
          x();
        }
        return;
      }
      if (w.current) {
        var n;
        if (h != null) {
          h(e);
        }
        if ((n = r.onMouseEnter) !== null && n !== undefined) {
          n.call(r, e);
        }
        j();
      }
    }, [R, x, w, h, r.onMouseEnter, j]);
    let H = reactCoreLibraryReexport.useCallback(e => {
      var n;
      var i;
      if (!R(e.target) && !aiPromptInputCheck.isInPromptInput(e.target)) {
        if (S != null) {
          S();
        }
        return;
      }
      if ((n = y.current) !== null && n !== undefined) {
        n.hideTooltip();
      }
      if (!C) {
        if (v != null) {
          v(e);
        }
        if ((i = r.onMouseLeave) !== null && i !== undefined) {
          i.call(r, e);
        }
        B();
      }
    }, [R, S, C, v, r.onMouseLeave, B]);
    reactCoreLibraryReexport.useEffect(() => r.onUnMount, [r.onUnMount]);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = r.onMount) !== null && e !== undefined) {
        e.call(r);
      }
    }, []);
    let W = reactCoreLibraryReexport.useMemo(() => m(r.className, a, {
      "panel-submenu-item": l,
      "no-click-action": I,
      "hot-area-unique": C
    }), [r.className, a, l, I, C]);
    let A = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [k, l && reactJsxRuntimeCoreReexport.jsx(docxAiDropdownMenu_1.AiMenuDivider, {
        vertical: s,
        onMouseEnter: Z,
        onMouseLeave: E
      }), T && reactJsxRuntimeCoreReexport.jsx(docxAiDropdownMenu_1.AiMenuSub, {})]
    }), [k, l, T, Z, E]);
    return reactJsxRuntimeCoreReexport.jsx(es, {
      hovered: n,
      item: r,
      containerClassName: W,
      extraContent: A,
      vertical: s,
      useItemClass: c,
      showIconColor: i,
      tooltipFactoryRef: y,
      handleClick: D,
      handleMouseEnter: P,
      handleMouseLeave: H,
      setMenuItemRef: L,
      handleTouchToClick: $
    });
  };
  var templateSearchPopover = require("template-search-popover") /*id: 523597*/;
  var overlayPositionCalcHook = require("overlay-position-calc-hook") /*id: 878464*/;
  var docxOverlayPositionSync = require("docx-overlay-position-sync") /*id: 662835*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxToolbarProviderHook = require("docx-toolbar-provider-hook") /*id: 270758*/;
  var uiLayoutPositionUtils = require("ui-layout-position-utils") /*id: 274647*/;
  let eb = reactCoreLibraryReexport.createContext({
    direction: uiLayoutPositionEnums.positionAlignTypes.None
  });
  var ek = e => {
    let {
      visible: n,
      target: i,
      isComponent: r,
      componentReverse: l,
      getSubmenuContainer: a,
      defaultDirection: s,
      reverse: c,
      adjust: u,
      beforeChangeMaxHeight: m,
      boundary: d,
      blockManager: h,
      selectionAPI: v,
      children: p,
      toolbarDirection: b,
      ...k
    } = e;
    let w = h.editorAPI.config.get("pageMainBoundary") || d;
    let C = docxOverlayPositionSync.useOverlayPosition(i, h, n, {
      scrollContainer: w
    });
    let g = overlayPositionCalcHook.useOverlayRect(w, h, n);
    let {
      allowDirections: _,
      offset: x,
      directionCalculator: S,
      positionCalculator: T
    } = function (e) {
      let {
        visible: n,
        defaultDirection: i,
        reverse: r,
        adjust: l,
        beforeChangeMaxHeight: a,
        boundaryRect: s,
        isComponent: c,
        componentReverse: u,
        toolbarDirection: m
      } = e;
      let d = reactCoreLibraryReexport.useMemo(() => i === uiLayoutPositionEnums.positionAlignTypes.None ? [i] : r ? browserEnvironmentDetectionUtils.browserDetector.isIPad && m === uiLayoutPositionEnums.positionAlignTypes.TopCenter ? [uiLayoutPositionUtils.flipPositionAlign(i), i] : [i, uiLayoutPositionUtils.flipPositionAlign(i)] : [i], [i, m]);
      let h = reactCoreLibraryReexport.useRef();
      let v = reactCoreLibraryReexport.useMemo(() => ["left", "right"].some(e => i.toLowerCase().startsWith(e)), [i]);
      let p = reactCoreLibraryReexport.useMemo(() => docxAiMenuUtils.getPositionOffset(i), [i]);
      let b = docxToolbarProviderHook.useToolbarProvider(n);
      return {
        allowDirections: d,
        offset: p,
        directionCalculator: reactCoreLibraryReexport.useCallback(e => {
          let {
            adaptiveSize: n,
            contentRect: i,
            allowDirections: o
          } = e;
          if (o.length === 0 || o[0] === uiLayoutPositionEnums.positionAlignTypes.None) {
            return uiLayoutPositionEnums.positionAlignTypes.None;
          }
          let l = o[0];
          let s = n[l];
          let m = uiLayoutPositionUtils.flipPositionAlign(l);
          if (v) {
            let e = Math.min(s.height, b, i.height);
            if (a(e)) {
              h.current = e;
            }
            if (i.width > s.width && r && n[m].width > s.width) {
              return m;
            } else {
              return l;
            }
          }
          let d = r ? n[m].height : Infinity;
          let f = c && !u ? i.height : docxAiMenuConstants.widthConstant;
          let p = c && !u ? Infinity : b;
          if (s.height < f && r && d > s.height) {
            let e = Math.min(d, p);
            if (a(e)) {
              h.current = e;
            }
            return m;
          }
          {
            let e = Math.min(s.height, p);
            if (a(e)) {
              h.current = e;
            }
            return l;
          }
        }, [v, r, a, c, u]),
        positionCalculator: reactCoreLibraryReexport.useCallback(e => {
          let {
            contentRect: n,
            offsetInfo: i,
            viewportInfo: r,
            targetRect: o,
            direction: a,
            bodyRect: c
          } = e;
          let u = uiLayoutPositionUtils.calcAlignPosition({
            contentRect: n,
            offsetInfo: i,
            viewportInfo: r,
            targetRect: o,
            direction: a,
            bodyRect: c
          });
          if (l) {
            let e = uiLayoutPositionUtils.calcOverflowAdjustment({
              positionInfo: u,
              viewportInfo: r,
              boundaryRect: s,
              contentRect: isUndefinedCheck.isUndefined(h.current) ? n : new DOMRect(n.left, n.top, n.width, h.current),
              bodyRect: c
            });
            if (v) {
              if (e.top > 0) {
                if (isUndefinedCheck.isUndefined(u.top)) {
                  u.bottom -= e.top;
                } else {
                  u.top += e.top;
                }
              }
              if (e.bottom > 0) {
                if (isUndefinedCheck.isUndefined(u.top)) {
                  u.bottom += e.bottom;
                } else {
                  u.top -= e.bottom;
                }
              }
            } else {
              if (e.left > 0) {
                if (isUndefinedCheck.isUndefined(u.left)) {
                  u.right -= e.left;
                } else {
                  u.left += e.left;
                }
              }
              if (e.right > 0) {
                if (isUndefinedCheck.isUndefined(u.left)) {
                  u.right += e.right;
                } else {
                  u.left -= e.right;
                }
              }
            }
          }
          return u;
        }, [l, s, v])
      };
    }({
      visible: n,
      defaultDirection: s,
      reverse: c,
      adjust: u,
      boundaryRect: g,
      beforeChangeMaxHeight: m,
      isComponent: r,
      componentReverse: l,
      toolbarDirection: b
    });
    let [I, M] = reactCoreLibraryReexport.useState(uiLayoutPositionEnums.positionAlignTypes.None);
    let y = reactCoreLibraryReexport.useCallback(e => {
      let n = S(e);
      M(n);
      return n;
    }, [S]);
    let R = reactCoreLibraryReexport.useMemo(() => ({
      direction: I
    }), [I]);
    return reactJsxRuntimeCoreReexport.jsx(eb.Provider, {
      value: R,
      children: reactJsxRuntimeCoreReexport.jsx(templateSearchPopover.SearchPopover, {
        ...k,
        visible: n,
        getContainer: a,
        allowDirections: _,
        targetRect: C,
        boundaryRect: g,
        calcDirection: y,
        calcPosition: T,
        animation: uiLayoutPositionEnums.animationEffectTypes.Slide,
        offset: x,
        blockManager: h,
        selectionAPI: v,
        children: p
      })
    });
  };
  let ew = e => {
    let {
      item: i,
      index: r,
      hovered: l,
      vertical: a,
      showIconColor: c,
      submenuManager: u,
      setItemRef: m,
      onItemHover: d,
      onItemClick: h,
      children: v,
      mouseModeRef: f,
      blockManager: p,
      selectionAPI: b,
      boundary: k,
      eventEmitter: w,
      hideGuidePopoverSignal: C
    } = e;
    let [g, _, x] = function (e) {
      let [n, i] = reactCoreLibraryReexport.useState(false);
      return [n, reactCoreLibraryReexport.useCallback(() => {
        i(e);
      }, [e]), reactCoreLibraryReexport.useCallback(() => {
        i(false);
      }, [])];
    }(!!i.guideInfo);
    let S = document.documentElement.clientWidth <= docxEditorConstantsConfig.maxContentWidth;
    let T = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(() => {
      var e;
      var n;
      if ((n = i.guideInfo) === null || n === undefined) {
        return undefined;
      } else if ((e = n.onHover) === null || e === undefined) {
        return undefined;
      } else {
        return e.call(n);
      }
    }, 100), [i.guideInfo?.onHover]);
    let I = reactCoreLibraryReexport.useCallback(() => {
      _();
      T();
      u.enterItemNormal(i.name);
      d(r);
    }, [d, r, u, _, i.name]);
    let M = reactCoreLibraryReexport.useCallback(() => {
      x();
      T.cancel();
      if (a || i.unselectOnMouseLeave) {
        d(-1);
      }
    }, [a, i.unselectOnMouseLeave, x, d]);
    let y = reactCoreLibraryReexport.useCallback(e => {
      m(r, e);
    }, [m, r]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        if (e === i.name) {
          I();
        }
      };
      let n = C.subscribe(x);
      w.on(docxAiMenuConstants.enterItemClass, e);
      return () => {
        n.unsubscribe();
        w.off(docxAiMenuConstants.enterItemClass, e);
      };
    }, [w, x, i.name, C]);
    if (i.guideInfo && !p && !b && !k) {
      return null;
    }
    let R = reactJsxRuntimeCoreReexport.jsx(ec, {
      setItemRef: y,
      item: i,
      showIconColor: c,
      hovered: l,
      onItemEnter: I,
      onItemLeave: M,
      showArrow: false,
      vertical: a,
      onItemClick: h,
      mouseModeRef: f,
      children: v
    });
    if (i.guideInfo) {
      return reactJsxRuntimeCoreReexport.jsx(z, {
        guideInfo: i.guideInfo,
        visible: l && !S && g,
        children: R
      });
    } else {
      return R;
    }
  };
  let eC = e => {
    let {
      item: n
    } = e;
    let i = reactCoreLibraryReexport.useCallback(e => {
      var i;
      if ((i = n.onSwitch) !== null && i !== undefined) {
        i.call(n, e);
      }
    }, [n.onSwitch]);
    return reactJsxRuntimeCoreReexport.jsx(ew, {
      ...e,
      children: reactJsxRuntimeCoreReexport.jsx(L, {
        checked: n.checked,
        defaultChecked: n.defaultSwitchChecked,
        onChange: i,
        size: "small",
        disabled: n.switchDisabled
      })
    });
  };
  let eg = e => {
    let {
      item: n,
      onItemClick: i
    } = e;
    let r = reactCoreLibraryReexport.useRef(null);
    let l = reactCoreLibraryReexport.useCallback(() => {
      var e;
      if ((e = r.current) !== null && e !== undefined) {
        e.showTooltip();
      }
    }, []);
    let a = reactCoreLibraryReexport.useCallback(() => {
      var e;
      if ((e = r.current) !== null && e !== undefined) {
        e.hideTooltip();
      }
    }, []);
    let s = reactCoreLibraryReexport.useCallback(e => {
      if (!n.disabled && docxAiMenuUtils.hasAction(n)) {
        i(n, e);
      }
    }, [n, i]);
    let c = reactCoreLibraryReexport.useCallback(e => {
      if (!n.disabled) {
        l();
        s(e);
      }
    }, [n.disabled, l, s]);
    return reactJsxRuntimeCoreReexport.jsx(docxAiDropdownMenu_1.AiDropdownMenu, {
      ref: r,
      item: n,
      placement: "top",
      children: reactJsxRuntimeCoreReexport.jsx(docxAiDropdownMenu_1.AiMenuGroup, {
        hovered: false,
        useItemClass: false,
        actived: n.active,
        name: n.name,
        className: m("flatten-item", {
          "flatten-item-disabled": n.disabled
        }),
        onTouchToClick: c,
        onClick: s,
        onMouseEnter: l,
        onMouseLeave: a,
        children: n.icon
      })
    });
  };
  let e_ = e => {
    let {
      item: {
        children: n
      },
      onItemClick: i,
      onItemHover: r,
      submenuManager: l,
      vertical: a
    } = e;
    let s = reactCoreLibraryReexport.useCallback(() => {
      l.willLeaveItem();
      r(-1);
    }, [l, r]);
    return reactJsxRuntimeCoreReexport.jsx(docxAiDropdownMenu_1.AiMenuGroup, {
      hovered: false,
      onMouseEnter: s,
      useItemClass: false,
      className: "flatten-item-list",
      vertical: a,
      children: n.filter(e => !!e).filter(docxAiMenuUtils.isNormalMenuItem).map(e => reactJsxRuntimeCoreReexport.jsx(eg, {
        item: e,
        onItemClick: i
      }, e.name))
    });
  };
  let ex = e => {
    let {
      item: {
        text: n,
        name: i,
        isLoading: r,
        showNewTag: l
      },
      hovered: a,
      submenuManager: s,
      onItemHover: c,
      mouseModeRef: u
    } = e;
    let m = reactCoreLibraryReexport.useCallback(() => {
      if (u.current) {
        s.willLeaveItem();
        c(-2);
      }
    }, [u, s, c]);
    return reactJsxRuntimeCoreReexport.jsxs(docxAiDropdownMenu_1.AiMenuGroup, {
      className: "menu-title-item",
      name: i,
      hovered: a,
      onMouseEnter: m,
      children: [n, l && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "menu-new-tag",
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: "menu-new-tag-text",
          children: "New"
        })
      }), r && reactJsxRuntimeCoreReexport.jsx(docxAiDropdownMenu_1.AiMenuButton, {})]
    });
  };
  let eS = e => {
    let n = m("menu-divider-item", {
      "override-full-height": !!e.item.overrideFullHeight
    });
    return reactJsxRuntimeCoreReexport.jsx(docxAiDropdownMenu_1.AiMenuGroup, {
      hovered: false,
      useItemClass: false,
      className: n
    });
  };
  let eT = e => {
    let {
      item: n,
      index: i,
      hovered: r,
      showIconColor: l,
      submenuManager: a,
      vertical: s,
      boundary: c,
      blockManager: u,
      selectionAPI: m,
      isRootMenuItem: d,
      onItemHover: h,
      onItemClick: v,
      onItemActive: b,
      onClose: k,
      onRefresh: w,
      eventEmitter: C,
      setMenuRef: g,
      mouseModeRef: _,
      toolbarDirection: x
    } = e;
    let [S, T] = reactCoreLibraryReexport.useState(false);
    let I = reactCoreLibraryReexport.useRef(null);
    let M = reactCoreLibraryReexport.useMemo(() => s && docxAiMenuUtils.isSubmenuItem(n) && n.hotAreaOnlyArrow, [s, n == null ? undefined : n.hotAreaOnlyArrow]);
    let y = useLatestRefHook.useLatestRef(r);
    let R = reactCoreLibraryReexport.useCallback(n => {
      I.current = n;
      e.setItemRef(i, n);
    }, [i]);
    let N = reactCoreLibraryReexport.useCallback(() => {
      var e;
      if ((e = I.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.closest(`.${overlayUiConstants.overlayClass}`);
      }
    }, []);
    let L = reactCoreLibraryReexport.useCallback(() => {
      a.enterItemHasSubmenu({
        key: n.name,
        onShow() {
          T(true);
        },
        onHide() {
          T(false);
          if (s && y.current) {
            h(-1);
          }
        }
      });
      h(i);
    }, [a, n.name, s, h, i]);
    let Z = reactCoreLibraryReexport.useCallback(() => {
      if (!M) {
        L();
      }
    }, [M, L]);
    let B = reactCoreLibraryReexport.useCallback(() => {
      L();
    }, [L]);
    let P = reactCoreLibraryReexport.useCallback(function () {
      let i = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      if (!d && n.menuProps?.closeAfterMouseLeave || i) {
        a.leaveItem();
      } else {
        a.willLeaveItem();
      }
    }, [n.menuProps, d, a]);
    let H = reactCoreLibraryReexport.useCallback(() => {
      P();
    }, [P]);
    let W = reactCoreLibraryReexport.useCallback(() => {
      if (!M && (s || n.unselectOnMouseLeave)) {
        P();
      }
    }, [M, s, n.unselectOnMouseLeave, P]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        if (e === n.name) {
          L();
        }
      };
      let i = e => {
        if (e === n.name) {
          P();
        }
      };
      C.on(docxAiMenuConstants.enterItemClass, e);
      C.on(docxAiMenuConstants.leaveItemClass, i);
      return () => {
        C.off(docxAiMenuConstants.enterItemClass, e);
        C.off(docxAiMenuConstants.leaveItemClass, i);
      };
    }, [n.name, C, L, P]);
    let [A, O] = reactCoreLibraryReexport.useState(undefined);
    let z = reactCoreLibraryReexport.useCallback(e => {
      O(e);
      return n.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren;
    }, [n.type]);
    let X = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx(eb.Consumer, {
      children: e => n.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren ? reactJsxRuntimeCoreReexport.jsx(eR, {
        items: n.children,
        blockManager: u,
        selectionAPI: m,
        boundary: c,
        setMenuRef: g,
        onSelfClose: P,
        onClose: k,
        onItemClick: v,
        onItemActive: b,
        closeAfterMouseLeave: s,
        className: "docx-submenu-panel",
        maxHeight: A,
        toolbarDirection: x,
        ...n.menuProps
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        onMouseEnter: L,
        children: reactJsxRuntimeCoreReexport.jsx(n.component, {
          ...e,
          onRefresh: w,
          onSelfClose: P,
          onClose: k,
          setMenuRef: g,
          maxHeight: A
        })
      })
    }), [n, u, m, c, g, P, w, k, v, b, s, A, x]);
    let J = reactCoreLibraryReexport.useMemo(() => n.submenuDefaultDirection ? n.submenuDefaultDirection : s ? n.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithComponent ? uiLayoutPositionEnums.positionAlignTypes.BottomCenter : n.extra.isShrinked ? uiLayoutPositionEnums.positionAlignTypes.BottomRight : uiLayoutPositionEnums.positionAlignTypes.BottomLeft : uiLayoutPositionEnums.positionAlignTypes.RightCenter, [n.submenuDefaultDirection, n.type, s, n.extra.isShrinked]);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = n.onSubmenuVisibleChange) !== null && e !== undefined) {
        e.call(n, S);
      }
    }, [S]);
    let U = n.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithComponent;
    return reactJsxRuntimeCoreReexport.jsx(ec, {
      hovered: r,
      item: n,
      setItemRef: R,
      showArrow: !n.notShowArrow,
      vertical: s,
      showIconColor: l,
      onItemEnter: Z,
      onItemLeave: W,
      onItemClick: v,
      mouseModeRef: _,
      onlyHoverArrow: M,
      onArrowEnter: B,
      onArrowLeave: H,
      onSubmenuEnter: L,
      onSubmenuLeave: P,
      children: reactJsxRuntimeCoreReexport.jsx(ek, {
        visible: S && !n.disabled,
        getSubmenuContainer: N,
        target: I.current,
        boundary: c,
        blockManager: u,
        selectionAPI: m,
        defaultDirection: J,
        beforeChangeMaxHeight: z,
        reverse: true,
        adjust: !s,
        isComponent: U,
        componentReverse: U && !!n.selfAdaptiveHeight,
        toolbarDirection: x,
        ...n.overlayProps,
        children: X
      })
    });
  };
  var eI = e => {
    switch (e.item.type) {
      case editorConstantsEnums.MenuItemTypes.MenuItemNormal:
        return reactJsxRuntimeCoreReexport.jsx(ew, {
          ...e
        });
      case editorConstantsEnums.MenuItemTypes.MenuItemWithSwitch:
        return reactJsxRuntimeCoreReexport.jsx(eC, {
          ...e
        });
      case editorConstantsEnums.MenuItemTypes.MenuItemWithFlattenItems:
        return reactJsxRuntimeCoreReexport.jsx(e_, {
          ...e
        });
      case editorConstantsEnums.MenuItemTypes.SubmenuItemWithComponent:
      case editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren:
        if (!e.blockManager || !e.selectionAPI || !e.boundary) {
          return null;
        }
        return reactJsxRuntimeCoreReexport.jsx(eT, {
          ...e
        });
      case editorConstantsEnums.MenuItemTypes.Title:
        return reactJsxRuntimeCoreReexport.jsx(ex, {
          ...e
        });
      case editorConstantsEnums.MenuItemTypes.Divider:
        return reactJsxRuntimeCoreReexport.jsx(eS, {
          ...e
        });
      default:
        return null;
    }
  };
  function eM(e, n, i) {
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
  class ey extends reactCoreLibraryReexport.Component {
    static getDerivedStateFromProps(e, n) {
      if (n.activeIndex === -1 && e.autoSelect) {
        return {
          activeIndex: e.autoSelect ? docxAiMenuUtils.findNextSelectable(e.items, -1, "next") : -1
        };
      } else {
        return null;
      }
    }
    isSubmenu(e) {
      return !!e && docxAiMenuUtils.isSubmenuItem(e);
    }
    getActiveMenuItem() {
      let e = this.state.activeIndex;
      if (e < 0) {
        return null;
      } else {
        return this.props.items[e];
      }
    }
    manualTriggerItemEnter(e, n) {
      let i = this.getActiveMenuItem();
      if (n || i) {
        this.eventEmitter.emit(e ? docxAiMenuConstants.enterItemClass : docxAiMenuConstants.leaveItemClass, n || (i == null ? undefined : i.name) || "");
      }
    }
    get submenuHasShown() {
      return this.submenuManager.submenuIsShow;
    }
    get isChrome121Above() {
      return browserEnvDetectionUtil.browserDetector.isChrome && versionCompareUtil.compareVersions(`${browserEnvDetectionUtil.browserDetector.version}`, "121");
    }
    componentDidMount() {
      var e;
      var n;
      var i;
      if ((e = (n = this.props).setMenuRef) !== null && e !== undefined) {
        e.call(n, this);
      }
      if ((i = this.menuRef) !== null && i !== undefined) {
        i.addEventListener("wheel", this.handleWheel);
      }
      if (this.props.autoSelect) {
        this.mouseModeRef.current = false;
      }
    }
    componentWillUnmount() {
      var e;
      var n;
      var i;
      if ((e = (n = this.props).setMenuRef) !== null && e !== undefined) {
        e.call(n, null);
      }
      if ((i = this.menuRef) !== null && i !== undefined) {
        i.removeEventListener("wheel", this.handleWheel);
      }
      this.debouncedResetHoverDisabled.cancel();
    }
    componentDidUpdate(e) {
      if (e.items.length !== this.props.items.length) {
        this.setState({
          activeIndex: -1
        });
      }
      if (this.props.autoSelect) {
        let e = docxAiMenuUtils.getSelectableIdx(this.props.items);
        let {
          activeIndex: n
        } = this.state;
        if (n > 0) {
          if (e.length === 0) {
            this.setState({
              activeIndex: -1
            });
          } else if (!e.includes(n)) {
            let n = e[0];
            this.setState({
              activeIndex: n
            });
          }
        } else if (n === -1 && e.length !== 0) {
          let n = e[0];
          this.setState({
            activeIndex: n
          });
        }
      }
    }
    noItemCanSelect() {
      return this.props.items.every(e => e.canSelected === false);
    }
    get isRootMenu() {
      return !this.props.onSelfClose;
    }
    render() {
      let {
        style: e,
        vertical: n = false,
        items: i
      } = this.props;
      let {
        inScroll: r
      } = this.state;
      let o = [...i];
      if (i[i.length - 1].type === editorConstantsEnums.MenuItemTypes.Divider) {
        o.pop();
      }
      return reactJsxRuntimeCoreReexport.jsx("div", {
        tabIndex: 0,
        ref: this.setMenuRef,
        style: {
          outline: "transparent",
          ...e,
          maxHeight: this.props.maxHeight
        },
        onMouseDown: this.handleMouseDown,
        className: m(docxAiMenuConstants.wrapperClass, "docx-menu-wrapper-animation", "ud-scrollbar", this.props.className, {
          "menu-align-vertical": n,
          "menu-align-horizontal": !n,
          "in-scroll": r,
          "menu-hide-scrollbar": !this.isChrome121Above
        }),
        onScroll: this.handleScroll,
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        onMouseMove: this.handleMouseMove,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "docx-menu-container",
          children: o.map(this.renderIMenuItem(n))
        })
      });
    }
    constructor(e, n) {
      super(e, n);
      eM(this, "state", undefined);
      eM(this, "hideGuidePopoverSignal", new docxEditorCore.SubjectType());
      eM(this, "eventEmitter", new a());
      eM(this, "submenuManager", new k());
      eM(this, "leaveTimer", null);
      eM(this, "mouseModeRef", {
        current: true
      });
      eM(this, "subMenuRef", null);
      eM(this, "menuRef", null);
      eM(this, "setSubMenuRef", e => {
        this.subMenuRef = e;
      });
      eM(this, "itemEleMap", new Map());
      eM(this, "setItemRef", (e, n) => {
        if (n) {
          this.itemEleMap.set(e, n);
        } else {
          this.itemEleMap.delete(e);
        }
      });
      eM(this, "setMenuRef", e => {
        var n;
        var i;
        this.menuRef = e;
        if ((n = (i = this.props).getRef) !== null && n !== undefined) {
          n.call(i, e);
        }
      });
      eM(this, "handleClosePanel", () => {
        var e;
        var n;
        var i;
        var r;
        if (!this.submenuHasShown) {
          if (this.isRootMenu) {
            if ((e = (n = this.props).onClose) !== null && e !== undefined) {
              e.call(n);
            }
          } else if ((i = (r = this.props).onSelfClose) !== null && i !== undefined) {
            i.call(r);
          }
        }
      });
      eM(this, "isInWheel", false);
      eM(this, "debouncedResetInWheelStatus", debounceUtil_1_1.debounce(() => {
        this.isInWheel = false;
      }, 100));
      eM(this, "handleWheel", e => {
        e.stopImmediatePropagation();
        this.isInWheel = true;
        this.debouncedResetInWheelStatus();
      });
      eM(this, "handleKeyDown", e => {
        var n;
        var i;
        var r;
        var o;
        if (this.submenuHasShown && this.subMenuRef) {
          this.subMenuRef.handleKeyDown(e);
          return;
        }
        if (!e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
          switch (e.keyCode) {
            case docxAiMenuConstants.keyCodes.DOWN:
              {
                if (this.props.keyboard === editorConstantsEnums.LayoutDirection.vertical) {
                  return;
                }
                let n = docxAiMenuUtils.findNextSelectable(this.props.items, this.state.activeIndex, "next");
                if (this.state.activeIndex !== n) {
                  let e = this.state.activeIndex >= 0 && this.itemEleMap.get(n);
                  let i = e && docxAiMenuUtils.findClosestParent(e, docxAiMenuUtils.createClassChecker("panel-menu-item"));
                  if (i) {
                    docxAiMenuUtils.scrollIntoView(i, docxAiMenuConstants.sizeConstant);
                  }
                  this.setState({
                    activeIndex: n
                  });
                } else if (this.state.activeIndex < 0) {
                  this.setState({
                    activeIndex: 0
                  });
                }
                this.mouseModeRef.current = false;
                e.stopImmediatePropagation();
                e.preventDefault();
                break;
              }
            case docxAiMenuConstants.keyCodes.UP:
              {
                if (this.props.keyboard === editorConstantsEnums.LayoutDirection.vertical) {
                  return;
                }
                let n = docxAiMenuUtils.findNextSelectable(this.props.items, this.state.activeIndex, "prev");
                if (this.state.activeIndex !== n) {
                  this.setState({
                    activeIndex: n
                  });
                  let e = this.state.activeIndex >= 0 && this.itemEleMap.get(n);
                  let i = e && docxAiMenuUtils.findClosestParent(e, docxAiMenuUtils.createClassChecker("panel-menu-item"));
                  if (i) {
                    docxAiMenuUtils.scrollIntoView(i, docxAiMenuConstants.sizeConstant);
                  }
                }
                this.mouseModeRef.current = false;
                e.stopImmediatePropagation();
                e.preventDefault();
                break;
              }
            case docxAiMenuConstants.keyCodes.LEFT:
              if (this.props.keyboard === editorConstantsEnums.LayoutDirection.horizontal || (e.stopImmediatePropagation(), e.preventDefault(), this.submenuHasShown)) {
                return;
              }
              this.mouseModeRef.current = false;
              if ((n = (i = this.props).onSelfClose) !== null && n !== undefined) {
                n.call(i);
              }
              break;
            case docxAiMenuConstants.keyCodes.RIGHT:
              if (this.props.keyboard === editorConstantsEnums.LayoutDirection.horizontal || (e.stopImmediatePropagation(), e.preventDefault(), this.submenuHasShown)) {
                return;
              }
              if (this.isSubmenu(this.getActiveMenuItem())) {
                this.mouseModeRef.current = false;
                this.manualTriggerItemEnter(true);
              }
              break;
            case docxAiMenuConstants.keyCodes.RETURN:
              {
                if (this.submenuHasShown) {
                  return;
                }
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.preventDefault();
                if (this.noItemCanSelect()) {
                  this.handleClosePanel();
                  return;
                }
                let n = this.getActiveMenuItem();
                if (n == null ? undefined : n.disabled) {
                  return;
                }
                if (docxAiMenuUtils.hasAction(n)) {
                  if ((r = (o = this.props).onItemClick) !== null && r !== undefined) {
                    r.call(o, n, e);
                  }
                }
              }
          }
        }
      });
      eM(this, "debouncedResetHoverDisabled", debounceUtil_1_1.debounce(() => {
        this.setState(() => ({
          inScroll: false
        }));
      }, 100));
      eM(this, "throttledSetInScroll", debounceUtilWrapper.createDebounce(() => {
        this.submenuManager.leaveItem();
        if (this.isInWheel) {
          this.setState(() => ({
            inScroll: true
          }));
        }
      }, 80));
      eM(this, "handleScroll", e => {
        try {
          if (!e.target || !(e.target instanceof Element) || !e.target.classList.contains("simplebar-content-wrapper")) {
            e.stopPropagation();
          }
        } catch (n) {
          e.stopPropagation();
        }
        if (e.target === this.menuRef) {
          this.hideGuidePopoverSignal.next();
          this.throttledSetInScroll();
          this.debouncedResetHoverDisabled();
        }
      });
      eM(this, "handleHoverActive", e => {
        if (e < 0) {
          this.setState({
            activeIndex: e
          });
          return;
        }
        let n = this.props.items[e];
        if (n && n.canSelected !== false) {
          this.setState({
            activeIndex: e
          });
          this.clearLeaveTimer();
          this.handleItemActive(n);
          return;
        }
      });
      eM(this, "handleStatusRefresh", () => {
        var e;
        var n;
        if ((e = (n = this.props).onRefresh) !== null && e !== undefined) {
          e.call(n);
        }
      });
      eM(this, "handleItemClick", (e, n) => {
        var i;
        var r;
        var o;
        var l;
        if (!this.isRootMenu && (o = (l = this.props).onSelfClose) !== null && o !== undefined) {
          o.call(l, true);
        }
        if ((i = (r = this.props).onItemClick) !== null && i !== undefined) {
          i.call(r, e, n);
        }
      });
      eM(this, "handleMouseLeave", () => {
        var e;
        var n;
        let {
          autoSelect: i,
          vertical: r,
          forbiddenInactiveOnMouseLeave: o,
          closeAfterMouseLeave: l
        } = this.props;
        if ((e = (n = this.props).onMouseLeave) !== null && e !== undefined) {
          e.call(n);
        }
        if (l) {
          this.handleClosePanel();
          return;
        }
        if (!i && !o && !r) {
          this.clearLeaveTimer();
          this.leaveTimer = setTimeout(() => {
            if (!this.submenuHasShown) {
              this.setState({
                activeIndex: -1
              });
            }
          }, 200);
        }
      });
      eM(this, "handleItemActive", e => {
        var n;
        var i;
        if ((n = (i = this.props).onItemActive) !== null && n !== undefined) {
          n.call(i, e);
        }
      });
      eM(this, "handleMouseEnter", () => {
        var e;
        var n;
        if ((e = (n = this.props).onMouseEnter) !== null && e !== undefined) {
          e.call(n);
        }
      });
      eM(this, "clearLeaveTimer", () => {
        if (this.leaveTimer) {
          clearTimeout(this.leaveTimer);
          this.leaveTimer = null;
        }
      });
      eM(this, "handleMouseMove", e => {
        if (!this.mouseModeRef.current && this.props.autoSelect) {
          var n;
          let i = (n = e.target) === null || n === undefined ? undefined : n.closest(".panel-menu-item");
          if (i) {
            this.manualTriggerItemEnter(true, i == null ? undefined : i.dataset.name);
          }
        }
        this.mouseModeRef.current = true;
      });
      eM(this, "handleMouseDown", e => {
        e.preventDefault();
      });
      eM(this, "renderIMenuItem", e => (n, i) => {
        let r = i === this.state.activeIndex;
        let {
          onClose: o,
          blockManager: l,
          selectionAPI: a,
          boundary: s,
          toolbarDirection: c
        } = this.props;
        return reactJsxRuntimeCoreReexport.jsx(eI, {
          item: n,
          index: i,
          hovered: r,
          onItemHover: this.handleHoverActive,
          setMenuRef: this.setSubMenuRef,
          setItemRef: this.setItemRef,
          onItemClick: this.handleItemClick,
          isRootMenuItem: this.isRootMenu,
          vertical: e,
          onClose: o,
          showIconColor: this.props.showIconColor,
          submenuManager: this.submenuManager,
          eventEmitter: this.eventEmitter,
          onRefresh: this.handleStatusRefresh,
          blockManager: l,
          selectionAPI: a,
          boundary: s,
          mouseModeRef: this.mouseModeRef,
          hideGuidePopoverSignal: this.hideGuidePopoverSignal,
          toolbarDirection: c
        }, `${n.name}-${i}`);
      });
      let i = e.autoSelect ? docxAiMenuUtils.findNextSelectable(e.items, -1, "next") : -1;
      if (e.enableDefaultSelected) {
        e.items.some((e, n) => {
          if (e.defaultSelected) {
            i = n;
            return true;
          }
        });
      }
      this.state = {
        activeIndex: i,
        inScroll: false
      };
    }
  }
  var eR = e => {
    let {
      keyboard: n
    } = e;
    let i = reactCoreLibraryReexport.useRef(null);
    let r = reactCoreLibraryReexport.useCallback(e => {
      i.current = e;
    }, []);
    let l = reactCoreLibraryReexport.useCallback(e => {
      var n;
      if ((n = i.current) !== null && n !== undefined) {
        n.handleKeyDown(e);
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (n !== false) {
        document.addEventListener("keydown", l, true);
        return () => {
          document.removeEventListener("keydown", l, true);
        };
      }
    }, [n]);
    return reactJsxRuntimeCoreReexport.jsx(ey, {
      setMenuRef: r,
      ...e
    });
  };
  require.d(exports, {
    DocxAiMenu: function () {
      return eR;
    }
  });
}