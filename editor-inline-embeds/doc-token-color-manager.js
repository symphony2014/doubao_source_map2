// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'clearColorCache'
// - Renamed export 'X' to 'getDocColor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 445170
         */
module.exports = function (module, exports, require) {
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  let o = new Map();
  let l = ["#336DF4", "#03CEB2", "#4A5804", "#B36205", "#4D0A2F", "#C8A8FF", "#056D94", "#0F7703", "#493903", "#F54A45", "#A82EA8", "#1E27A4", "#039BD3", "#174511", "#7F4401", "#F797CD", "#8E4EFD", "#198576", "#222900", "#FFA338", "#9D1562", "#2D007A", "#0442D2", "#045D51", "#6B7F06", "#3B2002", "#D72D8D", "#611FD6", "#C02A26", "#DE59DE", "#4752E6", "#044158", "#1BA70C", "#741915", "#6A116A", "#7C84EE", "#022C26", "#94B4FF", "#002270"];
  let s = e => {
    let i = 0;
    let n = 0;
    let r = e.length;
    if (r > 0) {
      while (n < r) {
        i = (i << 5) - i + e.charCodeAt(n++) | 0;
      }
    }
    return i;
  };
  let a = e => {
    let i = o.get(e);
    if (!i) {
      i = Math.abs(s(docTokenManager.getDocToken(location.href) + e)) % l.length;
      o.set(e, i);
    }
    return i;
  };
  let c = () => o.clear();
  let d = e => l[a(e)];
  require.d(exports, {
    clearColorCache: function () {
      return c;
    },
    getDocColor: function () {
      return d;
    }
  });
}