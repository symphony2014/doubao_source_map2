// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'usePdfTransState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 151008
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var pdfBoundsUtils = require("pdf-bounds-utils") /*id: 309227*/;
  let o = e => {
    let {
      translateService: t,
      showTranslateImage: n,
      enableNewImageTranslate: o
    } = e;
    let [s, c] = reactCoreLibraryReexport.useState({});
    let u = reactCoreLibraryReexport.useCallback(e => o && n && ["image", "table"].includes(e.label || ""), [o, n]);
    let d = reactFunctionMemoHook.useMemoizedCallback(e => {
      let {
        targetDocKey: r,
        translateBlocks: a,
        loadingPages: l,
        sourceLanguage: o,
        targetLanguage: s
      } = e;
      c(e => {
        e[r] ||= {};
        for (let c of l) {
          let l = a.filter(e => c === e.page).map(e => u(e) ? {
            loading: true,
            area: pdfBoundsUtils.extractCoordinates(e.norm_box || {
              x0: 0,
              x1: 0,
              y0: 0,
              y1: 0
            }),
            label: e.label,
            url: e.url || "",
            cleanImageUrl: "",
            textBlocks: []
          } : {
            loading: true,
            text: "",
            sourceText: e.text || "",
            area: pdfBoundsUtils.extractCoordinates(e.norm_box || {
              x0: 0,
              x1: 0,
              y0: 0,
              y1: 0
            }),
            label: e.label
          });
          if (l.length) {
            e[r][c] = {
              sourceLanguage: o,
              targetLanguage: s,
              translateService: t,
              showTranslateImage: !!n,
              items: {
                loading: true,
                data: l
              }
            };
          }
        }
        return {
          ...e
        };
      });
    });
    let h = reactFunctionMemoHook.useMemoizedCallback((e, t) => {
      c(n => {
        n[e] ||= {};
        safePropertyAssignUtil.safePropertyAssign(n[e], t);
        return {
          ...n
        };
      });
    });
    let p = reactFunctionMemoHook.useMemoizedCallback((e, t) => {
      c(n => {
        n[e] ||= {};
        for (let r of t) {
          delete n[e][r];
        }
        return {
          ...n
        };
      });
    });
    return {
      resultMap: s,
      clearResultMap: reactFunctionMemoHook.useMemoizedCallback(() => {
        c({});
      }),
      handleBatchSetLoading: d,
      handleBatchUpdateData: h,
      handleBatchRemove: p
    };
  };
  require.d(exports, {
    usePdfTransState: function () {
      return o;
    }
  });
}