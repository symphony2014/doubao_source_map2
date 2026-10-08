// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GV' to 'EditorType'
// - Renamed export 'OD' to 'MigrationStatus'
// - Renamed export 'vf' to 'TaskStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 594084
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  (i = {})[i.NotMigrated = 0] = "NotMigrated";
  i[i.Migrating = 1] = "Migrating";
  i[i.Migrated = 2] = "Migrated";
  let a = i;
  (r = {})[r.Markdown = 0] = "Markdown";
  r[r.Otter = 1] = "Otter";
  r[r.Lark = 2] = "Lark";
  let l = r;
  (o = {})[o.None = 0] = "None";
  o[o.Processing = 1] = "Processing";
  o[o.Succeeded = 2] = "Succeeded";
  o[o.Failed = 3] = "Failed";
  let s = o;
  require.d(exports, {
    EditorType: function () {
      return l;
    },
    MigrationStatus: function () {
      return a;
    },
    TaskStatus: function () {
      return s;
    }
  });
}