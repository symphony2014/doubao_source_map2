// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'scrollStrategy'
// - Renamed export 'Z' to 'CommentScroller'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable-revision_resource.9a7282fa.js
         * chunkId: 57653
         * moduleId: 832480
         */
module.exports = function (module, exports, require) {
  var n;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var pageElementUtils = require("page-element-utils") /*id: 117264*/;
  var docxViewStateUtil = require("docx-view-state-util") /*id: 596609*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var docScrollEventManager = require("doc-scroll-event-manager") /*id: 361839*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxTableStickyUtils = require("docx-table-sticky-utils") /*id: 289191*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var collaborationRecordBlockLoader = require("collaboration-record-block-loader") /*id: 561102*/;
  var editorSelectionWidthCalc = require("editor-selection-width-calc") /*id: 837526*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var docxCommentFeatureFlags = require("docx-comment-feature-flags") /*id: 662786*/;
  var commentEventConstants = require("comment-event-constants") /*id: 616817*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  function k(e, i, o) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var n = o.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = o;
    }
    return e;
  }
  let B = debugLoggerFactory.createDebugLogger("comment:scroller");
  let M = [docBlockTypeConstants.blockTypeConstants.CODE];
  let P = [docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE];
  (n = {})[n.Upward = 0] = "Upward";
  n[n.Viewport = 1] = "Viewport";
  n[n.MinimizeScroll = 2] = "MinimizeScroll";
  let w = n;
  exports.CommentScroller = class {
    get isNeedAjustScroll() {
      return !!this.activeCommentPosChangeSub;
    }
    getCommentPositionInfo(e, i, o) {
      let n = this.commentModule.getPositionByCommentId(e, false, o);
      if (!n || docxCommentUtils.isCommentRevision(this.commentModule) && docxCommentFeatureFlags.isMobileCommentRelationEnabled() && this.commentModule.getIsFakePos(n)) {
        return;
      }
      let {
        height: r = 0,
        headerHeight: l
      } = n;
      let s = n.top;
      if (docxCommentUtils.isCommentRevision(this.commentModule) && this.commentModule.syncedBlockCommentManager) {
        s += this.commentModule.syncedBlockCommentManager.getSyncedReferenceBlockPosition().top;
      } else {
        s += pageElementUtils.getPageMainOffset();
      }
      return {
        top: s,
        bottom: s + r,
        viewportHeight: i || 0,
        gap: 0,
        headerHeight: l
      };
    }
    checkOrscrollHorizontalCode(e) {
      let {
        block: i,
        position: o,
        onlyCheckStatus: n,
        commentId: s
      } = e;
      let {
        id: a,
        record: d
      } = i;
      let {
        type: u,
        wrap: v
      } = d.snapshot;
      if (u !== docBlockTypeConstants.blockTypeConstants.CODE || v) {
        return {
          msg: commentEventConstants.CodeScrollScenes.noNeedCodeScroll
        };
      }
      let m = this.blockManager.getBlockViewByBlockIdNotCheck(a);
      if (!m) {
        return {
          msg: commentEventConstants.CodeScrollScenes.noCodeView
        };
      }
      let g = m.realScroller;
      if (!g) {
        return {
          msg: commentEventConstants.CodeScrollScenes.noCodeScroller
        };
      }
      let f = m.isNewUI;
      if (f && s) {
        let e = docxEditorCore.getBlockModel(i);
        let n = docxCommentUtils.getCommentPositions(e, s);
        if (n) {
          let e = editorSelectionWidthCalc.getSelectionWidth(m, n);
          if (e && Math.abs(e - o.width) > 1) {
            o.width = e;
            o.right = o.left + e;
          }
        }
      }
      let p = docxViewStateUtil.hasViewState(reduxStoreInitializer.reduxStore.getState());
      let {
        scrollLeft: y
      } = g;
      let {
        rectService: C
      } = this.commentModule;
      let R = C.getBlockRect(a).left;
      let {
        left: k,
        right: B
      } = o;
      if (p) {
        k /= docBlockTypeConstants.defaultLineHeight;
        B /= docBlockTypeConstants.defaultLineHeight;
        R /= docBlockTypeConstants.defaultLineHeight;
      }
      let M = R + 71;
      let {
        clientWidth: P
      } = g;
      if (f) {
        P -= 71;
      }
      let w = -(k = Math.round(k - M));
      let T = (B = Math.round(B - M)) - P;
      let E = e => {
        if (n) {
          return {
            msg: commentEventConstants.CodeScrollScenes.calcScrollLeft,
            diff: e - y
          };
        }
        g.scrollLeft = e;
      };
      if (w > 0 && T < 0) {
        return E(y - Math.min(w, Math.abs(T)));
      } else if (T > 0 && w < 0) {
        return E(y + Math.min(T, Math.abs(w)));
      } else {
        return {
          msg: commentEventConstants.CodeScrollScenes.noNeedCodeScroll
        };
      }
    }
    fixHorizontalScroll(e, i) {
      let o = this.commentModule.getBlockModelsByCommentId(e);
      let n = this.commentModule.getPositionByCommentId(e, false) || null;
      if (o.length) {
        B("fixHorizontalScroll: commentId=%s, blockId=%s, position=%o", e, o[0].id, n);
        this.scrollHorizontal(o[0].struct, n, {
          ...i,
          commentId: e
        });
        let r = this.getSubCommentScroller(e);
        if (r) {
          r.fixHorizontalScroll(e, i);
        }
      }
    }
    async waitForCommentRendered(e) {
      if (docxCommentUtils.isCommentRevision(this.commentModule) && this.commentModule.isThirdPartyTypeComment(e)) {
        return new Promise(i => {
          let o;
          let n = docxCommentUtils.isCommentRevision(this.commentModule) && this.commentModule.getRecordIdByCommentRelation(e);
          if (!n) {
            [n] = this.commentModule.getRecordsByCommentId(e);
          }
          let r = setTimeout(() => {
            if (o != null) {
              o.unsubscribe();
            }
            if (r) {
              clearTimeout(r);
            }
            i(false);
          }, 12000);
          let l = () => {
            if (n && docxCommentUtils.isCommentRevision(this.commentModule) && this.commentModule.isThirdPartyCommentRendered(n, e)) {
              if (o != null) {
                o.unsubscribe();
              }
              if (r) {
                clearTimeout(r);
              }
              setTimeout(() => {
                i(true);
              }, 600);
            }
          };
          l();
          if (docxCommentUtils.isCommentRevision(this.commentModule)) {
            o = this.commentModule.getEventsService().commentPositionChange$.subscribe(() => l());
          }
        });
      } else {
        return Promise.resolve(true);
      }
    }
    async waitForBlockRendered(e, i) {
      await this.blockManager.editorAPI.viewService.waitForBlockViewReady(e, {
        timeout: 6000
      });
      if (i && docxCommentFeatureFlags.isMobileCommentRelationEnabled() && !browserEnvironmentDetectionUtils.browserDetector.isMobile && docxCommentUtils.isCommentRevision(this.commentModule)) {
        await this.waitForCommentRendered(i);
      }
    }
    async checkAndScrollToCommentRecord(e) {
      let {
        commentId: i,
        recordId: o,
        trustedLastestRelation: n,
        checkActiveComment: r
      } = e;
      if (docxCommentUtils.isCommentRevision(this.commentModule) && !this.blockManager.hasRecordByRecordId(o)) {
        let e = this.commentModule.getDocxRelationVersionByCommentId(i, n);
        if (e) {
          await this.waitForBlockReady(o, {
            version: e
          });
        }
      }
      if (!r || !this.commentModule.activeCommentId) {
        return this.viewport.scrollToRecord(o);
      }
    }
    async scrollToComment(e, i, o) {
      let {
        context: n
      } = o || {};
      let r = this.commentModule.getPositionByCommentId(e, false);
      if (!r) {
        return;
      }
      B("%s.scrollToComment: %s", i, e);
      let {
        collectMonitorEvent: l
      } = this.commentModule.eventCollector;
      if (docxCommentUtils.isCommentRevision(this.commentModule) && this.commentModule.getIsFakePos(r)) {
        l(docxCommentConstants.commentScrollEvents.FAKE_POS_COMMENT, {
          comment_id: e,
          msg: "scroll to fake pos comment"
        });
      }
      if (this.getShouldScrollContentToComment(n)) {
        try {
          await this.renderCommentContent(e, o);
          let i = this.getCommentPositionBlockId(e);
          if (i) {
            this.blockManager.layoutManager.setAnchorNode(i);
          }
          setTimeout(() => {
            this.scrollContext = undefined;
            this.clearActiveCommentListen();
          });
        } catch (e) {
          this.scrollContext = undefined;
          this.clearActiveCommentListen();
          return;
        }
      } else {
        await this.scrollToCommentBlock(e, o);
      }
      return this.preciseScrollToComment(e, i, o);
    }
    preciseScrollToComment(e, i, o) {
      var n;
      var l;
      var s;
      B("%s.preciseScrollToComment: %s", i, e);
      let {
        innerHeight: a,
        callSource: c
      } = o || {};
      let d = commentEventConstants.ActiveItemState.activeComment !== c && commentEventConstants.ActiveItemState.activeRevision !== c;
      let u = this.getCommentPositionInfo(e, a, {
        useRectCache: d,
        calculateRectSource: c
      });
      if (!u) {
        return;
      }
      let {
        top: h,
        bottom: v,
        viewportHeight: m,
        gap: g
      } = u;
      let f = this.scrollTop;
      let p = ((o == null ? undefined : o.overrideStrategy) ?? this.strategy) === w.MinimizeScroll;
      let b = Math.max(0, this.calcScrollTop({
        top: h,
        bottom: v,
        viewportHeight: m,
        gap: g,
        panelTop: o == null ? undefined : o.panelTop,
        overrideStrategy: o == null ? undefined : o.overrideStrategy,
        scrollY: f
      }));
      if ((n = this.activeCommentPosChangeSub) !== null && n !== undefined) {
        n.unsubscribe();
      }
      if (Math.abs(b - this.scrollTop) < 0.5) {
        return this.fixHorizontalScroll(e);
      } else {
        if (o != null && (l = o.beforeScroll) !== null && l !== undefined) {
          l.call(o);
        }
        if ((s = this.commentModule.vcPosition) !== null && s !== undefined) {
          s.disableNextSendPosition();
        }
        return new Promise(i => {
          this.waitToScroll(b, () => {
            this.fixHorizontalScroll(e);
            i();
          }, p);
        });
      }
    }
    waitForTextualBlockLineRendered(e, i) {
      let n = this.blockManager.getBlockModelByBlockIdNotCheck(e);
      if (!n || !editorTextBlockUtilities.isTextBlock(n) || !n.virtualListModule?.isEnabled) {
        return;
      }
      let {
        zoneState: r
      } = n;
      let l = docxCommentUtils.getCommentsWithoutHighlight(i) ? docxCommentUtils.getClientCommentId(i) : docxCommentUtils.getCommentIdPrefix(i);
      let s = null;
      let a = r.getEntities([[l, "true"]]);
      if (a.length > 0) {
        s = a[0].start.line;
      }
      if (s !== null) {
        return async () => {
          if (s !== null && n.virtualListModule?.isEnabled && !n.virtualListModule.isLineInViewport(s)) {
            await n.virtualListModule.scrollIntoViewport(s, {
              shouldScroll: false
            });
          }
        };
      }
    }
    destroy() {}
    constructor(e, i, o, n) {
      var r = this;
      this.commentModule = e;
      this.blockManager = i;
      this.viewport = o;
      this.scrollerElement = n;
      k(this, "strategy", undefined);
      k(this, "waitRenderTimeout", undefined);
      k(this, "activeCommentPosChangeSub", undefined);
      k(this, "viewportLockTopSub", undefined);
      k(this, "scrollContext", undefined);
      k(this, "lastScrollTop", 0);
      k(this, "scrollHorizontal", (e, i, o) => {
        if (e && i) {
          if (!this.checkOrscrollHorizontalCode({
            position: i,
            block: e,
            commentId: o == null ? undefined : o.commentId
          }) && (o == null ? undefined : o.commentId)) {
            i = this.commentModule.getPositionByCommentId(o.commentId, false, {
              useRectCache: false
            }) || i;
          }
          docxTableLayoutUtils.scrollTableHorizontal(this.blockManager, e.id, i, docScrollEventManager.ScrollEventTypes.COMMENT_SCROLL, 0, o);
        }
      });
      k(this, "checkScrollHorizontalStatus", e => {
        let i = this.commentModule.getPositionByCommentId(e, false, {
          useRectCache: false
        });
        if (!i) {
          return {
            err: "check horizontal: no position",
            horizontalDiff: 999
          };
        }
        let {
          blockId: o
        } = i;
        let n = this.blockManager.getBlockStructByBlockId(o);
        if (!n) {
          return {
            err: `check horizontal: no block id=${o}`,
            horizontalDiff: 999
          };
        }
        let r = docxTableLayoutUtils.scrollTableHorizontal(this.blockManager, o, i, docScrollEventManager.ScrollEventTypes.COMMENT_SCROLL, 0, {
          onlyCheckStatus: true
        });
        if (r) {
          let {
            msg: e,
            diff: i
          } = r;
          if (e && ![tableLayoutConstants.tableStatusCodes.noClosestTable, tableLayoutConstants.tableStatusCodes.goToNewScroll].includes(e) && (e !== tableLayoutConstants.tableStatusCodes.calcDistance || i !== 0)) {
            return {
              err: `check horizontal: table msg =${e}`,
              horizontalScroller: docBlockTypeConstants.blockTypeConstants.TABLE,
              horizontalDiff: i ?? 999
            };
          }
        }
        let l = this.checkOrscrollHorizontalCode({
          block: n,
          position: i,
          onlyCheckStatus: true
        });
        if (l) {
          let {
            msg: e,
            diff: i
          } = l;
          if (e && e !== commentEventConstants.CodeScrollScenes.noNeedCodeScroll) {
            return {
              err: `check horizontal: code msg =${e}`,
              horizontalScroller: docBlockTypeConstants.blockTypeConstants.CODE,
              horizontalDiff: i ?? 999
            };
          }
        }
      });
      k(this, "getSubCommentScroller", e => {
        var i;
        var o;
        let r = this.commentModule.getBlockModelsByCommentId(e);
        if (r[0] && (!docxCommentUtils.isCommentRevision(this.commentModule) || !this.commentModule.isSyncedReferenceBlock) && docxCommentUtils.getCommentTopPosition(r[0]) && ((i = (o = this.commentModule).isThirdPartyTypeComment) === null || i === undefined ? undefined : i.call(o, e))) {
          return r[0].innerCommentModule?.commentScroller;
        }
      });
      k(this, "calcScrollTop", e => {
        let {
          top: i,
          bottom: o,
          viewportHeight: n,
          panelTop: r,
          overrideStrategy: l,
          gap: s,
          scrollY: a = this.scrollTop
        } = e;
        if (r != null) {
          return i - r;
        }
        let c = l ?? this.strategy;
        if (c === w.MinimizeScroll) {
          if (a + n - i < 92) {
            return i - n + 92;
          } else if (i - s < a) {
            return i - s;
          } else {
            return a;
          }
        }
        i -= s;
        let d = (o += s) - i;
        let u = i < a;
        let h = o > a + n;
        if (d > n || u) {
          return i;
        } else if (h) {
          if (c === w.Viewport) {
            return o - n;
          } else {
            return i;
          }
        } else {
          return a;
        }
      });
      k(this, "getIsBlockInViewport", e => this.blockManager.rootBlockId === e || !!docxTableStickyUtils.getStickyBlockInfo({
        blockId: e,
        blockManager: this.blockManager,
        isBlockInViewport: this.blockManager.layoutManager.isBlockInViewport
      }).isInStickyTable || this.viewport.isBlockInViewport(e));
      k(this, "checkWaitForBlockRendered", (e, i) => {
        let o = this.blockManager.getRecordByBlockId(e);
        return o != null && !!o.snapshot.type && (!!docxCommentFeatureFlags.isMobileCommentRelationEnabled() && !!i && !!P.includes(o.snapshot.type) || !!M.includes(o.snapshot.type) && !this.blockManager.editorAPI.viewService.isBlockViewReady(e));
      });
      k(this, "forceContentRendered", async e => {
        let {
          blockId: i,
          commentId: o,
          needCheckComment: n,
          forceShowFoldedBlock: r
        } = e;
        let l = n ? o : undefined;
        if (i && this.checkWaitForBlockRendered(i, l)) {
          await this.waitForBlockRendered(i, l);
        }
        await this.waitForContentReady({
          blockId: i,
          commentId: o,
          forceShowFoldedBlock: r
        });
      });
      k(this, "waitForContentReady", async e => {
        let {
          blockId: i,
          commentId: o,
          forceShowFoldedBlock: n
        } = e;
        let r = this.waitForTextualBlockLineRendered(i, o);
        if (r) {
          await r();
        }
        let l = this.blockManager.getBlockModelByBlockIdNotCheck(i);
        if ((l == null ? undefined : l.type) === docBlockTypeConstants.blockTypeConstants.CODE) {
          let e = docxCommentUtils.getCommentPositions(l, o, docxCommentUtils.getCommentsWithoutHighlight(o));
          if (!e) {
            return;
          }
          let r = this.blockManager.getBlockViewByBlockIdNotCheck(i);
          if (r) {
            let {
              codeFoldService: a,
              codeResizeService: c
            } = r;
            if (n) {
              var s;
              await ((s = r.waitFoldInitialized) === null || s === undefined ? undefined : s.call(r));
              this.expandCodeFoldedLines(i, o);
              if (l != null) {
                l.id;
              }
              docxBlockSelectionHandler_1.blockTypes.TEXT;
              e[0];
              e[1];
              await (a == null ? undefined : a.forceShowFoldedCodeBlock(i, this.blockManager.editable));
            }
            await (c == null ? undefined : c.scrollIntoView(i, e));
          }
        }
      });
      k(this, "getCommentPositionBlockId", e => {
        let i = this.getSubCommentScroller(e);
        if (i) {
          var o;
          if ((o = i.getCommentPositionBlockId) === null || o === undefined) {
            return undefined;
          } else {
            return o.call(i, e);
          }
        }
        let n = this.commentModule.getPositionByCommentId(e);
        if (n == null) {
          return undefined;
        } else {
          return n.blockId;
        }
      });
      k(this, "waitForBlockReady", async function (e, i = {}) {
        let {
          collectEvent: o
        } = r.commentModule.eventCollector;
        try {
          let n = await collaborationRecordBlockLoader.loadRecordAndBlock(e, r.blockManager, i);
          if (n) {
            if (o != null) {
              o(docxCommentConstants.commentActionEvents.exception, {
                record_id: e,
                action: "waitForBlockReady",
                error: n
              });
            }
            return Promise.reject(Error(`[CommentScroller] waitForBlockReady: ${n}`));
          }
          return Promise.resolve();
        } catch (i) {
          if (o != null) {
            o(docxCommentConstants.commentActionEvents.exception, {
              record_id: e,
              action: "waitForBlockReadyCatchErr",
              error: i
            });
          }
          return Promise.reject(Error(`[CommentScroller] waitForBlockReady catch: ${i}`));
        }
      });
      k(this, "formatBlockIdOnFakePosition", async (e, i) => {
        if (!docxCommentUtils.isCommentRevision(this.commentModule) || !this.commentModule.getIsFakePos(i)) {
          return i.blockId;
        }
        let [o] = this.commentModule.getRecordsByCommentId(e) || [];
        if (!o) {
          return i.blockId;
        }
        let [n] = this.blockManager.getBlockIdsByRecordId(o);
        if (n) {
          return n;
        }
        let r = this.commentModule.getDocxRelationVersionByCommentId(e);
        await this.waitForBlockReady(o, {
          version: r
        });
        if (n = this.blockManager.getBlockIdsByRecordId(o)[0]) {
          return n;
        } else {
          return i.blockId;
        }
      });
      k(this, "scrollToTop", e => {
        let i = this.blockManager.layoutManager.getContentAboveRootHeight();
        this.blockManager.layoutManager.getViewportHelper().setScrollTop(e - i, {
          force: true,
          updateViewport: true
        });
      });
      k(this, "scrollContentToFixedComment", () => {
        if (!this.commentModule.activeCommentId || !docxCommentUtils.isCommentRevision(this.commentModule)) {
          this.clearActiveCommentListen();
          return;
        }
        let {
          cardOffsetTop: e,
          activeCommentId: i
        } = this.scrollContext || {};
        if (!e || !i || this.commentModule.activeCommentId !== i) {
          this.clearActiveCommentListen();
          return;
        }
        let o = this.commentModule.getPositionByCommentId(this.commentModule.activeCommentId);
        if (!o || this.commentModule.getIsFakePos(o)) {
          this.clearActiveCommentListen();
          return;
        }
        if (Math.abs(o.top - this.scrollTop - e) < 5) {
          return;
        }
        let n = o.top - e;
        this.lastScrollTop = n;
        this.scrollToTop(n);
      });
      k(this, "beforeScrollToCommentBlock", async function (e, i, o = false) {
        let n = r.commentModule.getPositionByCommentId(e, false);
        if (!n) {
          return;
        }
        if (o) {
          let o = r.getSubCommentScroller(e);
          if (o) {
            await o.scrollToCommentBlock(e, i);
            return;
          }
        }
        let {
          blockId: l
        } = n;
        if (docxCommentFeatureFlags.isMobileCommentRelationEnabled()) {
          l = await r.formatBlockIdOnFakePosition(e, n);
        }
        let {
          forceShowFoldedBlock: s = true
        } = i || {};
        if (!s) {
          let [i] = r.commentModule.getRecordsByCommentId(e) || [];
          if (i) {
            var a;
            var c;
            let [e] = r.blockManager.getBlockIdsByRecordId(i);
            let o = e && ((a = (c = r.commentModule).findFoldedByBlock) === null || a === undefined ? undefined : a.call(c, e));
            if (o) {
              l = o;
            }
          }
        }
        return {
          blockId: l,
          forceShowFoldedBlock: s
        };
      });
      k(this, "scrollToCommentBlock", async (e, i) => {
        let o = await this.beforeScrollToCommentBlock(e, i, true);
        if (!o) {
          return;
        }
        let {
          blockId: n,
          forceShowFoldedBlock: r
        } = o;
        if (this.getIsBlockInViewport(n)) {
          await this.viewport.scrollToBlock(n, () => new Promise(e => e()), true);
        } else {
          await this.viewport.scrollToBlock(n, undefined, true);
        }
        await this.forceContentRendered({
          blockId: n,
          commentId: e,
          forceShowFoldedBlock: r,
          needCheckComment: false
        });
      });
      k(this, "renderCommentContent", async (e, i) => {
        let o = await this.beforeScrollToCommentBlock(e, i, false);
        if (!o) {
          return;
        }
        let {
          blockId: n,
          forceShowFoldedBlock: r
        } = o;
        await this.viewport.scrollToBlock(n, () => new Promise(e => e()), true);
        await this.forceContentRendered({
          blockId: n,
          commentId: e,
          forceShowFoldedBlock: r,
          needCheckComment: true
        });
        let l = this.getSubCommentScroller(e);
        if (l) {
          await l.scrollToCommentBlock(e, i);
          return;
        }
      });
      k(this, "expandCodeFoldedLines", (e, i) => {
        let o = this.blockManager.getBlockViewByBlockIdNotCheck(e);
        if (o && o.type === docBlockTypeConstants.blockTypeConstants.CODE && (o == null ? undefined : o.codeFoldService)) {
          let e = `${docxCommentConstants.commentIdPrefix}${i}`;
          o.codeFoldService.forceShowCollapsedLinesByAttributes(o.id, e, !this.blockManager.editable);
        }
      });
      k(this, "clearActiveCommentListen", () => {
        var e;
        var i;
        this.scrollContext = undefined;
        if ((e = this.activeCommentPosChangeSub) !== null && e !== undefined) {
          e.unsubscribe();
        }
        this.activeCommentPosChangeSub = undefined;
        if ((i = this.viewportLockTopSub) !== null && i !== undefined) {
          i.unsubscribe();
        }
        this.viewportLockTopSub = undefined;
      });
      k(this, "startActiveCommentListen", e => {
        if (!this.scrollContext || (e == null ? undefined : e.activeCommentId) !== this.scrollContext?.activeCommentId) {
          this.clearActiveCommentListen();
          if (this.getShouldScrollContentToComment(e)) {
            this.scrollContext = e;
            this.scrollContentToFixedComment();
            this.viewportLockTopSub = this.blockManager.layoutManager.onSetScrollTop$.subscribe(e => {
              let {
                from: i
              } = e;
              if (i === 0 && this.isNeedAjustScroll) {
                this.scrollContentToFixedComment();
              }
            });
            this.activeCommentPosChangeSub = docxCommentUtils.isCommentRevision(this.commentModule) ? this.commentModule.getEventsService().commentPositionChange$.subscribe(i => {
              if (!this.commentModule.activeCommentId || (e == null ? undefined : e.activeCommentId) !== this.commentModule.activeCommentId || !docxCommentUtils.isCommentRevision(this.commentModule)) {
                this.clearActiveCommentListen();
                return;
              }
            }) : undefined;
          }
        }
      });
      k(this, "getShouldScrollContentToComment", e => docxCommentFeatureFlags.isMobileCommentRelationEnabled() && !browserEnvironmentDetectionUtils.browserDetector.isMobile && docxCommentUtils.isCommentRevision(this.commentModule) && (e == null ? undefined : e.activeCommentId) && (e == null ? undefined : e.cardOffsetTop) !== undefined);
    }
  };
  require.d(exports, {
    scrollStrategy: function () {
      return w;
    }
  });
}