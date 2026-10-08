// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X$' to 'pruneClientVarsByAround'
// - Renamed export 'Z3' to 'isBlockPrunable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 596505
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var arrayFilterExtractMatched = require("array-filter-extract-matched") /*id: 925046*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var docxBlockChildrenUtils_1 = require("docx-block-children-utils_1") /*id: 891712*/;
  var docxBlockTypeConstants_1 = require("docx-block-type-constants_1") /*id: 928355*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var diagramConstants = require("diagram-constants") /*id: 75626*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  let b = window.innerHeight + docxBlockTypeConstants_1.defaultMarginPx * 4;
  let y = ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf", "csv", "txt", "jpg", "png", "gif", "heic"];
  let k = new Set([docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.VIEW, docBlockTypeConstants.blockTypeConstants.AI, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CELL]);
  let _ = new Set([docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM]);
  let E = window.t;
  function w(e, n, i, r) {
    if (i.has(n) && i.get(n) === "block" && (r == null || !r.skipFn(e, n))) {
      i.set(e, "block");
    }
  }
  function C(e) {
    return (e == null ? undefined : e.__jestMaxPruneHeight) || b;
  }
  function Z(e, n, i) {
    let {
      data: r,
      id: o
    } = e;
    let {
      type: a,
      children: l
    } = r;
    if (a === docBlockTypeConstants.blockTypeConstants.VIEW) {
      if (i == null ? undefined : i.has(o)) {
        return true;
      }
      let e = (l == null ? undefined : l[0]) || "";
      let r = n[e];
      if (r && r.data.type === docBlockTypeConstants.blockTypeConstants.FILE && (i == null ? undefined : i.has(e))) {
        return true;
      }
    }
    return false;
  }
  function x(e, n, i) {
    let r = e.data.type;
    return (!docxShortcutFeatureDetection.isTextCardOpt() || !docxShortcutFeatureDetection.isWholeBlockHighlightShare() || !_.has(r) || !(i == null ? undefined : i.has(e.id))) && (!docxShortcutFeatureDetection.isTextCardOpt() || !Z(e, n, i)) && (!!k.has(r) || (docxShortcutFeatureDetection.isTextCardOpt() ? [docBlockTypeConstants.blockTypeConstants.AGENDA, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_CONTENT].includes(r) : [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER].includes(r)));
  }
  function S(e, n, i, r) {
    let o = i[e];
    let a = i[n];
    if (!o) {
      return 0;
    }
    let s = o.data.type;
    if (r == null ? undefined : r.textualCard) {
      if (docBlockTypeConstants.quoteBlockTypes.includes(s)) {
        try {
          let e = editorDeltaTextUtils.getDeltaText(o.data, {
            hasRecordByRecordId: e => {
              return !!i[e]?.data;
            },
            getRecordByRecordId: e => {
              let n = i[e];
              return {
                id: n.id,
                snapshot: n.data
              };
            }
          });
          if (!/\S/.test(e)) {
            return 0;
          }
        } catch (e) {}
      }
      return docxBlockTypeConstants_1.defaultMarginPx;
    }
    if (docxBlockChildrenUtils_1.getBlockChildren(a).includes(e) && s === docBlockTypeConstants.blockTypeConstants.VIEW) {
      return function (e) {
        let n = e.data.view_type;
        if (n === viewTypeConstants.viewTypes.Card) {
          return 66;
        } else if (n === viewTypeConstants.viewTypes.Preview) {
          return 58;
        } else {
          return docxBlockTypeConstants_1.defaultMarginPx;
        }
      }(o);
    }
    let u = docxBlockTypeConstants_1.blockTypeHeights[s];
    if (u === undefined) {
      u = docxBlockTypeConstants_1.defaultMarginPx;
    }
    return u;
  }
  function T(e, n, i, r) {
    let o = i[e];
    if (!o) {
      return 0;
    }
    let {
      type: a
    } = o.data;
    if (a === docBlockTypeConstants.blockTypeConstants.TABLE) {
      return I(e, n, i, r);
    }
    if (a === docBlockTypeConstants.blockTypeConstants.GRID) {
      return A(e, n, i, r);
    }
    if (a === docBlockTypeConstants.blockTypeConstants.OBJECTIVE) {
      return M(e, n, i, r);
    }
    let c = 0;
    for (let e of docxBlockChildrenUtils_1.getBlockChildren(o)) {
      c += T(e, n, i, r);
    }
    return S(e, n, i, r) + c;
  }
  function R(e, n, i, r, o) {
    let a = r[n];
    if (!a) {
      return 0;
    }
    let {
      rows_id: l,
      columns_id: c,
      cell_set: s
    } = a.data;
    if (l.indexOf(e) === -1) {
      return 0;
    }
    let u = 0;
    for (let n of c) {
      let a = `${e}${n}`;
      if (s[a]) {
        let {
          block_id: e
        } = s[a];
        u = Math.max(u, T(e, i, r, o));
      }
      if (u >= C(o)) {
        break;
      }
    }
    return u;
  }
  function I(e, n, i, r) {
    let o = i[e];
    if (!o) {
      return 0;
    }
    let a = 0;
    let {
      rows_id: l
    } = o.data;
    for (let o = 0; o < l.length && !((a += R(l[o], e, n, i, r)) >= C(r)); o++);
    return a;
  }
  function A(e, n, i, r) {
    let o = i[e];
    if (!o) {
      return 0;
    }
    let a = 0;
    for (let e of docxBlockChildrenUtils_1.getBlockChildren(o)) {
      if ((a = Math.max(a, T(e, n, i, r))) >= C(r)) {
        break;
      }
    }
    return a;
  }
  function M(e, n, i, r) {
    let o = i[e];
    if (!o) {
      return 0;
    }
    let a = 0;
    for (let e of docxBlockChildrenUtils_1.getBlockChildren(o)) {
      if ((a += T(e, n, i, r)) >= C(r)) {
        break;
      }
    }
    return a;
  }
  function B(e) {
    var i;
    let o = e.data.type;
    let a = e.data.parent_id;
    let {
      children: l
    } = e.data;
    let c = docxBlockUtils_1.getBlockTypeDisplayName(o) || E("LarkCCM_Docs_FwdSection_ContentBlock_Placeholder", undefined, "content");
    let u = `[${c}]`;
    if (o === docBlockTypeConstants.blockTypeConstants.FILE) {
      u = `[${E("etherpad.Drive")}] ${((i = e.data) === null || i === undefined ? undefined : i.file?.name) ?? ""}`;
    } else if (o === docBlockTypeConstants.blockTypeConstants.DIAGRAM) {
      u = e.data.diagram.diagramType === diagramConstants.diagramTypes.UML ? `[${E("CreationDoc_Docs_UMLDiagram_Title")}]` : `[${E("CreationDoc_Docs_FlowDiagram_Title")}]`;
    } else if (o === docBlockTypeConstants.blockTypeConstants.OKRX) {
      u = `[${E("LarkCCM_Docs_block_OKR", undefined, "OKR")}]`;
    }
    e.data = documentNodeUtils_2.createDocumentNode({
      text: {
        initialAttributedTexts: {
          text: {
            0: u
          },
          attribs: {
            0: `*0+${u.length}`
          }
        },
        apool: {
          nextNum: 1,
          numToAttrib: {
            0: ["author", ""]
          }
        }
      },
      children: (o === docBlockTypeConstants.blockTypeConstants.TASK || docBlockTypeConstants.getAllowedBlockTypes().includes(o)) && Array.isArray(l) ? l : []
    });
    e.data.parent_id = a;
  }
  function O(e, n, i, r) {
    if (n[e]) {
      return;
    }
    let o = i[e];
    let c = o.data.type === docBlockTypeConstants.blockTypeConstants.TABLE;
    n[e] = c && !r ? deepCloneWrapper_1.deepClone(o) : o;
    docxBlockChildrenUtils_1.copyListBlockChildren(o, i, n);
    if (r) {
      for (let e of docxBlockChildrenUtils_1.getBlockChildren(o)) {
        O(e, n, i, r);
      }
      if (c) {
        N(e, n, i);
      }
    } else {
      if (Array.isArray(n[e].data.children)) {
        n[e].data.children = [];
      }
      if (c) {
        n[e].data.rows_id = [];
        n[e].data.cell_set = {};
      }
    }
  }
  function P(e, n, i, r, o) {
    let l = r[n];
    let c = i[n];
    if (!c) {
      (c = deepCloneWrapper_1.deepClone(l)).data.rows_id = [];
      c.data.cell_set = {};
      i[n] = c;
    }
    if (c.data.rows_id.indexOf(e) === -1) {
      if (o) {
        c.data.rows_id.unshift(e);
      } else {
        c.data.rows_id.push(e);
      }
    }
    for (let s of l.data.columns_id) {
      let n = e + s;
      let o = l.data.cell_set[n];
      c.data.cell_set[n] = o;
      O(o.block_id, i, r, true);
    }
  }
  function N(e, n, i) {
    let r = i[e].data.rows_id;
    if (Array.isArray(r)) {
      for (let o of r) {
        P(o, e, n, i);
      }
    }
  }
  function L(e, n) {
    docxShortcutFeatureDetection.debugLogger(`use pruneClientVarsByAround, options:${JSON.stringify(n)}`);
    let a = Date.now();
    let f = e.id;
    let p = e.block_map;
    let m = p[f].data?.children || [];
    let b = n == null ? undefined : n.start;
    if (!b || !p[b]) {
      docxShortcutFeatureDetection.debugLogger("anchor is not exist, will fallback first block");
      b = m[0];
    }
    docxShortcutFeatureDetection.debugLogger(`anchor is ${b}`);
    if (!b) {
      return p;
    }
    let {
      anchorIndex: k,
      flattenBlocks: _
    } = function (e, n) {
      var i;
      var a;
      var f;
      let {
        anchor: p,
        pageToken: m,
        oldRecordMap: b
      } = e;
      let k = function (e) {
        let n = new Map();
        if (Array.isArray(e)) {
          return e.reduce((e, n) => {
            e.set(n.block_id, n.selected_text ? "text" : "block");
            return e;
          }, n);
        } else {
          return n;
        }
      }(n == null ? undefined : n.selectedBlocks);
      let _ = function (e, n, i, r) {
        let o = e;
        let a = {};
        return {
          closestRoot: docxBlockChildrenUtils_1.findParentBlock(e, i, e => {
            let {
              type: c,
              parent_id: s
            } = e.data;
            if ((r == null ? undefined : r.textualCard) || c !== docBlockTypeConstants.blockTypeConstants.CELL) {
              if (!(r == null ? undefined : r.textualCard) && c === docBlockTypeConstants.blockTypeConstants.GRID || c === docBlockTypeConstants.blockTypeConstants.OBJECTIVE && !docxShortcutFeatureDetection.isOkrContentHighlightShare()) {
                o = e.id;
              }
            } else {
              let n = e.data.parent_id;
              let r = i[n];
              if (docxBlockChildrenUtils_1.hasMergedCells(r.data.cell_set)) {
                o = n;
              } else {
                for (let n of r.data.rows_id) {
                  for (let i of r.data.columns_id) {
                    let a = n + i;
                    let l = r.data.cell_set[a];
                    if (l && l.block_id === e.id) {
                      o = n;
                      break;
                    }
                  }
                }
              }
            }
            if (docxShortcutFeatureDetection.isOkrContentHighlightShare()) {
              if (docBlockTypeConstants.okrProgressTypes.includes(c)) {
                if (r != null) {
                  r.highlightMap.set(e.id, "block");
                }
              }
              if (c === docBlockTypeConstants.blockTypeConstants.PROGRESS) {
                a.okr = true;
              }
            }
            if (docxShortcutFeatureDetection.isWholeBlockHighlightShare()) {
              if ([docBlockTypeConstants.blockTypeConstants.AGENDA, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM].includes(c)) {
                if (r != null) {
                  r.highlightMap.set(e.id, "block");
                }
              }
              if (c === docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM) {
                a.agenda = true;
              }
            }
            if (function (e, n) {
              let {
                id: i,
                data: r
              } = e;
              let o = n[r.parent_id];
              return !!o && !!editorTextBlockUtilities.hasTextWithApoolSimple(o.data) && editorTextBlockUtilities.getInlineDisplayMarksFromText(o.data).includes(i);
            }(e, i)) {
              o = s;
            }
            return s === n;
          }),
          actualAnchor: o,
          containerContent: a
        };
      }(p, m, b, {
        ...n,
        highlightMap: k
      });
      let {
        actualAnchor: T
      } = _;
      let {
        closestRoot: O,
        containerContent: P
      } = _;
      let N = C(n);
      if (((i = b[T]) === null || i === undefined ? undefined : i.data.type) === docBlockTypeConstants.blockTypeConstants.OBJECTIVE) {
        k.set((a = b[T]) === null || a === undefined ? undefined : a.data.parent_id, "block");
        if (!docxShortcutFeatureDetection.isTextCardOpt()) {
          T = (f = b[T]) === null || f === undefined ? undefined : f.data.parent_id;
        }
      }
      docxShortcutFeatureDetection.debugLogger(`actual anchor is ${T}, closestRoot is: ${O == null ? undefined : O.id}`);
      let L = [];
      let D = -1;
      let H = -1;
      let $ = 0;
      let F = 0;
      if (O) {
        let e = b[m];
        let i = docxBlockChildrenUtils_1.getBlockChildren(e);
        let r = i.indexOf(O.id);
        let o = Math.max(r - (n != null && !!n.textualCard) * 25, 0);
        let a = Math.min(r + 50, i.length);
        if (Array.isArray(e.data.children)) {
          e.data.children = e.data.children.slice(o, a);
        }
      }
      let z = function (e) {
        let n;
        let {
          oldRecordMap: i,
          selectedBlocks: r,
          containerContent: o
        } = e;
        if (!docxShortcutFeatureDetection.isOkrContentHighlightShare() || !(r == null ? undefined : r.length)) {
          return false;
        }
        if (o == null ? undefined : o.okr) {
          return true;
        }
        let a = 0;
        while (a < r.length) {
          let e = i[r[a].block_id];
          if (!n && [docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT].includes(e == null ? undefined : e.data.type)) {
            n = true;
            continue;
          }
          a++;
        }
        return !!n;
      }({
        oldRecordMap: b,
        selectedBlocks: n == null ? undefined : n.selectedBlocks,
        containerContent: P
      });
      let W = function (e) {
        var n;
        var i;
        let {
          oldRecordMap: a,
          actualAnchor: l,
          selectedHighlightMap: c
        } = e;
        if (!docxShortcutFeatureDetection.isWholeBlockHighlightShare()) {
          return false;
        }
        let s = [];
        if (((n = a[l]) === null || n === undefined ? undefined : n.data.type) === docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM) {
          let e = (i = a[l]) === null || i === undefined ? undefined : i.data.parent_id;
          s = [...(a[e].data.children ?? [])];
          arrayFilterExtractMatched.filterAndExtractMatched(s, e => e === l);
          c.set(e, "block");
        }
        return s;
      }({
        oldRecordMap: b,
        actualAnchor: T,
        selectedHighlightMap: k
      });
      let V = (e, n) => z ? !!docxBlockChildrenUtils_1.findParentBlock(n, b, e => e.data.type === docBlockTypeConstants.blockTypeConstants.PROGRESS) : !!W && (W.length ? W.includes(n) : !!P.agenda && !k.has(e));
      (function e(n, i) {
        if (!n) {
          return;
        }
        let r = i(n);
        if (Array.isArray(r) && r.length) {
          for (let n of r) {
            e(n, i);
          }
        }
      })({
        id: m,
        estimateHeight: 0
      }, e => {
        if (++H > 40000) {
          throw Error("dfs call max count");
        }
        let o = e.parent?.id;
        if (o) {
          w(e.id, o, k);
        }
        let a = false;
        let f = e.estimateHeight || 0;
        $ += f;
        if (e.id === T) {
          D = H;
        }
        if (D !== -1) {
          F += f;
          let e = N;
          if (n == null ? undefined : n.textualCard) {
            e = Math.max(N - ($ - F), N / 2);
          }
          a = F >= e;
        }
        L.push(e);
        if (a) {
          return [];
        } else {
          if (n == null ? undefined : n.textualCard) {
            T = function (e, n, i, o, a, f) {
              let p = docxBlockChildrenUtils_1.getBlockChildren(e);
              for (let e = 0; e < p.length; e++) {
                let v = p[e];
                let b = n[v];
                let k = b == null ? undefined : b.data?.parent_id;
                w(v, k, o, f);
                if (x(b, n, o)) {
                  let r = function (e, n) {
                    if (e.data.type !== docBlockTypeConstants.blockTypeConstants.TABLE) {
                      return docxBlockChildrenUtils_1.getBlockChildren(e);
                    }
                    let i = docxBlockChildrenUtils_1.getTableCellChildren(e);
                    if (!n || !n.length) {
                      return i;
                    }
                    let r = i.length - 1;
                    let o = 0;
                    let a = [];
                    for (let e = 0; e < i.length; e++) {
                      let a = i[e];
                      if (n.includes(a)) {
                        r = Math.min(e, r);
                        o = Math.max(e, o);
                      }
                    }
                    for (let e = 0; e < i.length; e++) {
                      let l = i[e];
                      if (e <= r || e >= o || n.includes(l)) {
                        a.push(l);
                      }
                    }
                    return a;
                  }(b, a) || [];
                  if (r.length === 0 && v === i) {
                    B(b);
                  } else {
                    p.splice(e, 1, ...r);
                    for (let i of r) {
                      n[i].data.parent_id = k;
                    }
                    e--;
                    if (v === i) {
                      i = r[0];
                    }
                  }
                  continue;
                }
                if (b.data.type === docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_TITLE) {
                  b.data.type = docBlockTypeConstants.blockTypeConstants.HEADING3;
                  continue;
                }
                if (b.data.type === docBlockTypeConstants.blockTypeConstants.QUOTE) {
                  b.data.type = docBlockTypeConstants.blockTypeConstants.TEXT;
                  continue;
                }
                if (docxShortcutFeatureDetection.isTextCardOpt() && Z(b, n, o)) {
                  (function (e, n) {
                    let {
                      data: i
                    } = e;
                    let {
                      view_type: o
                    } = i;
                    if (o !== viewTypeConstants.viewTypes.Preview) {
                      return;
                    }
                    let a = n[i.children[0]].data.file;
                    if (a.token) {
                      let e = fileUtilsAndViewHelpers.formatFileSize(a.name);
                      if (platformDocUtils.P60.isVideoTypePreview(e) || platformDocUtils.P60.isAudioTypePreview(e) || y.includes(e)) {
                        return;
                      }
                    }
                    i.view_type = viewTypeConstants.viewTypes.Card;
                  })(b, n);
                  continue;
                }
                if (function (e, n) {
                  let i = e.data.type;
                  return !!n.has(e.id) && docxBlockTypeConstants_1.interactiveBlockTypes.includes(i);
                }(b, o)) {
                  b.data.shareAnchor = {
                    originType: b.data.type,
                    title: function (e) {
                      let n = e.data.type;
                      let i = docxBlockUtils_1.getBlockTypeDisplayName(n) || E("LarkCCM_Docs_FwdSection_ContentBlock_Placeholder", undefined, "content");
                      if (n === docBlockTypeConstants.blockTypeConstants.OKRX) {
                        return E("LarkCCM_Docs_block_OKR", undefined, "OKR");
                      }
                      if (n === docBlockTypeConstants.blockTypeConstants.IFRAME) {
                        let n = e.data.iframe.component.type;
                        return docxBlockUtils_1.getIframeTypeDisplayName(n) || i;
                      }
                      return i;
                    }(b)
                  };
                  b.data.type = docBlockTypeConstants.blockTypeConstants.FALLBACK;
                  continue;
                }
                if (function (e, n) {
                  let {
                    id: i,
                    data: r
                  } = e;
                  let o = r.type;
                  if (!docxShortcutFeatureDetection.isTextCardOpt()) {
                    return o !== docBlockTypeConstants.blockTypeConstants.IMAGE && !docxBlockTypeConstants_1.quoteBlockTypes.includes(o);
                  }
                  if (docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER === o) {
                    return false;
                  }
                  if (o === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE && n.has(i)) {
                    return !docxShortcutFeatureDetection.isSyncedBlockHighlightShare();
                  }
                  return !!docxBlockTypeConstants_1.excludedBlockTypes.includes(o) || !n.has(i) && !docxBlockTypeConstants_1.quoteBlockTypes.includes(o);
                }(b, o)) {
                  B(b);
                  continue;
                }
              }
              return i;
            }(b[e.id], b, T, k, n.tableCellsAnchor, {
              skipFn: V
            });
          }
          return function (e, n, i, r, o) {
            let {
              id: a
            } = e;
            if (e.virtual) {
              return [];
            }
            let c = i[a];
            if (c.data.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
              return function e(n, i, r, o, a) {
                var l;
                var c;
                var s;
                let f = r[n.id];
                let h = !!(a == null ? undefined : (l = a.selectedBlocks) === null || l === undefined ? undefined : l.find(e => e.block_id === n.id));
                if (!h) {
                  let e = f.data.parent_id;
                  while (e) {
                    if (a == null ? undefined : (c = a.selectedBlocks) === null || c === undefined ? undefined : c.find(n => n.block_id === e)) {
                      h = true;
                      e = null;
                    } else {
                      e = (s = r[e]) === null || s === undefined ? undefined : s.data.parent_id;
                    }
                  }
                }
                docxShortcutFeatureDetection.debugLogger("getTableShortcutNodeChildren status:", docxShortcutFeatureDetection.isWholeBlockHighlightShare(), h);
                if (!docxShortcutFeatureDetection.isWholeBlockHighlightShare() || !h) {
                  return (f.data.rows_id || []).map(e => ({
                    id: e,
                    parent: n,
                    estimateHeight: R(e, n.id, i, r, a),
                    virtual: "row"
                  }));
                }
                {
                  let {
                    cell_set: l,
                    rows_id: c
                  } = f.data;
                  let s = Object.keys(l);
                  let u = o.splice(-1, 1);
                  s.forEach(c => {
                    let s = r[l[c].block_id];
                    let u = (e, n, i) => {
                      let o = n(e.id, i, e.data.type === docBlockTypeConstants.blockTypeConstants.TABLE);
                      (e.data.children || []).forEach(e => {
                        u(r[e], n, o);
                      });
                    };
                    u(s, (n, l, c) => {
                      let s = {
                        id: n,
                        estimateHeight: 0,
                        parent: l,
                        virtual: c ? "ignore" : undefined
                      };
                      o.push(s);
                      if (c) {
                        e(s, i, r, o, a);
                      }
                      return s;
                    }, n);
                  });
                  o.push(u[0]);
                  n.estimateHeight = c.length * 41;
                  n.virtual = "ignore";
                  return [];
                }
              }(e, n, i, r, o);
            } else {
              return docxBlockChildrenUtils_1.getBlockChildren(c).map(r => {
                let a = i[r].data.type;
                let c = {
                  id: r,
                  parent: e,
                  estimateHeight: S(r, n, i, o)
                };
                switch (a) {
                  case docBlockTypeConstants.blockTypeConstants.TABLE:
                    if (!docxBlockChildrenUtils_1.hasMergedCells(i[r].data.cell_set)) {
                      return {
                        id: r,
                        parent: e,
                        estimateHeight: S(r, n, i, o)
                      };
                    }
                    return {
                      id: r,
                      parent: e,
                      estimateHeight: I(r, n, i, o),
                      virtual: "table"
                    };
                  case docBlockTypeConstants.blockTypeConstants.GRID:
                    return {
                      id: r,
                      parent: e,
                      estimateHeight: A(r, n, i, o),
                      virtual: "grid"
                    };
                  case docBlockTypeConstants.blockTypeConstants.OBJECTIVE:
                    if (docxShortcutFeatureDetection.isOkrContentHighlightShare()) {
                      return c;
                    }
                    return {
                      id: r,
                      parent: e,
                      estimateHeight: M(r, n, i, o),
                      virtual: "okr_objective"
                    };
                  default:
                    return c;
                }
              });
            }
          }(e, m, b, L, n);
        }
      });
      docxShortcutFeatureDetection.debugLogger(JSON.stringify({
        pruneMaxHeight: N,
        totalEstimateHeight: $,
        afterAnchorEstimateHeight: F
      }));
      return {
        anchorIndex: D,
        flattenBlocks: L
      };
    }({
      anchor: b,
      pageToken: f,
      oldRecordMap: p
    }, n);
    docxShortcutFeatureDetection.debugLogger(`anchorIndex:${JSON.stringify(k)}`);
    let {
      newRecordMap: T,
      childrenMap: L
    } = function (e, n, i) {
      let r = {};
      let [o, a] = e;
      let c = n.slice(o, a + 1);
      let s = {};
      let u = {};
      let f = c.shift();
      let h = (e, n, i) => {
        let r = s[e];
        if (!r) {
          r = [];
          s[e] = r;
        }
        if (r.indexOf(n) === -1) {
          if (i) {
            r.unshift(n);
          } else {
            r.push(n);
          }
        }
      };
      let p = e => {
        let n = docxBlockChildrenUtils_1.getBlockChildren(e)[0];
        if (n) {
          O(n, r, i, true);
          h(e.id, n, true);
        }
      };
      let m = e => {
        let n = Array.isArray(e.data.rows_id) && e.data.rows_id[0];
        if (e.data.header_row && n) {
          P(n, e.id, r, i, true);
        }
      };
      let v = e => {
        let n = i[e];
        if (n) {
          let {
            type: o
          } = n.data;
          if (o === docBlockTypeConstants.blockTypeConstants.CALLOUT) {
            p(n);
          } else if (o === docBlockTypeConstants.blockTypeConstants.TABLE) {
            m(n);
          }
          O(e, r, i);
        }
      };
      let g = 0;
      while (f) {
        if (g++ > 40000) {
          throw Error("prunedPartialBlocks call max");
        }
        let {
          parent: e,
          virtual: n,
          id: o
        } = f;
        switch (n) {
          case "table":
            N(o, r, i);
            break;
          case "row":
            P(o, e.id, r, i);
            break;
          case "grid":
          case "okr_objective":
            O(o, r, i, true);
            break;
          case "ignore":
            r[o] = i[o];
            break;
          default:
            v(o);
        }
        if (e) {
          let n = e.id;
          h(n, o);
          if (!u[n]) {
            c.unshift(e);
            u[n] = 1;
          }
        }
        f = c.shift();
      }
      return {
        newRecordMap: r,
        childrenMap: s
      };
    }(function (e, n, i) {
      let r = 0;
      let o = e;
      let a = e;
      let l = n[e].estimateHeight;
      let c = n.length - 1;
      let s = C(i);
      let u = s / 2;
      let d = (i == null ? undefined : i.textualCard) ? u : s;
      while (l < d && a < c) {
        let {
          estimateHeight: e
        } = n[a += 1];
        l += e;
        if (r++ > 40000) {
          throw Error(`getPrunedPartial while1 call max, endIndex:${c}, nextIndex:${a}, prunedHeight:${l}`);
        }
      }
      if (i == null ? undefined : i.textualCard) {
        r = 0;
        let e = s - l;
        for (e = Math.max(u, e); e > 0 && o > 0;) {
          let {
            estimateHeight: i
          } = n[o -= 1];
          e -= i;
          l += i;
          if (r++ > 40000) {
            throw Error(`getPrunedPartial while2 call max, preIndex:${o}, leftPruneHeight:${e}`);
          }
        }
      }
      for (r = 0; l < s && a < c;) {
        let {
          estimateHeight: e
        } = n[a += 1];
        l += e;
        if (r++ > 40000) {
          throw Error(`getPrunedPartial while3 call max, nextIndex:${a}, prunedHeight:${l}`);
        }
      }
      return [o, a];
    }(k, _, n), _, p);
    docxShortcutFeatureDetection.debugLogger(`around pruned blocks count is ${Object.keys(T).length}`);
    for (let e of Object.keys(L)) {
      if (Array.isArray(T[e].data.children)) {
        T[e].data.children = L[e];
      }
    }
    docxShortcutFeatureDetection.debugLogger(`around pruned cost time: ${Date.now() - a}`);
    return T;
  }
  require.d(exports, {
    pruneClientVarsByAround: function () {
      return L;
    },
    isBlockPrunable: function () {
      return x;
    }
  });
}