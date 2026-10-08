// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'fileSystemFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 458102
         */
module.exports = function (module, exports, require) {
  class n {
    readFile() {
      throw Error("No file system is available.");
    }
    async readDirectory() {
      return [];
    }
  }
  let i = {
    fileSystemProvider: () => new n()
  };
  require.d(exports, {
    fileSystemFactory: function () {
      return i;
    }
  });
}