// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BK' to 'traversalDefaultFlag'
// - Renamed export 'S4' to 'eventTestTraversal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 725199
         */
module.exports = function (module, exports, require) {
  var eventTestFactory = require("event-test-factory") /*id: 564106*/;
  let i = [];
  let o = false;
  function u(e, t, r, u) {
    let a;
    if (typeof t == "function" && typeof r != "function") {
      u = r;
      r = t;
    } else {
      a = t;
    }
    let c = eventTestFactory.createEventTest(a);
    let l = u ? -1 : 1;
    (function e(n, a, s) {
      let f = n && typeof n == "object" ? n : {};
      if (typeof f.type == "string") {
        let e = typeof f.tagName == "string" ? f.tagName : typeof f.name == "string" ? f.name : undefined;
        Object.defineProperty(p, "name", {
          value: "node (" + n.type + (e ? "<" + e + ">" : "") + ")"
        });
      }
      return p;
      function p() {
        var f;
        let p;
        let h;
        let d;
        let g = i;
        if ((!t || c(n, a, s[s.length - 1] || undefined)) && (g = Array.isArray(f = r(n, s)) ? f : typeof f == "number" ? [true, f] : f == null ? i : [f])[0] === o) {
          return g;
        }
        if ("children" in n && n.children && n.children && g[0] !== "skip") {
          h = (u ? n.children.length : -1) + l;
          d = s.concat(n);
          while (h > -1 && h < n.children.length) {
            if ((p = e(n.children[h], h, d)())[0] === o) {
              return p;
            }
            h = typeof p[1] == "number" ? p[1] : h + l;
          }
        }
        return g;
      }
    })(e, undefined, [])();
  }
  require.d(exports, {
    traversalDefaultFlag: function () {
      return o;
    },
    eventTestTraversal: function () {
      return u;
    }
  });
}