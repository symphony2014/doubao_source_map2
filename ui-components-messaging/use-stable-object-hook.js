// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'useStableObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24845.6ed24187.js
         * chunkId: 24845
         * moduleId: 141660
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  let a = e => {
    let t = {};
    let i = reactCoreLibraryReexport.useRef({});
    let a = reactCoreLibraryReexport.useRef({});
    for (let o of getOwnKeys.getOwnKeys(e)) {
      let r = objectPathGetDefault.getObjectPathDefault(e, o);
      if (isFunctionUtil_1.isFunction(r)) {
        i.current[o] = r;
        if (!(o in a.current)) {
          a.current[o] = function () {
            var e = arguments.length;
            var t = Array(e);
            var r = 0;
            for (; r < e; r++) {
              t[r] = arguments[r];
            }
            return i.current[o](...t);
          };
        }
        t[o] = a.current[o];
      } else {
        delete i.current[o];
        delete a.current[o];
        t[o] = r;
      }
    }
    return t;
  };
  require.d(exports, {
    useStableObject: function () {
      return a;
    }
  });
}