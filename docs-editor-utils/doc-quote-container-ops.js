// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Jy' to 'canTurnIntoQuote'
// - Renamed export 'Mw' to 'validateQuoteSel'
// - Renamed export 'R3' to 'isInsideQuote'
// - Renamed export 'Zv' to 'findParentQuote'
// - Renamed export 'by' to 'isOnlyChildInQuote'
// - Renamed export 'h2' to 'turnIntoQuote'
// - Renamed export 'hu' to 'isQuoteSupported'
// - Renamed export 'pp' to 'filterBlocks'
// - Renamed export 'ug' to 'exitQuoteContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 780546
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var deferredPromiseFactory_1 = require("deferred-promise-factory_1") /*id: 397926*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var docBlockTreeUtils = require("doc-block-tree-utils") /*id: 772264*/;
  var treeNodeMoveUtil = require("tree-node-move-util") /*id: 497145*/;
  var gridColumnLayoutUtils = require("grid-column-layout-utils") /*id: 139275*/;
  var docBlockAnimationConstants = require("doc-block-animation-constants") /*id: 855633*/;
  var docxSyncedBlockUtils = require("docx-synced-block-utils") /*id: 791402*/;
  var insertBlockWithChildSnapshotHelper = require("insert-block-with-child-snapshot-helper") /*id: 554298*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var selectionServiceProviderName = require("selection-service-provider-name") /*id: 572319*/;
  var flowHeadingFoldUtils = require("flow-heading-fold-utils") /*id: 451530*/;
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var quoteContainerSelectors = require("quote-container-selectors") /*id: 604018*/;
  function y(e, n) {
    let r = e.getBlockModelByBlockIdNotCheck(n);
    while (r && r.parent) {
      if (r.type === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER) {
        return r;
      }
      r = r.parent;
    }
    return null;
  }
  function O(e, n) {
    if (!e.length) {
      return {
        parentBlockModel: [],
        noInSelChildBlockModel: []
      };
    }
    let r = e[0].editorAPI.getService(selectionServiceProviderName.selectionServiceKey).getSelection();
    let {
      modelService: o
    } = e[0].editorAPI;
    let i = e.filter(n => {
      let r = n;
      while (r.parent) {
        if (e.find(e => {
          return e.id === r.parent?.id;
        })) {
          return false;
        }
        r = r.parent;
      }
      return true;
    });
    i = i.map(e => {
      if (e.type === docBlockTypeConstants.blockTypeConstants.FILE && e.parent?.type === docBlockTypeConstants.blockTypeConstants.VIEW && o.hasBlockModelByBlockId(e.parent.id)) {
        return e.parent;
      } else {
        return e;
      }
    });
    let l = [];
    if (n) {
      e.forEach(n => {
        let o = r.find(e => e.id === n.id);
        if (o && o.type === editorTypeConstants.blockTypes.BLOCK) {
          return;
        }
        let i = [];
        n.children.forEach(n => {
          if (!e.find(e => e.id === n.id) && ![docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN].includes(n.type)) {
            i.push(n);
          }
        });
        l.unshift(...i);
        i = [];
      });
      return {
        parentBlockModel: i,
        noInSelChildBlockModel: l
      };
    } else {
      return {
        parentBlockModel: i,
        noInSelChildBlockModel: []
      };
    }
  }
  function S(e) {
    let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let {
      blockManager: r,
      condition: o,
      blockId: i
    } = e;
    let l = Array.isArray(i) ? i : [i];
    let c = [];
    if (n) {
      l.forEach(e => {
        r.traverse(e, e => {
          let n = o(r.getBlockModelByBlockId(e));
          if (!n) {
            c.push(e);
          }
          return n;
        });
      });
    } else {
      l.forEach(e => {
        if (!o(r.getBlockModelByBlockId(e))) {
          c.push(e);
        }
      });
    }
    return c;
  }
  async function A(e) {
    let n;
    let r;
    let {
      blockManager: u,
      models: a,
      beforeTurnInto: g,
      beforeTurnIntoApplyOptions: E = {},
      isMultipleSelection: m,
      selections: T
    } = e;
    let A = m && a.length !== T.length;
    if (!a.length) {
      return T;
    }
    let L = a[0];
    if (!L.parent || y(u, L.parent.id)) {
      return T;
    }
    let {
      noInSelChildBlockModel: N
    } = O(a, m);
    let D = u.createSnapshot(docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER);
    let {
      quoteBlockModelArr: w,
      invalidBlockModels: M
    } = function (e, n) {
      let r;
      let o;
      let i = [];
      let l = [];
      let {
        parentBlockModel: c
      } = O(e);
      let u = [];
      let a = e => !e.struct.findDescendant(e => docBlockAnimationConstants.supportedBlockTypes.includes(e.type)) && !docBlockAnimationConstants.supportedBlockTypes.includes(e.type);
      c.forEach(e => {
        var s;
        let h = docBlockTreeUtils.findParentByType(e, [docBlockTypeConstants.blockTypeConstants.CELL])?.id ?? null;
        let p = ((s = gridColumnLayoutUtils.getGridColumnAncestry(e.id, n)) === null || s === undefined ? undefined : s.gridColumnBlock.id) || null;
        if (a(e)) {
          if (h !== r || p !== o) {
            r = h;
            o = p;
            if (u.length) {
              i.push([...u]);
            }
            u = [];
          }
          u.push(e);
        } else if (u.length) {
          i.push([...u]);
          u = [];
          l.push(e);
        }
      });
      if (u.length > 0) {
        i.push([...u]);
      }
      return {
        quoteBlockModelArr: i,
        invalidBlockModels: l
      };
    }(a, u);
    let P = M.map(e => e.id);
    N = N.filter(e => {
      let n = e.parent;
      while (n) {
        if (P.includes(n.id)) {
          return false;
        }
        n = n.parent;
      }
      return true;
    });
    if (!w.length) {
      return T;
    }
    let F = [];
    let x = m ? quoteContainerSelectors.quoteContainerMulti : quoteContainerSelectors.enterQuoteContainer;
    let U = function (e, n, r, o, c) {
      if (n.length === 0) {
        return false;
      }
      if (o || e.length !== 1 || arrayFirstElement.getFirstElement(n).id !== arrayFirstElement.getFirstElement(e[0]).id) {
        return true;
      }
      let u = arrayFirstElement.getFirstElement(e);
      if (r) {
        return lastElementHelper.getLastElement(u).id !== lastElementHelper.getLastElement(n).id && !docxBlockUtils_1.isDescendantBlock(lastElementHelper.getLastElement(u).id, lastElementHelper.getLastElement(n).id, c);
      } else {
        return (!n.every(e => !syncedTranslationBlockUtils.hasTranslateSnapshot(c.getBlockModelByBlockIdNotCheck(e.id))) || !u.some(syncedTranslationBlockUtils.hasTranslateSnapshot)) && n.length !== u.length;
      }
    }(w, T, m, A, u);
    if (g) {
      await u.applyTransaction("beforeBatchTurnInto", e => {
        g(e);
      }, {
        ...E,
        mergeMode: collaborativeEditingFlowSyncModule.CollabMode.SPLIT
      });
    }
    let G = await flowHeadingFoldUtils.toggleHeadingFold(a, u);
    let H = deepCloneWrapper_1.deepClone(T);
    await u.applyTransaction(x, e => {
      w.forEach(o => {
        let c = (r = o[0].parent) == null ? undefined : r.snapshot.children;
        if (!r || !c) {
          return;
        }
        n = c.indexOf(o[0].recordId);
        let a = o.map(e => e.id);
        let s = o.map(e => e.recordId);
        let {
          oldQuoteBlockModel: _
        } = function (e, n) {
          let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
          let o = [];
          let i = [];
          n.forEach(n => {
            if (n.type === docBlockTypeConstants.blockTypeConstants.QUOTE) {
              o.push(n);
            }
            i.push(...S({
              blockManager: e,
              blockId: n.id,
              condition: e => !docBlockAnimationConstants.supportedBlockTypes.includes(e.type)
            }, r));
          });
          return {
            oldQuoteBlockModel: o,
            notSupportBlockIds: i
          };
        }(u, o, !m);
        documentBlockOperations.removeBlockItems(e, a, u);
        if (_.length) {
          _.forEach(n => e.replace(n.record.id, ["type"], docBlockTypeConstants.blockTypeConstants.TEXT));
        }
        let [g] = documentBlockOperations.insertNewChildren(e, r.recordId, n, [D]);
        treeNodeMoveUtil.insertChildrenUtil(e, s, g, 0);
        F.push(g);
        if (U && H.length > 0) {
          let e = H.findIndex(e => typeof e != "string" && e.id === editorSelectionUtilities.getFirstNonSelectionViewBlock(arrayFirstElement.getFirstElement(o)).id);
          if (e > -1) {
            let n;
            if (m) {
              let r = docBlockTreeUtils.getLastChildNode(lastElementHelper.getLastElement(o));
              let i = H.findIndex(e => typeof e != "string" && e.id === r.id);
              while (i === -1) {
                let {
                  previous: n
                } = r;
                if (!n) {
                  i = e - 1;
                  break;
                }
                r = n;
                i = H.findIndex(e => typeof e != "string" && e.id === r.id);
              }
              n = i - e + 1;
            } else {
              n = o.length;
            }
            H.splice(e, n, g);
          }
        }
      });
      if (N.length && r && n !== -1) {
        documentBlockOperations.removeBlockItems(e, N.map(e => e.id), u);
        documentBlockOperations.moveChildren(e, r.recordId, n + 1, N.map(e => e.recordId));
      }
    }, {
      mergeMode: g ? collaborativeEditingFlowSyncModule.CollabMode.MERGE : undefined
    });
    if (F.length) {
      B({
        blockId: F.map(e => u.getBlockIdsByRecordId(e)[0]),
        blockManager: u
      });
    }
    await G();
    if (U) {
      return H.reduce((e, n) => {
        let r;
        r = typeof n == "string" ? {
          id: u.getBlockModelsByRecordId(n)[0].id,
          type: editorTypeConstants.blockTypes.BLOCK
        } : n;
        e.push(r);
        return e;
      }, []);
    } else {
      return T;
    }
  }
  function L(e, n) {
    n.forEach(n => {
      if (flowHeadingFoldUtils.isFoldedHeading(n)) {
        e.replace(n.recordId, ["folded"], false);
      }
    });
  }
  async function N(e) {
    let {
      blockManager: n,
      models: r,
      isMultipleSelection: o,
      selections: u
    } = e;
    let s = deepCloneWrapper_1.deepClone(u);
    let h = y(n, r[0].id);
    if (r.find(e => e.type === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER) || r.find(e => {
      let r = y(n, e.id);
      return !!r && r.id !== h.id;
    })) {
      let e = deferredPromiseFactory_1.deferredPromise();
      let c = [];
      r.forEach(e => {
        if (e.type === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER) {
          c.push(e);
        } else if (e.parent?.type === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER) {
          c.push(n.getBlockModelByBlockId(e.parent.id));
        }
      });
      await B({
        blockId: c.map(e => e.id),
        blockManager: n,
        isDisappear: false,
        onAnimationEnd: () => {
          let r = [];
          c.forEach(e => {
            let c = n.applyTransaction("exitQuoteContainer", r => {
              let c = e.children.map(e => e.id);
              let u = e.children.map(e => e.recordId);
              let a = e.parent;
              let h = e.position;
              L(r, e.children);
              documentBlockOperations.removeBlockItems(r, c, n);
              documentBlockOperations.moveChildren(r, a.recordId, h, u);
              let _ = s.findIndex(n => n.id === e.id);
              if (_ > -1) {
                let n;
                n = o ? editorSelectionUtilities.getSelectionRangeBetweenBlocks(arrayFirstElement.getFirstElement(e.children), docBlockTreeUtils.getLastChildNode(lastElementHelper.getLastElement(e.children))) : c.map(e => ({
                  id: e,
                  type: editorTypeConstants.blockTypes.BLOCK
                }));
                s.splice(_, 1, ...n);
              }
            });
            r.push(c);
          });
          Promise.all(r).then(() => {
            e.resolve(s);
          }, e.resolve);
        }
      });
      return e.promise;
    }
    let p = async () => {
      let c = [];
      r.forEach(e => {
        let o = gridColumnLayoutUtils.getGridColumnAncestry(e.id, n)?.gridBlock;
        if (o && D(o.id, n)) {
          if (!c.map(e => e.id).includes(o.id)) {
            c.push(o);
          }
        } else {
          c.push(e);
        }
      });
      let u = O(c).parentBlockModel;
      let a = function (e, n, r) {
        if (!n.children.length) {
          return [];
        }
        let o = Array.isArray(e) ? e[e.length - 1] : e;
        if (!r) {
          while (o.children.length) {
            o = o.children[o.children.length - 1];
          }
        }
        let i = [];
        let l = n.children[n.children.length - 1];
        while (l.children.length) {
          l = l.children[l.children.length - 1];
        }
        let c = l.next;
        let u = o.next;
        for ((o.type === docBlockTypeConstants.blockTypeConstants.GRID || o.type === docBlockTypeConstants.blockTypeConstants.OKR) && (u = docBlockTreeUtils.getLastChildNode(o).next); u && u.id !== n.id && u.id !== (c == null ? undefined : c.id);) {
          for (i.push(u); u && u.children.length;) {
            u = u.children[u.children.length - 1];
          }
          u = u.next;
        }
        return i;
      }(c, h, o);
      let p = u.map(e => e.id);
      let g = h.children.indexOf(u == null ? undefined : u[0]) === 0;
      let m = h.struct.contains(u[0]?.struct) && !g;
      let b = +!!m;
      let T = n.createSnapshot(docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER);
      let C = n.applyTransaction("exitQouteContainer", e => {
        L(e, u);
        let r = u.map(e => e.recordId);
        let o = h.parent.recordId;
        if (!m) {
          documentBlockOperations.removeBlockItems(e, [h.id], n);
        }
        documentBlockOperations.removeBlockItems(e, [...p, ...a.map(e => e.id)], n);
        documentBlockOperations.moveChildren(e, o, h.position + b, r);
        if (a.length) {
          if (p.includes(a[0].parent.id)) {
            e.replace(a[0].parent.recordId, ["folded"], false);
          }
          let [r] = documentBlockOperations.insertNewChildren(e, o, h.position + u.length + b, [T]);
          insertBlockWithChildSnapshotHelper.updateChildRelationships(r, a.map(e => e.recordId), n, e, true);
        }
      });
      await C;
      if (o && (arrayFirstElement.getFirstElement(s).id !== arrayFirstElement.getFirstElement(r).id || lastElementHelper.getLastElement(s).id !== lastElementHelper.getLastElement(r).id)) {
        if (arrayFirstElement.getFirstElement(s).id !== arrayFirstElement.getFirstElement(r).id) {
          let e = y(n, arrayFirstElement.getFirstElement(s).id);
          s.splice(0, 1, {
            id: e.id,
            type: editorTypeConstants.blockTypes.BLOCK
          });
        }
        if (lastElementHelper.getLastElement(s).id !== lastElementHelper.getLastElement(r).id) {
          let e = y(n, lastElementHelper.getLastElement(s).id);
          s.splice(s.length - 1, 1, {
            id: e.id,
            type: editorTypeConstants.blockTypes.BLOCK
          });
        }
      }
    };
    await p();
    return s;
  }
  async function B(e) {
    let {
      blockId: n,
      blockManager: r,
      isDisappear: o = true,
      onAnimationEnd: i
    } = e;
    return new Promise(e => {
      (Array.isArray(n) ? n : [n]).map(e => r.getBlockViewByBlockIdNotCheck(e)).map(e => e == null ? undefined : e.hostElement).forEach(n => {
        if (!n) {
          return;
        }
        let r = o ? docBlockAnimationConstants.fadeInClass : docBlockAnimationConstants.fadeOutClass;
        n.classList.add(r);
        let l = () => {
          if (n) {
            n.classList.remove(r);
            n.removeEventListener("animationend", l);
            if (i) {
              i();
            }
            e();
          }
        };
        n.addEventListener("animationend", l);
      });
    });
  }
  function D(e, n) {
    return !!y(n, e);
  }
  function w(e, n) {
    var r;
    if (!e || !D(e, n)) {
      return false;
    }
    let o = n.getBlockModelByBlockId(e);
    return ((r = o.parent) === null || r === undefined ? undefined : r.children.length) === 1 && o.previous === o.parent;
  }
  function M(e) {
    return e.type === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER;
  }
  function P(e) {
    return docBlockTreeUtils.hasParentOfType(e, [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER]);
  }
  function F(e) {
    return docBlockAnimationConstants.supportedBlockTypes.includes(e.type) || !!e.struct.findDescendant(e => docBlockAnimationConstants.supportedBlockTypes.includes(e.type));
  }
  function x(e) {
    return e.length !== 0 && (P(arrayFirstElement.getFirstElement(e)) || e.every(e => M(e) || F(e)));
  }
  function U(e) {
    return e.length !== 0 && !e.some(e => {
      let n = docxSyncedBlockUtils.findSyncedSourceId(e, e.editorAPI.getService(blockManagerToken.blockManagerToken));
      let r = isNumberUtil.isNumber(n) && e.editorAPI.getService(blockManagerToken.blockManagerToken).getBlockModelByBlockIdNotCheck(n);
      let o = docBlockTreeUtils.findNodeByType(e, [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE]);
      return (o == null ? undefined : o.type) === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE && r && P(r);
    }) && (e.length === 0 || !docBlockTreeUtils.hasParentOfType(e[0], [docBlockTypeConstants.blockTypeConstants.OKR])) && function (e) {
      if (e.length === 0) {
        return false;
      }
      let n = new Set();
      return P(arrayFirstElement.getFirstElement(e)) || e.some(e => {
        if (M(e)) {
          return true;
        }
        let r = docBlockTreeUtils.findNonSelectionParent(e);
        return (!r || !n.has(r.recordId)) && !F(e) || (n.add(e.recordId), false);
      });
    }(e);
  }
  require.d(exports, {
    canTurnIntoQuote: function () {
      return U;
    },
    validateQuoteSel: function () {
      return x;
    },
    isInsideQuote: function () {
      return D;
    },
    findParentQuote: function () {
      return y;
    },
    isOnlyChildInQuote: function () {
      return w;
    },
    turnIntoQuote: function () {
      return A;
    },
    isQuoteSupported: function () {
      return F;
    },
    filterBlocks: function () {
      return S;
    },
    exitQuoteContainer: function () {
      return N;
    }
  });
}