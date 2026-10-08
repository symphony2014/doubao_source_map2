// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'SuiteErrorCodes'
// - Renamed export 'Z' to 'SuiteErrorHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 380284
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var statusCodes = require("status-codes") /*id: 497936*/;
  var hostPlatformServiceTypes = require("host-platform-service-types") /*id: 857478*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var copilotShareModes = require("copilot-share-modes") /*id: 493662*/;
  var loadingStateManager = require("loading-state-manager") /*id: 821282*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var documentErrorConstants = require("document-error-constants") /*id: 732640*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  let f = reactLoadableComponent({
    loader: () => require.e("error_overlay") /*id: 9112*/.then(require.bind(require, "error-overlay-component") /*id: 860222*/),
    loading: () => null
  });
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function m(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  let {
    STATUS_CODE: I
  } = statusCodes.statusCodes;
  let O = [I.NOT_FOUND, I.FORBIDDEN, I.NOTE_DELETED];
  let R = {
    NOT_FOUND: I.NOT_FOUND,
    INVALID_PARAMETERS: I.INVALID_PARAMETERS,
    NOTE_DELETED: I.NOTE_DELETED,
    FORBIDDEN: I.FORBIDDEN,
    CONNECT_ERROR: I.CONNECT_ERROR,
    SECURITY_RESOURCE_REJECTED: 671020001,
    FAILED: I.FAILED,
    NOTE_DELETED_FLOW: 4000007
  };
  class h extends reactCoreLibraryReexport.Component {
    get suiteInjectProps() {
      return {
        ready: this.state.ready,
        onClientVarsReady: this.onClientVarsReady,
        onClientVarsError: this.onClientVarsError,
        shouldHandOutError: this.detectIsCommonError,
        getSuiteWrapperDom: this.getSuiteWrapperDom
      };
    }
    get hostPlatform() {
      return diContainerInstance.diContainer.get(hostPlatformServiceTypes.HostPlatformService).getHostPlatform();
    }
    get shouldShowLoading() {
      return !this.state.ready && this.state.error === null;
    }
    componentDidMount() {
      docxEditorEventConstantsAndManager.globalEventEmitter.on(docxEditorEventConstantsAndManager.eventConstants.COMMON.DOCUMENT_SWITCH_DELETED, this.handleDocxDeleted.bind(this));
    }
    componentWillUnmount() {
      var e;
      var n;
      this.unSubscribeDocumentSwitch();
      if ((e = (n = this.props).deleteSuiteCilentVarsError) !== null && e !== undefined) {
        e.call(n, this.props.currentSuiteToken);
      }
    }
    componentDidUpdate(e) {
      if (e.isPermissionInit && e.isPermissionForbidden !== this.props.isPermissionForbidden) {
        if (this.props.isPermissionForbidden && e.isPermissionForbidden !== this.props.isPermissionForbidden) {
          this.triggerError({
            code: I.FORBIDDEN
          });
          return;
        }
        if (!this.props.isPermissionForbidden) {
          this.clearError();
        }
      }
    }
    render() {
      let {
        isVerificationFailedInOwnerView: e,
        LoadingComponent: n
      } = this.props;
      let r = n || loadingStateManager.LoadingTrigger;
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a("suite-body flex layout-column", {
          "verify-fail-in-owner-view": e
        }),
        ref: this.setWrapperRef,
        children: [this.getRenderContent(), this.shouldShowLoading ? reactJsxRuntimeCoreReexport.jsx(r, {}) : null]
      });
    }
    constructor(e) {
      super(e);
      m(this, "wrapperRef", undefined);
      m(this, "deregisterContentVerifyMsg", undefined);
      m(this, "deregisterVersionRecoverMsg", undefined);
      m(this, "getSuiteWrapperDom", () => this.wrapperRef);
      m(this, "clearError", () => {
        var e;
        var n;
        this.setState({
          error: null
        });
        if ((n = this.props) !== null && n !== undefined && (e = n.deleteSuiteCilentVarsError) !== null && e !== undefined) {
          e.call(n, this.props.currentSuiteToken);
        }
      });
      m(this, "triggerError", e => {
        var n;
        var r;
        this.setState({
          error: e
        });
        if ((r = this.props) !== null && r !== undefined && (n = r.setSuiteCilentVarsError) !== null && n !== undefined) {
          n.call(r, this.props.currentSuiteToken, e);
        }
        docxEventCollector.wrappedCollector("flow_doc_suite_error", {
          ...this.props.reportParams,
          code: (e == null ? undefined : e.code) || -1
        });
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.SUITE_DOCUMENT_ON_ERROR, {
          error: e,
          currentSuiteToken: this.props.currentSuiteToken
        });
      });
      m(this, "onClientVarsReady", () => {
        this.setState(() => ({
          ready: true,
          isCurSuiteReadyOnce: true
        }));
        this.clearError();
      });
      m(this, "onClientVarsError", e => {
        if (!e) {
          return;
        }
        let {
          NOT_FOUND: n,
          INVALID_PARAMETERS: r
        } = R;
        let i = e.code;
        if (i === n || i === r) {
          i = n;
        }
        this.triggerError({
          ...e,
          code: i
        });
      });
      m(this, "detectIsCommonError", e => O.includes(e));
      m(this, "setWrapperRef", e => {
        this.wrapperRef = e;
      });
      m(this, "getOverlayProps", e => {
        if (!e) {
          return null;
        }
        let {
          flowSuiteType: n
        } = this.props;
        let {
          NOT_FOUND: r,
          NOTE_DELETED: i,
          FORBIDDEN: o,
          CONNECT_ERROR: a,
          INVALID_PARAMETERS: u,
          NOTE_DELETED_FLOW: _
        } = R;
        let {
          code: s
        } = e ?? {};
        if (s === r || s === u) {
          return {
            type: documentErrorConstants.DocumentErrorCodes.NOT_FOUND
          };
        } else if (s === i || s === String(_)) {
          return {
            type: documentErrorConstants.DocumentErrorCodes.DELETED
          };
        } else if (s === o && n !== copilotShareModes.CopilotShareModes.Share) {
          return {
            type: documentErrorConstants.DocumentErrorCodes.NOT_AUTHORIZED
          };
        } else if (s === o && n === copilotShareModes.CopilotShareModes.Share || s === 671020001) {
          return {
            type: documentErrorConstants.DocumentErrorCodes.DOCX_CONTENT_UNAVAILABLE
          };
        } else if ((s == null ? undefined : s.toString()) === String(docxEditorConstantsConfig.documentStatusCodes.UPGRADED_FUSION_DOC)) {
          return {
            type: this.hostPlatform === hostPlatformServiceTypes.platformTypes.LocalDesktop ? documentErrorConstants.DocumentErrorCodes.NEED_UPGRADE_DESKTOP : documentErrorConstants.DocumentErrorCodes.DOC_UPGRADED_REFRESH
          };
        } else if ((s == null ? undefined : s.toString()) !== a || this.state.isCurSuiteReadyOnce) {
          return {
            type: documentErrorConstants.DocumentErrorCodes.DEFAULT
          };
        } else {
          return {
            type: documentErrorConstants.DocumentErrorCodes.NETWORK_ERROR
          };
        }
      });
      m(this, "getRenderContent", () => {
        let {
          error: e
        } = this.state;
        let n = this.getOverlayProps(e);
        if (n !== null) {
          return reactJsxRuntimeCoreReexport.jsx(f, {
            ...n
          });
        }
        let {
          children: r
        } = this.props;
        if (typeof r == "function") {
          return r(this.suiteInjectProps);
        } else {
          return reactCoreLibraryReexport.cloneElement(r, this.suiteInjectProps);
        }
      });
      m(this, "handleDocxDeleted", e => {
        let {
          currentSuiteToken: n
        } = this.props;
        if (n === e.token) {
          this.triggerError({
            code: I.NOTE_DELETED
          });
          this.unSubscribeDocumentSwitch();
        }
      });
      m(this, "unSubscribeDocumentSwitch", () => {
        docxEditorEventConstantsAndManager.globalEventEmitter.off(docxEditorEventConstantsAndManager.eventConstants.COMMON.DOCUMENT_SWITCH_DELETED, this.handleDocxDeleted.bind(this));
      });
      this.state = {
        ready: false,
        isCurSuiteReadyOnce: false,
        error: null,
        reported: false
      };
    }
  }
  var N = h;
  require.d(exports, {
    SuiteErrorCodes: function () {
      return R;
    },
    SuiteErrorHandler: function () {
      return N;
    }
  });
}