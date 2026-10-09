// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'EditorModuleManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 586388
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var a = function () {
    function t() {
      this.be = new Map();
      this.pe = new Map();
    }
    var e = t.prototype;
    e.get = function (t) {
      var e = this.be.get(t);
      if (!e && t !== editorModuleConstants.editorModuleConsts.InputModel && t !== editorModuleConstants.editorModuleConsts.UndoModule) {
        throw Error("modules undefined, type is " + t);
      }
      return e;
    };
    e.set = function (t, e) {
      var n = this;
      var a = [];
      if (typeof t == "object") {
        Object.keys(t).forEach(function (e) {
          if (!editorModuleConstants.editorModuleConsts[e]) {
            editorModuleConstants.virtualListConsts[e];
          }
          if (editorModuleConstants.virtualListConsts[e]) {
            n.set(e, t[e]);
          } else if (n.set(e, t[e])) {
            a.push(e);
          }
        });
      } else if (typeof t == "string" && e) {
        var s = this.be.get(t);
        if (!editorModuleConstants.virtualListConsts[t] || !Array.isArray(e)) {
          this.be.set(t, e);
          return e !== s;
        }
        var l = typescriptRuntimeHelpers_1.readIterable(e, 2);
        var s = l[0];
        var l = l[1];
        this.setZoneModule(zeroConstantModule_1.versionValue, editorModuleConstants.virtualListConsts[t], s, l);
      }
      return a;
    };
    e.getZoneModule = function (t, e) {
      var n = this.be.get(e);
      var t = (e = this.pe.get(e)) === null || e === undefined ? undefined : e.get(t);
      if (n && t) {
        return [n, t];
      } else {
        return null;
      }
    };
    e.setZoneModule = function (t, e, n, i) {
      this.be.set(e, n);
      var o;
      var a;
      var s;
      var l;
      var u = this.pe.get(e);
      if (u) {
        try {
          var c = typescriptRuntimeHelpers_1.values(u.values());
          var f = c.next();
          for (; !f.done; f = c.next()) {
            var d = f.value;
            var h = Object.keys(d);
            if (h.length === Object.keys(i).length) {
              var p = true;
              try {
                s = undefined;
                var v = typescriptRuntimeHelpers_1.values(h);
                var y = v.next();
                for (; !y.done; y = v.next()) {
                  var g = y.value;
                  if (d[g] !== i[g]) {
                    p = false;
                    break;
                  }
                }
              } catch (t) {
                s = {
                  error: t
                };
              } finally {
                try {
                  if (y && !y.done && (l = v.return)) {
                    l.call(v);
                  }
                } finally {
                  if (s) {
                    throw s.error;
                  }
                }
              }
              if (p) {
                u.set(t, d);
                return;
              }
            }
          }
        } catch (t) {
          o = {
            error: t
          };
        } finally {
          try {
            if (f && !f.done && (a = c.return)) {
              a.call(c);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
        u.set(t, typescriptRuntimeHelpers_1.assign({}, i));
      } else {
        this.pe.set(e, new Map([[t, typescriptRuntimeHelpers_1.assign({}, i)]]));
      }
    };
    e.unSubscribingZone = function (t, e) {
      if (e = this.pe.get(e)) {
        e.delete(t);
      }
    };
    return t;
  }();
  require.d(exports, {
    EditorModuleManager: function () {
      return a;
    }
  });
}