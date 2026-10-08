// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'pasteStateManager'
// - Resolved require(764327) to 'paste-state-manager'
// - Renamed variable 'i' to 'clipboardPasteDataHandlers'
// - Resolved require(324971) to 'clipboard-paste-data-handlers'
// - Renamed variable 'l' to 'editorRevisionUtilities'
// - Resolved require(80308) to 'editor-revision-utilities'
// - Renamed variable 's' to 'editorRevisionDeleteOperations'
// - Resolved require(642450) to 'editor-revision-delete-operations'
// - Renamed variable 'c' to 'revisionSelectionHandler'
// - Resolved require(227683) to 'revision-selection-handler'
// - Updated imported property 'eI' to 'filterBlockModels' (module 80308)
// - Updated imported property 'SG' to 'createDeleteRevisionWithSelection' (module 642450)
// - Updated imported property 'cE' to 'applyRevisionToRecords' (module 227683)
// - Updated imported property 'dJ' to 'clearRevisionsFromRecords' (module 227683)
// - Updated imported property 'WK' to 'getPasteState' (module 764327)
// - Updated imported property 'B8' to 'pasteOperationTypes' (module 433991)
// - Updated imported property 'rd' to 'pasteLifecycleHooks' (module 324971)
// - Updated imported property 'vg' to 'pasteHandlerMap' (module 324971)
// - Updated imported property 'VB' to 'beforeDataApplyHooks' (module 324971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-paste.72da7bc2.js
         * chunkId: 90580
         * moduleId: 751599
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var pasteStateManager = require("paste-state-manager") /*id: 764327*/;
  var clipboardPasteDataHandlers = require("clipboard-paste-data-handlers") /*id: 324971*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorRevisionDeleteOperations = require("editor-revision-delete-operations") /*id: 642450*/;
  var revisionSelectionHandler = require("revision-selection-handler") /*id: 227683*/;
  function d(e) {
    if (function (e) {
      let {
        editorContext: r
      } = e;
      let {
        revisionInfo: o
      } = r;
      return !!o && !o.isAppliedByBeforeProcess;
    }(e)) {
      (function (e) {
        let {
          editorContext: r,
          op: o
        } = e;
        let {
          blockManager: n,
          selectionAPI: a,
          revisionInfo: i
        } = r;
        let {
          deleteRevision: c,
          replaceSelectedBlocks: d
        } = i;
        if (!c) {
          return;
        }
        let p = a.isBlockSelection(d);
        let u = editorRevisionUtilities.filterBlockModels(n, d, p);
        editorRevisionDeleteOperations.createDeleteRevisionWithSelection(n, o, {
          selectedBlocks: u,
          isBlockSelection: p,
          deleteRevision: c
        }, {
          useTextApply: true
        });
      })(e);
      (function (e) {
        let {
          editorContext: r,
          data: o
        } = e;
        let {
          revisionInfo: n
        } = r;
        let {
          recordIds: a,
          recordMap: i
        } = o;
        let {
          addRevision: l
        } = n;
        revisionSelectionHandler.applyRevisionToRecords(a, i, l);
      })(e);
    }
  }
  function p(e) {
    let {
      data: r,
      blockManager: o
    } = e;
    let {
      recordIds: i,
      recordMap: l
    } = r;
    let {
      from: s,
      pasteTimes: d
    } = pasteStateManager.getPasteState();
    if (s !== docBlockTypeConstants.pasteOperationTypes.innerCutPaste || d || o.config.get("revising")) {
      revisionSelectionHandler.clearRevisionsFromRecords(i, l);
    }
  }
  let u = [{
    hookName: clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData,
    hookCallback: p,
    options: {
      priority: clipboardPasteDataHandlers.pasteHandlerMap[clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData].removeRevisionData
    }
  }, {
    hookName: clipboardPasteDataHandlers.pasteLifecycleHooks.beforeBlockDataApply,
    hookCallback: d,
    options: {
      priority: clipboardPasteDataHandlers.beforeDataApplyHooks.callBeforeDataApplyForRevision
    }
  }];
  exports.default = u;
  require.r(exports);
  require.d(exports, {
    callBeforeDataApplyForRevision: function () {
      return d;
    },
    preprocessRevisionData: function () {
      return p;
    }
  });
}