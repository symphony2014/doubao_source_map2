// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'getBoundaryNodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 502677
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  function o(e, i) {
    let r = [];
    e.forEach(e => {
      let {
        children: o
      } = i;
      if (i.recordId !== e.id) {
        return;
      }
      let {
        isFirstOp: l,
        nodeIndexHeightChange: s
      } = function (e) {
        let {
          ops: i
        } = e;
        let r = i[0];
        if (collaborativeEditingFlowSyncModule.$b(r) && r.p[1] === 0) {
          return {
            isFirstOp: true,
            nodeIndexHeightChange: 0
          };
        } else if (collaborativeEditingFlowSyncModule.isDeleteOperation(r) && r.p[1] === 0) {
          return {
            isFirstOp: true,
            nodeIndexHeightChange: 1
          };
        } else {
          return {
            isFirstOp: false,
            nodeIndexHeightChange: -1
          };
        }
      }(e);
      if (l) {
        r[0] = o[s];
      }
      let {
        isEndOp: a,
        nodeIndexHeightChange: c
      } = function (e, i) {
        let {
          ops: r
        } = e;
        let o = i - 1;
        for (let e of r) {
          if (collaborativeEditingFlowSyncModule.$b(e) && e.p[1] === o + 1) {
            return {
              isEndOp: true,
              nodeIndexHeightChange: o
            };
          }
          if (collaborativeEditingFlowSyncModule.isDeleteOperation(e) && e.p[1] && e.p[1] === o) {
            return {
              isEndOp: true,
              nodeIndexHeightChange: o - 1
            };
          }
        }
        return {
          isEndOp: false,
          nodeIndexHeightChange: -1
        };
      }(e, o.length);
      if (a) {
        r[1] = o[c];
      }
    });
    return r;
  }
  require.d(exports, {
    getBoundaryNodes: function () {
      return o;
    }
  });
}