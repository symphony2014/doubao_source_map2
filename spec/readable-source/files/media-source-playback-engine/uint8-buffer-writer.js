// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'BufferWriter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 512273
         */
module.exports = function (module, exports, require) {
  var babelClassHelpers = require("babel-class-helpers") /*id: 197180*/;
  var i = function () {
    function e() {
      babelClassHelpers.classCallCheck(this, e);
      this.buffer = new Uint8Array(0);
    }
    babelClassHelpers.createClass(e, [{
      key: "write",
      value: function () {
        var e = this;
        var t = arguments.length;
        var n = Array(t);
        var r = 0;
        for (; r < t; r++) {
          n[r] = arguments[r];
        }
        n.forEach(function (t) {
          if (t) {
            e.buffer = function (e) {
              var t = 0;
              var n = arguments.length;
              var r = Array(n > 1 ? n - 1 : 0);
              var i = 1;
              for (; i < n; i++) {
                r[i - 1] = arguments[i];
              }
              r.forEach(function (e) {
                t += e.length;
              });
              var o = new e(t);
              var a = 0;
              r.forEach(function (e) {
                o.set(e, a);
                a += e.length;
              });
              return o;
            }(Uint8Array, e.buffer, t);
          } else {
            window.console.warn(t);
          }
        });
      }
    }], [{
      key: "writeUint16",
      value: function (e) {
        return new Uint8Array([e >> 8 & 255, e & 255]);
      }
    }, {
      key: "writeUint32",
      value: function (e) {
        return new Uint8Array([e >> 24, e >> 16 & 255, e >> 8 & 255, e & 255]);
      }
    }]);
    return e;
  }();
  require.d(exports, {
    BufferWriter: function () {
      return i;
    }
  });
}