// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'useSkillTypeContext'
// - Renamed export 'J' to 'SkillTypeProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 419361
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactCoreLibraryReexport.createContext(undefined);
  let o = e => {
    let {
      children: t,
      onSkillTypeChange: n
    } = e;
    let o = reactCoreLibraryReexport.useMemo(() => ({
      onSkillTypeChange: n
    }), [n]);
    return reactJsxRuntimeCoreReexport.jsx(a.Provider, {
      value: o,
      children: t
    });
  };
  let l = () => reactCoreLibraryReexport.useContext(a);
  require.d(exports, {
    useSkillTypeContext: function () {
      return l;
    },
    SkillTypeProvider: function () {
      return o;
    }
  });
}