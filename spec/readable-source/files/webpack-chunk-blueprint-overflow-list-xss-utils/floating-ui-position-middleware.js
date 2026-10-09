// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cp' to 'hideMiddleware'
// - Renamed export 'Qo' to 'inlineMiddleware'
// - Renamed export 'RR' to 'flipMiddleware'
// - Renamed export 'cv' to 'offsetMiddleware'
// - Renamed export 'dp' to 'sizeMiddleware'
// - Renamed export 'dr' to 'innerMiddleware'
// - Renamed export 'oo' to 'computePosition'
// - Renamed export 'uY' to 'shiftMiddleware'
// - Renamed export 'x7' to 'arrowMiddleware'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 491393
         */
module.exports = function (module, exports, require) {
  var floatingUiPositionUtils = require("floating-ui-position-utils") /*id: 857700*/;
  function i(e, t, n) {
    let i;
    let {
      reference: o,
      floating: a
    } = e;
    let s = floatingUiPositionUtils.getAxisFromPlacement(t);
    let u = floatingUiPositionUtils.getOppositeAxisFromPlacement(t);
    let c = floatingUiPositionUtils.getAxisLength(u);
    let l = floatingUiPositionUtils.getBasePlacement(t);
    let f = s === "y";
    let h = o.x + o.width / 2 - a.width / 2;
    let d = o.y + o.height / 2 - a.height / 2;
    let p = o[c] / 2 - a[c] / 2;
    switch (l) {
      case "top":
        i = {
          x: h,
          y: o.y - a.height
        };
        break;
      case "bottom":
        i = {
          x: h,
          y: o.y + o.height
        };
        break;
      case "right":
        i = {
          x: o.x + o.width,
          y: d
        };
        break;
      case "left":
        i = {
          x: o.x - a.width,
          y: d
        };
        break;
      default:
        i = {
          x: o.x,
          y: o.y
        };
    }
    switch (floatingUiPositionUtils.getAlignment(t)) {
      case "start":
        i[u] -= p * (n && f ? -1 : 1);
        break;
      case "end":
        i[u] += p * (n && f ? -1 : 1);
    }
    return i;
  }
  let o = async (e, t, n) => {
    let {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: a = [],
      platform: s
    } = n;
    let u = a.filter(Boolean);
    let c = await (s.isRTL == null ? undefined : s.isRTL(t));
    let l = await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    });
    let {
      x: f,
      y: h
    } = i(l, r, c);
    let d = r;
    let p = {};
    let g = 0;
    for (let n = 0; n < u.length; n++) {
      let {
        name: a,
        fn: v
      } = u[n];
      let {
        x: m,
        y: y,
        data: b,
        reset: _
      } = await v({
        x: f,
        y: h,
        initialPlacement: r,
        placement: d,
        strategy: o,
        middlewareData: p,
        rects: l,
        platform: s,
        elements: {
          reference: e,
          floating: t
        }
      });
      f = m ?? f;
      h = y ?? h;
      p = {
        ...p,
        [a]: {
          ...p[a],
          ...b
        }
      };
      if (_ && g <= 50) {
        g++;
        if (typeof _ == "object") {
          if (_.placement) {
            d = _.placement;
          }
          if (_.rects) {
            l = _.rects === true ? await s.getElementRects({
              reference: e,
              floating: t,
              strategy: o
            }) : _.rects;
          }
          ({
            x: f,
            y: h
          } = i(l, d, c));
        }
        n = -1;
      }
    }
    return {
      x: f,
      y: h,
      placement: d,
      strategy: o,
      middlewareData: p
    };
  };
  async function a(e, t) {
    var n;
    if (t === undefined) {
      t = {};
    }
    let {
      x: i,
      y: o,
      platform: a,
      rects: s,
      elements: u,
      strategy: c
    } = e;
    let {
      boundary: l = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: h = "floating",
      altBoundary: d = false,
      padding: p = 0
    } = floatingUiPositionUtils.evaluate(t, e);
    let g = floatingUiPositionUtils.getPaddingObject(p);
    let v = u[d ? h === "floating" ? "reference" : "floating" : h];
    let m = floatingUiPositionUtils.getRectFromObject(await a.getClippingRect({
      element: (n = await (a.isElement == null ? undefined : a.isElement(v))) == null || n ? v : v.contextElement || (await (a.getDocumentElement == null ? undefined : a.getDocumentElement(u.floating))),
      boundary: l,
      rootBoundary: f,
      strategy: c
    }));
    let y = h === "floating" ? {
      x: i,
      y: o,
      width: s.floating.width,
      height: s.floating.height
    } : s.reference;
    let b = await (a.getOffsetParent == null ? undefined : a.getOffsetParent(u.floating));
    let _ = (await (a.isElement == null ? undefined : a.isElement(b))) && (await (a.getScale == null ? undefined : a.getScale(b))) || {
      x: 1,
      y: 1
    };
    let w = floatingUiPositionUtils.getRectFromObject(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: u,
      rect: y,
      offsetParent: b,
      strategy: c
    }) : y);
    return {
      top: (m.top - w.top + g.top) / _.y,
      bottom: (w.bottom - m.bottom + g.bottom) / _.y,
      left: (m.left - w.left + g.left) / _.x,
      right: (w.right - m.right + g.right) / _.x
    };
  }
  let s = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
      let {
        x: n,
        y: i,
        placement: o,
        rects: a,
        platform: s,
        elements: u,
        middlewareData: c
      } = t;
      let {
        element: l,
        padding: f = 0
      } = floatingUiPositionUtils.evaluate(e, t) || {};
      if (l == null) {
        return {};
      }
      let h = floatingUiPositionUtils.getPaddingObject(f);
      let d = {
        x: n,
        y: i
      };
      let p = floatingUiPositionUtils.getOppositeAxisFromPlacement(o);
      let g = floatingUiPositionUtils.getAxisLength(p);
      let v = await s.getDimensions(l);
      let m = p === "y";
      let y = m ? "clientHeight" : "clientWidth";
      let b = a.reference[g] + a.reference[p] - d[p] - a.floating[g];
      let _ = d[p] - a.reference[p];
      let w = await (s.getOffsetParent == null ? undefined : s.getOffsetParent(l));
      let E = w ? w[y] : 0;
      if (!E || !(await (s.isElement == null ? undefined : s.isElement(w)))) {
        E = u.floating[y] || a.floating[g];
      }
      let S = E / 2 - v[g] / 2 - 1;
      let x = floatingUiPositionUtils.min(h[m ? "top" : "left"], S);
      let k = floatingUiPositionUtils.min(h[m ? "bottom" : "right"], S);
      let O = E - v[g] - k;
      let A = E / 2 - v[g] / 2 + (b / 2 - _ / 2);
      let T = floatingUiPositionUtils.clamp(x, A, O);
      let R = !c.arrow && floatingUiPositionUtils.getAlignment(o) != null && A !== T && a.reference[g] / 2 - (A < x ? x : k) - v[g] / 2 < 0;
      let C = R ? A < x ? A - x : A - O : 0;
      return {
        [p]: d[p] + C,
        data: {
          [p]: T,
          centerOffset: A - T - C,
          ...(R && {
            alignmentOffset: C
          })
        },
        reset: R
      };
    }
  });
  let u = function (e = {}) {
    return {
      name: "flip",
      options: e,
      async fn(t) {
        var n;
        var i;
        var o;
        var s;
        var u;
        let {
          placement: c,
          middlewareData: l,
          rects: f,
          initialPlacement: h,
          platform: d,
          elements: p
        } = t;
        let {
          mainAxis: g = true,
          crossAxis: v = true,
          fallbackPlacements: m,
          fallbackStrategy: y = "bestFit",
          fallbackAxisSideDirection: b = "none",
          flipAlignment: _ = true,
          ...w
        } = floatingUiPositionUtils.evaluate(e, t);
        if ((n = l.arrow) != null && n.alignmentOffset) {
          return {};
        }
        let E = floatingUiPositionUtils.getBasePlacement(c);
        let S = floatingUiPositionUtils.getAxisFromPlacement(h);
        let x = floatingUiPositionUtils.getBasePlacement(h) === h;
        let k = await (d.isRTL == null ? undefined : d.isRTL(p.floating));
        let O = m || (x || !_ ? [floatingUiPositionUtils.getOppositePlacement(h)] : floatingUiPositionUtils.getPlacementOrder(h));
        let A = b !== "none";
        if (!m && A) {
          O.push(...floatingUiPositionUtils.getOppositePlacementPlacements(h, _, b, k));
        }
        let T = [h, ...O];
        let R = await a(t, w);
        let C = [];
        let M = ((i = l.flip) == null ? undefined : i.overflows) || [];
        if (g) {
          C.push(R[E]);
        }
        if (v) {
          let e = floatingUiPositionUtils.getOppositeAlignmentPlacements(c, f, k);
          C.push(R[e[0]], R[e[1]]);
        }
        M = [...M, {
          placement: c,
          overflows: C
        }];
        if (!C.every(e => e <= 0)) {
          let e = (((o = l.flip) == null ? undefined : o.index) || 0) + 1;
          let t = T[e];
          if (t) {
            return {
              data: {
                index: e,
                overflows: M
              },
              reset: {
                placement: t
              }
            };
          }
          let n = (s = M.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) == null ? undefined : s.placement;
          if (!n) {
            switch (y) {
              case "bestFit":
                {
                  let e = (u = M.filter(e => {
                    if (A) {
                      let t = floatingUiPositionUtils.getAxisFromPlacement(e.placement);
                      return t === S || t === "y";
                    }
                    return true;
                  }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) == null ? undefined : u[0];
                  if (e) {
                    n = e;
                  }
                  break;
                }
              case "initialPlacement":
                n = h;
            }
          }
          if (c !== n) {
            return {
              reset: {
                placement: n
              }
            };
          }
        }
        return {};
      }
    };
  };
  function c(e, t) {
    return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width
    };
  }
  function l(e) {
    return floatingUiPositionUtils.basePlacements.some(t => e[t] >= 0);
  }
  let f = function (e = {}) {
    return {
      name: "hide",
      options: e,
      async fn(t) {
        let {
          rects: n
        } = t;
        let {
          strategy: i = "referenceHidden",
          ...o
        } = floatingUiPositionUtils.evaluate(e, t);
        switch (i) {
          case "referenceHidden":
            {
              let e = c(await a(t, {
                ...o,
                elementContext: "reference"
              }), n.reference);
              return {
                data: {
                  referenceHiddenOffsets: e,
                  referenceHidden: l(e)
                }
              };
            }
          case "escaped":
            {
              let e = c(await a(t, {
                ...o,
                altBoundary: true
              }), n.floating);
              return {
                data: {
                  escapedOffsets: e,
                  escaped: l(e)
                }
              };
            }
          default:
            return {};
        }
      }
    };
  };
  function h(e) {
    let t = floatingUiPositionUtils.min(...e.map(e => e.left));
    let n = floatingUiPositionUtils.min(...e.map(e => e.top));
    return {
      x: t,
      y: n,
      width: floatingUiPositionUtils.max(...e.map(e => e.right)) - t,
      height: floatingUiPositionUtils.max(...e.map(e => e.bottom)) - n
    };
  }
  let d = function (e = {}) {
    return {
      name: "inline",
      options: e,
      async fn(t) {
        let {
          placement: n,
          elements: i,
          rects: o,
          platform: a,
          strategy: s
        } = t;
        let {
          padding: u = 2,
          x: c,
          y: l
        } = floatingUiPositionUtils.evaluate(e, t);
        let f = Array.from((await (a.getClientRects == null ? undefined : a.getClientRects(i.reference))) || []);
        let d = function (e) {
          let t = e.slice().sort((e, t) => e.y - t.y);
          let n = [];
          let i = null;
          for (let e = 0; e < t.length; e++) {
            let r = t[e];
            if (!i || r.y - i.y > i.height / 2) {
              n.push([r]);
            } else {
              n[n.length - 1].push(r);
            }
            i = r;
          }
          return n.map(e => floatingUiPositionUtils.getRectFromObject(h(e)));
        }(f);
        let p = floatingUiPositionUtils.getRectFromObject(h(f));
        let g = floatingUiPositionUtils.getPaddingObject(u);
        let v = await a.getElementRects({
          reference: {
            getBoundingClientRect: function () {
              if (d.length === 2 && d[0].left > d[1].right && c != null && l != null) {
                return d.find(e => c > e.left - g.left && c < e.right + g.right && l > e.top - g.top && l < e.bottom + g.bottom) || p;
              }
              if (d.length >= 2) {
                if (floatingUiPositionUtils.getAxisFromPlacement(n) === "y") {
                  let e = d[0];
                  let t = d[d.length - 1];
                  let i = floatingUiPositionUtils.getBasePlacement(n) === "top";
                  let o = e.top;
                  let a = t.bottom;
                  let s = i ? e.left : t.left;
                  let u = i ? e.right : t.right;
                  return {
                    top: o,
                    bottom: a,
                    left: s,
                    right: u,
                    width: u - s,
                    height: a - o,
                    x: s,
                    y: o
                  };
                }
                let e = floatingUiPositionUtils.getBasePlacement(n) === "left";
                let t = floatingUiPositionUtils.max(...d.map(e => e.right));
                let i = floatingUiPositionUtils.min(...d.map(e => e.left));
                let o = d.filter(n => e ? n.left === i : n.right === t);
                let a = o[0].top;
                let s = o[o.length - 1].bottom;
                return {
                  top: a,
                  bottom: s,
                  left: i,
                  right: t,
                  width: t - i,
                  height: s - a,
                  x: i,
                  y: a
                };
              }
              return p;
            }
          },
          floating: i.floating,
          strategy: s
        });
        if (o.reference.x !== v.reference.x || o.reference.y !== v.reference.y || o.reference.width !== v.reference.width || o.reference.height !== v.reference.height) {
          return {
            reset: {
              rects: v
            }
          };
        } else {
          return {};
        }
      }
    };
  };
  async function p(e, t) {
    let {
      placement: n,
      platform: i,
      elements: o
    } = e;
    let a = await (i.isRTL == null ? undefined : i.isRTL(o.floating));
    let s = floatingUiPositionUtils.getBasePlacement(n);
    let u = floatingUiPositionUtils.getAlignment(n);
    let c = floatingUiPositionUtils.getAxisFromPlacement(n) === "y";
    let l = ["left", "top"].includes(s) ? -1 : 1;
    let f = a && c ? -1 : 1;
    let h = floatingUiPositionUtils.evaluate(t, e);
    let {
      mainAxis: d,
      crossAxis: p,
      alignmentAxis: g
    } = typeof h == "number" ? {
      mainAxis: h,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: h.mainAxis || 0,
      crossAxis: h.crossAxis || 0,
      alignmentAxis: h.alignmentAxis
    };
    if (u && typeof g == "number") {
      p = u === "end" ? g * -1 : g;
    }
    if (c) {
      return {
        x: p * f,
        y: d * l
      };
    } else {
      return {
        x: d * l,
        y: p * f
      };
    }
  }
  let g = function (e = 0) {
    return {
      name: "offset",
      options: e,
      async fn(t) {
        var n;
        var r;
        let {
          x: i,
          y: o,
          placement: a,
          middlewareData: s
        } = t;
        let u = await p(t, e);
        if (a === ((n = s.offset) == null ? undefined : n.placement) && (r = s.arrow) != null && r.alignmentOffset) {
          return {};
        } else {
          return {
            x: i + u.x,
            y: o + u.y,
            data: {
              ...u,
              placement: a
            }
          };
        }
      }
    };
  };
  let v = function (e = {}) {
    return {
      name: "shift",
      options: e,
      async fn(t) {
        let {
          x: n,
          y: i,
          placement: o
        } = t;
        let {
          mainAxis: s = true,
          crossAxis: u = false,
          limiter: c = {
            fn: e => {
              let {
                x: t,
                y: n
              } = e;
              return {
                x: t,
                y: n
              };
            }
          },
          ...l
        } = floatingUiPositionUtils.evaluate(e, t);
        let f = {
          x: n,
          y: i
        };
        let h = await a(t, l);
        let d = floatingUiPositionUtils.getAxisFromPlacement(floatingUiPositionUtils.getBasePlacement(o));
        let p = floatingUiPositionUtils.getOppositeAxis(d);
        let g = f[p];
        let v = f[d];
        if (s) {
          let e = p === "y" ? "top" : "left";
          let t = p === "y" ? "bottom" : "right";
          let n = g + h[e];
          let i = g - h[t];
          g = floatingUiPositionUtils.clamp(n, g, i);
        }
        if (u) {
          let e = d === "y" ? "top" : "left";
          let t = d === "y" ? "bottom" : "right";
          let n = v + h[e];
          let i = v - h[t];
          v = floatingUiPositionUtils.clamp(n, v, i);
        }
        let m = c.fn({
          ...t,
          [p]: g,
          [d]: v
        });
        return {
          ...m,
          data: {
            x: m.x - n,
            y: m.y - i,
            enabled: {
              [p]: s,
              [d]: u
            }
          }
        };
      }
    };
  };
  let m = function (e = {}) {
    return {
      options: e,
      fn(t) {
        let {
          x: n,
          y: i,
          placement: o,
          rects: a,
          middlewareData: s
        } = t;
        let {
          offset: u = 0,
          mainAxis: c = true,
          crossAxis: l = true
        } = floatingUiPositionUtils.evaluate(e, t);
        let f = {
          x: n,
          y: i
        };
        let h = floatingUiPositionUtils.getAxisFromPlacement(o);
        let d = floatingUiPositionUtils.getOppositeAxis(h);
        let p = f[d];
        let g = f[h];
        let v = floatingUiPositionUtils.evaluate(u, t);
        let m = typeof v == "number" ? {
          mainAxis: v,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...v
        };
        if (c) {
          let e = d === "y" ? "height" : "width";
          let t = a.reference[d] - a.floating[e] + m.mainAxis;
          let n = a.reference[d] + a.reference[e] - m.mainAxis;
          if (p < t) {
            p = t;
          } else if (p > n) {
            p = n;
          }
        }
        if (l) {
          var y;
          var b;
          let e = d === "y" ? "width" : "height";
          let t = ["top", "left"].includes(floatingUiPositionUtils.getBasePlacement(o));
          let n = a.reference[h] - a.floating[e] + (t && ((y = s.offset) == null ? undefined : y[h]) || 0) + (t ? 0 : m.crossAxis);
          let i = a.reference[h] + a.reference[e] + (t ? 0 : ((b = s.offset) == null ? undefined : b[h]) || 0) - (t ? m.crossAxis : 0);
          if (g < n) {
            g = n;
          } else if (g > i) {
            g = i;
          }
        }
        return {
          [d]: p,
          [h]: g
        };
      }
    };
  };
  let y = function (e = {}) {
    return {
      name: "size",
      options: e,
      async fn(t) {
        var n;
        var i;
        let o;
        let s;
        let {
          placement: u,
          rects: c,
          platform: l,
          elements: f
        } = t;
        let {
          apply: h = () => {},
          ...d
        } = floatingUiPositionUtils.evaluate(e, t);
        let p = await a(t, d);
        let g = floatingUiPositionUtils.getBasePlacement(u);
        let v = floatingUiPositionUtils.getAlignment(u);
        let m = floatingUiPositionUtils.getAxisFromPlacement(u) === "y";
        let {
          width: y,
          height: b
        } = c.floating;
        if (g === "top" || g === "bottom") {
          o = g;
          s = v === ((await (l.isRTL == null ? undefined : l.isRTL(f.floating))) ? "start" : "end") ? "left" : "right";
        } else {
          s = g;
          o = v === "end" ? "top" : "bottom";
        }
        let _ = b - p.top - p.bottom;
        let w = y - p.left - p.right;
        let E = floatingUiPositionUtils.min(b - p[o], _);
        let S = floatingUiPositionUtils.min(y - p[s], w);
        let x = !t.middlewareData.shift;
        let k = E;
        let O = S;
        if ((n = t.middlewareData.shift) != null && n.enabled.x) {
          O = w;
        }
        if ((i = t.middlewareData.shift) != null && i.enabled.y) {
          k = _;
        }
        if (x && !v) {
          let e = floatingUiPositionUtils.max(p.left, 0);
          let t = floatingUiPositionUtils.max(p.right, 0);
          let n = floatingUiPositionUtils.max(p.top, 0);
          let i = floatingUiPositionUtils.max(p.bottom, 0);
          if (m) {
            O = y - (e !== 0 || t !== 0 ? e + t : floatingUiPositionUtils.max(p.left, p.right)) * 2;
          } else {
            k = b - (n !== 0 || i !== 0 ? n + i : floatingUiPositionUtils.max(p.top, p.bottom)) * 2;
          }
        }
        await h({
          ...t,
          availableWidth: O,
          availableHeight: k
        });
        let A = await l.getDimensions(f.floating);
        if (y !== A.width || b !== A.height) {
          return {
            reset: {
              rects: true
            }
          };
        } else {
          return {};
        }
      }
    };
  };
  require.d(exports, {
    hideMiddleware: function () {
      return f;
    },
    inlineMiddleware: function () {
      return d;
    },
    flipMiddleware: function () {
      return u;
    },
    offsetMiddleware: function () {
      return g;
    },
    sizeMiddleware: function () {
      return y;
    },
    innerMiddleware: function () {
      return m;
    },
    computePosition: function () {
      return o;
    },
    shiftMiddleware: function () {
      return v;
    },
    arrowMiddleware: function () {
      return s;
    }
  });
}