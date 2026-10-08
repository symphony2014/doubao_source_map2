// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'escapeHashPipe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52853.7f831412.js
         * chunkId: 52853
         * moduleId: 227019
         */
module.exports = function (module, exports, require) {
  var jsUtilFunctions = require("js-util-functions") /*id: 266643*/;
  let n = e => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  let l = (e, t) => {
    if (t.filter(e => e.length !== 1).length) {
      throw Error(`illegal chars length: ${t.join(", ")}`);
    }
    return t.reduce((e, t) => {
      let r = RegExp(String.raw`([^\\]|^)(${n(t)})`, "g");
      return e.replace(r, (e, t, r) => `${t}\\${r}`);
    }, e);
  };
  let o = jsUtilFunctions.createPipe(e => l(e, ["#"]));
  require.d(exports, {
    escapeHashPipe: function () {
      return o;
    }
  });
}