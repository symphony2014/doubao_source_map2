// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// - Resolved require(708770) to 'markdown-common-utils'
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 593635
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.isWhiteSpace;
  var i = require("markdown-common-utils") /*id: 708770*/.isPunctChar;
  var o = require("markdown-common-utils") /*id: 708770*/.isMdAsciiPunct;
  var s = /['"]/;
  var a = /['"]/g;
  function c(t, e, r) {
    return t.substr(0, e) + r + t.substr(e + 1);
  }
  module.exports = function (t) {
    var e;
    if (t.md.options.typographer) {
      for (e = t.tokens.length - 1; e >= 0; e--) {
        if (t.tokens[e].type === "inline" && s.test(t.tokens[e].content)) {
          (function (t, e) {
            var r;
            var s;
            var l;
            var u;
            var h;
            var p;
            var f;
            var d;
            var g;
            var m;
            var _;
            var v;
            var b;
            var k;
            var y;
            var C;
            var x;
            var w;
            var A;
            var E;
            var D;
            r = 0;
            A = [];
            for (; r < t.length; r++) {
              s = t[r];
              f = t[r].level;
              x = A.length - 1;
              for (; x >= 0 && !(A[x].level <= f); x--);
              A.length = x + 1;
              if (s.type === "text") {
                l = s.content;
                h = 0;
                p = l.length;
                t: while (h < p && (a.lastIndex = h, u = a.exec(l))) {
                  y = C = true;
                  h = u.index + 1;
                  w = u[0] === "'";
                  g = 32;
                  if (u.index - 1 >= 0) {
                    g = l.charCodeAt(u.index - 1);
                  } else {
                    for (x = r - 1; x >= 0 && t[x].type !== "softbreak" && t[x].type !== "hardbreak"; x--) {
                      if (t[x].content) {
                        g = t[x].content.charCodeAt(t[x].content.length - 1);
                        break;
                      }
                    }
                  }
                  m = 32;
                  if (h < p) {
                    m = l.charCodeAt(h);
                  } else {
                    for (x = r + 1; x < t.length && t[x].type !== "softbreak" && t[x].type !== "hardbreak"; x++) {
                      if (t[x].content) {
                        m = t[x].content.charCodeAt(0);
                        break;
                      }
                    }
                  }
                  _ = o(g) || i(String.fromCharCode(g));
                  v = o(m) || i(String.fromCharCode(m));
                  b = n(g);
                  if (k = n(m)) {
                    y = false;
                  } else if (v && !b && !_) {
                    y = false;
                  }
                  if (b) {
                    C = false;
                  } else if (_ && !k && !v) {
                    C = false;
                  }
                  if (m === 34 && u[0] === "\"" && g >= 48 && g <= 57) {
                    C = y = false;
                  }
                  if (y && C) {
                    y = _;
                    C = v;
                  }
                  if (!y && !C) {
                    if (w) {
                      s.content = c(s.content, u.index, "’");
                    }
                    continue;
                  }
                  if (C) {
                    for (x = A.length - 1; x >= 0 && (d = A[x], !(A[x].level < f)); x--) {
                      if (d.single === w && A[x].level === f) {
                        d = A[x];
                        if (w) {
                          E = e.md.options.quotes[2];
                          D = e.md.options.quotes[3];
                        } else {
                          E = e.md.options.quotes[0];
                          D = e.md.options.quotes[1];
                        }
                        s.content = c(s.content, u.index, D);
                        t[d.token].content = c(t[d.token].content, d.pos, E);
                        h += D.length - 1;
                        if (d.token === r) {
                          h += E.length - 1;
                        }
                        p = (l = s.content).length;
                        A.length = x;
                        continue t;
                      }
                    }
                  }
                  if (y) {
                    A.push({
                      token: r,
                      pos: u.index,
                      single: w,
                      level: f
                    });
                  } else if (C && w) {
                    s.content = c(s.content, u.index, "’");
                  }
                }
              }
            }
          })(t.tokens[e].children, t);
        }
      }
    }
  };
}