// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'adjustListIndent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 505604
         */
module.exports = function (module, exports, require) {
  var n = "list";
  function i(e, t, r) {
    var i;
    var o;
    var a;
    var s = e.selection.getSelection();
    var l = s.start;
    var u = s.end;
    var c = Math.min(l.line, u.line);
    var h = Math.max(l.line, u.line);
    var d = c;
    for (; d <= h; d++) {
      var f = e.getContentState().getLineAttributes(l.zoneId, d).toMap();
      if (f[n]) {
        if (f[n].includes(t)) {
          var A = parseInt(f[n].split(t)[1]);
          if (r) {
            if (A < 15) {
              e.getContentState().setLineAttributes(l.zoneId, d, ((i = {})[n] = "" + t + ++A, i));
            }
          } else if (A === 1) {
            e.getContentState().setLineAttributes(l.zoneId, d, ((o = {})[n] = "", o));
          } else {
            e.getContentState().setLineAttributes(l.zoneId, d, ((a = {})[n] = "" + t + --A, a));
          }
        }
      } else if (f["text-indent"] && t === "indent") {
        if (r) {
          e.getContentState().setLineAttributes(l.zoneId, d, {
            list: "indent1"
          });
        } else {
          e.getContentState().setLineAttributes(l.zoneId, d, {
            "text-indent": ""
          });
        }
      } else if (t === "indent" && r) {
        e.getContentState().setLineAttributes(l.zoneId, d, {
          "text-indent": "true"
        });
      }
    }
  }
  require.d(exports, {
    adjustListIndent: function () {
      return i;
    }
  });
}