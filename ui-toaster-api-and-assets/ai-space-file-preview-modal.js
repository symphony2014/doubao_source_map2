// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'FilePreviewModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 400570
         */
module.exports = function (module, exports, require) {
  var n;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var fileTypeConstants_1 = require("file-type-constants_1") /*id: 331664*/;
  var boxPreviewEventConstants = require("box-preview-event-constants") /*id: 654234*/;
  var fileExtensionUtils = require("file-extension-utils") /*id: 165880*/;
  var imageTypeValidator = require("image-type-validator") /*id: 338641*/;
  var aiSpaceFileUrlResolver = require("ai-space-file-url-resolver") /*id: 550880*/;
  var fileEntityTypeMapper = require("file-entity-type-mapper") /*id: 300358*/;
  var imageEditModes = require("image-edit-modes") /*id: 494752*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  (n = {})[n.aispace = 1] = "aispace";
  let w = n;
  var previewConstants_1 = require("preview-constants_1") /*id: 415792*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var rtlChatSparkleIcon_1 = require("rtl-chat-sparkle-icon_1") /*id: 749684*/;
  var aiGuidanceRtlIcon = require("ai-guidance-rtl-icon") /*id: 682496*/;
  var editPencilOutlinedIcon = require("edit-pencil-outlined-icon") /*id: 635854*/;
  var rtlIconComponent_1 = require("rtl-icon-component_1") /*id: 66332*/;
  var arrowLeftRtlIcon = require("arrow-left-rtl-icon") /*id: 232297*/;
  var arrowRightIconSvg = require("arrow-right-icon-svg") /*id: 623696*/;
  var useParamsResolver = require("use-params-resolver") /*id: 790576*/;
  let M = e => {
    let {
      url: i
    } = e;
    return new Promise((e, t) => {
      let n = new Image();
      n.src = xssContentSanitizer.sanitizeUrl(i, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBZek5D-%Zre$Z-WmpNMHBx$ERO$01HRlhlSHBNTW14MFdWZ*tiRXh1$W5wWldFcH$aRmhO%FE9PQ"
      });
      n.onload = () => {
        e({
          width: n.width,
          height: n.height
        });
      };
      n.onerror = e => {
        t(e);
      };
    });
  };
  var aiSpaceFileActionHandler = require("ai-space-file-action-handler") /*id: 90817*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlExpandFrameIcon = require("rtl-expand-frame-icon") /*id: 59653*/;
  var rtlLayoutIcon = require("rtl-layout-icon") /*id: 921302*/;
  var G = {
    "modal-content-wrapper": "modal-content-wrapper-BL5yr6",
    "image-modal-wrapper": "image-modal-wrapper-eiXbPS",
    "normal-modal-wrapper": "normal-modal-wrapper-YmnYnW",
    "modal-wrapper": "modal-wrapper-ujoEqc",
    "left-button": "left-button-uwfurO",
    "right-button": "right-button-bhV2W_",
    "preview-sdk-wrapper-pdf": "preview-sdk-wrapper-pdf-ku7CxU",
    "preview-sdk-wrapper-excel": "preview-sdk-wrapper-excel-c_7oxj",
    "preview-sdk-wrapper-image": "preview-sdk-wrapper-image-gNlKze",
    "preview-sdk-wrapper-normal": "preview-sdk-wrapper-normal-PaTwfU",
    "preview-sdk-normal": "preview-sdk-normal-VLF1I1",
    "preview-sdk-pdf": "preview-sdk-pdf-u37Ghr",
    "preview-sdk-excel": "preview-sdk-excel-bHXLmq",
    "preview-sdk-image": "preview-sdk-image-jPrDMY",
    "preview-sdk": "preview-sdk-k130lG",
    "aiskill-wrapper": "aiskill-wrapper-rPc7d2",
    "aiskill-icon": "aiskill-icon-g2euKf",
    "aiskill-name": "aiskill-name-sw103V",
    "preview-loading": "preview-loading-xIEzAT",
    "image-editor-wrapper": "image-editor-wrapper-q9iZZ9"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let q = e => {
    let {
      onClick: i,
      disabled: t,
      name: n,
      type: a,
      disableText: o
    } = e;
    let [s, l] = reactCoreLibraryReexport.useState(false);
    let c = a === imageEditModes.editModes.erase ? reactJsxRuntimeCoreReexport.jsx(editPencilOutlinedIcon.EditPencilOutlinedIcon, {
      className: G["aiskill-icon"]
    }) : a === imageEditModes.editModes.inPainting ? reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1.RtlIcon, {
      className: G["aiskill-icon"]
    }) : a === imageEditModes.editModes.outPainting ? reactJsxRuntimeCoreReexport.jsx(rtlExpandFrameIcon.RtlExpandFrameIcon, {
      className: G["aiskill-icon"]
    }) : a === imageEditModes.editModes.enhanceResolution ? reactJsxRuntimeCoreReexport.jsx(rtlLayoutIcon.RtlLayoutIcon, {
      className: G["aiskill-icon"]
    }) : null;
    let d = reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
      loading: s,
      className: G["aiskill-wrapper"],
      onClick: async () => {
        try {
          l(true);
          await i();
        } finally {
          l(false);
        }
      },
      icon: c,
      type: "quartary",
      disabled: t,
      children: reactJsxRuntimeCoreReexport.jsx("span", {
        className: G["aiskill-name"],
        children: n
      })
    });
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: o,
        children: d
      });
    } else {
      return d;
    }
  };
  var aiSpaceBatchDownload = require("ai-space-batch-download") /*id: 958042*/;
  var mediaPreviewStore = require("media-preview-store") /*id: 28049*/;
  var aiSpaceStoreManager = require("ai-space-store-manager") /*id: 798389*/;
  var driveAiShareOverviewStore = require("drive-ai-share-overview-store") /*id: 262375*/;
  var openAiSpaceShareLoginModal = require("open-ai-space-share-login-modal") /*id: 837937*/;
  var useAiSpaceDisplayMode = require("use-ai-space-display-mode") /*id: 735317*/;
  var aiSpaceShareActionFactory = require("ai-space-share-action-factory") /*id: 937537*/;
  var fileEntityConstants = require("file-entity-constants") /*id: 745880*/;
  var fileStateUtils = require("file-state-utils") /*id: 88691*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var fileIconSelectorWrapper = require("file-icon-selector-wrapper") /*id: 833236*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var rtlChevronLeftIcon = require("rtl-chevron-left-icon") /*id: 400992*/;
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var rtlSearchIcon_1 = require("rtl-search-icon_1") /*id: 547696*/;
  var addCircleIcon_1 = require("add-circle-icon_1") /*id: 5067*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var skillReceiveIconComponent = require("skill-receive-icon-component") /*id: 956389*/;
  var el = {
    "preview-header-wrapper": "preview-header-wrapper-CAywSu",
    "preview-header-left": "preview-header-left-fVukV4",
    "preview-header-icon": "preview-header-icon-xVKqkz",
    "preview-header-file-name": "preview-header-file-name-DPe5x_",
    "preview-header-middle": "preview-header-middle-QuUDGn",
    "preview-header-right": "preview-header-right-vC7WNC",
    "preview-header-pagination": "preview-header-pagination-p4Nnd8",
    "preview-header-curpage": "preview-header-curpage-ZbykIi",
    "preview-header-slash": "preview-header-slash-Xv8pGf",
    "preview-header-totalpage": "preview-header-totalpage-JzgOJ3",
    "preview-header-divider": "preview-header-divider-u7X0pc",
    icon: "icon-QqcEfi",
    button: "button-FeJz6v",
    "button-close": "button-close-UV4t1L"
  };
  let ec = "240px";
  let ed = e => {
    let {
      fileName: i,
      toolConfig: t,
      paginationInfo: n,
      onZoomIn: a,
      onZoomOut: o,
      onDownload: l,
      onShare: c,
      onPrevPage: d,
      onNextPage: u,
      onClose: p,
      aiSkillList: m
    } = e;
    let [_, h] = reactCoreLibraryReexport.useState(1000);
    let [f, g] = reactCoreLibraryReexport.useState(false);
    let k = !!(t == null ? undefined : t.pagination) && !!(n == null ? undefined : n.totalPage) && !!n.curPage;
    reactCoreLibraryReexport.useEffect(() => {
      let e = debounceUtil_1_1.debounce(() => {
        h(document.body.offsetWidth);
      }, 200);
      if (typeof window != "undefined") {
        window.addEventListener("resize", e);
        e();
      }
      return () => {
        if (typeof window != "undefined") {
          window.removeEventListener("resize", e);
        }
      };
    }, []);
    let w = _ >= 800;
    let x = _ >= 635;
    let b = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: el["preview-header-wrapper"],
      style: {
        gridTemplateColumns: w && x ? "auto 1fr auto" : x ? "auto 1fr auto" : "auto 1fr"
      },
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: el["preview-header-left"],
        style: {
          minWidth: x ? ec : "0"
        },
        children: [reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: b("aispace_window_btn_close"),
          trigger: "custom",
          visible: f,
          children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            className: s([el["button-close"], "justify-self-end"]),
            icon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
              className: el.icon
            }),
            onClick: () => p == null ? undefined : p(),
            type: "quartary",
            onMouseEnter: () => {
              g(true);
            },
            onMouseLeave: () => {
              g(false);
            },
            children: b("bookmarks_exit")
          })
        }), w && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: el["preview-header-divider"]
          }), reactJsxRuntimeCoreReexport.jsx(fileIconSelectorWrapper.FileIconSelector, {
            ext: getFileExtension.getFileExtension(i),
            className: el["preview-header-icon"]
          }), reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: i,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: el["preview-header-file-name"],
              children: i
            })
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: s([el["preview-header-middle"]]),
        children: m.map((e, i) => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [e.comp, i < m.length - 1 && reactJsxRuntimeCoreReexport.jsx("div", {
            className: el["preview-header-divider"],
            style: {
              margin: 0
            }
          })]
        }))
      }), x && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: el["preview-header-right"],
        style: {
          minWidth: w ? ec : "48px"
        },
        children: [k && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: el["preview-header-pagination"],
          children: [reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: b("read_PDF_iconTooltip_previousPage"),
            children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              className: el.button,
              icon: reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {
                className: el.icon
              }),
              style: {
                marginRight: "12px"
              },
              onClick: () => d == null ? undefined : d(),
              type: "quartary"
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: el["preview-header-curpage"],
            children: n == null ? undefined : n.curPage
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: el["preview-header-slash"],
            children: "/"
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: el["preview-header-totalpage"],
            children: n == null ? undefined : n.totalPage
          }), reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: b("read_PDF_iconTooltip_nextPage"),
            children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              className: el.button,
              icon: reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
                className: el.icon
              }),
              style: {
                marginRight: "4px",
                marginLeft: "12px"
              },
              onClick: () => u == null ? undefined : u(),
              type: "quartary"
            })
          })]
        }), k && reactJsxRuntimeCoreReexport.jsx("div", {
          className: el["preview-header-divider"]
        }), !!(t == null ? undefined : t.zoomOut) && reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: b("read_file_zoom_out"),
          children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            className: el.button,
            icon: reactJsxRuntimeCoreReexport.jsx(rtlSearchIcon_1.SearchRtlIcon, {
              className: el.icon
            }),
            style: {
              marginRight: "4px",
              marginLeft: "4px"
            },
            onClick: () => o == null ? undefined : o(),
            type: "quartary"
          })
        }), !!(t == null ? undefined : t.zoomIn) && reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: b("read_file_zoom_in"),
          children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            className: el.button,
            style: {
              marginRight: "4px"
            },
            icon: reactJsxRuntimeCoreReexport.jsx(addCircleIcon_1.AddCircleIcon, {
              className: el.icon
            }),
            onClick: () => a == null ? undefined : a(),
            type: "quartary"
          })
        }), (k || !!(t == null ? undefined : t.zoomOut) || !!(t == null ? undefined : t.zoomIn)) && reactJsxRuntimeCoreReexport.jsx("div", {
          className: el["preview-header-divider"]
        }), !!(t == null ? undefined : t.download) && reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: b("download_button_title"),
          children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            className: el.button,
            icon: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {
              className: el.icon
            }),
            style: {
              marginRight: "4px"
            },
            onClick: () => l == null ? undefined : l(),
            type: "quartary"
          })
        }), !!(t == null ? undefined : t.share) && reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: b("aispace_share"),
          children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            className: el.button,
            icon: reactJsxRuntimeCoreReexport.jsx(skillReceiveIconComponent.SkillReceiveIcon, {
              className: el.icon
            }),
            onClick: () => c == null ? undefined : c(),
            type: "quartary"
          })
        })]
      })]
    });
  };
  var threadImageTaskTypes = require("thread-image-task-types") /*id: 783900*/;
  var imageEditorPanel = require("image-editor-panel") /*id: 500691*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var chatSidebarLayoutLogic = require("chat-sidebar-layout-logic") /*id: 947890*/;
  let eg = reactCoreLibraryReexport.forwardRef((e, i) => {
    let {
      url: t,
      size: n,
      initialTool: o,
      handleCloseImageEditor: s,
      uri: c,
      show: d,
      handleInVisibleImageEditor: u,
      nodeId: p
    } = e;
    let m = i18nTranslationUtils.useTranslationWithFallback();
    let {
      token: _
    } = useParamsResolver.useParamsResolver();
    let h = driveAiShareOverviewStore.shareOverviewStore();
    let f = openAiSpaceShareLoginModal.useOpenAiSpaceShareLogin();
    let g = userInfoStatusSelectors.isUserInfoFailed();
    let {
      guestCanCreateThread: k,
      guestCanSendMessage: w
    } = h;
    let x = () => !!g && !!_ && (!k || !w) && (f == null || f(), true);
    let S = (e, i) => chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(t => t == null ? undefined : t.getUploader(e, i));
    let [I, T] = reactCoreLibraryReexport.useState({
      mask: undefined,
      mainPartUrl: undefined
    });
    let P = async () => {
      try {
        let {
          mask: e,
          without_background: i,
          url: n
        } = await apiServicesCollection.SamanthaApiService.ImageGetBackgroundMask({
          tos_key: c,
          is_from_local: false,
          url: t
        });
        if (i) {
          samanthaToastFactory.toastInstance.error({
            content: m("edit_image_skill_removeBG_toast_noBG"),
            showClose: false,
            theme: "light"
          });
        } else {
          T({
            mask: e,
            mainPartUrl: n
          });
        }
      } catch (e) {
        return;
      }
    };
    let C = e => {
      let {
        queryContent: i = {},
        text: r,
        useBoardCastChannel: o
      } = e;
      let s = [{
        text: r,
        reportParams: {
          scene: skillConstantsEnum.SceneType.SCENE_CANVAS_EDIT_IMAGE_SEND_MESSAGE,
          edit_image_function: threadImageTaskTypes.imageTaskTypes.Outpainting,
          is_upload_file: 0,
          canvas_type: "image",
          is_quote: 1,
          quote_type: "Image"
        },
        extraExt: {
          samantha_onboarding: JSON.stringify({
            type: "ai_space",
            value: JSON.stringify({
              share_id: _,
              node_id: p
            })
          }),
          input_skill: JSON.stringify({
            skill_id: aiAssistantSkillTypes.SkillTypes.SkillImageGen.toString(),
            skill_type: aiAssistantSkillTypes.SkillTypes.SkillImageGen
          }),
          answer_with_suggest: "0",
          samantha_context: JSON.stringify({
            query_context: {
              edit_image_url: t,
              edit_image_token: c,
              is_edit_local_image: true,
              is_edit_local_image_v2: "true",
              ...i
            }
          })
        }
      }];
      let d = {
        pluginId: aiActionConstants.aiActionConstants.AISPace_ImageEditorAction,
        payload: {
          boardCastEventName: "",
          message: null,
          uri: c,
          url: t,
          width: n.width,
          height: n.height
        },
        pfTrackParams: {
          startJumpTime: Date.now(),
          phase1EventName: "",
          phase2EventName: "",
          phase3EventName: "",
          phase4EventName: "",
          phaseNavEventName: "",
          phaseChatRenderEventName: ""
        }
      };
      if (o) {
        let e;
        let i = 0;
        let t = Date.now();
        let n = new BroadcastChannel(String(t));
        n.onmessage = i => {
          if (i.data.received) {
            n.close();
            clearInterval(e);
          }
        };
        e = setInterval(() => {
          if (i > 100) {
            n.close();
            clearInterval(e);
          }
          i++;
          n.postMessage({
            message: s
          });
        }, 200);
        d.payload.boardCastEventName = String(t);
      } else {
        d.payload.message = s;
      }
      window.open(xssContentSanitizer.sanitizeUrl(`https://${window.location.host}/chat/url-action?action=${encodeURIComponent(JSON.stringify(d))}&skeleton_type=${chatSidebarLayoutLogic.getChatLayoutState({
        isRightSideExpand: true
      }) || ""}`, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBZek5D-%Zre$Z-WmpNMHBx$ERKT2RtSllRblpp-lZaM$pFaE5kb*t5T1hSa$Z6bDF%REph-0dKSFZ-%mpTRXBzWkcxc2JH%j$NWFJpTWxKb1lrTT$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJzWTNrNWNHSlhSbT$h$Xp*c1drZHNNR0l6%1hWa1NFNDBX$mhL-m1SW$R%MD0"
      }), "_blank");
      if (u != null) {
        u();
      }
    };
    let j = () => {
      if (!x()) {
        C({
          queryContent: {
            ability: threadImageTaskTypes.imageTaskTypes.SuperResolution
          },
          text: m("edit_image_prompt_upScale")
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (i) {
        i.current = {
          handleImproveClarity: j
        };
      }
    }, [e]);
    if (t && d) {
      return reactJsxRuntimeCoreReexport.jsx(imageEditorPanel.ImageEditorPanel, {
        imgSrc: t,
        originalImageSrc: t,
        imageList: [],
        transitionStatus: "entered",
        width: n == null ? undefined : n.width,
        height: n == null ? undefined : n.height,
        format: "png",
        onImproveClariy: j,
        onOutPainting: (e, i, t, n) => {
          if (!x()) {
            C({
              queryContent: {
                top: e,
                bottom: i,
                left: t,
                right: n,
                ability: threadImageTaskTypes.imageTaskTypes.Outpainting
              },
              text: m("edit_image_prompt_outPainting")
            });
          }
        },
        onInpainting: function (e, i, t, {
          text: n
        } = {}) {
          if (!x()) {
            return new Promise(a => {
              let r = {
                ability: e === "erase" ? threadImageTaskTypes.imageTaskTypes.Smearing : e === "operateBackground" ? threadImageTaskTypes.imageTaskTypes.OperateBackground : threadImageTaskTypes.imageTaskTypes.Inpainting,
                mask: i
              };
              if (e === "erase") {
                C({
                  queryContent: r,
                  text: m("edit_image_prompt_erase"),
                  useBoardCastChannel: true
                });
                a(undefined);
              } else if (e === "operateBackground") {
                if (t) {
                  S("image").then(e => {
                    if (e != null) {
                      e.upload(t, {
                        complete(e) {
                          Object.assign(r, {
                            finished_image_token: e.uploadResult.Uri
                          });
                          C({
                            queryContent: r,
                            text: m("edit_image_skill_removeBG_generate"),
                            useBoardCastChannel: true
                          });
                          a(undefined);
                        }
                      });
                    }
                  });
                } else {
                  C({
                    queryContent: {
                      ability: threadImageTaskTypes.imageTaskTypes.Inpainting,
                      mask: i
                    },
                    text: m("edit_image_prompt_inPainting"),
                    useBoardCastChannel: true
                  });
                  a(undefined);
                }
              } else {
                C({
                  queryContent: r,
                  text: n || "",
                  useBoardCastChannel: true
                });
                a(undefined);
              }
            });
          }
        },
        onGetImagePreviewURL: () => "",
        onGetImageDownloadURL: () => "",
        trackParams: {},
        canvasLoading: false,
        t: m,
        initialTool: o,
        onInPatingCancel: s,
        onOutPatingCancel: s,
        backgroundMask: I == null ? undefined : I.mask,
        onGetBackrgroundMask: P,
        withoutBackgroundUrl: I == null ? undefined : I.mainPartUrl,
        onClearBackrgroundMask: () => T({
          mask: undefined,
          mainPartUrl: undefined
        })
      });
    } else {
      return null;
    }
  });
  eg.displayName = "ImageEditorWrapper";
  let ek = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        FilePreviewSDK: e
      } = await Promise.all([require.e("crypto-hashing-utilities") /*id: 35713*/, require.e("ui-tooltip-components") /*id: 20536*/, require.e("ui-core-utilities") /*id: 85276*/, require.e("ui-core-form-elements") /*id: 66784*/, require.e("webpack-chunk-icons-utils") /*id: 37204*/, require.e("file-preview-sdk-ui") /*id: 17043*/, require.e("stylis-emotion-css") /*id: 93537*/]).then(require.bind(require, "file-preview-sdk") /*id: 667727*/);
      return {
        default: e
      };
    }
  })));
  let ew = () => {
    var i;
    var S;
    let {
      token: I
    } = useParamsResolver.useParamsResolver();
    let L = reactCoreLibraryReexport.useRef();
    let W = I ? driveAiShareOverviewStore.shareOverviewStore : aiSpaceStoreManager.useAiSpaceStore;
    let {
      curMode: Z
    } = useAiSpaceDisplayMode.useDisplayMode();
    let {
      nodeInfoMap: Y
    } = W();
    let {
      filePreview: ee,
      closeFilePreview: ei
    } = mediaPreviewStore.mediaPreviewStore(e => ({
      filePreview: e.filePreview,
      closeFilePreview: e.closeFilePreview
    }));
    let {
      show: et,
      fileList: en,
      defaultIndex: ea
    } = ee;
    let [er, eo] = reactCoreLibraryReexport.useState(false);
    let [es, el] = reactCoreLibraryReexport.useState(ea);
    let [ec, eu] = reactCoreLibraryReexport.useState();
    let [ep, em] = reactCoreLibraryReexport.useState();
    let [e_, eh] = reactCoreLibraryReexport.useState();
    let [ef, ev] = reactCoreLibraryReexport.useState();
    let ew = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      el(ea);
    }, [ea]);
    reactCoreLibraryReexport.useEffect(() => {
      if (es !== undefined) {
        let t = es - 1;
        let n = es + 1;
        let r = [];
        if (en == null ? undefined : en[t]?.isImage) {
          let {
            uri: e
          } = en[t];
          r.push(e);
        }
        if (en == null ? undefined : en[n]?.isImage) {
          let {
            uri: e
          } = en[n];
          r.push(e);
        }
        r.forEach(e => {
          apiServicesCollection.SamanthaApiService.GetPreviewInfo({
            key: e,
            preview_type: previewConstants_1.PreviewType.Image
          }).then(e => {
            if (e == null ? undefined : e.data) {
              let i = e.data.main_url;
              if (i) {
                new Image().src = xssContentSanitizer.sanitizeUrl(i, null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBZek5D-%Zre$Z-WmpNMHBx$ERKT2RtSllRblpp-lZaM$pFaE5kb*t5T1hSa$Z6bDF%REph-0dKSFZ-%mpTRXBzWkcxc2JH%j$NWFJpTWxKb1lrTT$jR0p0$W14bFF6$XdZek5v-%dOdFpERmpkejA5"
                });
              }
            }
          });
        });
      }
    }, [es, en]);
    let ex = en[es];
    let eb = i18nTranslationUtils.useTranslationWithFallback();
    let ey = i18nextLanguageGetter.getCurrentLanguage();
    let eS = I ? null : aiSpaceShareActionFactory.useAiSpaceShareAction().createAiSpaceShare;
    let eI = openAiSpaceShareLoginModal.useOpenAiSpaceShareLogin();
    let eT = userInfoStatusSelectors.isUserInfoFailed();
    let eP = reactCoreLibraryReexport.useMemo(() => fileExtensionUtils.isPdfFile(getFileExtension.getFileExtension((ex == null ? undefined : ex.name) || (ex == null ? undefined : ex.key))), [ex]);
    let eC = reactCoreLibraryReexport.useMemo(() => fileExtensionUtils.isExcelFile(getFileExtension.getFileExtension((ex == null ? undefined : ex.name) || (ex == null ? undefined : ex.key))), [ex]);
    let ej = reactCoreLibraryReexport.useMemo(() => fileExtensionUtils.isWordDoc(getFileExtension.getFileExtension((ex == null ? undefined : ex.name) || (ex == null ? undefined : ex.key))), [ex]);
    let eA = reactCoreLibraryReexport.useMemo(() => fileExtensionUtils.isPptFile(getFileExtension.getFileExtension((ex == null ? undefined : ex.name) || (ex == null ? undefined : ex.key))), [ex]);
    let eN = reactCoreLibraryReexport.useMemo(() => fileExtensionUtils.isTextFile(getFileExtension.getFileExtension((ex == null ? undefined : ex.name) || (ex == null ? undefined : ex.key))), [ex]);
    let eE = reactCoreLibraryReexport.useMemo(() => fileExtensionUtils.isCsvFile(getFileExtension.getFileExtension((ex == null ? undefined : ex.name) || (ex == null ? undefined : ex.key))), [ex]);
    let eR = reactCoreLibraryReexport.useMemo(() => fileExtensionUtils.isMdFile(getFileExtension.getFileExtension((ex == null ? undefined : ex.name) || (ex == null ? undefined : ex.key))), [ex]);
    let eD = reactCoreLibraryReexport.useMemo(() => fileExtensionUtils.isArchive(getFileExtension.getFileExtension((ex == null ? undefined : ex.name) || (ex == null ? undefined : ex.key))), [ex]);
    let eF = reactCoreLibraryReexport.useMemo(() => fileExtensionUtils.isAppleDoc(getFileExtension.getFileExtension((ex == null ? undefined : ex.name) || (ex == null ? undefined : ex.key))), [ex]);
    let eM = ex == null ? undefined : ex.isImage;
    let e$ = eM && imageTypeValidator.isCommonImage({
      fileName: ex.name
    });
    let eL = !!(e_ == null ? undefined : e_.url);
    let eW = ex != null && !!ex.nodeId && !((i = Y[ex.nodeId]) === null || i === undefined ? undefined : i.operationStatus?.disable_share);
    let eZ = (ex == null ? undefined : ex.nodeId) ? Y[ex.nodeId]?.conversationId : "";
    let eG = (ex == null ? undefined : ex.nodeId) ? Y[ex.nodeId]?.aiGenerateType === businessLayoutConstants.Capability.AI && ((S = Y[ex.nodeId]) === null || S === undefined ? undefined : S.content?.createFrom) !== businessLayoutConstants.FileSource.from_share : "";
    let eJ = reactCoreLibraryReexport.useMemo(() => ({
      show_from: "preview",
      button_name: "read",
      type: eM ? "picture" : "file",
      folder_type: fileStateUtils.getSourceCategory(W),
      ...fileStateUtils.getFolderTabInfo(W),
      artifact_sec_type: fileStateUtils.getFileType(ex == null ? undefined : ex.name)
    }), [ex, eM]);
    let eq = reactCoreLibraryReexport.useMemo(() => eP || eA || ej || eF ? {
      pagination: er,
      zoomIn: er,
      zoomOut: er,
      download: true,
      share: !I && eW
    } : eC ? {
      pagination: er,
      zoomIn: false,
      zoomOut: false,
      download: true,
      share: !I && eW
    } : eM ? {
      pagination: false,
      zoomIn: er,
      zoomOut: er,
      download: true,
      share: !I && eW
    } : {
      download: true,
      share: !I && eW
    }, [eP, eC, ej, eA, eF, eM, I, er, eW]);
    let ez = (e, i, t) => {
      if (!e) {
        return;
      }
      let n = Y[e];
      if (!!n && !aiSpaceFileActionHandler.showFileReviewToast({
        node: n
      })) {
        if (eT && I) {
          eI();
          return;
        }
        aiSpaceFileActionHandler.handleFileAction(i, n, {
          needBindConversation: !I,
          initialEditTool: t == null ? undefined : t.initialEditTool
        });
      }
    };
    let eU = e => {
      if (eP || ej || eA || eF) {
        e.on(boxPreviewEventConstants.previewEventConstants.PDF_PAGE_NUMBER_TOTAL, e => {
          eu(e);
        });
        e.on(boxPreviewEventConstants.previewEventConstants.PDF_PAGE_NUMBER_UPDATED, e => {
          let {
            pageNumber: i
          } = e;
          em(i);
        });
      }
      e.on(boxPreviewEventConstants.previewEventConstants.RESOURCE_LOADED, () => {
        eo(true);
      });
      e.on(boxPreviewEventConstants.previewEventConstants.TRIGGER_COPY, () => {
        teaAnalyticsEventTracker.trackEvent("right_click_copy");
      });
    };
    let eB = () => {
      eu(0);
      em(0);
    };
    let eO = () => {
      eB();
      ei();
      el(undefined);
      eh(undefined);
      ev(undefined);
    };
    let eV = [];
    let eH = async function (e) {
      let i = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let t = await aiSpaceFileUrlResolver.resolveFileUrls([ex.nodeId], I);
      let n = t == null ? undefined : t[ex.nodeId];
      if (n) {
        let t = await M({
          url: n
        });
        eh({
          url: n,
          size: t,
          initialTool: e || imageEditModes.editModes.default,
          uri: ex.uri,
          show: i,
          nodeId: ex.nodeId
        });
      }
    };
    if (ej) {
      eV = [{
        comp: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          className: G["aiskill-wrapper"],
          onClick: () => {
            ez(ex.nodeId, aiActionConstants.aiActionConstants.AISpace_WordFileAIRead);
            teaAnalyticsEventTracker.trackEvent("file_function_click", {
              ...eJ,
              button_name: "read"
            });
          },
          type: "quartary",
          icon: reactJsxRuntimeCoreReexport.jsx(rtlChatSparkleIcon_1.RtlChatSparkleIcon, {
            className: G["aiskill-icon"]
          }),
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: G["aiskill-name"],
            children: eb("aispace_ai_reading")
          })
        })
      }];
    } else if (eP) {
      eV = [{
        comp: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          className: G["aiskill-wrapper"],
          onClick: () => {
            ez(ex.nodeId, aiActionConstants.aiActionConstants.AISpace_FileAIRead);
            teaAnalyticsEventTracker.trackEvent("file_function_click", {
              ...eJ,
              button_name: "read"
            });
          },
          type: "quartary",
          icon: reactJsxRuntimeCoreReexport.jsx(rtlChatSparkleIcon_1.RtlChatSparkleIcon, {
            className: G["aiskill-icon"]
          }),
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: G["aiskill-name"],
            children: eb("aispace_ai_reading")
          })
        })
      }];
    } else if (eM) {
      let e = ef && (ef == null ? undefined : ef.naturalHeight) < 4096 && (ef == null ? undefined : ef.naturalWidth) < 4096;
      let i = e$ ? I ? eb("aispace_image_tooltip_saveBeforeUse") : "" : eb("aispace_image_tooltip_formatUnsupported");
      let t = !e$ || !!I;
      eV = [{
        comp: reactJsxRuntimeCoreReexport.jsx(q, {
          type: imageEditModes.editModes.erase,
          name: eb("edit_image_skill_erase"),
          disabled: t,
          disableText: i,
          onClick: async () => {
            try {
              await eH(imageEditModes.editModes.erase);
            } catch (e) {}
            teaAnalyticsEventTracker.trackEvent("file_function_click", {
              ...eJ,
              button_name: "smearing"
            });
          }
        })
      }, {
        comp: reactJsxRuntimeCoreReexport.jsx(q, {
          type: imageEditModes.editModes.inPainting,
          name: eb("edit_image_skill_inPainting"),
          disabled: t,
          disableText: i,
          onClick: async () => {
            try {
              await eH(imageEditModes.editModes.inPainting);
            } catch (e) {}
            teaAnalyticsEventTracker.trackEvent("file_function_click", {
              ...eJ,
              button_name: "inpainting"
            });
          }
        })
      }, {
        comp: reactJsxRuntimeCoreReexport.jsx(q, {
          type: imageEditModes.editModes.outPainting,
          name: eb("edit_image_skill_outPainting"),
          disabled: t,
          disableText: i,
          onClick: async () => {
            try {
              await eH(imageEditModes.editModes.outPainting);
            } catch (e) {}
            teaAnalyticsEventTracker.trackEvent("file_function_click", {
              ...eJ,
              button_name: "outPainting"
            });
          }
        })
      }, !!e && {
        comp: reactJsxRuntimeCoreReexport.jsx(q, {
          type: imageEditModes.editModes.enhanceResolution,
          name: eb("edit_image_skill_upScale"),
          disabled: t,
          disableText: i,
          onClick: async () => {
            try {
              await eH(imageEditModes.editModes.enhanceResolution, false);
              setTimeout(() => {
                var e;
                if ((e = ew.current) !== null && e !== undefined) {
                  e.handleImproveClarity();
                }
              }, 100);
            } catch (e) {}
            teaAnalyticsEventTracker.trackEvent("file_function_click", {
              ...eJ,
              button_name: "enhanceResolution"
            });
          }
        })
      }, {
        comp: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          className: G["aiskill-wrapper"],
          onClick: () => {
            if (eG) {
              window.open(xssContentSanitizer.sanitizeUrl(`${window.location.origin}/chat/${eZ}`, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBZek5D-%Zre$Z-WmpNMHBx$ERKT2RtSllRblpp-lZaM$pFaE5kb*t5T1hSa$Z6bDF%REph-0dKSFZ-%mpTRXBzWkcxc2JH%j$NWFJpTWxKb1lrTT$jR0p0$W14bFF6$XdZek5v-%dOdFpERmpkejA5"
              }), "_blank");
            } else {
              ez(ex.nodeId, aiActionConstants.aiActionConstants.AISpace_ImageAskDoubao);
              teaAnalyticsEventTracker.trackEvent("file_function_click", {
                ...eJ,
                button_name: "ask_doubao"
              });
            }
          },
          type: "quartary",
          icon: reactJsxRuntimeCoreReexport.jsx(aiGuidanceRtlIcon.AiGuidanceRtlIcon, {
            className: G["aiskill-icon"]
          }),
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: G["aiskill-name"],
            children: eb(eG ? "aispace_menuOption_openChat" : "aispace_ask_duola")
          })
        })
      }].filter(Boolean);
    } else if (eC) {
      eV = [{
        comp: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          className: G["aiskill-wrapper"],
          onClick: () => {
            ez(ex.nodeId, aiActionConstants.aiActionConstants.AISpace_ExcelCodeInterpreter);
            teaAnalyticsEventTracker.trackEvent("file_function_click", {
              ...eJ,
              button_name: "code_interpreter"
            });
          },
          icon: reactJsxRuntimeCoreReexport.jsx(editPencilOutlinedIcon.EditPencilOutlinedIcon, {
            className: G["aiskill-icon"]
          }),
          type: "quartary",
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: G["aiskill-name"],
            children: eb("skill_dataAnalysis_title")
          })
        })
      }, {
        comp: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          className: G["aiskill-wrapper"],
          onClick: () => {
            ez(ex.nodeId, aiActionConstants.aiActionConstants.AISpace_ExcelAIRead);
            teaAnalyticsEventTracker.trackEvent("file_function_click", {
              ...eJ,
              button_name: "ask_doubao"
            });
          },
          type: "quartary",
          icon: reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1.RtlIcon, {
            className: G["aiskill-icon"]
          }),
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: G["aiskill-name"],
            children: eb("aispace_ask_duola")
          })
        })
      }];
    } else if (eA) {
      eV = [{
        comp: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          className: G["aiskill-wrapper"],
          onClick: () => {
            ez(ex.nodeId, aiActionConstants.aiActionConstants.AISpace_FileAskDoubao);
            teaAnalyticsEventTracker.trackEvent("file_function_click", {
              ...eJ,
              button_name: "ask_doubao"
            });
          },
          icon: reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1.RtlIcon, {
            className: G["aiskill-icon"]
          }),
          type: "quartary",
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: G["aiskill-name"],
            children: eb("aispace_ask_duola")
          })
        })
      }];
    } else if (eN || eR) {
      eV = [{
        comp: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          className: G["aiskill-wrapper"],
          onClick: () => {
            ez(ex.nodeId, aiActionConstants.aiActionConstants.AISpace_FileAskDoubao);
            teaAnalyticsEventTracker.trackEvent("file_function_click", {
              ...eJ,
              button_name: "ask_doubao"
            });
          },
          icon: reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1.RtlIcon, {
            className: G["aiskill-icon"]
          }),
          type: "quartary",
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: G["aiskill-name"],
            children: eb("aispace_ask_duola")
          })
        })
      }];
    } else if (eE) {
      eV = [{
        comp: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          className: G["aiskill-wrapper"],
          onClick: () => {
            ez(ex.nodeId, aiActionConstants.aiActionConstants.AISpace_FileAskDoubao);
            teaAnalyticsEventTracker.trackEvent("file_function_click", {
              ...eJ,
              button_name: "ask_doubao"
            });
          },
          icon: reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1.RtlIcon, {
            className: G["aiskill-icon"]
          }),
          type: "quartary",
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: G["aiskill-name"],
            children: eb("aispace_ask_duola")
          })
        })
      }, {
        comp: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          className: G["aiskill-wrapper"],
          onClick: () => {
            ez(ex.nodeId, aiActionConstants.aiActionConstants.AISpace_ExcelCodeInterpreter);
            teaAnalyticsEventTracker.trackEvent("file_function_click", {
              ...eJ,
              button_name: "ask_doubao"
            });
          },
          icon: reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1.RtlIcon, {
            className: G["aiskill-icon"]
          }),
          type: "quartary",
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: G["aiskill-name"],
            children: eb("skill_dataAnalysis_title")
          })
        })
      }];
    }
    reactCoreLibraryReexport.useEffect(() => {
      let e = function (e) {
        if (e.key === "Escape" || e.keyCode === 27) {
          eO();
        }
      };
      document.addEventListener("keydown", e);
      return () => {
        document.removeEventListener("keydown", e);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!isNaN(es)) {
        let i = en[es]?.nodeId;
        if (!i) {
          return;
        }
        let t = Y[i];
        teaAnalyticsEventTracker.trackEvent("file_function_show", {
          collection_id: ex.nodeId,
          collection_name: ex.name,
          folder_type: fileStateUtils.getSourceCategory(W),
          type: fileEntityConstants.layoutItemIconMap[t == null ? undefined : t.nodeType],
          show_from: "preview",
          ...fileStateUtils.getFolderTabInfo(W),
          if_multiple_choose: 0,
          artifact_type: 1,
          page_token: t == null ? undefined : t.key,
          artifact_sec_type: fileStateUtils.getFileType(ex.name)
        });
      }
    }, [es]);
    let eX = () => {
      eh(undefined);
    };
    if (et && (en == null ? undefined : en.length) && es !== undefined && es >= 0) {
      return reactJsxRuntimeCoreReexport.jsxs(modalConfirmDialogManager.ModalConfirmDialog, {
        className: s([G["modal-wrapper"], Z === "thumbnail_time" ? G["image-modal-wrapper"] : G["normal-modal-wrapper"]]),
        visible: true,
        width: "100vw",
        height: "100vh",
        header: null,
        footer: null,
        style: {
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          onDragEnter: e => {
            e.preventDefault();
            e.stopPropagation();
          },
          onDragOver: e => {
            e.preventDefault();
            e.stopPropagation();
          },
          onDragLeave: e => {
            e.preventDefault();
            e.stopPropagation();
          },
          onDrop: e => {
            e.preventDefault();
            e.stopPropagation();
          },
          className: G["modal-content-wrapper"],
          children: [reactJsxRuntimeCoreReexport.jsx(ed, {
            isImage: eM,
            aiSkillList: eV,
            fileName: ex == null ? undefined : ex.name,
            toolConfig: eq,
            onClose: eO,
            onPrevPage: () => {
              if (L.current) {
                L.current.setPDFToPrevPage();
              }
            },
            onNextPage: () => {
              if (L.current) {
                L.current.setPDFToNextPage();
              }
            },
            onZoomIn: () => {
              if (L.current) {
                if (eP || ej || eA || eF) {
                  L.current.triggerPDFZoomin();
                } else if (eM) {
                  L.current.triggerImageZoomIn();
                }
              }
            },
            onZoomOut: () => {
              if (L.current) {
                if (eP || ej || eA || eF) {
                  L.current.triggerPDFZoomout();
                } else if (eM) {
                  L.current.triggerImageZoomOut();
                }
              }
            },
            onDownload: () => {
              let e = {
                uri: ex.uri,
                name: ex.name,
                type: eM ? "image" : "file",
                nodeId: ex.nodeId
              };
              aiSpaceBatchDownload.batchFileDownload([e], I);
              teaAnalyticsEventTracker.trackEvent("file_function_click", {
                ...eJ,
                button_name: "download"
              });
            },
            onShare: () => {
              let e = Y[ex.nodeId];
              let i = fileEntityTypeMapper.convertNodeList(e ? [e] : [], !!I);
              if (eS != null) {
                eS({
                  selectedNodeIds: [e == null ? undefined : e.id],
                  selectedFiles: i
                });
              }
              teaAnalyticsEventTracker.trackEvent("file_function_click", {
                ...eJ,
                button_name: "share"
              });
            },
            paginationInfo: {
              curPage: ep,
              totalPage: ec
            }
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: eP || ej || eA || eF ? G["preview-sdk-wrapper-pdf"] : eC || eR || eE || eN || eD ? G["preview-sdk-wrapper-excel"] : eM ? G["preview-sdk-wrapper-image"] : G["preview-sdk-wrapper-normal"],
            children: [es !== 0 && en.length > 1 && !eL && reactJsxRuntimeCoreReexport.jsx("div", {
              className: G["left-button"],
              onClick: () => {
                if (es !== 0) {
                  el(es - 1);
                  eB();
                  eo(false);
                  eX();
                  ev(undefined);
                }
              },
              children: reactJsxRuntimeCoreReexport.jsx(arrowLeftRtlIcon.ArrowLeftRtlIcon, {
                className: "w-24"
              })
            }), es < en.length - 1 && en.length > 1 && !eL && reactJsxRuntimeCoreReexport.jsx("div", {
              className: G["right-button"],
              onClick: () => {
                if (es !== en.length - 1) {
                  el(es + 1);
                  eB();
                  eo(false);
                  eX();
                  ev(undefined);
                }
              },
              children: reactJsxRuntimeCoreReexport.jsx(arrowRightIconSvg.ArrowRightIcon, {
                className: "w-24"
              })
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: eP || ej || eA || eF ? G["preview-sdk-pdf"] : eC || eR || eE || eN || eD ? G["preview-sdk-excel"] : eM ? G["preview-sdk-image"] : G["preview-sdk-normal"],
              style: {
                display: (e_ == null ? undefined : e_.url) && (e_ == null ? undefined : e_.show) ? "none" : ""
              },
              children: reactJsxRuntimeCoreReexport.jsx(ek, {
                boxPreviewContentClassName: G["preview-sdk"],
                boxPreviewLoadingClassName: G["preview-loading"],
                pdfEnableScrollBar: false,
                onEventBusReady: e => {
                  if (e) {
                    L.current = e;
                    eU(e);
                  }
                },
                useFastPDF: false,
                pdfToolbarConfig: [],
                imageToolbarConfig: [],
                withHeader: false,
                fileToken: ex.uri,
                fileInfoMeta: {
                  name: ex.name,
                  size: Number(ex.size),
                  fileType: eM ? "image" : "file"
                },
                fileInfoReqMeta: {
                  scene: w.aispace,
                  node_id: ex.nodeId,
                  share_id: I
                },
                languageType: ey,
                userId: "",
                pdfDefaultZoomValue: fileTypeConstants_1.zoomModes.AUTO,
                renderImageCommentWrapper: e => e({
                  handleImageViewed: e => {
                    ev({
                      naturalHeight: e.naturalHeight,
                      naturalWidth: e.naturalWidth,
                      previewUrl: e.previewUrl
                    });
                  }
                })
              })
            })]
          })]
        }), !!(e_ == null ? undefined : e_.url) && reactJsxRuntimeCoreReexport.jsx("div", {
          className: G["image-editor-wrapper"],
          style: {
            display: (e_ == null ? undefined : e_.show) ? "" : "none"
          },
          children: reactJsxRuntimeCoreReexport.jsx(eg, {
            ...e_,
            uri: ex.uri,
            handleCloseImageEditor: eX,
            handleInVisibleImageEditor: () => {
              eh(e => e ? {
                ...e,
                show: false
              } : undefined);
            },
            ref: ew
          })
        })]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    FilePreviewModal: function () {
      return ew;
    }
  });
}