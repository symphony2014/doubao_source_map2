// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'SchemaResolver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 289076
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var i = function () {
    function t(t) {
      this.schemas = t;
    }
    t.prototype.get = function (t) {
      var e;
      var n;
      if (this.schemas[t]) {
        return this.schemas[t];
      }
      try {
        var i = typescriptRuntimeHelpers_1.values(Object.keys(this.schemas));
        var o = i.next();
        for (; !o.done; o = i.next()) {
          var a = o.value;
          if (new RegExp(a).test(t)) {
            return this.schemas[a];
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (n = i.return)) {
            n.call(i);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    return t;
  }();
  require.d(exports, {
    SchemaResolver: function () {
      return i;
    }
  });
}