// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'scrollStore'
// - Renamed export 's' to 'pdfStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 234902
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  let i = {
    isScroll: false,
    isMouseMove: false,
    isScrollDown: undefined,
    selectionData: undefined,
    isStopHandleMouseMove: false
  };
  let o = {
    pdfLoaded: false,
    totalPage: 0,
    currentPage: 1,
    pagesInView: [],
    pagesBuffer: new Set(),
    bufferSize: 10,
    ocrPageChunks: undefined,
    translateColumn: undefined,
    isCheckingTranslationFontLoaded: false,
    isTranslationFontLoaded: false,
    currentScale: 100,
    presetScale: undefined
  };
  immerCoreImplementation.MapSetPlugin();
  let s = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(e => ({
    ...o,
    setPDFLoaded: t => {
      e(immerCoreImplementation.produce(e => {
        e.pdfLoaded = t;
      }));
    },
    setTotalPage: t => {
      e(immerCoreImplementation.produce(e => {
        e.totalPage = t;
      }));
    },
    setCurrentPage: t => {
      e(immerCoreImplementation.produce(e => {
        e.currentPage = t;
      }));
    },
    setPagesInView: t => {
      e(immerCoreImplementation.produce(e => {
        e.pagesInView = t;
      }));
    },
    setBufferSize: t => {
      e(immerCoreImplementation.produce(e => {
        e.bufferSize = t;
      }));
    },
    setOcrPageChunks: t => {
      e(immerCoreImplementation.produce(e => {
        e.ocrPageChunks = t;
      }));
    },
    setTranslateColumn: t => {
      e(immerCoreImplementation.produce(e => {
        e.translateColumn = t;
      }));
    },
    setIsCheckingTranslationFontLoaded: t => {
      e(immerCoreImplementation.produce(e => {
        e.isCheckingTranslationFontLoaded = t;
      }));
    },
    setIsTranslationFontLoaded: t => {
      e(immerCoreImplementation.produce(e => {
        e.isTranslationFontLoaded = t;
      }));
    },
    setCurrentScale: t => {
      e(immerCoreImplementation.produce(e => {
        e.currentScale = t;
      }));
    },
    setPresetScale: t => {
      e(immerCoreImplementation.produce(e => {
        e.presetScale = t;
      }));
    },
    initializePagesBuffer: () => {
      e(immerCoreImplementation.produce(e => {
        e.pagesBuffer.clear();
      }));
    },
    addPageToBuffer: t => {
      e(immerCoreImplementation.produce(e => {
        if (e.pagesBuffer.has(t)) {
          e.pagesBuffer.delete(t);
        }
        e.pagesBuffer.add(t);
      }));
    },
    batchAddPageToBuffer: t => {
      e(immerCoreImplementation.produce(e => {
        for (let n of t) {
          if (e.pagesBuffer.has(n)) {
            e.pagesBuffer.delete(n);
          }
          e.pagesBuffer.add(n);
        }
      }));
    },
    cleanOversizeBuffer: t => {
      e(immerCoreImplementation.produce(e => {
        let n = 0;
        while (e.pagesBuffer.size > e.bufferSize && n < (t ?? 30)) {
          let t = e.pagesBuffer.keys().next().value;
          if (t) {
            e.pagesBuffer.delete(t);
          }
          n++;
        }
      }));
    }
  })));
  let c = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(e => ({
    ...i,
    setIsScroll: t => {
      e(immerCoreImplementation.produce(e => {
        e.isScroll = t;
      }));
    },
    setIsMouseMove: t => {
      e(immerCoreImplementation.produce(e => {
        e.isMouseMove = t;
      }));
    },
    setIsScrollDown: t => {
      e(immerCoreImplementation.produce(e => {
        e.isScrollDown = t;
      }));
    },
    setSelectionData: t => {
      e(immerCoreImplementation.produce(e => {
        e.selectionData = t;
      }));
    },
    setIsStopHandleMouseMove: t => {
      e(immerCoreImplementation.produce(e => {
        e.isStopHandleMouseMove = t;
      }));
    }
  })));
  require.d(exports, {
    scrollStore: function () {
      return c;
    },
    pdfStore: function () {
      return s;
    }
  });
}