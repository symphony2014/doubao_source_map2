// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatPptCardSymbol'
// - Resolved require(774446) to 'chat-ppt-card-symbol'
// - Renamed variable 'r' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'uuidGeneratorUtil'
// - Resolved require(641535) to 'uuid-generator-util'
// - Renamed variable 'l' to 'chatCanvasPlugin'
// - Resolved require(533520) to 'chat-canvas-plugin'
// - Renamed variable 's' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'c' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'd' to 'imageThinkingComponent'
// - Resolved require(602617) to 'image-thinking-component'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable '_' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'm' to 'storageFeatureGateParser'
// - Resolved require(696334) to 'storage-feature-gate-parser'
// - Renamed variable 'v' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'f' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'p' to 'chatUserInfoActions'
// - Resolved require(400206) to 'chat-user-info-actions'
// - Renamed variable 'h' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable 'g' to 'rtlChatSparkleIcon'
// - Resolved require(944755) to 'rtl-chat-sparkle-icon'
// - Renamed variable 'b' to 'pptArtifactPreviewCanvas_1'
// - Resolved require(677148) to 'ppt-artifact-preview-canvas_1'
// - Renamed variable 'y' to 'pptCardStyles'
// - Resolved require(149738) to 'ppt-card-styles'
// - Renamed variable 'w' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Tu' to 'getSourceValue' (module 583867)
// - Updated imported property 'a8' to 'featureGateKeys' (module 696334)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'W' to 'ChatCanvasPlugin' (module 533520)
// - Updated imported property 'q' to 'pptCanvasSymbol' (module 677148)
// - Updated imported property 'Z' to 'generateUuid' (module 641535)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'Z' to 'pptCardStyles' (module 149738)
// - Updated imported property 'n5' to 'getUserIdStr' (module 400206)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'pJ' to 'toastInstance' (module 697541)
// - Updated imported property 'Z' to 'RtlChatSparkleIcon' (module 944755)
// - Updated imported property 'P' to 'ImageThinkingView' (module 602617)
// - Updated imported property 'W' to 'receivePptCardId' (module 774446)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 173986
         */
module.exports = function (module, exports, require) {
  var chatPptCardSymbol = require("chat-ppt-card-symbol") /*id: 774446*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var chatCanvasPlugin = require("chat-canvas-plugin") /*id: 533520*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var imageThinkingComponent = require("image-thinking-component") /*id: 602617*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var rtlChatSparkleIcon = require("rtl-chat-sparkle-icon") /*id: 944755*/;
  var pptArtifactPreviewCanvas_1 = require("ppt-artifact-preview-canvas_1") /*id: 677148*/;
  var pptCardStyles = require("ppt-card-styles") /*id: 149738*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = function (e) {
    let {
      message: E,
      onClickCard: R
    } = e;
    let T = i18nTranslationUtils.useTranslationWithFallback();
    let j = reactCoreLibraryReexport.useRef(null);
    let N = chatFgStoreHooks.getSourceValue(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage,
      defaultValue: false
    });
    if (!messageContentTypeAndStatusChecker.C3X(E)) {
      return null;
    }
    let P = Number((E == null ? undefined : E.content_obj?.ppt_id) ?? 0);
    let I = E == null ? undefined : E.content_obj?.cover_url;
    let $ = E == null ? undefined : E.content_obj?.status;
    let M = $ === chatAppEnums.AiPPTDetailStatusEnum.Init || !$;
    let A = $ === chatAppEnums.AiPPTDetailStatusEnum.Success;
    let F = $ === chatAppEnums.AiPPTDetailStatusEnum.Error || $ === chatAppEnums.AiPPTDetailStatusEnum.Cancel;
    let O = $ === chatAppEnums.AiPPTDetailStatusEnum.Delete;
    return reactJsxRuntimeCoreReexport.jsx(chatCanvasPlugin.ChatCanvasPlugin, {
      ref: j,
      pluginIdentifier: pptArtifactPreviewCanvas_1.pptCanvasSymbol,
      canvasContent: {
        pptShowProps: {
          id: uuidGeneratorUtil.generateUuid(),
          initalMode: "view",
          pptId: P,
          onClose: () => {
            chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
          },
          coverUrl: I
        }
      },
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: pptCardStyles.pptCardStyles["ppt-card-container"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: pptCardStyles.pptCardStyles.intro,
          children: T("skill_aippt_pptCard_leading_content")
        }), reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: (A || O) && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: pptCardStyles.pptCardStyles["ppt-card"],
            onClick: () => {
              var n;
              if (E == null ? undefined : E.message_id) {
                if (R) {
                  R({
                    pptId: P,
                    coverUrl: I,
                    status: $
                  });
                }
                if (chatUserInfoActions.getUserIdStr() !== String(E == null ? undefined : E.content_obj?.creator_id)) {
                  window.open(xssContentSanitizer.sanitizeUrl(E == null ? undefined : E.content_obj?.share_url, null, {
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
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWTBoQ01Fd3p%bmxaZ$RscFlWaHZkRmt5T1hSalJ6bDFXb*MxT%$3elNteFpNbFp3Wkcx$mRHTklRakJN$jA1MlltN$NiR0p1$$haaFZ6$nJXb*huZFdSS$Rq%lpXRXB1WkZoTlBRPT0"
                  }));
                  return;
                }
                if (O) {
                  samanthaToastFactory.toastInstance.error({
                    content: T("skill_aippt_pptCard_status_deleted_click_toast"),
                    showClose: false,
                    theme: "light"
                  });
                } else if ((n = j.current) !== null && n !== undefined) {
                  n.open();
                }
              }
            },
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: pptCardStyles.pptCardStyles.top,
              children: [reactJsxRuntimeCoreReexport.jsx(rtlChatSparkleIcon.RtlChatSparkleIcon, {
                className: "text-18"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: pptCardStyles.pptCardStyles.title,
                children: E == null ? undefined : E.content_obj?.title
              })]
            }), reactJsxRuntimeCoreReexport.jsx("img", {
              className: pptCardStyles.pptCardStyles.img,
              src: xssContentSanitizer.sanitizeUrl(E == null ? undefined : E.content_obj?.cover_url, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWTBoQ01Fd3p%bmxaZ$RscFlWaHZkRmt5T1hSalJ6bDFXb*MxT%$3elNteFpNbFp3Wkcx$mRHTklRakJN$jA1MlltN$NiR0p1$$haaFZ6$nJXb*huZFdSS$Rq%lpXRXB1WkZoTlBRPT0"
              })
            })]
          })
        }), reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: M && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: pptCardStyles.pptCardStyles["ppt-card"],
            onClick: () => {
              samanthaToastFactory.toastInstance.warning({
                content: T("skill_aippt_pptCard_status_generating_click_toast"),
                showClose: false,
                theme: "light"
              });
            },
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: pptCardStyles.pptCardStyles.top,
              children: [reactJsxRuntimeCoreReexport.jsx(rtlChatSparkleIcon.RtlChatSparkleIcon, {
                className: "text-18 text-s-color-text-tertiary"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: pptCardStyles.pptCardStyles["thinking-text"],
                children: T("skill_aippt_pptCard_status_generating")
              })]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: pptCardStyles.pptCardStyles.thinking,
              children: reactJsxRuntimeCoreReexport.jsx(imageThinkingComponent.ImageThinkingView, {
                mode: N ? "dark" : "light"
              })
            })]
          })
        }), reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: F && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: pptCardStyles.pptCardStyles.failed,
              children: [reactJsxRuntimeCoreReexport.jsx(rtlChatSparkleIcon.RtlChatSparkleIcon, {
                className: "text-18 text-s-color-text-disable"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: pptCardStyles.pptCardStyles["failed-text"],
                children: E == null ? undefined : E.content_obj?.title
              })]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: pptCardStyles.pptCardStyles["error-text"],
              children: T("skill_aippt_pptCard_status_generation_failed")
            })]
          })
        })]
      })
    });
  };
  function x(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class S {
    constructor() {
      x(this, "pluginIdentifier", chatPptCardSymbol.receivePptCardId);
      x(this, "Content", k);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceivePPTCardPlugin: function () {
      return S;
    }
  });
}