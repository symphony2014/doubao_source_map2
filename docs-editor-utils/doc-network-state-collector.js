// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'collectNetworkState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 193991
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var toastNotificationService = require("toast-notification-service") /*id: 420505*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var tokenManager = require("token-manager") /*id: 939673*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docUrlResolver = require("doc-url-resolver") /*id: 199176*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var anchorConstantsConfig = require("anchor-constants-config") /*id: 302634*/;
  var docxImageViewerUtils = require("docx-image-viewer-utils") /*id: 200311*/;
  require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var editorCommands = require("editor-commands") /*id: 361547*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  async function v(e, n, r, o) {
    let {
      blockManager: i,
      rect: l
    } = n;
    let c = o == null ? undefined : o.shouldSyncDataIfStaled;
    if (!i || !l) {
      return false;
    }
    for (let {
      block_id: n
    } of e) {
      try {
        await new Promise((o, i) => {
          T(n, e, r, {
            onSuccess: o,
            onFailure: i,
            shouldSyncDataIfStaled: c
          });
        });
        return true;
      } catch (e) {}
      c = false;
    }
    return false;
  }
  function T(e, n, r, o) {
    docxEditorEventConstantsAndManager.globalEventEmitter.trigger(editorCommands.editorCommands.LocateBlockWithRecordId, [e, {
      selectedBlocks: n,
      source: r,
      options: o
    }]);
  }
  var docxAnchorApi = require("docx-anchor-api") /*id: 814805*/;
  var docxPartialAnchorConstants = require("docx-partial-anchor-constants") /*id: 311228*/;
  var docAnchorCollabUtilities = require("doc-anchor-collab-utilities") /*id: 762610*/;
  var editorTranslationCheck = require("editor-translation-check") /*id: 518289*/;
  function y(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
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
  let O = new class {
    get isFeedAnchor() {
      let n = window.__LARK_MESSAGE_SSR__?.LAST_MESSAGE;
      if (n == null) {
        return undefined;
      } else {
        return n.anchorId;
      }
    }
    init(e) {
      this.hasReachAnchorLimit = false;
      this.structVersionError = false;
      this.props = e;
    }
    destroy() {
      this.props = null;
      this.hasReachAnchorLimit = false;
      this.structVersionError = false;
      this.anchorMap = {};
    }
    collectEvent(e, n) {
      var r;
      var o;
      if ((o = this.props) !== null && o !== undefined && (r = o.blockManager) !== null && r !== undefined) {
        r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent(e, n);
      }
    }
    async createRangeAnchor(e) {
      let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let r = arguments.length > 2 ? arguments[2] : undefined;
      let o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : anchorConstantsConfig.anchorType.normalAnchor;
      let i = await this.generateRangeAnchorInfo(r, o);
      let l = i ? await docxAnchorApi.createAnchor(i, this.handleCreateAnchorError) : anchorConstantsConfig.emptyString;
      if (l) {
        if (n) {
          docxImageViewerUtils.showImageToast(docxImageViewerUtils.getImageText.success);
        }
        return docAnchorCollabUtilities.createAnchorKey(l, o);
      } else {
        if (n) {
          docxImageViewerUtils.showImageToast(docxImageViewerUtils.getImageText.error);
        }
        return anchorConstantsConfig.emptyString;
      }
    }
    async generateRangeAnchorInfo(e) {
      var n;
      var r;
      var c;
      var u;
      var d;
      let f;
      let p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : anchorConstantsConfig.anchorType.normalAnchor;
      let {
        blockManager: m,
        selectionAPI: b
      } = this.props || {};
      if (!m || !b) {
        return;
      }
      let v = m;
      let T = e || b.getSelection();
      let C = [];
      let k = docxFeatureFlags.isErAndEn() ? !editorTranslationCheck.isTranslationActive(T, m) : !docxImageViewerUtils.DocxImageViewer();
      let I = T.length && T.every(e => e.referBlockId);
      if (I) {
        let e = T[0].referBlockId;
        let n = m.getBlockViewByBlockId(e);
        f = n.model.record.id;
        v = n.docxEditor?.blockManager;
      }
      let y = p === anchorConstantsConfig.anchorType.textCardAnchor;
      T.forEach(e => {
        var r;
        let {
          id: o,
          type: i,
          selection: c
        } = e;
        let u = v.getRecordByBlockId(o)?.id;
        if (!u) {
          return;
        }
        let a = (r = v.editorAPI.getService(collabTriggersProvider.collabProvider, {
          optional: true
        })) === null || r === undefined ? undefined : r.getVersion(u);
        let s = v.getBlockModelByBlockId(o);
        if (!s || isUndefinedCheck.isUndefined(a)) {
          return;
        }
        this.ignoreHideOkr(v, o);
        let d = null;
        if (k && i === "text" && c) {
          let e = docxImageViewerUtils.getDocxImageUrl(s).length;
          let {
            start: n,
            end: r
          } = c;
          if (n === r && (n === 0 || n === e)) {
            return;
          }
          if (y || r - n !== e) {
            d = {
              src_start_idx: n,
              src_end_idx: Math.min(r, e)
            };
          }
        }
        let f = {
          block_id: u,
          src_version: a,
          selected_text: d
        };
        C.push(f);
      });
      let {
        rootRecordId: O
      } = m;
      if (docUrlResolver.isDocDomain(O)) {
        O = await tokenManager.tokenManager.getRealToken(O);
      }
      let S = platformDocUtils.pEP() ? (n = m.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      })) === null || n === undefined ? undefined : n.getVersion(O) : (r = m.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      })) === null || r === undefined ? undefined : r.getSyncVersion();
      if (!C.length || !O || isUndefinedCheck.isUndefined(S)) {
        return;
      }
      let A = C;
      if (I && f) {
        let e = (d = this.props) === null || d === undefined ? undefined : (u = d.blockManager) === null || u === undefined ? undefined : (c = u.editorAPI.getService(collabTriggersProvider.collabProvider, {
          optional: true
        })) === null || c === undefined ? undefined : c.getVersion(f);
        A = [{
          block_id: f,
          src_version: e,
          selected_text: null,
          reference: {
            selected_blocks: C.slice(0, anchorConstantsConfig.maxCount)
          }
        }];
      }
      return {
        page_id: O,
        structure_version: S,
        selected_blocks: A.slice(0, anchorConstantsConfig.maxCount),
        subtype: p
      };
    }
    ignoreHideOkr(e, n) {
      let r = e.getBlockViewByBlockIdNotCheck(n);
      let o = e.getBlockModelByBlockId(n);
      let i = [docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT].includes(o.type);
      let l = r == null ? undefined : r.hostElement;
      if (!i) {
        let e = l == null ? undefined : l.closest(".objective-block__progress");
        let n = l == null ? undefined : l.closest(".key-result-block__progress");
        let r = l == null ? undefined : l.closest(".hideOProgressFill");
        let o = l == null ? undefined : l.closest(".hideKrProgressFill");
        if (e && r || n && o) {
          return;
        }
      }
    }
    async handleAnchor(e, n, r) {
      if (n === anchorConstantsConfig.docxInit.DocxInit) {
        this.showLoadingToast(e);
      }
      switch (docAnchorCollabUtilities.getAnchorMode(e)) {
        case anchorConstantsConfig.anchorMode.textRange:
          await this.handleRangeAnchor(e, n, r);
          break;
        case anchorConstantsConfig.anchorMode.standard:
          await this.handleStandardAnchor(e, n, r);
          break;
        default:
          this.handleNormalAnchor(e, n, r);
      }
    }
    handleNormalAnchor(e, n, r) {
      T(e, undefined, n, r);
    }
    async handleStandardAnchor(e, n, r) {
      let {
        blockManager: o
      } = this.props || {};
      if (!o) {
        return;
      }
      let {
        scene: i,
        selectedBlocks: l
      } = docxAnchorApi.parseAnchorData(e);
      if (!l) {
        return;
      }
      let c = true;
      let u = false;
      try {
        if (i === anchorConstantsConfig.ttsMode.tts) {
          docAnchorCollabUtilities.cleanupTextSelection(l);
        }
        c = await v(l, this.props || {}, n, r);
        if (i === anchorConstantsConfig.ttsMode.tts) {
          u = docAnchorCollabUtilities.checkVersionAndCollectEvents(l, o) || u;
        }
      } catch (e) {
        c = false;
      }
      if (!c || u) {
        window.history.replaceState(null, "", `${location.pathname}${location.search}`);
        if (i === anchorConstantsConfig.ttsMode.tts) {
          this.showToast({
            msg: t("LarkCCM_Docs_ReadAloud_DocUpdated_Toast"),
            type: "info",
            key: anchorConstantsConfig.ttsMode.tts
          });
        } else {
          this.showErrorToast(t("LarkCCM_Docs_NavigateSelectFailDeleted_Toast"), e);
        }
      }
    }
    async handleRangeAnchor(e, n, r) {
      let {
        blockManager: o,
        rect: i
      } = this.props || {};
      if (!this.props || !o || !i) {
        return;
      }
      let l = o.rootRecordId;
      if (docUrlResolver.isDocDomain(l)) {
        l = await tokenManager.tokenManager.getRealToken(l);
      }
      let c = [];
      let u = true;
      try {
        if (this.anchorMap[e] && this.anchorMap[e].length) {
          c = this.anchorMap[e];
        } else {
          let n = docxImageViewerUtils.openImageViewer(e);
          let r = await docxAnchorApi.getAnchorData({
            page_id: l,
            anchor_id: n,
            anchor: e
          });
          c = r.selectedBlocks ?? [];
          this.anchorMap[e] = c;
        }
        u = await v(c, this.props || {}, n, r);
      } catch (n) {
        this.showErrorToast(t("LarkCCM_Docs_NavigateSelectFailNoConnection_Toast"), e);
        this.reportLocateAnchor(e, {
          stage: anchorConstantsConfig.loadingState.Error,
          data: {
            errMsg: anchorConstantsConfig.anchorError.ANCHOR_NETWORK_ERROR
          }
        }, anchorConstantsConfig.docxInit.DocxInit);
        u = false;
      }
      if (!u) {
        let r = t("LarkCCM_Docs_NavigateSelectFailDeleted_Toast");
        this.showErrorToast(r, e);
        this.handleNormalAnchor(anchorConstantsConfig.emptyString, n);
      }
    }
    getLastTouchTime() {
      var n;
      var o;
      if (!((n = this.props) === null || n === undefined ? undefined : n.touchEventMonitor?.lastTouchTime)) {
        return 0;
      }
      let i = (o = this.props) === null || o === undefined ? undefined : o.touchEventMonitor?.lastTouchTime;
      return new Date().getTime() - i;
    }
    getTouchInfo() {
      var n;
      return {
        lastTouchTime: this.getLastTouchTime(),
        lastYAxisOffset: ((n = this.props) === null || n === undefined ? undefined : n.touchEventMonitor?.lastYAxisOffset) || 0
      };
    }
    getAnchorPostion(e, n) {
      var r;
      var o;
      var i;
      let l = {
        isInViewport: false,
        position: {},
        layoutInfo: {}
      };
      let c = n == null ? undefined : (o = n.getBlockViewByBlockIdNotCheck(e)) === null || o === undefined ? undefined : (r = o.hostElement) === null || r === undefined ? undefined : r.getBoundingClientRect().top;
      if (c !== undefined) {
        let e = window.innerHeight;
        let n = Math.round(e / anchorConstantsConfig.positionList.length);
        let r = "";
        let o = 0;
        while (!r && o < anchorConstantsConfig.positionList.length) {
          let i = o * n;
          let l = Math.min((o + 1) * n, e);
          if (c >= i && c <= l) {
            r = anchorConstantsConfig.positionList[o];
          }
          o++;
        }
        Object.assign(l, {
          isInViewport: !!r,
          position: {
            top: Math.round(c),
            info: r
          }
        });
      }
      let u = n == null ? undefined : n.layoutManager;
      if (u) {
        let n = u == null ? undefined : u.isBlockInViewport(e);
        let {
          top: r
        } = u.getViewportData();
        Object.assign(l, {
          layoutInfo: {
            isInViewport: n,
            top: Math.round(Number((i = u.getReconciler().getLayoutTree().getNode(e)) === null || i === undefined ? undefined : i.getTopToRoot()) - Number(r))
          }
        });
      }
      return l;
    }
    constructor() {
      var e = this;
      y(this, "props", undefined);
      y(this, "anchorMap", {});
      y(this, "start", undefined);
      y(this, "anchorErrorMap", new Map());
      y(this, "hasReachAnchorLimit", false);
      y(this, "structVersionError", false);
      y(this, "handleCreateAnchorError", e => {
        let n = e == null ? undefined : e.code;
        this.hasReachAnchorLimit = n === docxPartialAnchorConstants.anchorErrorCodes.CREATE_MAX_LIMIT;
        this.structVersionError = n === docxPartialAnchorConstants.anchorErrorCodes.BLOCK_VERSION_ERROR;
        this.collectEvent("doc_bug_track_dev", {
          action: "create_anchor_error",
          info: {
            code: e == null ? undefined : e.code,
            msg: e == null ? undefined : e.message
          }
        });
      });
      y(this, "showToast", e => {
        let {
          msg: n,
          type: r,
          key: o
        } = e;
        this.hideLoadingToast(true);
        setTimeout(() => {
          toastNotificationService.showToast(n, {
            type: r,
            key: o
          });
        }, !!browserEnvironmentDetectionUtils.browserDetector.isIOS * 300);
      });
      y(this, "showErrorToast", (e, n) => {
        if (docAnchorCollabUtilities.isAnyAnchorKey(n) && !this.isFeedAnchor) {
          this.showToast({
            msg: e,
            type: "error",
            key: anchorConstantsConfig.anchorStatus.ERROR
          });
        }
      });
      y(this, "showLoadingToast", e => {
        if (docAnchorCollabUtilities.isAnyAnchorKey(e) && !this.isFeedAnchor && networkStateEventCollector.collectNetworkState()) {
          this.start = Date.now();
          toastNotificationService.showToast(t("LarkCCM_Docs_NavigatingToSelect_Toast"), {
            type: "loading",
            key: anchorConstantsConfig.anchorStatus.LOADING,
            durations: [0, 0]
          });
        }
      });
      y(this, "hideLoadingToast", async function (n = false) {
        if (!n && Date.now() - e.start <= 1000) {
          await docxUtilityHelpers.delayPromise(1000);
        }
        if (e.start) {
          toastNotificationService.hideToast(anchorConstantsConfig.anchorStatus.LOADING);
          e.start = null;
        }
      });
      y(this, "reportLocateAnchor", (e, n, r) => {
        if (!e || r !== anchorConstantsConfig.docxInit.DocxInit) {
          return;
        }
        let i = (n == null ? undefined : n.data) ?? {};
        i.isFeed = this.isFeedAnchor;
        let l = docAnchorCollabUtilities.isAnyAnchorKey(e) ? anchorConstantsConfig.anchorMode.textRange : anchorConstantsConfig.anchorMode.normal;
        let c = this.getTouchInfo();
        let u = {
          action: "locateBlock",
          anchor: docxUtilityHelpers.maskSensitiveData(e),
          anchor_type: l,
          ...n,
          ...c,
          data: JSON.stringify(i)
        };
        this.collectEvent("ccm_docx_anchor_dev", u);
      });
    }
  }();
  require.d(exports, {
    collectNetworkState: function () {
      return O;
    }
  });
}