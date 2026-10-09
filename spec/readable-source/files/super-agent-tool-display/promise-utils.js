// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'nextTickDelay'
// - Renamed export 'R' to 'resolvedPromise'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27661.f1334209.js
         * chunkId: 27661
         * moduleId: 528623
         */
module.exports = function (module, exports, require) {
  let r = e => new Promise(o => setTimeout(o, e));
  let n = e => Promise.resolve(e);
  let l = function () {
    if (arguments.length > 0 && arguments[0] !== undefined) {
      arguments[0];
    }
    return Promise.resolve(r(0));
  };
  require.d(exports, {
    nextTickDelay: function () {
      return l;
    },
    resolvedPromise: function () {
      return n;
    }
  });
}