// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Renamed variable 'T' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'n' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'o' to 'symbolSafeStringConverter'
// - Resolved require(227969) to 'symbol-safe-string-converter'
// - Resolved require(624037) to 'string-trim-utilities'
// - Renamed variable 'a' to 'whitespaceCharacters'
// - Resolved require(30332) to 'whitespace-characters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 258718
         */
module.exports = function (module, exports, require) {
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var symbolSafeStringConverter = require("symbol-safe-string-converter") /*id: 227969*/;
  var i = require("string-trim-utilities") /*id: 624037*/.trim;
  var whitespaceCharacters = require("whitespace-characters") /*id: 30332*/;
  var u = getGlobalObject.parseInt;
  var s = getGlobalObject.Symbol;
  var l = s && s.iterator;
  var c = /^[+-]?0x/i;
  var p = functionBindPrototypeCheckWrapper(c.exec);
  var h = u(whitespaceCharacters + "08") !== 8 || u(whitespaceCharacters + "0x16") !== 22 || l && !safeFunctionExecutor(function () {
    u(Object(l));
  });
  module.exports = h ? function (t, e) {
    var Q = i(symbolSafeStringConverter(t));
    return u(Q, e >>> 0 || (p(c, Q) ? 16 : 10));
  } : u;
}