// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'turnIntoGrid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 518915
         */
module.exports = function (module, exports, require) {
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var blockInsertionHandler = require("block-insertion-handler") /*id: 235064*/;
  var blockFocusStates = require("block-focus-states") /*id: 324508*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var gridColumnLayoutUtils = require("grid-column-layout-utils") /*id: 139275*/;
  async function s(e) {
    let {
      blocks: r,
      blockManager: o,
      mark: s,
      panelType: d,
      columnNum: u = 2
    } = e;
    await blockInsertionHandler.insertBlockHandler({
      blocks: r,
      panelType: d,
      mark: s,
      focusType: blockFocusStates.focusStates.CONTAINER_BLOCK_FOCUS,
      isTurnIntoBlock: true,
      createDataCallback: e => {
        let {
          op: r,
          childRecordIds: n,
          blockOps: a
        } = e;
        let [s,, d] = a;
        let p = o.getBlockIdsByRecordId(s)[0];
        return {
          createRecordIds: [gridColumnLayoutUtils.createGridFromBlocks({
            blockManager: o,
            index: d,
            parentBlockId: p,
            columnNum: u,
            op: r,
            getColumnChildrenInfo: (e, r, a) => {
              let c = r !== 0;
              return [{
                isNewCreateChild: c,
                id: !c && n ? n[0] : documentBlockOperations.createSingleBlock(e, a, o.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT))
              }];
            }
          })]
        };
      }
    });
  }
  require.d(exports, {
    turnIntoGrid: function () {
      return s;
    }
  });
}