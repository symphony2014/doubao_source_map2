// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ResizableDraggableWrapper'
// - Renamed export 'I' to 'ResizableDraggableContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image_crop.094a2056.js
         * chunkId: 63099
         * moduleId: 776170
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var resizableDraggableBtnLoader = require("resizable-draggable-btn-loader") /*id: 622599*/;
  var layoutResizableConstants = require("layout-resizable-constants") /*id: 216694*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class c extends reactCoreLibraryReexport.PureComponent {
    render() {
      let {
        children: e,
        type: n,
        editable: r,
        style: i,
        contentFirst: c,
        contentEditable: l = false,
        ...d
      } = this.props;
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: layoutResizableConstants.resizableWrapper,
        contentEditable: l,
        suppressContentEditableWarning: true,
        style: i,
        children: [c && e, (r === undefined || r) && reactJsxRuntimeCoreReexport.jsx(resizableDraggableBtnLoader.ResizableDragBtn, {
          type: n,
          ...d
        }), !c && e]
      });
    }
  }
  class l extends reactCoreLibraryReexport.Component {
    get isBlockSelected() {
      let {
        selectionAPI: e,
        blockId: n
      } = this.props;
      let r = e.getSelection();
      return r.length === 1 && r[0].id === n;
    }
    render() {
      return reactJsxRuntimeCoreReexport.jsx(c, {
        ...this.props,
        onResizeStart: this.handleResizeStart,
        selectionAPI: this.props.selectionAPI
      });
    }
    constructor(...e) {
      var n;
      var r;
      var i;
      super(...e);
      n = "handleResizeStart";
      r = (e, n) => {
        var r;
        var i;
        if (!this.isBlockSelected) {
          this.props.selectionAPI.restoreFocus();
        }
        if ((r = (i = this.props).onResizeStart) !== null && r !== undefined) {
          r.call(i, e, n);
        }
      };
      if ((n = typeof (i = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, n || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(n, "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  require.d(exports, {
    ResizableDraggableWrapper: function () {
      return l;
    },
    ResizableDraggableContainer: function () {
      return c;
    }
  });
}