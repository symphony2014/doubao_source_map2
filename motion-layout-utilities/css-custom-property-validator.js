// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'isCustomProperty'
// - Renamed export 't' to 'isValidVarSyntax'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 257467
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
    isValidVarSyntax: function () {
      return o;
    }
  });
}