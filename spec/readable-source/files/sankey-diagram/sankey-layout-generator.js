// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'sankeyLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 1800.93d11244.js
         * chunkId: 1800
         * moduleId: 458203
         */
module.exports = function (module, exports, require) {
  var arraySumByIteratee = require("array-sum-by-iteratee") /*id: 618459*/;
  var arrayMaxUtil_1 = require("array-max-util_1") /*id: 948581*/;
  var arrayMaxUtil = require("array-max-util") /*id: 878770*/;
  var graphDepthCalcUtils = require("graph-depth-calc-utils") /*id: 652785*/;
  function l(t) {
    return function () {
      return t;
    };
  }
  function a(t, e) {
    return h(t.source, e.source) || t.index - e.index;
  }
  function c(t, e) {
    return h(t.target, e.target) || t.index - e.index;
  }
  function h(t, e) {
    return t.y0 - e.y0;
  }
  function u(t) {
    return t.value;
  }
  function f(t) {
    return t.index;
  }
  function y(t) {
    return t.nodes;
  }
  function d(t) {
    return t.links;
  }
  function p(t, e) {
    let n = t.get(e);
    if (!n) {
      throw Error("missing: " + e);
    }
    return n;
  }
  function g({
    nodes: t
  }) {
    for (let e of t) {
      let t = e.y0;
      let n = t;
      for (let n of e.sourceLinks) {
        n.y0 = t + n.width / 2;
        t += n.width;
      }
      for (let t of e.targetLinks) {
        t.y1 = n + t.width / 2;
        n += t.width;
      }
    }
  }
  function m() {
    let t;
    let e;
    let n = 0;
    let m = 0;
    let k = 1;
    let _ = 1;
    let x = 24;
    let b = 8;
    let v;
    let W = f;
    let S = graphDepthCalcUtils.getNodeLayerDepth;
    let E = y;
    let $ = d;
    let w = 6;
    function A() {
      let o = {
        nodes: E.apply(null, arguments),
        links: $.apply(null, arguments)
      };
      (function ({
        nodes: t,
        links: n
      }) {
        for (let [e, n] of t.entries()) {
          n.index = e;
          n.sourceLinks = [];
          n.targetLinks = [];
        }
        let i = new Map(t.map((e, n) => [W(e, n, t), e]));
        for (let [t, e] of n.entries()) {
          e.index = t;
          let {
            source: n,
            target: r
          } = e;
          if (typeof n != "object") {
            n = e.source = p(i, n);
          }
          if (typeof r != "object") {
            r = e.target = p(i, r);
          }
          n.sourceLinks.push(e);
          r.targetLinks.push(e);
        }
        if (e != null) {
          for (let {
            sourceLinks: n,
            targetLinks: i
          } of t) {
            n.sort(e);
            i.sort(e);
          }
        }
      })(o);
      (function ({
        nodes: t
      }) {
        for (let e of t) {
          e.value = e.fixedValue === undefined ? Math.max(arraySumByIteratee.sumBy(e.sourceLinks, u), arraySumByIteratee.sumBy(e.targetLinks, u)) : e.fixedValue;
        }
      })(o);
      (function ({
        nodes: t
      }) {
        let e = t.length;
        let n = new Set(t);
        let i = new Set();
        let r = 0;
        while (n.size) {
          for (let t of n) {
            t.depth = r;
            for (let {
              target: e
            } of t.sourceLinks) {
              i.add(e);
            }
          }
          if (++r > e) {
            throw Error("circular link");
          }
          n = i;
          i = new Set();
        }
      })(o);
      (function ({
        nodes: t
      }) {
        let e = t.length;
        let n = new Set(t);
        let i = new Set();
        let r = 0;
        while (n.size) {
          for (let t of n) {
            t.height = r;
            for (let {
              source: e
            } of t.targetLinks) {
              i.add(e);
            }
          }
          if (++r > e) {
            throw Error("circular link");
          }
          n = i;
          i = new Set();
        }
      })(o);
      (function (o) {
        let l = function ({
          nodes: e
        }) {
          let i = arrayMaxUtil_1.max(e, t => t.depth) + 1;
          let s = (k - n - x) / (i - 1);
          let o = Array(i);
          for (let t of e) {
            let e = Math.max(0, Math.min(i - 1, Math.floor(S.call(null, t, i))));
            t.layer = e;
            t.x0 = n + e * s;
            t.x1 = t.x0 + x;
            if (o[e]) {
              o[e].push(t);
            } else {
              o[e] = [t];
            }
          }
          if (t) {
            for (let e of o) {
              e.sort(t);
            }
          }
          return o;
        }(o);
        v = Math.min(b, (_ - m) / (arrayMaxUtil_1.max(l, t => t.length) - 1));
        (function (t) {
          let n = arrayMaxUtil.maxBy(t, t => (_ - m - (t.length - 1) * v) / arraySumByIteratee.sumBy(t, u));
          for (let i of t) {
            let t = m;
            for (let e of i) {
              e.y0 = t;
              e.y1 = t + e.value * n;
              t = e.y1 + v;
              for (let i of e.sourceLinks) {
                i.width = i.value * n;
              }
            }
            t = (_ - t + v) / (i.length + 1);
            for (let e = 0; e < i.length; ++e) {
              let n = i[e];
              n.y0 += t * (e + 1);
              n.y1 += t * (e + 1);
            }
            (function (t) {
              if (e === undefined) {
                for (let {
                  sourceLinks: e,
                  targetLinks: n
                } of t) {
                  e.sort(c);
                  n.sort(a);
                }
              }
            })(i);
          }
        })(l);
        for (let e = 0; e < w; ++e) {
          let n = Math.pow(0.99, e);
          let i = Math.max(1 - n, (e + 1) / w);
          (function (e, n, i) {
            for (let r = e.length, s = r - 2; s >= 0; --s) {
              let r = e[s];
              for (let t of r) {
                let e = 0;
                let i = 0;
                for (let {
                  target: n,
                  value: r
                } of t.sourceLinks) {
                  let s = r * (n.layer - t.layer);
                  e += function (t, e) {
                    let n = e.y0 - (e.targetLinks.length - 1) * v / 2;
                    for (let {
                      source: i,
                      width: r
                    } of e.targetLinks) {
                      if (i === t) {
                        break;
                      }
                      n += r + v;
                    }
                    for (let {
                      target: i,
                      width: r
                    } of t.sourceLinks) {
                      if (i === e) {
                        break;
                      }
                      n -= r;
                    }
                    return n;
                  }(t, n) * s;
                  i += s;
                }
                if (!(i > 0)) {
                  continue;
                }
                let r = (e / i - t.y0) * n;
                t.y0 += r;
                t.y1 += r;
                F(t);
              }
              if (t === undefined) {
                r.sort(h);
              }
              L(r, i);
            }
          })(l, n, i);
          (function (e, n, i) {
            for (let r = 1, s = e.length; r < s; ++r) {
              let s = e[r];
              for (let t of s) {
                let e = 0;
                let i = 0;
                for (let {
                  source: n,
                  value: r
                } of t.targetLinks) {
                  let s = r * (t.layer - n.layer);
                  e += function (t, e) {
                    let n = t.y0 - (t.sourceLinks.length - 1) * v / 2;
                    for (let {
                      target: i,
                      width: r
                    } of t.sourceLinks) {
                      if (i === e) {
                        break;
                      }
                      n += r + v;
                    }
                    for (let {
                      source: i,
                      width: r
                    } of e.targetLinks) {
                      if (i === t) {
                        break;
                      }
                      n -= r;
                    }
                    return n;
                  }(n, t) * s;
                  i += s;
                }
                if (!(i > 0)) {
                  continue;
                }
                let r = (e / i - t.y0) * n;
                t.y0 += r;
                t.y1 += r;
                F(t);
              }
              if (t === undefined) {
                s.sort(h);
              }
              L(s, i);
            }
          })(l, n, i);
        }
      })(o);
      g(o);
      return o;
    }
    function L(t, e) {
      let n = t.length >> 1;
      let i = t[n];
      N(t, i.y0 - v, n - 1, e);
      T(t, i.y1 + v, n + 1, e);
      N(t, _, t.length - 1, e);
      T(t, m, 0, e);
    }
    function T(t, e, n, i) {
      for (; n < t.length; ++n) {
        let r = t[n];
        let s = (e - r.y0) * i;
        if (s > 0.000001) {
          r.y0 += s;
          r.y1 += s;
        }
        e = r.y1 + v;
      }
    }
    function N(t, e, n, i) {
      for (; n >= 0; --n) {
        let r = t[n];
        let s = (r.y1 - e) * i;
        if (s > 0.000001) {
          r.y0 -= s;
          r.y1 -= s;
        }
        e = r.y0 - v;
      }
    }
    function F({
      sourceLinks: t,
      targetLinks: n
    }) {
      if (e === undefined) {
        for (let {
          source: {
            sourceLinks: t
          }
        } of n) {
          t.sort(c);
        }
        for (let {
          target: {
            targetLinks: e
          }
        } of t) {
          e.sort(a);
        }
      }
    }
    A.update = function (t) {
      g(t);
      return t;
    };
    A.nodeId = function (t) {
      if (arguments.length) {
        W = typeof t == "function" ? t : l(t);
        return A;
      } else {
        return W;
      }
    };
    A.nodeAlign = function (t) {
      if (arguments.length) {
        S = typeof t == "function" ? t : l(t);
        return A;
      } else {
        return S;
      }
    };
    A.nodeSort = function (e) {
      if (arguments.length) {
        t = e;
        return A;
      } else {
        return t;
      }
    };
    A.nodeWidth = function (t) {
      if (arguments.length) {
        x = +t;
        return A;
      } else {
        return x;
      }
    };
    A.nodePadding = function (t) {
      if (arguments.length) {
        b = v = +t;
        return A;
      } else {
        return b;
      }
    };
    A.nodes = function (t) {
      if (arguments.length) {
        E = typeof t == "function" ? t : l(t);
        return A;
      } else {
        return E;
      }
    };
    A.links = function (t) {
      if (arguments.length) {
        $ = typeof t == "function" ? t : l(t);
        return A;
      } else {
        return $;
      }
    };
    A.linkSort = function (t) {
      if (arguments.length) {
        e = t;
        return A;
      } else {
        return e;
      }
    };
    A.size = function (t) {
      if (arguments.length) {
        n = m = 0;
        k = +t[0];
        _ = +t[1];
        return A;
      } else {
        return [k - n, _ - m];
      }
    };
    A.extent = function (t) {
      if (arguments.length) {
        n = +t[0][0];
        k = +t[1][0];
        m = +t[0][1];
        _ = +t[1][1];
        return A;
      } else {
        return [[n, m], [k, _]];
      }
    };
    A.iterations = function (t) {
      if (arguments.length) {
        w = +t;
        return A;
      } else {
        return w;
      }
    };
    return A;
  }
  require.d(exports, {
    sankeyLayout: function () {
      return m;
    }
  });
}