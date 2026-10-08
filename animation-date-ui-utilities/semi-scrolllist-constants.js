// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KT' to 'scrollConfig'
// - Renamed export 'UX' to 'cssClasses'
// - Renamed export 'j2' to 'scrollModes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 676322
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let r = {
    PREFIX: `${semiIdentifier.semiIdentifier}-scrolllist`,
    SELECTED: `${semiIdentifier.semiIdentifier}-scrolllist-item-selected`
  };
  let i = {
    MODE: ["normal", "wheel"]
  };
  let o = {
    DEFAULT_ITEM_HEIGHT: 36,
    DEFAULT_SCROLL_DURATION: 120
  };
  require.d(exports, {
    scrollConfig: function () {
      return o;
    },
    cssClasses: function () {
      return r;
    },
    scrollModes: function () {
      return i;
    }
  });
}