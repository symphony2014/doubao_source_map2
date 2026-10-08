// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'createSidecar'
// - Renamed export 's' to 'createMedium'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16352.bcbc6b55.js
         * chunkId: 16352
         * moduleId: 561894
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  function r(e) {
    return e;
  }
  function i(e, t = r) {
    var n = [];
    var o = false;
    return {
      read: function () {
        if (o) {
          throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        }
        if (n.length) {
          return n[n.length - 1];
        } else {
          return e;
        }
      },
      useMedium: function (e) {
        var r = t(e, o);
        n.push(r);
        return function () {
          n = n.filter(function (e) {
            return e !== r;
          });
        };
      },
      assignSyncMedium: function (e) {
        for (o = true; n.length;) {
          var t = n;
          n = [];
          t.forEach(e);
        }
        n = {
          push: function (t) {
            return e(t);
          },
          filter: function () {
            return n;
          }
        };
      },
      assignMedium: function (e) {
        o = true;
        var t = [];
        if (n.length) {
          var r = n;
          n = [];
          r.forEach(e);
          t = n;
        }
        function i() {
          var n = t;
          t = [];
          n.forEach(e);
        }
        function s() {
          return Promise.resolve().then(i);
        }
        s();
        n = {
          push: function (e) {
            t.push(e);
            s();
          },
          filter: function (e) {
            t = t.filter(e);
            return n;
          }
        };
      }
    };
  }
  function s(e, t = r) {
    return i(e, t);
  }
  function l(e = {}) {
    var t = i(null);
    t.options = typescriptRuntimeHelpers.objectAssign({
      async: true,
      ssr: false
    }, e);
    return t;
  }
  require.d(exports, {
    createSidecar: function () {
      return l;
    },
    createMedium: function () {
      return s;
    }
  });
}