// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Jx' to 'ReadStatus'
// - Renamed export 'Vk' to 'ChangeType'
// - Renamed export '_h' to 'AccountStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42552.606ee944.js
         * chunkId: 42552
         * moduleId: 928220
         */
module.exports = function (module, exports, require) {
  var n;
  var a;
  var r;
  (n = {})[n.Normal = 0] = "Normal";
  n[n.ContentNoChange = 1] = "ContentNoChange";
  n[n.StatusNoChange = 2] = "StatusNoChange";
  let s = n;
  (a = {})[a.None = 0] = "None";
  a[a.Read = 1] = "Read";
  let o = a;
  (r = {})[r.Available = 1] = "Available";
  r[r.Reviewing = 2] = "Reviewing";
  r[r.Ban = 3] = "Ban";
  r[r.ForeverBan = 4] = "ForeverBan";
  let l = r;
  require.d(exports, {
    ReadStatus: function () {
      return o;
    },
    ChangeType: function () {
      return s;
    },
    AccountStatus: function () {
      return l;
    }
  });
}