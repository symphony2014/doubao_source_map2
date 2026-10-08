// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxBlockLoading'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 973751
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var skeletonContentComponent = require("skeleton-content-component") /*id: 101290*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function c(e) {
    if (e && e.displayMode === docBlockTypeConstants.blockDisplayConstants.INLINE) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o("docx-block-loading docx-block-loading-inline", e.className),
        style: e.inlineStyle,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "inline-mode",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "docx-block-inline-placeholder-expand"
          })
        }), e.children]
      });
    }
    let i = o("docx-block-loading", {
      "align-center": e.align === docBlockTypeConstants.alignmentConstants.CENTER || e.align === undefined,
      "align-left": e.align === docBlockTypeConstants.alignmentConstants.LEFT,
      "align-right": e.align === docBlockTypeConstants.alignmentConstants.RIGHT
    }, e.className);
    let r = e.defaultHeight || 220;
    if (e.showSkeleton) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "docx-block-loading",
        style: e.style,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "docx-block-mode docx-block-mode-skeleton",
          children: function (e) {
            let i = e - 40;
            let r = 0;
            let n = [];
            while (n.length === 0 ? r += 20 : n.length % 3 == 2 ? r += 48 : r += 36, !(r > i)) {
              let e = {
                marginBottom: "16px",
                width: "100%"
              };
              if (n.length % 3 == 0) {
                e.width = "100%";
                e.marginBottom = "16px";
              } else if (n.length % 3 == 1) {
                e.width = "75%";
                e.marginBottom = "16px";
              } else {
                e.width = "50%";
                e.marginBottom = "28px";
              }
              n.push(e);
            }
            return n;
          }(r).map((e, i) => reactJsxRuntimeCoreReexport.jsx(skeletonContentComponent.SkeletonContent, {
            className: "ud__skeleton-animation",
            style: {
              ...e
            }
          }, i))
        })
      });
    }
    let n = e.loadingIconScale;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: i,
      style: e.style,
      children: e.customPlaceholder || reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "docx-block-mode",
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "docx-block-spin",
            style: {
              transform: `scale(${(n || 1) * 0.225}) translate3d(0, 0, 0) rotate(-90deg)`
            },
            children: [reactJsxRuntimeCoreReexport.jsx("span", {
              className: "rectangle-1",
              children: reactJsxRuntimeCoreReexport.jsx("span", {})
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: "circle"
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: "rectangle-2",
              children: reactJsxRuntimeCoreReexport.jsx("span", {})
            })]
          }), e.children]
        })
      })
    });
  }
  require.d(exports, {
    DocxBlockLoading: function () {
      return c;
    }
  });
}