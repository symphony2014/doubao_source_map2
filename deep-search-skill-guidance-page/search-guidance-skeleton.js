// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'GuidanceSkeleton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: search-skill-guidance-page-v2.6f4bfe01.js
         * chunkId: 29927
         * moduleId: 675898
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  var o = "flash-_SZop8";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = () => {
    let e = reactJsxRuntimeCoreReexport.jsx("div", {
      className: i("!min-w-280 !rounded-12 !py-12 !px-12 cursor-pointer hover:animate-hover active:animate-click flex-row-between pointer-events-none border-b-solid border-b-[0.5px] border-[rgba(0,0,0,0.12)]"),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex-row-start w-full",
        children: [reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Avatar, {
          className: i("!h-82 !w-120 !mr-16 !rounded-12 ", o)
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "w-full flex-1",
          children: [reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Title, {
            className: i("w-full !max-w-240 !h-22 !mb-8 ", o)
          }), reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Title, {
            className: i("w-full !max-w-390 !h-14", o)
          })]
        })]
      })
    });
    let t = reactJsxRuntimeCoreReexport.jsx("div", {
      className: "flex flex-col gap-4",
      children: Array(6).fill(0).map(t => e)
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "mt-10",
      children: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton, {
        placeholder: t,
        active: false,
        className: "w-full"
      })
    });
  };
  require.d(exports, {
    GuidanceSkeleton: function () {
      return l;
    }
  });
}