// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'safeFromCodePoint'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 281560
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    let r = Number.parseInt(e, t);
    if (r < 9 || r === 11 || r > 13 && r < 32 || r > 126 && r < 160 || r > 55295 && r < 57344 || r > 64975 && r < 65008 || (r & 65535) == 65535 || (r & 65535) == 65534 || r > 1114111) {
      return "�";
    } else {
      return String.fromCodePoint(r);
    }
  }
  require.d(exports, {
    safeFromCodePoint: function () {
      return n;
    }
  });
}