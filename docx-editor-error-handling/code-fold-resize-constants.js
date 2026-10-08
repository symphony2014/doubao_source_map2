// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G3' to 'foldResizeDefaults'
// - Renamed export 'NO' to 'foldServiceName'
// - Renamed export 'WX' to 'commentAnchorTypes'
// - Renamed export 'Zl' to 'resizeServiceName'
// - Renamed export 'jq' to 'resizeModes'
// - Renamed export 'wd' to 'foldActions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 637342
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  let a = dependencyInjectionContainer.providerName("codeFoldService");
  let c = dependencyInjectionContainer.providerName("codeResizeService");
  (n = {}).Horizon = "Horizon";
  n.Vertical = "Vertical";
  n.None = "None";
  let d = n;
  (o = {}).Comment = "Comment";
  o.Anchor = "Anchor";
  let u = o;
  (l = {}).Fold = "Fold";
  l.UnFold = "UnFold";
  let h = l;
  let f = [d.Vertical, h.Fold, h.UnFold];
  require.d(exports, {
    foldResizeDefaults: function () {
      return f;
    },
    foldServiceName: function () {
      return a;
    },
    commentAnchorTypes: function () {
      return u;
    },
    resizeServiceName: function () {
      return c;
    },
    resizeModes: function () {
      return d;
    },
    foldActions: function () {
      return h;
    }
  });
}