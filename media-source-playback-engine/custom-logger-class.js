// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'Logger'
// - Renamed export '_' to 'logLevels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 246025
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers = require("babel-runtime-helpers") /*id: 339562*/;
  var i = {
    DEBUG: 1,
    LOG: 2,
    WARN: 3,
    ERROR: 4
  };
  var o = ["Boolean", "Number", "String", "Undefined", "Null", "Date", "Object"];
  var a = function () {
    function e(t, n) {
      babelRuntimeHelpers.classCallCheck(this, e);
      this.name = t || "";
      this._prefix = `[${this.name}]`;
      this.logCacheLevel = (n == null ? undefined : n.logCacheLevel) || 3;
      this.logMaxSize = (n == null ? undefined : n.logMaxSize) || 204800;
      this.logSize = 0;
      this.logTextArray = [];
    }
    babelRuntimeHelpers.classProps(e, [{
      key: "debug",
      value: function () {
        var t;
        var n = arguments.length;
        var r = Array(n);
        var o = 0;
        for (; o < n; o++) {
          r[o] = arguments[o];
        }
        this.logCache.apply(this, [i.DEBUG].concat(r));
        if (!e.disabled) {
          (t = console).debug.apply(t, [this._prefix, s()].concat(r));
        }
      }
    }, {
      key: "log",
      value: function () {
        var t;
        var n = arguments.length;
        var r = Array(n);
        var o = 0;
        for (; o < n; o++) {
          r[o] = arguments[o];
        }
        this.logCache.apply(this, [i.LOG].concat(r));
        if (!e.disabled) {
          (t = console).log.apply(t, [this._prefix, s()].concat(r));
        }
      }
    }, {
      key: "warn",
      value: function () {
        var t;
        var n = arguments.length;
        var r = Array(n);
        var o = 0;
        for (; o < n; o++) {
          r[o] = arguments[o];
        }
        this.logCache.apply(this, [i.WARN].concat(r));
        if (!e.disabled) {
          (t = console).warn.apply(t, [this._prefix, s()].concat(r));
        }
      }
    }, {
      key: "error",
      value: function () {
        var t;
        var n = arguments.length;
        var r = Array(n);
        var o = 0;
        for (; o < n; o++) {
          r[o] = arguments[o];
        }
        this.logCache.apply(this, [i.ERROR].concat(r));
        if (!e.disabled) {
          (t = console).error.apply(t, [this._prefix, s()].concat(r));
        }
      }
    }, {
      key: "logCache",
      value: function (e) {
        if (!(e < this.logCacheLevel)) {
          var t = "";
          try {
            var n = arguments.length;
            var i = Array(n > 1 ? n - 1 : 0);
            var a = 1;
            for (; a < n; a++) {
              i[a - 1] = arguments[a];
            }
            var u = i.map(function (e) {
              return function e(t, n, i) {
                i ||= 1;
                n ||= 2;
                var a = {};
                if (!t || babelRuntimeHelpers.typeOf(t) !== "object") {
                  return t;
                }
                var s = Object.prototype.toString.call(t).slice(8, -1);
                if (!o.includes(s)) {
                  return s;
                }
                if (!(i > n)) {
                  for (var u in t) {
                    if (Object.prototype.hasOwnProperty.call(t, u)) {
                      if (i === n) {
                        a[u] = function (e) {
                          if (babelRuntimeHelpers.typeOf(e) !== "object") {
                            return e;
                          }
                          var t = Object.prototype.toString.call(e).slice(8, -1);
                          switch (t) {
                            case "Array":
                            case "Uint8Array":
                            case "ArrayBuffer":
                              return t + "[" + e.length + "]";
                            case "Object":
                              return "{}";
                            default:
                              return t;
                          }
                        }(t[u]);
                      } else if (babelRuntimeHelpers.typeOf(t[u]) === "object") {
                        a[u] = e(t[u], n, i + 1);
                      } else {
                        a[u] = t[u];
                      }
                    }
                  }
                  return a;
                }
              }(e);
            });
            t = this._prefix + s() + JSON.stringify(u);
          } catch (e) {
            return;
          }
          if (e >= this.logCacheLevel) {
            this.logSize += t.length;
            this.logTextArray.push(t);
          }
          if (this.logSize > this.logMaxSize) {
            var c = this.logTextArray.shift();
            this.logSize -= c.length;
          }
        }
      }
    }, {
      key: "getLogCache",
      value: function () {
        var e = this.logTextArray.join("\n");
        this.reset();
        return e;
      }
    }, {
      key: "reset",
      value: function () {
        this.logTextArray = [];
        this.logSize = 0;
      }
    }, {
      key: "table",
      value: function () {
        var t;
        if (!e.disabled) {
          (t = console).table.apply(t, arguments);
        }
      }
    }, {
      key: "setLogLevel",
      value: function (e) {
        this.logCacheLevel = e;
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
  function s() {
    return new Date().toLocaleString();
  }
  babelRuntimeHelpers.defineProperty(a, "disabled", true);
  require.d(exports, {
    Logger: function () {
      return a;
    },
    logLevels: function () {
      return i;
    }
  });
}