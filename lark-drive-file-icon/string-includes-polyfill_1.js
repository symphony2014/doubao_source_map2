// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'a' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'c' to 'rejectRegexpValidator'
// - Resolved require(494821) to 'reject-regexp-validator'
// - Renamed variable 'i' to 'requireObjectCoercible'
// - Resolved require(770186) to 'require-object-coercible'
// - Renamed variable 'o' to 'symbolSafeStringConverter'
// - Resolved require(227969) to 'symbol-safe-string-converter'
// - Renamed variable 'l' to 'regexSymbolMatchUtil'
// - Resolved require(777729) to 'regex-symbol-match-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 240397
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var rejectRegexpValidator = require("reject-regexp-validator") /*id: 494821*/;
  var requireObjectCoercible = require("require-object-coercible") /*id: 770186*/;
  var symbolSafeStringConverter = require("symbol-safe-string-converter") /*id: 227969*/;
  var regexSymbolMatchUtil = require("regex-symbol-match-util") /*id: 777729*/;
  var f = functionBindPrototypeCheckWrapper("".indexOf);
  coreJsExportUtil({
    target: "String",
    proto: true,
    forced: !regexSymbolMatchUtil("includes")
  }, {
    includes: function (e) {
      return !!~f(symbolSafeStringConverter(requireObjectCoercible(this)), symbolSafeStringConverter(rejectRegexpValidator(e)), arguments.length > 1 ? arguments[1] : undefined);
    }
  });
}