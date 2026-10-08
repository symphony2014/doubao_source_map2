// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'useImageSkillGuidance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 347172
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var superTaskGuidanceStorage = require("super-task-guidance-storage") /*id: 83498*/;
  let l = () => {
    let [e, t] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      let e = 0;
      Promise.all([superTaskGuidanceStorage.checkGuidanceViewShown()]).then(n => {
        let [i] = n;
        if (i) {
          superTaskGuidanceStorage.setGuidanceViewShown();
        } else {
          e = setTimeout(() => t(true), 800);
        }
      });
      return () => clearTimeout(e);
    }, []);
    return {
      guidanceVisible: e,
      handleCloseGuidance: () => {
        t(false);
        superTaskGuidanceStorage.setGuidanceViewShown(true);
      }
    };
  };
  require.d(exports, {
    useImageSkillGuidance: function () {
      return l;
    }
  });
}