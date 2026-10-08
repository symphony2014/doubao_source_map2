// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'SkillActionTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 670242
         */
module.exports = function (module, exports, require) {
  var n;
  (n = {})[n.ABILITY_UNKNOWN = 0] = "ABILITY_UNKNOWN";
  n[n.IMAGE_GENERATE = 1] = "IMAGE_GENERATE";
  n[n.IMAGE_REGENERATE = 2] = "IMAGE_REGENERATE";
  n[n.IMAGE_REGENERATE_SINGLE = 3] = "IMAGE_REGENERATE_SINGLE";
  n[n.IMAGE_EDIT = 4] = "IMAGE_EDIT";
  n[n.IMAGE_INPAINTING = 5] = "IMAGE_INPAINTING";
  n[n.IMAGE_OUTPAINTING = 6] = "IMAGE_OUTPAINTING";
  n[n.IMAGE_SMEARING = 7] = "IMAGE_SMEARING";
  n[n.IMAGE_SUPER_RESOLUTION = 8] = "IMAGE_SUPER_RESOLUTION";
  n[n.IMAGE_OPERATE_BACKGROUND = 9] = "IMAGE_OPERATE_BACKGROUND";
  n[n.VIDEO_GENERATE = 50] = "VIDEO_GENERATE";
  let r = n;
  require.d(exports, {
    SkillActionTypes: function () {
      return r;
    }
  });
}