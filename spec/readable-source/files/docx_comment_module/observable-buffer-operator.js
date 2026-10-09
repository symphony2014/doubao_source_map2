// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'bufferObservable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable-revision_resource.9a7282fa.js
         * chunkId: 57653
         * moduleId: 533255
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  var arrayRemoveUtil = require("array-remove-util") /*id: 91229*/;
  function a(e, i = null) {
    i = i ?? e;
    return observableSafeLiftUtil.createSafeOperator(function (o, r) {
      var a = [];
      var c = 0;
      o.subscribe(safeSubscriber.safeSubscriber(r, function (o) {
        var l;
        var d;
        var u;
        var h;
        var v = null;
        if (c++ % i == 0) {
          a.push([]);
        }
        try {
          var m = typescriptRuntimeHelpers.iteratorValues(a);
          var g = m.next();
          for (; !g.done; g = m.next()) {
            var f = g.value;
            f.push(o);
            if (e <= f.length) {
              (v = v ?? []).push(f);
            }
          }
        } catch (e) {
          l = {
            error: e
          };
        } finally {
          try {
            if (g && !g.done && (d = m.return)) {
              d.call(m);
            }
          } finally {
            if (l) {
              throw l.error;
            }
          }
        }
        if (v) {
          try {
            var p = typescriptRuntimeHelpers.iteratorValues(v);
            var b = p.next();
            for (; !b.done; b = p.next()) {
              var f = b.value;
              arrayRemoveUtil.removeFromArray(a, f);
              r.next(f);
            }
          } catch (e) {
            u = {
              error: e
            };
          } finally {
            try {
              if (b && !b.done && (h = p.return)) {
                h.call(p);
              }
            } finally {
              if (u) {
                throw u.error;
              }
            }
          }
        }
      }, function () {
        var e;
        var i;
        try {
          var o = typescriptRuntimeHelpers.iteratorValues(a);
          var l = o.next();
          for (; !l.done; l = o.next()) {
            var s = l.value;
            r.next(s);
          }
        } catch (i) {
          e = {
            error: i
          };
        } finally {
          try {
            if (l && !l.done && (i = o.return)) {
              i.call(o);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        r.complete();
      }, undefined, function () {
        a = null;
      }));
    });
  }
  require.d(exports, {
    bufferObservable: function () {
      return a;
    }
  });
}