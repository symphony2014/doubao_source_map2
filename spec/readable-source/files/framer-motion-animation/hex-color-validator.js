// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'hexColorValidator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 750715
         */
module.exports = function (module, exports, require) {
  var rgbColorValidator = require("rgb-color-validator") /*id: 579754*/;
  let r = {
    test: require("color-validation-utils") /*id: 318138*/.isColorString("#"),
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
    transform: rgbColorValidator.rgbColorValidator.transform
  };
  require.d(exports, {
    hexColorValidator: function () {
      return r;
    }
  });
}