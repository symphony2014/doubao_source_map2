// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'T' to 'requireObjectCoercible'
// - Resolved require(770186) to 'require-object-coercible'
// - Renamed variable 'n' to 'symbolSafeStringConverter'
// - Resolved require(227969) to 'symbol-safe-string-converter'
// - Renamed variable 'o' to 'whitespaceCharacters'
// - Resolved require(30332) to 'whitespace-characters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 624037
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var requireObjectCoercible = require("require-object-coercible") /*id: 770186*/;
  var symbolSafeStringConverter = require("symbol-safe-string-converter") /*id: 227969*/;
  var whitespaceCharacters = require("whitespace-characters") /*id: 30332*/;
  var i = functionBindPrototypeCheckWrapper("".replace);
  var a = RegExp("^[" + whitespaceCharacters + "]+");
  var u = RegExp("(^|[^" + whitespaceCharacters + "])[" + whitespaceCharacters + "]+$");
  function s(t) {
    return function (e) {
      var Q = symbolSafeStringConverter(requireObjectCoercible(e));
      if (t & 1) {
        Q = i(Q, a, "");
      }
      if (t & 2) {
        Q = i(Q, u, "$1");
      }
      return Q;
    };
  }
  module.exports = {
    start: s(1),
    end: s(2),
    trim: s(3)
  };
}