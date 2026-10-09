// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'Spinner'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 596349
         */
module.exports = function (module, exports, require) {
  var classVariantBuilderUtil = require("class-variant-builder-util") /*id: 885479*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16V18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 9.55229 17.5523 10 17 10C16.4477 10 16 9.55229 16 9Z",
      fill: "currentColor"
    })
  });
  let l = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      color: {
        tertiary: "text-dbx-text-tertiary",
        disable: "text-dbx-text-disable",
        brand: "text-dbx-text-highlight",
        "static-white": "text-dbx-static-white",
        "current-color": "text-current"
      }
    }
  });
  let s = e => {
    let {
      className: t,
      style: n,
      color: i = "current-color",
      size: s = 24,
      ...u
    } = e;
    let c = s / 24 * 3;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-dbx-name": "spinner-root",
      className: classNamesMergeUtil.mergeClassNames(`
          grid shrink-0 animate-spin place-items-center
          [mask-image:conic-gradient(from_180deg_at_50%_50%,rgba(0,0,0,0)_0deg,rgba(0,0,0,1)_280deg,transparent_280deg_360deg)]
          mask-cover mask-center mask-no-repeat
        `, l({
        color: i
      }), t),
      style: {
        width: s,
        height: s,
        padding: c,
        ...n
      },
      ...u,
      children: reactJsxRuntimeCoreReexport.jsx(a, {
        className: "size-full"
      })
    });
  };
  require.d(exports, {
    Spinner: function () {
      return s;
    }
  });
}