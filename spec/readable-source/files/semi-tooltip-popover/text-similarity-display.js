// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'TextSimilarityDisplay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 987971
         */
module.exports = function (module, exports, require) {
  var o = {
    text: "text-vih9Yc",
    prefix: "prefix-qld1V4",
    similarity: "similarity-zmCHD6",
    suffix: "suffix-xX_3x4"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let r = e => {
    let {
      prefix_content: t,
      suffix_content: n,
      similarity_content: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o.text,
      children: [t && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: o.prefix,
          style: {
            maskImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 35px, rgba(0, 0, 0, 1) 100%)"
          },
          children: `${t.length > 25 ? "..." : ""}${t.slice(-25)}`
        })
      }), r && reactJsxRuntimeCoreReexport.jsx("div", {
        className: o.similarity,
        children: r
      }), n && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: o.suffix,
          style: {
            maskImage: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 35px, rgba(0, 0, 0, 1) 100%)"
          },
          children: n
        })
      })]
    });
  };
  require.d(exports, {
    TextSimilarityDisplay: function () {
      return r;
    }
  });
}