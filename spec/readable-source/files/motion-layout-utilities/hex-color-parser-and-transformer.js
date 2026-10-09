// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'hexColorParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 316398
         */
module.exports = function (module, exports, require) {
  var rgbColorTransformer = require("rgb-color-transformer") /*id: 453160*/;
  let r = {
    test: require("color-string-validation-and-parsing") /*id: 940084*/.validateColorString("#"),
    parse: function (t) {
      let e = "";
      let i = "";
      let n = "";
      let r = "";
      if (t.length > 5) {
        e = t.substring(1, 3);
        i = t.substring(3, 5);
        n = t.substring(5, 7);
        r = t.substring(7, 9);
      } else {
        e = t.substring(1, 2);
        i = t.substring(2, 3);
        n = t.substring(3, 4);
        r = t.substring(4, 5);
        e += e;
        i += i;
        n += n;
        r += r;
      }
      return {
        red: parseInt(e, 16),
        green: parseInt(i, 16),
        blue: parseInt(n, 16),
        alpha: r ? parseInt(r, 16) / 255 : 1
      };
    },
    transform: rgbColorTransformer.rgbColorTransformer.transform
  };
  require.d(exports, {
    hexColorParser: function () {
      return r;
    }
  });
}