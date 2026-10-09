// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'ThinkingBox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50161.8780fb41.js
         * chunkId: 50161
         * moduleId: 465166
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useMediaQuery = require("use-media-query") /*id: 797741*/;
  var mergeClassNamesUtil = require("merge-class-names-util") /*id: 975716*/;
  let r = e => {
    let t = [];
    let i = new Set();
    [...e].reverse().forEach(e => {
      if (!i.has(e.id)) {
        i.add(e.id);
        t.unshift(e);
      }
    });
    return t;
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.createContext("NO_CONTEXT");
  let d = {
    expandTooltip: "Expand",
    collapseTooltip: "Collapse",
    fallbackTitle: "Thinking",
    toolCallMore: "More",
    toolCallCollapse: "Collapse",
    taskDone: "Task done"
  };
  let c = e => {
    let {
      children: t,
      translations: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(s.Provider, {
      value: i,
      children: t
    });
  };
  let u = () => {
    let e = reactCoreLibraryReexport.useContext(s);
    if (e === "NO_CONTEXT") {
      throw Error("useThinkingBoxTranslations must be used within a ThinkingBoxTranslationsProvider");
    }
    return e || d;
  };
  var animationDebugContext = require("animation-debug-context") /*id: 60445*/;
  var motionPresenceComponent = require("motion-presence-component") /*id: 591327*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var motionComponentFactory_1 = require("motion-component-factory_1") /*id: 57495*/;
  var rtlCirclePlayIcon = require("rtl-circle-play-icon") /*id: 681027*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var chevronDownIcon_1_1 = require("chevron-down-icon_1_1") /*id: 452133*/;
  var svgExpandIconComponent = require("svg-expand-icon-component") /*id: 993319*/;
  var reactSvgIcon_2 = require("react-svg-icon_2") /*id: 975719*/;
  let y = e => {
    let t = 58.33333333333333;
    if (e.enableDebug) {
      if (e.invertOpacity) {
        return `linear-gradient(
      90deg,
      rgba(0,0,0,0.5) 41.66666666666667%,
      black ${41.76666666666667}%,
      black ${t - 0.1}%,
      rgba(0,0,0,0.5) ${t}%)`;
      } else {
        return `linear-gradient(
      90deg,
      black 41.66666666666667%,
      rgba(0,0,0,0.3) ${41.76666666666667}%,
      rgba(0,0,0,0.3) ${t - 0.1}%,
      black ${t}%
    )`;
      }
    } else if (e.invertOpacity) {
      return `linear-gradient(
        90deg,
        rgba(0,0,0,0.5) 41.66666666666667%,
        black ${50}%,
        rgba(0,0,0,0.5) ${t}%
      )`;
    } else {
      return `linear-gradient(
        90deg,
        black 41.66666666666667%,
        rgba(0,0,0,0.3) ${50}%,
        black ${t}%
      )`;
    }
  };
  let j = e => {
    let {
      children: t,
      className: i,
      durationInSeconds: n = 2,
      delayInSeconds: l = 0.75,
      repeatDelayInSeconds: r = 1,
      disableAllAnimations: s = false,
      disableSweep: d = false
    } = e;
    let {
      getAnimationDuration: c,
      showBorders: u
    } = animationDebugContext.useAnimationDebug();
    return reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
      initial: true,
      children: reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
        className: mergeClassNamesUtil.mergeClassNames(u && "bg-red-600/30", i),
        style: {
          ...(d ? {} : {
            maskImage: y({
              enableDebug: u,
              invertOpacity: true
            }),
            maskSize: "240% 100%",
            maskRepeat: "no-repeat"
          })
        },
        initial: {
          ...(!d && {
            maskPosition: `${100} 0%`
          })
        },
        animate: {
          ...(!d && {
            maskPosition: `${-0}% 0%`
          })
        },
        transition: {
          ...(!d && {
            duration: c(n),
            repeat: Infinity,
            type: "tween",
            ease: "easeOut",
            delay: c(l),
            repeatDelay: c(r)
          }),
          ...(s && {
            duration: 0,
            delay: 0,
            repeat: 0
          })
        },
        children: t
      }, `${t}-${d}`)
    });
  };
  let k = e => {
    let {
      className: i,
      title: n,
      screenshotUrl: l,
      onScreenshotClick: r,
      onTitleClick: s,
      thinkingTimeElapsed: d,
      expanded: c,
      onToggleExpandClick: u,
      hideExpandButton: h,
      stepId: g,
      disableTitleLightSweeping: f,
      enableExpandTooltip: b = false,
      disableAllAnimations: w = false,
      removeBoxInlinePadding: y = false,
      taskDone: k = false,
      forceUseArrowAsExpandButton: N = false
    } = e;
    let {
      getAnimationDuration: R,
      showBorders: E
    } = animationDebugContext.useAnimationDebug();
    return reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
      "data-thinking-box": "title",
      className: mergeClassNamesUtil.mergeClassNames(i),
      style: {
        paddingLeft: !y * 20,
        paddingTop: !y * 16,
        paddingRight: !y * 16
      },
      layoutRoot: true,
      children: reactJsxRuntimeCoreReexport.jsxs(motionComponentFactory_1.motionFactory.div, {
        className: mergeClassNamesUtil.mergeClassNames(`
            relative flex-row flex min-w-0 !items-start justify-between
            gap-[20px]
          `),
        layout: "position",
        initial: false,
        transition: {
          layout: {
            type: "spring",
            duration: R(0.5),
            bounce: 0,
            ...(w && {
              duration: R(0)
            })
          }
        },
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex-row flex min-w-0 flex-1 items-center",
          children: [reactJsxRuntimeCoreReexport.jsx($, {
            screenshotUrl: l,
            onScreenshotClick: r,
            disableAllAnimations: w
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "relative flex min-w-0 flex-1 flex-col items-start",
            children: [reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
              initial: false,
              mode: "popLayout",
              children: reactJsxRuntimeCoreReexport.jsxs(motionComponentFactory_1.motionFactory.div, {
                layoutRoot: true,
                initial: {
                  x: -6,
                  opacity: 0,
                  filter: "blur(3px)"
                },
                animate: {
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                exit: {
                  x: 10,
                  opacity: 0,
                  filter: "blur(3px)"
                },
                transition: {
                  duration: R(0.75),
                  type: "spring",
                  bounce: 0,
                  ...(w && {
                    duration: R(0)
                  })
                },
                className: mergeClassNamesUtil.mergeClassNames("flex-row flex w-full items-center justify-start", (k && !h || N) && "cursor-pointer select-none"),
                onClick: () => {
                  if (s != null) {
                    s();
                  }
                  if (k || N) {
                    if (u != null) {
                      u();
                    }
                  }
                },
                children: [reactJsxRuntimeCoreReexport.jsx(j, {
                  className: mergeClassNamesUtil.mergeClassNames(`
                      w-fit max-w-full min-w-0 truncate text-[14px]
                      leading-[22px]
                    `, d === null && "leading-[28px]", k ? "font-[400] text-dbx-text-secondary" : "font-[500] text-dbx-text-primary"),
                  disableSweep: f === undefined ? typeof n != "string" && typeof n != "number" : f,
                  children: n
                }), reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
                  initial: false,
                  mode: "popLayout",
                  children: (k && !h || N) && reactJsxRuntimeCoreReexport.jsx("div", {
                    className: "pl-[6px]",
                    children: reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
                      className: mergeClassNamesUtil.mergeClassNames(`
                            h-[12px] w-[12px]
                            [&_img]:block [&_img]:h-full [&_img]:w-full
                            [&_img]:object-cover
                            [&_span]:block
                            [&_svg]:block [&_svg]:h-full [&_svg]:w-full
                          `, !k && "text-s-color-text-quaternary", k && "text-s-color-text-tertiary", E && `
                              outline-[1px] outline-offset-[-1px]
                              outline-red-500/50 outline-solid
                            `),
                      initial: {
                        opacity: 0,
                        scale: 0.6,
                        filter: "blur(2px)"
                      },
                      animate: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                        transform: c ? "rotate(0deg)" : "rotate(-90deg)",
                        marginTop: c ? "1px" : "0.5px"
                      },
                      exit: {
                        opacity: 0,
                        scale: 0.6,
                        filter: "blur(2px)"
                      },
                      transition: {
                        duration: R(0.3),
                        type: "spring",
                        bounce: 0,
                        ...(w && {
                          duration: R(0)
                        })
                      },
                      children: reactJsxRuntimeCoreReexport.jsx(chevronDownIcon_1_1.ChevronDownIcon, {
                        className: "size-12",
                        "data-testid": "expand-result-btn"
                      })
                    })
                  })
                })]
              }, (n == null ? undefined : n.toString()) ?? g)
            }), d !== null && reactJsxRuntimeCoreReexport.jsx(S, {
              thinkingTimeElapsed: d
            })]
          })]
        }), !h && !N && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "invisible h-[28px] w-[28px] shrink-0"
          }), reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
            initial: false,
            children: k ? null : reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
              className: mergeClassNamesUtil.mergeClassNames("absolute top-[0px] right-[0px] origin-top-right", y && "top-[0px] right-[0px]"),
              initial: {
                opacity: 0,
                scale: 0.6,
                filter: "blur(2px)"
              },
              animate: {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)"
              },
              exit: {
                opacity: 0,
                scale: 0.6,
                filter: "blur(2px)"
              },
              transition: {
                duration: R(0.3),
                type: "spring",
                bounce: 0,
                ...(w && {
                  duration: R(0)
                })
              },
              children: reactJsxRuntimeCoreReexport.jsx(T, {
                className: mergeClassNamesUtil.mergeClassNames("cursor-pointer"),
                expanded: c,
                onToggleExpandClick: u,
                enableTooltip: b,
                disableAllAnimations: w
              })
            })
          })]
        })]
      })
    });
  };
  let $ = e => {
    let {
      screenshotUrl: t,
      onScreenshotClick: i,
      disableAllAnimations: n
    } = e;
    let {
      getAnimationDuration: l
    } = animationDebugContext.useAnimationDebug();
    return reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
      initial: false,
      mode: "wait",
      children: t && reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
        className: "h-[40px] w-[53.3px] shrink-0 overflow-hidden rounded-[4px]",
        initial: {
          opacity: 0,
          width: 0,
          height: 0,
          marginRight: 0,
          filter: "blur(8px)"
        },
        animate: {
          opacity: 1,
          width: 53.3,
          height: 40,
          marginRight: 12,
          filter: "blur(0px)"
        },
        exit: {
          opacity: 0,
          width: 0,
          height: 0,
          marginRight: 0,
          filter: "blur(8px)"
        },
        transition: {
          default: {
            duration: l(0.5),
            type: "spring",
            bounce: 0,
            ...(n && {
              duration: l(0)
            })
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(N, {
          screenshotUrl: t,
          onScreenshotClick: i
        })
      })
    });
  };
  let N = e => {
    let {
      screenshotUrl: t,
      onScreenshotClick: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        relative h-full w-full shrink-0 rounded-[4px] bg-s-color-bg-tertiary
      `,
      children: [reactJsxRuntimeCoreReexport.jsx("img", {
        className: `
          absolute inset-0 h-full w-full rounded-[4px] border-[1px] border-solid
          border-s-color-border-tertiary object-cover
        `,
        src: xssContentSanitizer.sanitizeUrl(t, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3el$tOWhWelZ5W$ZjMWJreFhTblps%Xpsc$lqSXhkMkl5Tld4aWJsSjZ%RE5T-0dSS*$HeE1ibEo2Wl$kR2$Wb3pWbm89"
        }),
        onClick: i
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
          pointer-events-none absolute inset-0 flex h-full w-full items-center
          justify-center
        `,
        children: reactJsxRuntimeCoreReexport.jsx(rtlCirclePlayIcon.CirclePlayIcon, {})
      })]
    });
  };
  let S = e => {
    let {
      thinkingTimeElapsed: t
    } = e;
    if (typeof t == "string") ;else if (typeof t == "number") {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "text-[12px] leading-[18px] text-s-color-text-quaternary",
        children: function (e) {
          let t = Math.floor(e / 3600);
          let i = Math.floor(e % 3600 / 60);
          let n = [t.toString().padStart(2, "0"), i.toString().padStart(2, "0"), (e % 60).toString().padStart(2, "0")];
          if (t > 0) {
            return n.join(":");
          } else {
            return n.slice(1).join(":");
          }
        }(t)
      });
    }
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "text-[12px] leading-[18px] text-s-color-text-quaternary",
      children: t
    });
  };
  let T = e => {
    let {
      expanded: t = false,
      onToggleExpandClick: i,
      className: l,
      enableTooltip: r = true,
      disableAllAnimations: s = false
    } = e;
    let [d, c] = reactCoreLibraryReexport.useState(false);
    let h = u();
    let {
      getAnimationDuration: g
    } = animationDebugContext.useAnimationDebug();
    return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
      getPopupContainer: () => document.body,
      content: t ? h.collapseTooltip : h.expandTooltip,
      visible: !!r && d,
      onVisibleChange: c,
      children: reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.button, {
        layout: "position",
        transition: {
          type: "spring",
          duration: g(0.5),
          bounce: 0,
          ...(s && {
            duration: g(0)
          })
        },
        onClick: () => {
          if (i != null) {
            i();
          }
        },
        className: mergeClassNamesUtil.mergeClassNames(`
            h-[28px] w-[28px] overflow-hidden rounded-[6px] border-none
            bg-transparent transition-colors duration-200 ease-out outline-none
            hover:bg-dbx-fill-trans-10-hover
          `, l),
        children: reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
          initial: false,
          mode: "popLayout",
          children: reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
            className: mergeClassNamesUtil.mergeClassNames(`
                pointer-events-none flex h-full w-full items-center
                justify-center
              `),
            initial: {
              opacity: 0,
              scale: 0.6,
              filter: "blur(2px)"
            },
            animate: {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)"
            },
            exit: {
              opacity: 0,
              scale: 0.6,
              filter: "blur(2px)"
            },
            transition: {
              duration: g(0.3),
              type: "spring",
              bounce: 0,
              ...(s && {
                duration: g(0)
              })
            },
            children: t ? reactJsxRuntimeCoreReexport.jsx(svgExpandIconComponent.ExpandIcon, {
              className: "h-16 w-16"
            }) : reactJsxRuntimeCoreReexport.jsx(reactSvgIcon_2.SvgIcon, {
              className: "h-16 w-16"
            })
          }, t ? "expanded" : "collapsed")
        })
      })
    });
  };
  var motionContextProvider_1 = require("motion-context-provider_1") /*id: 483976*/;
  var cubicBezierEasing_2 = require("cubic-bezier-easing_2") /*id: 303125*/;
  var useElementSizeHook_1 = require("use-element-size-hook_1") /*id: 303517*/;
  var checkCircleFilledIcon = require("check-circle-filled-icon") /*id: 259842*/;
  var circleIcon = require("circle-icon") /*id: 211885*/;
  let M = e => {
    let {
      className: t,
      showStartEndStepBottomPadding: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: mergeClassNamesUtil.mergeClassNames("h-[0px]", i && "h-[16px]", t)
    });
  };
  let Z = e => {
    let {
      className: t,
      expanded: i,
      title: n,
      showStartEndStepBottomPadding: l
    } = e;
    let r = u();
    if (i) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: mergeClassNamesUtil.mergeClassNames("text-[14px] leading-[22px] font-[400]", t),
        "data-thinking-box": "step-end-expanded",
        children: n || r.taskDone
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: mergeClassNamesUtil.mergeClassNames("h-[0px]", l && "h-[16px]", t)
      });
    }
  };
  var reactUseEventCallback = require("react-use-event-callback") /*id: 112412*/;
  var panguTextSpacing = require("pangu-text-spacing") /*id: 211267*/;
  var F = panguTextSpacing;
  var imagePreviewContext = require("image-preview-context") /*id: 61163*/;
  var useResizeObserverHook = require("use-resize-observer-hook") /*id: 754067*/;
  var unifiedProcessorCore = require("unified-processor-core") /*id: 302429*/;
  var markdownParserSetup = require("markdown-parser-setup") /*id: 159982*/;
  function H(e) {
    return e.type === "paragraph" && e.children.every(e => e.type === "text" || e.type === "break");
  }
  let D = function () {
    var e = arguments.length;
    var t = Array(e);
    var i = 0;
    for (; i < e; i++) {
      t[i] = arguments[i];
    }
    return e => {
      t.forEach(t => {
        if (t && "current" in t) {
          t.current = e;
        } else if (typeof t == "function") {
          t(e);
        }
      });
    };
  };
  var reactUsePrevious = require("react-use-previous") /*id: 164072*/;
  var thinkingBoxToolCall = require("thinking-box-tool-call") /*id: 114415*/;
  let z = {
    hidden: e => ({
      opacity: 0,
      x: 10,
      filter: "blur(4px)",
      transition: {
        type: "spring",
        duration: e.s(0.5),
        bounce: 0,
        delay: 0
      }
    }),
    visible: e => ({
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        duration: e.s(0.5),
        bounce: 0,
        delay: e.staggerIndex * e.s(0.05)
      }
    })
  };
  let U = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: i,
      children: n,
      staggerIndex: l,
      disableAllAnimations: r
    } = e;
    let {
      getAnimationDuration: s
    } = animationDebugContext.useAnimationDebug();
    return reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
      className: mergeClassNamesUtil.mergeClassNames(i),
      ref: t,
      custom: {
        s: r ? () => 0 : s,
        staggerIndex: l
      },
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
      variants: z,
      children: n
    });
  });
  let V = e => {
    let {
      className: l,
      stepId: r,
      tools: s,
      disableAllAnimations: d
    } = e;
    let c = u();
    let p = s.filter(e => e.type !== "magic-tool-element" && (e.type, true));
    let h = p.length > 10 && p.length - 10 > 2;
    let [g, f] = reactCoreLibraryReexport.useState(true);
    let v = h && g ? s.slice(0, 10) : s;
    let b = reactUsePrevious.usePrevious(v.map(e => e.type !== "magic-tool-element" ? e.id : e.magicElementType));
    let w = p.slice(10).filter(e => e.type === "tool-call").map(e => e.leadingIcon).filter(Boolean).slice(0, 3);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-thinking-box": "step-tool-call",
      className: mergeClassNamesUtil.mergeClassNames("flex w-full min-w-0 flex-col gap-2", l),
      children: reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
        className: `
          relative mt-[-8px] flex-row flex w-full max-w-full min-w-0 !flex-wrap
          [column-gap:8px]
          [row-gap:0px]
        `,
        children: reactJsxRuntimeCoreReexport.jsxs(motionPresenceComponent.AnimatePresence, {
          initial: false,
          mode: "popLayout",
          children: [v.map((e, t) => {
            if (e.type === "magic-tool-element") {
              return reactJsxRuntimeCoreReexport.jsx(thinkingBoxToolCall.ToolCallRenderer, {
                className: "pt-[8px]",
                data: e
              }, `${r}-${e.id}-disable-animation`);
            } else {
              return reactJsxRuntimeCoreReexport.jsx(U, {
                staggerIndex: t - ((b == null ? undefined : b.length) ?? 0),
                disableAllAnimations: d,
                className: mergeClassNamesUtil.mergeClassNames("flex max-w-full pt-[8px]", e.containerClassName),
                children: reactJsxRuntimeCoreReexport.jsx(thinkingBoxToolCall.ToolCallRenderer, {
                  data: e
                }, e.id)
              }, `${r}-${e.id}`);
            }
          }), h && g && reactJsxRuntimeCoreReexport.jsx(U, {
            className: "pt-[8px]",
            staggerIndex: v.length - ((b == null ? undefined : b.length) ?? 0),
            disableAllAnimations: d,
            children: reactJsxRuntimeCoreReexport.jsxs(thinkingBoxToolCall.ToolCallWrapper, {
              className: mergeClassNamesUtil.mergeClassNames("cursor-pointer select-none", `
                    [&_img]:block [&_img]:h-full [&_img]:w-full
                    [&_img]:object-cover
                    [&_span]:block
                    [&_svg]:block [&_svg]:h-full [&_svg]:w-full
                  `, w.length > 0 && "pl-[7px]"),
              onClick: () => f(false),
              children: [w.length > 0 && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
                children: [reactJsxRuntimeCoreReexport.jsx(q, {}), reactJsxRuntimeCoreReexport.jsx("div", {
                  className: `
                        flex-row flex
                        [&_svg]:text-s-color-text-tertiary
                      `,
                  children: w.map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
                    className: "size-[14px] shrink-0 rounded-full",
                    style: {
                      marginLeft: `${-(+!!t * 4)}px`,
                      clipPath: t !== w.length - 1 ? "url(#more-icon-clip-path)" : undefined
                    },
                    children: e
                  }, t))
                })]
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                children: c.toolCallMore
              })]
            })
          }, `${r}-expand`), h && !g && reactJsxRuntimeCoreReexport.jsx(U, {
            className: "pt-[8px]",
            staggerIndex: v.length - ((b == null ? undefined : b.length) ?? 0),
            disableAllAnimations: d,
            children: reactJsxRuntimeCoreReexport.jsx(thinkingBoxToolCall.ToolCallWrapper, {
              className: mergeClassNamesUtil.mergeClassNames("cursor-pointer select-none", `
                    [&_img]:block
                    [&_span]:block
                    [&_svg]:block
                  `),
              onClick: () => f(true),
              children: c.toolCallCollapse
            })
          }, `${r}-collapse`)]
        })
      })
    });
  };
  let q = () => reactJsxRuntimeCoreReexport.jsx("svg", {
    viewBox: "0 0 100 100",
    className: "absolute size-0",
    children: reactJsxRuntimeCoreReexport.jsx("defs", {
      children: reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "more-icon-clip-path",
        clipPathUnits: "objectBoundingBox",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          d: "M0 0 H1 V1 H0 Z M 1.2 0.5 m -0.6 0 a 0.6 0.6 0 1 0 1.2 0 a 0.6 0.6 0 1 0 -1.2 0 ",
          fillRule: "evenodd"
        })
      })
    })
  });
  function K(e, t) {
    let n = window.Intl?.Segmenter ? [...new Intl.Segmenter(undefined, {
      granularity: "grapheme"
    }).segment(e)].map(e => e.segment) : [...e];
    let l = [];
    for (let e = 0; e < n.length; e += t) {
      l.push(n.slice(e, e + t).join(""));
    }
    return l;
  }
  let G = 0.8333333333333334;
  let Q = e => K(e, 8).length * 0.06666666666666667;
  let Y = e => {
    let {
      contentText: t,
      className: i,
      disableAllAnimations: l,
      delayInSeconds: r = -0.3333333333333333,
      showOutlines: s = false,
      downgradeAnimation: d = false
    } = e;
    let c = reactCoreLibraryReexport.useMemo(() => t.split(/\n+/).map(e => e), [t]);
    let u = e => l ? 0 : e;
    let p = (e, t) => K(e, 8).map((e, i) => reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.span, {
      className: mergeClassNamesUtil.mergeClassNames(s && `
              outline-[1px] outline-offset-[-1px] outline-yellow-400/50
              [outline-style:solid]
            `),
      initial: {
        opacity: 0,
        y: 10
      },
      animate: {
        opacity: 1,
        y: 0
      },
      transition: {
        duration: u(G),
        type: "tween",
        ease: "linear",
        delay: u(t + i * 0.06666666666666667 + r)
      },
      children: e
    }, i));
    if (d) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: mergeClassNamesUtil.mergeClassNames(i),
        children: t
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
        children: c.map((e, t) => reactJsxRuntimeCoreReexport.jsx("p", {
          className: mergeClassNamesUtil.mergeClassNames(i),
          children: p(e, c.slice(0, t).reduce((e, t) => e + Q(t), 0))
        }, t))
      }, t);
    }
  };
  var useAnimationControlsHook = require("use-animation-controls-hook") /*id: 228242*/;
  var markdownRendererWrapper = require("markdown-renderer-wrapper") /*id: 252805*/;
  let ei = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: i,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(markdownRendererWrapper.MarkdownRenderer, {
      ref: t,
      className: mergeClassNamesUtil.mergeClassNames(i),
      ...n,
      theme: "default"
    });
  });
  let en = e => {
    let {
      contentText: s,
      className: d,
      disableAllAnimations: c,
      downgradeAnimation: u
    } = e;
    let {
      showBorders: x
    } = animationDebugContext.useAnimationDebug();
    let h = reactCoreLibraryReexport.useId();
    let m = `${h}-animated-mask`;
    let g = `${h}-inverted-animated-mask`;
    let f = reactCoreLibraryReexport.useContext(imagePreviewContext.previewContext);
    let [v, b] = reactCoreLibraryReexport.useState(null);
    let [w, y] = reactCoreLibraryReexport.useState(null);
    let j = reactCoreLibraryReexport.useCallback(e => {
      if (e) {
        b(e.getBoundingClientRect());
      }
    }, []);
    let k = reactCoreLibraryReexport.useCallback(e => {
      if (e) {
        y(e.getClientRects()[0] ?? null);
      }
    }, []);
    let $ = ((w == null ? undefined : w.width) ?? 0) * ((w == null ? undefined : w.height) ?? 0);
    let N = Math.floor(((v == null ? undefined : v.width) ?? 0) * ((v == null ? undefined : v.height) ?? 0) / $) / 8 / 120;
    let S = c || (f == null ? undefined : f.initial) === false ? 0 : isFinite(N) && N !== 0 ? N : "measuring";
    let T = (v == null ? undefined : v.height) && isFinite(v == null ? undefined : v.height) && (v == null ? undefined : v.height) !== 0 ? v == null ? undefined : v.height : "measuring";
    let R = (w == null ? undefined : w.height) && isFinite(w == null ? undefined : w.height) && (w == null ? undefined : w.height) !== 0 ? w == null ? undefined : w.height : "measuring";
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "relative",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "pointer-events-none invisible absolute h-[0px] w-[0px] overflow-hidden",
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          ref: k,
          children: "x"
        })
      }), reactJsxRuntimeCoreReexport.jsx(el, {
        animatedMaskId: m,
        invertedAnimatedMaskId: g,
        animationDurationInSeconds: S,
        contentHeight: T,
        lineHeight: R,
        downgradeAnimation: u
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          mask: u ? undefined : `url(#${m})`
        },
        ref: j,
        children: reactJsxRuntimeCoreReexport.jsx(ei, {
          className: mergeClassNamesUtil.mergeClassNames(d),
          markDown: s,
          showIndicator: false,
          smooth: {
            enable: false
          },
          autoFitRTL: true,
          autoSpacing: true
        })
      }), x && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "pointer-events-none absolute inset-0 bg-red-400 opacity-10",
        style: {
          mask: `url(#${g})`
        }
      })]
    });
  };
  let el = e => {
    let {
      animatedMaskId: t,
      invertedAnimatedMaskId: i,
      animationDurationInSeconds: l,
      contentHeight: a,
      lineHeight: r,
      downgradeAnimation: s
    } = e;
    let d = reactCoreLibraryReexport.useId();
    let c = `${d}-animated-gradient`;
    let u = `${d}-invert-filter`;
    let p = useAnimationControlsHook.useAnimControls();
    let x = useAnimationControlsHook.useAnimControls();
    let h = a === "measuring" || r === "measuring" ? "measuring" : Math.min(r * 6 / a, 0.2);
    let g = reactCoreLibraryReexport.useCallback((e, t) => {
      p.set({
        offset: 0
      });
      x.set({
        offset: e
      });
      p.start({
        offset: 1 - e,
        transition: {
          type: "tween",
          ease: "linear",
          duration: t
        }
      });
      x.start({
        offset: 1,
        transition: {
          type: "tween",
          ease: "linear",
          duration: t
        }
      });
    }, [p, x, l, h]);
    reactCoreLibraryReexport.useEffect(() => {
      if (l !== "measuring" && h !== "measuring" && !s) {
        g(h, l);
      }
    }, [g, l, h]);
    let f = h === "measuring" ? 0.1 : h;
    return reactJsxRuntimeCoreReexport.jsx("svg", {
      className: "absolute h-0 w-0",
      viewBox: "0 0 1 1",
      children: reactJsxRuntimeCoreReexport.jsxs("defs", {
        children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
          gradientUnits: "objectBoundingBox",
          gradientTransform: `
            translate(0,-${f})
            scale(1,${1 / (1 - f * 2)})
          `,
          id: c,
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
          children: [reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.stop, {
            initial: {
              offset: 0
            },
            animate: p,
            stopColor: "white"
          }), reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.stop, {
            initial: {
              offset: 0
            },
            animate: x,
            stopColor: "black"
          })]
        }), reactJsxRuntimeCoreReexport.jsx("filter", {
          id: u,
          colorInterpolationFilters: "sRGB",
          children: reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
            type: "matrix",
            values: " -1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          })
        }), reactJsxRuntimeCoreReexport.jsx("mask", {
          maskUnits: "objectBoundingBox",
          maskContentUnits: "objectBoundingBox",
          id: t,
          children: reactJsxRuntimeCoreReexport.jsx("rect", {
            width: 1,
            height: 1,
            fill: `url(#${c})`
          })
        }), reactJsxRuntimeCoreReexport.jsx("mask", {
          maskUnits: "objectBoundingBox",
          maskContentUnits: "objectBoundingBox",
          id: i,
          children: reactJsxRuntimeCoreReexport.jsx("rect", {
            width: 1,
            height: 1,
            fill: `url(#${c})`,
            filter: `url(#${u})`
          })
        })]
      })
    });
  };
  let ea = e => {
    let {
      outerRef: t
    } = e;
    let [i, l] = reactCoreLibraryReexport.useState(false);
    let a = reactCoreLibraryReexport.useRef(null);
    let r = D(t, a);
    let o = reactCoreLibraryReexport.useCallback(() => {
      let e = a.current;
      if (!e) {
        return;
      }
      let t = e.clientHeight;
      let i = e.scrollHeight;
      if (t !== undefined && i !== undefined) {
        l(i - t > 1);
      }
    }, [a]);
    useResizeObserverHook.useResizeObserver(a, () => {
      o();
    });
    reactCoreLibraryReexport.useLayoutEffect(() => {
      let e = a.current;
      if (!e) {
        return;
      }
      let t = new MutationObserver(() => {
        o();
      });
      t.observe(e, {
        childList: true,
        subtree: false,
        attributes: true
      });
      return () => {
        t.disconnect();
      };
    }, [o]);
    return {
      isOverflowing: i,
      mergedRef: r
    };
  };
  let er = e => {
    let {
      isOverflowing: t,
      isPresent: i,
      expanded: l
    } = e;
    let a = reactUseEventCallback.useEventCallback(e.setCurrentCollapsedContentOverflowing);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (i) {
        if (l) {
          a(false);
          return;
        }
        if (t) {
          a(true);
        } else {
          a(false);
        }
      }
    }, [l, t, a, i]);
  };
  let eo = e => {
    let {
      data: t,
      className: i,
      disableAllAnimations: l,
      expanded: r,
      downgradeAnimation: s
    } = e;
    let {
      message: d,
      tools: c,
      id: u
    } = t;
    let h = !!d && !unifiedProcessorCore.baseProcessor().use(markdownParserSetup.setupMarkdownParser).parse(d).children.every(H);
    let {
      showBorders: g,
      setCurrentCollapsedContentOverflowing: f
    } = animationDebugContext.useAnimationDebug();
    let {
      isOverflowing: v,
      mergedRef: b
    } = ea({
      outerRef: reactCoreLibraryReexport.useRef(null)
    });
    let w = reactCoreLibraryReexport.useContext(imagePreviewContext.previewContext);
    let y = w == null ? undefined : w.isPresent;
    er({
      isOverflowing: v,
      isPresent: y != null && y,
      expanded: r != null && r,
      setCurrentCollapsedContentOverflowing: f
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-thinking-box": "step-message",
      "data-message-id": u,
      className: mergeClassNamesUtil.mergeClassNames("w-full text-[14px] leading-[22px] font-[400]", i),
      children: [r && t.headerAboveMessageForExpandedOnly && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "pb-[12px]",
        children: t.headerAboveMessageForExpandedOnly
      }), d && reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: b,
        "data-overflowing": !r && v,
        className: mergeClassNamesUtil.mergeClassNames("relative flex flex-col gap-[8px]", !r && "max-h-[16lh]", `
              data-[overflowing=true]:overflow-hidden data-[overflowing=true]:mask-b-from-70%
              data-[overflowing=true]:mask-b-to-[calc(100%+2px)]
            `),
        children: [g && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `
                absolute top-0 right-0 bg-red-700 px-[8px] py-[2px] font-mono text-xs text-white
                opacity-80
              `,
          children: ["Renderer: ", h ? "Markdown" : "Plain Text"]
        }), h ? reactJsxRuntimeCoreReexport.jsx(en, {
          downgradeAnimation: s,
          disableAllAnimations: l,
          contentText: d
        }) : reactJsxRuntimeCoreReexport.jsx(Y, {
          downgradeAnimation: s,
          disableAllAnimations: l,
          contentText: F.spacing(d)
        })]
      }), reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
        mode: "popLayout",
        children: c && c.length > 0 && reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
          initial: {
            opacity: 0,
            y: 10,
            filter: "blur(4px)"
          },
          animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          },
          exit: {
            opacity: 0,
            y: 5,
            filter: "blur(4px)"
          },
          transition: {
            duration: 0.5,
            type: "spring",
            bounce: 0,
            ...(l && {
              duration: 0
            })
          },
          className: mergeClassNamesUtil.mergeClassNames("w-full", {
            "pt-[12px]": r,
            "pt-[16px]": !r
          }, !d && "pt-0"),
          children: reactJsxRuntimeCoreReexport.jsx(V, {
            stepId: `${u}-tool-call`,
            tools: c
          })
        }, `${u}-tool-call`)
      })]
    });
  };
  let es = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: i,
      data: n,
      disableAllAnimations: l,
      expanded: r,
      showStartEndStepBottomPadding: s,
      downgradeAnimation: d,
      removeBoxInlinePadding: c
    } = e;
    let {
      showBorders: u
    } = animationDebugContext.useAnimationDebug();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: t,
      className: mergeClassNamesUtil.mergeClassNames("w-full min-w-0", i, u && `
              outline-[1px] outline-offset-[-1px] outline-red-500/50
              [outline-style:solid]
            `),
      children: (() => {
        switch (n.type) {
          case "thinking-step":
            return reactJsxRuntimeCoreReexport.jsx(eo, {
              className: mergeClassNamesUtil.mergeClassNames(c ? "" : "px-[20px]", "pt-[12px] pb-[20px]", r && "px-[0] pt-[0] pb-[0]"),
              data: n,
              disableAllAnimations: l,
              downgradeAnimation: d,
              expanded: r
            });
          case "custom-component":
            return n.component;
          case "thinking-start":
            return reactJsxRuntimeCoreReexport.jsx(M, {
              showStartEndStepBottomPadding: s
            });
          case "thinking-end":
            return reactJsxRuntimeCoreReexport.jsx(Z, {
              title: n.headerAboveMessageForExpandedOnly || n.title,
              expanded: r,
              showStartEndStepBottomPadding: s
            });
          default:
            return null;
        }
      })()
    });
  });
  let ed = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      stepData: i,
      className: n,
      disableAllAnimations: l,
      showStartEndStepBottomPadding: s
    } = e;
    let {
      getAnimationDuration: d
    } = animationDebugContext.useAnimationDebug();
    let c = r(i).filter(e => e.type !== "thinking-start");
    let u = i.filter(e => e.type === "thinking-step").reduce((e, t) => {
      if (t.type === "thinking-step" && t.message?.length !== undefined) {
        return e + t.message.length;
      } else {
        return e;
      }
    }, 0) > 5000;
    return reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
      ref: t,
      initial: {
        opacity: 0,
        y: -10,
        filter: u ? undefined : "blur(4px)"
      },
      animate: {
        opacity: 1,
        y: 0,
        filter: u ? undefined : "blur(0px)"
      },
      exit: {
        opacity: 0,
        y: 5,
        filter: u ? undefined : "blur(4px)"
      },
      transition: {
        duration: d(0.5),
        type: "spring",
        bounce: 0,
        ...(l && {
          duration: d(0)
        })
      },
      className: mergeClassNamesUtil.mergeClassNames("w-full flex flex-col pt-[12px] gap-[16px] will-change-transform", n),
      children: reactJsxRuntimeCoreReexport.jsx(motionContextProvider_1.MotionProvider, {
        children: reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
          initial: false,
          mode: "popLayout",
          children: c.map((e, t) => {
            let n = t === c.length - 1;
            let r = e.type === "thinking-step" && e.message?.length !== undefined && e.message.length > 2000;
            return reactJsxRuntimeCoreReexport.jsxs(motionComponentFactory_1.motionFactory.div, {
              className: "flex flex-row gap-[8px]",
              initial: {
                opacity: 0,
                y: 20,
                filter: r ? undefined : "blur(4px)"
              },
              animate: {
                opacity: 1,
                y: 0,
                filter: r ? undefined : "blur(0px)"
              },
              exit: {
                opacity: 0,
                y: 5,
                filter: r ? undefined : "blur(4px)"
              },
              transition: {
                duration: d(0.5),
                type: "spring",
                bounce: 0,
                ...(l && {
                  duration: d(0)
                })
              },
              children: [reactJsxRuntimeCoreReexport.jsxs("div", {
                className: mergeClassNamesUtil.mergeClassNames("self-stretch shrink-0 flex flex-col items-center text-s-color-text-tertiary transition-all duration-300", !n && "mb-[-14px]", n && "mb-[0px]"),
                children: [reactJsxRuntimeCoreReexport.jsx(eu, {
                  stepData: e,
                  className: "shrink-0 my-[4px]"
                }), reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
                  className: "w-[1px] grow",
                  animate: {
                    marginTop: n ? 0 : "6px"
                  },
                  transition: {
                    type: "tween",
                    duration: d(0.5),
                    ease: cubicBezierEasing_2.cubicBezier(0.16, 1, 0.3, 1),
                    ...(l && {
                      duration: d(0)
                    })
                  },
                  children: reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
                    className: "w-full bg-s-color-text-quaternary opacity-50",
                    layout: true,
                    animate: {
                      height: n ? 0 : "100%"
                    },
                    transition: {
                      type: "tween",
                      duration: d(0.5),
                      ease: cubicBezierEasing_2.cubicBezier(0.16, 1, 0.3, 1),
                      ...(l && {
                        duration: d(0)
                      })
                    }
                  })
                })]
              }), reactJsxRuntimeCoreReexport.jsx(ec, {
                data: e,
                expanded: true,
                disableAllAnimations: l,
                showStartEndStepBottomPadding: s,
                downgradeAnimation: r
              }, e.id)]
            }, e.id);
          })
        })
      })
    });
  });
  let ec = e => {
    let {
      onHeightChange: t,
      showStartEndStepBottomPadding: i,
      ...l
    } = e;
    let [a, r] = useElementSizeHook_1.useElementSize();
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (a) {
        if (t != null) {
          t(a.height);
        }
      }
    }, [a]);
    return reactJsxRuntimeCoreReexport.jsx(es, {
      ...l,
      ref: r,
      showStartEndStepBottomPadding: i
    });
  };
  let eu = e => {
    var t;
    let {
      stepData: r,
      className: s
    } = e;
    if (r.expandedIcon) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: mergeClassNamesUtil.mergeClassNames("w-[14px] h-[14px] [&_svg]:w-[14px] [&_svg]:h-[14px] [&_span]:block", s),
        children: r.expandedIcon
      });
    }
    let {
      type: d
    } = r;
    if (d === "thinking-end") {
      return reactJsxRuntimeCoreReexport.jsx(checkCircleFilledIcon.CheckCircleFilledIcon, {
        className: mergeClassNamesUtil.mergeClassNames("w-[14px] h-[14px] [&_svg]:w-[14px] [&_svg]:h-[14px]", s)
      });
    }
    if (d !== "thinking-step") {
      return reactJsxRuntimeCoreReexport.jsx(circleIcon.CircleIcon, {
        className: mergeClassNamesUtil.mergeClassNames("w-[14px] h-[14px] [&_svg]:w-[14px] [&_svg]:h-[14px]", s)
      });
    }
    let c = ((t = r.tools) === null || t === undefined ? undefined : t.filter(e => e.type === "tool-call")) ?? [];
    let u = c == null ? undefined : c.find(e => e.leadingIcon);
    let p = (u == null ? undefined : u.leadingIcon) ?? (u == null ? undefined : u.fallbackLeadingIcon) ?? null;
    if (p) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: mergeClassNamesUtil.mergeClassNames("w-[14px] h-[14px] [&_svg]:w-[14px] [&_svg]:h-[14px] [&_span]:block", s),
        children: p
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(circleIcon.CircleIcon, {
        className: mergeClassNamesUtil.mergeClassNames("w-[14px] h-[14px] [&_svg]:w-[14px] [&_svg]:h-[14px]", s)
      });
    }
  };
  let ep = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      data: n,
      className: l,
      disableAllAnimations: r,
      showStartEndStepBottomPadding: s,
      removeBoxInlinePadding: d
    } = e;
    let {
      getAnimationDuration: c,
      showBorders: u
    } = animationDebugContext.useAnimationDebug();
    let h = n.type === "thinking-step" && n.message?.length !== undefined && n.message.length > 2000;
    return reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
      className: mergeClassNamesUtil.mergeClassNames("overflow-y-hidden will-change-transform"),
      ref: t,
      initial: {
        opacity: 0,
        y: -10,
        filter: h ? undefined : "blur(4px)"
      },
      animate: {
        opacity: 1,
        y: 0,
        filter: h ? undefined : "blur(0px)"
      },
      exit: {
        opacity: 0,
        y: 5,
        filter: h ? undefined : "blur(4px)"
      },
      transition: {
        duration: c(0.5),
        type: "spring",
        bounce: 0,
        ...(r && {
          duration: 0
        })
      },
      children: reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
        initial: false,
        presenceAffectsLayout: false,
        mode: "popLayout",
        children: reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
          "data-key": n.id,
          "data-thinking-box-collapsed-step-content": true,
          className: mergeClassNamesUtil.mergeClassNames("flex flex-col items-start", u && `
                outline-[1px] outline-offset-[-1px] outline-yellow-400/50
                [outline-style:solid]
              `, l),
          initial: {
            opacity: 0,
            y: -20,
            filter: h ? undefined : "blur(4px)"
          },
          animate: {
            opacity: 1,
            y: 0,
            filter: h ? undefined : "blur(0px)"
          },
          exit: {
            opacity: 0,
            y: 0,
            filter: h ? undefined : "blur(4px)"
          },
          transition: {
            y: {
              type: "tween",
              duration: c(0.5),
              ease: cubicBezierEasing_2.cubicBezier(0.16, 1, 0.8, 1),
              ...(r && {
                duration: c(0)
              })
            },
            default: {
              type: "tween",
              duration: c(1),
              ease: cubicBezierEasing_2.cubicBezier(0.16, 1, 0.3, 1),
              ...(r && {
                duration: c(0)
              })
            }
          },
          children: reactJsxRuntimeCoreReexport.jsx(es, {
            data: n,
            disableAllAnimations: r,
            showStartEndStepBottomPadding: s,
            downgradeAnimation: h,
            removeBoxInlinePadding: d
          })
        }, n.id)
      })
    });
  });
  let ex = e => {
    let {
      className: i,
      title: n,
      disableTitleLightSweeping: l,
      screenshotUrl: r,
      onScreenshotClick: s,
      onTitleClick: d,
      currentStepData: c,
      allStepData: p,
      onToggleExpandClick: h,
      hideExpandButton: m,
      thinkingTimeElapsed: g,
      expanded: f,
      enableExpandTooltip: v,
      disableAllAnimations: b,
      removeBoxInlinePadding: w,
      showStartEndStepBottomPadding: y,
      forceUseArrowAsExpandButton: j
    } = e;
    let $ = u();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: mergeClassNamesUtil.mergeClassNames(i),
      "data-thinking-box": "content",
      children: [reactJsxRuntimeCoreReexport.jsx(k, {
        expanded: f,
        thinkingTimeElapsed: g,
        title: n ?? (c == null ? undefined : c.title) ?? $.fallbackTitle,
        disableTitleLightSweeping: l,
        screenshotUrl: r,
        onScreenshotClick: s,
        onToggleExpandClick: h,
        onTitleClick: d,
        hideExpandButton: (c == null ? undefined : c.type) === "thinking-start" || m,
        stepId: c == null ? undefined : c.id,
        enableExpandTooltip: v,
        disableAllAnimations: b,
        removeBoxInlinePadding: w,
        taskDone: c.type === "thinking-end",
        forceUseArrowAsExpandButton: j
      }), reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
        initial: false,
        mode: "popLayout",
        children: f ? reactJsxRuntimeCoreReexport.jsx(ed, {
          disableAllAnimations: b,
          showStartEndStepBottomPadding: y,
          stepData: p
        }, "expanded") : reactJsxRuntimeCoreReexport.jsx(ep, {
          data: c,
          disableAllAnimations: b,
          showStartEndStepBottomPadding: y,
          removeBoxInlinePadding: w
        }, "collapsed")
      })]
    });
  };
  var useCustomRefHook = require("use-custom-ref-hook") /*id: 153765*/;
  var useRafCallback = require("use-raf-callback") /*id: 670341*/;
  function eg() {
    let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    let [t, i] = reactCoreLibraryReexport.useState(null);
    let l = useCustomRefHook.useCustomRef(null, e => {
      i(e);
      return e;
    });
    let [a, r] = reactCoreLibraryReexport.useState();
    let [o] = useRafCallback.useRafCallback(e => {
      r(t => {
        if ((t == null ? undefined : t.width) === undefined || !(Math.abs((t == null ? undefined : t.width) - e.contentRect.width) < 0.01) || (t == null ? undefined : t.height) === undefined || !(Math.abs((t == null ? undefined : t.height) - e.contentRect.height) < 0.01)) {
          return {
            width: e.contentRect.width,
            height: e.contentRect.height
          };
        }
      });
    });
    useResizeObserverHook.useResizeObserver(t, o, e);
    return [a, l];
  }
  let ef = e => {
    let {
      className: t,
      children: i,
      widthFit: l = "full",
      hideBorders: r = false,
      disableAllAnimations: s = false,
      afterSlot: d,
      contentContainerProps: c,
      onContainerAnimationStart: u,
      onContainerAnimationEnd: x
    } = e;
    let {
      getAnimationDuration: h,
      showBorders: g
    } = animationDebugContext.useAnimationDebug();
    let [f, v] = eg(true);
    let [b, w] = eg(true);
    let [y, j] = eg(true);
    let k = reactCoreLibraryReexport.useRef(undefined);
    let $ = l === "fit-content";
    let N = reactCoreLibraryReexport.useCallback(e => {
      if (e) {
        v.current = e;
        k.current = e.getBoundingClientRect().width;
      }
    }, [v]);
    let S = useAnimationControlsHook.useAnimControls();
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if ((f == null ? undefined : f.width) === undefined) {
        S.set({
          width: k.current
        });
        return;
      }
      S.start({
        height: f.height + ((y == null ? undefined : y.height) ?? 0),
        width: f.width,
        transition: {
          width: {
            type: "spring",
            stiffness: 1000,
            damping: 30,
            mass: 0.1,
            ...(s && {
              duration: h(0)
            })
          },
          height: {
            type: "spring",
            stiffness: 700,
            damping: 50,
            mass: 0.1,
            ...(s && {
              duration: h(0)
            })
          }
        }
      });
    }, [f == null ? undefined : f.height, f == null ? undefined : f.width, y == null ? undefined : y.height, S]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: mergeClassNamesUtil.mergeClassNames("isolate w-full", t),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: w,
        className: "invisible h-0 w-full"
      }), reactJsxRuntimeCoreReexport.jsxs(motionComponentFactory_1.motionFactory.div, {
        className: mergeClassNamesUtil.mergeClassNames(`
            relative overflow-hidden
            [overflow-x:clip]
            [overflow-y:clip]
            rounded-s-radius-s transition-colors
          `, !r && "bg-dbx-bg-body-overlay-web", r && "[border-radius:0px]", g && `
              outline-[1px] outline-offset-[-1px] outline-red-300/50
              [outline-style:solid]
            `),
        onAnimationStart: u,
        onAnimationEnd: x,
        animate: S,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: mergeClassNamesUtil.mergeClassNames(`
              pointer-events-none absolute inset-0 z-[10] box-border
              rounded-s-radius-s border-[1px] border-solid transition-all
              duration-300 ease-out
            `, !r && "border-s-color-border-tertiary", r && "border-transparent")
        }), reactJsxRuntimeCoreReexport.jsxs(motionComponentFactory_1.motionFactory.div, {
          className: "relative",
          style: {
            width: b == null ? undefined : b.width
          },
          layoutRoot: true,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            ref: N,
            className: mergeClassNamesUtil.mergeClassNames($ && "w-fit max-w-full", !$ && "w-full", c == null ? undefined : c.className),
            children: i
          }), reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
            layout: "position",
            className: "absolute right-0 bottom-0 left-0 h-0",
            transition: {
              layout: {
                type: "spring",
                stiffness: 700,
                damping: 50,
                mass: 0.1,
                ...(s && {
                  duration: h(0)
                })
              }
            },
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              ref: j,
              className: "absolute top-0 right-0 left-0",
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                children: d
              })
            })
          })]
        })]
      })]
    });
  };
  let ev = e => typeof e != "string" && e !== "number";
  let eb = e => {
    let {
      className: d,
      translations: u,
      title: x,
      disableTitleLightSweeping: h,
      screenshotUrl: m,
      onScreenshotClick: g,
      onTitleClick: f,
      thinkingData: v,
      expanded: b,
      onToggleExpandClick: w,
      hideExpandButton: y = false,
      enableExpandTooltip: j = false,
      thinkingTimeElapsed: k = null,
      disableAllAnimations: $ = false,
      allowExpansionInFirstStep: N = false,
      footerSlot: S,
      isCanvasOpen: T,
      forceUseArrowAsExpandButton: R,
      hideBorder: E = false,
      onContainerAnimationStart: W,
      onContainerAnimationEnd: C,
      onClickAnywhere: _
    } = e;
    let {
      keyForRemountDebug: M,
      currentCollapsedContentOverflowing: Z
    } = animationDebugContext.useAnimationDebug();
    let A = e.currentThinkingStepIndex ?? v.length - 1;
    let B = v[A] ?? {
      type: "thinking-start",
      id: "thinking-start",
      title: (u == null ? undefined : u.fallbackTitle) ?? "THINKING_BOX_FALLBACK_TITLE"
    };
    let F = v.slice(0, A + 1);
    let I = r(F).filter(e => e.type !== "thinking-start").length;
    let [L, P] = reactCoreLibraryReexport.useState(false);
    let X = b !== undefined;
    let H = B.type === "thinking-start";
    let D = m ?? (B == null ? undefined : B.screenshotUrl);
    let O = D != null;
    let J = S ?? (B == null ? undefined : B.footerSlot);
    let z = J != null;
    let U = y || (B == null ? undefined : B.type) === "thinking-start" && !N || (B == null ? undefined : B.type) !== "thinking-start" && B.type !== "thinking-end" && I <= 1 && !Z && !R;
    let V = !U && !H && (X ? b : L);
    let q = ((B == null ? undefined : B.type) === "thinking-start" || (B == null ? undefined : B.type) === "thinking-end") && !z;
    let K = (B == null ? undefined : B.type) === "thinking-start" || B.type === "thinking-end" || V || E;
    let G = E || V && !O || (B.type === "thinking-start" || B.type === "thinking-end") && !O;
    let Q = (B.type === "thinking-start" || B.type === "thinking-end") && (z || O);
    let Y = h ?? ((B == null ? undefined : B.type) === "thinking-end" || ev(B == null ? undefined : B.title));
    let ee = B.type === "thinking-start" && D === undefined;
    let et = useMediaQuery.useMediaQuery("(max-width: 680px)") || T;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-canvas-open": T ? "" : undefined,
      className: mergeClassNamesUtil.mergeClassNames("group/thinking-box-root w-full", d),
      onClick: _,
      "data-thinking-box-expanded": V ? "true" : "false",
      children: reactJsxRuntimeCoreReexport.jsx(c, {
        translations: u ?? null,
        children: reactJsxRuntimeCoreReexport.jsx(ef, {
          widthFit: q ? "fit-content" : "full",
          hideBorders: K,
          disableAllAnimations: $,
          afterSlot: J,
          onContainerAnimationStart: W,
          onContainerAnimationEnd: C,
          contentContainerProps: {
            className: mergeClassNamesUtil.mergeClassNames(et && "min-w-[min(344px,100%)]", !et && "min-w-[min(384px,100%)]")
          },
          children: B !== undefined && reactJsxRuntimeCoreReexport.jsx(ex, {
            expanded: V,
            title: x,
            disableTitleLightSweeping: Y,
            screenshotUrl: D,
            onScreenshotClick: g,
            onTitleClick: f,
            currentStepData: B,
            allStepData: F,
            onToggleExpandClick: () => {
              if (w != null) {
                w();
              }
              if (!X) {
                P(!L);
              }
            },
            hideExpandButton: U,
            thinkingTimeElapsed: ee ? null : k,
            enableExpandTooltip: j,
            removeBoxInlinePadding: G,
            disableAllAnimations: $,
            showStartEndStepBottomPadding: Q,
            forceUseArrowAsExpandButton: R
          })
        }, M)
      })
    });
  };
  require.d(exports, {
    ThinkingBox: function () {
      return eb;
    }
  });
}