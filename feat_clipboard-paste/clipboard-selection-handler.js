// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'docxBlockSelectionHandler_1'
// - Resolved require(801350) to 'docx-block-selection-handler_1'
// - Renamed variable 'i' to 'clipboardPasteDataHandlers'
// - Resolved require(324971) to 'clipboard-paste-data-handlers'
// - Updated imported property 'RT' to 'blockTypes' (module 801350)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'rd' to 'pasteLifecycleHooks' (module 324971)
// - Updated imported property 'vg' to 'pasteHandlerMap' (module 324971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-paste.72da7bc2.js
         * chunkId: 90580
         * moduleId: 609893
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var clipboardPasteDataHandlers = require("clipboard-paste-data-handlers") /*id: 324971*/;
  function l(e) {
    let {
      selectedBlocks: r,
      blockManager: o
    } = e;
    let i = r.map(i => {
      if (i.type !== docxBlockSelectionHandler_1.blockTypes.BLOCK) {
        return i;
      }
      let {
        parent: l
      } = o.getBlockModelByBlockId(i.id);
      if (l && l.type === docBlockTypeConstants.blockTypeConstants.VIEW) {
        if (r.length === 1) {
          e.parentBlockStruct = l.parent;
        }
        i.id = l.id;
      }
      return i;
    });
    e.selectedBlocks = i;
  }
  let s = [{
    hookName: clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData,
    hookCallback: l,
    options: {
      priority: clipboardPasteDataHandlers.pasteHandlerMap[clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData].changeSelectionForUnselectBlock
    }
  }];
  exports.default = s;
  require.r(exports);
  require.d(exports, {
    changeSelectionForUnselectBlock: function () {
      return l;
    }
  });
}