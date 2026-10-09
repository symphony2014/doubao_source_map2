// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'cryptoRng'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 347818
         */
module.exports = function (module, exports, require) {
  let r;
  let i = new Uint8Array(16);
  function o() {
    if (!r && !(r = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) {
      throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return r(i);
  }
  require.d(exports, {
    cryptoRng: function () {
      return o;
    }
  });
}