// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 227323
         */
module.exports = function (module, exports, require) {
  var e;
  var n;
  var i;
  var r;
  var o = typeof window != "undefined" && window.document.toString().indexOf("HTMLDocument") !== -1;
  (function () {
    if (o && typeof window.CustomEvent != "function") {
      t.prototype = window.Event.prototype;
      window.CustomEvent = t;
    }
    function t(t, e) {
      e = e || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail);
      return n;
    }
  })();
  if (typeof window != "undefined" && !window.setImmediate) {
    window.setImmediate = window.msSetImmediate || window.webkitSetImmediate || window.mozSetImmediate || window.oSetImmediate || function () {
      if (!window.postMessage || !window.addEventListener) {
        return null;
      }
      var t = [undefined];
      var e = "zero-timeout-message";
      window.addEventListener("message", function (n) {
        if (typeof n.data == "string" && n.data.substr(0, e.length) === e) {
          n.stopImmediatePropagation();
          var i = parseInt(n.data.substr(e.length), 36);
          if (t[i]) {
            t[i]();
            t[i] = undefined;
          }
        }
      }, true);
      window.clearImmediate = function (e) {
        t[e] &&= undefined;
      };
      return function (n) {
        var i = t.length;
        t.push(n);
        window.postMessage(e + i.toString(36), "*");
        return i;
      };
    }() || function (t) {
      window.setTimeout(t, 0);
    };
  }
  if (typeof window != "undefined" && !window.clearImmediate) {
    window.clearImmediate = window.msClearImmediate || window.webkitClearImmediate || window.mozClearImmediate || window.oClearImmediate || function (t) {
      window.clearTimeout(t);
    };
  }
  e = function () {
    if (!o) {
      return false;
    }
    var t = document.createElement("canvas");
    if (!t || !t.getContext) {
      return false;
    }
    var e = t.getContext("2d");
    return !!e && !!e.getImageData && !!e.fillText && !!Array.prototype.some && !!Array.prototype.push;
  }();
  n = function () {
    if (e) {
      var t;
      var n;
      var i = document.createElement("canvas").getContext("2d");
      var r = 20;
      while (r) {
        i.font = r.toString(10) + "px sans-serif";
        if (i.measureText("Ｗ").width === t && i.measureText("m").width === n) {
          return r + 1;
        }
        t = i.measureText("Ｗ").width;
        n = i.measureText("m").width;
        r--;
      }
      return 0;
    }
  }();
  i = function (t) {
    var e;
    var n;
    var i = t.length;
    for (; i; t[e] = n) {
      e = Math.floor(Math.random() * i);
      n = t[--i];
      t[i] = t[e];
    }
    return t;
  };
  (r = function (t, r) {
    if (e) {
      if (!Array.isArray(t)) {
        t = [t];
      }
      t.forEach(function (e, n) {
        if (typeof e == "string") {
          t[n] = document.getElementById(e);
          if (!t[n]) {
            throw "The element id specified is not found.";
          }
        } else if (!e.tagName && !e.appendChild) {
          throw "You must pass valid HTML elements, or ID of the element.";
        }
      });
      var o;
      var a;
      var s;
      var h;
      var l;
      var u;
      var c;
      var p;
      var d;
      var f = {
        list: [],
        fontFamily: "\"Trebuchet MS\", \"Heiti TC\", \"微軟正黑體\", \"Arial Unicode MS\", \"Droid Fallback Sans\", sans-serif",
        fontWeight: "normal",
        color: "random-dark",
        minSize: 0,
        weightFactor: 1,
        clearCanvas: true,
        backgroundColor: "#ffffff",
        gridSize: 8,
        drawOutOfBound: false,
        shrinkToFit: false,
        origin: null,
        drawMask: false,
        maskColor: "rgba(255,0,0,0.3)",
        maskGapWidth: 0.3,
        wait: 0,
        abortThreshold: 0,
        abort: function () {},
        minRotation: -Math.PI / 2,
        maxRotation: Math.PI / 2,
        rotationSteps: 0,
        shuffle: true,
        rotateRatio: 0.1,
        shape: "circle",
        ellipticity: 0.65,
        classes: null,
        hover: null,
        click: null
      };
      if (r) {
        for (var g in r) {
          if (g in f) {
            f[g] = r[g];
          }
        }
      }
      if (typeof f.weightFactor != "function") {
        var y = f.weightFactor;
        f.weightFactor = function (t) {
          return t * y;
        };
      }
      if (typeof f.shape != "function") {
        switch (f.shape) {
          case "circle":
          default:
            f.shape = "circle";
            break;
          case "cardioid":
            f.shape = function (t) {
              return 1 - Math.sin(t);
            };
            break;
          case "diamond":
            f.shape = function (t) {
              var e = t % (Math.PI * 2 / 4);
              return 1 / (Math.cos(e) + Math.sin(e));
            };
            break;
          case "square":
            f.shape = function (t) {
              return Math.min(1 / Math.abs(Math.cos(t)), 1 / Math.abs(Math.sin(t)));
            };
            break;
          case "triangle-forward":
            f.shape = function (t) {
              var e = t % (Math.PI * 2 / 3);
              return 1 / (Math.cos(e) + Math.sqrt(3) * Math.sin(e));
            };
            break;
          case "triangle":
          case "triangle-upright":
            f.shape = function (t) {
              var e = (t + Math.PI * 3 / 2) % (Math.PI * 2 / 3);
              return 1 / (Math.cos(e) + Math.sqrt(3) * Math.sin(e));
            };
            break;
          case "pentagon":
            f.shape = function (t) {
              var e = (t + 0.955) % (Math.PI * 2 / 5);
              return 1 / (Math.cos(e) + Math.sin(e) * 0.726543);
            };
            break;
          case "star":
            f.shape = function (t) {
              var e = (t + 0.955) % (Math.PI * 2 / 10);
              if ((t + 0.955) % (Math.PI * 2 / 5) - Math.PI * 2 / 10 >= 0) {
                return 1 / (Math.cos(Math.PI * 2 / 10 - e) + Math.sin(Math.PI * 2 / 10 - e) * 3.07768);
              } else {
                return 1 / (Math.cos(e) + Math.sin(e) * 3.07768);
              }
            };
        }
      }
      f.gridSize = Math.max(Math.floor(f.gridSize), 4);
      var v = f.gridSize;
      var m = v - f.maskGapWidth;
      var x = Math.abs(f.maxRotation - f.minRotation);
      var _ = Math.abs(Math.floor(f.rotationSteps));
      var b = Math.min(f.maxRotation, f.minRotation);
      switch (f.color) {
        case "random-dark":
          c = function () {
            return j(10, 50);
          };
          break;
        case "random-light":
          c = function () {
            return j(50, 90);
          };
          break;
        default:
          if (typeof f.color == "function") {
            c = f.color;
          }
      }
      if (typeof f.fontWeight == "function") {
        p = f.fontWeight;
      }
      var w = null;
      if (typeof f.classes == "function") {
        w = f.classes;
      }
      var S = false;
      var A = [];
      function E(t) {
        var e;
        var n;
        var i = t.currentTarget;
        var r = i.getBoundingClientRect();
        if (t.touches) {
          e = t.touches[0].clientX;
          n = t.touches[0].clientY;
        } else {
          e = t.clientX;
          n = t.clientY;
        }
        var o = e - r.left;
        var a = n - r.top;
        var s = Math.floor(o * (i.width / r.width || 1) / v);
        var h = Math.floor(a * (i.height / r.height || 1) / v);
        return A[s][h];
      }
      function k(t) {
        var e = E(t);
        if (d !== e) {
          d = e;
          if (!e) {
            f.hover(undefined, undefined, t);
            return;
          }
          f.hover(e.item, e.dimension, t);
        }
      }
      function M(t) {
        var e = E(t);
        if (e) {
          f.click(e.item, e.dimension, t);
          t.preventDefault();
        }
      }
      var P = [];
      function O(t) {
        if (P[t]) {
          return P[t];
        }
        var e = t * 8;
        var n = e;
        var i = [];
        for (t === 0 && i.push([h[0], h[1], 0]); n--;) {
          var r = 1;
          if (f.shape !== "circle") {
            r = f.shape(n / e * 2 * Math.PI);
          }
          i.push([h[0] + t * r * Math.cos(-n / e * 2 * Math.PI), h[1] + t * r * Math.sin(-n / e * 2 * Math.PI) * f.ellipticity, n / e * 2 * Math.PI]);
        }
        P[t] = i;
        return i;
      }
      function C() {
        return f.abortThreshold > 0 && new Date().getTime() - u > f.abortThreshold;
      }
      function T(t, e, i) {
        var r = f.weightFactor(e);
        if (r <= f.minSize) {
          return false;
        }
        var o = 1;
        if (r < n) {
          o = function () {
            for (var t = 2; t * r < n;) {
              t += 2;
            }
            return t;
          }();
        }
        A = p ? p(t, e, r) : f.fontWeight;
        var a = document.createElement("canvas");
        var s = a.getContext("2d", {
          willReadFrequently: true
        });
        s.font = A + " " + (r * o).toString(10) + "px " + f.fontFamily;
        var h = s.measureText(t).width / o;
        var l = Math.max(r * o, s.measureText("m").width, s.measureText("Ｗ").width) / o;
        var u = h + l * 2;
        var c = l * 3;
        var d = Math.ceil(u / v);
        var g = Math.ceil(c / v);
        var y = -h / 2;
        var m = -(l * 0.4);
        var x = Math.ceil(((u = d * v) * Math.abs(Math.sin(i)) + (c = g * v) * Math.abs(Math.cos(i))) / v);
        var _ = Math.ceil((u * Math.abs(Math.cos(i)) + c * Math.abs(Math.sin(i))) / v);
        var b = _ * v;
        var w = x * v;
        a.setAttribute("width", b);
        a.setAttribute("height", w);
        s.scale(1 / o, 1 / o);
        s.translate(b * o / 2, w * o / 2);
        s.rotate(-i);
        s.font = A + " " + (r * o).toString(10) + "px " + f.fontFamily;
        s.fillStyle = "#000000";
        s.textBaseline = "middle";
        s.fillText(t, y * o, (m + r * 0.5) * o);
        var S = s.getImageData(0, 0, b, w).data;
        if (C()) {
          return false;
        }
        var A;
        var E;
        var k;
        var M;
        var P = [];
        var O = _;
        var T = [x / 2, _ / 2, x / 2, _ / 2];
        while (O--) {
          for (E = x; E--;) {
            M = v;
            t: while (M--) {
              for (k = v; k--;) {
                if (S[((E * v + M) * b + (O * v + k)) * 4 + 3]) {
                  P.push([O, E]);
                  if (O < T[3]) {
                    T[3] = O;
                  }
                  if (O > T[1]) {
                    T[1] = O;
                  }
                  if (E < T[0]) {
                    T[0] = E;
                  }
                  if (E > T[2]) {
                    T[2] = E;
                  }
                  break t;
                }
              }
            }
          }
        }
        return {
          mu: o,
          occupied: P,
          bounds: T,
          gw: _,
          gh: x,
          fillTextOffsetX: y,
          fillTextOffsetY: m,
          fillTextWidth: h,
          fillTextHeight: l,
          fontSize: r
        };
      }
      function I(t, e, n, i, r) {
        for (var h = r.length; h--;) {
          var l = t + r[h][0];
          var u = e + r[h][1];
          if (l >= a || u >= s || l < 0 || u < 0) {
            if (!f.drawOutOfBound) {
              return false;
            }
            continue;
          }
          if (!o[l][u]) {
            return false;
          }
        }
        return true;
      }
      function Z(e, n, i, r, o, a, s, h, l) {
        var u;
        var d;
        var g;
        var y = i.fontSize;
        u = c ? c(r, o, y, a, s) : f.color;
        d = p ? p(r, o, y) : f.fontWeight;
        g = w ? w(r, o, y) : f.classes;
        var m = i.bounds;
        m[3];
        m[0];
        m[1];
        m[3];
        m[2];
        m[0];
        t.forEach(function (t) {
          if (t.getContext) {
            var o = t.getContext("2d");
            var a = i.mu;
            o.save();
            o.scale(1 / a, 1 / a);
            o.font = d + " " + (y * a).toString(10) + "px " + f.fontFamily;
            o.fillStyle = u;
            o.translate((e + i.gw / 2) * v * a, (n + i.gh / 2) * v * a);
            if (h !== 0) {
              o.rotate(-h);
            }
            o.textBaseline = "middle";
            o.fillText(r, i.fillTextOffsetX * a, (i.fillTextOffsetY + y * 0.5) * a);
            o.restore();
          } else {
            var s = document.createElement("span");
            var c = "";
            c = "rotate(" + -h / Math.PI * 180 + "deg) ";
            if (i.mu !== 1) {
              c += "translateX(-" + i.fillTextWidth / 4 + "px) scale(" + 1 / i.mu + ")";
            }
            var p = {
              position: "absolute",
              display: "block",
              font: d + " " + y * i.mu + "px " + f.fontFamily,
              left: (e + i.gw / 2) * v + i.fillTextOffsetX + "px",
              top: (n + i.gh / 2) * v + i.fillTextOffsetY + "px",
              width: i.fillTextWidth + "px",
              height: i.fillTextHeight + "px",
              lineHeight: y + "px",
              whiteSpace: "nowrap",
              transform: c,
              webkitTransform: c,
              msTransform: c,
              transformOrigin: "50% 40%",
              webkitTransformOrigin: "50% 40%",
              msTransformOrigin: "50% 40%"
            };
            if (u) {
              p.color = u;
            }
            s.textContent = r;
            for (var m in p) {
              s.style[m] = p[m];
            }
            if (l) {
              for (var x in l) {
                s.setAttribute(x, l[x]);
              }
            }
            if (g) {
              s.className += g;
            }
            t.appendChild(s);
          }
        });
      }
      function L(e, n, i, r, h) {
        if (!(e >= a) && !(n >= s) && !(e < 0) && !(n < 0)) {
          o[e][n] = false;
          if (i) {
            t[0].getContext("2d").fillRect(e * v, n * v, m, m);
          }
          if (S) {
            A[e][n] = {
              item: h,
              dimension: r
            };
          }
        }
      }
      function R(e, n, i, r, o, h) {
        var l;
        var u;
        var c = o.occupied;
        var p = f.drawMask;
        if (p) {
          (l = t[0].getContext("2d")).save();
          l.fillStyle = f.maskColor;
        }
        if (S) {
          var d = o.bounds;
          u = {
            x: (e + d[3]) * v,
            y: (n + d[0]) * v,
            w: (d[1] - d[3] + 1) * v,
            h: (d[2] - d[0] + 1) * v
          };
        }
        for (var g = c.length; g--;) {
          var y = e + c[g][0];
          var m = n + c[g][1];
          if (!(y >= a) && !(m >= s) && !(y < 0) && !(m < 0)) {
            L(y, m, p, u, h);
          }
        }
        if (p) {
          l.restore();
        }
      }
      var D = function t(e) {
        if (Array.isArray(e)) {
          n = e[0];
          r = e[1];
        } else {
          n = e.word;
          r = e.weight;
          o = e.attributes;
        }
        var n;
        var r;
        var o;
        var h = f.rotateRatio === 0 || Math.random() > f.rotateRatio ? 0 : x === 0 ? b : _ > 0 ? b + Math.floor(Math.random() * _) * x / (_ - 1) : b + Math.random() * x;
        var u = T(n, r, h);
        if (!u || C()) {
          return false;
        }
        if (!f.drawOutOfBound) {
          var c = u.bounds;
          if (c[1] - c[3] + 1 > a || c[2] - c[0] + 1 > s) {
            return false;
          }
        }
        for (var p = l + 1; p--;) {
          var d = O(l - p);
          if (f.shuffle) {
            i(d = [].concat(d));
          }
          for (var g = 0; g < d.length; g++) {
            var y = function (t) {
              var i = Math.floor(t[0] - u.gw / 2);
              var a = Math.floor(t[1] - u.gh / 2);
              var s = u.gw;
              var c = u.gh;
              return !!I(i, a, s, c, u.occupied) && (Z(i, a, u, n, r, l - p, t[2], h, o), R(i, a, s, c, u, e), {
                gx: i,
                gy: a,
                gw: s,
                gh: c,
                info: u,
                item: e,
                rotateDeg: h
              });
            }(d[g]);
            if (y) {
              return y;
            }
          }
        }
        return !!f.shrinkToFit && (Array.isArray(e) ? e[1] = e[1] * 3 / 4 : e.weight = e.weight * 3 / 4, t(e));
      };
      function B(e, n, i) {
        if (n) {
          return !t.some(function (t) {
            var n = new CustomEvent(e, {
              detail: i || {}
            });
            return !t.dispatchEvent(n);
          }, this);
        }
        t.forEach(function (t) {
          var n = new CustomEvent(e, {
            detail: i || {}
          });
          t.dispatchEvent(n);
        }, this);
      }
      (function () {
        var e;
        var n;
        var i = t[0];
        if (i.getContext) {
          a = Math.ceil(i.width / v);
          s = Math.ceil(i.height / v);
        } else {
          var r = i.getBoundingClientRect();
          a = Math.ceil(r.width / v);
          s = Math.ceil(r.height / v);
        }
        if (B("wordcloudstart", true)) {
          h = f.origin ? [f.origin[0] / v, f.origin[1] / v] : [a / 2, s / 2];
          l = Math.floor(Math.sqrt(a * a + s * s));
          o = [];
          if (!i.getContext || f.clearCanvas) {
            t.forEach(function (t) {
              if (t.getContext) {
                var e = t.getContext("2d");
                e.fillStyle = f.backgroundColor;
                e.clearRect(0, 0, a * (v + 1), s * (v + 1));
                e.fillRect(0, 0, a * (v + 1), s * (v + 1));
              } else {
                t.textContent = "";
                t.style.backgroundColor = f.backgroundColor;
                t.style.position = "relative";
              }
            });
            c = a;
            while (c--) {
              o[c] = [];
              p = s;
              while (p--) {
                o[c][p] = true;
              }
            }
          } else {
            var c;
            var p;
            var g;
            var y;
            var m;
            var x = document.createElement("canvas").getContext("2d");
            x.fillStyle = f.backgroundColor;
            x.fillRect(0, 0, 1, 1);
            var _ = x.getImageData(0, 0, 1, 1).data;
            var b = i.getContext("2d").getImageData(0, 0, a * v, s * v).data;
            for (c = a; c--;) {
              o[c] = [];
              p = s;
              while (p--) {
                m = v;
                t: while (m--) {
                  for (y = v; y--;) {
                    for (g = 4; g--;) {
                      if (b[((p * v + m) * a * v + (c * v + y)) * 4 + g] !== _[g]) {
                        o[c][p] = false;
                        break t;
                      }
                    }
                  }
                }
                if (o[c][p] !== false) {
                  o[c][p] = true;
                }
              }
            }
            b = x = _ = undefined;
          }
          if (f.hover || f.click) {
            S = true;
            c = a + 1;
            while (c--) {
              A[c] = [];
            }
            if (f.hover) {
              i.addEventListener("mousemove", k);
            }
            if (f.click) {
              i.addEventListener("click", M);
              i.style.webkitTapHighlightColor = "rgba(0, 0, 0, 0)";
            }
            i.addEventListener("wordcloudstart", function t() {
              i.removeEventListener("wordcloudstart", t);
              i.removeEventListener("mousemove", k);
              i.removeEventListener("click", M);
              d = undefined;
            });
          }
          g = 0;
          if (f.wait !== 0) {
            e = window.setTimeout;
            n = window.clearTimeout;
          } else {
            e = window.setImmediate;
            n = window.clearImmediate;
          }
          function w(e, n) {
            t.forEach(function (t) {
              t.removeEventListener(e, n);
            }, this);
          }
          var E = function t() {
            w("wordcloudstart", t);
            n(P);
          };
          (function (e, n) {
            t.forEach(function (t) {
              t.addEventListener(e, n);
            }, this);
          })("wordcloudstart", E);
          var P = e(function t() {
            if (g >= f.list.length) {
              n(P);
              B("wordcloudstop", false);
              w("wordcloudstart", E);
              return;
            }
            u = new Date().getTime();
            var i = D(f.list[g]);
            var r = !B("wordclouddrawn", true, {
              item: f.list[g],
              drawn: i
            });
            if (C() || r) {
              n(P);
              f.abort();
              B("wordcloudabort", false);
              B("wordcloudstop", false);
              w("wordcloudstart", E);
              return;
            }
            g++;
            P = e(t, f.wait);
          }, f.wait);
        }
      })();
    }
    function j(t, e) {
      return "hsl(" + (Math.random() * 360).toFixed() + "," + (Math.random() * 30 + 70).toFixed() + "%," + (Math.random() * (e - t) + t).toFixed() + "%)";
    }
  }).isSupported = e;
  r.minFontSize = n;
  if (typeof define == "function" && define.amd && this) {
    this.WordCloud = r;
    define("wordcloud", [], function () {
      return r;
    });
  } else if (module.exports) {
    module.exports = r;
  } else if (this) {
    this.WordCloud = r;
  }
}