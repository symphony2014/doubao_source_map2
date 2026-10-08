// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerBlockViewModel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 20984
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  class d extends docBlockModelClass.DocBlockModel {
    constructor(e) {
      super(e);
    }
  }
  o = "type";
  l = viewTypeConstants.viewTypeName;
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
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var blockMacroUtils = require("block-macro-utils") /*id: 761509*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function y(e, i, r) {
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
  class S extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    blockViewDidMount() {
      super.blockViewDidMount();
      this.checkIsEmpty();
    }
    blockViewDidUpdate(e) {
      let i = e.record.snapshot.view_type;
      let {
        view_type: r
      } = this.props.record.snapshot;
      if (i !== r) {
        this.blockManager.dispatch(viewTypeConstants.viewSwitchType, {
          props: this.props
        });
      }
    }
    render() {
      let {
        view_type: e,
        children: i
      } = this.record.snapshot;
      if (!i || !i.length) {
        return null;
      }
      let {
        blockId: r,
        recursionProps: n
      } = this.props;
      let {
        blockManager: o
      } = n;
      return reactJsxRuntimeCoreReexport.jsx(bearVirtualLayoutReconciler.RenderUnit, {
        id: r,
        reconciler: o.layoutManager.getReconciler(),
        renderChild: (i, r) => {
          let o = this.props.editorAPI.modelService.getBlockModelByBlockId(i);
          let l = this.props.editorAPI.config.get("slottedBlockTypes");
          if (l == null ? undefined : l.has(o.type)) {
            return blockMacroUtils.formatBlockTag(o.recordId);
          } else {
            return this.props.editorAPI.viewService.render(i, {
              recursionProps: n,
              viewType: e,
              hostElementRef: r
            });
          }
        },
        childContainerTag: "div",
        watchProps: {
          ...n,
          viewType: e
        }
      });
    }
    constructor(...e) {
      super(...e);
      y(this, "checkIsEmpty", () => {
        if (this.props.recursionProps.isHistory) {
          return;
        }
        let {
          children: e
        } = this.record.snapshot;
        if (!e || !e.length) {
          this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("docx_no_children_view_block_dev", {
            has_children: "false",
            file_id: platformDocUtils.p5T(docTokenHelperUtils.resolveDocToken())
          });
        }
      });
    }
  }
  function k(e) {
    docxEditorCore.registerViewModel(d, {
      viewCreator: S,
      extensions: e
    });
  }
  y(S, "type", docBlockTypeConstants.blockTypeConstants.VIEW);
  require.d(exports, {
    registerBlockViewModel: function () {
      return k;
    }
  });
}