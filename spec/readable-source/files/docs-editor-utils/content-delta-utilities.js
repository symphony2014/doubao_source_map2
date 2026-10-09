// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JP' to 'processContentDelta'
// - Renamed export 'mD' to 'filterDeltaSet'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 160217
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  function c(e, n) {
    return function (e, n, r = () => true) {
      let i = n.length() - 1;
      let l = n.getZoneId();
      let c = {
        start: {
          zoneId: l,
          line: 0,
          offset: 0
        },
        end: {
          zoneId: l,
          line: i,
          offset: n.getLine(i).length() - 1
        }
      };
      let u = n.getEntities(c, e => !!r(e));
      let a = new contentStructureDelta.ContentDelta();
      let s = 0;
      let d = 0;
      let f = 0;
      e.get("0").forEach(e => {
        d += e.insert.length;
      });
      u.forEach(e => {
        let o = {};
        Object.keys(e.attributes).filter(e => r(e)).forEach(n => {
          o[n] = e.attributes[n];
        });
        let i = n.pointToOffset(e.start) || 0;
        let l = n.pointToOffset(e.end) || 0;
        if (i > d) {
          return;
        }
        let c = Math.max(Math.min(l, d) - i, 0);
        let u = Math.max(i - s, 0);
        if (!((f = f + u + c) > d) && (f !== d || c !== 1)) {
          a.retain(u).retain(c, o);
          s = l;
        }
      });
      return e = e.compose(a);
    }(e, n, e => e.startsWith(editorModuleConstantsConfig.clientsidePrefix));
  }
  function u(e, n) {
    return e.reduce((e, r) => {
      let o = r.reduce((e, r) => {
        let o = {};
        if (r.attributes) {
          Object.keys(r.attributes).forEach(e => {
            if (n(e, r.attributes) !== true) {
              o[e] = r.attributes[e];
            }
          });
        }
        e.insert(r.insert, o);
        return e;
      }, r.create({
        zoneId: r.zoneId
      }));
      e.add(r.zoneId, o);
      return e;
    }, new deltaSetCore.DeltaSet());
  }
  require.d(exports, {
    processContentDelta: function () {
      return c;
    },
    filterDeltaSet: function () {
      return u;
    }
  });
}