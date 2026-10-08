// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$D' to 'getTempTxId'
// - Renamed export 'BS' to 'cancelTempTx'
// - Renamed export 'Ij' to 'applyTempTx'
// - Renamed export 'M4' to 'submitTempTx'
// - Renamed export 'Sr' to 'execSecondPartyTx'
// - Renamed export 'XY' to 'removeSecPartyBlks'
// - Renamed export 'hv' to 'getRestrictedTypes'
// - Renamed export 'rL' to 'getSecPartyMounts'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 633045
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var flowDocEventCollector = require("flow-doc-event-collector") /*id: 276732*/;
  var docxOfflineStatusCheck = require("docx-offline-status-check") /*id: 691844*/;
  var tempTransactionConst = require("temp-transaction-const") /*id: 825163*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var getChildrenUtil = require("get-children-util") /*id: 78534*/;
  var nodeConfigRegistry = require("node-config-registry") /*id: 741507*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  function v(e, n, i, o) {
    if (docxOfflineStatusCheck.isDocxOfflineEnabled()) {
      e.applyTransaction(n, i, Object.assign({
        from: collaborativeEditingFlowSyncModule.kq.TEMPORARY
      }, o));
      e.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "apply_temp_transaction",
        info: JSON.stringify({
          transactionName: n,
          options: o
        })
      });
    }
  }
  function b(e, n) {
    let {
      dataService: i,
      editorAPI: r
    } = e;
    let o = r.getService(collabTriggersProvider.collabProvider, {
      optional: true
    });
    if (!o) {
      return;
    }
    let a = o.hasTempChange(n);
    r.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
      action: "submit_temp_transaction",
      info: JSON.stringify({
        hasTempChange: a,
        transactionName: n
      })
    });
    if (a) {
      i.submitTempTransaction(n);
    }
  }
  function _(e, n) {
    let {
      dataService: i,
      editorAPI: r
    } = e;
    let o = r.getService(collabTriggersProvider.collabProvider, {
      optional: true
    });
    if (!o) {
      return;
    }
    let a = o.hasTempChange(n);
    r.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
      action: "cancel_temp_transaction",
      info: JSON.stringify({
        hasTempChange: a,
        transactionName: n
      })
    });
    if (a) {
      i.cancelTempTransaction(n);
    }
  }
  function y(e) {
    let {
      parentRecord: i,
      op: r,
      secondPartyRecordIds: o
    } = e;
    let a = [];
    if (!docBlockTypeConstants.gridQuoteTypes.includes(i.snapshot.type) || i.snapshot.children?.length) {
      o.forEach(e => {
        a.unshift({
          id: e,
          mountType: "append"
        });
      });
    } else {
      let e = i.id;
      let n = documentBlockOperations.createSingleBlock(r, e, documentNodeUtils_2.createDocumentNode());
      r.replaceChildren(e, [n]);
      o.forEach((e, n) => {
        if (n === o.length - 1) {
          a.unshift({
            id: e,
            mountType: "replace"
          });
        } else {
          a.unshift({
            id: e,
            mountType: "append"
          });
        }
      });
    }
    return a;
  }
  function w(e) {
    let {
      secondPartyBlockTempTransactionInfos: n,
      blockManager: i,
      parentRecordId: r,
      position: o,
      transactionOptions: a = {}
    } = e;
    n.forEach(e => {
      let n;
      let {
        id: s,
        mountType: l,
        relatedRecordId: c
      } = e;
      v(i, k(s), e => {
        if (r) {
          n = e.get(r);
        } else {
          let i = e.get(s);
          if (i.snapshot.parent_id) {
            n = e.get(i.snapshot.parent_id);
          }
        }
        if (n) {
          switch (l) {
            case "append":
              {
                let r = o || 0;
                if (c) {
                  var i;
                  let e = ((i = n.snapshot.children) === null || i === undefined ? undefined : i.findIndex(e => e === c)) ?? -1;
                  if (e > -1) {
                    r = e + 1;
                  }
                }
                documentBlockOperations.moveChildren(e, n.id, r, [s]);
              }
              break;
            case "replace":
              e.replaceChildren(n.id, [s]);
          }
        }
      }, a);
    });
  }
  function E() {
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      return [];
    }
    let e = [];
    e.push(docBlockTypeConstants.blockTypeConstants.SHEET);
    e.push(docBlockTypeConstants.blockTypeConstants.VIEW, docBlockTypeConstants.blockTypeConstants.FILE);
    return docBlockTypeConstants.imageOnlyTypes.concat(e);
  }
  function k(e) {
    return `${tempTransactionConst.tempTransaction}-${platformDocUtils.p5T(e)}`;
  }
  require.d(exports, {
    getTempTxId: function () {
      return k;
    },
    cancelTempTx: function () {
      return _;
    },
    applyTempTx: function () {
      return v;
    },
    submitTempTx: function () {
      return b;
    },
    execSecondPartyTx: function () {
      return w;
    },
    removeSecPartyBlks: function () {
      return function e(n, i, r, o = false) {
        if (!n) {
          return;
        }
        let s = E();
        if (s.length) {
          try {
            n.forEach(n => {
              var p;
              var v;
              let b = i.get(n);
              if (b.snapshot.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE && o) {
                return;
              }
              let _ = [...(b.snapshot.children ?? [])];
              if (_.length === 0) {
                _ = (nodeConfigRegistry.getConfig(b.snapshot.type)?.deriveChildren || getChildrenUtil.getChildren)(b.snapshot, b);
              }
              if (s.includes(b.snapshot.type)) {
                let e = i.get(b.snapshot.parent_id);
                if ((docBlockTypeConstants.gridQuoteTypes.includes(e.snapshot.type) || docBlockTypeConstants.tableCellTypes.includes(e.snapshot.type)) && e.snapshot.children?.length === 1) {
                  let o = documentBlockOperations.createSingleBlock(i, e.id, documentNodeUtils_2.createDocumentNode());
                  i.replaceChildren(e.id, [o]);
                  r.unshift({
                    id: n,
                    mountType: "replace",
                    relatedRecordId: o
                  });
                } else {
                  let o = ((p = e.snapshot.children) === null || p === undefined ? undefined : p.findIndex(e => e === n)) ?? -1;
                  if (o > -1) {
                    let a;
                    if (o > 0) {
                      a = (v = e.snapshot.children) === null || v === undefined ? undefined : v.find((e, n) => n === o - 1);
                    }
                    r.unshift({
                      id: n,
                      mountType: "append",
                      relatedRecordId: a
                    });
                    i.removeChildren(e.id, [n]);
                  }
                }
              } else if (_.length > 0) {
                e(_, i, r);
              }
            });
          } catch (e) {
            flowDocEventCollector.collectEvent("doc_bug_track_dev", {
              action: "recursiveRemoveSecondPartyBlockLI",
              info: JSON.stringify(e)
            });
          }
        }
      };
    },
    getRestrictedTypes: function () {
      return E;
    },
    getSecPartyMounts: function () {
      return y;
    }
  });
}