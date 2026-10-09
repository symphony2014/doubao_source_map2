// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'dm' to 'UserTypes'
// - Renamed export 'py' to 'EntityTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 193694
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  (r = {})[r.User = 0] = "User";
  r[r.Coco = 1] = "Coco";
  r[r.GuanFang = 2] = "GuanFang";
  r[r.CocoWeb = 3] = "CocoWeb";
  let i = r;
  (o = {})[o.EntityType_Unknown = 0] = "EntityType_Unknown";
  o[o.EntityType_File = 1] = "EntityType_File";
  o[o.EntityType_Image = 2] = "EntityType_Image";
  let a = o;
  require.d(exports, {
    UserTypes: function () {
      return i;
    },
    EntityTypes: function () {
      return a;
    }
  });
}