// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'serializeStyles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 909975
         */
module.exports = function (module, exports, require) {
  var r;
  var stringHashMurmur3 = require("string-hash-murmur3") /*id: 138302*/;
  var cssUnitlessProperties = require("css-unitless-properties") /*id: 377424*/;
  var memoizeFunctionFactory = require("memoize-function-factory") /*id: 227553*/;
  var s = /[A-Z]|^ms/g;
  var l = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  function u(e) {
    return e.charCodeAt(1) === 45;
  }
  function c(e) {
    return e != null && typeof e != "boolean";
  }
  var d = memoizeFunctionFactory.createMemoizer(function (e) {
    if (u(e)) {
      return e;
    } else {
      return e.replace(s, "-$&").toLowerCase();
    }
  });
  function p(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") {
          return t.replace(l, function (e, t, n) {
            r = {
              name: t,
              styles: n,
              next: r
            };
            return t;
          });
        }
    }
    if (cssUnitlessProperties.default[e] === 1 || u(e) || typeof t != "number" || t === 0) {
      return t;
    } else {
      return t + "px";
    }
  }
  function h(e, t, n) {
    if (n == null) {
      return "";
    }
    if (n.__emotion_styles !== undefined) {
      return n;
    }
    switch (typeof n) {
      case "boolean":
        return "";
      case "object":
        if (n.anim === 1) {
          r = {
            name: n.name,
            styles: n.styles,
            next: r
          };
          return n.name;
        }
        if (n.styles !== undefined) {
          var i = n.next;
          if (i !== undefined) {
            while (i !== undefined) {
              r = {
                name: i.name,
                styles: i.styles,
                next: r
              };
              i = i.next;
            }
          }
          return n.styles + ";";
        }
        return function (e, t, n) {
          var r = "";
          if (Array.isArray(n)) {
            for (var i = 0; i < n.length; i++) {
              r += h(e, t, n[i]) + ";";
            }
          } else {
            for (var o in n) {
              var a = n[o];
              if (typeof a != "object") {
                if (t != null && t[a] !== undefined) {
                  r += o + "{" + t[a] + "}";
                } else if (c(a)) {
                  r += d(o) + ":" + p(o, a) + ";";
                }
              } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === undefined)) {
                for (var s = 0; s < a.length; s++) {
                  if (c(a[s])) {
                    r += d(o) + ":" + p(o, a[s]) + ";";
                  }
                }
              } else {
                var l = h(e, t, a);
                switch (o) {
                  case "animation":
                  case "animationName":
                    r += d(o) + ":" + l + ";";
                    break;
                  default:
                    r += o + "{" + l + "}";
                }
              }
            }
          }
          return r;
        }(e, t, n);
      case "function":
        if (e !== undefined) {
          var o = r;
          var a = n(e);
          r = o;
          return h(e, t, a);
        }
    }
    if (t == null) {
      return n;
    }
    var s = t[n];
    if (s !== undefined) {
      return s;
    } else {
      return n;
    }
  }
  var f = /label:\s*([^\s;{]+)\s*(;|$)/g;
  function m(e, t, n) {
    if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== undefined) {
      return e[0];
    }
    var o;
    var a = true;
    var s = "";
    r = undefined;
    var l = e[0];
    if (l == null || l.raw === undefined) {
      a = false;
      s += h(n, t, l);
    } else {
      s += l[0];
    }
    for (var u = 1; u < e.length; u++) {
      s += h(n, t, e[u]);
      if (a) {
        s += l[u];
      }
    }
    f.lastIndex = 0;
    var c = "";
    for (; (o = f.exec(s)) !== null;) {
      c += "-" + o[1];
    }
    return {
      name: stringHashMurmur3.murmurHash32(s) + c,
      styles: s,
      next: r
    };
  }
  require.d(exports, {
    serializeStyles: function () {
      return m;
    }
  });
}