// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AV' to 'isInlineUrlPreviewBlock'
// - Renamed export 'B3' to 'generateCommentId'
// - Renamed export 'Cg' to 'isSyncedBlock'
// - Renamed export 'Cj' to 'isCommentFinished'
// - Renamed export 'Cz' to 'getCommentPositions'
// - Renamed export 'EE' to 'getCommentType'
// - Renamed export 'El' to 'getCommentsFromSnapshot'
// - Renamed export 'Ex' to 'extractCommentIdFromAttr'
// - Renamed export 'Hu' to 'getCommentCreateTime'
// - Renamed export 'JR' to 'getCommentIdsFromApool'
// - Renamed export 'KJ' to 'isMobileCommentClass'
// - Renamed export 'OT' to 'isValidCommentId'
// - Renamed export 'QX' to 'isCommentType'
// - Renamed export 'RL' to 'getCommentUnalignedDiffNum'
// - Renamed export 'T1' to 'compareCommentPositions'
// - Renamed export 'T2' to 'getTempCommentId'
// - Renamed export 'Uy' to 'isCommentRevision'
// - Renamed export 'VD' to 'filterCommentsByType'
// - Renamed export 'WR' to 'getCommentsWithoutHighlight'
// - Renamed export 'Xn' to 'isFileBlockChild'
// - Renamed export '_5' to 'getCommentText'
// - Renamed export 'ad' to 'isInVC'
// - Renamed export 'ae' to 'getCommentTopPosition'
// - Renamed export 'b_' to 'isCommentTimeout'
// - Renamed export 'bd' to 'getBlockRectWithCache'
// - Renamed export 'dJ' to 'getCommentIdPrefix'
// - Renamed export 'dz' to 'getCommentSelection'
// - Renamed export 'fS' to 'getCommentIdsFromRange'
// - Renamed export 'g8' to 'getParentBlockForComment'
// - Renamed export 'hE' to 'getCommentIdsFromAttributes'
// - Renamed export 'iY' to 'isOrphanComment'
// - Renamed export 'jj' to 'containsSearchTerms'
// - Renamed export 'k6' to 'getCommentPositionsAll'
// - Renamed export 'kI' to 'getCommentTopFromDOM'
// - Renamed export 'lX' to 'isFloatEqual'
// - Renamed export 'm0' to 'getBlockRectForComment'
// - Renamed export 'mH' to 'getRangeRectWithCache'
// - Renamed export 'qP' to 'getCommentDiffSets'
// - Renamed export 'qd' to 'extractPureCommentId'
// - Renamed export 'qt' to 'getFallbackCommentId'
// - Renamed export 'rr' to 'getClientCommentId'
// - Renamed export 'sp' to 'compareCommentOrder'
// - Renamed export 'tA' to 'calculateCommentTops'
// - Renamed export 'uw' to 'getParentTokenInfo'
// - Renamed export 'v7' to 'logRectCacheMiss'
// - Renamed export 'wF' to 'getAllCommentIdsInBlock'
// - Renamed export 'xH' to 'isSyncedCell'
// - Renamed export 'xl' to 'isSameParentToken'
// - Renamed export 'yF' to 'isSyncedReferenceBlock'
// - Renamed export 'zH' to 'isWholeBlockComment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 668699
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var syncedBlockSelectionChecker = require("synced-block-selection-checker") /*id: 834094*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  require("editor-data-manager-class") /*id: 699568*/;
  var docxEditElementConstants = require("docx-edit-element-constants") /*id: 702540*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var docxCommentFeatureFlags = require("docx-comment-feature-flags") /*id: 662786*/;
  var commentEventConstants = require("comment-event-constants") /*id: 616817*/;
  let S = RegExp(`^${editorModuleConstantsConfig.clientsidePrefix}flow-comment-id-`);
  let j = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
  let P = () => uuidGeneratorUtil.generateUuid();
  let C = e => `flow-comment-id-${e}`;
  let R = e => `${editorModuleConstantsConfig.clientsidePrefix}flow-comment-id-${e}`;
  let D = e => `${editorModuleConstantsConfig.clientsidePrefix}flow-fallback-comment-id-${e}`;
  let O = function (e, n, r = false) {
    let {
      zoneState: i
    } = e;
    let o = i.getEntities((e, i) => e === editorRevisionUtilities.formatRevisionId(n) || e === (r ? R(n) : C(n)) && i === "true");
    let s = null;
    if (o.length > 0) {
      o.forEach(n => {
        let r = e.rangeToPosition(n);
        if (r) {
          if (s) {
            s[1] = r.start + r.len;
          } else {
            s = [r.start, r.start + r.len];
          }
        }
      });
    }
    return s;
  };
  let M = function (e, n, r = false) {
    let {
      zoneState: i
    } = e;
    let o = r ? R(n) : C(n);
    let s = [];
    let l = i.getEntities([[o, "true"]]);
    if (l.length > 0) {
      l.forEach(n => {
        let r = e.rangeToPosition(n);
        if (r) {
          s.push([r.start, r.start + r.len]);
        }
      });
    }
    return s;
  };
  let w = e => e.startsWith(docxCommentConstants.commentIdPrefix);
  let N = e => e.startsWith(docxCommentConstants.commentFallbackFullPrefix);
  let A = e => !e || e === commentEventConstants.RevisionType.comment;
  let L = e => e.isWhole === 1 || e.isWhole === true;
  let x = e => e.finish === 1 || e.finished === true;
  let B = e => e.tempCommentId || e.tmpCommentId || "";
  let $ = (e, n) => e.filter(e => {
    let r = L(e);
    let i = x(e);
    let o = n.type === "all" || (n.type === "doc" ? !r : r);
    let s = !n.filterOutFinished || !i;
    return o && s;
  }).reduce((e, n) => {
    e.set(n.commentId, n);
    return e;
  }, new Map());
  let F = e => e ? new Set(Object.values(e.apool.numToAttrib).filter(e => e[0].startsWith("flow-comment-id-")).map(e => e[0].slice(16))) : new Set();
  let q = (e, n) => ({
    deletedSet: new Set([...e].filter(e => !n.has(e))),
    addedSet: new Set([...n].filter(n => !e.has(n)))
  });
  function V(e, n) {
    if (editorTextBlockUtilities.isTextBlock(e)) {
      if (reduxStoreInitializer.reduxStore.getState().appState.translate.status.translated) {
        return editorDeltaTextUtils.getNextDeltaText(e, n.editorAPI.modelService);
      } else {
        return editorDeltaTextUtils.getDeltaText(e.record.snapshot, n.editorAPI.modelService);
      }
    } else {
      return e.getText();
    }
  }
  let z = e => j.test(e);
  let Z = (e, n) => {
    if (!e) {
      return false;
    }
    let r = n.getBlockStructByBlockId(e);
    return !!r && !!r.parent && r.record.snapshot.type === docBlockTypeConstants.blockTypeConstants.FILE && r.parent.record.snapshot.type !== docBlockTypeConstants.blockTypeConstants.VIEW;
  };
  let U = (e, n) => {
    if (!e) {
      return false;
    }
    let i = n.getBlockViewByBlockIdNotCheck(e);
    return (i == null ? undefined : i.type) === docBlockTypeConstants.blockTypeConstants.URL_PREVIEW && (i == null ? undefined : i.props?.displaymode) === viewTypeConstants.viewTypes.Inline;
  };
  function H(e, n) {
    if (n.start.zoneId !== e.getZoneId()) {
      return [];
    }
    let r = e.getAttributes(n.start, n.end).toMap();
    let i = new RegExp(/comment-id-(.*)/);
    return Object.keys(r).reduce((e, n) => {
      if (i.test(n)) {
        let r = i.exec(n);
        if (r && r[1]) {
          e.push(r[1]);
        }
      }
      return e;
    }, []);
  }
  let W = e => {
    let {
      comments: n,
      text: r
    } = e;
    let {
      apool: {
        numToAttrib: i
      }
    } = r;
    let o = Object.values(i).reduce((e, n) => Object.assign(e, {
      [n[0]]: n[1]
    }), {});
    return (n || []).filter(e => !o[C(e)]);
  };
  let K = (e, n, r, o, s) => {
    let l;
    let {
      collectEvent: u,
      source: a,
      useCache: c
    } = s || {};
    let d = n.isShow(e);
    if (d) {
      return {
        blockRect: ey({
          blockId: e,
          rect: r,
          collectEvent: u,
          source: a,
          useCache: c
        }),
        visible: d
      };
    }
    let f = n.findFoldedByBlock(e);
    if (!f) {
      return {
        blockRect: ey({
          blockId: e,
          rect: r,
          collectEvent: u,
          source: a,
          useCache: c
        }),
        visible: d
      };
    }
    let h = null;
    let p = o.getBlockStructByBlockId(f);
    if (p && editorTextBlockUtilities.isAgendaBlock(p.type)) {
      let e = docxEditorCore.getBlockModel(p);
      if (e) {
        let n = e.zoneState && e.zoneState.totalWidth();
        let r = n > 0 ? n - 1 : 0;
        h = [r, r];
      }
    }
    return {
      blockRect: h ? eE({
        blockId: f,
        range: h,
        rect: r,
        collectEvent: u,
        source: a,
        useCache: c
      }) : ey({
        blockId: e,
        rect: r,
        collectEvent: u,
        source: a,
        useCache: c
      }),
      visible: d
    };
  };
  let G = (e, n, r) => {
    let s = r.getBlockModelByBlockId(e.blockId);
    let l = r.getBlockModelByBlockId(n.blockId);
    if (Z(s.id, r) && s.parent?.id === l.id) {
      return n;
    } else if (Z(l.id, r) && l.parent?.id === s.id) {
      return e;
    } else {
      return null;
    }
  };
  function Y(e, n, r, i = "") {
    let {
      editor: l,
      model: u
    } = e;
    let a = C(n);
    let c = [a, R(n), D(n)];
    let d = C(i);
    let p = [d, R(i), D(n)];
    let v = {};
    let g = u.zoneState.getEntities(e => !!c.includes(e));
    if (r && i !== "") {
      g = g.filter(e => !p.some(n => !!e.attributes[n]));
    }
    if (g.length) {
      v[u.zoneId] = g;
    }
    let m = new deltaSetCore.DeltaSet();
    Object.keys(v).forEach(e => {
      let n = 0;
      v[e].forEach(i => {
        let o = u.rangeToPosition(i);
        o ||= {
          start: 0,
          len: 0
        };
        let {
          start: l,
          len: a
        } = o;
        let c = l - n;
        let d = m.get(e) || new contentStructureDelta.ContentDelta({
          zoneId: e
        });
        d.retain(c);
        d.retain(a, {
          [docxCommentConstants.commentHighlightPrefixed]: r ? "" : "true"
        });
        if (m.get(e)) {
          m.replace(e, d);
        } else {
          m.add(e, d);
        }
        n += c + a;
      });
    });
    let _ = e.selectionAPI.getIsCurrentTextSelection(e.id);
    l.setStopUpdateSelection(true);
    if (!l.isEditable() && r && !_ || function () {
      let n = window.getSelection()?.focusNode;
      return !!n && !!("classList" in n) && !!n.classList.contains(docxEditElementConstants.pollElementKey);
    }() || e.selectionAPI.getSelection().length === 0 && syncedBlockSelectionChecker.checkSyncedBlockSelection(e.blockManager) && !syncedReferenceBlockUtils.isSyncedReferenceBlock(e.editorAPI)) {
      l.setPreventUpdateDomSelection(true);
    } else if (!e.selectionAPI.isTextSelectionAcrossBlocks()) {
      l.setPreventUpdateDomSelection(false);
    }
    try {
      e.model.apply(m, {
        extra: {
          shouldCollab: false
        },
        noLayoutUpdate: true
      });
    } catch (e) {}
    l.setStopUpdateSelection(false);
    setTimeout(() => {
      if (!e.blockManager.editorAPI.isDestroyed() && (!l.isEditable() && r && !_ || e.selectionAPI.getSelection().length === 0 && syncedBlockSelectionChecker.checkSyncedBlockSelection(e.blockManager) && !syncedReferenceBlockUtils.isSyncedReferenceBlock(e.editorAPI))) {
        l.setPreventUpdateDomSelection(false);
      }
    }, 0);
  }
  let Q = (e, n, r, i) => !!n.isThirdPartyComment && !!i.isThirdPartyComment && n.blockId === i.blockId && n.quote !== i.quote;
  let X = (e, n) => e.order && n.order ? e.order.index !== n.order.index ? e.order.index - n.order.index : e.order.subIndex - n.order.subIndex : 0;
  let J = (e, n) => {
    let [o, s] = e;
    let [l, u] = n;
    if (o === "" || l === "") {
      return 0;
    }
    let a = (e, n) => Math.abs(e - n) <= 1;
    if ((s.top === docxCommentConstants.commentTimeoutMs || u.top === docxCommentConstants.commentTimeoutMs || a(s.top, u.top)) && s.order && u.order) {
      let e = X(s, u);
      if (e !== 0) {
        return e;
      }
    }
    if (Q(o, s, l, u)) {
      if (s.isSyncedReferenceBlock === true && s.preloadIndex !== undefined && u.preloadIndex !== undefined) {
        return s.preloadIndex - u.preloadIndex;
      } else {
        return 0;
      }
    }
    if (!a(s.top, u.top)) {
      return s.top - u.top;
    }
    if (s.originalTop && u.originalTop && !a(s.originalTop, u.originalTop)) {
      return s.originalTop - u.originalTop;
    }
    let c = (s.caretLeft ?? s.left) - (u.caretLeft ?? u.left);
    if (c !== 0) {
      return c;
    }
    let d = s.time;
    let f = u.time;
    if (s.preloadIndex && u.preloadIndex) {
      return s.preloadIndex - u.preloadIndex;
    } else if (d && f) {
      return d - f;
    } else {
      return 0;
    }
  };
  let ee = (e, n) => {
    let [r, {
      position: i
    }] = e;
    let [o, {
      position: s
    }] = n;
    return J([r, i], [o, s]);
  };
  function et() {
    return browserEnvironmentDetectionUtils.browserDetector.isInVC;
  }
  function en(e) {
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isIPad) {
      return docxCommentConstants.commentSyncedBlockClass[e];
    } else {
      return docxCommentConstants.commentBlockOffsets[e];
    }
  }
  function er(e) {
    let n = [];
    if (e.editorAPI.modelService.isBlockModelCreated(e.id)) {
      let r = docxEditorCore.getBlockModel(e);
      if (r && editorTextBlockUtilities.isTextBlock(r)) {
        n = r.zoneState.getEntities([]).reduce((e, n) => {
          let {
            attributes: r
          } = n;
          Object.keys(r).forEach(n => S.test(n) && e.push(n));
          return e;
        }, []).map(e => e.replace(S, ""));
      }
    }
    return (e.snapshot.comments || []).slice().reverse().concat(n);
  }
  function ei(e) {
    return e.snapshot.comments || [];
  }
  function eo(e) {
    let n = null;
    if (e.startsWith(docxCommentConstants.commentIdPrefix)) {
      n = e.slice(docxCommentConstants.commentIdPrefix.length);
    } else if (e.startsWith(docxCommentConstants.commentFallbackFullPrefix)) {
      n = e.slice(docxCommentConstants.commentFallbackFullPrefix.length);
    }
    return n;
  }
  function es(e) {
    if (w(e) || N(e) || editorRevisionUtilities.isRevisionIdString(e)) {
      return e;
    } else {
      return null;
    }
  }
  function el(e) {
    let n = null;
    if (w(e)) {
      n = e.slice(docxCommentConstants.commentIdPrefix.length);
    } else if (N(e)) {
      n = e.slice(docxCommentConstants.commentFallbackFullPrefix.length);
    } else if (editorRevisionUtilities.isRevisionIdString(e)) {
      n = editorRevisionUtilities.stripRevIdString(e);
    }
    return n;
  }
  function eu(e) {
    if (w(e) || N(e)) {
      return commentEventConstants.RevisionType.comment;
    } else if (editorRevisionUtilities.isRevisionIdString(e)) {
      return commentEventConstants.RevisionType.revision;
    } else {
      return "";
    }
  }
  function ea(e) {
    return e && (e.createTime || e.createTimestamp) || Date.now();
  }
  function ec(e, n) {
    return n.reduce((n, r) => {
      if (editorTextBlockUtilities.isTextBlock(r)) {
        let i = O(r, e, z(e));
        if (i) {
          n.push({
            id: r.id,
            type: docxBlockSelectionHandler_1.blockTypes.TEXT,
            selection: {
              start: i[0],
              end: i[1]
            }
          });
        } else {
          n.push({
            id: r.id,
            type: docxBlockSelectionHandler_1.blockTypes.BLOCK
          });
        }
      } else {
        n.push({
          id: r.id,
          type: docxBlockSelectionHandler_1.blockTypes.BLOCK
        });
      }
      return n;
    }, []);
  }
  function ed(e) {
    let r = document.querySelector(`.${docxCommentConstants.commentContainerClass} [data-id="${e}"]`);
    return Number(r == null ? undefined : r.style.top.replace("px", "")) || Number(r == null ? undefined : r.style.transform.match(/translate3d\(0px, (.+)px, 0px\)/)?.[1]) || 0;
  }
  function ef(e, n) {
    return typeof e == "number" && typeof n == "number" && Math.abs(e - n) < 0.1;
  }
  function eh(e) {
    if (!e) {
      return false;
    }
    if (e.type === docBlockTypeConstants.blockTypeConstants.CELL) {
      let {
        cellId: r,
        sourceCellId: i
      } = e.props.cellInfo ?? {};
      return !!r && !!i && i !== r;
    }
    return false;
  }
  function ep(e, n) {
    return !!n && !!eg(e) && e.parentToken === n.serviceToken && e.parentType === n.serviceType;
  }
  function ev(e, n) {
    let r = {
      parentToken: "",
      parentType: ""
    };
    if (!e) {
      return r;
    }
    if (n && eg(e)) {
      let {
        relationInfo: n
      } = e.extra.syncedBlockExtra;
      if (n) {
        r.parentToken = n.blockToken || "";
        r.parentType = n.blockType || "";
      }
    } else {
      r.parentToken = e.parentToken || "";
      r.parentType = e.parentType || "";
    }
    return r;
  }
  function eg(e) {
    var r;
    return !!(e == null ? undefined : (r = e.extra) === null || r === undefined ? undefined : r.syncedBlockExtra?.syncedBlockToken);
  }
  function em(e) {
    var r;
    return !e.parentType || eg(e) && !(e == null ? undefined : (r = e.extra) === null || r === undefined ? undefined : r.syncedBlockExtra?.relationInfo);
  }
  function e_(e) {
    let {
      collectEvent: n,
      source: r = "",
      cacheRectInfo: i,
      newRectInfo: o,
      rect: s,
      cacheKey: u
    } = e;
    let a = parseInt(u.split("-")[0]);
    let d = s.getBlockManager().getBlockStructByBlockId(a);
    n(docxCommentConstants.commentActionEvents.getRectNoCache, {
      recordId: docxUtilityHelpers.maskSensitiveData((d == null ? undefined : d.recordId) || ""),
      blockType: d == null ? undefined : d.type,
      cacheRectInfo: i,
      newRectInfo: o,
      isSame: deepEqualUtil_1.deepEqual(o, i),
      hasCache: !!i
    }, r);
  }
  function ey(e) {
    let n;
    let {
      blockId: r,
      rect: i,
      source: o,
      collectEvent: s,
      useCache: l = true
    } = e;
    let u = [r, undefined];
    if (i.isSyncedReferenceBlock) {
      u[1] = i.getRootBlockId();
    }
    let a = "";
    if (l !== true) {
      a = i.getBlockRectCacheKey.call(i, ...u);
      n = i.getCacheRectByKey(a);
      i.clearCacheByKey(a);
    }
    let c = i.getBlockRect.call(i, ...u);
    if (l !== true && s && !i.isSyncedReferenceBlock && a) {
      e_({
        cacheKey: a,
        rect: i,
        collectEvent: s,
        source: o,
        cacheRectInfo: n,
        newRectInfo: c
      });
    }
    return c;
  }
  function eE(e) {
    let n;
    let {
      blockId: r,
      range: i,
      rect: o,
      source: s,
      collectEvent: l,
      useCache: u = true
    } = e;
    let a = [r, i, undefined];
    if (o.isSyncedReferenceBlock) {
      a[2] = o.getRootBlockId();
    }
    let c = "";
    if (u !== true) {
      c = o.getRangeRectCacheKey.call(o, ...a);
      n = o.getCacheRectByKey(c);
      o.clearCacheByKey(c);
    }
    let d = o.getRangeRect.call(o, ...a);
    if (u !== true && l && !o.isSyncedReferenceBlock && c) {
      e_({
        cacheKey: c,
        rect: o,
        collectEvent: l,
        source: s,
        cacheRectInfo: n,
        newRectInfo: d
      });
    }
    return d;
  }
  function eb(e) {
    return e.snapshot.type === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE;
  }
  function eI(e, n) {
    let r = false;
    return !!e && !!n && n.length !== 0 && (n.forEach(n => {
      if (e.toLowerCase().indexOf(n) > -1) {
        r = true;
      }
    }), r);
  }
  let eT = e => e.type === commentEventConstants.RevisionType.comment;
  let ek = e => e.top === docxCommentConstants.commentTimeoutMs;
  let eS = e => {
    let n;
    let {
      data: r,
      topConfigs: i,
      positionFormatFn: o
    } = e;
    let {
      defaultTop: s,
      viewportBottom: l
    } = i;
    let u = [];
    let a = false;
    let c = [];
    let d = (e, n) => n ? n < e ? e : n > l ? a ? e : n : a ? n : e : a ? e : Math.max(e, l);
    let f = e => {
      let n = o(e);
      c.push(n);
    };
    let h = (e, n) => {
      if (!u.length) {
        return;
      }
      let i = d(e, n);
      for (let e = u[0]; e <= u[1]; e++) {
        let [n, o] = r[e] || [];
        if (n) {
          f({
            commentId: n,
            commentRect: o,
            top: i,
            index: e
          });
        }
      }
      u = [];
    };
    r.forEach((r, i) => {
      let [o, l] = r;
      if (ek(l)) {
        if (o === e.activeId) {
          a = true;
        }
        if (u.length) {
          u[1] = i;
        } else {
          u = [i, i];
        }
      } else {
        n ||= l.top > s ? s : l.top;
        h(n, l.top);
        if (o === e.activeId || a) {
          a = false;
        }
        n = l.top;
        f({
          commentId: o,
          commentRect: l,
          top: l.top,
          index: i
        });
      }
    });
    if (n === undefined) {
      n = s;
    }
    h(n);
    return c;
  };
  let ej = () => {
    return docxCommentFeatureFlags.getCommentConfig("docx_comment_unaligned_diff_num") ?? docxCommentConstants.commentMinValue;
  };
  require.d(exports, {
    isInlineUrlPreviewBlock: function () {
      return U;
    },
    generateCommentId: function () {
      return P;
    },
    isSyncedBlock: function () {
      return eg;
    },
    isCommentFinished: function () {
      return x;
    },
    getCommentPositions: function () {
      return O;
    },
    getCommentType: function () {
      return es;
    },
    getCommentsFromSnapshot: function () {
      return ei;
    },
    extractCommentIdFromAttr: function () {
      return eo;
    },
    getCommentCreateTime: function () {
      return ea;
    },
    getCommentIdsFromApool: function () {
      return F;
    },
    isMobileCommentClass: function () {
      return eh;
    },
    isValidCommentId: function () {
      return w;
    },
    isCommentType: function () {
      return A;
    },
    getCommentUnalignedDiffNum: function () {
      return ej;
    },
    compareCommentPositions: function () {
      return ee;
    },
    getTempCommentId: function () {
      return B;
    },
    isCommentRevision: function () {
      return eT;
    },
    filterCommentsByType: function () {
      return $;
    },
    getCommentsWithoutHighlight: function () {
      return z;
    },
    isFileBlockChild: function () {
      return Z;
    },
    getCommentText: function () {
      return V;
    },
    isInVC: function () {
      return en;
    },
    getCommentTopPosition: function () {
      return eb;
    },
    isCommentTimeout: function () {
      return ek;
    },
    getBlockRectWithCache: function () {
      return et;
    },
    getCommentIdPrefix: function () {
      return C;
    },
    getCommentSelection: function () {
      return ec;
    },
    getCommentIdsFromRange: function () {
      return eu;
    },
    getParentBlockForComment: function () {
      return G;
    },
    getCommentIdsFromAttributes: function () {
      return H;
    },
    isOrphanComment: function () {
      return em;
    },
    containsSearchTerms: function () {
      return eI;
    },
    getCommentPositionsAll: function () {
      return M;
    },
    getCommentTopFromDOM: function () {
      return ed;
    },
    isFloatEqual: function () {
      return ef;
    },
    getBlockRectForComment: function () {
      return K;
    },
    getRangeRectWithCache: function () {
      return eE;
    },
    getCommentDiffSets: function () {
      return q;
    },
    extractPureCommentId: function () {
      return el;
    },
    getFallbackCommentId: function () {
      return D;
    },
    getClientCommentId: function () {
      return R;
    },
    compareCommentOrder: function () {
      return J;
    },
    calculateCommentTops: function () {
      return eS;
    },
    getParentTokenInfo: function () {
      return ev;
    },
    logRectCacheMiss: function () {
      return ey;
    },
    getAllCommentIdsInBlock: function () {
      return er;
    },
    isSyncedCell: function () {
      return W;
    },
    isSameParentToken: function () {
      return ep;
    },
    isSyncedReferenceBlock: function () {
      return Y;
    },
    isWholeBlockComment: function () {
      return L;
    }
  });
}