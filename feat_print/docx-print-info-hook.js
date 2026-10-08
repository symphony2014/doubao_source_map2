// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'docxIndexConstants'
// - Resolved require(124597) to 'docx-index-constants'
// - Updated imported property 'R' to 'iframeEventNames' (module 124597)
// - Updated imported property 'x' to 'docNodeTypes' (module 124597)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_print.4e882bbd.js
         * chunkId: 99126
         * moduleId: 954584
         */
module.exports = function (module, exports, require) {
  var docxIndexConstants = require("docx-index-constants") /*id: 124597*/;
  let r = [{
    hookName: docxIndexConstants.iframeEventNames.onIframeDomCopied,
    hookCallback: function (e) {
      let {
        contentClone: t
      } = e;
      t.querySelectorAll(".doc-info-wrapper").forEach(e => {
        let t = e.querySelector(".editor-info-overlay-target");
        if (t) {
          var i;
          var o;
          if ((o = t.classList) !== null && o !== undefined && (i = o.add) !== null && i !== undefined) {
            i.call(o, "doc-info-editor-print");
          }
        }
      });
    },
    options: {
      priority: docxIndexConstants.docNodeTypes.DOC_INFO
    }
  }];
  exports.default = [{
    hookConfigList: r
  }];
  require.r(exports);
}