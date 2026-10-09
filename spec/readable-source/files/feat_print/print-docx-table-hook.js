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
         * moduleId: 275408
         */
module.exports = function (module, exports, require) {
  var docxIndexConstants = require("docx-index-constants") /*id: 124597*/;
  let r = [{
    hookName: docxIndexConstants.iframeEventNames.onIframeDomCopied,
    hookCallback: function (e) {
      (function () {
        let e = document.querySelector(".docx-table-block .scrollable-container");
        [...document.querySelectorAll(".docx-table-block table tbody td")].forEach(e => {
          let t = Number(e.getAttribute("rowspan"));
          let i = Number(e.getAttribute("colspan"));
          let o = e.parentNode;
          if (o && (t > 1 || i > 1)) {
            o.classList.add("docx-table-block__cell-merged");
          }
        });
        if (e) {
          e.scrollLeft = 0;
        }
      })();
      let {
        contentClone: t
      } = e;
      t.querySelectorAll(".docx-table-block").forEach(e => {
        let t = e.querySelector(".table");
        let i = t.querySelector("tr");
        let o = e.querySelector(".sticky-mask");
        if (t && i && o) {
          t.style.marginTop = "unset";
          i.style.boxShadow = "unset";
          i.style.position = "unset";
          i.style.top = "unset";
          i.style.marginLeft = "unset";
          i.style.zIndex = "unset";
          o.style.display = "none";
        }
      });
    },
    options: {
      priority: docxIndexConstants.docNodeTypes.TABLE
    }
  }];
  exports.default = [{
    hookConfigList: r
  }];
  require.r(exports);
}