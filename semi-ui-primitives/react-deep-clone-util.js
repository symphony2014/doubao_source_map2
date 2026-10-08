// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'reactDeepClone'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18629.286ea62c.js
         * chunkId: 18629
         * moduleId: 767669
         */
module.exports = function (module, exports, require) {
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  var deepCloneWrapper_2 = require("deep-clone-wrapper_2") /*id: 251504*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function s(e) {
    return deepCloneWrapper_2.deepClone(e, e => {
      if (isPlainObjectUtil.isPlainObject(e) && !e._innerDataTag || reactCoreLibraryReexport.isValidElement(e)) {
        return e;
      }
    });
  }
  require.d(exports, {
    reactDeepClone: function () {
      return s;
    }
  });
}