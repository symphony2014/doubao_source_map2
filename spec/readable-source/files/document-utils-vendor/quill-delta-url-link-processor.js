// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z7' to 'processDeltaForLinks'
// - Renamed export 'b2' to 'isDataUrl'
// - Renamed export 'kT' to 'clientSideAutoUrlKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 375105
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var urlLinkValidator = require("url-link-validator") /*id: 542431*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var o = "clientside-auto-url";
  function a(e, t, r, a) {
    var s;
    var l;
    var u = RegExp("" + r.source, "gi");
    u.lastIndex = 0;
    var c = null;
    var h = [];
    var d = false;
    var f = new Map([["(", ")"], ["[", "]"], ["{", "}"], ["<", ">"]]);
    var A = null;
    function g() {
      var t;
      var r;
      var i = 0;
      var o = [];
      try {
        var a = typescriptHelpers_1.getValues(e);
        var s = a.next();
        for (; !s.done; s = a.next()) {
          var l = s.value;
          if (l.insert && typeof l.insert == "string" && l.insert !== "\n") {
            var u = l.insert.length;
            i += u;
            if (e.getAttributes(i - u, i).find(function (e) {
              var t = typescriptHelpers_1.readIterator(e, 2);
              var r = t[0];
              t[1];
              return r.includes("mention-token");
            })) {
              o.push([i - u, i]);
            } else {
              o.push(null);
            }
          } else {
            o.push(null);
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (s && !s.done && (r = a.return)) {
            r.call(a);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return o.filter(Boolean);
    }
    var p = +!!e.hasLineMarker();
    var m = e.getModelText();
    var y = m.slice(p, m.endsWith("\n") ? -1 : m.length);
    while (s = u.exec(y)) {
      (function () {
        if (!c) {
          c = [];
          h = [];
        }
        var e = s.index + p;
        var t = s[0];
        if (function (e, t) {
          var r;
          return RegExp("[" + b((r = typescriptHelpers_1.spreadArray(t.keys())).concat.apply(r, typescriptHelpers_1.spreadArray(t.values()))) + "]").test(e);
        }(t, f)) {
          t = function (e, t) {
            var r = [];
            var i = e.length;
            var o = e;
            var a = 0;
            for (; a < i; a++) {
              var s = e[a];
              var l = RegExp("[" + b(typescriptHelpers_1.spreadArray(t.values())) + "]").test(s);
              if (t.has(s)) {
                r.push([t.get(s), a]);
              } else if (l) {
                var u = r.pop();
                if (!u) {
                  return e.slice(0, a);
                }
                if (s !== u[0]) {
                  if (r[0]) {
                    return o = e.slice(0, r[0][1]);
                  } else {
                    return e.slice(0, u[1]);
                  }
                }
              }
            }
            if (r.length) {
              o = e.slice(0, r[0][1]);
            }
            return o;
          }(s[0], f);
        }
        A ||= g();
        var r = A.filter(function (r) {
          return r !== null && e < r[0] && e + t.length >= r[0];
        });
        if (r.length) {
          var i = r[0][0];
          t = t.slice(0, i - e);
        }
        if (!A.some(function (r) {
          return r !== null && e >= r[0] && e + t.length <= r[1];
        })) {
          c.push([e, t]);
          h.push(e, e + t.length);
        }
      })();
    }
    if (c) {
      var v = function (e, t) {
        var r = 0;
        var n = 0;
        if (t) {
          while (r < t.length && t[r] === 0) {
            r++;
          }
        }
        return function i(o, a) {
          if (!t || r >= t.length) {
            e(o, a);
            n += o.length;
          } else {
            var s = t[r] - n;
            var l = o.length;
            if (s >= l) {
              e(o, a);
              n += o.length;
              if (s === l) {
                r++;
              }
            } else {
              if (s > 0) {
                e(o.substring(0, s), a);
                n += s;
              }
              r++;
              i(o.substring(s), a);
            }
          }
        };
      }((l = 0, function (e, r = {}) {
        if (r.list && /code/.test(r.list)) {
          d = true;
        }
        var n;
        var s = e.length;
        var h = Object.keys(r);
        var f = h.find(function (e) {
          return e !== o && e === a;
        });
        var A = h.find(function (e) {
          return e === "removeLink";
        });
        var g = function (e, t, r, n) {
          if (!c) {
            return false;
          }
          for (var i = 0; i < c.length; i++) {
            var o = c[i];
            if (e >= o[0] && e < o[0] + o[1].length) {
              if (r) {
                c.splice(i, 1);
                i--;
              } else {
                if (!n) {
                  return o[1];
                }
                u.lastIndex = 0;
                var a = u.exec(o[1].substring(t.length));
                if (a) {
                  c.splice(i, 1, [o[0] + t.length, a[0]]);
                } else {
                  c.splice(i, 1);
                }
                return o[1];
              }
            }
          }
          return false;
        }(l, e, f, r.removeLink);
        if (!g || d || A) {
          t.retain(s);
        } else {
          t.retain(s, ((n = {})[o] = urlLinkValidator.urlLinkValidator.completeURLProtocol(g), n));
        }
        l += s;
      }), h);
      e.getOps().forEach(function (e) {
        return v(e.insert, e.attributes || {});
      });
    }
    function b(e) {
      return e.map(function (e) {
        return "\\" + e;
      }).join("");
    }
  }
  function s(e = "") {
    return /^data:/.test(e);
  }
  require.d(exports, {
    processDeltaForLinks: function () {
      return a;
    },
    isDataUrl: function () {
      return s;
    },
    clientSideAutoUrlKey: function () {
      return o;
    }
  });
}