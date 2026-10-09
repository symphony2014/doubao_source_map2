// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'imageTaskTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 783900
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {}).Inpainting = "inpainting";
  i.Outpainting = "outpainting";
  i.SuperResolution = "super_resolution";
  i.Smearing = "smearing";
  i.OperateBackground = "operate_background";
  let l = i;
  require.d(exports, {
    imageTaskTypes: function () {
      return l;
    }
  });
}