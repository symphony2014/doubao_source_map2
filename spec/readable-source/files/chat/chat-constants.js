// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CH' to 'taskTypes'
// - Renamed export 'jJ' to 'aiModels'
// - Renamed export 'qX' to 'complexityLevels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 777970
         */
module.exports = function (module, exports, require) {
  var i = {
    Base: 0,
    SuperTask: 1
  };
  var r = {
    Simple: 0,
    Complex: 1
  };
  var o = {
    Doubao: 0,
    Claude: 1
  };
  require.d(exports, {
    taskTypes: function () {
      return i;
    },
    aiModels: function () {
      return o;
    },
    complexityLevels: function () {
      return r;
    }
  });
}