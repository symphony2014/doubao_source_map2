// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IP' to 'layoutMinSize'
// - Renamed export 'Wh' to 'LayoutSizes'
// - Renamed export 'dO' to 'layoutMaxSize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 416118
         */
module.exports = function (module, exports, require) {
  var i;
  let r = 17;
  let o = 40;
  (i = {})[i.Smallest = 0] = "Smallest";
  i[i.Smaller = 1] = "Smaller";
  i[i.Small = 2] = "Small";
  i[i.Medium = 3] = "Medium";
  i[i.Large = 4] = "Large";
  let s = i;
  require.d(exports, {
    layoutMinSize: function () {
      return r;
    },
    LayoutSizes: function () {
      return s;
    },
    layoutMaxSize: function () {
      return o;
    }
  });
}