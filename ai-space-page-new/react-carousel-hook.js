// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useCarousel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 313344
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function r(e) {
    return Object.prototype.toString.call(e) === "[object Object]" || Array.isArray(e);
  }
  function a(e, t) {
    let n = Object.keys(e);
    let i = Object.keys(t);
    return n.length === i.length && JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every(n => {
      let i = e[n];
      let o = t[n];
      if (typeof i == "function") {
        return `${i}` == `${o}`;
      } else if (r(i) && r(o)) {
        return a(i, o);
      } else {
        return i === o;
      }
    });
  }
  function o(e) {
    return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options);
  }
  function l(e) {
    return typeof e == "number";
  }
  function s(e) {
    return typeof e == "string";
  }
  function c(e) {
    return typeof e == "boolean";
  }
  function u(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function d(e) {
    return Math.abs(e);
  }
  function p(e) {
    return Math.sign(e);
  }
  function h(e) {
    return v(e).map(Number);
  }
  function f(e) {
    return e[m(e)];
  }
  function m(e) {
    return Math.max(0, e.length - 1);
  }
  function g(e, t = 0) {
    return Array.from(Array(e), (e, n) => t + n);
  }
  function v(e) {
    return Object.keys(e);
  }
  function _(e, t) {
    return t.MouseEvent !== undefined && e instanceof t.MouseEvent;
  }
  function b() {
    let e = [];
    let t = {
      add: function (n, i, r, a = {
        passive: true
      }) {
        let o;
        if ("addEventListener" in n) {
          n.addEventListener(i, r, a);
          o = () => n.removeEventListener(i, r, a);
        } else {
          n.addListener(r);
          o = () => n.removeListener(r);
        }
        e.push(o);
        return t;
      },
      clear: function () {
        e = e.filter(e => e());
      }
    };
    return t;
  }
  function y(e = 0, t = 0) {
    let n = d(e - t);
    function i(n) {
      return n < e || n > t;
    }
    return {
      length: n,
      max: t,
      min: e,
      constrain: function (n) {
        if (i(n)) {
          if (n < e) {
            return e;
          } else {
            return t;
          }
        } else {
          return n;
        }
      },
      reachedAny: i,
      reachedMax: function (e) {
        return e > t;
      },
      reachedMin: function (t) {
        return t < e;
      },
      removeOffset: function (e) {
        if (n) {
          return e - n * Math.ceil((e - t) / n);
        } else {
          return e;
        }
      }
    };
  }
  function w(e) {
    let t = e;
    function n(e) {
      if (l(e)) {
        return e;
      } else {
        return e.get();
      }
    }
    return {
      get: function () {
        return t;
      },
      set: function (e) {
        t = n(e);
      },
      add: function (e) {
        t += n(e);
      },
      subtract: function (e) {
        t -= n(e);
      }
    };
  }
  function x(e, t) {
    let n = e.scroll === "x" ? function (e) {
      return `translate3d(${e}px,0px,0px)`;
    } : function (e) {
      return `translate3d(0px,${e}px,0px)`;
    };
    let i = t.style;
    let r = null;
    let a = false;
    return {
      clear: function () {
        if (!a) {
          i.transform = "";
          if (!t.getAttribute("style")) {
            t.removeAttribute("style");
          }
        }
      },
      to: function (t) {
        if (a) {
          return;
        }
        let o = Math.round(e.direction(t) * 100) / 100;
        if (o !== r) {
          i.transform = n(o);
          r = o;
        }
      },
      toggleActive: function (e) {
        a = !e;
      }
    };
  }
  let C = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: false,
    dragThreshold: 10,
    loop: false,
    skipSnaps: false,
    duration: 25,
    startIndex: 0,
    active: true,
    watchDrag: true,
    watchResize: true,
    watchSlides: true,
    watchFocus: true
  };
  function k(e, t, n) {
    let i;
    let r;
    let a;
    let o;
    let S;
    let E = e.ownerDocument;
    let T = E.defaultView;
    let j = function (e) {
      function t(e, t) {
        return function e(t, n) {
          return [t, n].reduce((t, n) => {
            v(n).forEach(i => {
              let r = t[i];
              let a = n[i];
              let o = u(r) && u(a);
              t[i] = o ? e(r, a) : a;
            });
            return t;
          }, {});
        }(e, t || {});
      }
      return {
        mergeOptions: t,
        optionsAtMedia: function (n) {
          let i = n.breakpoints || {};
          let r = v(i).filter(t => e.matchMedia(t).matches).map(e => i[e]).reduce((e, n) => t(e, n), {});
          return t(n, r);
        },
        optionsMediaQueries: function (t) {
          return t.map(e => v(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia);
        }
      };
    }(T);
    S = [];
    let P = {
      init: function (e, t) {
        (S = t.filter(({
          options: e
        }) => j.optionsAtMedia(e).active !== false)).forEach(t => t.init(e, j));
        return t.reduce((e, t) => Object.assign(e, {
          [t.name]: t
        }), {});
      },
      destroy: function () {
        S = S.filter(e => e.destroy());
      }
    };
    let N = b();
    let R = function () {
      let e;
      let t = {};
      let n = {
        init: function (t) {
          e = t;
        },
        emit: function (i) {
          (t[i] || []).forEach(t => t(e, i));
          return n;
        },
        off: function (e, i) {
          t[e] = (t[e] || []).filter(e => e !== i);
          return n;
        },
        on: function (e, i) {
          t[e] = (t[e] || []).concat([i]);
          return n;
        },
        clear: function () {
          t = {};
        }
      };
      return n;
    }();
    let {
      mergeOptions: I,
      optionsAtMedia: O,
      optionsMediaQueries: M
    } = j;
    let {
      on: D,
      off: A,
      emit: $
    } = R;
    let L = false;
    let F = I(C, k.globalOptions);
    let Z = I(F);
    let W = [];
    function z(t, n) {
      if (!L) {
        Z = O(F = I(F, t));
        W = n || W;
        (function () {
          let {
            container: t,
            slides: n
          } = Z;
          a = (s(t) ? e.querySelector(t) : t) || e.children[0];
          let i = s(n) ? a.querySelectorAll(n) : n;
          o = [].slice.call(i || a.children);
        })();
        i = function t(n) {
          let i = function (e, t, n, i, r, a, o) {
            let u;
            let C;
            let {
              align: k,
              axis: S,
              direction: E,
              startIndex: T,
              loop: j,
              duration: P,
              dragFree: N,
              dragThreshold: R,
              inViewThreshold: I,
              slidesToScroll: O,
              skipSnaps: M,
              containScroll: D,
              watchResize: A,
              watchSlides: $,
              watchDrag: L,
              watchFocus: F
            } = a;
            let Z = {
              measure: function (e) {
                let {
                  offsetTop: t,
                  offsetLeft: n,
                  offsetWidth: i,
                  offsetHeight: r
                } = e;
                return {
                  top: t,
                  right: n + i,
                  bottom: t + r,
                  left: n,
                  width: i,
                  height: r
                };
              }
            };
            let W = Z.measure(t);
            let z = n.map(Z.measure);
            let B = function (e, t) {
              let n = t === "rtl";
              let i = e === "y";
              let r = !i && n ? -1 : 1;
              return {
                scroll: i ? "y" : "x",
                cross: i ? "x" : "y",
                startEdge: i ? "top" : n ? "right" : "left",
                endEdge: i ? "bottom" : n ? "left" : "right",
                measureSize: function (e) {
                  let {
                    height: t,
                    width: n
                  } = e;
                  if (i) {
                    return t;
                  } else {
                    return n;
                  }
                },
                direction: function (e) {
                  return e * r;
                }
              };
            }(S, E);
            let U = B.measureSize(W);
            let V = {
              measure: function (e) {
                return e / 100 * U;
              }
            };
            let H = function (e, t) {
              let n = {
                start: function () {
                  return 0;
                },
                center: function (e) {
                  return function (e) {
                    return t - e;
                  }(e) / 2;
                },
                end: i
              };
              function i(e) {
                return t - e;
              }
              return {
                measure: function (i, r) {
                  if (s(e)) {
                    return n[e](i);
                  } else {
                    return e(t, i, r);
                  }
                }
              };
            }(k, U);
            let G = !j && !!D;
            let {
              slideSizes: X,
              slideSizesWithGaps: K,
              startGap: J,
              endGap: q
            } = function (e, t, n, i, r, a) {
              let {
                measureSize: o,
                startEdge: l,
                endEdge: s
              } = e;
              let c = n[0] && r;
              let u = function () {
                if (!c) {
                  return 0;
                }
                let e = n[0];
                return d(t[l] - e[l]);
              }();
              let p = c ? parseFloat(a.getComputedStyle(f(i)).getPropertyValue(`margin-${s}`)) : 0;
              let h = n.map(o);
              let g = n.map((e, t, n) => {
                let i = t === m(n);
                if (t) {
                  if (i) {
                    return h[t] + p;
                  } else {
                    return n[t + 1][l] - e[l];
                  }
                } else {
                  return h[t] + u;
                }
              }).map(d);
              return {
                slideSizes: h,
                slideSizesWithGaps: g,
                startGap: u,
                endGap: p
              };
            }(B, W, z, n, j || !!D, r);
            let Q = function (e, t, n, i, r, a, o, s, c) {
              let {
                startEdge: u,
                endEdge: p,
                direction: g
              } = e;
              let v = l(n);
              return {
                groupSlides: function (e) {
                  if (v) {
                    return h(e).filter(e => e % n == 0).map(t => e.slice(t, t + n));
                  } else if (e.length) {
                    return h(e).reduce((n, l, c) => {
                      let h = f(n) || 0;
                      let v = l === m(e);
                      let _ = r[u] - a[h][u];
                      let b = r[u] - a[l][p];
                      let y = i || h !== 0 ? 0 : g(o);
                      let w = d(b - (!i && v ? g(s) : 0) - (_ + y));
                      if (c && w > t + 2) {
                        n.push(l);
                      }
                      if (v) {
                        n.push(e.length);
                      }
                      return n;
                    }, []).map((t, n, i) => {
                      let r = Math.max(i[n - 1] || 0);
                      return e.slice(r, t);
                    });
                  } else {
                    return [];
                  }
                }
              };
            }(B, U, O, j, W, z, J, q, 0);
            let {
              snaps: Y,
              snapsAligned: ee
            } = function (e, t, n, i, r) {
              let {
                startEdge: a,
                endEdge: o
              } = e;
              let {
                groupSlides: l
              } = r;
              let s = l(i).map(e => f(e)[o] - e[0][a]).map(d).map(t.measure);
              let c = i.map(e => n[a] - e[a]).map(e => -d(e));
              let u = l(c).map(e => e[0]).map((e, t) => e + s[t]);
              return {
                snaps: c,
                snapsAligned: u
              };
            }(B, H, W, z, Q);
            let et = -f(Y) + f(K);
            let {
              snapsContained: en,
              scrollContainLimit: ei
            } = function (e, t, n, i, r) {
              let a = y(-t + e, 0);
              let o = n.map((e, t) => {
                let {
                  min: i,
                  max: r
                } = a;
                let o = a.constrain(e);
                let l = t === m(n);
                if (t) {
                  if (l || function (e, t) {
                    return d(e - t) <= 1;
                  }(i, o)) {
                    return i;
                  } else if (function (e, t) {
                    return d(e - t) <= 1;
                  }(r, o)) {
                    return r;
                  } else {
                    return o;
                  }
                } else {
                  return r;
                }
              }).map(e => parseFloat(e.toFixed(3)));
              let l = function () {
                let e = o[0];
                let t = f(o);
                return y(o.lastIndexOf(e), o.indexOf(t) + 1);
              }();
              function s(e, t) {
                return d(e - t) <= 1;
              }
              return {
                snapsContained: function () {
                  if (t <= e + 2) {
                    return [a.max];
                  }
                  if (i === "keepSnaps") {
                    return o;
                  }
                  let {
                    min: n,
                    max: r
                  } = l;
                  return o.slice(n, r);
                }(),
                scrollContainLimit: l
              };
            }(U, et, ee, D, 2);
            let er = G ? en : ee;
            let {
              limit: ea
            } = function (e, t, n) {
              let i = t[0];
              return {
                limit: y(n ? i - e : f(t), i)
              };
            }(et, er, j);
            let eo = function e(t, n, i) {
              let {
                constrain: r
              } = y(0, t);
              let a = t + 1;
              let o = l(n);
              function l(e) {
                if (i) {
                  return d((a + e) % a);
                } else {
                  return r(e);
                }
              }
              function s() {
                return e(t, o, i);
              }
              let c = {
                get: function () {
                  return o;
                },
                set: function (e) {
                  o = l(e);
                  return c;
                },
                add: function (e) {
                  return s().set(o + e);
                },
                clone: s
              };
              return c;
            }(m(er), T, j);
            let el = eo.clone();
            let es = h(n);
            let ec = ({
              dragHandler: e,
              scrollBody: t,
              scrollBounds: n,
              options: {
                loop: i
              }
            }) => {
              if (!i) {
                n.constrain(e.pointerDown());
              }
              t.seek();
            };
            let eu = ({
              scrollBody: e,
              translate: t,
              location: n,
              offsetLocation: i,
              previousLocation: r,
              scrollLooper: a,
              slideLooper: o,
              dragHandler: l,
              animation: s,
              eventHandler: c,
              scrollBounds: u,
              options: {
                loop: d
              }
            }, p) => {
              let h = e.settled();
              let f = !u.shouldConstrain();
              let m = d ? h : h && f;
              if (m && !l.pointerDown()) {
                s.stop();
                c.emit("settle");
              }
              if (!m) {
                c.emit("scroll");
              }
              let g = n.get() * p + r.get() * (1 - p);
              i.set(g);
              if (d) {
                a.loop(e.direction());
                o.loop();
              }
              t.to(i.get());
            };
            let ed = function (e, t, n, i) {
              let r = b();
              let a = 1000 / 60;
              let o = null;
              let l = 0;
              let s = 0;
              function c(e) {
                if (!s) {
                  return;
                }
                if (!o) {
                  o = e;
                  n();
                  n();
                }
                let r = e - o;
                o = e;
                l += r;
                while (l >= a) {
                  n();
                  l -= a;
                }
                i(l / a);
                s &&= t.requestAnimationFrame(c);
              }
              function u() {
                t.cancelAnimationFrame(s);
                o = null;
                l = 0;
                s = 0;
              }
              return {
                init: function () {
                  r.add(e, "visibilitychange", () => {
                    if (e.hidden) {
                      o = null;
                      l = 0;
                    }
                  });
                },
                destroy: function () {
                  u();
                  r.clear();
                },
                start: function () {
                  s ||= t.requestAnimationFrame(c);
                },
                stop: u,
                update: n,
                render: i
              };
            }(i, r, () => ec(eS), e => eu(eS, e));
            let ep = er[eo.get()];
            let eh = w(ep);
            let ef = w(ep);
            let em = w(ep);
            let eg = w(ep);
            let ev = function (e, t, n, i, r, a) {
              let o = 0;
              let l = 0;
              let s = r;
              let c = 0.68;
              let u = e.get();
              let h = 0;
              function f(e) {
                s = e;
                return g;
              }
              function m(e) {
                c = e;
                return g;
              }
              let g = {
                direction: function () {
                  return l;
                },
                duration: function () {
                  return s;
                },
                velocity: function () {
                  return o;
                },
                seek: function () {
                  let t = i.get() - e.get();
                  let r = 0;
                  if (s) {
                    n.set(e);
                    o += t / s;
                    o *= c;
                    u += o;
                    e.add(o);
                    r = u - h;
                  } else {
                    o = 0;
                    n.set(i);
                    e.set(i);
                    r = t;
                  }
                  l = p(r);
                  h = u;
                  return g;
                },
                settled: function () {
                  return d(i.get() - t.get()) < 0.001;
                },
                useBaseFriction: function () {
                  return m(0.68);
                },
                useBaseDuration: function () {
                  return f(r);
                },
                useFriction: m,
                useDuration: f
              };
              return g;
            }(eh, em, ef, eg, P, 0.68);
            let e_ = function (e, t, n, i, r) {
              let {
                reachedAny: a,
                removeOffset: o,
                constrain: l
              } = i;
              function s(e) {
                return e.concat().sort((e, t) => d(e) - d(t))[0];
              }
              function c(t, i) {
                let r = [t, t + n, t - n];
                if (!e) {
                  return t;
                }
                if (!i) {
                  return s(r);
                }
                let a = r.filter(e => p(e) === i);
                if (a.length) {
                  return s(a);
                } else {
                  return f(r) - n;
                }
              }
              return {
                byDistance: function (n, i) {
                  let s = r.get() + n;
                  let {
                    index: u,
                    distance: p
                  } = function (n) {
                    let i = e ? o(n) : l(n);
                    let {
                      index: r
                    } = t.map((e, t) => ({
                      diff: c(e - i, 0),
                      index: t
                    })).sort((e, t) => d(e.diff) - d(t.diff))[0];
                    return {
                      index: r,
                      distance: i
                    };
                  }(s);
                  let h = !e && a(s);
                  if (!i || h) {
                    return {
                      index: u,
                      distance: n
                    };
                  }
                  let f = n + c(t[u] - p, 0);
                  return {
                    index: u,
                    distance: f
                  };
                },
                byIndex: function (e, n) {
                  let i = c(t[e] - r.get(), n);
                  return {
                    index: e,
                    distance: i
                  };
                },
                shortcut: c
              };
            }(j, er, et, ea, eg);
            let eb = function (e, t, n, i, r, a, o) {
              function l(r) {
                let l = r.distance;
                let s = r.index !== t.get();
                a.add(l);
                if (l) {
                  if (i.duration()) {
                    e.start();
                  } else {
                    e.update();
                    e.render(1);
                    e.update();
                  }
                }
                if (s) {
                  n.set(t.get());
                  t.set(r.index);
                  o.emit("select");
                }
              }
              return {
                distance: function (e, t) {
                  l(r.byDistance(e, t));
                },
                index: function (e, n) {
                  let i = t.clone().set(e);
                  l(r.byIndex(i.get(), n));
                }
              };
            }(ed, eo, el, ev, e_, eg, o);
            let ey = function (e) {
              let {
                max: t,
                length: n
              } = e;
              return {
                get: function (e) {
                  if (n) {
                    return -((e - t) / n);
                  } else {
                    return 0;
                  }
                }
              };
            }(ea);
            let ew = b();
            let ex = function (e, t, n, i) {
              let r;
              let a = {};
              let o = null;
              let l = null;
              let s = false;
              return {
                init: function () {
                  r = new IntersectionObserver(e => {
                    if (!s) {
                      e.forEach(e => {
                        a[t.indexOf(e.target)] = e;
                      });
                      o = null;
                      l = null;
                      n.emit("slidesInView");
                    }
                  }, {
                    root: e.parentElement,
                    threshold: i
                  });
                  t.forEach(e => r.observe(e));
                },
                destroy: function () {
                  if (r) {
                    r.disconnect();
                  }
                  s = true;
                },
                get: function (e = true) {
                  if (e && o) {
                    return o;
                  }
                  if (!e && l) {
                    return l;
                  }
                  let t = v(a).reduce((t, n) => {
                    let i = parseInt(n);
                    let {
                      isIntersecting: r
                    } = a[i];
                    if (e && r || !e && !r) {
                      t.push(i);
                    }
                    return t;
                  }, []);
                  if (e) {
                    o = t;
                  }
                  if (!e) {
                    l = t;
                  }
                  return t;
                }
              };
            }(t, n, o, I);
            let {
              slideRegistry: eC
            } = function (e, t, n, i, r, a) {
              let {
                groupSlides: o
              } = r;
              let {
                min: l,
                max: s
              } = i;
              return {
                slideRegistry: function () {
                  let i = o(a);
                  if (n.length === 1) {
                    return [a];
                  } else if (e && t !== "keepSnaps") {
                    return i.slice(l, s).map((e, t, n) => {
                      let i = t === m(n);
                      if (t) {
                        if (i) {
                          return g(m(a) - f(n)[0] + 1, f(n)[0]);
                        } else {
                          return e;
                        }
                      } else {
                        return g(f(n[0]) + 1);
                      }
                    });
                  } else {
                    return i;
                  }
                }()
              };
            }(G, D, er, ei, Q, es);
            let ek = function (e, t, n, i, r, a, o, s) {
              let u = {
                passive: true,
                capture: true
              };
              let d = 0;
              function p(e) {
                if (e.code === "Tab") {
                  d = new Date().getTime();
                }
              }
              return {
                init: function (h) {
                  if (s) {
                    a.add(document, "keydown", p, false);
                    t.forEach((t, p) => {
                      a.add(t, "focus", t => {
                        if (c(s) || s(h, t)) {
                          (function (t) {
                            if (new Date().getTime() - d > 10) {
                              return;
                            }
                            o.emit("slideFocusStart");
                            e.scrollLeft = 0;
                            let a = n.findIndex(e => e.includes(t));
                            if (l(a)) {
                              r.useDuration(0);
                              i.index(a, 0);
                              o.emit("slideFocus");
                            }
                          })(p);
                        }
                      }, u);
                    });
                  }
                }
              };
            }(e, n, eC, eb, ev, ew, o, F);
            let eS = {
              ownerDocument: i,
              ownerWindow: r,
              eventHandler: o,
              containerRect: W,
              slideRects: z,
              animation: ed,
              axis: B,
              dragHandler: function (e, t, n, i, r, a, o, l, s, u, h, f, m, g, v, w, x, C, k) {
                let {
                  cross: S,
                  direction: E
                } = e;
                let T = ["INPUT", "SELECT", "TEXTAREA"];
                let j = {
                  passive: false
                };
                let P = b();
                let N = b();
                let R = y(50, 225).constrain(g.measure(20));
                let I = {
                  mouse: 300,
                  touch: 400
                };
                let O = {
                  mouse: 500,
                  touch: 600
                };
                let M = v ? 43 : 25;
                let D = false;
                let A = 0;
                let $ = 0;
                let L = false;
                let F = false;
                let Z = false;
                let W = false;
                function z(e) {
                  if (!_(e, i) && e.touches.length >= 2) {
                    return B(e);
                  }
                  let t = a.readPoint(e);
                  let n = a.readPoint(e, S);
                  let o = d(t - A);
                  let s = d(n - $);
                  if (!F && !W && (!e.cancelable || !(F = o > s))) {
                    return B(e);
                  }
                  let c = a.pointerMove(e);
                  if (o > w) {
                    Z = true;
                  }
                  u.useFriction(0.3).useDuration(0.75);
                  l.start();
                  r.add(E(c));
                  e.preventDefault();
                }
                function B(e) {
                  let t = h.byDistance(0, false).index !== f.get();
                  let n = a.pointerUp(e) * (v ? O : I)[W ? "mouse" : "touch"];
                  let i = function (e, t) {
                    let n = f.add(p(e) * -1);
                    let i = h.byDistance(e, !v).distance;
                    if (v || d(e) < R) {
                      return i;
                    } else if (x && t) {
                      return i * 0.5;
                    } else {
                      return h.byIndex(n.get(), 0).distance;
                    }
                  }(E(n), t);
                  let r = function (e, t) {
                    var n;
                    var i;
                    if (e === 0 || t === 0 || d(e) <= d(t)) {
                      return 0;
                    }
                    n = d(e);
                    i = d(t);
                    let r = d(n - i);
                    return d(r / e);
                  }(n, i);
                  F = false;
                  L = false;
                  N.clear();
                  u.useDuration(M - r * 10).useFriction(0.68 + r / 50);
                  s.distance(i, !v);
                  W = false;
                  m.emit("pointerUp");
                }
                function U(e) {
                  if (Z) {
                    e.stopPropagation();
                    e.preventDefault();
                    Z = false;
                  }
                }
                return {
                  init: function (e) {
                    if (k) {
                      P.add(t, "dragstart", e => e.preventDefault(), j).add(t, "touchmove", () => undefined, j).add(t, "touchend", () => undefined).add(t, "touchstart", l).add(t, "mousedown", l).add(t, "touchcancel", B).add(t, "contextmenu", B).add(t, "click", U, true);
                    }
                    function l(l) {
                      if (c(k) || k(e, l)) {
                        (function (e) {
                          let l = _(e, i);
                          W = l;
                          Z = v && l && !e.buttons && D;
                          D = d(r.get() - o.get()) >= 2;
                          if ((!l || e.button === 0) && !function (e) {
                            let t = e.nodeName || "";
                            return T.includes(t);
                          }(e.target)) {
                            L = true;
                            a.pointerDown(e);
                            u.useFriction(0).useDuration(0);
                            r.set(o);
                            (function () {
                              let e = W ? n : t;
                              N.add(e, "touchmove", z, j).add(e, "touchend", B).add(e, "mousemove", z, j).add(e, "mouseup", B);
                            })();
                            A = a.readPoint(e);
                            $ = a.readPoint(e, S);
                            m.emit("pointerDown");
                          }
                        })(l);
                      }
                    }
                  },
                  destroy: function () {
                    P.clear();
                    N.clear();
                  },
                  pointerDown: function () {
                    return L;
                  }
                };
              }(B, e, i, r, eg, function (e, t) {
                let n;
                let i;
                function r(e) {
                  return e.timeStamp;
                }
                function a(n, i) {
                  let r = i || e.scroll;
                  let a = `client${r === "x" ? "X" : "Y"}`;
                  return (_(n, t) ? n : n.touches[0])[a];
                }
                return {
                  pointerDown: function (e) {
                    n = e;
                    i = e;
                    return a(e);
                  },
                  pointerMove: function (e) {
                    let t = a(e) - a(i);
                    let o = r(e) - r(n) > 170;
                    i = e;
                    if (o) {
                      n = e;
                    }
                    return t;
                  },
                  pointerUp: function (e) {
                    if (!n || !i) {
                      return 0;
                    }
                    let t = a(i) - a(n);
                    let o = r(e) - r(n);
                    let l = r(e) - r(i) > 170;
                    let s = t / o;
                    if (o && !l && d(s) > 0.1) {
                      return s;
                    } else {
                      return 0;
                    }
                  },
                  readPoint: a
                };
              }(B, r), eh, ed, eb, ev, e_, eo, o, V, N, R, M, 0, L),
              eventStore: ew,
              percentOfView: V,
              index: eo,
              indexPrevious: el,
              limit: ea,
              location: eh,
              offsetLocation: em,
              previousLocation: ef,
              options: a,
              resizeHandler: function (e, t, n, i, r, a, o) {
                let l;
                let s;
                let u = [e].concat(i);
                let p = [];
                let h = false;
                function f(e) {
                  return r.measureSize(o.measure(e));
                }
                return {
                  init: function (r) {
                    if (a) {
                      s = f(e);
                      p = i.map(f);
                      l = new ResizeObserver(n => {
                        if (c(a) || a(r, n)) {
                          (function (n) {
                            for (let a of n) {
                              if (h) {
                                return;
                              }
                              let n = a.target === e;
                              let o = i.indexOf(a.target);
                              let l = n ? s : p[o];
                              if (d(f(n ? e : i[o]) - l) >= 0.5) {
                                r.reInit();
                                t.emit("resize");
                                break;
                              }
                            }
                          })(n);
                        }
                      });
                      n.requestAnimationFrame(() => {
                        u.forEach(e => l.observe(e));
                      });
                    }
                  },
                  destroy: function () {
                    h = true;
                    if (l) {
                      l.disconnect();
                    }
                  }
                };
              }(t, o, r, n, B, A, Z),
              scrollBody: ev,
              scrollBounds: function (e, t, n, i, r) {
                let a = r.measure(10);
                let o = r.measure(50);
                let l = y(0.1, 0.99);
                let s = false;
                function c() {
                  return !s && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get());
                }
                return {
                  shouldConstrain: c,
                  constrain: function (r) {
                    if (!c()) {
                      return;
                    }
                    let s = e.reachedMin(t.get()) ? "min" : "max";
                    let u = d(e[s] - t.get());
                    let p = n.get() - t.get();
                    let h = l.constrain(u / o);
                    n.subtract(p * h);
                    if (!r && d(p) < a) {
                      n.set(e.constrain(n.get()));
                      i.useDuration(25).useBaseFriction();
                    }
                  },
                  toggleActive: function (e) {
                    s = !e;
                  }
                };
              }(ea, em, eg, ev, V),
              scrollLooper: function (e, t, n, i) {
                let {
                  reachedMin: r,
                  reachedMax: a
                } = y(t.min + 0.1, t.max + 0.1);
                return {
                  loop: function (t) {
                    if (!(t === 1 ? a(n.get()) : t === -1 && r(n.get()))) {
                      return;
                    }
                    let o = t * -1 * e;
                    i.forEach(e => e.add(o));
                  }
                };
              }(et, ea, em, [eh, em, ef, eg]),
              scrollProgress: ey,
              scrollSnapList: er.map(ey.get),
              scrollSnaps: er,
              scrollTarget: e_,
              scrollTo: eb,
              slideLooper: function (e, t, n, i, r, a, o, l, s) {
                let c = h(r);
                let u = h(r).reverse();
                let d = m(f(u, o[0]), n, false).concat(m(f(c, t - o[0] - 1), -n, true));
                function p(e, t) {
                  return e.reduce((e, t) => e - r[t], t);
                }
                function f(e, t) {
                  return e.reduce((e, n) => p(e, t) > 0 ? e.concat([n]) : e, []);
                }
                function m(r, o, c) {
                  let u = a.map((e, n) => ({
                    start: e - i[n] + 0.5 + o,
                    end: e + t - 0.5 + o
                  }));
                  return r.map(t => {
                    let i = c ? 0 : -n;
                    let r = c ? n : 0;
                    let a = u[t][c ? "end" : "start"];
                    return {
                      index: t,
                      loopPoint: a,
                      slideLocation: w(-1),
                      translate: x(e, s[t]),
                      target: () => l.get() > a ? i : r
                    };
                  });
                }
                return {
                  canLoop: function () {
                    return d.every(({
                      index: e
                    }) => p(c.filter(t => t !== e), t) <= 0.1);
                  },
                  clear: function () {
                    d.forEach(e => e.translate.clear());
                  },
                  loop: function () {
                    d.forEach(e => {
                      let {
                        target: t,
                        translate: n,
                        slideLocation: i
                      } = e;
                      let r = t();
                      if (r !== i.get()) {
                        n.to(r);
                        i.set(r);
                      }
                    });
                  },
                  loopPoints: d
                };
              }(B, U, et, X, K, Y, er, em, n),
              slideFocus: ek,
              slidesHandler: (C = false, {
                init: function (e) {
                  if ($) {
                    (u = new MutationObserver(t => {
                      if (!C && (c($) || $(e, t))) {
                        (function (t) {
                          for (let n of t) {
                            if (n.type === "childList") {
                              e.reInit();
                              o.emit("slidesChanged");
                              break;
                            }
                          }
                        })(t);
                      }
                    })).observe(t, {
                      childList: true
                    });
                  }
                },
                destroy: function () {
                  if (u) {
                    u.disconnect();
                  }
                  C = true;
                }
              }),
              slidesInView: ex,
              slideIndexes: es,
              slideRegistry: eC,
              slidesToScroll: Q,
              target: eg,
              translate: x(B, t)
            };
            return eS;
          }(e, a, o, E, T, n, R);
          if (n.loop && !i.slideLooper.canLoop()) {
            return t(Object.assign({}, n, {
              loop: false
            }));
          } else {
            return i;
          }
        }(Z);
        M([F, ...W.map(({
          options: e
        }) => e)]).forEach(e => N.add(e, "change", B));
        if (Z.active) {
          i.translate.to(i.location.get());
          i.animation.init();
          i.slidesInView.init();
          i.slideFocus.init(G);
          i.eventHandler.init(G);
          i.resizeHandler.init(G);
          i.slidesHandler.init(G);
          if (i.options.loop) {
            i.slideLooper.loop();
          }
          if (a.offsetParent && o.length) {
            i.dragHandler.init(G);
          }
          r = P.init(G, W);
        }
      }
    }
    function B(e, t) {
      let n = H();
      U();
      z(I({
        startIndex: n
      }, e), t);
      R.emit("reInit");
    }
    function U() {
      i.dragHandler.destroy();
      i.eventStore.clear();
      i.translate.clear();
      i.slideLooper.clear();
      i.resizeHandler.destroy();
      i.slidesHandler.destroy();
      i.slidesInView.destroy();
      i.animation.destroy();
      P.destroy();
      N.clear();
    }
    function V(e, t, n) {
      if (Z.active && !L) {
        i.scrollBody.useBaseFriction().useDuration(t === true ? 0 : Z.duration);
        i.scrollTo.index(e, n || 0);
      }
    }
    function H() {
      return i.index.get();
    }
    let G = {
      canScrollNext: function () {
        return i.index.add(1).get() !== H();
      },
      canScrollPrev: function () {
        return i.index.add(-1).get() !== H();
      },
      containerNode: function () {
        return a;
      },
      internalEngine: function () {
        return i;
      },
      destroy: function () {
        if (!L) {
          L = true;
          N.clear();
          U();
          R.emit("destroy");
          R.clear();
        }
      },
      off: A,
      on: D,
      emit: $,
      plugins: function () {
        return r;
      },
      previousScrollSnap: function () {
        return i.indexPrevious.get();
      },
      reInit: B,
      rootNode: function () {
        return e;
      },
      scrollNext: function (e) {
        V(i.index.add(1).get(), e, -1);
      },
      scrollPrev: function (e) {
        V(i.index.add(-1).get(), e, 1);
      },
      scrollProgress: function () {
        return i.scrollProgress.get(i.location.get());
      },
      scrollSnapList: function () {
        return i.scrollSnapList;
      },
      scrollTo: V,
      selectedScrollSnap: H,
      slideNodes: function () {
        return o;
      },
      slidesInView: function () {
        return i.slidesInView.get();
      },
      slidesNotInView: function () {
        return i.slidesInView.get(false);
      }
    };
    z(t, n);
    setTimeout(() => R.emit("init"), 0);
    return G;
  }
  function S(e = {}, t = []) {
    let n = reactCoreLibraryReexport.useRef(e);
    let r = reactCoreLibraryReexport.useRef(t);
    let [l, s] = reactCoreLibraryReexport.useState();
    let [c, u] = reactCoreLibraryReexport.useState();
    let d = reactCoreLibraryReexport.useCallback(() => {
      if (l) {
        l.reInit(n.current, r.current);
      }
    }, [l]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!a(n.current, e)) {
        n.current = e;
        d();
      }
    }, [e, d]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!function (e, t) {
        if (e.length !== t.length) {
          return false;
        }
        let n = o(e);
        let i = o(t);
        return n.every((e, t) => a(e, i[t]));
      }(r.current, t)) {
        r.current = t;
        d();
      }
    }, [t, d]);
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof window != "undefined" && window.document && window.document.createElement && c) {
        k.globalOptions = S.globalOptions;
        let e = k(c, n.current, r.current);
        s(e);
        return () => e.destroy();
      }
      s(undefined);
    }, [c, s]);
    return [u, l];
  }
  k.globalOptions = undefined;
  S.globalOptions = undefined;
  require.d(exports, {
    useCarousel: function () {
      return S;
    }
  });
}