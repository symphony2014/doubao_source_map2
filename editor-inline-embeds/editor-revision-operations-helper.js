// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Qu' to 'getRevisionInfo'
// - Renamed export 'cg' to 'getReplaceDeleteRevision'
// - Renamed export 'yR' to 'createReplaceAddOpEntry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 882925
         */
module.exports = function (module, exports, require) {
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var diProviderRevisionBaseService = require("di-provider-revision-base-service") /*id: 951946*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorRevisionDeleteOperations = require("editor-revision-delete-operations") /*id: 642450*/;
  var editorRevisionSelectionUtils = require("editor-revision-selection-utils") /*id: 421120*/;
  var editorRevisionOperations = require("editor-revision-operations") /*id: 907135*/;
  function d(e, i) {
    let n = {
      revision: null,
      hasCompleteAdditiveRevision: false,
      completeAdditiveRevision: null
    };
    let s = editorRevisionSelectionUtils.findRevisionInSelections(e, i, e => {
      return e.userId === userEnvironmentUtils.getUserInfo().userId && (editorRevisionUtilities.isAddOp(e.type) || editorRevisionUtilities.isReplaceAddOp(e.type, e.details?.subType));
    }, {
      isCompleteWithinSelectionsOnly: true
    });
    if (s) {
      return {
        ...n,
        revision: s,
        hasCompleteAdditiveRevision: true,
        completeAdditiveRevision: s
      };
    }
    let [d, u] = Object.entries(editorRevisionOperations.createReplaceDeleteOp({
      revisionId: e.editorAPI.getService(diProviderRevisionBaseService.revisionBaseService).generateRevisionId()
    }))[0];
    return {
      ...n,
      revision: [d, u]
    };
  }
  function u(e, i) {
    let n = null;
    let r = null;
    if (!e.config.get("revising")) {
      return {
        replaceDeleteRevisionInfo: r,
        revisionContext: n
      };
    }
    let o = i.getSelection();
    let {
      viewService: l
    } = e.editorAPI;
    let a = o.filter(e => l.hasBlockViewByBlockId(e.id)).map(e => l.getBlockViewByBlockId(e.id));
    [r, n] = editorRevisionDeleteOperations.processDeleteRevision(e, a, i, {
      isReplaceRevision: true
    });
    return {
      replaceDeleteRevisionInfo: r,
      revisionContext: n
    };
  }
  function h(e) {
    return Object.entries(editorRevisionOperations.createReplaceAddOp({
      revisionId: e
    }))[0];
  }
  require.d(exports, {
    getRevisionInfo: function () {
      return d;
    },
    getReplaceDeleteRevision: function () {
      return u;
    },
    createReplaceAddOpEntry: function () {
      return h;
    }
  });
}