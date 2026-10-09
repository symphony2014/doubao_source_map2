// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'AsyncSkillContentBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 491399
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var animatePresenceCore = require("animate-presence-core") /*id: 661587*/;
  var motionComponentFactory_1_1 = require("motion-component-factory_1_1") /*id: 516730*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var initializeModuleInstance = require("initialize-module-instance") /*id: 233913*/;
  var chatInputConstants = require("chat-input-constants") /*id: 918547*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var protocolMessageConstants = require("protocol-message-constants") /*id: 444681*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var codingSkillChatInput_1 = require("coding-skill-chat-input_1") /*id: 965068*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useMultiClickHook = require("use-multi-click-hook") /*id: 398816*/;
  var animationDebugContext = require("animation-debug-context") /*id: 60445*/;
  var animationDebugControls = require("animation-debug-controls") /*id: 850149*/;
  var carouselStepNavigationControl = require("carousel-step-navigation-control") /*id: 77292*/;
  var thinkingBoxRootComponent = require("thinking-box-root-component") /*id: 465166*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var conversationCreationUtils = require("conversation-creation-utils") /*id: 287485*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var searchImageBlockComponent = require("search-image-block-component") /*id: 691965*/;
  var thinkingBoxToolCall = require("thinking-box-tool-call") /*id: 114415*/;
  var samanthaImagePreviewGallery = require("samantha-image-preview-gallery") /*id: 927160*/;
  var rtlImageIconComponent = require("rtl-image-icon-component") /*id: 267266*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let Z = () => reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
    wrapperClassName: "spin-bvYuI0",
    size: "small"
  });
  var F = {
    group: "group-sylCe0",
    expand: "expand-NLiVcp",
    "tool-preview-icon": "tool-preview-icon-uqm267",
    toolPreviewIcon: "tool-preview-icon-uqm267",
    bubble: "bubble-K84W5N",
    image: "image-zCsf85",
    title: "title-BLGzpl",
    images: "images-qaJOm3",
    search: "search-ePNdUI",
    "search-tool": "search-tool-uZ9nrQ",
    searchTool: "search-tool-uZ9nrQ",
    icon: "icon-CiyEEF",
    brief: "brief-yUyd_M",
    "tool-loading-icon": "tool-loading-icon-etlkVf",
    toolLoadingIcon: "tool-loading-icon-etlkVf",
    caption: "caption-uUVrt9",
    "image-box": "image-box-RpLtZ4",
    imageBox: "image-box-RpLtZ4",
    more: "more-H1mqvV",
    error: "error-x08Mox",
    num: "num-BHRd7l",
    result: "result-NSVJmI",
    output: "output-LTJZUO",
    spin: "spin-TZd_Xu"
  };
  function W(e) {
    let {
      content: t,
      className: n,
      style: i
    } = e;
    let {
      content_obj: r,
      is_finish: o
    } = t;
    let {
      images: l = [],
      summary: a
    } = r;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s(n),
      style: i,
      children: [reactJsxRuntimeCoreReexport.jsx(thinkingBoxToolCall.ToolCallItem, {
        data: {
          clickable: false,
          name: a,
          id: t.id,
          leadingIcon: o ? reactJsxRuntimeCoreReexport.jsx(rtlImageIconComponent.ImageRtlIcon, {}) : reactJsxRuntimeCoreReexport.jsx(Z, {}),
          type: "tool-call"
        }
      }), o && reactJsxRuntimeCoreReexport.jsx("div", {
        className: s(F.output, {
          [F["min-height"]]: o
        }),
        children: l.length > 0 && reactJsxRuntimeCoreReexport.jsx(D, {
          images: l.map(e => ({
            id: e.id,
            thumb_url: e.thumb_url,
            uri: e.uri
          }))
        })
      })]
    });
  }
  function D(e) {
    let {
      images: t,
      maxVisible: n = 5
    } = e;
    if (!(n >= 1)) {
      n = 5;
    }
    let [r, o] = reactCoreLibraryReexport.useState(false);
    let [l, a] = reactCoreLibraryReexport.useState(0);
    let c = reactCoreLibraryReexport.useCallback(() => {
      if (t.length <= n) {
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: t.map((e, t) => reactJsxRuntimeCoreReexport.jsx("img", {
            className: F.image,
            src: xssContentSanitizer.sanitizeUrl(e.thumb_url, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t5T1d0aFZ6$n$%RmRH-mxwWE5%Qk1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d6$W5aa%1uaDZ%REpr-kdKcE1-QmlWMFp1$2xNNWNHSnR$bXhs%Xp$d1l6Tm9hR050WkR*amR6MDk"
            }),
            onClick: () => {
              o(true);
              a(t);
            }
          }, e.id))
        });
      }
      let e = n - 1;
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [t.slice(0, e).map((e, t) => reactJsxRuntimeCoreReexport.jsx("img", {
          className: F.image,
          src: xssContentSanitizer.sanitizeUrl(e.thumb_url, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t5T1d0aFZ6$n$%RmRH-mxwWE5%Qk1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d6$W5aa%1uaDZ%REpr-kdKcE1-QmlWMFp1$2xNNWNHSnR$bXhs%Xp$d1l6Tm9hR050WkR*amR6MDk"
          }),
          onClick: () => {
            o(true);
            a(t);
          }
        }, e.id)), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s(F.image, F.more),
          onClick: () => {
            o(true);
            a(e);
          },
          children: [reactJsxRuntimeCoreReexport.jsx("img", {
            className: F.image,
            src: xssContentSanitizer.sanitizeUrl(t[e].thumb_url, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t5T1d0aFZ6$n$%RmRH-mxwWE5%Qk1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d6$W5aa%1uaDZ%REpr-kdKcE1-QmlWMFp1$2xNNWNHSnR$bXhs%Xp$d1l6Tm9hR050WkR*amR6MDk"
            })
          }, t[e].id), reactJsxRuntimeCoreReexport.jsxs("span", {
            className: F.num,
            children: ["+", t.length - n]
          })]
        })]
      });
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: F["image-box"],
        children: c()
      }), reactJsxRuntimeCoreReexport.jsx(samanthaImagePreviewGallery.ImagePreviewGallery, {
        visible: r,
        onVisibleChange: o,
        src: xssContentSanitizer.sanitizeUrl(t.map(e => e.thumb_url), null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t5T1d0aFZ6$n$%RmRH-mxwWE5%Qk1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Nla3d6$W5aa%1uaDZ%REpr-kdKcE1-QmlWMFp1$2xNNWNHSnR$bXhs%Xp$d1l6Tm9hR050WkR*amR6MDk"
        }),
        currentIndex: l,
        onChange: a
      })]
    });
  }
  var codeArtifactRenderer = require("code-artifact-renderer") /*id: 573090*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var flowDebugStatus = require("flow-debug-status") /*id: 553601*/;
  var chatRtlIconComponent_1 = require("chat-rtl-icon-component_1") /*id: 524284*/;
  var searchIconComponent_1 = require("search-icon-component_1") /*id: 706927*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  let J = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M12 1.65332C12.7503 1.65332 13.4783 1.67713 14.1729 1.71777C15.0581 1.76967 15.8884 2.15023 16.5361 2.75586L20.5752 6.53223C21.2825 7.19359 21.7331 8.08864 21.7998 9.05469C21.8654 10.0054 21.9062 11.0267 21.9062 12.0908L21.8984 12.9131C21.8614 14.8101 21.7016 16.5396 21.5215 17.9404L21.4912 18.1455C21.1347 20.2427 19.5068 21.8521 17.3818 22.1465L16.8057 22.2217C15.4221 22.3936 13.7746 22.5283 12 22.5283L11.248 22.5195C9.76032 22.4884 8.3804 22.3691 7.19434 22.2217L6.61816 22.1465C4.42455 21.8425 2.76102 20.1369 2.47852 17.9404C2.29836 16.5396 2.13864 14.8101 2.10156 12.9131L2.09375 12.0908C2.09375 9.87184 2.27262 7.8411 2.47852 6.24023C2.75227 4.1125 4.322 2.4458 6.41406 2.06738L6.61816 2.03516C8.11001 1.82851 9.97208 1.65332 12 1.65332ZM12 3.25293C10.0614 3.25293 8.2746 3.4211 6.83789 3.62012C5.37087 3.82336 4.25741 4.9524 4.06543 6.44434C3.86607 7.99436 3.69336 9.95518 3.69336 12.0908C3.69337 14.2262 3.8661 16.1864 4.06543 17.7363C4.25733 19.2284 5.37077 20.3583 6.83789 20.5615C8.2746 20.7605 10.0614 20.9277 12 20.9277C13.9386 20.9277 15.7254 20.7605 17.1621 20.5615C18.6292 20.3583 19.7427 19.2284 19.9346 17.7363C20.1339 16.1864 20.3066 14.2262 20.3066 12.0908C20.3066 11.0677 20.2665 10.0836 20.2031 9.16504C20.2023 9.15263 20.2003 9.14032 20.1992 9.12793H17.1367C15.5905 9.12773 14.3369 7.8744 14.3369 6.32812V3.34961C14.2512 3.33313 14.1653 3.32048 14.0791 3.31543C13.4129 3.27644 12.7164 3.25293 12 3.25293ZM12.5684 7.93457C13.0066 7.98791 13.3186 8.38683 13.2656 8.8252L12.3213 16.6221C12.2682 17.0607 11.8693 17.3734 11.4307 17.3203C10.9925 17.2668 10.6803 16.868 10.7334 16.4297L11.6777 8.63184C11.7312 8.19375 12.1301 7.88171 12.5684 7.93457ZM8.31738 9.90918C8.6297 9.59706 9.13585 9.59718 9.44824 9.90918C9.76035 10.2216 9.76056 10.7287 9.44824 11.041L8.00195 12.4863C7.92409 12.5643 7.92432 12.6914 8.00195 12.7695L9.44824 14.2158C9.76028 14.5282 9.76048 15.0344 9.44824 15.3467C9.13594 15.6589 8.6298 15.6587 8.31738 15.3467L6.87109 13.9004C6.16862 13.1974 6.1684 12.0583 6.87109 11.3555L8.31738 9.90918ZM14.5508 9.90918C14.863 9.59698 15.3692 9.59726 15.6816 9.90918L17.1279 11.3555C17.8308 12.0584 17.8307 13.1974 17.1279 13.9004L15.6816 15.3467C15.3692 15.6585 14.863 15.6589 14.5508 15.3467C14.2389 15.0344 14.239 14.5282 14.5508 14.2158L15.9971 12.7695C16.075 12.6914 16.0751 12.5644 15.9971 12.4863L14.5508 11.041C14.2388 10.7287 14.239 10.2215 14.5508 9.90918ZM15.9365 6.32812C15.9365 6.99074 16.4741 7.52812 17.1367 7.52832H19.2979L15.9365 4.38574V6.32812Z",
      fill: "currentColor"
    })
  });
  var svgMenuListIcon = require("svg-menu-list-icon") /*id: 552152*/;
  var skillContentBlockIcon = require("skill-content-block-icon") /*id: 738626*/;
  let Q = reactCoreLibraryReexport.createContext(null);
  let Y = Q.Provider;
  let ee = () => {
    let e = reactCoreLibraryReexport.useContext(Q);
    if (!e) {
      throw Error("useTaskContext must be used within a TaskProvider");
    }
    return e;
  };
  var artifactMetaProcessorUtils = require("artifact-meta-processor-utils") /*id: 686064*/;
  var fileOperationHandler = require("file-operation-handler") /*id: 160007*/;
  let ei = e => {
    let {
      content: t,
      conversationId: n,
      message: o,
      hasRefArtifacts: l
    } = e;
    let a = ee();
    let {
      id: s,
      content_obj: c
    } = t;
    let d = t.is_finish;
    let p = o == null ? undefined : o.message_id;
    let m = chatMessageStatusCheck.isMessageFinished(o);
    let f = codingSkillStoreModule.codingSkillStore(e => e.blockArtifactAutoOpenCanvasMap, deepEqualityUtil.deepEqual);
    let _ = codingSkillStoreModule.codingSkillStore(e => e.updateBlockArtifactAutoOpenCanvas, deepEqualityUtil.deepEqual);
    let b = codingSkillStoreModule.codingSkillStore(e => e.blockArtifactMetaMap, deepEqualityUtil.deepEqual);
    let y = codingSkillStoreModule.codingSkillStore(e => e.getBlockArtifactMetaMap, deepEqualityUtil.deepEqual);
    let k = t.parent_id;
    let w = artifactMetaProcessorUtils.artifactMetaUtils.getArtifactKeyFromFileOperationBlock(t);
    let C = !!s && !!f[s];
    let x = reactCoreLibraryReexport.useMemo(() => {
      if (!m && !d) {
        return reactJsxRuntimeCoreReexport.jsx(Z, {});
      }
      switch (c == null ? undefined : c.operation_type) {
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Replace:
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create:
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Edit:
          return reactJsxRuntimeCoreReexport.jsx(J, {});
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_List:
          return reactJsxRuntimeCoreReexport.jsx(svgMenuListIcon.MenuListIcon, {});
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_View:
          return reactJsxRuntimeCoreReexport.jsx(skillContentBlockIcon.SkillContentIcon, {});
        default:
          return reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent_1.ChatRtlIcon, {});
      }
    }, [c == null ? undefined : c.operation_type, d]);
    let S = reactCoreLibraryReexport.useMemo(() => {
      if (!k || !b[k]) {
        return false;
      }
      let {
        codeFileBlockList: e = []
      } = b[k];
      let t = e.map(e => e.artifactMeta);
      return !!k && !!(t.length > 0) && !!t.find(e => {
        return e.code?.path === (c == null ? undefined : c.path);
      });
    }, [k, b]);
    let T = reactCoreLibraryReexport.useMemo(() => {
      if (!n) {
        return false;
      }
      switch (c == null ? undefined : c.operation_type) {
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create:
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Replace:
          if ((c == null ? undefined : c.path) && (c == null ? undefined : c.content)) {
            return true;
          }
          return false;
        default:
          return false;
      }
    }, [c == null ? undefined : c.operation_type, c == null ? undefined : c.content, n]);
    let {
      toolTitle: R,
      isCanAutoOpenCanvas: E
    } = fileOperationHandler.useFileOperationHandler({
      block: t.content_obj,
      conversationId: n,
      message: o,
      isStreaming: !d,
      parentId: t.parent_id,
      blockId: t.id
    });
    let $ = e => {
      if (!n || !p) {
        return;
      }
      let {
        artifactMeta: t
      } = e;
      let i = {
        isCodeFile: true,
        conversationId: n,
        messageId: p,
        artifactKey: (t == null ? undefined : t.artifactKey) || "",
        blockId: k,
        canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
        chatId: n,
        autoQuote: false,
        isAutoOpen: false,
        readonly: true,
        showShareEntry: false,
        ...e
      };
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel(i, undefined, false));
    };
    let P = async function () {
      let s = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      if (l) {
        await a.waitForArtifactOpReady();
      }
      let d = (c == null ? undefined : c.operation_type) !== skillMessageLifecycleTypes.fileOperationType.FileOperationType_Replace;
      if (!m || !messageContentTypeAndStatusChecker.DCy(o) || a.isNewVersionArtifactEmpty()) {
        let i = y();
        if (!k || !i[k]) {
          return;
        }
        let r = i[k].codeFileBlockList.map(e => e.artifactMeta);
        let o = a.getToolStreamingArtifactMetaList(r, t, d);
        if (!o.length || o.length < 2) {
          return;
        }
        if (l) {
          o = a.completeAgentToolArtifactMetaField(o);
        }
        let p = a.getToolArtifactMetaByPath(o, (c == null ? undefined : c.path) || "");
        if (!(p == null ? undefined : p.artifactKey)) {
          return;
        }
        let h = p.identifier;
        if ((c == null ? undefined : c.operation_type) === skillMessageLifecycleTypes.fileOperationType.FileOperationType_Replace) {
          let i = a.getBaseArtifactMeta(t);
          $({
            blockType: "tool-file-replace",
            artifactId: h,
            artifactMeta: p,
            artifactMetaList: o,
            isShowPreview: false,
            fileDiffContent: {
              type: "streaming",
              oldContent: (i == null ? undefined : i.code?.content) || "",
              newContent: t.content_obj?.content || "",
              baseArtifactKey: p.artifactKey || (i == null ? undefined : i.artifactKey) || ""
            }
          });
        } else if ((c == null ? undefined : c.operation_type) === skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create) {
          if (!l) {
            o = o.map(e => artifactMetaProcessorUtils.artifactMetaUtils.setArtifactTypeFromCodePath(e));
          }
          $({
            blockType: "tool-file-create",
            artifactId: h,
            artifactMeta: p,
            artifactMetaList: o,
            isShowPreview: !l && !!s
          });
        }
      } else {
        let e = a.getToolFinishArtifactMetaList();
        if (!e.length && k) {
          let n = b[k].codeFileBlockList.map(e => e.artifactMeta);
          e = a.getToolStreamingArtifactMetaList(n, t, d);
        }
        let n = a.getNewVersionArtifactMeta(t);
        if (!n && k) {
          n = e.find(e => {
            return e.code?.path === (c == null ? undefined : c.path);
          });
        }
        if (!(n == null ? undefined : n.artifactKey)) {
          return;
        }
        let o = n.identifier;
        if ((c == null ? undefined : c.operation_type) === skillMessageLifecycleTypes.fileOperationType.FileOperationType_Replace) {
          let l = a.getBaseArtifactMeta(t);
          if (!l) {
            return;
          }
          $({
            blockType: "tool-file-replace",
            artifactId: o,
            artifactMeta: n,
            artifactMetaList: e,
            isShowPreview: false,
            fileDiffContent: {
              type: "finished",
              oldContent: (l == null ? undefined : l.code?.content) || "",
              newContent: t.content_obj?.content || "",
              baseArtifactKey: l.artifactKey
            }
          });
        } else if ((c == null ? undefined : c.operation_type) === skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create) {
          $({
            blockType: "tool-file-create",
            artifactId: o,
            artifactMeta: n,
            artifactMetaList: e,
            isShowPreview: false
          });
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (m) {
        conversationCreationUtils.removeCreationParam();
        return;
      }
      let e = (c == null ? undefined : c.operation_type) === skillMessageLifecycleTypes.fileOperationType.FileOperationType_Replace && d;
      let t = (c == null ? undefined : c.operation_type) === skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create && !d;
      if ((e || t) && E && w && !C && !conversationCreationUtils.validateCreationFlow(o, false) && S) {
        P(true);
        _(s, true);
      }
    }, [d, m, E, C, S]);
    return reactJsxRuntimeCoreReexport.jsx(thinkingBoxToolCall.ToolCallItem, {
      data: {
        clickable: T,
        name: R,
        onToolClick: () => P(false),
        id: t.id,
        leadingIcon: x,
        type: "tool-call"
      }
    });
  };
  let er = e => {
    try {
      return new URL(e).hostname.replace(/^www\./, "");
    } catch {
      return null;
    }
  };
  let eo = (e, t) => {
    let n = e[e.length - 1];
    if ((n == null ? undefined : n.type) !== "thinking-step") {
      e.push({
        type: "thinking-step",
        id: t.id,
        title: t.title
      });
    }
    let i = e[e.length - 1];
    if ((i == null ? undefined : i.type) !== "thinking-step") {
      throw Error(`Unexpected last result type. Expecting 'thinking-step', but got ${i == null ? undefined : i.type}`);
    }
    return i;
  };
  let el = (e, t, n, i) => {
    let r = [];
    let o = {
      previousTitle: t.researching,
      isTitleUsed: false,
      currentBlockType: null,
      lastBlockType: null
    };
    for (let k of e) {
      var l;
      var a;
      switch (k.block_type) {
        case chatConstantsEnum.messageContentType.BLOCK_LOADING:
        case chatConstantsEnum.messageContentType.BLOCK_ARTIFACT_OP:
          break;
        case chatConstantsEnum.messageContentType.BLOCK_HEADER_TEXT:
          {
            o.currentBlockType = k.block_type;
            let e = k.content_obj;
            let t = e == null ? undefined : (l = e.text) === null || l === undefined ? undefined : l.trim();
            if (t) {
              o.previousTitle = t;
              o.isTitleUsed = false;
            }
            if (r.length === 0) {
              r.push({
                type: "thinking-start",
                id: "thinking-start",
                title: t
              });
            }
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_TEXT:
          {
            o.currentBlockType = k.block_type;
            let e = k.content_obj;
            let t = e == null ? undefined : (a = e.text) === null || a === undefined ? undefined : a.trim();
            if (t) {
              r.push({
                type: "thinking-step",
                id: k.id,
                title: o.previousTitle,
                message: t,
                headerAboveMessageForExpandedOnly: o.isTitleUsed || chatMessageStatusCheck.isMessageFinished(i) ? undefined : o.previousTitle
              });
              o.isTitleUsed = true;
            }
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY:
          {
            o.currentBlockType = k.block_type;
            let e = k;
            let n = e.content_obj;
            let i = ((n == null ? undefined : n.queries) ?? []).map((t, n) => ({
              type: "tool-call",
              id: `${e.id}-${n}`,
              name: t,
              leadingIcon: reactJsxRuntimeCoreReexport.jsx(searchIconComponent_1.SearchIcon, {
                className: "h-[14px] w-[14px]"
              })
            }));
            let l = eo(r, {
              id: e.id,
              title: t.searching ?? "Searching"
            });
            l.tools = [...(l.tools ?? []), ...i];
            o.isTitleUsed = true;
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_SEARCH_RESULT:
          {
            o.currentBlockType = k.block_type;
            let e = k;
            let t = e.content_obj;
            let n = (t == null ? undefined : t.results) ?? [];
            if (n.length && "text_card" in n[0]) {
              let t = n.map(e => e == null ? undefined : e.text_card).filter(Boolean).filter(e => e == null ? undefined : e.title).map((t, n) => {
                return {
                  type: "tool-call",
                  id: `${e.id}-${n}`,
                  name: er((t == null ? undefined : t.url) ?? "") ?? (t == null ? undefined : t.title) ?? "",
                  href: xssContentSanitizer.sanitizeUrl(t == null ? undefined : t.url, null, {
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
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qmpl$*t3W$$kc2RXRXliSFZhZ$R*c$dWaEthMHd6$m5w-$$6RXdZ$WRzZFdFeWJI$mFl$EZy$1Zo%2FFeFhSbXRa$0$Jd1dsaEpk$1JJ$*pSWldFcH$aRmhO%FE9PQ"
                  }),
                  leadingIcon: (t == null ? undefined : t.logo_url) ? reactJsxRuntimeCoreReexport.jsx("img", {
                    className: "rounded-full",
                    src: xssContentSanitizer.sanitizeUrl(t == null ? undefined : t.logo_url, null, {
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
                      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qmpl$*t3W$$kc2RXRXliSFZhZ$R*c$dWaEthMHd6$m5w-$$6RXdZ$WRzZFdFeWJI$mFl$EZy$1Zo%2FFeFhSbXRa$0$Jd1dsaEpk$1JJ$*pSWldFcH$aRmhO%FE9PQ"
                    })
                  }) : undefined,
                  clickable: true,
                  trailingIcon: null
                };
              });
              let i = eo(r, {
                id: e.id,
                title: o.previousTitle
              });
              if (o.lastBlockType === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY) {
                t.unshift({
                  type: "magic-tool-element",
                  magicElementType: "line-break"
                });
              }
              i.tools = [...(i.tools ?? []), ...t];
            } else if (n.length && "image_card" in n[0]) {
              let t = n.map(e => e == null ? undefined : e.image_card).filter(Boolean).filter(e => e == null ? undefined : e.thumb_url);
              if (!t.length) {
                break;
              }
              let i = [{
                type: "tool-call-custom-component",
                id: e.id,
                component: reactJsxRuntimeCoreReexport.jsx(D, {
                  images: t.map((e, t) => ({
                    id: (e == null ? undefined : e.id) || t.toString(),
                    thumb_url: (e == null ? undefined : e.thumb_url) || "",
                    uri: (e == null ? undefined : e.uri) || ""
                  }))
                })
              }];
              let l = eo(r, {
                id: e.id,
                title: o.previousTitle
              });
              if (o.lastBlockType === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY) {
                i.unshift({
                  type: "magic-tool-element",
                  magicElementType: "line-break"
                });
              }
              l.tools = [...(l.tools ?? []), ...i];
            }
            o.isTitleUsed = true;
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_GENERICTOOL:
          {
            o.currentBlockType = k.block_type;
            let e = k.content_obj;
            let t = [{
              type: "tool-call",
              id: k.id,
              name: (e == null ? undefined : e.title) || (e == null ? undefined : e.tool_name),
              leadingIcon: reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent_1.ChatRtlIcon, {})
            }];
            let n = eo(r, {
              id: k.id,
              title: o.previousTitle
            });
            n.tools = [...(n.tools ?? []), ...t];
            o.isTitleUsed = true;
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_FILE_OPERATION:
          {
            o.currentBlockType = k.block_type;
            let e = [{
              type: "tool-call-custom-component",
              id: k.id,
              component: reactJsxRuntimeCoreReexport.jsx(ei, {
                content: k,
                conversationId: i == null ? undefined : i.conversation_id,
                message: i,
                hasRefArtifacts: n
              })
            }];
            let t = eo(r, {
              id: k.id,
              title: o.previousTitle
            });
            t.tools = [...(t.tools ?? []), ...e];
            o.isTitleUsed = true;
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_GEN_IMAGE:
          {
            o.currentBlockType = k.block_type;
            let e = [{
              type: "tool-call-custom-component",
              id: k.id,
              component: reactJsxRuntimeCoreReexport.jsx(W, {
                content: k
              })
            }];
            let t = eo(r, {
              id: k.id,
              title: o.previousTitle
            });
            t.tools = [...(t.tools ?? []), ...e];
            o.isTitleUsed = true;
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT:
          {
            o.currentBlockType = k.block_type;
            let e = k.content_obj;
            let {
              search_type: t
            } = e ?? {};
            if (t !== skillMessageLifecycleTypes.searchType.ImageSearchImage) {
              break;
            }
            let n = [{
              type: "tool-call-custom-component",
              id: k.id,
              component: reactJsxRuntimeCoreReexport.jsx(searchImageBlockComponent.SearchImageBlock, {
                message: i ?? {},
                contentBlock: k,
                classname: "!mt-0",
                imageListClassname: "!mb-0"
              })
            }];
            let l = eo(r, {
              id: k.id,
              title: o.previousTitle
            });
            if (o.lastBlockType === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT) {
              n.unshift({
                type: "magic-tool-element",
                magicElementType: "line-break"
              });
            }
            l.tools = [...(l.tools ?? []), ...n];
            o.isTitleUsed = true;
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_CODE:
          {
            o.currentBlockType = k.block_type;
            let e = [{
              type: "tool-call-custom-component",
              id: k.id,
              component: reactJsxRuntimeCoreReexport.jsx(codeArtifactRenderer.renderCodeArtifact, {
                classname: "!my-0",
                iconClassName: "text-14 text-s-color-text-tertiary",
                message: i ?? {},
                contentBlock: k
              })
            }];
            let t = eo(r, {
              id: k.id,
              title: o.previousTitle
            });
            if (o.lastBlockType === chatConstantsEnum.messageContentType.BLOCK_CODE) {
              e.unshift({
                type: "magic-tool-element",
                magicElementType: "line-break"
              });
            }
            t.tools = [...(t.tools ?? []), ...e];
            o.isTitleUsed = true;
            break;
          }
        default:
          {
            o.currentBlockType = k.block_type;
            let e = k.content_obj;
            if (!flowDebugStatus.isDebugEnabled()) {
              break;
            }
            if (e) {
              r.push({
                type: "custom-component",
                id: k.id,
                title: o.previousTitle,
                component: reactJsxRuntimeCoreReexport.jsxs("div", {
                  className: "px-[20px]",
                  children: [reactJsxRuntimeCoreReexport.jsxs("div", {
                    children: ["❌ Unsupported block type ", k.block_type]
                  }), reactJsxRuntimeCoreReexport.jsx("pre", {
                    children: JSON.stringify(k, null, 2)
                  })]
                })
              });
            }
          }
      }
      o.lastBlockType = o.currentBlockType;
    }
    if (r.length === 0 || r.length > 0 && r[0].type !== "thinking-start") {
      r.unshift({
        type: "thinking-start",
        id: "thinking-start",
        title: t.researching
      });
    }
    return {
      result: r,
      lastUnusedBlockTitle: o.isTitleUsed ? null : o.previousTitle
    };
  };
  let ea = (e, t, n, r) => {
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let a = {
      searching: l("coding_website_build_generating") || "Searching",
      researching: l("coding_website_build_generating_tips") || "Researching",
      researched: l("coding_website_build_generated") || "Researched"
    };
    return reactCoreLibraryReexport.useMemo(() => {
      let {
        result: i,
        lastUnusedBlockTitle: o
      } = el(e, a, n, r);
      if (!t) {
        i.push({
          type: "thinking-end",
          id: "thinking-end",
          title: o ?? a.researched
        });
      }
      return i;
    }, [e, r == null ? undefined : r.status, r == null ? undefined : r.async_task?.status, t]);
  };
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var threadL21ArtifactStreamingUtils = require("thread-l2-1-artifact-streaming-utils") /*id: 815426*/;
  function ep(e, t, n) {
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
  class eh {
    get isStreaming() {
      return this.message.async_task?.status === protocolMessageConstants.asyncTaskStatus.AsyncTaskStatusProcessing && this.agentBlock.content_obj?.status === skillMessageLifecycleTypes.taskStatus.PROCESSING;
    }
    get isFinished() {
      return chatMessageStatusCheck.isMessageFinished(this.message);
    }
    get agentBlockId() {
      return this.agentBlock.id;
    }
    async init(e) {
      await this.doInit(e);
    }
    async initBaseArtifact(e) {
      let t = new ev(this.agentBlockId, e);
      this.baseArtifact = t;
      return t.init();
    }
    isBaseArtifactEmpty() {
      var t;
      return ((t = this.baseArtifact) === null || t === undefined ? undefined : t.artifactMetaList?.length) === 0;
    }
    isNewVersionArtifactEmpty() {
      var t;
      return ((t = this.newArtifact) === null || t === undefined ? undefined : t.artifactMetaList?.length) === 0;
    }
    onRecvNewVersionArtifactMetaList(e) {
      this.newArtifact = new ev(this.agentBlockId);
      this.newArtifact.artifactMetaList = e;
    }
    getBaseArtifactMeta(e) {
      if (this.baseArtifact) {
        return (this.baseArtifact.artifactMetaList || []).find(t => {
          return t.code?.path === e.content_obj?.path;
        });
      } else {
        return null;
      }
    }
    getMessage() {
      return this.message;
    }
    async waitForArtifactOpReady() {
      await this.fetchedArtifactOpPromise;
    }
    constructor(e, t) {
      ep(this, "message", undefined);
      ep(this, "agentBlock", undefined);
      ep(this, "tools", []);
      ep(this, "baseArtifact", undefined);
      ep(this, "newArtifact", undefined);
      ep(this, "fetchedArtifactOpPromise", undefined);
      ep(this, "fetchedArtifactOpPromiseResolve", null);
      ep(this, "getNewArtifact", async e => {
        let t = new ev(this.agentBlockId, e);
        this.newArtifact = t;
        return t.init();
      });
      ep(this, "getNewVersionArtifactList", async () => {
        let e = this.message.content_blocks || [];
        if (!messageContentTypeAndStatusChecker.DCy(this.message)) {
          return;
        }
        let t = e.find(e => {
          return e.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT && [skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Code, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_CodeDevelopMode].includes(e.content_obj?.resource_type);
        });
        if (t) {
          return this.getNewArtifact(t.content_obj);
        } else {
          return undefined;
        }
      });
      ep(this, "doInit", async e => {
        let t = [];
        t.push(this.getNewVersionArtifactList);
        if (e && !this.baseArtifact) {
          t.push(() => this.initBaseArtifact(e));
        }
        await Promise.all(t.map(e => e())).then(() => {
          var e;
          if ((e = this.fetchedArtifactOpPromiseResolve) !== null && e !== undefined) {
            e.call(this);
          }
        }).catch(e => {
          var t;
          if ((t = this.fetchedArtifactOpPromiseResolve) !== null && t !== undefined) {
            t.call(this);
          }
        });
      });
      ep(this, "getToolArtifactMeta", (e, t) => {
        let {
          content_obj: n,
          id: i
        } = t;
        if (e == null) {
          return undefined;
        } else {
          return e.find(e => {
            return e.code?.path === (n == null ? undefined : n.path) && e.code?.node_id === i;
          });
        }
      });
      ep(this, "getToolArtifactMetaByPath", (e, t) => e == null ? undefined : e.find(e => {
        return e.code?.path === t;
      }));
      ep(this, "getToolStreamingArtifactMetaList", (e, t, n) => {
        let {
          content_obj: r,
          id: o
        } = t;
        return threadL21ArtifactStreamingUtils.mergeAndFilterArtifactMeta(this.baseArtifact?.artifactMetaList || [], e, o, r == null ? undefined : r.path, n);
      });
      ep(this, "getBaseArtifactMetaList", () => {
        return this.baseArtifact?.artifactMetaList || [];
      });
      ep(this, "_fixArtifactLanguage", e => e.map(e => {
        var n;
        if (e.code?.path && ((n = e.code) === null || n === undefined ? undefined : n.path.endsWith(".html")) && !e.code?.language) {
          return {
            ...e,
            code: {
              ...e.code,
              language: "html"
            }
          };
        } else {
          return e;
        }
      }));
      ep(this, "completeAgentToolArtifactMetaField", e => e.map(e => {
        let t = e.resourceVersion || e.version || 0;
        return {
          ...e,
          artifactKey: this.agentBlockId,
          title: "",
          resourceVersion: t + 1,
          version: t + 1
        };
      }));
      ep(this, "getToolFinishArtifactMetaList", () => {
        let n = [...(this.baseArtifact?.artifactMetaList || []), ...(this.newArtifact?.artifactMetaList || [])];
        return this._fixArtifactLanguage(n);
      });
      ep(this, "getNewVersionArtifactMeta", e => this.newArtifact ? (this.newArtifact.artifactMetaList || []).find(t => {
        return t.code?.path === e.content_obj?.path;
      }) : null);
      this.message = e;
      this.agentBlock = t;
      this.fetchedArtifactOpPromise = new Promise(e => {
        this.fetchedArtifactOpPromiseResolve = e;
      });
    }
  }
  class ev {
    init() {
      return this.fetchArtifactMetaList();
    }
    clone() {
      if (this.artifactMetaList) {
        return deepCloneWrapper_1.deepClone(this.artifactMetaList);
      } else {
        return [];
      }
    }
    getArtifactMetaList() {
      return this.artifactMetaList;
    }
    async getArtifactsByResourceIdAndVersion(e, t) {
      return apiServicesCollection.SamanthaApiService.GetCodeArtifact({
        code_id: e,
        version: t
      }).then(e => {
        return e.data?.nodes || [];
      }).catch(e => {
        loggerServiceCore.defaultLogger.persist.error({
          message: "[@Coding-skill-store] persist state limit error",
          error: e instanceof Error ? e : Error(String(e))
        });
        throw e;
      });
    }
    buildArtifactMetaList(e, t) {
      if (!e || !t.length) {
        return [];
      }
      let n = artifactMetaProcessorUtils.createArtifactMetaFromMessage(e);
      let i = t.map(e => ({
        ...n,
        code: {
          path: e.path,
          isEntry: e.is_entry,
          description: e.description,
          node_id: e.node_id,
          nodeType: e.node_type,
          content: e.content
        }
      }));
      return [{
        ...n
      }, ...i];
    }
    async fetchArtifactMetaList() {
      if (!this.artifactMeta) {
        return;
      }
      let e = this.artifactMeta;
      let t = await this.getArtifactsByResourceIdAndVersion(e.resource_id, Number(e.resource_version));
      if (t && t.length > 0) {
        let n = this.buildArtifactMetaList(e, t);
        this.artifactMetaList = n;
      }
    }
    constructor(e, t) {
      ep(this, "artifactMeta", undefined);
      ep(this, "agentBlockId", undefined);
      ep(this, "artifactMetaList", undefined);
      this.artifactMeta = t;
      this.agentBlockId = e;
    }
  }
  let em = e => {
    let {
      processingCardBlockId: n,
      isMessageFinished: o,
      message: l,
      contentBlock: a
    } = e;
    let s = reactCoreLibraryReexport.useRef(false);
    let c = reactCoreLibraryReexport.useMemo(() => {
      let e = l.content_blocks || [];
      return messageContentTypeAndStatusChecker.DCy(l) && e.find(e => {
        return e.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT && [skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Code, skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_CodeDevelopMode].includes(e.content_obj?.resource_type);
      }) || null;
    }, [l.async_task?.status]);
    let d = reactCoreLibraryReexport.useMemo(() => new eh(l, a), []);
    let [p = []] = codingSkillStoreModule.codingSkillStore(e => [e.blockIdToProcess[n ?? ""]], deepEqualityUtil.deepEqual);
    let h = codingSkillStoreModule.codingSkillStore(e => e.blockArtifactMetaMap, deepEqualityUtil.deepEqual);
    let m = reactCoreLibraryReexport.useMemo(() => {
      var t;
      return c != null && !!c.id && !h[c.id]?.isStreaming && ((t = h[c.id]) === null || t === undefined ? undefined : t.codeFileBlockList.length) > 0;
    }, [h, c == null ? undefined : c.id]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!m || !(c == null ? undefined : c.id)) {
        return;
      }
      let t = h[c.id]?.codeFileBlockList;
      if (!(t == null ? undefined : t.length)) {
        return;
      }
      let n = t.map(e => ({
        ...e.artifactMeta
      }));
      d.onRecvNewVersionArtifactMetaList(n);
    }, [m, c == null ? undefined : c.id]);
    let f = reactCoreLibraryReexport.useMemo(() => {
      let e = artifactMetaProcessorUtils.artifactMetaUtils.getArtifactOpBlock(p);
      if (e) {
        return e.content_obj.artifact;
      } else {
        return null;
      }
    }, [p.length]);
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      if (p.length === 0 || s.current) {
        return;
      }
      let t = artifactMetaProcessorUtils.artifactMetaUtils.getArtifactOpBlock(p);
      if (t) {
        e = t.content_obj.artifact;
      }
      if (o || e) {
        s.current = true;
        d.init(e);
      }
    }, [o, n, p.length]);
    return {
      hasRefArtifacts: !!f,
      taskService: d
    };
  };
  let ef = e => ({
    expandTooltip: e("web_deepResearch_tooltip_expand", "展开"),
    collapseTooltip: e("web_deepResearch_tooltip_collapse", "收起"),
    fallbackTitle: e("coding_website_build_generating_tips", "代码实现中..."),
    toolCallMore: e("web_deepResearch_tooltip_expand", "更多"),
    toolCallCollapse: e("web_deepResearch_tooltip_collapse", "收起"),
    taskDone: e("coding_website_build_generated", "任务已完成")
  });
  let eg = codingSkillChatInput_1.codingSkillChatFlag;
  let e_ = (e, t, n) => Math.max(t, Math.min(e, n));
  let eb = e => {
    let _ = i18nTranslationUtils.useTranslationWithFallback();
    let [P, N] = reactCoreLibraryReexport.useState(false);
    let [O, A] = reactCoreLibraryReexport.useState(0);
    let M = reactCoreLibraryReexport.useRef(false);
    let L = reactCoreLibraryReexport.useRef(null);
    let Z = reactCoreLibraryReexport.useMemo(() => ef(_), [_]);
    let [F, W] = reactCoreLibraryReexport.useState(false);
    let {
      scrollRef: D
    } = chatRefsContext.useChatRefs();
    let V = eg && F;
    let {
      message: z,
      contentBlock: H
    } = e;
    let {
      id: X,
      content_obj: U
    } = H ?? {};
    let {
      status: K,
      title: J,
      resource_id: G
    } = U ?? {};
    let q = chatMessageStatusCheck.isMessageFinished(z) || K === skillMessageLifecycleTypes.taskStatus.FINISH;
    let {
      hasRefArtifacts: Q,
      taskService: ee
    } = em({
      processingCardBlockId: X,
      isMessageFinished: q,
      message: z,
      contentBlock: H
    });
    let [et, en = [], ei, er] = codingSkillStoreModule.codingSkillStore(e => [e.blockIdToProcessHasInited[X ?? ""], e.blockIdToProcess[X ?? ""], e.setHasOpenCanvasViewInAsyncStreaming, e.fetchAgentProcessData], deepEqualityUtil.deepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      ei(false);
      teaAnalyticsEventTracker.trackEvent("preview_card_show", {
        bot_id: z.bot_id,
        message_id: z.message_id,
        conversation_id: z.conversation_id,
        skill_id: z.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(z.skill?.skill_type_no_default)
      });
    }, []);
    let {
      isSelectMode: eo
    } = chatMessageShareSelectStore.chatMessageShareSelectStore();
    let el = chatResponsiveSize.useChatScreenSize({
      sm: 400,
      md: 680
    });
    let es = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return t;
    });
    let ec = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return t;
    });
    let ed = z.async_task?.status === protocolMessageConstants.asyncTaskStatus.AsyncTaskStatusProcessing && K === skillMessageLifecycleTypes.taskStatus.PROCESSING;
    let eu = K === skillMessageLifecycleTypes.taskStatus.CANCEL ? _("web_ai_coding_agent_failed") : K === skillMessageLifecycleTypes.taskStatus.PROCESSING ? _("web_ai_coding_agent_executing") : _("web_ai_coding_agent_completed");
    let ep = J || eu;
    let eh = reactCoreLibraryReexport.useCallback(() => {
      teaAnalyticsEventTracker.trackEvent("click_card", {
        card_type: ed ? "code_agent_build_process" : "code_agent_build_result",
        click_effect: P ? "fold" : "unfold",
        bot_id: z.bot_id,
        skill_id: z.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(z.skill?.skill_type_no_default),
        message_id: z.message_id,
        conversation_id: z.conversation_id
      });
      N(!P);
    }, [ep, ed, P]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        if (z.message_id === e) {
          M.current = true;
        }
      };
      initializeModuleInstance.initializeInstance.on(chatInputConstants.chatInputConstants.inputInterrupt, e);
      return () => {
        initializeModuleInstance.initializeInstance.off(chatInputConstants.chatInputConstants.inputInterrupt, e);
      };
    }, [z.message_id]);
    reactCoreLibraryReexport.useEffect(() => {
      if (messageContentTypeAndStatusChecker.xFg(z) && M.current) {
        conversationCreationUtils.removeCreationParam();
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
      }
    }, [z.async_task?.status]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!!P && K !== skillMessageLifecycleTypes.taskStatus.PROCESSING && !en.length && !et) {
        er({
          blockId: X ?? "",
          resourceId: G ?? ""
        });
      }
    }, [P, K, en.length]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!q) {
        N(false);
      }
    }, [q]);
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("show_card", {
        card_type: ed ? "code_agent_build_process" : "code_agent_build_result",
        status: P ? "unfold" : "fold",
        bot_id: z.bot_id,
        skill_id: z.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(z.skill?.skill_type_no_default),
        message_id: z.message_id,
        conversation_id: z.conversation_id
      });
    }, [ep, ed, P, z.message_id]);
    let ev = ea(reactCoreLibraryReexport.useMemo(() => en.filter(e => "content_obj" in e), [en]), ed, Q, z);
    let eb = ev.length;
    reactCoreLibraryReexport.useEffect(() => {
      if (O === eb - 2) {
        A(Math.max(eb - 1, 0));
      }
    }, [eb]);
    let {
      handleClick: ey
    } = useMultiClickHook.useMultiClick({
      clickTimes: 10,
      autoResetIntervalInMs: 1000,
      onTrigger: () => {
        if (eg) {
          samanthaToastFactory.defaultToast.success({
            content: F ? "⚠️ Debug mode disabled. Click 10 more times to enable" : "⚠️ Debug mode enabled. Click 10 more times to disable",
            stack: true,
            showClose: false,
            duration: 5
          });
          W(e => !e);
        }
      },
      onClick: e => {
        if (eg && e > 5 && e !== 10) {
          let t = 10 - e;
          let n = F ? `Continue clicking ${t} more times to disable debug mode` : `Continue clicking ${t} more times to enable debug mode`;
          samanthaToastFactory.defaultToast.info({
            content: n,
            stack: true,
            showClose: false,
            duration: 3
          });
        }
      }
    });
    let ek = K === skillMessageLifecycleTypes.taskStatus.CANCEL ? J : messageContentTypeAndStatusChecker.xFg(z) && O === eb - 1 ? J : undefined;
    let ew = reactCoreLibraryReexport.useCallback(() => {
      if (D.current?.pauseScrollAnchoring) {
        L.current = D.current.pauseScrollAnchoring();
      }
    }, [D]);
    let eC = reactCoreLibraryReexport.useCallback(() => {
      if (L.current) {
        L.current();
        L.current = null;
      }
    }, []);
    if (K === undefined || z.async_task?.status === undefined) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(Y, {
        value: ee,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: s("container-TRjNAx", {
            "finished-my_P_3": !ed,
            "share-ZuG85O": eo,
            "narrow-nseOCU": el === "md" || el === "sm" || es
          }),
          "data-id": H == null ? undefined : H.id,
          "data-block-type": H.block_type,
          children: reactJsxRuntimeCoreReexport.jsxs(animationDebugContext.AnimationDebugProv, {
            children: [reactJsxRuntimeCoreReexport.jsx(animatePresenceCore.AnimatePresence, {
              mode: "popLayout",
              children: V && reactJsxRuntimeCoreReexport.jsxs(motionComponentFactory_1_1.createMotionComponent.div, {
                layout: "position",
                initial: {
                  opacity: 0,
                  y: 50,
                  scale: 0.8,
                  filter: "blur(10px)"
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)"
                },
                exit: {
                  opacity: 0,
                  y: 0,
                  scale: 0.8,
                  filter: "blur(10px)"
                },
                transition: {
                  type: "spring",
                  visualDuration: 0.3,
                  bounce: 0
                },
                className: "m-[16px] flex flex-col gap-[16px]",
                children: [reactJsxRuntimeCoreReexport.jsx(animationDebugControls.AnimationDebugControls, {
                  isCanvasOpen: ec
                }), reactJsxRuntimeCoreReexport.jsx(carouselStepNavigationControl.CarouselNavigation, {
                  disableAutoPlay: true,
                  totalSteps: eb,
                  currentStep: O,
                  onStepChange: e => A(e_(e, 0, eb - 1)),
                  isCanvasOpen: ec
                })]
              })
            }), reactJsxRuntimeCoreReexport.jsx(thinkingBoxRootComponent.ThinkingBox, {
              onTitleClick: ey,
              translations: Z,
              title: ek ?? undefined,
              thinkingTimeElapsed: null,
              currentThinkingStepIndex: V ? O : undefined,
              thinkingData: ev,
              expanded: P,
              onToggleExpandClick: eh,
              isCanvasOpen: ec,
              onContainerAnimationStart: ew,
              onContainerAnimationEnd: eC
            })]
          })
        })
      });
    }
  };
  require.d(exports, {
    AsyncSkillContentBlock: function () {
      return eb;
    }
  });
}