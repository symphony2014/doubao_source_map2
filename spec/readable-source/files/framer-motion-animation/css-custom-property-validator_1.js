// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'isCustomProperty'
// - Renamed export 't' to 'isValidVarFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 777347
         */
module.exports = function (module, exports, require) {
  let n = t => e => typeof e == "string" && e.startsWith(t);
  let r = n("--");
  let s = n("var(--");
  let o = t => !!s(t) && a.test(t.split("/*")[0].trim());
  let a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  require.d(exports, {
    isCustomProperty: function () {
      return r;
    },
    isValidVarFunction: function () {
      return o;
    }
  });
}