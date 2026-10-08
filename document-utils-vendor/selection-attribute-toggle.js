// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'toggleAttribute'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 663983
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  function i(e, t, r = "", i = false) {
    var o;
    var a;
    var s;
    var l;
    var u = e.selection.getSelection();
    var c = u.start;
    var h = u.end;
    var d = Math.min(c.line, h.line);
    var f = Math.max(c.line, h.line);
    if (i) {
      var A = "";
      var g = d;
      for (; g <= f; g++) {
        if (e.getContentState().getLineAttributes(c.zoneId, g).toMap()[t] !== r) {
          A = r;
        }
      }
      for (var g = d; g <= f; g++) {
        e.getContentState().setLineAttributes(c.zoneId, g, ((o = {})[t] = A, o));
      }
    } else {
      var A = "";
      var p = e.getContentState().getEntities({
        start: c,
        end: h
      });
      try {
        var m = typescriptHelpers_1.getValues(p);
        var y = m.next();
        for (; !y.done; y = m.next()) {
          if (y.value.attributes[t] !== r) {
            A = r;
          }
        }
      } catch (e) {
        a = {
          error: e
        };
      } finally {
        try {
          if (y && !y.done && (s = m.return)) {
            s.call(m);
          }
        } finally {
          if (a) {
            throw a.error;
          }
        }
      }
      e.getContentState().setAttributes({
        start: c,
        end: h
      }, ((l = {})[t] = A, l));
    }
  }
  require.d(exports, {
    toggleAttribute: function () {
      return i;
    }
  });
}