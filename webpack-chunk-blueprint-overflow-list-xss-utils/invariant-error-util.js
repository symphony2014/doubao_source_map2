// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 827168
         */
module.exports = function (module, exports, require) {
  module.exports = function (e, t, n, r, i, o, a, s) {
    if (!e) {
      var u;
      if (t === undefined) {
        u = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      } else {
        var c = [n, r, i, o, a, s];
        var l = 0;
        (u = Error(t.replace(/%s/g, function () {
          return c[l++];
        }))).name = "Invariant Violation";
      }
      u.framesToPop = 1;
      throw u;
    }
  };
}