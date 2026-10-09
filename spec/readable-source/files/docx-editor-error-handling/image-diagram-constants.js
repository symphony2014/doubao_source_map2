// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$f' to 'maxImageCount'
// - Renamed export 'Wp' to 'entityTypeList'
// - Renamed export 'b' to 'imageEditModes'
// - Renamed export 'fC' to 'minImageCount'
// - Renamed export 'm1' to 'minScaleValue'
// - Renamed export 'rg' to 'timeoutValueMs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 465867
         */
module.exports = function (module, exports, require) {
  var n;
  var entityTypes_1 = require("entity-types_1") /*id: 140922*/;
  let l = [entityTypes_1.EntityTypes.Image, entityTypes_1.EntityTypes.Diagram];
  let s = 0.1;
  let a = 5;
  let c = 20;
  let d = 500;
  (n = {}).VC = "vc";
  n.Unmount = "unmount";
  n.Viewer = "viewer";
  n.EditImg = "EditImg";
  let u = n;
  require.d(exports, {
    maxImageCount: function () {
      return c;
    },
    entityTypeList: function () {
      return l;
    },
    imageEditModes: function () {
      return u;
    },
    minImageCount: function () {
      return a;
    },
    minScaleValue: function () {
      return s;
    },
    timeoutValueMs: function () {
      return d;
    }
  });
}