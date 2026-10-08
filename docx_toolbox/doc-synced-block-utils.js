// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$n' to 'isValidTwoBlockSelection'
// - Renamed export 'Ip' to 'isValidTranslateSelection'
// - Renamed export '_j' to 'isSyncedSourceBlock'
// - Renamed export 'cy' to 'isBlockSyncedSource'
// - Renamed export 'nO' to 'filterNonSyncedBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 478237
         */
module.exports = function (module, exports, require) {
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function c(e) {
    return !!e.isRoot || !!syncUrlBlockUtils.isSyncingActive() && (e == null ? undefined : e.type) === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE;
  }
  function u(e, n) {
    let r = n.getBlockViewByBlockIdNotCheck(e);
    return !!r && c(r);
  }
  function s(e, n) {
    return e.filter(e => !u(e.id, n));
  }
  function d(e, n) {
    return e.length === 2 && u(e[0].id, n) && editorSelectionUtilities.isCollapsedTextSelection([e[1]]);
  }
  function h(e, n) {
    let r = e.getSelection();
    return !!r.length && (r.length === 2 || r.length === 3) && u(r[0].id, n) && syncedTranslationBlockUtils.hasTranslateSnapshot(n.getBlockModelByBlockIdNotCheck(r[1].id)) && (!r[2] || editorSelectionUtilities.isCollapsedTextSelection([r[2]]));
  }
  require.d(exports, {
    isValidTwoBlockSelection: function () {
      return d;
    },
    isValidTranslateSelection: function () {
      return h;
    },
    isSyncedSourceBlock: function () {
      return c;
    },
    isBlockSyncedSource: function () {
      return u;
    },
    filterNonSyncedBlocks: function () {
      return s;
    }
  });
}