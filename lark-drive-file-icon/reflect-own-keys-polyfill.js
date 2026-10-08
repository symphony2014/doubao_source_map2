// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalNamespaceUtil'
// - Resolved require(858005) to 'global-namespace-util'
// - Renamed variable 'a' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'c' to 'getOwnPropertyNamesUtil'
// - Resolved require(572559) to 'get-own-property-names-util'
// - Renamed variable 'i' to 'getOwnPropertySymbolsHelper'
// - Resolved require(599668) to 'get-own-property-symbols-helper'
// - Renamed variable 'o' to 'requireObjectOrThrowTypeError'
// - Resolved require(434324) to 'require-object-or-throw-type-error'
// - Updated imported property 'f' to 'getOwnPropertyNames' (module 572559)
// - Updated imported property 'f' to 'getOwnPropertySymbols' (module 599668)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 198580
         */
module.exports = function (module, exports, require) {
  var globalNamespaceUtil = require("global-namespace-util") /*id: 858005*/;
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var getOwnPropertyNamesUtil = require("get-own-property-names-util") /*id: 572559*/;
  var getOwnPropertySymbolsHelper = require("get-own-property-symbols-helper") /*id: 599668*/;
  var requireObjectOrThrowTypeError = require("require-object-or-throw-type-error") /*id: 434324*/;
  var l = functionBindPrototypeCheckWrapper([].concat);
  module.exports = globalNamespaceUtil("Reflect", "ownKeys") || function (e) {
    var t = getOwnPropertyNamesUtil.getOwnPropertyNames(requireObjectOrThrowTypeError(e));
    var r = getOwnPropertySymbolsHelper.getOwnPropertySymbols;
    if (r) {
      return l(t, r(e));
    } else {
      return t;
    }
  };
}