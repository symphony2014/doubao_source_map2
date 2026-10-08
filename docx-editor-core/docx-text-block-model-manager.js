// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'TextBlockManager'
// - Renamed export 'r' to 'TextBlockModel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 568038
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var l;
  var a;
  var s;
  var c;
  var u;
  var d;
  var h;
  var f;
  var g;
  var p;
  var m;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var docxEditorLineEditableManager = require("docx-editor-line-editable-manager") /*id: 996925*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var mentionDocManagerToken = require("mention-doc-manager-token") /*id: 688263*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var pasteRecordConstants = require("paste-record-constants") /*id: 780742*/;
  function $(e, n, i, r) {
    if (i) {
      Object.defineProperty(e, n, {
        enumerable: i.enumerable,
        configurable: i.configurable,
        writable: i.writable,
        value: i.initializer ? i.initializer.call(r) : undefined
      });
    }
  }
  function Z(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  function W(e, n, i, r, o) {
    var l = {};
    Object.keys(r).forEach(function (e) {
      l[e] = r[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = i.slice().reverse().reduce(function (i, r) {
      return r(e, n, i) || i;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, n, l);
      return null;
    } else {
      return l;
    }
  }
  r = dependencyInjectionContainer.Dynamic();
  c = class extends docBlockModelClass.DocBlockModel {
    get isTextBlock() {
      return true;
    }
    get isCreatedByPaste() {
      return changeSourceValidators.isPasteSource(this.struct);
    }
    get schema() {
      return this.contentState.schema;
    }
    get virtualListModule() {
      var e;
      return ((e = this.editor.virtualListManager) === null || e === undefined ? undefined : e.getVirtualListModuleOfZone(this.zoneId)) || null;
    }
    get isSSR() {
      return this.editorAPI.config.get("isSSR") === true;
    }
    get zoneState() {
      return this.contentState.getZoneState(this.zoneId) ?? this._zoneState;
    }
    onInit() {
      try {
        var e;
        let n = contentDeltaUtilityFunctions.C(this.snapshot.text).get(editorModuleConstantsConfig.defaultVersion);
        n.zoneId = this.zoneId;
        this.contentState.addZone(this.zoneId, n);
        this.initialVersion = ((e = this.blockManager.editorAPI.getService(collabTriggersProvider.collabProvider, {
          optional: true
        })) === null || e === undefined ? undefined : e.getVersion(this.recordId)) || -1;
      } catch (e) {
        this.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
          action: "texture_block_model_attach_error",
          info: JSON.stringify({
            blockId: this.id,
            recordId: platformDocUtils.p5T(this.recordId),
            error: docxEditorBlockMetadataUtils.serializeError(e)
          })
        });
        throw e;
      }
    }
    onUpdate(e, n) {
      let {
        ops: i
      } = e;
      let r = n && n.options;
      this.matches = null;
      if (i && r) {
        this.updateOriginContentState(i, r);
      }
    }
    onDestroy() {
      this._zoneState = this.zoneState;
      this.editor.triggerEditorEvent("_preventNextRender", {
        zoneId: this.zoneId
      });
      this.contentState.removeZone(this.zoneId);
    }
    get isEmpty() {
      return this.zoneState.isEmpty();
    }
    getText() {
      return this.zoneState.getModelText();
    }
    toModel(e) {
      let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      return JSON.parse(JSON.stringify({
        ...this.snapshot,
        ...e,
        ...(n ? {} : {
          children: []
        })
      }));
    }
    toggleMark(e, n, i = false, r) {
      if (i) {
        let i = Object.keys(e).reduce((e, n) => {
          e[n] = "";
          return e;
        }, {});
        this.setAttributes(n, i, r);
      } else {
        this.setAttributes(n, e, r);
      }
    }
    async replaceText(e, n, i) {
      let r = (n == null ? undefined : n.text) || "";
      let o = editorRevisionUtilities.filterRevisionKeys((n == null ? undefined : n.mark) || {});
      if (i) {
        this.applyTransaction("replaceText", n => {
          this.zoneState.replaceTextsWithRevision([{
            range: editorRangeUtilities.getStartLenArray(editorRangeUtilities.toPosition(e)),
            toBeReplaced: {
              text: r,
              mark: o
            }
          }], i, e => this.apply(e, {
            extra: {
              op: n
            }
          }));
        }, {
          extra: {
            revisionContext: {
              revisionId: i,
              type: editorRevisionConstants.diffOperationMap.REPLACE
            }
          }
        });
        return;
      }
      let l = Array.isArray(e) ? {
        start: this.zoneState.offsetToPoint(e[0]),
        end: this.zoneState.offsetToPoint(e[1])
      } : {
        start: e.start,
        end: e.end
      };
      this.replaceEditorText(l, r, o, {
        type: "replaceText"
      });
    }
    async replaceInputData(e) {
      let n = editorDataManagerClass.EditorDataManager.deserialize(e);
      this.replaceRecordText(n);
    }
    getInlineRecordIds() {
      return editorTextBlockUtilities.getInlineDisplayMarksFromText(this.snapshot);
    }
    getAttributes(e, n) {
      return this.zoneState.getAttributes(e, n);
    }
    setAttributes(e, n, i) {
      return this.contentState.setAttributes(e, n, i);
    }
    apply(e, n) {
      return this.contentState.apply(e, n);
    }
    replaceEditorText(e, n, i, r) {
      return this.contentState.replaceText(e, n, i, r);
    }
    insertText(e, n, i, r) {
      return this.contentState.insertText(e, n, i, r);
    }
    getContent() {
      return this.contentState.getContent();
    }
    rangeToPosition(e) {
      return this.contentState.rangeToPosition(e);
    }
    getInlineStyleOverride(e, n) {
      if (e) {
        if (n) {
          return this.contentState.getInlineStyleOverride(e, n);
        } else {
          return this.contentState.getInlineStyleOverride(e);
        }
      } else {
        return this.contentState.getInlineStyleOverride();
      }
    }
    getSelection() {
      return this.editor.selection.getSelection(this.zoneId);
    }
    setSelection(e, n) {
      let i;
      i = "len" in e ? {
        ...e,
        zoneId: this.zoneId
      } : {
        ...e,
        start: {
          ...e.start,
          zoneId: this.zoneId
        },
        end: {
          ...e.end,
          zoneId: this.zoneId
        }
      };
      this.editor.selection.setSelection(i, n);
    }
    isSelectingAll() {
      return this.editor.selection.isSelectingAll(this.zoneId);
    }
    selectAll() {
      return this.editor.selection.selectAll(this.zoneId);
    }
    domRangeToModelRange(e) {
      let n = null;
      try {
        n = this.editor.selection.toModelRange(e, this.zoneId);
      } catch (e) {
        if (e instanceof Error) {
          this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
            action: "dom_range_to_model_range_error",
            zoneId: this.zoneId,
            error: e.message,
            type: this.type
          });
        }
      }
      return n;
    }
    getRect() {
      return this.editor.getRect(this.zoneId);
    }
    async replaceRecordText(e) {
      this.applyTransaction("replaceRecordText", n => {
        n.replace(this.record.id, ["text"], e);
      });
    }
    updateOriginContentState(e, n) {
      var i;
      if (!this.contentState || !this.snapshot.text) {
        return;
      }
      let {
        transactionName: r,
        from: o
      } = n;
      let l = changeSourceValidators.isUndoRedoSource(n);
      let a = editorModuleConstantsConfig.editorCommandList.concat(docxEditorLineEditableManager.LineEditableManager.lineEditable ? editorModuleConstantsConfig.textOperationCommands : []);
      if (!l && r && a.includes(r) && syncedReferenceBlockUtils.isChangeFromCurrentEditor(n, this.editorAPI.id)) {
        return;
      }
      let s = false;
      if (e.length) {
        e.forEach(e => {
          if (!flowSyncDeltaOperations.isEasysyncSubtype(e) && (e.p.length === 0 || e.p[0] === "text")) {
            s = true;
          }
        });
      }
      let c = ((i = this.blockManager.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      })) === null || i === undefined ? undefined : i.getVersion(this.recordId)) || -1;
      if (this.initialVersion >= c && r === "applyRemoteOperations") {
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
          action: "content_state_version",
          info: JSON.stringify({
            id: docxUtilityHelpers.maskSensitiveData(this.recordId),
            collab_version: c,
            init_version: this.initialVersion,
            snapshot: this.snapshot.text.initialAttributedTexts.text[0].length,
            content: this.getText().length
          })
        });
        s = true;
      }
      let u = this.record.snapshot.text.initialAttributedTexts.text[editorModuleConstantsConfig.defaultVersion];
      if (flowSyncDeltaOperations.hasCarriageReturn(u)) {
        s = true;
      }
      if (s) {
        let {
          shouldUpdate: e,
          applyFunction: i,
          applyData: r
        } = this.getUpdateContext();
        if (e) {
          let e = this.getSelection();
          let l = e && n.from === collaborativeEditingFlowSyncModule.kq.LOCAL;
          try {
            i(r, {
              extra: {
                shouldCollab: false,
                from: o
              }
            });
          } catch (e) {
            this.collectApplyError("apply_function_error", e, r);
          }
          if (e && l) {
            this.setSelection(e);
          }
        }
        return;
      }
      if (e.length) {
        e.filter(e => flowSyncDeltaOperations.isEasysyncSubtype(e)).forEach(e => {
          let {
            apool: i,
            zone_changesets: r
          } = e.subType.o;
          this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
            action: "update_content_state",
            info: JSON.stringify({
              id: docxUtilityHelpers.maskSensitiveData(this.recordId),
              cs: flowSyncDeltaOperations.escapeDollarSigns(r[0]),
              attr: flowSyncDeltaOperations.formatAttribsToString(i.numToAttrib),
              snapshot: this.snapshot.text.initialAttributedTexts.text[0].length,
              content: this.getText().length,
              collab_version: c,
              init_version: this.initialVersion
            })
          });
          let l = flowSyncDeltaOperations.changesetToDeltaSet(e).get(editorModuleConstantsConfig.defaultVersion);
          let a = new contentStructureDelta.ContentDelta({
            zoneId: this.zoneId
          }).concat(l);
          try {
            this.apply(a, {
              extra: {
                shouldCollab: false,
                from: o
              },
              type: n.transactionName
            });
          } catch (e) {
            this.collectApplyError("apply_easysync_to_delta_error", e, a);
          }
        });
      }
    }
    collectApplyError(e, n, i) {
      docxUtilityHelpers.captureException(n);
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: e,
        zoneId: this.zoneId,
        error: n.message,
        type: this.type,
        snapshot: this.snapshot.text.initialAttributedTexts.text[0].length,
        content: this.getText().length,
        info: JSON.stringify({
          id: docxUtilityHelpers.maskSensitiveData(this.recordId),
          applyData: flowSyncDeltaOperations.formatOpsForDisplay(new deltaSetCore.DeltaSet().add(i))
        })
      });
    }
    updateContent(e, n) {
      var i;
      let r = e.ops.length - 1;
      let o = e.ops[r];
      if ((o == null ? undefined : o.insert) === "\n") {
        e.ops.pop();
      } else if (o == null ? undefined : (i = o.insert) === null || i === undefined ? undefined : i.endsWith("\n")) {
        o.insert = o.insert.slice(0, -1);
      }
      let l = new contentStructureDelta.ContentDelta({
        zoneId: this.zoneId
      }).delete(this.zoneState.totalWidth() - 1).concat(e);
      try {
        this.apply(l, n);
      } catch (e) {}
    }
    getUpdateContext() {
      let e = contentDeltaUtilityFunctions.A(this.snapshot.text, this.zoneState).get(editorModuleConstantsConfig.defaultVersion);
      let n = this.zoneState.getContent(true);
      let i = this.updateContent.bind(this);
      return {
        shouldUpdate: !contentDeltaUtilityFunctions.N(e, n),
        applyFunction: i,
        applyData: e
      };
    }
    forceRefresh(e) {
      var n;
      var i;
      let r = e ?? this.zoneState.lines.map(e => e.index);
      if ((n = (i = this.contentState)._forceRefresh) !== null && n !== undefined) {
        n.call(i, this.zoneId, r);
      }
    }
    constructor(e) {
      super(e);
      $(this, "blockManager", o, this);
      $(this, "editor", l, this);
      $(this, "contentState", a, this);
      $(this, "mentionDocManager", s, this);
      Z(this, "matches", null);
      Z(this, "findKeyword", undefined);
      Z(this, "zoneId", contentDeltaUtilityFunctions.toString(this.id));
      Z(this, "_zoneState", undefined);
      Z(this, "initialVersion", -1);
    }
  };
  Z(c, "abstractType", pasteRecordConstants.textualBlockType);
  o = W(c.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  l = W(c.prototype, "editor", [docxEditorKitProviders.editorKitProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  a = W(c.prototype, "contentState", [docxEditorKitProviders.contentStateService], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  s = W(c.prototype, "mentionDocManager", [r, mentionDocManagerToken.mentionDocMgrToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let G = c;
  var syntheticEventUtilities = require("synthetic-event-utilities") /*id: 97252*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var editorZoneRenderer = require("editor-zone-renderer") /*id: 566183*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var Y = classnamesUtils;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var docxSignalSubjectRegistry = require("docx-signal-subject-registry") /*id: 272418*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var reduxProviderLogic = require("redux-provider-logic") /*id: 93342*/;
  var calloutBlockUtils = require("callout-block-utils") /*id: 662420*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var smartCorrectionServiceToken = require("smart-correction-service-token") /*id: 381585*/;
  var reactContextInstance_2 = require("react-context-instance_2") /*id: 769735*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function eg(e, n, i, r) {
    if (i) {
      Object.defineProperty(e, n, {
        enumerable: i.enumerable,
        configurable: i.configurable,
        writable: i.writable,
        value: i.initializer ? i.initializer.call(r) : undefined
      });
    }
  }
  function ep(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  function em(e, n, i, r, o) {
    var l = {};
    Object.keys(r).forEach(function (e) {
      l[e] = r[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = i.slice().reverse().reduce(function (i, r) {
      return r(e, n, i) || i;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, n, l);
      return null;
    } else {
      return l;
    }
  }
  let ev = [""];
  u = dependencyInjectionContainer.Dynamic();
  d = dependencyInjectionContainer.Optional();
  f = em((h = class extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    get editor() {
      return this._editor;
    }
    get isTextBlock() {
      return true;
    }
    get placeholder() {
      return "";
    }
    get isShowPlaceholderWhenReadOnly() {
      return false;
    }
    get mentionPlaceHolder() {
      if (calloutBlockUtils.isCalloutContext(this.id, this.blockManager)) {
        return t("CreationDoc_DocX_MainView_Mention_callout_field");
      } else {
        return t("CreationDoc_DocX_MainView_Mention_TypeToMention_field");
      }
    }
    get isTextEditable() {
      return this.editable;
    }
    get translatedStatus() {
      return reduxStoreInitializer.reduxStore.getState().appState.translate.status.translated;
    }
    nodeToRange(e) {
      return syntheticEventUtilities.createSelectionRange(e, this._editor);
    }
    focus(e = false, n = false) {
      let i = this._editor.selection;
      let {
        zoneId: r
      } = this.model;
      if (!i.isZoneInSelection(r)) {
        i.setSelection({
          zoneId: r,
          len: 0,
          start: this.model.zoneState.totalWidth() - 1
        });
      }
      return i.focus(this.model.zoneId, e, n);
    }
    isFocus() {
      return this._editor.isFocus(this.model.zoneId);
    }
    setBlockFocus(e) {
      let n = this.model.zoneState.getContainer();
      if (e) {
        if (this.hostElement) {
          this.hostElement.classList.add("focused");
        }
        if (n) {
          n.classList.add("text-editor-focused");
        }
        if (this.editor.isEditable()) {
          this.editor.call(editorEventConstants.editorEventTypes.FOCUS);
        }
      } else {
        if (this.hostElement) {
          this.hostElement.classList.remove("focused");
        }
        if (n) {
          n.classList.remove("text-editor-focused");
        }
        this.editor.call(editorEventConstants.editorEventTypes.BLUR);
      }
    }
    setBlockEmptyClass() {
      let {
        isEmpty: e
      } = this.model;
      if (e) {
        if (this.hostElement) {
          this.hostElement.classList.add("isEmpty");
        }
      } else if (this.hostElement) {
        this.hostElement.classList.remove("isEmpty");
      }
    }
    async replaceText(e, n) {
      n ||= {
        text: ""
      };
      await this.model.replaceText(e, n);
    }
    async replaceTextAndUpdateSelection(e, n, i) {
      n ||= {
        text: ""
      };
      await this.model.replaceText(e, n);
      let r = this.model.zoneState.pointToOffset(e.start) || 0;
      let o = i !== undefined ? i : r + n.text.length;
      if (browserEnvironmentDetectionUtils.browserDetector.isH5 && browserEnvironmentDetectionUtils.browserDetector.isAndroid) {
        this.model.setSelection({
          start: o,
          len: 0
        }, true);
      }
      this.selectionAPI.setSelection([{
        id: this.id,
        type: docxBlockSelectionHandler_1.blockTypes.TEXT,
        selection: {
          start: o,
          end: o
        }
      }]);
    }
    onBufferEnter() {
      let {
        selectionAPI: e
      } = this;
      if (e.getIsCurrentTextSelection(this.id) && e.isFocusInHiddenInputDom()) {
        this.focus();
      }
    }
    removeCurrentSelection() {
      var e;
      let {
        model: n
      } = this;
      let i = n.getSelection();
      if (i && !n.isDestroyed) {
        n.setSelection({
          ...i,
          isActive: false
        });
      }
      if ((e = n.zoneState.getContainer()) !== null && e !== undefined) {
        e.blur();
      }
    }
    getTextEditorSelection() {
      let e = this.selectionAPI.getSelectedBlockIfInSelection(this.id);
      let n = this.model.getSelection();
      if (e && e.type === docxBlockSelectionHandler_1.blockTypes.TEXT && n) {
        return n;
      } else {
        return this.getTextEditorAllSelection();
      }
    }
    getTextEditorAllSelection() {
      let {
        editor: e
      } = this;
      let {
        zoneState: n
      } = this.model;
      let i = n.getLine(n.length() - 1).length() - 1;
      return new activeEditorRange.ActiveEditorRange({
        editor: e,
        start: {
          zoneId: this.model.zoneId,
          line: 0,
          offset: 0
        },
        end: {
          zoneId: this.model.zoneId,
          line: n.length() - 1,
          offset: i
        },
        state: n
      });
    }
    blockViewDidMount() {
      var e;
      super.blockViewDidMount();
      let {
        editor: n,
        model: i
      } = this;
      n.triggerEditorEvent("blockViewDidMount", {
        model: i
      });
      if ((e = this.smartCorrectionServiceGetter.get()) !== null && e !== undefined) {
        e.handleBlockViewDidMount(i);
      }
      this.blockManager.addListener(editorUiConstants.editorResizeClass, this.onResize);
      this.setBlockEmptyClass();
      let r = i.zoneState.getContainer();
      n.clipboard.setCanInternalPasteWhitelist(ev);
      if (r) {
        r.addEventListener("mouseover", this.handleMouseOver);
        r.addEventListener("mouseleave", this.handleMouseLeave);
      }
    }
    blockViewDidUpdate(e, n) {
      super.blockViewDidUpdate(e, n);
      this.setBlockEmptyClass();
      super.blockViewDidUpdate(e, n);
    }
    blockViewDidMove() {
      this.editor.triggerEditorEvent("_forceRefresh", {
        zoneId: this.model.zoneId
      });
      super.blockViewDidMove();
    }
    blockViewWillUnmount() {
      this.blockManager.removeListener(editorUiConstants.editorResizeClass, this.onResize);
      let e = this.model.zoneState.getContainer();
      if (e) {
        e.removeEventListener("mouseover", this.handleMouseOver);
        e.removeEventListener("mouseleave", this.handleMouseLeave);
      }
      super.blockViewWillUnmount();
    }
    addCommentHighlight(e) {
      if (this.editor) {
        docxCommentUtils.isSyncedReferenceBlock(this, e);
      }
    }
    addRevisionHighlight(e, n) {
      if (this.editor) {
        editorRevisionUtilities.applyRevHighlight(this, e, n);
      }
    }
    removeCommentHighlight(e, n) {
      if (this.editor) {
        docxCommentUtils.isSyncedReferenceBlock(this, e, true, n);
      }
    }
    removeRevisionHighlight(e, n) {
      if (this.editor) {
        editorRevisionUtilities.applyRevHighlight(this, e, {
          isDelete: true,
          ...n
        });
      }
    }
    setCustomEditorProps(e) {
      this.customEditorProps = e;
    }
    render() {
      let e = {
        textAlign: this.snapshot.align
      };
      let {
        zoneState: n
      } = this.model;
      let i = !n.isEmpty();
      let r = Y("text-editor", {
        "hide-placeholder": [docBlockTypeConstants.alignmentConstants.CENTER, docBlockTypeConstants.alignmentConstants.RIGHT].includes(this.snapshot.align) || !this.editable && !this.isShowPlaceholderWhenReadOnly,
        "non-empty": i
      });
      return reactJsxRuntimeCoreReexport.jsx(reactReduxCore.ReactReduxContext.Consumer, {
        children: n => this.renderZoneView({
          style: e,
          className: r,
          contextList: [{
            Context: reactContextInstance_2.SharedContext,
            contextValue: this.props.recursionProps
          }],
          customizedProviderConstructorList: [e => reduxProviderLogic.reduxProvider(n, e)]
        })
      });
    }
    renderZoneView(e) {
      let n = this.dependencyManager.getPlugins(this.type);
      let i = this.editable && !syncedTranslationBlockUtils.hasTranslateSnapshot(this.model);
      return reactJsxRuntimeCoreReexport.jsx(editorZoneRenderer.ZoneRenderer, {
        zoneId: this.model.zoneId,
        editor: this._editor,
        editable: i,
        className: e.className,
        placeholder: this.placeholder,
        style: e.style,
        plugins: n,
        ...this.customEditorProps,
        scroller: false,
        contextList: e.contextList,
        customizedProviderConstructorList: e.customizedProviderConstructorList,
        isSSR: false
      });
    }
    constructor(...e) {
      super(...e);
      eg(this, "_editor", f, this);
      eg(this, "dependencyManager", g, this);
      eg(this, "smartCorrectionServiceGetter", p, this);
      eg(this, "docxSignalService", m, this);
      ep(this, "shouldRenderPlainText", !!this.editorAPI.config.get("shouldRenderPlainText"));
      ep(this, "slashPlaceHolder", t("CreationDoc_DocX_MainView_SlashCommand_TypeToSearch_field"));
      ep(this, "customEditorProps", {});
      ep(this, "debounceOnResize", debounceUtil_1_1.debounce(() => {
        var e;
        let n = this.editor.getRect();
        let i = (e = this.model.zoneState.getContainer()) === null || e === undefined ? undefined : e.getBoundingClientRect();
        if (i) {
          for (let [e, r] of Object.entries(i.toJSON())) {
            if (n[e] !== r) {
              this.editor.setRect();
              this.editor.call(editorEventConstants.editorEventTypes.RECT_CHANGE, {
                previous: n,
                current: i
              });
              break;
            }
          }
        }
      }, 100));
      ep(this, "onResize", e => {
        var n;
        if (e && e.preEditorWidth === e.editorWidth || !this.blockManager.layoutManager.isBlockActive(this.id)) {
          return;
        }
        this.debounceOnResize();
        let i = (n = this.editor.virtualListManager) === null || n === undefined ? undefined : n.getVirtualListModuleOfZone(this.model.zoneId);
        if (i == null ? undefined : i.isEnabled) {
          i.handleViewportResize();
        }
      });
      ep(this, "handleMouseOver", () => {
        if (this.translatedStatus) {
          var e;
          if ((e = this.docxSignalService) !== null && e !== undefined) {
            e.translateMouseOverSignal.next({
              block: this,
              container: this.model.zoneState.getContainer()
            });
          }
        }
      });
      ep(this, "handleMouseLeave", () => {
        var e;
        if ((e = this.docxSignalService) !== null && e !== undefined) {
          e.translateMouseLeaveSignal.next({
            block: this,
            container: this.model.zoneState.getContainer()
          });
        }
      });
    }
  }).prototype, "_editor", [docxEditorKitProviders.editorKitProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  g = em(h.prototype, "dependencyManager", [docxEditorKitProviders.textualDepProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  p = em(h.prototype, "smartCorrectionServiceGetter", [u, smartCorrectionServiceToken.smartCorrectionToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  m = em(h.prototype, "docxSignalService", [d, docxSignalSubjectRegistry.docxSignalService], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let eb = h;
  require.d(exports, {
    TextBlockManager: function () {
      return eb;
    },
    TextBlockModel: function () {
      return G;
    }
  });
}