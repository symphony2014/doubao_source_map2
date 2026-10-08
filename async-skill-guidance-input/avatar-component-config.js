// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'avatarPrefixConfig'
// - Renamed export 'j' to 'avatarConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19365.bed2e0e3.js
         * chunkId: 19365
         * moduleId: 831970
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let i = {
    PREFIX: `${semiIdentifier.semiIdentifier}-avatar`
  };
  let a = {
    SHAPE: ["circle", "square"],
    SIZE: ["extra-extra-small", "extra-small", "small", "default", "medium", "large", "extra-large"],
    COLOR: ["grey", "red", "pink", "purple", "violet", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "white"],
    OVERLAP_FROM: ["start", "end"]
  };
  require.d(exports, {
    avatarPrefixConfig: function () {
      return i;
    },
    avatarConstants: function () {
      return a;
    }
  });
}