// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CN' to 'showTableResizer'
// - Renamed export 'UK' to 'fastTimingConfig'
// - Renamed export 'kZ' to 'slowTimingConfig'
// - Renamed export 'll' to 'resizeScopeTypes'
// - Renamed export 'rc' to 'resizeHandleSize'
// - Renamed export 'uL' to 'altTimingConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_extensions_table-resize-adsorp.4ab09c19.js
         * chunkId: 61651
         * moduleId: 369713
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var l;
  var s;
  let u = "show-table-resizer";
  (n = {}).NEIGHBOUR_COL = "neighbour_col";
  n.NEIGHBOUR_TABLE = "neighbour_table";
  n.PAGE = "page";
  let o = n;
  (i = {})[i.SHOW = 5] = "SHOW";
  i[i.APPLY = 5] = "APPLY";
  let c = i;
  (l = {})[l.SHOW = 20] = "SHOW";
  l[l.APPLY = 5] = "APPLY";
  let a = l;
  (s = {})[s.SHOW = 20] = "SHOW";
  s[s.APPLY = 5] = "APPLY";
  let d = s;
  let f = 24;
  require.d(exports, {
    showTableResizer: function () {
      return u;
    },
    fastTimingConfig: function () {
      return c;
    },
    slowTimingConfig: function () {
      return a;
    },
    resizeScopeTypes: function () {
      return o;
    },
    resizeHandleSize: function () {
      return f;
    },
    altTimingConfig: function () {
      return d;
    }
  });
}