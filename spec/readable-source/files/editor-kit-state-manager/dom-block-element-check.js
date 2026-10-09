// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'isBlockElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 123182
         */
module.exports = function (module, exports, require) {
  function r(t) {
    return !!["div", "p", "blockquote", "li", "h1", "h2", "h3", "h4", "h5", "h6", "ol", "table", "td", "th", "tr", "ul", "address", "article", "canvas", "dd", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "header", "iframe", "main", "nav", "output", "pre", "section", "video"].includes(t.nodeName.toLowerCase()) && (!(t instanceof HTMLElement) || !t.style.display || t.style.display !== "inline");
  }
  require.d(exports, {
    isBlockElement: function () {
      return r;
    }
  });
}