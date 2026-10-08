// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 97218
         */
module.exports = function (module, exports, require) {
  var t = /^[a-f0-9?-]+$/i;
  module.exports = function (e) {
    var r;
    var n;
    var i;
    var o;
    var a;
    var s;
    var l;
    var u;
    var c;
    var h = [];
    var d = e;
    var f = 0;
    var A = d.charCodeAt(f);
    var g = d.length;
    var p = [{
      nodes: h
    }];
    var m = 0;
    var y = "";
    var v = "";
    var b = "";
    while (f < g) {
      if (A <= 32) {
        r = f;
        do {
          r += 1;
          A = d.charCodeAt(r);
        } while (A <= 32);
        o = d.slice(f, r);
        i = h[h.length - 1];
        if (A === 41 && m) {
          b = o;
        } else if (i && i.type === "div") {
          i.after = o;
          i.sourceEndIndex += o.length;
        } else if (A === 44 || A === 58 || A === 47 && d.charCodeAt(r + 1) !== 42 && (!c || c && c.type === "function" && c.value !== "calc")) {
          v = o;
        } else {
          h.push({
            type: "space",
            sourceIndex: f,
            sourceEndIndex: r,
            value: o
          });
        }
        f = r;
      } else if (A === 39 || A === 34) {
        r = f;
        o = {
          type: "string",
          sourceIndex: f,
          quote: n = A === 39 ? "'" : "\""
        };
        do {
          a = false;
          if (~(r = d.indexOf(n, r + 1))) {
            for (s = r; d.charCodeAt(s - 1) === 92;) {
              s -= 1;
              a = !a;
            }
          } else {
            d += n;
            r = d.length - 1;
            o.unclosed = true;
          }
        } while (a);
        o.value = d.slice(f + 1, r);
        o.sourceEndIndex = o.unclosed ? r : r + 1;
        h.push(o);
        f = r + 1;
        A = d.charCodeAt(f);
      } else if (A === 47 && d.charCodeAt(f + 1) === 42) {
        r = d.indexOf("*/", f);
        o = {
          type: "comment",
          sourceIndex: f,
          sourceEndIndex: r + 2
        };
        if (r === -1) {
          o.unclosed = true;
          r = d.length;
          o.sourceEndIndex = r;
        }
        o.value = d.slice(f + 2, r);
        h.push(o);
        f = r + 2;
        A = d.charCodeAt(f);
      } else if ((A === 47 || A === 42) && c && c.type === "function" && c.value === "calc") {
        o = d[f];
        h.push({
          type: "word",
          sourceIndex: f - v.length,
          sourceEndIndex: f + o.length,
          value: o
        });
        f += 1;
        A = d.charCodeAt(f);
      } else if (A === 47 || A === 44 || A === 58) {
        o = d[f];
        h.push({
          type: "div",
          sourceIndex: f - v.length,
          sourceEndIndex: f + o.length,
          value: o,
          before: v,
          after: ""
        });
        v = "";
        f += 1;
        A = d.charCodeAt(f);
      } else if (A === 40) {
        r = f;
        do {
          r += 1;
          A = d.charCodeAt(r);
        } while (A <= 32);
        u = f;
        o = {
          type: "function",
          sourceIndex: f - y.length,
          value: y,
          before: d.slice(u + 1, r)
        };
        f = r;
        if (y === "url" && A !== 39 && A !== 34) {
          r -= 1;
          do {
            a = false;
            if (~(r = d.indexOf(")", r + 1))) {
              for (s = r; d.charCodeAt(s - 1) === 92;) {
                s -= 1;
                a = !a;
              }
            } else {
              d += ")";
              r = d.length - 1;
              o.unclosed = true;
            }
          } while (a);
          l = r;
          do {
            l -= 1;
            A = d.charCodeAt(l);
          } while (A <= 32);
          if (u < l) {
            if (f !== l + 1) {
              o.nodes = [{
                type: "word",
                sourceIndex: f,
                sourceEndIndex: l + 1,
                value: d.slice(f, l + 1)
              }];
            } else {
              o.nodes = [];
            }
            if (o.unclosed && l + 1 !== r) {
              o.after = "";
              o.nodes.push({
                type: "space",
                sourceIndex: l + 1,
                sourceEndIndex: r,
                value: d.slice(l + 1, r)
              });
            } else {
              o.after = d.slice(l + 1, r);
              o.sourceEndIndex = r;
            }
          } else {
            o.after = "";
            o.nodes = [];
          }
          f = r + 1;
          o.sourceEndIndex = o.unclosed ? r : f;
          A = d.charCodeAt(f);
          h.push(o);
        } else {
          m += 1;
          o.after = "";
          o.sourceEndIndex = f + 1;
          h.push(o);
          p.push(o);
          h = o.nodes = [];
          c = o;
        }
        y = "";
      } else if (A === 41 && m) {
        f += 1;
        A = d.charCodeAt(f);
        c.after = b;
        c.sourceEndIndex += b.length;
        b = "";
        m -= 1;
        p[p.length - 1].sourceEndIndex = f;
        p.pop();
        h = (c = p[m]).nodes;
      } else {
        r = f;
        do {
          if (A === 92) {
            r += 1;
          }
          r += 1;
          A = d.charCodeAt(r);
        } while (r < g && !(A <= 32) && A !== 39 && A !== 34 && A !== 44 && A !== 58 && A !== 47 && A !== 40 && (A !== 42 || !c || c.type !== "function" || c.value !== "calc") && (A !== 47 || c.type !== "function" || c.value !== "calc") && (A !== 41 || !m));
        o = d.slice(f, r);
        if (A === 40) {
          y = o;
        } else if ((o.charCodeAt(0) === 117 || o.charCodeAt(0) === 85) && o.charCodeAt(1) === 43 && t.test(o.slice(2))) {
          h.push({
            type: "unicode-range",
            sourceIndex: f,
            sourceEndIndex: r,
            value: o
          });
        } else {
          h.push({
            type: "word",
            sourceIndex: f,
            sourceEndIndex: r,
            value: o
          });
        }
        f = r;
      }
    }
    for (f = p.length - 1; f; f -= 1) {
      p[f].unclosed = true;
      p[f].sourceEndIndex = d.length;
    }
    return p[0].nodes;
  };
}