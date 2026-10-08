// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'useCodeInterpreterUI'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 741563
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  let r = /```\w+\s+type="interpreter"/g;
  function o(e) {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let n = reactCoreLibraryReexport.useRef(false);
    let o = n.current;
    if (!o && e) {
      o = r.test(e);
      n.current = o;
    }
    return reactCoreLibraryReexport.useMemo(() => o ? (e, n) => {
      let {
        isBroken: i,
        isFailed: l,
        isFinished: r
      } = n;
      return {
        finished: r || l || i,
        defaultExpand: false,
        expandedFinishedText: t("deepResearch_tool_genCode_done"),
        unExpandFinishedText: t("deepResearch_tool_genCode_done"),
        codeBarLoadingText: t("deepResearch_tool_genCode"),
        compact: true
      };
    } : undefined, [o]);
  }
  require.d(exports, {
    useCodeInterpreterUI: function () {
      return o;
    }
  });
}