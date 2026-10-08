// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'handleToolboxGroupItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 75033
         */
module.exports = function (module, exports, require) {
  var blockInsertionHandler = require("block-insertion-handler") /*id: 235064*/;
  var blockFocusStates = require("block-focus-states") /*id: 324508*/;
  var tableActionHelper = require("table-action-helper") /*id: 826304*/;
  var editorRevisionHandlers = require("editor-revision-handlers") /*id: 977441*/;
  let c = async e => {
    let {
      blockManager: l,
      blocks: o,
      panelType: c,
      eRange: u,
      mark: d,
      ranks: s
    } = e;
    let p = {};
    let b = {};
    editorRevisionHandlers.handleAddRevision(l, p, b);
    await blockInsertionHandler.insertBlockHandler({
      blocks: o,
      panelType: c,
      eRange: u,
      mark: d,
      focusType: blockFocusStates.focusStates.CONTAINER_BLOCK_FOCUS,
      transactionOptions: b,
      createDataCallback: e => {
        let {
          op: l,
          blockOps: o
        } = e;
        let [n,, r] = o;
        let {
          tableRecordId: a,
          firstTextRecordId: c
        } = tableActionHelper.createTable({
          op: l,
          ranks: s,
          parentRecordId: n,
          position: r,
          revisions: p.revisions
        });
        return {
          createRecordIds: [a],
          focusRecordId: c
        };
      }
    });
  };
  require.d(exports, {
    handleToolboxGroupItems: function () {
      return c;
    }
  });
}