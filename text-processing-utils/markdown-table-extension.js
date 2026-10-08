// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'markdownTable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 598673
         */
module.exports = function (module, exports, require) {
  var spaceLikeHandler = require("space-like-handler") /*id: 784097*/;
  var charClassificationUtils = require("char-classification-utils") /*id: 140430*/;
  class o {
    constructor() {
      this.map = [];
    }
    add(e, t, r) {
      (function (e, t, r, n) {
        let i = 0;
        if (r !== 0 || n.length !== 0) {
          while (i < e.map.length) {
            if (e.map[i][0] === t) {
              e.map[i][1] += r;
              e.map[i][2].push(...n);
              return;
            }
            i += 1;
          }
          e.map.push([t, r, n]);
        }
      })(this, e, t, r);
    }
    consume(e) {
      this.map.sort(function (e, t) {
        return e[0] - t[0];
      });
      if (this.map.length === 0) {
        return;
      }
      let t = this.map.length;
      let r = [];
      while (t > 0) {
        t -= 1;
        r.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]);
        e.length = this.map[t][0];
      }
      r.push(e.slice());
      e.length = 0;
      let n = r.pop();
      while (n) {
        for (let t of n) {
          e.push(t);
        }
        n = r.pop();
      }
      this.map.length = 0;
    }
  }
  function u() {
    return {
      flow: {
        null: {
          name: "table",
          tokenize: a,
          resolveAll: c
        }
      }
    };
  }
  function a(e, t, r) {
    let o;
    let u = this;
    let a = 0;
    let c = 0;
    return function (e) {
      let t = u.events.length - 1;
      while (t > -1) {
        let e = u.events[t][1].type;
        if (e === "lineEnding" || e === "linePrefix") {
          t--;
        } else {
          break;
        }
      }
      let n = t > -1 ? u.events[t][1].type : null;
      let i = n === "tableHead" || n === "tableRow" ? v : l;
      if (i === v && u.parser.lazy[u.now().line]) {
        return r(e);
      } else {
        return i(e);
      }
    };
    function l(t) {
      var r;
      e.enter("tableHead");
      e.enter("tableRow");
      if ((r = t) !== 124) {
        o = true;
        c += 1;
      }
      return s(r);
    }
    function s(t) {
      if (t === null) {
        return r(t);
      } else if (charClassificationUtils.isInvalidChar(t)) {
        if (c > 1) {
          c = 0;
          u.interrupt = true;
          e.exit("tableRow");
          e.enter("lineEnding");
          e.consume(t);
          e.exit("lineEnding");
          return h;
        } else {
          return r(t);
        }
      } else if (charClassificationUtils.isSpaceLike(t)) {
        return spaceLikeHandler.createSpaceHandler(e, s, "whitespace")(t);
      } else {
        c += 1;
        if (o) {
          o = false;
          a += 1;
        }
        if (t === 124) {
          e.enter("tableCellDivider");
          e.consume(t);
          e.exit("tableCellDivider");
          o = true;
          return s;
        } else {
          e.enter("data");
          return f(t);
        }
      }
    }
    function f(t) {
      if (t === null || t === 124 || charClassificationUtils.isWhitespaceOrNeg(t)) {
        e.exit("data");
        return s(t);
      } else {
        e.consume(t);
        if (t === 92) {
          return p;
        } else {
          return f;
        }
      }
    }
    function p(t) {
      if (t === 92 || t === 124) {
        e.consume(t);
        return f;
      } else {
        return f(t);
      }
    }
    function h(t) {
      u.interrupt = false;
      if (u.parser.lazy[u.now().line]) {
        return r(t);
      } else {
        e.enter("tableDelimiterRow");
        o = false;
        if (charClassificationUtils.isSpaceLike(t)) {
          return spaceLikeHandler.createSpaceHandler(e, d, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(t);
        } else {
          return d(t);
        }
      }
    }
    function d(t) {
      if (t === 45 || t === 58) {
        return m(t);
      } else if (t === 124) {
        o = true;
        e.enter("tableCellDivider");
        e.consume(t);
        e.exit("tableCellDivider");
        return g;
      } else {
        return r(t);
      }
    }
    function g(t) {
      if (charClassificationUtils.isSpaceLike(t)) {
        return spaceLikeHandler.createSpaceHandler(e, m, "whitespace")(t);
      } else {
        return m(t);
      }
    }
    function m(t) {
      if (t === 58) {
        c += 1;
        o = true;
        e.enter("tableDelimiterMarker");
        e.consume(t);
        e.exit("tableDelimiterMarker");
        return b;
      } else if (t === 45) {
        c += 1;
        return b(t);
      } else if (t === null || charClassificationUtils.isInvalidChar(t)) {
        return y(t);
      } else {
        return r(t);
      }
    }
    function b(t) {
      if (t === 45) {
        e.enter("tableDelimiterFiller");
        return function t(r) {
          if (r === 45) {
            e.consume(r);
            return t;
          } else if (r === 58) {
            o = true;
            e.exit("tableDelimiterFiller");
            e.enter("tableDelimiterMarker");
            e.consume(r);
            e.exit("tableDelimiterMarker");
            return D;
          } else {
            e.exit("tableDelimiterFiller");
            return D(r);
          }
        }(t);
      } else {
        return r(t);
      }
    }
    function D(t) {
      if (charClassificationUtils.isSpaceLike(t)) {
        return spaceLikeHandler.createSpaceHandler(e, y, "whitespace")(t);
      } else {
        return y(t);
      }
    }
    function y(n) {
      if (n === 124) {
        return d(n);
      }
      if (n === null || charClassificationUtils.isInvalidChar(n)) {
        if (o && a === c) {
          e.exit("tableDelimiterRow");
          e.exit("tableHead");
          return t(n);
        } else {
          return r(n);
        }
      }
      return r(n);
    }
    function v(t) {
      e.enter("tableRow");
      return x(t);
    }
    function x(r) {
      if (r === 124) {
        e.enter("tableCellDivider");
        e.consume(r);
        e.exit("tableCellDivider");
        return x;
      } else if (r === null || charClassificationUtils.isInvalidChar(r)) {
        e.exit("tableRow");
        return t(r);
      } else if (charClassificationUtils.isSpaceLike(r)) {
        return spaceLikeHandler.createSpaceHandler(e, x, "whitespace")(r);
      } else {
        e.enter("data");
        return k(r);
      }
    }
    function k(t) {
      if (t === null || t === 124 || charClassificationUtils.isWhitespaceOrNeg(t)) {
        e.exit("data");
        return x(t);
      } else {
        e.consume(t);
        if (t === 92) {
          return w;
        } else {
          return k;
        }
      }
    }
    function w(t) {
      if (t === 92 || t === 124) {
        e.consume(t);
        return k;
      } else {
        return k(t);
      }
    }
  }
  function c(e, t) {
    let r;
    let n;
    let i;
    let u = -1;
    let a = true;
    let c = 0;
    let f = [0, 0, 0, 0];
    let p = [0, 0, 0, 0];
    let h = false;
    let d = 0;
    let g = new o();
    while (++u < e.length) {
      let o = e[u];
      let m = o[1];
      if (o[0] === "enter") {
        if (m.type === "tableHead") {
          h = false;
          if (d !== 0) {
            s(g, t, d, r, n);
            n = undefined;
            d = 0;
          }
          r = {
            type: "table",
            start: Object.assign({}, m.start),
            end: Object.assign({}, m.end)
          };
          g.add(u, 0, [["enter", r, t]]);
        } else if (m.type === "tableRow" || m.type === "tableDelimiterRow") {
          a = true;
          i = undefined;
          f = [0, 0, 0, 0];
          p = [0, u + 1, 0, 0];
          if (h) {
            h = false;
            n = {
              type: "tableBody",
              start: Object.assign({}, m.start),
              end: Object.assign({}, m.end)
            };
            g.add(u, 0, [["enter", n, t]]);
          }
          c = m.type === "tableDelimiterRow" ? 2 : n ? 3 : 1;
        } else if (c && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller")) {
          a = false;
          if (p[2] === 0) {
            if (f[1] !== 0) {
              p[0] = p[1];
              i = l(g, t, f, c, undefined, i);
              f = [0, 0, 0, 0];
            }
            p[2] = u;
          }
        } else if (m.type === "tableCellDivider") {
          if (a) {
            a = false;
          } else {
            if (f[1] !== 0) {
              p[0] = p[1];
              i = l(g, t, f, c, undefined, i);
            }
            p = [(f = p)[1], u, 0, 0];
          }
        }
      } else if (m.type === "tableHead") {
        h = true;
        d = u;
      } else if (m.type === "tableRow" || m.type === "tableDelimiterRow") {
        d = u;
        if (f[1] !== 0) {
          p[0] = p[1];
          i = l(g, t, f, c, u, i);
        } else if (p[1] !== 0) {
          i = l(g, t, p, c, u, i);
        }
        c = 0;
      } else if (c && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller")) {
        p[3] = u;
      }
    }
    if (d !== 0) {
      s(g, t, d, r, n);
    }
    g.consume(t.events);
    u = -1;
    while (++u < t.events.length) {
      let e = t.events[u];
      if (e[0] === "enter" && e[1].type === "table") {
        e[1]._align = function (e, t) {
          let r = false;
          let n = [];
          while (t < e.length) {
            let i = e[t];
            if (r) {
              if (i[0] === "enter") {
                if (i[1].type === "tableContent") {
                  n.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
                }
              } else if (i[1].type === "tableContent") {
                if (e[t - 1][1].type === "tableDelimiterMarker") {
                  let e = n.length - 1;
                  n[e] = n[e] === "left" ? "center" : "right";
                }
              } else if (i[1].type === "tableDelimiterRow") {
                break;
              }
            } else if (i[0] === "enter" && i[1].type === "tableDelimiterRow") {
              r = true;
            }
            t += 1;
          }
          return n;
        }(t.events, u);
      }
    }
    return e;
  }
  function l(e, t, r, n, i, o) {
    if (r[0] !== 0) {
      o.end = Object.assign({}, f(t.events, r[0]));
      e.add(r[0], 0, [["exit", o, t]]);
    }
    let u = f(t.events, r[1]);
    o = {
      type: n === 1 ? "tableHeader" : n === 2 ? "tableDelimiter" : "tableData",
      start: Object.assign({}, u),
      end: Object.assign({}, u)
    };
    e.add(r[1], 0, [["enter", o, t]]);
    if (r[2] !== 0) {
      let i = f(t.events, r[2]);
      let o = f(t.events, r[3]);
      let u = {
        type: "tableContent",
        start: Object.assign({}, i),
        end: Object.assign({}, o)
      };
      e.add(r[2], 0, [["enter", u, t]]);
      if (n !== 2) {
        let n = t.events[r[2]];
        let i = t.events[r[3]];
        n[1].end = Object.assign({}, i[1].end);
        n[1].type = "chunkText";
        n[1].contentType = "text";
        if (r[3] > r[2] + 1) {
          let t = r[2] + 1;
          let n = r[3] - r[2] - 1;
          e.add(t, n, []);
        }
      }
      e.add(r[3] + 1, 0, [["exit", u, t]]);
    }
    if (i !== undefined) {
      o.end = Object.assign({}, f(t.events, i));
      e.add(i, 0, [["exit", o, t]]);
      o = undefined;
    }
    return o;
  }
  function s(e, t, r, n, i) {
    let o = [];
    let u = f(t.events, r);
    if (i) {
      i.end = Object.assign({}, u);
      o.push(["exit", i, t]);
    }
    n.end = Object.assign({}, u);
    o.push(["exit", n, t]);
    e.add(r + 1, 0, o);
  }
  function f(e, t) {
    let r = e[t];
    let n = r[0] === "enter" ? "start" : "end";
    return r[1][n];
  }
  require.d(exports, {
    markdownTable: function () {
      return u;
    }
  });
}