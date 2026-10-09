// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'Logger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 118426
         */
module.exports = function (module, exports, require) {
  var babelClassHelpers = require("babel-class-helpers") /*id: 197180*/;
  var i = function () {
    function e(t, n) {
      babelClassHelpers.classCallCheck(this, e);
      this.name = t || "";
      this._prefix = `[${this.name}]`;
      e.disabled = n;
    }
    babelClassHelpers.createClass(e, [{
      key: "debug",
      value: function () {
        var t;
        if (!e.disabled) {
          var n = arguments.length;
          var r = Array(n);
          var i = 0;
          for (; i < n; i++) {
            r[i] = arguments[i];
          }
          (t = console).debug.apply(t, [this._prefix].concat(r));
        }
      }
    }, {
      key: "log",
      value: function () {
        var t;
        if (!e.disabled) {
          var n = arguments.length;
          var r = Array(n);
          var i = 0;
          for (; i < n; i++) {
            r[i] = arguments[i];
          }
          (t = console).log.apply(t, [this._prefix].concat(r));
        }
      }
    }, {
      key: "warn",
      value: function () {
        var t;
        if (!e.disabled) {
          var n = arguments.length;
          var r = Array(n);
          var i = 0;
          for (; i < n; i++) {
            r[i] = arguments[i];
          }
          (t = console).warn.apply(t, [this._prefix].concat(r));
        }
      }
    }, {
      key: "error",
      value: function () {
        var t;
        if (!e.disabled) {
          var n = arguments.length;
          var r = Array(n);
          var i = 0;
          for (; i < n; i++) {
            r[i] = arguments[i];
          }
          (t = console).error.apply(t, [this._prefix].concat(r));
        }
      }
    }, {
      key: "table",
      value: function () {
        var t;
        if (!e.disabled) {
          (t = console).table.apply(t, arguments);
        }
      }
    }], [{
      key: "enable",
      value: function () {
        e.disabled = false;
      }
    }, {
      key: "disable",
      value: function () {
        e.disabled = true;
      }
    }]);
    return e;
  }();
  babelClassHelpers.defineProperty(i, "disabled", true);
  require.d(exports, {
    Logger: function () {
      return i;
    }
  });
}