// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'filterNonMinutesLinkOptions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89647.6be961c3.js
         * chunkId: 89647
         * moduleId: 441051
         */
module.exports = function (module, exports, require) {
  var linkTypeConstants = require("link-type-constants") /*id: 539813*/;
  var linkDisplayOptionsMenuItems = require("link-display-options-menu-items") /*id: 334029*/;
  var driveUrlValidationUtilities = require("drive-url-validation-utilities") /*id: 262405*/;
  let a = [linkTypeConstants.linkConstants.toCard, linkTypeConstants.linkConstants.toTitle, linkDisplayOptionsMenuItems.linkDisplayOptions.Card, linkDisplayOptionsMenuItems.linkDisplayOptions.Title];
  let s = (e, n) => driveUrlValidationUtilities.isValidMinutesUrl(e) && a.includes(n.name);
  let c = (e, n) => n.filter(n => !s(e, n));
  require.d(exports, {
    filterNonMinutesLinkOptions: function () {
      return c;
    }
  });
}