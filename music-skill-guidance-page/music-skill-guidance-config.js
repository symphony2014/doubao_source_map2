// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'sceneConfig'
// - Renamed export 'i' to 'musicPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: music-skill-guidance-page.fa791232.js
         * chunkId: 16408
         * moduleId: 185684
         */
module.exports = function (module, exports, require) {
  let n = "/chat/music";
  let l = {
    showScene: {
      bottomBar: "bottom_bar",
      landing: "landing",
      sidebarSkill: "sidebar_skill",
      directEnter: "direct_enter"
    }
  };
  require.d(exports, {
    sceneConfig: function () {
      return l;
    },
    musicPath: function () {
      return n;
    }
  });
}