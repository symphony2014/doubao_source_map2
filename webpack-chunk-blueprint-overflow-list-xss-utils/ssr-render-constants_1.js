// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ni' to 'routerDataKey'
// - Renamed export 'Nm' to 'RenderMode'
// - Renamed export 'pc' to 'ssrDataKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 95731
         */
module.exports = function (module, exports, require) {
  (r = i ||= {})[r.CLIENT_RENDER = 0] = "CLIENT_RENDER";
  r[r.SERVER_PREFETCH = 1] = "SERVER_PREFETCH";
  r[r.SERVER_RENDER = 2] = "SERVER_RENDER";
  var r;
  var i;
  var o = "__MODERN_SSR_DATA__";
  var a = "__MODERN_ROUTER_DATA__";
  require.d(exports, {
    routerDataKey: function () {
      return a;
    },
    RenderMode: function () {
      return i;
    },
    ssrDataKey: function () {
      return o;
    }
  });
}