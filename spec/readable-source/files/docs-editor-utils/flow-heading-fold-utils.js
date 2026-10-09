// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C9' to 'getHeadingInsert'
// - Renamed export 'E$' to 'getInsertOps'
// - Renamed export 'SP' to 'parseHeadingLevel'
// - Renamed export 'SR' to 'isFoldedHeading'
// - Renamed export 'Sf' to 'findNextHeading'
// - Renamed export 'aL' to 'getVisibleHeading'
// - Renamed export 'fK' to 'getHeadingRemove'
// - Renamed export 'je' to 'checkFoldState'
// - Renamed export 'tn' to 'toggleHeadingFold'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 451530
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  function l(e, n, r, o) {
    let i = r ? u(e, [n], o) : c(e, [n], false, o);
    let l = i.filter(n => e.hasRecordByRecordId(n) && e.getRecord(n).snapshot.type.includes("heading"));
    let a = l.map(n => e.getBlockIdsByRecordId(n)[0]).filter(Boolean);
    return {
      recordIds: i,
      orderedRecordIds: l,
      orderedBlockIds: a
    };
  }
  function c(e, n, r, i) {
    return n.reduce((n, l) => {
      let {
        ops: c
      } = l;
      let u = r ? c.filter(collaborativeEditingFlowSyncModule.$b).map(e => e.action.li) : c.filter(collaborativeEditingFlowSyncModule.isDeleteOperation).map(e => e.action.ld);
      if (i) {
        [...u].forEach(n => {
          (function e(n, r, o, i) {
            if (!i) {
              o(r);
            }
            let l = n.getRecord(r);
            if (l) {
              l.snapshot.children.forEach(r => e(n, r, o));
            }
          })(e, n, e => {
            u.push(e);
          });
        });
      }
      let a = u.sort((n, r) => {
        let o = e.getBlockModelsByRecordId(n)[0];
        let i = e.getBlockModelsByRecordId(r)[0];
        if (o) {
          if (i) {
            return o.position - i.position;
          } else {
            return -1;
          }
        } else {
          return 1;
        }
      });
      n.push(...a);
      return n;
    }, []);
  }
  function u(e, n, r) {
    return c(e, n, true, r);
  }
  function a(e, n, r) {
    return l(e, n, true, r);
  }
  function s(e, n, r) {
    return l(e, n, false, r);
  }
  function d(e) {
    return docxBlockValidatorUtils.isHeadingBlock(e.type) && e.snapshot.folded === true;
  }
  function f(e, n) {
    return e.snapshot.folded === true && !docxBlockValidatorUtils.isHeadingBlock(e.type) && docxBlockValidatorUtils.isHeadingBlock(n.type);
  }
  function h(e, n, r) {
    if (r.isShow(e.id)) {
      if (d(e)) {
        return e;
      } else {
        return null;
      }
    }
    let o = e;
    while (!r.isShow(o.id)) {
      let e = r.getFoldStateById(o.id);
      if (!e || !e.foldedBy) {
        return null;
      }
      o = n.getBlockModelByBlockId(e.foldedBy);
    }
    if (d(o)) {
      return o;
    } else {
      return null;
    }
  }
  function _(e, n) {
    if (!e) {
      return null;
    }
    for (e = e.nextSibling; e;) {
      if (n.isShow(e.id) && docxBlockValidatorUtils.isHeadingBlock(e.type)) {
        return e;
      }
      e = e.nextSibling;
    }
    return null;
  }
  async function p(e, n) {
    let r = e.reduce((e, n) => {
      if (d(n)) {
        e.push(n.recordId);
      }
      return e;
    }, []);
    if (r.length > 0) {
      await n.applyTransaction("unfoldFoldedHeading", e => {
        r.forEach(n => {
          e.replace(n, ["folded"], false);
        });
      }, {
        mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE
      });
    }
    return async () => {
      if (r.length > 0) {
        await n.applyTransaction("foldUnfoldedHeadingByContainerTurnInto", e => {
          r.forEach(n => {
            e.replace(n, ["folded"], true);
          });
        }, {
          mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE
        });
      }
    };
  }
  let g = e => {
    let n = "heading";
    if (e && e.includes(n)) {
      return Number(e.slice(n.length));
    } else {
      return null;
    }
  };
  require.d(exports, {
    getHeadingInsert: function () {
      return a;
    },
    getInsertOps: function () {
      return u;
    },
    parseHeadingLevel: function () {
      return g;
    },
    isFoldedHeading: function () {
      return d;
    },
    findNextHeading: function () {
      return _;
    },
    getVisibleHeading: function () {
      return h;
    },
    getHeadingRemove: function () {
      return s;
    },
    checkFoldState: function () {
      return f;
    },
    toggleHeadingFold: function () {
      return p;
    }
  });
}