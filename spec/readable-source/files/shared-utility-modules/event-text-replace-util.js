// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'replaceTextContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 92199
         */
module.exports = function (module, exports, require) {
  var escapeStringRegexp = require("escape-string-regexp") /*id: 805727*/;
  var eventTestTraversalUtil = require("event-test-traversal-util") /*id: 725199*/;
  var eventTestFactory = require("event-test-factory") /*id: 564106*/;
  function i(e, a, t) {
    let i = eventTestFactory.createEventTest((t || {}).ignore || []);
    let s = function (e) {
      let a = [];
      if (!Array.isArray(e)) {
        throw TypeError("Expected find and replace tuple or list of tuples");
      }
      let t = !e[0] || Array.isArray(e[0]) ? e : [e];
      let n = -1;
      while (++n < t.length) {
        var o;
        let e = t[n];
        a.push([typeof (o = e[0]) == "string" ? RegExp(escapeStringRegexp.escapeRegExp(o), "g") : o, function (e) {
          if (typeof e == "function") {
            return e;
          } else {
            return function () {
              return e;
            };
          }
        }(e[1])]);
      }
      return a;
    }(a);
    let l = -1;
    while (++l < s.length) {
      eventTestTraversalUtil.eventTestTraversal(e, "text", c);
    }
    function c(e, a) {
      let t;
      let r = -1;
      while (++r < a.length) {
        let e = a[r];
        let n = t ? t.children : undefined;
        if (i(e, n ? n.indexOf(e) : undefined, t)) {
          return;
        }
        t = e;
      }
      if (t) {
        return function (e, a) {
          let t = a[a.length - 1];
          let r = s[l][0];
          let n = s[l][1];
          let o = 0;
          let i = t.children.indexOf(e);
          let c = false;
          let u = [];
          r.lastIndex = 0;
          let d = r.exec(e.value);
          while (d) {
            let t = d.index;
            let i = {
              index: d.index,
              input: d.input,
              stack: [...a, e]
            };
            let s = n(...d, i);
            if (typeof s == "string") {
              s = s.length > 0 ? {
                type: "text",
                value: s
              } : undefined;
            }
            if (s === false) {
              r.lastIndex = t + 1;
            } else {
              if (o !== t) {
                u.push({
                  type: "text",
                  value: e.value.slice(o, t)
                });
              }
              if (Array.isArray(s)) {
                u.push(...s);
              } else if (s) {
                u.push(s);
              }
              o = t + d[0].length;
              c = true;
            }
            if (!r.global) {
              break;
            }
            d = r.exec(e.value);
          }
          if (c) {
            if (o < e.value.length) {
              u.push({
                type: "text",
                value: e.value.slice(o)
              });
            }
            t.children.splice(i, 1, ...u);
          } else {
            u = [e];
          }
          return i + u.length;
        }(e, a);
      }
    }
  }
  require.d(exports, {
    replaceTextContent: function () {
      return i;
    }
  });
}