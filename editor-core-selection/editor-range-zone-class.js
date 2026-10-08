// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'EditorRangeZone'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 731872
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var s = function (e) {
    function t(n) {
      var i = n.editor;
      var o = n.start;
      var r = n.end;
      var s = n.isBackward;
      var l = s !== undefined && s;
      var n = o;
      var s = r;
      if (o.zoneId !== r.zoneId) {
        n = (r = t.fixToCommonZone(i, o, r)).start;
        s = r.end;
      }
      return e.call(this, {
        editor: i,
        start: n,
        end: s,
        isBackward: l
      }) || this;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    var n = t.prototype;
    t.fixToCommonZone = function (e, t, n) {
      var s = t.zoneId;
      var l = n.zoneId;
      if (s === l) {
        return {
          start: t,
          end: n
        };
      }
      var a;
      var u = e.getContentState().getZoneManager();
      var d = e.getContentState();
      var e = u.getAncestorZones(s);
      var c = u.getAncestorZones(l);
      var u = e.find(function (e) {
        return c.includes(e);
      });
      if (u) {
        if (u !== s) {
          if (e = (s = d.getZoneState(e[e.indexOf(u) - 1])) == null ? undefined : s.parent) {
            a = ((a = (a = s == null ? undefined : s._node) === null || a === undefined ? undefined : a.getAttribute(editorConstantsKeycodes.dataZoneContainer)) === null || a === undefined ? undefined : a.length) || 0;
            t = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, t), {
              zoneId: u,
              line: e.index,
              offset: a + +!!e.hasLineMarker()
            });
          }
        }
        if (u !== l) {
          if (d = (l = d.getZoneState(c[c.indexOf(u) - 1])) == null ? undefined : l.parent) {
            a = ((l = (l = l == null ? undefined : l._node) === null || l === undefined ? undefined : l.getAttribute(editorConstantsKeycodes.dataZoneContainer)) === null || l === undefined ? undefined : l.length) || 0;
            n = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, n), {
              zoneId: u,
              line: d.index,
              offset: a + +!!d.hasLineMarker()
            });
          }
        }
        return {
          start: t,
          end: n
        };
      } else {
        return {
          start: typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, t), {
            zoneId: zeroConstantModule_1.versionValue
          }),
          end: typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, n), {
            zoneId: zeroConstantModule_1.versionValue
          })
        };
      }
    };
    n.clone = function (e) {
      return new t({
        editor: this.editor,
        start: this.createRangePoint(this.start, true, e),
        end: this.createRangePoint(this.end, true, e),
        isBackward: this.isBackward
      });
    };
    return t;
  }(require("editor-range-class") /*id: 172613*/.EditorRange);
  require.d(exports, {
    EditorRangeZone: function () {
      return s;
    }
  });
}