// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'arraySliceMethodResolverExport'
// - Resolved require(785504) to 'array-slice-method-resolver-export'
// - Renamed variable 'T' to 'arrayFromPolyfillStubWrapper_1'
// - Resolved require(693103) to 'array-from-polyfill-stub-wrapper_1'
// - Renamed variable 'n' to 'arraySliceCopy'
// - Resolved require(452321) to 'array-slice-copy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 281153
         */
module.exports = function (module, exports, require) {
  var arraySliceMethodResolverExport = require("array-slice-method-resolver-export") /*id: 785504*/;
  var arrayFromPolyfillStubWrapper_1 = require("array-from-polyfill-stub-wrapper_1") /*id: 693103*/;
  var arraySliceCopy = require("array-slice-copy") /*id: 452321*/;
  module.exports = function (t, e) {
    if (t) {
      if (typeof t == "string") {
        return arraySliceCopy(t, e);
      }
      var Q;
      var o = arraySliceMethodResolverExport(Q = {}.toString.call(t)).call(Q, 8, -1);
      if (o === "Object" && t.constructor) {
        o = t.constructor.name;
      }
      if (o === "Map" || o === "Set") {
        return arrayFromPolyfillStubWrapper_1(t);
      } else if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) {
        return arraySliceCopy(t, e);
      } else {
        return undefined;
      }
    }
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}