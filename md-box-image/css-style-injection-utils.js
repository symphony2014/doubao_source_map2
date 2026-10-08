// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'My' to 'insertStyle'
// - Renamed export 'fp' to 'filterClassNames'
// - Renamed export 'hC' to 'registerStyle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 706137
         */
module.exports = function (module, exports, require) {
  function r(e, t, n) {
    var r = "";
    n.split(" ").forEach(function (n) {
      if (e[n] !== undefined) {
        t.push(e[n] + ";");
      } else if (n) {
        r += n + " ";
      }
    });
    return r;
  }
  function i(e, t, n) {
    var r = e.key + "-" + t.name;
    if (n === false && e.registered[r] === undefined) {
      e.registered[r] = t.styles;
    }
  }
  function o(e, t, n) {
    i(e, t, n);
    var r = e.key + "-" + t.name;
    if (e.inserted[t.name] === undefined) {
      var o = t;
      do {
        e.insert(t === o ? "." + r : "", o, e.sheet, true);
        o = o.next;
      } while (o !== undefined);
    }
  }
  require.d(exports, {
    insertStyle: function () {
      return o;
    },
    filterClassNames: function () {
      return r;
    },
    registerStyle: function () {
      return i;
    }
  });
}