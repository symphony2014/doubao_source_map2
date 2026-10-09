// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'previewConstants_1'
// - Resolved require(415792) to 'preview-constants_1'
// - Renamed variable 'a' to 'boxPreviewEventConstants'
// - Resolved require(654234) to 'box-preview-event-constants'
// - Renamed variable 'l' to 'fileTypeConstants_1'
// - Resolved require(331664) to 'file-type-constants_1'
// - Renamed variable 'h' to 'filePreviewSdkConstants'
// - Resolved require(842643) to 'file-preview-sdk-constants'
// - Renamed variable 'd' to 'styledComponentsCore'
// - Resolved require(842965) to 'styled-components-core'
// - Renamed variable 'u' to 'uiThemeColors'
// - Resolved require(80356) to 'ui-theme-colors'
// - Renamed variable 'w' to 'styledLoadingViews'
// - Resolved require(706922) to 'styled-loading-views'
// - Renamed variable 'C' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'I' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'y' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable 'R' to 'pdfPreviewStorageManager'
// - Resolved require(930637) to 'pdf-preview-storage-manager'
// - Renamed variable 'g' to 'filePreviewUtils'
// - Resolved require(116443) to 'file-preview-utils'
// - Renamed variable 'P' to 'boxPreviewConstantsMap'
// - Resolved require(485900) to 'box-preview-constants-map'
// - Renamed variable 'N' to 'driveSdkPreviewConstants'
// - Resolved require(395351) to 'drive-sdk-preview-constants'
// - Renamed variable 'A' to 'docFormatVersions'
// - Resolved require(226762) to 'doc-format-versions'
// - Renamed variable 'F' to 'filePreviewContexts'
// - Resolved require(941450) to 'file-preview-contexts'
// - Updated imported property 'Cb' to 'colorWhite' (module 80356)
// - Updated imported property 'hH' to 'colorGraySoft' (module 80356)
// - Updated imported property 'Mx' to 'colorGrayLight' (module 80356)
// - Updated imported property 'Y8' to 'colorBgLight' (module 80356)
// - Updated imported property 'g' to 'StyledLoadingView' (module 706922)
// - Updated imported property 'uj' to 'toggleStateConstants' (module 654234)
// - Updated imported property 'mP' to 'previewEventConstants' (module 654234)
// - Updated imported property 'fh' to 'previewActionConstants' (module 654234)
// - Updated imported property 'wF' to 'getPreviewData' (module 930637)
// - Updated imported property 'rn' to 'updatePreviewData' (module 930637)
// - Updated imported property 'IV' to 'driveSheetInfoKey' (module 842643)
// - Updated imported property 'UP' to 'defaultTimeout' (module 842643)
// - Updated imported property 'k2' to 'contextActions' (module 485900)
// - Updated imported property 'Ms' to 'lifecycleEvents' (module 485900)
// - Updated imported property 'F6' to 'actionTypes' (module 485900)
// - Updated imported property 'r0' to 'handleCopyAction' (module 116443)
// - Updated imported property 'Yj' to 'handlePrintAction' (module 116443)
// - Updated imported property 'fm' to 'postMessageToWindow' (module 116443)
// - Updated imported property 'JP' to 'checkCopyable' (module 116443)
// - Updated imported property 'N0' to 'checkPrintable' (module 116443)
// - Updated imported property 'iA' to 'safeJsonStringify' (module 116443)
// - Updated imported property 'ph' to 'getPreviewScene' (module 116443)
// - Updated imported property 'pH' to 'copyWithProtection' (module 116443)
// - Updated imported property 'V$' to 'isValidMessageEvent' (module 116443)
// - Updated imported property 'w' to 'excelVersion' (module 226762)
// - Updated imported property 'jp' to 'fileCategories' (module 331664)
// - Updated imported property 'bt' to 'previewStates' (module 331664)
// - Updated imported property 'VI' to 'imagePreviewTypes' (module 331664)
// - Updated imported property 'NS' to 'previewErrorCodes' (module 395351)
// - Updated imported property 'pJ' to 'toastInstance' (module 697541)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'nO' to 'withBoxPreviewCtx' (module 941450)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-box-sheet.0a8a1230.js
         * chunkId: 80215
         * moduleId: 906428
         */
module.exports = function (module, exports, require) {
  var r;
  var s;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var previewConstants_1 = require("preview-constants_1") /*id: 415792*/;
  var boxPreviewEventConstants = require("box-preview-event-constants") /*id: 654234*/;
  var fileTypeConstants_1 = require("file-type-constants_1") /*id: 331664*/;
  var filePreviewSdkConstants = require("file-preview-sdk-constants") /*id: 842643*/;
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  var uiThemeColors = require("ui-theme-colors") /*id: 80356*/;
  let p = styledComponentsCore.default.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
  let c = styledComponentsCore.default.iframe`
  &&& {
    max-width: 100%;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: ${uiThemeColors.colorWhite};
    border: none;
    left: 0;
    top: 0;
  }
`;
  let f = "40px";
  let m = "24px";
  let E = styledComponentsCore.default.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${uiThemeColors.colorWhite};
`;
  let b = styledComponentsCore.default.div`
  bottom: 0;
  left: 0;
  position: absolute;
  border-top: 1px solid ${uiThemeColors.colorGraySoft};
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background: white;
  height: 42px;
  max-height: 42px;
  user-select: none;
  color: ${uiThemeColors.colorGrayLight};
  text-align: left;
`;
  let T = styledComponentsCore.default.div`
  height: 100%;
  border-right: 1px solid ${uiThemeColors.colorGraySoft};
  padding: 10px;
  display: inline-block;
  font-size: 14px;
`;
  let x = styledComponentsCore.default.div`
  position: absolute;
  width: ${f};
  height: ${m};
  top: 0;
  left: 0;
  border-right: 1px solid ${uiThemeColors.colorGraySoft};
  border-bottom: 1px solid ${uiThemeColors.colorGraySoft};
`;
  let _ = styledComponentsCore.default.div`
  position: absolute;
  width: 100%;
  height: ${m};
  top: 0;
  left: 0;
  background: ${uiThemeColors.colorBgLight};
  font-size: 14px;
  border-bottom: 1px solid ${uiThemeColors.colorGraySoft};
`;
  let v = styledComponentsCore.default.div`
  position: absolute;
  width: ${f};
  height: 100%;
  top: 0;
  left: 0;
  background: ${uiThemeColors.colorBgLight};
  font-size: 14px;
  border-right: 1px solid ${uiThemeColors.colorGraySoft};
`;
  var styledLoadingViews = require("styled-loading-views") /*id: 706922*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class S extends reactCoreLibraryReexport.PureComponent {
    render() {
      let {
        tabs: e
      } = this.props;
      return reactJsxRuntimeCoreReexport.jsxs(E, {
        children: [reactJsxRuntimeCoreReexport.jsx(_, {}), reactJsxRuntimeCoreReexport.jsx(v, {}), reactJsxRuntimeCoreReexport.jsx(x, {}), reactJsxRuntimeCoreReexport.jsx(styledLoadingViews.StyledLoadingView, {
          size: "large"
        }), e && e.length > 0 && reactJsxRuntimeCoreReexport.jsx(b, {
          children: e.map((e, t) => reactJsxRuntimeCoreReexport.jsx(T, {
            children: e
          }, t))
        })]
      });
    }
  }
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var pdfPreviewStorageManager = require("pdf-preview-storage-manager") /*id: 930637*/;
  var filePreviewUtils = require("file-preview-utils") /*id: 116443*/;
  var boxPreviewConstantsMap = require("box-preview-constants-map") /*id: 485900*/;
  var driveSdkPreviewConstants = require("drive-sdk-preview-constants") /*id: 395351*/;
  var docFormatVersions = require("doc-format-versions") /*id: 226762*/;
  function H(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  let k = "box-preview-sheet";
  (r = {}).INIT_DATA = "initData";
  r.UPDATE_TAB_INDEX = "updateTabIndex";
  r.SET_COPY_SECRET = "setCopySecret";
  r.FETCH_STYLE = "fetchStyle";
  r.FETCH_HTML = "fetchHtml";
  let O = r;
  (s = {}).LOAD_START = "loadStart";
  s.FIRST_SCREEN_PAINTED = "firstScreenPainted";
  s.SECLINK_CLICKED = "seclinkClicked";
  s.CURRENT_TAB_CHANGED = "currentTabChanged";
  s.FETCH_ERROR = "fetchError";
  s.FETCH_STYLE = "fetchStyle";
  s.FETCH_HTML = "fetchHtml";
  let D = s;
  class L extends reactCoreLibraryReexport.PureComponent {
    componentDidMount() {
      window.addEventListener("message", this.handleIframeMessage, false);
      window.addEventListener("beforeunload", this.rememberCurrentTabIndex);
      this.handleEventFromBus(boxPreviewEventConstants.toggleStateConstants.ON);
    }
    componentWillUnmount() {
      window.removeEventListener("message", this.handleIframeMessage, false);
      window.removeEventListener("beforeunload", this.rememberCurrentTabIndex);
      this.rememberCurrentTabIndex();
      this.handleEventFromBus(boxPreviewEventConstants.toggleStateConstants.OFF);
    }
    getLastTabIndex() {
      let {
        dataVersion: e
      } = this.props.boxPreviewContextValue;
      let {
        enableSheetProgressCache: t
      } = this.props.fixedContextValue;
      if (t) {
        let t = pdfPreviewStorageManager.getPreviewData({
          dataVersion: e,
          key: filePreviewSdkConstants.driveSheetInfoKey,
          fileToken: this.fileToken
        });
        if (t && t.tabIndex) {
          return t.tabIndex;
        }
      }
      return 0;
    }
    handleEventFromBus(e) {
      let {
        eventBus: t
      } = this.props.fixedContextValue;
      if (t) {
        t[e](boxPreviewEventConstants.previewEventConstants.TRIGGER_SHEET_ACTION, this.handleEventByAction);
        t[e](boxPreviewEventConstants.previewEventConstants.ACTION_PERMISSION_CHANGED, this.setActionPermission);
        t[e](boxPreviewEventConstants.previewEventConstants.COPY_SECRET_CHANGED, this.setCopySecret);
        t[e](boxPreviewEventConstants.previewEventConstants.COPY_FULL_SHEET, this.copyFullSheet);
      }
    }
    handleAsyncActions(e) {
      let i = e.data?.value;
      if (!(i == null ? undefined : i.actionName)) {
        return;
      }
      let r = true;
      let {
        eventBus: s,
        isMobile: o,
        isReferBlock: n
      } = this.props.fixedContextValue;
      switch (i.actionName) {
        case boxPreviewConstantsMap.contextActions.COPY:
          {
            let {
              content: t,
              showEncryptToast: l
            } = i.data || {};
            let {
              secret: h,
              withEntityId: d
            } = this.copySecret || {};
            r = filePreviewUtils.handleCopyAction(this.props, {
              e,
              secret: h,
              withEntityId: d,
              showEncryptToast: l,
              isMobile: o,
              isReferBlock: n,
              data: t
            });
            s.safelyEmit(boxPreviewEventConstants.previewEventConstants.TRIGGER_COPY);
            break;
          }
        case boxPreviewConstantsMap.contextActions.SEARCH:
          r = false;
          s.safelyEmit(boxPreviewEventConstants.previewEventConstants.TRIGGER_FINDBAR_TOGGLE);
          break;
        case boxPreviewConstantsMap.contextActions.PRINT:
          r = filePreviewUtils.handlePrintAction(this.props);
      }
      filePreviewUtils.postMessageToWindow(this.iframeRef, this.props.iframeHost, {
        key: boxPreviewConstantsMap.lifecycleEvents.ASYNC_ACTION,
        value: {
          result: r,
          actionName: i.actionName
        }
      });
    }
    sendInitialData() {
      let {
        iframeHost: e,
        previewExtra: t,
        fixedContextValue: i,
        boxPreviewContextValue: r
      } = this.props;
      let {
        i18n: s,
        scrollTopPosition: o
      } = i;
      let {
        commonParams: n
      } = r;
      let {
        fileToken: a
      } = n;
      let l = this.getLastTabIndex();
      if (o) {
        l = o.page;
      }
      filePreviewUtils.postMessageToWindow(this.iframeRef, e, {
        key: O.INIT_DATA,
        value: {
          index: l,
          cdnHost: "https://lf-flow-web-cdn.doubaocdn.com/obj/flow-doubao",
          platform: "web",
          previewExtra: t,
          fileToken: a,
          version: docFormatVersions.excelVersion,
          perTabMaxSize: 31457280,
          sizeExceededTipsText: s["error.excel.size_exceeded"],
          copyable: filePreviewUtils.checkCopyable(this.props),
          printable: filePreviewUtils.checkPrintable(this.props),
          parentOrigin: window.location.origin
        }
      });
    }
    handleFetchError(e) {
      this.props.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.PREVIEW_ERROR, {
        messageDetail: filePreviewUtils.safeJsonStringify(e),
        previewComponent: fileTypeConstants_1.fileCategories.SHEET
      });
      if (!this.hasLoaded && e.subId !== "style") {
        let t = e.status === 403 ? fileTypeConstants_1.previewStates.NO_PERMISSION : fileTypeConstants_1.previewStates.IFRAME_NETWORK_ERROR;
        this.props.boxPreviewContextValue.showNotPreviewableComponent(t);
      }
    }
    handleTabChanged(e) {
      if (e && e.value) {
        this.currentTabIndex = Number(e.value.index);
        this.props.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.SHEET_TAB_INDEX_UPDATED, {
          tabIndex: e.value.index
        });
      }
    }
    handleSecLinkClicked() {
      let {
        boxPreviewContextValue: e,
        fixedContextValue: t
      } = this.props;
      let {
        eventBus: i
      } = t;
      let {
        commonParams: r
      } = e;
      let s = filePreviewUtils.getPreviewScene(r.mountPoint);
      i.safelyEmit(boxPreviewEventConstants.previewEventConstants.OPERATION, {
        ...s,
        operationType: boxPreviewEventConstants.previewActionConstants.LINK_CLICKED
      });
    }
    handleLoaded() {
      if (this.hasLoaded) {
        return;
      }
      let {
        updateProgress: e,
        logOpenFileStatus: t
      } = this.props.boxPreviewContextValue;
      let {
        isMobile: i
      } = this.props.fixedContextValue;
      this.hasLoaded = true;
      e(100);
      t("success", driveSdkPreviewConstants.previewErrorCodes.Success);
      this.setActionPermission({
        copyable: filePreviewUtils.checkCopyable(this.props, i),
        printable: filePreviewUtils.checkPrintable(this.props)
      });
      this.props.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.RESOURCE_LOADED);
    }
    handleShortcutRendered() {
      let {
        fixedContextValue: e
      } = this.props;
      let {
        eventBus: t
      } = e;
      t.safelyEmit(boxPreviewEventConstants.previewEventConstants.SHORTCUT_RENDERED, {
        shortcutType: fileTypeConstants_1.fileCategories.SHEET
      });
    }
    async handleFetchSheetStyle() {
      try {
        let {
          networkController: e,
          fileInfoReqMeta: t
        } = this.props.fixedContextValue;
        let {
          commonParams: i
        } = this.props.boxPreviewContextValue;
        let {
          fileToken: r
        } = i;
        let s = await e.getSheetStyle(r, t);
        filePreviewUtils.postMessageToWindow(this.iframeRef, this.props.iframeHost, {
          value: s,
          key: O.FETCH_STYLE
        });
      } catch (e) {
        this.props.boxPreviewContextValue.showNotPreviewableComponent(fileTypeConstants_1.previewStates.IFRAME_NETWORK_ERROR);
      }
    }
    async handleFetchSheetHtml(e) {
      this.currentSubId = e;
      try {
        let {
          networkController: t,
          fileInfoReqMeta: i
        } = this.props.fixedContextValue;
        let {
          commonParams: r
        } = this.props.boxPreviewContextValue;
        let {
          fileToken: s
        } = r;
        let o = await t.getSheetHtml(e, s, i);
        if (o) {
          this.sheetHtmlMap[e] = o;
        }
        filePreviewUtils.postMessageToWindow(this.iframeRef, this.props.iframeHost, {
          value: {
            html: o,
            subId: e
          },
          key: O.FETCH_HTML
        });
      } catch (e) {
        this.props.boxPreviewContextValue.showNotPreviewableComponent(fileTypeConstants_1.previewStates.IFRAME_NETWORK_ERROR);
      }
    }
    render() {
      return reactJsxRuntimeCoreReexport.jsx(p, {
        "data-sel": k,
        children: reactJsxRuntimeCoreReexport.jsx(c, {
          "data-sel": `${k}-iframe`,
          src: this.props.iframeSrc,
          ref: this.setIframeRef,
          sandbox: "allow-scripts allow-same-origin allow-downloads allow-popups allow-forms allow-top-navigation-by-user-activation allow-top-navigation-to-custom-protocols"
        })
      });
    }
    constructor(...e) {
      var t;
      super(...e);
      t = this;
      H(this, "fileToken", this.props.boxPreviewContextValue.commonParams.fileToken);
      H(this, "iframeRef", null);
      H(this, "hasLoaded", false);
      H(this, "currentTabIndex", 0);
      H(this, "copySecret", undefined);
      H(this, "currentSubId", undefined);
      H(this, "sheetHtmlMap", {});
      H(this, "rememberCurrentTabIndex", () => {
        let {
          dataVersion: e
        } = this.props.boxPreviewContextValue;
        let {
          enableSheetProgressCache: t
        } = this.props.fixedContextValue;
        if (t) {
          pdfPreviewStorageManager.updatePreviewData({
            key: filePreviewSdkConstants.driveSheetInfoKey,
            info: {
              token: this.fileToken,
              version: e,
              tabIndex: this.currentTabIndex
            }
          });
        }
      });
      H(this, "copyFullSheet", () => {
        let e = this.sheetHtmlMap[this.currentSubId || 0];
        if (e) {
          let t = new XMLHttpRequest();
          t.open("GET", e);
          t.onreadystatechange = () => {
            if (t.readyState === 4) {
              let e = t.status;
              if (e >= 200 && e < 300 || e === 304) {
                let e = new DOMParser().parseFromString(t.response, "text/html").querySelector("table");
                if (!e) {
                  return;
                }
                let i = "";
                e.querySelectorAll("tr").forEach(e => {
                  let t = e.querySelectorAll("th, td");
                  let r = [];
                  t.forEach(e => {
                    r.push(e.innerText);
                  });
                  i += `${r.join("\t")}
`;
                });
                if (filePreviewUtils.copyWithProtection({
                  data: i
                })) {
                  samanthaToastFactory.toastInstance.success(i18nTranslationUtils.i18nextTranslate("drive_toast_copied"));
                }
              }
            }
          };
          t.send();
        }
      });
      H(this, "setCopySecret", e => {
        this.copySecret = e;
        filePreviewUtils.postMessageToWindow(this.iframeRef, this.props.iframeHost, {
          value: e,
          key: O.SET_COPY_SECRET
        });
      });
      H(this, "setActionPermission", function (e = {
        copyable: filePreviewUtils.checkCopyable(t.props, true),
        printable: filePreviewUtils.checkPrintable(t.props)
      }) {
        filePreviewUtils.postMessageToWindow(t.iframeRef, t.props.iframeHost, {
          value: e,
          key: boxPreviewConstantsMap.lifecycleEvents.SET_ACTION_PERMISSION
        });
      });
      H(this, "handleEventByAction", e => {
        if ((e == null ? undefined : e.action) && e.action === boxPreviewConstantsMap.actionTypes.SHEET_TO_TAB) {
          let {
            iframeHost: t
          } = this.props;
          if (typeof e.tabIndex == "number") {
            this.currentTabIndex = e.tabIndex;
            filePreviewUtils.postMessageToWindow(this.iframeRef, t, {
              key: O.UPDATE_TAB_INDEX,
              value: {
                tabIndex: this.currentTabIndex
              }
            });
          }
        }
      });
      H(this, "handleIframeMessage", e => {
        if (!filePreviewUtils.isValidMessageEvent(e, this.iframeRef)) {
          return;
        }
        let {
          data: t
        } = e;
        if (t.key) {
          switch (t.key) {
            case D.LOAD_START:
              this.props.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.RENDER_TEMPLATE);
              this.sendInitialData();
              break;
            case D.FIRST_SCREEN_PAINTED:
              this.handleLoaded();
              break;
            case D.SECLINK_CLICKED:
              this.handleSecLinkClicked();
              break;
            case D.CURRENT_TAB_CHANGED:
              this.handleTabChanged(t);
              break;
            case D.FETCH_ERROR:
              this.handleFetchError(t.value);
              break;
            case boxPreviewConstantsMap.lifecycleEvents.ASYNC_ACTION:
              this.handleAsyncActions(e);
              break;
            case boxPreviewConstantsMap.lifecycleEvents.SHORTCUT_RENDERED:
              this.handleShortcutRendered();
              break;
            case D.FETCH_STYLE:
              this.handleFetchSheetStyle();
              break;
            case D.FETCH_HTML:
              this.handleFetchSheetHtml(t.value?.subId);
          }
        }
      });
      H(this, "setIframeRef", e => this.iframeRef = e);
    }
  }
  var filePreviewContexts = require("file-preview-contexts") /*id: 941450*/;
  let M = filePreviewContexts.withBoxPreviewCtx(L);
  function V(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  class j extends reactCoreLibraryReexport.PureComponent {
    componentDidMount() {
      this.getTranscodedPreviewData(true);
      this.initIframeSrc();
    }
    componentWillUnmount() {
      if (this.cancelGettingPreviewUrl) {
        this.cancelGettingPreviewUrl();
      }
      if (this.retryTimer) {
        clearTimeout(this.retryTimer);
      }
    }
    async initIframeSrc() {
      let e = await this.getIframeSrc();
      this.setState({
        iframeSrc: e
      });
    }
    async getIframeSrc() {
      return this.props.fixedContextValue.networkController.getExcelIframeSrc();
    }
    getIframeHost() {
      return this.props.fixedContextValue.networkController.getExcelTemplateHost();
    }
    getTabs(e = "{}") {
      let t = [];
      try {
        t = JSON.parse(e).sheets || [];
      } catch (e) {}
      let i = t.map(e => e.name);
      if (i.length === 1 && i[0] === "") {
        return [];
      } else {
        return i;
      }
    }
    setFramework() {
      let {
        boxPreviewContextValue: e,
        fixedContextValue: t
      } = this.props;
      let {
        setCustomLoadingComponent: i
      } = e;
      let {
        eventBus: r
      } = t;
      i(this.renderSheetFramework);
      r.safelyEmit(boxPreviewEventConstants.previewEventConstants.FIRST_MEANINGFUL_PAINTED);
    }
    render() {
      let {
        previewInfo: e,
        iframeSrc: t
      } = this.state;
      if (e && t) {
        return reactJsxRuntimeCoreReexport.jsx(M, {
          iframeSrc: t,
          iframeHost: this.iframeHost,
          previewExtra: e.extra || ""
        });
      } else {
        return null;
      }
    }
    constructor(e) {
      super(e);
      V(this, "cancelGettingPreviewUrl", null);
      V(this, "retryTimer", undefined);
      V(this, "iframeHost", undefined);
      V(this, "pollCount", 0);
      V(this, "getTranscodedPreviewData", async e => {
        let {
          commonParams: t,
          handlePreviewInfoGot: i,
          showNotPreviewableComponent: r
        } = this.props.boxPreviewContextValue;
        let {
          maxPollCount: s,
          networkController: o,
          fileInfoReqMeta: a
        } = this.props.fixedContextValue;
        try {
          if (this.pollCount > s) {
            r(fileTypeConstants_1.previewStates.PROGRESS);
            return;
          }
          this.pollCount += 1;
          let e = fileTypeConstants_1.imagePreviewTypes.HTML;
          let d = await o.getTranscodeStatus({
            ...t,
            previewType: previewConstants_1.PreviewType.ExcelHtml,
            fileInfoReqMeta: a
          });
          this.cancelGettingPreviewUrl = null;
          i({
            previewInfo: d,
            previewType: e
          });
          let {
            status: u
          } = d;
          let p = filePreviewSdkConstants.defaultTimeout;
          if (u === fileTypeConstants_1.previewStates.READY) {
            this.setState({
              previewInfo: d
            }, () => {
              this.setFramework();
            });
          } else if (u === fileTypeConstants_1.previewStates.PROGRESS) {
            this.retryTimer = window.setTimeout(this.getTranscodedPreviewData, p);
          } else {
            r(u);
          }
        } catch (e) {
          r(fileTypeConstants_1.previewStates.INTERFACE_ERROR);
        }
      });
      V(this, "renderSheetFramework", () => {
        let {
          previewInfo: e
        } = this.state;
        let t = e ? e.extra : "";
        let i = this.getTabs(t);
        return reactJsxRuntimeCoreReexport.jsx(S, {
          tabs: i
        });
      });
      this.iframeHost = this.getIframeHost();
      this.state = {
        previewInfo: null,
        iframeSrc: ""
      };
    }
  }
  var G = filePreviewContexts.withBoxPreviewCtx(j);
  require.r(exports);
  require.d(exports, {
    default: function () {
      return G;
    }
  });
}