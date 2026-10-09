// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 41578
         */
module.exports = function (module, exports, require) {
  exports.Macro = exports.Symbol = undefined;
  var Q = function () {
    function t(t, e, Q) {
      this._symbol = t;
      this._char = e;
      this._attributes = Q;
    }
    Object.defineProperty(t.prototype, "symbol", {
      get: function () {
        return this._symbol;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "char", {
      get: function () {
        return this._char;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "attributes", {
      get: function () {
        return this._attributes;
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }();
  exports.Symbol = Q;
  var r = function () {
    function t(t, e, Q = []) {
      this._symbol = t;
      this._func = e;
      this._args = Q;
    }
    Object.defineProperty(t.prototype, "symbol", {
      get: function () {
        return this._symbol;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "func", {
      get: function () {
        return this._func;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "args", {
      get: function () {
        return this._args;
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }();
  exports.Macro = r;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}