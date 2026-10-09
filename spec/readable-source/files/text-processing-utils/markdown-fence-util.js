// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'validateFenceBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 125036
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    return t.options.fences === false && !!e.value && !e.lang && !!/[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value);
  }
  require.d(exports, {
    validateFenceBlock: function () {
      return n;
    }
  });
}