// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'HighlightText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.a5b16934.js
         * chunkId: 88491
         * moduleId: 554405
         */
module.exports = function (module, exports, require) {
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let i = e => {
    let {
      children: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("span", {
      style: {
        color: "#0066FF"
      },
      children: t
    });
  };
  exports.HighlightText = e => {
    let {
      text: t,
      highlightInfo: n
    } = e;
    let o = [];
    let s = n[0].keyword_positions;
    if (s) {
      let e = 0;
      s.map((s, a) => {
        let l = s.start;
        let c = s.end + 1;
        let d = t.slice(l, c);
        o.push(t.slice(e, l));
        e = c;
        o.push(reactJsxRuntimeCoreReexport.jsx(i, {
          children: d
        }, `${n[0].id}_${a}`));
      });
      o.push(t.slice(e));
    }
    return reactJsxRuntimeCoreReexport.jsx("div", {
      children: s ? o : t
    });
  };
}