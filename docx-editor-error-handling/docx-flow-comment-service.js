// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerFlowCommentService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 433297
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var h;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var I = debugBrowserConfig;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  let N = "rows_id";
  let A = "columns_id";
  let O = "cell_set";
  let D = e => {
    let {
      selector: n,
      record: o,
      id: l
    } = e;
    if (!n || isEmptyUtil.isEmpty(n)) {
      return null;
    }
    let s = o == null ? undefined : o.snapshot;
    if (s.type !== "table") {
      return [n];
    }
    let a = (s == null ? undefined : s.rows_id) ?? [];
    let c = (s == null ? undefined : s.columns_id) ?? [];
    let [d] = n;
    if (arrayIsArrayUtil.isArray(a) && arrayIsArrayUtil.isArray(c)) {
      if (d === N) {
        let e = a.indexOf(l);
        if (e === -1) {
          return [null];
        } else {
          return [[N, e], ...c.map(e => [O, `${l}${e}`])];
        }
      }
      if (d === A) {
        let e = c.indexOf(l);
        if (e === -1) {
          return [null];
        } else {
          return [[A, e], ...a.map(e => [O, `${e}${l}`])];
        }
      }
    }
    return [n];
  };
  var docxRevisionActionUtils = require("docx-revision-action-utils") /*id: 741606*/;
  var flowRevisionServiceName = require("flow-revision-service-name") /*id: 934786*/;
  var docOperationUtils = require("doc-operation-utils") /*id: 558255*/;
  var senderRoleEnum = require("sender-role-enum") /*id: 255496*/;
  var revisionConstants = require("revision-constants") /*id: 394471*/;
  var docxFlowCommentStore = require("docx-flow-comment-store") /*id: 822624*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var aiWritingConstants = require("ai-writing-constants") /*id: 151614*/;
  var flowDoConfigServiceSymbol = require("flow-do-config-service-symbol") /*id: 533067*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var foldProviderAccessor = require("fold-provider-accessor") /*id: 786534*/;
  var contentCommentUtilsExport = require("content-comment-utils-export") /*id: 284561*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  var commentEventConstants = require("comment-event-constants") /*id: 616817*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var eventEmitterProviderNameExport = require("event-emitter-provider-name-export") /*id: 889973*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var clientVarProviderAccess = require("client-var-provider-access") /*id: 503677*/;
  var blockRectServiceId = require("block-rect-service-id") /*id: 768934*/;
  var waitForSyncedCommentServiceReady = require("wait-for-synced-comment-service-ready") /*id: 592697*/;
  var commentActionTypes = require("comment-action-types") /*id: 20572*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var docxCommentRevisionPositionManager = require("docx-comment-revision-position-manager") /*id: 295644*/;
  function eb(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function ey(e, i, r) {
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
  function eS(e, i, r, n, o) {
    var l = {};
    Object.keys(n).forEach(function (e) {
      l[e] = n[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = r.slice().reverse().reduce(function (r, n) {
      return n(e, i, r) || r;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  let ek = I("flow-comment:flow-comment-service");
  let eE = [...docBlockTypeConstants.selectionViewTypes, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.PAGE];
  (n = eC || {}).CommonComment = "comment";
  n.CommonRevision = "revision";
  var eC = n;
  let e_ = dependencyInjectionContainer.Provide(flowRevisionServiceName.revisionServiceName)((l = eS((o = class {
    get isHistory() {
      return !!this.blockManager.editorAPI.config.get("isHistory");
    }
    get isPreview() {
      return !!this.blockManager.editorAPI.config.get("isPreview");
    }
    get isReview() {
      return !!this.blockManager.editorAPI.config.get("isReview");
    }
    get editorContext() {
      return this.blockManager.editorAPI.getService(compatibleEditorContext_1.compatibleContext, {
        dynamic: true,
        optional: true
      });
    }
    get flowDocConfig() {
      return diContainerInstance.diContainer.get(flowDoConfigServiceSymbol.FlowDoConfigService);
    }
    init() {
      ek("init");
      docxFlowCommentStore.initCommentStore();
      this.eventEmitter = new docxEditorEventConstantsAndManager.EventEmitter();
      this.flowCommentPosition = new docxCommentRevisionPositionManager.CommentRevisionPositionManager(false, this.blockManager, this.fold, this.rect, async () => {
        return (await this.editorContext)?.viewport;
      }, e => {
        let i = this.getRevisionByRevisionId(e);
        if (i == null) {
          return undefined;
        } else {
          return i.create_time;
        }
      });
      if (!this.isHistory) {
        if (this.blockManager.editorAPI.isReady()) {
          this.handleEditorReady();
        } else {
          this.subs.push(this.blockManager.editorAPI.lifecycle.editorReady$.subscribe(this.handleEditorReady));
        }
      }
    }
    destroy() {
      ek("destroy");
      this.subs.forEach(e => e.unsubscribe());
      this.subs = [];
    }
    handleEnsureRevisionContainerId(e) {
      let i = this.blockManager.getRecordByBlockId(this.blockManager.rootBlockId);
      let r = i == null ? undefined : i.snapshot;
      if (!i || !r) {
        return;
      }
      let n = r.revision_container_id;
      if (!n) {
        n = e.create({
          type: "revision_container",
          revision_ids: [],
          parent_id: i.id
        });
        e.insert(i.id, ["revision_container_id"], n);
      }
      let o = this.blockManager.getRecord(n).snapshot;
      if (!o) {
        e.create({
          type: "revision_container",
          revision_ids: [],
          parent_id: i.id
        }, {
          recordId: n
        });
      }
      if (!Array.isArray(o.revision_ids)) {
        e.replace(n, ["revision_ids"], []);
      }
      return n;
    }
    hasRootRevisionId(e, i) {
      let n = this.handleEnsureRevisionContainerId(e);
      if (!n) {
        return false;
      }
      let o = this.blockManager.getRecord(n)?.snapshot;
      return !!o && !!Array.isArray(o.revision_ids) && o.revision_ids.includes(i);
    }
    handleInsertRootRevisionId(e, i) {
      let r = this.handleEnsureRevisionContainerId(e);
      if (r) {
        e.insert(r, ["revision_ids", 0], i);
      }
    }
    handleRemoveRootRevisionIds(e, i) {
      let n = this.handleEnsureRevisionContainerId(e);
      if (!n) {
        return;
      }
      let o = this.blockManager.getRecord(n)?.snapshot;
      if (o && Array.isArray(o.revision_ids)) {
        for (let r of i) {
          let i = o.revision_ids.indexOf(r);
          if (i >= 0) {
            e.remove(n, ["revision_ids", i]);
          }
        }
      }
    }
    handleInsertBlockRevisionsAttribute(e, i) {
      let {
        blockId: r,
        revision: n
      } = i;
      let o = this.blockManager.getRecordByBlockId(r);
      let l = o == null ? undefined : o.snapshot;
      if (!o || !l) {
        return;
      }
      if (!Array.isArray(l.revisions)) {
        e.replace(o.id, ["revisions"], []);
      }
      let s = l.revisions;
      if (!(s == null ? undefined : s.some(e => (e == null ? undefined : e.revisionId) === n.revisionId))) {
        e.insert(o.id, ["revisions", 0], n);
      }
    }
    handleRemoveBlockRevisionsAttribute(e, i) {
      let {
        blockId: r,
        revisionIds: n
      } = i;
      let o = this.blockManager.getRecordByBlockId(r);
      let l = o == null ? undefined : o.snapshot;
      if (!o || !l) {
        return;
      }
      let s = l.revisions;
      if (Array.isArray(s)) {
        for (let i = s.length - 1; i >= 0; i--) {
          let r = s[i];
          if (collectionIncludesUtil.includes(n, r == null ? undefined : r.revisionId)) {
            e.remove(o.id, ["revisions", i]);
          }
        }
      }
    }
    handleInsertTextualBlockRevisionAttribute(e, i) {
      let {
        selectedBlocks: r,
        revisionId: n,
        revision: o
      } = i;
      let l = "";
      r.forEach((i, s) => {
        let a = this.blockManager.getRecordByBlockId(i.id);
        let c = this.blockManager.getBlockModelByBlockIdNotCheck(i.id);
        if (a && c) {
          if (editorTextBlockUtilities.isTextBlock(c)) {
            let {
              zoneState: d
            } = c;
            let u = d.getModelText().length - 1;
            let h = i.selection || {
              start: 0,
              end: u
            };
            let [f, g] = [Math.max(0, h.start), Math.min(u, h.end)];
            let p = editorRangeUtilities.createRangeWithZone(d, [f, g]);
            let m = c.rangeToPosition(p);
            if (!m) {
              return;
            }
            let v = new contentStructureDelta.ContentDelta({
              zoneId: d.getZoneId()
            }).retain(m.start).retain(m.len, {
              [`${editorRevisionConstants.revisionIdString}${n}`]: JSON.stringify(o)
            });
            flowSyncDeltaOperations.editWithLineManager(e, a, d.applyDeltaWithClone(v).toAttributeText());
            l += editorDeltaTextUtils.getDeltaText(c.record.snapshot, this.blockManager.dataService, [f, g]);
            if (h.end >= u && s !== r.length - 1) {
              l += " ";
            }
          } else {
            l += docxCommentUtils.getCommentText(c, this.blockManager);
            if (s !== r.length - 1) {
              l += " ";
            }
          }
        }
      });
      return {
        quote: l
      };
    }
    handleCreateDocRevision(e) {
      let {
        selectedBlocks: i,
        revisionId: r,
        revision: n
      } = e;
      if (!(i == null ? undefined : i.length)) {
        return;
      }
      let o = r || docTokenHelperUtils.generateDocToken();
      this.blockManager.applyTransaction(`create_revision_${o}`, e => {
        let r = this.handleEnsureRevisionContainerId(e);
        if (!r) {
          return;
        }
        i.forEach(i => {
          if (i.type !== docxBlockSelectionHandler_1.blockTypes.TEXT) {
            this.handleInsertBlockRevisionsAttribute(e, {
              blockId: i.id,
              revision: {
                ...n,
                revisionId: o
              }
            });
          }
        });
        let {
          quote: l
        } = this.handleInsertTextualBlockRevisionAttribute(e, {
          selectedBlocks: i,
          revisionId: o,
          revision: n
        });
        if (!this.hasRootRevisionId(e, o)) {
          this.handleInsertRootRevisionId(e, o);
          e.create(() => ({
            parent_id: r,
            type: docBlockTypeConstants.blockTypeConstants.REVISION,
            created_by: senderRoleEnum.SenderRole.ai,
            ref_text: l.slice(0, 100) || " ",
            text: contentCommentUtilsExport.serializeTextDelta(`\u{3010}${n.type}\u{4FEE}\u{8BA2}\u{3011} ${l}`),
            task_id: "111",
            ai_extra: {
              is_ai_gen: true,
              rewrite_command: aiWritingConstants.writingTaskTypes.WRITE_ARTICLE
            },
            create_time: n.createTime
          }), {
            recordId: o
          });
        }
      }, {
        mergeMode: collaborativeEditingFlowSyncModule.CollabMode.SPLIT
      });
      return o;
    }
    getRevisionByRecordId(e) {
      let r = e && this.blockManager.getRecord(e)?.snapshot;
      if (r) {
        return {
          id: e,
          parent_id: isStringTypeCheck.isString(r.parent_id) ? r.parent_id : "",
          type: docBlockTypeConstants.blockTypeConstants.REVISION,
          text: isObjectOrFunction_1_1.isObjectOrFunction(r.text) ? r.text : undefined,
          ref_text: isStringTypeCheck.isString(r.ref_text) ? r.ref_text : "",
          task_id: isStringTypeCheck.isString(r.task_id) ? r.task_id : undefined,
          ai_extra: r.ai_extra,
          created_by: isNumberUtil.isNumber(r.created_by) ? r.created_by : senderRoleEnum.SenderRole.unknown,
          create_time: isNumberUtil.isNumber(r.create_time) ? r.create_time : 0,
          auto_accept: !!isBooleanUtil.isBoolean(r.auto_accept) && r.auto_accept
        };
      } else {
        return null;
      }
    }
    getRevisionIds() {
      var i;
      var n;
      if (!this.blockManager.structService.root) {
        return [];
      }
      let o = (i = this.blockManager.getRecordByBlockId(this.blockManager.rootBlockId)) === null || i === undefined ? undefined : i.snapshot?.revision_container_id;
      if (!o) {
        return [];
      }
      let l = (n = this.blockManager.getRecord(o)) === null || n === undefined ? undefined : n.snapshot?.revision_ids;
      if (!(l == null ? undefined : l.length)) {
        return [];
      }
      let s = [];
      this.blockManager.structService.traverse(e => {
        s.push(...docxCommentRevisionPositionManager.extractRevisionIdsFromSnapshot(e == null ? undefined : e.snapshot));
      });
      return l.filter(e => s.includes(e));
    }
    handleGetDocRevisionList() {
      return this.getRevisionIds().map(e => this.getRevisionByRecordId(e)).filter(Boolean);
    }
    getDocRevisions() {
      return this.handleGetDocRevisionList();
    }
    get activeCommentId() {
      return docxFlowCommentStore.useDocxCommentStore.getState().highlightComment?.id;
    }
    handleBlockRevisionsAction(e, i) {
      let {
        blockId: l,
        revisionIds: s,
        action: a
      } = i;
      let c = this.blockManager.getRecordByBlockId(l);
      let d = docxRevisionActionUtils.filterRevisionsByIds({
        revisions: c == null ? undefined : c.snapshot?.revisions,
        revisionIds: s
      });
      if (!(d == null ? undefined : d.length)) {
        return;
      }
      let u = docxRevisionActionUtils.getDeleteActionType({
        action: a,
        revisions: d
      });
      let h = docxRevisionActionUtils.hasRevisionActions({
        revisions: d
      });
      if (h) {
        this.handleResolveBlockAttributeUpdate(e, {
          blockId: l,
          revisionIds: s,
          action: a
        });
      }
      if (u === "delete_content") {
        if ((c == null ? undefined : c.snapshot?.type) && docBlockTypeConstants.listBlockTypes.includes(c.snapshot.type) && c.snapshot.children && !isEmptyUtil.isEmpty(c.snapshot.children)) {
          this.handleTextualBlockRevisionsAction(e, {
            blockId: l,
            revisionIds: s,
            action: a
          });
        } else if ((c == null ? undefined : c.snapshot?.type) && !eE.includes(c.snapshot.type) && !h) {
          documentBlockOperations.removeBlockItems(e, [l], this.blockManager);
        } else {
          this.handleRemoveBlockRevisionsAttribute(e, {
            blockId: l,
            revisionIds: s
          });
        }
      } else if (u === "delete_attribute") {
        this.handleRemoveBlockRevisionsAttribute(e, {
          blockId: l,
          revisionIds: s
        });
      }
    }
    handleResolveBlockAttributeUpdate(e, i) {
      let {
        blockId: r,
        revisionIds: n,
        action: o
      } = i;
      let l = this.blockManager.getRecordByBlockId(r);
      let s = l == null ? undefined : l.snapshot;
      if (!l || !s) {
        return;
      }
      let a = s.revisions;
      if (Array.isArray(a)) {
        for (let i = a.length - 1; i >= 0; i--) {
          let r = a[i];
          if (!n.includes(r.revisionId)) {
            continue;
          }
          let {
            details: d
          } = r;
          ((d == null ? undefined : d.actions) ?? []).forEach(i => {
            if (!!docxRevisionActionUtils.validateRevisionPath({
              snapshot: s,
              revisionAction: i
            }) && !docxRevisionActionUtils.canApplyRejectRevision({
              action: o,
              revisionAction: i
            }) && docxRevisionActionUtils.getApplyRejectActionType({
              action: o,
              revisionAction: i
            })) {
              let {
                selector: r,
                action: n
              } = i;
              let o = D({
                selector: r,
                record: l,
                id: n.listDelete || n.listInsert
              });
              if (o) {
                o.forEach(i => {
                  if (i) {
                    e.remove(l.id, i);
                  }
                });
              }
            }
          });
        }
      }
    }
    handleTextualBlockRevisionsAction(e, i) {
      let {
        blockId: r,
        revisionIds: n,
        action: o
      } = i;
      let l = this.blockManager.getRecordByBlockId(r);
      let s = this.blockManager.getBlockModelByBlockIdNotCheck(r);
      if (!l || !s || !editorTextBlockUtilities.isTextBlock(s) || !editorTextBlockUtilities.hasTextWithApoolSimple(l.snapshot)) {
        return;
      }
      let a = n.map(e => `${editorRevisionConstants.revisionIdString}${e}`);
      let c = deltaSetChangesetConverter_1.attributedTextToDeltaSet(l.snapshot.text.initialAttributedTexts, l.snapshot.text.apool).get(zeroConstantModule_1.versionValue);
      let d = new contentStructureDelta.ContentDelta({
        zoneId: zeroConstantModule_1.versionValue
      });
      let u = l.snapshot.children && !isEmptyUtil.isEmpty(l.snapshot.children);
      let h = false;
      let f = true;
      if (isEmptyUtil.isEmpty(c.ops) && u) {
        f = false;
      }
      c.forEach(e => {
        if (!deltaSetCore.isInsertString(e)) {
          return;
        }
        let r = e.attributes ?? {};
        let n = getOwnKeys.getOwnKeys(r).filter(e => a.includes(e)).map(e => docxUtilityHelpers.parseJsonSafe(r[e], undefined)).filter(Boolean);
        let l = docxRevisionActionUtils.getDeleteActionType({
          action: o,
          revisions: n
        });
        if (l) {
          h = true;
        } else if (!docOperationUtils.isFixEnterOp(e)) {
          f = false;
        }
        if (u) {
          f = false;
        }
        if (l !== "delete_content") {
          if (l === "delete_attribute") {
            d.insert(e.insert, throttledOmitPathStringify.omitPathStringify(e.attributes, a));
          } else {
            d.insert(e.insert, e.attributes);
          }
        }
      });
      if (h) {
        let i = deltaSetChangesetConverter_1.extractAttributedTexts(new deltaSetCore.DeltaSet({
          [zeroConstantModule_1.versionValue]: d
        }), {
          filterInitialAttributedText: true
        });
        flowSyncDeltaOperations.editWithLineManager(e, l, i);
      }
      if (f) {
        this.handleBlockRevisionsAction(e, {
          blockId: r,
          revisionIds: n,
          action: o
        });
      } else {
        this.handleRemoveBlockRevisionsAttribute(e, {
          blockId: r,
          revisionIds: n
        });
      }
    }
    handleRevisionsAction(e) {
      let {
        revisionIds: r,
        action: n,
        type: o,
        mergeMode: l = collaborativeEditingFlowSyncModule.CollabMode.SPLIT,
        undoable: s = true,
        isAutoAccept: a = false
      } = e;
      if (!(r == null ? undefined : r.length) || !["apply", "reject"].includes(n)) {
        return Promise.resolve();
      }
      r.forEach(e => {
        this.eventEmitter.emit(revisionConstants.revisionEvents.BeforeRevisionStatusChange, {
          revisionId: e,
          status: n
        });
      });
      let c = this.blockManager.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      });
      let d = [];
      let u = (c == null ? undefined : c.getSyncVersion()) ?? "";
      return this.blockManager.applyTransaction(`${n === "apply" ? revisionConstants.revisionTxnActions.applyRevisionTransaction : revisionConstants.revisionTxnActions.rejectRevisionTransaction}_${r.join("_")}`, e => {
        this.handleRemoveRootRevisionIds(e, r);
        this.blockManager.traverse(this.blockManager.rootBlockId, i => {
          let o = this.blockManager.getRecordByBlockId(i);
          return !o || (editorTextBlockUtilities.hasTextWithApoolSimple(o.snapshot) ? this.handleTextualBlockRevisionsAction(e, {
            blockId: i,
            revisionIds: r,
            action: n
          }) : this.handleBlockRevisionsAction(e, {
            blockId: i,
            revisionIds: r,
            action: n
          }), true);
        });
        d = e.recordOps.filter(e => e.record.snapshot.type !== "revision_container").map(e => e.record.id);
      }, {
        mergeMode: l,
        undoable: s,
        afterTransactionAccepted: () => {
          var e;
          if (a) {
            return;
          }
          let i = () => {
            var e;
            if (c != null && (e = c.sync) !== null && e !== undefined) {
              e.off(collaborativeEditingFlowSyncModule.GM.VersionChange, i);
            }
            let s = (c == null ? undefined : c.getSyncVersion()) ?? "";
            let a = r.map(e => {
              var r;
              if ((r = this.blockManager.getRecord(e)) === null || r === undefined) {
                return undefined;
              } else {
                return r.snapshot?.task_id;
              }
            }).filter(Boolean);
            docxEventCollector.baseEventLogger(o === "single" ? "ai_modify_suggestion_card_button_click_version" : "ai_modify_suggestion_all_click_version", {
              page_token: this.blockManager.rootRecordId,
              message_id: a.join(","),
              original_document_version: u,
              modified_document_version: s,
              edit_blocks: d,
              button_name: (n === "apply" ? "accept" : "ignore") + (o === "single" ? "" : "_all"),
              tenant_id: "0",
              revision_ids: r.join(",")
            }, {
              isOriginEventName: true
            });
          };
          if (c != null && (e = c.sync) !== null && e !== undefined) {
            e.on(collaborativeEditingFlowSyncModule.GM.VersionChange, i);
          }
        }
      });
    }
    getRevisionsByRecordId(e, i = {}) {
      let r = new Set(docxCommentRevisionPositionManager.extractRevisionIdsFromSnapshot(this.blockManager.getRecord(e).snapshot));
      i.filterInvalid;
      return r;
    }
    getRecordsByRevisionId(e) {
      let i = new Set();
      this.blockManager.structService.traverse(r => {
        if (docxCommentRevisionPositionManager.extractRevisionIdsFromSnapshot(r == null ? undefined : r.snapshot).includes(e)) {
          i.add(r.recordId);
        }
        return true;
      });
      return i;
    }
    getBlockIdsByRevisionId(e) {
      let i = Array.from(this.getRecordsByRevisionId(e) || []);
      if (i.length === 0) {
        return [];
      } else {
        return i.reduce((e, i) => e.concat(this.blockManager.getBlockIdsByRecordId(i)), []);
      }
    }
    getBlockModelsByRevisionId(e) {
      return this.getBlockIdsByRevisionId(e).map(e => this.blockManager.getBlockModelByBlockId(e));
    }
    getRevisionByRevisionId(e) {
      let r = this.blockManager.getRecord(e)?.snapshot;
      if (r) {
        return {
          ...r,
          id: e
        };
      } else {
        return null;
      }
    }
    async activateRevision(e, i, r) {
      var n;
      var o;
      let s = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
      emptyExportFunction.emptyFunction(i);
      let a = docxFlowCommentStore.useDocxCommentStore.getState().highlightComment ?? null;
      let c = await ((o = this.flowDocConfig) === null || o === undefined ? undefined : (n = o.getIsDirectAcceptRevision) === null || n === undefined ? undefined : n.call(o));
      if (this.handleGetDocRevisionList().find(i => i.id === e) && !c) {
        if (s) {
          docxFlowCommentStore.toggleCommentPanel(true);
        }
        docxFlowCommentStore.setHighlightComment({
          id: e,
          type: eC.CommonRevision
        });
        let i = {
          prevActiveCommentId: a == null ? undefined : a.id,
          activeCommentId: e,
          type: eC.CommonRevision,
          prevType: a == null ? undefined : a.type,
          from: r
        };
        let n = await waitForSyncedCommentServiceReady.waitForSyncedCommentServiceReady(this.blockManager);
        n.trigger(commentActionTypes.CommentActionTypes.ACTIVATE_COMMENT, i);
        n.trigger(commentActionTypes.CommentActionTypes.ACTIVE_COMMENT_CHANGE_BEFORE_SCROLL, i);
        n.trigger(commentActionTypes.CommentActionTypes.ACTIVE_COMMENT_CHANGE_BEFORE_SCROLL, i);
      }
    }
    getRevisionIsFinished(e) {
      return !this.blockManager.getRecord(e)?.snapshot;
    }
    on(e, i) {
      this.eventEmitter.on(e, i);
    }
    off(e, i) {
      this.eventEmitter.off(e, i);
    }
    handleHoverRevisionChange(e) {
      let o = docxFlowCommentStore.useDocxCommentStore.getState().hoverCommentId ?? null;
      let l = docxFlowCommentStore.useDocxCommentStore.getState().highlightComment?.id ?? null;
      docxFlowCommentStore.setHoverCommentId(e);
      let s = {
        hoverCommentId: e ?? null,
        prevHoverCommentId: o,
        activeCommentId: l,
        type: eC.CommonRevision
      };
      this.eventEmitter.emit(commentEventConstants.CommentEvents.HOVER_COMMENT_CHANGE, s);
    }
    constructor() {
      var e = this;
      eb(this, "blockManager", l, this);
      eb(this, "fold", s, this);
      eb(this, "selectionAPI", a, this);
      eb(this, "config", c, this);
      eb(this, "rect", d, this);
      eb(this, "_eventEmitter", u, this);
      eb(this, "clientVar", h, this);
      ey(this, "eventEmitter", undefined);
      ey(this, "subs", []);
      ey(this, "flowCommentPosition", null);
      ey(this, "handleEditorReady", () => {
        ek("editor-ready");
        this.subs.push(this.blockManager.editorAPI.viewService.didMount$.subscribe(this.handleUpdateRevisionList));
        this.subs.push(this.blockManager.editorAPI.dataService.change$.subscribe(e => {
          this.handleUpdateRevisionList();
          this.handleContentChange(e);
        }));
      });
      ey(this, "handleUpdateRevisionList", () => {
        let e = docxFlowCommentStore.useDocxCommentStore.getState().revisionList.map(e => e.id);
        let i = this.handleGetDocRevisionList();
        let r = i.map(e => e.id);
        if (!this.isPreview || this.isReview) {
          docxFlowCommentStore.setRevisionList(i);
        }
        if (!deepEqualUtil_1.deepEqual(e, r)) {
          this.eventEmitter.emit(revisionConstants.revisionEvents.UpdateRevision, {
            prevRevisionIds: e,
            updatedRevisionIds: r
          });
        }
      });
      ey(this, "handleContentChange", e => {
        let {
          recordOps: i,
          options: r
        } = e;
        if (r.from === collaborativeEditingFlowSyncModule.kq.REMOTE) {
          let e = new Set();
          let r = new Set();
          i.forEach(i => {
            let n = this.blockManager.getRecord(i.id);
            for (let r of i.ops) {
              if (n.snapshot.type === docBlockTypeConstants.blockTypeConstants.REVISION_CONTAINER && collaborativeEditingFlowSyncModule.isDeleteOperation(r) && r.p[0] === "revision_ids" && isStringTypeCheck.isString(r.action.ld)) {
                if (this.activeCommentId === r.action.ld) {
                  this.deactivateRevision(this.activeCommentId);
                }
                e.add(r.action.ld);
              }
            }
            if (n.snapshot.type === docBlockTypeConstants.blockTypeConstants.REVISION_CONTAINER) {
              let {
                revision_ids: e
              } = n.snapshot;
              Promise.all((Array.isArray(e) ? e.filter(e => isStringTypeCheck.isString(e) && !!e) : []).map(e => this.clientVar.fetchRecordBatch(e))).then(() => {
                this.handleUpdateRevisionList();
              });
            }
            docxCommentRevisionPositionManager.extractRevisionIdsFromSnapshot(n.snapshot).forEach(e => {
              r.add(e);
            });
          });
          if (e.size > 0) {
            this.eventEmitter.emit(revisionConstants.revisionEvents.DeleteRevision, {
              deletedRevisionIds: Array.from(e)
            });
          }
          if (r.size > 0) {
            this.eventEmitter.emit(revisionConstants.revisionEvents.RecordRevisionUpdate, {
              updatedRevisionIds: Array.from(r)
            });
          }
        }
      });
      ey(this, "getHasRevision", () => this.getRevisionIds().length > 0);
      ey(this, "deactivateRevision", async (e, i) => {
        let r = docxFlowCommentStore.useDocxCommentStore.getState().highlightComment;
        if (e && (r == null ? undefined : r.id) !== e) {
          return;
        }
        docxFlowCommentStore.setHighlightComment();
        let n = {
          prevActiveCommentId: r == null ? undefined : r.id,
          activeCommentId: null,
          type: eC.CommonComment,
          prevType: r == null ? undefined : r.type
        };
        let o = await waitForSyncedCommentServiceReady.waitForSyncedCommentServiceReady(this.blockManager);
        o.trigger(commentActionTypes.CommentActionTypes.ACTIVATE_COMMENT, n);
        o.trigger(commentActionTypes.CommentActionTypes.ACTIVE_COMMENT_CHANGE_BEFORE_SCROLL, n);
        o.trigger(commentActionTypes.CommentActionTypes.ACTIVE_COMMENT_CHANGE_BEFORE_SCROLL, n);
      });
      ey(this, "getCommentRect", function () {
        var i;
        var n = arguments.length;
        var o = Array(n);
        var l = 0;
        for (; l < n; l++) {
          o[l] = arguments[l];
        }
        return ((i = e.flowCommentPosition) === null || i === undefined ? undefined : i.getCommentRect(...o)) ?? null;
      });
      ey(this, "getPositionByCommentId", function () {
        var i;
        var n = arguments.length;
        var o = Array(n);
        var l = 0;
        for (; l < n; l++) {
          o[l] = arguments[l];
        }
        return ((i = e.flowCommentPosition) === null || i === undefined ? undefined : i.getPositionByCommentId(...o)) ?? null;
      });
      ey(this, "getDocCommentsPosition", function () {
        var i;
        var n = arguments.length;
        var o = Array(n);
        var l = 0;
        for (; l < n; l++) {
          o[l] = arguments[l];
        }
        return ((i = e.flowCommentPosition) === null || i === undefined ? undefined : i.getDocCommentsPosition(...o)) ?? {};
      });
      ey(this, "scrollToBlockByCommentId", function () {
        var i;
        var r = arguments.length;
        var n = Array(r);
        var o = 0;
        for (; o < r; o++) {
          n[o] = arguments[o];
        }
        if ((i = e.flowCommentPosition) !== null && i !== undefined) {
          i.scrollToBlockByCommentId(...n);
        }
      });
      ey(this, "waitToScroll", function () {
        var i;
        var r = arguments.length;
        var n = Array(r);
        var o = 0;
        for (; o < r; o++) {
          n[o] = arguments[o];
        }
        if ((i = e.flowCommentPosition) === null || i === undefined) {
          return undefined;
        } else {
          return i.waitToScroll(...n);
        }
      });
    }
  }).prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), s = eS(o.prototype, "fold", [foldProviderAccessor.foldProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), a = eS(o.prototype, "selectionAPI", [compatBrowserSelectionService_1.selectionServiceKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), c = eS(o.prototype, "config", [docxEditorCore.CONFIG_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), d = eS(o.prototype, "rect", [blockRectServiceId.blockRectServiceId], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), u = eS(o.prototype, "_eventEmitter", [eventEmitterProviderNameExport.eventEmitterProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), h = eS(o.prototype, "clientVar", [clientVarProviderAccess.getClientProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), o)) || o;
  function eR() {
    docxEditorCore.registerProviders([{
      provide: flowRevisionServiceName.revisionServiceName,
      useClass: e_
    }]);
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(flowRevisionServiceName.revisionServiceName).init();
    });
  }
  require.d(exports, {
    registerFlowCommentService: function () {
      return eR;
    }
  });
}