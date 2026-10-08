// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'SuperTaskGuidancePortal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 107267
         */
module.exports = function (module, exports, require) {
  var imageSkillGuidanceHook = require("image-skill-guidance-hook") /*id: 347172*/;
  var imageSkillGuidanceConfig = require("image-skill-guidance-config") /*id: 837880*/;
  var superTaskGuidancePortalModal_1 = require("super-task-guidance-portal-modal_1") /*id: 743071*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = () => {
    let {
      guidanceVisible: e,
      handleCloseGuidance: t
    } = imageSkillGuidanceHook.useImageSkillGuidance();
    if (e) {
      return reactJsxRuntimeCoreReexport.jsx(superTaskGuidancePortalModal_1.SuperTaskGuidance, {
        locales: imageSkillGuidanceConfig.skillGuidanceConfig,
        onClose: t
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    SuperTaskGuidancePortal: function () {
      return o;
    }
  });
}