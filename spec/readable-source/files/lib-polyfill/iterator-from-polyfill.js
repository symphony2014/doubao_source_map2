// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'a' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// - Resolved require(136661) to 'iterator-prototype-setup'
// - Renamed variable 'c' to 'iteratorHelperFactory'
// - Resolved require(11754) to 'iterator-helper-factory'
// - Renamed variable 'f' to 'getIteratorUtil'
// - Resolved require(145391) to 'get-iterator-util'
// - Renamed variable 's' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 783775
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var u = require("iterator-prototype-setup") /*id: 136661*/.IteratorPrototype;
  var iteratorHelperFactory = require("iterator-helper-factory") /*id: 11754*/;
  var getIteratorUtil = require("get-iterator-util") /*id: 145391*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var l = iteratorHelperFactory(function () {
    return callBindPolyfill(this.next, this.iterator);
  }, true);
  polyfillPropertyDefiner({
    target: "Iterator",
    stat: true,
    forced: libPolyfillCheck
  }, {
    from: function (t) {
      var r = getIteratorUtil(typeof t == "string" ? requireObjectNotNullish(t) : t, true);
      if (isPrototypeOfPolyfill(u, r.iterator)) {
        return r.iterator;
      } else {
        return new l(r);
      }
    }
  });
}