// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'AiSpaceImagePreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 872720
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var aiSpaceEventReporter = require("ai-space-event-reporter") /*id: 946482*/;
  var fileTypeValidator = require("file-type-validator") /*id: 389540*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var imagePreviewGroup = require("image-preview-group") /*id: 428656*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlSettingsIconComponent = require("rtl-settings-icon-component") /*id: 996282*/;
  var aiCreationGuidanceIcon_1 = require("ai-creation-guidance-icon_1") /*id: 68132*/;
  var aiGuidanceRtlIcon = require("ai-guidance-rtl-icon") /*id: 682496*/;
  var rtlSearchIcon_1 = require("rtl-search-icon_1") /*id: 547696*/;
  var addCircleIcon_1 = require("add-circle-icon_1") /*id: 5067*/;
  var useParamsResolver = require("use-params-resolver") /*id: 790576*/;
  var aiSpaceFileActionHandler = require("ai-space-file-action-handler") /*id: 90817*/;
  var mediaPreviewStore = require("media-preview-store") /*id: 28049*/;
  var aiSpaceStoreManager = require("ai-space-store-manager") /*id: 798389*/;
  var driveAiShareOverviewStore = require("drive-ai-share-overview-store") /*id: 262375*/;
  var openAiSpaceShareLoginModal = require("open-ai-space-share-login-modal") /*id: 837937*/;
  var fileStateUtils = require("file-state-utils") /*id: 88691*/;
  var I = {
    "image-preview-controls-wrapper": "image-preview-controls-wrapper-T_07MV",
    "image-preview-title": "image-preview-title-MD7uGY",
    "image-preview-span": "image-preview-span-Stp07d",
    "image-preview-zoom": "image-preview-zoom-z8rYSL"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let P = () => {
    let {
      token: e
    } = useParamsResolver.useParamsResolver();
    let i = e ? driveAiShareOverviewStore.shareOverviewStore : aiSpaceStoreManager.useAiSpaceStore;
    let {
      nodeInfoMap: t
    } = i();
    let {
      imagePreview: P,
      closeImagePreview: C
    } = mediaPreviewStore.mediaPreviewStore();
    let {
      show: j,
      imageList: A,
      defaultIndex: N
    } = P;
    let E = i18nTranslationUtils.useTranslationWithFallback();
    let R = openAiSpaceShareLoginModal.useOpenAiSpaceShareLogin();
    let D = userInfoStatusSelectors.isUserInfoFailed();
    let F = (n, a) => {
      teaAnalyticsEventTracker.trackEvent("file_function_click", {
        show_from: "in_pic",
        button_name: a === aiActionConstants.aiActionConstants.AISpace_ImageAskDoubao ? "ask_doubao" : a === aiActionConstants.aiActionConstants.AISpace_ImageCreate ? "images_generation" : "images_edit",
        folder_tab: fileStateUtils.getFolderTabInfo(i)
      });
      if (!n) {
        return;
      }
      let o = t[n];
      if (!!o && !aiSpaceFileActionHandler.showFileReviewToast({
        node: o
      })) {
        if (D && e) {
          R();
          return;
        }
        if (a === aiActionConstants.aiActionConstants.AISpace_ImageAskDoubao) {
          aiSpaceFileActionHandler.openFileInAiSpace(o);
        } else {
          aiSpaceFileActionHandler.handleFileAction(a, o, {
            needBindConversation: !e,
            shareId: e
          });
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (j) {
        teaAnalyticsEventTracker.trackEvent("pic_show");
      }
    }, [j]);
    reactCoreLibraryReexport.useEffect(() => {
      if (j && A.length) {
        let e = A == null ? undefined : A[N];
        if (e) {
          aiSpaceEventReporter.reportFileOpen({
            nodeId: e.nodeId
          });
        }
      }
    }, [j && A.length]);
    if (j && A.length) {
      return reactJsxRuntimeCoreReexport.jsx(imagePreviewGroup.ImagePreviewGroup, {
        visible: true,
        defaultCurrentIndex: N,
        src: xssContentSanitizer.sanitizeUrl(A.map(e => e.url), null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBZek5D-%Zre$Z-WmpNMHBx$ERKT2RtSllRblpp-lZaM$pFaE5kb*t5T1hSa$Z6bDF%REpzZEZsWFpHeE1XR%o1$2xo-WN*cFlZM1po$npWcldsa*5k$1JJ$*pSWldFcH$aRmhO%FE9PQ"
        }),
        onChange: e => {
          let i = A[e];
          if (i) {
            aiSpaceEventReporter.reportFileOpen({
              nodeId: i.nodeId
            });
          }
        },
        renderPreviewMenu: e => {
          let {
            curPage: i,
            onZoomIn: t,
            onZoomOut: n
          } = e;
          let a = A[i - 1];
          let o = a == null ? undefined : a.name;
          let l = fileTypeValidator.isSupportedFile(o);
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: I["image-preview-controls-wrapper"],
            children: [o && reactJsxRuntimeCoreReexport.jsx("div", {
              className: I["image-preview-title"],
              children: o
            }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              type: "quartary",
              style: {
                fontSize: "12px",
                opacity: l ? 1 : 0.5
              },
              icon: reactJsxRuntimeCoreReexport.jsx(rtlSettingsIconComponent.RtlSettingsIcon, {}),
              disabled: !l,
              children: reactJsxRuntimeCoreReexport.jsx("span", {
                className: I["image-preview-span"],
                onClick: () => F(a.nodeId, aiActionConstants.aiActionConstants.AISpace_ImageCreate),
                children: E("aispace_ai_generate_image")
              })
            }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              type: "quartary",
              style: {
                fontSize: "12px",
                opacity: l ? 1 : 0.5
              },
              icon: reactJsxRuntimeCoreReexport.jsx(aiCreationGuidanceIcon_1.AiCreationGuidanceIcon, {}),
              onClick: () => F(a.nodeId, aiActionConstants.aiActionConstants.AISpace_ImageEdit),
              disabled: !l,
              children: reactJsxRuntimeCoreReexport.jsx("span", {
                className: I["image-preview-span"],
                children: E("aispace_ai_edit_image")
              })
            }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              type: "quartary",
              style: {
                fontSize: "12px",
                opacity: l ? 1 : 0.5
              },
              icon: reactJsxRuntimeCoreReexport.jsx(aiGuidanceRtlIcon.AiGuidanceRtlIcon, {}),
              onClick: () => F(a.nodeId, aiActionConstants.aiActionConstants.AISpace_ImageAskDoubao),
              disabled: !l,
              children: reactJsxRuntimeCoreReexport.jsx("span", {
                className: I["image-preview-span"],
                children: E("aispace_ask_duola")
              })
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: I["image-preview-zoom"],
              children: reactJsxRuntimeCoreReexport.jsx(rtlSearchIcon_1.SearchRtlIcon, {
                onClick: n
              })
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: I["image-preview-zoom"],
              children: reactJsxRuntimeCoreReexport.jsx(addCircleIcon_1.AddCircleIcon, {
                onClick: t
              })
            })]
          });
        },
        onClose: C,
        closeOnEsc: true,
        maskClosable: true
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    AiSpaceImagePreview: function () {
      return P;
    }
  });
}