// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initCommentService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 956967
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
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var k = debugBrowserConfig;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var flowCommentServiceToken = require("flow-comment-service-token") /*id: 397738*/;
  var contentCommentUtilsExport = require("content-comment-utils-export") /*id: 284561*/;
  var contentCommentTypes = require("content-comment-types") /*id: 900376*/;
  var docxFlowCommentStore = require("docx-flow-comment-store") /*id: 822624*/;
  (n = {}).createCommentOrReplyTransaction = "createCommentOrReplyTransaction";
  let P = n;
  let L = (e, i) => `${P.createCommentOrReplyTransaction}_${e}_${i}`;
  var foldProviderAccessor = require("fold-provider-accessor") /*id: 786534*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  var commentEventConstants = require("comment-event-constants") /*id: 616817*/;
  var docxCommentSnapshotPatcher = require("docx-comment-snapshot-patcher") /*id: 449931*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var preAllowEditControllerName = require("pre-allow-edit-controller-name") /*id: 957001*/;
  var eventEmitterProviderNameExport = require("event-emitter-provider-name-export") /*id: 889973*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var commentEventsProviderNameReexport = require("comment-events-provider-name-reexport") /*id: 429241*/;
  var blockRectServiceId = require("block-rect-service-id") /*id: 768934*/;
  var waitForSyncedCommentServiceReady = require("wait-for-synced-comment-service-ready") /*id: 592697*/;
  var commentActionTypes = require("comment-action-types") /*id: 20572*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var docTempTransactionManager = require("doc-temp-transaction-manager") /*id: 633045*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var blockSelectionUtils = require("block-selection-utils") /*id: 166197*/;
  var docxCommentRevisionPositionManager = require("docx-comment-revision-position-manager") /*id: 295644*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var docUserServiceToken = require("doc-user-service-token") /*id: 765582*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  function es(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function ea(e, i, r) {
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
  function ec(e, i, r, n, o) {
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
  let ed = k("flow-comment:flow-comment-service");
  let eu = [docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.AI];
  (o = eh || {}).CommonComment = "comment";
  o.CommonRevision = "revision";
  var eh = o;
  let ef = dependencyInjectionContainer.Provide(flowCommentServiceToken.commentServiceToken)((s = ec((l = class {
    get commentEventsService() {
      return this.blockManager.editorAPI.getService(commentEventsProviderNameReexport.commentEventsToken);
    }
    get lazyRecordStatus() {
      return this.blockManager.editorAPI.getService(lazyRecordStatusToken.lazyRecordStatus, {
        optional: true
      });
    }
    get isHistory() {
      return !!this.blockManager.editorAPI.config.get("isHistory");
    }
    get editorContext() {
      return this.blockManager.editorAPI.getService(compatibleEditorContext_1.compatibleContext, {
        dynamic: true,
        optional: true
      });
    }
    get enableComment() {
      return flowPermissionSettingSelectors.flowSelectorsHub.flowSetting.selectEnableComment(reduxStoreInitializer.reduxStore.getState());
    }
    init() {
      ed("init");
      docxFlowCommentStore.initCommentStore();
      this.eventEmitter = new docxEditorEventConstantsAndManager.EventEmitter();
      this.snapshotPatcher = new docxCommentSnapshotPatcher.CommentSnapshotPatcher({
        blockManager: this.blockManager,
        pageEventEmitter: this._eventEmitter,
        getCommentsByRecordId: e => this.getCommentsByRecordId(e)
      });
      this.snapshotPatcher.init();
      this.flowCommentPosition = new docxCommentRevisionPositionManager.CommentRevisionPositionManager(true, this.blockManager, this.fold, this.rect, async () => {
        return (await this.editorContext)?.viewport;
      }, e => {
        let i = this.getCommentByCommentId(e);
        if (i) {
          return docxCommentUtils.getCommentCreateTime(i);
        } else {
          return undefined;
        }
      });
      if (!this.isHistory) {
        if (this.blockManager.editorAPI.isReady()) {
          this.handleEditorReady();
        } else {
          this.subs.push(this.blockManager.editorAPI.lifecycle.editorReady$.subscribe(this.handleEditorReady));
        }
      }
      this.subs.push(reduxStoreInitializer.reduxStore.subscribe(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsCommentable, e => {
        this.blockManager.editorAPI.config.set("commentable", e);
      }));
    }
    destroy() {
      ed("destroy");
      this.subs.forEach(e => {
        if (typeof e == "function") {
          e();
        } else {
          e.unsubscribe();
        }
      });
      this.subs = [];
      this.snapshotPatcher.destroy();
    }
    handleEnsureSideCommentIds(e) {
      let i = this.blockManager.getRecordByBlockId(this.blockManager.rootBlockId);
      let r = i == null ? undefined : i.snapshot;
      if (!i || !r) {
        return;
      }
      let n = r.comment_container_id;
      if (!n) {
        n = e.create({
          type: docBlockTypeConstants.blockTypeConstants.COMMENT_CONTAINER,
          side_comment_ids: [],
          parent_id: i.id
        });
        e.insert(i.id, ["comment_container_id"], n);
      }
      let o = this.blockManager.getRecord(n).snapshot;
      if (!o) {
        e.create({
          type: docBlockTypeConstants.blockTypeConstants.COMMENT_CONTAINER,
          side_comment_ids: []
        }, {
          recordId: n
        });
      }
      if (!Array.isArray(o.side_comment_ids)) {
        e.replace(n, ["side_comment_ids"], []);
      }
      return n;
    }
    handleInsertSideCommentId(e, i) {
      let r = this.handleEnsureSideCommentIds(e);
      if (r) {
        e.insert(r, ["side_comment_ids", 0], i);
      }
    }
    handleRemoveSideCommentId(e, i) {
      let n = this.handleEnsureSideCommentIds(e);
      if (!n) {
        return;
      }
      let o = this.blockManager.getRecord(n)?.snapshot;
      if (o && Array.isArray(o.side_comment_ids) && o.side_comment_ids.includes(i)) {
        e.remove(n, ["side_comment_ids", o.side_comment_ids.indexOf(i)]);
      }
    }
    handleInsertBlockCommentId(e, i) {
      let {
        blockId: r,
        commentId: n
      } = i;
      let o = this.blockManager.getRecordByBlockId(r);
      let l = o == null ? undefined : o.snapshot;
      if (o && l) {
        if (!Array.isArray(l.comments)) {
          e.replace(o.id, ["comments"], []);
        }
        if (!collectionIncludesUtil.includes(l.comments, n)) {
          e.insert(o.id, ["comments", 0], n);
        }
      }
    }
    handleRemoveBlockCommentId(e, i) {
      let {
        blockId: r,
        commentId: n
      } = i;
      let o = this.blockManager.getRecordByBlockId(r);
      let l = o == null ? undefined : o.snapshot;
      if (o && l && Array.isArray(l.comments) && l.comments.includes(n)) {
        e.remove(o.id, ["comments", l.comments.indexOf(n)]);
      }
    }
    handleInsertTextBlockCommentAttribute(e, i) {
      let {
        selectedBlocks: r,
        commentId: n
      } = i;
      let o = "";
      r.forEach((i, l) => {
        let s = this.blockManager.getRecordByBlockId(i.id);
        let a = this.blockManager.getBlockModelByBlockIdNotCheck(i.id);
        if (s && a) {
          if (editorTextBlockUtilities.isTextBlock(a)) {
            let {
              zoneState: c
            } = a;
            let d = c.getModelText().length - 1;
            let u = i.selection || {
              start: 0,
              end: d
            };
            let [h, f] = [Math.max(0, u.start), Math.min(d, u.end)];
            let g = editorRangeUtilities.createRangeWithZone(c, [h, f]);
            let p = a.rangeToPosition(g);
            if (!p) {
              return;
            }
            let m = new contentStructureDelta.ContentDelta({
              zoneId: c.getZoneId()
            }).retain(p.start).retain(p.len, {
              [`flow-comment-id-${n}`]: "true"
            });
            flowSyncDeltaOperations.editWithLineManager(e, s, c.applyDeltaWithClone(m).toAttributeText());
            o += editorDeltaTextUtils.getDeltaText(a.record.snapshot, this.blockManager.dataService, [h, f]);
            if (u.end >= d && l !== r.length - 1) {
              o += " ";
            }
          } else {
            o += docxCommentUtils.getCommentText(a, this.blockManager);
            if (l !== r.length - 1) {
              o += " ";
            }
          }
        }
      });
      return {
        quote: o
      };
    }
    handleRemoveTextBlockCommentAttribute(e, i) {
      let {
        blockId: r,
        commentId: n
      } = i;
      let o = this.blockManager.getRecordByBlockId(r);
      let l = this.blockManager.getBlockModelByBlockIdNotCheck(r);
      if (!o || !l || !editorTextBlockUtilities.isTextBlock(l)) {
        return;
      }
      let {
        zoneState: s
      } = l;
      let a = new contentStructureDelta.ContentDelta({
        zoneId: s.getZoneId()
      }).retain(s.totalWidth(), {
        [`flow-comment-id-${n}`]: ""
      });
      flowSyncDeltaOperations.editWithLineManager(e, o, s.applyDeltaWithClone(a).toAttributeText());
    }
    canHaveComments(e) {
      if (e.type === docxBlockSelectionHandler_1.blockTypes.TEXT && e.selection?.start === e.selection?.end) {
        return false;
      }
      let n = this.blockManager.editorAPI.modelService.getBlockModelByBlockId(e.id);
      return !!n && (!editorTextBlockUtilities.isTextBlock(n) || !n.isEmpty) && !eu.includes(n.type);
    }
    expandBlocksSelection(e) {
      let i = e => {
        let {
          blockList: r,
          isMultiSel: n
        } = blockSelectionUtils.getSelectableBlocks(this.fold, e, this.blockManager);
        return blockSelectionUtils.getBlockModelsWithChildren({
          fold: this.fold,
          blockList: r,
          shouldIgnoreFold: n,
          blockManager: this.blockManager,
          forceFindBlockGroups: [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM],
          recursive: (e.length !== 1 || e[0].type !== docxBlockSelectionHandler_1.blockTypes.BLOCK || ![docBlockTypeConstants.blockTypeConstants.TASK, docBlockTypeConstants.blockTypeConstants.AGENDA, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM].includes(this.blockManager.getBlockModelByBlockIdNotCheck(e[0].id)?.type)) && undefined
        }).map(e => ({
          id: e.id,
          type: docxBlockSelectionHandler_1.blockTypes.BLOCK
        }));
      };
      let r = [];
      let n = [];
      for (let o of e) {
        if (o.type === docxBlockSelectionHandler_1.blockTypes.BLOCK) {
          n.push(o);
          continue;
        }
        if (n.length) {
          r.push(...i(n));
          n.length = 0;
        }
        r.push(o);
      }
      if (n.length) {
        r.push(...i(n));
      }
      let o = new Set();
      return r.filter(e => !o.has(e.id) && (o.add(e.id), true));
    }
    canEditByComment(e) {
      let i;
      let r = this.blockManager.editorAPI.getService(preAllowEditControllerName.preAllowEditProvider, {
        optional: true
      });
      if (r) {
        return [e.every(e => {
          let n = this.blockManager.editorAPI.modelService.getBlockModelByBlockId(e.id);
          if (!n) {
            return false;
          }
          let o = r.canBlockEditAndTryApply(n.record, n.type, {
            type: "UPDATE_ATTRIBUTE",
            changedKey: "comments",
            newValue: "unknown"
          });
          if (!o) {
            i = n.record;
          }
          return o;
        }), i];
      } else {
        return [true, undefined];
      }
    }
    handleCreateDocComment(e) {
      let {
        type: i,
        selectedBlocks: r
      } = e;
      let n = this.getBlocksToCommentAt(r);
      if ((n == null ? undefined : n.length) && i === contentCommentTypes.CommentType.ContentComment) {
        let e = docTokenHelperUtils.generateDocToken();
        this.blockManager.applyTransaction(L(e, 0), i => {
          let r = this.handleEnsureSideCommentIds(i);
          if (!r) {
            return;
          }
          this.handleInsertSideCommentId(i, e);
          n.forEach(r => {
            this.handleInsertBlockCommentId(i, {
              blockId: r.id,
              commentId: e
            });
          });
          let {
            quote: o
          } = this.handleInsertTextBlockCommentAttribute(i, {
            selectedBlocks: n,
            commentId: e
          });
          i.create(() => ({
            parent_id: r,
            type: docBlockTypeConstants.blockTypeConstants.COMMENT,
            status: contentCommentTypes.CommentStatus.normal,
            reply_list: [],
            ref_text: o.slice(0, 100) || " "
          }), {
            recordId: e
          });
          this.commentIdInTransaction = e;
        }, {
          from: collaborativeEditingFlowSyncModule.kq.TEMPORARY,
          mergeMode: collaborativeEditingFlowSyncModule.CollabMode.SPLIT,
          undoable: false,
          onFinish: async () => {
            if (this.commentIdInTransaction) {
              await this.activateComment(this.commentIdInTransaction);
              this.commentEventsService.triggers.addedComment({
                commentId: this.commentIdInTransaction,
                source: commentEventConstants.DataSourceType.LOCAL
              });
            }
          }
        });
        return;
      }
    }
    handleUpdateDocCommentStatus(e) {
      let {
        type: i,
        commentId: r,
        status: n
      } = e;
      if (i === contentCommentTypes.CommentType.ContentComment) {
        this.blockManager.applyTransaction("reopenFlowContentCommentReply", e => {
          if (this.blockManager.getRecord(r)?.snapshot) {
            e.replace(r, ["status"], n);
          }
        }, {
          mergeMode: collaborativeEditingFlowSyncModule.CollabMode.SPLIT,
          undoable: false
        });
        if (n === contentCommentTypes.CommentStatus.solved) {
          this.commentEventsService.triggers.resolveComment({
            commentId: r,
            source: commentEventConstants.DataSourceType.LOCAL
          });
        } else if (n === contentCommentTypes.CommentStatus.normal) {
          this.commentEventsService.triggers.reopenComment({
            commentId: r,
            source: commentEventConstants.DataSourceType.LOCAL
          });
        }
      }
    }
    getCommentByRecordId(e) {
      let r = e && this.blockManager.getRecord(e)?.snapshot;
      if (r) {
        return {
          id: e,
          parent_id: isStringTypeCheck.isString(r.parent_id) ? r.parent_id : "",
          type: docBlockTypeConstants.blockTypeConstants.COMMENT,
          status: isNumberUtil.isNumber(r.status) ? r.status : contentCommentTypes.CommentStatus.normal,
          reply_list: Array.isArray(r.reply_list) ? r.reply_list : [],
          ref_text: isStringTypeCheck.isString(r.ref_text) ? r.ref_text : ""
        };
      } else {
        return null;
      }
    }
    getSideCommentIds() {
      var i;
      var n;
      if (!this.enableComment || !this.blockManager.structService.root) {
        return [];
      }
      let o = (i = this.blockManager.getRecordByBlockId(this.blockManager.rootBlockId)) === null || i === undefined ? undefined : i.snapshot?.comment_container_id;
      if (!o) {
        return [];
      }
      let l = (n = this.blockManager.getRecord(o)) === null || n === undefined ? undefined : n.snapshot?.side_comment_ids;
      if (!(l == null ? undefined : l.length)) {
        return [];
      }
      let s = [];
      this.blockManager.structService.traverse(e => {
        var r;
        let n = (e == null ? undefined : (r = e.record) === null || r === undefined ? undefined : r.snapshot?.comments) || [];
        return !Array.isArray(n) || !n.length || (s.push(...n), true);
      });
      return l.filter(e => s.includes(e));
    }
    handleGetDocCommentList() {
      return this.getSideCommentIds().map(e => this.getCommentByRecordId(e)).filter(Boolean);
    }
    getDocComments(e = false) {
      if (arguments.length > 1 && arguments[1] !== undefined) {
        arguments[1];
      }
      let i = this.handleGetDocCommentList();
      if (e) {
        return i.filter(e => e.status !== contentCommentTypes.CommentStatus.solved);
      } else {
        return i;
      }
    }
    handleCreateDocCommentReply(e) {
      let {
        commentId: i,
        replyId: r,
        index: n,
        content: o
      } = e;
      return this.blockManager.applyTransaction(`${P.createCommentOrReplyTransaction}_${i}_${n}`, e => {
        let s = this.blockManager.getRecord(i)?.snapshot;
        if (!s) {
          return;
        }
        if (!Array.isArray(s.reply_list)) {
          e.replace(i, ["reply_list"], []);
        }
        let a = contentCommentUtilsExport.getUnixTimestamp();
        let c = diContainerInstance.diContainer.get(docUserServiceToken.docUserServiceToken).getUserId() ?? "";
        e.insert(i, ["reply_list", s.reply_list.length], {
          id: r,
          creator_id: c,
          text: o,
          is_modified: false,
          create_time: a,
          modify_time: a
        });
      }, {
        from: collaborativeEditingFlowSyncModule.kq.TEMPORARY,
        mergeMode: collaborativeEditingFlowSyncModule.CollabMode.SPLIT,
        undoable: false,
        onFinish: () => {
          this.handleSubmitCreateDocCommentReply({
            commentId: i,
            index: n
          });
        }
      });
    }
    handleCancelCreateDocCommentReply(e) {
      let {
        commentId: i,
        index: r
      } = e;
      docTempTransactionManager.cancelTempTx(this.blockManager, L(i, r));
      this.commentIdInTransaction &&= undefined;
    }
    handleSubmitCreateDocCommentReply(e) {
      let {
        commentId: i,
        index: r
      } = e;
      docTempTransactionManager.submitTempTx(this.blockManager, L(i, r));
      this.commentIdInTransaction = undefined;
    }
    handleEditDocCommentReply(e) {
      let {
        commentId: i,
        replyId: r,
        content: n
      } = e;
      return this.blockManager.applyTransaction("editFlowContentCommentReply", e => {
        let s = this.blockManager.getRecord(i)?.snapshot;
        if (!s) {
          return;
        }
        let a = s.reply_list || [];
        let c = a.findIndex(e => e.id === r);
        if (c === -1) {
          return;
        }
        let d = !!a[c]?.is_modified;
        e.replace(i, ["reply_list", c, "text"], n);
        if (!d) {
          e.replace(i, ["reply_list", c, "is_modified"], true);
        }
        e.replace(i, ["reply_list", c, "modify_time"], contentCommentUtilsExport.getUnixTimestamp());
      }, {
        mergeMode: collaborativeEditingFlowSyncModule.CollabMode.SPLIT,
        undoable: false
      });
    }
    handleDeleteDocCommentReplyOp(e, i) {
      let {
        type: r,
        commentId: n,
        replyId: o
      } = i;
      if (r === contentCommentTypes.CommentType.ContentComment) {
        let i = this.blockManager.getRecord(n)?.snapshot;
        if (!i) {
          return;
        }
        let r = i.reply_list || [];
        if (o) {
          let i = r.findIndex(e => e.id === o);
          if (i > -1) {
            e.remove(n, ["reply_list", i]);
          }
        } else {
          while (r.length) {
            e.remove(n, ["reply_list", r.length - 1]);
          }
        }
        if (!r.length) {
          this.commentEventsService.triggers.deletedComment({
            commentId: n,
            source: commentEventConstants.DataSourceType.LOCAL
          });
          this.handleRemoveSideCommentId(e, n);
          this.blockManager.traverse(this.blockManager.rootBlockId, i => {
            this.handleRemoveBlockCommentId(e, {
              blockId: i,
              commentId: n
            });
            this.handleRemoveTextBlockCommentAttribute(e, {
              blockId: i,
              commentId: n
            });
            return true;
          });
        }
      }
    }
    handleDeleteDocCommentReply(e) {
      let {
        type: i,
        commentId: r,
        replyId: n
      } = e;
      if (i === contentCommentTypes.CommentType.ContentComment) {
        this.blockManager.applyTransaction("deleteFlowContentCommentReply", e => {
          this.handleDeleteDocCommentReplyOp(e, {
            type: i,
            commentId: r,
            replyId: n
          });
        }, {
          mergeMode: collaborativeEditingFlowSyncModule.CollabMode.SPLIT,
          undoable: false
        });
      }
    }
    get activeCommentId() {
      return docxFlowCommentStore.useDocxCommentStore.getState().highlightComment?.id;
    }
    getCommentsByRecordId(e) {
      var r;
      let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let o = new Set(((r = this.blockManager.getRecord(e)) === null || r === undefined ? undefined : r.snapshot?.comments) || []);
      n.filterInvalid;
      return o;
    }
    getRecordsByCommentId(e) {
      let i = new Set();
      this.blockManager.structService.traverse(r => {
        var o;
        let l = (r == null ? undefined : (o = r.record) === null || o === undefined ? undefined : o.snapshot?.comments) || [];
        return !Array.isArray(l) || !l.length || (l.includes(e) && i.add(r.recordId), true);
      });
      return i;
    }
    getBlockIdsByCommentId(e) {
      let i = Array.from(this.getRecordsByCommentId(e) || []);
      if (i.length === 0) {
        return [];
      } else {
        return i.reduce((e, i) => e.concat(this.blockManager.getBlockIdsByRecordId(i)), []);
      }
    }
    getBlockModelsByCommentId(e) {
      return this.getBlockIdsByCommentId(e).map(e => this.blockManager.getBlockModelByBlockId(e));
    }
    getCommentByCommentId(e) {
      let r = this.blockManager.getRecord(e)?.snapshot;
      if (r) {
        return contentCommentUtilsExport.transformComment({
          ...r,
          id: e
        });
      } else {
        return null;
      }
    }
    async activateComment(e, i, r) {
      let n = docxFlowCommentStore.useDocxCommentStore.getState().highlightComment;
      if (this.handleGetDocCommentList().find(i => i.id === e)) {
        docxFlowCommentStore.toggleCommentPanel(true);
        docxFlowCommentStore.setHighlightComment({
          id: e,
          type: eh.CommonComment
        });
        let i = {
          prevActiveCommentId: n == null ? undefined : n.id,
          activeCommentId: e,
          type: eh.CommonComment,
          prevType: n == null ? undefined : n.type,
          from: r
        };
        let o = await waitForSyncedCommentServiceReady.waitForSyncedCommentServiceReady(this.blockManager);
        o.trigger(commentActionTypes.CommentActionTypes.ACTIVATE_COMMENT, i);
        o.trigger(commentActionTypes.CommentActionTypes.ACTIVE_COMMENT_CHANGE_BEFORE_SCROLL, i);
        o.trigger(commentActionTypes.CommentActionTypes.ACTIVE_COMMENT_CHANGE_BEFORE_SCROLL, i);
      }
    }
    getCommentIsFinished(e) {
      let r = this.blockManager.getRecord(e)?.snapshot;
      return !r || r.status === contentCommentTypes.CommentStatus.solved;
    }
    on(e, i) {
      this.eventEmitter.on(e, i);
    }
    off(e, i) {
      this.eventEmitter.off(e, i);
    }
    handleHoverCommentChange(e) {
      let o = docxFlowCommentStore.useDocxCommentStore.getState().hoverCommentId ?? null;
      let l = docxFlowCommentStore.useDocxCommentStore.getState().highlightComment?.id ?? null;
      docxFlowCommentStore.setHoverCommentId(e);
      let s = {
        hoverCommentId: e ?? null,
        prevHoverCommentId: o,
        activeCommentId: l,
        type: eh.CommonComment
      };
      this.eventEmitter.emit(commentEventConstants.CommentEvents.HOVER_COMMENT_CHANGE, s);
    }
    getCommentable() {
      return this.enableComment && flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsCommentable(reduxStoreInitializer.reduxStore.getState());
    }
    async checkCommentReview(e) {
      var i;
      let {
        commentId: r,
        replyId: n,
        text: o
      } = e;
      let {
        data: l
      } = await otterDocApiServiceDi.getOtterDocService().AGWReviewComment({
        page_token: docTokenManager.getDocToken(),
        comments: [{
          id: r,
          replies: [{
            id: n,
            text: o
          }]
        }]
      });
      return (i = l == null ? undefined : l.passed) !== null && i !== undefined && i;
    }
    constructor() {
      var e = this;
      es(this, "blockManager", s, this);
      es(this, "fold", a, this);
      es(this, "selectionAPI", c, this);
      es(this, "config", d, this);
      es(this, "rect", u, this);
      es(this, "_eventEmitter", h, this);
      ea(this, "eventEmitter", undefined);
      ea(this, "commentIdInTransaction", undefined);
      ea(this, "subs", []);
      ea(this, "snapshotPatcher", undefined);
      ea(this, "docMetInfoMap", new Map());
      ea(this, "flowCommentPosition", null);
      ea(this, "handleEditorReady", () => {
        ed("editor-ready");
        this.subs.push(this.blockManager.editorAPI.viewService.didMount$.subscribe(this.handleUpdateCommentList));
        if (this.lazyRecordStatus) {
          this.subs.push(this.lazyRecordStatus.applyAllDone$.subscribe(this.handleUpdateCommentList));
        }
        this.subs.push(this.blockManager.editorAPI.dataService.change$.subscribe(e => {
          this.handleUpdateCommentList();
          this.handleContentChange(e);
        }));
      });
      ea(this, "triggerCommentReady", onceFunctionFactory.createOnce(() => {
        this.commentEventsService.triggers.commentReady({
          comments: contentCommentUtilsExport.transformComments(this.getDocComments(true))
        });
      }));
      ea(this, "handleUpdateCommentList", () => {
        docxFlowCommentStore.setCommentList(this.handleGetDocCommentList());
      });
      ea(this, "handleContentChange", e => {
        var r;
        let {
          recordOps: o,
          options: l
        } = e;
        let s = (r = this.blockManager.getRecordByBlockId(this.blockManager.rootBlockId)) === null || r === undefined ? undefined : r.snapshot?.comment_container_id;
        if (this.blockManager.getRecord(s ?? "")?.snapshot) {
          let e = this.getSideCommentIds();
          let i = this.handleGetDocCommentList();
          if (!!isEmptyUtil.isEmpty(e) || !isEmptyUtil.isEmpty(e) && !isEmptyUtil.isEmpty(i) && e.length === i.length) {
            this.triggerCommentReady();
          }
        }
        if (l.from === collaborativeEditingFlowSyncModule.kq.REMOTE) {
          o.forEach(e => {
            let i = this.blockManager.getRecord(e.id);
            for (let r of e.ops) {
              if (i.snapshot.type === docBlockTypeConstants.blockTypeConstants.COMMENT_CONTAINER && collaborativeEditingFlowSyncModule.$b(r) && r.p[0] === "side_comment_ids" && isStringTypeCheck.isString(r.action.li)) {
                this.commentEventsService.triggers.addedComment({
                  commentId: r.action.li,
                  source: commentEventConstants.DataSourceType.REMOTE
                });
              } else if (i.snapshot.type === docBlockTypeConstants.blockTypeConstants.COMMENT_CONTAINER && collaborativeEditingFlowSyncModule.isDeleteOperation(r) && r.p[0] === "side_comment_ids" && isStringTypeCheck.isString(r.action.ld)) {
                if (this.activeCommentId === r.action.ld) {
                  this.deactivateComment(this.activeCommentId);
                }
                this.commentEventsService.triggers.deletedComment({
                  commentId: r.action.ld,
                  source: commentEventConstants.DataSourceType.REMOTE
                });
              } else if (i.snapshot.type === docBlockTypeConstants.blockTypeConstants.COMMENT && collaborativeEditingFlowSyncModule.isCreateOperation(r) && r.p[0] === "status" && r.action.oi === contentCommentTypes.CommentStatus.solved) {
                if (this.activeCommentId === e.id) {
                  this.deactivateComment(this.activeCommentId);
                }
                this.commentEventsService.triggers.resolveComment({
                  commentId: e.id,
                  source: commentEventConstants.DataSourceType.REMOTE
                });
              } else if (i.snapshot.type === docBlockTypeConstants.blockTypeConstants.COMMENT && collaborativeEditingFlowSyncModule.isCreateOperation(r) && r.p[0] === "status" && r.action.oi === contentCommentTypes.CommentStatus.normal) {
                this.commentEventsService.triggers.reopenComment({
                  commentId: e.id,
                  source: commentEventConstants.DataSourceType.REMOTE
                });
              }
            }
          });
        }
      });
      ea(this, "getBlocksToCommentAt", e => {
        let i = this.fixSelectedBlocks(e);
        if (i.length <= 0) {
          return;
        }
        let [r] = this.canEditByComment(i);
        if (r) {
          return i;
        }
      });
      ea(this, "fixSelectedBlocks", e => this.expandBlocksSelection(e).filter(e => this.canHaveComments(e)));
      ea(this, "deactivateComment", async (e, i) => {
        let r = docxFlowCommentStore.useDocxCommentStore.getState().highlightComment;
        if (e && (r == null ? undefined : r.id) !== e) {
          return;
        }
        docxFlowCommentStore.setHighlightComment();
        let n = {
          prevActiveCommentId: r == null ? undefined : r.id,
          activeCommentId: null,
          type: eh.CommonComment,
          prevType: r == null ? undefined : r.type
        };
        let o = await waitForSyncedCommentServiceReady.waitForSyncedCommentServiceReady(this.blockManager);
        o.trigger(commentActionTypes.CommentActionTypes.ACTIVATE_COMMENT, n);
        o.trigger(commentActionTypes.CommentActionTypes.ACTIVE_COMMENT_CHANGE_BEFORE_SCROLL, n);
        o.trigger(commentActionTypes.CommentActionTypes.ACTIVE_COMMENT_CHANGE_BEFORE_SCROLL, n);
      });
      ea(this, "getCommentRect", function () {
        var i;
        var n = arguments.length;
        var o = Array(n);
        var l = 0;
        for (; l < n; l++) {
          o[l] = arguments[l];
        }
        return ((i = e.flowCommentPosition) === null || i === undefined ? undefined : i.getCommentRect(...o)) ?? null;
      });
      ea(this, "getPositionByCommentId", function () {
        var i;
        var n = arguments.length;
        var o = Array(n);
        var l = 0;
        for (; l < n; l++) {
          o[l] = arguments[l];
        }
        return ((i = e.flowCommentPosition) === null || i === undefined ? undefined : i.getPositionByCommentId(...o)) ?? null;
      });
      ea(this, "getDocCommentsPosition", function () {
        var i;
        var n = arguments.length;
        var o = Array(n);
        var l = 0;
        for (; l < n; l++) {
          o[l] = arguments[l];
        }
        return ((i = e.flowCommentPosition) === null || i === undefined ? undefined : i.getDocCommentsPosition(...o)) ?? {};
      });
      ea(this, "scrollToBlockByCommentId", function () {
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
      ea(this, "waitToScroll", function () {
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
      ea(this, "addDocMetaInfo", (e, i) => {
        this.docMetInfoMap.set(e, {
          ...i,
          updateTime: Date.now()
        });
      });
      ea(this, "getDocMetaInfo", e => {
        let i = this.docMetInfoMap.get(e) || null;
        if (!i || i.updateTime < Date.now() - 600000) {
          return null;
        } else {
          return i;
        }
      });
    }
  }).prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), a = ec(l.prototype, "fold", [foldProviderAccessor.foldProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), c = ec(l.prototype, "selectionAPI", [compatBrowserSelectionService_1.selectionServiceKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), d = ec(l.prototype, "config", [docxEditorCore.CONFIG_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), u = ec(l.prototype, "rect", [blockRectServiceId.blockRectServiceId], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), h = ec(l.prototype, "_eventEmitter", [eventEmitterProviderNameExport.eventEmitterProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), l)) || l;
  function eg() {
    docxEditorCore.registerProviders([{
      provide: flowCommentServiceToken.commentServiceToken,
      useClass: ef
    }]);
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(flowCommentServiceToken.commentServiceToken).init();
    });
  }
  require.d(exports, {
    initCommentService: function () {
      return eg;
    }
  });
}