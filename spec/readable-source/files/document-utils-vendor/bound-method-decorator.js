// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MR' to 'boundMethodDecorator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 369553
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  function i(e, t, r) {
    var i = r.value;
    if (typeof i != "function") {
      throw TypeError(`@boundMethod decorator can only be applied to methods not: ${n(i)}`);
    }
    var o = false;
    return {
      configurable: true,
      get: function () {
        if (o || this === e.prototype || this.hasOwnProperty(t) || typeof i != "function") {
          return i;
        }
        var r = i.bind(this);
        o = true;
        Object.defineProperty(this, t, {
          configurable: true,
          get: function () {
            return r;
          },
          set: function (e) {
            i = e;
            delete this[t];
          }
        });
        o = false;
        return r;
      },
      set: function (e) {
        i = e;
      }
    };
  }
  require.d(exports, {
    boundMethodDecorator: function () {
      return i;
    }
  });
}