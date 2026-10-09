// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CoverImageWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 756001
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = null;
  let c = e => {
    a = e;
  };
  var d = e => {
    let {
      isDragging: i,
      updatePosition: r,
      style: n
    } = e;
    let d = reactCoreLibraryReexport.useRef(null);
    let [u, h] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      let e = n => {
        let o;
        let {
          type: l
        } = n;
        if (i) {
          switch (l) {
            case "touchstart":
              n.preventDefault();
              n.stopPropagation();
              c({
                clientX: (o = n.touches[0] || n.changedTouches[0]).clientX,
                clientY: o.clientY
              });
              window.addEventListener("touchmove", e, true);
              window.addEventListener("touchend", e, true);
              break;
            case "touchmove":
              if (!a) {
                return;
              }
              r({
                diffX: (o = n.touches[0] || n.changedTouches[0]).clientX - a.clientX,
                diffY: o.clientY - a.clientY
              });
              h(true);
              c({
                clientX: o.clientX,
                clientY: o.clientY
              });
              break;
            case "touchend":
              window.removeEventListener("touchmove", e, true);
              window.removeEventListener("touchend", e, true);
              n.stopPropagation();
              c(null);
              break;
            case "mousedown":
              n.preventDefault();
              n.stopPropagation();
              c({
                clientX: n.clientX,
                clientY: n.clientY
              });
              window.addEventListener("mousemove", e, true);
              window.addEventListener("mouseup", e, true);
              break;
            case "mousemove":
              if (!a) {
                return;
              }
              r({
                diffX: n.clientX - a.clientX,
                diffY: n.clientY - a.clientY
              });
              h(true);
              c({
                clientX: n.clientX,
                clientY: n.clientY
              });
              break;
            case "mouseup":
              window.removeEventListener("mousemove", e, true);
              window.removeEventListener("mouseup", e, true);
              n.stopPropagation();
              c(null);
          }
        }
      };
      let n = d.current;
      if (n) {
        n.addEventListener("touchstart", e);
        n.addEventListener("mousedown", e);
      }
      return () => {
        if (n) {
          n.removeEventListener("touchstart", e);
          n.removeEventListener("mousedown", e);
        }
      };
    }, [d, i, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (i) {
        h(false);
      }
    }, [i]);
    let f = o("doc-cover-image-wrapper", {
      "cover-draggable": i
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: d,
      style: n,
      className: f,
      children: [e.children, i && !u && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "cover-draggable-tips",
        children: t("CreationDoc_Docs_DocCover_AdjustCoverPosition_Desc")
      })]
    });
  };
  require.d(exports, {
    CoverImageWrapper: function () {
      return d;
    }
  });
}