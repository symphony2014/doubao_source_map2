// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dp' to 'IntersectionMode'
// - Renamed export 'kK' to 'checkIntersection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 8673
         */
module.exports = function (module, exports, require) {
  var o;
  (o = {})[o.TOUCH = 0] = "TOUCH";
  o[o.CENTER = 1] = "CENTER";
  o[o.COVER = 2] = "COVER";
  o[o.VERTICAL_CENTER = 3] = "VERTICAL_CENTER";
  o[o.OUTSIDE_TOUCH = 4] = "OUTSIDE_TOUCH";
  let i = o;
  require("editor-debug-helper") /*id: 248384*/;
  require.d(exports, {
    IntersectionMode: function () {
      return i;
    },
    checkIntersection: function () {
      return function e(n, r, o = i.TOUCH) {
        switch (o) {
          case i.CENTER:
            {
              let e = r.left + r.width / 2;
              let o = r.top + r.height / 2;
              return e >= n.left && e <= n.right && o >= n.top && o <= n.bottom;
            }
          case i.VERTICAL_CENTER:
            {
              let e = r.top + r.height / 2;
              return n.right >= r.left && n.left <= r.right && e >= n.top && e <= n.bottom;
            }
          case i.COVER:
            return r.left >= n.left && r.top >= n.top && r.right <= n.right && r.bottom <= n.bottom;
          case i.TOUCH:
            return n.right >= r.left && n.left <= r.right && n.bottom >= r.top && n.top <= r.bottom;
          case i.OUTSIDE_TOUCH:
            return (n.left <= r.left || n.top <= r.top || n.bottom >= r.bottom || n.right >= r.right) && e(n, r, i.TOUCH);
          default:
            throw Error(`Unkown intersection mode: ${o}`);
        }
      };
    }
  });
}