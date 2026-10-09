// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'c' to 'nodeBuiltinRequirePolyfill'
// - Resolved require(15191) to 'node-builtin-require-polyfill'
// - Renamed variable 'f' to 'structuredCloneSupportCheck'
// - Resolved require(451243) to 'structured-clone-support-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 427401
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var i;
  var a;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var nodeBuiltinRequirePolyfill = require("node-builtin-require-polyfill") /*id: 15191*/;
  var structuredCloneSupportCheck = require("structured-clone-support-check") /*id: 451243*/;
  var s = globalObjectPolyfill.structuredClone;
  var l = globalObjectPolyfill.ArrayBuffer;
  var v = globalObjectPolyfill.MessageChannel;
  var p = false;
  if (structuredCloneSupportCheck) {
    p = function (t) {
      s(t, {
        transfer: [t]
      });
    };
  } else if (l) {
    try {
      if (!v && (n = nodeBuiltinRequirePolyfill("worker_threads"))) {
        v = n.MessageChannel;
      }
      if (v) {
        o = new v();
        i = new l(2);
        a = function (t) {
          o.port1.postMessage(null, [t]);
        };
        if (i.byteLength === 2) {
          a(i);
          if (i.byteLength === 0) {
            p = a;
          }
        }
      }
    } catch (t) {}
  }
  module.exports = p;
}