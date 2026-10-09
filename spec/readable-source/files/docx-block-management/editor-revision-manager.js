// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AG' to 'getRevisionEntities'
// - Renamed export 'iR' to 'setRevisionContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 835310
         */
module.exports = function (module, exports, require) {
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  function r(e, n, i) {
    if (!i) {
      return;
    }
    e[editorRevisionUtilities.formatRevisionId(i.revisionId)] = editorRevisionUtilities.stringifyRevOmitId(i);
    let o = n.extra || {};
    o.revisionContext = {
      revisionId: i.revisionId,
      type: i.type
    };
    n.extra = o;
  }
  function a(e, n, i) {
    let r = function (e, n) {
      let i = [];
      e.model.zoneState.getEntities(editorRangeUtilities.convertRangeWithZone(e, n), editorRevisionUtilities.isRevisionIdString).forEach(e => {
        let {
          attributes: n
        } = e;
        if (n) {
          Object.entries(n).forEach(e => {
            let [n, o] = e;
            if (!editorRevisionUtilities.isRevisionIdString(n)) {
              return;
            }
            let r = editorRevisionUtilities.stripRevIdString(n);
            let a = editorRevisionUtilities.parseJsonSafe(o);
            if (a) {
              i.push({
                ...a,
                revisionId: r
              });
            }
          });
        }
      });
      return i;
    }(e, n);
    if (!r.length) {
      return;
    }
    let a = new Map();
    r.forEach(e => {
      if (!a.has(e.revisionId)) {
        a.set(e.revisionId, {
          revisionId: e.revisionId,
          type: e.type
        });
      }
    });
    let d = i.extra || {};
    let s = d.revisionContext || [];
    let c = Array.isArray(s) ? s : [s];
    a.forEach(e => c.push(e));
    d.revisionContext = c;
    i.extra = d;
  }
  require.d(exports, {
    getRevisionEntities: function () {
      return a;
    },
    setRevisionContext: function () {
      return r;
    }
  });
}