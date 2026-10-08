// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'TJ' to 'getSelectionRectangle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 91539
         */
module.exports = function (module, exports, require) {
  function o(e, n, r) {
    let o = r ?? e.getSelection();
    if (!o.length) {
      return;
    }
    let i = e.isSingleTextSelection(o);
    return (() => {
      if (i) {
        let r = o[0].id;
        let i = o[0].selection?.start || 0;
        return n.getCaretRect(r, i);
      }
      {
        let e = o[0];
        let r = n.getBlockRect(e.id);
        if (o.length === 1) {
          return r;
        }
        {
          let e = o[o.length - 1];
          let i = n.getBlockRect(e.id);
          return {
            ...r,
            height: i.bottom - r.top,
            bottom: i.bottom
          };
        }
      }
    })();
  }
  require("editor-format-revision-utils") /*id: 63043*/;
  require("callout-block-utils") /*id: 662420*/;
  require("doc-block-type-constants") /*id: 433991*/;
  require("docx-block-validator-utils_1") /*id: 869432*/;
  require("doc-quote-container-ops") /*id: 780546*/;
  require("text-highlight-colors") /*id: 514350*/;
  require("text-highlight-color-utils") /*id: 229338*/;
  require("editor-text-block-utilities") /*id: 469443*/;
  require("editor-range-utilities") /*id: 780600*/;
  require("docx-block-selection-handler_1") /*id: 801350*/;
  require("editor-selection-utilities") /*id: 913651*/;
  require("docx-block-utils_1") /*id: 138224*/;
  require("block-selection-utils") /*id: 166197*/;
  require.d(exports, {
    getSelectionRectangle: function () {
      return o;
    }
  });
}