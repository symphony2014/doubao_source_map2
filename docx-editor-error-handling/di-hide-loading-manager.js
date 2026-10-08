// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RC' to 'subHideLoading'
// - Renamed export 'a1' to 'toggleHideLoading'
// - Renamed export 'wS' to 'unSubHideLoading'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 961599
         */
module.exports = function (module, exports, require) {
  var diProviderHideLoadingSubject = require("di-provider-hide-loading-subject") /*id: 822039*/;
  function o(e) {
    return e.editorAPI.getService(diProviderHideLoadingSubject.hideLoadingSubject, {
      dynamic: true
    }).get();
  }
  function l(e, i) {
    var r;
    if ((r = o(i)) !== null && r !== undefined) {
      r.toggleHideLoading(e);
    }
  }
  function s(e, i, r) {
    var n;
    if ((n = o(r)) !== null && n !== undefined) {
      n.subHideLoading(e, i);
    }
  }
  function a(e, i) {
    var r;
    if ((r = o(i)) !== null && r !== undefined) {
      r.unSubHideLoading(e);
    }
  }
  require.d(exports, {
    subHideLoading: function () {
      return s;
    },
    toggleHideLoading: function () {
      return l;
    },
    unSubHideLoading: function () {
      return a;
    }
  });
}