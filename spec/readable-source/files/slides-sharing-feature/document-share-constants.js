// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'ShareSectionTypes'
// - Renamed export 'x' to 'VisibilityTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 271884
         */
module.exports = function (module, exports, require) {
  var r;
  var n;
  (r = {})[r.Home = 0] = "Home";
  r[r.QRExport = 1] = "QRExport";
  r[r.PermissionSetting = 2] = "PermissionSetting";
  r[r.PasswordSetting = 3] = "PasswordSetting";
  let i = r;
  (n = {})[n.Private = 0] = "Private";
  n[n.Public = 1] = "Public";
  n[n.Encryption = 2] = "Encryption";
  let s = n;
  require.d(exports, {
    ShareSectionTypes: function () {
      return i;
    },
    VisibilityTypes: function () {
      return s;
    }
  });
}