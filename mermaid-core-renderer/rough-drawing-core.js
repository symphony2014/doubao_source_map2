// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'roughLibrary'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 157146
         */
module.exports = function (module, exports, require) {
  function i(t, e, r) {
    if (t && t.length) {
      let [i, a] = e;
      let o = Math.PI / 180 * r;
      let l = Math.cos(o);
      let n = Math.sin(o);
      for (let e of t) {
        let [t, r] = e;
        e[0] = (t - i) * l - (r - a) * n + i;
        e[1] = (t - i) * n + (r - a) * l + a;
      }
    }
  }
  function a(t, e) {
    var r;
    let a = e.hachureAngle + 90;
    let o = e.hachureGap;
    if (o < 0) {
      o = e.strokeWidth * 4;
    }
    o = Math.round(Math.max(o, 0.1));
    let l = 1;
    if (e.roughness >= 1 && (((r = e.randomizer) === null || r === undefined ? undefined : r.next()) || Math.random()) > 0.7) {
      l = o;
    }
    return function (t, e, r, a = 1) {
      let o = Math.max(e, 0.1);
      let l = t[0] && t[0][0] && typeof t[0][0] == "number" ? [t] : t;
      let n = [0, 0];
      if (r) {
        for (let t of l) {
          i(t, n, r);
        }
      }
      let s = function (t, e, r) {
        let i = [];
        for (let e of t) {
          var a;
          var o;
          let t = [...e];
          a = t[0];
          o = t[t.length - 1];
          if (a[0] !== o[0] || a[1] !== o[1]) {
            t.push([t[0][0], t[0][1]]);
          }
          if (t.length > 2) {
            i.push(t);
          }
        }
        let l = [];
        e = Math.max(e, 0.1);
        let n = [];
        for (let t of i) {
          for (let e = 0; e < t.length - 1; e++) {
            let r = t[e];
            let i = t[e + 1];
            if (r[1] !== i[1]) {
              let t = Math.min(r[1], i[1]);
              n.push({
                ymin: t,
                ymax: Math.max(r[1], i[1]),
                x: t === r[1] ? r[0] : i[0],
                islope: (i[0] - r[0]) / (i[1] - r[1])
              });
            }
          }
        }
        n.sort((t, e) => t.ymin < e.ymin ? -1 : t.ymin > e.ymin ? 1 : t.x < e.x ? -1 : t.x > e.x ? 1 : t.ymax === e.ymax ? 0 : (t.ymax - e.ymax) / Math.abs(t.ymax - e.ymax));
        if (!n.length) {
          return l;
        }
        let s = [];
        let h = n[0].ymin;
        let c = 0;
        while (s.length || n.length) {
          if (n.length) {
            let t = -1;
            for (let e = 0; e < n.length && !(n[e].ymin > h); e++) {
              t = e;
            }
            n.splice(0, t + 1).forEach(t => {
              s.push({
                s: h,
                edge: t
              });
            });
          }
          (s = s.filter(t => !(t.edge.ymax <= h))).sort((t, e) => t.edge.x === e.edge.x ? 0 : (t.edge.x - e.edge.x) / Math.abs(t.edge.x - e.edge.x));
          if ((r !== 1 || c % e == 0) && s.length > 1) {
            for (let t = 0; t < s.length; t += 2) {
              let e = t + 1;
              if (e >= s.length) {
                break;
              }
              let r = s[t].edge;
              let i = s[e].edge;
              l.push([[Math.round(r.x), h], [Math.round(i.x), h]]);
            }
          }
          h += r;
          s.forEach(t => {
            t.edge.x = t.edge.x + r * t.edge.islope;
          });
          c++;
        }
        return l;
      }(l, o, a);
      if (r) {
        for (let t of l) {
          i(t, n, -r);
        }
        (function (t, e, r) {
          let a = [];
          t.forEach(t => a.push(...t));
          i(a, e, r);
        })(s, n, -r);
      }
      return s;
    }(t, o, a, l || 1);
  }
  class o {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, e) {
      return this._fillPolygons(t, e);
    }
    _fillPolygons(t, e) {
      let r = a(t, e);
      return {
        type: "fillSketch",
        ops: this.renderLines(r, e)
      };
    }
    renderLines(t, e) {
      let r = [];
      for (let i of t) {
        r.push(...this.helper.doubleLineOps(i[0][0], i[0][1], i[1][0], i[1][1], e));
      }
      return r;
    }
  }
  function l(t) {
    let e = t[0];
    let r = t[1];
    return Math.sqrt(Math.pow(e[0] - r[0], 2) + Math.pow(e[1] - r[1], 2));
  }
  class n extends o {
    fillPolygons(t, e) {
      let r = e.hachureGap;
      if (r < 0) {
        r = e.strokeWidth * 4;
      }
      let i = a(t, Object.assign({}, e, {
        hachureGap: r = Math.max(r, 0.1)
      }));
      let o = Math.PI / 180 * e.hachureAngle;
      let n = [];
      let s = r * 0.5 * Math.cos(o);
      let h = r * 0.5 * Math.sin(o);
      for (let [t, e] of i) {
        if (l([t, e])) {
          n.push([[t[0] - s, t[1] + h], [...e]], [[t[0] + s, t[1] - h], [...e]]);
        }
      }
      return {
        type: "fillSketch",
        ops: this.renderLines(n, e)
      };
    }
  }
  class s extends o {
    fillPolygons(t, e) {
      let r = this._fillPolygons(t, e);
      let i = Object.assign({}, e, {
        hachureAngle: e.hachureAngle + 90
      });
      let a = this._fillPolygons(t, i);
      r.ops = r.ops.concat(a.ops);
      return r;
    }
  }
  class h {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, e) {
      let r = a(t, e = Object.assign({}, e, {
        hachureAngle: 0
      }));
      return this.dotsOnLines(r, e);
    }
    dotsOnLines(t, e) {
      let r = [];
      let i = e.hachureGap;
      if (i < 0) {
        i = e.strokeWidth * 4;
      }
      i = Math.max(i, 0.1);
      let a = e.fillWeight;
      if (a < 0) {
        a = e.strokeWidth / 2;
      }
      let o = i / 4;
      for (let n of t) {
        let t = l(n);
        let s = Math.ceil(t / i) - 1;
        let h = t - s * i;
        let c = (n[0][0] + n[1][0]) / 2 - i / 4;
        let d = Math.min(n[0][1], n[1][1]);
        for (let t = 0; t < s; t++) {
          let l = c - o + Math.random() * 2 * o;
          let n = d + h + t * i - o + Math.random() * 2 * o;
          let s = this.helper.ellipse(l, n, a, a, e);
          r.push(...s.ops);
        }
      }
      return {
        type: "fillSketch",
        ops: r
      };
    }
  }
  class c {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, e) {
      let r = a(t, e);
      return {
        type: "fillSketch",
        ops: this.dashedLine(r, e)
      };
    }
    dashedLine(t, e) {
      let r = e.dashOffset < 0 ? e.hachureGap < 0 ? e.strokeWidth * 4 : e.hachureGap : e.dashOffset;
      let i = e.dashGap < 0 ? e.hachureGap < 0 ? e.strokeWidth * 4 : e.hachureGap : e.dashGap;
      let a = [];
      t.forEach(t => {
        let o = l(t);
        let n = Math.floor(o / (r + i));
        let s = (o + i - n * (r + i)) / 2;
        let h = t[0];
        let c = t[1];
        if (h[0] > c[0]) {
          h = t[1];
          c = t[0];
        }
        let d = Math.atan((c[1] - h[1]) / (c[0] - h[0]));
        for (let t = 0; t < n; t++) {
          let o = t * (r + i);
          let l = o + r;
          let n = [h[0] + o * Math.cos(d) + s * Math.cos(d), h[1] + o * Math.sin(d) + s * Math.sin(d)];
          let c = [h[0] + l * Math.cos(d) + s * Math.cos(d), h[1] + l * Math.sin(d) + s * Math.sin(d)];
          a.push(...this.helper.doubleLineOps(n[0], n[1], c[0], c[1], e));
        }
      });
      return a;
    }
  }
  class d {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, e) {
      let r = e.hachureGap < 0 ? e.strokeWidth * 4 : e.hachureGap;
      let i = e.zigzagOffset < 0 ? r : e.zigzagOffset;
      let o = a(t, e = Object.assign({}, e, {
        hachureGap: r + i
      }));
      return {
        type: "fillSketch",
        ops: this.zigzagLines(o, i, e)
      };
    }
    zigzagLines(t, e, r) {
      let i = [];
      t.forEach(t => {
        let a = Math.round(l(t) / (e * 2));
        let o = t[0];
        let n = t[1];
        if (o[0] > n[0]) {
          o = t[1];
          n = t[0];
        }
        let s = Math.atan((n[1] - o[1]) / (n[0] - o[0]));
        for (let t = 0; t < a; t++) {
          let a = t * 2 * e;
          let l = (t + 1) * 2 * e;
          let n = Math.sqrt(Math.pow(e, 2) * 2);
          let h = [o[0] + a * Math.cos(s), o[1] + a * Math.sin(s)];
          let c = [o[0] + l * Math.cos(s), o[1] + l * Math.sin(s)];
          let d = [h[0] + n * Math.cos(s + Math.PI / 4), h[1] + n * Math.sin(s + Math.PI / 4)];
          i.push(...this.helper.doubleLineOps(h[0], h[1], d[0], d[1], r), ...this.helper.doubleLineOps(d[0], d[1], c[0], c[1], r));
        }
      });
      return i;
    }
  }
  let u = {};
  class p {
    constructor(t) {
      this.seed = t;
    }
    next() {
      if (this.seed) {
        return ((this.seed = Math.imul(48271, this.seed)) & 2147483647) / 2147483648;
      } else {
        return Math.random();
      }
    }
  }
  let g = {
    A: 7,
    a: 7,
    C: 6,
    c: 6,
    H: 1,
    h: 1,
    L: 2,
    l: 2,
    M: 2,
    m: 2,
    Q: 4,
    q: 4,
    S: 4,
    s: 4,
    T: 2,
    t: 2,
    V: 1,
    v: 1,
    Z: 0,
    z: 0
  };
  function f(t) {
    let e = [];
    let r = function (t) {
      let e = [];
      while (t !== "") {
        if (t.match(/^([ \t\r\n,]+)/)) {
          t = t.substr(RegExp.$1.length);
        } else if (t.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
          e[e.length] = {
            type: 0,
            text: RegExp.$1
          };
          t = t.substr(RegExp.$1.length);
        } else {
          if (!t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
            return [];
          }
          e[e.length] = {
            type: 1,
            text: `${parseFloat(RegExp.$1)}`
          };
          t = t.substr(RegExp.$1.length);
        }
      }
      e[e.length] = {
        type: 2,
        text: ""
      };
      return e;
    }(t);
    let i = "BOD";
    let a = 0;
    let o = r[0];
    while (o.type !== 2) {
      let l = 0;
      let n = [];
      if (i === "BOD") {
        if (o.text !== "M" && o.text !== "m") {
          return f("M0,0" + t);
        }
        a++;
        l = g[o.text];
        i = o.text;
      } else if (o.type === 1) {
        l = g[i];
      } else {
        a++;
        l = g[o.text];
        i = o.text;
      }
      if (!(a + l < r.length)) {
        throw Error("Path data ended short");
      }
      for (let t = a; t < a + l; t++) {
        let e = r[t];
        if (e.type !== 1) {
          throw Error("Param not a number: " + i + "," + e.text);
        }
        n[n.length] = +e.text;
      }
      if (typeof g[i] != "number") {
        throw Error("Bad segment: " + i);
      }
      {
        let t = {
          key: i,
          data: n
        };
        e.push(t);
        a += l;
        o = r[a];
        if (i === "M") {
          i = "L";
        }
        if (i === "m") {
          i = "l";
        }
      }
    }
    return e;
  }
  function m(t) {
    let e = 0;
    let r = 0;
    let i = 0;
    let a = 0;
    let o = [];
    for (let {
      key: l,
      data: n
    } of t) {
      switch (l) {
        case "M":
          o.push({
            key: "M",
            data: [...n]
          });
          [e, r] = n;
          [i, a] = n;
          break;
        case "m":
          e += n[0];
          r += n[1];
          o.push({
            key: "M",
            data: [e, r]
          });
          i = e;
          a = r;
          break;
        case "L":
          o.push({
            key: "L",
            data: [...n]
          });
          [e, r] = n;
          break;
        case "l":
          e += n[0];
          r += n[1];
          o.push({
            key: "L",
            data: [e, r]
          });
          break;
        case "C":
          o.push({
            key: "C",
            data: [...n]
          });
          e = n[4];
          r = n[5];
          break;
        case "c":
          {
            let t = n.map((t, i) => i % 2 ? t + r : t + e);
            o.push({
              key: "C",
              data: t
            });
            e = t[4];
            r = t[5];
            break;
          }
        case "Q":
          o.push({
            key: "Q",
            data: [...n]
          });
          e = n[2];
          r = n[3];
          break;
        case "q":
          {
            let t = n.map((t, i) => i % 2 ? t + r : t + e);
            o.push({
              key: "Q",
              data: t
            });
            e = t[2];
            r = t[3];
            break;
          }
        case "A":
          o.push({
            key: "A",
            data: [...n]
          });
          e = n[5];
          r = n[6];
          break;
        case "a":
          e += n[5];
          r += n[6];
          o.push({
            key: "A",
            data: [n[0], n[1], n[2], n[3], n[4], e, r]
          });
          break;
        case "H":
          o.push({
            key: "H",
            data: [...n]
          });
          e = n[0];
          break;
        case "h":
          e += n[0];
          o.push({
            key: "H",
            data: [e]
          });
          break;
        case "V":
          o.push({
            key: "V",
            data: [...n]
          });
          r = n[0];
          break;
        case "v":
          r += n[0];
          o.push({
            key: "V",
            data: [r]
          });
          break;
        case "S":
          o.push({
            key: "S",
            data: [...n]
          });
          e = n[2];
          r = n[3];
          break;
        case "s":
          {
            let t = n.map((t, i) => i % 2 ? t + r : t + e);
            o.push({
              key: "S",
              data: t
            });
            e = t[2];
            r = t[3];
            break;
          }
        case "T":
          o.push({
            key: "T",
            data: [...n]
          });
          e = n[0];
          r = n[1];
          break;
        case "t":
          e += n[0];
          r += n[1];
          o.push({
            key: "T",
            data: [e, r]
          });
          break;
        case "Z":
        case "z":
          o.push({
            key: "Z",
            data: []
          });
          e = i;
          r = a;
      }
    }
    return o;
  }
  function y(t) {
    let e = [];
    let r = "";
    let i = 0;
    let a = 0;
    let o = 0;
    let l = 0;
    let n = 0;
    let s = 0;
    for (let {
      key: h,
      data: c
    } of t) {
      switch (h) {
        case "M":
          e.push({
            key: "M",
            data: [...c]
          });
          [i, a] = c;
          [o, l] = c;
          break;
        case "C":
          e.push({
            key: "C",
            data: [...c]
          });
          i = c[4];
          a = c[5];
          n = c[2];
          s = c[3];
          break;
        case "L":
          e.push({
            key: "L",
            data: [...c]
          });
          [i, a] = c;
          break;
        case "H":
          i = c[0];
          e.push({
            key: "L",
            data: [i, a]
          });
          break;
        case "V":
          a = c[0];
          e.push({
            key: "L",
            data: [i, a]
          });
          break;
        case "S":
          {
            let t = 0;
            let o = 0;
            if (r === "C" || r === "S") {
              t = i + (i - n);
              o = a + (a - s);
            } else {
              t = i;
              o = a;
            }
            e.push({
              key: "C",
              data: [t, o, ...c]
            });
            n = c[0];
            s = c[1];
            i = c[2];
            a = c[3];
            break;
          }
        case "T":
          {
            let [t, o] = c;
            let l = 0;
            let h = 0;
            if (r === "Q" || r === "T") {
              l = i + (i - n);
              h = a + (a - s);
            } else {
              l = i;
              h = a;
            }
            let d = i + (l - i) * 2 / 3;
            let u = a + (h - a) * 2 / 3;
            let p = t + (l - t) * 2 / 3;
            let g = o + (h - o) * 2 / 3;
            e.push({
              key: "C",
              data: [d, u, p, g, t, o]
            });
            n = l;
            s = h;
            i = t;
            a = o;
            break;
          }
        case "Q":
          {
            let [t, r, o, l] = c;
            let h = i + (t - i) * 2 / 3;
            let d = a + (r - a) * 2 / 3;
            let u = o + (t - o) * 2 / 3;
            let p = l + (r - l) * 2 / 3;
            e.push({
              key: "C",
              data: [h, d, u, p, o, l]
            });
            n = t;
            s = r;
            i = o;
            a = l;
            break;
          }
        case "A":
          {
            let t = Math.abs(c[0]);
            let r = Math.abs(c[1]);
            let o = c[2];
            let l = c[3];
            let n = c[4];
            let s = c[5];
            let h = c[6];
            if (t === 0 || r === 0) {
              e.push({
                key: "C",
                data: [i, a, s, h, s, h]
              });
              i = s;
              a = h;
            } else if (i !== s || a !== h) {
              (function t(e, r, i, a, o, l, n, s, h, c) {
                let d = Math.PI * n / 180;
                let u = [];
                let p = 0;
                let g = 0;
                let f = 0;
                let m = 0;
                if (c) {
                  [p, g, f, m] = c;
                } else {
                  [e, r] = x(e, r, -d);
                  [i, a] = x(i, a, -d);
                  let t = (e - i) / 2;
                  let n = (r - a) / 2;
                  let c = t * t / (o * o) + n * n / (l * l);
                  if (c > 1) {
                    o *= c = Math.sqrt(c);
                    l *= c;
                  }
                  let u = o * o;
                  let y = l * l;
                  let b = (s === h ? -1 : 1) * Math.sqrt(Math.abs((u * y - u * n * n - y * t * t) / (u * n * n + y * t * t)));
                  f = b * o * n / l + (e + i) / 2;
                  m = -(b * l) * t / o + (r + a) / 2;
                  p = Math.asin(parseFloat(((r - m) / l).toFixed(9)));
                  g = Math.asin(parseFloat(((a - m) / l).toFixed(9)));
                  if (e < f) {
                    p = Math.PI - p;
                  }
                  if (i < f) {
                    g = Math.PI - g;
                  }
                  if (p < 0) {
                    p = Math.PI * 2 + p;
                  }
                  if (g < 0) {
                    g = Math.PI * 2 + g;
                  }
                  if (h && p > g) {
                    p -= Math.PI * 2;
                  }
                  if (!h && g > p) {
                    g -= Math.PI * 2;
                  }
                }
                let y = g - p;
                if (Math.abs(y) > Math.PI * 120 / 180) {
                  let e = g;
                  let r = i;
                  let s = a;
                  u = t(i = f + o * Math.cos(g = h && g > p ? p + Math.PI * 120 / 180 * 1 : p + -(Math.PI * 120 / 180 * 1)), a = m + l * Math.sin(g), r, s, o, l, n, 0, h, [g, e, f, m]);
                }
                y = g - p;
                let b = Math.cos(p);
                let C = Math.cos(g);
                let v = Math.tan(y / 4);
                let k = 4 / 3 * o * v;
                let w = 4 / 3 * l * v;
                let S = [e, r];
                let T = [e + k * Math.sin(p), r - w * b];
                let B = [i + k * Math.sin(g), a - w * C];
                let M = [i, a];
                T[0] = S[0] * 2 - T[0];
                T[1] = S[1] * 2 - T[1];
                if (c) {
                  return [T, B, M].concat(u);
                }
                {
                  u = [T, B, M].concat(u);
                  let t = [];
                  for (let e = 0; e < u.length; e += 3) {
                    let r = x(u[e][0], u[e][1], d);
                    let i = x(u[e + 1][0], u[e + 1][1], d);
                    let a = x(u[e + 2][0], u[e + 2][1], d);
                    t.push([r[0], r[1], i[0], i[1], a[0], a[1]]);
                  }
                  return t;
                }
              })(i, a, s, h, t, r, o, l, n).forEach(function (t) {
                e.push({
                  key: "C",
                  data: t
                });
              });
              i = s;
              a = h;
            }
            break;
          }
        case "Z":
          e.push({
            key: "Z",
            data: []
          });
          i = o;
          a = l;
      }
      r = h;
    }
    return e;
  }
  function x(t, e, r) {
    return [t * Math.cos(r) - e * Math.sin(r), t * Math.sin(r) + e * Math.cos(r)];
  }
  let b = {
    randOffset: function (t, e) {
      return A(t, e);
    },
    randOffsetWithRange: function (t, e, r) {
      return _(t, e, r);
    },
    ellipse: function (t, e, r, i, a) {
      let o = w(r, i, a);
      return S(t, e, a, o).opset;
    },
    doubleLineOps: function (t, e, r, i, a) {
      return $(t, e, r, i, a, true);
    }
  };
  function C(t, e, r, i, a) {
    return {
      type: "path",
      ops: $(t, e, r, i, a)
    };
  }
  function v(t, e, r) {
    let i = (t || []).length;
    if (i > 2) {
      let a = [];
      for (let e = 0; e < i - 1; e++) {
        a.push(...$(t[e][0], t[e][1], t[e + 1][0], t[e + 1][1], r));
      }
      if (e) {
        a.push(...$(t[i - 1][0], t[i - 1][1], t[0][0], t[0][1], r));
      }
      return {
        type: "path",
        ops: a
      };
    }
    if (i === 2) {
      return C(t[0][0], t[0][1], t[1][0], t[1][1], r);
    } else {
      return {
        type: "path",
        ops: []
      };
    }
  }
  function k(t, e) {
    if (t.length) {
      let r = typeof t[0][0] == "number" ? [t] : t;
      let i = Z(r[0], +(1 + e.roughness * 0.2), e);
      let a = e.disableMultiStroke ? [] : Z(r[0], (1 + e.roughness * 0.22) * 1.5, L(e));
      for (let t = 1; t < r.length; t++) {
        let o = r[t];
        if (o.length) {
          let t = Z(o, +(1 + e.roughness * 0.2), e);
          let r = e.disableMultiStroke ? [] : Z(o, (1 + e.roughness * 0.22) * 1.5, L(e));
          for (let e of t) {
            if (e.op !== "move") {
              i.push(e);
            }
          }
          for (let t of r) {
            if (t.op !== "move") {
              a.push(t);
            }
          }
        }
      }
      return {
        type: "path",
        ops: i.concat(a)
      };
    }
    return {
      type: "path",
      ops: []
    };
  }
  function w(t, e, r) {
    let i = Math.sqrt(Math.PI * 2 * Math.sqrt((Math.pow(t / 2, 2) + Math.pow(e / 2, 2)) / 2));
    let a = Math.PI * 2 / Math.ceil(Math.max(r.curveStepCount, r.curveStepCount / Math.sqrt(200) * i));
    let o = Math.abs(t / 2);
    let l = Math.abs(e / 2);
    let n = 1 - r.curveFitting;
    o += A(o * n, r);
    l += A(l * n, r);
    return {
      increment: a,
      rx: o,
      ry: l
    };
  }
  function S(t, e, r, i) {
    let [a, o] = D(i.increment, t, e, i.rx, i.ry, 1, i.increment * _(0.1, _(0.4, 1, r), r), r);
    let l = O(a, null, r);
    if (!r.disableMultiStroke && r.roughness !== 0) {
      let [a] = D(i.increment, t, e, i.rx, i.ry, 1.5, 0, r);
      let o = O(a, null, r);
      l = l.concat(o);
    }
    return {
      estimatedPoints: o,
      opset: {
        type: "path",
        ops: l
      }
    };
  }
  function T(t, e, r, i, a, o, l, n, s) {
    let h = Math.abs(r / 2);
    let c = Math.abs(i / 2);
    h += A(h * 0.01, s);
    c += A(c * 0.01, s);
    let d = a;
    let u = o;
    while (d < 0) {
      d += Math.PI * 2;
      u += Math.PI * 2;
    }
    if (u - d > Math.PI * 2) {
      d = 0;
      u = Math.PI * 2;
    }
    let p = Math.min(Math.PI * 2 / s.curveStepCount / 2, (u - d) / 2);
    let g = I(p, t, e, h, c, d, u, 1, s);
    if (!s.disableMultiStroke) {
      let r = I(p, t, e, h, c, d, u, 1.5, s);
      g.push(...r);
    }
    if (l) {
      if (n) {
        g.push(...$(t, e, t + h * Math.cos(d), e + c * Math.sin(d), s), ...$(t, e, t + h * Math.cos(u), e + c * Math.sin(u), s));
      } else {
        g.push({
          op: "lineTo",
          data: [t, e]
        }, {
          op: "lineTo",
          data: [t + h * Math.cos(d), e + c * Math.sin(d)]
        });
      }
    }
    return {
      type: "path",
      ops: g
    };
  }
  function B(t, e) {
    let r = y(m(f(t)));
    let i = [];
    let a = [0, 0];
    let o = [0, 0];
    for (let {
      key: t,
      data: l
    } of r) {
      switch (t) {
        case "M":
          o = [l[0], l[1]];
          a = [l[0], l[1]];
          break;
        case "L":
          i.push(...$(o[0], o[1], l[0], l[1], e));
          o = [l[0], l[1]];
          break;
        case "C":
          {
            let [t, r, a, n, s, h] = l;
            i.push(...function (t, e, r, i, a, o, l, n) {
              let s = [];
              let h = [n.maxRandomnessOffset || 1, (n.maxRandomnessOffset || 1) + 0.3];
              let c = [0, 0];
              let d = n.disableMultiStroke ? 1 : 2;
              let u = n.preserveVertices;
              for (let p = 0; p < d; p++) {
                if (p === 0) {
                  s.push({
                    op: "move",
                    data: [l[0], l[1]]
                  });
                } else {
                  s.push({
                    op: "move",
                    data: [l[0] + (u ? 0 : A(h[0], n)), l[1] + (u ? 0 : A(h[0], n))]
                  });
                }
                c = u ? [a, o] : [a + A(h[p], n), o + A(h[p], n)];
                s.push({
                  op: "bcurveTo",
                  data: [t + A(h[p], n), e + A(h[p], n), r + A(h[p], n), i + A(h[p], n), c[0], c[1]]
                });
              }
              return s;
            }(t, r, a, n, s, h, o, e));
            o = [s, h];
            break;
          }
        case "Z":
          i.push(...$(o[0], o[1], a[0], a[1], e));
          o = [a[0], a[1]];
      }
    }
    return {
      type: "path",
      ops: i
    };
  }
  function M(t, e) {
    let r = [];
    for (let i of t) {
      if (i.length) {
        let t = e.maxRandomnessOffset || 0;
        let a = i.length;
        if (a > 2) {
          r.push({
            op: "move",
            data: [i[0][0] + A(t, e), i[0][1] + A(t, e)]
          });
          for (let o = 1; o < a; o++) {
            r.push({
              op: "lineTo",
              data: [i[o][0] + A(t, e), i[o][1] + A(t, e)]
            });
          }
        }
      }
    }
    return {
      type: "fillPath",
      ops: r
    };
  }
  function W(t, e) {
    return function (t, e) {
      let r = t.fillStyle || "hachure";
      if (!u[r]) {
        switch (r) {
          case "zigzag":
            u[r] ||= new n(e);
            break;
          case "cross-hatch":
            u[r] ||= new s(e);
            break;
          case "dots":
            u[r] ||= new h(e);
            break;
          case "dashed":
            u[r] ||= new c(e);
            break;
          case "zigzag-line":
            u[r] ||= new d(e);
            break;
          default:
            if (!u[r = "hachure"]) {
              u[r] = new o(e);
            }
        }
      }
      return u[r];
    }(e, b).fillPolygons(t, e);
  }
  function L(t) {
    let e = Object.assign({}, t);
    e.randomizer = undefined;
    if (t.seed) {
      e.seed = t.seed + 1;
    }
    return e;
  }
  function F(t) {
    t.randomizer ||= new p(t.seed || 0);
    return t.randomizer.next();
  }
  function _(t, e, r, i = 1) {
    return r.roughness * i * (F(r) * (e - t) + t);
  }
  function A(t, e, r = 1) {
    return _(-t, t, e, r);
  }
  function $(t, e, r, i, a, o = false) {
    let l = o ? a.disableMultiStrokeFill : a.disableMultiStroke;
    let n = E(t, e, r, i, a, true, false);
    if (l) {
      return n;
    }
    let s = E(t, e, r, i, a, true, true);
    return n.concat(s);
  }
  function E(t, e, r, i, a, o, l) {
    let n = Math.pow(t - r, 2) + Math.pow(e - i, 2);
    let s = Math.sqrt(n);
    let h = 1;
    h = s < 200 ? 1 : s > 500 ? 0.4 : s * -0.0016668 + 1.233334;
    let c = a.maxRandomnessOffset || 0;
    if (c * c * 100 > n) {
      c = s / 10;
    }
    let d = c / 2;
    let u = 0.2 + F(a) * 0.2;
    let p = a.bowing * a.maxRandomnessOffset * (i - e) / 200;
    let g = a.bowing * a.maxRandomnessOffset * (t - r) / 200;
    p = A(p, a, h);
    g = A(g, a, h);
    let f = [];
    let m = () => A(d, a, h);
    let y = () => A(c, a, h);
    let x = a.preserveVertices;
    if (o) {
      if (l) {
        f.push({
          op: "move",
          data: [t + (x ? 0 : m()), e + (x ? 0 : m())]
        });
      } else {
        f.push({
          op: "move",
          data: [t + (x ? 0 : A(c, a, h)), e + (x ? 0 : A(c, a, h))]
        });
      }
    }
    if (l) {
      f.push({
        op: "bcurveTo",
        data: [p + t + (r - t) * u + m(), g + e + (i - e) * u + m(), p + t + (r - t) * 2 * u + m(), g + e + (i - e) * 2 * u + m(), r + (x ? 0 : m()), i + (x ? 0 : m())]
      });
    } else {
      f.push({
        op: "bcurveTo",
        data: [p + t + (r - t) * u + y(), g + e + (i - e) * u + y(), p + t + (r - t) * 2 * u + y(), g + e + (i - e) * 2 * u + y(), r + (x ? 0 : y()), i + (x ? 0 : y())]
      });
    }
    return f;
  }
  function Z(t, e, r) {
    if (!t.length) {
      return [];
    }
    let i = [];
    i.push([t[0][0] + A(e, r), t[0][1] + A(e, r)]);
    i.push([t[0][0] + A(e, r), t[0][1] + A(e, r)]);
    for (let a = 1; a < t.length; a++) {
      i.push([t[a][0] + A(e, r), t[a][1] + A(e, r)]);
      if (a === t.length - 1) {
        i.push([t[a][0] + A(e, r), t[a][1] + A(e, r)]);
      }
    }
    return O(i, null, r);
  }
  function O(t, e, r) {
    let i = t.length;
    let a = [];
    if (i > 3) {
      let o = [];
      let l = 1 - r.curveTightness;
      a.push({
        op: "move",
        data: [t[1][0], t[1][1]]
      });
      for (let e = 1; e + 2 < i; e++) {
        let r = t[e];
        o[0] = [r[0], r[1]];
        o[1] = [r[0] + (l * t[e + 1][0] - l * t[e - 1][0]) / 6, r[1] + (l * t[e + 1][1] - l * t[e - 1][1]) / 6];
        o[2] = [t[e + 1][0] + (l * t[e][0] - l * t[e + 2][0]) / 6, t[e + 1][1] + (l * t[e][1] - l * t[e + 2][1]) / 6];
        o[3] = [t[e + 1][0], t[e + 1][1]];
        a.push({
          op: "bcurveTo",
          data: [o[1][0], o[1][1], o[2][0], o[2][1], o[3][0], o[3][1]]
        });
      }
      if (e && e.length === 2) {
        let t = r.maxRandomnessOffset;
        a.push({
          op: "lineTo",
          data: [e[0] + A(t, r), e[1] + A(t, r)]
        });
      }
    } else if (i === 3) {
      a.push({
        op: "move",
        data: [t[1][0], t[1][1]]
      });
      a.push({
        op: "bcurveTo",
        data: [t[1][0], t[1][1], t[2][0], t[2][1], t[2][0], t[2][1]]
      });
    } else if (i === 2) {
      a.push(...E(t[0][0], t[0][1], t[1][0], t[1][1], r, true, true));
    }
    return a;
  }
  function D(t, e, r, i, a, o, l, n) {
    let s = [];
    let h = [];
    if (n.roughness === 0) {
      t /= 4;
      h.push([e + i * Math.cos(-t), r + a * Math.sin(-t)]);
      for (let o = 0; o <= Math.PI * 2; o += t) {
        let t = [e + i * Math.cos(o), r + a * Math.sin(o)];
        s.push(t);
        h.push(t);
      }
      h.push([e + +i, r + a * 0]);
      h.push([e + i * Math.cos(t), r + a * Math.sin(t)]);
    } else {
      let c = A(0.5, n) - Math.PI / 2;
      h.push([A(o, n) + e + i * 0.9 * Math.cos(c - t), A(o, n) + r + a * 0.9 * Math.sin(c - t)]);
      let d = Math.PI * 2 + c - 0.01;
      for (let l = c; l < d; l += t) {
        let t = [A(o, n) + e + i * Math.cos(l), A(o, n) + r + a * Math.sin(l)];
        s.push(t);
        h.push(t);
      }
      h.push([A(o, n) + e + i * Math.cos(c + Math.PI * 2 + l * 0.5), A(o, n) + r + a * Math.sin(c + Math.PI * 2 + l * 0.5)]);
      h.push([A(o, n) + e + i * 0.98 * Math.cos(c + l), A(o, n) + r + a * 0.98 * Math.sin(c + l)]);
      h.push([A(o, n) + e + i * 0.9 * Math.cos(c + l * 0.5), A(o, n) + r + a * 0.9 * Math.sin(c + l * 0.5)]);
    }
    return [h, s];
  }
  function I(t, e, r, i, a, o, l, n, s) {
    let h = o + A(0.1, s);
    let c = [];
    c.push([A(n, s) + e + i * 0.9 * Math.cos(h - t), A(n, s) + r + a * 0.9 * Math.sin(h - t)]);
    for (let o = h; o <= l; o += t) {
      c.push([A(n, s) + e + i * Math.cos(o), A(n, s) + r + a * Math.sin(o)]);
    }
    c.push([e + i * Math.cos(l), r + a * Math.sin(l)]);
    c.push([e + i * Math.cos(l), r + a * Math.sin(l)]);
    return O(c, null, s);
  }
  function q(t, e = 0) {
    let r = t.length;
    if (r < 3) {
      throw Error("A curve must have at least three points.");
    }
    let i = [];
    if (r === 3) {
      i.push([...t[0]], [...t[1]], [...t[2]], [...t[2]]);
    } else {
      let r = [];
      r.push(t[0], t[0]);
      for (let e = 1; e < t.length; e++) {
        r.push(t[e]);
        if (e === t.length - 1) {
          r.push(t[e]);
        }
      }
      let a = [];
      let o = 1 - e;
      i.push([...r[0]]);
      for (let t = 1; t + 2 < r.length; t++) {
        let e = r[t];
        a[0] = [e[0], e[1]];
        a[1] = [e[0] + (o * r[t + 1][0] - o * r[t - 1][0]) / 6, e[1] + (o * r[t + 1][1] - o * r[t - 1][1]) / 6];
        a[2] = [r[t + 1][0] + (o * r[t][0] - o * r[t + 2][0]) / 6, r[t + 1][1] + (o * r[t][1] - o * r[t + 2][1]) / 6];
        a[3] = [r[t + 1][0], r[t + 1][1]];
        i.push(a[1], a[2], a[3]);
      }
    }
    return i;
  }
  function R(t, e) {
    return Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2);
  }
  function N(t, e, r) {
    return [t[0] + (e[0] - t[0]) * r, t[1] + (e[1] - t[1]) * r];
  }
  function P(t, e, r, i, a) {
    let o = a || [];
    let l = t[e];
    let n = t[r - 1];
    let s = 0;
    let h = 1;
    for (let i = e + 1; i < r - 1; ++i) {
      let e = function (t, e, r) {
        let i = R(e, r);
        if (i === 0) {
          return R(t, e);
        }
        let a = ((t[0] - e[0]) * (r[0] - e[0]) + (t[1] - e[1]) * (r[1] - e[1])) / i;
        return R(t, N(e, r, a = Math.max(0, Math.min(1, a))));
      }(t[i], l, n);
      if (e > s) {
        s = e;
        h = i;
      }
    }
    if (Math.sqrt(s) > i) {
      P(t, e, h + 1, i, o);
      P(t, h, r, i, o);
    } else {
      if (!o.length) {
        o.push(l);
      }
      o.push(n);
    }
    return o;
  }
  function z(t, e = 0.15, r) {
    let i = [];
    let a = (t.length - 1) / 3;
    for (let r = 0; r < a; r++) {
      (function t(e, r, i, a) {
        let o = a || [];
        if (function (t, e) {
          let r = t[e + 0];
          let i = t[e + 1];
          let a = t[e + 2];
          let o = t[e + 3];
          let l = i[0] * 3 - r[0] * 2 - o[0];
          l *= l;
          let n = i[1] * 3 - r[1] * 2 - o[1];
          n *= n;
          let s = a[0] * 3 - o[0] * 2 - r[0];
          s *= s;
          let h = a[1] * 3 - o[1] * 2 - r[1];
          h *= h;
          if (l < s) {
            l = s;
          }
          if (n < h) {
            n = h;
          }
          return l + n;
        }(e, r) < i) {
          let t = e[r + 0];
          if (o.length) {
            if (Math.sqrt(R(o[o.length - 1], t)) > 1) {
              o.push(t);
            }
          } else {
            o.push(t);
          }
          o.push(e[r + 3]);
        } else {
          let a = e[r + 0];
          let l = e[r + 1];
          let n = e[r + 2];
          let s = e[r + 3];
          let h = N(a, l, 0.5);
          let c = N(l, n, 0.5);
          let d = N(n, s, 0.5);
          let u = N(h, c, 0.5);
          let p = N(c, d, 0.5);
          let g = N(u, p, 0.5);
          t([a, h, u, g], 0, i, o);
          t([g, p, d, s], 0, i, o);
        }
        return o;
      })(t, r * 3, e, i);
    }
    if (r && r > 0) {
      return P(i, 0, i.length, r);
    } else {
      return i;
    }
  }
  let j = "none";
  class H {
    constructor(t) {
      this.defaultOptions = {
        maxRandomnessOffset: 2,
        roughness: 1,
        bowing: 1,
        stroke: "#000",
        strokeWidth: 1,
        curveTightness: 0,
        curveFitting: 0.95,
        curveStepCount: 9,
        fillStyle: "hachure",
        fillWeight: -1,
        hachureAngle: -41,
        hachureGap: -1,
        dashOffset: -1,
        dashGap: -1,
        zigzagOffset: -1,
        seed: 0,
        disableMultiStroke: false,
        disableMultiStrokeFill: false,
        preserveVertices: false,
        fillShapeRoughnessGain: 0.8
      };
      this.config = t || {};
      if (this.config.options) {
        this.defaultOptions = this._o(this.config.options);
      }
    }
    static newSeed() {
      return Math.floor(Math.random() * 2147483648);
    }
    _o(t) {
      if (t) {
        return Object.assign({}, this.defaultOptions, t);
      } else {
        return this.defaultOptions;
      }
    }
    _d(t, e, r) {
      return {
        shape: t,
        sets: e || [],
        options: r || this.defaultOptions
      };
    }
    line(t, e, r, i, a) {
      let o = this._o(a);
      return this._d("line", [C(t, e, r, i, o)], o);
    }
    rectangle(t, e, r, i, a) {
      let o = this._o(a);
      let l = [];
      let n = v([[t, e], [t + r, e], [t + r, e + i], [t, e + i]], true, o);
      if (o.fill) {
        let a = [[t, e], [t + r, e], [t + r, e + i], [t, e + i]];
        if (o.fillStyle === "solid") {
          l.push(M([a], o));
        } else {
          l.push(W([a], o));
        }
      }
      if (o.stroke !== j) {
        l.push(n);
      }
      return this._d("rectangle", l, o);
    }
    ellipse(t, e, r, i, a) {
      let o = this._o(a);
      let l = [];
      let n = w(r, i, o);
      let s = S(t, e, o, n);
      if (o.fill) {
        if (o.fillStyle === "solid") {
          let r = S(t, e, o, n).opset;
          r.type = "fillPath";
          l.push(r);
        } else {
          l.push(W([s.estimatedPoints], o));
        }
      }
      if (o.stroke !== j) {
        l.push(s.opset);
      }
      return this._d("ellipse", l, o);
    }
    circle(t, e, r, i) {
      let a = this.ellipse(t, e, r, r, i);
      a.shape = "circle";
      return a;
    }
    linearPath(t, e) {
      let r = this._o(e);
      return this._d("linearPath", [v(t, false, r)], r);
    }
    arc(t, e, r, i, a, o, l = false, n) {
      let s = this._o(n);
      let h = [];
      let c = T(t, e, r, i, a, o, l, true, s);
      if (l && s.fill) {
        if (s.fillStyle === "solid") {
          let l = Object.assign({}, s);
          l.disableMultiStroke = true;
          let n = T(t, e, r, i, a, o, true, false, l);
          n.type = "fillPath";
          h.push(n);
        } else {
          h.push(function (t, e, r, i, a, o, l) {
            let n = Math.abs(r / 2);
            let s = Math.abs(i / 2);
            n += A(n * 0.01, l);
            s += A(s * 0.01, l);
            let h = a;
            let c = o;
            while (h < 0) {
              h += Math.PI * 2;
              c += Math.PI * 2;
            }
            if (c - h > Math.PI * 2) {
              h = 0;
              c = Math.PI * 2;
            }
            let d = (c - h) / l.curveStepCount;
            let u = [];
            for (let r = h; r <= c; r += d) {
              u.push([t + n * Math.cos(r), e + s * Math.sin(r)]);
            }
            u.push([t + n * Math.cos(c), e + s * Math.sin(c)]);
            u.push([t, e]);
            return W([u], l);
          }(t, e, r, i, a, o, s));
        }
      }
      if (s.stroke !== j) {
        h.push(c);
      }
      return this._d("arc", h, s);
    }
    curve(t, e) {
      let r = this._o(e);
      let i = [];
      let a = k(t, r);
      if (r.fill && r.fill !== j) {
        if (r.fillStyle === "solid") {
          let e = k(t, Object.assign(Object.assign({}, r), {
            disableMultiStroke: true,
            roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
          }));
          i.push({
            type: "fillPath",
            ops: this._mergedShape(e.ops)
          });
        } else {
          let e = [];
          if (t.length) {
            for (let i of typeof t[0][0] == "number" ? [t] : t) {
              if (i.length < 3) {
                e.push(...i);
              } else if (i.length === 3) {
                e.push(...z(q([i[0], i[0], i[1], i[2]]), 10, (1 + r.roughness) / 2));
              } else {
                e.push(...z(q(i), 10, (1 + r.roughness) / 2));
              }
            }
          }
          if (e.length) {
            i.push(W([e], r));
          }
        }
      }
      if (r.stroke !== j) {
        i.push(a);
      }
      return this._d("curve", i, r);
    }
    polygon(t, e) {
      let r = this._o(e);
      let i = [];
      let a = v(t, true, r);
      if (r.fill) {
        if (r.fillStyle === "solid") {
          i.push(M([t], r));
        } else {
          i.push(W([t], r));
        }
      }
      if (r.stroke !== j) {
        i.push(a);
      }
      return this._d("polygon", i, r);
    }
    path(t, e) {
      let r = this._o(e);
      let i = [];
      if (!t) {
        return this._d("path", i, r);
      }
      t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
      let a = r.fill && r.fill !== "transparent" && r.fill !== j;
      let o = r.stroke !== j;
      let l = !!r.simplification && !!(r.simplification < 1);
      let n = function (t, e, r) {
        let i = y(m(f(t)));
        let a = [];
        let o = [];
        let l = [0, 0];
        let n = [];
        let s = () => {
          if (n.length >= 4) {
            o.push(...z(n, 1));
          }
          n = [];
        };
        let h = () => {
          s();
          if (o.length) {
            a.push(o);
            o = [];
          }
        };
        for (let {
          key: t,
          data: e
        } of i) {
          switch (t) {
            case "M":
              h();
              l = [e[0], e[1]];
              o.push(l);
              break;
            case "L":
              s();
              o.push([e[0], e[1]]);
              break;
            case "C":
              if (!n.length) {
                let t = o.length ? o[o.length - 1] : l;
                n.push([t[0], t[1]]);
              }
              n.push([e[0], e[1]]);
              n.push([e[2], e[3]]);
              n.push([e[4], e[5]]);
              break;
            case "Z":
              s();
              o.push([l[0], l[1]]);
          }
        }
        h();
        if (!r) {
          return a;
        }
        let c = [];
        for (let t of a) {
          let e = P(t, 0, t.length, r);
          if (e.length) {
            c.push(e);
          }
        }
        return c;
      }(t, 0, l ? 4 - (r.simplification || 1) * 4 : (1 + r.roughness) / 2);
      let s = B(t, r);
      if (a) {
        if (r.fillStyle === "solid") {
          if (n.length === 1) {
            let e = B(t, Object.assign(Object.assign({}, r), {
              disableMultiStroke: true,
              roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
            }));
            i.push({
              type: "fillPath",
              ops: this._mergedShape(e.ops)
            });
          } else {
            i.push(M(n, r));
          }
        } else {
          i.push(W(n, r));
        }
      }
      if (o) {
        if (l) {
          n.forEach(t => {
            i.push(v(t, false, r));
          });
        } else {
          i.push(s);
        }
      }
      return this._d("path", i, r);
    }
    opsToPath(t, e) {
      let r = "";
      for (let i of t.ops) {
        let t = typeof e == "number" && e >= 0 ? i.data.map(t => +t.toFixed(e)) : i.data;
        switch (i.op) {
          case "move":
            r += `M${t[0]} ${t[1]} `;
            break;
          case "bcurveTo":
            r += `C${t[0]} ${t[1]}, ${t[2]} ${t[3]}, ${t[4]} ${t[5]} `;
            break;
          case "lineTo":
            r += `L${t[0]} ${t[1]} `;
        }
      }
      return r.trim();
    }
    toPaths(t) {
      let e = t.sets || [];
      let r = t.options || this.defaultOptions;
      let i = [];
      for (let t of e) {
        let e = null;
        switch (t.type) {
          case "path":
            e = {
              d: this.opsToPath(t),
              stroke: r.stroke,
              strokeWidth: r.strokeWidth,
              fill: j
            };
            break;
          case "fillPath":
            e = {
              d: this.opsToPath(t),
              stroke: j,
              strokeWidth: 0,
              fill: r.fill || j
            };
            break;
          case "fillSketch":
            e = this.fillSketch(t, r);
        }
        if (e) {
          i.push(e);
        }
      }
      return i;
    }
    fillSketch(t, e) {
      let r = e.fillWeight;
      if (r < 0) {
        r = e.strokeWidth / 2;
      }
      return {
        d: this.opsToPath(t),
        stroke: e.fill || j,
        strokeWidth: r,
        fill: j
      };
    }
    _mergedShape(t) {
      return t.filter((t, e) => e === 0 || t.op !== "move");
    }
  }
  class U {
    constructor(t, e) {
      this.canvas = t;
      this.ctx = this.canvas.getContext("2d");
      this.gen = new H(e);
    }
    draw(t) {
      let e = t.sets || [];
      let r = t.options || this.getDefaultOptions();
      let i = this.ctx;
      let a = t.options.fixedDecimalPlaceDigits;
      for (let o of e) {
        switch (o.type) {
          case "path":
            i.save();
            i.strokeStyle = r.stroke === "none" ? "transparent" : r.stroke;
            i.lineWidth = r.strokeWidth;
            if (r.strokeLineDash) {
              i.setLineDash(r.strokeLineDash);
            }
            if (r.strokeLineDashOffset) {
              i.lineDashOffset = r.strokeLineDashOffset;
            }
            this._drawToContext(i, o, a);
            i.restore();
            break;
          case "fillPath":
            {
              i.save();
              i.fillStyle = r.fill || "";
              let e = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
              this._drawToContext(i, o, a, e);
              i.restore();
              break;
            }
          case "fillSketch":
            this.fillSketch(i, o, r);
        }
      }
    }
    fillSketch(t, e, r) {
      let i = r.fillWeight;
      if (i < 0) {
        i = r.strokeWidth / 2;
      }
      t.save();
      if (r.fillLineDash) {
        t.setLineDash(r.fillLineDash);
      }
      if (r.fillLineDashOffset) {
        t.lineDashOffset = r.fillLineDashOffset;
      }
      t.strokeStyle = r.fill || "";
      t.lineWidth = i;
      this._drawToContext(t, e, r.fixedDecimalPlaceDigits);
      t.restore();
    }
    _drawToContext(t, e, r, i = "nonzero") {
      t.beginPath();
      for (let i of e.ops) {
        let e = typeof r == "number" && r >= 0 ? i.data.map(t => +t.toFixed(r)) : i.data;
        switch (i.op) {
          case "move":
            t.moveTo(e[0], e[1]);
            break;
          case "bcurveTo":
            t.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]);
            break;
          case "lineTo":
            t.lineTo(e[0], e[1]);
        }
      }
      if (e.type === "fillPath") {
        t.fill(i);
      } else {
        t.stroke();
      }
    }
    get generator() {
      return this.gen;
    }
    getDefaultOptions() {
      return this.gen.defaultOptions;
    }
    line(t, e, r, i, a) {
      let o = this.gen.line(t, e, r, i, a);
      this.draw(o);
      return o;
    }
    rectangle(t, e, r, i, a) {
      let o = this.gen.rectangle(t, e, r, i, a);
      this.draw(o);
      return o;
    }
    ellipse(t, e, r, i, a) {
      let o = this.gen.ellipse(t, e, r, i, a);
      this.draw(o);
      return o;
    }
    circle(t, e, r, i) {
      let a = this.gen.circle(t, e, r, i);
      this.draw(a);
      return a;
    }
    linearPath(t, e) {
      let r = this.gen.linearPath(t, e);
      this.draw(r);
      return r;
    }
    polygon(t, e) {
      let r = this.gen.polygon(t, e);
      this.draw(r);
      return r;
    }
    arc(t, e, r, i, a, o, l = false, n) {
      let s = this.gen.arc(t, e, r, i, a, o, l, n);
      this.draw(s);
      return s;
    }
    curve(t, e) {
      let r = this.gen.curve(t, e);
      this.draw(r);
      return r;
    }
    path(t, e) {
      let r = this.gen.path(t, e);
      this.draw(r);
      return r;
    }
  }
  let Y = "http://www.w3.org/2000/svg";
  class G {
    constructor(t, e) {
      this.svg = t;
      this.gen = new H(e);
    }
    draw(t) {
      let e = t.sets || [];
      let r = t.options || this.getDefaultOptions();
      let i = this.svg.ownerDocument || window.document;
      let a = i.createElementNS(Y, "g");
      let o = t.options.fixedDecimalPlaceDigits;
      for (let l of e) {
        let e = null;
        switch (l.type) {
          case "path":
            (e = i.createElementNS(Y, "path")).setAttribute("d", this.opsToPath(l, o));
            e.setAttribute("stroke", r.stroke);
            e.setAttribute("stroke-width", r.strokeWidth + "");
            e.setAttribute("fill", "none");
            if (r.strokeLineDash) {
              e.setAttribute("stroke-dasharray", r.strokeLineDash.join(" ").trim());
            }
            if (r.strokeLineDashOffset) {
              e.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
            }
            break;
          case "fillPath":
            (e = i.createElementNS(Y, "path")).setAttribute("d", this.opsToPath(l, o));
            e.setAttribute("stroke", "none");
            e.setAttribute("stroke-width", "0");
            e.setAttribute("fill", r.fill || "");
            if (t.shape === "curve" || t.shape === "polygon") {
              e.setAttribute("fill-rule", "evenodd");
            }
            break;
          case "fillSketch":
            e = this.fillSketch(i, l, r);
        }
        if (e) {
          a.appendChild(e);
        }
      }
      return a;
    }
    fillSketch(t, e, r) {
      let i = r.fillWeight;
      if (i < 0) {
        i = r.strokeWidth / 2;
      }
      let a = t.createElementNS(Y, "path");
      a.setAttribute("d", this.opsToPath(e, r.fixedDecimalPlaceDigits));
      a.setAttribute("stroke", r.fill || "");
      a.setAttribute("stroke-width", i + "");
      a.setAttribute("fill", "none");
      if (r.fillLineDash) {
        a.setAttribute("stroke-dasharray", r.fillLineDash.join(" ").trim());
      }
      if (r.fillLineDashOffset) {
        a.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`);
      }
      return a;
    }
    get generator() {
      return this.gen;
    }
    getDefaultOptions() {
      return this.gen.defaultOptions;
    }
    opsToPath(t, e) {
      return this.gen.opsToPath(t, e);
    }
    line(t, e, r, i, a) {
      let o = this.gen.line(t, e, r, i, a);
      return this.draw(o);
    }
    rectangle(t, e, r, i, a) {
      let o = this.gen.rectangle(t, e, r, i, a);
      return this.draw(o);
    }
    ellipse(t, e, r, i, a) {
      let o = this.gen.ellipse(t, e, r, i, a);
      return this.draw(o);
    }
    circle(t, e, r, i) {
      let a = this.gen.circle(t, e, r, i);
      return this.draw(a);
    }
    linearPath(t, e) {
      let r = this.gen.linearPath(t, e);
      return this.draw(r);
    }
    polygon(t, e) {
      let r = this.gen.polygon(t, e);
      return this.draw(r);
    }
    arc(t, e, r, i, a, o, l = false, n) {
      let s = this.gen.arc(t, e, r, i, a, o, l, n);
      return this.draw(s);
    }
    curve(t, e) {
      let r = this.gen.curve(t, e);
      return this.draw(r);
    }
    path(t, e) {
      let r = this.gen.path(t, e);
      return this.draw(r);
    }
  }
  var V = {
    canvas: (t, e) => new U(t, e),
    svg: (t, e) => new G(t, e),
    generator: t => new H(t),
    newSeed: () => H.newSeed()
  };
  require.d(exports, {
    roughLibrary: function () {
      return V;
    }
  });
}