// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'SuperTaskCanvas'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 574580
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var disableSelectBarConst = require("disable-select-bar-const") /*id: 554633*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var filePreviewConfigs = require("file-preview-configs") /*id: 576123*/;
  var taskStatusConstants_1 = require("task-status-constants_1") /*id: 324746*/;
  var fileDownloadUtils = require("file-download-utils") /*id: 555717*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var reactCodemirrorEditorComponent = require("react-codemirror-editor-component") /*id: 160872*/;
  var imageGalleryPreviewComponent = require("image-gallery-preview-component") /*id: 6817*/;
  var internalEnvCheck = require("internal-env-check") /*id: 30256*/;
  var f = {
    panel: "panel-omB3Fa",
    "tool-view": "tool-view-w95uGZ",
    tool: "tool-_lnfK3",
    icon: "icon-sVWu2e"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function k(e) {
    let {
      toolData: t
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    let {
      IconComponent: n,
      i18nKey: r
    } = t.getDisplayConfig();
    return b({
      iconComponent: reactJsxRuntimeCoreReexport.jsx(n, {
        className: "size-16"
      }),
      title: a(r),
      debugPanel: internalEnvCheck.isInternalEnv() && reactJsxRuntimeCoreReexport.jsx(x, {
        toolData: t
      })
    });
  }
  let b = e => {
    let {
      iconComponent: t,
      title: a,
      debugPanel: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: f["tool-view"],
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: f.tool,
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: f.icon,
          children: t
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          children: a
        })]
      }), n]
    });
  };
  function x(e) {
    let {
      toolData: t
    } = e;
    let [a, n] = reactCoreLibraryReexport.useState(false);
    let i = t.getImageKeys();
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsxs(modalConfirmDialogManager.ModalConfirmDialog, {
        width: "60vw",
        title: "工具调用参数",
        visible: a,
        hasCancel: false,
        closeOnEsc: true,
        onOk: () => n(false),
        onCancel: () => n(false),
        children: [i.length > 0 && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("h2", {
            children: "图片"
          }), reactJsxRuntimeCoreReexport.jsx(imageGalleryPreviewComponent.ImageGallery, {
            imageUris: i
          })]
        }), reactJsxRuntimeCoreReexport.jsx(reactCodemirrorEditorComponent.CodeMirrorEditor, {
          readOnly: true,
          height: "60vh",
          value: JSON.stringify(t, null, 2),
          language: "json"
        })]
      }), reactJsxRuntimeCoreReexport.jsx("label", {
        style: {
          margin: "0 16px"
        },
        children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          size: "small",
          onClick: () => n(true),
          children: "Debug"
        })
      })]
    });
  }
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var codeBlockThemeStoreApi = require("code-block-theme-store-api") /*id: 861944*/;
  var codeCanvasStyles = require("code-canvas-styles") /*id: 489847*/;
  var codeCanvasHeaderComponent = require("code-canvas-header-component") /*id: 785350*/;
  require("empty-module_8") /*id: 926304*/;
  function E(e) {
    let {
      data: t,
      title: n
    } = e;
    let i = reactCoreLibraryReexport.useRef(null);
    let l = codeBlockThemeStoreApi.useCodeBlockMode();
    let o = reactCoreLibraryReexport.useMemo(() => t.split("\n"), [t]);
    let [{
      terminal: s,
      fitAddon: c
    }, d] = reactCoreLibraryReexport.useState({});
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        let [e, t] = await Promise.all([require.e("xterm-terminal") /*id: 9282*/.then(require.t.bind(require, 948613, 23)).then(e => e.Terminal), require.e("xterm-fit-addon") /*id: 75752*/.then(require.t.bind(require, 828123, 23)).then(e => e.FitAddon)]);
        let n = new e({
          fontSize: 12,
          lineHeight: 1.2,
          fontFamily: "Menlo, Monaco, 'Courier New', monospace",
          theme: {
            foreground: "#ccc"
          }
        });
        let r = new t();
        n.loadAddon(r);
        d({
          terminal: n,
          fitAddon: r
        });
      })();
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (i.current && s) {
        s.open(i.current);
        return () => {
          s.clear();
        };
      }
    }, [i.current, s]);
    reactCoreLibraryReexport.useEffect(() => {
      if (s) {
        s.clear();
        o.forEach(e => s.writeln(e));
      }
    }, [o, s]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!i.current || !c) {
        return;
      }
      let e = () => {
        c.fit();
      };
      let t = new ResizeObserver(debounceUtilWrapper.createDebounce(e, 200, {
        trailing: true
      }));
      t.observe(i.current);
      e();
      return () => {
        t.disconnect();
      };
    }, [i.current, c]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: ["term-canvas-NR599H", codeCanvasStyles.canvasClassNames["code-canvas-theme"]].filter(e => e).join(" "),
      "data-theme": l,
      children: [reactJsxRuntimeCoreReexport.jsx(codeCanvasHeaderComponent.CodeCanvasHeader, {
        title: n,
        theme: l,
        onClose: e.onClose,
        onSwitchTheme: () => {
          codeBlockThemeStoreApi.toggleCodeBlockMode();
        }
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "term-YZLMRY",
        ref: i,
        style: {
          width: "100%",
          height: "100%"
        }
      })]
    });
  }
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var N = classnamesUtils;
  var codeBlockComponent = require("code-block-component") /*id: 523030*/;
  var j = "tool-label-gYs3Rf";
  let I = e => {
    let {
      toolData: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "tool-container-YJCN_s",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: j,
        children: "参数"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "tool-input-Cteosd",
        children: reactJsxRuntimeCoreReexport.jsx(codeBlockComponent.MdboxCodeBlock, {
          code: JSON.stringify(t.input, null, 2),
          language: "json",
          viewOnly: true
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: j,
        children: "响应"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "tool-output-MAGX9f",
        children: reactJsxRuntimeCoreReexport.jsx(codeBlockComponent.MdboxCodeBlock, {
          code: JSON.stringify(t.output, null, 2),
          language: "json",
          viewOnly: true
        })
      })]
    });
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  let L = (() => {
    let e = {};
    return function (t = 1280, a = 960) {
      let n = `${t}_${a}`;
      if (!e[n]) {
        try {
          let r = document.createElement("canvas");
          r.width = t;
          r.height = a;
          e[n] = r.toDataURL();
        } catch (e) {}
      }
      return e[n] || "";
    };
  })();
  var loadingSpinnerWrapper = require("loading-spinner-wrapper") /*id: 354073*/;
  var fileUrlCacheManager = require("file-url-cache-manager") /*id: 655022*/;
  var W = "show-Gx_fvi";
  let D = e => {
    let {
      onAskHumanButtonClick: t,
      onSkipButtonClick: a
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        type: "tertiary",
        onClick: a,
        className: "ask_human_skip_button-Yw9WKF",
        children: n("superAgent_btn_skip")
      }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        style: {
          marginLeft: 12
        },
        onClick: t,
        children: n("superAgent_btn_takeControl")
      })]
    });
  };
  function $(e) {
    let {
      token: t,
      url: a,
      coverConfig: n
    } = e;
    let {
      showAskHumanButton: i,
      onAskHumanButtonClick: l,
      onSkipButtonClick: s
    } = n || {};
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let [d, u] = reactCoreLibraryReexport.useState(true);
    let [p, m] = reactCoreLibraryReexport.useState(i);
    let [v, h] = reactCoreLibraryReexport.useState(0);
    let [_, g] = reactCoreLibraryReexport.useState(0);
    let [f, k] = reactCoreLibraryReexport.useState(a || L());
    let b = reactCoreLibraryReexport.useRef(t);
    b.current = t;
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        let e = setTimeout(() => u(true), 300);
        fileUrlCacheManager.getFileUrls([t], "image", {
          preloadImage: true
        }).then(a => {
          let [n] = a;
          if (t === b.current) {
            k(n);
          }
          clearTimeout(e);
        }).finally(() => {
          u(false);
        });
        return () => clearTimeout(e);
      }
      if (a) {
        k(a);
      } else {
        k("");
      }
      u(false);
    }, [t, a]);
    let x = reactCoreLibraryReexport.useCallback(debounceUtilWrapper.createDebounce(e => {
      let t = e.currentTarget.getBoundingClientRect().left;
      let a = e.currentTarget.getBoundingClientRect().top;
      h(e.clientX - t);
      g(e.clientY - a);
    }, 13, {
      leading: true,
      trailing: false
    }), [h, g]);
    let y = reactCoreLibraryReexport.useCallback(() => {
      if (!i) {
        m(true);
      }
    }, [m, i]);
    let S = reactCoreLibraryReexport.useCallback(() => {
      if (!i) {
        m(false);
      }
    }, [m, i]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "content-ZWqu9J",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: N("mask-hlR4Fv", {
          [W]: p
        }),
        onMouseEnter: y,
        onMouseLeave: S,
        onMouseMove: x,
        children: i ? reactJsxRuntimeCoreReexport.jsx(D, {
          onAskHumanButtonClick: l,
          onSkipButtonClick: s
        }) : (() => {
          let e = reactJsxRuntimeCoreReexport.jsx("div", {
            className: N("mask-mouse-pointer-dMXaG5", {
              [W]: p
            }),
            style: {
              left: v - 2,
              top: _ - 8
            }
          });
          let t = c("superAgent_status_agentInControl", {
            brandName: brandNameConstants.getBrandName()
          });
          return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            position: "top",
            trigger: "custom",
            content: t,
            arrowPointAtCenter: true,
            visible: p,
            rePosKey: v + _,
            showArrow: false,
            className: "tooltip-v2-M6yF9P",
            children: e
          });
        })()
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "image-box-tyC7Rt",
        children: reactJsxRuntimeCoreReexport.jsx(loadingSpinnerWrapper.SpinnerWrapper, {
          spinning: d,
          className: "h-full w-full",
          children: reactJsxRuntimeCoreReexport.jsx("img", {
            className: "image-ayOeCi",
            src: xssContentSanitizer.sanitizeUrl(f, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFpqTTFaM1dsaEpkR1JI%m5wa*$%RnFX$mMxTWxsW$R-%mti$3hzWkhrN%1*bFl%bkpN$0ZKMllqSjNkR1J0-kd4a2$%bDZX$E5L-kZwWE5-c*hSemt3$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ"
            })
          })
        })
      })]
    });
  }
  let z = 4 / 3;
  let H = e => {
    let {
      className: t,
      toolData: a,
      coverConfig: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(U, {
      className: t,
      mainContent: (() => {
        let [e] = a.getImageKeys();
        let t = a.getBriefImageUrl();
        if (e) {
          return reactJsxRuntimeCoreReexport.jsx($, {
            token: e,
            coverConfig: n
          });
        } else if (t) {
          return reactJsxRuntimeCoreReexport.jsx($, {
            url: t,
            coverConfig: n
          });
        } else {
          return reactJsxRuntimeCoreReexport.jsx(I, {
            toolData: a
          });
        }
      })()
    });
  };
  let U = e => {
    let {
      className: t,
      mainContent: a
    } = e;
    let n = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      let e = n.current;
      if (e) {
        let t = e.querySelector("div[data-id=\"placeholder\"]");
        let a = debounceUtilWrapper.createDebounce(() => {
          if (t) {
            let {
              offsetWidth: a,
              offsetHeight: n
            } = e;
            let r = a - 48;
            let i = n - 48 - 0;
            if (r / i >= z) {
              t.style.height = "100%";
              t.style.width = `${i * z}px`;
            } else {
              t.style.width = "100%";
              t.style.height = `${r / z + 0}px`;
            }
          } else {
            t = e.querySelector("div[data-id=\"placeholder\"]");
          }
        }, 25, {
          leading: true,
          trailing: true
        });
        a();
        if (typeof ResizeObserver != "undefined") {
          let t = new ResizeObserver(a);
          t.observe(e);
          return () => t.disconnect();
        }
        window.addEventListener("resize", a);
        return () => {
          window.removeEventListener("resize", a);
        };
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: N("container-mq4oew", t, "v2-CqoWKA"),
      style: {
        padding: 24
      },
      ref: n,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        "data-id": "placeholder",
        className: "placeholder-z59Fez",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: N("border-MRgvg9", "active-jE2eb5")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "main-I8ldwO",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "main-content-EkmOtx",
            children: a
          })
        })]
      })
    });
  };
  var viewerConstants = require("viewer-constants") /*id: 636769*/;
  var pdfReadCanvasComponent = require("pdf-read-canvas-component") /*id: 787030*/;
  var fileTypeConstants_1 = require("file-type-constants_1") /*id: 331664*/;
  var filePreviewSdk = require("file-preview-sdk") /*id: 667727*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function ee(e) {
    return e === taskStatusConstants_1.fileFormats.PDF;
  }
  function et(e) {
    return e === taskStatusConstants_1.fileFormats.Doc || e === taskStatusConstants_1.fileFormats.DOCX;
  }
  function ea(e) {
    return e === taskStatusConstants_1.fileFormats.PPT || e === taskStatusConstants_1.fileFormats.PPTX;
  }
  var boxPreviewEventConstants = require("box-preview-event-constants") /*id: 654234*/;
  var superTaskEventTracker = require("super-task-event-tracker") /*id: 368178*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  let es = () => {
    let e = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.canvasLayoutState === chatPanelModes.PanelMode.FULL_IMMERSIVE);
    return {
      isCanvasFullScreen: e,
      openCanvasFullScreen: reactFunctionMemoHook.useMemoizedCallback(() => {
        chatStoreManager.getStore("chatViewCanvasStore").setState({
          canvasLayoutState: chatPanelModes.PanelMode.FULL_IMMERSIVE,
          preRenderNodeId: undefined
        });
      }),
      closeCanvasFullScreen: reactFunctionMemoHook.useMemoizedCallback(() => {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.setCanvasLayoutState(chatPanelModes.PanelMode.CANVAS_ONLY));
      })
    };
  };
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var lazyFileIconLoader = require("lazy-file-icon-loader") /*id: 525556*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var chevronRightIcon_1 = require("chevron-right-icon_1") /*id: 839336*/;
  var rightOutlinedIcon = require("right-outlined-icon") /*id: 831095*/;
  var shareAiPptIcon = require("share-ai-ppt-icon") /*id: 777416*/;
  var plusCircleIcon = require("plus-circle-icon") /*id: 459597*/;
  var ringOutlinedIcon = require("ring-outlined-icon") /*id: 112124*/;
  var svgExpandIconComponent = require("svg-expand-icon-component") /*id: 993319*/;
  var reactSvgIcon_2 = require("react-svg-icon_2") /*id: 975719*/;
  var reactDownloadIcon = require("react-download-icon") /*id: 391488*/;
  var svgArrowIconComponent = require("svg-arrow-icon-component") /*id: 336478*/;
  var closeIconComponent_1_1 = require("close-icon-component_1_1") /*id: 259726*/;
  var eC = {
    "preview-header-wrapper": "preview-header-wrapper-FCUJg9",
    previewHeaderWrapper: "preview-header-wrapper-FCUJg9",
    "preview-header-left": "preview-header-left-QUY1hv",
    previewHeaderLeft: "preview-header-left-QUY1hv",
    "preview-header-icon": "preview-header-icon-NAL1bs",
    previewHeaderIcon: "preview-header-icon-NAL1bs",
    "preview-header-file-name": "preview-header-file-name-sO3FHj",
    previewHeaderFileName: "preview-header-file-name-sO3FHj",
    "preview-header-middle": "preview-header-middle-JRlVuE",
    previewHeaderMiddle: "preview-header-middle-JRlVuE",
    "preview-header-right": "preview-header-right-oqjGI_",
    previewHeaderRight: "preview-header-right-oqjGI_",
    "preview-header-pagination": "preview-header-pagination-CJ39BB",
    previewHeaderPagination: "preview-header-pagination-CJ39BB",
    "preview-header-pagination-icon": "preview-header-pagination-icon-UhDqlq",
    previewHeaderPaginationIcon: "preview-header-pagination-icon-UhDqlq",
    "preview-header-curpage": "preview-header-curpage-ePJ94n",
    previewHeaderCurpage: "preview-header-curpage-ePJ94n",
    "preview-header-slash": "preview-header-slash-hfOiUI",
    previewHeaderSlash: "preview-header-slash-hfOiUI",
    "preview-header-totalpage": "preview-header-totalpage-BtLtpu",
    previewHeaderTotalpage: "preview-header-totalpage-BtLtpu",
    "preview-header-divider": "preview-header-divider-bGteac",
    previewHeaderDivider: "preview-header-divider-bGteac"
  };
  let ey = "120px";
  let eS = e => reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
    zIndex: 2048,
    getPopupContainer: () => document.body,
    ...e
  });
  let eA = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
      size: "md2",
      variant: "icon",
      ...e,
      ref: t,
      children: e.icon
    });
  });
  let eE = e => {
    let {
      fileName: t,
      toolConfig: a,
      paginationInfo: n,
      isFullScreen: i,
      onFullScreenChange: l,
      onZoomIn: s,
      onZoomOut: c,
      onDownload: d,
      onShare: u,
      onPrevPage: p,
      onNextPage: m,
      onClose: v,
      onCopy: h,
      reportCanvasShow: _,
      aiSkillList: g
    } = e;
    let f = !!(a == null ? undefined : a.pagination) && !!(n == null ? undefined : n.totalPage) && !!n.curPage;
    reactCoreLibraryReexport.useEffect(() => {
      _();
    }, []);
    let k = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: eC["preview-header-wrapper"],
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eC["preview-header-left"],
        style: {
          minWidth: ey
        },
        children: [reactJsxRuntimeCoreReexport.jsx(lazyFileIconLoader.FileIcon, {
          ext: getFileExtension.getFileExtension(t),
          className: eC["preview-header-icon"]
        }), reactJsxRuntimeCoreReexport.jsx(eS, {
          content: t,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: eC["preview-header-file-name"],
            children: t
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: N([eC["preview-header-middle"]]),
        children: g.map((e, t) => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [e.comp, t < g.length - 1 && reactJsxRuntimeCoreReexport.jsx("div", {
            className: eC["preview-header-divider"],
            style: {
              margin: 0
            }
          })]
        }))
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eC["preview-header-right"],
        style: {
          minWidth: ey
        },
        children: [f && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: eC["preview-header-pagination"],
          children: [reactJsxRuntimeCoreReexport.jsx(eS, {
            content: k("read_PDF_iconTooltip_previousPage"),
            children: reactJsxRuntimeCoreReexport.jsx(eA, {
              icon: reactJsxRuntimeCoreReexport.jsx(chevronRightIcon_1.ChevronRightIcon, {}),
              style: {
                marginRight: "12px"
              },
              onClick: () => p == null ? undefined : p()
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: eC["preview-header-curpage"],
            children: n == null ? undefined : n.curPage
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: eC["preview-header-slash"],
            children: "/"
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: eC["preview-header-totalpage"],
            children: n == null ? undefined : n.totalPage
          }), reactJsxRuntimeCoreReexport.jsx(eS, {
            content: k("read_PDF_iconTooltip_nextPage"),
            children: reactJsxRuntimeCoreReexport.jsx(eA, {
              icon: reactJsxRuntimeCoreReexport.jsx(rightOutlinedIcon.RightOutlinedIcon, {}),
              style: {
                marginLeft: "12px"
              },
              onClick: () => m == null ? undefined : m()
            })
          })]
        }), f && reactJsxRuntimeCoreReexport.jsx("div", {
          className: eC["preview-header-divider"]
        }), !!(a == null ? undefined : a.zoomOut) && reactJsxRuntimeCoreReexport.jsx(eS, {
          content: k("read_file_zoom_out"),
          children: reactJsxRuntimeCoreReexport.jsx(eA, {
            icon: reactJsxRuntimeCoreReexport.jsx(shareAiPptIcon.ShareAiPptIcon, {}),
            onClick: () => c == null ? undefined : c()
          })
        }), !!(a == null ? undefined : a.zoomIn) && reactJsxRuntimeCoreReexport.jsx(eS, {
          content: k("read_file_zoom_in"),
          children: reactJsxRuntimeCoreReexport.jsx(eA, {
            icon: reactJsxRuntimeCoreReexport.jsx(plusCircleIcon.PlusCircleIcon, {}),
            onClick: () => s == null ? undefined : s()
          })
        }), !!(a == null ? undefined : a.copy) && reactJsxRuntimeCoreReexport.jsx(eS, {
          content: k("cici_desktop_text_selection_skill_copy"),
          children: reactJsxRuntimeCoreReexport.jsx(eA, {
            icon: reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
            onClick: h
          })
        }), (a == null ? undefined : a.fullScreen) && reactJsxRuntimeCoreReexport.jsx(eS, {
          content: k(i ? "skill_copliotreading_fullscreen_exit" : "skill_copliotreading_fullscreen"),
          children: reactJsxRuntimeCoreReexport.jsx(eA, {
            icon: i ? reactJsxRuntimeCoreReexport.jsx(svgExpandIconComponent.ExpandIcon, {}) : reactJsxRuntimeCoreReexport.jsx(reactSvgIcon_2.SvgIcon, {}),
            onClick: () => l == null ? undefined : l(!i)
          })
        }), (f || !!(a == null ? undefined : a.zoomOut) || !!(a == null ? undefined : a.zoomIn) || !!(a == null ? undefined : a.fullScreen)) && reactJsxRuntimeCoreReexport.jsx("div", {
          className: eC["preview-header-divider"]
        }), !!(a == null ? undefined : a.download) && reactJsxRuntimeCoreReexport.jsx(eS, {
          content: k("download_button_title"),
          children: reactJsxRuntimeCoreReexport.jsx(eA, {
            icon: reactJsxRuntimeCoreReexport.jsx(reactDownloadIcon.DownloadIcon, {}),
            onClick: d
          })
        }), !!(a == null ? undefined : a.share) && reactJsxRuntimeCoreReexport.jsx(eS, {
          content: k("aispace_share"),
          children: reactJsxRuntimeCoreReexport.jsx(eA, {
            icon: reactJsxRuntimeCoreReexport.jsx(svgArrowIconComponent.getArrowIcon, {
              className: eC.icon
            }),
            onClick: () => u == null ? undefined : u()
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: eC["preview-header-divider"]
        }), reactJsxRuntimeCoreReexport.jsx(eS, {
          content: k("aispace_window_btn_close"),
          children: reactJsxRuntimeCoreReexport.jsx(eA, {
            onClick: v,
            icon: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {})
          })
        })]
      })]
    });
  };
  var fileFormatContentTypeUtils = require("file-format-content-type-utils") /*id: 559499*/;
  var previewConstants_1 = require("preview-constants_1") /*id: 415792*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  function ej(e, t, a) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var a = e[Symbol.toPrimitive];
      if (a !== undefined) {
        var n = a.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = a;
    }
    return e;
  }
  let eI = {
    scene: 2
  };
  class eM {
    async waitForPDFReady() {
      this._stop = false;
      for (let e = 0; e < 60 && !this._stop; e++) {
        let e = (await eP(this._params)).find(e => e.preview_type === this._params.previewType);
        if (!e) {
          break;
        }
        if ((e == null ? undefined : e.preview_status) === previewConstants_1.PreviewStatus.Enable) {
          return previewConstants_1.PreviewStatus.Enable;
        }
        await this.wait(2000);
      }
      return previewConstants_1.PreviewStatus.Disable;
    }
    wait(e) {
      return new Promise(t => setTimeout(t, e));
    }
    async getPreviewUrl() {
      if ((await this.waitForPDFReady()) === previewConstants_1.PreviewStatus.Enable) {
        let i = await apiServicesCollection.SamanthaApiService.GetPreviewInfo({
          key: this._params.fileKey,
          preview_type: this._params.previewType,
          ...eI
        });
        if ((i == null ? undefined : i.data?.main_url) || (i == null ? undefined : i.data?.backup_url)) {
          return {
            url: (i == null ? undefined : i.data?.main_url) || (i == null ? undefined : i.data?.backup_url) || "",
            size: i == null ? undefined : i.data?.size
          };
        }
      }
      throw Error("supertask_product_preview_error");
    }
    abort() {
      this._stop = true;
    }
    constructor(e) {
      ej(this, "_stop", false);
      ej(this, "_params", undefined);
      this._params = e;
    }
  }
  async function eP(e) {
    let {
      fileKey: t,
      fileExt: a
    } = e;
    try {
      let {
        data: e
      } = await apiServicesCollection.SamanthaApiService.MGetPreviewMetaByKey({
        item_list: [{
          key: t,
          file_ext: a.startsWith(".") ? a : `.${a}`
        }],
        ...eI
      });
      return (e == null ? undefined : e.preview_meta_map?.[t]) || [];
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "supertask_product_preview_progress_error",
        error: e
      });
      return [];
    }
  }
  let eF = e => {
    var a;
    var n;
    var s;
    var v;
    let h;
    let {
      fileName: _,
      productData: g,
      fileType: f,
      conversationId: k,
      messageId: b,
      superTaskId: x,
      superTaskType: C,
      onClose: y
    } = e;
    let [S, A] = reactCoreLibraryReexport.useState("");
    let E = i18nextLanguageGetter.getCurrentLanguage();
    let R = reactCoreLibraryReexport.useMemo(() => ({
      name: _,
      size: 1,
      fileType: f || "file",
      ext: `.${g.type}`
    }), [_, f]);
    let N = reactCoreLibraryReexport.useCallback(() => {
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
      if (y != null) {
        y();
      }
    }, [y]);
    let T = conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), k || "", b || "");
    let j = fileFormatContentTypeUtils.getContentTypeByFormat(g.type);
    let I = {
      super_task_id: (T == null ? undefined : T.async_task?.id) || x || "",
      super_task_mode: (h = "", (T == null ? undefined : (s = T.verbose) === null || s === undefined ? undefined : s.super_task?.supertask_task_type) && (h = T == null ? undefined : (v = T.verbose) === null || v === undefined ? undefined : v.super_task?.supertask_task_type), C && (h = C), h === "0" ? "search_task" : "complex_task"),
      content_sec_type: j.content_sec_type,
      bot_id: T == null ? undefined : T.bot_id,
      message_id: (T == null ? undefined : T.message_id) || b || "",
      conversation_id: (T == null ? undefined : T.conversation_id) || k || "",
      skill_id: "138",
      skill_name: "super_task",
      user_type: "bot"
    };
    let {
      onReady: M,
      pageCount: P,
      pageIndex: F,
      previewContentLoaded: L,
      eventBusRef: Z
    } = function (e, t) {
      let a = ee(e);
      let n = et(e);
      let i = ea(e);
      let [l, o] = reactCoreLibraryReexport.useState(0);
      let [s, c] = reactCoreLibraryReexport.useState(0);
      let [d, u] = reactCoreLibraryReexport.useState(false);
      let p = reactCoreLibraryReexport.useRef();
      return {
        onReady: reactCoreLibraryReexport.useCallback(e => {
          if (e) {
            p.current = e;
            if (a || n || i) {
              e.on(boxPreviewEventConstants.previewEventConstants.PDF_PAGE_NUMBER_TOTAL, e => {
                o(e);
              });
              e.on(boxPreviewEventConstants.previewEventConstants.PDF_PAGE_NUMBER_UPDATED, e => {
                let {
                  pageNumber: t
                } = e;
                c(t);
              });
            }
            e.on(boxPreviewEventConstants.previewEventConstants.TRIGGER_COPY, () => {
              superTaskEventTracker.trackRightClickCopyFile(t);
            });
            e.on(boxPreviewEventConstants.previewEventConstants.RESOURCE_LOADED, () => {
              u(true);
            });
          }
        }, [a, n, i]),
        pageCount: l,
        pageIndex: s,
        previewContentLoaded: d,
        eventBusRef: p
      };
    }(g.type, {
      ...I,
      section_id: (T == null ? undefined : T.section_id) || ""
    });
    let {
      onZoomIn: B,
      onZoomOut: W
    } = function (e, t) {
      let a = ee(e);
      let n = et(e);
      let i = ea(e);
      return {
        onZoomIn: reactCoreLibraryReexport.useCallback(() => {
          if (t && (a || n || i)) {
            t.triggerPDFZoomin();
          }
        }, [a, n, i, t]),
        onZoomOut: reactCoreLibraryReexport.useCallback(() => {
          if (t && (a || n || i)) {
            t.triggerPDFZoomout();
          }
        }, [a, n, i, t])
      };
    }(g.type, Z.current);
    let D = function (e, t) {
      let a = ee(t);
      let n = t === taskStatusConstants_1.fileFormats.XLSX;
      let i = et(t);
      let l = ea(t);
      return reactCoreLibraryReexport.useMemo(() => a || l || i ? {
        pagination: e,
        zoomIn: e,
        zoomOut: e,
        download: true
      } : n ? {
        pagination: false,
        zoomIn: false,
        zoomOut: false,
        download: true,
        copy: true
      } : {
        download: true
      }, [a, n, i, l, e, t]);
    }(L, g.type);
    let $ = function (e, t) {
      let a = i18nTranslationUtils.useTranslationWithFallback();
      return reactCoreLibraryReexport.useCallback(() => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "super_task_product_download_start",
          meta: {
            scene: "canvas",
            ...e
          }
        });
        fileDownloadUtils.downloadFromUrl(t, e.type, e.token || "").then(() => {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "super_task_product_download_finish",
            meta: {
              is_success: true,
              scene: "canvas",
              ...e
            }
          });
        }).catch(() => {
          semiToastNotification.toastInstance.error(a("web_ai_coding_canvas_download_fail", {
            s_artifacts_name: name
          }));
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "super_task_product_download_finish",
            meta: {
              is_success: false,
              scene: "canvas",
              ...e
            }
          });
        });
      }, []);
    }(g, _);
    let {
      isCanvasFullScreen: z,
      openCanvasFullScreen: H,
      closeCanvasFullScreen: U
    } = es();
    let ei = (n = location) === null || n === undefined ? undefined : (a = n.pathname) === null || a === undefined ? undefined : a.includes("super-task-replay");
    reactCoreLibraryReexport.useEffect(() => {
      let {
        previewType: e
      } = filePreviewConfigs.filePreviewConfigs[g.type];
      if (g.type === taskStatusConstants_1.fileFormats.PDF && g.url) {
        let e = g.url;
        if (g.token) {
          Promise.race([fileDownloadUtils.getCachedFileUrl(g.token), new Promise(t => setTimeout(() => t(e), 5000))]).then(t => A(t || e)).catch(() => A(e));
        } else {
          A(e);
        }
        return;
      }
      if (e && g.token) {
        let t = new eM({
          fileKey: g.token,
          fileExt: g.type,
          previewType: e
        });
        t.getPreviewUrl().then(e => {
          A(e.url);
        }).catch(() => []);
        return () => {
          t.abort();
        };
      }
    }, [g.token]);
    let el = [taskStatusConstants_1.fileFormats.PDF, taskStatusConstants_1.fileFormats.Doc, taskStatusConstants_1.fileFormats.DOCX, taskStatusConstants_1.fileFormats.PPT, taskStatusConstants_1.fileFormats.PPTX].includes(g.type);
    reactCoreLibraryReexport.useEffect(() => {
      if (el) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "read_canvas_open_start",
          meta: {
            openFrom: "super_task_canvas_view"
          }
        });
      }
    }, []);
    if (el) {
      return reactJsxRuntimeCoreReexport.jsx(pdfReadCanvasComponent.ReadCanvas, {
        messageId: b,
        conversationId: k,
        isCanvasOpened: true,
        readContent: {
          pdfUrl: S,
          pdfName: _,
          realFileKey: g.token,
          teaCtx: {
            skillType: aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask,
            customTeaParams: {
              ...I,
              content_type: j.content_type
            }
          },
          openFrom: "super_task_canvas_view"
        },
        onClose: () => {
          if (y != null) {
            y();
          }
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
        },
        customRawFileDownload: $,
        disableActions: ei ? [viewerConstants.UiActions.toolbar, viewerConstants.UiActions.crop] : undefined
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: (() => {
          let e = {
            ...I,
            canvas_type: "super_task_file"
          };
          return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx(eE, {
              reportCanvasShow: () => {
                superTaskEventTracker.trackOutputPreviewShow(e);
              },
              isImage: false,
              aiSkillList: [],
              fileName: _,
              toolConfig: D,
              onClose: () => {
                superTaskEventTracker.trackOutputPreviewClick({
                  ...e,
                  button_name: "close"
                });
                N();
              },
              paginationInfo: {
                curPage: F,
                totalPage: P
              },
              onZoomIn: B,
              onZoomOut: W,
              isFullScreen: z,
              onFullScreenChange: e => {
                if (e) {
                  H();
                } else {
                  U();
                }
              },
              onDownload: () => {
                superTaskEventTracker.trackOutputPreviewClick({
                  ...e,
                  button_name: "download"
                });
                superTaskEventTracker.trackDownload({
                  ...e,
                  section_id: (T == null ? undefined : T.section_id) || "",
                  click_from: "canvas_function",
                  content_type: j.content_type
                });
                $();
              },
              onPrevPage: () => {
                var e;
                if ((e = Z.current) === null || e === undefined) {
                  return undefined;
                } else {
                  return e.setPDFToPrevPage();
                }
              },
              onNextPage: () => {
                var e;
                if ((e = Z.current) === null || e === undefined) {
                  return undefined;
                } else {
                  return e.setPDFToNextPage();
                }
              },
              onCopy: () => {
                var e;
                if ((e = Z.current) !== null && e !== undefined) {
                  e.triggerCopyFullSheet();
                }
                superTaskEventTracker.trackCopy({
                  ...I
                });
              }
            }), reactJsxRuntimeCoreReexport.jsx(filePreviewSdk.FilePreviewSDK, {
              boxPreviewContentClassName: "preview-sdk-_1UsKa",
              boxPreviewLoadingClassName: "preview-loading-GvhPhu",
              pdfEnableScrollBar: false,
              useFastPDF: false,
              pdfToolbarConfig: [],
              imageToolbarConfig: [],
              withHeader: false,
              languageType: E,
              fileToken: g.token || "",
              userId: "",
              onEventBusReady: M,
              pdfDefaultZoomValue: fileTypeConstants_1.zoomModes.AUTO,
              fileInfoMeta: R,
              fileInfoReqMeta: {
                scene: 2
              }
            })]
          });
        })()
      });
    }
  };
  function eL(e) {
    let {
      toolData: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let [l] = n.getImageKeys();
    let s = n.getBriefImageUrl();
    let c = reactCoreLibraryReexport.useMemo(() => {
      try {
        var t;
        var r;
        let i = new URL(((t = n.toolData) === null || t === undefined ? undefined : t.display_extra?.browser_url) || function (e = "") {
          let t = e.match(/(https?:\/\/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(?=\/|$|\?|#|\s)/i);
          if (t) {
            return t[1];
          } else {
            return "";
          }
        }((r = n.toolData) === null || r === undefined ? undefined : r.display_extra?.brief));
        if (i.hostname) {
          return reactJsxRuntimeCoreReexport.jsx("span", {
            className: "text-dbx-text-secondary",
            children: i.hostname
          });
        } else {
          return null;
        }
      } catch (e) {
        return null;
      }
    }, [s || l, n.toolData.display_extra?.brief, n.toolData.display_extra?.browser_url]);
    return reactJsxRuntimeCoreReexport.jsx(eZ, {
      header: reactJsxRuntimeCoreReexport.jsx(k, {
        toolData: n
      }),
      center: c,
      closeTooltip: i("flow_web_ext_close_upper_case"),
      onClose: e.onClose
    });
  }
  let eZ = e => {
    let {
      header: t,
      center: a,
      closeTooltip: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        box-content flex h-24 items-center justify-between p-[12px] text-14
        leading-22
      `,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex flex-1 items-center justify-start",
        children: t
      }), a ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex flex-1 items-center justify-center",
        children: a
      }) : null, reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex flex-1 items-center justify-end",
        children: reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
          zIndex: 2048,
          content: n,
          getPopupContainer: () => document.body,
          children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "icon",
            onClick: e.onClose,
            children: reactJsxRuntimeCoreReexport.jsx(svgExpandIconComponent.ExpandIcon, {})
          })
        })
      })]
    });
  };
  var resourceUrlSigner = require("resource-url-signer") /*id: 869102*/;
  var codemirrorScrollEndHandler = require("codemirror-scroll-end-handler") /*id: 580557*/;
  var codemirrorEditorUtils = require("codemirror-editor-utils") /*id: 977017*/;
  var asyncSkillReceiveHook = require("async-skill-receive-hook") /*id: 463729*/;
  let ez = e => {
    let {
      code: t,
      language: a,
      theme: n,
      isStreaming: i,
      height: l
    } = e;
    let o = reactCoreLibraryReexport.useRef(null);
    let [s, c] = reactCoreLibraryReexport.useState();
    let d = reactCoreLibraryReexport.useRef(i);
    let u = reactCoreLibraryReexport.useMemo(() => codemirrorScrollEndHandler.scrollEndHandler(e => {
      if (e) {
        if (i) {
          d.current = true;
        }
      } else {
        d.current = false;
      }
    }, {
      threshold: 12
    }), [i]);
    let p = reactCoreLibraryReexport.useMemo(() => [u], [u]);
    let {
      run: m
    } = function (e, t) {
      let a = reactCoreLibraryReexport.useRef({
        isVisible: !document.hidden,
        pendingArgs: null,
        hasPendingCall: false
      });
      let n = reactCoreLibraryReexport.useCallback(function () {
        var t = arguments.length;
        var n = Array(t);
        var r = 0;
        for (; r < t; r++) {
          n[r] = arguments[r];
        }
        if (a.current.isVisible) {
          return e(...n);
        }
        a.current.pendingArgs = n;
        a.current.hasPendingCall = true;
      }, [e]);
      let {
        run: i,
        cancel: l,
        flush: o
      } = asyncSkillReceiveHook.useSkillReceive(n, t);
      reactCoreLibraryReexport.useEffect(() => {
        let e = () => {
          let e = !document.hidden;
          let t = a.current;
          if (!t.isVisible && e && t.hasPendingCall) {
            i(...(t.pendingArgs || []));
            t.hasPendingCall = false;
            t.pendingArgs = null;
          }
          t.isVisible = e;
        };
        document.addEventListener("visibilitychange", e);
        return () => {
          document.removeEventListener("visibilitychange", e);
          a.current.pendingArgs = null;
        };
      }, [i]);
      return {
        run: i,
        cancel: l,
        flush: o
      };
    }((e, t) => {
      let a = codemirrorEditorUtils.calculateTextDiff(e.state.doc.toString(), t ?? "", {
        scrollIntoView: d.current
      });
      if (a) {
        let t = e.state.update(a);
        e.dispatch(t);
      }
    }, {
      wait: 100,
      leading: true,
      trailing: true
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (s) {
        m(s, t);
      }
    }, [s, t]);
    return reactJsxRuntimeCoreReexport.jsx(reactCodemirrorEditorComponent.CodeMirrorEditor, {
      ref: o,
      value: "",
      theme: n,
      language: a,
      extensions: p,
      readOnly: true,
      editable: false,
      height: l,
      onCreateEditor: c
    });
  };
  var chatBlockManagerAndToolDataCache = require("chat-block-manager-and-tool-data-cache") /*id: 247150*/;
  var htmlRenderer = require("html-renderer") /*id: 865723*/;
  var htmlStreamStates = require("html-stream-states") /*id: 377455*/;
  var superTaskMarkdownViewComponent = require("super-task-markdown-view-component") /*id: 506522*/;
  function eQ(e) {
    let {
      language: t,
      code: a,
      theme: n,
      isStreaming: i
    } = e;
    let l = reactCoreLibraryReexport.useRef(null);
    if (t === "markdown") {
      return reactJsxRuntimeCoreReexport.jsx(superTaskMarkdownViewComponent.SuperTaskMarkdownView, {
        mode: n,
        markDown: a,
        isStreaming: i
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(htmlRenderer.HtmlRenderer, {
        ref: l,
        className: "h-full w-full border-none bg-white",
        html: a,
        onNewImageFound: (e, t) => {
          var a;
          if ((a = l.current) !== null && a !== undefined) {
            a.dispatchImageOverrideAction({
              images: {
                [e]: {
                  url: t,
                  statusCode: 0
                }
              }
            });
          }
        },
        isStreaming: i ? htmlStreamStates.streamingStates.Streaming : htmlStreamStates.streamingStates.StreamingEnd
      });
    }
  }
  function eJ(e) {
    let {
      title: t,
      titleView: a,
      code: n,
      stream: i = false,
      lang: l,
      loading: s,
      showPreview: c,
      toolData: d
    } = e;
    let u = reactCoreLibraryReexport.useRef(null);
    let [m, v] = reactCoreLibraryReexport.useState();
    let [h, _] = reactCoreLibraryReexport.useState(c ? "preview" : "code");
    let g = codeBlockThemeStoreApi.useCodeBlockMode();
    let [f, k] = reactCoreLibraryReexport.useState(n);
    let b = i18nTranslationUtils.useTranslationWithFallback();
    let [x, C] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (i === false) {
        C(true);
        resourceUrlSigner.replaceSignedUrls(n).then(e => {
          if (e) {
            k(e);
          }
          C(false);
        }).catch(() => {
          C(false);
        });
      }
    }, [i, n]);
    reactCoreLibraryReexport.useEffect(() => {
      if (i && d) {
        return chatBlockManagerAndToolDataCache.toolDataCacheManager.onBlockUpdate(d.blockId, e => {
          k(e.stream?.data || "");
        });
      }
    }, []);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      v(u.current?.offsetHeight ? `${u.current?.offsetHeight}px` : undefined);
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: [e.className, codeCanvasStyles.canvasClassNames["code-canvas-theme"]].filter(e => e).join(" "),
      "data-theme": g,
      "data-testid": e["data-testid"],
      children: [reactJsxRuntimeCoreReexport.jsx(codeCanvasHeaderComponent.CodeCanvasHeader, {
        title: a || t,
        currentTab: h,
        tabs: c ? [{
          name: b("web_ai_coding_canvas_code"),
          value: "code"
        }, {
          name: b("web_ai_coding_canvas_preview"),
          value: "preview"
        }] : [],
        theme: g,
        showPreview: c,
        onSwitchTheme: () => {
          codeBlockThemeStoreApi.toggleCodeBlockMode();
        },
        onSwitchTab: e => {
          _(e);
        },
        onDownload: (d == null ? undefined : d.isFinish()) ? () => {
          fileDownloadUtils.downloadFile(t || d.toolId || "", l, f);
        } : undefined,
        onClose: e.onClose
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: codeCanvasStyles.canvasClassNames.editor,
        ref: u,
        children: reactJsxRuntimeCoreReexport.jsx(loadingSpinnerWrapper.SpinnerWrapper, {
          spinning: s || x,
          className: "h-full w-full",
          children: x ? null : h === "code" ? reactJsxRuntimeCoreReexport.jsx(ez, {
            code: f,
            theme: g,
            height: m,
            language: l,
            isStreaming: i
          }) : reactJsxRuntimeCoreReexport.jsx(eQ, {
            theme: g,
            language: l,
            code: f,
            isStreaming: i
          })
        })
      })]
    });
  }
  var connectionResolutionConstants = require("connection-resolution-constants") /*id: 832973*/;
  var cloudBrowserCanvasComponent = require("cloud-browser-canvas-component") /*id: 61271*/;
  var svgIconComponent_2 = require("svg-icon-component_2") /*id: 556910*/;
  var svgCheckIcon = require("svg-check-icon") /*id: 362340*/;
  var eY = {
    wrapper: "wrapper-piyor8",
    "cloud-browser-bg": "cloud-browser-bg-sFBGd7",
    "cloud-browser": "cloud-browser-oAF8o3",
    inner: "inner-wyzNXh",
    guidance: "guidance-KBufmJ",
    canvas: "canvas-svbUYF",
    "header-wrapper": "header-wrapper-HWBUGz",
    "header-info": "header-info-Fp_WOc",
    "disconnect-wrapper": "disconnect-wrapper-EV6_pI",
    icon: "icon-B4QVVF",
    caption: "caption-AYaqUd",
    description: "description-sDVb5l",
    "retry-btn": "retry-btn-O2H9pc"
  };
  let e0 = e => {
    let {
      onClosePanelClick: t,
      className: a,
      style: n,
      askHumanStatus: r = "",
      onTaskOver: i
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: N(a, eY["header-wrapper"]),
      style: n,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eY["header-info"],
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: "font-[500] text-dbx-text-primary",
          children: l("superAgent_status_userControl")
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center gap-4 text-dbx-text-secondary",
          children: [reactJsxRuntimeCoreReexport.jsx(svgIconComponent_2.SvgIcon, {
            className: "size-14"
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: "font-[400]",
            children: l("superAgent_tool_askUserAction")
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-center gap-16",
        children: [r === "doing" && reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          size: "md2",
          variant: "rectangle",
          color: "brand-filled",
          leadingIcon: reactJsxRuntimeCoreReexport.jsx(svgCheckIcon.CheckIcon, {}),
          onClick: i,
          children: l("superAgent_btn_stopControl")
        }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "icon",
          onClick: t,
          children: reactJsxRuntimeCoreReexport.jsx(svgExpandIconComponent.ExpandIcon, {})
        })]
      })]
    });
  };
  var e1 = require("rtl-icon-factory") /*id: 682145*/.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M2.206 2.607A1 1 0 1 1 3.62 1.193l19.092 19.092a1 1 0 0 1-1.415 1.414zM9.39 4.222l1.99 1.992q.31-.015.62-.015a13.09 13.09 0 0 1 9.129 3.705c.217.181.488.284.77.292a1.04 1.04 0 0 0 .806-.366c.404-.44.404-1.135-.036-1.54C19.773 5.54 15.996 4 12 4c-.882 0-1.755.075-2.61.222M1.329 8.327a16 16 0 0 1 2.118-1.713l1.58 1.579a13.2 13.2 0 0 0-2.158 1.673 1.107 1.107 0 0 1-1.576 0c-.404-.44-.404-1.135.036-1.539M6.94 10.107c-.793.43-1.533.963-2.2 1.592-.44.404-.44 1.101 0 1.578.403.44 1.1.44 1.54.036a8.3 8.3 0 0 1 2.317-1.55zM14.25 9.082l4.488 4.49c.212-.056.405-.17.558-.33a1.065 1.065 0 0 0-.036-1.541 10.65 10.65 0 0 0-5.01-2.619M10.258 13.424l1.947 1.947a4.002 4.002 0 0 0-2.882 1.022 1.097 1.097 0 0 1-1.54-.074 1.096 1.096 0 0 1 .074-1.539 6.2 6.2 0 0 1 2.4-1.356M13.037 20.255a1.467 1.467 0 1 1-2.075-2.075 1.467 1.467 0 0 1 2.075 2.075"
    })
  }), {}));
  var refreshIconRtlComponent = require("refresh-icon-rtl-component") /*id: 460264*/;
  var e3 = e => {
    let {
      onReconnect: t,
      className: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: N(eY["disconnect-wrapper"], a),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: eY.icon,
        children: reactJsxRuntimeCoreReexport.jsx(e1, {})
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: eY.caption,
        children: "连接云浏览器失败"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: eY.description,
        children: "由于网络原因连接失败，请稍后再试"
      }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        className: eY["retry-btn"],
        type: "tertiary",
        size: "medium",
        icon: reactJsxRuntimeCoreReexport.jsx(refreshIconRtlComponent.RefreshIconRtl, {}),
        onClick: t,
        children: "点击重试"
      })]
    });
  };
  (n = e6 || {}).InitConnectFailed = "InitConnectFailed";
  n.Connected = "Connected";
  n.Disconnected = "Disconnected";
  var e6 = n;
  let e5 = e => {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let {
      className: a,
      style: n,
      endpoint: i,
      onClosePanelClick: l,
      askHumanStatus: s = "",
      onSkip: c,
      onTaskOver: d
    } = e;
    let [u, p] = reactCoreLibraryReexport.useState(0);
    let [m, v] = reactCoreLibraryReexport.useState(e6.Connected);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: N(eY.wrapper, a),
      style: n,
      children: [reactJsxRuntimeCoreReexport.jsx(e0, {
        onClosePanelClick: l,
        askHumanStatus: s,
        onTaskOver: d
      }), m === e6.Connected && i ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: eY["cloud-browser-bg"],
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: eY["cloud-browser"],
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: eY.inner,
            children: [reactJsxRuntimeCoreReexport.jsx(cloudBrowserCanvasComponent.CloudBrowserCanvas, {
              readonly: s !== "doing",
              className: eY.canvas,
              wsEndpoint: i,
              onError: e => {
                let {
                  type: t
                } = e;
                if (t === connectionResolutionConstants.connectionStatus.DISCONNECT) {
                  v(e6.Disconnected);
                } else if (t === connectionResolutionConstants.connectionStatus.CONNECT_FAILED) {
                  v(e6.InitConnectFailed);
                }
              }
            }, u), s === "waiting" && reactJsxRuntimeCoreReexport.jsxs("div", {
              className: eY.guidance,
              children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
                variant: "rectangle",
                size: "md",
                color: "grey-outline",
                onClick: c,
                className: "min-w-72 !bg-dbx-bg-float",
                children: t("superAgent_btn_skip")
              }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
                variant: "rectangle",
                size: "md",
                color: "brand-filled",
                onClick: d,
                className: "ml-12 min-w-72",
                children: t("superAgent_btn_takeControl")
              })]
            })]
          })
        })
      }) : reactJsxRuntimeCoreReexport.jsx(e3, {
        onReconnect: () => {
          p(u + 1);
          v(e6.Connected);
        }
      })]
    });
  };
  let e4 = e => {
    let {
      askHumanResult: t
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: f.panel,
      "data-testid": "super-task-canvas-view",
      children: [reactJsxRuntimeCoreReexport.jsx(eZ, {
        header: reactJsxRuntimeCoreReexport.jsx(b, {
          iconComponent: reactJsxRuntimeCoreReexport.jsx(svgIconComponent_2.SvgIcon, {
            className: "size-14"
          }),
          title: a("superAgent_tool_askUserAction")
        }),
        closeTooltip: a("flow_web_ext_close_upper_case"),
        onClose: () => {
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
        }
      }), reactJsxRuntimeCoreReexport.jsx(U, {
        mainContent: reactJsxRuntimeCoreReexport.jsx($, {
          token: t.screenShotUri
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          height: 0,
          width: "100%"
        }
      })]
    });
  };
  function e9(e) {
    let {
      type: t,
      toolData: a,
      productData: n,
      cloudBrowserData: r,
      showPreview: i,
      stream: o,
      askHumanResult: c,
      superTaskId: d,
      superTaskType: p
    } = e.superTaskData || {};
    let {
      messageId: m,
      conversationId: v
    } = e;
    if (t === taskStatusConstants_1.toolTypes.Tool && a) {
      return reactJsxRuntimeCoreReexport.jsx(e7, {
        toolData: a,
        onClose: e.onClose,
        showAskHumanButton: e.showAskHumanButton,
        onConfirm: e.onConfirm,
        onSkip: e.onSkip
      });
    }
    if (t === taskStatusConstants_1.toolTypes.Tool && c) {
      return reactJsxRuntimeCoreReexport.jsx(e4, {
        askHumanResult: c
      });
    }
    if (t === taskStatusConstants_1.toolTypes.CloudBrowser) {
      return reactJsxRuntimeCoreReexport.jsx(e5, {
        askHumanStatus: r == null ? undefined : r.askHumanStatus,
        onSkip: r == null ? undefined : r.onSkip,
        onTaskOver: r == null ? undefined : r.onTaskOver,
        onClosePanelClick: e.onClose,
        endpoint: (r == null ? undefined : r.endpoint) || ""
      });
    }
    if (t === taskStatusConstants_1.toolTypes.Product && n) {
      return reactJsxRuntimeCoreReexport.jsx(e8, {
        toolData: a,
        messageId: m,
        conversationId: v,
        superTaskId: d,
        superTaskType: p,
        showPreview: i,
        productData: n,
        onClose: e.onClose
      });
    }
    if (t === taskStatusConstants_1.toolTypes.Code && n) {
      return reactJsxRuntimeCoreReexport.jsx(eJ, {
        className: `
          ${f.panel}
          ${disableSelectBarConst.disableSelectBar}
        `,
        "data-testid": "super-task-canvas-view",
        title: n.title || "",
        titleView: a ? reactJsxRuntimeCoreReexport.jsx(k, {
          toolData: a
        }) : null,
        showPreview: i,
        onClose: () => {
          var t;
          if ((t = e.onClose) !== null && t !== undefined) {
            t.call(e);
          }
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
        },
        stream: o,
        toolData: a,
        loading: false,
        lang: n.lang || "python",
        code: n.code || ""
      });
    }
    if (t === taskStatusConstants_1.toolTypes.Shell && a) {
      let t = /<shell_execution_result>([\s\S]+)<\/shell_execution_result>/i;
      let n = a.input?.command ? `\u001b[0m\u001b[96m$\u001b[0m ${a.input.command}
` : "";
      for (let e of a.output || []) {
        if (e.type === "text" && e.text) {
          let a = t.exec(e.text);
          if (a) {
            n += a[1].trim();
            break;
          }
        }
      }
      return reactJsxRuntimeCoreReexport.jsx(E, {
        title: reactJsxRuntimeCoreReexport.jsx(k, {
          toolData: a
        }),
        onClose: () => {
          var t;
          if ((t = e.onClose) !== null && t !== undefined) {
            t.call(e);
          }
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
        },
        data: n
      });
    }
    return null;
  }
  function e7(e) {
    let {
      toolData: t,
      onClose: a,
      showAskHumanButton: n,
      onConfirm: r,
      onSkip: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: f.panel,
      "data-testid": "super-task-canvas-view",
      children: [reactJsxRuntimeCoreReexport.jsx(eL, {
        toolData: t,
        onClose: () => {
          if (a != null) {
            a();
          }
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
        }
      }), reactJsxRuntimeCoreReexport.jsx(H, {
        toolData: t,
        coverConfig: {
          showAskHumanButton: n != null && n,
          onAskHumanButtonClick: r ?? emptyExportFunction.emptyFunction,
          onSkipButtonClick: o ?? emptyExportFunction.emptyFunction
        }
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          height: 0,
          width: "100%"
        }
      })]
    });
  }
  function e8(e) {
    let {
      toolData: t,
      productData: a,
      showPreview: n,
      messageId: r,
      conversationId: i,
      superTaskId: l,
      superTaskType: o,
      onClose: s
    } = e;
    if (filePreviewConfigs.filePreviewConfigs[a.type].previewType !== undefined) {
      let e = a.title || `${Date.now()}`;
      let t = `.${a.type}`.toLowerCase();
      if (!e.trim().toLowerCase().endsWith(t)) {
        e += t;
      }
      return reactJsxRuntimeCoreReexport.jsx(eF, {
        messageId: r,
        conversationId: i,
        superTaskId: l,
        superTaskType: o,
        productData: a,
        fileName: e
      });
    }
    if (fileDownloadUtils.resolveMimeType(a.title || a.url || "", a.type) && a.token) {
      return reactJsxRuntimeCoreReexport.jsx(te, {
        type: a.type,
        title: a.title || "",
        showPreview: n,
        toolData: t,
        token: a.token,
        onClose: s
      });
    } else {
      return null;
    }
  }
  function te(e) {
    let {
      token: t,
      title: a,
      type: n,
      showPreview: i,
      toolData: d,
      onClose: m
    } = e;
    let [v, h] = reactCoreLibraryReexport.useState({
      type: taskStatusConstants_1.fileFormats.Html,
      code: ""
    });
    let [_, g] = reactCoreLibraryReexport.useState(false);
    let b = i18nTranslationUtils.useTranslationWithFallback();
    reactCoreLibraryReexport.useEffect(() => {
      g(true);
      fileDownloadUtils.fetchFileText(t).then(e => {
        h({
          type: n,
          code: e
        });
      }).catch(() => {
        semiToastNotification.toastInstance.error(b("web_ai_coding_canvas_download_fail", {
          s_artifacts_name: a
        }));
      }).finally(() => {
        g(false);
      });
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx(eJ, {
      className: `
        ${f.panel}
        ${disableSelectBarConst.disableSelectBar}
      `,
      "data-testid": "super-task-canvas-view",
      title: a,
      titleView: d ? reactJsxRuntimeCoreReexport.jsx(k, {
        toolData: d
      }) : null,
      showPreview: i,
      onClose: () => {
        if (m != null) {
          m();
        }
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
      },
      toolData: d,
      loading: _,
      lang: v.type,
      code: v.code
    });
  }
  require.d(exports, {
    SuperTaskCanvas: function () {
      return e9;
    }
  });
}