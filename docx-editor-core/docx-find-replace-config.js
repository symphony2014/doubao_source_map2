// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ic' to 'findReplaceSelectors'
// - Renamed export 'K_' to 'maxCommentLength'
// - Renamed export 'Qw' to 'findReplaceEvents'
// - Renamed export '_o' to 'invisibleButtonClass'
// - Renamed export 'fm' to 'keyboardShortcuts'
// - Renamed export 'lK' to 'searchTimeout'
// - Renamed export 'pU' to 'highlightDelay'
// - Renamed export 'yn' to 'maxResults'
// - Renamed export 'zl' to 'highlightWrapperClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 106059
         */
module.exports = function (module, exports, require) {
  let r = 10;
  let o = {
    findTab: t("CreationDoc_DocX_FindReplace_Find_tab"),
    replaceTab: t("CreationDoc_DocX_FindReplace_Replace_tab"),
    replaceAllBtn: t("CreationDoc_DocX_FindReplace_All_btn"),
    prevBtn: t("CreationDoc_DocX_FindReplace_Previous_btn"),
    nextBtn: t("CreationDoc_DocX_FindReplace_Next_btn"),
    findBtn: t("CreationDoc_DocX_FindReplace_Find_btn"),
    replaceBtn: t("CreationDoc_DocX_FindReplace_Replace_btn"),
    findLabel: t("CreationDoc_DocX_FindReplace_Find_tab"),
    replaceLabel: t("CreationDoc_DocX_FindReplace_Replace_field"),
    replaceAll: t("CreationDoc_DocX_FindReplace_Range"),
    findInputPlaceholder: t("CreationDoc_DocX_FindReplace_Range"),
    replaceInputPlaceholder: t("CreationDoc_DocX_FindReplace_placeholder"),
    findAndReplace: t("CreationDoc_DocX_FindReplace_title"),
    noPermissionTips: e => e % 2 == 0 ? t("CreationDoc_DocX_FindReplace_NoPermission_tip_plural", {}, "", e.toString()) : t("CreationDoc_DocX_FindReplace_NoPermission_tip_singular", {}, "", e.toString()),
    helpCenter: t("CreationDoc_DocX_HC_tooltips")
  };
  let a = {
    next: "Enter",
    prev: "Shift + Enter"
  };
  let s = "invisible-button-group-wrapper";
  let l = 423;
  let c = {
    THIRD_PARTY_CONTENT_CHANGE: "third_party_content_change",
    COMMENT_MATCH_CHANGE: "comment_match_change",
    GLOBAL_COMMENT_MATCH_CHANGE: "global_comment_match_change",
    COMMENT_HIGHLIGHT_CHANGE: "comment_highlight_change",
    GLOBAL_COMMENT_HIGHLIGHT_CHANGE: "global_comment_highlight_change",
    EXIT_FIND_SEARCH: "exit_find_search"
  };
  let u = 360;
  let d = 64;
  let h = "docx-block-highlight-wrap";
  require.d(exports, {
    findReplaceSelectors: function () {
      return o;
    },
    maxCommentLength: function () {
      return d;
    },
    findReplaceEvents: function () {
      return c;
    },
    invisibleButtonClass: function () {
      return s;
    },
    keyboardShortcuts: function () {
      return a;
    },
    searchTimeout: function () {
      return l;
    },
    highlightDelay: function () {
      return u;
    },
    maxResults: function () {
      return r;
    },
    highlightWrapperClass: function () {
      return h;
    }
  });
}