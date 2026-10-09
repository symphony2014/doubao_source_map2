// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'setDocViewType'
// - Renamed export 'k' to 'injectDocViewType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 883917
         */
module.exports = function (module, exports, require) {
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  let a = "read";
  let u = null;
  let c = () => a;
  let _ = e => {
    a = e;
  };
  let l = e => function (n, r = {}, a = false) {
    if (isNullCheck.isNull(u)) {
      u = docxFeatureFlags.isNotEmbedDocx();
    }
    if (u) {
      r.doc_view_type = c();
    }
    return e.call(window, n, r, a);
  };
  require.d(exports, {
    setDocViewType: function () {
      return _;
    },
    injectDocViewType: function () {
      return l;
    }
  });
}