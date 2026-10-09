// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'initQuotePdfFooter'
// - Renamed export 'I' to 'registerQuoteBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 485216
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var readPdfGuidanceFooter = require("read-pdf-guidance-footer") /*id: 446560*/;
  var quoteBlockRevisionProvider = require("quote-block-revision-provider") /*id: 741147*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  class f extends docBlockModelClass.DocBlockModel {
    getText() {
      return `[${t("LarkCCM_Docs_block_Quote")}]`;
    }
  }
  o = "type";
  l = docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER;
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
  }(o, "string")) == "symbol" ? n : n + "") in f) {
    Object.defineProperty(f, o, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    f[o] = l;
  }
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var editCheckerProvider = require("edit-checker-provider") /*id: 884051*/;
  var docBlockValidationUtils = require("doc-block-validation-utils") /*id: 906066*/;
  function v(e, i, r) {
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
  let b = dependencyInjectionContainer.Provide(editCheckerProvider.editCheckerProvider)(s = class {
    constructor() {
      v(this, "blockType", docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER);
      v(this, "checkFunc", docBlockValidationUtils.validateDeleteChild);
    }
  }) || s;
  require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxTextBlockModelManager = require("docx-text-block-model-manager") /*id: 568038*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class E extends docxTextBlockModelManager.TextBlockManager {
    render() {
      let e = this.renderChildren();
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "quote-block",
        children: [super.render(), e ? reactJsxRuntimeCoreReexport.jsx("div", {
          style: {
            paddingLeft: docxEditorConstantsConfig.defaultItemCount
          },
          className: "text-children",
          children: e
        }) : null]
      });
    }
  }
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var _ = classnamesUtils;
  var docColorUtils = require("doc-color-utils") /*id: 986243*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  class M extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    addRevisionHighlight(e, i) {
      super.addRevisionHighlight(e, i);
      this.setState({
        revisionActiveColor: docColorUtils.getRevisionUserColor(e, this.model.snapshot.revisions || [])
      });
    }
    removeRevisionHighlight(e, i) {
      super.removeRevisionHighlight(e, i);
      this.setState({
        revisionActiveColor: undefined
      });
    }
    render() {
      let {
        revisionActiveColor: e
      } = this.state;
      let i = !!e;
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: _("quote-container-block", {
          "revision-active": i
        }),
        style: i ? {
          "--quote-revision-color": e
        } : {},
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "quote-container-block-children",
          children: this.renderChildren({
            className: "quote-container-render-unit"
          })
        })
      });
    }
    constructor(...e) {
      var i;
      var r;
      var n;
      super(...e);
      r = {
        revisionActiveColor: undefined
      };
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
      }(i = "state", "string")) == "symbol" ? n : n + "") in this) {
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
  function T(e, i) {
    readPdfGuidanceFooter.ReadPdfFooter(quoteBlockRevisionProvider.QuoteBlockRevisionProvider, E, e, i);
  }
  function w(e) {
    docxEditorCore.registerProviders([b]);
    docxEditorCore.registerViewModel(f, {
      viewCreator: M,
      extensions: e
    });
  }
  require.d(exports, {
    initQuotePdfFooter: function () {
      return T;
    },
    registerQuoteBlock: function () {
      return w;
    }
  });
}