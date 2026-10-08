// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'ChatCanvasHeader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99448.e1905545.js
         * chunkId: 99448
         * moduleId: 468674
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var controlBarLayout = require("control-bar-layout") /*id: 23865*/;
  var closeIconComponent_1_1 = require("close-icon-component_1_1") /*id: 259726*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = (e, t) => {
    let l = e.extraProps?.content;
    let o = e.extraProps?.trigger || "hover";
    let p = e.extraProps?.placement || "bottom";
    let C = e.extraProps?.visible;
    let h = e.extraProps?.onVisibleChange;
    return {
      type: "custom",
      element: reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
        trigger: o,
        placement: p,
        visible: C,
        onVisibleChange: h,
        ...e.extraProps,
        content: l,
        children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
          disabled: e.disabled,
          tooltip: e.tooltip,
          "data-testid": e.testId,
          "data-checked": e.checked,
          children: e.icon
        })
      }),
      ...t
    };
  };
  let C = e => {
    let l = {
      key: e.key,
      disabled: e.disabled,
      className: e.className
    };
    switch (e.type) {
      case "button":
      case "icon":
        return {
          type: "icon",
          icon: e.icon,
          tooltip: e.tooltip,
          onClick: e.extraProps?.onClick,
          extraProps: {
            "data-testid": e.testId,
            "data-checked": e.checked,
            ...e.extraProps
          },
          ...l
        };
      case "popover":
        return p(e, l);
      case "text":
        return {
          type: "custom",
          element: reactJsxRuntimeCoreReexport.jsx("div", {
            className: r(e.extraProps?.textClassName),
            "data-testid": e.testId,
            children: e.extraProps?.text
          }),
          ...l
        };
      case "link":
        return {
          type: "custom",
          element: reactJsxRuntimeCoreReexport.jsx("a", {
            target: e.extraProps?.target || "_self",
            className: r(e.className),
            "data-testid": e.testId,
            ...e.extraProps,
            href: xssContentSanitizer.sanitizeUrl(e.extraProps?.href, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t5-%doa1F6RnpX$mhzZ*1SW$$-WmpNMHBx$ERKT2RtSllRblpp-lZaM$pFaE5kb*t5T1hSa$Z6bDF%RmRP-%dKd$dta*pl$EZ2$2xkR2ExcFlTWFpr$0ZKd1lraE5kb*95$mpCT$-wNW9aRWRX-m1JelNuQmxi$lpy$EZkc01*cFhNWHBN-mxKNlp$ZEdl$m96$m5vPQ"
            }),
            children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              disabled: e.disabled,
              tooltip: e.tooltip,
              children: e.icon
            })
          }),
          ...l
        };
      case "custom":
        {
          let t = typeof e.extraProps.render == "function" ? e.extraProps.render(e) : e.extraProps.render;
          return {
            type: "custom",
            element: reactJsxRuntimeCoreReexport.jsx("div", {
              className: e.className,
              "data-testid": e.testId,
              ...e.extraProps,
              children: t
            }),
            ...l
          };
        }
      case "divider":
        return {
          type: "divider",
          ...l
        };
      default:
        return {
          type: "custom",
          element: null,
          ...l
        };
    }
  };
  let h = function (e = []) {
    let t = [];
    let s = [];
    let n = [];
    e.forEach(e => {
      let i = C(e);
      if (e.position === "left") {
        t.push(i);
      } else if (e.position === "center") {
        s.push(i);
      } else {
        n.push(i);
      }
    });
    return {
      left: t,
      center: s,
      right: n
    };
  };
  let m = e => {
    let {
      items: t,
      handleClose: s,
      forceHide: i
    } = e;
    let {
      right: r
    } = reactCoreLibraryReexport.useMemo(() => h(t), [t]);
    return reactCoreLibraryReexport.useMemo(() => {
      let e = !(i == null ? undefined : i.close);
      let t = r && r.length > 0;
      return [(e || t) && {
        type: "divider",
        className: "h-10"
      }, ...r, e && {
        type: "icon",
        icon: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {
          width: 16,
          spacing: 8
        }),
        onClick: s,
        tooltip: "关闭",
        extraProps: {
          "data-testid": "canvas_close_btn"
        }
      }].filter(Boolean);
    }, [r, s, i]);
  };
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var chatHeaderToolButtonRenderer = require("chat-header-tool-button-renderer") /*id: 17734*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var spaceLayoutComponent = require("space-layout-component") /*id: 765807*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var eyeIcon = require("eye-icon") /*id: 338021*/;
  var chatCanvasLayoutHook = require("chat-canvas-layout-hook") /*id: 342022*/;
  let j = e => {
    let {
      chatType: t,
      conversationId: s,
      mode: n,
      leftToolButtonPluginList: i,
      forceHide: r
    } = e;
    let {
      setMode: a,
      isCanvasExpand: l
    } = chatCanvasLayoutHook.useChatCanvasLayout({
      conversationId: s
    });
    let o = responsiveScreenHooks.useIsNarrowScreen();
    let d = i18nTranslationUtils.useTranslationWithFallback();
    let c = d(brandNameConstants.brandNameKey);
    return reactJsxRuntimeCoreReexport.jsxs(spaceLayoutComponent.Space, {
      spacing: 8,
      className: `
        pointer-events-auto w-full items-center
        empty:hidden
      `,
      children: [n === "canvas_immersive" && !(r == null ? undefined : r.askDoubao) && reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        onClick: () => {
          if (o) {
            a("standard");
          } else {
            a("zen_split");
          }
        },
        className: "h-26 rounded-8 !px-4",
        variant: "text",
        size: "md",
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center gap-4 text-[rgba(0,0,0,0.85)]",
          children: [reactJsxRuntimeCoreReexport.jsx(eyeIcon.eyeIcon, {
            className: "text-24"
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            children: d("desktop_browser_search_askProd", {
              brandName: c
            })
          })]
        })
      }), i == null ? undefined : i.map(e => reactJsxRuntimeCoreReexport.jsx(chatHeaderToolButtonRenderer.HeaderToolButton, {
        pluginIdentifer: e,
        conversationId: s,
        chatType: t,
        isLeftSideExpand: l,
        isRightBarExpand: false,
        isNarrowScreen: o
      }, String(e)))]
    });
  };
  let P = e => {
    let {
      items: t,
      isWideScreenMode: s,
      mode: i,
      conversationId: r,
      chatId: a,
      chatType: l,
      leftToolButtonPluginList: o,
      forceHide: d
    } = e;
    let {
      left: c
    } = reactCoreLibraryReexport.useMemo(() => h(t), [t]);
    return reactCoreLibraryReexport.useMemo(() => {
      if (s) {
        let e = !(d == null ? undefined : d.askDoubao);
        let t = o && o.length > 0;
        let s = c && c.length > 0;
        return [(e || t) && {
          type: "custom",
          key: "chat-header-actions",
          element: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "flex items-center",
            children: reactJsxRuntimeCoreReexport.jsx(j, {
              conversationId: r,
              chatId: a,
              chatType: l,
              leftToolButtonPluginList: o,
              mode: i,
              forceHide: d
            })
          })
        }, ...c, (e || t || s) && {
          type: "divider",
          style: {
            height: "10px",
            marginRight: "12px"
          }
        }].filter(Boolean);
      }
      return [];
    }, [t, c, s, i, a, l, r, o, d]);
  };
  var controlBarActionListComponent = require("control-bar-action-list-component") /*id: 716645*/;
  let N = e => {
    let {
      left: t = [],
      center: s = [],
      right: n = [],
      iconSize: i,
      spacing: r,
      newIcon: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex w-full items-center justify-between",
      children: [t.length > 0 && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex flex-1 justify-start",
        children: reactJsxRuntimeCoreReexport.jsx(controlBarActionListComponent.ControlBarActionList, {
          items: t,
          iconSize: i,
          className: "flex w-full flex-1 justify-start",
          spacing: r,
          newIcon: a
        })
      }), s.length > 0 && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex flex-1 justify-center",
        children: reactJsxRuntimeCoreReexport.jsx(controlBarActionListComponent.ControlBarActionList, {
          items: s,
          iconSize: i,
          className: "flex w-full flex-1 justify-center",
          spacing: r,
          newIcon: a
        })
      }), n.length > 0 && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex flex-1 justify-end",
        children: reactJsxRuntimeCoreReexport.jsx(controlBarActionListComponent.ControlBarActionList, {
          items: n,
          iconSize: i,
          className: "flex w-full flex-1 justify-end",
          spacing: r,
          newIcon: a
        })
      })]
    });
  };
  let S = e => {
    let {
      items: t,
      centerContent: s
    } = e;
    let {
      left: i,
      center: r,
      right: a
    } = reactCoreLibraryReexport.useMemo(() => h(t), [t]);
    return reactCoreLibraryReexport.useMemo(() => {
      let e = typeof s == "function" ? s() : s;
      let t = [...r];
      if (e) {
        t = [{
          type: "custom",
          element: e,
          key: "legacy-center-content"
        }, ...t];
      }
      if (i.length > 0 || a.length > 0 || t.length > 0) {
        return [{
          type: "custom",
          key: "center-area-layout-wrapper",
          element: reactJsxRuntimeCoreReexport.jsx(N, {
            "data-testid": "center-area-layout-wrapper",
            className: "w-full",
            left: i,
            center: t,
            right: a,
            iconSize: "large",
            spacing: 8
          }),
          className: "w-full"
        }];
      } else {
        return [];
      }
    }, [s, i, r, a]);
  };
  var chatSidebarStateManager = require("chat-sidebar-state-manager") /*id: 496970*/;
  let R = e => {
    let {
      conversationId: t,
      chatId: s,
      chatType: n,
      centerContent: i,
      centerItems: l,
      onBeforeClose: o,
      onAfterClose: d,
      className: c,
      leftToolButtonPluginList: p,
      forceHide: C
    } = e;
    let {
      mode: h,
      isWideScreenMode: x,
      setMode: f
    } = chatCanvasLayoutHook.useChatCanvasLayout({
      conversationId: t,
      messageId: s
    });
    let _ = chatSidebarStateManager.useSidebarExpandState();
    let v = async () => {
      if (o) {
        await o();
      }
      if (_) {
        f("standard");
      } else {
        f("focus_chat");
      }
      if (d) {
        await d();
      }
    };
    let w = P({
      isWideScreenMode: x,
      mode: h,
      conversationId: t,
      chatId: s,
      chatType: n,
      leftToolButtonPluginList: p,
      forceHide: C
    });
    let g = S({
      items: l,
      centerContent: i
    });
    let b = m({
      handleClose: v,
      forceHide: C
    });
    return reactJsxRuntimeCoreReexport.jsx(controlBarLayout.ControlBarLayout, {
      className: r("w-full", c),
      iconSize: "small",
      spacing: 10,
      bottomBorder: false,
      style: {
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        height: "56px"
      },
      centerClassName: "!w-full",
      syncSideWidths: false,
      rightClassName: "ml-8",
      centerContentClassName: "!w-full",
      newIcon: true,
      left: w,
      center: g,
      autoCalcLayout: false,
      right: b
    });
  };
  let $ = e => {
    let {
      children: t,
      isShareMode: s,
      onClose: n
    } = e;
    if (s) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex h-56 items-center border-b-1 border-b-dbx-line-7 pr-12 pl-12",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "h-full flex-1",
          children: t
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mr-4 ml-4 h-10 w-1 bg-dbx-line-10"
        }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "icon",
          color: "grey-filled",
          onClick: n,
          children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {})
        })]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(R, {
        onAfterClose: n,
        centerContent: t,
        className: "shrink-0"
      });
    }
  };
  require.d(exports, {
    ChatCanvasHeader: function () {
      return $;
    }
  });
}