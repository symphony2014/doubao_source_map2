// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxTextBlockClickHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 90739
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var handleEditorClickSelection = require("handle-editor-click-selection") /*id: 13387*/;
  var docxTextBlockModelManager = require("docx-text-block-model-manager") /*id: 568038*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  function a(e, i, r) {
    var n;
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
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class c extends docxTextBlockModelManager.TextBlockManager {
    handleClickListStyle() {
      if (!this.isFocus()) {
        editorRangeUtilities.selectToStart(this);
      }
    }
    constructor(...e) {
      super(...e);
      a(this, "contentRef", reactCoreLibraryReexport.createRef());
      a(this, "handleClickOuterEditor", e => {
        handleEditorClickSelection.handleEditorClickSelection(this, e);
      });
    }
  }
  require.d(exports, {
    DocxTextBlockClickHandler: function () {
      return c;
    }
  });
}