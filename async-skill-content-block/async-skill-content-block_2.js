// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'AsyncSkillContentBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 649
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var initializeModuleInstance = require("initialize-module-instance") /*id: 233913*/;
  var chatInputConstants = require("chat-input-constants") /*id: 918547*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var protocolMessageConstants = require("protocol-message-constants") /*id: 444681*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var usePreviousHook = require("use-previous-hook") /*id: 903727*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let x = e => {
    let n = e.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT && (e == null ? undefined : e.is_finish) && !(e == null ? undefined : e.content_obj?.text);
    let i = e.block_type === chatConstantsEnum.messageContentType.BLOCK_LOADING && (e == null ? undefined : e.is_finish);
    return n || i;
  };
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let E = e => {
    let {
      taskSuccess: t,
      message: n
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        let e = n.conversation_id || "";
        if (conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), e, n.message_id || "")) {
          let t = 0;
          let n = function (i = 0) {
            if (i < 4) {
              chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(t => {
                if (t != null) {
                  t.updateSendMessageStatus(e, chatStatusActionTypes.chatStatusTypes.Default);
                }
              });
              t = setTimeout(() => n(i + 1), 500);
            }
          };
          n();
          return () => clearTimeout(t);
        }
      }
    }, [t]);
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let j = e => {
    let {
      startTime: t = 0,
      duration: n = 0,
      isFinished: i
    } = e;
    let [r, o] = reactCoreLibraryReexport.useState("00:00");
    let a = t ? t * 1000 : Date.now();
    let s = 0;
    let c = reactCoreLibraryReexport.useRef();
    let d = e => {
      let t = Math.floor(Math.abs(e) / 1000);
      let n = Math.floor(t / 60);
      return `${String(n).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
    };
    let u = () => {
      c.current = window.setInterval(() => {
        o(d(Date.now() - a));
      }, 10);
    };
    reactCoreLibraryReexport.useMemo(() => {
      clearInterval(c == null ? undefined : c.current);
      if (!i) {
        u();
      }
    }, [i]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: i && n ? (e => {
        let t = Math.floor(e / 60);
        return `${String(t).padStart(2, "0")}:${String(e % 60).padStart(2, "0")}`;
      })(n) : r
    });
  };
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatItemComponent = require("chat-item-component") /*id: 479771*/;
  var uiStyleClasses = require("ui-style-classes") /*id: 535902*/;
  let A = e => {
    let {
      block: n,
      message: i,
      inView: r,
      share: o,
      showAnimation: l
    } = e;
    let {
      matcher: a
    } = chatPluginMatcherRegistry.useReceiveContentBlockMatcher();
    let c = a == null ? undefined : a.find(e => e.matchContentBlock(n.block_type))?.pluginIdentifier;
    let {
      plugin: d,
      loading: u
    } = chatPluginIocManager.contentBlockPluginHook(c ?? "", o ? "THREAD_SHARE" : undefined);
    if (!u && c && d) {
      if (n.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT) {
        if (o) {
          return reactJsxRuntimeCoreReexport.jsx(chatItemComponent.ChatItemComponent, {
            children: reactJsxRuntimeCoreReexport.jsx(d.Content, {
              contentBlock: n,
              message: i,
              inView: r
            }, n.id)
          });
        } else {
          return reactJsxRuntimeCoreReexport.jsx(chatItemComponent.ChatItemComponent, {
            showAnimation: true,
            children: reactJsxRuntimeCoreReexport.jsx(d.Content, {
              contentBlock: n,
              message: i,
              inView: r
            }, n.id)
          });
        }
      } else if (o) {
        return reactJsxRuntimeCoreReexport.jsx(d.Content, {
          contentBlock: n,
          message: i,
          inView: r
        }, n.id);
      } else {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: s({
            [uiStyleClasses.cssClasses["fade-in"]]: l
          }),
          children: reactJsxRuntimeCoreReexport.jsx(d.Content, {
            contentBlock: n,
            message: i,
            inView: r
          }, n.id)
        });
      }
    } else {
      return null;
    }
  };
  (i = {})[i.Running = 0] = "Running";
  i[i.Finished = 1] = "Finished";
  i[i.Disabled = 2] = "Disabled";
  let M = i;
  (r = {}).BuildInMessage = "buildInMessage";
  r.BuildInToolCall = "buildInToolCall";
  r.CustomComponent = "customComponent";
  let L = r;
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  var spaceLayoutComponent = require("space-layout-component") /*id: 765807*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var rtlChevronRightIcon = require("rtl-chevron-right-icon") /*id: 946692*/;
  var D = {
    wrapper: "wrapper-pQFVG9",
    disabled: "disabled-WNuvTN",
    "tool-icon": "tool-icon-kyyMIR",
    "tool-action": "tool-action-t8b3nA",
    "tool-task-description": "tool-task-description-n0XDex",
    "tool-preview-icon": "tool-preview-icon-Mjqcks",
    "tool-loading-icon": "tool-loading-icon-bKs5yC",
    slot: "slot-zfknVj"
  };
  let V = e => {
    let {
      className: t,
      style: n,
      beforeSlot: i,
      afterSlot: r,
      icon: o,
      toolAction: l,
      toolTaskDesc: a,
      interactive: c = true,
      status: d = M.Finished,
      onToolClick: u
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: D.slot,
        children: i
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: t,
        style: n,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s(D.wrapper, {
            [D.disabled]: d === M.Disabled
          }),
          onClick: () => {
            if (d !== M.Disabled && c) {
              if (u != null) {
                u();
              }
            }
          },
          children: [d === M.Running ? reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
            size: "small",
            wrapperClassName: D["tool-loading-icon"]
          }) : reactJsxRuntimeCoreReexport.jsx("div", {
            className: D["tool-icon"],
            children: o
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: D["tool-action"],
            children: l
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: D["tool-task-description"],
            children: a
          }), c && reactJsxRuntimeCoreReexport.jsx(rtlChevronRightIcon.ChevronRightIcon, {
            className: D["tool-preview-icon"]
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: D.slot,
        children: r
      })]
    });
  };
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var H = "is-sticky-XSkGiE";
  let X = e => {
    let {
      className: t,
      style: n,
      children: i
    } = e;
    let r = reactCoreLibraryReexport.useRef(true);
    let o = reactCoreLibraryReexport.useRef(null);
    let a = reactCoreLibraryReexport.useRef(null);
    let c = reactCoreLibraryReexport.useRef(null);
    let [d, u] = reactCoreLibraryReexport.useState(false);
    let [p, h] = reactCoreLibraryReexport.useState(false);
    let v = () => {
      let e = o.current;
      if (e && r.current) {
        e.scrollTop = e.scrollHeight;
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = new MutationObserver(e => {
        v();
      });
      e.observe(o.current, {
        childList: true,
        subtree: true
      });
      return () => {
        e.disconnect();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let e = new IntersectionObserver(e => {
        let [t] = e;
        u(!t.isIntersecting);
      }, {
        root: o.current,
        threshold: [0]
      });
      let t = new IntersectionObserver(e => {
        let [t] = e;
        h(!t.isIntersecting);
      }, {
        root: o.current,
        threshold: [0]
      });
      e.observe(a.current);
      t.observe(c.current);
      return () => {
        e.disconnect();
        t.disconnect();
      };
    }, []);
    let m = reactCoreLibraryReexport.useCallback(debounceUtilWrapper.createDebounce(() => {
      let e = o.current;
      if (e) {
        r.current = e.scrollHeight - e.clientHeight <= e.scrollTop + 20;
      }
    }, 100), []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s(t, "container-Y4wEXp", "chat-task-card-scroll-container"),
      style: n,
      ref: o,
      onScroll: m,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: a,
        className: "top-sentinel-iRMp3f"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: s("top-gradient-SUF5aa", "top-gradient", {
          [H]: d
        })
      }), i, reactJsxRuntimeCoreReexport.jsx("div", {
        className: s("bottom-gradient-qCQbAm", "bottom-gradient", {
          [H]: p
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        ref: c,
        className: "bottom-sentinel-ZbGjQO"
      })]
    });
  };
  var markdownRendererModule = require("markdown-renderer-module") /*id: 4463*/;
  var chatPluginContentRenderer = require("chat-plugin-content-renderer") /*id: 797443*/;
  let J = e => {
    let {
      className: t,
      style: n,
      message: i,
      beforeSlot: r,
      afterSlot: o,
      smooth: a = false
    } = e;
    let c = reactCoreLibraryReexport.useMemo(() => ({
      Table: e => reactJsxRuntimeCoreReexport.jsx(chatPluginContentRenderer.ChatPluginRenderer, {
        ...e
      })
    }), []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s(t, "wrapper-SxbrTh"),
      style: n,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        children: r
      }), reactJsxRuntimeCoreReexport.jsx(markdownRendererModule.MdBoxComponent, {
        markDown: i || "",
        showIndicator: false,
        smooth: a,
        autoFitRTL: true,
        slots: c,
        eventCallbacks: {}
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        children: o
      })]
    });
  };
  let G = e => {
    let {
      data: t,
      className: n,
      style: i,
      scrollContainerClassName: r,
      scrollContainerStyle: o
    } = e;
    let l = e => {
      let [t, n] = e;
      if (t === L.BuildInMessage) {
        return reactJsxRuntimeCoreReexport.jsx(J, {
          ...n
        });
      } else if (t === L.BuildInToolCall) {
        return reactJsxRuntimeCoreReexport.jsx(V, {
          ...n
        });
      } else if (t === L.CustomComponent) {
        return n.component;
      } else {
        return null;
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(X, {
      className: s("scroll-container-ozZ4iv", r),
      style: o,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: s("wrapper-gi1so8", n, "chat-task-card-steps-container"),
        style: i,
        children: t.map((e, t) => {
          let [, {
            id: n
          }] = e;
          return reactJsxRuntimeCoreReexport.jsx("div", {
            "data-task-id": n,
            className: s("task-card-step", {
              "tool-call": e[0] === L.BuildInToolCall,
              "normal-message": e[0] === L.BuildInMessage,
              "custom-component": e[0] === L.CustomComponent
            }),
            children: l(e)
          }, n ?? `step-${t}`);
        })
      })
    });
  };
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlCirclePlayIcon = require("rtl-circle-play-icon") /*id: 681027*/;
  var rtlFileDocumentIcon = require("rtl-file-document-icon") /*id: 900958*/;
  var rtlExitIcon = require("rtl-exit-icon") /*id: 569004*/;
  var et = {
    wrapper: "wrapper-gbwlfs",
    "mini-mode": "mini-mode-U8tip1",
    miniMode: "mini-mode-U8tip1",
    body: "body-HN2UNt",
    "enable-expand": "enable-expand-rahl2W",
    enableExpand: "enable-expand-rahl2W",
    "body-bg": "body-bg-zZuOzq",
    bodyBg: "body-bg-zZuOzq",
    screenshot: "screenshot-WBghDS",
    "play-icon": "play-icon-R1gw1h",
    playIcon: "play-icon-R1gw1h",
    info: "info-r6bAPS",
    status: "status-DlFi6D",
    blink: "blink-O34Q_9",
    "text-blink": "text-blink-s3yu8E",
    textBlink: "text-blink-s3yu8E",
    "time-taken": "time-taken-_fJ2WP",
    timeTaken: "time-taken-_fJ2WP",
    actions: "actions-ggcvNZ",
    "action-btn": "action-btn-h4eeIx",
    actionBtn: "action-btn-h4eeIx"
  };
  let en = e => {
    var t;
    var n;
    let {
      isMiniMode: i = false,
      className: r,
      i18n: o,
      style: a,
      title: c,
      titleBlinkAnimation: d,
      taskScreenshot: u,
      onScreenshotClick: p,
      taskCost: h,
      enableExpand: v,
      expanded: m = false,
      toggleExpand: f
    } = e;
    let [g, _] = reactCoreLibraryReexport.useState(false);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: s(et.wrapper, r, "chat-task-card-header", {
        [et["mini-mode"]]: i,
        [et["enable-expand"]]: v,
        [et.expanded]: m
      }),
      onClick: () => {
        _(false);
        if (v) {
          if (f != null) {
            f();
          }
        }
      },
      style: a,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: et["body-bg"],
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s(et.body),
          children: [u && reactJsxRuntimeCoreReexport.jsx("div", {
            onClick: e => {
              if (m) {
                e.stopPropagation();
              }
              if (p != null) {
                p();
              }
            },
            className: et.screenshot,
            style: {
              backgroundImage: `url(${u})`
            },
            children: reactJsxRuntimeCoreReexport.jsx(rtlCirclePlayIcon.CirclePlayIcon, {
              className: et["play-icon"]
            })
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: et.info,
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: et.status,
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: s("chat-task-card-title", {
                  [et.blink]: !!d
                }),
                children: c
              })
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: et["time-taken"],
              children: typeof h == "string" || typeof h == "function" ? h : typeof h == "number" ? function (e) {
                let t = Math.floor(e / 3600);
                let n = Math.floor(e % 3600 / 60);
                let i = [t.toString().padStart(2, "0"), n.toString().padStart(2, "0"), (e % 60).toString().padStart(2, "0")];
                if (t > 0) {
                  return i.join(":");
                } else {
                  return i.slice(1).join(":");
                }
              }(h) : h
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: et.actions,
            children: v && (t = reactJsxRuntimeCoreReexport.jsx("div", {
              className: et["action-btn"],
              children: m ? reactJsxRuntimeCoreReexport.jsx(rtlFileDocumentIcon.FileDocumentIcon, {}) : reactJsxRuntimeCoreReexport.jsx(rtlExitIcon.RtlExitIcon, {})
            }), (n = m ? o == null ? undefined : o.collapseTooltip : o == null ? undefined : o.expandTooltip) ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: n,
              visible: g,
              onVisibleChange: _,
              children: t
            }) : t)
          })]
        })
      })
    });
  };
  var rtlInfoIcon = require("rtl-info-icon") /*id: 853560*/;
  var er = {
    wrapper: "wrapper-arjDfm",
    info: "info-EQHN9H",
    icon: "icon-Dm4Vjp",
    message: "message-qgqmO0",
    btn: "btn-fQLPDU"
  };
  let eo = e => {
    let {
      className: t,
      style: n,
      config: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: s(er.wrapper, t, "chat-task-card-footer"),
      style: n,
      children: (() => {
        if (reactCoreLibraryReexport.isValidElement(i)) {
          return i;
        }
        let {
          icon: e,
          message: t,
          button: n
        } = i;
        return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: er.info,
            children: [e || reactJsxRuntimeCoreReexport.jsx(rtlInfoIcon.RtlInfoIcon, {
              className: er.icon
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: er.message,
              children: t
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: er.btn,
            children: n
          })]
        });
      })()
    });
  };
  var el = {
    bg: "bg-Ebtrqc",
    "mini-mode": "mini-mode-bk9FOl",
    expanded: "expanded-xC5yr8",
    "border-bottom": "border-bottom-KQ1r07",
    left: "left-qvA7_A",
    right: "right-CspEVN",
    wrapper: "wrapper-CZa_3W",
    loading: "loading-gEe07P",
    "border-bottom-radius": "border-bottom-radius-yBwDOc"
  };
  let ea = e => {
    let {
      className: t,
      style: n,
      i18n: i,
      title: r,
      titleBlinkAnimation: o,
      containerAttrs: a,
      headerSticky: c = false,
      taskScreenshot: d,
      stepsClassName: u,
      onScreenshotClick: p,
      miniMode: h,
      data: v,
      expanded: m,
      enableExpand: f = true,
      toggleExpand: g,
      footer: _,
      loading: b,
      loadingPlaceholder: y,
      taskCost: k
    } = e;
    let [w, C] = reactCoreLibraryReexport.useState(m);
    let x = reactCoreLibraryReexport.useRef(null);
    let S = reactCoreLibraryReexport.useRef();
    let T = () => {
      var e;
      let t = (e = x.current) === null || e === undefined ? undefined : e.querySelector(".chat-task-card-scroll-container");
      if (t) {
        return t.getBoundingClientRect();
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      C(m);
    }, [m]);
    let R = () => {
      if (g != null) {
        g();
      }
    };
    let E = () => {
      if (S.current) {
        clearTimeout(S.current);
        S.current = undefined;
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      let n = (e = x.current) === null || e === undefined ? undefined : e.querySelector(".chat-task-card-scroll-container");
      if (n) {
        E();
        if (!h) {
          n.style.removeProperty("height");
          return;
        }
        if (m) {
          n.style.removeProperty("height");
        } else {
          let e = T();
          n.style.height = `${(e == null ? undefined : e.height) ?? 0}px`;
          S.current = setTimeout(() => {
            n.style.removeProperty("height");
          }, 20);
        }
      }
    }, [h, m]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: s(el.bg, "task-card-bg", t, {
        [el["mini-mode"]]: h,
        [el.expanded]: w
      }),
      style: n,
      ref: x,
      ...a,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: s(el.wrapper, "chat-task-card-container"),
        style: {
          maxHeight: w ? "unset" : 360
        },
        children: [(() => {
          let e = {
            zIndex: 10
          };
          if (typeof c == "boolean" && c) {
            e.position = "sticky";
            e.top = 1;
          }
          return reactJsxRuntimeCoreReexport.jsx(en, {
            style: e,
            i18n: {
              expandTooltip: i == null ? undefined : i.expandTooltip,
              collapseTooltip: i == null ? undefined : i.collapseTooltip
            },
            isMiniMode: h && !w,
            title: r,
            titleBlinkAnimation: o,
            onScreenshotClick: p,
            taskScreenshot: d,
            taskCost: k,
            enableExpand: f,
            expanded: w,
            toggleExpand: R
          });
        })(), b === true ? y ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: s(el.loading, "chat-task-card-loading", {
            [el["border-bottom-radius"]]: !_
          }),
          children: y
        }) : reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton, {
          placeholder: reactJsxRuntimeCoreReexport.jsxs(spaceLayoutComponent.Space, {
            vertical: true,
            spacing: 22,
            align: "start",
            style: {
              width: "100%"
            },
            children: [reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Paragraph, {
              style: {
                width: "100%"
              },
              rows: 1
            }), reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Paragraph, {
              style: {
                width: "100%"
              },
              rows: 1
            }), reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Paragraph, {
              style: {
                width: "100%"
              },
              rows: 1
            }), reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Paragraph, {
              style: {
                width: "63%"
              },
              rows: 1
            }), reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Paragraph, {
              style: {
                width: "63%"
              },
              rows: 1
            })]
          }),
          className: s(el.loading, "chat-task-card-loading", {
            [el["border-bottom-radius"]]: !_
          }),
          active: true
        }) : reactJsxRuntimeCoreReexport.jsx(G, {
          data: v,
          className: u,
          scrollContainerClassName: s({
            [el["border-bottom-radius"]]: !_
          })
        }), _ && reactJsxRuntimeCoreReexport.jsx(eo, {
          config: _
        }), reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: s(el["border-bottom"], el.left)
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: s(el["border-bottom"], el.right)
          })]
        })]
      })
    });
  };
  let es = e => {
    let {
      data: r,
      hasInited: o,
      taskStepList: a,
      setHasOpenCanvasViewInAsyncStreaming: C,
      fetchAgentProcessData: S,
      share: T
    } = e;
    let R = i18nTranslationUtils.useTranslationWithFallback();
    let [I, P] = reactCoreLibraryReexport.useState(false);
    let N = reactCoreLibraryReexport.useRef(false);
    let {
      message: O,
      contentBlock: M
    } = r;
    let {
      id: B,
      content_obj: Z
    } = M ?? {};
    let {
      status: F,
      title: W,
      estimated_duration: D,
      resource_id: V,
      start_timestamp: z,
      create_source: H,
      style: X
    } = Z ?? {};
    E({
      taskSuccess: messageContentTypeAndStatusChecker.xFg(O),
      message: O
    });
    reactCoreLibraryReexport.useEffect(() => {
      C(false);
      teaAnalyticsEventTracker.trackEvent("preview_card_show", {
        bot_id: O.bot_id,
        message_id: O.message_id,
        conversation_id: O.conversation_id,
        skill_id: O.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(O.skill?.skill_type_no_default)
      });
    }, []);
    let {
      isSelectMode: U
    } = chatMessageShareSelectStore.chatMessageShareSelectStore();
    let K = chatResponsiveSize.useChatScreenSize({
      sm: 400,
      md: 680
    });
    let J = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return t;
    });
    let G = H === skillMessageLifecycleTypes.platformType.APP;
    let q = O.async_task?.status === protocolMessageConstants.asyncTaskStatus.AsyncTaskStatusProcessing && F === skillMessageLifecycleTypes.taskStatus.PROCESSING;
    let Q = reactCoreLibraryReexport.useMemo(() => q ? a.length > 0 : X !== skillMessageLifecycleTypes.titleType.TITLE, [q, a.length, X]);
    let Y = R(F === skillMessageLifecycleTypes.taskStatus.CANCEL ? "web_ai_coding_agent_failed" : F === skillMessageLifecycleTypes.taskStatus.PROCESSING ? "web_ai_coding_agent_executing" : "web_ai_coding_agent_completed");
    let ee = W || Y;
    let et = reactCoreLibraryReexport.useCallback(() => {
      teaAnalyticsEventTracker.trackEvent("click_card", {
        card_type: q ? "code_agent_data_process_card" : "code_agent_data_result_card",
        click_effect: I ? "fold" : "unfold",
        bot_id: O.bot_id,
        skill_id: O.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(O.skill?.skill_type_no_default),
        message_id: O.message_id,
        conversation_id: O.conversation_id
      });
      P(!I);
    }, [ee, q, I]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!Q) {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
      }
    }, [Q]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        if (O.message_id === e) {
          N.current = true;
        }
      };
      initializeModuleInstance.initializeInstance.on(chatInputConstants.chatInputConstants.inputInterrupt, e);
      return () => {
        initializeModuleInstance.initializeInstance.off(chatInputConstants.chatInputConstants.inputInterrupt, e);
      };
    }, [O.message_id]);
    reactCoreLibraryReexport.useEffect(() => {
      if (messageContentTypeAndStatusChecker.xFg(O) && N.current) {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
      }
    }, [O.async_task?.status]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!!I && F !== skillMessageLifecycleTypes.taskStatus.PROCESSING && !a.length && !o) {
        S({
          blockId: B ?? "",
          resourceId: V ?? ""
        });
      }
    }, [I, F, a, S]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!q) {
        P(false);
      }
    }, [q]);
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("show_card", {
        card_type: q ? "code_agent_data_process_card" : "code_agent_data_result_card",
        status: I ? "unfold" : "fold",
        bot_id: O.bot_id,
        skill_id: O.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(O.skill?.skill_type_no_default),
        message_id: O.message_id,
        conversation_id: O.conversation_id
      });
    }, [ee, q, I, O.message_id]);
    let en = [];
    let ei = usePreviousHook.usePrevious(en.length);
    a.map((e, t) => {
      let n = x(e);
      let i = q && (!ei || t - ei >= 0);
      if (!n) {
        en.push([L.CustomComponent, {
          component: reactJsxRuntimeCoreReexport.jsx(A, {
            block: e,
            showAnimation: i,
            share: T,
            ...r
          }, `task-block-${e.id}`)
        }]);
      }
    });
    let er = !q || q && en.length === 0;
    if (F !== undefined && (O.async_task?.status !== undefined || G)) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: s("container-cI_cFr", {
          "finished-G4kEdp": !q,
          "share-O8hdRk": U,
          "narrow-VAY1zU": K === "md" || K === "sm" || J
        }),
        "data-id": M == null ? undefined : M.id,
        "data-block-type": M.block_type,
        children: [G && reactJsxRuntimeCoreReexport.jsx(ea, {
          miniMode: true,
          stepsClassName: "!px-8",
          title: reactJsxRuntimeCoreReexport.jsx("span", {
            children: Y
          }),
          taskCost: R("web_deepResearch_desc_researchProgress", {
            brandName: `${brandNameConstants.getBrandName()} App `
          }),
          enableExpand: false,
          data: []
        }), !G && reactJsxRuntimeCoreReexport.jsx(ea, {
          headerSticky: true,
          miniMode: er,
          titleBlinkAnimation: q,
          enableExpand: Q,
          stepsClassName: "!px-16 !-mt-6",
          title: reactJsxRuntimeCoreReexport.jsx("span", {
            children: ee
          }),
          taskCost: reactJsxRuntimeCoreReexport.jsx(j, {
            startTime: Number(z),
            duration: Number(D),
            isFinished: !q
          }),
          expanded: I,
          toggleExpand: et,
          data: en
        })]
      });
    } else {
      return null;
    }
  };
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  let ed = e => {
    let {
      contentBlock: t
    } = e;
    let {
      id: n
    } = t ?? {};
    let [i, r = [], l, a] = codingSkillStoreModule.codingSkillStore(e => [e.blockIdToProcessHasInited[n ?? ""], e.blockIdToProcess[n ?? ""], e.setHasOpenCanvasViewInAsyncStreaming, e.fetchAgentProcessData], deepEqualityUtil.deepEqual);
    return reactJsxRuntimeCoreReexport.jsx(es, {
      data: e,
      hasInited: i,
      taskStepList: r,
      fetchAgentProcessData: a,
      setHasOpenCanvasViewInAsyncStreaming: l
    });
  };
  require.d(exports, {
    AsyncSkillContentBlock: function () {
      return ed;
    }
  });
}