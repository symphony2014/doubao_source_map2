// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GV' to 'imageTypes'
// - Renamed export 'fN' to 'getImageLevel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-guidance-page.b074653e.js
         * chunkId: 25336
         * moduleId: 194509
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {}).GuidnaceImage = "guidance_image";
  i.InputImage = "inut_image";
  let r = i;
  let a = e => e >= 1400 ? 5 : e >= 1000 ? 4 : e >= 800 ? 3 : 2;
  let l = e => e >= 600 ? 4 : 2;
  let o = (e, t) => {
    switch (e) {
      case r.GuidnaceImage:
        return a(t);
      case r.InputImage:
        return l(t);
      default:
        return 2;
    }
  };
  require.d(exports, {
    imageTypes: function () {
      return r;
    },
    getImageLevel: function () {
      return o;
    }
  });
}