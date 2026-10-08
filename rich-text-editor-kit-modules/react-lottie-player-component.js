// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(772627) to 'lottie-animation-library'
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-lottie-loading.000e98bf.js
         * chunkId: 79738
         * moduleId: 31951
         */
module.exports = function (module, exports, require) {
  (function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && typeof e == "object" && "default" in e) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    var i = r(t);
    var a = r(n);
    function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        if (t) {
          r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, r);
      }
      return n;
    }
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] ?? {};
        if (t % 2) {
          o(Object(n), true).forEach(function (t) {
            var r;
            var i;
            var a;
            r = e;
            i = t;
            a = n[t];
            if ((i = function (e) {
              var t = function (e, t) {
                if (typeof e != "object" || e === null) {
                  return e;
                }
                var n = e[Symbol.toPrimitive];
                if (n !== undefined) {
                  var r = n.call(e, t || "default");
                  if (typeof r != "object") {
                    return r;
                  }
                  throw TypeError("@@toPrimitive must return a primitive value.");
                }
                return (t === "string" ? String : Number)(e);
              }(e, "string");
              if (typeof t == "symbol") {
                return t;
              } else {
                return String(t);
              }
            }(i)) in r) {
              Object.defineProperty(r, i, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              r[i] = a;
            }
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          o(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function l(e, t) {
      if (e == null) {
        return {};
      }
      var n;
      var r;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var n;
        var r;
        var i = {};
        var a = Object.keys(e);
        for (r = 0; r < a.length; r++) {
          n = a[r];
          if (!(t.indexOf(n) >= 0)) {
            i[n] = e[n];
          }
        }
        return i;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) {
          n = a[r];
          if (!(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n)) {
            i[n] = e[n];
          }
        }
      }
      return i;
    }
    function u(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      var n = 0;
      var r = Array(t);
      for (; n < t; n++) {
        r[n] = e[n];
      }
      return r;
    }
    var c = ["animationData", "loop", "autoplay", "initialSegment", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart", "onConfigReady", "onDataReady", "onDataFailed", "onLoadedImages", "onDOMLoaded", "onDestroy", "lottieRef", "renderer", "name", "assetsPath", "rendererSettings"];
    function m(e, t) {
      var r;
      var o = e.animationData;
      var m = e.loop;
      var f = e.autoplay;
      var d = e.initialSegment;
      var p = e.onComplete;
      var y = e.onLoopComplete;
      var x = e.onEnterFrame;
      var k = e.onSegmentStart;
      var v = e.onConfigReady;
      var h = e.onDataReady;
      var g = e.onDataFailed;
      var b = e.onLoadedImages;
      var S = e.onDOMLoaded;
      var A = e.onDestroy;
      e.lottieRef;
      e.renderer;
      e.name;
      e.assetsPath;
      e.rendererSettings;
      var D = l(e, c);
      var E = function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(r = n.useState(false)) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var r;
          var i;
          var a;
          var o;
          var s = [];
          var l = true;
          var u = false;
          try {
            a = (n = n.call(e)).next;
            for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = true);
          } catch (e) {
            u = true;
            i = e;
          } finally {
            try {
              if (!l && n.return != null && (o = n.return(), Object(o) !== o)) {
                return;
              }
            } finally {
              if (u) {
                throw i;
              }
            }
          }
          return s;
        }
      }(r, 2) || function (e, t) {
        if (e) {
          if (typeof e == "string") {
            return u(e, 2);
          }
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (n === "Object" && e.constructor) {
            n = e.constructor.name;
          }
          if (n === "Map" || n === "Set") {
            return Array.from(e);
          }
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
            return u(e, t);
          }
        }
      }(r, 2) || function () {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
      var O = E[0];
      var j = E[1];
      var w = n.useRef();
      var L = n.useRef(null);
      function B() {
        var t;
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (L.current) {
          if ((t = w.current) !== null && t !== undefined) {
            t.destroy();
          }
          var r = s(s(s({}, e), n), {}, {
            container: L.current
          });
          w.current = i.default.loadAnimation(r);
          j(!!w.current);
          return function () {
            var e;
            if ((e = w.current) !== null && e !== undefined) {
              e.destroy();
            }
            w.current = undefined;
          };
        }
      }
      n.useEffect(function () {
        var e = B();
        return function () {
          if (e == null) {
            return undefined;
          } else {
            return e();
          }
        };
      }, [o, m]);
      n.useEffect(function () {
        if (w.current) {
          w.current.autoplay = !!f;
        }
      }, [f]);
      n.useEffect(function () {
        if (w.current) {
          if (!d) {
            w.current.resetSegments(true);
            return;
          }
          if (Array.isArray(d) && d.length) {
            if (w.current.currentRawFrame < d[0] || w.current.currentRawFrame > d[1]) {
              w.current.currentRawFrame = d[0];
            }
            w.current.setSegment(d[0], d[1]);
          }
        }
      }, [d]);
      n.useEffect(function () {
        var e = [{
          name: "complete",
          handler: p
        }, {
          name: "loopComplete",
          handler: y
        }, {
          name: "enterFrame",
          handler: x
        }, {
          name: "segmentStart",
          handler: k
        }, {
          name: "config_ready",
          handler: v
        }, {
          name: "data_ready",
          handler: h
        }, {
          name: "data_failed",
          handler: g
        }, {
          name: "loaded_images",
          handler: b
        }, {
          name: "DOMLoaded",
          handler: S
        }, {
          name: "destroy",
          handler: A
        }].filter(function (e) {
          return e.handler != null;
        });
        if (e.length) {
          var t = e.map(function (e) {
            var t;
            if ((t = w.current) !== null && t !== undefined) {
              t.addEventListener(e.name, e.handler);
            }
            return function () {
              var t;
              if ((t = w.current) !== null && t !== undefined) {
                t.removeEventListener(e.name, e.handler);
              }
            };
          });
          return function () {
            t.forEach(function (e) {
              return e();
            });
          };
        }
      }, [p, y, x, k, v, h, g, b, S, A]);
      return {
        View: a.default.createElement("div", s({
          style: t,
          ref: L
        }, D)),
        play: function () {
          var e;
          if ((e = w.current) !== null && e !== undefined) {
            e.play();
          }
        },
        stop: function () {
          var e;
          if ((e = w.current) !== null && e !== undefined) {
            e.stop();
          }
        },
        pause: function () {
          var e;
          if ((e = w.current) !== null && e !== undefined) {
            e.pause();
          }
        },
        setSpeed: function (e) {
          var t;
          if ((t = w.current) !== null && t !== undefined) {
            t.setSpeed(e);
          }
        },
        goToAndStop: function (e, t) {
          var n;
          if ((n = w.current) !== null && n !== undefined) {
            n.goToAndStop(e, t);
          }
        },
        goToAndPlay: function (e, t) {
          var n;
          if ((n = w.current) !== null && n !== undefined) {
            n.goToAndPlay(e, t);
          }
        },
        setDirection: function (e) {
          var t;
          if ((t = w.current) !== null && t !== undefined) {
            t.setDirection(e);
          }
        },
        playSegments: function (e, t) {
          var n;
          if ((n = w.current) !== null && n !== undefined) {
            n.playSegments(e, t);
          }
        },
        setSubframe: function (e) {
          var t;
          if ((t = w.current) !== null && t !== undefined) {
            t.setSubframe(e);
          }
        },
        getDuration: function (e) {
          var t;
          if ((t = w.current) === null || t === undefined) {
            return undefined;
          } else {
            return t.getDuration(e);
          }
        },
        destroy: function () {
          var e;
          if ((e = w.current) !== null && e !== undefined) {
            e.destroy();
          }
          w.current = undefined;
        },
        animationContainerRef: L,
        animationLoaded: O,
        animationItem: w.current
      };
    }
    function f(e) {
      var t = e.wrapperRef;
      var r = e.animationItem;
      var i = e.mode;
      var a = e.actions;
      n.useEffect(function () {
        var e;
        var n;
        var o;
        var s;
        var l;
        var u = t.current;
        if (u && r && a.length) {
          r.stop();
          switch (i) {
            case "scroll":
              e = null;
              n = function () {
                var t;
                var n;
                var i;
                n = (t = u.getBoundingClientRect()).top;
                i = t.height;
                var o = (window.innerHeight - n) / (window.innerHeight + i);
                var s = a.find(function (e) {
                  var t = e.visibility;
                  return t && o >= t[0] && o <= t[1];
                });
                if (s) {
                  if (s.type === "seek" && s.visibility && s.frames.length === 2) {
                    var l = s.frames[0] + Math.ceil((o - s.visibility[0]) / (s.visibility[1] - s.visibility[0]) * s.frames[1]);
                    r.goToAndStop(l - r.firstFrame - 1, true);
                  }
                  if (s.type === "loop") {
                    if (e === null) {
                      r.playSegments(s.frames, true);
                      e = s.frames;
                    } else if (e !== s.frames) {
                      r.playSegments(s.frames, true);
                      e = s.frames;
                    } else if (r.isPaused) {
                      r.playSegments(s.frames, true);
                      e = s.frames;
                    }
                  }
                  if (s.type === "play" && r.isPaused) {
                    r.resetSegments(true);
                    r.play();
                  }
                  if (s.type === "stop") {
                    r.goToAndStop(s.frames[0] - r.firstFrame - 1, true);
                  }
                }
              };
              document.addEventListener("scroll", n);
              return function () {
                document.removeEventListener("scroll", n);
              };
            case "cursor":
              o = function (e, t) {
                var n = e;
                var i = t;
                if (n !== -1 && i !== -1) {
                  var o;
                  var s;
                  var l;
                  var c;
                  var m;
                  o = n;
                  s = i;
                  c = (l = u.getBoundingClientRect()).top;
                  m = l.left;
                  var f = {
                    x: (o - m) / l.width,
                    y: (s - c) / l.height
                  };
                  n = f.x;
                  i = f.y;
                }
                var d = a.find(function (e) {
                  var t = e.position;
                  if (t && Array.isArray(t.x) && Array.isArray(t.y)) {
                    return n >= t.x[0] && n <= t.x[1] && i >= t.y[0] && i <= t.y[1];
                  } else {
                    return !!t && !Number.isNaN(t.x) && !Number.isNaN(t.y) && n === t.x && i === t.y;
                  }
                });
                if (d) {
                  if (d.type === "seek" && d.position && Array.isArray(d.position.x) && Array.isArray(d.position.y) && d.frames.length === 2) {
                    var p = (n - d.position.x[0]) / (d.position.x[1] - d.position.x[0]);
                    var y = (i - d.position.y[0]) / (d.position.y[1] - d.position.y[0]);
                    r.playSegments(d.frames, true);
                    r.goToAndStop(Math.ceil((p + y) / 2 * (d.frames[1] - d.frames[0])), true);
                  }
                  if (d.type === "loop") {
                    r.playSegments(d.frames, true);
                  }
                  if (d.type === "play") {
                    if (r.isPaused) {
                      r.resetSegments(false);
                    }
                    r.playSegments(d.frames);
                  }
                  if (d.type === "stop") {
                    r.goToAndStop(d.frames[0], true);
                  }
                }
              };
              s = function (e) {
                o(e.clientX, e.clientY);
              };
              l = function () {
                o(-1, -1);
              };
              u.addEventListener("mousemove", s);
              u.addEventListener("mouseout", l);
              return function () {
                u.removeEventListener("mousemove", s);
                u.removeEventListener("mouseout", l);
              };
          }
        }
      }, [i, r]);
    }
    function d(e) {
      var t = e.actions;
      var n = e.mode;
      var r = e.lottieObj;
      var i = r.animationItem;
      var a = r.View;
      f({
        actions: t,
        animationItem: i,
        mode: n,
        wrapperRef: r.animationContainerRef
      });
      return a;
    }
    var p = ["style", "interactivity"];
    Object.defineProperty(e, "LottiePlayer", {
      enumerable: true,
      get: function () {
        return i.default;
      }
    });
    e.default = function (e) {
      var a = e.style;
      var o = e.interactivity;
      var s = m(l(e, p), a);
      var u = s.View;
      var c = s.play;
      var f = s.stop;
      var y = s.pause;
      var x = s.setSpeed;
      var k = s.goToAndStop;
      var v = s.goToAndPlay;
      var h = s.setDirection;
      var g = s.playSegments;
      var b = s.setSubframe;
      var S = s.getDuration;
      var A = s.destroy;
      var D = s.animationContainerRef;
      var E = s.animationLoaded;
      var O = s.animationItem;
      n.useEffect(function () {
        if (e.lottieRef) {
          e.lottieRef.current = {
            play: c,
            stop: f,
            pause: y,
            setSpeed: x,
            goToAndPlay: v,
            goToAndStop: k,
            setDirection: h,
            playSegments: g,
            setSubframe: b,
            getDuration: S,
            destroy: A,
            animationContainerRef: D,
            animationLoaded: E,
            animationItem: O
          };
        }
      }, [e.lottieRef?.current]);
      return d({
        lottieObj: {
          View: u,
          play: c,
          stop: f,
          pause: y,
          setSpeed: x,
          goToAndStop: k,
          goToAndPlay: v,
          setDirection: h,
          playSegments: g,
          setSubframe: b,
          getDuration: S,
          destroy: A,
          animationContainerRef: D,
          animationLoaded: E,
          animationItem: O
        },
        actions: (o == null ? undefined : o.actions) ?? [],
        mode: (o == null ? undefined : o.mode) ?? "scroll"
      });
    };
    e.useLottie = m;
    e.useLottieInteractivity = d;
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  })(exports, require("lottie-animation-library") /*id: 772627*/, require("react-core-library-reexport") /*id: 634663*/);
}