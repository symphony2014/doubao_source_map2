// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerDividerViewModel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 261652
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  class d extends docBlockModelClass.DocBlockModel {
    getText() {
      return `[${t("common.divider")}]`;
    }
  }
  o = "type";
  l = docBlockTypeConstants.blockTypeConstants.DIVIDER;
  if ((o = typeof (n = function (e, i) {
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
  }(o, "string")) == "symbol" ? n : n + "") in d) {
    Object.defineProperty(d, o, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    d[o] = l;
  }
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var h = classnamesUtils;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var docxDragDropConstants = require("docx-drag-drop-constants") /*id: 253882*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class v extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    render() {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: `divider-block ${this.editable ? "editable" : ""}`,
        ref: this.DividerRef,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: h("divider-block__container", docxDragDropConstants.dragClassName),
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "divider-block__content"
          })
        })
      });
    }
    constructor(...e) {
      var i;
      var r;
      var n;
      super(...e);
      i = "DividerRef";
      r = reactCoreLibraryReexport.createRef();
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
  function b(e) {
    docxEditorCore.registerViewModel(d, {
      viewCreator: v,
      extensions: e
    });
  }
  require.d(exports, {
    registerDividerViewModel: function () {
      return b;
    }
  });
}