// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'pdfPreviewFetchService'
// - Resolved require(736066) to 'pdf-preview-fetch-service'
// - Renamed variable 's' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'l' to 'pdfReadCanvasComponent'
// - Resolved require(787030) to 'pdf-read-canvas-component'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'p' to 'skillEditorStateStores'
// - Resolved require(168235) to 'skill-editor-state-stores'
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'p' to 'fetchPdfPreview' (module 736066)
// - Updated imported property 'j' to 'ReadCanvas' (module 787030)
// - Updated imported property 'X' to 'skillEditorStore' (module 168235)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 426898
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var pdfPreviewFetchService = require("pdf-preview-fetch-service") /*id: 736066*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let n = e => {
    let {
      pdfId: t,
      pdfUrl: a,
      enable: n = false
    } = e;
    let l = a || t;
    let {
      pdfPreviewCover: c
    } = chatMessageStoreFactory.createMessageStore(e => {
      return {
        pdfPreviewCover: l ? e.pdfPreviewMap[l]?.imageUrl : undefined
      };
    }, deepEqualityUtil_1.isDeepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      if (l && n) {
        pdfPreviewFetchService.fetchPdfPreview(l);
      }
    }, [l, n]);
    return c;
  };
  var pdfReadCanvasComponent = require("pdf-read-canvas-component") /*id: 787030*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      transitionStatus: t,
      ...a
    } = e;
    let i = t === "exited";
    let {
      readContent: {
        pdfId: r,
        pdfUrl: o
      }
    } = a;
    let s = n({
      pdfId: r,
      pdfUrl: o,
      enable: i
    });
    if (i) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(pdfReadCanvasComponent.ReadCanvas, {
        ...a,
        previewCoverUrl: s,
        isCanvasOpened: t === "entered"
      });
    }
  };
  var skillEditorStateStores = require("skill-editor-state-stores") /*id: 168235*/;
  function u(e, t, a) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var a = e[Symbol.toPrimitive];
      if (a !== undefined) {
        var i = a.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = a;
    }
    return e;
  }
  let m = e => {
    let {
      saveCanvasOpenState: t,
      removeCanvasOpenState: a
    } = skillEditorStateStores.skillEditorStore(e => ({
      saveCanvasOpenState: e.saveCanvasOpenState,
      removeCanvasOpenState: e.removeCanvasOpenState
    }), deepEqualityUtil_1.isDeepEqual);
    return reactJsxRuntimeCoreReexport.jsx(d, {
      ...e,
      saveCanvasOpenState: t,
      removeCanvasOpenState: a
    });
  };
  class g {
    constructor() {
      u(this, "name", "read-preview");
      u(this, "errorBoundaryName", "read-preview");
      u(this, "teaCanvasType", "read");
      u(this, "Content", m);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReadPreviewCanvasPlugin: function () {
      return g;
    }
  });
}