// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'responsiveMediaCreator'
// - Resolved require(996552) to 'responsive-media-creator'
// - Resolved require(207524) to 'fresnel-breakpoint-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 29111
         */
module.exports = function (module, exports, require) {
  Object.defineProperty(exports, "createMedia", {
    enumerable: true,
    get: function () {
      return responsiveMediaCreator.createMedia;
    }
  });
  var responsiveMediaCreator = require("responsive-media-creator") /*id: 996552*/;
  require("fresnel-breakpoint-manager") /*id: 207524*/;
}