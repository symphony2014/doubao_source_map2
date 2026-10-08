// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(772627) to 'lottie-animation-library'
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 44862.2873ae70.js
         * chunkId: 44862
         * moduleId: 829736
         */
module.exports = function (module, exports, require) {
  (function (e, t, n) {
    "use strict";

    function a(e) {
      if (e && typeof e == "object" && "default" in e) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    var r = a(t);
    var i = a(n);
    function o(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      var n = 0;
      var a = Array(t);
      for (; n < t; n++) {
        a[n] = e[n];
      }
      return a;
    }
    function s(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        if (t) {
          a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, a);
      }
      return n;
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] ?? {};
        if (t % 2) {
          s(Object(n), true).forEach(function (t) {
            var a;
            var r;
            a = t;
            r = n[t];
            if ((a = function (e) {
              var t = function (e, t) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var n = e[Symbol.toPrimitive];
                if (n !== undefined) {
                  var a = n.call(e, t || "default");
                  if (typeof a != "object") {
                    return a;
                  }
                  throw TypeError("@@toPrimitive must return a primitive value.");
                }
                return (t === "string" ? String : Number)(e);
              }(e, "string");
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }(a)) in e) {
              Object.defineProperty(e, a, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              e[a] = r;
            }
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          s(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function u(e, t) {
      if (e == null) {
        return {};
      }
      var n;
      var a;
      var r = function (e, t) {
        if (e == null) {
          return {};
        }
        var n = {};
        for (var a in e) {
          if ({}.hasOwnProperty.call(e, a)) {
            if (t.includes(a)) {
              continue;
            }
            n[a] = e[a];
          }
        }
        return n;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) {
          n = i[a];
          if (!t.includes(n)) {
            if ({}.propertyIsEnumerable.call(e, n)) {
              r[n] = e[n];
            }
          }
        }
      }
      return r;
    }
    var c = ["animationData", "loop", "autoplay", "initialSegment", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart", "onConfigReady", "onDataReady", "onDataFailed", "onLoadedImages", "onDOMLoaded", "onDestroy", "lottieRef", "renderer", "name", "assetsPath", "rendererSettings"];
    function y(e, t) {
      var a;
      var s = e.animationData;
      var y = e.loop;
      var d = e.autoplay;
      var m = e.initialSegment;
      var f = e.onComplete;
      var p = e.onLoopComplete;
      var x = e.onEnterFrame;
      var v = e.onSegmentStart;
      var k = e.onConfigReady;
      var g = e.onDataReady;
      var h = e.onDataFailed;
      var b = e.onLoadedImages;
      var S = e.onDOMLoaded;
      var w = e.onDestroy;
      e.lottieRef;
      e.renderer;
      e.name;
      e.assetsPath;
      e.rendererSettings;
      var C = u(e, c);
      var j = function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(a = n.useState(false)) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var a;
          var r;
          var i;
          var o;
          var s = [];
          var l = true;
          var u = false;
          try {
            i = (n = n.call(e)).next;
            for (; !(l = (a = i.call(n)).done) && (s.push(a.value), s.length !== t); l = true);
          } catch (e) {
            u = true;
            r = e;
          } finally {
            try {
              if (!l && n.return != null && (o = n.return(), Object(o) !== o)) {
                return;
              }
            } finally {
              if (u) {
                throw r;
              }
            }
          }
          return s;
        }
      }(a, 2) || function (e, t) {
        if (e) {
          if (typeof e == "string") {
            return o(e, 2);
          }
          var n = {}.toString.call(e).slice(8, -1);
          if (n === "Object" && e.constructor) {
            n = e.constructor.name;
          }
          if (n === "Map" || n === "Set") {
            return Array.from(e);
          } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
            return o(e, t);
          } else {
            return undefined;
          }
        }
      }(a, 2) || function () {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
      var L = j[0];
      var R = j[1];
      var O = n.useRef();
      var A = n.useRef(null);
      function E() {
        var t;
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (A.current) {
          if ((t = O.current) !== null && t !== undefined) {
            t.destroy();
          }
          var a = l(l(l({}, e), n), {}, {
            container: A.current
          });
          O.current = r.default.loadAnimation(a);
          R(!!O.current);
          return function () {
            var e;
            if ((e = O.current) !== null && e !== undefined) {
              e.destroy();
            }
            O.current = undefined;
          };
        }
      }
      n.useEffect(function () {
        var e = E();
        return function () {
          if (e == null) {
            return undefined;
          } else {
            return e();
          }
        };
      }, [s, y]);
      n.useEffect(function () {
        if (O.current) {
          O.current.autoplay = !!d;
        }
      }, [d]);
      n.useEffect(function () {
        if (O.current) {
          if (!m) {
            O.current.resetSegments(true);
            return;
          }
          if (Array.isArray(m) && m.length) {
            if (O.current.currentRawFrame < m[0] || O.current.currentRawFrame > m[1]) {
              O.current.currentRawFrame = m[0];
            }
            O.current.setSegment(m[0], m[1]);
          }
        }
      }, [m]);
      n.useEffect(function () {
        var e = [{
          name: "complete",
          handler: f
        }, {
          name: "loopComplete",
          handler: p
        }, {
          name: "enterFrame",
          handler: x
        }, {
          name: "segmentStart",
          handler: v
        }, {
          name: "config_ready",
          handler: k
        }, {
          name: "data_ready",
          handler: g
        }, {
          name: "data_failed",
          handler: h
        }, {
          name: "loaded_images",
          handler: b
        }, {
          name: "DOMLoaded",
          handler: S
        }, {
          name: "destroy",
          handler: w
        }].filter(function (e) {
          return e.handler != null;
        });
        if (e.length) {
          var t = e.map(function (e) {
            var t;
            if ((t = O.current) !== null && t !== undefined) {
              t.addEventListener(e.name, e.handler);
            }
            return function () {
              var t;
              if ((t = O.current) !== null && t !== undefined) {
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
      }, [f, p, x, v, k, g, h, b, S, w]);
      return {
        View: i.default.createElement("div", l({
          style: t,
          ref: A
        }, C)),
        play: function () {
          var e;
          if ((e = O.current) !== null && e !== undefined) {
            e.play();
          }
        },
        stop: function () {
          var e;
          if ((e = O.current) !== null && e !== undefined) {
            e.stop();
          }
        },
        pause: function () {
          var e;
          if ((e = O.current) !== null && e !== undefined) {
            e.pause();
          }
        },
        setSpeed: function (e) {
          var t;
          if ((t = O.current) !== null && t !== undefined) {
            t.setSpeed(e);
          }
        },
        goToAndStop: function (e, t) {
          var n;
          if ((n = O.current) !== null && n !== undefined) {
            n.goToAndStop(e, t);
          }
        },
        goToAndPlay: function (e, t) {
          var n;
          if ((n = O.current) !== null && n !== undefined) {
            n.goToAndPlay(e, t);
          }
        },
        setDirection: function (e) {
          var t;
          if ((t = O.current) !== null && t !== undefined) {
            t.setDirection(e);
          }
        },
        playSegments: function (e, t) {
          var n;
          if ((n = O.current) !== null && n !== undefined) {
            n.playSegments(e, t);
          }
        },
        setSubframe: function (e) {
          var t;
          if ((t = O.current) !== null && t !== undefined) {
            t.setSubframe(e);
          }
        },
        getDuration: function (e) {
          var t;
          if ((t = O.current) === null || t === undefined) {
            return undefined;
          } else {
            return t.getDuration(e);
          }
        },
        destroy: function () {
          var e;
          if ((e = O.current) !== null && e !== undefined) {
            e.destroy();
          }
          O.current = undefined;
        },
        animationContainerRef: A,
        animationLoaded: L,
        animationItem: O.current
      };
    }
    function d(e) {
      var t = e.wrapperRef;
      var a = e.animationItem;
      var r = e.mode;
      var i = e.actions;
      n.useEffect(function () {
        var e;
        var n;
        var o;
        var s;
        var l;
        var u = t.current;
        if (u && a && i.length) {
          a.stop();
          switch (r) {
            case "scroll":
              e = null;
              n = function () {
                var t;
                var n;
                var r;
                n = (t = u.getBoundingClientRect()).top;
                r = t.height;
                var o = (window.innerHeight - n) / (window.innerHeight + r);
                var s = i.find(function (e) {
                  var t = e.visibility;
                  return t && o >= t[0] && o <= t[1];
                });
                if (s) {
                  if (s.type === "seek" && s.visibility && s.frames.length === 2) {
                    var l = s.frames[0] + Math.ceil((o - s.visibility[0]) / (s.visibility[1] - s.visibility[0]) * s.frames[1]);
                    a.goToAndStop(l - a.firstFrame - 1, true);
                  }
                  if (s.type === "loop") {
                    if (e === null) {
                      a.playSegments(s.frames, true);
                      e = s.frames;
                    } else if (e !== s.frames) {
                      a.playSegments(s.frames, true);
                      e = s.frames;
                    } else if (a.isPaused) {
                      a.playSegments(s.frames, true);
                      e = s.frames;
                    }
                  }
                  if (s.type === "play" && a.isPaused) {
                    a.resetSegments(true);
                    a.play();
                  }
                  if (s.type === "stop") {
                    a.goToAndStop(s.frames[0] - a.firstFrame - 1, true);
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
                var r = t;
                if (n !== -1 && r !== -1) {
                  var o;
                  var s;
                  var l;
                  var c;
                  var y;
                  o = n;
                  s = r;
                  c = (l = u.getBoundingClientRect()).top;
                  y = l.left;
                  var d = {
                    x: (o - y) / l.width,
                    y: (s - c) / l.height
                  };
                  n = d.x;
                  r = d.y;
                }
                var m = i.find(function (e) {
                  var t = e.position;
                  if (t && Array.isArray(t.x) && Array.isArray(t.y)) {
                    return n >= t.x[0] && n <= t.x[1] && r >= t.y[0] && r <= t.y[1];
                  } else {
                    return !!t && !Number.isNaN(t.x) && !Number.isNaN(t.y) && n === t.x && r === t.y;
                  }
                });
                if (m) {
                  if (m.type === "seek" && m.position && Array.isArray(m.position.x) && Array.isArray(m.position.y) && m.frames.length === 2) {
                    var f = (n - m.position.x[0]) / (m.position.x[1] - m.position.x[0]);
                    var p = (r - m.position.y[0]) / (m.position.y[1] - m.position.y[0]);
                    a.playSegments(m.frames, true);
                    a.goToAndStop(Math.ceil((f + p) / 2 * (m.frames[1] - m.frames[0])), true);
                  }
                  if (m.type === "loop") {
                    a.playSegments(m.frames, true);
                  }
                  if (m.type === "play") {
                    if (a.isPaused) {
                      a.resetSegments(false);
                    }
                    a.playSegments(m.frames);
                  }
                  if (m.type === "stop") {
                    a.goToAndStop(m.frames[0], true);
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
      }, [r, a]);
    }
    function m(e) {
      var t = e.actions;
      var n = e.mode;
      var a = e.lottieObj;
      var r = a.animationItem;
      var i = a.View;
      d({
        actions: t,
        animationItem: r,
        mode: n,
        wrapperRef: a.animationContainerRef
      });
      return i;
    }
    var f = ["style", "interactivity"];
    Object.defineProperty(e, "LottiePlayer", {
      enumerable: true,
      get: function () {
        return r.default;
      }
    });
    e.default = function (e) {
      var i = e.style;
      var o = e.interactivity;
      var s = y(u(e, f), i);
      var l = s.View;
      var c = s.play;
      var d = s.stop;
      var p = s.pause;
      var x = s.setSpeed;
      var v = s.goToAndStop;
      var k = s.goToAndPlay;
      var g = s.setDirection;
      var h = s.playSegments;
      var b = s.setSubframe;
      var S = s.getDuration;
      var w = s.destroy;
      var C = s.animationContainerRef;
      var j = s.animationLoaded;
      var L = s.animationItem;
      n.useEffect(function () {
        if (e.lottieRef) {
          e.lottieRef.current = {
            play: c,
            stop: d,
            pause: p,
            setSpeed: x,
            goToAndPlay: k,
            goToAndStop: v,
            setDirection: g,
            playSegments: h,
            setSubframe: b,
            getDuration: S,
            destroy: w,
            animationContainerRef: C,
            animationLoaded: j,
            animationItem: L
          };
        }
      }, [e.lottieRef?.current]);
      return m({
        lottieObj: {
          View: l,
          play: c,
          stop: d,
          pause: p,
          setSpeed: x,
          goToAndStop: v,
          goToAndPlay: k,
          setDirection: g,
          playSegments: h,
          setSubframe: b,
          getDuration: S,
          destroy: w,
          animationContainerRef: C,
          animationLoaded: j,
          animationItem: L
        },
        actions: (o == null ? undefined : o.actions) ?? [],
        mode: (o == null ? undefined : o.mode) ?? "scroll"
      });
    };
    e.useLottie = y;
    e.useLottieInteractivity = m;
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  })(exports, require("lottie-animation-library") /*id: 772627*/, require("react-core-library-reexport") /*id: 634663*/);
}