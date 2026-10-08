// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'usePdfTranslateFetch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 662027
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var pdfScrollBlockUtil = require("pdf-scroll-block-util") /*id: 519275*/;
  var pdfScrollTranslateGenerator = require("pdf-scroll-translate-generator") /*id: 234227*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var translateServiceSelector = require("translate-service-selector") /*id: 512967*/;
  var browserLanguageResolver = require("browser-language-resolver") /*id: 922449*/;
  let d = e => {
    let {
      sourceLanguage: t,
      targetLanguage: n,
      docKey: d,
      translateService: h,
      showTranslateImage: p,
      blocks: f,
      fetchTranslate: g,
      currentDocMap: m,
      handleBatchUpdateData: v,
      toast: x,
      ocrPageChunks: b,
      enableTranslateOptimize: w,
      enableNewImageTranslate: y
    } = e;
    let S = translationContextProvider.useTranslation();
    let N = reactFunctionMemoHook.useMemoizedCallback(e => e === translateServiceSelector.translateServiceEnum.HUOSHAN ? S("translate_huoshan") : e === translateServiceSelector.translateServiceEnum.MICROSOFT ? S("translate_microsoft") : e === translateServiceSelector.translateServiceEnum.LLM ? S("translate_doubao") : undefined);
    let C = reactFunctionMemoHook.useMemoizedCallback(e => ({
      [e]: m[e]
    }));
    let T = e => {
      if (isUndefinedCheck.isUndefined(t) || isUndefinedCheck.isUndefined(n) || !d || !g) {
        return;
      }
      if (e in m) {
        let r = m[e];
        let a = r.sourceLanguage !== browserLanguageResolver.resolveLanguageEnum(t) || r.targetLanguage !== browserLanguageResolver.resolveLanguageEnum(n) || r.translateService !== h || r.showTranslateImage !== p;
        if (!r.items.loading && !a) {
          return Promise.resolve(C(e));
        }
      }
      let {
        translateBlocks: l
      } = (y ? pdfScrollBlockUtil.filterTextBlocks : pdfScrollBlockUtil.getTranslateBlocks)({
        blocks: f,
        pages: [e],
        showTranslateImage: p
      });
      let o = g({
        sourceLanguage: browserLanguageResolver.resolveLanguageEnum(t),
        targetLanguage: browserLanguageResolver.resolveLanguageEnum(n),
        translateService: h,
        showTranslateImage: p,
        pages: [e],
        translateBlocks: l,
        docKey: d
      });
      return new Promise(r => {
        o.subscribe({
          next(e) {
            let {
              page: r,
              value: l,
              fallbackService: i
            } = e;
            if (i) {
              if (x != null) {
                x.info({
                  content: S("read_translate_toast_serviceChange_capacity", {
                    s_transService1: N(h),
                    s_transService2: N(i)
                  })
                });
              }
            }
            v(d, safeObjectPropertyMap.safeObjectMap({
              [r]: l
            }, e => ({
              items: e,
              sourceLanguage: browserLanguageResolver.resolveLanguageEnum(t),
              targetLanguage: browserLanguageResolver.resolveLanguageEnum(n),
              translateService: h,
              showTranslateImage: !!p
            })));
          },
          complete() {
            setTimeout(() => {
              r(C(e));
            }, 50);
          }
        });
      });
    };
    let _ = async e => {
      let a = await T(e);
      if (!a || isUndefinedCheck.isUndefined(t) || isUndefinedCheck.isUndefined(n)) {
        return [];
      } else {
        return [...pdfScrollTranslateGenerator.generatePdfOverlays({
          currentDocMap: a,
          sourceLanguage: browserLanguageResolver.resolveLanguageEnum(t),
          targetLanguage: browserLanguageResolver.resolveLanguageEnum(n),
          ocrPageChunks: b,
          enableTranslateOptimize: w
        })];
      }
    };
    return {
      fetchAndReturnResult: T,
      fetchAndGenOverlays: _
    };
  };
  require.d(exports, {
    usePdfTranslateFetch: function () {
      return d;
    }
  });
}