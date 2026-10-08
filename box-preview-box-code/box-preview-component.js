// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'isNumberUtil'
// - Resolved require(897814) to 'is-number-util'
// - Renamed variable 'l' to 'previewConstants_1'
// - Resolved require(415792) to 'preview-constants_1'
// - Renamed variable 'h' to 'filePreviewUtils'
// - Resolved require(116443) to 'file-preview-utils'
// - Renamed variable 'c' to 'filePreviewTypeUtils'
// - Resolved require(732557) to 'file-preview-type-utils'
// - Renamed variable 'p' to 'fileTypeConstants_1'
// - Resolved require(331664) to 'file-type-constants_1'
// - Renamed variable 'u' to 'filePreviewSdkConstants'
// - Resolved require(842643) to 'file-preview-sdk-constants'
// - Renamed variable 'm' to 'isObjectOrFunction_1_1'
// - Resolved require(433743) to 'is-object-or-function_1_1'
// - Renamed variable 'd' to 'userAgentBrowserDetector'
// - Resolved require(966573) to 'user-agent-browser-detector'
// - Renamed variable 'f' to 'boxPreviewEventConstants'
// - Resolved require(654234) to 'box-preview-event-constants'
// - Renamed variable 'E' to 'driveSdkPreviewConstants'
// - Resolved require(395351) to 'drive-sdk-preview-constants'
// - Renamed variable 'C' to 'boxPreviewConstantsMap'
// - Resolved require(485900) to 'box-preview-constants-map'
// - Renamed variable 'T' to 'docFormatVersions'
// - Resolved require(226762) to 'doc-format-versions'
// - Renamed variable 'v' to 'styledComponentsCore'
// - Resolved require(842965) to 'styled-components-core'
// - Renamed variable 'S' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'N' to 'filePreviewContexts'
// - Resolved require(941450) to 'file-preview-contexts'
// - Updated imported property 'bt' to 'previewStates' (module 331664)
// - Updated imported property 'IR' to 'textFileTypes' (module 331664)
// - Updated imported property 'PO' to 'markdownFileTypes' (module 331664)
// - Updated imported property 'CJ' to 'fileExtensions' (module 331664)
// - Updated imported property 'uj' to 'toggleStateConstants' (module 654234)
// - Updated imported property 'mP' to 'previewEventConstants' (module 654234)
// - Updated imported property 'fh' to 'previewActionConstants' (module 654234)
// - Updated imported property 'fm' to 'postMessageToWindow' (module 116443)
// - Updated imported property 'JP' to 'checkCopyable' (module 116443)
// - Updated imported property 'N0' to 'checkPrintable' (module 116443)
// - Updated imported property 'iA' to 'safeJsonStringify' (module 116443)
// - Updated imported property 'ph' to 'getPreviewScene' (module 116443)
// - Updated imported property 'V$' to 'isValidMessageEvent' (module 116443)
// - Updated imported property 'r0' to 'handleCopyAction' (module 116443)
// - Updated imported property 'Yj' to 'handlePrintAction' (module 116443)
// - Updated imported property 'gf' to 'formatVersions' (module 226762)
// - Updated imported property 'xt' to 'libVersion' (module 226762)
// - Updated imported property 'Z' to 'isObjectOrFunction' (module 433743)
// - Updated imported property 'NS' to 'previewErrorCodes' (module 395351)
// - Updated imported property 'g_' to 'getBrowserName' (module 966573)
// - Updated imported property 'Vk' to 'getBrowserVersion' (module 966573)
// - Updated imported property 'Ms' to 'lifecycleEvents' (module 485900)
// - Updated imported property 'k2' to 'contextActions' (module 485900)
// - Updated imported property 'nO' to 'withBoxPreviewCtx' (module 941450)
// - Updated imported property 'Z' to 'isNumber' (module 897814)
// - Updated imported property 'UP' to 'defaultTimeout' (module 842643)
// - Updated imported property 'Mr' to 'resolvePreviewType' (module 732557)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-box-code.8dd44a3f.js
         * chunkId: 48578
         * moduleId: 470247
         */
module.exports = function (module, exports, require) {
  var s;
  var r;
  var a;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var previewConstants_1 = require("preview-constants_1") /*id: 415792*/;
  var filePreviewUtils = require("file-preview-utils") /*id: 116443*/;
  var filePreviewTypeUtils = require("file-preview-type-utils") /*id: 732557*/;
  var fileTypeConstants_1 = require("file-type-constants_1") /*id: 331664*/;
  var filePreviewSdkConstants = require("file-preview-sdk-constants") /*id: 842643*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var userAgentBrowserDetector = require("user-agent-browser-detector") /*id: 966573*/;
  var boxPreviewEventConstants = require("box-preview-event-constants") /*id: 654234*/;
  var driveSdkPreviewConstants = require("drive-sdk-preview-constants") /*id: 395351*/;
  var boxPreviewConstantsMap = require("box-preview-constants-map") /*id: 485900*/;
  var docFormatVersions = require("doc-format-versions") /*id: 226762*/;
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  let R = styledComponentsCore.default.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
  let I = styledComponentsCore.default.iframe`
  &&& {
    max-width: 100%;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: white;
    border: none;
    left: 0;
    top: 0;
  }
`;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function y(e, t, i) {
    var s;
    if ((t = typeof (s = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var s = i.call(e, t || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? s : s + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let _ = "box-preview-code";
  (s = {}).INIT_DATA = "initData";
  s.INIT_SRC_DATA = "initSrcData";
  s.SRC_DATA = "srcData";
  s.SET_COPY_SECRET = "setCopySecret";
  let b = s;
  (r = {}).LOAD_START = "loadStart";
  r.SCRIPT_LOADED = "scriptLoaded";
  r.INIT_COMPLETE = "initComplete";
  r.COMPLETE = "complete";
  r.ERROR = "error";
  r.SECLINK_CLICKED = "seclinkClicked";
  let w = r;
  (a = P || {}).NORMAL = "normal";
  a.CHROME_79_LIMITED = "chrome_79_limited";
  var P = a;
  let g = {
    csv: {
      [P.NORMAL]: 12582912,
      [P.CHROME_79_LIMITED]: 12582912
    },
    md: {
      [P.NORMAL]: 2097152,
      [P.CHROME_79_LIMITED]: 2097152
    },
    code: {
      [P.NORMAL]: 1048576,
      [P.CHROME_79_LIMITED]: 51200
    }
  };
  class A extends reactCoreLibraryReexport.PureComponent {
    componentDidMount() {
      if (this.isFileSizeExceeded) {
        this.props.boxPreviewContextValue.showNotPreviewableComponent(fileTypeConstants_1.previewStates.FILE_TOO_LARGE);
        return;
      }
      this.initIframeSrc();
      window.addEventListener("message", this.handleIframeMessage, false);
      this.handleEventFromBus(boxPreviewEventConstants.toggleStateConstants.ON);
    }
    componentWillUnmount() {
      window.removeEventListener("message", this.handleIframeMessage, false);
      this.handleEventFromBus(boxPreviewEventConstants.toggleStateConstants.OFF);
    }
    handleEventFromBus(e) {
      let {
        eventBus: t
      } = this.props.fixedContextValue;
      if (t) {
        t[e](boxPreviewEventConstants.previewEventConstants.ACTION_PERMISSION_CHANGED, this.setActionPermission);
        t[e](boxPreviewEventConstants.previewEventConstants.COPY_SECRET_CHANGED, this.setCopySecret);
      }
    }
    getIframeHost() {
      return this.props.fixedContextValue.networkController.getCodeTemplateHost();
    }
    get isFileSizeExceeded() {
      return this.props.fileSize > 12582912;
    }
    get isChrome79() {
      return this.browserName.toLowerCase() === "chrome" && this.browserVersion.startsWith("79");
    }
    get isFileTypeSupportHighlight() {
      let {
        dynamicContextValue: e
      } = this.props;
      let {
        fileType: t
      } = e;
      return !fileTypeConstants_1.textFileTypes.includes(t);
    }
    get canFileHighlight() {
      if (!this.isFileTypeSupportHighlight) {
        return false;
      }
      let {
        limitType: e
      } = this;
      let t = g.code[e];
      if (this.isCSVFile) {
        t = g.csv[e];
      }
      if (this.isMDFile) {
        t = g.md[e];
      }
      return this.props.fileSize < t;
    }
    get limitType() {
      let e = P.NORMAL;
      if (this.isChrome79) {
        e = P.CHROME_79_LIMITED;
      }
      return e;
    }
    sendInitialData() {
      filePreviewUtils.postMessageToWindow(this.iframeRef, this.apiHost, {
        key: b.INIT_DATA,
        value: {
          cdnHost: "https://lf-flow-web-cdn.doubaocdn.com/obj/flow-doubao",
          version: docFormatVersions.formatVersions[this.iframeName],
          libVersion: docFormatVersions.libVersion,
          copyable: filePreviewUtils.checkCopyable(this.props),
          printable: filePreviewUtils.checkPrintable(this.props)
        }
      });
    }
    async fetchResource(e) {
      try {
        let {
          fixedContextValue: t,
          previewUrl: i
        } = this.props;
        let {
          networkController: s
        } = t;
        let r = await s.getPreviewSource(i, e ? {
          Range: "bytes=0-10000"
        } : {});
        if (e) {
          this.fetchResource(false);
        }
        let a = r.request.responseText;
        let o = typeof a != "string" ? filePreviewUtils.safeJsonStringify(a, null, "\t") : a;
        filePreviewUtils.postMessageToWindow(this.iframeRef, this.apiHost, {
          key: e ? b.INIT_SRC_DATA : b.SRC_DATA,
          value: {
            text: o
          }
        });
      } catch (s) {
        let e = isObjectOrFunction_1_1.isObjectOrFunction(s) && s.code ? fileTypeConstants_1.previewStates.INTERFACE_ERROR : fileTypeConstants_1.previewStates.FILE_RENDER_ERROR;
        let t = isObjectOrFunction_1_1.isObjectOrFunction(s) && s.message ? s.message : s;
        let i = filePreviewUtils.safeJsonStringify(t);
        this.handleError(e, i);
      }
    }
    handleSecLinkClicked() {
      let {
        boxPreviewContextValue: e,
        fixedContextValue: t
      } = this.props;
      let i = filePreviewUtils.getPreviewScene(e.commonParams.mountPoint);
      t.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.OPERATION, {
        ...i,
        operationType: boxPreviewEventConstants.previewActionConstants.LINK_CLICKED
      });
    }
    handleSuccess() {
      let {
        updateProgress: e,
        logOpenFileStatus: t
      } = this.props.boxPreviewContextValue;
      let {
        isMobile: i
      } = this.props.fixedContextValue;
      e(100);
      t("success", driveSdkPreviewConstants.previewErrorCodes.Success);
      this.setActionPermission({
        copyable: filePreviewUtils.checkCopyable(this.props, i),
        printable: filePreviewUtils.checkPrintable(this.props)
      });
      this.props.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.RESOURCE_LOADED);
    }
    handleError(e, t) {
      let {
        updateProgress: i,
        showNotPreviewableComponent: s
      } = this.props.boxPreviewContextValue;
      i(100);
      s(e, t);
    }
    get isMDFile() {
      return fileTypeConstants_1.markdownFileTypes.includes(this.props.dynamicContextValue.fileType);
    }
    get isTXTFile() {
      return this.props.dynamicContextValue.fileType === fileTypeConstants_1.fileExtensions.TXT;
    }
    get isCSVFile() {
      return this.props.dynamicContextValue.fileType === fileTypeConstants_1.fileExtensions.CSV;
    }
    get iframeName() {
      if (this.isTXTFile || !this.canFileHighlight) {
        return "txt";
      } else if (this.isCSVFile) {
        return "csv";
      } else if (this.isMDFile) {
        return "md";
      } else {
        return "code";
      }
    }
    async initIframeSrc() {
      let e = await this.getIframeSrc();
      this.setState({
        iframeSrc: e
      });
    }
    async getIframeSrc() {
      return this.props.fixedContextValue.networkController.getBoxCodeIframeSrc(this.iframeName);
    }
    render() {
      let {
        iframeSrc: e
      } = this.state;
      if (e) {
        return reactJsxRuntimeCoreReexport.jsx(R, {
          "data-sel": _,
          children: reactJsxRuntimeCoreReexport.jsx(I, {
            "data-sel": `${_}-iframe`,
            src: e,
            ref: this.setIframeRef,
            onLoad: this.handleIframeLoaded
          })
        });
      } else {
        return null;
      }
    }
    constructor(e) {
      var t;
      super(e);
      t = this;
      y(this, "hasLoaded", false);
      y(this, "browserName", userAgentBrowserDetector.getBrowserName());
      y(this, "browserVersion", userAgentBrowserDetector.getBrowserVersion());
      y(this, "iframeRef", null);
      y(this, "apiHost", "");
      y(this, "copySecret", undefined);
      y(this, "handleIframeLoaded", () => {
        this.sendInitialData();
      });
      y(this, "handleIframeScriptLoaded", () => {
        let e = this.props.fileSize > 10240;
        this.fetchResource(e);
        this.hasLoaded = true;
      });
      y(this, "setActionPermission", function (e = {
        copyable: filePreviewUtils.checkCopyable(t.props, true),
        printable: filePreviewUtils.checkPrintable(t.props)
      }) {
        filePreviewUtils.postMessageToWindow(t.iframeRef, t.apiHost, {
          value: e,
          key: boxPreviewConstantsMap.lifecycleEvents.SET_ACTION_PERMISSION
        });
      });
      y(this, "handleIframeMessage", e => {
        let {
          boxPreviewContextValue: t,
          fixedContextValue: i
        } = this.props;
        let {
          setCustomLoadingComponent: s
        } = t;
        if (!filePreviewUtils.isValidMessageEvent(e, this.iframeRef)) {
          return;
        }
        let {
          data: r
        } = e;
        if (r.key) {
          switch (r.key) {
            case w.SCRIPT_LOADED:
              this.handleIframeScriptLoaded();
              i.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.RENDER_TEMPLATE);
              break;
            case w.INIT_COMPLETE:
              s(this.renderTransparentElement);
              i.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.FIRST_MEANINGFUL_PAINTED);
              break;
            case w.COMPLETE:
              this.handleSuccess();
              break;
            case w.ERROR:
              this.handleError(fileTypeConstants_1.previewStates.FILE_RENDER_ERROR);
              break;
            case w.SECLINK_CLICKED:
              this.handleSecLinkClicked();
              break;
            case boxPreviewConstantsMap.lifecycleEvents.ASYNC_ACTION:
              this.handleAsyncActions(e);
          }
        }
      });
      y(this, "setCopySecret", e => {
        this.copySecret = e;
        filePreviewUtils.postMessageToWindow(this.iframeRef, this.apiHost, {
          value: e,
          key: b.SET_COPY_SECRET
        });
      });
      y(this, "handleAsyncActions", e => {
        let i = e.data?.value;
        if (!i || !i.actionName) {
          return;
        }
        let s = true;
        let {
          eventBus: r,
          isMobile: a,
          isReferBlock: o
        } = this.props.fixedContextValue;
        switch (i.actionName) {
          case boxPreviewConstantsMap.contextActions.COPY:
            {
              let {
                content: t,
                showEncryptToast: n
              } = i.data || {};
              let {
                secret: l,
                withEntityId: c
              } = this.copySecret || {};
              s = filePreviewUtils.handleCopyAction(this.props, {
                e,
                secret: l,
                withEntityId: c,
                showEncryptToast: n,
                isMobile: a,
                isReferBlock: o,
                data: t
              });
              r.safelyEmit(boxPreviewEventConstants.previewEventConstants.TRIGGER_COPY);
              break;
            }
          case boxPreviewConstantsMap.contextActions.SEARCH:
            s = false;
            r.safelyEmit(boxPreviewEventConstants.previewEventConstants.TRIGGER_FINDBAR_TOGGLE);
            break;
          case boxPreviewConstantsMap.contextActions.PRINT:
            s = filePreviewUtils.handlePrintAction(this.props);
        }
        filePreviewUtils.postMessageToWindow(this.iframeRef, this.apiHost, {
          key: boxPreviewConstantsMap.lifecycleEvents.ASYNC_ACTION,
          value: {
            result: s,
            actionName: i.actionName
          }
        });
      });
      y(this, "renderTransparentElement", () => reactJsxRuntimeCoreReexport.jsx("div", {}));
      y(this, "setIframeRef", e => this.iframeRef = e);
      this.apiHost = this.getIframeHost();
      this.state = {
        iframeSrc: ""
      };
    }
  }
  var filePreviewContexts = require("file-preview-contexts") /*id: 941450*/;
  let O = filePreviewContexts.withBoxPreviewCtx(A);
  function x(e, t, i) {
    var s;
    if ((t = typeof (s = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var s = i.call(e, t || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? s : s + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class D extends reactCoreLibraryReexport.PureComponent {
    componentDidMount() {
      if (isNumberUtil.isNumber(this.previewType)) {
        this.getTranscodedPreviewData();
      } else {
        this.useFallbackUrl();
      }
    }
    componentWillUnmount() {
      if (this.cancelGettingPreviewUrl) {
        this.cancelGettingPreviewUrl();
        this.cancelGettingPreviewUrl = null;
      }
      if (this.retryTimer) {
        clearTimeout(this.retryTimer);
      }
    }
    async useFallbackUrl() {
      let {
        boxPreviewContextValue: e
      } = this.props;
      let {
        showNotPreviewableComponent: t
      } = e;
      try {
        let {
          networkController: e,
          fileInfoMeta: t
        } = this.props.fixedContextValue;
        let {
          commonParams: i
        } = this.props.boxPreviewContextValue;
        let s = await e.getDownloadUrl({
          ...i,
          fileInfoMeta: t
        });
        this.setState({
          previewInfo: {
            preview_url: s,
            status: fileTypeConstants_1.previewStates.READY
          }
        });
      } catch (i) {
        let e = filePreviewUtils.safeJsonStringify(i);
        t(fileTypeConstants_1.previewStates.INTERFACE_ERROR, e);
      }
    }
    get fileSize() {
      if (this.props.dynamicContextValue.fileInfo) {
        return this.props.dynamicContextValue.fileInfo.size;
      } else {
        return 0;
      }
    }
    render() {
      let {
        previewInfo: e
      } = this.state;
      if (e) {
        return reactJsxRuntimeCoreReexport.jsx(O, {
          previewUrl: e.preview_url,
          fileSize: this.fileSize
        });
      } else {
        return null;
      }
    }
    constructor(e) {
      super(e);
      x(this, "retryTimer", undefined);
      x(this, "pollCount", 0);
      x(this, "cancelGettingPreviewUrl", null);
      x(this, "previewType", null);
      x(this, "getTranscodedPreviewData", async () => {
        let {
          commonParams: e,
          handlePreviewInfoGot: t
        } = this.props.boxPreviewContextValue;
        let {
          networkController: i,
          fileInfoReqMeta: s
        } = this.props.fixedContextValue;
        try {
          if (this.pollCount > 10) {
            this.useFallbackUrl();
            return;
          }
          this.pollCount += 1;
          let r = this.previewType;
          let a = await i.getPreviewUrl({
            ...e,
            previewType: previewConstants_1.PreviewType.Text,
            fileInfoReqMeta: s
          });
          t({
            previewInfo: a,
            previewType: r
          });
          let {
            status: o
          } = a;
          let n = filePreviewSdkConstants.defaultTimeout;
          if (o === fileTypeConstants_1.previewStates.READY) {
            this.setState({
              previewInfo: a
            });
          } else if (o === fileTypeConstants_1.previewStates.PROGRESS) {
            this.retryTimer = window.setTimeout(this.getTranscodedPreviewData, n);
          } else {
            this.useFallbackUrl();
          }
        } catch (e) {
          this.useFallbackUrl();
        }
      });
      this.previewType = filePreviewTypeUtils.resolvePreviewType(e.dynamicContextValue.fileInfo);
      this.state = {
        previewInfo: null
      };
    }
  }
  var L = filePreviewContexts.withBoxPreviewCtx(D);
  require.r(exports);
  require.d(exports, {
    default: function () {
      return L;
    }
  });
}