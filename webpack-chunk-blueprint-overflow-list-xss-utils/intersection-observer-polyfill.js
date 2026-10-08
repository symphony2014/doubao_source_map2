// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 326147
         */
module.exports = function (module, exports, require) {
  (function () {
    "use strict";

    if (typeof window == "object") {
      if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
        if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
          Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
            get: function () {
              return this.intersectionRatio > 0;
            }
          });
        }
        return;
      }
      var e = function (e) {
        var t = e;
        var n = i(t);
        while (n) {
          n = i(t = n.ownerDocument);
        }
        return t;
      }(window.document);
      var t = [];
      var n = null;
      var r = null;
      a.prototype.THROTTLE_TIMEOUT = 100;
      a.prototype.POLL_INTERVAL = null;
      a.prototype.USE_MUTATION_OBSERVER = true;
      a._setupCrossOriginUpdater = function () {
        n ||= function (e, n) {
          r = e && n ? h(e, n) : l();
          t.forEach(function (e) {
            e._checkForIntersections();
          });
        };
        return n;
      };
      a._resetCrossOriginUpdater = function () {
        n = null;
        r = null;
      };
      a.prototype.observe = function (e) {
        if (!this._observationTargets.some(function (t) {
          return t.element == e;
        })) {
          if (!e || e.nodeType != 1) {
            throw Error("target must be an Element");
          }
          this._registerInstance();
          this._observationTargets.push({
            element: e,
            entry: null
          });
          this._monitorIntersections(e.ownerDocument);
          this._checkForIntersections();
        }
      };
      a.prototype.unobserve = function (e) {
        this._observationTargets = this._observationTargets.filter(function (t) {
          return t.element != e;
        });
        this._unmonitorIntersections(e.ownerDocument);
        if (this._observationTargets.length == 0) {
          this._unregisterInstance();
        }
      };
      a.prototype.disconnect = function () {
        this._observationTargets = [];
        this._unmonitorAllIntersections();
        this._unregisterInstance();
      };
      a.prototype.takeRecords = function () {
        var e = this._queuedEntries.slice();
        this._queuedEntries = [];
        return e;
      };
      a.prototype._initThresholds = function (e) {
        var t = e || [0];
        if (!Array.isArray(t)) {
          t = [t];
        }
        return t.sort().filter(function (e, t, n) {
          if (typeof e != "number" || isNaN(e) || e < 0 || e > 1) {
            throw Error("threshold must be a number between 0 and 1 inclusively");
          }
          return e !== n[t - 1];
        });
      };
      a.prototype._parseRootMargin = function (e) {
        var t = (e || "0px").split(/\s+/).map(function (e) {
          var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
          if (!t) {
            throw Error("rootMargin must be specified in pixels or percent");
          }
          return {
            value: parseFloat(t[1]),
            unit: t[2]
          };
        });
        t[1] = t[1] || t[0];
        t[2] = t[2] || t[0];
        t[3] = t[3] || t[1];
        return t;
      };
      a.prototype._monitorIntersections = function (t) {
        var n = t.defaultView;
        if (n && this._monitoringDocuments.indexOf(t) == -1) {
          var r = this._checkForIntersections;
          var o = null;
          var a = null;
          if (this.POLL_INTERVAL) {
            o = n.setInterval(r, this.POLL_INTERVAL);
          } else {
            s(n, "resize", r, true);
            s(t, "scroll", r, true);
            if (this.USE_MUTATION_OBSERVER && "MutationObserver" in n) {
              (a = new n.MutationObserver(r)).observe(t, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
              });
            }
          }
          this._monitoringDocuments.push(t);
          this._monitoringUnsubscribes.push(function () {
            var e = t.defaultView;
            if (e) {
              if (o) {
                e.clearInterval(o);
              }
              u(e, "resize", r, true);
            }
            u(t, "scroll", r, true);
            if (a) {
              a.disconnect();
            }
          });
          if (t != (this.root && (this.root.ownerDocument || this.root) || e)) {
            var c = i(t);
            if (c) {
              this._monitorIntersections(c.ownerDocument);
            }
          }
        }
      };
      a.prototype._unmonitorIntersections = function (t) {
        var n = this._monitoringDocuments.indexOf(t);
        if (n != -1) {
          var r = this.root && (this.root.ownerDocument || this.root) || e;
          if (!this._observationTargets.some(function (e) {
            var n = e.element.ownerDocument;
            if (n == t) {
              return true;
            }
            while (n && n != r) {
              var o = i(n);
              if ((n = o && o.ownerDocument) == t) {
                return true;
              }
            }
            return false;
          })) {
            var o = this._monitoringUnsubscribes[n];
            this._monitoringDocuments.splice(n, 1);
            this._monitoringUnsubscribes.splice(n, 1);
            o();
            if (t != r) {
              var a = i(t);
              if (a) {
                this._unmonitorIntersections(a.ownerDocument);
              }
            }
          }
        }
      };
      a.prototype._unmonitorAllIntersections = function () {
        var e = this._monitoringUnsubscribes.slice(0);
        this._monitoringDocuments.length = 0;
        this._monitoringUnsubscribes.length = 0;
        for (var t = 0; t < e.length; t++) {
          e[t]();
        }
      };
      a.prototype._checkForIntersections = function () {
        if (this.root || !n || r) {
          var e = this._rootIsInDom();
          var t = e ? this._getRootRect() : l();
          this._observationTargets.forEach(function (r) {
            var i = r.element;
            var a = c(i);
            var s = this._rootContainsTarget(i);
            var u = r.entry;
            var f = e && s && this._computeTargetAndRootIntersection(i, a, t);
            var h = null;
            if (this._rootContainsTarget(i)) {
              if (!n || this.root) {
                h = t;
              }
            } else {
              h = l();
            }
            var d = r.entry = new o({
              time: window.performance && performance.now && performance.now(),
              target: i,
              boundingClientRect: a,
              rootBounds: h,
              intersectionRect: f
            });
            if (u) {
              if (e && s) {
                if (this._hasCrossedThreshold(u, d)) {
                  this._queuedEntries.push(d);
                }
              } else if (u && u.isIntersecting) {
                this._queuedEntries.push(d);
              }
            } else {
              this._queuedEntries.push(d);
            }
          }, this);
          if (this._queuedEntries.length) {
            this._callback(this.takeRecords(), this);
          }
        }
      };
      a.prototype._computeTargetAndRootIntersection = function (t, i, o) {
        if (window.getComputedStyle(t).display != "none") {
          var a = i;
          var s = p(t);
          var u = false;
          while (!u && s) {
            var l = null;
            var f = s.nodeType == 1 ? window.getComputedStyle(s) : {};
            if (f.display == "none") {
              return null;
            }
            if (s == this.root || s.nodeType == 9) {
              u = true;
              if (s == this.root || s == e) {
                if (n && !this.root) {
                  if (r && (r.width != 0 || r.height != 0)) {
                    l = r;
                  } else {
                    s = null;
                    l = null;
                    a = null;
                  }
                } else {
                  l = o;
                }
              } else {
                var d = p(s);
                var g = d && c(d);
                var v = d && this._computeTargetAndRootIntersection(d, g, o);
                if (g && v) {
                  s = d;
                  l = h(g, v);
                } else {
                  s = null;
                  a = null;
                }
              }
            } else {
              var m = s.ownerDocument;
              if (s != m.body && s != m.documentElement && f.overflow != "visible") {
                l = c(s);
              }
            }
            if (l) {
              a = function (e, t) {
                var n = Math.max(e.top, t.top);
                var r = Math.min(e.bottom, t.bottom);
                var i = Math.max(e.left, t.left);
                var o = Math.min(e.right, t.right);
                var a = o - i;
                var s = r - n;
                return a >= 0 && s >= 0 && {
                  top: n,
                  bottom: r,
                  left: i,
                  right: o,
                  width: a,
                  height: s
                } || null;
              }(l, a);
            }
            if (!a) {
              break;
            }
            s = s && p(s);
          }
          return a;
        }
      };
      a.prototype._getRootRect = function () {
        var t;
        if (this.root && !g(this.root)) {
          t = c(this.root);
        } else {
          var n = g(this.root) ? this.root : e;
          var r = n.documentElement;
          var i = n.body;
          t = {
            top: 0,
            left: 0,
            right: r.clientWidth || i.clientWidth,
            width: r.clientWidth || i.clientWidth,
            bottom: r.clientHeight || i.clientHeight,
            height: r.clientHeight || i.clientHeight
          };
        }
        return this._expandRectByRootMargin(t);
      };
      a.prototype._expandRectByRootMargin = function (e) {
        var t = this._rootMarginValues.map(function (t, n) {
          if (t.unit == "px") {
            return t.value;
          } else {
            return t.value * (n % 2 ? e.width : e.height) / 100;
          }
        });
        var n = {
          top: e.top - t[0],
          right: e.right + t[1],
          bottom: e.bottom + t[2],
          left: e.left - t[3]
        };
        n.width = n.right - n.left;
        n.height = n.bottom - n.top;
        return n;
      };
      a.prototype._hasCrossedThreshold = function (e, t) {
        var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1;
        var r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
        if (n !== r) {
          for (var i = 0; i < this.thresholds.length; i++) {
            var o = this.thresholds[i];
            if (o == n || o == r || o < n != o < r) {
              return true;
            }
          }
        }
      };
      a.prototype._rootIsInDom = function () {
        return !this.root || d(e, this.root);
      };
      a.prototype._rootContainsTarget = function (t) {
        var n = this.root && (this.root.ownerDocument || this.root) || e;
        return d(n, t) && (!this.root || n == t.ownerDocument);
      };
      a.prototype._registerInstance = function () {
        if (t.indexOf(this) < 0) {
          t.push(this);
        }
      };
      a.prototype._unregisterInstance = function () {
        var e = t.indexOf(this);
        if (e != -1) {
          t.splice(e, 1);
        }
      };
      window.IntersectionObserver = a;
      window.IntersectionObserverEntry = o;
    }
    function i(e) {
      try {
        return e.defaultView && e.defaultView.frameElement || null;
      } catch (e) {
        return null;
      }
    }
    function o(e) {
      this.time = e.time;
      this.target = e.target;
      this.rootBounds = f(e.rootBounds);
      this.boundingClientRect = f(e.boundingClientRect);
      this.intersectionRect = f(e.intersectionRect || l());
      this.isIntersecting = !!e.intersectionRect;
      var t = this.boundingClientRect;
      var n = t.width * t.height;
      var r = this.intersectionRect;
      var i = r.width * r.height;
      if (n) {
        this.intersectionRatio = Number((i / n).toFixed(4));
      } else {
        this.intersectionRatio = +!!this.isIntersecting;
      }
    }
    function a(e, t) {
      var n;
      var r;
      var i;
      var o = t || {};
      if (typeof e != "function") {
        throw Error("callback must be a function");
      }
      if (o.root && o.root.nodeType != 1 && o.root.nodeType != 9) {
        throw Error("root must be a Document or Element");
      }
      this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, i = null, function () {
        i ||= setTimeout(function () {
          n();
          i = null;
        }, r);
      });
      this._callback = e;
      this._observationTargets = [];
      this._queuedEntries = [];
      this._rootMarginValues = this._parseRootMargin(o.rootMargin);
      this.thresholds = this._initThresholds(o.threshold);
      this.root = o.root || null;
      this.rootMargin = this._rootMarginValues.map(function (e) {
        return e.value + e.unit;
      }).join(" ");
      this._monitoringDocuments = [];
      this._monitoringUnsubscribes = [];
    }
    function s(e, t, n, r) {
      if (typeof e.addEventListener == "function") {
        e.addEventListener(t, n, r || false);
      } else if (typeof e.attachEvent == "function") {
        e.attachEvent("on" + t, n);
      }
    }
    function u(e, t, n, r) {
      if (typeof e.removeEventListener == "function") {
        e.removeEventListener(t, n, r || false);
      } else if (typeof e.detachEvent == "function") {
        e.detachEvent("on" + t, n);
      }
    }
    function c(e) {
      var t;
      try {
        t = e.getBoundingClientRect();
      } catch (e) {}
      if (t) {
        if (!t.width || !t.height) {
          t = {
            top: t.top,
            right: t.right,
            bottom: t.bottom,
            left: t.left,
            width: t.right - t.left,
            height: t.bottom - t.top
          };
        }
        return t;
      } else {
        return l();
      }
    }
    function l() {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0
      };
    }
    function f(e) {
      if (!e || "x" in e) {
        return e;
      } else {
        return {
          top: e.top,
          y: e.top,
          bottom: e.bottom,
          left: e.left,
          x: e.left,
          right: e.right,
          width: e.width,
          height: e.height
        };
      }
    }
    function h(e, t) {
      var n = t.top - e.top;
      var r = t.left - e.left;
      return {
        top: n,
        left: r,
        height: t.height,
        width: t.width,
        bottom: n + t.height,
        right: r + t.width
      };
    }
    function d(e, t) {
      for (var n = t; n;) {
        if (n == e) {
          return true;
        }
        n = p(n);
      }
      return false;
    }
    function p(t) {
      var n = t.parentNode;
      if (t.nodeType == 9 && t != e) {
        return i(t);
      } else {
        if (n && n.assignedSlot) {
          n = n.assignedSlot.parentNode;
        }
        if (n && n.nodeType == 11 && n.host) {
          return n.host;
        } else {
          return n;
        }
      }
    }
    function g(e) {
      return e && e.nodeType === 9;
    }
  })();
}