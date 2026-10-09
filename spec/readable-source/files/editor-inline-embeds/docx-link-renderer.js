// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'DocxLinkRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 829614
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var docComponentConfigUtils = require("doc-component-config-utils") /*id: 123085*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = reactJsxRuntimeCoreReexport.jsx("svg", {
    className: "circular",
    viewBox: "25 25 50 50",
    children: reactJsxRuntimeCoreReexport.jsx("circle", {
      className: "path",
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none",
      strokeWidth: "4",
      strokeMiterlimit: "10"
    })
  });
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var docCommentUtils = require("doc-comment-utils") /*id: 315488*/;
  var linkServiceProvider = require("link-service-provider") /*id: 880405*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var clientsideLinkConstants_1 = require("clientside-link-constants_1") /*id: 306134*/;
  var documentLinkUtilities = require("document-link-utilities") /*id: 61891*/;
  function T(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  require("empty-export-function") /*id: 232077*/.emptyFunction(reactinxDomContextExports.ReactInXExports);
  class I extends baseRendererClass.BaseRenderer {
    _getBlockModel(e) {
      return this.blockManager.getBlockModelByBlockId(e);
    }
    _getBlockView(e) {
      return this.blockManager.getBlockViewByBlockId(e);
    }
    match(e) {
      return I.KEYS.includes(e);
    }
    genWrapperClasses(e, i) {
      return "outer-u-container docx-outer-link-container";
    }
    renderInlineWrapper(e) {
      let {
        index: i,
        attributes: n,
        lineState: r
      } = e;
      let o = "";
      if (n[clientsideLinkConstants_1.linkType]) {
        o = clientsideLinkConstants_1.linkType;
      }
      if (n[clientsideLinkConstants_1.autoUrlType]) {
        o = clientsideLinkConstants_1.autoUrlType;
      }
      if (!o) {
        return null;
      }
      let l = r.getOps();
      let c = i - 1;
      let d = null;
      if (c >= 0) {
        d = l[c].attributes?.[o];
      }
      let h = n[o];
      if (!this.inlineWrapperCache || h !== d) {
        let i = this.genWrapperClasses(e, o);
        let n = reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.TextSymbol, {
          className: i
        });
        this.inlineWrapperCache = n;
      }
      return this.inlineWrapperCache;
    }
    render(e) {
      let {
        children: i,
        attributes: n,
        op: o,
        lineState: l,
        index: c
      } = e;
      let d = n[clientsideLinkConstants_1.autoUrlType];
      let u = n[clientsideLinkConstants_1.linkType];
      if (d || u) {
        let f = u ? clientsideLinkConstants_1.linkType : clientsideLinkConstants_1.autoUrlType;
        let v = u || d;
        let g = l.getOps().indexOf(o);
        let b = documentLinkUtilities.isPrevOpDifferent(l, g, f, v);
        let m = documentLinkUtilities.isNextOpDifferent(l, g, f, v);
        let T = n[clientsideLinkConstants_1.loadingLinkTitle];
        let I = this.blockManager.editorAPI.config.get("shouldRenderPlainText");
        e.class += " link-wrapper";
        e.class += " link-text-color";
        e.class += `${I ? " link-plain-text" : ""}`;
        if (d) {
          e.domAttributes[clientsideLinkConstants_1.autoUrlLine] = c;
          e.domAttributes[clientsideLinkConstants_1.autoUrlStart] = n[`${clientsideLinkConstants_1.autoUrlType}-start`];
          e.domAttributes[clientsideLinkConstants_1.autoUrlLength] = n[`${clientsideLinkConstants_1.autoUrlType}-length`];
          e.domAttributes[clientsideLinkConstants_1.autoUrlType] = v;
        }
        if (b) {
          let i = contentDeltaUtilityFunctions.toNumber(l.getZoneId());
          this.cacheLinkId = `${i}-${c}-${g}`;
          e.class += " link-start";
        }
        if (m) {
          e.class += " link-end";
        }
        e.class += ` link-id-${this.cacheLinkId}`;
        let C = "link";
        if (n[clientsideLinkConstants_1.linkSelection]) {
          let e = n[clientsideLinkConstants_1.linkSelection];
          C += ` ${clientsideLinkConstants_1.linkSelection} ${clientsideLinkConstants_1.linkSelectionToken}${e}`;
        }
        if (n[clientsideLinkConstants_1.linkSelection]) {
          C += " mock-selection";
        }
        if (T) {
          e.class += " link-loading";
        }
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          C += " ignore-enter-edit";
        }
        C += ` ${docxEditorConstantsConfig.contextmenuNoCopy}`;
        return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.AnchorSymbol, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onMouseDown: this.handleMouseDown,
          onClick: this.clickLink,
          className: C,
          href: xssContentSanitizer.sanitizeUrl(decodeURIComponent(v), null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrN%1*cFlhREJr$jBaelRETkNjMlJ-WkhCaWJrMTJWRWRzZFd*N%9XbFpXRT$z$EZkN*NHSnRjM1Zr%0%0MFdWaEtib$JZ$FQwPQ"
          }),
          "data-href": v,
          rel: "noopener noreferrer",
          target: "_blank",
          "data-link-node": String(true),
          style: {
            cursor: "pointer",
            textDecorationSkip: "none"
          }
        }, i, T ? h : null);
      }
      if (n[clientsideLinkConstants_1.linkSelection]) {
        let i = n[clientsideLinkConstants_1.linkSelection];
        e.class += ` ${clientsideLinkConstants_1.linkSelection} ${clientsideLinkConstants_1.linkSelectionToken}${i}`;
      }
      if (n[clientsideLinkConstants_1.linkSelection]) {
        e.class += " mock-selection";
      }
      return i;
    }
    _editorLineStateWillRender(e) {
      let {
        lineState: i
      } = e;
      let n = contentDeltaUtilityFunctions.toNumber(i.getZoneId());
      let r = this._getBlockModel(n);
      if (docCommentUtils.isCodeBlock(r)) {
        return;
      }
      let o = new contentStructureDelta.ContentDelta({
        zoneId: i.getZoneId()
      });
      documentLinkUtilities.processUrlLinking(i, o);
      if (o.ops.length) {
        e.lineState = i.compose(o);
      }
    }
    _getBlockViewByCurSelection() {
      var e;
      let {
        zoneId: i
      } = (e = this.editor.selection) === null || e === undefined ? undefined : e.getSelection().start;
      let n = contentDeltaUtilityFunctions.toNumber(i);
      return this.blockManager.getBlockViewByBlockId(n);
    }
    clickLinkImpl(e) {
      e.preventDefault();
      let {
        target: i
      } = e;
      let n = documentLinkUtilities.extractLinkInfo(i, this.editor);
      if (!n) {
        return;
      }
      let {
        value: r,
        blockId: o
      } = n;
      let l = this._getBlockView(o);
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_content_page_click", {
        block_type: l.props.type,
        record_id: l.props.recordId
      }, {
        target: docxEditorConstantsConfig.viewAnalyticsConstants.CCM_DOCS_PAGE_VIEW,
        click: "click_inline_component",
        inline_type: docBlockConstants.mentionTypes.LINK
      });
      if (docComponentConfigUtils.getDocComponentConfig("extensions.content.hyperlinkHandler") === "outer") {
        platformDocUtils.tI2(platformDocUtils.aWg.HYPERLINK_CLICK, {
          url: r
        });
        return;
      }
      (function (e, i, n, r, o = false, l) {
        e.open({
          url: i,
          event: n,
          isSupportAnchor: !o,
          blockId: l
        });
      })(l.editorAPI.getService(linkServiceProvider.linkServiceProvider), r, e, l.editable, !!l.props.recursionProps.isHistory, o);
    }
    destroy() {}
    constructor({
      editor: e,
      blockManager: i,
      selectionAPI: n
    }) {
      super();
      T(this, "name", "Link");
      T(this, "editor", undefined);
      T(this, "blockManager", undefined);
      T(this, "selectionAPI", undefined);
      T(this, "cacheLinkId", null);
      T(this, "inlineWrapperCache", null);
      T(this, "handleMouseEnter", undefined);
      T(this, "handleMouseDown", e => {
        let {
          target: i
        } = e;
        let n = documentLinkUtilities.extractLinkInfo(i, this.editor);
        if (docUrlProcessingUtilities.isCommentUrl((n == null ? undefined : n.value) || "")) {
          e.preventDefault();
        }
      });
      T(this, "handleMouseLeave", undefined);
      T(this, "clickLink", e => {
        this.clickLinkImpl(e);
      });
      this.editor = e;
      this.blockManager = i;
      this.selectionAPI = n;
    }
  }
  T(I, "KEYS", [clientsideLinkConstants_1.linkType, clientsideLinkConstants_1.autoUrlType, clientsideLinkConstants_1.linkSelection, clientsideLinkConstants_1.linkUnderline]);
  require.d(exports, {
    DocxLinkRenderer: function () {
      return I;
    }
  });
}