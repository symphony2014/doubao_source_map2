// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Lw' to 'mindmapConfig'
// - Renamed export 'hY' to 'mindmapGuidanceUrl'
// - Renamed export 'j4' to 'mindmapIconUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 316876
         */
module.exports = function (module, exports, require) {
  let n = {
    data: "",
    theme: "default",
    view: "codeChart"
  };
  let o = "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/samantha/doc/mindmap_guidance.png";
  let l = "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/samantha/doc/mindmap_icon.png";
  require.d(exports, {
    mindmapConfig: function () {
      return n;
    },
    mindmapGuidanceUrl: function () {
      return o;
    },
    mindmapIconUrl: function () {
      return l;
    }
  });
}