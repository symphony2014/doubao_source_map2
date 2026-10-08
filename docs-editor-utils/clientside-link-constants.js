// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IE' to 'unlink'
// - Renamed export 'nu' to 'linkSelectionToken'
// - Renamed export 'qE' to 'localLink'
// - Renamed export 'rr' to 'link'
// - Renamed export 's4' to 'linkId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 986744
         */
module.exports = function (module, exports, require) {
  var clientsidePrefixConstant = require("clientside-prefix-constant") /*id: 888035*/;
  let i = "link";
  let l = `${clientsidePrefixConstant.clientsidePrefix}localLink`;
  let c = "link-id";
  let u = "unlink";
  let a = "link-selection-token-";
  require.d(exports, {
    unlink: function () {
      return u;
    },
    linkSelectionToken: function () {
      return a;
    },
    localLink: function () {
      return l;
    },
    link: function () {
      return i;
    },
    linkId: function () {
      return c;
    }
  });
}