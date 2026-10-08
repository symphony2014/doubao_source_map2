// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'DocSkeletonPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 779323
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      className: t,
      style: n,
      extraStyle: i,
      newDoc: l
    } = e;
    let {
      ref: c,
      width: d
    } = resizeObserverHooks.useResizeObserverEx({
      syncUpdate: false,
      box: "border-box"
    });
    let u = reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r("placeholder-wrapper-U0VIos", {
        "gradient-short-CYMzgp": l
      }),
      style: i,
      children: [reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Title, {
        className: "main-title-qjKUj6"
      }), Array(l ? 1 : 10).fill(1).map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "content-UeyCWp",
        children: [reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Title, {
          className: "header-IIvLp7"
        }), reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Title, {
          className: "paragraph-_RmStI"
        })]
      }, t))]
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: c,
      className: r("container-cdWVIX", t, {
        "narrow-iP7Mn2": d && d < 600
      }),
      style: n,
      "data-testid": "doc_skeleton_panel",
      children: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton, {
        placeholder: u,
        loading: true,
        active: true
      })
    });
  };
  require.d(exports, {
    DocSkeletonPanel: function () {
      return l;
    }
  });
}