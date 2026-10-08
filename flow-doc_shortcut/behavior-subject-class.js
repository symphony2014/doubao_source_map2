// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'BehaviorSubject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 263814
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var o = function (e) {
    function n(n) {
      var i = e.call(this) || this;
      i._value = n;
      return i;
    }
    typescriptRuntimeHelpers.classExtends(n, e);
    Object.defineProperty(n.prototype, "value", {
      get: function () {
        return this.getValue();
      },
      enumerable: false,
      configurable: true
    });
    n.prototype._subscribe = function (n) {
      var i = e.prototype._subscribe.call(this, n);
      if (!i.closed) {
        n.next(this._value);
      }
      return i;
    };
    n.prototype.getValue = function () {
      var e = this.hasError;
      var n = this.thrownError;
      var i = this._value;
      if (e) {
        throw n;
      }
      this._throwIfClosed();
      return i;
    };
    n.prototype.next = function (n) {
      e.prototype.next.call(this, this._value = n);
    };
    return n;
  }(require("observable-subject-class") /*id: 292580*/.Subject);
  require.d(exports, {
    BehaviorSubject: function () {
      return o;
    }
  });
}