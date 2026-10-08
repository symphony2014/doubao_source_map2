// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'EditorContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 919954
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxWidthControlModeSlot = require("docx-width-control-mode-slot") /*id: 804339*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxWidthModeConfig = require("docx-width-mode-config") /*id: 106194*/;
  var docxWidthModeUtils = require("docx-width-mode-utils") /*id: 337143*/;
  var docxWidthModeConstants = require("docx-width-mode-constants") /*id: 194078*/;
  var f = reactReduxCore.connect(e => ({
    widthMode: docxWidthModeUtils.createDocxGetter(docxWidthModeConstants.attrNames.WIDTH_MODE)(e)
  }))(e => {
    let {
      editable: i,
      widthMode: r,
      blockManager: n,
      pageToken: o,
      snapshot: s
    } = e;
    let a = async e => {
      if (!!i && !docxWidthModeConfig.isNotMobile() && e !== ((s == null ? undefined : s.width_mode) || docxWidthModeConstants.sizeModes.STANDARD) && [docxWidthModeConstants.sizeModes.STANDARD, docxWidthModeConstants.sizeModes.FULL].includes(e) && !browserEnvironmentDetectionUtils.browserDetector.isFeed && !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        try {
          await n.applyTransaction("switchWidthMode", i => {
            i.replace(o, ["width_mode"], e);
          }, {
            undoable: false
          });
        } catch (e) {}
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      a(r);
    }, [r]);
    return null;
  });
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class p extends editorContextFacade.EditorContextFacade {
    constructor(...e) {
      var i;
      var r;
      var n;
      super(...e);
      i = "getNamedSlot";
      r = () => e => reactJsxRuntimeCoreReexport.jsx(f, {
        ...e
      });
      if ((i = typeof (n = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, i || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(i, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
    }
  }
  function m() {
    docxEditorCore.registerViewExt(docxWidthControlModeSlot.widthModeProvider, p);
  }
  require.d(exports, {
    EditorContext: function () {
      return m;
    }
  });
}