// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Jy' to 'dynamicPreviewCtx'
// - Renamed export 'MW' to 'createPreviewConfig'
// - Renamed export 'aL' to 'createPreviewState'
// - Renamed export 'b7' to 'createFileInfoConfig'
// - Renamed export 'ci' to 'boxPreviewContext'
// - Renamed export 'e$' to 'withPreviewContext'
// - Renamed export 'eD' to 'withDynamicContext'
// - Renamed export 'nO' to 'withBoxPreviewCtx'
// - Renamed export 'sr' to 'previewContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 941450
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var memoizeFunctionUtil = require("memoize-function-util") /*id: 825529*/;
  var securityLinkProcessor = require("security-link-processor") /*id: 103048*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = reactCoreLibraryReexport.createContext({});
  let a = memoizeFunctionUtil.default((e, t, i, n, o, s, l, a, u, d, c, h, p, _, f, E, m, v, g, P, I, D, C, T, F, w, b, R, O, y, N, S, L, x, A, V, k, M, B, U, G, j, W, H, $, Z, J, z, K, Y, q, X, Q, ee, et, ei, en, eo, er, es, el, ea, eu, ed, ec, eh, ep, e_, ef, eE, em, ev, eg, eP, eI, eD, eC, eT, eF, ew, eb, eR, eO, ey, eN, eS, eL, ex) => ({
    theme: e,
    PDFViewer: t,
    BoxCode: i,
    BoxArchive: n,
    BoxImage: o,
    BoxSheet: s,
    WPSOffice: l,
    FileIcon: a,
    DriveCircularIcon: u,
    LarkDoc: d,
    fileToken: c,
    i18n: h,
    eventBus: p,
    networkController: _,
    downloadFile: f,
    onAutoDownload: E,
    onOpenLocally: m,
    onShare: v,
    onConvertToDoc: g,
    onSaveToDriveStart: P,
    isDownloaded: I,
    isDownloading: D,
    mountPoint: C,
    isDriveSDK: T,
    requestExtra: F,
    PreviewMessageHandler: w,
    coverSrc: b,
    dataVersion: R,
    disableMediaPreload: O,
    enableMediaProgressCache: y,
    enablePDFProgressCache: N,
    enablePDFOutline: S,
    enablePresentationMode: L,
    enableSheetProgressCache: x,
    imageToolbarConfig: A,
    isInEditMode: V,
    isMobile: k,
    isVCFollow: M,
    isPresenter: B,
    languageType: U,
    maxPollCount: G,
    pdfDefaultZoomValue: j,
    pdfPreloadThreshold: W,
    pdfPrintModalContainer: H,
    pdfRangeChunkSize: $,
    pdfThumbnailDefaultOn: Z,
    pdfToolbarConfig: J,
    pdfEnableScrollBar: z,
    renderImageCommentWrapper: K,
    renderPDFCommentWrapper: Y,
    renderWatermark: q,
    showNotice: X,
    showPDFDigitalSign: Q,
    unsupportedVideoCodec: ee,
    userId: et,
    floatingToolbarHiddenOnStart: ei,
    renderNotPreviewableButtons: en,
    mediaConfig: eo,
    customComponents: er,
    useFastPDF: es,
    useFastPDFCache: el,
    teampediaOptions: ea,
    getToast: eu,
    actionManager: ed,
    riskDetectionExtra: ep,
    forceUseFullscreenInVcFollow: ec,
    avoidFollowVCState: eh,
    showCopyFailedTips: eE,
    seclinkEnabled: e_,
    isNeedCoverImgCache: em,
    customImgAttributes: ev,
    imageLimitConfig: eg,
    overrideBrandName: eP,
    specificPreviewTypeConfig: eI,
    isNotPreviewAutoDownload: eD,
    autoDownloadPreviewStatus: eC,
    isReferBlock: eT,
    isEmbed: eF,
    handlePdfPreviewClick: ew,
    pageScrollPosition: eb,
    scrollTopPosition: eR,
    attachmentPermissionManager: eO,
    wpsHiddenTabDestroyTime: ey,
    seclinkBaseUrl: e_ && !ef ? securityLinkProcessor.getSecurityBaseUrl() : ef,
    enablePptPreferTranscodePreview: eN,
    enableWordPreferTranscodePreview: eS,
    fileInfoReqMeta: eL,
    fileInfoMeta: ex
  }));
  let u = reactCoreLibraryReexport.createContext({});
  let d = memoizeFunctionUtil.default((e, t, i, n, o, r) => ({
    authority: e,
    fileInfo: t,
    permission: i,
    cooperUserList: n,
    fileType: o,
    CCMOfflineEnvConfig: r
  }));
  let c = reactCoreLibraryReexport.createContext({});
  let h = memoizeFunctionUtil.default((e, t, i, n, o, r, s, l, a, u, d, c, h, p) => ({
    coverImg: e,
    coverLoaded: t,
    coverLoadFailed: i,
    dataVersion: n,
    logOpenFileStatus: o,
    handlePreviewInfoGot: r,
    showNotPreviewableComponent: s,
    updateProgress: l,
    setCustomLoadingComponent: a,
    commonParams: u,
    originalPreviewUrl: d,
    renderNotPreviewableComponent: c,
    preventResetDataOnNextUpdate: h,
    setPreviewComponent: p
  }));
  function p(e) {
    return t => reactJsxRuntimeCoreReexport.jsx(l.Consumer, {
      children: i => reactJsxRuntimeCoreReexport.jsx(e, {
        ...t,
        fixedContextValue: i
      })
    });
  }
  function _(e) {
    return t => reactJsxRuntimeCoreReexport.jsx(l.Consumer, {
      children: i => reactJsxRuntimeCoreReexport.jsx(u.Consumer, {
        children: n => reactJsxRuntimeCoreReexport.jsx(e, {
          ...t,
          fixedContextValue: i,
          dynamicContextValue: n
        })
      })
    });
  }
  function f(e) {
    return t => reactJsxRuntimeCoreReexport.jsx(l.Consumer, {
      children: i => reactJsxRuntimeCoreReexport.jsx(u.Consumer, {
        children: n => reactJsxRuntimeCoreReexport.jsx(c.Consumer, {
          children: o => reactJsxRuntimeCoreReexport.jsx(e, {
            ...t,
            fixedContextValue: i,
            dynamicContextValue: n,
            boxPreviewContextValue: o
          })
        })
      })
    });
  }
  require.d(exports, {
    dynamicPreviewCtx: function () {
      return u;
    },
    createPreviewConfig: function () {
      return a;
    },
    createPreviewState: function () {
      return h;
    },
    createFileInfoConfig: function () {
      return d;
    },
    boxPreviewContext: function () {
      return c;
    },
    withPreviewContext: function () {
      return p;
    },
    withDynamicContext: function () {
      return _;
    },
    withBoxPreviewCtx: function () {
      return f;
    },
    previewContext: function () {
      return l;
    }
  });
}