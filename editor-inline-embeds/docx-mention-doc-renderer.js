// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'DocxMentionDocRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 957981
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var h;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var reactDomContextDecorator = require("react-dom-context-decorator") /*id: 955275*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var priorityConstants = require("priority-constants") /*id: 219839*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var docxViewStateUtil = require("docx-view-state-util") /*id: 596609*/;
  var reactContextInstance_2 = require("react-context-instance_2") /*id: 769735*/;
  var mentionDocManagerToken = require("mention-doc-manager-token") /*id: 688263*/;
  var documentEventTypes = require("document-event-types") /*id: 887808*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var stubTrueFunctions = require("stub-true-functions") /*id: 386838*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var D = classnamesUtils;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docComponentConfigUtils = require("doc-component-config-utils") /*id: 123085*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  var driveUrlValidationUtilities = require("drive-url-validation-utilities") /*id: 262405*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var booleanStubUtils = require("boolean-stub-utils") /*id: 520760*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var z = reactCoreLibraryReexport.memo(function (e) {
    let {
      iconType: i,
      iconKey: n,
      needCheckEmojiValid: r,
      fileType: o,
      isBaseCustomIconEnabled: l
    } = e;
    let s = o === platformDocUtils.kNj.BITABLE && l;
    if ((isUndefinedCheck.isUndefined(i) || i === 0) && !r && !s || !booleanStubUtils.alwaysTrue_1() || !docxFeatureFlags.isTEnabled()) {
      return e.renderFallbackIcon();
    }
    if (!isUndefinedCheck.isUndefined(i) && !isUndefinedCheck.isUndefined(n) || s) {
      let i = D(e.wrapperClassName, "gpf-biz-suite-custom-icon__icon-wrapper");
      return reactJsxRuntimeCoreReexport.jsx("span", {
        className: i,
        style: {
          "--wrapper-size": `${e.wrapperSize ?? inlineComponentConstants.configLimit}px`
        },
        children: reactJsxRuntimeCoreReexport.jsx(platformDocUtils.l03, {
          ...e,
          fallbackIcon: e.renderFallbackIcon
        })
      });
    }
    return e.renderFallbackIcon();
  });
  var getGlobalBucketUrl = require("get-global-bucket-url") /*id: 594677*/;
  var linkServiceProvider = require("link-service-provider") /*id: 880405*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var mentionDocDataUpdateProvider = require("mention-doc-data-update-provider") /*id: 387558*/;
  var viewStateTypeConstants = require("view-state-type-constants") /*id: 739915*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var localeContextProvider = require("locale-context-provider") /*id: 577211*/;
  var popperTriggerComponent = require("popper-trigger-component") /*id: 564146*/;
  var driveUrlParserAxios = require("drive-url-parser-axios") /*id: 508792*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var driveDocInlineComponentUtils = require("drive-doc-inline-component-utils") /*id: 759062*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let er = {
    DOC: t("common.doc"),
    DOCX: t("common.docx"),
    SYNCED: t("common.docx"),
    SHEET: t("common.sheet"),
    SLIDES: t("LarkCCM_Slides_Filter_Menu"),
    BITABLE: browserEnvironmentDetectionUtils.browserDetector.isLarkPcTab ? t("common.bitable") : t("common.bitable_web_renametest"),
    RECORD: browserEnvironmentDetectionUtils.browserDetector.isLarkPcTab ? t("common.bitable") : t("common.bitable_web_renametest"),
    BASE_ADD: browserEnvironmentDetectionUtils.browserDetector.isLarkPcTab ? t("common.bitable") : t("common.bitable_web_renametest"),
    MINDNOTE: t("common.mindnote"),
    CATALOG: t("common.folder"),
    FOLDER: t("common.folder"),
    SHARE_FOLDER: t("explorer.shared_folder"),
    FILE: t("common.file"),
    WIKI: t("common.wiki"),
    ISV: t("common.isv")
  };
  let eo = {
    [platformDocUtils.kNj.FOLDER]: er.FOLDER,
    [platformDocUtils.kNj.DOC]: er.DOC,
    [platformDocUtils.kNj.DOCX]: er.DOCX,
    [platformDocUtils.kNj.SYNCED]: er.SYNCED,
    [platformDocUtils.kNj.SLIDES]: er.SLIDES,
    [platformDocUtils.kNj.SHEET]: er.SHEET,
    [platformDocUtils.kNj.BITABLE]: er.BITABLE,
    [platformDocUtils.kNj.RECORD]: er.RECORD,
    [platformDocUtils.kNj.BASE_ADD]: er.BASE_ADD,
    [platformDocUtils.kNj.MINDNOTE]: er.MINDNOTE,
    [platformDocUtils.kNj.FILE]: er.FILE,
    [platformDocUtils.kNj.WIKI]: er.WIKI,
    [platformDocUtils.kNj.ISV]: er.ISV,
    [platformDocUtils.kNj.CATALOG]: er.CATALOG
  };
  var embedObjectNameAccess = require("embed-object-name-access") /*id: 223936*/;
  var docxAutoSpaceCheck = require("docx-auto-space-check") /*id: 47206*/;
  var docBlockZoomUtils = require("doc-block-zoom-utils") /*id: 735944*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var embedInlineLinkComponent = require("embed-inline-link-component") /*id: 768824*/;
  function eu(e, i, n) {
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
  class eh extends reactCoreLibraryReexport.Component {
    renderEmbedInlineText() {
      let {
        logo: e,
        permissionCode: i,
        title: n,
        shouldRenderPlainText: r,
        plainTextPrefixSpace: o,
        plainTextSuffixSpace: l
      } = this.props;
      let s = driveDocInlineComponentUtils.isContentUnreadable(i);
      let a = n.replace(/\n/g, "");
      let c = D({
        "embed-inline-link--disable": driveDocInlineComponentUtils.isContentApplyable(i),
        "embed-inline-link--hoverable": !s,
        "embed-inline-link--no-permission": s
      });
      return reactJsxRuntimeCoreReexport.jsx(embedInlineLinkComponent.EmbedInlineLink, {
        text: a,
        logo: e,
        className: c,
        onClick: this.handleClick,
        onMouseEnter: this.handleOnMouseEnter,
        onMouseLeave: this.handleOnMouseLeave,
        onMouseDown: this.handleMouseDown,
        autoSpace: docxAutoSpaceCheck.checkDocxAutoSpace(),
        textType: this.state.docTypeText,
        shouldRenderPlainText: !!r,
        plainTextPrefixSpace: o,
        plainTextSuffixSpace: l
      });
    }
    componentDidMount() {
      let {
        raw_url: e
      } = this.props;
      let {
        shouldRenderPlainText: i
      } = this.props.recursionProps;
      if (i && !this.state.docTypeText) {
        let i;
        let n = driveUrlParserAxios.parseDriveUrl(e);
        if (n) {
          i = n.suiteTypeNum;
        }
        this.updateDocTypeText(i);
      }
    }
    renderTextContent() {
      let {
        permissionCode: e,
        componentId: i,
        url: n,
        decorateStyle: r,
        token: o,
        icon_info: l,
        offline: s
      } = this.props;
      let a = driveDocInlineComponentUtils.isContentUnreadable(e);
      let {
        underline: c,
        strikethrough: d
      } = r;
      let u = this.props.block.editorAPI.config.get("isSSR");
      let h = l && u ? JSON.stringify(l) : "null";
      let p = D("mention-doc", {
        "decoration-underline": c
      }, {
        "decoration-line-through": d
      }, {
        loading: e === inlineComponentFacade.contentStatus.LOADING
      }, {
        "mention-doc-permission-fg": stubTrueFunctions.alwaysTrueCheck()
      }, {
        "embed-inline-link--offline": s
      }, docxEditorConstantsConfig.contextmenuNoCopy);
      if ((a || u) && stubTrueFunctions.alwaysTrueCheck()) {
        return reactJsxRuntimeCoreReexport.jsx("span", {
          className: p,
          "data-component-id": i,
          "data-token": o,
          "data-icon-info": h,
          children: this.renderEmbedInlineText()
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx("a", {
          className: p,
          target: u ? "_blank" : "_self",
          href: xssContentSanitizer.sanitizeUrl(s ? "javascript:void(0);" : n, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrN%1*cFlhREJr$jBaelRESldOR1JI$m5Wak1teDJZbT$OZ*1*WE5-TmhWelZz$EZkT2RtSllRblpp-lZaM$pFTT$hMkl5$Fhaa$-xWjFaRWRzZ*1KcE1Xd*lNazEw$1RJNWRHTkhPWFZh$np$d1RHN$Nlb$ZI%m5s-%0xWj-"
          }),
          "data-href": n,
          rel: "noopener noreferrer",
          onContextMenu: this.onContextmenu,
          "data-component-id": i,
          "data-token": o,
          "data-icon-info": h,
          children: this.renderEmbedInlineText()
        });
      }
    }
    renderTooltipContent(e) {
      let {
        recursionProps: {
          isPresentationMode: i
        },
        offline: n
      } = this.props;
      let r = n ? offlineStatusSelectorsUtils.featureUnavailableOfflineToast : driveDocInlineComponentUtils.getContentStatusMessage(this.props.permissionCode);
      return reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
        ...(n ? {} : {
          visible: e
        }),
        title: r,
        placement: "top",
        mouseEnterDelay: 0.2,
        popupAlign: {
          targetOffset: [0, -6]
        },
        inline: true,
        enableMaxHeight: false,
        overlayStyle: {
          zoom: i ? docBlockZoomUtils.getDefaultLineHeight() : undefined,
          transform: i && browserEnvDetectionUtil.browserDetector.firefox ? `scale(${docBlockZoomUtils.getDefaultLineHeight()})` : undefined,
          transformOrigin: i && browserEnvDetectionUtil.browserDetector.firefox ? "left top" : undefined
        },
        children: this.renderTextContent()
      });
    }
    renderContent(e) {
      let {
        isPresentationMode: i
      } = this.props.recursionProps;
      let n = this.props.block.editorAPI.config.get("isSSR");
      if (i || n) {
        return this.renderTooltipContent(e);
      } else {
        return reactJsxRuntimeCoreReexport.jsx(localeContextProvider.localeWrapper, {
          PopperSidecar: popperTriggerComponent.PopperComponent,
          children: this.renderTooltipContent(e)
        });
      }
    }
    render() {
      let {
        title: e,
        url: i,
        boundary: n,
        isTranslated: r,
        permissionCode: o,
        block: {
          editorAPI: l
        },
        raw_url: s,
        offline: a
      } = this.props;
      let {
        token: c,
        file_type: d
      } = this.props;
      let u = l.config.get("translatedOnlyTranslation");
      let {
        isHistory: h,
        isPreview: p,
        isShortcut: f,
        isPresentationMode: v
      } = this.props.recursionProps;
      let g = (h || v || !p && !f && !u) && !a && !userEnvironmentUtils.isAnonymousAccess();
      let {
        isHovered: b,
        clientX: m,
        clientY: y
      } = this.state.mouseEvent;
      let k = b && !this.state.isCheckPermission && stubTrueFunctions.alwaysTrueCheck() && driveDocInlineComponentUtils.isContentUnreadable(o) && !r;
      if (!g) {
        return this.renderContent(k);
      }
      if (driveUrlParserAxios.isWhiteboardType(d)) {
        let e = driveUrlParserAxios.parseDriveUrl(s);
        if (e) {
          e.token;
          d = e.mentionTypeNum;
        }
      }
      return reactJsxRuntimeCoreReexport.jsx("span", {
        children: this.renderContent(k)
      });
    }
    constructor(e) {
      super(e);
      eu(this, "pageMainEditor", document.querySelector(".bear-web-x-container"));
      eu(this, "checkApplyEmbed", async () => {
        let {
          title: e,
          raw_url: i,
          block: {
            blockManager: n
          }
        } = this.props;
        let {
          file_type: r,
          token: o
        } = this.props;
        let l = n.editorAPI.getService(embedObjectNameAccess.embedObjectName);
        this.setState({
          isCheckPermission: true
        });
        if (driveUrlParserAxios.isWhiteboardType(r)) {
          let e = driveUrlParserAxios.parseDriveUrl(i);
          if (e) {
            o = e.token;
            r = e.mentionTypeNum;
          }
        }
        let s = await (l == null ? undefined : l.checkApplyEmbed(o, r, e));
        this.setState({
          isCheckPermission: false
        });
        return s;
      });
      eu(this, "handleScroll", () => {
        this.setState({
          mouseEvent: {
            isHovered: false
          }
        });
        this.unBindFallBackEvents();
      });
      eu(this, "handMouseMove", e => {
        var i;
        if (!(e == null ? undefined : (i = e.target) === null || i === undefined ? undefined : i.closest(".mention-doc-embed-container"))) {
          this.setState({
            mouseEvent: {
              isHovered: false
            }
          });
          this.unBindFallBackEvents();
        }
      });
      eu(this, "bindFallbackEvents", e => {
        if (driveDocInlineComponentUtils.isContentUnreadable(e)) {
          var i;
          var n;
          if ((i = this.pageMainEditor) !== null && i !== undefined) {
            i.addEventListener("scroll", this.handleScroll);
          }
          if ((n = this.pageMainEditor) !== null && n !== undefined) {
            n.addEventListener("mousemove", this.handMouseMove);
          }
        }
      });
      eu(this, "unBindFallBackEvents", () => {
        var e;
        var i;
        if ((e = this.pageMainEditor) !== null && e !== undefined) {
          e.removeEventListener("scroll", this.handleScroll);
        }
        if ((i = this.pageMainEditor) !== null && i !== undefined) {
          i.removeEventListener("mousemove", this.handMouseMove);
        }
      });
      eu(this, "handleOnMouseEnter", async e => {
        let {
          blockManager: i
        } = this.props.recursionProps;
        let {
          clientX: n,
          clientY: r
        } = e;
        this.setState({
          mouseEvent: {
            isHovered: true,
            clientX: n,
            clientY: r
          },
          isCheckPermission: true
        });
        let o = await i.editorAPI.getService(mentionDocDataUpdateProvider.mentionDocDataToken, {
          optional: true,
          async: true
        });
        if (o != null) {
          o.handleUpdateNewTitle(this.props.token);
        }
        let l = await this.checkApplyEmbed();
        this.bindFallbackEvents(l);
      });
      eu(this, "handleOnMouseLeave", e => {
        let {
          clientX: i,
          clientY: n
        } = e;
        this.setState({
          mouseEvent: {
            isHovered: false,
            clientX: i,
            clientY: n
          }
        });
        this.unBindFallBackEvents();
      });
      eu(this, "handleClick", e => {
        let i = Object.assign({}, e);
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        e.nativeEvent.stopPropagation();
        let n = browserEnvDetectionUtil.browserDetector.isIPad && browserEnvDetectionUtil.browserDetector.safari;
        this.props.openLink(i);
        this.setState({
          mouseEvent: {
            isHovered: false
          }
        });
        if (n) {
          this.checkApplyEmbed();
        }
      });
      eu(this, "handleMouseDown", e => {
        e.preventDefault();
        e.stopPropagation();
      });
      eu(this, "onContextmenu", e => {
        if (this.state.isCheckPermission) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
      eu(this, "updateDocTypeText", e => {
        let i = e && eo[e] || eo[platformDocUtils.kNj.DOCX];
        if (i && this.state.docTypeText !== i) {
          this.setState(() => ({
            docTypeText: i
          }));
        }
      });
      this.state = {
        mouseEvent: {
          isHovered: false
        },
        isCheckPermission: false
      };
    }
  }
  var fileTypeIconRegistry = require("file-type-icon-registry") /*id: 903941*/;
  function ef(e, i, n) {
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
  class ev extends reactCoreLibraryReexport.Component {
    get customIconBaseProps() {
      let {
        icon_info: i,
        permissionCode: n
      } = this.props;
      let r = driveDocInlineComponentUtils.isContentApplyable(n) ? "disabled" : "default";
      if (r !== this.iconOptions?.color) {
        this.iconOptions = {
          shape: "square_outline",
          color: r
        };
      }
      return {
        iconType: i == null ? undefined : i.type,
        iconKey: i == null ? undefined : i.key,
        iconUri: getGlobalBucketUrl.getGlobalBucketUrl(),
        wrapperSize: "1em;",
        iconSize: "1em;",
        wrapperClassName: D("custom-icon", {
          "custom-icon__icon-image": (i == null ? undefined : i.type) === 2
        }),
        isBaseCustomIconEnabled: booleanStubUtils.alwaysTrue(),
        defaultIconOptions: this.iconOptions
      };
    }
    get url() {
      return this.props.raw_url;
    }
    get logo() {
      let {
        editorAPI: e
      } = this.props.block;
      let {
        isShortcut: i
      } = this.props.recursionProps;
      if (e.config.get("isSSR") || !booleanStubUtils.alwaysTrue_1() || i) {
        return this.getOldLogo();
      }
      if (!this.isAllowEdit && this.lazyRecordStatusService) {
        this.isAllowEdit = this.lazyRecordStatusService.isAllowEdit;
      }
      let {
        file_type: n,
        icon_type: r,
        obj_info: o,
        title: l
      } = this.props;
      let s = (o == null ? undefined : o.obj_type) || r || n;
      return reactJsxRuntimeCoreReexport.jsx(z, {
        ...this.customIconBaseProps,
        fileType: s,
        fileName: l,
        onComplete: this.onIconRenderComplete,
        renderFallbackIcon: this.getOldLogo,
        needCheckEmojiValid: this.isAllowEdit
      });
    }
    render() {
      return reactJsxRuntimeCoreReexport.jsx(eh, {
        ...this.props,
        url: this.url,
        logo: this.logo,
        openLink: this.openLink,
        selectMentionDocComponent: this.selectMentionDocComponent
      });
    }
    constructor(...e) {
      super(...e);
      ef(this, "lazyRecordStatusService", this.props.block.blockManager.editorAPI.getService(lazyRecordStatusToken.lazyRecordStatus, {
        optional: true
      }));
      ef(this, "isAllowEdit", false);
      ef(this, "iconOptions", undefined);
      ef(this, "getOldLogo", () => {
        let {
          icon_type: e,
          file_type: i
        } = this.props;
        let n = fileTypeIconRegistry.FileTypeIconMap[e || i] || fileTypeIconRegistry.GenericFileIcon;
        return reactJsxRuntimeCoreReexport.jsx(n, {
          className: "old-doc-icon"
        });
      });
      ef(this, "onIconRenderComplete", async e => {
        let {
          token: i,
          icon_info: n,
          block: {
            blockManager: r
          }
        } = this.props;
        if (!n || !e && n.type !== 0 || !this.isAllowEdit) {
          return;
        }
        let o = await r.editorAPI.getService(mentionDocDataUpdateProvider.mentionDocDataToken, {
          optional: true,
          async: true
        });
        if (o != null) {
          o.handleIconRenderSuccess({
            token: i,
            iconInfo: n
          });
        }
      });
      ef(this, "reportEvent", () => {
        let {
          token: e,
          block: i,
          blockType: n
        } = this.props;
        i.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_content_page_click", {
          block_type: n,
          record_id: i.record.id
        }, {
          target: docxEditorConstantsConfig.viewAnalyticsConstants.CCM_DOCS_PAGE_VIEW,
          click: "click_inline_component",
          inline_type: docBlockConstants.mentionTypes.MENTION_DOC,
          object_inline_id: platformDocUtils.p5T(e)
        });
      });
      ef(this, "openLink", e => {
        this.reportEvent();
        if (docComponentConfigUtils.getDocComponentConfig("extensions.content.hyperlinkHandler") === "outer") {
          platformDocUtils.tI2(platformDocUtils.aWg.HYPERLINK_CLICK, {
            url: this.url
          });
          return;
        }
        let {
          editorAPI: i
        } = this.props.block;
        let {
          isHistory: n,
          isPresentationMode: r
        } = this.props.recursionProps;
        let {
          presentationModeType: o
        } = this.props;
        let l = r && o === viewStateTypeConstants.viewTypes.PAGINATION;
        let s = docUrlProcessingUtilities.isCommentUrl(this.url);
        let a = !n && (!s || !l) && !driveUrlValidationUtilities.isValidWhiteboardUrl(this.url);
        i.getService(linkServiceProvider.linkServiceProvider).open({
          url: this.url,
          event: e,
          title: this.props.title,
          isSupportAnchor: a,
          blockId: this.props.block.id
        });
      });
      ef(this, "selectMentionDocComponent", e => {
        let {
          block: i
        } = this.props;
        if (editorTextBlockUtilities.isTextBlock(i)) {
          let n = e.target.closest(".embed-inline-link.mention-doc");
          let r = i.blockManager.getBlockViewByBlockId(i.id);
          if (n && r) {
            let e = r.nodeToRange(n);
            if (e) {
              i.setSelection(e, true);
            }
          }
        }
      });
    }
  }
  var docPermissionStatusSelectors = require("doc-permission-status-selectors") /*id: 16982*/;
  var eb = reactReduxCore.connect((e, i) => {
    let {
      raw_url: n,
      file_type: r
    } = i;
    let {
      token: o
    } = i;
    let l = driveDocInlineComponentUtils.getDocumentToken(i.block.blockManager);
    if (driveUrlParserAxios.isWhiteboardType(r)) {
      let e = driveUrlParserAxios.parseDriveUrl(n);
      o = (e == null ? undefined : e.token) ?? o;
    }
    return {
      permissionCode: docPermissionStatusSelectors.getPermissionStatusForNode(e, l, o),
      offline: offlineStatusSelectorsUtils.selectDocxOfflineDisabled(e)
    };
  })(e => {
    let {
      block: i,
      permissionCode: n,
      recursionProps: r
    } = e;
    let {
      blockViewportAdapter: o,
      blockManager: l
    } = r;
    let s = i.id;
    let a = reactCoreLibraryReexport.useCallback(() => {
      try {
        return l.rootBlockId === s || o.isBlockVisible(s);
      } catch {
        return false;
      }
    }, [o, s, l]);
    let c = reactCoreLibraryReexport.useRef(a());
    let [d, u] = reactCoreLibraryReexport.useState(n);
    let h = reactCoreLibraryReexport.useCallback(() => {
      if (c.current && n !== d) {
        u(n);
      }
    }, [n, d]);
    reactCoreLibraryReexport.useEffect(() => {
      h();
    }, [h, n]);
    let p = reactCoreLibraryReexport.useCallback(e => {
      let {
        isVisible: i
      } = e;
      c.current = i;
      h();
    }, [h]);
    reactCoreLibraryReexport.useEffect(() => {
      c.current = a();
      h();
      o.onBlockChange(s, p);
      return () => {
        o.offBlockChange(s, p);
      };
    }, [s, o, p, h, a]);
    reactCoreLibraryReexport.useEffect(() => {
      let {
        token: r,
        file_type: o,
        title: l
      } = e;
      let s = i.blockManager.editorAPI.getService(embedObjectNameAccess.embedObjectName);
      s.addInitPermissionCallback(async () => {
        let e = await s.checkApplyEmbed(r, o, l);
        if (n !== e) {
          u(e);
        }
      });
      if (!s.hasEmbedObj(r)) {
        s.addEmbedObj(r, l, o);
      }
    }, [n]);
    return reactJsxRuntimeCoreReexport.jsx(ev, {
      ...e,
      permissionCode: d
    });
  });
  var em = reactReduxCore.connect(e => ({
    isTranslated: flowPermissionSettingSelectors.flowSelectorsHub.translate.selectTranslateStatus(e).translated,
    presentationModeType: docxViewStateUtil.getViewType(e),
    offline: offlineStatusSelectorsUtils.selectDocxOfflineDisabled(e)
  }))(e => {
    let {
      block: i
    } = e;
    let {
      blockManager: n
    } = i;
    let {
      editorAPI: r
    } = n;
    let o = r.getService(mentionDocManagerToken.mentionDocMgrToken, {
      optional: true
    });
    let l = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.translate.selectTranslateStatus).translated;
    let [s, a] = reactCoreLibraryReexport.useState(e.title);
    let [c, d] = reactCoreLibraryReexport.useState(undefined);
    let [u, h] = reactCoreLibraryReexport.useState(e.icon_info);
    let p = debounceUtil_1_1.debounce(e => {
      if (e.icon_info) {
        h(e.icon_info);
      }
      if (e.obj_info) {
        d(e.obj_info);
      }
    }, 50);
    let f = reactCoreLibraryReexport.useCallback(i => {
      if (!docxFeatureFlags.isTEnabled() || i !== e.token || l || !o) {
        return;
      }
      let n = o.getMentionDocDataByToken(e.token);
      if (!!n && !isUndefinedCheck.isUndefined(n.newTitle)) {
        a(n.newTitle);
      }
    }, [e.token, o]);
    let v = reactCoreLibraryReexport.useCallback(i => {
      if (i !== e.token || !o) {
        return;
      }
      let n = o.getMentionDocDataByToken(e.token);
      if (n) {
        p(n);
      }
    }, [e.token, o]);
    reactCoreLibraryReexport.useEffect(() => {
      if (l || !o) {
        return;
      }
      let i = o.getMentionDocDataByToken(e.token);
      let n = e.title;
      let r = i == null ? undefined : i.newTitle;
      let s = u;
      let c = i == null ? undefined : i.icon_info;
      if (c && (c.type !== (s == null ? undefined : s.type) || c.key !== (s == null ? undefined : s.key))) {
        s = c;
      }
      a(r || n);
      h(s);
      o.register(documentEventTypes.EventTypes.NEW_TITLE_UPDATE, f);
      o.register(documentEventTypes.EventTypes.ICON_INFO_UPDATE, v);
      return () => {
        o.unregister(documentEventTypes.EventTypes.NEW_TITLE_UPDATE, f);
        o.unregister(documentEventTypes.EventTypes.ICON_INFO_UPDATE, v);
      };
    }, [e.token, o, f, v]);
    let b = reactCoreLibraryReexport.useContext(reactContextInstance_2.SharedContext);
    let {
      blockViewportAdapter: m,
      isHistory: y,
      isShortcut: C
    } = b;
    let P = stubTrueFunctions.alwaysTrueStub() && m && (y || !C);
    let R = s || driveDocInlineComponentUtils.getDefaultTitleByType(e.token, e.file_type, e.title);
    if (l) {
      R = e.title || R;
    }
    if (P) {
      return reactJsxRuntimeCoreReexport.jsx(eb, {
        ...e,
        title: R,
        obj_info: c,
        icon_info: u,
        recursionProps: b
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(ev, {
        ...e,
        title: R,
        obj_info: c,
        icon_info: u,
        recursionProps: b,
        permissionCode: inlineComponentFacade.contentStatus.READABLE
      });
    }
  });
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var iosEditorLeafTextWrapper = require("ios-editor-leaf-text-wrapper") /*id: 575135*/;
  function eE(e, i, n) {
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
  d = editorPluginManager.createPriority(priorityConstants.priorityConstants.BEFORE_DEFAULT);
  u = reactDomContextDecorator.withContextConsumer();
  h = class e extends baseRendererClass.BaseRenderer {
    match(i) {
      return i === e.KEY;
    }
    shouldPlainTextPrefixSpace(e) {
      if (!this.shouldRenderPlainText) {
        return false;
      }
      let {
        op: i,
        lineState: n
      } = e;
      let r = n.getOps().indexOf(i);
      if (r <= 0) {
        return false;
      }
      let o = n.getOps()[r - 1];
      return typeof o.insert != "string" || !o.insert.endsWith(" ");
    }
    shouldPlainTextSuffixSpace(i) {
      if (!this.shouldRenderPlainText) {
        return false;
      }
      let {
        op: r,
        lineState: o
      } = i;
      let l = o.getOps().length;
      let s = o.getOps().indexOf(r);
      if (s >= l - 1) {
        return false;
      }
      let a = o.getOps()[s + 1];
      return !!a.attributes?.[e.KEY] || typeof a.insert != "string" || !a.insert.startsWith(" ");
    }
    render(i) {
      let r;
      let o = i.attributes[e.KEY];
      let l = i.op.insert?.length;
      try {
        r = JSON.parse(o);
      } catch (e) {}
      if (!r) {
        return null;
      }
      let {
        editorAPI: s
      } = this.blockManager;
      let a = s.modelService.getBlockModelByBlockId(contentDeltaUtilityFunctions.toNumber(i.zoneId));
      if (!a) {
        return null;
      }
      let c = i.lineState.getEntities([[e.KEY, o]]);
      i.key = r.id;
      if (c.length > 1) {
        i.key += `-${Math.random()}`;
      }
      if (r.type === inlineComponentConstants.mentionTypes.DOC) {
        let {
          file_type: e,
          icon_type: n,
          title: o,
          token: s,
          raw_url: c,
          tenant_id: d,
          icon_info: u
        } = r.data;
        let {
          underline: h,
          strikethrough: p
        } = i.attributes;
        return reactJsxRuntimeCoreReexport.jsx(iosEditorLeafTextWrapper.IosLeafTextWrapper, {
          selectionAPI: this.selectionAPI,
          autoSelectOnClick: false,
          length: l,
          className: "mention-doc-embed-container",
          children: reactJsxRuntimeCoreReexport.jsx(em, {
            file_type: e,
            icon_type: n,
            title: o,
            token: s,
            decorateStyle: {
              underline: !!h,
              strikethrough: !!p
            },
            raw_url: c,
            tenant_id: d,
            boundary: this.scroller,
            blockType: a.type,
            block: a,
            componentId: r.id,
            icon_info: u,
            shouldRenderPlainText: this.shouldRenderPlainText,
            plainTextPrefixSpace: this.shouldPlainTextPrefixSpace(i),
            plainTextSuffixSpace: this.shouldPlainTextSuffixSpace(i)
          })
        });
      }
      return reactJsxRuntimeCoreReexport.jsx(iosEditorLeafTextWrapper.IosLeafTextWrapper, {
        selectionAPI: this.selectionAPI,
        length: l,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "fallback-block inline",
          contentEditable: "false",
          children: ["[", t("block.placeholder.new_app"), "]"]
        })
      });
    }
    constructor(e) {
      super();
      eE(this, "blockManager", undefined);
      eE(this, "scroller", undefined);
      eE(this, "editor", undefined);
      eE(this, "selectionAPI", undefined);
      eE(this, "shouldRenderPlainText", false);
      let {
        blockManager: i,
        scroller: n,
        editor: r
      } = e;
      this.blockManager = i;
      this.scroller = n;
      this.editor = r;
      this.selectionAPI = i.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey);
      this.shouldRenderPlainText = !!i.editorAPI.config.get("shouldRenderPlainText");
    }
  };
  eE(h, "init", false);
  eE(h, "KEY", inlineComponentConstants.componentType);
  r = h.prototype;
  o = "render";
  l = [d, u];
  s = Object.getOwnPropertyDescriptor(h.prototype, "render");
  a = h.prototype;
  c = {};
  Object.keys(s).forEach(function (e) {
    c[e] = s[e];
  });
  c.enumerable = !!c.enumerable;
  c.configurable = !!c.configurable;
  if ("value" in c || c.initializer) {
    c.writable = true;
  }
  c = l.slice().reverse().reduce(function (e, i) {
    return i(r, o, e) || e;
  }, c);
  if (a && c.initializer !== undefined) {
    c.value = c.initializer ? c.initializer.call(a) : undefined;
    c.initializer = undefined;
  }
  if (c.initializer === undefined) {
    Object.defineProperty(r, o, c);
  }
  let eS = h;
  require.d(exports, {
    DocxMentionDocRenderer: function () {
      return eS;
    }
  });
}