// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'getTextContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 413007
         */
module.exports = function (module, exports, require) {
  let n = {};
  function i(e, t) {
    let r = t || n;
    return o(e, typeof r.includeImageAlt != "boolean" || r.includeImageAlt, typeof r.includeHtml != "boolean" || r.includeHtml);
  }
  function o(e, t, r) {
    var n;
    if ((n = e) && typeof n == "object") {
      if ("value" in e) {
        if (e.type !== "html" || r) {
          return e.value;
        } else {
          return "";
        }
      }
      if (t && "alt" in e && e.alt) {
        return e.alt;
      }
      if ("children" in e) {
        return u(e.children, t, r);
      }
    }
    if (Array.isArray(e)) {
      return u(e, t, r);
    } else {
      return "";
    }
  }
  function u(e, t, r) {
    let n = [];
    let i = -1;
    while (++i < e.length) {
      n[i] = o(e[i], t, r);
    }
    return n.join("");
  }
  require.d(exports, {
    getTextContent: function () {
      return i;
    }
  });
}