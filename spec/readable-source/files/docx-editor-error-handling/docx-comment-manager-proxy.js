// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'DocxCommentManager'
// - Renamed export '_' to 'CommentManagerType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 755092
         */
module.exports = function (module, exports, require) {
  var n;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxCommentFeatureFlags = require("docx-comment-feature-flags") /*id: 662786*/;
  var commentEventConstants = require("comment-event-constants") /*id: 616817*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  let c = Symbol("isReady");
  let d = Symbol("readyCallbacks");
  class u {
    ready(e) {
      if (typeof e == "function") {
        return this.register(e);
      }
      this.emit(e);
    }
    register(e) {
      if (this[c]) {
        e();
      } else {
        this[d].push(e);
      }
    }
    emit(e) {
      this[c] = e !== false;
      if (this[c]) {
        this[d].splice(0, Infinity).forEach(e => e());
      }
    }
    static mixin(e) {
      if (!e) {
        return;
      }
      let i = new u();
      e.ready = e => i.ready(e);
    }
    constructor() {
      this[c] = false;
      this[d] = [];
    }
  }
  var commentPrefetchEvents = require("comment-prefetch-events") /*id: 110220*/;
  var docxCommentLoadCollector = require("docx-comment-load-collector") /*id: 720188*/;
  function g(e, i, r) {
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
  (n = {}).base = "base";
  n.pc = "pc";
  n.mobile = "mobile";
  let p = n;
  async function m() {
    return Promise.resolve().then(require.bind(require, "docx-comment-snapshot-patcher") /*id: 449931*/);
  }
  class v {
    get pageLeaveReported() {
      return this._pageLeaveReported;
    }
    get commentModuleStartLoad() {
      return this._commentModuleStartLoad;
    }
    setCommentModuleStartLoad(e) {
      this._commentModuleStartLoad = e;
    }
    get isAutoLoad() {
      return true;
    }
    get module() {
      return this._module;
    }
    setModule(e) {
      this._module = e;
    }
    get isSyncedReferenceBlock() {
      return this.options.isSyncedReferenceBlock === true;
    }
    get commentScroller() {
      var e;
      var i;
      var r;
      var n;
      var o;
      var l;
      var s;
      var c;
      var d;
      return {
        scrollTop: ((e = this.module) === null || e === undefined ? undefined : e.commentScroller.scrollTop) || 0,
        scrollerElement: (i = this.module) === null || i === undefined ? undefined : i.commentScroller.getScrollerElement(),
        startActiveCommentListen: (r = this._module) === null || r === undefined ? undefined : r.commentScroller.startActiveCommentListen,
        scrollToComment: this._scrollToComment,
        scrollToCommentBlock: this._scrollToCommentBlock,
        renderCommentContent: this._renderCommentContent,
        getShouldScrollContentToComment: (n = this.module) === null || n === undefined ? undefined : n.commentScroller.getShouldScrollContentToComment,
        scrollToBottom: this._scrollToBottom,
        calcScrollTop: (o = this.module) === null || o === undefined ? undefined : o.commentScroller.calcScrollTop,
        fixHorizontalScroll: this._fixHorizontalScroll,
        getCommentPositionInfo: (l = this.module) === null || l === undefined ? undefined : l.commentScroller.getCommentPositionInfo,
        scrollerClientHeight: ((s = this.module) === null || s === undefined ? undefined : s.commentScroller.scrollerClientHeight) || 0,
        viewport: this.module?.viewport,
        checkScrollHorizontalStatus: (c = this.module) === null || c === undefined ? undefined : c.commentScroller.checkScrollHorizontalStatus,
        getCommentPositionBlockId: (d = this.module) === null || d === undefined ? undefined : d.commentScroller.getCommentPositionBlockId
      };
    }
    once(e, i) {
      this.ready(() => {
        var r;
        if ((r = this.module) !== null && r !== undefined) {
          r.once(e, i);
        }
      });
    }
    on(e, i) {
      this.ready(() => {
        var r;
        if ((r = this.module) !== null && r !== undefined) {
          r.on(e, i);
        }
      });
    }
    off(e, i) {
      this.ready(() => {
        var r;
        if ((r = this.module) !== null && r !== undefined) {
          r.off(e, i);
        }
      });
    }
    trigger(e, i) {
      this.ready(() => {
        var r;
        if ((r = this.module) !== null && r !== undefined) {
          r.trigger(e, i);
        }
      });
    }
    setVcPosition(e) {
      this.ready(() => {
        var i;
        if ((i = this.module) !== null && i !== undefined) {
          i.setVcPosition(e);
        }
      });
    }
    activeCommentChange(e) {
      this.ready(() => {
        var i;
        if ((i = this.module) !== null && i !== undefined) {
          i.activeCommentChange(e);
        }
      });
    }
    hoverCommentChange(e) {
      this.ready(() => {
        var i;
        if ((i = this.module) !== null && i !== undefined) {
          i.hoverCommentChange(e);
        }
      });
    }
    jumpToReply(e, i) {
      this.ready(() => {
        var r;
        if ((r = this.module) !== null && r !== undefined) {
          r.jumpToReply(e, i);
        }
      });
    }
    activateComment(e, i, r, n, o, l, s, a = {}) {
      this.ready(() => {
        var c;
        if ((c = this.module) !== null && c !== undefined) {
          c.activateComment({
            commentId: e,
            replyId: i,
            from: r,
            scrollOffset: n,
            bottom: o,
            selection: l,
            type: s,
            ...a
          });
        }
      });
    }
    deactivateComment(e, i) {
      this.ready(() => {
        var r;
        if ((r = this.module) !== null && r !== undefined) {
          r.deactivateComment(e, i);
        }
      });
    }
    forceActiveCommentChange(e, i) {
      this.ready(() => {
        var r;
        if ((r = this.module) !== null && r !== undefined) {
          r.forceActiveCommentChange(e, i);
        }
      });
    }
    handleCommentChange(e, i, r = {
      type: commentEventConstants.DataSourceType.REMOTE
    }) {
      this.ready(() => {
        var n;
        if ((n = this.module) !== null && n !== undefined) {
          n.handleCommentChange(e, i, r);
        }
      });
    }
    getCommentable() {
      var e;
      return ((e = this.module) === null || e === undefined ? undefined : e.getCommentable()) || false;
    }
    getIsReady() {
      var e;
      return ((e = this.module) === null || e === undefined ? undefined : e.getIsReady()) || false;
    }
    getIsReadyToJump() {
      var e;
      return ((e = this.module) === null || e === undefined ? undefined : e.getIsReadyToJump()) || false;
    }
    calcCommentPositionByBlockId(e) {
      this.ready(() => {
        var i;
        if ((i = this.module) !== null && i !== undefined) {
          i.calcCommentPositionByBlockId(e);
        }
      });
    }
    setGlobalCommentLoaded() {
      var e;
      this.ready(() => {
        var e;
        if ((e = this.module) !== null && e !== undefined) {
          e.setGlobalCommentLoaded();
        }
      });
      docxCommentLoadCollector.collectDocxCommentLoad(commentPrefetchEvents.commentEventConstants.globalcommentLoaded, {
        is_ready: (e = this.module) === null || e === undefined ? undefined : e.getIsReady()
      });
    }
    setDocCommentLoaded() {
      var e;
      this.ready(() => {
        var e;
        if ((e = this.module) !== null && e !== undefined) {
          e.setDocCommentLoaded();
        }
      });
      docxCommentLoadCollector.collectDocxCommentLoad(commentPrefetchEvents.commentEventConstants.docCommentMounted, {
        is_ready: (e = this.module) === null || e === undefined ? undefined : e.getIsReady(),
        page_mounted: this.commentModuleStartLoad,
        page_leaved: this.pageLeaveReported
      }, true);
    }
    setPartCommentViewLoaded() {
      this.ready(() => {
        var e;
        this.isPartCommentViewReady = true;
        if ((e = this.partCommentViewLoadedResolver) !== null && e !== undefined) {
          e.call(this, true);
        }
      });
    }
    get relationChange$() {
      return this.module?.relationChange$;
    }
    get relationDataChange$() {
      return this.module?.relationDataChange$;
    }
    get eventCollector() {
      return {
        collectEvent: this._collectEvent,
        collectMonitorEvent: this._collectMonitorEvent,
        collectCommentDeleted: this._collectCommentDeleted,
        collectReactionPanelViewEvent: this._collectReactionPanelViewEvent,
        collectReactionPanelSelectEvent: this._collectReactionPanelSelectEvent
      };
    }
    getTempCommentIds() {
      var e;
      return ((e = this.module) === null || e === undefined ? undefined : e.getTempCommentIds()) || new Set();
    }
    get activeCommentId() {
      return this.module?.activeCommentId || null;
    }
    get isRecordChangeDebounceUpdated() {
      var i;
      return (i = this.module?.isRecordChangeDebounceUpdated) === null || i === undefined || i;
    }
    get disableScrollInVC() {
      if (this.module) {
        return this.module.disableScrollInVC;
      } else {
        return docxCommentUtils.getBlockRectWithCache();
      }
    }
    get isVcFollow() {
      return this.module?.isVcFollow;
    }
    get vcPosition() {
      return this.module?.vcPosition;
    }
    get blockManager() {
      return this.options.blockManager;
    }
    get selectionAPI() {
      return this.module?.selectionAPI;
    }
    get type() {
      return this.module?.type || commentEventConstants.RevisionType.comment;
    }
    get classType() {
      return p.base;
    }
    get rootRangeTop() {
      return this.module?.rootRangeTop || 0;
    }
    initSyncedReferencePermission(e) {
      this.ready(() => {
        var i;
        if ((i = this.module) !== null && i !== undefined) {
          i.initSyncedReferencePermission(e);
        }
      });
    }
    calcCommentPosition(e) {
      var i;
      return ((i = this.module) === null || i === undefined ? undefined : i.calcCommentPosition(e)) || [];
    }
    checkAndScrollToCommentRecord(e) {
      var i;
      if ((i = this.module) === null || i === undefined) {
        return undefined;
      } else {
        return i.commentScroller.checkAndScrollToCommentRecord(e);
      }
    }
    getRecordsByCommentId(e, i) {
      var r;
      if ((r = this.module) === null || r === undefined) {
        return undefined;
      } else {
        return r.getRecordsByCommentId(e, i);
      }
    }
    getCommentsByRecordId(e, i) {
      var r;
      if ((r = this.module) === null || r === undefined) {
        return undefined;
      } else {
        return r.getCommentsByRecordId(e, i);
      }
    }
    getBlockModelsByCommentId(e) {
      var i;
      return ((i = this.module) === null || i === undefined ? undefined : i.getBlockModelsByCommentId(e)) || [];
    }
    getCommentByCommentId(e, i) {
      var r;
      if ((r = this.module) === null || r === undefined) {
        return undefined;
      } else {
        return r.getCommentByCommentId(e, i);
      }
    }
    restoreCommentPositionToContentTop() {
      var e;
      if ((e = this.module) === null || e === undefined) {
        return undefined;
      } else {
        return e.restoreCommentPositionToContentTop();
      }
    }
    findTempCommentsByRecordId(e) {
      var i;
      return ((i = this.module) === null || i === undefined ? undefined : i.findTempCommentsByRecordId(e)) || [];
    }
    getCommentIsFinished(e) {
      var i;
      var r;
      return (r = (i = this.module) === null || i === undefined ? undefined : i.getCommentIsFinished(e)) === null || r === undefined || r;
    }
    getPositionByCommentId(e, i) {
      var r;
      if ((r = this.module) === null || r === undefined) {
        return undefined;
      } else {
        return r.getPositionByCommentId(e, i);
      }
    }
    getPositionList() {
      var e;
      return ((e = this.module) === null || e === undefined ? undefined : e.getPositionList()) || [];
    }
    getDocComments() {
      var e;
      let i = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      let r = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      return ((e = this.module) === null || e === undefined ? undefined : e.getDocComments(i, r)) || new Map();
    }
    getEventEmitterListeners(e) {
      var i;
      if ((i = this.module) === null || i === undefined) {
        return undefined;
      } else {
        return i.getEventEmitterListeners(e);
      }
    }
    getCommentData() {
      var e;
      if ((e = this.module) === null || e === undefined) {
        return undefined;
      } else {
        return e.getCommentData();
      }
    }
    getMetaData() {
      var e;
      if ((e = this.module) === null || e === undefined) {
        return undefined;
      } else {
        return e.getMetaData();
      }
    }
    checkValidById(e) {
      var i;
      if ((i = this.module) === null || i === undefined) {
        return undefined;
      } else {
        return i.checkValidById(e);
      }
    }
    isActiveCommentRecordExist(e) {
      var i;
      if ((i = this.module) === null || i === undefined) {
        return undefined;
      } else {
        return i.isCommentRecordExist(e);
      }
    }
    isThirdPartyComment(e, i) {
      var r;
      return ((r = this.module) === null || r === undefined ? undefined : r.isThirdPartyComment(e, i)) || false;
    }
    isThirdPartyCommentLoaded(e) {
      var i;
      return ((i = this.module) === null || i === undefined ? undefined : i.isThirdPartyCommentLoaded(e)) || false;
    }
    isThirdPartyCommentPositioned(e, i) {
      var r;
      return ((r = this.module) === null || r === undefined ? undefined : r.isThirdPartyCommentPositioned(e, i)) || false;
    }
    isThirdPartyCommentRendered(e, i) {
      var r;
      return ((r = this.module) === null || r === undefined ? undefined : r.isThirdPartyCommentRendered(e, i)) || false;
    }
    isThirdPartyBlock(e) {
      var i;
      return ((i = this.module) === null || i === undefined ? undefined : i.isThirdPartyBlock(e)) || false;
    }
    handleThirdPartyLoaded(e) {
      this.ready(() => {
        var i;
        if ((i = this.module) !== null && i !== undefined) {
          i.handleThirdPartyLoaded(e);
        }
      });
    }
    handleRemoveThirdPartyLoaded(e) {
      this.ready(() => {
        var i;
        if ((i = this.module) !== null && i !== undefined) {
          i.handleRemoveThirdPartyLoaded(e);
        }
      });
    }
    handleThirdPartyUpdated(e, i, r) {
      this.ready(() => {
        var n;
        if ((n = this.module) !== null && n !== undefined) {
          n.handleThirdPartyUpdated(e, i, r);
        }
      });
    }
    handleThirdPartyCommentDidAdd(e, i) {
      this.ready(() => {
        var r;
        if ((r = this.module) !== null && r !== undefined) {
          r.handleThirdPartyCommentDidAdd(e, i);
        }
      });
    }
    triggerStartNewDocComment(e) {
      var i;
      if ((i = this.module) !== null && i !== undefined) {
        i.triggerStartNewDocComment(e);
      }
    }
    startNewDocComment(e) {
      var i;
      if ((i = this.module) !== null && i !== undefined) {
        i.startNewDocComment(e);
      }
    }
    getCommentRect(e, i) {
      var r;
      return ((r = this.module) === null || r === undefined ? undefined : r.getCommentRect(e, i)) || null;
    }
    doScrollToComment(e) {
      var i;
      if ((i = this.module) === null || i === undefined) {
        return undefined;
      } else {
        return i.doScrollToComment(e);
      }
    }
    async scrollToWholeComment(e, i) {
      var r;
      await new Promise(e => {
        this.ready(() => {
          e(undefined);
        });
      });
      if ((r = this.module) === null || r === undefined) {
        return undefined;
      } else {
        return r.scrollToWholeComment(e, i);
      }
    }
    setCommentable(e) {
      this.ready(() => {
        var i;
        if ((i = this.module) !== null && i !== undefined) {
          i.setCommentable(e);
        }
      });
      docxCommentLoadCollector.collectDocxCommentLoad(commentPrefetchEvents.commentEventConstants.commentableChange, {
        commentable: e
      });
    }
    setCommentViewPortLock(e) {
      var i;
      if ((i = this.module) !== null && i !== undefined) {
        i.setCommentViewPortLock(e);
      }
    }
    setMixMetaData(e) {
      var i;
      if ((i = this.module) !== null && i !== undefined) {
        i.setMixMetaData(e);
      }
    }
    toggleCommentPanel(e, i) {
      var r;
      if ((r = this.module) !== null && r !== undefined) {
        r.toggleCommentPanel(e, i);
      }
    }
    handleSyncedReferenceBlockRelationChange(e, i) {
      this.ready(() => {
        var r;
        if ((r = this.module) !== null && r !== undefined) {
          r.handleSyncedReferenceBlockRelationChange(e, i);
        }
      });
    }
    getViewPort() {
      return this.options.viewport;
    }
    setSelectedBlocksForShareWords(e) {
      var i;
      if ((i = this.module) === null || i === undefined) {
        return undefined;
      } else {
        return i.setSelectedBlocksForShareWords(e);
      }
    }
    addForwardComment(e) {
      var i;
      if ((i = this.module) === null || i === undefined) {
        return undefined;
      } else {
        return i.addForwardComment(e);
      }
    }
    destroy() {
      var e;
      var i;
      if ((e = this.module) !== null && e !== undefined) {
        e.destroy();
      }
      if ((i = this.snapshotPatcher) !== null && i !== undefined) {
        i.destroy();
      }
      this.snapshotPatcher = undefined;
    }
    waitForThirdPartyLoadedToActiveCommentId(e) {
      return !this.isReady || this.module.waitForThirdPartyLoadedToActiveCommentId(e);
    }
    isScrolledToBottom() {
      var e;
      return !!((e = this.module) === null || e === undefined ? undefined : e.isScrolledToBottom());
    }
    getIsFakePos(e) {
      var i;
      if ((i = this.module) === null || i === undefined) {
        return undefined;
      } else {
        return i.getIsFakePos(e);
      }
    }
    constructor(e) {
      var i = this;
      this.options = e;
      g(this, "snapshotPatcher", undefined);
      g(this, "isReady", undefined);
      g(this, "ready", undefined);
      g(this, "_pageLeaveReported", false);
      g(this, "_commentModuleStartLoad", false);
      g(this, "_module", undefined);
      g(this, "initSnapshotPatcher", async () => {
        let e = await docxUtilityHelpers.retryWithDelay(m);
        this.snapshotPatcher = new e.CommentSnapshotPatcher({
          blockManager: this.options.blockManager,
          pageEventEmitter: this.options.pageEventEmitter
        });
        this.snapshotPatcher.init();
      });
      g(this, "_scrollToCommentBlock", (e, i) => new Promise((r, n) => {
        this.ready(() => {
          var o;
          if ((o = this.module) !== null && o !== undefined) {
            o.commentScroller.scrollToCommentBlock(e, i).then(e => r(e)).catch(e => n(e));
          }
        });
      }));
      g(this, "_renderCommentContent", (e, i) => new Promise((r, n) => {
        this.ready(() => {
          var o;
          if ((o = this.module) !== null && o !== undefined) {
            o.commentScroller.renderCommentContent(e, i).then(e => r(e)).catch(e => n(e));
          }
        });
      }));
      g(this, "_scrollToComment", (e, i, r) => new Promise((n, o) => {
        this.ready(() => {
          var l;
          if ((l = this.module) !== null && l !== undefined) {
            l.commentScroller.scrollToComment(e, i, r).then(e => n(e)).catch(e => o(e));
          }
        });
      }));
      g(this, "_scrollToBottom", () => {
        this.ready(() => {
          var e;
          if ((e = this.module) !== null && e !== undefined) {
            e.commentScroller.scrollToBottom();
          }
        });
      });
      g(this, "_fixHorizontalScroll", (e, i) => {
        this.ready(() => {
          var r;
          if ((r = this.module) !== null && r !== undefined) {
            r.commentScroller.fixHorizontalScroll(e, i);
          }
        });
      });
      g(this, "formatCommentId", e => e);
      g(this, "isPartCommentViewReady", false);
      g(this, "partCommentViewLoadedResolver", undefined);
      g(this, "partCommentViewLoadedPromise", new Promise(e => {
        this.partCommentViewLoadedResolver = e;
      }));
      g(this, "_collectEvent", (e, i, r) => {
        this.ready(() => {
          var n;
          if ((n = this.module) !== null && n !== undefined) {
            n.eventCollector.collectEvent(e, i, r);
          }
        });
      });
      g(this, "_collectMonitorEvent", (e, i, r) => {
        this.ready(() => {
          var n;
          if ((n = this.module) !== null && n !== undefined) {
            n.eventCollector.collectMonitorEvent(e, i, r);
          }
        });
      });
      g(this, "_collectCommentDeleted", e => {
        this.ready(() => {
          var i;
          if ((i = this.module) !== null && i !== undefined) {
            i.eventCollector.collectCommentDeleted(e);
          }
        });
      });
      g(this, "_collectReactionPanelViewEvent", e => {
        this.ready(() => {
          var i;
          if ((i = this.module) !== null && i !== undefined) {
            i.eventCollector.collectReactionPanelViewEvent(e);
          }
        });
      });
      g(this, "_collectReactionPanelSelectEvent", (e, i) => {
        this.ready(() => {
          var r;
          if ((r = this.module) !== null && r !== undefined) {
            r.eventCollector.collectReactionPanelSelectEvent(e, i);
          }
        });
      });
      g(this, "isThirdPartyTypeComment", e => {
        var i;
        return ((i = this.module) === null || i === undefined ? undefined : i.isThirdPartyTypeComment(e)) || false;
      });
      g(this, "setCommentsFilter", e => {
        this.ready(() => {
          var i;
          if ((i = this.module) !== null && i !== undefined) {
            i.setCommentsFilter(e);
          }
        });
      });
      g(this, "prepareCreateComment", async (e, i) => {
        await new Promise(e => {
          this.ready(() => {
            e(undefined);
          });
        });
        return this.module.prepareCreateComment(e, i);
      });
      g(this, "fixSelectedBlocks", async e => {
        await new Promise(e => {
          this.ready(() => {
            e(undefined);
          });
        });
        return this.module.fixSelectedBlocks(e);
      });
      g(this, "updateAllCommentPosition", function (e = false) {
        i.ready(() => {
          var r;
          if ((r = i.module) !== null && r !== undefined) {
            r.updateAllCommentPosition(e);
          }
        });
      });
      g(this, "startNewFirstPartyComment", e => {
        this.ready(() => {
          var i;
          if ((i = this.module) !== null && i !== undefined) {
            i.startNewFirstPartyComment(e);
          }
        });
      });
      g(this, "detectHasSelfReaction", e => !!this.module && this.module.detectHasSelfReaction(e));
      g(this, "afterThirdPartyAddApplyCommentAccepted", e => {
        this.ready(() => {
          var i;
          if ((i = this.module) !== null && i !== undefined) {
            i.afterThirdPartyAddApplyCommentAccepted(e);
          }
        });
      });
      u.mixin(this);
      docxCommentFeatureFlags.isCommentAsyncEnabled();
      this.ready(() => {
        this.isReady = true;
      });
    }
  }
  require.d(exports, {
    DocxCommentManager: function () {
      return v;
    },
    CommentManagerType: function () {
      return p;
    }
  });
}