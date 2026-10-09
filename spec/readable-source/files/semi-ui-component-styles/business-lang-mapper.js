// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'mapLangInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 122238
         */
module.exports = function (module, exports, require) {
  let n = e => {
    let {
      sourceLangValue: t,
      targetLangValue: i,
      sourceLangName: n,
      targetLangName: r
    } = e;
    return {
      variables: {
        source_lang: t,
        target_lang: i
      },
      show_variables: {
        source_lang: n,
        target_lang: r
      }
    };
  };
  require.d(exports, {
    mapLangInput: function () {
      return n;
    }
  });
}