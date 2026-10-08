// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'DocxImageRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 172826
         */
module.exports = function (module, exports, require) {
  var n;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var readPdfGuidanceFooter = require("read-pdf-guidance-footer") /*id: 446560*/;
  var todoBlockClass = require("todo-block-class") /*id: 393449*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editCheckerProvider = require("edit-checker-provider") /*id: 884051*/;
  var docBlockValidationUtils = require("doc-block-validation-utils") /*id: 906066*/;
  function h(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let f = dependencyInjectionContainer.Provide(editCheckerProvider.editCheckerProvider)(n = class {
    constructor() {
      h(this, "blockType", docBlockTypeConstants.blockTypeConstants.TODO);
      h(this, "checkFunc", docBlockValidationUtils.validateDeleteChild);
    }
  }) || n;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var v = classnamesUtils;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docHostTypeChecker = require("doc-host-type-checker") /*id: 713546*/;
  var docColorUtils = require("doc-color-utils") /*id: 986243*/;
  var docContentPageClickCollector = require("doc-content-page-click-collector") /*id: 751641*/;
  var uiEventTrackingConstants = require("ui-event-tracking-constants") /*id: 28205*/;
  var docxBlockValidatorUtils_1 = require("docx-block-validator-utils_1") /*id: 869432*/;
  var docxTextBlockClickHandler = require("docx-text-block-click-handler") /*id: 90739*/;
  var docTaskBlockFlags = require("doc-task-block-flags") /*id: 46259*/;
  var todoLineThroughRenderer = require("todo-line-through-renderer") /*id: 544876*/;
  var textualContentWrapper = require("textual-content-wrapper") /*id: 858631*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorFormatRevisionUtils_1 = require("editor-format-revision-utils_1") /*id: 638641*/;
  var docTranslateEdit = require("doc-translate-edit") /*id: 543514*/;
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var changeTodoOutlinedIcon = require("change-todo-outlined-icon") /*id: 157925*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var linkEditorConstantsReexportWrapper = require("link-editor-constants-reexport-wrapper") /*id: 589703*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var currentUserSelectors = require("current-user-selectors") /*id: 96617*/;
  var syncedRefBlockToken = require("synced-ref-block-token") /*id: 893973*/;
  var editorRevisingStateAccessor = require("editor-revising-state-accessor") /*id: 828858*/;
  var docsModeProviderToken = require("docs-mode-provider-token") /*id: 431030*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var convertBlockToTask = require("convert-block-to-task") /*id: 285770*/;
  var dateTimeReminderUtils_1 = require("date-time-reminder-utils_1") /*id: 25358*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorRevisionAddHandler = require("editor-revision-add-handler") /*id: 856858*/;
  var uiInlineTriggerConstants = require("ui-inline-trigger-constants") /*id: 116204*/;
  var mentionTypesEnum = require("mention-types-enum") /*id: 622152*/;
  let et = async e => {
    let {
      block: i,
      blockManager: r,
      range: n,
      mentionOptions: o
    } = e;
    let l = {};
    let s = {};
    let [a, c] = editorRevisionAddHandler.getRevisionInfo(i, editorRangeUtilities.convertRangeWithZone(i, editorRangeUtilities.getStartLenArray(n)));
    if (a && c) {
      l[a[0]] = a[1];
      s.extra = {
        revisionContext: c
      };
    }
    await r.applyTransaction("replaceSlashToAt", e => {
      let r = new contentStructureDelta.ContentDelta({
        zoneId: i.model.zoneId
      }).retain(n.start).delete(n.len).insert("@", l);
      i.model.apply(r, {
        extra: {
          op: e
        }
      });
    }, s);
    i.model.setSelection({
      start: n.start + 1,
      len: 0
    }, true);
    setTimeout(async () => {
      let e = uuidGeneratorUtil.generateUuid();
      let l = i.model.zoneState;
      let s = {
        start: l.offsetToPoint(n.start),
        end: l.offsetToPoint(n.start + 1)
      };
      await i.model.toggleMark({
        trigger: e
      }, s);
      let a = i.hostElement.querySelector(`.trigger-holder-${e}`);
      if (a) {
        r.dispatch(uiInlineTriggerConstants.showInlineTrigger, {
          identifier: mentionTypesEnum.MentionTypes.mentionAt,
          target: a,
          uuid: e,
          options: o
        });
      }
    });
  };
  var opendocImageViewerUtils = require("opendoc-image-viewer-utils") /*id: 356868*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var en = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsxs("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [reactJsxRuntimeCoreReexport.jsx("path", {
        d: "M0 0h16v16H0z"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#646a73",
        d: "M10.8 3.39H5.2v.576c0 .156-.016.213-.047.27a.3.3 0 0 1-.132.132c-.057.03-.114.047-.27.047H4.25c-.156 0-.213-.017-.27-.047a.3.3 0 0 1-.132-.132c-.03-.057-.047-.114-.047-.27V3.39H2.4v10.244h11.2V3.39h-1.4v.576c0 .156-.016.213-.047.27a.3.3 0 0 1-.132.132c-.057.03-.114.047-.27.047h-.502c-.156 0-.213-.017-.27-.047a.3.3 0 0 1-.132-.132c-.03-.057-.047-.114-.047-.27zm1.4-1.366h2.1c.387 0 .7.306.7.683v11.61a.69.69 0 0 1-.7.683H1.7a.69.69 0 0 1-.7-.683V2.707c0-.377.313-.683.7-.683h2.1V1.45c0-.156.016-.213.047-.27a.3.3 0 0 1 .132-.132c.057-.03.114-.047.27-.047h.502c.156 0 .213.016.27.047q.086.046.132.132c.03.057.047.114.047.27v.575h5.6V1.45c0-.156.016-.213.047-.27a.3.3 0 0 1 .132-.132c.057-.03.114-.047.27-.047h.502c.156 0 .213.016.27.047q.086.046.132.132c.03.057.047.114.047.27zm-9.8 4.44h11.2v1.365H2.4z"
      })]
    })
  });
  var eo = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#646a73",
      fillRule: "evenodd",
      d: "M5 3.998a2 2 0 1 1 4.001.001A2 2 0 0 1 5 3.998M7 .665a3.334 3.334 0 1 0 .001 6.667A3.334 3.334 0 0 0 7 .665M2.75 12.02c.297-1.15 1.34-2 2.583-2H8.69c.184 0 .333-.15.333-.333V9.02a.333.333 0 0 0-.333-.333H5.333a4 4 0 0 0-4 4v1.642c0 .368.3.666.667.666h6.689c.184 0 .333-.149.333-.333v-.667a.333.333 0 0 0-.333-.333H2.667v-.975q.002-.346.083-.667M12.999 9h-.667a.333.333 0 0 0-.333.333V11h-1.667a.333.333 0 0 0-.333.333V12c0 .184.149.333.333.333h1.667V14c0 .184.149.333.333.333h.667c.184 0 .333-.15.333-.333v-1.667h1.667c.184 0 .333-.15.333-.333v-.667a.333.333 0 0 0-.333-.333h-1.667V9.333A.333.333 0 0 0 12.999 9"
    })
  });
  function el(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class es extends reactCoreLibraryReexport.Component {
    renderAddReminder() {
      return reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
        overlayClassName: v({
          "reminder-toolbar-tooltip-hidden": !this.props.visible
        }),
        mouseEnterDelay: 200,
        title: t("reminder.toolbar.reminder"),
        placement: "top",
        hideAction: ["mouseLeave", "click"],
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: "add-reminder toolbar-btn",
          onClick: this.onAddReminderButtonClick,
          onMouseDown: this.onButtonMouseDown,
          children: reactJsxRuntimeCoreReexport.jsx(en, {})
        })
      });
    }
    renderAddUser() {
      return reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
        overlayClassName: v({
          "reminder-toolbar-tooltip-hidden": !this.props.visible
        }),
        mouseEnterDelay: 200,
        title: t("reminder.toolbar.user"),
        placement: "top",
        hideAction: ["mouseLeave", "click"],
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: "add-user toolbar-btn",
          onClick: this.onAtUserButtonClick,
          onMouseDown: this.onButtonMouseDown,
          children: reactJsxRuntimeCoreReexport.jsx(eo, {})
        })
      });
    }
    onTrasnTaskMouseDown(e) {
      e.preventDefault();
    }
    renderToTask() {
      if (browserEnvironmentDetectionUtils.browserDetector.isOpendoc && !opendocImageViewerUtils.hasNoNeedJsSDKSession || userEnvironmentUtils.isAnonymousAccess()) {
        return null;
      }
      let {
        blockManager: e
      } = this.props;
      let {
        editorAPI: i
      } = e;
      if (!i.config.get("editable") || function (e) {
        var i;
        let r = (i = e.getService(docsModeProviderToken.docsModeProvider, {
          optional: true
        })) === null || i === undefined ? undefined : i.getDocsMode();
        let n = e.config.get("translated");
        let o = e.config.get("isPresentationMode");
        let l = e.config.get("isHistory");
        let s = e.config.get("isPreview");
        let a = r === editorRevisingStateAccessor.EditorModes.REVISING;
        let c = syncedReferenceBlockUtils.isSyncedReferenceBlock(e);
        let d = e.getService(syncedRefBlockToken.syncedRefBlockToken, {
          optional: true
        });
        let u = d == null ? undefined : d.getMainDocxEditorAPI();
        let h = n;
        let f = n && (u == null ? undefined : u.config.get("translatedOnlyTranslation"));
        if (docTranslateEdit.isDocTranslateEdit()) {
          h = !!f;
        }
        if (a && c) {
          return true;
        }
        let g = false;
        if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          g = r === editorRevisingStateAccessor.EditorModes.READING;
          if (!!c && !(u == null ? undefined : u.config.get("editPermission"))) {
            g = false;
          }
        }
        let p = reduxStoreInitializer.reduxStore.getState();
        let m = String(currentUserSelectors.selectCurrentUser(p).get("user_type")) === platformDocUtils.$AG.APPUSER;
        return h || o || l || s || platformDocUtils.KNd() || g || m;
      }(i) || docHostTypeChecker.isSheetHost(e.config)) {
        return null;
      }
      let {
        offline: r
      } = this.props;
      let n = r ? offlineStatusSelectorsUtils.featureUnavailableOfflineToast : t("LarkCCM_Tasks_CreateATask_Tooltip");
      return reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
        overlayClassName: v({
          "reminder-toolbar-tooltip-hidden": !this.props.visible
        }),
        mouseEnterDelay: 200,
        title: n,
        placement: "top",
        hideAction: ["mouseLeave", "click"],
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: v("to-task", "toolbar-btn", {
            "to-task-btn-offline": this.props.offline
          }),
          onClick: this.onTransToTaskClick,
          onMouseDown: this.onTrasnTaskMouseDown,
          children: reactJsxRuntimeCoreReexport.jsx(changeTodoOutlinedIcon.ChangeTodoOutlined, {})
        })
      });
    }
    render() {
      let {
        isSSR: e
      } = this.props;
      let i = v({
        "docx-reminder-toolbar": true,
        visible: this.props.visible,
        "docx-reminder-toolbar-checklist-style": docTaskBlockFlags.isFeishuTodoEnabled()
      });
      return reactJsxRuntimeCoreReexport.jsxs("span", {
        className: i,
        children: [null, docTaskBlockFlags.isFeishuTodoEnabled() && this.props.containerWidth && this.props.containerWidth >= this.minShouldRenderWidth && !e ? this.renderToTask() : null]
      });
    }
    constructor(...e) {
      super(...e);
      el(this, "insertRange", null);
      el(this, "minShouldRenderWidth", 110);
      el(this, "onAtUserButtonClick", () => {
        let {
          blockManager: e,
          textBlock: i
        } = this.props;
        let r = i.model.zoneState.getModelText().length - 1;
        let n = this.insertRange || {
          zoneId: i.model.zoneId,
          start: r,
          len: 0
        };
        i.model.setSelection(n, true);
        setTimeout(() => {
          et({
            block: i,
            blockManager: e,
            range: i.model.getSelection().toPosition(),
            mentionOptions: {
              defaultActiveTab: linkEditorConstantsReexportWrapper.targetTypes.USER,
              singleTab: true,
              source: docBlockTypeConstants.blockTypeConstants.TODO
            }
          });
          docContentPageClickCollector.collectDocContentPageClick(i.id, {
            actionType: uiEventTrackingConstants.uiClickEvents.CLICK_TODO_MENTION_PEOPLE_PANEL,
            target: "ccm_doc_reminder_panel_view"
          }, {
            blockManager: e
          });
        }, 100);
      });
      el(this, "onAddReminderButtonClick", () => {
        let {
          textBlock: e,
          blockManager: i
        } = this.props;
        let r = e.model.zoneState.getModelText().length;
        let n = this.insertRange || {
          zoneId: e.model.zoneId,
          start: r - 1,
          len: 0
        };
        dateTimeReminderUtils_1.insertReminder(e, n, {
          openPopover: true,
          focus: true
        });
        docContentPageClickCollector.collectDocContentPageClick(e.id, {
          actionType: uiEventTrackingConstants.uiClickEvents.CLICK_TODO_DOC_REMINDER_PANEL,
          target: "ccm_mention_panel_view"
        }, {
          blockManager: i
        });
      });
      el(this, "onTransToTaskClick", () => {
        if (this.props.offline) {
          return;
        }
        let {
          textBlock: e,
          blockManager: i
        } = this.props;
        docContentPageClickCollector.collectDocContentPageClick(e.id, {
          actionType: uiEventTrackingConstants.uiClickEvents.CLICK_TODO_TURN_TASK,
          target: "none"
        }, {
          blockManager: i
        });
        convertBlockToTask.convertBlockToTask(e, i);
      });
      el(this, "onButtonMouseDown", () => {
        let {
          textBlock: e
        } = this.props;
        this.insertRange = null;
        if (e.isFocus()) {
          this.insertRange = e.model.getSelection().toPosition();
        }
      });
    }
  }
  var ea = reactReduxCore.connect(e => ({
    offline: offlineStatusSelectorsUtils.selectDocxOfflineDisabled(e)
  }), e => ({}))(es);
  function ec(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class ed extends docxTextBlockClickHandler.DocxTextBlockClickHandler {
    get placeholder() {
      return "";
    }
    get contentElement() {
      return this.contentRef.current;
    }
    get contentWidth() {
      return this.contentRef.current?.clientWidth;
    }
    get isEditable() {
      if (docTranslateEdit.isDocTranslateEdit()) {
        return this.editable && !this.isTranslateBlock;
      } else {
        return this.editable;
      }
    }
    get isTranslateBlock() {
      return docTranslateEdit.isDocTranslateEdit() && syncedTranslationBlockUtils.hasTranslateSnapshot(this.model);
    }
    blockViewDidMount() {
      var e;
      var i;
      var r;
      super.blockViewDidMount();
      if ((e = this.contentRef.current) !== null && e !== undefined) {
        e.addEventListener("mouseenter", this.onMouseEnter);
      }
      if ((i = this.contentRef.current) !== null && i !== undefined) {
        i.addEventListener("mouseleave", this.onMouseLeave);
      }
      if ((r = this.contentRef.current) !== null && r !== undefined) {
        r.addEventListener("mousemove", this.onMouseMove);
      }
      this.editor.on(editorEventConstants.editorEventTypes.CONTENT_WILL_CHANGE, this.handleContentWillChange, {
        zoneId: this.model.zoneId
      });
      if (this.model.isDone) {
        this.applyLineThroughMark(this.model.isDone);
      }
    }
    blockViewWillUnmount() {
      var e;
      var i;
      var r;
      super.blockViewWillUnmount();
      if ((e = this.contentRef.current) !== null && e !== undefined) {
        e.removeEventListener("mouseenter", this.onMouseEnter);
      }
      if ((i = this.contentRef.current) !== null && i !== undefined) {
        i.removeEventListener("mouseleave", this.onMouseLeave);
      }
      if ((r = this.contentRef.current) !== null && r !== undefined) {
        r.removeEventListener("mousemove", this.onMouseMove);
      }
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_WILL_CHANGE, this.handleContentWillChange);
    }
    blockViewDidUpdate(e, i) {
      super.blockViewDidUpdate(e, i);
      let r = e.record.snapshot;
      let n = !!r.done !== this.model.isDone;
      let o = this.getTextLength(r) !== this.getTextLength(this.model.snapshot);
      if (n || o) {
        this.applyLineThroughMark(this.model.isDone);
      }
    }
    addRevisionHighlight(e, i) {
      super.addRevisionHighlight(e, i);
      this.setState({
        revisionActiveColor: docColorUtils.getRevisionUserColor(e, this.model.snapshot.revisions || [])
      });
    }
    removeRevisionHighlight(e, i) {
      super.removeRevisionHighlight(e, i);
      this.setState({
        revisionActiveColor: undefined
      });
    }
    applyLineThroughMark(e) {
      let {
        zoneState: i
      } = this.model;
      let r = {
        line: 0,
        offset: 0,
        zoneId: i.getZoneId()
      };
      let n = {
        ...i.offsetToPoint(i.totalWidth()),
        zoneId: i.getZoneId()
      };
      if (e) {
        this.model.setAttributes({
          start: r,
          end: n
        }, {
          [todoLineThroughRenderer.TODO_LINE_THROUGH_KEY]: "true"
        }, {
          extra: {
            shouldCollab: false
          }
        });
      } else {
        this.model.setAttributes({
          start: r,
          end: n
        }, {
          [todoLineThroughRenderer.TODO_LINE_THROUGH_KEY]: ""
        }, {
          extra: {
            shouldCollab: false
          }
        });
      }
    }
    getTextLength(e) {
      return e.text.initialAttributedTexts.text[0].length;
    }
    isEmptyText(e) {
      return this.getTextLength(e) === 0;
    }
    isNeedReminderToolBar() {
      return false;
    }
    render() {
      let {
        revisionActiveColor: e
      } = this.state;
      let i = !!e;
      let r = i ? {
        "--todo-revision-color": e
      } : {};
      let n = v({
        "todo-block_hover_checkbox": this.state.isCursorInCheckBox && this.isEditable,
        "todo-block": true,
        "task-done": this.model.isDone,
        "todo-block_content_editable": this.isEditable,
        "todo-block_new": false,
        "todo-block_new_square": false,
        "todo-block_old": true,
        "revision-active": i
      });
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(textualContentWrapper.TextualContentWrap, {
          model: this.model,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: n,
            ref: this.contentRef,
            style: r,
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: `todo-block_content todo-align-${this.model.snapshot.align || "left"}`,
              onClick: this.handleClickIcon,
              onMouseDown: this.handleMouseDown,
              children: super.render()
            }), !this.isTranslateBlock && reactJsxRuntimeCoreReexport.jsx("div", {
              contentEditable: false,
              className: "docx-reminder-toolbar-wrapper",
              children: this.renderExtensions()
            })]
          })
        }), this.struct.children.length ? reactJsxRuntimeCoreReexport.jsx("div", {
          style: {
            paddingLeft: docxEditorConstantsConfig.defaultItemCount - docxBlockValidatorUtils_1.listTypeConstant,
            marginLeft: docxBlockValidatorUtils_1.listTypeConstant
          },
          className: "list-children",
          children: this.renderChildren()
        }) : null]
      });
    }
    constructor(...e) {
      super(...e);
      ec(this, "contentRef", reactCoreLibraryReexport.createRef());
      ec(this, "state", {
        isMouseEntered: false,
        isCursorInCheckBox: false,
        revisionActiveColor: undefined
      });
      ec(this, "handleContentWillChange", e => {
        let {
          deltaSet: i
        } = e;
        if (this.model.isDone) {
          i.forEach(e => {
            e.ops.forEach(e => {
              if (deltaSetCore.isInsertString(e)) {
                e.attributes = {
                  ...e.attributes,
                  [todoLineThroughRenderer.TODO_LINE_THROUGH_KEY]: "true"
                };
              }
            });
          });
        }
      });
      ec(this, "onMouseMove", e => {
        if (this.state.isMouseEntered && this.isEditable && this.cursorInCheckBox(e)) {
          this.setState({
            isCursorInCheckBox: true
          });
        }
      });
      ec(this, "handleClickIcon", e => {
        if (!this.isEditable || !this.cursorInCheckBox(e)) {
          return;
        }
        let {
          selectionAPI: i,
          model: {
            isDone: r
          }
        } = this;
        let n = i.getSelection();
        if (i.isSingleTextSelection(n) && !i.isCursor(n)) {
          i.removeAllSelection();
        }
        docContentPageClickCollector.collectDocContentPageClick(this.id, {
          actionType: uiEventTrackingConstants.uiClickEvents.CLICK_TODO_STATUS,
          actionValue: {
            value1: String(!r)
          }
        }, {
          blockManager: this.blockManager
        });
        let o = {};
        let l = editorFormatRevisionUtils_1.getBlockFormatRev(this.blockManager, [this.model]);
        if (l) {
          let {
            revisionId: e,
            type: i
          } = l;
          editorRevisionUtilities.addRevisionContext(o, {
            revisionId: e,
            type: i
          });
        }
        this.blockManager.applyTransaction("toggleTodoBlock", e => {
          if (l) {
            editorFormatRevisionUtils_1.syncFormatRevision(this.blockManager, e, this.model, l, [["done", `${!r}`]], this.model.snapshot);
          }
          e.replace(this.record.id, ["done"], !r);
        }, o);
        e.stopPropagation();
        e.preventDefault();
      });
      ec(this, "renderExtensions", () => {
        if (this.blockManager.editorAPI.config.get("isUneditedTranslationMode")) {
          return null;
        }
        let e = this.state.isMouseEntered && this.isEditable;
        if (this.isNeedReminderToolBar()) {
          return reactJsxRuntimeCoreReexport.jsx(ea, {
            containerWidth: this.contentWidth,
            textBlock: this,
            isSSR: this.props.recursionProps.isSSR,
            blockManager: this.blockManager,
            visible: e
          });
        } else {
          return null;
        }
      });
      ec(this, "onMouseEnter", () => {
        this.setState({
          isMouseEntered: true
        });
      });
      ec(this, "onMouseLeave", () => {
        this.setState({
          isMouseEntered: false,
          isCursorInCheckBox: false
        });
      });
      ec(this, "cursorInCheckBox", e => {
        var i;
        var r;
        var n;
        let {
          target: o
        } = e;
        if (!o) {
          return false;
        }
        let {
          firstChild: l
        } = o;
        if (!l) {
          return false;
        }
        let s = ((i = l.getBoundingClientRect) === null || i === undefined ? undefined : i.call(l)) || l.parentNode.getBoundingClientRect();
        if (!s) {
          return false;
        }
        let a = (n = this.contentRef.current) === null || n === undefined ? undefined : (r = n.getBoundingClientRect) === null || r === undefined ? undefined : r.call(n);
        let c = (a == null ? undefined : a.top) || s.top;
        let d = false;
        if (this.contentRef.current && a) {
          let e = this.contentRef.current.querySelector(".ace-line");
          let i = e == null ? undefined : e.querySelectorAll(".editor-kit-equation-block");
          if (i) {
            d = [...i].some(e => e.getBoundingClientRect().top - a.top < 20);
          }
        }
        if (d) {
          c += l.offsetTop || 0;
        }
        let u = s.left - 8;
        let h = [s.left - 8 - 8, c + 8];
        if (a && !d && s.top - a.top > 20) {
          if (this.model.snapshot.align === "center") {
            h[0] = a.left + (a.width - 26) / 2;
          } else if (this.model.snapshot.align === "right") {
            h[0] = a.right - 26 - 8 - 8;
          }
        }
        u = h[0] + 10.4;
        let f = h[0] - 10.4;
        c = h[1] - 10.4;
        let g = h[1] + 10.4;
        let {
          clientX: p,
          clientY: m
        } = e;
        return !!(p >= f) && !!(p <= u) && !!(m <= g) && !!(m >= c);
      });
      ec(this, "handleMouseDown", e => {
        if (this.cursorInCheckBox(e)) {
          e.preventDefault();
        }
      });
    }
  }
  function eu(e, i) {
    docxEditorCore.registerProviders([f]);
    readPdfGuidanceFooter.ReadPdfFooter(todoBlockClass.TodoBlock, ed, e, i);
  }
  require.d(exports, {
    DocxImageRenderer: function () {
      return eu;
    }
  });
}