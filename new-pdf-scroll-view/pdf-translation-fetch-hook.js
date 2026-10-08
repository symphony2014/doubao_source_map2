// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'usePdfTranslateFetch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 183034
         */
module.exports = function (module, exports, require) {
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var pdfScrollBlockUtil = require("pdf-scroll-block-util") /*id: 519275*/;
  let i = e => {
    let {
      fetchTranslate: t,
      currentDocMap: n,
      handleBatchSetLoading: i,
      handleBatchUpdateData: o,
      handleBatchRemove: s,
      setLoading: c,
      blocks: u,
      enableNewImageTranslate: d
    } = e;
    return {
      handleFetch: reactFunctionMemoHook.useMemoizedCallback(e => {
        let {
          pages: a,
          docKey: h,
          sourceLanguage: p,
          targetLanguage: f,
          translateService: g,
          showTranslateImage: m
        } = e;
        if (!t) {
          return;
        }
        let v = a.filter(e => {
          if (!(e in n)) {
            return true;
          }
          let t = n[e];
          return t.sourceLanguage !== p || t.targetLanguage !== f || t.translateService !== g || t.showTranslateImage !== m;
        });
        if (!v.length) {
          c(false);
          return;
        }
        let {
          translateBlocks: x
        } = (d ? pdfScrollBlockUtil.filterTextBlocks : pdfScrollBlockUtil.getTranslateBlocks)({
          blocks: u,
          pages: v,
          showTranslateImage: m
        });
        i({
          targetDocKey: h,
          translateBlocks: x,
          loadingPages: v,
          sourceLanguage: p,
          targetLanguage: f
        });
        return t({
          ...e,
          translateBlocks: x,
          pages: v
        }).subscribe(e => {
          let {
            page: t,
            value: n,
            fallbackService: a
          } = e;
          c(false);
          if (n.error) {
            s(h, [t]);
            return;
          }
          o(h, safeObjectPropertyMap.safeObjectMap({
            [t]: n
          }, e => ({
            items: e,
            sourceLanguage: p,
            targetLanguage: f,
            translateService: g,
            fallbackService: a,
            showTranslateImage: !!m
          })));
        });
      })
    };
  };
  require.d(exports, {
    usePdfTranslateFetch: function () {
      return i;
    }
  });
}