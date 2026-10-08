// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'flowDocxEditorControllerModule'
// - Resolved require(544579) to 'flow-docx-editor-controller-module'
// - Renamed variable 'a' to 'useMediaQueryHook'
// - Resolved require(510619) to 'use-media-query-hook'
// - Renamed variable 'l' to 'modalDialogComponent'
// - Resolved require(903195) to 'modal-dialog-component'
// - Renamed variable 'c' to 'sideSheetComponent'
// - Resolved require(59995) to 'side-sheet-component'
// - Renamed variable 'd' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'u' to 'docUpgradeStatusHook'
// - Resolved require(439440) to 'doc-upgrade-status-hook'
// - Renamed variable 'h' to 'otterDocDiContainerSetup'
// - Resolved require(58489) to 'otter-doc-di-container-setup'
// - Renamed variable 'p' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'm' to 'randomNumberUtil'
// - Resolved require(636015) to 'random-number-util'
// - Renamed variable 'f' to 'docSkeletonPanel'
// - Resolved require(779323) to 'doc-skeleton-panel'
// - Renamed variable 'g' to 'docxPanelMethodRegistrar'
// - Resolved require(260726) to 'docx-panel-method-registrar'
// - Renamed variable 'v' to 'timestampMarker'
// - Resolved require(77148) to 'timestamp-marker'
// - Renamed variable 'b' to 'feishuDocxPanelConfigLoader'
// - Resolved require(105384) to 'feishu-docx-panel-config-loader'
// - Renamed variable 'y' to 'docxPanelUrlBuilder'
// - Resolved require(202507) to 'docx-panel-url-builder'
// - Renamed variable 'A' to 'rpcHostManager'
// - Resolved require(953389) to 'rpc-host-manager'
// - Renamed variable 'w' to 'useDocxPerformanceMonitor'
// - Resolved require(780079) to 'use-docx-performance-monitor'
// - Renamed variable 'T' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'generateRandom' (module 636015)
// - Updated imported property 'J' to 'getDocxPanelUrl' (module 202507)
// - Updated imported property 'x' to 'getMark' (module 77148)
// - Updated imported property 'S' to 'useDocxPerfMonitor' (module 780079)
// - Updated imported property 'S' to 'RpcHostManager' (module 953389)
// - Updated imported property 'c' to 'registerTmplConfig' (module 260726)
// - Updated imported property 'x' to 'loadFeishuTempConfig' (module 105384)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'E' to 'DocSkeletonPanel' (module 779323)
// - Updated imported property 'i' to 'setupOtterDocDIContainer' (module 58489)
// - Updated imported property 'GS' to 'mediaQueryHook' (module 510619)
// - Updated imported property 'm' to 'getDocUpgradeInfo' (module 439440)
// - Updated imported property 'vN' to 'FlowDocXEditorController' (module 544579)
// - Updated imported property 'Z' to 'SideSheet' (module 59995)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property 'Z' to 'Modal' (module 903195)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx-preview-modal.802e8033.js
         * chunkId: 78000
         * moduleId: 161646
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var flowDocxEditorControllerModule = require("flow-docx-editor-controller-module") /*id: 544579*/;
  var useMediaQueryHook = require("use-media-query-hook") /*id: 510619*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var sideSheetComponent = require("side-sheet-component") /*id: 59995*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var docUpgradeStatusHook = require("doc-upgrade-status-hook") /*id: 439440*/;
  var otterDocDiContainerSetup = require("otter-doc-di-container-setup") /*id: 58489*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var randomNumberUtil = require("random-number-util") /*id: 636015*/;
  var docSkeletonPanel = require("doc-skeleton-panel") /*id: 779323*/;
  var docxPanelMethodRegistrar = require("docx-panel-method-registrar") /*id: 260726*/;
  var timestampMarker = require("timestamp-marker") /*id: 77148*/;
  var feishuDocxPanelConfigLoader = require("feishu-docx-panel-config-loader") /*id: 105384*/;
  var docxPanelUrlBuilder = require("docx-panel-url-builder") /*id: 202507*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  var useDocxPerformanceMonitor = require("use-docx-performance-monitor") /*id: 780079*/;
  var E = {
    container: "container-Cb7M0q",
    iframe: "iframe-vETovm",
    overlay: "overlay-wAL8f7"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var x = e => {
    var t;
    var n;
    let {
      docId: r,
      version: o,
      setRpcClientId: s,
      ...a
    } = e;
    let l = reactCoreLibraryReexport.useMemo(() => `doc-iframe-${r}-${randomNumberUtil.generateRandom(100000000, 999999999)}`, [r]);
    if (s) {
      s(l);
    }
    let c = (t = location.pathname) === null || t === undefined ? undefined : t.startsWith("/chat/");
    let d = (n = location.pathname) === null || n === undefined ? undefined : n.startsWith("/thread/");
    let u = c ? "chat" : d ? "thread" : undefined;
    let h = docxPanelUrlBuilder.getDocxPanelUrl({
      docId: r,
      isPreview: true,
      clientId: l,
      version: o,
      isThreadPage: d
    });
    let x = reactCoreLibraryReexport.useCallback(timestampMarker.getMark, []);
    let {
      isLoading: C
    } = useDocxPerformanceMonitor.useDocxPerfMonitor(l, {
      perfStartTime: undefined,
      openCanvasTime: x()
    }, {
      docId: r,
      isPreview: true,
      isHistory: o !== undefined,
      isInline: false,
      version: o,
      enterFrom: u
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = rpcHostManager.RpcHostManager.getInstance();
      docxPanelMethodRegistrar.registerTmplConfig(e, feishuDocxPanelConfigLoader.loadFeishuTempConfig);
    }, [l]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        ${E.container}
      `,
      children: [reactJsxRuntimeCoreReexport.jsx("iframe", {
        id: "flow-docx-iframe",
        className: `
          ${E.iframe}
        `,
        src: xssContentSanitizer.sanitizeUrl(h, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jJZek5L-Wt3e$NuQmxh$EZxWWpJe*QySXlO$3hp-mx*Mldr-z$hb$ZET$hkamJWWXlZ$mRXTTB4WE1-WmFSMFp6$ERK%2Rsa3paM1Jq%0$wc1pHMXNiR1I1T$hCaWF%RndXbT$L-%dKWFZ-WmhWelZy$2xobmRX%kl%alJa$0$wd$p*aE5Q%T09"
        }),
        frameBorder: 0,
        allow: "clipboard-read; clipboard-write",
        ...a
      }, h), C && reactJsxRuntimeCoreReexport.jsx("div", {
        className: E.overlay,
        children: reactJsxRuntimeCoreReexport.jsx(docSkeletonPanel.DocSkeletonPanel, {})
      })]
    });
  };
  var C = {
    modal: "modal-EwaAJ5",
    closeIcon: "closeIcon-brzS4T",
    sideSheet: "sideSheet-Qsra2M",
    content: "content-I4c5g_",
    contentLoading: "contentLoading-UnUHg2"
  };
  otterDocDiContainerSetup.setupOtterDocDIContainer();
  let k = e => {
    let {
      visible: t,
      className: n,
      onClose: r,
      docId: h,
      docVersion: p,
      onFetchDoc: m,
      getAuthToken: f
    } = e;
    let g = useMediaQueryHook.mediaQueryHook({
      maxWidth: 400
    });
    let [v, b] = reactCoreLibraryReexport.useState(true);
    let y = () => {
      b(false);
    };
    let A = () => {
      b(true);
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (v) {
        let e = setTimeout(() => {
          b(false);
        }, 5000);
        return () => clearTimeout(e);
      }
    }, [v]);
    let {
      isDoubaoDoc: w,
      loading: E
    } = docUpgradeStatusHook.getDocUpgradeInfo({
      docId: h
    });
    let k = () => reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "doc_preview_modal_content",
      className: o(C.content, {
        [C.contentLoading]: v
      }),
      children: [(v || E) && w && reactJsxRuntimeCoreReexport.jsxs("div", {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "s-skeleton mt-12 h-40 w-[40%] rounded-10"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
                s-skeleton w-[calc(100% - 20px)] mt-12 h-80 rounded-10
              `
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
                s-skeleton w-[calc(100% - 20px)] mt-12 h-100 rounded-10
              `
        })]
      }), w ? reactJsxRuntimeCoreReexport.jsx(flowDocxEditorControllerModule.FlowDocXEditorController, {
        docId: h,
        docVersion: p,
        scrollerSelector: `.${C.content} .flow-doc-preview-container`,
        getAuthToken: f,
        onFetchDoc: m,
        onEditorMounted: y,
        onEditorUnmounted: A
      }, `${h}_${p}`) : reactJsxRuntimeCoreReexport.jsx(x, {
        docId: h,
        version: p
      })]
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: g ? reactJsxRuntimeCoreReexport.jsx(sideSheetComponent.SideSheet, {
        "data-testid": "doc_preview_modal",
        className: C.sideSheet,
        placement: "bottom",
        title: null,
        closeIcon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          "data-testid": "doc_preview_modal_close"
        }),
        visible: t,
        onCancel: r,
        children: k()
      }) : reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
        "data-testid": "doc_preview_modal",
        visible: t,
        header: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          onClick: r,
          className: C.closeIcon,
          "data-testid": "doc_preview_modal_close"
        }),
        className: o(C.modal, n),
        centered: true,
        maskClosable: false,
        zIndex: 2000,
        footer: null,
        closeOnEsc: true,
        onClose: r,
        children: k()
      })
    });
  };
  require.d(exports, {
    DocxPreviewModal: function () {
      return k;
    }
  });
}