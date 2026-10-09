// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_6' to 'ToolCallItem'
// - Renamed export 'ZG' to 'ToolCallWrapper'
// - Renamed export 'NC' to 'ToolCallRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50161.8780fb41.js
         * chunkId: 50161
         * moduleId: 114415
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var motionPresenceComponent = require("motion-presence-component") /*id: 591327*/;
  var motionComponentFactory_1 = require("motion-component-factory_1") /*id: 57495*/;
  var mergeClassNamesUtil = require("merge-class-names-util") /*id: 975716*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var animationDebugContext = require("animation-debug-context") /*id: 60445*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: i,
      href: l,
      ...a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(l ? "a" : "div", {
      ref: t,
      "data-thinking-box-tool-call": true,
      className: mergeClassNamesUtil.mergeClassNames(`
          flex-row inline-flex max-w-full min-w-0 items-center gap-[6px]
          rounded-full border-[0.5px] border-solid py-[2.5px] pr-[10px]
          pl-[10px] text-[14px] leading-[20px] font-[400] transition-all
          duration-[0.2s] ease-out
        `, `
          border-dbx-line-10 bg-dbx-fill-trans-10 text-dbx-text-secondary
          hover:bg-dbx-fill-trans-10-hover
        `, i),
      href: xssContentSanitizer.sanitizeUrl(l, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3el$tOWhWelZ5W$ZjMWJreFhTblps%Xpsc$lqSXhkMkl5Tld4aWJsSjZ%REpHT%dJe%1-Qlpl$*t3WWpJNWMweFh%bWhp%jNkMFlWaFNiR0p%TlRCak0ya*9ZMjFrT$dOM1B%MD0"
      }),
      ...a
    });
  });
  let x = reactCoreLibraryReexport.forwardRef(function (e, t) {
    if (e.data.type === "tool-call") {
      return reactJsxRuntimeCoreReexport.jsx(m, {
        ref: t,
        className: e.className,
        data: e.data
      });
    }
    if (e.data.type === "tool-call-custom-component") {
      return reactJsxRuntimeCoreReexport.jsx(h, {
        className: e.className,
        data: e.data
      });
    }
    if (e.data.type === "magic-tool-element") {
      if (e.data.magicElementType === "line-break") {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          ref: t,
          className: "basis-[100%]"
        });
      }
      e.data;
    }
    e.data;
    return null;
  });
  let h = e => {
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: e.data.component ?? null
    });
  };
  let m = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      data: h,
      className: m
    } = e;
    let {
      getAnimationDuration: g
    } = animationDebugContext.useAnimationDebug();
    let {
      status: f,
      clickable: v,
      onToolClick: b
    } = h;
    let w = reactCoreLibraryReexport.useCallback(() => {
      if (f !== "disabled" && v) {
        if (b != null) {
          b();
        }
      }
    }, [f, v, b]);
    return reactJsxRuntimeCoreReexport.jsxs(p, {
      ref: t,
      href: xssContentSanitizer.sanitizeUrl(h.href, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3el$tOWhWelZ5W$ZjMWJreFhTblps%Xpsc$lqSXhkMkl5Tld4aWJsSjZ%REpHT%dJe%1-Qlpl$*t3WWpJNWMweFh%bWhp%jNkMFlWaFNiR0p%TlRCak0ya*9ZMjFrT$dOM1B%MD0"
      }),
      target: "_blank",
      rel: "noopener noreferrer",
      "data-tool-call-item-id": h.id,
      className: mergeClassNamesUtil.mergeClassNames(`
          [&_img]:block
          [&_span]:block
          [&_svg]:block
        `, v && "cursor-pointer select-none", (h.leadingIcon || h.fallbackLeadingIcon || h.status === "running") && "pl-[7px]", m, h.className),
      onClick: w,
      children: [(h.leadingIcon || h.fallbackLeadingIcon || f === "running") && reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
            relative flex size-[14px] shrink-0 items-center justify-center
            [&_img]:h-[14px] [&_img]:w-[14px] [&_img]:object-cover
            [&_svg]:h-[14px] [&_svg]:w-[14px] [&_svg]:text-dbx-text-secondary
          `,
        children: reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
          mode: "sync",
          children: f === "running" ? reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
            className: `
                  absolute inset-0
                  [&_div]:block
                `,
            initial: {
              opacity: 0,
              scale: 0.5,
              filter: "blur(2px)"
            },
            animate: {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)"
            },
            exit: {
              opacity: 0,
              scale: 0.5,
              filter: "blur(2px)"
            },
            transition: {
              type: "spring",
              duration: g(0.35),
              bounce: 0
            },
            children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
              size: "small"
            })
          }, "running") : reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
            className: `
                  absolute inset-0
                  [&_div]:block
                `,
            initial: {
              opacity: 0,
              scale: 0.5,
              filter: "blur(2px)"
            },
            animate: {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)"
            },
            exit: {
              opacity: 0,
              scale: 0.5,
              filter: "blur(2px)"
            },
            transition: {
              type: "spring",
              duration: g(0.35),
              bounce: 0
            },
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: "h-full w-full",
              children: h.leadingIcon ?? h.fallbackLeadingIcon
            })
          }, "leading-icon")
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
          flex-1 truncate
          [&_span]:inline
        `,
        children: h.name || reactJsxRuntimeCoreReexport.jsx("span", {
          className: "select-none",
          children: "​"
        })
      }), (h.trailingIcon || h.clickable) && h.trailingIcon !== null && reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
            ml-[-2px] flex h-[10px] w-[10px] shrink-0 items-center
            justify-center
            [&_img]:h-[10px] [&_img]:w-[10px] [&_img]:object-cover
            [&_svg]:h-[10px] [&_svg]:w-[10px]
          `,
        children: h.trailingIcon ?? reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
          className: "text-dbx-text-tertiary"
        })
      })]
    });
  });
  require.d(exports, {
    ToolCallItem: function () {
      return m;
    },
    ToolCallWrapper: function () {
      return p;
    },
    ToolCallRenderer: function () {
      return x;
    }
  });
}