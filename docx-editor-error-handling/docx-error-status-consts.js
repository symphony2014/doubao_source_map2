// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MU' to 'DocxError'
// - Renamed export 'U7' to 'errorConstants'
// - Renamed export 'xm' to 'docxRenderStates'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 731910
         */
module.exports = function (module, exports, require) {
  var n;
  (n = {}).REACT_COMPONENT_ERROR = "react_component_error";
  n.DEV_OOPS = "dev_oops";
  n.UNLOAD_BEFORE_LOADED = "unload_before_loaded";
  n.FETCH_TREE_ERROR = "fetch_tree_error";
  n.FETCH_INIT_INFO_ERROR = "fetch_init_info_error";
  n.FETCH_CLIENTVAR_ERROR = "fetch_clientvar_error";
  n.FETCH_CLIENTVAR_ERROR_PERM = "fetch_clientvar_error_perm";
  let o = n;
  let l = {
    DOCX_JS_LOADED: 1,
    FETCH_DOCX_CLIENTVARS_START: 2,
    RENDER_DOCX_FIRST_SCREEN_SUCCESS: 10,
    FETCH_DOCX_CLIENTVARS_SUCCESS: 3,
    RENDER_DOCX_ALLOW_EDIT: 4,
    RENDER_DOCX_CLIENTVARS_ALL_DONE: 11,
    RENDER_DOCX_HEADER_SUCCESS: 5,
    FETCH_DOCX_CATALOGUE_SUCCESS: 6,
    RENDER_DOCX_CATALOGUE_SUCCESS: 7,
    FETCH_DOCX_COMMENT_SUCCESS: 8,
    RENDER_DOCX_COMMENT_SUCCESS: 9,
    WORKER_FETCH_DOCX_CLIENTVAR_FINISH: 12,
    WORKER_FETCH_DOCX_CLIENTVAR_TO_MAIN_FINISH: 13,
    RENDER_DOCX_FIRST_CLIENTVAR_SUCCESS: 14,
    RENDER_DOCX_ALLOW_EDIT_WITH_SSR_CLEAN: 15
  };
  class s {}
  require.d(exports, {
    DocxError: function () {
      return s;
    },
    errorConstants: function () {
      return o;
    },
    docxRenderStates: function () {
      return l;
    }
  });
}