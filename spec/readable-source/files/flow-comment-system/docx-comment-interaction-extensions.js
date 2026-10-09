// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerCommentExtensions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 108726
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let l = function (e) {
    let i = reactCoreLibraryReexport.useRef(e);
    i.current = e;
    return i;
  };
  let a = e => function () {
    var i = arguments.length;
    var n = Array(i);
    var o = 0;
    for (; o < i; o++) {
      n[o] = arguments[o];
    }
    return e.current(...n);
  };
  let s = e => {
    let i = l(e);
    return reactCoreLibraryReexport.useMemo(() => a(i), []);
  };
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var docxCommentFeatureFlags = require("docx-comment-feature-flags") /*id: 662786*/;
  var commentEventConstants = require("comment-event-constants") /*id: 616817*/;
  var flowCommentServiceToken = require("flow-comment-service-token") /*id: 397738*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class g extends editorContextFacade.EditorContextFacade {
    get flowCommentService() {
      return this.blockManager.editorAPI.getService(flowCommentServiceToken.commentServiceToken, {
        optional: true
      });
    }
    getWrapper(e) {
      return i => {
        let [n, o] = reactCoreLibraryReexport.useState(new Set());
        let l = reactCoreLibraryReexport.useCallback(e => {
          let {
            commentId: r,
            blockIds: l
          } = e;
          let a = this.blockManager.getBlockViewByBlockIdNotCheck(i.blockId);
          if (!!l.includes(i.blockId) && !!a && !editorTextBlockUtilities.isEditorInstance(a)) {
            n.add(r);
            o(new Set(n));
          }
        }, [n]);
        let a = reactCoreLibraryReexport.useCallback(e => {
          let {
            commentId: r,
            blockIds: l
          } = e;
          if (!l.includes(i.blockId) || !n.has(r)) {
            return;
          }
          let a = this.blockManager.getBlockViewByBlockIdNotCheck(i.blockId);
          if (!!a && !editorTextBlockUtilities.isEditorInstance(a)) {
            n.delete(r);
            o(new Set(n));
          }
        }, [n]);
        let h = reactCoreLibraryReexport.useCallback(e => {
          let {
            tempCommentId: r
          } = e;
          let l = this.blockManager.getBlockViewByBlockIdNotCheck(i.blockId);
          if (!!n.has(r) && !!l && !editorTextBlockUtilities.isEditorInstance(l)) {
            n.delete(r);
            o(new Set(n));
          }
        }, [n]);
        reactCoreLibraryReexport.useEffect(() => {
          this.comment.on(commentEventConstants.CommentEvents.ADD_TEMP_COMMENT, l);
          this.comment.on(commentEventConstants.CommentEvents.COMMENT_TRANSACTION_APPLY, h);
          this.comment.on(commentEventConstants.CommentEvents.CANCEL_ADD_COMMENT, a);
          return () => {
            this.comment.off(commentEventConstants.CommentEvents.ADD_TEMP_COMMENT, l);
            this.comment.off(commentEventConstants.CommentEvents.COMMENT_TRANSACTION_APPLY, h);
            this.comment.off(commentEventConstants.CommentEvents.CANCEL_ADD_COMMENT, a);
          };
        }, [n]);
        let {
          snapshot: v,
          id: g
        } = i.record;
        let p = v.comments || [];
        let [b, k] = reactCoreLibraryReexport.useState(() => {
          var i;
          var n;
          var o;
          var l;
          if (!docxCommentFeatureFlags.isMobileCommentRelationEnabled()) {
            return false;
          }
          let a = this.flowCommentService?.activeCommentId;
          if (!a) {
            return false;
          }
          let s = (i = this.flowCommentService) === null || i === undefined ? undefined : i.getCommentByCommentId(a);
          if (!s || s.parentType && s.parentType !== "SYNCED_REFERENCE_BLOCK") {
            return false;
          }
          if (s.parentType === "SYNCED_REFERENCE_BLOCK") {
            let e = this.blockManager.getRootRecordId();
            if (((l = s.extra) === null || l === undefined ? undefined : l.syncedBlockExtra?.syncedBlockToken) !== e) {
              return false;
            }
          }
          return p.includes(a) && ((o = this.flowCommentService) === null || o === undefined ? undefined : (n = o.getRecordsByCommentId(a)) === null || n === undefined ? undefined : n.has(g));
        });
        let y = reactCoreLibraryReexport.useCallback(e => k(e), [k]);
        let C = reactCoreLibraryReexport.useRef(new Set());
        let [S, I] = reactCoreLibraryReexport.useState([]);
        let w = s((e, i) => {
          let {
            size: n
          } = C.current;
          if (i === "add") {
            C.current.add(e);
          } else if (i === "remove") {
            C.current.delete(e);
          }
          if (n !== C.current.size) {
            I(Array.from(C.current));
          }
        });
        let M = (docxCommentFeatureFlags.isMobileCommentRelationEnabled() ? p.concat(S) : p).map(e => `flow-comment-id-${e}`).concat(Array.from(n).map(e => `local-comment flow-comment-id-${e}`)).join(" ");
        let R = docxCommentFeatureFlags.isMobileCommentRelationEnabled() && v.type === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE;
        let E = Array.from(n).every(this.comment.isThirdPartyTypeComment);
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: `block-comment ${i.type}-block-comment ${M} ${b ? "comment-hl" : ""} ${E ? "local-comment-all-third-party" : ""} ${M ? "is-comment" : ""} ${R ? i.recordId : ""}`,
          children: reactJsxRuntimeCoreReexport.jsx(e, {
            ...i,
            toggleCommentHighlight: y,
            toggleFallBackId: w
          })
        });
      };
    }
  }
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var docxSelectorsExport = require("docx-selectors-export") /*id: 254026*/;
  var docxViewStateUtil = require("docx-view-state-util") /*id: 596609*/;
  var selectionChangeHandler = require("selection-change-handler") /*id: 126916*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var aiSuggestionConstants = require("ai-suggestion-constants") /*id: 72959*/;
  var viewStateTypeConstants = require("view-state-type-constants") /*id: 739915*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var layoutEventTypes = require("layout-event-types") /*id: 580889*/;
  var docxRevisionFeatureCheckers = require("docx-revision-feature-checkers") /*id: 964037*/;
  var docCommentUtils = require("doc-comment-utils") /*id: 315488*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  function j() {
    let e = document.createElement("style");
    e.type = "text/css";
    let i = document.body.appendChild(e);
    let n = i.sheet;
    let o = {};
    let r = e => {
      let i = -1;
      let o = e instanceof RegExp;
      [].find.call(n.cssRules, (n, r) => {
        let l = n.selectorText;
        if (o) {
          return !!e.test(l) && (i = r, true);
        } else {
          return l === e && (i = r, true);
        }
      });
      return i;
    };
    let l = function (e = "") {
      let i = r(e);
      if (i !== -1) {
        n.deleteRule(i);
      }
    };
    let a = () => {
      i.innerHTML = "";
      o = {};
    };
    return {
      hasRule: e => r(e) !== -1,
      hasRuleById: e => !!e && !!o[e],
      insertRule: (e, i) => {
        let {
          cssRules: r
        } = n;
        let l = r.length ? r.length : 0;
        let a = n.insertRule(e, l);
        if (i) {
          let e = r[a];
          if (e instanceof CSSStyleRule) {
            o[i] = e.selectorText;
          }
        }
      },
      deleteRuleById: function (e = "") {
        let i = o[e];
        if (i) {
          l(i);
          delete o[e];
        }
      },
      deleteRulesByRegExp: (e, i) => {
        if (!e) {
          return;
        }
        let r = n.cssRules;
        let l = [];
        for (let i = r.length - 1; i >= 0; i--) {
          let o = r[i];
          if (!(o instanceof CSSStyleRule)) {
            continue;
          }
          let {
            selectorText: a
          } = o;
          if (a.match(e)) {
            l.push(a);
            n.deleteRule(i);
          }
        }
        if (i) {
          l.find(e => {
            for (let i in o) {
              if (o[i] === e) {
                delete o[i];
                return true;
              }
            }
            return false;
          });
        }
      },
      deleteRuleBySelectorText: l,
      deleteAllRules: a,
      destroyInstance: () => {
        a();
        document.body.removeChild(e);
      }
    };
  }
  var z = j();
  let L = new Set(["undo", "redo", "replaceWithInline"]);
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var editorRevisionUtils = require("editor-revision-utils") /*id: 465369*/;
  var editorFormatRevisionUtils_1 = require("editor-format-revision-utils_1") /*id: 638641*/;
  var editorRevisionSelectionUtils = require("editor-revision-selection-utils") /*id: 421120*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var flowRevisionServiceName = require("flow-revision-service-name") /*id: 934786*/;
  var revisionConstants = require("revision-constants") /*id: 394471*/;
  var commentDataTransformUtils = require("comment-data-transform-utils") /*id: 567918*/;
  var contentCommentUtilsExport = require("content-comment-utils-export") /*id: 284561*/;
  var commentRelationConstants = require("comment-relation-constants") /*id: 127350*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var commentEventsProviderNameReexport = require("comment-events-provider-name-reexport") /*id: 429241*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var waitForSyncedCommentServiceReady = require("wait-for-synced-comment-service-ready") /*id: 592697*/;
  var commentActionTypes = require("comment-action-types") /*id: 20572*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  function el(e, i, n) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
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
  class ea extends editorContextFacade.EditorContextFacade {
    get flowCommentService() {
      return this.blockManager.editorAPI.getService(flowCommentServiceToken.commentServiceToken, {
        optional: true
      });
    }
    get flowRevisionService() {
      return this.blockManager.editorAPI.getService(flowRevisionServiceName.revisionServiceName, {
        optional: true
      });
    }
    get isIPadAsideMode() {
      return browserEnvironmentDetectionUtils.browserDetector.isIPadApp && this.revision?.isCommentInAsideMode;
    }
    isCommentActivated() {
      return docxCommentUtils.isCommentType(this.activeType || "");
    }
    getEffect() {
      return e => {
        reactCoreLibraryReexport.useEffect(() => {
          var e;
          var i;
          var n;
          var o;
          this.subs = this.subs.concat([this.commentEventsService.commentReady$.subscribe(() => this.handleCommentReady()), this.commentEventsService.resolveComment$.subscribe(e => this.handleResolveComment(e)), this.commentEventsService.reopenComment$.subscribe(e => this.handleReopenComment(e)), this.commentEventsService.deletedComment$.subscribe(e => this.handleDeleteComment(e)), this.commentEventsService.addedComment$.subscribe(e => this.handleAddedComment(e))]);
          this.bindInitEvent("on");
          this.blockManager.addListener(renderEventConstants.bufferChanged, this.handleBufferChanged);
          if ((e = this.flowRevisionService) !== null && e !== undefined) {
            e.on(revisionConstants.revisionEvents.DeleteRevision, this.handleDeleteRevision);
          }
          if ((i = this.flowRevisionService) !== null && i !== undefined) {
            i.on(revisionConstants.revisionEvents.UpdateRevision, this.handleUpdateRevision);
          }
          if ((n = this.flowRevisionService) !== null && n !== undefined) {
            n.on(revisionConstants.revisionEvents.BeforeRevisionStatusChange, this.handleBeforeRevisionStatusChange);
          }
          if ((o = this.flowRevisionService) !== null && o !== undefined) {
            o.on(revisionConstants.revisionEvents.RecordRevisionUpdate, this.handleRevisionDataChange);
          }
          this.addMark();
          return () => {
            var e;
            var i;
            var n;
            var o;
            var r;
            this.activeCommentChangeList.length = 0;
            this.handleBufferChanged.cancel();
            this.blockManager.removeListener(renderEventConstants.bufferChanged, this.handleBufferChanged);
            this.mapOfFallbackCommentByRelation.clear();
            this.subs.forEach(e => e == null ? undefined : e.unsubscribe());
            if ((e = this.blockViewMountSub) !== null && e !== undefined) {
              e.unsubscribe();
            }
            this.bindInitEvent("off");
            if ((i = this.flowRevisionService) !== null && i !== undefined) {
              i.off(revisionConstants.revisionEvents.DeleteRevision, this.handleDeleteRevision);
            }
            if ((n = this.flowRevisionService) !== null && n !== undefined) {
              n.off(revisionConstants.revisionEvents.UpdateRevision, this.handleUpdateRevision);
            }
            if ((o = this.flowRevisionService) !== null && o !== undefined) {
              o.off(revisionConstants.revisionEvents.BeforeRevisionStatusChange, this.handleBeforeRevisionStatusChange);
            }
            if ((r = this.flowRevisionService) !== null && r !== undefined) {
              r.off(revisionConstants.revisionEvents.RecordRevisionUpdate, this.handleRevisionDataChange);
            }
            if (docxCommentFeatureFlags.shouldInsertStyleOptimized()) {
              this.removeAllCommentMark();
              this.dynamicCss.destroyInstance();
            } else {
              this.clearMark();
            }
          };
        }, []);
      };
    }
    deactivate() {
      if (this.activeId) {
        var e;
        var i;
        if (this.isCommentActivated()) {
          if ((e = this.flowCommentService) !== null && e !== undefined) {
            e.deactivateComment(this.activeId, docxCommentConstants.commentInteractionEvents.hasNoSelectedBlock);
          }
        } else if ((i = this.flowRevisionService) !== null && i !== undefined) {
          i.deactivateRevision(this.activeId, docxCommentConstants.commentInteractionEvents.hasNoSelectedBlock);
        }
      }
      this.activeId = null;
      this.activeType = null;
    }
    activate(e, i) {
      var n;
      var o;
      let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : docxCommentConstants.commentSourceTypes.interaction;
      if (docxCommentUtils.isCommentType(i)) {
        if ((n = this.flowCommentService) !== null && n !== undefined) {
          n.activateComment(e, undefined, r);
        }
      } else if ((o = this.flowRevisionService) !== null && o !== undefined) {
        o.activateRevision(e, undefined, r);
      }
      this.activeId = e;
    }
    addCommentMark(e) {
      var i;
      var n;
      if (this.commentMarkMap.has(e)) {
        return;
      }
      let o = (i = this.flowCommentService) === null || i === undefined ? undefined : i.getCommentByCommentId(e);
      if ((!o || docxCommentUtils.isCommentFinished(o)) && docxCommentFeatureFlags.isCommentRelationEnabled() || this.comment.isThirdPartyTypeComment(o)) {
        return;
      }
      let r = (o == null ? undefined : o.parentType) === docBlockTypeConstants.syncedReferenceBlock && (o == null ? undefined : o.parentToken) || "";
      let l = docCommentUtils.getCommentId(e);
      let a = false;
      let s = false;
      if (!this.comment.isSyncedReferenceBlock) {
        let i = (n = this.flowCommentService) === null || n === undefined ? undefined : n.getRecordsByCommentId(e);
        if (!(i == null ? undefined : i.size)) {
          this.commentsNoRelationSet.add(e);
          return;
        }
        for (let e of i) {
          if (a && s) {
            break;
          }
          if (docxCommentFeatureFlags.isMobileCommentRelationEnabled() && !this.blockManager.hasRecordByRecordId(e)) {
            return;
          }
          let {
            type: i
          } = this.blockManager.getRecord(e).snapshot;
          if (i === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
            a = true;
          } else if (i === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE) {
            s = true;
          }
        }
      }
      let d = docCommentUtils.getCommentStyles(l, {
        isInSyncedReferenceBlock: this.comment.isSyncedReferenceBlock,
        isPresentationMode: !browserEnvironmentDetectionUtils.browserDetector.isMobile,
        isReviewMode: this.blockManager.config.get("isReview"),
        isIncludeSyncedSourceBlock: a,
        isIncludeSyncedReferenceBlock: s,
        syncedRefenceRecordId: r
      });
      let h = [];
      let m = docxCommentFeatureFlags.shouldInsertStyleOptimized();
      d.forEach(e => {
        let i = m ? docCommentUtils.generateUniqueId() : uuidGeneratorUtil.generateUuid();
        this.dynamicCss.insertRule(e, i);
        h.push(i);
      });
      this.commentMarkMap.set(e, h);
    }
    addMark() {
      let e = this.getDocComments();
      let i = docxCommentFeatureFlags.shouldInsertStyleOptimized();
      e.forEach(e => {
        let {
          commentId: n
        } = e;
        this.fallbackComment(n);
        if (!i) {
          this.addCommentMark(n);
        }
      });
      if (i) {
        this.updateMarkInViewport();
      }
    }
    clearMark() {
      for (let e of this.commentMarkMap.keys()) {
        this.removeCommentMark(e);
      }
    }
    fallbackComment(e) {
      this.addFallbackCommentByCommentId(e, {
        isFilter: e => !e || !arrayIsArrayUtil.isArray(e),
        checkBlock: false
      });
    }
    removeFallbackByRelation(e) {
      if (docxCommentUtils.getCommentsWithoutHighlight(e)) {
        return;
      }
      let i = this.mapOfFallbackCommentByRelation.get(e);
      if (i && i.size !== 0) {
        i.forEach(i => {
          this.blockManager.getBlockIdsByRecordId(i).forEach(i => {
            this.removeFallbackCommentWithBlockId(e, i);
          });
        });
        this.mapOfFallbackCommentByRelation.delete(e);
      }
    }
    addFallbackByRelation(e) {
      if (docxCommentUtils.getCommentsWithoutHighlight(e) || this.mapOfFallbackCommentByRelation.has(e)) {
        return;
      }
      let i = new Set();
      this.addFallbackCommentByCommentId(e, {
        isFilter: (n, o) => {
          let r = n.includes(e);
          if (!r) {
            i.add(o);
          }
          return r;
        },
        checkBlock: true
      });
      if (i.size) {
        this.mapOfFallbackCommentByRelation.set(e, i);
      }
    }
    addFallbackCommentByCommentId(e, i) {
      var n;
      let {
        isFilter: o,
        checkBlock: r
      } = i;
      Array.from(((n = this.flowCommentService) === null || n === undefined ? undefined : n.getRecordsByCommentId(e)) || []).forEach(i => {
        let n = this.blockManager.getBlockIdsByRecordId(i);
        if (!n.length) {
          return;
        }
        let {
          snapshot: l
        } = this.blockManager.getRecord(i);
        let {
          comments: a = []
        } = l;
        if (!o(a, i)) {
          n.forEach(i => {
            if (!this.blockManager.hasBlockViewByBlockId(i)) {
              this.delayFallbackCommentIds.add(i);
              return;
            }
            this.addFallbackCommentsWithBlockId(r ? [e] : a, i, r);
          });
        }
      });
    }
    addFallbackCommentsWithBlockId(e, i, n = false) {
      let o = this.blockManager.getBlockViewByBlockIdNotCheck(i);
      if (o) {
        if (editorTextBlockUtilities.isEditorInstance(o)) {
          let {
            start: i,
            end: n
          } = docCommentUtils.getFullZoneRange(o.model);
          let r = o.model.getAttributes(i, n).map(e => ({
            [e[0]]: e[1]
          })).reduce((e, i) => Object.assign(e, i), {});
          let l = e.filter(e => !r[docxCommentUtils.getCommentIdPrefix(e)] && !r[docxCommentUtils.getFallbackCommentId(e)]);
          if (l.length) {
            let e = l.reduce((e, i) => {
              e[docxCommentUtils.getFallbackCommentId(i)] = "true";
              return e;
            }, {});
            o.model.setAttributes({
              start: i,
              end: n
            }, e, {
              extra: {
                shouldCollab: false
              }
            });
          }
        } else if (docxCommentFeatureFlags.isMobileCommentRelationEnabled() && n && e[0]) {
          o.addFallbackMarkClass(e[0]);
        }
      }
    }
    removeFallbackCommentWithBlockId(e, i) {
      let n = this.blockManager.getBlockViewByBlockIdNotCheck(i);
      if (n) {
        if (editorTextBlockUtilities.isEditorInstance(n)) {
          let {
            start: i,
            end: o
          } = docCommentUtils.getFullZoneRange(n.model);
          let r = {
            [docxCommentUtils.getFallbackCommentId(e)]: ""
          };
          n.model.setAttributes({
            start: i,
            end: o
          }, r, {
            extra: {
              shouldCollab: false
            }
          });
        } else {
          n.removeFallbackMarkClass(e);
        }
      }
    }
    removeCommentMark(e) {
      if (docxCommentFeatureFlags.isCommentRelationEnabled()) {
        this.commentsNoRelationSet.delete(e);
      }
      if (!this.commentMarkMap.has(e)) {
        return;
      }
      let i = this.commentMarkMap.get(e);
      if (i) {
        i.forEach(e => {
          this.dynamicCss.deleteRuleById(e);
        });
      }
      this.commentMarkMap.delete(e);
    }
    removeAllCommentMark() {
      this.commentMarkMap.clear();
      this.dynamicCss.deleteAllRules();
    }
    addCommentHighlight(e, i = false) {
      if ((!!i || !this.highlightSet.has(e)) && !this.comment.isThirdPartyTypeComment(e)) {
        this.findCommentsBlock(e, i => {
          i.forEach(i => {
            i.addCommentHighlight(e);
            if (docxBlockUtils_1.isTextBlock(i)) {
              i.struct.addDataListener(this.restoreCommentHighlight);
            }
            this.highlightRecordSet.add(i.record.id);
          });
          this.highlightSet.add(e);
        });
      }
    }
    addRevisionHighlight(e, i = false) {
      if (!!i || !this.highlightSet.has(e)) {
        this.findRevisionsBlock(e, i => {
          i.forEach(i => {
            var n;
            let r = (n = i.snapshot.revisions) === null || n === undefined ? undefined : n.find(i => i.revisionId === e);
            let l = !!(r == null ? undefined : r.details?.turnInto);
            i.addRevisionHighlight(e, {
              isHighlightAllText: l
            });
            if (docxBlockUtils_1.isTextBlock(i)) {
              i.struct.addDataListener(this.restoreCommentHighlight);
            }
            this.highlightRecordSet.add(i.record.id);
            this.setHighlightRevisionRecordMap(e, i.record.id);
          });
          this.highlightSet.add(e);
        });
      }
    }
    removeCommentHighlight(e) {
      if (!!this.highlightSet.has(e) && !this.comment.isThirdPartyTypeComment(e)) {
        this.findCommentsBlock(e, i => {
          i.forEach(i => {
            if (this.activeId && this.activeId !== e) {
              var n;
              let o = (n = this.flowCommentService) === null || n === undefined ? undefined : n.getRecordsByCommentId(this.activeId);
              let r = (o == null ? undefined : o.size) && (o == null ? undefined : o.has(i.record.id)) ? this.activeId : undefined;
              i.removeCommentHighlight(e, r);
            } else {
              i.removeCommentHighlight(e);
            }
            if (docxBlockUtils_1.isTextBlock(i)) {
              i.struct.removeDataListener(this.restoreCommentHighlight);
            }
            this.highlightRecordSet.delete(i.record.id);
          });
          this.handleDeleteHighlightSetAfterRemove(e);
        });
      }
    }
    removeRevisionHighlight(e) {
      if (this.highlightSet.has(e)) {
        this.findRevisionsBlock(e, i => {
          i.forEach(i => {
            this.removeRevisionHighlightByBlock(e, i);
            this.highlightRecordSet.delete(i.record.id);
            this.setHighlightRevisionRecordMap(e, i.record.id, true);
          });
          this.handleDeleteHighlightSetAfterRemove(e);
        });
      }
    }
    removeRevisionHighlightByBlock(e, i) {
      var n;
      if (!i) {
        return;
      }
      let r = (n = i.snapshot.revisions) === null || n === undefined ? undefined : n.find(i => i.revisionId === e);
      let l = !!(r == null ? undefined : r.details?.turnInto);
      if (this.activeId && this.activeId !== e) {
        i.removeRevisionHighlight(e, {
          notRemoveRevisionId: this.activeId,
          isHighlightAllText: l
        });
      } else {
        i.removeRevisionHighlight(e, {
          isHighlightAllText: l
        });
      }
      if (docxBlockUtils_1.isTextBlock(i)) {
        i.struct.removeDataListener(this.restoreCommentHighlight);
      }
    }
    findBlockByRecordIds(e, i) {
      let [n, o] = e.reduce((e, i) => {
        let [n, o] = e;
        let r = this.blockManager.getBlockIdsByRecordId(i);
        let l = r.filter(e => !this.blockManager.getBlockViewByBlockIdNotCheck(e));
        return [[...n, ...r], [...o, ...l]];
      }, [[], []]);
      let r = () => {
        i(n.reduce((e, i) => {
          let n = this.blockManager.getBlockViewByBlockIdNotCheck(i);
          if (!n) {
            let n = this.blockManager.getBlockModelByBlockIdNotCheck(i);
            if (!n) {
              return e;
            }
            this.highlightRecordSetNotFoundView.add(n.recordId);
            if (!this.blockViewMountSub) {
              var o;
              this.blockViewMountSub = (o = this.blockManager.editorAPI.viewService.blockViewMount$) === null || o === undefined ? undefined : o.subscribe(this.handleBlockViewMount);
            }
          }
          if (n) {
            return [...e, n];
          } else {
            return e;
          }
        }, []));
      };
      if (o.length) {
        this.blockManager.layoutManager.renderNodeById(o).then(() => r()).catch(e => {
          r();
        });
      } else {
        r();
      }
    }
    findCommentsBlock(e, i) {
      var n;
      let o = ((n = this.flowCommentService) === null || n === undefined ? undefined : n.getRecordsByCommentId(e)) || [];
      this.findBlockByRecordIds(Array.from(o), i);
    }
    findRevisionsBlock(e, i) {
      var n;
      let o = ((n = this.flowRevisionService) === null || n === undefined ? undefined : n.getRecordsByRevisionId(e)) || [];
      this.findBlockByRecordIds(Array.from(o), i);
    }
    setHighlightRevisionRecordMap(e, i, n = false) {
      let o = this.highlightRevisionRecordMap.get(e);
      if (n) {
        if (o != null) {
          o.delete(i);
        }
        if (o && !o.size) {
          this.highlightRevisionRecordMap.delete(e);
        }
        return;
      }
      if (o) {
        o.add(i);
      } else {
        this.highlightRevisionRecordMap.set(e, new Set([i]));
      }
    }
    constructor() {
      var e;
      super();
      e = this;
      el(this, "highlightSet", new Set());
      el(this, "highlightRecordSet", new Set());
      el(this, "highlightRecordSetNotFoundView", new Set());
      el(this, "highlightRevisionRecordMap", new Map());
      el(this, "commentMarkMap", new Map());
      el(this, "mapOfFallbackCommentByRelation", new Map());
      el(this, "activeId", null);
      el(this, "activeType", null);
      el(this, "activateCommentSelection", null);
      el(this, "delayFallbackCommentIds", new Set());
      el(this, "activeCommentChangeList", []);
      el(this, "activeCommentService", null);
      el(this, "commentEventsService", this.blockManager.editorAPI.getService(commentEventsProviderNameReexport.commentEventsToken));
      el(this, "revision", undefined);
      el(this, "subs", []);
      el(this, "blockViewMountSub", undefined);
      el(this, "dynamicCss", docxCommentFeatureFlags.shouldInsertStyleOptimized() ? j() : z);
      el(this, "commentsNoRelationSet", new Set());
      el(this, "initActiveCommentService", async () => {
        let e = await waitForSyncedCommentServiceReady.waitForSyncedCommentServiceReady(this.blockManager);
        this.activeCommentService = e;
        this.activeCommentService.on(commentActionTypes.CommentActionTypes.ACTIVE_COMMENT_CHANGE_BEFORE_SCROLL, this.handleActivateCommentChange);
        this.activeCommentService.on(commentActionTypes.CommentActionTypes.ACTIVE_COMMENT_CHANGE_AFTER_SCROLL, this.handleRestoreActiveComment);
      });
      el(this, "bindInitEvent", e => {
        this.comment[e](commentEventConstants.CommentEvents.ACTIVE_COMMENT_CHANGE_BEFORE_SCROLL, this.handleActivateCommentChange);
        this.comment[e](commentEventConstants.CommentEvents.ACTIVE_COMMENT_CHANGE_AFTER_SCROLL, this.handleRestoreActiveComment);
        this.comment[e](commentEventConstants.CommentEvents.UPDATE_COMMENT, this.handleUpdateComment);
        this.comment[e](commentEventConstants.CommentEvents.ADDED_FALLBACK_COMMENT, this.handleAddedFallbackComment);
      });
      el(this, "handleBufferChanged", debounceUtil_1_1.debounce(() => {
        if (docxCommentFeatureFlags.shouldInsertStyleOptimized()) {
          this.updateMarkInViewport();
        }
        let e = this.delayFallbackCommentIds;
        if (e.size !== 0) {
          for (let n of this.blockManager.layoutManager.getActiveBlocks()) {
            if (e.has(n)) {
              let o = this.blockManager.getBlockModelByBlockId(n);
              let {
                comments: r
              } = o.record.snapshot;
              if (r && arrayIsArrayUtil.isArray(r)) {
                this.addFallbackCommentsWithBlockId(r, n);
              } else if (docxCommentFeatureFlags.isMobileCommentRelationEnabled() && o) {
                var i;
                let e = Array.from(((i = this.flowCommentService) === null || i === undefined ? undefined : i.getCommentsByRecordId(o.recordId)) || []);
                if (e.length) {
                  this.addFallbackCommentsWithBlockId(e, n, true);
                }
              }
              e.delete(n);
              if (e.size === 0) {
                return;
              }
            }
          }
        }
      }, 100));
      el(this, "activateBySelectionChange", (e, i, n) => {
        var o;
        var r;
        var c;
        var h;
        var u;
        var v;
        var f;
        let g = this.selectionAPI.getContext();
        if (i.length !== 1) {
          if (i.length === 0 && (g == null ? undefined : g.source) === docxBlockSelectionHandler_1.commandTypes.Destroy || i.length === 0 && (g == null ? undefined : g.source) === docxBlockSelectionHandler_1.commandTypes.SwitchDocsMode) {
            return;
          }
          this.deactivate();
          return;
        }
        let {
          id: p,
          selection: b
        } = i[0];
        let k = this.blockManager.getBlockModelByBlockIdNotCheck(p);
        if (!k) {
          return;
        }
        let {
          recordId: y
        } = k;
        let {
          ignoreComments: C,
          ignoreRevisions: S,
          isCheckCommentShow: I
        } = n;
        let w = C ? new Set() : ((o = this.flowCommentService) === null || o === undefined ? undefined : o.getCommentsByRecordId(y, {
          filterInvalid: true
        })) || new Set();
        let R = S ? new Set() : ((r = this.flowRevisionService) === null || r === undefined ? undefined : r.getRevisionsByRecordId(y)) || new Set();
        let E = editorRevisionUtils.getPreviousRevision(k);
        if (!w.size && !R.size) {
          if (I) {
            return;
          }
          if (this.activeId && !E) {
            if (!this.revision?.isCreatingRevision) {
              this.deactivate();
            }
            return;
          }
        }
        if (editorTextBlockUtilities.isTextBlock(k)) {
          if (editorSelectionUtilities.isBlockSelectionType(i) && this.activateBlockFormatRevision(k)) {
            return;
          }
          let n = editorSelectionUtilities.isCollapsedTextSelection(i);
          let o = this.getCommentsAndRevisionsInSelection(b, k, E);
          if (!o) {
            return;
          }
          let r = C ? o.filter(e => {
            let [, {
              type: i
            }] = e;
            return i === commentEventConstants.RevisionType.revision;
          })?.[0] : o[0];
          if (r) {
            let [o, {
              type: l
            }] = r;
            if (n) {
              this.activateCommentSelection = i;
            }
            this.collectCommentViewTextClick();
            if (this.activeId === o) {
              return;
            }
            let a = this.selectionAPI.getIsComposing();
            let s = !a || !this.blockManager.config.get("revising");
            if (docxCommentUtils.isCommentType(l) && s) {
              if (C) {
                return;
              }
              this.activeId = o;
              if ((c = this.flowCommentService) !== null && c !== undefined) {
                c.activateComment(o, undefined, docxCommentConstants.commentSourceTypes.interaction);
              }
              return;
            }
            if (a) {
              return;
            }
            this.activeId = o;
            if (e.length > 1 || (g == null ? undefined : g.source) === "deleteMultipleSelection") {
              setTimeout(() => {
                var e;
                var i;
                if (docxCommentUtils.isCommentType(l)) {
                  if ((e = this.flowCommentService) !== null && e !== undefined) {
                    e.activateComment(o, undefined, docxCommentConstants.commentSourceTypes.interaction);
                  }
                } else if ((i = this.flowRevisionService) !== null && i !== undefined) {
                  i.activateRevision(o, undefined, docxCommentConstants.commentSourceTypes.interaction);
                }
              });
            } else if (docxCommentUtils.isCommentType(l)) {
              if ((h = this.flowCommentService) !== null && h !== undefined) {
                h.activateComment(o, undefined, docxCommentConstants.commentSourceTypes.interaction);
              }
            } else if ((u = this.flowRevisionService) !== null && u !== undefined) {
              u.activateRevision(o, undefined, docxCommentConstants.commentSourceTypes.interaction);
            }
            return;
          }
          if (n && this.activateTurnIntoRevision(k) || I || !this.activeId || this.revision?.isCreatingRevision || (g == null ? undefined : g.source) === docxBlockSelectionHandler_1.commandTypes.ModifySequence && this.blockManager.config.get("revising")) {
            return;
          }
          this.deactivate();
        } else {
          let e = new Set([...(w || []), ...(R || [])]);
          if (this.activeId && e.has(this.activeId)) {
            if ((v = this.comment) === null || v === undefined ? undefined : v.isThirdPartyTypeComment(this.activeId)) {
              let e = this.blockManager.getBlockViewByBlockIdNotCheck(p);
              if (e != null && (f = e.activateComment) !== null && f !== undefined) {
                f.call(e, this.activeId);
              }
            }
            return;
          }
          let i = this.getFirstBlockCommentOrRevisionPosition(w, R);
          if (!i) {
            return;
          }
          let {
            type: n,
            commentId: o
          } = i;
          if (this.activeId === o || !o) {
            return;
          }
          setTimeout(() => {
            var e;
            this.activate(o, n);
            if ((e = this.flowCommentService) !== null && e !== undefined) {
              e.scrollToBlockByCommentId(o, {
                animate: true
              });
            }
          });
          return;
        }
      });
      el(this, "getCommentsAndRevisionsInSelection", (e, i, n) => {
        let {
          zoneState: o,
          zoneId: r
        } = i;
        let l = o.getModelText().length;
        let {
          start: a,
          end: s
        } = e || {
          start: 0,
          end: l - 1
        };
        let c = a === s;
        let d = s;
        if (c && !docxFeatureFlags.isPpEnabled()) {
          d = Math.min(s + 1, l);
        }
        let h = {
          ...o.offsetToPoint(a),
          zoneId: r
        };
        let u = {
          ...o.offsetToPoint(d),
          zoneId: r
        };
        let m = docxFeatureFlags.isPpEnabled() ? docCommentUtils.getCommentEntities(o, {
          start: h,
          end: u
        }, e => {
          var i;
          return !!((i = this.flowCommentService) === null || i === undefined ? undefined : i.getCommentIsFinished(e));
        }) : contentDeltaUtilityFunctions.v(o, {
          start: h,
          end: u
        });
        let v = this.activeId && docxCommentUtils.getCommentIdPrefix(this.activeId);
        if (v && m[v]) {
          return null;
        }
        if (c) {
          let e = true;
          if (a === l - 1) {
            var f;
            let n = (f = i.snapshot.revisions) === null || f === undefined ? undefined : f.find(e => editorRevisionUtilities.isParagraphDetail(e));
            if (n) {
              m[editorRevisionUtilities.formatRevisionId(n.revisionId)] = "";
              e = false;
            }
          }
          if (e && a === 0 && n) {
            m[editorRevisionUtilities.formatRevisionId(n.revisionId)] = "";
          }
        }
        return Object.keys(m).map(docxCommentUtils.getCommentType).map(e => {
          var i;
          var n;
          if (!e) {
            return null;
          }
          let o = docxCommentUtils.extractPureCommentId(e);
          if (!o) {
            return null;
          }
          let r = docxCommentUtils.getCommentIdsFromRange(e);
          return [o, {
            type: r,
            position: docxCommentUtils.isCommentType(r) ? (i = this.flowCommentService) === null || i === undefined ? undefined : i.getPositionByCommentId(o) : (n = this.flowRevisionService) === null || n === undefined ? undefined : n.getPositionByCommentId(o)
          }];
        }).filter(e => {
          var n;
          return !!e && !!e[1]?.position && !((n = this.comment) === null || n === undefined ? undefined : n.isThirdPartyTypeComment(e[0]));
        }).sort(docxCommentUtils.compareCommentPositions);
      });
      el(this, "getFirstBlockCommentOrRevisionPosition", (e, i) => {
        var n;
        var o;
        let l = (n = this.flowCommentService) === null || n === undefined ? undefined : n.getDocCommentsPosition(true);
        let a = (o = this.flowRevisionService) === null || o === undefined ? undefined : o.getDocCommentsPosition(true);
        if (l === undefined && a === undefined) {
          return;
        }
        let s = [...((l ? Object.entries(l).filter(e => {
          var i;
          let [n] = e;
          return !((i = this.flowCommentService) === null || i === undefined ? undefined : i.getCommentIsFinished(n));
        }) : undefined) || []), ...((a ? Object.entries(a).filter(e => {
          var i;
          let [n] = e;
          return !((i = this.flowRevisionService) === null || i === undefined ? undefined : i.getRevisionIsFinished(n));
        }) : undefined) || [])];
        s.sort(contentCommentUtilsExport.compareItems);
        let c = s.find(n => {
          var o;
          let [r] = n;
          return (e == null ? undefined : e.has(r)) && !((o = this.comment) === null || o === undefined ? undefined : o.isThirdPartyTypeComment(r)) || (i == null ? undefined : i.has(r));
        });
        if (c) {
          return {
            commentId: c[0],
            type: c[1]?.type
          };
        }
      });
      el(this, "collectCommentViewTextClick", () => {
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_comment_view", {
          source: "text_click",
          comment_type: "part_comment"
        });
      });
      el(this, "activateTurnIntoRevision", e => {
        var i;
        let n = editorRevisionSelectionUtils.findLatestTurnIntoRevision(e.snapshot);
        return !!n && (this.activeId === n.revisionId || (this.activeId = n.revisionId, (i = this.activeCommentService) === null || i === undefined || i.activateComment({
          type: commentEventConstants.RevisionType.revision,
          params: {
            commentId: n.revisionId,
            from: docxCommentConstants.commentSourceTypes.interaction
          }
        }), true));
      });
      el(this, "activateBlockFormatRevision", e => {
        var i;
        let n = editorFormatRevisionUtils_1.getLatestRevision(e);
        return !!n && ((i = this.activeCommentService) === null || i === undefined || i.activateComment({
          type: commentEventConstants.RevisionType.revision,
          params: {
            commentId: n.revisionId,
            from: docxCommentConstants.commentSourceTypes.interaction,
            type: commentEventConstants.RevisionType.revision
          }
        }), true);
      });
      el(this, "handleAddHighlightByRecordId", e => {
        if (this.highlightSet.size) {
          this.highlightSet.forEach(i => {
            var n;
            var o;
            if ((o = this.flowCommentService) === null || o === undefined ? undefined : (n = o.getRecordsByCommentId(i)) === null || n === undefined ? undefined : n.has(e)) {
              this.findBlockByRecordIds([e], e => {
                if (this.highlightSet.has(i)) {
                  e.forEach(e => {
                    e.addCommentHighlight(i);
                  });
                }
              });
            }
          });
        }
      });
      el(this, "handleMutation", e => {
        let {
          mutations: i
        } = e;
        if (this.highlightSet.size) {
          for (let e of i.added) {
            this.handleAddHighlightByRecordId(e.block.recordId);
          }
          for (let e of i.updated) {
            if (e.originalType) {
              this.handleAddHighlightByRecordId(e.block.recordId);
            }
          }
        }
      });
      el(this, "handleBlockModuleReady", e => {
        let {
          blockType: i,
          module: n
        } = e;
        if (n.isBase() && this.highlightSet.size) {
          for (let e of this.blockManager.structService.getBlockStructsByType(i)) {
            this.handleAddHighlightByRecordId(e.recordId);
          }
        }
      });
      el(this, "handleBlockViewMount", e => {
        let {
          props: i
        } = e;
        if (!this.highlightSet.size) {
          return;
        }
        let {
          recordId: n
        } = i.struct;
        if (this.highlightRecordSetNotFoundView.has(n) && (this.handleAddHighlightByRecordId(n), this.highlightRecordSetNotFoundView.delete(n), !this.highlightRecordSetNotFoundView.size)) {
          var o;
          if ((o = this.blockViewMountSub) !== null && o !== undefined) {
            o.unsubscribe();
          }
          this.blockViewMountSub = undefined;
        }
      });
      el(this, "handleCommentReady", () => {
        var e;
        var i;
        this.addMark();
        let {
          editorAPI: n
        } = this.blockManager;
        let o = [n.structService.mutation$.subscribe(this.handleMutation), n.moduleService.blockModuleReady$.subscribe(this.handleBlockModuleReady), (e = this.comment.relationChange$) === null || e === undefined ? undefined : e.subscribe(this.handleCommentRelationChange), (i = this.comment.relationDataChange$) === null || i === undefined ? undefined : i.subscribe(this.handleCommentRelationDataChange)].filter(Boolean);
        this.subs = this.subs.concat(o);
      });
      el(this, "handleActivateCommentChange", function (i, n = false) {
        if (!e.activeCommentChangeList.includes(i)) {
          e.activeCommentChangeList.push(i);
        }
        if (e.activeCommentChangeList.length > 1 && !n) {
          return;
        }
        let {
          prevActiveCommentId: o,
          activeCommentId: r,
          type: l,
          prevType: a,
          reportParams: s,
          callSource: c,
          traceId: d
        } = i;
        if (o) {
          let i = a ?? e.activeType;
          if (docxCommentUtils.isCommentType(i || "")) {
            e.removeCommentHighlight(o);
          } else {
            e.removeRevisionHighlight(o);
          }
        }
        if (r) {
          e.activeId = r;
          e.activeType = l || null;
          if (e.isCommentActivated()) {
            e.addCommentHighlight(r, true);
          } else {
            e.addRevisionHighlight(r, true);
          }
          try {
            if (e.comment) {
              if (d) {
                var h;
                if ((h = e.comment.getCommentTracer({
                  traceId: d
                })) !== null && h !== undefined) {
                  h.addTrace(d, {
                    textHightLight: true
                  });
                }
              }
              e.comment.eventCollector.collectEvent(docxCommentConstants.commentActionEvents.activateCommentHighlight, {
                type: e.activeType,
                activeCommentId: r,
                callSource: (s == null ? undefined : s.callSource) || c || "unknown",
                traceId: d
              });
            }
          } catch (i) {
            if (e.comment) {
              e.comment.eventCollector.collectEvent(docxCommentConstants.commentActionEvents.exception, {
                msg: "comment-interaction-handleActivateCommentChange error",
                ...docxEditorBlockMetadataUtils.serializeError(i instanceof Error ? i : undefined)
              });
            }
          }
        } else {
          e.activeId = null;
          e.activeType = null;
        }
        e.activeCommentChangeList.shift();
        if (e.activeCommentChangeList.length) {
          e.handleActivateCommentChange(e.activeCommentChangeList[0], true);
        }
      });
      el(this, "handleRestoreActiveComment", e => {
        if (!docxCommentFeatureFlags.isMobileCommentRelationEnabled() || this.activeCommentChangeList.length > 1) {
          return;
        }
        let {
          activeCommentId: i,
          type: n
        } = e;
        if (i && this.activeId === i && this.activeType === n && this.isCommentActivated()) {
          this.addCommentHighlight(i, true);
        }
      });
      el(this, "handleAddedComment", e => {
        var i;
        let {
          commentId: n
        } = e;
        let o = (i = this.flowCommentService) === null || i === undefined ? undefined : i.getCommentByCommentId(n);
        if (!!o && !docxCommentUtils.isCommentFinished(o) && !docxCommentUtils.getCommentsWithoutHighlight(n)) {
          this.fallbackComment(n);
          this.addCommentMark(n);
          this.addCommentHighlightFallback(n);
        }
      });
      el(this, "addCommentHighlightFallback", e => {
        if (this.activeId === e) {
          this.addCommentHighlight(e, true);
        }
        setTimeout(() => {
          if (this.activeId === e) {
            this.addCommentHighlight(e, true);
          }
        });
      });
      el(this, "handleAddedFallbackComment", e => {
        let {
          commentId: i
        } = e;
        this.fallbackComment(i);
      });
      el(this, "handleRevisionDataChange", e => {
        let {
          updatedRevisionIds: i
        } = e;
        if (!!i.length && !!this.activeId && !this.isCommentActivated() && !!i.some(e => e === this.activeId) && !this.selectionAPI.getIsComposing()) {
          this.addRevisionHighlight(this.activeId, true);
        }
      });
      el(this, "handleBeforeRevisionStatusChange", e => {
        let {
          revisionId: i
        } = e;
        this.removeRevisionHighlight(i);
      });
      el(this, "handleUpdateComment", e => {
        var i;
        let {
          commentId: n
        } = e;
        let o = (i = this.flowCommentService) === null || i === undefined ? undefined : i.getCommentByCommentId(n);
        if (o && !docxCommentUtils.isCommentFinished(o)) {
          if (docxCommentFeatureFlags.shouldInsertStyleOptimized()) {
            this.updateMarkInViewport();
          } else {
            this.addCommentMark(n);
          }
        }
      });
      el(this, "handleCommentRelationChange", e => {
        let {
          updatedRecordsMap: i,
          deletedValuesRecordMap: n
        } = e;
        n.forEach((e, i) => {
          if (!!this.highlightSet.has(i) && !docxCommentUtils.getCommentsWithoutHighlight(i) && !this.comment.isThirdPartyTypeComment(i)) {
            e.forEach(e => {
              (this.blockManager.getBlockIdsByRecordId(e) || []).forEach(e => {
                let n = this.blockManager.getBlockViewByBlockIdNotCheck(e);
                if (n != null) {
                  n.removeCommentHighlight(i);
                }
              });
            });
          }
        });
        i.forEach((e, i) => {
          if (Array.from(e).some(e => {
            let n = this.blockManager.getRecord(e);
            if ((n == null ? undefined : n.snapshot.text) instanceof Object && !Array.from(Object.values(n.snapshot.text.apool.numToAttrib)).some(e => e[0] === `flow-comment-id-${i}`)) {
              return true;
            }
          })) {
            this.fallbackComment(i);
          }
          if (this.commentsNoRelationSet.has(i)) {
            this.commentsNoRelationSet.delete(i);
            this.addCommentMark(i);
          }
          if (docxCommentFeatureFlags.isMobileCommentRelationEnabled()) {
            this.addCommentMark(i);
          }
        });
      });
      el(this, "handleDeleteRevision", e => {
        let {
          deletedRevisionIds: i
        } = e;
        i.forEach(e => {
          if ((this.highlightSet.has(e) || this.isIPadAsideMode) && this.activeId === e) {
            this.activeId = null;
            this.activeType = null;
          }
        });
      });
      el(this, "handleUpdateRevision", e => {
        let {
          updatedRevisionIds: i
        } = e;
        for (let e of i) {
          var n;
          let i = ((n = this.flowRevisionService) === null || n === undefined ? undefined : n.getRecordsByRevisionId(e)) || new Set();
          let r = this.highlightRevisionRecordMap.get(e);
          if (r) {
            for (let n of [...r].filter(e => !i.has(e))) {
              let i = this.blockManager.getBlockViewsByRecordId(n);
              this.removeRevisionHighlightByBlock(e, i[0]);
            }
          }
          if (!this.activeId && e === this.flowRevisionService?.activeCommentId) {
            this.addRevisionHighlight(e);
            this.activeId = e;
            this.activeType = commentEventConstants.RevisionType.revision;
          }
        }
      });
      el(this, "handleDeleteComment", e => {
        let {
          commentId: i
        } = e;
        this.removeCommentMark(i);
        this.removeCommentHighlight(i);
      });
      el(this, "handleResolveComment", e => {
        this.removeCommentMark(e.commentId);
        this.removeCommentHighlight(e.commentId);
      });
      el(this, "handleReopenComment", e => {
        this.addCommentMark(e.commentId);
      });
      el(this, "getDocComments", () => {
        let e = docxCommentFeatureFlags.isMobileCommentRelationEnabled();
        let i = this.editorAPI.getService(flowCommentServiceToken.commentServiceToken).getDocComments(true, e);
        return commentDataTransformUtils.createCommentMap(commentDataTransformUtils.transformComments(i));
      });
      el(this, "updateMarkInViewport", debounceUtil_1_1.debounce(() => {
        for (let i of this.blockManager.layoutManager.getActiveBlocks()) {
          var e;
          let n = this.blockManager.getBlockModelByBlockId(i);
          let {
            comments: o
          } = n.record.snapshot;
          let r = this.getDocComments();
          let l = ((e = this.flowCommentService) === null || e === undefined ? undefined : e.getCommentsByRecordId(n.recordId)) || new Set();
          let a = docxCommentFeatureFlags.isMobileCommentRelationEnabled() ? [...l] : o;
          if (a && arrayIsArrayUtil.isArray(a)) {
            a.forEach(e => {
              if (r.has(e)) {
                this.addCommentMark(e);
              }
            });
          }
        }
      }, 0));
      el(this, "handleCommentRelationDataChange", e => {
        let {
          updatedValues: i,
          deletedValues: n,
          source: o
        } = e;
        if ([commentRelationConstants.relationEvents.commentRelationData, commentRelationConstants.relationEvents.sourceVersionChange].includes(o)) {
          i.forEach(e => {
            this.addFallbackByRelation(e);
          });
        } else {
          i.forEach(e => {
            this.removeFallbackByRelation(e);
          });
        }
        n.forEach(e => {
          this.removeFallbackByRelation(e);
        });
      });
      el(this, "restoreCommentHighlight", (e, i) => {
        if (i.options?.from === collaborativeEditingFlowSyncModule.kq.REMOTE || L.has(i.options?.transactionName || "")) {
          this.highlightSet.forEach(i => {
            this.findCommentsBlock(i, n => {
              n.forEach(n => {
                if (n.record.id === e.block.recordId) {
                  n.addCommentHighlight(i);
                }
              });
            });
          });
        }
      });
      el(this, "handleDeleteHighlightSetAfterRemove", e => {
        this.highlightSet.delete(e);
        this.highlightRecordSetNotFoundView.delete(e);
        if (!this.highlightRecordSetNotFoundView.size && this.blockViewMountSub) {
          this.blockViewMountSub.unsubscribe();
          this.blockViewMountSub = undefined;
        }
      });
      this.initActiveCommentService();
    }
  }
  function es(e, i, n) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
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
  class ec extends ea {
    getEffect() {
      let e = super.getEffect();
      return i => {
        e(i);
        reactCoreLibraryReexport.useEffect(() => {
          var e;
          var i;
          this.lastSelectionChangeTrigger.init(this.handleSelectionChange, this.selectionAPI, this.blockManager);
          this.selectionAPI.onSelectionChange(this.lastSelectionChangeTrigger.handleSelectionChange);
          if ((e = this.flowCommentService) !== null && e !== undefined) {
            e.on(commentEventConstants.CommentEvents.HOVER_COMMENT_CHANGE, this.handleHoverCommentChange);
          }
          if ((i = this.flowRevisionService) !== null && i !== undefined) {
            i.on(commentEventConstants.CommentEvents.HOVER_COMMENT_CHANGE, this.handleHoverCommentChange);
          }
          docxEditorEventConstantsAndManager.globalEventBus.on(layoutEventTypes.layoutEventTypes.DOC_COMMENT_SHOW_CHANGE_TRANSITION_END, this.handleFixCursor);
          platformDocUtils.vpe.on("CHECK_COMMENT_TOGGLE", this.handleCheckCommentModeChange);
          this.subs.push(this.blockManager.dataService.change$.subscribe(this.handleRecordChange));
          return () => {
            var e;
            var i;
            this.selectionAPI.offSelectionChange(this.lastSelectionChangeTrigger.handleSelectionChange);
            docxEditorEventConstantsAndManager.globalEventBus.off(layoutEventTypes.layoutEventTypes.DOC_COMMENT_SHOW_CHANGE_TRANSITION_END, this.handleFixCursor);
            platformDocUtils.vpe.off("CHECK_COMMENT_TOGGLE", this.handleCheckCommentModeChange);
            this.lastSelectionChangeTrigger.destroy();
            if ((e = this.flowCommentService) !== null && e !== undefined) {
              e.off(commentEventConstants.CommentEvents.HOVER_COMMENT_CHANGE, this.handleHoverCommentChange);
            }
            if ((i = this.flowRevisionService) !== null && i !== undefined) {
              i.off(commentEventConstants.CommentEvents.HOVER_COMMENT_CHANGE, this.handleHoverCommentChange);
            }
          };
        }, []);
      };
    }
    constructor(...e) {
      super(...e);
      es(this, "lastSelectionChangeTrigger", new selectionChangeHandler.SelectionChangeHandler());
      es(this, "preSelection", []);
      es(this, "isCheckCommentShow", false);
      es(this, "handleCheckCommentModeChange", e => {
        let {
          shown: i
        } = e;
        this.isCheckCommentShow = i;
      });
      es(this, "handleFixCursor", e => {
        if (!e || !this.activateCommentSelection) {
          return;
        }
        let i = this.selectionAPI.getSelection();
        if (!deepEqualUtil_1.deepEqual(i, this.activateCommentSelection)) {
          this.selectionAPI.setSelection(this.activateCommentSelection);
        }
        this.activateCommentSelection = null;
      });
      es(this, "handleRecordChange", e => {
        let i = this.preSelection;
        for (let o of e.recordOps) {
          for (let e of o.ops) {
            if (e.p[0] === "type" && i.find(e => this.blockManager.getBlockIdsByRecordId(o.id).includes(e.id))) {
              var n;
              if ((n = this.flowCommentService) === null || n === undefined) {
                return undefined;
              } else {
                return n.deactivateComment(undefined, docxCommentConstants.commentInteractionEvents.blockTurnInto);
              }
            }
          }
        }
      });
      es(this, "handleSelectionChange", (e, i) => {
        if (docxViewStateUtil.getViewType(reduxStoreInitializer.reduxStore.getState()) !== viewStateTypeConstants.viewTypes.PAGINATION && (!docxSelectorsExport.isSuggestionSidebarShown(reduxStoreInitializer.reduxStore.getState()) || !function (e, i) {
          let a;
          let s = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
          if (e[0]?.type === docxBlockSelectionHandler_1.blockTypes.TEXT && lastElementHelper.getLastElement(e)?.type === docxBlockSelectionHandler_1.blockTypes.TEXT && lastElementHelper.getLastElement(e)?.id === e[0].id) {
            let n = i.getBlockModelByBlockIdNotCheck(e[0].id);
            let o = n.zoneState.getModelText().length;
            let {
              start: r,
              end: c
            } = e[0].selection ?? {
              start: 0,
              end: o
            };
            let d = [];
            if (r === c) {
              d.push([r, Math.min(c + 1, o)]);
              if (s) {
                d.push([Math.max(c - 1, 0), c]);
              }
            } else {
              d.push([r, c]);
            }
            d.forEach(e => {
              let [i, o] = e;
              if (a) {
                return;
              }
              let r = n.zoneState.getZoneId();
              let l = {
                ...n.zoneState.offsetToPoint(i),
                zoneId: r
              };
              let s = {
                ...n.zoneState.offsetToPoint(o),
                zoneId: r
              };
              let c = contentDeltaUtilityFunctions.v(n.zoneState, {
                start: l,
                end: s
              });
              if (c[aiSuggestionConstants.suggestionType]) {
                a = c[aiSuggestionConstants.suggestionType];
              }
            });
          }
          return a;
        }(i, this.blockManager, true))) {
          this.preSelection = e;
          if (i.length === 1 || !docCommentUtils.isInsideComment(window.getSelection()?.focusNode)) {
            this.activateBySelectionChange(e, i, {
              isCheckCommentShow: this.isCheckCommentShow,
              ignoreRevisions: !docxRevisionFeatureCheckers.isRevisionSwitchEnabled()
            });
          }
        }
      });
      es(this, "handleHoverCommentChange", e => {
        let {
          hoverCommentId: i,
          type: n,
          prevHoverCommentId: o
        } = e;
        let {
          activeCommentId: r
        } = e;
        r ||= this.activeId;
        if (o && o !== r && o) {
          if (docxCommentUtils.isCommentType(n)) {
            this.removeCommentHighlight(o);
          } else {
            this.removeRevisionHighlight(o);
          }
        }
        if (i) {
          if (docxCommentUtils.isCommentType(n)) {
            this.addCommentHighlight(i);
          } else {
            this.addRevisionHighlight(i);
          }
        }
      });
    }
  }
  var docxCommentProviderNames = require("docx-comment-provider-names") /*id: 180127*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var ev = classnamesUtils;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var iconAddCommentOutlined = require("icon-add-comment-outlined") /*id: 154399*/;
  var thumbsupOutlinedIcon = require("thumbsup-outlined-icon") /*id: 376095*/;
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  let ek = styledComponentsCore.default(iconAddCommentOutlined.AddCommentOutlined)`
  color: var(--icon-n2);
  font-size: 18px;
`;
  styledComponentsCore.default(thumbsupOutlinedIcon.ThumbsUpOutlined)`
  color: var(--icon-n2);
  font-size: 18px;
`;
  styledComponentsCore.default(thumbsupOutlinedIcon.ThumbsUpOutlined)`
  color: var(--B500-FG) !important;
  font-size: 18px;
`;
  let ey = styledComponentsCore.default.div`
  position: absolute;
`;
  styledComponentsCore.default.div`
  box-shadow: var(--shadow-md-down);
  border-radius: 8px;
`;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var uiActionConstants = require("ui-action-constants") /*id: 824909*/;
  var docBlockEventTracker = require("doc-block-event-tracker") /*id: 497225*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var translationSelectionUtils = require("translation-selection-utils") /*id: 632706*/;
  var contentCommentTypes = require("content-comment-types") /*id: 900376*/;
  var eB = e => {
    let [i, n] = reactCoreLibraryReexport.useState(false);
    let o = offlineStatusSelectorsUtils.useSelectDocxOfflineDisabled();
    let l = reactCoreLibraryReexport.useCallback(() => {
      if (o || !e.targetBlockId) {
        return;
      }
      let i = e.blockManager.getBlockViewByBlockIdNotCheck(e.targetBlockId);
      if (i) {
        if (editorTextBlockUtilities.isEditorInstance(i)) {
          let {
            length: n
          } = i.model.zoneState.getModelText();
          let o = [{
            id: e.targetBlockId,
            type: docxBlockSelectionHandler_1.blockTypes.TEXT,
            selection: {
              start: 0,
              end: n - 1
            }
          }];
          let r = translationSelectionUtils.adjustSelectionForTranslation(o, e.blockManager);
          e.comment.handleCreateDocComment({
            type: contentCommentTypes.CommentType.ContentComment,
            selectedBlocks: r
          });
        } else {
          e.comment.handleCreateDocComment({
            type: contentCommentTypes.CommentType.ContentComment,
            selectedBlocks: [{
              id: e.targetBlockId,
              type: docxBlockSelectionHandler_1.blockTypes.BLOCK
            }]
          });
        }
        e.onHide();
        docBlockEventTracker.handleBlockClick(uiActionConstants.actionIdentifiers.comment, i, e.blockManager, {
          triggerType: docBlockConstants.selectionModes.HOVER_RIGHT
        });
      }
    }, [e.targetBlockId, e.blockManager, e.comment, e.onHide, o]);
    let a = reactCoreLibraryReexport.useCallback(() => {
      n(true);
      e.onButtonMouseEnter();
    }, [e.onButtonMouseEnter]);
    let s = reactCoreLibraryReexport.useCallback(() => {
      n(false);
      e.onButtonMouseLeave();
    }, [e.onButtonMouseLeave]);
    let c = o ? offlineStatusSelectorsUtils.featureUnavailableOfflineToast : t("CreationDoc_DocX_MenuOption_Comment");
    let h = o ? {} : {
      visible: i && e.visible
    };
    return reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
      ...h,
      title: c,
      placement: "bottom",
      wrapDisabledChildren: true,
      children: reactJsxRuntimeCoreReexport.jsx("span", {
        onMouseEnter: a,
        onMouseLeave: s,
        children: reactJsxRuntimeCoreReexport.jsx("button", {
          type: "button",
          className: ev("comment-btn", {
            "comment-btn-disabled": o
          }),
          onClick: l,
          children: reactJsxRuntimeCoreReexport.jsx(ek, {})
        })
      })
    });
  };
  var screenWidthObserverHook = require("screen-width-observer-hook") /*id: 741639*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var docxDragDropConstants = require("docx-drag-drop-constants") /*id: 253882*/;
  var eventTypeConstants = require("event-type-constants") /*id: 561150*/;
  var syncedBlockReferenceUtils = require("synced-block-reference-utils") /*id: 279191*/;
  var docEditorPanelStatusManager = require("doc-editor-panel-status-manager") /*id: 301349*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  let ex = "suspension-block";
  let ej = "comment-hl-hover";
  let ez = "ignore-comment-hl";
  class eL extends editorContextFacade.EditorContextFacade {
    getWrapper(e) {
      return i => {
        let [n, o] = reactCoreLibraryReexport.useState(false);
        let [l, a] = reactCoreLibraryReexport.useState(false);
        let [s, c] = reactCoreLibraryReexport.useState(0);
        let d = reactCoreLibraryReexport.useRef(false);
        let [h, u] = reactCoreLibraryReexport.useState(null);
        let m = reactCoreLibraryReexport.useRef(null);
        let {
          isNarrowScreen: g
        } = screenWidthObserverHook.useScreenWidthObserver();
        let p = this.blockManager.editorAPI.getService(flowCommentServiceToken.commentServiceToken, {
          optional: true
        });
        let b = !!this.blockManager.editorAPI.config.get("commentable");
        let [k, y] = reactCoreLibraryReexport.useState(false);
        let [C, S] = reactCoreLibraryReexport.useState(false);
        let [I, w] = reactCoreLibraryReexport.useState("");
        let M = reactCoreLibraryReexport.useRef(null);
        let R = reactCoreLibraryReexport.useCallback(e => {
          let i = null;
          if (e == null ? undefined : e.isRoot) {
            i = e.hostElement.querySelector(".page-block-content .text-editor");
          } else {
            i = (e == null ? undefined : e.hostElement.querySelector(".text-editor")) ?? null;
          }
          return i;
        }, []);
        let E = reactCoreLibraryReexport.useCallback(e => {
          e.forEach(e => {
            let i = this.blockManager.getBlockViewByBlockIdNotCheck(e);
            if (i == null ? undefined : i.isTextBlock) {
              if (i != null) {
                i.hostElement.classList.add(ex);
              }
              let e = R(i);
              let n = e == null ? undefined : e.querySelectorAll(`span:not(.inline-component-user):not(.todo-line-through span):not(.${ez}):not(.${ez} span), a`);
              if (n) {
                d.current = true;
                n.forEach(e => {
                  e.classList.add(ej);
                });
                return;
              }
            }
          });
        }, []);
        let B = reactCoreLibraryReexport.useCallback(() => {
          if (h) {
            d.current = true;
            E(translationSelectionUtils.expandSelectionToRecordGroup(h, this.blockManager));
          }
        }, [h]);
        let T = reactCoreLibraryReexport.useCallback(e => {
          e.forEach(e => {
            let i = this.blockManager.getBlockViewByBlockIdNotCheck(e);
            if (i != null) {
              i.hostElement.classList.remove(ex);
            }
            let n = R(i);
            let o = n == null ? undefined : n.querySelectorAll("span, a");
            if (o) {
              o.forEach(e => {
                e.classList.remove(ej);
              });
            }
          });
        }, []);
        let P = reactCoreLibraryReexport.useCallback(e => {
          T(translationSelectionUtils.expandSelectionToRecordGroup(e, this.blockManager));
        }, []);
        let D = reactCoreLibraryReexport.useCallback(() => {
          if (!isNullishCheck.isNil(h)) {
            P(h);
          }
          d.current = false;
        }, [h, P]);
        reactCoreLibraryReexport.useEffect(() => {
          if (!M.current) {
            M.current = h;
            return;
          }
          P(M.current);
          M.current = h;
        }, [h, P]);
        let _ = () => {
          o(false);
          this.selectionAPI.removeAllSelection();
        };
        let O = reactCoreLibraryReexport.useMemo(() => debounceUtilWrapper.createDebounce(e => {
          if (!m.current || d.current) {
            return;
          }
          if (I === "down" || k || C) {
            o(false);
            return;
          }
          let {
            clientX: n,
            clientY: r
          } = e;
          let l = docCommentUtils.findBlockByCoords([i.blockId], this.blockManager, this.rect, r);
          if (l === undefined) {
            o(false);
            return;
          }
          let a = this.blockManager.getBlockViewByBlockIdNotCheck(l);
          if (!a) {
            return;
          }
          let {
            shouldShowBtn: s
          } = docCommentUtils.getCommentBtnState(a, this.blockManager, this.comment);
          if (!s) {
            o(false);
            return;
          }
          let {
            left: h,
            width: v,
            top: f,
            height: g
          } = (() => {
            let e = (a.blockContentElement || a.hostElement).getBoundingClientRect();
            if (a.isRoot) {
              var i;
              let n = (i = a.blockContentElement) === null || i === undefined ? undefined : i.querySelector(".ace-line span");
              if (n) {
                let i = n.getBoundingClientRect();
                return {
                  left: e.left,
                  width: e.width,
                  top: i.top,
                  height: e.bottom - i.top
                };
              }
            }
            return e;
          })();
          if (n > h + v - 100 && n < h + v + 100 && r <= f + g && r >= f) {
            let {
              top: e
            } = m.current.getBoundingClientRect();
            u(l);
            o(true);
            c(f - e);
          } else {
            o(false);
          }
        }, 100, {
          leading: false
        }), [d, i.blockId, k, C, I]);
        let N = reactCoreLibraryReexport.useCallback(e => {
          a(e);
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          let e = i.hostElementRef.current;
          if (e) {
            e.addEventListener("mousemove", O);
            return () => {
              O.cancel();
              e.removeEventListener("mousemove", O);
            };
          }
        }, [i.hostElementRef, O]);
        let F = reactCoreLibraryReexport.useCallback(e => {
          let i = docxEditorBlockMetadataUtils.getThrottledBlockPath(e, this.blockManager);
          docBlockEventTracker.collectBlockView(docBlockConstants.selectionModes.HOVER_RIGHT, i, this.blockManager);
        }, []);
        let x = () => {
          w("down");
        };
        let j = () => {
          w("up");
        };
        reactCoreLibraryReexport.useEffect(() => {
          document.addEventListener("mousedown", x);
          document.addEventListener("mouseup", j);
          return () => {
            document.removeEventListener("mousedown", x);
            document.removeEventListener("mouseup", j);
          };
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          if (n && h) {
            F(h);
          }
          let e = h && this.blockManager.getBlockViewByBlockIdNotCheck(h) || null;
          docEditorPanelStatusManager.editorPanelStateManager.setPanelStatus(editorUiComponentConstants.uiComponentTypes.SuspensionComment, n, this.blockManager, e);
        }, [n, h]);
        reactCoreLibraryReexport.useEffect(() => {
          this.blockManager.addListener(docxDragDropConstants.dragStatusEvent, N);
          this.selectionAPI.on(eventTypeConstants.selectionEvents.selectingTapMove, N);
          this.selectionAPI.on(eventTypeConstants.selectionEvents.selectingTapStop, N);
          return () => {
            this.blockManager.removeListener(docxDragDropConstants.dragStatusEvent, N);
            this.selectionAPI.off(eventTypeConstants.selectionEvents.selectingTapMove, N);
            this.selectionAPI.off(eventTypeConstants.selectionEvents.selectingTapStop, N);
          };
        }, [N]);
        let z = reactCoreLibraryReexport.useCallback((e, i, n) => {
          if (e === editorUiComponentConstants.uiComponentTypes.SuspensionComment && n !== this.blockManager && i) {
            o(false);
          }
          if (e === editorUiComponentConstants.uiComponentTypes.TextualToolbar) {
            if (i) {
              O.cancel();
              o(false);
            }
            y(i);
          }
          if (e === editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar) {
            if (i) {
              O.cancel();
              o(false);
            }
            S(i);
          }
        }, []);
        let L = reactFunctionMemoHook.useMemoizedCallback(() => {
          if (!isNullishCheck.isNil(h) && !this.blockManager.layoutManager.getViewportBlocks().includes(h)) {
            o(false);
          }
        });
        reactCoreLibraryReexport.useEffect(() => {
          let e = this.blockManager.editorAPI.config.editableChange$.subscribe(() => o(false));
          let i = this.blockManager.viewService.blockViewUnmount$.subscribe(L);
          return () => {
            e.unsubscribe();
            i.unsubscribe();
          };
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          docEditorPanelStatusManager.editorPanelStateManager.onPanelStatusChange(z, [editorUiComponentConstants.uiComponentTypes.SuspensionComment, editorUiComponentConstants.uiComponentTypes.TextualToolbar, editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar]);
          return () => {
            docEditorPanelStatusManager.editorPanelStateManager.offPanelStatusChange(z, [editorUiComponentConstants.uiComponentTypes.SuspensionComment, editorUiComponentConstants.uiComponentTypes.TextualToolbar, editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar]);
          };
        }, [z]);
        let Z = reactCoreLibraryReexport.useMemo(() => ({
          visible: n,
          targetBlockId: h,
          blockManager: this.blockManager,
          selectionAPI: this.selectionAPI,
          comment: p,
          onHide: _,
          onButtonMouseEnter: B,
          onButtonMouseLeave: D
        }), [n, h, _, B, D, p]);
        let H = reactCoreLibraryReexport.useMemo(() => ({
          display: b && n ? "flex" : "none",
          top: s
        }), [b, n, s]);
        let $ = h && syncedBlockReferenceUtils.getSyncRefBlockType(h, this.blockManager);
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: ev(editorUiConstants.layerPopupClass, "suspension-comment-area", $),
            ref: m,
            style: {
              display: l || g || docComponentFeatureFlags.isContentMarginOn() ? "none" : "block"
            },
            children: reactJsxRuntimeCoreReexport.jsx(ey, {
              style: H,
              children: reactJsxRuntimeCoreReexport.jsx(eB, {
                ...Z
              })
            })
          }), reactJsxRuntimeCoreReexport.jsx(e, {
            ...i
          })]
        });
      };
    }
  }
  function eZ() {
    docxEditorCore.registerViewExt(docxCommentProviderNames.blockComment, g);
    docxEditorCore.registerViewExt(docxCommentProviderNames.commentInteraction, ec);
    docxEditorCore.registerViewExt(docxCommentProviderNames.suspensionComment, eL);
  }
  require.d(exports, {
    registerCommentExtensions: function () {
      return eZ;
    }
  });
}