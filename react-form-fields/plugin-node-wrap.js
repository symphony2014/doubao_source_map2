// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'PluginNodeWrap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 443134
         */
module.exports = function (module, exports, require) {
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e) {
    let {
      plugin: t,
      node: n,
      ctx: o,
      extra: i
    } = e;
    let {
      Content: a,
      useNodeWrapperClassName: s = () => "",
      usePropsSelector: l
    } = t;
    let c = l(o, n.block);
    let d = s(c);
    let u = {
      ...c,
      ...i,
      node: n
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: d,
      "data-render-engine": "node",
      "data-plugin-identifier": n.type,
      children: reactJsxRuntimeCoreReexport.jsx(a, {
        ...u
      }, n.id)
    }, `wrapper_${n.id}`);
  }
  function i(e) {
    let {
      plugin: n,
      useDefaultClassName: i,
      node: a,
      renderContext: s,
      ...l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(o, {
      plugin: {
        ...n,
        useNodeWrapperClassName: (n == null ? undefined : n.useNodeWrapperClassName) ?? i
      },
      ctx: s,
      node: a,
      extra: l
    }, a.id);
  }
  require.d(exports, {
    PluginNodeWrap: function () {
      return i;
    }
  });
}