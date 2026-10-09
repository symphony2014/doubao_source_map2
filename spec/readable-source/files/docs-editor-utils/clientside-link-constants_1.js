// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$7' to 'loadingLinkTitle'
// - Renamed export 'QV' to 'autoUrlLine'
// - Renamed export 'Wv' to 'linkUnderline'
// - Renamed export 'Zj' to 'linkType'
// - Renamed export '_b' to 'mockSelection'
// - Renamed export 'dz' to 'unlinkType'
// - Renamed export 'hW' to 'linkSelection'
// - Renamed export 'i0' to 'autoUrlStart'
// - Renamed export 'in' to 'autoUrlType'
// - Renamed export 'nu' to 'linkSelectionToken'
// - Renamed export 's4' to 'linkId'
// - Renamed export 'us' to 'autoUrlLength'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 306134
         */
module.exports = function (module, exports, require) {
  var clientsidePrefixConstant = require("clientside-prefix-constant") /*id: 888035*/;
  let i = "link";
  let l = "auto-url";
  let c = "unlink";
  let u = `${clientsidePrefixConstant.clientsidePrefix}link-selection`;
  let a = `${clientsidePrefixConstant.clientsidePrefix}link-underline`;
  let s = `${clientsidePrefixConstant.clientsidePrefix}mock-selection`;
  clientsidePrefixConstant.clientsidePrefix;
  let d = `${clientsidePrefixConstant.clientsidePrefix}loading-link-title`;
  let f = "link-selection-token-";
  let h = "auto-url-line";
  let _ = "auto-url-start";
  let p = "auto-url-length";
  let g = "link-id";
  require.d(exports, {
    loadingLinkTitle: function () {
      return d;
    },
    autoUrlLine: function () {
      return h;
    },
    linkUnderline: function () {
      return a;
    },
    linkType: function () {
      return i;
    },
    mockSelection: function () {
      return s;
    },
    unlinkType: function () {
      return c;
    },
    linkSelection: function () {
      return u;
    },
    autoUrlStart: function () {
      return _;
    },
    autoUrlType: function () {
      return l;
    },
    linkSelectionToken: function () {
      return f;
    },
    linkId: function () {
      return g;
    },
    autoUrlLength: function () {
      return p;
    }
  });
}