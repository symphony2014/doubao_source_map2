// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'assignProperties'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 732590
         */
module.exports = function (module, exports, require) {
  var propertyDefineHelper = require("property-define-helper") /*id: 411363*/;
  function o(t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r] ?? {};
      var o = Object.keys(e);
      if (typeof Object.getOwnPropertySymbols == "function") {
        o = o.concat(Object.getOwnPropertySymbols(e).filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }));
      }
      o.forEach(function (r) {
        propertyDefineHelper.assignOrDefine(t, r, e[r]);
      });
    }
    return t;
  }
  require.d(exports, {
    assignProperties: function () {
      return o;
    }
  });
}