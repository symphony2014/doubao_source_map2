// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'registerTextBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 36029
         */
module.exports = function (module, exports, require) {
  var readPdfGuidanceFooter = require("read-pdf-guidance-footer") /*id: 446560*/;
  var textBlockTypeClass = require("text-block-type-class") /*id: 518101*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxIndentValidationAndTips = require("docx-indent-validation-and-tips") /*id: 434696*/;
  var docxTextBlockModelManager = require("docx-text-block-model-manager") /*id: 568038*/;
  var textualContentWrapper = require("textual-content-wrapper") /*id: 858631*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class f extends docxTextBlockModelManager.TextBlockManager {
    render() {
      let {
        displaymode: e
      } = this.props;
      if (e === "inline") {
        return super.render();
      }
      let i = s("text-block", {
        "text-indent": docxIndentValidationAndTips.isBlockIndentable(this)
      });
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "text-block-wrapper",
        children: [reactJsxRuntimeCoreReexport.jsx(textualContentWrapper.TextualContentWrap, {
          model: this.model,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: i,
            children: super.render()
          })
        }), this.struct.children.length ? reactJsxRuntimeCoreReexport.jsx("div", {
          style: {
            paddingLeft: docxEditorConstantsConfig.defaultItemCount
          },
          className: "text-children",
          children: this.renderChildren()
        }) : null]
      });
    }
  }
  function g(e, i) {
    readPdfGuidanceFooter.ReadPdfFooter(textBlockTypeClass.TextBlockType, f, e, i);
  }
  require.d(exports, {
    registerTextBlock: function () {
      return g;
    }
  });
}