// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VE' to 'CommentRevisionPositionManager'
// - Renamed export 'n4' to 'extractRevisionIdsFromSnapshot'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 295644
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docxRevisionActionUtils = require("docx-revision-action-utils") /*id: 741606*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  let d = e => {
    let i = [];
    if (!e) {
      return i;
    }
    if (editorTextBlockUtilities.hasTextWithApoolSimple(e)) {
      if (e.text.apool?.nextNum) {
        let {
          numToAttrib: r
        } = e.text.apool;
        for (let e of Object.keys(r)) {
          let [n] = r[e];
          if (n.startsWith("revision-id-")) {
            i.push(n.slice(12));
          }
        }
      }
    }
    let n = ((e == null ? undefined : e.revisions) || []).map(i => {
      if (!docxRevisionActionUtils.hasRevisionActions({
        revisions: [i]
      })) {
        return i.revisionId;
      }
      let {
        actions: n
      } = i.details ?? [];
      if (n.every(i => docxRevisionActionUtils.validateRevisionPath({
        snapshot: e,
        revisionAction: i
      }))) {
        return i.revisionId;
      }
    }).filter(e => e);
    if (Array.isArray(n) && n.length) {
      i.push(...n);
    }
    return [...new Set(i)];
  };
  let u = e => {
    let {
      top: n,
      blockManager: o
    } = e;
    let l = o.layoutManager.getScroller();
    let s = l instanceof HTMLElement ? l.clientHeight : (l == null ? undefined : l.innerHeight) ?? 0;
    let a = l instanceof HTMLElement ? l.scrollTop : (l == null ? undefined : l.scrollY) ?? 0;
    let c = a + s;
    return {
      inView: n > a + 54 && n < c - 200,
      scrollTop: a,
      scrollBottom: c
    };
  };
  var scrollAnimationManager = require("scroll-animation-manager") /*id: 5545*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  var commentEventConstants = require("comment-event-constants") /*id: 616817*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var editorSelectionWidthCalc = require("editor-selection-width-calc") /*id: 837526*/;
  var docxTableStickyUtils = require("docx-table-sticky-utils") /*id: 289191*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docCommentUtils = require("doc-comment-utils") /*id: 315488*/;
  var docxViewStateUtil = require("docx-view-state-util") /*id: 596609*/;
  var docxCommentBlockSelectionUtils = require("docx-comment-block-selection-utils") /*id: 67708*/;
  function C(e, i, r) {
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
  class _ {
    calcCommentRect(e, i, r) {
      let {
        blockManager: a
      } = this;
      let d = null;
      let {
        blockToPageTop: u,
        blockToViewTop: h,
        stickyHeight: f
      } = docxTableStickyUtils.getStickyMetrics({
        blockId: e,
        blockManager: a,
        isBlockInViewport: this.blockManager.layoutManager.isBlockInViewport
      });
      let p = this.fold.isShow(e);
      let m = null;
      let v = this.blockManager.getBlockModelByBlockIdNotCheck(e);
      let y = this.blockManager.getBlockViewByBlockIdNotCheck(e) ?? null;
      if (docxCommentUtils.isMobileCommentClass(y)) {
        return null;
      }
      if (v && editorTextBlockUtilities.isTextBlock(v) && p) {
        let n = docxCommentUtils.getCommentPositions(v, i, r);
        if (n) {
          let i = docxCommentUtils.getRangeRectWithCache({
            blockId: v.id,
            range: n,
            rect: this.rect
          });
          m = docxCommentBlockSelectionUtils.createCaretRectFromSelection(i, v.id);
          if (docCommentUtils.isCodeBlock(v)) {
            let i = docxCommentUtils.logRectCacheMiss({
              blockId: e,
              rect: this.rect
            });
            let r = (i == null ? undefined : i.top) ?? 0;
            let n = (i == null ? undefined : i.bottom) ?? 0;
            let a = (m == null ? undefined : m.top) ?? 0;
            m.top = Math.max(Math.min(a, n), r + 40);
          }
        } else {
          m = {
            ...docxCommentUtils.logRectCacheMiss({
              blockId: e,
              rect: this.rect
            }),
            blockId: e
          };
        }
      } else {
        m = {
          ...docxCommentBlockSelectionUtils.m0(e, this.fold, this.rect, a).blockRect,
          blockId: e
        };
        let i = v && docxCommentUtils.isInVC(v.type);
        if (m && i) {
          m = {
            ...m
          };
          Object.keys(i).forEach(e => {
            if (m) {
              m[e] += i[e] ?? 0;
            }
          });
        }
      }
      if (m) {
        d = {
          ...m,
          visible: p
        };
      }
      if (d !== null) {
        if (u !== null && h !== null) {
          d.top = u;
          d.headerHeight = h;
        }
        if (f !== null) {
          d.headerHeight = f;
        }
      }
      return d;
    }
    getCommentFirstBlock(e) {
      let {
        isComment: i
      } = this;
      let r = null;
      this.blockManager.structService.traverse(n => {
        if (r) {
          return false;
        }
        if (i) {
          let i = (n == null ? undefined : n.snapshot?.comments) || [];
          if (!Array.isArray(i) || !i.length || !i.includes(e)) {
            return true;
          }
          r = n.id;
        } else {
          let i = d(n == null ? undefined : n.snapshot);
          if (!Array.isArray(i) || !i.length || !i.includes(e)) {
            return true;
          }
          r = n.id;
        }
        return !r;
      });
      return r;
    }
    getCommentRect(e, i) {
      try {
        let r = this.getCommentFirstBlock(e);
        let n = r ? this.calcCommentRect(r, e, i) : null;
        return this.convertRect(e, n);
      } catch (e) {
        emptyExportFunction.emptyFunction(e);
        return null;
      }
    }
    getDocCommentsPosition() {
      let r = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      let {
        blockManager: n,
        docCommentsPosition: l,
        isComment: s
      } = this;
      if (r) {
        return l;
      }
      if (!n.structService.root) {
        return {};
      }
      let a = n.getRecordByBlockId(n.rootBlockId)?.snapshot;
      let d = s ? a == null ? undefined : a.comment_container_id : a == null ? undefined : a.revision_container_id;
      if (!d) {
        return {};
      }
      let u = n.getRecord(d)?.snapshot;
      let h = s ? u == null ? undefined : u.side_comment_ids : u == null ? undefined : u.revision_ids;
      if (!(h == null ? undefined : h.length)) {
        return {};
      }
      let g = h.reduce((e, i) => ({
        ...e,
        [i]: null
      }), {});
      let p = 0;
      n.structService.traverse(e => {
        var r;
        var n;
        p++;
        let l = (s ? e == null ? undefined : e.snapshot?.comments : e == null ? undefined : (n = e.snapshot) === null || n === undefined ? undefined : (r = n.revisions) === null || r === undefined ? undefined : r.map(e => e.revisionId)) || [];
        if (s && (!Array.isArray(l) || !l.length)) {
          return true;
        }
        let a = [];
        let d = this.blockManager.getBlockModelByBlockIdNotCheck(e.id);
        if (d && editorTextBlockUtilities.isTextBlock(d)) {
          let {
            zoneState: e
          } = d;
          let i = this.isComment ? docxCommentConstants.commentIdPrefix : editorRevisionConstants.revisionIdString;
          e.getEntities((e, r) => e.startsWith(i) && !!r).forEach(e => {
            let {
              attributes: r
            } = e;
            let n = Object.keys(r).filter(e => e.startsWith(i)).map(e => e.replace(i, ""));
            if (s && Array.isArray(l)) {
              let e = l.filter(Boolean);
              e.reverse();
              n.sort((i, r) => e.indexOf(i) - e.indexOf(r));
            }
            a.push(...n);
          });
        }
        if (Array.isArray(l)) {
          let e = l.filter(Boolean);
          e.reverse();
          a.push(...e);
        }
        [...new Set(a)].forEach(i => {
          if (isStringTypeCheck.isString(i) && !g[i]) {
            let r = this.calcCommentRect(e.id, i);
            let n = this.convertRect(i, r);
            if (n) {
              n.order = {
                index: p,
                subIndex: a.indexOf(i)
              };
            }
            g[i] = n;
          }
        });
        return true;
      });
      this.docCommentsPosition = g;
      return g;
    }
    scrollHorizontalCode(e) {
      let {
        block: i,
        position: r,
        commentId: n
      } = e;
      let {
        id: o,
        record: a
      } = i;
      let {
        type: c,
        wrap: d
      } = a.snapshot;
      if (c !== docBlockTypeConstants.blockTypeConstants.CODE || d) {
        return;
      }
      let u = this.blockManager.getBlockViewByBlockIdNotCheck(o);
      if (!u) {
        return;
      }
      let h = u.realScroller;
      if (!h) {
        return;
      }
      let f = u.isNewUI;
      if (f && n) {
        let e = docxEditorCore.getBlockModel(i);
        let o = docxCommentUtils.getCommentPositions(e, n);
        if (o) {
          let e = editorSelectionWidthCalc.getSelectionWidth(u, o);
          if (e && Math.abs(e - r.width) > 1) {
            r.width = e;
            r.right = r.left + e;
          }
        }
      }
      let p = docxViewStateUtil.hasViewState(reduxStoreInitializer.reduxStore.getState());
      let {
        scrollLeft: m
      } = h;
      let b = docxCommentBlockSelectionUtils.m0(o, this.fold, this.rect, this.blockManager).blockRect.left;
      let {
        left: S,
        right: C
      } = r;
      if (p) {
        S /= docBlockTypeConstants.defaultLineHeight;
        C /= docBlockTypeConstants.defaultLineHeight;
        b /= docBlockTypeConstants.defaultLineHeight;
      }
      let _ = b + 71;
      let {
        clientWidth: R
      } = h;
      if (f) {
        R -= 71;
      }
      let I = -(S = Math.round(S - _));
      let M = (C = Math.round(C - _)) - R;
      if (I > 0 && M < 0) {
        let e = m - Math.min(I, Math.abs(M));
        h.scrollLeft = e;
      } else if (M > 0 && I < 0) {
        let e = m + Math.min(M, Math.abs(I));
        h.scrollLeft = e;
      }
    }
    calcScrollTop(e, i) {
      let {
        fixedBottom: r = false,
        fixedTop: n = false
      } = i;
      let o = this.blockManager.layoutManager.getContentAboveRootHeight();
      let l = e.top;
      let s = e.bottom;
      let {
        inView: a,
        scrollTop: c
      } = u({
        top: l,
        blockManager: this.blockManager
      });
      if (n) {
        return l - 20 - o;
      } else if (r) {
        return s - (window._currentViewHeight || window.innerHeight) + 200;
      } else if (a) {
        return c;
      } else {
        return l - 20 - o;
      }
    }
    constructor(e, i, r, n, o, l) {
      var s = this;
      this.isComment = e;
      this.blockManager = i;
      this.fold = r;
      this.rect = n;
      this.getViewport = o;
      this.getCommentCreateTime = l;
      C(this, "docCommentsPosition", {});
      C(this, "convertRect", (e, i) => i ? {
        ...i,
        time: this.getCommentCreateTime(e) || undefined,
        type: this.isComment ? commentEventConstants.RevisionType.comment : commentEventConstants.RevisionType.revision
      } : i);
      C(this, "getPositionByCommentId", function (e) {
        if (arguments.length > 1 && arguments[1] !== undefined) {
          arguments[1];
        }
        return s.getCommentRect(e);
      });
      C(this, "scrollToBlockByCommentId", (e, i) => {
        let {
          animate: r = false,
          fixedTop: n = false,
          fixedBottom: o
        } = i;
        let l = this.getCommentRect(e);
        if (!(l == null ? undefined : l.top)) {
          return;
        }
        let s = this.calcScrollTop(l, {
          fixedTop: n,
          fixedBottom: o
        });
        this.waitToScroll(s, async () => {
          let i = await this.getViewport();
          let r = this.getCommentFirstBlock(e);
          if (r) {
            let n = this.blockManager.getBlockViewByBlockIdNotCheck(r);
            if (n) {
              await (i == null ? undefined : i.scrollToRecord(n.record.id));
            }
            this.scrollHorizontalCode({
              position: l,
              block: this.blockManager.getBlockStructByBlockId(r),
              commentId: e
            });
          }
        }, r);
      });
      C(this, "waitToScroll", function (e, i, r = false) {
        let n = s.blockManager.layoutManager.getScroller();
        if (!n || n instanceof Window) {
          n = document.documentElement;
        }
        if (r) {
          let r = () => {
            if (i != null) {
              i();
            }
            scrollAnimationManager.clearAllScrollAnimations();
          };
          scrollAnimationManager.scrollToPosition(n, e, true, r, r);
        } else {
          scrollAnimationManager.stopScrollAnimation(n);
          if (n != null) {
            n.scrollTo(0, e);
          }
          if (i != null) {
            i();
          }
        }
      });
    }
  }
  require.d(exports, {
    CommentRevisionPositionManager: function () {
      return _;
    },
    extractRevisionIdsFromSnapshot: function () {
      return d;
    }
  });
}