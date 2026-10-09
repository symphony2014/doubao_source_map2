// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'LayoutPositions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 314031
         */
module.exports = function (module, exports, require) {
  var i = {
    LeftFirst: -100,
    LeftSecond: -99,
    LeftThird: -98,
    LeftForth: -97,
    RightFirst: 100,
    RightSecond: 99,
    RightThird: 98,
    RightForth: 97,
    CenterFirst: 0,
    CenterSecond: 1,
    CenterThird: 2,
    CenterForth: 3
  };
  require.d(exports, {
    LayoutPositions: function () {
      return i;
    }
  });
}