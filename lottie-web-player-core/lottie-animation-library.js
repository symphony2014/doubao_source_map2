// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97546.60cd30bb.js
         * chunkId: 97546
         * moduleId: 772627
         */
module.exports = function (module, exports, require) {
  if (typeof navigator != "undefined") {
    (function (t, e) {
      module.exports = e();
    })(0, function () {
      "use strict";

      var svgNS = "http://www.w3.org/2000/svg";
      var locationHref = "";
      var _useWebWorker = false;
      var initialDefaultFrame = -999999;
      function setWebWorker(t) {
        _useWebWorker = !!t;
      }
      function getWebWorker() {
        return _useWebWorker;
      }
      function setLocationHref(t) {
        locationHref = t;
      }
      function getLocationHref() {
        return locationHref;
      }
      function createTag(t) {
        return document.createElement(t);
      }
      function extendPrototype(t, e) {
        var i;
        var s;
        var r = t.length;
        for (i = 0; i < r; i += 1) {
          for (var a in s = t[i].prototype) {
            if (Object.prototype.hasOwnProperty.call(s, a)) {
              e.prototype[a] = s[a];
            }
          }
        }
      }
      function getDescriptor(t, e) {
        return Object.getOwnPropertyDescriptor(t, e);
      }
      function createProxyFunction(t) {
        function e() {}
        e.prototype = t;
        return e;
      }
      var audioControllerFactory = function () {
        function t(t) {
          this.audios = [];
          this.audioFactory = t;
          this._volume = 1;
          this._isMuted = false;
        }
        t.prototype = {
          addAudio: function (t) {
            this.audios.push(t);
          },
          pause: function () {
            var t;
            var e = this.audios.length;
            for (t = 0; t < e; t += 1) {
              this.audios[t].pause();
            }
          },
          resume: function () {
            var t;
            var e = this.audios.length;
            for (t = 0; t < e; t += 1) {
              this.audios[t].resume();
            }
          },
          setRate: function (t) {
            var e;
            var i = this.audios.length;
            for (e = 0; e < i; e += 1) {
              this.audios[e].setRate(t);
            }
          },
          createAudio: function (t) {
            if (this.audioFactory) {
              return this.audioFactory(t);
            } else if (window.Howl) {
              return new window.Howl({
                src: [t]
              });
            } else {
              return {
                isPlaying: false,
                play: function () {
                  this.isPlaying = true;
                },
                seek: function () {
                  this.isPlaying = false;
                },
                playing: function () {},
                rate: function () {},
                setVolume: function () {}
              };
            }
          },
          setAudioFactory: function (t) {
            this.audioFactory = t;
          },
          setVolume: function (t) {
            this._volume = t;
            this._updateVolume();
          },
          mute: function () {
            this._isMuted = true;
            this._updateVolume();
          },
          unmute: function () {
            this._isMuted = false;
            this._updateVolume();
          },
          getVolume: function () {
            return this._volume;
          },
          _updateVolume: function () {
            var t;
            var e = this.audios.length;
            for (t = 0; t < e; t += 1) {
              this.audios[t].volume(this._volume * +!this._isMuted);
            }
          }
        };
        return function () {
          return new t();
        };
      }();
      var createTypedArray = function () {
        function t(t, e) {
          var i;
          var s = 0;
          var r = [];
          switch (t) {
            case "int16":
            case "uint8c":
              i = 1;
              break;
            default:
              i = 1.1;
          }
          for (s = 0; s < e; s += 1) {
            r.push(i);
          }
          return r;
        }
        function e(e, i) {
          if (e === "float32") {
            return new Float32Array(i);
          } else if (e === "int16") {
            return new Int16Array(i);
          } else if (e === "uint8c") {
            return new Uint8ClampedArray(i);
          } else {
            return t(e, i);
          }
        }
        if (typeof Uint8ClampedArray == "function" && typeof Float32Array == "function") {
          return e;
        } else {
          return t;
        }
      }();
      function createSizedArray(t) {
        return Array.apply(null, {
          length: t
        });
      }
      function _typeof$6(t) {
        return (_typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t;
        } : function (t) {
          if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof t;
          }
        })(t);
      }
      var subframeEnabled = true;
      var expressionsPlugin = null;
      var expressionsInterfaces = null;
      var idPrefix$1 = "";
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      var _shouldRoundValues = false;
      var bmPow = Math.pow;
      var bmSqrt = Math.sqrt;
      var bmFloor = Math.floor;
      var bmMax = Math.max;
      var bmMin = Math.min;
      var BMMath = {};
      function ProjectInterface$1() {
        return {};
      }
      (function () {
        var t;
        var e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"];
        var i = e.length;
        for (t = 0; t < i; t += 1) {
          BMMath[e[t]] = Math[e[t]];
        }
      })();
      BMMath.random = Math.random;
      BMMath.abs = function (t) {
        if (_typeof$6(t) === "object" && t.length) {
          var e;
          var i = createSizedArray(t.length);
          var s = t.length;
          for (e = 0; e < s; e += 1) {
            i[e] = Math.abs(t[e]);
          }
          return i;
        }
        return Math.abs(t);
      };
      var defaultCurveSegments = 150;
      var degToRads = Math.PI / 180;
      var roundCorner = 0.5519;
      function roundValues(t) {
        _shouldRoundValues = !!t;
      }
      function bmRnd(t) {
        if (_shouldRoundValues) {
          return Math.round(t);
        } else {
          return t;
        }
      }
      function styleDiv(t) {
        t.style.position = "absolute";
        t.style.top = 0;
        t.style.left = 0;
        t.style.display = "block";
        t.style.transformOrigin = "0 0";
        t.style.webkitTransformOrigin = "0 0";
        t.style.backfaceVisibility = "visible";
        t.style.webkitBackfaceVisibility = "visible";
        t.style.transformStyle = "preserve-3d";
        t.style.webkitTransformStyle = "preserve-3d";
        t.style.mozTransformStyle = "preserve-3d";
      }
      function BMEnterFrameEvent(t, e, i, s) {
        this.type = t;
        this.currentTime = e;
        this.totalTime = i;
        this.direction = s < 0 ? -1 : 1;
      }
      function BMCompleteEvent(t, e) {
        this.type = t;
        this.direction = e < 0 ? -1 : 1;
      }
      function BMCompleteLoopEvent(t, e, i, s) {
        this.type = t;
        this.currentLoop = i;
        this.totalLoops = e;
        this.direction = s < 0 ? -1 : 1;
      }
      function BMSegmentStartEvent(t, e, i) {
        this.type = t;
        this.firstFrame = e;
        this.totalFrames = i;
      }
      function BMDestroyEvent(t, e) {
        this.type = t;
        this.target = e;
      }
      function BMRenderFrameErrorEvent(t, e) {
        this.type = "renderFrameError";
        this.nativeError = t;
        this.currentTime = e;
      }
      function BMConfigErrorEvent(t) {
        this.type = "configError";
        this.nativeError = t;
      }
      function BMAnimationConfigErrorEvent(t, e) {
        this.type = t;
        this.nativeError = e;
      }
      var createElementID = function () {
        var t = 0;
        return function () {
          t += 1;
          return idPrefix$1 + "__lottie_element_" + t;
        };
      }();
      function HSVtoRGB(t, e, i) {
        var s;
        var r;
        var a;
        var n;
        var o;
        var h;
        var l;
        var p;
        n = Math.floor(t * 6);
        o = t * 6 - n;
        h = i * (1 - e);
        l = i * (1 - o * e);
        p = i * (1 - (1 - o) * e);
        switch (n % 6) {
          case 0:
            s = i;
            r = p;
            a = h;
            break;
          case 1:
            s = l;
            r = i;
            a = h;
            break;
          case 2:
            s = h;
            r = i;
            a = p;
            break;
          case 3:
            s = h;
            r = l;
            a = i;
            break;
          case 4:
            s = p;
            r = h;
            a = i;
            break;
          case 5:
            s = i;
            r = h;
            a = l;
        }
        return [s, r, a];
      }
      function RGBtoHSV(t, e, i) {
        var s;
        var r = Math.max(t, e, i);
        var a = Math.min(t, e, i);
        var n = r - a;
        var o = r === 0 ? 0 : n / r;
        var h = r / 255;
        switch (r) {
          case a:
            s = 0;
            break;
          case t:
            s = (e - i + (e < i) * 6 * n) / (n * 6);
            break;
          case e:
            s = (i - t + n * 2) / (n * 6);
            break;
          case i:
            s = (t - e + n * 4) / (n * 6);
        }
        return [s, o, h];
      }
      function addSaturationToRGB(t, e) {
        var i = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
        i[1] += e;
        if (i[1] > 1) {
          i[1] = 1;
        } else if (i[1] <= 0) {
          i[1] = 0;
        }
        return HSVtoRGB(i[0], i[1], i[2]);
      }
      function addBrightnessToRGB(t, e) {
        var i = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
        i[2] += e;
        if (i[2] > 1) {
          i[2] = 1;
        } else if (i[2] < 0) {
          i[2] = 0;
        }
        return HSVtoRGB(i[0], i[1], i[2]);
      }
      function addHueToRGB(t, e) {
        var i = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
        i[0] += e / 360;
        if (i[0] > 1) {
          i[0] -= 1;
        } else if (i[0] < 0) {
          i[0] += 1;
        }
        return HSVtoRGB(i[0], i[1], i[2]);
      }
      var rgbToHex = function () {
        var t;
        var e;
        var i = [];
        for (t = 0; t < 256; t += 1) {
          e = t.toString(16);
          i[t] = e.length === 1 ? "0" + e : e;
        }
        return function (t, e, s) {
          if (t < 0) {
            t = 0;
          }
          if (e < 0) {
            e = 0;
          }
          if (s < 0) {
            s = 0;
          }
          return "#" + i[t] + i[e] + i[s];
        };
      }();
      function setSubframeEnabled(t) {
        subframeEnabled = !!t;
      }
      function getSubframeEnabled() {
        return subframeEnabled;
      }
      function setExpressionsPlugin(t) {
        expressionsPlugin = t;
      }
      function getExpressionsPlugin() {
        return expressionsPlugin;
      }
      function setExpressionInterfaces(t) {
        expressionsInterfaces = t;
      }
      function getExpressionInterfaces() {
        return expressionsInterfaces;
      }
      function setDefaultCurveSegments(t) {
        defaultCurveSegments = t;
      }
      function getDefaultCurveSegments() {
        return defaultCurveSegments;
      }
      function setIdPrefix(t) {
        idPrefix$1 = t;
      }
      function getIdPrefix() {
        return idPrefix$1;
      }
      function createNS(t) {
        return document.createElementNS(svgNS, t);
      }
      function _typeof$5(t) {
        return (_typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t;
        } : function (t) {
          if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof t;
          }
        })(t);
      }
      var dataManager = function () {
        var t;
        var e;
        var i = 1;
        var s = [];
        var r = {
          onmessage: function () {},
          postMessage: function (e) {
            t({
              data: e
            });
          }
        };
        var a = {
          postMessage: function (t) {
            r.onmessage({
              data: t
            });
          }
        };
        function n(e) {
          if (window.Worker && window.Blob && getWebWorker()) {
            var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
              type: "text/javascript"
            });
            return new Worker(URL.createObjectURL(i));
          }
          t = e;
          return r;
        }
        function o() {
          if (!e) {
            (e = n(function (t) {
              function e() {
                function t(e, i) {
                  var n;
                  var o;
                  var h;
                  var l;
                  var p;
                  var f;
                  var c = e.length;
                  for (o = 0; o < c; o += 1) {
                    if ("ks" in (n = e[o]) && !n.completed) {
                      n.completed = true;
                      if (n.hasMask) {
                        var u = n.masksProperties;
                        h = 0;
                        l = u.length;
                        for (; h < l; h += 1) {
                          if (u[h].pt.k.i) {
                            a(u[h].pt.k);
                          } else {
                            p = 0;
                            f = u[h].pt.k.length;
                            for (; p < f; p += 1) {
                              if (u[h].pt.k[p].s) {
                                a(u[h].pt.k[p].s[0]);
                              }
                              if (u[h].pt.k[p].e) {
                                a(u[h].pt.k[p].e[0]);
                              }
                            }
                          }
                        }
                      }
                      if (n.ty === 0) {
                        n.layers = s(n.refId, i);
                        t(n.layers, i);
                      } else if (n.ty === 4) {
                        r(n.shapes);
                      } else if (n.ty === 5) {
                        m(n);
                      }
                    }
                  }
                }
                function e(e, i) {
                  if (e) {
                    var r = 0;
                    var a = e.length;
                    for (r = 0; r < a; r += 1) {
                      if (e[r].t === 1) {
                        e[r].data.layers = s(e[r].data.refId, i);
                        t(e[r].data.layers, i);
                      }
                    }
                  }
                }
                function i(t, e) {
                  var i = 0;
                  var s = e.length;
                  while (i < s) {
                    if (e[i].id === t) {
                      return e[i];
                    }
                    i += 1;
                  }
                  return null;
                }
                function s(t, e) {
                  var s = i(t, e);
                  if (s) {
                    if (s.layers.__used) {
                      return JSON.parse(JSON.stringify(s.layers));
                    } else {
                      s.layers.__used = true;
                      return s.layers;
                    }
                  } else {
                    return null;
                  }
                }
                function r(t) {
                  var e;
                  var i;
                  var s;
                  for (e = t.length - 1; e >= 0; e -= 1) {
                    if (t[e].ty === "sh") {
                      if (t[e].ks.k.i) {
                        a(t[e].ks.k);
                      } else {
                        i = 0;
                        s = t[e].ks.k.length;
                        for (; i < s; i += 1) {
                          if (t[e].ks.k[i].s) {
                            a(t[e].ks.k[i].s[0]);
                          }
                          if (t[e].ks.k[i].e) {
                            a(t[e].ks.k[i].e[0]);
                          }
                        }
                      }
                    } else if (t[e].ty === "gr") {
                      r(t[e].it);
                    }
                  }
                }
                function a(t) {
                  var e;
                  var i = t.i.length;
                  for (e = 0; e < i; e += 1) {
                    t.i[e][0] += t.v[e][0];
                    t.i[e][1] += t.v[e][1];
                    t.o[e][0] += t.v[e][0];
                    t.o[e][1] += t.v[e][1];
                  }
                }
                function n(t, e) {
                  var i = e ? e.split(".") : [100, 100, 100];
                  return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null));
                }
                var o = function () {
                  var t = [4, 4, 14];
                  function e(t) {
                    var e = t.t.d;
                    t.t.d = {
                      k: [{
                        s: e,
                        t: 0
                      }]
                    };
                  }
                  function i(t) {
                    var i;
                    var s = t.length;
                    for (i = 0; i < s; i += 1) {
                      if (t[i].ty === 5) {
                        e(t[i]);
                      }
                    }
                  }
                  return function (e) {
                    if (n(t, e.v) && (i(e.layers), e.assets)) {
                      var s;
                      var r = e.assets.length;
                      for (s = 0; s < r; s += 1) {
                        if (e.assets[s].layers) {
                          i(e.assets[s].layers);
                        }
                      }
                    }
                  };
                }();
                var h = function () {
                  var t = [4, 7, 99];
                  return function (e) {
                    if (e.chars && !n(t, e.v)) {
                      var i;
                      var s = e.chars.length;
                      for (i = 0; i < s; i += 1) {
                        var a = e.chars[i];
                        if (a.data && a.data.shapes) {
                          r(a.data.shapes);
                          a.data.ip = 0;
                          a.data.op = 99999;
                          a.data.st = 0;
                          a.data.sr = 1;
                          a.data.ks = {
                            p: {
                              k: [0, 0],
                              a: 0
                            },
                            s: {
                              k: [100, 100],
                              a: 0
                            },
                            a: {
                              k: [0, 0],
                              a: 0
                            },
                            r: {
                              k: 0,
                              a: 0
                            },
                            o: {
                              k: 100,
                              a: 0
                            }
                          };
                          if (!e.chars[i].t) {
                            a.data.shapes.push({
                              ty: "no"
                            });
                            a.data.shapes[0].it.push({
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              },
                              sk: {
                                k: 0,
                                a: 0
                              },
                              sa: {
                                k: 0,
                                a: 0
                              },
                              ty: "tr"
                            });
                          }
                        }
                      }
                    }
                  };
                }();
                var l = function () {
                  var t = [5, 7, 15];
                  function e(t) {
                    var e = t.t.p;
                    if (typeof e.a == "number") {
                      e.a = {
                        a: 0,
                        k: e.a
                      };
                    }
                    if (typeof e.p == "number") {
                      e.p = {
                        a: 0,
                        k: e.p
                      };
                    }
                    if (typeof e.r == "number") {
                      e.r = {
                        a: 0,
                        k: e.r
                      };
                    }
                  }
                  function i(t) {
                    var i;
                    var s = t.length;
                    for (i = 0; i < s; i += 1) {
                      if (t[i].ty === 5) {
                        e(t[i]);
                      }
                    }
                  }
                  return function (e) {
                    if (n(t, e.v) && (i(e.layers), e.assets)) {
                      var s;
                      var r = e.assets.length;
                      for (s = 0; s < r; s += 1) {
                        if (e.assets[s].layers) {
                          i(e.assets[s].layers);
                        }
                      }
                    }
                  };
                }();
                var p = function () {
                  var t = [4, 1, 9];
                  function e(t) {
                    var i;
                    var s;
                    var r;
                    var a = t.length;
                    for (i = 0; i < a; i += 1) {
                      if (t[i].ty === "gr") {
                        e(t[i].it);
                      } else if (t[i].ty === "fl" || t[i].ty === "st") {
                        if (t[i].c.k && t[i].c.k[0].i) {
                          s = 0;
                          r = t[i].c.k.length;
                          for (; s < r; s += 1) {
                            if (t[i].c.k[s].s) {
                              t[i].c.k[s].s[0] /= 255;
                              t[i].c.k[s].s[1] /= 255;
                              t[i].c.k[s].s[2] /= 255;
                              t[i].c.k[s].s[3] /= 255;
                            }
                            if (t[i].c.k[s].e) {
                              t[i].c.k[s].e[0] /= 255;
                              t[i].c.k[s].e[1] /= 255;
                              t[i].c.k[s].e[2] /= 255;
                              t[i].c.k[s].e[3] /= 255;
                            }
                          }
                        } else {
                          t[i].c.k[0] /= 255;
                          t[i].c.k[1] /= 255;
                          t[i].c.k[2] /= 255;
                          t[i].c.k[3] /= 255;
                        }
                      }
                    }
                  }
                  function i(t) {
                    var i;
                    var s = t.length;
                    for (i = 0; i < s; i += 1) {
                      if (t[i].ty === 4) {
                        e(t[i].shapes);
                      }
                    }
                  }
                  return function (e) {
                    if (n(t, e.v) && (i(e.layers), e.assets)) {
                      var s;
                      var r = e.assets.length;
                      for (s = 0; s < r; s += 1) {
                        if (e.assets[s].layers) {
                          i(e.assets[s].layers);
                        }
                      }
                    }
                  };
                }();
                var f = function () {
                  var t = [4, 4, 18];
                  function e(t) {
                    var i;
                    var s;
                    var r;
                    for (i = t.length - 1; i >= 0; i -= 1) {
                      if (t[i].ty === "sh") {
                        if (t[i].ks.k.i) {
                          t[i].ks.k.c = t[i].closed;
                        } else {
                          s = 0;
                          r = t[i].ks.k.length;
                          for (; s < r; s += 1) {
                            if (t[i].ks.k[s].s) {
                              t[i].ks.k[s].s[0].c = t[i].closed;
                            }
                            if (t[i].ks.k[s].e) {
                              t[i].ks.k[s].e[0].c = t[i].closed;
                            }
                          }
                        }
                      } else if (t[i].ty === "gr") {
                        e(t[i].it);
                      }
                    }
                  }
                  function i(t) {
                    var i;
                    var s;
                    var r;
                    var a;
                    var n;
                    var o;
                    var h = t.length;
                    for (s = 0; s < h; s += 1) {
                      if ((i = t[s]).hasMask) {
                        var l = i.masksProperties;
                        r = 0;
                        a = l.length;
                        for (; r < a; r += 1) {
                          if (l[r].pt.k.i) {
                            l[r].pt.k.c = l[r].cl;
                          } else {
                            n = 0;
                            o = l[r].pt.k.length;
                            for (; n < o; n += 1) {
                              if (l[r].pt.k[n].s) {
                                l[r].pt.k[n].s[0].c = l[r].cl;
                              }
                              if (l[r].pt.k[n].e) {
                                l[r].pt.k[n].e[0].c = l[r].cl;
                              }
                            }
                          }
                        }
                      }
                      if (i.ty === 4) {
                        e(i.shapes);
                      }
                    }
                  }
                  return function (e) {
                    if (n(t, e.v) && (i(e.layers), e.assets)) {
                      var s;
                      var r = e.assets.length;
                      for (s = 0; s < r; s += 1) {
                        if (e.assets[s].layers) {
                          i(e.assets[s].layers);
                        }
                      }
                    }
                  };
                }();
                function c(i) {
                  if (!i.__complete) {
                    p(i);
                    o(i);
                    h(i);
                    l(i);
                    f(i);
                    t(i.layers, i.assets);
                    e(i.chars, i.assets);
                    i.__complete = true;
                  }
                }
                function m(t) {
                  if (t.t.a.length === 0) {
                    t.t.p;
                  }
                }
                var u = {
                  completeData: c,
                  checkColors: p,
                  checkChars: h,
                  checkPathProperties: l,
                  checkShapes: f,
                  completeLayers: t
                };
                return u;
              }
              a.dataManager ||= e();
              a.assetLoader ||= function () {
                function t(t) {
                  var e = t.getResponseHeader("content-type");
                  if (e && t.responseType === "json" && e.indexOf("json") !== -1 || t.response && _typeof$5(t.response) === "object") {
                    return t.response;
                  } else if (t.response && typeof t.response == "string") {
                    return JSON.parse(t.response);
                  } else if (t.responseText) {
                    return JSON.parse(t.responseText);
                  } else {
                    return null;
                  }
                }
                return {
                  load: function (e, i, s, r) {
                    var a;
                    var n = new XMLHttpRequest();
                    try {
                      n.responseType = "json";
                    } catch (t) {}
                    n.onreadystatechange = function () {
                      if (n.readyState === 4) {
                        if (n.status === 200) {
                          s(a = t(n));
                        } else {
                          try {
                            a = t(n);
                            s(a);
                          } catch (t) {
                            if (r) {
                              r(t);
                            }
                          }
                        }
                      }
                    };
                    try {
                      n.open("GET", e, true);
                    } catch (t) {
                      n.open("GET", i + "/" + e, true);
                    }
                    n.send();
                  }
                };
              }();
              if (t.data.type === "loadAnimation") {
                a.assetLoader.load(t.data.path, t.data.fullPath, function (e) {
                  a.dataManager.completeData(e);
                  a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  });
                }, function () {
                  a.postMessage({
                    id: t.data.id,
                    status: "error"
                  });
                });
              } else if (t.data.type === "complete") {
                var i = t.data.animation;
                a.dataManager.completeData(i);
                a.postMessage({
                  id: t.data.id,
                  payload: i,
                  status: "success"
                });
              } else if (t.data.type === "loadData") {
                a.assetLoader.load(t.data.path, t.data.fullPath, function (e) {
                  a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  });
                }, function () {
                  a.postMessage({
                    id: t.data.id,
                    status: "error"
                  });
                });
              }
            })).onmessage = function (t) {
              var e = t.data;
              var i = e.id;
              var r = s[i];
              s[i] = null;
              if (e.status === "success") {
                r.onComplete(e.payload);
              } else if (r.onError) {
                r.onError();
              }
            };
          }
        }
        function h(t, e) {
          var r = "processId_" + (i += 1);
          s[r] = {
            onComplete: t,
            onError: e
          };
          return r;
        }
        return {
          loadAnimation: function (t, i, s) {
            o();
            var r = h(i, s);
            e.postMessage({
              type: "loadAnimation",
              path: t,
              fullPath: window.location.origin + window.location.pathname,
              id: r
            });
          },
          loadData: function (t, i, s) {
            o();
            var r = h(i, s);
            e.postMessage({
              type: "loadData",
              path: t,
              fullPath: window.location.origin + window.location.pathname,
              id: r
            });
          },
          completeAnimation: function (t, i, s) {
            o();
            var r = h(i, s);
            e.postMessage({
              type: "complete",
              animation: t,
              id: r
            });
          }
        };
      }();
      var ImagePreloader = function () {
        var t = function () {
          var t = createTag("canvas");
          t.width = 1;
          t.height = 1;
          var e = t.getContext("2d");
          e.fillStyle = "rgba(0,0,0,0)";
          e.fillRect(0, 0, 1, 1);
          return t;
        }();
        function e() {
          this.loadedAssets += 1;
          if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb) {
            this.imagesLoadedCb(null);
          }
        }
        function i() {
          this.loadedFootagesCount += 1;
          if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb) {
            this.imagesLoadedCb(null);
          }
        }
        function s(t, e, i) {
          var s = "";
          if (t.e) {
            s = t.p;
          } else if (e) {
            var r = t.p;
            if (r.indexOf("images/") !== -1) {
              r = r.split("/")[1];
            }
            s = e + r;
          } else {
            s = i + (t.u ? t.u : "") + t.p;
          }
          return s;
        }
        function r(t) {
          var e = 0;
          var i = setInterval(function () {
            if (t.getBBox().width || e > 500) {
              this._imageLoaded();
              clearInterval(i);
            }
            e += 1;
          }.bind(this), 50);
        }
        function a(e) {
          var i = s(e, this.assetsPath, this.path);
          var r = createNS("image");
          if (isSafari) {
            this.testImageLoaded(r);
          } else {
            r.addEventListener("load", this._imageLoaded, false);
          }
          r.addEventListener("error", function () {
            a.img = t;
            this._imageLoaded();
          }.bind(this), false);
          r.setAttributeNS("http://www.w3.org/1999/xlink", "href", i);
          if (this._elementHelper.append) {
            this._elementHelper.append(r);
          } else {
            this._elementHelper.appendChild(r);
          }
          var a = {
            img: r,
            assetData: e
          };
          return a;
        }
        function n(e) {
          var i = s(e, this.assetsPath, this.path);
          var r = createTag("img");
          r.crossOrigin = "anonymous";
          r.addEventListener("load", this._imageLoaded, false);
          r.addEventListener("error", function () {
            a.img = t;
            this._imageLoaded();
          }.bind(this), false);
          r.src = i;
          var a = {
            img: r,
            assetData: e
          };
          return a;
        }
        function o(t) {
          var e = {
            assetData: t
          };
          var i = s(t, this.assetsPath, this.path);
          dataManager.loadData(i, function (t) {
            e.img = t;
            this._footageLoaded();
          }.bind(this), function () {
            e.img = {};
            this._footageLoaded();
          }.bind(this));
          return e;
        }
        function h(t, e) {
          this.imagesLoadedCb = e;
          var i;
          var s = t.length;
          for (i = 0; i < s; i += 1) {
            if (!t[i].layers) {
              if (t[i].t && t[i].t !== "seq") {
                if (t[i].t === 3) {
                  this.totalFootages += 1;
                  this.images.push(this.createFootageData(t[i]));
                }
              } else {
                this.totalImages += 1;
                this.images.push(this._createImageData(t[i]));
              }
            }
          }
        }
        function l(t) {
          this.path = t || "";
        }
        function p(t) {
          this.assetsPath = t || "";
        }
        function f(t) {
          var e = 0;
          var i = this.images.length;
          while (e < i) {
            if (this.images[e].assetData === t) {
              return this.images[e].img;
            }
            e += 1;
          }
          return null;
        }
        function c() {
          this.imagesLoadedCb = null;
          this.images.length = 0;
        }
        function m() {
          return this.totalImages === this.loadedAssets;
        }
        function u() {
          return this.totalFootages === this.loadedFootagesCount;
        }
        function d(t, e) {
          if (t === "svg") {
            this._elementHelper = e;
            this._createImageData = this.createImageData.bind(this);
          } else {
            this._createImageData = this.createImgData.bind(this);
          }
        }
        function g() {
          this._imageLoaded = e.bind(this);
          this._footageLoaded = i.bind(this);
          this.testImageLoaded = r.bind(this);
          this.createFootageData = o.bind(this);
          this.assetsPath = "";
          this.path = "";
          this.totalImages = 0;
          this.totalFootages = 0;
          this.loadedAssets = 0;
          this.loadedFootagesCount = 0;
          this.imagesLoadedCb = null;
          this.images = [];
        }
        g.prototype = {
          loadAssets: h,
          setAssetsPath: p,
          setPath: l,
          loadedImages: m,
          loadedFootages: u,
          destroy: c,
          getAsset: f,
          createImgData: n,
          createImageData: a,
          imageLoaded: e,
          footageLoaded: i,
          setCacheType: d
        };
        return g;
      }();
      function BaseEvent() {}
      BaseEvent.prototype = {
        triggerEvent: function (t, e) {
          if (this._cbs[t]) {
            var i = this._cbs[t];
            var s = 0;
            for (; s < i.length; s += 1) {
              i[s](e);
            }
          }
        },
        addEventListener: function (t, e) {
          this._cbs[t] ||= [];
          this._cbs[t].push(e);
          return function () {
            this.removeEventListener(t, e);
          }.bind(this);
        },
        removeEventListener: function (t, e) {
          if (e) {
            if (this._cbs[t]) {
              var i = 0;
              var s = this._cbs[t].length;
              while (i < s) {
                if (this._cbs[t][i] === e) {
                  this._cbs[t].splice(i, 1);
                  i -= 1;
                  s -= 1;
                }
                i += 1;
              }
              if (!this._cbs[t].length) {
                this._cbs[t] = null;
              }
            }
          } else {
            this._cbs[t] = null;
          }
        }
      };
      var markerParser = function () {
        function t(t) {
          var e;
          var i = t.split("\r\n");
          var s = {};
          var r = 0;
          var a = 0;
          for (; a < i.length; a += 1) {
            if ((e = i[a].split(":")).length === 2) {
              s[e[0]] = e[1].trim();
              r += 1;
            }
          }
          if (r === 0) {
            throw Error();
          }
          return s;
        }
        return function (e) {
          var i = [];
          var s = 0;
          for (; s < e.length; s += 1) {
            var r = e[s];
            var a = {
              time: r.tm,
              duration: r.dr
            };
            try {
              a.payload = JSON.parse(e[s].cm);
            } catch (i) {
              try {
                a.payload = t(e[s].cm);
              } catch (t) {
                a.payload = {
                  name: e[s].cm
                };
              }
            }
            i.push(a);
          }
          return i;
        };
      }();
      var ProjectInterface = function () {
        function t(t) {
          this.compositions.push(t);
        }
        return function () {
          function e(t) {
            var e = 0;
            var i = this.compositions.length;
            while (e < i) {
              if (this.compositions[e].data && this.compositions[e].data.nm === t) {
                if (this.compositions[e].prepareFrame && this.compositions[e].data.xt) {
                  this.compositions[e].prepareFrame(this.currentFrame);
                }
                return this.compositions[e].compInterface;
              }
              e += 1;
            }
            return null;
          }
          e.compositions = [];
          e.currentFrame = 0;
          e.registerComposition = t;
          return e;
        };
      }();
      var renderers = {};
      function registerRenderer(t, e) {
        renderers[t] = e;
      }
      function getRenderer(t) {
        return renderers[t];
      }
      function getRegisteredRenderer() {
        if (renderers.canvas) {
          return "canvas";
        }
        for (var t in renderers) {
          if (renderers[t]) {
            return t;
          }
        }
        return "";
      }
      function _typeof$4(t) {
        return (_typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t;
        } : function (t) {
          if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof t;
          }
        })(t);
      }
      function AnimationItem() {
        this._cbs = [];
        this.name = "";
        this.path = "";
        this.isLoaded = false;
        this.currentFrame = 0;
        this.currentRawFrame = 0;
        this.firstFrame = 0;
        this.totalFrames = 0;
        this.frameRate = 0;
        this.frameMult = 0;
        this.playSpeed = 1;
        this.playDirection = 1;
        this.playCount = 0;
        this.animationData = {};
        this.assets = [];
        this.isPaused = true;
        this.autoplay = false;
        this.loop = true;
        this.renderer = null;
        this.animationID = createElementID();
        this.assetsPath = "";
        this.timeCompleted = 0;
        this.segmentPos = 0;
        this.isSubframeEnabled = getSubframeEnabled();
        this.segments = [];
        this._idle = true;
        this._completedLoop = false;
        this.projectInterface = ProjectInterface();
        this.imagePreloader = new ImagePreloader();
        this.audioController = audioControllerFactory();
        this.markers = [];
        this.configAnimation = this.configAnimation.bind(this);
        this.onSetupError = this.onSetupError.bind(this);
        this.onSegmentComplete = this.onSegmentComplete.bind(this);
        this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0);
        this.expressionsPlugin = getExpressionsPlugin();
      }
      extendPrototype([BaseEvent], AnimationItem);
      AnimationItem.prototype.setParams = function (t) {
        if (t.wrapper || t.container) {
          this.wrapper = t.wrapper || t.container;
        }
        var e = "svg";
        if (t.animType) {
          e = t.animType;
        } else if (t.renderer) {
          e = t.renderer;
        }
        var i = getRenderer(e);
        this.renderer = new i(this, t.rendererSettings);
        this.imagePreloader.setCacheType(e, this.renderer.globalData.defs);
        this.renderer.setProjectInterface(this.projectInterface);
        this.animType = e;
        if (t.loop === "" || t.loop === null || t.loop === undefined || t.loop === true) {
          this.loop = true;
        } else if (t.loop === false) {
          this.loop = false;
        } else {
          this.loop = parseInt(t.loop, 10);
        }
        this.autoplay = !("autoplay" in t) || t.autoplay;
        this.name = t.name ? t.name : "";
        this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments;
        this.assetsPath = t.assetsPath;
        this.initialSegment = t.initialSegment;
        if (t.audioFactory) {
          this.audioController.setAudioFactory(t.audioFactory);
        }
        if (t.animationData) {
          this.setupAnimation(t.animationData);
        } else if (t.path) {
          if (t.path.lastIndexOf("\\") !== -1) {
            this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1);
          } else {
            this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1);
          }
          this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1);
          this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json"));
          dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError);
        }
      };
      AnimationItem.prototype.onSetupError = function () {
        this.trigger("data_failed");
      };
      AnimationItem.prototype.setupAnimation = function (t) {
        dataManager.completeAnimation(t, this.configAnimation);
      };
      AnimationItem.prototype.setData = function (t, e) {
        if (e && _typeof$4(e) !== "object") {
          e = JSON.parse(e);
        }
        var i = {
          wrapper: t,
          animationData: e
        };
        var s = t.attributes;
        i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "";
        i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
        var r = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
        if (r === "false") {
          i.loop = false;
        } else if (r === "true") {
          i.loop = true;
        } else if (r !== "") {
          i.loop = parseInt(r, 10);
        }
        var a = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value;
        i.autoplay = a !== "false";
        i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "";
        if ((s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") === "false") {
          i.prerender = false;
        }
        if (i.path) {
          this.setParams(i);
        } else {
          this.trigger("destroy");
        }
      };
      AnimationItem.prototype.includeLayers = function (t) {
        if (t.op > this.animationData.op) {
          this.animationData.op = t.op;
          this.totalFrames = Math.floor(t.op - this.animationData.ip);
        }
        var e;
        var i;
        var s = this.animationData.layers;
        var r = s.length;
        var a = t.layers;
        var n = a.length;
        for (i = 0; i < n; i += 1) {
          for (e = 0; e < r;) {
            if (s[e].id === a[i].id) {
              s[e] = a[i];
              break;
            }
            e += 1;
          }
        }
        if (t.chars || t.fonts) {
          this.renderer.globalData.fontManager.addChars(t.chars);
          this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs);
        }
        if (t.assets) {
          e = 0;
          r = t.assets.length;
          for (; e < r; e += 1) {
            this.animationData.assets.push(t.assets[e]);
          }
        }
        this.animationData.__complete = false;
        dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
      };
      AnimationItem.prototype.onSegmentComplete = function (t) {
        this.animationData = t;
        var e = getExpressionsPlugin();
        if (e) {
          e.initExpressions(this);
        }
        this.loadNextSegment();
      };
      AnimationItem.prototype.loadNextSegment = function () {
        var t = this.animationData.segments;
        if (!t || t.length === 0 || !this.autoloadSegments) {
          this.trigger("data_ready");
          this.timeCompleted = this.totalFrames;
          return;
        }
        var e = t.shift();
        this.timeCompleted = e.time * this.frameRate;
        var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1;
        dataManager.loadData(i, this.includeLayers.bind(this), function () {
          this.trigger("data_failed");
        }.bind(this));
      };
      AnimationItem.prototype.loadSegments = function () {
        if (!this.animationData.segments) {
          this.timeCompleted = this.totalFrames;
        }
        this.loadNextSegment();
      };
      AnimationItem.prototype.imagesLoaded = function () {
        this.trigger("loaded_images");
        this.checkLoaded();
      };
      AnimationItem.prototype.preloadImages = function () {
        this.imagePreloader.setAssetsPath(this.assetsPath);
        this.imagePreloader.setPath(this.path);
        this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
      };
      AnimationItem.prototype.configAnimation = function (t) {
        if (this.renderer) {
          try {
            this.animationData = t;
            if (this.initialSegment) {
              this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
              this.firstFrame = Math.round(this.initialSegment[0]);
            } else {
              this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
              this.firstFrame = Math.round(this.animationData.ip);
            }
            this.renderer.configAnimation(t);
            t.assets ||= [];
            this.assets = this.animationData.assets;
            this.frameRate = this.animationData.fr;
            this.frameMult = this.animationData.fr / 1000;
            this.renderer.searchExtraCompositions(t.assets);
            this.markers = markerParser(t.markers || []);
            this.trigger("config_ready");
            this.preloadImages();
            this.loadSegments();
            this.updaFrameModifier();
            this.waitForFontsLoaded();
            if (this.isPaused) {
              this.audioController.pause();
            }
          } catch (t) {
            this.triggerConfigError(t);
          }
        }
      };
      AnimationItem.prototype.waitForFontsLoaded = function () {
        if (this.renderer) {
          if (this.renderer.globalData.fontManager.isLoaded) {
            this.checkLoaded();
          } else {
            setTimeout(this.waitForFontsLoaded.bind(this), 20);
          }
        }
      };
      AnimationItem.prototype.checkLoaded = function () {
        if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
          this.isLoaded = true;
          var t = getExpressionsPlugin();
          if (t) {
            t.initExpressions(this);
          }
          this.renderer.initItems();
          setTimeout(function () {
            this.trigger("DOMLoaded");
          }.bind(this), 0);
          this.gotoFrame();
          if (this.autoplay) {
            this.play();
          }
        }
      };
      AnimationItem.prototype.resize = function (t, e) {
        var i = typeof t == "number" ? t : undefined;
        var s = typeof e == "number" ? e : undefined;
        this.renderer.updateContainerSize(i, s);
      };
      AnimationItem.prototype.setSubframe = function (t) {
        this.isSubframeEnabled = !!t;
      };
      AnimationItem.prototype.gotoFrame = function () {
        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame;
        if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
          this.currentFrame = this.timeCompleted;
        }
        this.trigger("enterFrame");
        this.renderFrame();
        this.trigger("drawnFrame");
      };
      AnimationItem.prototype.renderFrame = function () {
        if (this.isLoaded !== false && this.renderer) {
          try {
            if (this.expressionsPlugin) {
              this.expressionsPlugin.resetFrame();
            }
            this.renderer.renderFrame(this.currentFrame + this.firstFrame);
          } catch (t) {
            this.triggerRenderFrameError(t);
          }
        }
      };
      AnimationItem.prototype.play = function (t) {
        if ((!t || this.name === t) && this.isPaused === true) {
          this.isPaused = false;
          this.trigger("_play");
          this.audioController.resume();
          if (this._idle) {
            this._idle = false;
            this.trigger("_active");
          }
        }
      };
      AnimationItem.prototype.pause = function (t) {
        if ((!t || this.name === t) && this.isPaused === false) {
          this.isPaused = true;
          this.trigger("_pause");
          this._idle = true;
          this.trigger("_idle");
          this.audioController.pause();
        }
      };
      AnimationItem.prototype.togglePause = function (t) {
        if (!t || this.name === t) {
          if (this.isPaused === true) {
            this.play();
          } else {
            this.pause();
          }
        }
      };
      AnimationItem.prototype.stop = function (t) {
        if (!t || this.name === t) {
          this.pause();
          this.playCount = 0;
          this._completedLoop = false;
          this.setCurrentRawFrameValue(0);
        }
      };
      AnimationItem.prototype.getMarkerData = function (t) {
        var e;
        var i = 0;
        for (; i < this.markers.length; i += 1) {
          if ((e = this.markers[i]).payload && e.payload.name === t) {
            return e;
          }
        }
        return null;
      };
      AnimationItem.prototype.goToAndStop = function (t, e, i) {
        if (!i || this.name === i) {
          if (isNaN(Number(t))) {
            var s = this.getMarkerData(t);
            if (s) {
              this.goToAndStop(s.time, true);
            }
          } else if (e) {
            this.setCurrentRawFrameValue(t);
          } else {
            this.setCurrentRawFrameValue(t * this.frameModifier);
          }
          this.pause();
        }
      };
      AnimationItem.prototype.goToAndPlay = function (t, e, i) {
        if (!i || this.name === i) {
          var s = Number(t);
          if (isNaN(s)) {
            var r = this.getMarkerData(t);
            if (r) {
              if (r.duration) {
                this.playSegments([r.time, r.time + r.duration], true);
              } else {
                this.goToAndStop(r.time, true);
              }
            }
          } else {
            this.goToAndStop(s, e, i);
          }
          this.play();
        }
      };
      AnimationItem.prototype.advanceTime = function (t) {
        if (this.isPaused !== true && this.isLoaded !== false) {
          var e = this.currentRawFrame + t * this.frameModifier;
          var i = false;
          if (e >= this.totalFrames - 1 && this.frameModifier > 0) {
            if (this.loop && this.playCount !== this.loop) {
              if (e >= this.totalFrames) {
                this.playCount += 1;
                if (!this.checkSegments(e % this.totalFrames)) {
                  this.setCurrentRawFrameValue(e % this.totalFrames);
                  this._completedLoop = true;
                  this.trigger("loopComplete");
                }
              } else {
                this.setCurrentRawFrameValue(e);
              }
            } else if (!this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0)) {
              i = true;
              e = this.totalFrames - 1;
            }
          } else if (e < 0) {
            if (!this.checkSegments(e % this.totalFrames)) {
              if (this.loop && (!(this.playCount-- <= 0) || this.loop === true)) {
                this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames);
                if (this._completedLoop) {
                  this.trigger("loopComplete");
                } else {
                  this._completedLoop = true;
                }
              } else {
                i = true;
                e = 0;
              }
            }
          } else {
            this.setCurrentRawFrameValue(e);
          }
          if (i) {
            this.setCurrentRawFrameValue(e);
            this.pause();
            this.trigger("complete");
          }
        }
      };
      AnimationItem.prototype.adjustSegment = function (t, e) {
        this.playCount = 0;
        if (t[1] < t[0]) {
          if (this.frameModifier > 0) {
            if (this.playSpeed < 0) {
              this.setSpeed(-this.playSpeed);
            } else {
              this.setDirection(-1);
            }
          }
          this.totalFrames = t[0] - t[1];
          this.timeCompleted = this.totalFrames;
          this.firstFrame = t[1];
          this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e);
        } else if (t[1] > t[0]) {
          if (this.frameModifier < 0) {
            if (this.playSpeed < 0) {
              this.setSpeed(-this.playSpeed);
            } else {
              this.setDirection(1);
            }
          }
          this.totalFrames = t[1] - t[0];
          this.timeCompleted = this.totalFrames;
          this.firstFrame = t[0];
          this.setCurrentRawFrameValue(0.001 + e);
        }
        this.trigger("segmentStart");
      };
      AnimationItem.prototype.setSegment = function (t, e) {
        var i = -1;
        if (this.isPaused) {
          if (this.currentRawFrame + this.firstFrame < t) {
            i = t;
          } else if (this.currentRawFrame + this.firstFrame > e) {
            i = e - t;
          }
        }
        this.firstFrame = t;
        this.totalFrames = e - t;
        this.timeCompleted = this.totalFrames;
        if (i !== -1) {
          this.goToAndStop(i, true);
        }
      };
      AnimationItem.prototype.playSegments = function (t, e) {
        if (e) {
          this.segments.length = 0;
        }
        if (_typeof$4(t[0]) === "object") {
          var i;
          var s = t.length;
          for (i = 0; i < s; i += 1) {
            this.segments.push(t[i]);
          }
        } else {
          this.segments.push(t);
        }
        if (this.segments.length && e) {
          this.adjustSegment(this.segments.shift(), 0);
        }
        if (this.isPaused) {
          this.play();
        }
      };
      AnimationItem.prototype.resetSegments = function (t) {
        this.segments.length = 0;
        this.segments.push([this.animationData.ip, this.animationData.op]);
        if (t) {
          this.checkSegments(0);
        }
      };
      AnimationItem.prototype.checkSegments = function (t) {
        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), true);
      };
      AnimationItem.prototype.destroy = function (t) {
        if ((!t || this.name === t) && this.renderer) {
          this.renderer.destroy();
          this.imagePreloader.destroy();
          this.trigger("destroy");
          this._cbs = null;
          this.onEnterFrame = null;
          this.onLoopComplete = null;
          this.onComplete = null;
          this.onSegmentStart = null;
          this.onDestroy = null;
          this.renderer = null;
          this.expressionsPlugin = null;
          this.imagePreloader = null;
          this.projectInterface = null;
        }
      };
      AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
        this.currentRawFrame = t;
        this.gotoFrame();
      };
      AnimationItem.prototype.setSpeed = function (t) {
        this.playSpeed = t;
        this.updaFrameModifier();
      };
      AnimationItem.prototype.setDirection = function (t) {
        this.playDirection = t < 0 ? -1 : 1;
        this.updaFrameModifier();
      };
      AnimationItem.prototype.setLoop = function (t) {
        this.loop = t;
      };
      AnimationItem.prototype.setVolume = function (t, e) {
        if (!e || this.name === e) {
          this.audioController.setVolume(t);
        }
      };
      AnimationItem.prototype.getVolume = function () {
        return this.audioController.getVolume();
      };
      AnimationItem.prototype.mute = function (t) {
        if (!t || this.name === t) {
          this.audioController.mute();
        }
      };
      AnimationItem.prototype.unmute = function (t) {
        if (!t || this.name === t) {
          this.audioController.unmute();
        }
      };
      AnimationItem.prototype.updaFrameModifier = function () {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
        this.audioController.setRate(this.playSpeed * this.playDirection);
      };
      AnimationItem.prototype.getPath = function () {
        return this.path;
      };
      AnimationItem.prototype.getAssetsPath = function (t) {
        var e = "";
        if (t.e) {
          e = t.p;
        } else if (this.assetsPath) {
          var i = t.p;
          if (i.indexOf("images/") !== -1) {
            i = i.split("/")[1];
          }
          e = this.assetsPath + i;
        } else {
          e = this.path + (t.u ? t.u : "") + t.p;
        }
        return e;
      };
      AnimationItem.prototype.getAssetData = function (t) {
        var e = 0;
        var i = this.assets.length;
        while (e < i) {
          if (t === this.assets[e].id) {
            return this.assets[e];
          }
          e += 1;
        }
        return null;
      };
      AnimationItem.prototype.hide = function () {
        this.renderer.hide();
      };
      AnimationItem.prototype.show = function () {
        this.renderer.show();
      };
      AnimationItem.prototype.getDuration = function (t) {
        if (t) {
          return this.totalFrames;
        } else {
          return this.totalFrames / this.frameRate;
        }
      };
      AnimationItem.prototype.updateDocumentData = function (t, e, i) {
        try {
          this.renderer.getElementByPath(t).updateDocumentData(e, i);
        } catch (t) {}
      };
      AnimationItem.prototype.trigger = function (t) {
        if (this._cbs && this._cbs[t]) {
          switch (t) {
            case "enterFrame":
              this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
              break;
            case "drawnFrame":
              this.drawnFrameEvent.currentTime = this.currentFrame;
              this.drawnFrameEvent.totalTime = this.totalFrames;
              this.drawnFrameEvent.direction = this.frameModifier;
              this.triggerEvent(t, this.drawnFrameEvent);
              break;
            case "loopComplete":
              this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
              break;
            case "complete":
              this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
              break;
            case "segmentStart":
              this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
              break;
            case "destroy":
              this.triggerEvent(t, new BMDestroyEvent(t, this));
              break;
            default:
              this.triggerEvent(t);
          }
        }
        if (t === "enterFrame" && this.onEnterFrame) {
          this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult));
        }
        if (t === "loopComplete" && this.onLoopComplete) {
          this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
        }
        if (t === "complete" && this.onComplete) {
          this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult));
        }
        if (t === "segmentStart" && this.onSegmentStart) {
          this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
        }
        if (t === "destroy" && this.onDestroy) {
          this.onDestroy.call(this, new BMDestroyEvent(t, this));
        }
      };
      AnimationItem.prototype.triggerRenderFrameError = function (t) {
        var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
        this.triggerEvent("error", e);
        if (this.onError) {
          this.onError.call(this, e);
        }
      };
      AnimationItem.prototype.triggerConfigError = function (t) {
        var e = new BMConfigErrorEvent(t, this.currentFrame);
        this.triggerEvent("error", e);
        if (this.onError) {
          this.onError.call(this, e);
        }
      };
      var animationManager = function () {
        var t = {};
        var e = [];
        var i = 0;
        var s = 0;
        var r = 0;
        var a = true;
        var n = false;
        function o(t) {
          var i = 0;
          var r = t.target;
          while (i < s) {
            if (e[i].animation === r) {
              e.splice(i, 1);
              i -= 1;
              s -= 1;
              if (!r.isPaused) {
                f();
              }
            }
            i += 1;
          }
        }
        function h(t, i) {
          if (!t) {
            return null;
          }
          for (var r = 0; r < s;) {
            if (e[r].elem === t && e[r].elem !== null) {
              return e[r].animation;
            }
            r += 1;
          }
          var a = new AnimationItem();
          c(a, t);
          a.setData(t, i);
          return a;
        }
        function l() {
          var t;
          var i = e.length;
          var s = [];
          for (t = 0; t < i; t += 1) {
            s.push(e[t].animation);
          }
          return s;
        }
        function p() {
          r += 1;
          D();
        }
        function f() {
          r -= 1;
        }
        function c(t, i) {
          t.addEventListener("destroy", o);
          t.addEventListener("_active", p);
          t.addEventListener("_idle", f);
          e.push({
            elem: i,
            animation: t
          });
          s += 1;
        }
        function m(t) {
          var e = new AnimationItem();
          c(e, null);
          e.setParams(t);
          return e;
        }
        function u(t, i) {
          var r;
          for (r = 0; r < s; r += 1) {
            e[r].animation.setSpeed(t, i);
          }
        }
        function d(t, i) {
          var r;
          for (r = 0; r < s; r += 1) {
            e[r].animation.setDirection(t, i);
          }
        }
        function g(t) {
          var i;
          for (i = 0; i < s; i += 1) {
            e[i].animation.play(t);
          }
        }
        function y(t) {
          var o;
          var h = t - i;
          for (o = 0; o < s; o += 1) {
            e[o].animation.advanceTime(h);
          }
          i = t;
          if (r && !n) {
            window.requestAnimationFrame(y);
          } else {
            a = true;
          }
        }
        function v(t) {
          i = t;
          window.requestAnimationFrame(y);
        }
        function b(t) {
          var i;
          for (i = 0; i < s; i += 1) {
            e[i].animation.pause(t);
          }
        }
        function x(t, i, r) {
          var a;
          for (a = 0; a < s; a += 1) {
            e[a].animation.goToAndStop(t, i, r);
          }
        }
        function _(t) {
          var i;
          for (i = 0; i < s; i += 1) {
            e[i].animation.stop(t);
          }
        }
        function k(t) {
          var i;
          for (i = 0; i < s; i += 1) {
            e[i].animation.togglePause(t);
          }
        }
        function C(t) {
          var i;
          for (i = s - 1; i >= 0; i -= 1) {
            e[i].animation.destroy(t);
          }
        }
        function A(t, e, i) {
          var s;
          var r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin")));
          var a = r.length;
          for (s = 0; s < a; s += 1) {
            if (i) {
              r[s].setAttribute("data-bm-type", i);
            }
            h(r[s], t);
          }
          if (e && a === 0) {
            i ||= "svg";
            var n = document.getElementsByTagName("body")[0];
            n.innerText = "";
            var o = createTag("div");
            o.style.width = "100%";
            o.style.height = "100%";
            o.setAttribute("data-bm-type", i);
            n.appendChild(o);
            h(o, t);
          }
        }
        function P() {
          var t;
          for (t = 0; t < s; t += 1) {
            e[t].animation.resize();
          }
        }
        function D() {
          if (!n && r && a) {
            window.requestAnimationFrame(v);
            a = false;
          }
        }
        function w() {
          n = true;
        }
        function S() {
          n = false;
          D();
        }
        function T(t, i) {
          var r;
          for (r = 0; r < s; r += 1) {
            e[r].animation.setVolume(t, i);
          }
        }
        function M(t) {
          var i;
          for (i = 0; i < s; i += 1) {
            e[i].animation.mute(t);
          }
        }
        function E(t) {
          var i;
          for (i = 0; i < s; i += 1) {
            e[i].animation.unmute(t);
          }
        }
        t.registerAnimation = h;
        t.loadAnimation = m;
        t.setSpeed = u;
        t.setDirection = d;
        t.play = g;
        t.pause = b;
        t.stop = _;
        t.togglePause = k;
        t.searchAnimations = A;
        t.resize = P;
        t.goToAndStop = x;
        t.destroy = C;
        t.freeze = w;
        t.unfreeze = S;
        t.setVolume = T;
        t.mute = M;
        t.unmute = E;
        t.getRegisteredAnimations = l;
        return t;
      }();
      var BezierFactory = function () {
        var t = {
          getBezierEasing: i
        };
        var e = {};
        function i(t, i, s, r, a) {
          var n = a || ("bez_" + t + "_" + i + "_" + s + "_" + r).replace(/\./g, "p");
          if (e[n]) {
            return e[n];
          }
          var o = new y([t, i, s, r]);
          e[n] = o;
          return o;
        }
        var s = 4;
        var r = 0.001;
        var a = 1e-7;
        var n = 10;
        var o = 11;
        var h = 0.1;
        var l = typeof Float32Array == "function";
        function p(t, e) {
          return 1 - e * 3 + t * 3;
        }
        function f(t, e) {
          return e * 3 - t * 6;
        }
        function c(t) {
          return t * 3;
        }
        function m(t, e, i) {
          return ((p(e, i) * t + f(e, i)) * t + c(e)) * t;
        }
        function u(t, e, i) {
          return p(e, i) * 3 * t * t + f(e, i) * 2 * t + c(e);
        }
        function d(t, e, i, s, r) {
          var o;
          var h;
          var l = 0;
          do {
            if ((o = m(h = e + (i - e) / 2, s, r) - t) > 0) {
              i = h;
            } else {
              e = h;
            }
          } while (Math.abs(o) > a && ++l < n);
          return h;
        }
        function g(t, e, i, r) {
          for (var a = 0; a < s; ++a) {
            var n = u(e, i, r);
            if (n === 0) {
              break;
            }
            var o = m(e, i, r) - t;
            e -= o / n;
          }
          return e;
        }
        function y(t) {
          this._p = t;
          this._mSampleValues = l ? new Float32Array(o) : Array(o);
          this._precomputed = false;
          this.get = this.get.bind(this);
        }
        y.prototype = {
          get: function (t) {
            var e = this._p[0];
            var i = this._p[1];
            var s = this._p[2];
            var r = this._p[3];
            if (!this._precomputed) {
              this._precompute();
            }
            if (e === i && s === r) {
              return t;
            } else if (t === 0) {
              return 0;
            } else if (t === 1) {
              return 1;
            } else {
              return m(this._getTForX(t), i, r);
            }
          },
          _precompute: function () {
            var t = this._p[0];
            var e = this._p[1];
            var i = this._p[2];
            var s = this._p[3];
            this._precomputed = true;
            if (t !== e || i !== s) {
              this._calcSampleValues();
            }
          },
          _calcSampleValues: function () {
            var t = this._p[0];
            var e = this._p[2];
            var i = 0;
            for (; i < o; ++i) {
              this._mSampleValues[i] = m(i * h, t, e);
            }
          },
          _getTForX: function (t) {
            var e = this._p[0];
            var i = this._p[2];
            var s = this._mSampleValues;
            var a = 0;
            var n = 1;
            var l = o - 1;
            for (; n !== l && s[n] <= t; ++n) {
              a += h;
            }
            var p = a + (t - s[--n]) / (s[n + 1] - s[n]) * h;
            var f = u(p, e, i);
            if (f >= r) {
              return g(t, p, e, i);
            } else if (f === 0) {
              return p;
            } else {
              return d(t, a, a + h, e, i);
            }
          }
        };
        return t;
      }();
      var pooling = function () {
        return {
          double: function (t) {
            return t.concat(createSizedArray(t.length));
          }
        };
      }();
      var poolFactory = function () {
        return function (t, e, i) {
          var s = 0;
          var r = t;
          var a = createSizedArray(r);
          return {
            newElement: function () {
              var t;
              if (s) {
                s -= 1;
                t = a[s];
              } else {
                t = e();
              }
              return t;
            },
            release: function (t) {
              if (s === r) {
                a = pooling.double(a);
                r *= 2;
              }
              if (i) {
                i(t);
              }
              a[s] = t;
              s += 1;
            }
          };
        };
      }();
      var bezierLengthPool = function () {
        return poolFactory(8, function () {
          return {
            addedLength: 0,
            percents: createTypedArray("float32", getDefaultCurveSegments()),
            lengths: createTypedArray("float32", getDefaultCurveSegments())
          };
        });
      }();
      var segmentsLengthPool = function () {
        return poolFactory(8, function () {
          return {
            lengths: [],
            totalLength: 0
          };
        }, function (t) {
          var e;
          var i = t.lengths.length;
          for (e = 0; e < i; e += 1) {
            bezierLengthPool.release(t.lengths[e]);
          }
          t.lengths.length = 0;
        });
      }();
      function bezFunction() {
        var t = Math;
        function e(t, e, i, s, r, a) {
          var n = t * s + e * r + i * a - r * s - a * t - i * e;
          return n > -0.001 && n < 0.001;
        }
        function i(i, s, r, a, n, o, h, l, p) {
          if (r === 0 && o === 0 && p === 0) {
            return e(i, s, a, n, h, l);
          }
          var f;
          var c = t.sqrt(t.pow(a - i, 2) + t.pow(n - s, 2) + t.pow(o - r, 2));
          var m = t.sqrt(t.pow(h - i, 2) + t.pow(l - s, 2) + t.pow(p - r, 2));
          var u = t.sqrt(t.pow(h - a, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
          return (f = c > m ? c > u ? c - m - u : u - m - c : u > m ? u - m - c : m - c - u) > -0.0001 && f < 0.0001;
        }
        var s = function () {
          return function (t, e, i, s) {
            var r;
            var a;
            var n;
            var o;
            var h;
            var l;
            var p = getDefaultCurveSegments();
            var f = 0;
            var c = [];
            var m = [];
            var u = bezierLengthPool.newElement();
            r = 0;
            n = i.length;
            for (; r < p; r += 1) {
              a = 0;
              h = r / (p - 1);
              l = 0;
              for (; a < n; a += 1) {
                o = bmPow(1 - h, 3) * t[a] + bmPow(1 - h, 2) * 3 * h * i[a] + (1 - h) * 3 * bmPow(h, 2) * s[a] + bmPow(h, 3) * e[a];
                c[a] = o;
                if (m[a] !== null) {
                  l += bmPow(c[a] - m[a], 2);
                }
                m[a] = c[a];
              }
              if (l) {
                f += l = bmSqrt(l);
              }
              u.percents[r] = h;
              u.lengths[r] = f;
            }
            u.addedLength = f;
            return u;
          };
        }();
        function r(t) {
          var e;
          var i = segmentsLengthPool.newElement();
          var r = t.c;
          var a = t.v;
          var n = t.o;
          var o = t.i;
          var h = t._length;
          var l = i.lengths;
          var p = 0;
          for (e = 0; e < h - 1; e += 1) {
            l[e] = s(a[e], a[e + 1], n[e], o[e + 1]);
            p += l[e].addedLength;
          }
          if (r && h) {
            l[e] = s(a[e], a[0], n[e], o[0]);
            p += l[e].addedLength;
          }
          i.totalLength = p;
          return i;
        }
        function a(t) {
          this.segmentLength = 0;
          this.points = Array(t);
        }
        function n(t, e) {
          this.partialLength = t;
          this.point = e;
        }
        var o = function () {
          var t = {};
          return function (i, s, r, o) {
            var h = (i[0] + "_" + i[1] + "_" + s[0] + "_" + s[1] + "_" + r[0] + "_" + r[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
            if (!t[h]) {
              var l;
              var p;
              var f;
              var c;
              var m;
              var u;
              var d;
              var g = getDefaultCurveSegments();
              var y = 0;
              var v = null;
              if (i.length === 2 && (i[0] !== s[0] || i[1] !== s[1]) && e(i[0], i[1], s[0], s[1], i[0] + r[0], i[1] + r[1]) && e(i[0], i[1], s[0], s[1], s[0] + o[0], s[1] + o[1])) {
                g = 2;
              }
              var b = new a(g);
              l = 0;
              f = r.length;
              for (; l < g; l += 1) {
                p = 0;
                d = createSizedArray(f);
                m = l / (g - 1);
                u = 0;
                for (; p < f; p += 1) {
                  c = bmPow(1 - m, 3) * i[p] + bmPow(1 - m, 2) * 3 * m * (i[p] + r[p]) + (1 - m) * 3 * bmPow(m, 2) * (s[p] + o[p]) + bmPow(m, 3) * s[p];
                  d[p] = c;
                  if (v !== null) {
                    u += bmPow(d[p] - v[p], 2);
                  }
                }
                y += u = bmSqrt(u);
                b.points[l] = new n(u, d);
                v = d;
              }
              b.segmentLength = y;
              t[h] = b;
            }
            return t[h];
          };
        }();
        function h(t, e) {
          var i = e.percents;
          var s = e.lengths;
          var r = i.length;
          var a = bmFloor((r - 1) * t);
          var n = t * e.addedLength;
          var o = 0;
          if (a === r - 1 || a === 0 || n === s[a]) {
            return i[a];
          }
          var h = s[a] > n ? -1 : 1;
          var l = true;
          while (l) {
            if (s[a] <= n && s[a + 1] > n) {
              o = (n - s[a]) / (s[a + 1] - s[a]);
              l = false;
            } else {
              a += h;
            }
            if (a < 0 || a >= r - 1) {
              if (a === r - 1) {
                return i[a];
              }
              l = false;
            }
          }
          return i[a] + (i[a + 1] - i[a]) * o;
        }
        function l(e, i, s, r, a, n) {
          var o = h(a, n);
          var l = 1 - o;
          return [t.round((l * l * l * e[0] + (o * l * l + l * o * l + l * l * o) * s[0] + (o * o * l + l * o * o + o * l * o) * r[0] + o * o * o * i[0]) * 1000) / 1000, t.round((l * l * l * e[1] + (o * l * l + l * o * l + l * l * o) * s[1] + (o * o * l + l * o * o + o * l * o) * r[1] + o * o * o * i[1]) * 1000) / 1000];
        }
        var p = createTypedArray("float32", 8);
        return {
          getSegmentsLength: r,
          getNewSegment: function (e, i, s, r, a, n, o) {
            if (a < 0) {
              a = 0;
            } else if (a > 1) {
              a = 1;
            }
            var l;
            var f = h(a, o);
            var c = h(n = n > 1 ? 1 : n, o);
            var m = e.length;
            var u = 1 - f;
            var d = 1 - c;
            var g = u * u * u;
            var y = f * u * u * 3;
            var v = f * f * u * 3;
            var b = f * f * f;
            var x = u * u * d;
            var _ = f * u * d + u * f * d + u * u * c;
            var k = f * f * d + u * f * c + f * u * c;
            var C = f * f * c;
            var A = u * d * d;
            var P = f * d * d + u * c * d + u * d * c;
            var D = f * c * d + u * c * c + f * d * c;
            var w = f * c * c;
            var S = d * d * d;
            var T = c * d * d + d * c * d + d * d * c;
            var M = c * c * d + d * c * c + c * d * c;
            var E = c * c * c;
            for (l = 0; l < m; l += 1) {
              p[l * 4] = t.round((g * e[l] + y * s[l] + v * r[l] + b * i[l]) * 1000) / 1000;
              p[l * 4 + 1] = t.round((x * e[l] + _ * s[l] + k * r[l] + C * i[l]) * 1000) / 1000;
              p[l * 4 + 2] = t.round((A * e[l] + P * s[l] + D * r[l] + w * i[l]) * 1000) / 1000;
              p[l * 4 + 3] = t.round((S * e[l] + T * s[l] + M * r[l] + E * i[l]) * 1000) / 1000;
            }
            return p;
          },
          getPointInSegment: l,
          buildBezierData: o,
          pointOnLine2D: e,
          pointOnLine3D: i
        };
      }
      var bez = bezFunction();
      var initFrame = initialDefaultFrame;
      var mathAbs = Math.abs;
      function interpolateValue(t, e) {
        var i;
        var s;
        var r;
        var a;
        var n;
        var o = this.offsetTime;
        if (this.propType === "multidimensional") {
          g = createTypedArray("float32", this.pv.length);
        }
        var h = e.lastIndex;
        var l = h;
        var p = this.keyframes.length - 1;
        var f = true;
        while (f) {
          y = this.keyframes[l];
          v = this.keyframes[l + 1];
          if (l === p - 1 && t >= v.t - o) {
            if (y.h) {
              y = v;
            }
            h = 0;
            break;
          }
          if (v.t - o > t) {
            h = l;
            break;
          }
          if (l < p - 1) {
            l += 1;
          } else {
            h = 0;
            f = false;
          }
        }
        b = this.keyframesMetadata[l] || {};
        var c = v.t - o;
        var m = y.t - o;
        if (y.to) {
          b.bezierData ||= bez.buildBezierData(y.s, v.s || y.e, y.to, y.ti);
          var u = b.bezierData;
          if (t >= c || t < m) {
            var d = t >= c ? u.points.length - 1 : 0;
            x = 0;
            _ = u.points[d].point.length;
            for (; x < _; x += 1) {
              g[x] = u.points[d].point[x];
            }
          } else {
            if (b.__fnct) {
              P = b.__fnct;
            } else {
              P = BezierFactory.getBezierEasing(y.o.x, y.o.y, y.i.x, y.i.y, y.n).get;
              b.__fnct = P;
            }
            k = P((t - m) / (c - m));
            var g;
            var y;
            var v;
            var b;
            var x;
            var _;
            var k;
            var C;
            var A;
            var P;
            var D;
            var w;
            var S = u.segmentLength * k;
            var T = e.lastFrame < t && e._lastKeyframeIndex === l ? e._lastAddedLength : 0;
            A = e.lastFrame < t && e._lastKeyframeIndex === l ? e._lastPoint : 0;
            f = true;
            C = u.points.length;
            while (f) {
              T += u.points[A].partialLength;
              if (S === 0 || k === 0 || A === u.points.length - 1) {
                x = 0;
                _ = u.points[A].point.length;
                for (; x < _; x += 1) {
                  g[x] = u.points[A].point[x];
                }
                break;
              }
              if (S >= T && S < T + u.points[A + 1].partialLength) {
                x = 0;
                w = (S - T) / u.points[A + 1].partialLength;
                _ = u.points[A].point.length;
                for (; x < _; x += 1) {
                  g[x] = u.points[A].point[x] + (u.points[A + 1].point[x] - u.points[A].point[x]) * w;
                }
                break;
              }
              if (A < C - 1) {
                A += 1;
              } else {
                f = false;
              }
            }
            e._lastPoint = A;
            e._lastAddedLength = T - u.points[A].partialLength;
            e._lastKeyframeIndex = l;
          }
        } else {
          p = y.s.length;
          D = v.s || y.e;
          if (this.sh && y.h !== 1) {
            if (t >= c) {
              g[0] = D[0];
              g[1] = D[1];
              g[2] = D[2];
            } else if (t <= m) {
              g[0] = y.s[0];
              g[1] = y.s[1];
              g[2] = y.s[2];
            } else {
              quaternionToEuler(g, slerp(createQuaternion(y.s), createQuaternion(D), (t - m) / (c - m)));
            }
          } else {
            for (l = 0; l < p; l += 1) {
              if (y.h !== 1) {
                if (t >= c) {
                  k = 1;
                } else if (t < m) {
                  k = 0;
                } else {
                  if (y.o.x.constructor === Array) {
                    b.__fnct ||= [];
                    if (b.__fnct[l]) {
                      P = b.__fnct[l];
                    } else {
                      i = y.o.x[l] === undefined ? y.o.x[0] : y.o.x[l];
                      s = y.o.y[l] === undefined ? y.o.y[0] : y.o.y[l];
                      r = y.i.x[l] === undefined ? y.i.x[0] : y.i.x[l];
                      a = y.i.y[l] === undefined ? y.i.y[0] : y.i.y[l];
                      P = BezierFactory.getBezierEasing(i, s, r, a).get;
                      b.__fnct[l] = P;
                    }
                  } else if (b.__fnct) {
                    P = b.__fnct;
                  } else {
                    i = y.o.x;
                    s = y.o.y;
                    r = y.i.x;
                    a = y.i.y;
                    P = BezierFactory.getBezierEasing(i, s, r, a).get;
                    y.keyframeMetadata = P;
                  }
                  k = P((t - m) / (c - m));
                }
              }
              D = v.s || y.e;
              n = y.h === 1 ? y.s[l] : y.s[l] + (D[l] - y.s[l]) * k;
              if (this.propType === "multidimensional") {
                g[l] = n;
              } else {
                g = n;
              }
            }
          }
        }
        e.lastIndex = h;
        return g;
      }
      function slerp(t, e, i) {
        var s;
        var r;
        var a;
        var n;
        var o;
        var h = [];
        var l = t[0];
        var p = t[1];
        var f = t[2];
        var c = t[3];
        var m = e[0];
        var u = e[1];
        var d = e[2];
        var g = e[3];
        if ((r = l * m + p * u + f * d + c * g) < 0) {
          r = -r;
          m = -m;
          u = -u;
          d = -d;
          g = -g;
        }
        if (1 - r > 0.000001) {
          a = Math.sin(s = Math.acos(r));
          n = Math.sin((1 - i) * s) / a;
          o = Math.sin(i * s) / a;
        } else {
          n = 1 - i;
          o = i;
        }
        h[0] = n * l + o * m;
        h[1] = n * p + o * u;
        h[2] = n * f + o * d;
        h[3] = n * c + o * g;
        return h;
      }
      function quaternionToEuler(t, e) {
        var i = e[0];
        var s = e[1];
        var r = e[2];
        var a = e[3];
        var n = Math.atan2(s * 2 * a - i * 2 * r, 1 - s * 2 * s - r * 2 * r);
        var o = Math.asin(i * 2 * s + r * 2 * a);
        var h = Math.atan2(i * 2 * a - s * 2 * r, 1 - i * 2 * i - r * 2 * r);
        t[0] = n / degToRads;
        t[1] = o / degToRads;
        t[2] = h / degToRads;
      }
      function createQuaternion(t) {
        var e = t[0] * degToRads;
        var i = t[1] * degToRads;
        var s = t[2] * degToRads;
        var r = Math.cos(e / 2);
        var a = Math.cos(i / 2);
        var n = Math.cos(s / 2);
        var o = Math.sin(e / 2);
        var h = Math.sin(i / 2);
        var l = Math.sin(s / 2);
        var p = r * a * n - o * h * l;
        return [o * h * n + r * a * l, o * a * n + r * h * l, r * h * n - o * a * l, p];
      }
      function getValueAtCurrentTime() {
        var t = this.comp.renderedFrame - this.offsetTime;
        var e = this.keyframes[0].t - this.offsetTime;
        var i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        if (t !== this._caching.lastFrame && (this._caching.lastFrame === initFrame || (!(this._caching.lastFrame >= i) || !(t >= i)) && (!(this._caching.lastFrame < e) || !(t < e)))) {
          if (this._caching.lastFrame >= t) {
            this._caching._lastKeyframeIndex = -1;
            this._caching.lastIndex = 0;
          }
          var s = this.interpolateValue(t, this._caching);
          this.pv = s;
        }
        this._caching.lastFrame = t;
        return this.pv;
      }
      function setVValue(t) {
        var e;
        if (this.propType === "unidimensional") {
          e = t * this.mult;
          if (mathAbs(this.v - e) > 0.00001) {
            this.v = e;
            this._mdf = true;
          }
        } else {
          var i = 0;
          var s = this.v.length;
          while (i < s) {
            e = t[i] * this.mult;
            if (mathAbs(this.v[i] - e) > 0.00001) {
              this.v[i] = e;
              this._mdf = true;
            }
            i += 1;
          }
        }
      }
      function processEffectsSequence() {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          this.lock = true;
          this._mdf = this._isFirstFrame;
          var t;
          var e = this.effectsSequence.length;
          var i = this.kf ? this.pv : this.data.k;
          for (t = 0; t < e; t += 1) {
            i = this.effectsSequence[t](i);
          }
          this.setVValue(i);
          this._isFirstFrame = false;
          this.lock = false;
          this.frameId = this.elem.globalData.frameId;
        }
      }
      function addEffect(t) {
        this.effectsSequence.push(t);
        this.container.addDynamicProperty(this);
      }
      function ValueProperty(t, e, i, s) {
        this.propType = "unidimensional";
        this.mult = i || 1;
        this.data = e;
        this.v = i ? e.k * i : e.k;
        this.pv = e.k;
        this._mdf = false;
        this.elem = t;
        this.container = s;
        this.comp = t.comp;
        this.k = false;
        this.kf = false;
        this.vel = 0;
        this.effectsSequence = [];
        this._isFirstFrame = true;
        this.getValue = processEffectsSequence;
        this.setVValue = setVValue;
        this.addEffect = addEffect;
      }
      function MultiDimensionalProperty(t, e, i, s) {
        this.propType = "multidimensional";
        this.mult = i || 1;
        this.data = e;
        this._mdf = false;
        this.elem = t;
        this.container = s;
        this.comp = t.comp;
        this.k = false;
        this.kf = false;
        this.frameId = -1;
        var r;
        var a = e.k.length;
        r = 0;
        this.v = createTypedArray("float32", a);
        this.pv = createTypedArray("float32", a);
        this.vel = createTypedArray("float32", a);
        for (; r < a; r += 1) {
          this.v[r] = e.k[r] * this.mult;
          this.pv[r] = e.k[r];
        }
        this._isFirstFrame = true;
        this.effectsSequence = [];
        this.getValue = processEffectsSequence;
        this.setVValue = setVValue;
        this.addEffect = addEffect;
      }
      function KeyframedValueProperty(t, e, i, s) {
        this.propType = "unidimensional";
        this.keyframes = e.k;
        this.keyframesMetadata = [];
        this.offsetTime = t.data.st;
        this.frameId = -1;
        this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: 0,
          _lastKeyframeIndex: -1
        };
        this.k = true;
        this.kf = true;
        this.data = e;
        this.mult = i || 1;
        this.elem = t;
        this.container = s;
        this.comp = t.comp;
        this.v = initFrame;
        this.pv = initFrame;
        this._isFirstFrame = true;
        this.getValue = processEffectsSequence;
        this.setVValue = setVValue;
        this.interpolateValue = interpolateValue;
        this.effectsSequence = [getValueAtCurrentTime.bind(this)];
        this.addEffect = addEffect;
      }
      function KeyframedMultidimensionalProperty(t, e, i, s) {
        this.propType = "multidimensional";
        var r;
        var a;
        var n;
        var o;
        var h;
        var l = e.k.length;
        for (r = 0; r < l - 1; r += 1) {
          if (e.k[r].to && e.k[r].s && e.k[r + 1] && e.k[r + 1].s) {
            a = e.k[r].s;
            n = e.k[r + 1].s;
            o = e.k[r].to;
            h = e.k[r].ti;
            if (a.length === 2 && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || a.length === 3 && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) {
              e.k[r].to = null;
              e.k[r].ti = null;
            }
            if (a[0] === n[0] && a[1] === n[1] && o[0] === 0 && o[1] === 0 && h[0] === 0 && h[1] === 0 && (a.length === 2 || a[2] === n[2] && o[2] === 0 && h[2] === 0)) {
              e.k[r].to = null;
              e.k[r].ti = null;
            }
          }
        }
        this.effectsSequence = [getValueAtCurrentTime.bind(this)];
        this.data = e;
        this.keyframes = e.k;
        this.keyframesMetadata = [];
        this.offsetTime = t.data.st;
        this.k = true;
        this.kf = true;
        this._isFirstFrame = true;
        this.mult = i || 1;
        this.elem = t;
        this.container = s;
        this.comp = t.comp;
        this.getValue = processEffectsSequence;
        this.setVValue = setVValue;
        this.interpolateValue = interpolateValue;
        this.frameId = -1;
        var p = e.k[0].s.length;
        r = 0;
        this.v = createTypedArray("float32", p);
        this.pv = createTypedArray("float32", p);
        for (; r < p; r += 1) {
          this.v[r] = initFrame;
          this.pv[r] = initFrame;
        }
        this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: createTypedArray("float32", p)
        };
        this.addEffect = addEffect;
      }
      var PropertyFactory = function () {
        return {
          getProp: function (t, e, i, s, r) {
            var a;
            if (e.sid) {
              e = t.globalData.slotManager.getProp(e);
            }
            if (e.k.length) {
              if (typeof e.k[0] == "number") {
                a = new MultiDimensionalProperty(t, e, s, r);
              } else {
                switch (i) {
                  case 0:
                    a = new KeyframedValueProperty(t, e, s, r);
                    break;
                  case 1:
                    a = new KeyframedMultidimensionalProperty(t, e, s, r);
                }
              }
            } else {
              a = new ValueProperty(t, e, s, r);
            }
            if (a.effectsSequence.length) {
              r.addDynamicProperty(a);
            }
            return a;
          }
        };
      }();
      function DynamicPropertyContainer() {}
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function (t) {
          if (this.dynamicProperties.indexOf(t) === -1) {
            this.dynamicProperties.push(t);
            this.container.addDynamicProperty(this);
            this._isAnimated = true;
          }
        },
        iterateDynamicProperties: function () {
          this._mdf = false;
          var t;
          var e = this.dynamicProperties.length;
          for (t = 0; t < e; t += 1) {
            this.dynamicProperties[t].getValue();
            if (this.dynamicProperties[t]._mdf) {
              this._mdf = true;
            }
          }
        },
        initDynamicPropertyContainer: function (t) {
          this.container = t;
          this.dynamicProperties = [];
          this._mdf = false;
          this._isAnimated = false;
        }
      };
      var pointPool = function () {
        return poolFactory(8, function () {
          return createTypedArray("float32", 2);
        });
      }();
      function ShapePath() {
        this.c = false;
        this._length = 0;
        this._maxLength = 8;
        this.v = createSizedArray(this._maxLength);
        this.o = createSizedArray(this._maxLength);
        this.i = createSizedArray(this._maxLength);
      }
      ShapePath.prototype.setPathData = function (t, e) {
        this.c = t;
        this.setLength(e);
        for (var i = 0; i < e;) {
          this.v[i] = pointPool.newElement();
          this.o[i] = pointPool.newElement();
          this.i[i] = pointPool.newElement();
          i += 1;
        }
      };
      ShapePath.prototype.setLength = function (t) {
        while (this._maxLength < t) {
          this.doubleArrayLength();
        }
        this._length = t;
      };
      ShapePath.prototype.doubleArrayLength = function () {
        this.v = this.v.concat(createSizedArray(this._maxLength));
        this.i = this.i.concat(createSizedArray(this._maxLength));
        this.o = this.o.concat(createSizedArray(this._maxLength));
        this._maxLength *= 2;
      };
      ShapePath.prototype.setXYAt = function (t, e, i, s, r) {
        var a;
        this._length = Math.max(this._length, s + 1);
        if (this._length >= this._maxLength) {
          this.doubleArrayLength();
        }
        switch (i) {
          case "v":
            a = this.v;
            break;
          case "i":
            a = this.i;
            break;
          case "o":
            a = this.o;
            break;
          default:
            a = [];
        }
        if (!a[s] || !!a[s] && !r) {
          a[s] = pointPool.newElement();
        }
        a[s][0] = t;
        a[s][1] = e;
      };
      ShapePath.prototype.setTripleAt = function (t, e, i, s, r, a, n, o) {
        this.setXYAt(t, e, "v", n, o);
        this.setXYAt(i, s, "o", n, o);
        this.setXYAt(r, a, "i", n, o);
      };
      ShapePath.prototype.reverse = function () {
        var t;
        var e = new ShapePath();
        e.setPathData(this.c, this._length);
        var i = this.v;
        var s = this.o;
        var r = this.i;
        var a = 0;
        if (this.c) {
          e.setTripleAt(i[0][0], i[0][1], r[0][0], r[0][1], s[0][0], s[0][1], 0, false);
          a = 1;
        }
        var n = this._length - 1;
        var o = this._length;
        for (t = a; t < o; t += 1) {
          e.setTripleAt(i[n][0], i[n][1], r[n][0], r[n][1], s[n][0], s[n][1], t, false);
          n -= 1;
        }
        return e;
      };
      ShapePath.prototype.length = function () {
        return this._length;
      };
      var shapePool = function () {
        function t(t) {
          var i;
          var s = e.newElement();
          var r = t._length === undefined ? t.v.length : t._length;
          s.setLength(r);
          s.c = t.c;
          i = 0;
          for (; i < r; i += 1) {
            s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], i);
          }
          return s;
        }
        var e = poolFactory(4, function () {
          return new ShapePath();
        }, function (t) {
          var e;
          var i = t._length;
          for (e = 0; e < i; e += 1) {
            pointPool.release(t.v[e]);
            pointPool.release(t.i[e]);
            pointPool.release(t.o[e]);
            t.v[e] = null;
            t.i[e] = null;
            t.o[e] = null;
          }
          t._length = 0;
          t.c = false;
        });
        e.clone = t;
        return e;
      }();
      function ShapeCollection() {
        this._length = 0;
        this._maxLength = 4;
        this.shapes = createSizedArray(this._maxLength);
      }
      ShapeCollection.prototype.addShape = function (t) {
        if (this._length === this._maxLength) {
          this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
          this._maxLength *= 2;
        }
        this.shapes[this._length] = t;
        this._length += 1;
      };
      ShapeCollection.prototype.releaseShapes = function () {
        var t;
        for (t = 0; t < this._length; t += 1) {
          shapePool.release(this.shapes[t]);
        }
        this._length = 0;
      };
      var shapeCollectionPool = function () {
        var t = {
          newShapeCollection: r,
          release: a
        };
        var e = 0;
        var i = 4;
        var s = createSizedArray(4);
        function r() {
          var t;
          if (e) {
            e -= 1;
            t = s[e];
          } else {
            t = new ShapeCollection();
          }
          return t;
        }
        function a(t) {
          var r;
          var a = t._length;
          for (r = 0; r < a; r += 1) {
            shapePool.release(t.shapes[r]);
          }
          t._length = 0;
          if (e === i) {
            s = pooling.double(s);
            i *= 2;
          }
          s[e] = t;
          e += 1;
        }
        return t;
      }();
      var ShapePropertyFactory = function () {
        var t = -999999;
        function e(t, e, i) {
          var s = i.lastIndex;
          var r = this.keyframes;
          if (t < r[0].t - this.offsetTime) {
            a = r[0].s[0];
            o = true;
            s = 0;
          } else if (t >= r[r.length - 1].t - this.offsetTime) {
            a = r[r.length - 1].s ? r[r.length - 1].s[0] : r[r.length - 2].e[0];
            o = true;
          } else {
            var a;
            var n;
            var o;
            var h;
            var l;
            var p;
            var f;
            var c;
            var m;
            var u;
            var d;
            var g;
            var y;
            var v = s;
            var b = r.length - 1;
            var x = true;
            while (x && (u = r[v], !((d = r[v + 1]).t - this.offsetTime > t))) {
              if (v < b - 1) {
                v += 1;
              } else {
                x = false;
              }
            }
            g = this.keyframesMetadata[v] || {};
            o = u.h === 1;
            s = v;
            if (!o) {
              if (t >= d.t - this.offsetTime) {
                c = 1;
              } else if (t < u.t - this.offsetTime) {
                c = 0;
              } else {
                if (g.__fnct) {
                  y = g.__fnct;
                } else {
                  y = BezierFactory.getBezierEasing(u.o.x, u.o.y, u.i.x, u.i.y).get;
                  g.__fnct = y;
                }
                c = y((t - (u.t - this.offsetTime)) / (d.t - this.offsetTime - (u.t - this.offsetTime)));
              }
              n = d.s ? d.s[0] : u.e[0];
            }
            a = u.s[0];
          }
          h = 0;
          p = e._length;
          f = a.i[0].length;
          i.lastIndex = s;
          for (; h < p; h += 1) {
            for (l = 0; l < f; l += 1) {
              m = o ? a.i[h][l] : a.i[h][l] + (n.i[h][l] - a.i[h][l]) * c;
              e.i[h][l] = m;
              m = o ? a.o[h][l] : a.o[h][l] + (n.o[h][l] - a.o[h][l]) * c;
              e.o[h][l] = m;
              m = o ? a.v[h][l] : a.v[h][l] + (n.v[h][l] - a.v[h][l]) * c;
              e.v[h][l] = m;
            }
          }
        }
        function i() {
          var e = this.comp.renderedFrame - this.offsetTime;
          var i = this.keyframes[0].t - this.offsetTime;
          var s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          var r = this._caching.lastFrame;
          if (r === t || (!(r < i) || !(e < i)) && (!(r > s) || !(e > s))) {
            this._caching.lastIndex = r < e ? this._caching.lastIndex : 0;
            this.interpolateShape(e, this.pv, this._caching);
          }
          this._caching.lastFrame = e;
          return this.pv;
        }
        function s() {
          this.paths = this.localShapeCollection;
        }
        function r(t, e) {
          if (t._length !== e._length || t.c !== e.c) {
            return false;
          }
          var i;
          var s = t._length;
          for (i = 0; i < s; i += 1) {
            if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) {
              return false;
            }
          }
          return true;
        }
        function a(t) {
          if (!r(this.v, t)) {
            this.v = shapePool.clone(t);
            this.localShapeCollection.releaseShapes();
            this.localShapeCollection.addShape(this.v);
            this._mdf = true;
            this.paths = this.localShapeCollection;
          }
        }
        function n() {
          if (this.elem.globalData.frameId !== this.frameId) {
            if (!this.effectsSequence.length) {
              this._mdf = false;
              return;
            }
            if (this.lock) {
              this.setVValue(this.pv);
              return;
            }
            this.lock = true;
            this._mdf = false;
            t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
            var t;
            var e;
            var i = this.effectsSequence.length;
            for (e = 0; e < i; e += 1) {
              t = this.effectsSequence[e](t);
            }
            this.setVValue(t);
            this.lock = false;
            this.frameId = this.elem.globalData.frameId;
          }
        }
        function o(t, e, i) {
          this.propType = "shape";
          this.comp = t.comp;
          this.container = t;
          this.elem = t;
          this.data = e;
          this.k = false;
          this.kf = false;
          this._mdf = false;
          var r = i === 3 ? e.pt.k : e.ks.k;
          this.v = shapePool.clone(r);
          this.pv = shapePool.clone(this.v);
          this.localShapeCollection = shapeCollectionPool.newShapeCollection();
          this.paths = this.localShapeCollection;
          this.paths.addShape(this.v);
          this.reset = s;
          this.effectsSequence = [];
        }
        function h(t) {
          this.effectsSequence.push(t);
          this.container.addDynamicProperty(this);
        }
        function l(e, r, a) {
          this.propType = "shape";
          this.comp = e.comp;
          this.elem = e;
          this.container = e;
          this.offsetTime = e.data.st;
          this.keyframes = a === 3 ? r.pt.k : r.ks.k;
          this.keyframesMetadata = [];
          this.k = true;
          this.kf = true;
          var n = this.keyframes[0].s[0].i.length;
          this.v = shapePool.newElement();
          this.v.setPathData(this.keyframes[0].s[0].c, n);
          this.pv = shapePool.clone(this.v);
          this.localShapeCollection = shapeCollectionPool.newShapeCollection();
          this.paths = this.localShapeCollection;
          this.paths.addShape(this.v);
          this.lastFrame = t;
          this.reset = s;
          this._caching = {
            lastFrame: t,
            lastIndex: 0
          };
          this.effectsSequence = [i.bind(this)];
        }
        o.prototype.interpolateShape = e;
        o.prototype.getValue = n;
        o.prototype.setVValue = a;
        o.prototype.addEffect = h;
        l.prototype.getValue = n;
        l.prototype.interpolateShape = e;
        l.prototype.setVValue = a;
        l.prototype.addEffect = h;
        var p = function () {
          var t = roundCorner;
          function e(t, e) {
            this.v = shapePool.newElement();
            this.v.setPathData(true, 4);
            this.localShapeCollection = shapeCollectionPool.newShapeCollection();
            this.paths = this.localShapeCollection;
            this.localShapeCollection.addShape(this.v);
            this.d = e.d;
            this.elem = t;
            this.comp = t.comp;
            this.frameId = -1;
            this.initDynamicPropertyContainer(t);
            this.p = PropertyFactory.getProp(t, e.p, 1, 0, this);
            this.s = PropertyFactory.getProp(t, e.s, 1, 0, this);
            if (this.dynamicProperties.length) {
              this.k = true;
            } else {
              this.k = false;
              this.convertEllToPath();
            }
          }
          e.prototype = {
            reset: s,
            getValue: function () {
              if (this.elem.globalData.frameId !== this.frameId) {
                this.frameId = this.elem.globalData.frameId;
                this.iterateDynamicProperties();
                if (this._mdf) {
                  this.convertEllToPath();
                }
              }
            },
            convertEllToPath: function () {
              var e = this.p.v[0];
              var i = this.p.v[1];
              var s = this.s.v[0] / 2;
              var r = this.s.v[1] / 2;
              var a = this.d !== 3;
              var n = this.v;
              n.v[0][0] = e;
              n.v[0][1] = i - r;
              n.v[1][0] = a ? e + s : e - s;
              n.v[1][1] = i;
              n.v[2][0] = e;
              n.v[2][1] = i + r;
              n.v[3][0] = a ? e - s : e + s;
              n.v[3][1] = i;
              n.i[0][0] = a ? e - s * t : e + s * t;
              n.i[0][1] = i - r;
              n.i[1][0] = a ? e + s : e - s;
              n.i[1][1] = i - r * t;
              n.i[2][0] = a ? e + s * t : e - s * t;
              n.i[2][1] = i + r;
              n.i[3][0] = a ? e - s : e + s;
              n.i[3][1] = i + r * t;
              n.o[0][0] = a ? e + s * t : e - s * t;
              n.o[0][1] = i - r;
              n.o[1][0] = a ? e + s : e - s;
              n.o[1][1] = i + r * t;
              n.o[2][0] = a ? e - s * t : e + s * t;
              n.o[2][1] = i + r;
              n.o[3][0] = a ? e - s : e + s;
              n.o[3][1] = i - r * t;
            }
          };
          extendPrototype([DynamicPropertyContainer], e);
          return e;
        }();
        var f = function () {
          function t(t, e) {
            this.v = shapePool.newElement();
            this.v.setPathData(true, 0);
            this.elem = t;
            this.comp = t.comp;
            this.data = e;
            this.frameId = -1;
            this.d = e.d;
            this.initDynamicPropertyContainer(t);
            if (e.sy === 1) {
              this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this);
              this.is = PropertyFactory.getProp(t, e.is, 0, 0.01, this);
              this.convertToPath = this.convertStarToPath;
            } else {
              this.convertToPath = this.convertPolygonToPath;
            }
            this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this);
            this.p = PropertyFactory.getProp(t, e.p, 1, 0, this);
            this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this);
            this.or = PropertyFactory.getProp(t, e.or, 0, 0, this);
            this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this);
            this.localShapeCollection = shapeCollectionPool.newShapeCollection();
            this.localShapeCollection.addShape(this.v);
            this.paths = this.localShapeCollection;
            if (this.dynamicProperties.length) {
              this.k = true;
            } else {
              this.k = false;
              this.convertToPath();
            }
          }
          t.prototype = {
            reset: s,
            getValue: function () {
              if (this.elem.globalData.frameId !== this.frameId) {
                this.frameId = this.elem.globalData.frameId;
                this.iterateDynamicProperties();
                if (this._mdf) {
                  this.convertToPath();
                }
              }
            },
            convertStarToPath: function () {
              var t;
              var e;
              var i;
              var s;
              var r = Math.floor(this.pt.v) * 2;
              var a = Math.PI * 2 / r;
              var n = true;
              var o = this.or.v;
              var h = this.ir.v;
              var l = this.os.v;
              var p = this.is.v;
              var f = Math.PI * 2 * o / (r * 2);
              var c = Math.PI * 2 * h / (r * 2);
              var m = -Math.PI / 2;
              m += this.r.v;
              var u = this.data.d === 3 ? -1 : 1;
              t = 0;
              this.v._length = 0;
              for (; t < r; t += 1) {
                e = n ? o : h;
                i = n ? l : p;
                s = n ? f : c;
                var d = e * Math.cos(m);
                var g = e * Math.sin(m);
                var y = d === 0 && g === 0 ? 0 : g / Math.sqrt(d * d + g * g);
                var v = d === 0 && g === 0 ? 0 : -d / Math.sqrt(d * d + g * g);
                d += +this.p.v[0];
                g += +this.p.v[1];
                this.v.setTripleAt(d, g, d - y * s * i * u, g - v * s * i * u, d + y * s * i * u, g + v * s * i * u, t, true);
                n = !n;
                m += a * u;
              }
            },
            convertPolygonToPath: function () {
              var t;
              var e = Math.floor(this.pt.v);
              var i = Math.PI * 2 / e;
              var s = this.or.v;
              var r = this.os.v;
              var a = Math.PI * 2 * s / (e * 4);
              var n = -(Math.PI * 0.5);
              var o = this.data.d === 3 ? -1 : 1;
              n += this.r.v;
              this.v._length = 0;
              t = 0;
              for (; t < e; t += 1) {
                var h = s * Math.cos(n);
                var l = s * Math.sin(n);
                var p = h === 0 && l === 0 ? 0 : l / Math.sqrt(h * h + l * l);
                var f = h === 0 && l === 0 ? 0 : -h / Math.sqrt(h * h + l * l);
                h += +this.p.v[0];
                l += +this.p.v[1];
                this.v.setTripleAt(h, l, h - p * a * r * o, l - f * a * r * o, h + p * a * r * o, l + f * a * r * o, t, true);
                n += i * o;
              }
              this.paths.length = 0;
              this.paths[0] = this.v;
            }
          };
          extendPrototype([DynamicPropertyContainer], t);
          return t;
        }();
        var c = function () {
          function t(t, e) {
            this.v = shapePool.newElement();
            this.v.c = true;
            this.localShapeCollection = shapeCollectionPool.newShapeCollection();
            this.localShapeCollection.addShape(this.v);
            this.paths = this.localShapeCollection;
            this.elem = t;
            this.comp = t.comp;
            this.frameId = -1;
            this.d = e.d;
            this.initDynamicPropertyContainer(t);
            this.p = PropertyFactory.getProp(t, e.p, 1, 0, this);
            this.s = PropertyFactory.getProp(t, e.s, 1, 0, this);
            this.r = PropertyFactory.getProp(t, e.r, 0, 0, this);
            if (this.dynamicProperties.length) {
              this.k = true;
            } else {
              this.k = false;
              this.convertRectToPath();
            }
          }
          t.prototype = {
            convertRectToPath: function () {
              var t = this.p.v[0];
              var e = this.p.v[1];
              var i = this.s.v[0] / 2;
              var s = this.s.v[1] / 2;
              var r = bmMin(i, s, this.r.v);
              var a = r * (1 - roundCorner);
              this.v._length = 0;
              if (this.d === 2 || this.d === 1) {
                this.v.setTripleAt(t + i, e - s + r, t + i, e - s + r, t + i, e - s + a, 0, true);
                this.v.setTripleAt(t + i, e + s - r, t + i, e + s - a, t + i, e + s - r, 1, true);
                if (r !== 0) {
                  this.v.setTripleAt(t + i - r, e + s, t + i - r, e + s, t + i - a, e + s, 2, true);
                  this.v.setTripleAt(t - i + r, e + s, t - i + a, e + s, t - i + r, e + s, 3, true);
                  this.v.setTripleAt(t - i, e + s - r, t - i, e + s - r, t - i, e + s - a, 4, true);
                  this.v.setTripleAt(t - i, e - s + r, t - i, e - s + a, t - i, e - s + r, 5, true);
                  this.v.setTripleAt(t - i + r, e - s, t - i + r, e - s, t - i + a, e - s, 6, true);
                  this.v.setTripleAt(t + i - r, e - s, t + i - a, e - s, t + i - r, e - s, 7, true);
                } else {
                  this.v.setTripleAt(t - i, e + s, t - i + a, e + s, t - i, e + s, 2);
                  this.v.setTripleAt(t - i, e - s, t - i, e - s + a, t - i, e - s, 3);
                }
              } else {
                this.v.setTripleAt(t + i, e - s + r, t + i, e - s + a, t + i, e - s + r, 0, true);
                if (r !== 0) {
                  this.v.setTripleAt(t + i - r, e - s, t + i - r, e - s, t + i - a, e - s, 1, true);
                  this.v.setTripleAt(t - i + r, e - s, t - i + a, e - s, t - i + r, e - s, 2, true);
                  this.v.setTripleAt(t - i, e - s + r, t - i, e - s + r, t - i, e - s + a, 3, true);
                  this.v.setTripleAt(t - i, e + s - r, t - i, e + s - a, t - i, e + s - r, 4, true);
                  this.v.setTripleAt(t - i + r, e + s, t - i + r, e + s, t - i + a, e + s, 5, true);
                  this.v.setTripleAt(t + i - r, e + s, t + i - a, e + s, t + i - r, e + s, 6, true);
                  this.v.setTripleAt(t + i, e + s - r, t + i, e + s - r, t + i, e + s - a, 7, true);
                } else {
                  this.v.setTripleAt(t - i, e - s, t - i + a, e - s, t - i, e - s, 1, true);
                  this.v.setTripleAt(t - i, e + s, t - i, e + s - a, t - i, e + s, 2, true);
                  this.v.setTripleAt(t + i, e + s, t + i - a, e + s, t + i, e + s, 3, true);
                }
              }
            },
            getValue: function () {
              if (this.elem.globalData.frameId !== this.frameId) {
                this.frameId = this.elem.globalData.frameId;
                this.iterateDynamicProperties();
                if (this._mdf) {
                  this.convertRectToPath();
                }
              }
            },
            reset: s
          };
          extendPrototype([DynamicPropertyContainer], t);
          return t;
        }();
        function m(t, e, i) {
          var s;
          if (i === 3 || i === 4) {
            s = (i === 3 ? e.pt : e.ks).k.length ? new l(t, e, i) : new o(t, e, i);
          } else if (i === 5) {
            s = new c(t, e);
          } else if (i === 6) {
            s = new p(t, e);
          } else if (i === 7) {
            s = new f(t, e);
          }
          if (s.k) {
            t.addDynamicProperty(s);
          }
          return s;
        }
        function u() {
          return o;
        }
        function d() {
          return l;
        }
        var g = {
          getShapeProp: m,
          getConstructorFunction: u,
          getKeyframedConstructorFunction: d
        };
        return g;
      }();
      var Matrix = function () {
        var t = Math.cos;
        var e = Math.sin;
        var i = Math.tan;
        var s = Math.round;
        function r() {
          this.props[0] = 1;
          this.props[1] = 0;
          this.props[2] = 0;
          this.props[3] = 0;
          this.props[4] = 0;
          this.props[5] = 1;
          this.props[6] = 0;
          this.props[7] = 0;
          this.props[8] = 0;
          this.props[9] = 0;
          this.props[10] = 1;
          this.props[11] = 0;
          this.props[12] = 0;
          this.props[13] = 0;
          this.props[14] = 0;
          this.props[15] = 1;
          return this;
        }
        function a(i) {
          if (i === 0) {
            return this;
          }
          var s = t(i);
          var r = e(i);
          return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function n(i) {
          if (i === 0) {
            return this;
          }
          var s = t(i);
          var r = e(i);
          return this._t(1, 0, 0, 0, 0, s, -r, 0, 0, r, s, 0, 0, 0, 0, 1);
        }
        function o(i) {
          if (i === 0) {
            return this;
          }
          var s = t(i);
          var r = e(i);
          return this._t(s, 0, r, 0, 0, 1, 0, 0, -r, 0, s, 0, 0, 0, 0, 1);
        }
        function h(i) {
          if (i === 0) {
            return this;
          }
          var s = t(i);
          var r = e(i);
          return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function l(t, e) {
          return this._t(1, e, t, 1, 0, 0);
        }
        function p(t, e) {
          return this.shear(i(t), i(e));
        }
        function f(s, r) {
          var a = t(r);
          var n = e(r);
          return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function c(t, e, i) {
          if (!i && i !== 0) {
            i = 1;
          }
          if (t === 1 && e === 1 && i === 1) {
            return this;
          } else {
            return this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1);
          }
        }
        function m(t, e, i, s, r, a, n, o, h, l, p, f, c, m, u, d) {
          this.props[0] = t;
          this.props[1] = e;
          this.props[2] = i;
          this.props[3] = s;
          this.props[4] = r;
          this.props[5] = a;
          this.props[6] = n;
          this.props[7] = o;
          this.props[8] = h;
          this.props[9] = l;
          this.props[10] = p;
          this.props[11] = f;
          this.props[12] = c;
          this.props[13] = m;
          this.props[14] = u;
          this.props[15] = d;
          return this;
        }
        function u(t, e, i) {
          i = i || 0;
          if (t !== 0 || e !== 0 || i !== 0) {
            return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1);
          } else {
            return this;
          }
        }
        function d(t, e, i, s, r, a, n, o, h, l, p, f, c, m, u, d) {
          var g = this.props;
          if (t === 1 && e === 0 && i === 0 && s === 0 && r === 0 && a === 1 && n === 0 && o === 0 && h === 0 && l === 0 && p === 1 && f === 0) {
            g[12] = g[12] * t + g[15] * c;
            g[13] = g[13] * a + g[15] * m;
            g[14] = g[14] * p + g[15] * u;
            g[15] *= d;
            this._identityCalculated = false;
            return this;
          }
          var y = g[0];
          var v = g[1];
          var b = g[2];
          var x = g[3];
          var _ = g[4];
          var k = g[5];
          var C = g[6];
          var A = g[7];
          var P = g[8];
          var D = g[9];
          var w = g[10];
          var S = g[11];
          var T = g[12];
          var M = g[13];
          var E = g[14];
          var F = g[15];
          g[0] = y * t + v * r + b * h + x * c;
          g[1] = y * e + v * a + b * l + x * m;
          g[2] = y * i + v * n + b * p + x * u;
          g[3] = y * s + v * o + b * f + x * d;
          g[4] = _ * t + k * r + C * h + A * c;
          g[5] = _ * e + k * a + C * l + A * m;
          g[6] = _ * i + k * n + C * p + A * u;
          g[7] = _ * s + k * o + C * f + A * d;
          g[8] = P * t + D * r + w * h + S * c;
          g[9] = P * e + D * a + w * l + S * m;
          g[10] = P * i + D * n + w * p + S * u;
          g[11] = P * s + D * o + w * f + S * d;
          g[12] = T * t + M * r + E * h + F * c;
          g[13] = T * e + M * a + E * l + F * m;
          g[14] = T * i + M * n + E * p + F * u;
          g[15] = T * s + M * o + E * f + F * d;
          this._identityCalculated = false;
          return this;
        }
        function g(t) {
          var e = t.props;
          return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
        }
        function y() {
          if (!this._identityCalculated) {
            this._identity = this.props[0] === 1 && this.props[1] === 0 && this.props[2] === 0 && this.props[3] === 0 && this.props[4] === 0 && this.props[5] === 1 && this.props[6] === 0 && this.props[7] === 0 && this.props[8] === 0 && this.props[9] === 0 && this.props[10] === 1 && this.props[11] === 0 && this.props[12] === 0 && this.props[13] === 0 && this.props[14] === 0 && this.props[15] === 1;
            this._identityCalculated = true;
          }
          return this._identity;
        }
        function v(t) {
          for (var e = 0; e < 16;) {
            if (t.props[e] !== this.props[e]) {
              return false;
            }
            e += 1;
          }
          return true;
        }
        function b(t) {
          var e;
          for (e = 0; e < 16; e += 1) {
            t.props[e] = this.props[e];
          }
          return t;
        }
        function x(t) {
          var e;
          for (e = 0; e < 16; e += 1) {
            this.props[e] = t[e];
          }
        }
        function _(t, e, i) {
          return {
            x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
            y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
            z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
          };
        }
        function k(t, e, i) {
          return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12];
        }
        function C(t, e, i) {
          return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13];
        }
        function A(t, e, i) {
          return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14];
        }
        function P() {
          var t = this.props[0] * this.props[5] - this.props[1] * this.props[4];
          var e = this.props[5] / t;
          var i = -this.props[1] / t;
          var s = -this.props[4] / t;
          var r = this.props[0] / t;
          var a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t;
          var n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t;
          var o = new Matrix();
          o.props[0] = e;
          o.props[1] = i;
          o.props[4] = s;
          o.props[5] = r;
          o.props[12] = a;
          o.props[13] = n;
          return o;
        }
        function D(t) {
          return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0);
        }
        function w(t) {
          var e;
          var i = t.length;
          var s = [];
          for (e = 0; e < i; e += 1) {
            s[e] = D(t[e]);
          }
          return s;
        }
        function S(t, e, i) {
          var s = createTypedArray("float32", 6);
          if (this.isIdentity()) {
            s[0] = t[0];
            s[1] = t[1];
            s[2] = e[0];
            s[3] = e[1];
            s[4] = i[0];
            s[5] = i[1];
          } else {
            var r = this.props[0];
            var a = this.props[1];
            var n = this.props[4];
            var o = this.props[5];
            var h = this.props[12];
            var l = this.props[13];
            s[0] = t[0] * r + t[1] * n + h;
            s[1] = t[0] * a + t[1] * o + l;
            s[2] = e[0] * r + e[1] * n + h;
            s[3] = e[0] * a + e[1] * o + l;
            s[4] = i[0] * r + i[1] * n + h;
            s[5] = i[0] * a + i[1] * o + l;
          }
          return s;
        }
        function T(t, e, i) {
          var s;
          if (this.isIdentity()) {
            return [t, e, i];
          } else {
            return [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]];
          }
        }
        function M(t, e) {
          if (this.isIdentity()) {
            return t + "," + e;
          }
          var i = this.props;
          return Math.round((t * i[0] + e * i[4] + i[12]) * 100) / 100 + "," + Math.round((t * i[1] + e * i[5] + i[13]) * 100) / 100;
        }
        function E() {
          var t = 0;
          var e = this.props;
          var i = "matrix3d(";
          var r = 10000;
          while (t < 16) {
            i += s(e[t] * r) / r;
            i += t === 15 ? ")" : ",";
            t += 1;
          }
          return i;
        }
        function F(t) {
          var e = 10000;
          if (t < 0.000001 && t > 0 || t > -0.000001 && t < 0) {
            return s(t * e) / e;
          } else {
            return t;
          }
        }
        function I() {
          var t = this.props;
          return "matrix(" + F(t[0]) + "," + F(t[1]) + "," + F(t[4]) + "," + F(t[5]) + "," + F(t[12]) + "," + F(t[13]) + ")";
        }
        return function () {
          this.reset = r;
          this.rotate = a;
          this.rotateX = n;
          this.rotateY = o;
          this.rotateZ = h;
          this.skew = p;
          this.skewFromAxis = f;
          this.shear = l;
          this.scale = c;
          this.setTransform = m;
          this.translate = u;
          this.transform = d;
          this.multiply = g;
          this.applyToPoint = _;
          this.applyToX = k;
          this.applyToY = C;
          this.applyToZ = A;
          this.applyToPointArray = T;
          this.applyToTriplePoints = S;
          this.applyToPointStringified = M;
          this.toCSS = E;
          this.to2dCSS = I;
          this.clone = b;
          this.cloneFromProps = x;
          this.equals = v;
          this.inversePoints = w;
          this.inversePoint = D;
          this.getInverseMatrix = P;
          this._t = this.transform;
          this.isIdentity = y;
          this._identity = true;
          this._identityCalculated = false;
          this.props = createTypedArray("float32", 16);
          this.reset();
        };
      }();
      function _typeof$3(t) {
        return (_typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t;
        } : function (t) {
          if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof t;
          }
        })(t);
      }
      var lottie = {};
      var standalone = "__[STANDALONE]__";
      var animationData = "__[ANIMATIONDATA]__";
      var renderer = "";
      function setLocation(t) {
        setLocationHref(t);
      }
      function searchAnimations() {
        if (standalone === true) {
          animationManager.searchAnimations(animationData, standalone, renderer);
        } else {
          animationManager.searchAnimations();
        }
      }
      function setSubframeRendering(t) {
        setSubframeEnabled(t);
      }
      function setPrefix(t) {
        setIdPrefix(t);
      }
      function loadAnimation(t) {
        if (standalone === true) {
          t.animationData = JSON.parse(animationData);
        }
        return animationManager.loadAnimation(t);
      }
      function setQuality(t) {
        if (typeof t == "string") {
          switch (t) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10);
          }
        } else if (!isNaN(t) && t > 1) {
          setDefaultCurveSegments(t);
        }
        if (getDefaultCurveSegments() >= 50) {
          roundValues(false);
        } else {
          roundValues(true);
        }
      }
      function inBrowser() {
        return typeof navigator != "undefined";
      }
      function installPlugin(t, e) {
        if (t === "expressions") {
          setExpressionsPlugin(e);
        }
      }
      function getFactory(t) {
        switch (t) {
          case "propertyFactory":
            return PropertyFactory;
          case "shapePropertyFactory":
            return ShapePropertyFactory;
          case "matrix":
            return Matrix;
          default:
            return null;
        }
      }
      function checkReady() {
        if (document.readyState === "complete") {
          clearInterval(readyStateCheckInterval);
          searchAnimations();
        }
      }
      function getQueryVariable(t) {
        var e = queryString.split("&");
        var i = 0;
        for (; i < e.length; i += 1) {
          var s = e[i].split("=");
          if (decodeURIComponent(s[0]) == t) {
            return decodeURIComponent(s[1]);
          }
        }
        return null;
      }
      lottie.play = animationManager.play;
      lottie.pause = animationManager.pause;
      lottie.setLocationHref = setLocation;
      lottie.togglePause = animationManager.togglePause;
      lottie.setSpeed = animationManager.setSpeed;
      lottie.setDirection = animationManager.setDirection;
      lottie.stop = animationManager.stop;
      lottie.searchAnimations = searchAnimations;
      lottie.registerAnimation = animationManager.registerAnimation;
      lottie.loadAnimation = loadAnimation;
      lottie.setSubframeRendering = setSubframeRendering;
      lottie.resize = animationManager.resize;
      lottie.goToAndStop = animationManager.goToAndStop;
      lottie.destroy = animationManager.destroy;
      lottie.setQuality = setQuality;
      lottie.inBrowser = inBrowser;
      lottie.installPlugin = installPlugin;
      lottie.freeze = animationManager.freeze;
      lottie.unfreeze = animationManager.unfreeze;
      lottie.setVolume = animationManager.setVolume;
      lottie.mute = animationManager.mute;
      lottie.unmute = animationManager.unmute;
      lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
      lottie.useWebWorker = setWebWorker;
      lottie.setIDPrefix = setPrefix;
      lottie.__getFactory = getFactory;
      lottie.version = "5.12.2";
      var queryString = "";
      if (standalone) {
        var scripts = document.getElementsByTagName("script");
        var index = scripts.length - 1;
        var myScript = scripts[index] || {
          src: ""
        };
        queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "";
        renderer = getQueryVariable("renderer");
      }
      var readyStateCheckInterval = setInterval(checkReady, 100);
      try {
        if (_typeof$3(exports) !== "object" && (typeof define != "function" || !define.amd)) {
          window.bodymovin = lottie;
        }
      } catch (err) {}
      var ShapeModifiers = function () {
        var t = {};
        var e = {};
        function i(t, i) {
          e[t] ||= i;
        }
        function s(t, i, s) {
          return new e[t](i, s);
        }
        t.registerModifier = i;
        t.getModifier = s;
        return t;
      }();
      function ShapeModifier() {}
      function TrimModifier() {}
      function PuckerAndBloatModifier() {}
      ShapeModifier.prototype.initModifierProperties = function () {};
      ShapeModifier.prototype.addShapeToModifier = function () {};
      ShapeModifier.prototype.addShape = function (t) {
        if (!this.closed) {
          t.sh.container.addDynamicProperty(t.sh);
          var e = {
            shape: t.sh,
            data: t,
            localShapeCollection: shapeCollectionPool.newShapeCollection()
          };
          this.shapes.push(e);
          this.addShapeToModifier(e);
          if (this._isAnimated) {
            t.setAsAnimated();
          }
        }
      };
      ShapeModifier.prototype.init = function (t, e) {
        this.shapes = [];
        this.elem = t;
        this.initDynamicPropertyContainer(t);
        this.initModifierProperties(t, e);
        this.frameId = initialDefaultFrame;
        this.closed = false;
        this.k = false;
        if (this.dynamicProperties.length) {
          this.k = true;
        } else {
          this.getValue(true);
        }
      };
      ShapeModifier.prototype.processKeys = function () {
        if (this.elem.globalData.frameId !== this.frameId) {
          this.frameId = this.elem.globalData.frameId;
          this.iterateDynamicProperties();
        }
      };
      extendPrototype([DynamicPropertyContainer], ShapeModifier);
      extendPrototype([ShapeModifier], TrimModifier);
      TrimModifier.prototype.initModifierProperties = function (t, e) {
        this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this);
        this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this);
        this.o = PropertyFactory.getProp(t, e.o, 0, 0, this);
        this.sValue = 0;
        this.eValue = 0;
        this.getValue = this.processKeys;
        this.m = e.m;
        this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
      };
      TrimModifier.prototype.addShapeToModifier = function (t) {
        t.pathsData = [];
      };
      TrimModifier.prototype.calculateShapeEdges = function (t, e, i, s, r) {
        var a;
        var n;
        var o;
        var h = [];
        if (e <= 1) {
          h.push({
            s: t,
            e: e
          });
        } else if (t >= 1) {
          h.push({
            s: t - 1,
            e: e - 1
          });
        } else {
          h.push({
            s: t,
            e: 1
          });
          h.push({
            s: 0,
            e: e - 1
          });
        }
        var l = [];
        var p = h.length;
        for (a = 0; a < p; a += 1) {
          if (!((n = h[a]).e * r < s) && !(n.s * r > s + i)) {
            o = n.s * r <= s ? 0 : (n.s * r - s) / i;
            l.push([o, n.e * r >= s + i ? 1 : (n.e * r - s) / i]);
          }
        }
        if (!l.length) {
          l.push([0, 0]);
        }
        return l;
      };
      TrimModifier.prototype.releasePathsData = function (t) {
        var e;
        var i = t.length;
        for (e = 0; e < i; e += 1) {
          segmentsLengthPool.release(t[e]);
        }
        t.length = 0;
        return t;
      };
      TrimModifier.prototype.processShapes = function (t) {
        if (this._mdf || t) {
          var e = this.o.v % 360 / 360;
          if (e < 0) {
            e += 1;
          }
          if ((a = this.s.v > 1 ? 1 + e : this.s.v < 0 ? 0 + e : this.s.v + e) > (n = this.e.v > 1 ? 1 + e : this.e.v < 0 ? 0 + e : this.e.v + e)) {
            var i = a;
            a = n;
            n = i;
          }
          a = Math.round(a * 10000) * 0.0001;
          n = Math.round(n * 10000) * 0.0001;
          this.sValue = a;
          this.eValue = n;
        } else {
          a = this.sValue;
          n = this.eValue;
        }
        var s = this.shapes.length;
        var r = 0;
        if (n === a) {
          for (h = 0; h < s; h += 1) {
            this.shapes[h].localShapeCollection.releaseShapes();
            this.shapes[h].shape._mdf = true;
            this.shapes[h].shape.paths = this.shapes[h].localShapeCollection;
            if (this._mdf) {
              this.shapes[h].pathsData.length = 0;
            }
          }
        } else if ((n !== 1 || a !== 0) && (n !== 0 || a !== 1)) {
          var a;
          var n;
          var o;
          var h;
          var l;
          var p;
          var f;
          var c;
          var m;
          var u;
          var d;
          var g;
          var y = [];
          for (h = 0; h < s; h += 1) {
            if ((u = this.shapes[h]).shape._mdf || this._mdf || t || this.m === 2) {
              p = (o = u.shape.paths)._length;
              m = 0;
              if (!u.shape._mdf && u.pathsData.length) {
                m = u.totalShapeLength;
              } else {
                l = 0;
                f = this.releasePathsData(u.pathsData);
                for (; l < p; l += 1) {
                  c = bez.getSegmentsLength(o.shapes[l]);
                  f.push(c);
                  m += c.totalLength;
                }
                u.totalShapeLength = m;
                u.pathsData = f;
              }
              r += m;
              u.shape._mdf = true;
            } else {
              u.shape.paths = u.localShapeCollection;
            }
          }
          var v = a;
          var b = n;
          var x = 0;
          for (h = s - 1; h >= 0; h -= 1) {
            if ((u = this.shapes[h]).shape._mdf) {
              (d = u.localShapeCollection).releaseShapes();
              if (this.m === 2 && s > 1) {
                g = this.calculateShapeEdges(a, n, u.totalShapeLength, x, r);
                x += u.totalShapeLength;
              } else {
                g = [[v, b]];
              }
              p = g.length;
              l = 0;
              for (; l < p; l += 1) {
                v = g[l][0];
                b = g[l][1];
                y.length = 0;
                if (b <= 1) {
                  y.push({
                    s: u.totalShapeLength * v,
                    e: u.totalShapeLength * b
                  });
                } else if (v >= 1) {
                  y.push({
                    s: u.totalShapeLength * (v - 1),
                    e: u.totalShapeLength * (b - 1)
                  });
                } else {
                  y.push({
                    s: u.totalShapeLength * v,
                    e: u.totalShapeLength
                  });
                  y.push({
                    s: 0,
                    e: u.totalShapeLength * (b - 1)
                  });
                }
                var _ = this.addShapes(u, y[0]);
                if (y[0].s !== y[0].e) {
                  if (y.length > 1) {
                    if (u.shape.paths.shapes[u.shape.paths._length - 1].c) {
                      var k = _.pop();
                      this.addPaths(_, d);
                      _ = this.addShapes(u, y[1], k);
                    } else {
                      this.addPaths(_, d);
                      _ = this.addShapes(u, y[1]);
                    }
                  }
                  this.addPaths(_, d);
                }
              }
              u.shape.paths = d;
            }
          }
        } else if (this._mdf) {
          for (h = 0; h < s; h += 1) {
            this.shapes[h].pathsData.length = 0;
            this.shapes[h].shape._mdf = true;
          }
        }
      };
      TrimModifier.prototype.addPaths = function (t, e) {
        var i;
        var s = t.length;
        for (i = 0; i < s; i += 1) {
          e.addShape(t[i]);
        }
      };
      TrimModifier.prototype.addSegment = function (t, e, i, s, r, a, n) {
        r.setXYAt(e[0], e[1], "o", a);
        r.setXYAt(i[0], i[1], "i", a + 1);
        if (n) {
          r.setXYAt(t[0], t[1], "v", a);
        }
        r.setXYAt(s[0], s[1], "v", a + 1);
      };
      TrimModifier.prototype.addSegmentFromArray = function (t, e, i, s) {
        e.setXYAt(t[1], t[5], "o", i);
        e.setXYAt(t[2], t[6], "i", i + 1);
        if (s) {
          e.setXYAt(t[0], t[4], "v", i);
        }
        e.setXYAt(t[3], t[7], "v", i + 1);
      };
      TrimModifier.prototype.addShapes = function (t, e, i) {
        var s;
        var r;
        var a;
        var n;
        var o;
        var h;
        var l;
        var p;
        var f = t.pathsData;
        var c = t.shape.paths.shapes;
        var m = t.shape.paths._length;
        var u = 0;
        var d = [];
        var g = true;
        if (i) {
          o = i._length;
          p = i._length;
        } else {
          i = shapePool.newElement();
          o = 0;
          p = 0;
        }
        d.push(i);
        s = 0;
        for (; s < m; s += 1) {
          r = 1;
          h = f[s].lengths;
          i.c = c[s].c;
          a = c[s].c ? h.length : h.length + 1;
          for (; r < a; r += 1) {
            if (u + (n = h[r - 1]).addedLength < e.s) {
              u += n.addedLength;
              i.c = false;
            } else if (u > e.e) {
              i.c = false;
              break;
            } else {
              if (e.s <= u && e.e >= u + n.addedLength) {
                this.addSegment(c[s].v[r - 1], c[s].o[r - 1], c[s].i[r], c[s].v[r], i, o, g);
                g = false;
              } else {
                l = bez.getNewSegment(c[s].v[r - 1], c[s].v[r], c[s].o[r - 1], c[s].i[r], (e.s - u) / n.addedLength, (e.e - u) / n.addedLength, h[r - 1]);
                this.addSegmentFromArray(l, i, o, g);
                g = false;
                i.c = false;
              }
              u += n.addedLength;
              o += 1;
            }
          }
          if (c[s].c && h.length) {
            n = h[r - 1];
            if (u <= e.e) {
              var y = h[r - 1].addedLength;
              if (e.s <= u && e.e >= u + y) {
                this.addSegment(c[s].v[r - 1], c[s].o[r - 1], c[s].i[0], c[s].v[0], i, o, g);
                g = false;
              } else {
                l = bez.getNewSegment(c[s].v[r - 1], c[s].v[0], c[s].o[r - 1], c[s].i[0], (e.s - u) / y, (e.e - u) / y, h[r - 1]);
                this.addSegmentFromArray(l, i, o, g);
                g = false;
                i.c = false;
              }
            } else {
              i.c = false;
            }
            u += n.addedLength;
            o += 1;
          }
          if (i._length) {
            i.setXYAt(i.v[p][0], i.v[p][1], "i", p);
            i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1);
          }
          if (u > e.e) {
            break;
          }
          if (s < m - 1) {
            i = shapePool.newElement();
            g = true;
            d.push(i);
            o = 0;
          }
        }
        return d;
      };
      extendPrototype([ShapeModifier], PuckerAndBloatModifier);
      PuckerAndBloatModifier.prototype.initModifierProperties = function (t, e) {
        this.getValue = this.processKeys;
        this.amount = PropertyFactory.getProp(t, e.a, 0, null, this);
        this._isAnimated = !!this.amount.effectsSequence.length;
      };
      PuckerAndBloatModifier.prototype.processPath = function (t, e) {
        var i;
        var s;
        var r;
        var a;
        var n;
        var o;
        var h = e / 100;
        var l = [0, 0];
        var p = t._length;
        var f = 0;
        for (f = 0; f < p; f += 1) {
          l[0] += t.v[f][0];
          l[1] += t.v[f][1];
        }
        l[0] /= p;
        l[1] /= p;
        var c = shapePool.newElement();
        f = 0;
        c.c = t.c;
        for (; f < p; f += 1) {
          i = t.v[f][0] + (l[0] - t.v[f][0]) * h;
          s = t.v[f][1] + (l[1] - t.v[f][1]) * h;
          r = t.o[f][0] + -((l[0] - t.o[f][0]) * h);
          a = t.o[f][1] + -((l[1] - t.o[f][1]) * h);
          n = t.i[f][0] + -((l[0] - t.i[f][0]) * h);
          o = t.i[f][1] + -((l[1] - t.i[f][1]) * h);
          c.setTripleAt(i, s, r, a, n, o, f);
        }
        return c;
      };
      PuckerAndBloatModifier.prototype.processShapes = function (t) {
        var e;
        var i;
        var s;
        var r;
        var a;
        var n;
        var o = this.shapes.length;
        var h = this.amount.v;
        if (h !== 0) {
          for (i = 0; i < o; i += 1) {
            n = (a = this.shapes[i]).localShapeCollection;
            if (!!a.shape._mdf || !!this._mdf || !!t) {
              n.releaseShapes();
              a.shape._mdf = true;
              e = a.shape.paths.shapes;
              r = a.shape.paths._length;
              s = 0;
              for (; s < r; s += 1) {
                n.addShape(this.processPath(e[s], h));
              }
            }
            a.shape.paths = a.localShapeCollection;
          }
        }
        if (!this.dynamicProperties.length) {
          this._mdf = false;
        }
      };
      var TransformPropertyFactory = function () {
        var t = [0, 0];
        function e(t) {
          var e = this._mdf;
          this.iterateDynamicProperties();
          this._mdf = this._mdf || e;
          if (this.a) {
            t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
          }
          if (this.s) {
            t.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
          }
          if (this.sk) {
            t.skewFromAxis(-this.sk.v, this.sa.v);
          }
          if (this.r) {
            t.rotate(-this.r.v);
          } else {
            t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
          }
          if (this.data.p.s) {
            if (this.data.p.z) {
              t.translate(this.px.v, this.py.v, -this.pz.v);
            } else {
              t.translate(this.px.v, this.py.v, 0);
            }
          } else {
            t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
        }
        function i(e) {
          if (this.elem.globalData.frameId !== this.frameId) {
            if (this._isDirty) {
              this.precalculateMatrix();
              this._isDirty = false;
            }
            this.iterateDynamicProperties();
            if (this._mdf || e) {
              var i;
              this.v.cloneFromProps(this.pre.props);
              if (this.appliedTransformations < 1) {
                this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
              }
              if (this.appliedTransformations < 2) {
                this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
              }
              if (this.sk && this.appliedTransformations < 3) {
                this.v.skewFromAxis(-this.sk.v, this.sa.v);
              }
              if (this.r && this.appliedTransformations < 4) {
                this.v.rotate(-this.r.v);
              } else if (!this.r && this.appliedTransformations < 4) {
                this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
              }
              if (this.autoOriented) {
                i = this.elem.globalData.frameRate;
                if (this.p && this.p.keyframes && this.p.getValueAtTime) {
                  if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
                    s = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / i, 0);
                    r = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0);
                  } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
                    s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0);
                    r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / i, 0);
                  } else {
                    s = this.p.pv;
                    r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / i, this.p.offsetTime);
                  }
                } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                  s = [];
                  r = [];
                  var s;
                  var r;
                  var a = this.px;
                  var n = this.py;
                  if (a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t) {
                    s[0] = a.getValueAtTime((a.keyframes[0].t + 0.01) / i, 0);
                    s[1] = n.getValueAtTime((n.keyframes[0].t + 0.01) / i, 0);
                    r[0] = a.getValueAtTime(a.keyframes[0].t / i, 0);
                    r[1] = n.getValueAtTime(n.keyframes[0].t / i, 0);
                  } else if (a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t) {
                    s[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0);
                    s[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0);
                    r[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - 0.01) / i, 0);
                    r[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - 0.01) / i, 0);
                  } else {
                    s = [a.pv, n.pv];
                    r[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - 0.01) / i, a.offsetTime);
                    r[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - 0.01) / i, n.offsetTime);
                  }
                } else {
                  s = r = t;
                }
                this.v.rotate(-Math.atan2(s[1] - r[1], s[0] - r[0]));
              }
              if (this.data.p && this.data.p.s) {
                if (this.data.p.z) {
                  this.v.translate(this.px.v, this.py.v, -this.pz.v);
                } else {
                  this.v.translate(this.px.v, this.py.v, 0);
                }
              } else {
                this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
              }
            }
            this.frameId = this.elem.globalData.frameId;
          }
        }
        function s() {
          this.appliedTransformations = 0;
          this.pre.reset();
          if (!this.a.effectsSequence.length) {
            this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
            this.appliedTransformations = 1;
            if (!this.s.effectsSequence.length) {
              this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
              this.appliedTransformations = 2;
              if (this.sk) {
                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) {
                  return;
                }
                this.pre.skewFromAxis(-this.sk.v, this.sa.v);
                this.appliedTransformations = 3;
              }
              if (this.r) {
                if (!this.r.effectsSequence.length) {
                  this.pre.rotate(-this.r.v);
                  this.appliedTransformations = 4;
                }
              } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
                this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
                this.appliedTransformations = 4;
              }
            }
          }
        }
        function r() {}
        function a(t) {
          this._addDynamicProperty(t);
          this.elem.addDynamicProperty(t);
          this._isDirty = true;
        }
        function n(t, e, i) {
          this.elem = t;
          this.frameId = -1;
          this.propType = "transform";
          this.data = e;
          this.v = new Matrix();
          this.pre = new Matrix();
          this.appliedTransformations = 0;
          this.initDynamicPropertyContainer(i || t);
          if (e.p && e.p.s) {
            this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this);
            this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this);
            if (e.p.z) {
              this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this);
            }
          } else {
            this.p = PropertyFactory.getProp(t, e.p || {
              k: [0, 0, 0]
            }, 1, 0, this);
          }
          if (e.rx) {
            this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this);
            this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this);
            this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this);
            if (e.or.k[0].ti) {
              var s;
              var r = e.or.k.length;
              for (s = 0; s < r; s += 1) {
                e.or.k[s].to = null;
                e.or.k[s].ti = null;
              }
            }
            this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this);
            this.or.sh = true;
          } else {
            this.r = PropertyFactory.getProp(t, e.r || {
              k: 0
            }, 0, degToRads, this);
          }
          if (e.sk) {
            this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this);
            this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this);
          }
          this.a = PropertyFactory.getProp(t, e.a || {
            k: [0, 0, 0]
          }, 1, 0, this);
          this.s = PropertyFactory.getProp(t, e.s || {
            k: [100, 100, 100]
          }, 1, 0.01, this);
          if (e.o) {
            this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t);
          } else {
            this.o = {
              _mdf: false,
              v: 1
            };
          }
          this._isDirty = true;
          if (!this.dynamicProperties.length) {
            this.getValue(true);
          }
        }
        n.prototype = {
          applyToMatrix: e,
          getValue: i,
          precalculateMatrix: s,
          autoOrient: r
        };
        extendPrototype([DynamicPropertyContainer], n);
        n.prototype.addDynamicProperty = a;
        n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
        return {
          getTransformProperty: function (t, e, i) {
            return new n(t, e, i);
          }
        };
      }();
      function RepeaterModifier() {}
      function RoundCornersModifier() {}
      function floatEqual(t, e) {
        return Math.abs(t - e) * 100000 <= Math.min(Math.abs(t), Math.abs(e));
      }
      function floatZero(t) {
        return Math.abs(t) <= 0.00001;
      }
      function lerp(t, e, i) {
        return t * (1 - i) + e * i;
      }
      function lerpPoint(t, e, i) {
        return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)];
      }
      function quadRoots(t, e, i) {
        if (t === 0) {
          return [];
        }
        var s = e * e - t * 4 * i;
        if (s < 0) {
          return [];
        }
        var r = -e / (t * 2);
        if (s === 0) {
          return [r];
        }
        var a = Math.sqrt(s) / (t * 2);
        return [r - a, r + a];
      }
      function polynomialCoefficients(t, e, i, s) {
        return [-t + e * 3 - i * 3 + s, t * 3 - e * 6 + i * 3, t * -3 + e * 3, t];
      }
      function singlePoint(t) {
        return new PolynomialBezier(t, t, t, t, false);
      }
      function PolynomialBezier(t, e, i, s, r) {
        if (r && pointEqual(t, e)) {
          e = lerpPoint(t, s, 1 / 3);
        }
        if (r && pointEqual(i, s)) {
          i = lerpPoint(t, s, 2 / 3);
        }
        var a = polynomialCoefficients(t[0], e[0], i[0], s[0]);
        var n = polynomialCoefficients(t[1], e[1], i[1], s[1]);
        this.a = [a[0], n[0]];
        this.b = [a[1], n[1]];
        this.c = [a[2], n[2]];
        this.d = [a[3], n[3]];
        this.points = [t, e, i, s];
      }
      function extrema(t, e) {
        var i = t.points[0][e];
        var s = t.points[t.points.length - 1][e];
        if (i > s) {
          var r = s;
          s = i;
          i = r;
        }
        var a = quadRoots(t.a[e] * 3, t.b[e] * 2, t.c[e]);
        var n = 0;
        for (; n < a.length; n += 1) {
          if (a[n] > 0 && a[n] < 1) {
            var o = t.point(a[n])[e];
            if (o < i) {
              i = o;
            } else if (o > s) {
              s = o;
            }
          }
        }
        return {
          min: i,
          max: s
        };
      }
      function intersectData(t, e, i) {
        var s = t.boundingBox();
        return {
          cx: s.cx,
          cy: s.cy,
          width: s.width,
          height: s.height,
          bez: t,
          t: (e + i) / 2,
          t1: e,
          t2: i
        };
      }
      function splitData(t) {
        var e = t.bez.split(0.5);
        return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)];
      }
      function boxIntersect(t, e) {
        return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
      }
      function intersectsImpl(t, e, i, s, r, a) {
        if (boxIntersect(t, e)) {
          if (i >= a || t.width <= s && t.height <= s && e.width <= s && e.height <= s) {
            r.push([t.t, e.t]);
            return;
          }
          var n = splitData(t);
          var o = splitData(e);
          intersectsImpl(n[0], o[0], i + 1, s, r, a);
          intersectsImpl(n[0], o[1], i + 1, s, r, a);
          intersectsImpl(n[1], o[0], i + 1, s, r, a);
          intersectsImpl(n[1], o[1], i + 1, s, r, a);
        }
      }
      function crossProduct(t, e) {
        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
      }
      function lineIntersection(t, e, i, s) {
        var r = [t[0], t[1], 1];
        var a = [e[0], e[1], 1];
        var n = [i[0], i[1], 1];
        var o = [s[0], s[1], 1];
        var h = crossProduct(crossProduct(r, a), crossProduct(n, o));
        if (floatZero(h[2])) {
          return null;
        } else {
          return [h[0] / h[2], h[1] / h[2]];
        }
      }
      function polarOffset(t, e, i) {
        return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i];
      }
      function pointDistance(t, e) {
        return Math.hypot(t[0] - e[0], t[1] - e[1]);
      }
      function pointEqual(t, e) {
        return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
      }
      function ZigZagModifier() {}
      function setPoint(t, e, i, s, r, a, n) {
        var o = i - Math.PI / 2;
        var h = i + Math.PI / 2;
        var l = e[0] + Math.cos(i) * s * r;
        var p = e[1] - Math.sin(i) * s * r;
        t.setTripleAt(l, p, l + Math.cos(o) * a, p - Math.sin(o) * a, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length());
      }
      function getPerpendicularVector(t, e) {
        var i = [e[0] - t[0], e[1] - t[1]];
        var s = -(Math.PI * 0.5);
        return [Math.cos(s) * i[0] - Math.sin(s) * i[1], Math.sin(s) * i[0] + Math.cos(s) * i[1]];
      }
      function getProjectingAngle(t, e) {
        var i = e === 0 ? t.length() - 1 : e - 1;
        var s = (e + 1) % t.length();
        var r = getPerpendicularVector(t.v[i], t.v[s]);
        return Math.atan2(0, 1) - Math.atan2(r[1], r[0]);
      }
      function zigZagCorner(t, e, i, s, r, a, n) {
        var o = getProjectingAngle(e, i);
        var h = e.v[i % e._length];
        var l = e.v[i === 0 ? e._length - 1 : i - 1];
        var p = e.v[(i + 1) % e._length];
        var f = a === 2 ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0;
        var c = a === 2 ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)) : 0;
        setPoint(t, e.v[i % e._length], o, n, s, c / ((r + 1) * 2), f / ((r + 1) * 2), a);
      }
      function zigZagSegment(t, e, i, s, r, a) {
        for (var n = 0; n < s; n += 1) {
          var o = (n + 1) / (s + 1);
          var h = r === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0;
          var l = e.normalAngle(o);
          setPoint(t, e.point(o), l, a, i, h / ((s + 1) * 2), h / ((s + 1) * 2), r);
          a = -a;
        }
        return a;
      }
      function linearOffset(t, e, i) {
        var s = Math.atan2(e[0] - t[0], e[1] - t[1]);
        return [polarOffset(t, s, i), polarOffset(e, s, i)];
      }
      function offsetSegment(t, e) {
        i = (h = linearOffset(t.points[0], t.points[1], e))[0];
        s = h[1];
        r = (h = linearOffset(t.points[1], t.points[2], e))[0];
        a = h[1];
        n = (h = linearOffset(t.points[2], t.points[3], e))[0];
        o = h[1];
        var i;
        var s;
        var r;
        var a;
        var n;
        var o;
        var h;
        var l = lineIntersection(i, s, r, a);
        if (l === null) {
          l = s;
        }
        var p = lineIntersection(n, o, r, a);
        if (p === null) {
          p = n;
        }
        return new PolynomialBezier(i, l, p, o);
      }
      function joinLines(t, e, i, s, r) {
        var a = e.points[3];
        var n = i.points[0];
        if (s === 3 || pointEqual(a, n)) {
          return a;
        }
        if (s === 2) {
          var o = -e.tangentAngle(1);
          var h = -i.tangentAngle(0) + Math.PI;
          var l = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), n, polarOffset(n, o + Math.PI / 2, 100));
          var p = l ? pointDistance(l, a) : pointDistance(a, n) / 2;
          var f = polarOffset(a, o, p * 2 * roundCorner);
          t.setXYAt(f[0], f[1], "o", t.length() - 1);
          f = polarOffset(n, h, p * 2 * roundCorner);
          t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length());
          return n;
        }
        var c = pointEqual(a, e.points[2]) ? e.points[0] : e.points[2];
        var m = pointEqual(n, i.points[1]) ? i.points[3] : i.points[1];
        var u = lineIntersection(c, a, n, m);
        if (u && pointDistance(u, a) < r) {
          t.setTripleAt(u[0], u[1], u[0], u[1], u[0], u[1], t.length());
          return u;
        } else {
          return a;
        }
      }
      function getIntersection(t, e) {
        var i = t.intersections(e);
        if (i.length && floatEqual(i[0][0], 1)) {
          i.shift();
        }
        if (i.length) {
          return i[0];
        } else {
          return null;
        }
      }
      function pruneSegmentIntersection(t, e) {
        var i = t.slice();
        var s = e.slice();
        var r = getIntersection(t[t.length - 1], e[0]);
        if (r) {
          i[t.length - 1] = t[t.length - 1].split(r[0])[0];
          s[0] = e[0].split(r[1])[1];
        }
        if (t.length > 1 && e.length > 1 && (r = getIntersection(t[0], e[e.length - 1]))) {
          return [[t[0].split(r[0])[0]], [e[e.length - 1].split(r[1])[1]]];
        } else {
          return [i, s];
        }
      }
      function pruneIntersections(t) {
        var e;
        var i = 1;
        for (; i < t.length; i += 1) {
          e = pruneSegmentIntersection(t[i - 1], t[i]);
          t[i - 1] = e[0];
          t[i] = e[1];
        }
        if (t.length > 1) {
          e = pruneSegmentIntersection(t[t.length - 1], t[0]);
          t[t.length - 1] = e[0];
          t[0] = e[1];
        }
        return t;
      }
      function offsetSegmentSplit(t, e) {
        var i;
        var s;
        var r;
        var a;
        var n = t.inflectionPoints();
        if (n.length === 0) {
          return [offsetSegment(t, e)];
        }
        if (n.length === 1 || floatEqual(n[1], 1)) {
          i = (r = t.split(n[0]))[0];
          s = r[1];
          return [offsetSegment(i, e), offsetSegment(s, e)];
        }
        i = (r = t.split(n[0]))[0];
        var o = (n[1] - n[0]) / (1 - n[0]);
        a = (r = r[1].split(o))[0];
        s = r[1];
        return [offsetSegment(i, e), offsetSegment(a, e), offsetSegment(s, e)];
      }
      function OffsetPathModifier() {}
      function getFontProperties(t) {
        var e = t.fStyle ? t.fStyle.split(" ") : [];
        var i = "normal";
        var s = "normal";
        var r = e.length;
        var a = 0;
        for (; a < r; a += 1) {
          switch (e[a].toLowerCase()) {
            case "italic":
              s = "italic";
              break;
            case "bold":
              i = "700";
              break;
            case "black":
              i = "900";
              break;
            case "medium":
              i = "500";
              break;
            case "regular":
            case "normal":
              i = "400";
              break;
            case "light":
            case "thin":
              i = "200";
          }
        }
        return {
          style: s,
          weight: t.fWeight || i
        };
      }
      extendPrototype([ShapeModifier], RepeaterModifier);
      RepeaterModifier.prototype.initModifierProperties = function (t, e) {
        this.getValue = this.processKeys;
        this.c = PropertyFactory.getProp(t, e.c, 0, null, this);
        this.o = PropertyFactory.getProp(t, e.o, 0, null, this);
        this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this);
        this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this);
        this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this);
        this.data = e;
        if (!this.dynamicProperties.length) {
          this.getValue(true);
        }
        this._isAnimated = !!this.dynamicProperties.length;
        this.pMatrix = new Matrix();
        this.rMatrix = new Matrix();
        this.sMatrix = new Matrix();
        this.tMatrix = new Matrix();
        this.matrix = new Matrix();
      };
      RepeaterModifier.prototype.applyTransforms = function (t, e, i, s, r, a) {
        var n = a ? -1 : 1;
        var o = s.s.v[0] + (1 - s.s.v[0]) * (1 - r);
        var h = s.s.v[1] + (1 - s.s.v[1]) * (1 - r);
        t.translate(s.p.v[0] * n * r, s.p.v[1] * n * r, s.p.v[2]);
        e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]);
        e.rotate(-s.r.v * n * r);
        e.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
        i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]);
        i.scale(a ? 1 / o : o, a ? 1 / h : h);
        i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
      };
      RepeaterModifier.prototype.init = function (t, e, i, s) {
        this.elem = t;
        this.arr = e;
        this.pos = i;
        this.elemsData = s;
        this._currentCopies = 0;
        this._elements = [];
        this._groups = [];
        this.frameId = -1;
        this.initDynamicPropertyContainer(t);
        this.initModifierProperties(t, e[i]);
        while (i > 0) {
          i -= 1;
          this._elements.unshift(e[i]);
        }
        if (this.dynamicProperties.length) {
          this.k = true;
        } else {
          this.getValue(true);
        }
      };
      RepeaterModifier.prototype.resetElements = function (t) {
        var e;
        var i = t.length;
        for (e = 0; e < i; e += 1) {
          t[e]._processed = false;
          if (t[e].ty === "gr") {
            this.resetElements(t[e].it);
          }
        }
      };
      RepeaterModifier.prototype.cloneElements = function (t) {
        var e = JSON.parse(JSON.stringify(t));
        this.resetElements(e);
        return e;
      };
      RepeaterModifier.prototype.changeGroupRender = function (t, e) {
        var i;
        var s = t.length;
        for (i = 0; i < s; i += 1) {
          t[i]._render = e;
          if (t[i].ty === "gr") {
            this.changeGroupRender(t[i].it, e);
          }
        }
      };
      RepeaterModifier.prototype.processShapes = function (t) {
        var e = false;
        if (this._mdf || t) {
          var i;
          var s;
          var r;
          var a;
          var n;
          var o;
          var h;
          var l;
          var p = Math.ceil(this.c.v);
          if (this._groups.length < p) {
            while (this._groups.length < p) {
              var f = {
                it: this.cloneElements(this._elements),
                ty: "gr"
              };
              f.it.push({
                a: {
                  a: 0,
                  ix: 1,
                  k: [0, 0]
                },
                nm: "Transform",
                o: {
                  a: 0,
                  ix: 7,
                  k: 100
                },
                p: {
                  a: 0,
                  ix: 2,
                  k: [0, 0]
                },
                r: {
                  a: 1,
                  ix: 6,
                  k: [{
                    s: 0,
                    e: 0,
                    t: 0
                  }, {
                    s: 0,
                    e: 0,
                    t: 1
                  }]
                },
                s: {
                  a: 0,
                  ix: 3,
                  k: [100, 100]
                },
                sa: {
                  a: 0,
                  ix: 5,
                  k: 0
                },
                sk: {
                  a: 0,
                  ix: 4,
                  k: 0
                },
                ty: "tr"
              });
              this.arr.splice(0, 0, f);
              this._groups.splice(0, 0, f);
              this._currentCopies += 1;
            }
            this.elem.reloadShapes();
            e = true;
          }
          r = 0;
          n = 0;
          for (; r <= this._groups.length - 1; r += 1) {
            o = n < p;
            this._groups[r]._render = o;
            this.changeGroupRender(this._groups[r].it, o);
            if (!o) {
              var c = this.elemsData[r].it;
              var m = c[c.length - 1];
              if (m.transform.op.v !== 0) {
                m.transform.op._mdf = true;
                m.transform.op.v = 0;
              } else {
                m.transform.op._mdf = false;
              }
            }
            n += 1;
          }
          this._currentCopies = p;
          var u = this.o.v;
          var d = u % 1;
          var g = u > 0 ? Math.floor(u) : Math.ceil(u);
          var y = this.pMatrix.props;
          var v = this.rMatrix.props;
          var b = this.sMatrix.props;
          this.pMatrix.reset();
          this.rMatrix.reset();
          this.sMatrix.reset();
          this.tMatrix.reset();
          this.matrix.reset();
          var x = 0;
          if (u > 0) {
            while (x < g) {
              this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
              x += 1;
            }
            if (d) {
              this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, false);
              x += d;
            }
          } else if (u < 0) {
            while (x > g) {
              this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
              x -= 1;
            }
            if (d) {
              this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, true);
              x -= d;
            }
          }
          r = this.data.m === 1 ? 0 : this._currentCopies - 1;
          a = this.data.m === 1 ? 1 : -1;
          n = this._currentCopies;
          while (n) {
            l = (s = (i = this.elemsData[r].it)[i.length - 1].transform.mProps.v.props).length;
            i[i.length - 1].transform.mProps._mdf = true;
            i[i.length - 1].transform.op._mdf = true;
            i[i.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1));
            if (x !== 0) {
              if (r !== 0 && a === 1 || r !== this._currentCopies - 1 && a === -1) {
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
              }
              this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]);
              this.matrix.transform(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13], b[14], b[15]);
              this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]);
              h = 0;
              for (; h < l; h += 1) {
                s[h] = this.matrix.props[h];
              }
              this.matrix.reset();
            } else {
              this.matrix.reset();
              h = 0;
              for (; h < l; h += 1) {
                s[h] = this.matrix.props[h];
              }
            }
            x += 1;
            n -= 1;
            r += a;
          }
        } else {
          n = this._currentCopies;
          r = 0;
          a = 1;
          while (n) {
            s = (i = this.elemsData[r].it)[i.length - 1].transform.mProps.v.props;
            i[i.length - 1].transform.mProps._mdf = false;
            i[i.length - 1].transform.op._mdf = false;
            n -= 1;
            r += a;
          }
        }
        return e;
      };
      RepeaterModifier.prototype.addShape = function () {};
      extendPrototype([ShapeModifier], RoundCornersModifier);
      RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
        this.getValue = this.processKeys;
        this.rd = PropertyFactory.getProp(t, e.r, 0, null, this);
        this._isAnimated = !!this.rd.effectsSequence.length;
      };
      RoundCornersModifier.prototype.processPath = function (t, e) {
        var i;
        var s;
        var r;
        var a;
        var n;
        var o;
        var h;
        var l;
        var p;
        var f;
        var c;
        var m;
        var u;
        var d = shapePool.newElement();
        d.c = t.c;
        var g = t._length;
        var y = 0;
        for (i = 0; i < g; i += 1) {
          s = t.v[i];
          a = t.o[i];
          r = t.i[i];
          if (s[0] === a[0] && s[1] === a[1] && s[0] === r[0] && s[1] === r[1]) {
            if (i !== 0 && i !== g - 1 || t.c) {
              n = i === 0 ? t.v[g - 1] : t.v[i - 1];
              h = (o = Math.sqrt(Math.pow(s[0] - n[0], 2) + Math.pow(s[1] - n[1], 2))) ? Math.min(o / 2, e) / o : 0;
              l = m = s[0] + (n[0] - s[0]) * h;
              p = u = s[1] - (s[1] - n[1]) * h;
              f = l - (l - s[0]) * roundCorner;
              c = p - (p - s[1]) * roundCorner;
              d.setTripleAt(l, p, f, c, m, u, y);
              y += 1;
              n = i === g - 1 ? t.v[0] : t.v[i + 1];
              h = (o = Math.sqrt(Math.pow(s[0] - n[0], 2) + Math.pow(s[1] - n[1], 2))) ? Math.min(o / 2, e) / o : 0;
              l = f = s[0] + (n[0] - s[0]) * h;
              p = c = s[1] + (n[1] - s[1]) * h;
              m = l - (l - s[0]) * roundCorner;
              u = p - (p - s[1]) * roundCorner;
              d.setTripleAt(l, p, f, c, m, u, y);
            } else {
              d.setTripleAt(s[0], s[1], a[0], a[1], r[0], r[1], y);
            }
          } else {
            d.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y);
          }
          y += 1;
        }
        return d;
      };
      RoundCornersModifier.prototype.processShapes = function (t) {
        var e;
        var i;
        var s;
        var r;
        var a;
        var n;
        var o = this.shapes.length;
        var h = this.rd.v;
        if (h !== 0) {
          for (i = 0; i < o; i += 1) {
            n = (a = this.shapes[i]).localShapeCollection;
            if (!!a.shape._mdf || !!this._mdf || !!t) {
              n.releaseShapes();
              a.shape._mdf = true;
              e = a.shape.paths.shapes;
              r = a.shape.paths._length;
              s = 0;
              for (; s < r; s += 1) {
                n.addShape(this.processPath(e[s], h));
              }
            }
            a.shape.paths = a.localShapeCollection;
          }
        }
        if (!this.dynamicProperties.length) {
          this._mdf = false;
        }
      };
      PolynomialBezier.prototype.point = function (t) {
        return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
      };
      PolynomialBezier.prototype.derivative = function (t) {
        return [(t * 3 * this.a[0] + this.b[0] * 2) * t + this.c[0], (t * 3 * this.a[1] + this.b[1] * 2) * t + this.c[1]];
      };
      PolynomialBezier.prototype.tangentAngle = function (t) {
        var e = this.derivative(t);
        return Math.atan2(e[1], e[0]);
      };
      PolynomialBezier.prototype.normalAngle = function (t) {
        var e = this.derivative(t);
        return Math.atan2(e[0], e[1]);
      };
      PolynomialBezier.prototype.inflectionPoints = function () {
        var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
        if (floatZero(t)) {
          return [];
        }
        var e = (this.a[1] * this.c[0] - this.a[0] * this.c[1]) * -0.5 / t;
        var i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
        if (i < 0) {
          return [];
        }
        var s = Math.sqrt(i);
        if (floatZero(s)) {
          if (s > 0 && s < 1) {
            return [e];
          } else {
            return [];
          }
        } else {
          return [e - s, e + s].filter(function (t) {
            return t > 0 && t < 1;
          });
        }
      };
      PolynomialBezier.prototype.split = function (t) {
        if (t <= 0) {
          return [singlePoint(this.points[0]), this];
        }
        if (t >= 1) {
          return [this, singlePoint(this.points[this.points.length - 1])];
        }
        var e = lerpPoint(this.points[0], this.points[1], t);
        var i = lerpPoint(this.points[1], this.points[2], t);
        var s = lerpPoint(this.points[2], this.points[3], t);
        var r = lerpPoint(e, i, t);
        var a = lerpPoint(i, s, t);
        var n = lerpPoint(r, a, t);
        return [new PolynomialBezier(this.points[0], e, r, n, true), new PolynomialBezier(n, a, s, this.points[3], true)];
      };
      PolynomialBezier.prototype.bounds = function () {
        return {
          x: extrema(this, 0),
          y: extrema(this, 1)
        };
      };
      PolynomialBezier.prototype.boundingBox = function () {
        var t = this.bounds();
        return {
          left: t.x.min,
          right: t.x.max,
          top: t.y.min,
          bottom: t.y.max,
          width: t.x.max - t.x.min,
          height: t.y.max - t.y.min,
          cx: (t.x.max + t.x.min) / 2,
          cy: (t.y.max + t.y.min) / 2
        };
      };
      PolynomialBezier.prototype.intersections = function (t, e = 2, i = 7) {
        var s = [];
        intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, s, i);
        return s;
      };
      PolynomialBezier.shapeSegment = function (t, e) {
        var i = (e + 1) % t.length();
        return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], true);
      };
      PolynomialBezier.shapeSegmentInverted = function (t, e) {
        var i = (e + 1) % t.length();
        return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], true);
      };
      extendPrototype([ShapeModifier], ZigZagModifier);
      ZigZagModifier.prototype.initModifierProperties = function (t, e) {
        this.getValue = this.processKeys;
        this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this);
        this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this);
        this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this);
        this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
      };
      ZigZagModifier.prototype.processPath = function (t, e, i, s) {
        var r = t._length;
        var a = shapePool.newElement();
        a.c = t.c;
        if (!t.c) {
          r -= 1;
        }
        if (r === 0) {
          return a;
        }
        var n = -1;
        var o = PolynomialBezier.shapeSegment(t, 0);
        zigZagCorner(a, t, 0, e, i, s, n);
        for (var h = 0; h < r; h += 1) {
          n = zigZagSegment(a, o, e, i, s, -n);
          o = h !== r - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % r) : null;
          zigZagCorner(a, t, h + 1, e, i, s, n);
        }
        return a;
      };
      ZigZagModifier.prototype.processShapes = function (t) {
        var e;
        var i;
        var s;
        var r;
        var a;
        var n;
        var o = this.shapes.length;
        var h = this.amplitude.v;
        var l = Math.max(0, Math.round(this.frequency.v));
        var p = this.pointsType.v;
        if (h !== 0) {
          for (i = 0; i < o; i += 1) {
            n = (a = this.shapes[i]).localShapeCollection;
            if (!!a.shape._mdf || !!this._mdf || !!t) {
              n.releaseShapes();
              a.shape._mdf = true;
              e = a.shape.paths.shapes;
              r = a.shape.paths._length;
              s = 0;
              for (; s < r; s += 1) {
                n.addShape(this.processPath(e[s], h, l, p));
              }
            }
            a.shape.paths = a.localShapeCollection;
          }
        }
        if (!this.dynamicProperties.length) {
          this._mdf = false;
        }
      };
      extendPrototype([ShapeModifier], OffsetPathModifier);
      OffsetPathModifier.prototype.initModifierProperties = function (t, e) {
        this.getValue = this.processKeys;
        this.amount = PropertyFactory.getProp(t, e.a, 0, null, this);
        this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this);
        this.lineJoin = e.lj;
        this._isAnimated = this.amount.effectsSequence.length !== 0;
      };
      OffsetPathModifier.prototype.processPath = function (t, e, i, s) {
        var r;
        var a;
        var n;
        var o = shapePool.newElement();
        o.c = t.c;
        var h = t.length();
        if (!t.c) {
          h -= 1;
        }
        var l = [];
        for (r = 0; r < h; r += 1) {
          n = PolynomialBezier.shapeSegment(t, r);
          l.push(offsetSegmentSplit(n, e));
        }
        if (!t.c) {
          for (r = h - 1; r >= 0; r -= 1) {
            n = PolynomialBezier.shapeSegmentInverted(t, r);
            l.push(offsetSegmentSplit(n, e));
          }
        }
        l = pruneIntersections(l);
        var p = null;
        var f = null;
        for (r = 0; r < l.length; r += 1) {
          var c = l[r];
          if (f) {
            p = joinLines(o, f, c[0], i, s);
          }
          f = c[c.length - 1];
          a = 0;
          for (; a < c.length; a += 1) {
            n = c[a];
            if (p && pointEqual(n.points[0], p)) {
              o.setXYAt(n.points[1][0], n.points[1][1], "o", o.length() - 1);
            } else {
              o.setTripleAt(n.points[0][0], n.points[0][1], n.points[1][0], n.points[1][1], n.points[0][0], n.points[0][1], o.length());
            }
            o.setTripleAt(n.points[3][0], n.points[3][1], n.points[3][0], n.points[3][1], n.points[2][0], n.points[2][1], o.length());
            p = n.points[3];
          }
        }
        if (l.length) {
          joinLines(o, f, l[0][0], i, s);
        }
        return o;
      };
      OffsetPathModifier.prototype.processShapes = function (t) {
        var e;
        var i;
        var s;
        var r;
        var a;
        var n;
        var o = this.shapes.length;
        var h = this.amount.v;
        var l = this.miterLimit.v;
        var p = this.lineJoin;
        if (h !== 0) {
          for (i = 0; i < o; i += 1) {
            n = (a = this.shapes[i]).localShapeCollection;
            if (!!a.shape._mdf || !!this._mdf || !!t) {
              n.releaseShapes();
              a.shape._mdf = true;
              e = a.shape.paths.shapes;
              r = a.shape.paths._length;
              s = 0;
              for (; s < r; s += 1) {
                n.addShape(this.processPath(e[s], h, p, l));
              }
            }
            a.shape.paths = a.localShapeCollection;
          }
        }
        if (!this.dynamicProperties.length) {
          this._mdf = false;
        }
      };
      var FontManager = function () {
        var t = 5000;
        var e = {
          w: 0,
          size: 0,
          shapes: [],
          data: {
            shapes: []
          }
        };
        var i = [];
        i = i.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
        var s = 127988;
        var r = 917631;
        var a = 917601;
        var n = 917626;
        var o = 65039;
        var h = 8205;
        var l = 127462;
        var p = 127487;
        var f = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
        function c(t) {
          var e;
          var i = t.split(",");
          var s = i.length;
          var r = [];
          for (e = 0; e < s; e += 1) {
            if (i[e] !== "sans-serif" && i[e] !== "monospace") {
              r.push(i[e]);
            }
          }
          return r.join(",");
        }
        function m(t, e) {
          var i = createTag("span");
          i.setAttribute("aria-hidden", true);
          i.style.fontFamily = e;
          var s = createTag("span");
          s.innerText = "giItT1WQy@!-/#";
          i.style.position = "absolute";
          i.style.left = "-10000px";
          i.style.top = "-10000px";
          i.style.fontSize = "300px";
          i.style.fontVariant = "normal";
          i.style.fontStyle = "normal";
          i.style.fontWeight = "normal";
          i.style.letterSpacing = "0";
          i.appendChild(s);
          document.body.appendChild(i);
          var r = s.offsetWidth;
          s.style.fontFamily = c(t) + ", " + e;
          return {
            node: s,
            w: r,
            parent: i
          };
        }
        function u() {
          var e;
          var i;
          var s;
          var r = this.fonts.length;
          var a = r;
          for (e = 0; e < r; e += 1) {
            if (this.fonts[e].loaded) {
              a -= 1;
            } else if (this.fonts[e].fOrigin === "n" || this.fonts[e].origin === 0) {
              this.fonts[e].loaded = true;
            } else {
              i = this.fonts[e].monoCase.node;
              s = this.fonts[e].monoCase.w;
              if (i.offsetWidth !== s) {
                a -= 1;
                this.fonts[e].loaded = true;
              } else {
                i = this.fonts[e].sansCase.node;
                s = this.fonts[e].sansCase.w;
                if (i.offsetWidth !== s) {
                  a -= 1;
                  this.fonts[e].loaded = true;
                }
              }
              if (this.fonts[e].loaded) {
                this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent);
                this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent);
              }
            }
          }
          if (a !== 0 && Date.now() - this.initTime < t) {
            setTimeout(this.checkLoadedFontsBinded, 20);
          } else {
            setTimeout(this.setIsLoadedBinded, 10);
          }
        }
        function d(t, e) {
          var i;
          var s = document.body && e ? "svg" : "canvas";
          var r = getFontProperties(t);
          if (s === "svg") {
            var a = createNS("text");
            a.style.fontSize = "100px";
            a.setAttribute("font-family", t.fFamily);
            a.setAttribute("font-style", r.style);
            a.setAttribute("font-weight", r.weight);
            a.textContent = "1";
            if (t.fClass) {
              a.style.fontFamily = "inherit";
              a.setAttribute("class", t.fClass);
            } else {
              a.style.fontFamily = t.fFamily;
            }
            e.appendChild(a);
            i = a;
          } else {
            var n = new OffscreenCanvas(500, 500).getContext("2d");
            n.font = r.style + " " + r.weight + " 100px " + t.fFamily;
            i = n;
          }
          return {
            measureText: function (t) {
              if (s === "svg") {
                i.textContent = t;
                return i.getComputedTextLength();
              } else {
                return i.measureText(t).width;
              }
            }
          };
        }
        function g(t, e) {
          if (!t) {
            this.isLoaded = true;
            return;
          }
          if (this.chars) {
            this.isLoaded = true;
            this.fonts = t.list;
            return;
          }
          if (!document.body) {
            this.isLoaded = true;
            t.list.forEach(function (t) {
              t.helper = d(t);
              t.cache = {};
            });
            this.fonts = t.list;
            return;
          }
          var i = t.list;
          var s = i.length;
          var r = s;
          for (a = 0; a < s; a += 1) {
            var a;
            var n;
            var o;
            var h = true;
            i[a].loaded = false;
            i[a].monoCase = m(i[a].fFamily, "monospace");
            i[a].sansCase = m(i[a].fFamily, "sans-serif");
            if (i[a].fPath) {
              if (i[a].fOrigin === "p" || i[a].origin === 3) {
                if ((n = document.querySelectorAll("style[f-forigin=\"p\"][f-family=\"" + i[a].fFamily + "\"], style[f-origin=\"3\"][f-family=\"" + i[a].fFamily + "\"]")).length > 0) {
                  h = false;
                }
                if (h) {
                  var l = createTag("style");
                  l.setAttribute("f-forigin", i[a].fOrigin);
                  l.setAttribute("f-origin", i[a].origin);
                  l.setAttribute("f-family", i[a].fFamily);
                  l.type = "text/css";
                  l.innerText = "@font-face {font-family: " + i[a].fFamily + "; font-style: normal; src: url('" + i[a].fPath + "');}";
                  e.appendChild(l);
                }
              } else if (i[a].fOrigin === "g" || i[a].origin === 1) {
                o = 0;
                n = document.querySelectorAll("link[f-forigin=\"g\"], link[f-origin=\"1\"]");
                for (; o < n.length; o += 1) {
                  if (n[o].href.indexOf(i[a].fPath) !== -1) {
                    h = false;
                  }
                }
                if (h) {
                  var p = createTag("link");
                  p.setAttribute("f-forigin", i[a].fOrigin);
                  p.setAttribute("f-origin", i[a].origin);
                  p.type = "text/css";
                  p.rel = "stylesheet";
                  p.href = i[a].fPath;
                  document.body.appendChild(p);
                }
              } else if (i[a].fOrigin === "t" || i[a].origin === 2) {
                o = 0;
                n = document.querySelectorAll("script[f-forigin=\"t\"], script[f-origin=\"2\"]");
                for (; o < n.length; o += 1) {
                  if (i[a].fPath === n[o].src) {
                    h = false;
                  }
                }
                if (h) {
                  var f = createTag("link");
                  f.setAttribute("f-forigin", i[a].fOrigin);
                  f.setAttribute("f-origin", i[a].origin);
                  f.setAttribute("rel", "stylesheet");
                  f.setAttribute("href", i[a].fPath);
                  e.appendChild(f);
                }
              }
            } else {
              i[a].loaded = true;
              r -= 1;
            }
            i[a].helper = d(i[a], e);
            i[a].cache = {};
            this.fonts.push(i[a]);
          }
          if (r === 0) {
            this.isLoaded = true;
          } else {
            setTimeout(this.checkLoadedFonts.bind(this), 100);
          }
        }
        function y(t) {
          if (t) {
            this.chars ||= [];
            var e;
            var i;
            var s;
            var r = t.length;
            var a = this.chars.length;
            for (e = 0; e < r; e += 1) {
              i = 0;
              s = false;
              while (i < a) {
                if (this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch) {
                  s = true;
                }
                i += 1;
              }
              if (!s) {
                this.chars.push(t[e]);
                a += 1;
              }
            }
          }
        }
        function v(t, i, s) {
          var r = 0;
          var a = this.chars.length;
          while (r < a) {
            if (this.chars[r].ch === t && this.chars[r].style === i && this.chars[r].fFamily === s) {
              return this.chars[r];
            }
            r += 1;
          }
          if ((typeof t == "string" && t.charCodeAt(0) !== 13 || !t) && console && console.warn && !this._warned) {
            this._warned = true;
          }
          return e;
        }
        function b(t, e, i) {
          var s = this.getFontByName(e);
          var r = t;
          if (!s.cache[r]) {
            var a = s.helper;
            if (t === " ") {
              var n = a.measureText("|" + t + "|");
              var o = a.measureText("||");
              s.cache[r] = (n - o) / 100;
            } else {
              s.cache[r] = a.measureText(t) / 100;
            }
          }
          return s.cache[r] * i;
        }
        function x(t) {
          var e = 0;
          var i = this.fonts.length;
          while (e < i) {
            if (this.fonts[e].fName === t) {
              return this.fonts[e];
            }
            e += 1;
          }
          return this.fonts[0];
        }
        function _(t) {
          var e = 0;
          var i = t.charCodeAt(0);
          if (i >= 55296 && i <= 56319) {
            var s = t.charCodeAt(1);
            if (s >= 56320 && s <= 57343) {
              e = (i - 55296) * 1024 + s - 56320 + 65536;
            }
          }
          return e;
        }
        function k(t, e) {
          var i = t.toString(16) + e.toString(16);
          return f.indexOf(i) !== -1;
        }
        function C(t) {
          return t === h;
        }
        function A(t) {
          return t === o;
        }
        function P(t) {
          var e = _(t);
          return !!(e >= l) && !!(e <= p);
        }
        function D(t) {
          return P(t.substr(0, 2)) && P(t.substr(2, 2));
        }
        function w(t) {
          return i.indexOf(t) !== -1;
        }
        function S(t, e) {
          var i = _(t.substr(e, 2));
          if (i !== s) {
            return false;
          }
          var o = 0;
          for (e += 2; o < 5;) {
            if ((i = _(t.substr(e, 2))) < a || i > n) {
              return false;
            }
            o += 1;
            e += 2;
          }
          return _(t.substr(e, 2)) === r;
        }
        function T() {
          this.isLoaded = true;
        }
        function M() {
          this.fonts = [];
          this.chars = null;
          this.typekitLoaded = 0;
          this.isLoaded = false;
          this._warned = false;
          this.initTime = Date.now();
          this.setIsLoadedBinded = this.setIsLoaded.bind(this);
          this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
        }
        M.isModifier = k;
        M.isZeroWidthJoiner = C;
        M.isFlagEmoji = D;
        M.isRegionalCode = P;
        M.isCombinedCharacter = w;
        M.isRegionalFlag = S;
        M.isVariationSelector = A;
        M.BLACK_FLAG_CODE_POINT = s;
        var E = {
          addChars: y,
          addFonts: g,
          getCharData: v,
          getFontByName: x,
          measureText: b,
          checkLoadedFonts: u,
          setIsLoaded: T
        };
        M.prototype = E;
        return M;
      }();
      function SlotManager(t) {
        this.animationData = t;
      }
      function slotFactory(t) {
        return new SlotManager(t);
      }
      function RenderableElement() {}
      SlotManager.prototype.getProp = function (t) {
        if (this.animationData.slots && this.animationData.slots[t.sid]) {
          return Object.assign(t, this.animationData.slots[t.sid].p);
        } else {
          return t;
        }
      };
      RenderableElement.prototype = {
        initRenderable: function () {
          this.isInRange = false;
          this.hidden = false;
          this.isTransparent = false;
          this.renderableComponents = [];
        },
        addRenderableComponent: function (t) {
          if (this.renderableComponents.indexOf(t) === -1) {
            this.renderableComponents.push(t);
          }
        },
        removeRenderableComponent: function (t) {
          if (this.renderableComponents.indexOf(t) !== -1) {
            this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
          }
        },
        prepareRenderableFrame: function (t) {
          this.checkLayerLimits(t);
        },
        checkTransparency: function () {
          if (this.finalTransform.mProp.o.v <= 0) {
            if (!this.isTransparent && this.globalData.renderConfig.hideOnTransparent) {
              this.isTransparent = true;
              this.hide();
            }
          } else if (this.isTransparent) {
            this.isTransparent = false;
            this.show();
          }
        },
        checkLayerLimits: function (t) {
          if (this.data.ip - this.data.st <= t && this.data.op - this.data.st > t) {
            if (this.isInRange !== true) {
              this.globalData._mdf = true;
              this._mdf = true;
              this.isInRange = true;
              this.show();
            }
          } else if (this.isInRange !== false) {
            this.globalData._mdf = true;
            this.isInRange = false;
            this.hide();
          }
        },
        renderRenderable: function () {
          var t;
          var e = this.renderableComponents.length;
          for (t = 0; t < e; t += 1) {
            this.renderableComponents[t].renderFrame(this._isFirstFrame);
          }
        },
        sourceRectAtTime: function () {
          return {
            top: 0,
            left: 0,
            width: 100,
            height: 100
          };
        },
        getLayerSize: function () {
          if (this.data.ty === 5) {
            return {
              w: this.data.textData.width,
              h: this.data.textData.height
            };
          } else {
            return {
              w: this.data.width,
              h: this.data.height
            };
          }
        }
      };
      var getBlendMode = function () {
        var t = {
          0: "source-over",
          1: "multiply",
          2: "screen",
          3: "overlay",
          4: "darken",
          5: "lighten",
          6: "color-dodge",
          7: "color-burn",
          8: "hard-light",
          9: "soft-light",
          10: "difference",
          11: "exclusion",
          12: "hue",
          13: "saturation",
          14: "color",
          15: "luminosity"
        };
        return function (e) {
          return t[e] || "";
        };
      }();
      function SliderEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function AngleEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function ColorEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
      }
      function PointEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
      }
      function LayerIndexEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function MaskIndexEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function CheckboxEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
      }
      function NoValueEffect() {
        this.p = {};
      }
      function EffectsManager(t, e) {
        var i;
        var s;
        var r = t.ef || [];
        this.effectElements = [];
        var a = r.length;
        for (i = 0; i < a; i += 1) {
          s = new GroupEffect(r[i], e);
          this.effectElements.push(s);
        }
      }
      function GroupEffect(t, e) {
        this.init(t, e);
      }
      function BaseElement() {}
      function FrameElement() {}
      function FootageElement(t, e, i) {
        this.initFrame();
        this.initRenderable();
        this.assetData = e.getAssetData(t.refId);
        this.footageData = e.imageLoader.getAsset(this.assetData);
        this.initBaseData(t, e, i);
      }
      function AudioElement(t, e, i) {
        this.initFrame();
        this.initRenderable();
        this.assetData = e.getAssetData(t.refId);
        this.initBaseData(t, e, i);
        this._isPlaying = false;
        this._canPlay = false;
        var s = this.globalData.getAssetsPath(this.assetData);
        this.audio = this.globalData.audioController.createAudio(s);
        this._currentTime = 0;
        this.globalData.audioController.addAudio(this);
        this._volumeMultiplier = 1;
        this._volume = 1;
        this._previousVolume = null;
        this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
          _placeholder: true
        };
        this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
          k: [100]
        }, 1, 0.01, this);
      }
      function BaseRenderer() {}
      extendPrototype([DynamicPropertyContainer], GroupEffect);
      GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties;
      GroupEffect.prototype.init = function (t, e) {
        this.data = t;
        this.effectElements = [];
        this.initDynamicPropertyContainer(e);
        var i;
        var s;
        var r = this.data.ef.length;
        var a = this.data.ef;
        for (i = 0; i < r; i += 1) {
          s = null;
          switch (a[i].ty) {
            case 0:
              s = new SliderEffect(a[i], e, this);
              break;
            case 1:
              s = new AngleEffect(a[i], e, this);
              break;
            case 2:
              s = new ColorEffect(a[i], e, this);
              break;
            case 3:
              s = new PointEffect(a[i], e, this);
              break;
            case 4:
            case 7:
              s = new CheckboxEffect(a[i], e, this);
              break;
            case 10:
              s = new LayerIndexEffect(a[i], e, this);
              break;
            case 11:
              s = new MaskIndexEffect(a[i], e, this);
              break;
            case 5:
              s = new EffectsManager(a[i], e, this);
              break;
            default:
              s = new NoValueEffect(a[i], e, this);
          }
          if (s) {
            this.effectElements.push(s);
          }
        }
      };
      BaseElement.prototype = {
        checkMasks: function () {
          if (!this.data.hasMask) {
            return false;
          }
          var t = 0;
          var e = this.data.masksProperties.length;
          while (t < e) {
            if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== false) {
              return true;
            }
            t += 1;
          }
          return false;
        },
        initExpressions: function () {
          var t = getExpressionInterfaces();
          if (t) {
            var e = t("layer");
            var i = t("effects");
            var s = t("shape");
            var r = t("text");
            var a = t("comp");
            this.layerInterface = e(this);
            if (this.data.hasMask && this.maskManager) {
              this.layerInterface.registerMaskInterface(this.maskManager);
            }
            var n = i.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(n);
            if (this.data.ty === 0 || this.data.xt) {
              this.compInterface = a(this);
            } else if (this.data.ty === 4) {
              this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface);
              this.layerInterface.content = this.layerInterface.shapeInterface;
            } else if (this.data.ty === 5) {
              this.layerInterface.textInterface = r(this);
              this.layerInterface.text = this.layerInterface.textInterface;
            }
          }
        },
        setBlendMode: function () {
          var t = getBlendMode(this.data.bm);
          (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
        },
        initBaseData: function (t, e, i) {
          this.globalData = e;
          this.comp = i;
          this.data = t;
          this.layerId = createElementID();
          this.data.sr ||= 1;
          this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
        },
        getType: function () {
          return this.type;
        },
        sourceRectAtTime: function () {}
      };
      FrameElement.prototype = {
        initFrame: function () {
          this._isFirstFrame = false;
          this.dynamicProperties = [];
          this._mdf = false;
        },
        prepareProperties: function (t, e) {
          var i;
          var s = this.dynamicProperties.length;
          for (i = 0; i < s; i += 1) {
            if (e || this._isParent && this.dynamicProperties[i].propType === "transform") {
              this.dynamicProperties[i].getValue();
              if (this.dynamicProperties[i]._mdf) {
                this.globalData._mdf = true;
                this._mdf = true;
              }
            }
          }
        },
        addDynamicProperty: function (t) {
          if (this.dynamicProperties.indexOf(t) === -1) {
            this.dynamicProperties.push(t);
          }
        }
      };
      FootageElement.prototype.prepareFrame = function () {};
      extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement);
      FootageElement.prototype.getBaseElement = function () {
        return null;
      };
      FootageElement.prototype.renderFrame = function () {};
      FootageElement.prototype.destroy = function () {};
      FootageElement.prototype.initExpressions = function () {
        var t = getExpressionInterfaces();
        if (t) {
          var e = t("footage");
          this.layerInterface = e(this);
        }
      };
      FootageElement.prototype.getFootageData = function () {
        return this.footageData;
      };
      AudioElement.prototype.prepareFrame = function (t) {
        this.prepareRenderableFrame(t, true);
        this.prepareProperties(t, true);
        if (this.tm._placeholder) {
          this._currentTime = t / this.data.sr;
        } else {
          var e = this.tm.v;
          this._currentTime = e;
        }
        this._volume = this.lv.v[0];
        var i = this._volume * this._volumeMultiplier;
        if (this._previousVolume !== i) {
          this._previousVolume = i;
          this.audio.volume(i);
        }
      };
      extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement);
      AudioElement.prototype.renderFrame = function () {
        if (this.isInRange && this._canPlay) {
          if (this._isPlaying) {
            if (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) {
              this.audio.seek(this._currentTime / this.globalData.frameRate);
            }
          } else {
            this.audio.play();
            this.audio.seek(this._currentTime / this.globalData.frameRate);
            this._isPlaying = true;
          }
        }
      };
      AudioElement.prototype.show = function () {};
      AudioElement.prototype.hide = function () {
        this.audio.pause();
        this._isPlaying = false;
      };
      AudioElement.prototype.pause = function () {
        this.audio.pause();
        this._isPlaying = false;
        this._canPlay = false;
      };
      AudioElement.prototype.resume = function () {
        this._canPlay = true;
      };
      AudioElement.prototype.setRate = function (t) {
        this.audio.rate(t);
      };
      AudioElement.prototype.volume = function (t) {
        this._volumeMultiplier = t;
        this._previousVolume = t * this._volume;
        this.audio.volume(this._previousVolume);
      };
      AudioElement.prototype.getBaseElement = function () {
        return null;
      };
      AudioElement.prototype.destroy = function () {};
      AudioElement.prototype.sourceRectAtTime = function () {};
      AudioElement.prototype.initExpressions = function () {};
      BaseRenderer.prototype.checkLayers = function (t) {
        var e;
        var i;
        var s = this.layers.length;
        this.completeLayers = true;
        e = s - 1;
        for (; e >= 0; e -= 1) {
          if (!this.elements[e] && (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st) {
            this.buildItem(e);
          }
          this.completeLayers = !!this.elements[e] && this.completeLayers;
        }
        this.checkPendingElements();
      };
      BaseRenderer.prototype.createItem = function (t) {
        switch (t.ty) {
          case 2:
            return this.createImage(t);
          case 0:
            return this.createComp(t);
          case 1:
            return this.createSolid(t);
          case 3:
          default:
            return this.createNull(t);
          case 4:
            return this.createShape(t);
          case 5:
            return this.createText(t);
          case 6:
            return this.createAudio(t);
          case 13:
            return this.createCamera(t);
          case 15:
            return this.createFootage(t);
        }
      };
      BaseRenderer.prototype.createCamera = function () {
        throw Error("You're using a 3d camera. Try the html renderer.");
      };
      BaseRenderer.prototype.createAudio = function (t) {
        return new AudioElement(t, this.globalData, this);
      };
      BaseRenderer.prototype.createFootage = function (t) {
        return new FootageElement(t, this.globalData, this);
      };
      BaseRenderer.prototype.buildAllItems = function () {
        var t;
        var e = this.layers.length;
        for (t = 0; t < e; t += 1) {
          this.buildItem(t);
        }
        this.checkPendingElements();
      };
      BaseRenderer.prototype.includeLayers = function (t) {
        this.completeLayers = false;
        var e;
        var i;
        var s = t.length;
        var r = this.layers.length;
        for (e = 0; e < s; e += 1) {
          for (i = 0; i < r;) {
            if (this.layers[i].id === t[e].id) {
              this.layers[i] = t[e];
              break;
            }
            i += 1;
          }
        }
      };
      BaseRenderer.prototype.setProjectInterface = function (t) {
        this.globalData.projectInterface = t;
      };
      BaseRenderer.prototype.initItems = function () {
        if (!this.globalData.progressiveLoad) {
          this.buildAllItems();
        }
      };
      BaseRenderer.prototype.buildElementParenting = function (t, e, i) {
        var s = this.elements;
        var r = this.layers;
        var a = 0;
        var n = r.length;
        while (a < n) {
          if (r[a].ind == e) {
            if (s[a] && s[a] !== true) {
              i.push(s[a]);
              s[a].setAsParent();
              if (r[a].parent !== undefined) {
                this.buildElementParenting(t, r[a].parent, i);
              } else {
                t.setHierarchy(i);
              }
            } else {
              this.buildItem(a);
              this.addPendingElement(t);
            }
          }
          a += 1;
        }
      };
      BaseRenderer.prototype.addPendingElement = function (t) {
        this.pendingElements.push(t);
      };
      BaseRenderer.prototype.searchExtraCompositions = function (t) {
        var e;
        var i = t.length;
        for (e = 0; e < i; e += 1) {
          if (t[e].xt) {
            var s = this.createComp(t[e]);
            s.initExpressions();
            this.globalData.projectInterface.registerComposition(s);
          }
        }
      };
      BaseRenderer.prototype.getElementById = function (t) {
        var e;
        var i = this.elements.length;
        for (e = 0; e < i; e += 1) {
          if (this.elements[e].data.ind === t) {
            return this.elements[e];
          }
        }
        return null;
      };
      BaseRenderer.prototype.getElementByPath = function (t) {
        var e = t.shift();
        if (typeof e == "number") {
          i = this.elements[e];
        } else {
          var i;
          var s;
          var r = this.elements.length;
          for (s = 0; s < r; s += 1) {
            if (this.elements[s].data.nm === e) {
              i = this.elements[s];
              break;
            }
          }
        }
        if (t.length === 0) {
          return i;
        } else {
          return i.getElementByPath(t);
        }
      };
      BaseRenderer.prototype.setupGlobalData = function (t, e) {
        this.globalData.fontManager = new FontManager();
        this.globalData.slotManager = slotFactory(t);
        this.globalData.fontManager.addChars(t.chars);
        this.globalData.fontManager.addFonts(t.fonts, e);
        this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
        this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
        this.globalData.imageLoader = this.animationItem.imagePreloader;
        this.globalData.audioController = this.animationItem.audioController;
        this.globalData.frameId = 0;
        this.globalData.frameRate = t.fr;
        this.globalData.nm = t.nm;
        this.globalData.compSize = {
          w: t.w,
          h: t.h
        };
      };
      var effectTypes = {
        TRANSFORM_EFFECT: "transformEFfect"
      };
      function TransformElement() {}
      function MaskElement(t, e, i) {
        this.data = t;
        this.element = e;
        this.globalData = i;
        this.storedData = [];
        this.masksProperties = this.data.masksProperties || [];
        this.maskElement = null;
        var s = this.globalData.defs;
        var r = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(r);
        this.solidPath = "";
        var a = this.masksProperties;
        var n = 0;
        var o = [];
        var h = createElementID();
        var l = "clipPath";
        var p = "clip-path";
        for (f = 0; f < r; f += 1) {
          if (a[f].mode !== "a" && a[f].mode !== "n" || a[f].inv || a[f].o.k !== 100 || a[f].o.x) {
            l = "mask";
            p = "mask";
          }
          if ((a[f].mode === "s" || a[f].mode === "i") && n === 0) {
            (d = createNS("rect")).setAttribute("fill", "#ffffff");
            d.setAttribute("width", this.element.comp.data.w || 0);
            d.setAttribute("height", this.element.comp.data.h || 0);
            o.push(d);
          } else {
            d = null;
          }
          c = createNS("path");
          if (a[f].mode === "n") {
            this.viewData[f] = {
              op: PropertyFactory.getProp(this.element, a[f].o, 0, 0.01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, a[f], 3),
              elem: c,
              lastPath: ""
            };
            s.appendChild(c);
          } else {
            n += 1;
            c.setAttribute("fill", a[f].mode === "s" ? "#000000" : "#ffffff");
            c.setAttribute("clip-rule", "nonzero");
            if (a[f].x.k !== 0) {
              l = "mask";
              p = "mask";
              v = PropertyFactory.getProp(this.element, a[f].x, 0, null, this.element);
              b = createElementID();
              (g = createNS("filter")).setAttribute("id", b);
              (y = createNS("feMorphology")).setAttribute("operator", "erode");
              y.setAttribute("in", "SourceGraphic");
              y.setAttribute("radius", "0");
              g.appendChild(y);
              s.appendChild(g);
              c.setAttribute("stroke", a[f].mode === "s" ? "#000000" : "#ffffff");
            } else {
              y = null;
              v = null;
            }
            this.storedData[f] = {
              elem: c,
              x: v,
              expan: y,
              lastPath: "",
              lastOperator: "",
              filterId: b,
              lastRadius: 0
            };
            if (a[f].mode === "i") {
              u = o.length;
              var f;
              var c;
              var m;
              var u;
              var d;
              var g;
              var y;
              var v;
              var b;
              var x = createNS("g");
              for (m = 0; m < u; m += 1) {
                x.appendChild(o[m]);
              }
              var _ = createNS("mask");
              _.setAttribute("mask-type", "alpha");
              _.setAttribute("id", h + "_" + n);
              _.appendChild(c);
              s.appendChild(_);
              x.setAttribute("mask", "url(" + getLocationHref() + "#" + h + "_" + n + ")");
              o.length = 0;
              o.push(x);
            } else {
              o.push(c);
            }
            if (a[f].inv && !this.solidPath) {
              this.solidPath = this.createLayerSolidPath();
            }
            this.viewData[f] = {
              elem: c,
              lastPath: "",
              op: PropertyFactory.getProp(this.element, a[f].o, 0, 0.01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, a[f], 3),
              invRect: d
            };
            if (!this.viewData[f].prop.k) {
              this.drawPath(a[f], this.viewData[f].prop.v, this.viewData[f]);
            }
          }
        }
        f = 0;
        this.maskElement = createNS(l);
        r = o.length;
        for (; f < r; f += 1) {
          this.maskElement.appendChild(o[f]);
        }
        if (n > 0) {
          this.maskElement.setAttribute("id", h);
          this.element.maskedElement.setAttribute(p, "url(" + getLocationHref() + "#" + h + ")");
          s.appendChild(this.maskElement);
        }
        if (this.viewData.length) {
          this.element.addRenderableComponent(this);
        }
      }
      TransformElement.prototype = {
        initTransform: function () {
          var t = new Matrix();
          this.finalTransform = {
            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
              o: 0
            },
            _matMdf: false,
            _localMatMdf: false,
            _opMdf: false,
            mat: t,
            localMat: t,
            localOpacity: 1
          };
          if (this.data.ao) {
            this.finalTransform.mProp.autoOriented = true;
          }
          this.data.ty;
        },
        renderTransform: function () {
          this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
          this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;
          if (this.hierarchy) {
            var t;
            var e = this.finalTransform.mat;
            var i = 0;
            var s = this.hierarchy.length;
            if (!this.finalTransform._matMdf) {
              while (i < s) {
                if (this.hierarchy[i].finalTransform.mProp._mdf) {
                  this.finalTransform._matMdf = true;
                  break;
                }
                i += 1;
              }
            }
            if (this.finalTransform._matMdf) {
              t = this.finalTransform.mProp.v.props;
              e.cloneFromProps(t);
              i = 0;
              for (; i < s; i += 1) {
                e.multiply(this.hierarchy[i].finalTransform.mProp.v);
              }
            }
          }
          if (this.finalTransform._matMdf) {
            this.finalTransform._localMatMdf = this.finalTransform._matMdf;
          }
          if (this.finalTransform._opMdf) {
            this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
          }
        },
        renderLocalTransform: function () {
          if (this.localTransforms) {
            var t = 0;
            var e = this.localTransforms.length;
            this.finalTransform._localMatMdf = this.finalTransform._matMdf;
            if (!this.finalTransform._localMatMdf || !this.finalTransform._opMdf) {
              while (t < e) {
                if (this.localTransforms[t]._mdf) {
                  this.finalTransform._localMatMdf = true;
                }
                if (this.localTransforms[t]._opMdf && !this.finalTransform._opMdf) {
                  this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
                  this.finalTransform._opMdf = true;
                }
                t += 1;
              }
            }
            if (this.finalTransform._localMatMdf) {
              var i = this.finalTransform.localMat;
              this.localTransforms[0].matrix.clone(i);
              t = 1;
              for (; t < e; t += 1) {
                var s = this.localTransforms[t].matrix;
                i.multiply(s);
              }
              i.multiply(this.finalTransform.mat);
            }
            if (this.finalTransform._opMdf) {
              var r = this.finalTransform.localOpacity;
              for (t = 0; t < e; t += 1) {
                r *= this.localTransforms[t].opacity * 0.01;
              }
              this.finalTransform.localOpacity = r;
            }
          }
        },
        searchEffectTransforms: function () {
          if (this.renderableEffectsManager) {
            var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
            if (t.length) {
              this.localTransforms = [];
              this.finalTransform.localMat = new Matrix();
              var e = 0;
              var i = t.length;
              for (e = 0; e < i; e += 1) {
                this.localTransforms.push(t[e]);
              }
            }
          }
        },
        globalToLocal: function (t) {
          var e;
          var i;
          var s = [];
          s.push(this.finalTransform);
          var r = true;
          var a = this.comp;
          while (r) {
            if (a.finalTransform) {
              if (a.data.hasMask) {
                s.splice(0, 0, a.finalTransform);
              }
              a = a.comp;
            } else {
              r = false;
            }
          }
          var n = s.length;
          for (e = 0; e < n; e += 1) {
            i = s[e].mat.applyToPointArray(0, 0, 0);
            t = [t[0] - i[0], t[1] - i[1], 0];
          }
          return t;
        },
        mHelper: new Matrix()
      };
      MaskElement.prototype.getMaskProperty = function (t) {
        return this.viewData[t].prop;
      };
      MaskElement.prototype.renderFrame = function (t) {
        var e;
        var i = this.element.finalTransform.mat;
        var s = this.masksProperties.length;
        for (e = 0; e < s; e += 1) {
          if (this.viewData[e].prop._mdf || t) {
            this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]);
          }
          if (this.viewData[e].op._mdf || t) {
            this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v);
          }
          if (this.masksProperties[e].mode !== "n" && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
            var r = this.storedData[e].expan;
            if (this.storedData[e].x.v < 0) {
              if (this.storedData[e].lastOperator !== "erode") {
                this.storedData[e].lastOperator = "erode";
                this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")");
              }
              r.setAttribute("radius", -this.storedData[e].x.v);
            } else {
              if (this.storedData[e].lastOperator !== "dilate") {
                this.storedData[e].lastOperator = "dilate";
                this.storedData[e].elem.setAttribute("filter", null);
              }
              this.storedData[e].elem.setAttribute("stroke-width", this.storedData[e].x.v * 2);
            }
          }
        }
      };
      MaskElement.prototype.getMaskelement = function () {
        return this.maskElement;
      };
      MaskElement.prototype.createLayerSolidPath = function () {
        var t = "M0,0 ";
        return t + (" h" + this.globalData.compSize.w + " v" + this.globalData.compSize.h + " h-" + this.globalData.compSize.w + (" v-" + this.globalData.compSize.h) + " ");
      };
      MaskElement.prototype.drawPath = function (t, e, i) {
        var s;
        var r;
        var a = " M" + e.v[0][0] + "," + e.v[0][1];
        s = 1;
        r = e._length;
        for (; s < r; s += 1) {
          a += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
        }
        if (e.c && r > 1) {
          a += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1];
        }
        if (i.lastPath !== a) {
          var n = "";
          if (i.elem) {
            if (e.c) {
              n = t.inv ? this.solidPath + a : a;
            }
            i.elem.setAttribute("d", n);
          }
          i.lastPath = a;
        }
      };
      MaskElement.prototype.destroy = function () {
        this.element = null;
        this.globalData = null;
        this.maskElement = null;
        this.data = null;
        this.masksProperties = null;
      };
      var filtersFactory = function () {
        var t = {};
        function e(t, e) {
          var i = createNS("filter");
          i.setAttribute("id", t);
          if (e !== true) {
            i.setAttribute("filterUnits", "objectBoundingBox");
            i.setAttribute("x", "0%");
            i.setAttribute("y", "0%");
            i.setAttribute("width", "100%");
            i.setAttribute("height", "100%");
          }
          return i;
        }
        function i() {
          var t = createNS("feColorMatrix");
          t.setAttribute("type", "matrix");
          t.setAttribute("color-interpolation-filters", "sRGB");
          t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1");
          return t;
        }
        t.createFilter = e;
        t.createAlphaToLuminanceFilter = i;
        return t;
      }();
      var featureSupport = function () {
        var t = {
          maskType: true,
          svgLumaHidden: true,
          offscreenCanvas: typeof OffscreenCanvas != "undefined"
        };
        if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
          t.maskType = false;
        }
        if (/firefox/i.test(navigator.userAgent)) {
          t.svgLumaHidden = false;
        }
        return t;
      }();
      var registeredEffects$1 = {};
      var idPrefix = "filter_result_";
      function SVGEffects(t) {
        var e;
        var i;
        var s = "SourceGraphic";
        var r = t.data.ef ? t.data.ef.length : 0;
        var a = createElementID();
        var n = filtersFactory.createFilter(a, true);
        var o = 0;
        e = 0;
        this.filters = [];
        for (; e < r; e += 1) {
          i = null;
          var h = t.data.ef[e].ty;
          if (registeredEffects$1[h]) {
            i = new registeredEffects$1[h].effect(n, t.effectsManager.effectElements[e], t, idPrefix + o, s);
            s = idPrefix + o;
            if (registeredEffects$1[h].countsAsEffect) {
              o += 1;
            }
          }
          if (i) {
            this.filters.push(i);
          }
        }
        if (o) {
          t.globalData.defs.appendChild(n);
          t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")");
        }
        if (this.filters.length) {
          t.addRenderableComponent(this);
        }
      }
      function registerEffect$1(t, e, i) {
        registeredEffects$1[t] = {
          effect: e,
          countsAsEffect: i
        };
      }
      function SVGBaseElement() {}
      function HierarchyElement() {}
      function RenderableDOMElement() {}
      function IImageElement(t, e, i) {
        this.assetData = e.getAssetData(t.refId);
        if (this.assetData && this.assetData.sid) {
          this.assetData = e.slotManager.getProp(this.assetData);
        }
        this.initElement(t, e, i);
        this.sourceRect = {
          top: 0,
          left: 0,
          width: this.assetData.w,
          height: this.assetData.h
        };
      }
      function ProcessedElement(t, e) {
        this.elem = t;
        this.pos = e;
      }
      function IShapeElement() {}
      SVGEffects.prototype.renderFrame = function (t) {
        var e;
        var i = this.filters.length;
        for (e = 0; e < i; e += 1) {
          this.filters[e].renderFrame(t);
        }
      };
      SVGEffects.prototype.getEffects = function (t) {
        var e;
        var i = this.filters.length;
        var s = [];
        for (e = 0; e < i; e += 1) {
          if (this.filters[e].type === t) {
            s.push(this.filters[e]);
          }
        }
        return s;
      };
      SVGBaseElement.prototype = {
        initRendererElement: function () {
          this.layerElement = createNS("g");
        },
        createContainerElements: function () {
          this.matteElement = createNS("g");
          this.transformedElement = this.layerElement;
          this.maskedElement = this.layerElement;
          this._sizeChanged = false;
          var t = null;
          if (this.data.td) {
            this.matteMasks = {};
            var e = createNS("g");
            e.setAttribute("id", this.layerId);
            e.appendChild(this.layerElement);
            t = e;
            this.globalData.defs.appendChild(e);
          } else if (this.data.tt) {
            this.matteElement.appendChild(this.layerElement);
            t = this.matteElement;
            this.baseElement = this.matteElement;
          } else {
            this.baseElement = this.layerElement;
          }
          if (this.data.ln) {
            this.layerElement.setAttribute("id", this.data.ln);
          }
          if (this.data.cl) {
            this.layerElement.setAttribute("class", this.data.cl);
          }
          if (this.data.ty === 0 && !this.data.hd) {
            var i = createNS("clipPath");
            var s = createNS("path");
            s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
            var r = createElementID();
            i.setAttribute("id", r);
            i.appendChild(s);
            this.globalData.defs.appendChild(i);
            if (this.checkMasks()) {
              var a = createNS("g");
              a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + r + ")");
              a.appendChild(this.layerElement);
              this.transformedElement = a;
              if (t) {
                t.appendChild(this.transformedElement);
              } else {
                this.baseElement = this.transformedElement;
              }
            } else {
              this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + r + ")");
            }
          }
          if (this.data.bm !== 0) {
            this.setBlendMode();
          }
        },
        renderElement: function () {
          if (this.finalTransform._localMatMdf) {
            this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS());
          }
          if (this.finalTransform._opMdf) {
            this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
          }
        },
        destroyBaseElement: function () {
          this.layerElement = null;
          this.matteElement = null;
          this.maskManager.destroy();
        },
        getBaseElement: function () {
          if (this.data.hd) {
            return null;
          } else {
            return this.baseElement;
          }
        },
        createRenderableComponents: function () {
          this.maskManager = new MaskElement(this.data, this, this.globalData);
          this.renderableEffectsManager = new SVGEffects(this);
          this.searchEffectTransforms();
        },
        getMatte: function (t) {
          this.matteMasks ||= {};
          if (!this.matteMasks[t]) {
            var e;
            var i;
            var s;
            var r;
            var a = this.layerId + "_" + t;
            if (t === 1 || t === 3) {
              var n = createNS("mask");
              n.setAttribute("id", a);
              n.setAttribute("mask-type", t === 3 ? "luminance" : "alpha");
              (s = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId);
              n.appendChild(s);
              this.globalData.defs.appendChild(n);
              if (!featureSupport.maskType && t === 1) {
                n.setAttribute("mask-type", "luminance");
                e = createElementID();
                i = filtersFactory.createFilter(e);
                this.globalData.defs.appendChild(i);
                i.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                (r = createNS("g")).appendChild(s);
                n.appendChild(r);
                r.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")");
              }
            } else if (t === 2) {
              var o = createNS("mask");
              o.setAttribute("id", a);
              o.setAttribute("mask-type", "alpha");
              var h = createNS("g");
              o.appendChild(h);
              e = createElementID();
              i = filtersFactory.createFilter(e);
              var l = createNS("feComponentTransfer");
              l.setAttribute("in", "SourceGraphic");
              i.appendChild(l);
              var p = createNS("feFuncA");
              p.setAttribute("type", "table");
              p.setAttribute("tableValues", "1.0 0.0");
              l.appendChild(p);
              this.globalData.defs.appendChild(i);
              var f = createNS("rect");
              f.setAttribute("width", this.comp.data.w);
              f.setAttribute("height", this.comp.data.h);
              f.setAttribute("x", "0");
              f.setAttribute("y", "0");
              f.setAttribute("fill", "#ffffff");
              f.setAttribute("opacity", "0");
              h.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")");
              h.appendChild(f);
              (s = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId);
              h.appendChild(s);
              if (!featureSupport.maskType) {
                o.setAttribute("mask-type", "luminance");
                i.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                r = createNS("g");
                h.appendChild(f);
                r.appendChild(this.layerElement);
                h.appendChild(r);
              }
              this.globalData.defs.appendChild(o);
            }
            this.matteMasks[t] = a;
          }
          return this.matteMasks[t];
        },
        setMatte: function (t) {
          if (this.matteElement) {
            this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")");
          }
        }
      };
      HierarchyElement.prototype = {
        initHierarchy: function () {
          this.hierarchy = [];
          this._isParent = false;
          this.checkParenting();
        },
        setHierarchy: function (t) {
          this.hierarchy = t;
        },
        setAsParent: function () {
          this._isParent = true;
        },
        checkParenting: function () {
          if (this.data.parent !== undefined) {
            this.comp.buildElementParenting(this, this.data.parent, []);
          }
        }
      };
      (function () {
        extendPrototype([RenderableElement, createProxyFunction({
          initElement: function (t, e, i) {
            this.initFrame();
            this.initBaseData(t, e, i);
            this.initTransform(t, e, i);
            this.initHierarchy();
            this.initRenderable();
            this.initRendererElement();
            this.createContainerElements();
            this.createRenderableComponents();
            this.createContent();
            this.hide();
          },
          hide: function () {
            if (!this.hidden && (!this.isInRange || !!this.isTransparent)) {
              (this.baseElement || this.layerElement).style.display = "none";
              this.hidden = true;
            }
          },
          show: function () {
            if (this.isInRange && !this.isTransparent) {
              if (!this.data.hd) {
                (this.baseElement || this.layerElement).style.display = "block";
              }
              this.hidden = false;
              this._isFirstFrame = true;
            }
          },
          renderFrame: function () {
            if (!this.data.hd && !this.hidden) {
              this.renderTransform();
              this.renderRenderable();
              this.renderLocalTransform();
              this.renderElement();
              this.renderInnerContent();
              this._isFirstFrame &&= false;
            }
          },
          renderInnerContent: function () {},
          prepareFrame: function (t) {
            this._mdf = false;
            this.prepareRenderableFrame(t);
            this.prepareProperties(t, this.isInRange);
            this.checkTransparency();
          },
          destroy: function () {
            this.innerElem = null;
            this.destroyBaseElement();
          }
        })], RenderableDOMElement);
      })();
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement);
      IImageElement.prototype.createContent = function () {
        var t = this.globalData.getAssetsPath(this.assetData);
        this.innerElem = createNS("image");
        this.innerElem.setAttribute("width", this.assetData.w + "px");
        this.innerElem.setAttribute("height", this.assetData.h + "px");
        this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
        this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t);
        this.layerElement.appendChild(this.innerElem);
      };
      IImageElement.prototype.sourceRectAtTime = function () {
        return this.sourceRect;
      };
      IShapeElement.prototype = {
        addShapeToModifiers: function (t) {
          var e;
          var i = this.shapeModifiers.length;
          for (e = 0; e < i; e += 1) {
            this.shapeModifiers[e].addShape(t);
          }
        },
        isShapeInAnimatedModifiers: function (t) {
          var e = 0;
          var i = this.shapeModifiers.length;
          while (e < i) {
            if (this.shapeModifiers[e].isAnimatedWithShape(t)) {
              return true;
            }
          }
          return false;
        },
        renderModifiers: function () {
          if (this.shapeModifiers.length) {
            var t;
            var e = this.shapes.length;
            for (t = 0; t < e; t += 1) {
              this.shapes[t].sh.reset();
            }
            for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
          }
        },
        searchProcessedElement: function (t) {
          var e = this.processedElements;
          var i = 0;
          var s = e.length;
          while (i < s) {
            if (e[i].elem === t) {
              return e[i].pos;
            }
            i += 1;
          }
          return 0;
        },
        addProcessedElement: function (t, e) {
          var i = this.processedElements;
          var s = i.length;
          while (s) {
            if (i[s -= 1].elem === t) {
              i[s].pos = e;
              return;
            }
          }
          i.push(new ProcessedElement(t, e));
        },
        prepareFrame: function (t) {
          this.prepareRenderableFrame(t);
          this.prepareProperties(t, this.isInRange);
        }
      };
      var lineCapEnum = {
        1: "butt",
        2: "round",
        3: "square"
      };
      var lineJoinEnum = {
        1: "miter",
        2: "round",
        3: "bevel"
      };
      function SVGShapeData(t, e, i) {
        this.caches = [];
        this.styles = [];
        this.transformers = t;
        this.lStr = "";
        this.sh = i;
        this.lvl = e;
        this._isAnimated = !!i.k;
        var s = 0;
        var r = t.length;
        while (s < r) {
          if (t[s].mProps.dynamicProperties.length) {
            this._isAnimated = true;
            break;
          }
          s += 1;
        }
      }
      function SVGStyleData(t, e) {
        this.data = t;
        this.type = t.ty;
        this.d = "";
        this.lvl = e;
        this._mdf = false;
        this.closed = t.hd === true;
        this.pElem = createNS("path");
        this.msElem = null;
      }
      function DashProperty(t, e, i, s) {
        this.elem = t;
        this.frameId = -1;
        this.dataProps = createSizedArray(e.length);
        this.renderer = i;
        this.k = false;
        this.dashStr = "";
        this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0);
        this.dashoffset = createTypedArray("float32", 1);
        this.initDynamicPropertyContainer(s);
        var r;
        var a;
        var n = e.length || 0;
        for (r = 0; r < n; r += 1) {
          a = PropertyFactory.getProp(t, e[r].v, 0, 0, this);
          this.k = a.k || this.k;
          this.dataProps[r] = {
            n: e[r].n,
            p: a
          };
        }
        if (!this.k) {
          this.getValue(true);
        }
        this._isAnimated = this.k;
      }
      function SVGStrokeStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t);
        this.getValue = this.iterateDynamicProperties;
        this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this);
        this.w = PropertyFactory.getProp(t, e.w, 0, null, this);
        this.d = new DashProperty(t, e.d || {}, "svg", this);
        this.c = PropertyFactory.getProp(t, e.c, 1, 255, this);
        this.style = i;
        this._isAnimated = !!this._isAnimated;
      }
      function SVGFillStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t);
        this.getValue = this.iterateDynamicProperties;
        this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this);
        this.c = PropertyFactory.getProp(t, e.c, 1, 255, this);
        this.style = i;
      }
      function SVGNoStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t);
        this.getValue = this.iterateDynamicProperties;
        this.style = i;
      }
      function GradientProperty(t, e, i) {
        this.data = e;
        this.c = createTypedArray("uint8c", e.p * 4);
        var s = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
        this.o = createTypedArray("float32", s);
        this._cmdf = false;
        this._omdf = false;
        this._collapsable = this.checkCollapsable();
        this._hasOpacity = s;
        this.initDynamicPropertyContainer(i);
        this.prop = PropertyFactory.getProp(t, e.k, 1, null, this);
        this.k = this.prop.k;
        this.getValue(true);
      }
      function SVGGradientFillStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t);
        this.getValue = this.iterateDynamicProperties;
        this.initGradientData(t, e, i);
      }
      function SVGGradientStrokeStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t);
        this.getValue = this.iterateDynamicProperties;
        this.w = PropertyFactory.getProp(t, e.w, 0, null, this);
        this.d = new DashProperty(t, e.d || {}, "svg", this);
        this.initGradientData(t, e, i);
        this._isAnimated = !!this._isAnimated;
      }
      function ShapeGroupData() {
        this.it = [];
        this.prevViewData = [];
        this.gr = createNS("g");
      }
      function SVGTransformData(t, e, i) {
        this.transform = {
          mProps: t,
          op: e,
          container: i
        };
        this.elements = [];
        this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
      }
      SVGShapeData.prototype.setAsAnimated = function () {
        this._isAnimated = true;
      };
      SVGStyleData.prototype.reset = function () {
        this.d = "";
        this._mdf = false;
      };
      DashProperty.prototype.getValue = function (t) {
        if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
          var e = 0;
          var i = this.dataProps.length;
          if (this.renderer === "svg") {
            this.dashStr = "";
          }
          e = 0;
          for (; e < i; e += 1) {
            if (this.dataProps[e].n !== "o") {
              if (this.renderer === "svg") {
                this.dashStr += " " + this.dataProps[e].p.v;
              } else {
                this.dashArray[e] = this.dataProps[e].p.v;
              }
            } else {
              this.dashoffset[0] = this.dataProps[e].p.v;
            }
          }
        }
      };
      extendPrototype([DynamicPropertyContainer], DashProperty);
      extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
      extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
      extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
      GradientProperty.prototype.comparePoints = function (t, e) {
        var i = 0;
        var s = this.o.length / 2;
        while (i < s) {
          if (Math.abs(t[i * 4] - t[e * 4 + i * 2]) > 0.01) {
            return false;
          }
          i += 1;
        }
        return true;
      };
      GradientProperty.prototype.checkCollapsable = function () {
        if (this.o.length / 2 != this.c.length / 4) {
          return false;
        }
        if (this.data.k.k[0].s) {
          var t = 0;
          var e = this.data.k.k.length;
          while (t < e) {
            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) {
              return false;
            }
            t += 1;
          }
        } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
          return false;
        }
        return true;
      };
      GradientProperty.prototype.getValue = function (t) {
        this.prop.getValue();
        this._mdf = false;
        this._cmdf = false;
        this._omdf = false;
        if (this.prop._mdf || t) {
          var e;
          var i;
          var s;
          var r = this.data.p * 4;
          for (e = 0; e < r; e += 1) {
            i = e % 4 == 0 ? 100 : 255;
            s = Math.round(this.prop.v[e] * i);
            if (this.c[e] !== s) {
              this.c[e] = s;
              this._cmdf = !t;
            }
          }
          if (this.o.length) {
            r = this.prop.v.length;
            e = this.data.p * 4;
            for (; e < r; e += 1) {
              i = e % 2 == 0 ? 100 : 1;
              s = e % 2 == 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e];
              if (this.o[e - this.data.p * 4] !== s) {
                this.o[e - this.data.p * 4] = s;
                this._omdf = !t;
              }
            }
          }
          this._mdf = !t;
        }
      };
      extendPrototype([DynamicPropertyContainer], GradientProperty);
      SVGGradientFillStyleData.prototype.initGradientData = function (t, e, i) {
        this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this);
        this.s = PropertyFactory.getProp(t, e.s, 1, null, this);
        this.e = PropertyFactory.getProp(t, e.e, 1, null, this);
        this.h = PropertyFactory.getProp(t, e.h || {
          k: 0
        }, 0, 0.01, this);
        this.a = PropertyFactory.getProp(t, e.a || {
          k: 0
        }, 0, degToRads, this);
        this.g = new GradientProperty(t, e.g, this);
        this.style = i;
        this.stops = [];
        this.setGradientData(i.pElem, e);
        this.setGradientOpacity(e, i);
        this._isAnimated = !!this._isAnimated;
      };
      SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
        var i;
        var s;
        var r;
        var a = createElementID();
        var n = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
        n.setAttribute("id", a);
        n.setAttribute("spreadMethod", "pad");
        n.setAttribute("gradientUnits", "userSpaceOnUse");
        var o = [];
        s = 0;
        r = e.g.p * 4;
        for (; s < r; s += 4) {
          i = createNS("stop");
          n.appendChild(i);
          o.push(i);
        }
        t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + a + ")");
        this.gf = n;
        this.cst = o;
      };
      SVGGradientFillStyleData.prototype.setGradientOpacity = function (t, e) {
        if (this.g._hasOpacity && !this.g._collapsable) {
          var i;
          var s;
          var r;
          var a = createNS("mask");
          var n = createNS("path");
          a.appendChild(n);
          var o = createElementID();
          var h = createElementID();
          a.setAttribute("id", h);
          var l = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
          l.setAttribute("id", o);
          l.setAttribute("spreadMethod", "pad");
          l.setAttribute("gradientUnits", "userSpaceOnUse");
          r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
          var p = this.stops;
          for (s = t.g.p * 4; s < r; s += 2) {
            (i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)");
            l.appendChild(i);
            p.push(i);
          }
          n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")");
          if (t.ty === "gs") {
            n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]);
            n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]);
            if (t.lj === 1) {
              n.setAttribute("stroke-miterlimit", t.ml);
            }
          }
          this.of = l;
          this.ms = a;
          this.ost = p;
          this.maskId = h;
          e.msElem = n;
        }
      };
      extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
      extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
      function buildShapeString(t, e, i, s) {
        if (e === 0) {
          return "";
        }
        var r;
        var a = t.o;
        var n = t.i;
        var o = t.v;
        var h = " M" + s.applyToPointStringified(o[0][0], o[0][1]);
        for (r = 1; r < e; r += 1) {
          h += " C" + s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + " " + s.applyToPointStringified(n[r][0], n[r][1]) + " " + s.applyToPointStringified(o[r][0], o[r][1]);
        }
        if (i && e) {
          h += " C" + s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(o[0][0], o[0][1]) + "z";
        }
        return h;
      }
      var SVGElementsRenderer = function () {
        var t = new Matrix();
        var e = new Matrix();
        function i(t, e, i) {
          if (i || e.transform.op._mdf) {
            e.transform.container.setAttribute("opacity", e.transform.op.v);
          }
          if (i || e.transform.mProps._mdf) {
            e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS());
          }
        }
        function s() {}
        function r(i, s, r) {
          var a;
          var n;
          var o;
          var h;
          var l;
          var p;
          var f;
          var c;
          var m;
          var u;
          var d = s.styles.length;
          var g = s.lvl;
          for (p = 0; p < d; p += 1) {
            h = s.sh._mdf || r;
            if (s.styles[p].lvl < g) {
              c = e.reset();
              m = g - s.styles[p].lvl;
              u = s.transformers.length - 1;
              while (!h && m > 0) {
                h = s.transformers[u].mProps._mdf || h;
                m -= 1;
                u -= 1;
              }
              if (h) {
                m = g - s.styles[p].lvl;
                u = s.transformers.length - 1;
                while (m > 0) {
                  c.multiply(s.transformers[u].mProps.v);
                  m -= 1;
                  u -= 1;
                }
              }
            } else {
              c = t;
            }
            n = (f = s.sh.paths)._length;
            if (h) {
              a = 0;
              o = "";
              for (; a < n; a += 1) {
                if ((l = f.shapes[a]) && l._length) {
                  o += buildShapeString(l, l._length, l.c, c);
                }
              }
              s.caches[p] = o;
            } else {
              o = s.caches[p];
            }
            s.styles[p].d += i.hd === true ? "" : o;
            s.styles[p]._mdf = h || s.styles[p]._mdf;
          }
        }
        function a(t, e, i) {
          var s = e.style;
          if (e.c._mdf || i) {
            s.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")");
          }
          if (e.o._mdf || i) {
            s.pElem.setAttribute("fill-opacity", e.o.v);
          }
        }
        function n(t, e, i) {
          o(t, e, i);
          h(t, e, i);
        }
        function o(t, e, i) {
          var s;
          var r;
          var a;
          var n;
          var o;
          var h = e.gf;
          var l = e.g._hasOpacity;
          var p = e.s.v;
          var f = e.e.v;
          if (e.o._mdf || i) {
            var c = t.ty === "gf" ? "fill-opacity" : "stroke-opacity";
            e.style.pElem.setAttribute(c, e.o.v);
          }
          if (e.s._mdf || i) {
            var m = t.t === 1 ? "x1" : "cx";
            var u = m === "x1" ? "y1" : "cy";
            h.setAttribute(m, p[0]);
            h.setAttribute(u, p[1]);
            if (l && !e.g._collapsable) {
              e.of.setAttribute(m, p[0]);
              e.of.setAttribute(u, p[1]);
            }
          }
          if (e.g._cmdf || i) {
            s = e.cst;
            var d = e.g.c;
            r = 0;
            a = s.length;
            for (; r < a; r += 1) {
              (n = s[r]).setAttribute("offset", d[r * 4] + "%");
              n.setAttribute("stop-color", "rgb(" + d[r * 4 + 1] + "," + d[r * 4 + 2] + "," + d[r * 4 + 3] + ")");
            }
          }
          if (l && (e.g._omdf || i)) {
            var g = e.g.o;
            r = 0;
            a = (s = e.g._collapsable ? e.cst : e.ost).length;
            for (; r < a; r += 1) {
              n = s[r];
              if (!e.g._collapsable) {
                n.setAttribute("offset", g[r * 2] + "%");
              }
              n.setAttribute("stop-opacity", g[r * 2 + 1]);
            }
          }
          if (t.t === 1) {
            if (e.e._mdf || i) {
              h.setAttribute("x2", f[0]);
              h.setAttribute("y2", f[1]);
              if (l && !e.g._collapsable) {
                e.of.setAttribute("x2", f[0]);
                e.of.setAttribute("y2", f[1]);
              }
            }
          } else {
            if (e.s._mdf || e.e._mdf || i) {
              o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2));
              h.setAttribute("r", o);
              if (l && !e.g._collapsable) {
                e.of.setAttribute("r", o);
              }
            }
            if (e.e._mdf || e.h._mdf || e.a._mdf || i) {
              o ||= Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2));
              var y = Math.atan2(f[1] - p[1], f[0] - p[0]);
              var v = e.h.v;
              if (v >= 1) {
                v = 0.99;
              } else if (v <= -1) {
                v = -0.99;
              }
              var b = o * v;
              var x = Math.cos(y + e.a.v) * b + p[0];
              var _ = Math.sin(y + e.a.v) * b + p[1];
              h.setAttribute("fx", x);
              h.setAttribute("fy", _);
              if (l && !e.g._collapsable) {
                e.of.setAttribute("fx", x);
                e.of.setAttribute("fy", _);
              }
            }
          }
        }
        function h(t, e, i) {
          var s = e.style;
          var r = e.d;
          if (r && (r._mdf || i) && r.dashStr) {
            s.pElem.setAttribute("stroke-dasharray", r.dashStr);
            s.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0]);
          }
          if (e.c && (e.c._mdf || i)) {
            s.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")");
          }
          if (e.o._mdf || i) {
            s.pElem.setAttribute("stroke-opacity", e.o.v);
          }
          if (e.w._mdf || i) {
            s.pElem.setAttribute("stroke-width", e.w.v);
            if (s.msElem) {
              s.msElem.setAttribute("stroke-width", e.w.v);
            }
          }
        }
        return {
          createRenderFunction: function (t) {
            switch (t.ty) {
              case "fl":
                return a;
              case "gf":
                return o;
              case "gs":
                return n;
              case "st":
                return h;
              case "sh":
              case "el":
              case "rc":
              case "sr":
                return r;
              case "tr":
                return i;
              case "no":
                return s;
              default:
                return null;
            }
          }
        };
      }();
      function SVGShapeElement(t, e, i) {
        this.shapes = [];
        this.shapesData = t.shapes;
        this.stylesList = [];
        this.shapeModifiers = [];
        this.itemsData = [];
        this.processedElements = [];
        this.animatedContents = [];
        this.initElement(t, e, i);
        this.prevViewData = [];
      }
      function LetterProps(t, e, i, s, r, a) {
        this.o = t;
        this.sw = e;
        this.sc = i;
        this.fc = s;
        this.m = r;
        this.p = a;
        this._mdf = {
          o: true,
          sw: !!e,
          sc: !!i,
          fc: !!s,
          m: true,
          p: true
        };
      }
      function TextProperty(t, e) {
        this._frameId = initialDefaultFrame;
        this.pv = "";
        this.v = "";
        this.kf = false;
        this._isFirstFrame = true;
        this._mdf = false;
        if (e.d && e.d.sid) {
          e.d = t.globalData.slotManager.getProp(e.d);
        }
        this.data = e;
        this.elem = t;
        this.comp = this.elem.comp;
        this.keysIndex = 0;
        this.canResize = false;
        this.minimumFontSize = 1;
        this.effectsSequence = [];
        this.currentData = {
          ascent: 0,
          boxWidth: this.defaultBoxWidth,
          f: "",
          fStyle: "",
          fWeight: "",
          fc: "",
          j: "",
          justifyOffset: "",
          l: [],
          lh: 0,
          lineWidths: [],
          ls: "",
          of: "",
          s: "",
          sc: "",
          sw: 0,
          t: 0,
          tr: 0,
          sz: 0,
          ps: null,
          fillColorAnim: false,
          strokeColorAnim: false,
          strokeWidthAnim: false,
          yOffset: 0,
          finalSize: 0,
          finalText: [],
          finalLineHeight: 0,
          __complete: false
        };
        this.copyData(this.currentData, this.data.d.k[0].s);
        if (!this.searchProperty()) {
          this.completeTextData(this.currentData);
        }
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement);
      SVGShapeElement.prototype.initSecondaryElement = function () {};
      SVGShapeElement.prototype.identityMatrix = new Matrix();
      SVGShapeElement.prototype.buildExpressionInterface = function () {};
      SVGShapeElement.prototype.createContent = function () {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
        this.filterUniqueShapes();
      };
      SVGShapeElement.prototype.filterUniqueShapes = function () {
        var t;
        var e;
        var i;
        var s;
        var r = this.shapes.length;
        var a = this.stylesList.length;
        var n = [];
        var o = false;
        for (i = 0; i < a; i += 1) {
          t = 0;
          s = this.stylesList[i];
          o = false;
          n.length = 0;
          for (; t < r; t += 1) {
            if ((e = this.shapes[t]).styles.indexOf(s) !== -1) {
              n.push(e);
              o = e._isAnimated || o;
            }
          }
          if (n.length > 1 && o) {
            this.setShapesAsAnimated(n);
          }
        }
      };
      SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
        var e;
        var i = t.length;
        for (e = 0; e < i; e += 1) {
          t[e].setAsAnimated();
        }
      };
      SVGShapeElement.prototype.createStyleElement = function (t, e) {
        var i;
        var s = new SVGStyleData(t, e);
        var r = s.pElem;
        if (t.ty === "st") {
          i = new SVGStrokeStyleData(this, t, s);
        } else if (t.ty === "fl") {
          i = new SVGFillStyleData(this, t, s);
        } else if (t.ty === "gf" || t.ty === "gs") {
          i = new (t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, s);
          this.globalData.defs.appendChild(i.gf);
          if (i.maskId) {
            this.globalData.defs.appendChild(i.ms);
            this.globalData.defs.appendChild(i.of);
            r.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")");
          }
        } else if (t.ty === "no") {
          i = new SVGNoStyleData(this, t, s);
        }
        if (t.ty === "st" || t.ty === "gs") {
          r.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]);
          r.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]);
          r.setAttribute("fill-opacity", "0");
          if (t.lj === 1) {
            r.setAttribute("stroke-miterlimit", t.ml);
          }
        }
        if (t.r === 2) {
          r.setAttribute("fill-rule", "evenodd");
        }
        if (t.ln) {
          r.setAttribute("id", t.ln);
        }
        if (t.cl) {
          r.setAttribute("class", t.cl);
        }
        if (t.bm) {
          r.style["mix-blend-mode"] = getBlendMode(t.bm);
        }
        this.stylesList.push(s);
        this.addToAnimatedContents(t, i);
        return i;
      };
      SVGShapeElement.prototype.createGroupElement = function (t) {
        var e = new ShapeGroupData();
        if (t.ln) {
          e.gr.setAttribute("id", t.ln);
        }
        if (t.cl) {
          e.gr.setAttribute("class", t.cl);
        }
        if (t.bm) {
          e.gr.style["mix-blend-mode"] = getBlendMode(t.bm);
        }
        return e;
      };
      SVGShapeElement.prototype.createTransformElement = function (t, e) {
        var i = TransformPropertyFactory.getTransformProperty(this, t, this);
        var s = new SVGTransformData(i, i.o, e);
        this.addToAnimatedContents(t, s);
        return s;
      };
      SVGShapeElement.prototype.createShapeElement = function (t, e, i) {
        var s = 4;
        if (t.ty === "rc") {
          s = 5;
        } else if (t.ty === "el") {
          s = 6;
        } else if (t.ty === "sr") {
          s = 7;
        }
        var r = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, s, this));
        this.shapes.push(r);
        this.addShapeToModifiers(r);
        this.addToAnimatedContents(t, r);
        return r;
      };
      SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
        var i = 0;
        var s = this.animatedContents.length;
        while (i < s) {
          if (this.animatedContents[i].element === e) {
            return;
          }
          i += 1;
        }
        this.animatedContents.push({
          fn: SVGElementsRenderer.createRenderFunction(t),
          element: e,
          data: t
        });
      };
      SVGShapeElement.prototype.setElementStyles = function (t) {
        var e;
        var i = t.styles;
        var s = this.stylesList.length;
        for (e = 0; e < s; e += 1) {
          if (!this.stylesList[e].closed) {
            i.push(this.stylesList[e]);
          }
        }
      };
      SVGShapeElement.prototype.reloadShapes = function () {
        this._isFirstFrame = true;
        var t;
        var e = this.itemsData.length;
        for (t = 0; t < e; t += 1) {
          this.prevViewData[t] = this.itemsData[t];
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
        this.filterUniqueShapes();
        e = this.dynamicProperties.length;
        t = 0;
        for (; t < e; t += 1) {
          this.dynamicProperties[t].getValue();
        }
        this.renderModifiers();
      };
      SVGShapeElement.prototype.searchShapes = function (t, e, i, s, r, a, n) {
        var o;
        var h;
        var l;
        var p;
        var f;
        var c;
        var m = [].concat(a);
        var u = t.length - 1;
        var d = [];
        var g = [];
        for (o = u; o >= 0; o -= 1) {
          if (c = this.searchProcessedElement(t[o])) {
            e[o] = i[c - 1];
          } else {
            t[o]._render = n;
          }
          if (t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") {
            if (c) {
              e[o].style.closed = false;
            } else {
              e[o] = this.createStyleElement(t[o], r);
            }
            if (t[o]._render && e[o].style.pElem.parentNode !== s) {
              s.appendChild(e[o].style.pElem);
            }
            d.push(e[o].style);
          } else if (t[o].ty === "gr") {
            if (c) {
              h = 0;
              l = e[o].it.length;
              for (; h < l; h += 1) {
                e[o].prevViewData[h] = e[o].it[h];
              }
            } else {
              e[o] = this.createGroupElement(t[o]);
            }
            this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, m, n);
            if (t[o]._render && e[o].gr.parentNode !== s) {
              s.appendChild(e[o].gr);
            }
          } else if (t[o].ty === "tr") {
            if (!c) {
              e[o] = this.createTransformElement(t[o], s);
            }
            p = e[o].transform;
            m.push(p);
          } else if (t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr") {
            if (!c) {
              e[o] = this.createShapeElement(t[o], m, r);
            }
            this.setElementStyles(e[o]);
          } else if (t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op") {
            if (c) {
              (f = e[o]).closed = false;
            } else {
              (f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]);
              e[o] = f;
              this.shapeModifiers.push(f);
            }
            g.push(f);
          } else if (t[o].ty === "rp") {
            if (c) {
              (f = e[o]).closed = true;
            } else {
              f = ShapeModifiers.getModifier(t[o].ty);
              e[o] = f;
              f.init(this, t, o, e);
              this.shapeModifiers.push(f);
              n = false;
            }
            g.push(f);
          }
          this.addProcessedElement(t[o], o + 1);
        }
        o = 0;
        u = d.length;
        for (; o < u; o += 1) {
          d[o].closed = true;
        }
        o = 0;
        u = g.length;
        for (; o < u; o += 1) {
          g[o].closed = true;
        }
      };
      SVGShapeElement.prototype.renderInnerContent = function () {
        this.renderModifiers();
        var t;
        var e = this.stylesList.length;
        for (t = 0; t < e; t += 1) {
          this.stylesList[t].reset();
        }
        this.renderShape();
        t = 0;
        for (; t < e; t += 1) {
          if (this.stylesList[t]._mdf || this._isFirstFrame) {
            if (this.stylesList[t].msElem) {
              this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d);
              this.stylesList[t].d = "M0 0" + this.stylesList[t].d;
            }
            this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0");
          }
        }
      };
      SVGShapeElement.prototype.renderShape = function () {
        var t;
        var e;
        var i = this.animatedContents.length;
        for (t = 0; t < i; t += 1) {
          e = this.animatedContents[t];
          if ((this._isFirstFrame || e.element._isAnimated) && e.data !== true) {
            e.fn(e.data, e.element, this._isFirstFrame);
          }
        }
      };
      SVGShapeElement.prototype.destroy = function () {
        this.destroyBaseElement();
        this.shapesData = null;
        this.itemsData = null;
      };
      LetterProps.prototype.update = function (t, e, i, s, r, a) {
        this._mdf.o = false;
        this._mdf.sw = false;
        this._mdf.sc = false;
        this._mdf.fc = false;
        this._mdf.m = false;
        this._mdf.p = false;
        var n = false;
        if (this.o !== t) {
          this.o = t;
          this._mdf.o = true;
          n = true;
        }
        if (this.sw !== e) {
          this.sw = e;
          this._mdf.sw = true;
          n = true;
        }
        if (this.sc !== i) {
          this.sc = i;
          this._mdf.sc = true;
          n = true;
        }
        if (this.fc !== s) {
          this.fc = s;
          this._mdf.fc = true;
          n = true;
        }
        if (this.m !== r) {
          this.m = r;
          this._mdf.m = true;
          n = true;
        }
        if (a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13])) {
          this.p = a;
          this._mdf.p = true;
          n = true;
        }
        return n;
      };
      TextProperty.prototype.defaultBoxWidth = [0, 0];
      TextProperty.prototype.copyData = function (t, e) {
        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
        }
        return t;
      };
      TextProperty.prototype.setCurrentData = function (t) {
        if (!t.__complete) {
          this.completeTextData(t);
        }
        this.currentData = t;
        this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
        this._mdf = true;
      };
      TextProperty.prototype.searchProperty = function () {
        return this.searchKeyframes();
      };
      TextProperty.prototype.searchKeyframes = function () {
        this.kf = this.data.d.k.length > 1;
        if (this.kf) {
          this.addEffect(this.getKeyframeValue.bind(this));
        }
        return this.kf;
      };
      TextProperty.prototype.addEffect = function (t) {
        this.effectsSequence.push(t);
        this.elem.addDynamicProperty(this);
      };
      TextProperty.prototype.getValue = function (t) {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
          this.currentData.t = this.data.d.k[this.keysIndex].s.t;
          var e;
          var i = this.currentData;
          var s = this.keysIndex;
          if (this.lock) {
            this.setCurrentData(this.currentData);
            return;
          }
          this.lock = true;
          this._mdf = false;
          var r = this.effectsSequence.length;
          var a = t || this.data.d.k[this.keysIndex].s;
          for (e = 0; e < r; e += 1) {
            a = s !== this.keysIndex ? this.effectsSequence[e](a, a.t) : this.effectsSequence[e](this.currentData, a.t);
          }
          if (i !== a) {
            this.setCurrentData(a);
          }
          this.v = this.currentData;
          this.pv = this.v;
          this.lock = false;
          this.frameId = this.elem.globalData.frameId;
        }
      };
      TextProperty.prototype.getKeyframeValue = function () {
        var t = this.data.d.k;
        var e = this.elem.comp.renderedFrame;
        var i = 0;
        var s = t.length;
        while (i <= s - 1 && i !== s - 1 && !(t[i + 1].t > e)) {
          i += 1;
        }
        if (this.keysIndex !== i) {
          this.keysIndex = i;
        }
        return this.data.d.k[this.keysIndex].s;
      };
      TextProperty.prototype.buildFinalText = function (t) {
        var e;
        var i;
        var s = [];
        var r = 0;
        var a = t.length;
        var n = false;
        var o = false;
        var h = "";
        while (r < a) {
          n = o;
          o = false;
          e = t.charCodeAt(r);
          h = t.charAt(r);
          if (FontManager.isCombinedCharacter(e)) {
            n = true;
          } else if (e >= 55296 && e <= 56319) {
            if (FontManager.isRegionalFlag(t, r)) {
              h = t.substr(r, 14);
            } else if ((i = t.charCodeAt(r + 1)) >= 56320 && i <= 57343) {
              if (FontManager.isModifier(e, i)) {
                h = t.substr(r, 2);
                n = true;
              } else {
                h = FontManager.isFlagEmoji(t.substr(r, 4)) ? t.substr(r, 4) : t.substr(r, 2);
              }
            }
          } else if (e > 56319) {
            i = t.charCodeAt(r + 1);
            if (FontManager.isVariationSelector(e)) {
              n = true;
            }
          } else if (FontManager.isZeroWidthJoiner(e)) {
            n = true;
            o = true;
          }
          if (n) {
            s[s.length - 1] += h;
            n = false;
          } else {
            s.push(h);
          }
          r += h.length;
        }
        return s;
      };
      TextProperty.prototype.completeTextData = function (t) {
        t.__complete = true;
        var e = this.elem.globalData.fontManager;
        var i = this.data;
        var s = [];
        var r = 0;
        var a = i.m.g;
        var n = 0;
        var o = 0;
        var h = 0;
        var l = [];
        var p = 0;
        var f = 0;
        var c = e.getFontByName(t.f);
        var m = 0;
        var u = getFontProperties(c);
        t.fWeight = u.weight;
        t.fStyle = u.style;
        t.finalSize = t.s;
        t.finalText = this.buildFinalText(t.t);
        y = t.finalText.length;
        t.finalLineHeight = t.lh;
        var d = t.tr / 1000 * t.finalSize;
        if (t.sz) {
          var g;
          var y;
          var v;
          var b;
          var x;
          var _;
          var k;
          var C;
          var A;
          var P;
          var D = true;
          var w = t.sz[0];
          var S = t.sz[1];
          while (D) {
            P = this.buildFinalText(t.t);
            A = 0;
            p = 0;
            y = P.length;
            d = t.tr / 1000 * t.finalSize;
            var T = -1;
            for (g = 0; g < y; g += 1) {
              C = P[g].charCodeAt(0);
              v = false;
              if (P[g] === " ") {
                T = g;
              } else if (C === 13 || C === 3) {
                p = 0;
                v = true;
                A += t.finalLineHeight || t.finalSize * 1.2;
              }
              if (e.chars) {
                k = e.getCharData(P[g], c.fStyle, c.fFamily);
                m = v ? 0 : k.w * t.finalSize / 100;
              } else {
                m = e.measureText(P[g], t.f, t.finalSize);
              }
              if (p + m > w && P[g] !== " ") {
                if (T === -1) {
                  y += 1;
                } else {
                  g = T;
                }
                A += t.finalLineHeight || t.finalSize * 1.2;
                P.splice(g, +(T === g), "\r");
                T = -1;
                p = 0;
              } else {
                p += m;
                p += d;
              }
            }
            A += c.ascent * t.finalSize / 100;
            if (this.canResize && t.finalSize > this.minimumFontSize && S < A) {
              t.finalSize -= 1;
              t.finalLineHeight = t.finalSize * t.lh / t.s;
            } else {
              t.finalText = P;
              y = t.finalText.length;
              D = false;
            }
          }
        }
        p = -d;
        m = 0;
        var M = 0;
        for (g = 0; g < y; g += 1) {
          v = false;
          if ((C = (I = t.finalText[g]).charCodeAt(0)) === 13 || C === 3) {
            M = 0;
            l.push(p);
            f = p > f ? p : f;
            p = d * -2;
            b = "";
            v = true;
            h += 1;
          } else {
            b = I;
          }
          if (e.chars) {
            k = e.getCharData(I, c.fStyle, e.getFontByName(t.f).fFamily);
            m = v ? 0 : k.w * t.finalSize / 100;
          } else {
            m = e.measureText(b, t.f, t.finalSize);
          }
          if (I === " ") {
            M += m + d;
          } else {
            p += m + d + M;
            M = 0;
          }
          s.push({
            l: m,
            an: m,
            add: n,
            n: v,
            anIndexes: [],
            val: b,
            line: h,
            animatorJustifyOffset: 0
          });
          if (a == 2) {
            n += m;
            if (b === "" || b === " " || g === y - 1) {
              for ((b === "" || b === " ") && (n -= m); o <= g;) {
                s[o].an = n;
                s[o].ind = r;
                s[o].extra = m;
                o += 1;
              }
              r += 1;
              n = 0;
            }
          } else if (a == 3) {
            n += m;
            if (b === "" || g === y - 1) {
              for (b === "" && (n -= m); o <= g;) {
                s[o].an = n;
                s[o].ind = r;
                s[o].extra = m;
                o += 1;
              }
              n = 0;
              r += 1;
            }
          } else {
            s[r].ind = r;
            s[r].extra = 0;
            r += 1;
          }
        }
        t.l = s;
        f = p > f ? p : f;
        l.push(p);
        if (t.sz) {
          t.boxWidth = t.sz[0];
          t.justifyOffset = 0;
        } else {
          t.boxWidth = f;
          switch (t.j) {
            case 1:
              t.justifyOffset = -t.boxWidth;
              break;
            case 2:
              t.justifyOffset = -t.boxWidth / 2;
              break;
            default:
              t.justifyOffset = 0;
          }
        }
        t.lineWidths = l;
        var E = i.a;
        _ = E.length;
        var F = [];
        for (x = 0; x < _; x += 1) {
          if ((L = E[x]).a.sc) {
            t.strokeColorAnim = true;
          }
          if (L.a.sw) {
            t.strokeWidthAnim = true;
          }
          if (L.a.fc || L.a.fh || L.a.fs || L.a.fb) {
            t.fillColorAnim = true;
          }
          V = 0;
          R = L.s.b;
          g = 0;
          for (; g < y; g += 1) {
            (B = s[g]).anIndexes[x] = V;
            if (R == 1 && B.val !== "" || R == 2 && B.val !== "" && B.val !== " " || R == 3 && (B.n || B.val == " " || g == y - 1) || R == 4 && (B.n || g == y - 1)) {
              if (L.s.rn === 1) {
                F.push(V);
              }
              V += 1;
            }
          }
          i.a[x].s.totalChars = V;
          var I;
          var L;
          var B;
          var R;
          var V;
          var z;
          var O = -1;
          if (L.s.rn === 1) {
            for (g = 0; g < y; g += 1) {
              if (O != (B = s[g]).anIndexes[x]) {
                O = B.anIndexes[x];
                z = F.splice(Math.floor(Math.random() * F.length), 1)[0];
              }
              B.anIndexes[x] = z;
            }
          }
        }
        t.yOffset = t.finalLineHeight || t.finalSize * 1.2;
        t.ls = t.ls || 0;
        t.ascent = c.ascent * t.finalSize / 100;
      };
      TextProperty.prototype.updateDocumentData = function (t, e) {
        e = e === undefined ? this.keysIndex : e;
        var i = this.copyData({}, this.data.d.k[e].s);
        i = this.copyData(i, t);
        this.data.d.k[e].s = i;
        this.recalculate(e);
        this.setCurrentData(i);
        this.elem.addDynamicProperty(this);
      };
      TextProperty.prototype.recalculate = function (t) {
        var e = this.data.d.k[t].s;
        e.__complete = false;
        this.keysIndex = 0;
        this._isFirstFrame = true;
        this.getValue(e);
      };
      TextProperty.prototype.canResizeFont = function (t) {
        this.canResize = t;
        this.recalculate(this.keysIndex);
        this.elem.addDynamicProperty(this);
      };
      TextProperty.prototype.setMinimumFontSize = function (t) {
        this.minimumFontSize = Math.floor(t) || 1;
        this.recalculate(this.keysIndex);
        this.elem.addDynamicProperty(this);
      };
      var TextSelectorProp = function () {
        var t = Math.max;
        var e = Math.min;
        var i = Math.floor;
        function s(t, e) {
          this._currentTextLength = -1;
          this.k = false;
          this.data = e;
          this.elem = t;
          this.comp = t.comp;
          this.finalS = 0;
          this.finalE = 0;
          this.initDynamicPropertyContainer(t);
          this.s = PropertyFactory.getProp(t, e.s || {
            k: 0
          }, 0, 0, this);
          if ("e" in e) {
            this.e = PropertyFactory.getProp(t, e.e, 0, 0, this);
          } else {
            this.e = {
              v: 100
            };
          }
          this.o = PropertyFactory.getProp(t, e.o || {
            k: 0
          }, 0, 0, this);
          this.xe = PropertyFactory.getProp(t, e.xe || {
            k: 0
          }, 0, 0, this);
          this.ne = PropertyFactory.getProp(t, e.ne || {
            k: 0
          }, 0, 0, this);
          this.sm = PropertyFactory.getProp(t, e.sm || {
            k: 100
          }, 0, 0, this);
          this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this);
          if (!this.dynamicProperties.length) {
            this.getValue();
          }
        }
        s.prototype = {
          getMult: function (s) {
            if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
              this.getValue();
            }
            var r = 0;
            var a = 0;
            var n = 1;
            var o = 1;
            if (this.ne.v > 0) {
              r = this.ne.v / 100;
            } else {
              a = -this.ne.v / 100;
            }
            if (this.xe.v > 0) {
              n = 1 - this.xe.v / 100;
            } else {
              o = 1 + this.xe.v / 100;
            }
            var h = BezierFactory.getBezierEasing(r, a, n, o).get;
            var l = 0;
            var p = this.finalS;
            var f = this.finalE;
            var c = this.data.sh;
            if (c === 2) {
              l = h(l = f === p ? +(s >= f) : t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1)));
            } else if (c === 3) {
              l = h(l = f === p ? s >= f ? 0 : 1 : 1 - t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1)));
            } else if (c === 4) {
              if (f === p) {
                l = 0;
              } else if ((l = t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1))) < 0.5) {
                l *= 2;
              } else {
                l = 1 - (l - 0.5) * 2;
              }
              l = h(l);
            } else if (c === 5) {
              if (f === p) {
                l = 0;
              } else {
                var m = f - p;
                var u = -m / 2 + (s = e(t(0, s + 0.5 - p), f - p));
                var d = m / 2;
                l = Math.sqrt(1 - u * u / (d * d));
              }
              l = h(l);
            } else if (c === 6) {
              l = h(l = f === p ? 0 : (1 + Math.cos(Math.PI + Math.PI * 2 * (s = e(t(0, s + 0.5 - p), f - p)) / (f - p))) / 2);
            } else {
              if (s >= i(p)) {
                l = s - p < 0 ? t(0, e(e(f, 1) - (p - s), 1)) : t(0, e(f - s, 1));
              }
              l = h(l);
            }
            if (this.sm.v !== 100) {
              var g = this.sm.v * 0.01;
              if (g === 0) {
                g = 1e-8;
              }
              var y = 0.5 - g * 0.5;
              if (l < y) {
                l = 0;
              } else if ((l = (l - y) / g) > 1) {
                l = 1;
              }
            }
            return l * this.a.v;
          },
          getValue: function (t) {
            this.iterateDynamicProperties();
            this._mdf = t || this._mdf;
            this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;
            if (t && this.data.r === 2) {
              this.e.v = this._currentTextLength;
            }
            var e = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
            var i = this.o.v / e;
            var s = this.s.v / e + i;
            var r = this.e.v / e + i;
            if (s > r) {
              var a = s;
              s = r;
              r = a;
            }
            this.finalS = s;
            this.finalE = r;
          }
        };
        extendPrototype([DynamicPropertyContainer], s);
        return {
          getTextSelectorProp: function (t, e, i) {
            return new s(t, e, i);
          }
        };
      }();
      function TextAnimatorDataProperty(t, e, i) {
        var s = {
          propType: false
        };
        var r = PropertyFactory.getProp;
        var a = e.a;
        this.a = {
          r: a.r ? r(t, a.r, 0, degToRads, i) : s,
          rx: a.rx ? r(t, a.rx, 0, degToRads, i) : s,
          ry: a.ry ? r(t, a.ry, 0, degToRads, i) : s,
          sk: a.sk ? r(t, a.sk, 0, degToRads, i) : s,
          sa: a.sa ? r(t, a.sa, 0, degToRads, i) : s,
          s: a.s ? r(t, a.s, 1, 0.01, i) : s,
          a: a.a ? r(t, a.a, 1, 0, i) : s,
          o: a.o ? r(t, a.o, 0, 0.01, i) : s,
          p: a.p ? r(t, a.p, 1, 0, i) : s,
          sw: a.sw ? r(t, a.sw, 0, 0, i) : s,
          sc: a.sc ? r(t, a.sc, 1, 0, i) : s,
          fc: a.fc ? r(t, a.fc, 1, 0, i) : s,
          fh: a.fh ? r(t, a.fh, 0, 0, i) : s,
          fs: a.fs ? r(t, a.fs, 0, 0.01, i) : s,
          fb: a.fb ? r(t, a.fb, 0, 0.01, i) : s,
          t: a.t ? r(t, a.t, 0, 0, i) : s
        };
        this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i);
        this.s.t = e.s.t;
      }
      function TextAnimatorProperty(t, e, i) {
        this._isFirstFrame = true;
        this._hasMaskedPath = false;
        this._frameId = -1;
        this._textData = t;
        this._renderType = e;
        this._elem = i;
        this._animatorsData = createSizedArray(this._textData.a.length);
        this._pathData = {};
        this._moreOptions = {
          alignment: {}
        };
        this.renderedLetters = [];
        this.lettersChangedFlag = false;
        this.initDynamicPropertyContainer(i);
      }
      function ITextElement() {}
      TextAnimatorProperty.prototype.searchProperties = function () {
        var t;
        var e;
        var i = this._textData.a.length;
        var s = PropertyFactory.getProp;
        for (t = 0; t < i; t += 1) {
          e = this._textData.a[t];
          this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
        }
        if (this._textData.p && "m" in this._textData.p) {
          this._pathData = {
            a: s(this._elem, this._textData.p.a, 0, 0, this),
            f: s(this._elem, this._textData.p.f, 0, 0, this),
            l: s(this._elem, this._textData.p.l, 0, 0, this),
            r: s(this._elem, this._textData.p.r, 0, 0, this),
            p: s(this._elem, this._textData.p.p, 0, 0, this),
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
          };
          this._hasMaskedPath = true;
        } else {
          this._hasMaskedPath = false;
        }
        this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this);
      };
      TextAnimatorProperty.prototype.getMeasures = function (t, e) {
        this.lettersChangedFlag = e;
        if (this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
          this._isFirstFrame = false;
          var i;
          var s;
          var r;
          var a;
          var n;
          var o;
          var h;
          var l;
          var p;
          var f;
          var c;
          var m;
          var u;
          var d;
          var g;
          var y;
          var v;
          var b;
          var x = this._moreOptions.alignment.v;
          var _ = this._animatorsData;
          var k = this._textData;
          var C = this.mHelper;
          var A = this._renderType;
          var P = this.renderedLetters.length;
          var D = t.l;
          if (this._hasMaskedPath) {
            W = this._pathData.m;
            if (!this._pathData.n || this._pathData._mdf) {
              var w;
              var S;
              var T;
              var M;
              var E;
              var F;
              var I;
              var L;
              var B;
              var R;
              var V;
              var z;
              var O;
              var N;
              var G;
              var j;
              var q;
              var W;
              var Y;
              var H = W.v;
              if (this._pathData.r.v) {
                H = H.reverse();
              }
              E = {
                tLength: 0,
                segments: []
              };
              M = H._length - 1;
              j = 0;
              T = 0;
              for (; T < M; T += 1) {
                Y = bez.buildBezierData(H.v[T], H.v[T + 1], [H.o[T][0] - H.v[T][0], H.o[T][1] - H.v[T][1]], [H.i[T + 1][0] - H.v[T + 1][0], H.i[T + 1][1] - H.v[T + 1][1]]);
                E.tLength += Y.segmentLength;
                E.segments.push(Y);
                j += Y.segmentLength;
              }
              T = M;
              if (W.v.c) {
                Y = bez.buildBezierData(H.v[T], H.v[0], [H.o[T][0] - H.v[T][0], H.o[T][1] - H.v[T][1]], [H.i[0][0] - H.v[0][0], H.i[0][1] - H.v[0][1]]);
                E.tLength += Y.segmentLength;
                E.segments.push(Y);
                j += Y.segmentLength;
              }
              this._pathData.pi = E;
            }
            E = this._pathData.pi;
            F = this._pathData.f.v;
            V = 0;
            R = 1;
            L = 0;
            B = true;
            N = E.segments;
            if (F < 0 && W.v.c) {
              if (E.tLength < Math.abs(F)) {
                F = -Math.abs(F) % E.tLength;
              }
              V = N.length - 1;
              R = (O = N[V].points).length - 1;
              while (F < 0) {
                F += O[R].partialLength;
                if ((R -= 1) < 0) {
                  V -= 1;
                  R = (O = N[V].points).length - 1;
                }
              }
            }
            z = (O = N[V].points)[R - 1];
            G = (I = O[R]).partialLength;
          }
          M = D.length;
          w = 0;
          S = 0;
          var X = t.finalSize * 1.2 * 0.714;
          var J = true;
          a = _.length;
          var K = -1;
          var Z = F;
          var U = V;
          var Q = R;
          var $ = -1;
          var tt = "";
          var te = this.defaultPropsArray;
          if (t.j === 2 || t.j === 1) {
            var ti = 0;
            var ts = 0;
            var tr = t.j === 2 ? -0.5 : -1;
            var ta = 0;
            var tn = true;
            for (T = 0; T < M; T += 1) {
              if (D[T].n) {
                for (ti && (ti += ts); ta < T;) {
                  D[ta].animatorJustifyOffset = ti;
                  ta += 1;
                }
                ti = 0;
                tn = true;
              } else {
                for (r = 0; r < a; r += 1) {
                  if ((i = _[r].a).t.propType) {
                    if (tn && t.j === 2) {
                      ts += i.t.v * tr;
                    }
                    if ((o = (s = _[r].s).getMult(D[T].anIndexes[r], k.a[r].s.totalChars)).length) {
                      ti += i.t.v * o[0] * tr;
                    } else {
                      ti += i.t.v * o * tr;
                    }
                  }
                }
                tn = false;
              }
            }
            for (ti && (ti += ts); ta < T;) {
              D[ta].animatorJustifyOffset = ti;
              ta += 1;
            }
          }
          for (T = 0; T < M; T += 1) {
            C.reset();
            f = 1;
            if (D[T].n) {
              w = 0;
              S += t.yOffset;
              S += +!!J;
              F = Z;
              J = false;
              if (this._hasMaskedPath) {
                V = U;
                R = Q;
                z = (O = N[V].points)[R - 1];
                G = (I = O[R]).partialLength;
                L = 0;
              }
              tt = "";
              v = "";
              g = "";
              b = "";
              te = this.defaultPropsArray;
            } else {
              if (this._hasMaskedPath) {
                if ($ !== D[T].line) {
                  switch (t.j) {
                    case 1:
                      F += j - t.lineWidths[D[T].line];
                      break;
                    case 2:
                      F += (j - t.lineWidths[D[T].line]) / 2;
                  }
                  $ = D[T].line;
                }
                if (K !== D[T].ind) {
                  if (D[K]) {
                    F += D[K].extra;
                  }
                  F += D[T].an / 2;
                  K = D[T].ind;
                }
                F += x[0] * D[T].an * 0.005;
                var to = 0;
                for (r = 0; r < a; r += 1) {
                  if ((i = _[r].a).p.propType) {
                    if ((o = (s = _[r].s).getMult(D[T].anIndexes[r], k.a[r].s.totalChars)).length) {
                      to += i.p.v[0] * o[0];
                    } else {
                      to += i.p.v[0] * o;
                    }
                  }
                  if (i.a.propType) {
                    if ((o = (s = _[r].s).getMult(D[T].anIndexes[r], k.a[r].s.totalChars)).length) {
                      to += i.a.v[0] * o[0];
                    } else {
                      to += i.a.v[0] * o;
                    }
                  }
                }
                B = true;
                if (this._pathData.a.v) {
                  F = D[0].an * 0.5 + (j - this._pathData.f.v - D[0].an * 0.5 - D[D.length - 1].an * 0.5) * K / (M - 1) + this._pathData.f.v;
                }
                while (B) {
                  if (L + G >= F + to || !O) {
                    q = (F + to - L) / I.partialLength;
                    l = z.point[0] + (I.point[0] - z.point[0]) * q;
                    p = z.point[1] + (I.point[1] - z.point[1]) * q;
                    C.translate(-x[0] * D[T].an * 0.005, -(x[1] * X * 0.01));
                    B = false;
                  } else if (O) {
                    L += I.partialLength;
                    if ((R += 1) >= O.length) {
                      R = 0;
                      if (N[V += 1]) {
                        O = N[V].points;
                      } else if (W.v.c) {
                        R = 0;
                        O = N[V = 0].points;
                      } else {
                        L -= I.partialLength;
                        O = null;
                      }
                    }
                    if (O) {
                      z = I;
                      G = (I = O[R]).partialLength;
                    }
                  }
                }
                h = D[T].an / 2 - D[T].add;
                C.translate(-h, 0, 0);
              } else {
                h = D[T].an / 2 - D[T].add;
                C.translate(-h, 0, 0);
                C.translate(-x[0] * D[T].an * 0.005, -x[1] * X * 0.01, 0);
              }
              for (r = 0; r < a; r += 1) {
                if ((i = _[r].a).t.propType) {
                  o = (s = _[r].s).getMult(D[T].anIndexes[r], k.a[r].s.totalChars);
                  if (w !== 0 || t.j !== 0) {
                    if (this._hasMaskedPath) {
                      if (o.length) {
                        F += i.t.v * o[0];
                      } else {
                        F += i.t.v * o;
                      }
                    } else if (o.length) {
                      w += i.t.v * o[0];
                    } else {
                      w += i.t.v * o;
                    }
                  }
                }
              }
              if (t.strokeWidthAnim) {
                m = t.sw || 0;
              }
              if (t.strokeColorAnim) {
                c = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0];
              }
              if (t.fillColorAnim && t.fc) {
                u = [t.fc[0], t.fc[1], t.fc[2]];
              }
              r = 0;
              for (; r < a; r += 1) {
                if ((i = _[r].a).a.propType) {
                  if ((o = (s = _[r].s).getMult(D[T].anIndexes[r], k.a[r].s.totalChars)).length) {
                    C.translate(-i.a.v[0] * o[0], -i.a.v[1] * o[1], i.a.v[2] * o[2]);
                  } else {
                    C.translate(-i.a.v[0] * o, -i.a.v[1] * o, i.a.v[2] * o);
                  }
                }
              }
              for (r = 0; r < a; r += 1) {
                if ((i = _[r].a).s.propType) {
                  if ((o = (s = _[r].s).getMult(D[T].anIndexes[r], k.a[r].s.totalChars)).length) {
                    C.scale(1 + (i.s.v[0] - 1) * o[0], 1 + (i.s.v[1] - 1) * o[1], 1);
                  } else {
                    C.scale(1 + (i.s.v[0] - 1) * o, 1 + (i.s.v[1] - 1) * o, 1);
                  }
                }
              }
              for (r = 0; r < a; r += 1) {
                i = _[r].a;
                o = (s = _[r].s).getMult(D[T].anIndexes[r], k.a[r].s.totalChars);
                if (i.sk.propType) {
                  if (o.length) {
                    C.skewFromAxis(-i.sk.v * o[0], i.sa.v * o[1]);
                  } else {
                    C.skewFromAxis(-i.sk.v * o, i.sa.v * o);
                  }
                }
                if (i.r.propType) {
                  if (o.length) {
                    C.rotateZ(-i.r.v * o[2]);
                  } else {
                    C.rotateZ(-i.r.v * o);
                  }
                }
                if (i.ry.propType) {
                  if (o.length) {
                    C.rotateY(i.ry.v * o[1]);
                  } else {
                    C.rotateY(i.ry.v * o);
                  }
                }
                if (i.rx.propType) {
                  if (o.length) {
                    C.rotateX(i.rx.v * o[0]);
                  } else {
                    C.rotateX(i.rx.v * o);
                  }
                }
                if (i.o.propType) {
                  if (o.length) {
                    f += (i.o.v * o[0] - f) * o[0];
                  } else {
                    f += (i.o.v * o - f) * o;
                  }
                }
                if (t.strokeWidthAnim && i.sw.propType) {
                  if (o.length) {
                    m += i.sw.v * o[0];
                  } else {
                    m += i.sw.v * o;
                  }
                }
                if (t.strokeColorAnim && i.sc.propType) {
                  for (d = 0; d < 3; d += 1) {
                    if (o.length) {
                      c[d] += (i.sc.v[d] - c[d]) * o[0];
                    } else {
                      c[d] += (i.sc.v[d] - c[d]) * o;
                    }
                  }
                }
                if (t.fillColorAnim && t.fc) {
                  if (i.fc.propType) {
                    for (d = 0; d < 3; d += 1) {
                      if (o.length) {
                        u[d] += (i.fc.v[d] - u[d]) * o[0];
                      } else {
                        u[d] += (i.fc.v[d] - u[d]) * o;
                      }
                    }
                  }
                  if (i.fh.propType) {
                    u = o.length ? addHueToRGB(u, i.fh.v * o[0]) : addHueToRGB(u, i.fh.v * o);
                  }
                  if (i.fs.propType) {
                    u = o.length ? addSaturationToRGB(u, i.fs.v * o[0]) : addSaturationToRGB(u, i.fs.v * o);
                  }
                  if (i.fb.propType) {
                    u = o.length ? addBrightnessToRGB(u, i.fb.v * o[0]) : addBrightnessToRGB(u, i.fb.v * o);
                  }
                }
              }
              for (r = 0; r < a; r += 1) {
                if ((i = _[r].a).p.propType) {
                  o = (s = _[r].s).getMult(D[T].anIndexes[r], k.a[r].s.totalChars);
                  if (this._hasMaskedPath) {
                    if (o.length) {
                      C.translate(0, i.p.v[1] * o[0], -i.p.v[2] * o[1]);
                    } else {
                      C.translate(0, i.p.v[1] * o, -i.p.v[2] * o);
                    }
                  } else if (o.length) {
                    C.translate(i.p.v[0] * o[0], i.p.v[1] * o[1], -i.p.v[2] * o[2]);
                  } else {
                    C.translate(i.p.v[0] * o, i.p.v[1] * o, -i.p.v[2] * o);
                  }
                }
              }
              if (t.strokeWidthAnim) {
                g = m < 0 ? 0 : m;
              }
              if (t.strokeColorAnim) {
                y = "rgb(" + Math.round(c[0] * 255) + "," + Math.round(c[1] * 255) + "," + Math.round(c[2] * 255) + ")";
              }
              if (t.fillColorAnim && t.fc) {
                v = "rgb(" + Math.round(u[0] * 255) + "," + Math.round(u[1] * 255) + "," + Math.round(u[2] * 255) + ")";
              }
              if (this._hasMaskedPath) {
                C.translate(0, -t.ls);
                C.translate(0, x[1] * X * 0.01 + S, 0);
                if (this._pathData.p.v) {
                  var th = Math.atan((I.point[1] - z.point[1]) / (I.point[0] - z.point[0])) * 180 / Math.PI;
                  if (I.point[0] < z.point[0]) {
                    th += 180;
                  }
                  C.rotate(-th * Math.PI / 180);
                }
                C.translate(l, p, 0);
                F -= x[0] * D[T].an * 0.005;
                if (D[T + 1] && K !== D[T + 1].ind) {
                  F += D[T].an / 2;
                  F += t.tr * 0.001 * t.finalSize;
                }
              } else {
                C.translate(w, S, 0);
                if (t.ps) {
                  C.translate(t.ps[0], t.ps[1] + t.ascent, 0);
                }
                switch (t.j) {
                  case 1:
                    C.translate(D[T].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[D[T].line]), 0, 0);
                    break;
                  case 2:
                    C.translate(D[T].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[D[T].line]) / 2, 0, 0);
                }
                C.translate(0, -t.ls);
                C.translate(h, 0, 0);
                C.translate(x[0] * D[T].an * 0.005, x[1] * X * 0.01, 0);
                w += D[T].l + t.tr * 0.001 * t.finalSize;
              }
              if (A === "html") {
                tt = C.toCSS();
              } else if (A === "svg") {
                tt = C.to2dCSS();
              } else {
                te = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]];
              }
              b = f;
            }
            if (P <= T) {
              n = new LetterProps(b, g, y, v, tt, te);
              this.renderedLetters.push(n);
              P += 1;
              this.lettersChangedFlag = true;
            } else {
              n = this.renderedLetters[T];
              this.lettersChangedFlag = n.update(b, g, y, v, tt, te) || this.lettersChangedFlag;
            }
          }
        }
      };
      TextAnimatorProperty.prototype.getValue = function () {
        if (this._elem.globalData.frameId !== this._frameId) {
          this._frameId = this._elem.globalData.frameId;
          this.iterateDynamicProperties();
        }
      };
      TextAnimatorProperty.prototype.mHelper = new Matrix();
      TextAnimatorProperty.prototype.defaultPropsArray = [];
      extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
      ITextElement.prototype.initElement = function (t, e, i) {
        this.lettersChangedFlag = true;
        this.initFrame();
        this.initBaseData(t, e, i);
        this.textProperty = new TextProperty(this, t.t, this.dynamicProperties);
        this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this);
        this.initTransform(t, e, i);
        this.initHierarchy();
        this.initRenderable();
        this.initRendererElement();
        this.createContainerElements();
        this.createRenderableComponents();
        this.createContent();
        this.hide();
        this.textAnimator.searchProperties(this.dynamicProperties);
      };
      ITextElement.prototype.prepareFrame = function (t) {
        this._mdf = false;
        this.prepareRenderableFrame(t);
        this.prepareProperties(t, this.isInRange);
      };
      ITextElement.prototype.createPathShape = function (t, e) {
        var i;
        var s;
        var r = e.length;
        var a = "";
        for (i = 0; i < r; i += 1) {
          if (e[i].ty === "sh") {
            a += buildShapeString(s = e[i].ks.k, s.i.length, true, t);
          }
        }
        return a;
      };
      ITextElement.prototype.updateDocumentData = function (t, e) {
        this.textProperty.updateDocumentData(t, e);
      };
      ITextElement.prototype.canResizeFont = function (t) {
        this.textProperty.canResizeFont(t);
      };
      ITextElement.prototype.setMinimumFontSize = function (t) {
        this.textProperty.setMinimumFontSize(t);
      };
      ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, i, s, r) {
        if (t.ps) {
          e.translate(t.ps[0], t.ps[1] + t.ascent, 0);
        }
        e.translate(0, -t.ls, 0);
        switch (t.j) {
          case 1:
            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
            break;
          case 2:
            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
        }
        e.translate(s, r, 0);
      };
      ITextElement.prototype.buildColor = function (t) {
        return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
      };
      ITextElement.prototype.emptyProp = new LetterProps();
      ITextElement.prototype.destroy = function () {};
      ITextElement.prototype.validateText = function () {
        if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
          this.buildNewText();
          this.textProperty._isFirstFrame = false;
          this.textProperty._mdf = false;
        }
      };
      var emptyShapeData = {
        shapes: []
      };
      function SVGTextLottieElement(t, e, i) {
        this.textSpans = [];
        this.renderType = "svg";
        this.initElement(t, e, i);
      }
      function ISolidElement(t, e, i) {
        this.initElement(t, e, i);
      }
      function NullElement(t, e, i) {
        this.initFrame();
        this.initBaseData(t, e, i);
        this.initFrame();
        this.initTransform(t, e, i);
        this.initHierarchy();
      }
      function SVGRendererBase() {}
      function ICompElement() {}
      function SVGCompElement(t, e, i) {
        this.layers = t.layers;
        this.supports3d = true;
        this.completeLayers = false;
        this.pendingElements = [];
        this.elements = this.layers ? createSizedArray(this.layers.length) : [];
        this.initElement(t, e, i);
        this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
          _placeholder: true
        };
      }
      function SVGRenderer(t, e) {
        this.animationItem = t;
        this.layers = null;
        this.renderedFrame = -1;
        this.svgElement = createNS("svg");
        var i = "";
        if (e && e.title) {
          var s = createNS("title");
          var r = createElementID();
          s.setAttribute("id", r);
          s.textContent = e.title;
          this.svgElement.appendChild(s);
          i += r;
        }
        if (e && e.description) {
          var a = createNS("desc");
          var n = createElementID();
          a.setAttribute("id", n);
          a.textContent = e.description;
          this.svgElement.appendChild(a);
          i += " " + n;
        }
        if (i) {
          this.svgElement.setAttribute("aria-labelledby", i);
        }
        var o = createNS("defs");
        this.svgElement.appendChild(o);
        var h = createNS("g");
        this.svgElement.appendChild(h);
        this.layerElement = h;
        this.renderConfig = {
          preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: e && e.contentVisibility || "visible",
          progressiveLoad: e && e.progressiveLoad || false,
          hideOnTransparent: !e || e.hideOnTransparent !== false,
          viewBoxOnly: e && e.viewBoxOnly || false,
          viewBoxSize: e && e.viewBoxSize || false,
          className: e && e.className || "",
          id: e && e.id || "",
          focusable: e && e.focusable,
          filterSize: {
            width: e && e.filterSize && e.filterSize.width || "100%",
            height: e && e.filterSize && e.filterSize.height || "100%",
            x: e && e.filterSize && e.filterSize.x || "0%",
            y: e && e.filterSize && e.filterSize.y || "0%"
          },
          width: e && e.width,
          height: e && e.height,
          runExpressions: !e || e.runExpressions === undefined || e.runExpressions
        };
        this.globalData = {
          _mdf: false,
          frameNum: -1,
          defs: o,
          renderConfig: this.renderConfig
        };
        this.elements = [];
        this.pendingElements = [];
        this.destroyed = false;
        this.rendererType = "svg";
      }
      function ShapeTransformManager() {
        this.sequences = {};
        this.sequenceList = [];
        this.transform_key_count = 0;
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement);
      SVGTextLottieElement.prototype.createContent = function () {
        if (this.data.singleShape && !this.globalData.fontManager.chars) {
          this.textContainer = createNS("text");
        }
      };
      SVGTextLottieElement.prototype.buildTextContents = function (t) {
        var e = 0;
        var i = t.length;
        var s = [];
        var r = "";
        while (e < i) {
          if (t[e] === "\r" || t[e] === "") {
            s.push(r);
            r = "";
          } else {
            r += t[e];
          }
          e += 1;
        }
        s.push(r);
        return s;
      };
      SVGTextLottieElement.prototype.buildShapeData = function (t, e) {
        if (t.shapes && t.shapes.length) {
          var i = t.shapes[0];
          if (i.it) {
            var s = i.it[i.it.length - 1];
            if (s.s) {
              s.s.k[0] = e;
              s.s.k[1] = e;
            }
          }
        }
        return t;
      };
      SVGTextLottieElement.prototype.buildNewText = function () {
        this.addDynamicProperty(this);
        var t = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(t ? t.l.length : 0);
        if (t.fc) {
          this.layerElement.setAttribute("fill", this.buildColor(t.fc));
        } else {
          this.layerElement.setAttribute("fill", "rgba(0,0,0,0)");
        }
        if (t.sc) {
          this.layerElement.setAttribute("stroke", this.buildColor(t.sc));
          this.layerElement.setAttribute("stroke-width", t.sw);
        }
        this.layerElement.setAttribute("font-size", t.finalSize);
        var e = this.globalData.fontManager.getFontByName(t.f);
        if (e.fClass) {
          this.layerElement.setAttribute("class", e.fClass);
        } else {
          this.layerElement.setAttribute("font-family", e.fFamily);
          var i = t.fWeight;
          var s = t.fStyle;
          this.layerElement.setAttribute("font-style", s);
          this.layerElement.setAttribute("font-weight", i);
        }
        this.layerElement.setAttribute("aria-label", t.t);
        var r = t.l || [];
        var a = !!this.globalData.fontManager.chars;
        g = r.length;
        var n = this.mHelper;
        var o = "";
        var h = this.data.singleShape;
        var l = 0;
        var p = 0;
        var f = true;
        var c = t.tr * 0.001 * t.finalSize;
        if (!h || a || t.sz) {
          var m = this.textSpans.length;
          for (d = 0; d < g; d += 1) {
            this.textSpans[d] ||= {
              span: null,
              childSpan: null,
              glyph: null
            };
            if (!a || !h || d === 0) {
              y = m > d ? this.textSpans[d].span : createNS(a ? "g" : "text");
              if (m <= d) {
                y.setAttribute("stroke-linecap", "butt");
                y.setAttribute("stroke-linejoin", "round");
                y.setAttribute("stroke-miterlimit", "4");
                this.textSpans[d].span = y;
                if (a) {
                  var u = createNS("g");
                  y.appendChild(u);
                  this.textSpans[d].childSpan = u;
                }
                this.textSpans[d].span = y;
                this.layerElement.appendChild(y);
              }
              y.style.display = "inherit";
            }
            n.reset();
            if (h) {
              if (r[d].n) {
                l = -c;
                p += t.yOffset;
                p += +!!f;
                f = false;
              }
              this.applyTextPropertiesToMatrix(t, n, r[d].line, l, p);
              l += r[d].l || 0;
              l += c;
            }
            if (a) {
              if ((v = this.globalData.fontManager.getCharData(t.finalText[d], e.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)).t === 1) {
                b = new SVGCompElement(v.data, this.globalData, this);
              } else {
                var d;
                var g;
                var y;
                var v;
                var b;
                var x = emptyShapeData;
                if (v.data && v.data.shapes) {
                  x = this.buildShapeData(v.data, t.finalSize);
                }
                b = new SVGShapeElement(x, this.globalData, this);
              }
              if (this.textSpans[d].glyph) {
                var _ = this.textSpans[d].glyph;
                this.textSpans[d].childSpan.removeChild(_.layerElement);
                _.destroy();
              }
              this.textSpans[d].glyph = b;
              b._debug = true;
              b.prepareFrame(0);
              b.renderFrame();
              this.textSpans[d].childSpan.appendChild(b.layerElement);
              if (v.t === 1) {
                this.textSpans[d].childSpan.setAttribute("transform", "scale(" + t.finalSize / 100 + "," + t.finalSize / 100 + ")");
              }
            } else {
              if (h) {
                y.setAttribute("transform", "translate(" + n.props[12] + "," + n.props[13] + ")");
              }
              y.textContent = r[d].val;
              y.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
            }
          }
          if (h && y) {
            y.setAttribute("d", o);
          }
        } else {
          var k = this.textContainer;
          var C = "start";
          switch (t.j) {
            case 1:
              C = "end";
              break;
            case 2:
              C = "middle";
              break;
            default:
              C = "start";
          }
          k.setAttribute("text-anchor", C);
          k.setAttribute("letter-spacing", c);
          var A = this.buildTextContents(t.finalText);
          d = 0;
          g = A.length;
          p = t.ps ? t.ps[1] + t.ascent : 0;
          for (; d < g; d += 1) {
            (y = this.textSpans[d].span || createNS("tspan")).textContent = A[d];
            y.setAttribute("x", 0);
            y.setAttribute("y", p);
            y.style.display = "inherit";
            k.appendChild(y);
            this.textSpans[d] ||= {
              span: null,
              glyph: null
            };
            this.textSpans[d].span = y;
            p += t.finalLineHeight;
          }
          this.layerElement.appendChild(k);
        }
        while (d < this.textSpans.length) {
          this.textSpans[d].span.style.display = "none";
          d += 1;
        }
        this._sizeChanged = true;
      };
      SVGTextLottieElement.prototype.sourceRectAtTime = function () {
        this.prepareFrame(this.comp.renderedFrame - this.data.st);
        this.renderInnerContent();
        if (this._sizeChanged) {
          this._sizeChanged = false;
          var t = this.layerElement.getBBox();
          this.bbox = {
            top: t.y,
            left: t.x,
            width: t.width,
            height: t.height
          };
        }
        return this.bbox;
      };
      SVGTextLottieElement.prototype.getValue = function () {
        var t;
        var e;
        var i = this.textSpans.length;
        t = 0;
        this.renderedFrame = this.comp.renderedFrame;
        for (; t < i; t += 1) {
          if (e = this.textSpans[t].glyph) {
            e.prepareFrame(this.comp.renderedFrame - this.data.st);
            if (e._mdf) {
              this._mdf = true;
            }
          }
        }
      };
      SVGTextLottieElement.prototype.renderInnerContent = function () {
        this.validateText();
        if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
          this._sizeChanged = true;
          var t;
          var e;
          var i;
          var s;
          var r;
          var a = this.textAnimator.renderedLetters;
          var n = this.textProperty.currentData.l;
          t = 0;
          e = n.length;
          for (; t < e; t += 1) {
            if (!n[t].n) {
              i = a[t];
              s = this.textSpans[t].span;
              if (r = this.textSpans[t].glyph) {
                r.renderFrame();
              }
              if (i._mdf.m) {
                s.setAttribute("transform", i.m);
              }
              if (i._mdf.o) {
                s.setAttribute("opacity", i.o);
              }
              if (i._mdf.sw) {
                s.setAttribute("stroke-width", i.sw);
              }
              if (i._mdf.sc) {
                s.setAttribute("stroke", i.sc);
              }
              if (i._mdf.fc) {
                s.setAttribute("fill", i.fc);
              }
            }
          }
        }
      };
      extendPrototype([IImageElement], ISolidElement);
      ISolidElement.prototype.createContent = function () {
        var t = createNS("rect");
        t.setAttribute("width", this.data.sw);
        t.setAttribute("height", this.data.sh);
        t.setAttribute("fill", this.data.sc);
        this.layerElement.appendChild(t);
      };
      NullElement.prototype.prepareFrame = function (t) {
        this.prepareProperties(t, true);
      };
      NullElement.prototype.renderFrame = function () {};
      NullElement.prototype.getBaseElement = function () {
        return null;
      };
      NullElement.prototype.destroy = function () {};
      NullElement.prototype.sourceRectAtTime = function () {};
      NullElement.prototype.hide = function () {};
      extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);
      extendPrototype([BaseRenderer], SVGRendererBase);
      SVGRendererBase.prototype.createNull = function (t) {
        return new NullElement(t, this.globalData, this);
      };
      SVGRendererBase.prototype.createShape = function (t) {
        return new SVGShapeElement(t, this.globalData, this);
      };
      SVGRendererBase.prototype.createText = function (t) {
        return new SVGTextLottieElement(t, this.globalData, this);
      };
      SVGRendererBase.prototype.createImage = function (t) {
        return new IImageElement(t, this.globalData, this);
      };
      SVGRendererBase.prototype.createSolid = function (t) {
        return new ISolidElement(t, this.globalData, this);
      };
      SVGRendererBase.prototype.configAnimation = function (t) {
        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        if (this.renderConfig.viewBoxSize) {
          this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize);
        } else {
          this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h);
        }
        if (!this.renderConfig.viewBoxOnly) {
          this.svgElement.setAttribute("width", t.w);
          this.svgElement.setAttribute("height", t.h);
          this.svgElement.style.width = "100%";
          this.svgElement.style.height = "100%";
          this.svgElement.style.transform = "translate3d(0,0,0)";
          this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility;
        }
        if (this.renderConfig.width) {
          this.svgElement.setAttribute("width", this.renderConfig.width);
        }
        if (this.renderConfig.height) {
          this.svgElement.setAttribute("height", this.renderConfig.height);
        }
        if (this.renderConfig.className) {
          this.svgElement.setAttribute("class", this.renderConfig.className);
        }
        if (this.renderConfig.id) {
          this.svgElement.setAttribute("id", this.renderConfig.id);
        }
        if (this.renderConfig.focusable !== undefined) {
          this.svgElement.setAttribute("focusable", this.renderConfig.focusable);
        }
        this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio);
        this.animationItem.wrapper.appendChild(this.svgElement);
        var e = this.globalData.defs;
        this.setupGlobalData(t, e);
        this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
        this.data = t;
        var i = createNS("clipPath");
        var s = createNS("rect");
        s.setAttribute("width", t.w);
        s.setAttribute("height", t.h);
        s.setAttribute("x", 0);
        s.setAttribute("y", 0);
        var r = createElementID();
        i.setAttribute("id", r);
        i.appendChild(s);
        this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + r + ")");
        e.appendChild(i);
        this.layers = t.layers;
        this.elements = createSizedArray(t.layers.length);
      };
      SVGRendererBase.prototype.destroy = function () {
        if (this.animationItem.wrapper) {
          this.animationItem.wrapper.innerText = "";
        }
        this.layerElement = null;
        this.globalData.defs = null;
        var t;
        var e = this.layers ? this.layers.length : 0;
        for (t = 0; t < e; t += 1) {
          if (this.elements[t] && this.elements[t].destroy) {
            this.elements[t].destroy();
          }
        }
        this.elements.length = 0;
        this.destroyed = true;
        this.animationItem = null;
      };
      SVGRendererBase.prototype.updateContainerSize = function () {};
      SVGRendererBase.prototype.findIndexByInd = function (t) {
        var e = 0;
        var i = this.layers.length;
        for (e = 0; e < i; e += 1) {
          if (this.layers[e].ind === t) {
            return e;
          }
        }
        return -1;
      };
      SVGRendererBase.prototype.buildItem = function (t) {
        var e = this.elements;
        if (!e[t] && this.layers[t].ty !== 99) {
          e[t] = true;
          var i = this.createItem(this.layers[t]);
          e[t] = i;
          if (getExpressionsPlugin()) {
            if (this.layers[t].ty === 0) {
              this.globalData.projectInterface.registerComposition(i);
            }
            i.initExpressions();
          }
          this.appendElementInPos(i, t);
          if (this.layers[t].tt) {
            var s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
            if (s === -1) {
              return;
            }
            if (this.elements[s] && this.elements[s] !== true) {
              var r = e[s].getMatte(this.layers[t].tt);
              i.setMatte(r);
            } else {
              this.buildItem(s);
              this.addPendingElement(i);
            }
          }
        }
      };
      SVGRendererBase.prototype.checkPendingElements = function () {
        while (this.pendingElements.length) {
          var t = this.pendingElements.pop();
          t.checkParenting();
          if (t.data.tt) {
            var e = 0;
            var i = this.elements.length;
            while (e < i) {
              if (this.elements[e] === t) {
                var s = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1;
                var r = this.elements[s].getMatte(this.layers[e].tt);
                t.setMatte(r);
                break;
              }
              e += 1;
            }
          }
        }
      };
      SVGRendererBase.prototype.renderFrame = function (t) {
        if (this.renderedFrame !== t && !this.destroyed) {
          if (t === null) {
            t = this.renderedFrame;
          } else {
            this.renderedFrame = t;
          }
          this.globalData.frameNum = t;
          this.globalData.frameId += 1;
          this.globalData.projectInterface.currentFrame = t;
          this.globalData._mdf = false;
          var e;
          var i = this.layers.length;
          if (!this.completeLayers) {
            this.checkLayers(t);
          }
          e = i - 1;
          for (; e >= 0; e -= 1) {
            if (this.completeLayers || this.elements[e]) {
              this.elements[e].prepareFrame(t - this.layers[e].st);
            }
          }
          if (this.globalData._mdf) {
            for (e = 0; e < i; e += 1) {
              if (this.completeLayers || this.elements[e]) {
                this.elements[e].renderFrame();
              }
            }
          }
        }
      };
      SVGRendererBase.prototype.appendElementInPos = function (t, e) {
        var i;
        var s = t.getBaseElement();
        if (s) {
          for (var r = 0; r < e;) {
            if (this.elements[r] && this.elements[r] !== true && this.elements[r].getBaseElement()) {
              i = this.elements[r].getBaseElement();
            }
            r += 1;
          }
          if (i) {
            this.layerElement.insertBefore(s, i);
          } else {
            this.layerElement.appendChild(s);
          }
        }
      };
      SVGRendererBase.prototype.hide = function () {
        this.layerElement.style.display = "none";
      };
      SVGRendererBase.prototype.show = function () {
        this.layerElement.style.display = "block";
      };
      extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);
      ICompElement.prototype.initElement = function (t, e, i) {
        this.initFrame();
        this.initBaseData(t, e, i);
        this.initTransform(t, e, i);
        this.initRenderable();
        this.initHierarchy();
        this.initRendererElement();
        this.createContainerElements();
        this.createRenderableComponents();
        if (this.data.xt || !e.progressiveLoad) {
          this.buildAllItems();
        }
        this.hide();
      };
      ICompElement.prototype.prepareFrame = function (t) {
        this._mdf = false;
        this.prepareRenderableFrame(t);
        this.prepareProperties(t, this.isInRange);
        if (this.isInRange || this.data.xt) {
          if (this.tm._placeholder) {
            this.renderedFrame = t / this.data.sr;
          } else {
            var e;
            var i = this.tm.v;
            if (i === this.data.op) {
              i = this.data.op - 1;
            }
            this.renderedFrame = i;
          }
          var s = this.elements.length;
          if (!this.completeLayers) {
            this.checkLayers(this.renderedFrame);
          }
          e = s - 1;
          for (; e >= 0; e -= 1) {
            if (this.completeLayers || this.elements[e]) {
              this.elements[e].prepareFrame(this.renderedFrame - this.layers[e].st);
              if (this.elements[e]._mdf) {
                this._mdf = true;
              }
            }
          }
        }
      };
      ICompElement.prototype.renderInnerContent = function () {
        var t;
        var e = this.layers.length;
        for (t = 0; t < e; t += 1) {
          if (this.completeLayers || this.elements[t]) {
            this.elements[t].renderFrame();
          }
        }
      };
      ICompElement.prototype.setElements = function (t) {
        this.elements = t;
      };
      ICompElement.prototype.getElements = function () {
        return this.elements;
      };
      ICompElement.prototype.destroyElements = function () {
        var t;
        var e = this.layers.length;
        for (t = 0; t < e; t += 1) {
          if (this.elements[t]) {
            this.elements[t].destroy();
          }
        }
      };
      ICompElement.prototype.destroy = function () {
        this.destroyElements();
        this.destroyBaseElement();
      };
      extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement);
      SVGCompElement.prototype.createComp = function (t) {
        return new SVGCompElement(t, this.globalData, this);
      };
      extendPrototype([SVGRendererBase], SVGRenderer);
      SVGRenderer.prototype.createComp = function (t) {
        return new SVGCompElement(t, this.globalData, this);
      };
      ShapeTransformManager.prototype = {
        addTransformSequence: function (t) {
          var e;
          var i = t.length;
          var s = "_";
          for (e = 0; e < i; e += 1) {
            s += t[e].transform.key + "_";
          }
          var r = this.sequences[s];
          if (!r) {
            r = {
              transforms: [].concat(t),
              finalTransform: new Matrix(),
              _mdf: false
            };
            this.sequences[s] = r;
            this.sequenceList.push(r);
          }
          return r;
        },
        processSequence: function (t, e) {
          var i = 0;
          var s = t.transforms.length;
          var r = e;
          while (i < s && !e) {
            if (t.transforms[i].transform.mProps._mdf) {
              r = true;
              break;
            }
            i += 1;
          }
          if (r) {
            t.finalTransform.reset();
            i = s - 1;
            for (; i >= 0; i -= 1) {
              t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
            }
          }
          t._mdf = r;
        },
        processSequences: function (t) {
          var e;
          var i = this.sequenceList.length;
          for (e = 0; e < i; e += 1) {
            this.processSequence(this.sequenceList[e], t);
          }
        },
        getNewKey: function () {
          this.transform_key_count += 1;
          return "_" + this.transform_key_count;
        }
      };
      function lumaLoader() {
        var t = "__lottie_element_luma_buffer";
        var e = null;
        var i = null;
        var s = null;
        function r() {
          var e = createNS("svg");
          var i = createNS("filter");
          var s = createNS("feColorMatrix");
          i.setAttribute("id", t);
          s.setAttribute("type", "matrix");
          s.setAttribute("color-interpolation-filters", "sRGB");
          s.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0");
          i.appendChild(s);
          e.appendChild(i);
          e.setAttribute("id", t + "_svg");
          if (featureSupport.svgLumaHidden) {
            e.style.display = "none";
          }
          return e;
        }
        function a() {
          if (!e) {
            s = r();
            document.body.appendChild(s);
            (i = (e = createTag("canvas")).getContext("2d")).filter = "url(#" + t + ")";
            i.fillStyle = "rgba(0,0,0,0)";
            i.fillRect(0, 0, 1, 1);
          }
        }
        function n(s) {
          if (!e) {
            a();
          }
          e.width = s.width;
          e.height = s.height;
          i.filter = "url(#" + t + ")";
          return e;
        }
        return {
          load: a,
          get: n
        };
      }
      function createCanvas(t, e) {
        if (featureSupport.offscreenCanvas) {
          return new OffscreenCanvas(t, e);
        }
        var i = createTag("canvas");
        i.width = t;
        i.height = e;
        return i;
      }
      var assetLoader = function () {
        return {
          loadLumaCanvas: lumaLoader.load,
          getLumaCanvas: lumaLoader.get,
          createCanvas: createCanvas
        };
      }();
      var registeredEffects = {};
      function CVEffects(t) {
        var e;
        var i;
        var s = t.data.ef ? t.data.ef.length : 0;
        e = 0;
        this.filters = [];
        for (; e < s; e += 1) {
          i = null;
          var r = t.data.ef[e].ty;
          if (registeredEffects[r]) {
            i = new registeredEffects[r].effect(t.effectsManager.effectElements[e], t);
          }
          if (i) {
            this.filters.push(i);
          }
        }
        if (this.filters.length) {
          t.addRenderableComponent(this);
        }
      }
      function registerEffect(t, e) {
        registeredEffects[t] = {
          effect: e
        };
      }
      function CVMaskElement(t, e) {
        this.data = t;
        this.element = e;
        this.masksProperties = this.data.masksProperties || [];
        this.viewData = createSizedArray(this.masksProperties.length);
        var i;
        var s = this.masksProperties.length;
        var r = false;
        for (i = 0; i < s; i += 1) {
          if (this.masksProperties[i].mode !== "n") {
            r = true;
          }
          this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
        }
        this.hasMasks = r;
        if (r) {
          this.element.addRenderableComponent(this);
        }
      }
      function CVBaseElement() {}
      CVEffects.prototype.renderFrame = function (t) {
        var e;
        var i = this.filters.length;
        for (e = 0; e < i; e += 1) {
          this.filters[e].renderFrame(t);
        }
      };
      CVEffects.prototype.getEffects = function (t) {
        var e;
        var i = this.filters.length;
        var s = [];
        for (e = 0; e < i; e += 1) {
          if (this.filters[e].type === t) {
            s.push(this.filters[e]);
          }
        }
        return s;
      };
      CVMaskElement.prototype.renderFrame = function () {
        if (this.hasMasks) {
          var t = this.element.finalTransform.mat;
          var e = this.element.canvasContext;
          var i = this.masksProperties.length;
          e.beginPath();
          s = 0;
          for (; s < i; s += 1) {
            if (this.masksProperties[s].mode !== "n") {
              if (this.masksProperties[s].inv) {
                e.moveTo(0, 0);
                e.lineTo(this.element.globalData.compSize.w, 0);
                e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h);
                e.lineTo(0, this.element.globalData.compSize.h);
                e.lineTo(0, 0);
              }
              n = this.viewData[s].v;
              r = t.applyToPointArray(n.v[0][0], n.v[0][1], 0);
              e.moveTo(r[0], r[1]);
              var s;
              var r;
              var a;
              var n;
              var o;
              var h = n._length;
              for (o = 1; o < h; o += 1) {
                a = t.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]);
                e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
              }
              a = t.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]);
              e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
            }
          }
          this.element.globalData.renderer.save(true);
          e.clip();
        }
      };
      CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty;
      CVMaskElement.prototype.destroy = function () {
        this.element = null;
      };
      var operationsMap = {
        1: "source-in",
        2: "source-out",
        3: "source-in",
        4: "source-out"
      };
      function CVShapeData(t, e, i, s) {
        this.styledShapes = [];
        this.tr = [0, 0, 0, 0, 0, 0];
        var r;
        var a;
        var n = 4;
        if (e.ty === "rc") {
          n = 5;
        } else if (e.ty === "el") {
          n = 6;
        } else if (e.ty === "sr") {
          n = 7;
        }
        this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t);
        var o = i.length;
        for (r = 0; r < o; r += 1) {
          if (!i[r].closed) {
            a = {
              transforms: s.addTransformSequence(i[r].transforms),
              trNodes: []
            };
            this.styledShapes.push(a);
            i[r].elements.push(a);
          }
        }
      }
      function CVShapeElement(t, e, i) {
        this.shapes = [];
        this.shapesData = t.shapes;
        this.stylesList = [];
        this.itemsData = [];
        this.prevViewData = [];
        this.shapeModifiers = [];
        this.processedElements = [];
        this.transformsManager = new ShapeTransformManager();
        this.initElement(t, e, i);
      }
      function CVTextElement(t, e, i) {
        this.textSpans = [];
        this.yOffset = 0;
        this.fillColorAnim = false;
        this.strokeColorAnim = false;
        this.strokeWidthAnim = false;
        this.stroke = false;
        this.fill = false;
        this.justifyOffset = 0;
        this.currentRender = null;
        this.renderType = "canvas";
        this.values = {
          fill: "rgba(0,0,0,0)",
          stroke: "rgba(0,0,0,0)",
          sWidth: 0,
          fValue: ""
        };
        this.initElement(t, e, i);
      }
      function CVImageElement(t, e, i) {
        this.assetData = e.getAssetData(t.refId);
        this.img = e.imageLoader.getAsset(this.assetData);
        this.initElement(t, e, i);
      }
      function CVSolidElement(t, e, i) {
        this.initElement(t, e, i);
      }
      function CanvasRendererBase() {}
      function CanvasContext() {
        this.opacity = -1;
        this.transform = createTypedArray("float32", 16);
        this.fillStyle = "";
        this.strokeStyle = "";
        this.lineWidth = "";
        this.lineCap = "";
        this.lineJoin = "";
        this.miterLimit = "";
        this.id = Math.random();
      }
      function CVContextData() {
        this.stack = [];
        this.cArrPos = 0;
        this.cTr = new Matrix();
        var t;
        var e = 15;
        for (t = 0; t < e; t += 1) {
          var i = new CanvasContext();
          this.stack[t] = i;
        }
        this._length = e;
        this.nativeContext = null;
        this.transformMat = new Matrix();
        this.currentOpacity = 1;
        this.currentFillStyle = "";
        this.appliedFillStyle = "";
        this.currentStrokeStyle = "";
        this.appliedStrokeStyle = "";
        this.currentLineWidth = "";
        this.appliedLineWidth = "";
        this.currentLineCap = "";
        this.appliedLineCap = "";
        this.currentLineJoin = "";
        this.appliedLineJoin = "";
        this.appliedMiterLimit = "";
        this.currentMiterLimit = "";
      }
      function CVCompElement(t, e, i) {
        this.completeLayers = false;
        this.layers = t.layers;
        this.pendingElements = [];
        this.elements = createSizedArray(this.layers.length);
        this.initElement(t, e, i);
        this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
          _placeholder: true
        };
      }
      function CanvasRenderer(t, e) {
        this.animationItem = t;
        this.renderConfig = {
          clearCanvas: !e || e.clearCanvas === undefined || e.clearCanvas,
          context: e && e.context || null,
          progressiveLoad: e && e.progressiveLoad || false,
          preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: e && e.contentVisibility || "visible",
          className: e && e.className || "",
          id: e && e.id || "",
          runExpressions: !e || e.runExpressions === undefined || e.runExpressions
        };
        this.renderConfig.dpr = e && e.dpr || 1;
        if (this.animationItem.wrapper) {
          this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1;
        }
        this.renderedFrame = -1;
        this.globalData = {
          frameNum: -1,
          _mdf: false,
          renderConfig: this.renderConfig,
          currentGlobalAlpha: -1
        };
        this.contextData = new CVContextData();
        this.elements = [];
        this.pendingElements = [];
        this.transformMat = new Matrix();
        this.completeLayers = false;
        this.rendererType = "canvas";
        if (this.renderConfig.clearCanvas) {
          this.ctxTransform = this.contextData.transform.bind(this.contextData);
          this.ctxOpacity = this.contextData.opacity.bind(this.contextData);
          this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData);
          this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData);
          this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData);
          this.ctxLineCap = this.contextData.lineCap.bind(this.contextData);
          this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData);
          this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData);
          this.ctxFill = this.contextData.fill.bind(this.contextData);
          this.ctxFillRect = this.contextData.fillRect.bind(this.contextData);
          this.ctxStroke = this.contextData.stroke.bind(this.contextData);
          this.save = this.contextData.save.bind(this.contextData);
        }
      }
      function HBaseElement() {}
      function HSolidElement(t, e, i) {
        this.initElement(t, e, i);
      }
      function HShapeElement(t, e, i) {
        this.shapes = [];
        this.shapesData = t.shapes;
        this.stylesList = [];
        this.shapeModifiers = [];
        this.itemsData = [];
        this.processedElements = [];
        this.animatedContents = [];
        this.shapesContainer = createNS("g");
        this.initElement(t, e, i);
        this.prevViewData = [];
        this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        };
      }
      function HTextElement(t, e, i) {
        this.textSpans = [];
        this.textPaths = [];
        this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        };
        this.renderType = "svg";
        this.isMasked = false;
        this.initElement(t, e, i);
      }
      function HCameraElement(t, e, i) {
        this.initFrame();
        this.initBaseData(t, e, i);
        this.initHierarchy();
        var s = PropertyFactory.getProp;
        this.pe = s(this, t.pe, 0, 0, this);
        if (t.ks.p.s) {
          this.px = s(this, t.ks.p.x, 1, 0, this);
          this.py = s(this, t.ks.p.y, 1, 0, this);
          this.pz = s(this, t.ks.p.z, 1, 0, this);
        } else {
          this.p = s(this, t.ks.p, 1, 0, this);
        }
        if (t.ks.a) {
          this.a = s(this, t.ks.a, 1, 0, this);
        }
        if (t.ks.or.k.length && t.ks.or.k[0].to) {
          var r;
          var a = t.ks.or.k.length;
          for (r = 0; r < a; r += 1) {
            t.ks.or.k[r].to = null;
            t.ks.or.k[r].ti = null;
          }
        }
        this.or = s(this, t.ks.or, 1, degToRads, this);
        this.or.sh = true;
        this.rx = s(this, t.ks.rx, 0, degToRads, this);
        this.ry = s(this, t.ks.ry, 0, degToRads, this);
        this.rz = s(this, t.ks.rz, 0, degToRads, this);
        this.mat = new Matrix();
        this._prevMat = new Matrix();
        this._isFirstFrame = true;
        this.finalTransform = {
          mProp: this
        };
      }
      function HImageElement(t, e, i) {
        this.assetData = e.getAssetData(t.refId);
        this.initElement(t, e, i);
      }
      function HybridRendererBase(t, e) {
        this.animationItem = t;
        this.layers = null;
        this.renderedFrame = -1;
        this.renderConfig = {
          className: e && e.className || "",
          imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !e || e.hideOnTransparent !== false,
          filterSize: {
            width: e && e.filterSize && e.filterSize.width || "400%",
            height: e && e.filterSize && e.filterSize.height || "400%",
            x: e && e.filterSize && e.filterSize.x || "-100%",
            y: e && e.filterSize && e.filterSize.y || "-100%"
          }
        };
        this.globalData = {
          _mdf: false,
          frameNum: -1,
          renderConfig: this.renderConfig
        };
        this.pendingElements = [];
        this.elements = [];
        this.threeDElements = [];
        this.destroyed = false;
        this.camera = null;
        this.supports3d = true;
        this.rendererType = "html";
      }
      function HCompElement(t, e, i) {
        this.layers = t.layers;
        this.supports3d = !t.hasMask;
        this.completeLayers = false;
        this.pendingElements = [];
        this.elements = this.layers ? createSizedArray(this.layers.length) : [];
        this.initElement(t, e, i);
        this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
          _placeholder: true
        };
      }
      function HybridRenderer(t, e) {
        this.animationItem = t;
        this.layers = null;
        this.renderedFrame = -1;
        this.renderConfig = {
          className: e && e.className || "",
          imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !e || e.hideOnTransparent !== false,
          filterSize: {
            width: e && e.filterSize && e.filterSize.width || "400%",
            height: e && e.filterSize && e.filterSize.height || "400%",
            x: e && e.filterSize && e.filterSize.x || "-100%",
            y: e && e.filterSize && e.filterSize.y || "-100%"
          },
          runExpressions: !e || e.runExpressions === undefined || e.runExpressions
        };
        this.globalData = {
          _mdf: false,
          frameNum: -1,
          renderConfig: this.renderConfig
        };
        this.pendingElements = [];
        this.elements = [];
        this.threeDElements = [];
        this.destroyed = false;
        this.camera = null;
        this.supports3d = true;
        this.rendererType = "html";
      }
      CVBaseElement.prototype = {
        createElements: function () {},
        initRendererElement: function () {},
        createContainerElements: function () {
          if (this.data.tt >= 1) {
            this.buffers = [];
            var t = this.globalData.canvasContext;
            var e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
            this.buffers.push(e);
            var i = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
            this.buffers.push(i);
            if (this.data.tt >= 3 && !document._isProxy) {
              assetLoader.loadLumaCanvas();
            }
          }
          this.canvasContext = this.globalData.canvasContext;
          this.transformCanvas = this.globalData.transformCanvas;
          this.renderableEffectsManager = new CVEffects(this);
          this.searchEffectTransforms();
        },
        createContent: function () {},
        setBlendMode: function () {
          var t = this.globalData;
          if (t.blendMode !== this.data.bm) {
            t.blendMode = this.data.bm;
            var e = getBlendMode(this.data.bm);
            t.canvasContext.globalCompositeOperation = e;
          }
        },
        createRenderableComponents: function () {
          this.maskManager = new CVMaskElement(this.data, this);
          this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
        },
        hideElement: function () {
          if (!this.hidden && (!this.isInRange || !!this.isTransparent)) {
            this.hidden = true;
          }
        },
        showElement: function () {
          if (this.isInRange && !this.isTransparent) {
            this.hidden = false;
            this._isFirstFrame = true;
            this.maskManager._isFirstFrame = true;
          }
        },
        clearCanvas: function (t) {
          t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
        },
        prepareLayer: function () {
          if (this.data.tt >= 1) {
            var t = this.buffers[0].getContext("2d");
            this.clearCanvas(t);
            t.drawImage(this.canvasContext.canvas, 0, 0);
            this.currentTransform = this.canvasContext.getTransform();
            this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
            this.clearCanvas(this.canvasContext);
            this.canvasContext.setTransform(this.currentTransform);
          }
        },
        exitLayer: function () {
          if (this.data.tt >= 1) {
            var t = this.buffers[1];
            var e = t.getContext("2d");
            this.clearCanvas(e);
            e.drawImage(this.canvasContext.canvas, 0, 0);
            this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
            this.clearCanvas(this.canvasContext);
            this.canvasContext.setTransform(this.currentTransform);
            this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(true);
            this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
            if (this.data.tt >= 3 && !document._isProxy) {
              var i = assetLoader.getLumaCanvas(this.canvasContext.canvas);
              i.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0);
              this.clearCanvas(this.canvasContext);
              this.canvasContext.drawImage(i, 0, 0);
            }
            this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt];
            this.canvasContext.drawImage(t, 0, 0);
            this.canvasContext.globalCompositeOperation = "destination-over";
            this.canvasContext.drawImage(this.buffers[0], 0, 0);
            this.canvasContext.setTransform(this.currentTransform);
            this.canvasContext.globalCompositeOperation = "source-over";
          }
        },
        renderFrame: function (t) {
          if (!this.hidden && !this.data.hd && (this.data.td !== 1 || t)) {
            this.renderTransform();
            this.renderRenderable();
            this.renderLocalTransform();
            this.setBlendMode();
            var e = this.data.ty === 0;
            this.prepareLayer();
            this.globalData.renderer.save(e);
            this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props);
            this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity);
            this.renderInnerContent();
            this.globalData.renderer.restore(e);
            this.exitLayer();
            if (this.maskManager.hasMasks) {
              this.globalData.renderer.restore(true);
            }
            this._isFirstFrame &&= false;
          }
        },
        destroy: function () {
          this.canvasContext = null;
          this.data = null;
          this.globalData = null;
          this.maskManager.destroy();
        },
        mHelper: new Matrix()
      };
      CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
      CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
      CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
      extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement);
      CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement;
      CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        _opMdf: false
      };
      CVShapeElement.prototype.dashResetter = [];
      CVShapeElement.prototype.createContent = function () {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
      };
      CVShapeElement.prototype.createStyleElement = function (t, e) {
        var i = {
          data: t,
          type: t.ty,
          preTransforms: this.transformsManager.addTransformSequence(e),
          transforms: [],
          elements: [],
          closed: t.hd === true
        };
        var s = {};
        if (t.ty === "fl" || t.ty === "st") {
          s.c = PropertyFactory.getProp(this, t.c, 1, 255, this);
          if (!s.c.k) {
            i.co = "rgb(" + bmFloor(s.c.v[0]) + "," + bmFloor(s.c.v[1]) + "," + bmFloor(s.c.v[2]) + ")";
          }
        } else if (t.ty === "gf" || t.ty === "gs") {
          s.s = PropertyFactory.getProp(this, t.s, 1, null, this);
          s.e = PropertyFactory.getProp(this, t.e, 1, null, this);
          s.h = PropertyFactory.getProp(this, t.h || {
            k: 0
          }, 0, 0.01, this);
          s.a = PropertyFactory.getProp(this, t.a || {
            k: 0
          }, 0, degToRads, this);
          s.g = new GradientProperty(this, t.g, this);
        }
        s.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this);
        if (t.ty === "st" || t.ty === "gs") {
          i.lc = lineCapEnum[t.lc || 2];
          i.lj = lineJoinEnum[t.lj || 2];
          if (t.lj == 1) {
            i.ml = t.ml;
          }
          s.w = PropertyFactory.getProp(this, t.w, 0, null, this);
          if (!s.w.k) {
            i.wi = s.w.v;
          }
          if (t.d) {
            var r = new DashProperty(this, t.d, "canvas", this);
            s.d = r;
            if (!s.d.k) {
              i.da = s.d.dashArray;
              i.do = s.d.dashoffset[0];
            }
          }
        } else {
          i.r = t.r === 2 ? "evenodd" : "nonzero";
        }
        this.stylesList.push(i);
        s.style = i;
        return s;
      };
      CVShapeElement.prototype.createGroupElement = function () {
        return {
          it: [],
          prevViewData: []
        };
      };
      CVShapeElement.prototype.createTransformElement = function (t) {
        return {
          transform: {
            opacity: 1,
            _opMdf: false,
            key: this.transformsManager.getNewKey(),
            op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
            mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
          }
        };
      };
      CVShapeElement.prototype.createShapeElement = function (t) {
        var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
        this.shapes.push(e);
        this.addShapeToModifiers(e);
        return e;
      };
      CVShapeElement.prototype.reloadShapes = function () {
        this._isFirstFrame = true;
        var t;
        var e = this.itemsData.length;
        for (t = 0; t < e; t += 1) {
          this.prevViewData[t] = this.itemsData[t];
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
        e = this.dynamicProperties.length;
        t = 0;
        for (; t < e; t += 1) {
          this.dynamicProperties[t].getValue();
        }
        this.renderModifiers();
        this.transformsManager.processSequences(this._isFirstFrame);
      };
      CVShapeElement.prototype.addTransformToStyleList = function (t) {
        var e;
        var i = this.stylesList.length;
        for (e = 0; e < i; e += 1) {
          if (!this.stylesList[e].closed) {
            this.stylesList[e].transforms.push(t);
          }
        }
      };
      CVShapeElement.prototype.removeTransformFromStyleList = function () {
        var t;
        var e = this.stylesList.length;
        for (t = 0; t < e; t += 1) {
          if (!this.stylesList[t].closed) {
            this.stylesList[t].transforms.pop();
          }
        }
      };
      CVShapeElement.prototype.closeStyles = function (t) {
        var e;
        var i = t.length;
        for (e = 0; e < i; e += 1) {
          t[e].closed = true;
        }
      };
      CVShapeElement.prototype.searchShapes = function (t, e, i, s, r) {
        var a;
        var n;
        var o;
        var h;
        var l;
        var p;
        var f = t.length - 1;
        var c = [];
        var m = [];
        var u = [].concat(r);
        for (a = f; a >= 0; a -= 1) {
          if (h = this.searchProcessedElement(t[a])) {
            e[a] = i[h - 1];
          } else {
            t[a]._shouldRender = s;
          }
          if (t[a].ty === "fl" || t[a].ty === "st" || t[a].ty === "gf" || t[a].ty === "gs") {
            if (h) {
              e[a].style.closed = false;
            } else {
              e[a] = this.createStyleElement(t[a], u);
            }
            c.push(e[a].style);
          } else if (t[a].ty === "gr") {
            if (h) {
              n = 0;
              o = e[a].it.length;
              for (; n < o; n += 1) {
                e[a].prevViewData[n] = e[a].it[n];
              }
            } else {
              e[a] = this.createGroupElement(t[a]);
            }
            this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, s, u);
          } else if (t[a].ty === "tr") {
            if (!h) {
              p = this.createTransformElement(t[a]);
              e[a] = p;
            }
            u.push(e[a]);
            this.addTransformToStyleList(e[a]);
          } else if (t[a].ty === "sh" || t[a].ty === "rc" || t[a].ty === "el" || t[a].ty === "sr") {
            if (!h) {
              e[a] = this.createShapeElement(t[a]);
            }
          } else if (t[a].ty === "tm" || t[a].ty === "rd" || t[a].ty === "pb" || t[a].ty === "zz" || t[a].ty === "op") {
            if (h) {
              (l = e[a]).closed = false;
            } else {
              (l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]);
              e[a] = l;
              this.shapeModifiers.push(l);
            }
            m.push(l);
          } else if (t[a].ty === "rp") {
            if (h) {
              (l = e[a]).closed = true;
            } else {
              l = ShapeModifiers.getModifier(t[a].ty);
              e[a] = l;
              l.init(this, t, a, e);
              this.shapeModifiers.push(l);
              s = false;
            }
            m.push(l);
          }
          this.addProcessedElement(t[a], a + 1);
        }
        this.removeTransformFromStyleList();
        this.closeStyles(c);
        f = m.length;
        a = 0;
        for (; a < f; a += 1) {
          m[a].closed = true;
        }
      };
      CVShapeElement.prototype.renderInnerContent = function () {
        this.transformHelper.opacity = 1;
        this.transformHelper._opMdf = false;
        this.renderModifiers();
        this.transformsManager.processSequences(this._isFirstFrame);
        this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
      };
      CVShapeElement.prototype.renderShapeTransform = function (t, e) {
        if (t._opMdf || e.op._mdf || this._isFirstFrame) {
          e.opacity = t.opacity;
          e.opacity *= e.op.v;
          e._opMdf = true;
        }
      };
      CVShapeElement.prototype.drawLayer = function () {
        var t;
        var e;
        var i;
        var s;
        var r;
        var a;
        var n;
        var o;
        var h;
        var l = this.stylesList.length;
        var p = this.globalData.renderer;
        var f = this.globalData.canvasContext;
        for (t = 0; t < l; t += 1) {
          if (((o = (h = this.stylesList[t]).type) !== "st" && o !== "gs" || h.wi !== 0) && !!h.data._shouldRender && h.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
            p.save();
            a = h.elements;
            if (o === "st" || o === "gs") {
              p.ctxStrokeStyle(o === "st" ? h.co : h.grd);
              p.ctxLineWidth(h.wi);
              p.ctxLineCap(h.lc);
              p.ctxLineJoin(h.lj);
              p.ctxMiterLimit(h.ml || 0);
            } else {
              p.ctxFillStyle(o === "fl" ? h.co : h.grd);
            }
            p.ctxOpacity(h.coOp);
            if (o !== "st" && o !== "gs") {
              f.beginPath();
            }
            p.ctxTransform(h.preTransforms.finalTransform.props);
            i = a.length;
            e = 0;
            for (; e < i; e += 1) {
              if (o === "st" || o === "gs") {
                f.beginPath();
                if (h.da) {
                  f.setLineDash(h.da);
                  f.lineDashOffset = h.do;
                }
              }
              r = (n = a[e].trNodes).length;
              s = 0;
              for (; s < r; s += 1) {
                if (n[s].t === "m") {
                  f.moveTo(n[s].p[0], n[s].p[1]);
                } else if (n[s].t === "c") {
                  f.bezierCurveTo(n[s].pts[0], n[s].pts[1], n[s].pts[2], n[s].pts[3], n[s].pts[4], n[s].pts[5]);
                } else {
                  f.closePath();
                }
              }
              if (o === "st" || o === "gs") {
                p.ctxStroke();
                if (h.da) {
                  f.setLineDash(this.dashResetter);
                }
              }
            }
            if (o !== "st" && o !== "gs") {
              this.globalData.renderer.ctxFill(h.r);
            }
            p.restore();
          }
        }
      };
      CVShapeElement.prototype.renderShape = function (t, e, i, s) {
        var r;
        var a;
        var n = e.length - 1;
        a = t;
        r = n;
        for (; r >= 0; r -= 1) {
          if (e[r].ty === "tr") {
            a = i[r].transform;
            this.renderShapeTransform(t, a);
          } else if (e[r].ty === "sh" || e[r].ty === "el" || e[r].ty === "rc" || e[r].ty === "sr") {
            this.renderPath(e[r], i[r]);
          } else if (e[r].ty === "fl") {
            this.renderFill(e[r], i[r], a);
          } else if (e[r].ty === "st") {
            this.renderStroke(e[r], i[r], a);
          } else if (e[r].ty === "gf" || e[r].ty === "gs") {
            this.renderGradientFill(e[r], i[r], a);
          } else if (e[r].ty === "gr") {
            this.renderShape(a, e[r].it, i[r].it);
          } else {
            e[r].ty;
          }
        }
        if (s) {
          this.drawLayer();
        }
      };
      CVShapeElement.prototype.renderStyledShape = function (t, e) {
        if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
          var i;
          var s;
          var r;
          var a = t.trNodes;
          var n = e.paths;
          var o = n._length;
          a.length = 0;
          var h = t.transforms.finalTransform;
          for (r = 0; r < o; r += 1) {
            var l = n.shapes[r];
            if (l && l.v) {
              i = 1;
              s = l._length;
              for (; i < s; i += 1) {
                if (i === 1) {
                  a.push({
                    t: "m",
                    p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                  });
                }
                a.push({
                  t: "c",
                  pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
                });
              }
              if (s === 1) {
                a.push({
                  t: "m",
                  p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                });
              }
              if (l.c && s) {
                a.push({
                  t: "c",
                  pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
                });
                a.push({
                  t: "z"
                });
              }
            }
          }
          t.trNodes = a;
        }
      };
      CVShapeElement.prototype.renderPath = function (t, e) {
        if (t.hd !== true && t._shouldRender) {
          var i;
          var s = e.styledShapes.length;
          for (i = 0; i < s; i += 1) {
            this.renderStyledShape(e.styledShapes[i], e.sh);
          }
        }
      };
      CVShapeElement.prototype.renderFill = function (t, e, i) {
        var s = e.style;
        if (e.c._mdf || this._isFirstFrame) {
          s.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")";
        }
        if (e.o._mdf || i._opMdf || this._isFirstFrame) {
          s.coOp = e.o.v * i.opacity;
        }
      };
      CVShapeElement.prototype.renderGradientFill = function (t, e, i) {
        var s = e.style;
        if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
          var r;
          var a;
          var n = this.globalData.canvasContext;
          var o = e.s.v;
          var h = e.e.v;
          if (t.t === 1) {
            r = n.createLinearGradient(o[0], o[1], h[0], h[1]);
          } else {
            var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2));
            var p = Math.atan2(h[1] - o[1], h[0] - o[0]);
            var f = e.h.v;
            if (f >= 1) {
              f = 0.99;
            } else if (f <= -1) {
              f = -0.99;
            }
            var c = l * f;
            var m = Math.cos(p + e.a.v) * c + o[0];
            var u = Math.sin(p + e.a.v) * c + o[1];
            r = n.createRadialGradient(m, u, 0, o[0], o[1], l);
          }
          var d = t.g.p;
          var g = e.g.c;
          var y = 1;
          for (a = 0; a < d; a += 1) {
            if (e.g._hasOpacity && e.g._collapsable) {
              y = e.g.o[a * 2 + 1];
            }
            r.addColorStop(g[a * 4] / 100, "rgba(" + g[a * 4 + 1] + "," + g[a * 4 + 2] + "," + g[a * 4 + 3] + "," + y + ")");
          }
          s.grd = r;
        }
        s.coOp = e.o.v * i.opacity;
      };
      CVShapeElement.prototype.renderStroke = function (t, e, i) {
        var s = e.style;
        var r = e.d;
        if (r && (r._mdf || this._isFirstFrame)) {
          s.da = r.dashArray;
          s.do = r.dashoffset[0];
        }
        if (e.c._mdf || this._isFirstFrame) {
          s.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")";
        }
        if (e.o._mdf || i._opMdf || this._isFirstFrame) {
          s.coOp = e.o.v * i.opacity;
        }
        if (e.w._mdf || this._isFirstFrame) {
          s.wi = e.w.v;
        }
      };
      CVShapeElement.prototype.destroy = function () {
        this.shapesData = null;
        this.globalData = null;
        this.canvasContext = null;
        this.stylesList.length = 0;
        this.itemsData.length = 0;
      };
      extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement);
      CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d");
      CVTextElement.prototype.buildNewText = function () {
        var t;
        var e;
        var i;
        var s;
        var r;
        var a;
        var n;
        var o;
        var h;
        var l;
        var p;
        var f;
        var c = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(c.l ? c.l.length : 0);
        var m = false;
        if (c.fc) {
          m = true;
          this.values.fill = this.buildColor(c.fc);
        } else {
          this.values.fill = "rgba(0,0,0,0)";
        }
        this.fill = m;
        var u = false;
        if (c.sc) {
          u = true;
          this.values.stroke = this.buildColor(c.sc);
          this.values.sWidth = c.sw;
        }
        var d = this.globalData.fontManager.getFontByName(c.f);
        var g = c.l;
        var y = this.mHelper;
        this.stroke = u;
        this.values.fValue = c.finalSize + "px " + this.globalData.fontManager.getFontByName(c.f).fFamily;
        e = c.finalText.length;
        var v = this.data.singleShape;
        var b = c.tr * 0.001 * c.finalSize;
        var x = 0;
        var _ = 0;
        var k = true;
        var C = 0;
        for (t = 0; t < e; t += 1) {
          s = (i = this.globalData.fontManager.getCharData(c.finalText[t], d.fStyle, this.globalData.fontManager.getFontByName(c.f).fFamily)) && i.data || {};
          y.reset();
          if (v && g[t].n) {
            x = -b;
            _ += c.yOffset;
            _ += +!!k;
            k = false;
          }
          h = (n = s.shapes ? s.shapes[0].it : []).length;
          y.scale(c.finalSize / 100, c.finalSize / 100);
          if (v) {
            this.applyTextPropertiesToMatrix(c, y, g[t].line, x, _);
          }
          p = createSizedArray(h - 1);
          var A = 0;
          for (o = 0; o < h; o += 1) {
            if (n[o].ty === "sh") {
              r = 1;
              a = n[o].ks.k.i.length;
              l = n[o].ks.k;
              f = [];
              for (; r < a; r += 1) {
                if (r === 1) {
                  f.push(y.applyToX(l.v[0][0], l.v[0][1], 0), y.applyToY(l.v[0][0], l.v[0][1], 0));
                }
                f.push(y.applyToX(l.o[r - 1][0], l.o[r - 1][1], 0), y.applyToY(l.o[r - 1][0], l.o[r - 1][1], 0), y.applyToX(l.i[r][0], l.i[r][1], 0), y.applyToY(l.i[r][0], l.i[r][1], 0), y.applyToX(l.v[r][0], l.v[r][1], 0), y.applyToY(l.v[r][0], l.v[r][1], 0));
              }
              f.push(y.applyToX(l.o[r - 1][0], l.o[r - 1][1], 0), y.applyToY(l.o[r - 1][0], l.o[r - 1][1], 0), y.applyToX(l.i[0][0], l.i[0][1], 0), y.applyToY(l.i[0][0], l.i[0][1], 0), y.applyToX(l.v[0][0], l.v[0][1], 0), y.applyToY(l.v[0][0], l.v[0][1], 0));
              p[A] = f;
              A += 1;
            }
          }
          if (v) {
            x += g[t].l;
            x += b;
          }
          if (this.textSpans[C]) {
            this.textSpans[C].elem = p;
          } else {
            this.textSpans[C] = {
              elem: p
            };
          }
          C += 1;
        }
      };
      CVTextElement.prototype.renderInnerContent = function () {
        this.validateText();
        this.canvasContext.font = this.values.fValue;
        this.globalData.renderer.ctxLineCap("butt");
        this.globalData.renderer.ctxLineJoin("miter");
        this.globalData.renderer.ctxMiterLimit(4);
        if (!this.data.singleShape) {
          this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        }
        var t;
        var e;
        var i;
        var s;
        var r;
        var a;
        var n;
        var o;
        var h;
        var l = this.textAnimator.renderedLetters;
        var p = this.textProperty.currentData.l;
        e = p.length;
        var f = null;
        var c = null;
        var m = null;
        var u = this.globalData.renderer;
        for (t = 0; t < e; t += 1) {
          if (!p[t].n) {
            if (n = l[t]) {
              u.save();
              u.ctxTransform(n.p);
              u.ctxOpacity(n.o);
            }
            if (this.fill) {
              if (n && n.fc) {
                if (f !== n.fc) {
                  u.ctxFillStyle(n.fc);
                  f = n.fc;
                }
              } else if (f !== this.values.fill) {
                f = this.values.fill;
                u.ctxFillStyle(this.values.fill);
              }
              s = (o = this.textSpans[t].elem).length;
              this.globalData.canvasContext.beginPath();
              i = 0;
              for (; i < s; i += 1) {
                a = (h = o[i]).length;
                this.globalData.canvasContext.moveTo(h[0], h[1]);
                r = 2;
                for (; r < a; r += 6) {
                  this.globalData.canvasContext.bezierCurveTo(h[r], h[r + 1], h[r + 2], h[r + 3], h[r + 4], h[r + 5]);
                }
              }
              this.globalData.canvasContext.closePath();
              u.ctxFill();
            }
            if (this.stroke) {
              if (n && n.sw) {
                if (m !== n.sw) {
                  m = n.sw;
                  u.ctxLineWidth(n.sw);
                }
              } else if (m !== this.values.sWidth) {
                m = this.values.sWidth;
                u.ctxLineWidth(this.values.sWidth);
              }
              if (n && n.sc) {
                if (c !== n.sc) {
                  c = n.sc;
                  u.ctxStrokeStyle(n.sc);
                }
              } else if (c !== this.values.stroke) {
                c = this.values.stroke;
                u.ctxStrokeStyle(this.values.stroke);
              }
              s = (o = this.textSpans[t].elem).length;
              this.globalData.canvasContext.beginPath();
              i = 0;
              for (; i < s; i += 1) {
                a = (h = o[i]).length;
                this.globalData.canvasContext.moveTo(h[0], h[1]);
                r = 2;
                for (; r < a; r += 6) {
                  this.globalData.canvasContext.bezierCurveTo(h[r], h[r + 1], h[r + 2], h[r + 3], h[r + 4], h[r + 5]);
                }
              }
              this.globalData.canvasContext.closePath();
              u.ctxStroke();
            }
            if (n) {
              this.globalData.renderer.restore();
            }
          }
        }
      };
      extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement);
      CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement;
      CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;
      CVImageElement.prototype.createContent = function () {
        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
          var t;
          var e;
          var i = createTag("canvas");
          i.width = this.assetData.w;
          i.height = this.assetData.h;
          var s = i.getContext("2d");
          var r = this.img.width;
          var a = this.img.height;
          var n = r / a;
          var o = this.assetData.w / this.assetData.h;
          var h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
          if (n > o && h === "xMidYMid slice" || n < o && h !== "xMidYMid slice") {
            t = (e = a) * o;
          } else {
            e = (t = r) / o;
          }
          s.drawImage(this.img, (r - t) / 2, (a - e) / 2, t, e, 0, 0, this.assetData.w, this.assetData.h);
          this.img = i;
        }
      };
      CVImageElement.prototype.renderInnerContent = function () {
        this.canvasContext.drawImage(this.img, 0, 0);
      };
      CVImageElement.prototype.destroy = function () {
        this.img = null;
      };
      extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement);
      CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement;
      CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;
      CVSolidElement.prototype.renderInnerContent = function () {
        this.globalData.renderer.ctxFillStyle(this.data.sc);
        this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
      };
      extendPrototype([BaseRenderer], CanvasRendererBase);
      CanvasRendererBase.prototype.createShape = function (t) {
        return new CVShapeElement(t, this.globalData, this);
      };
      CanvasRendererBase.prototype.createText = function (t) {
        return new CVTextElement(t, this.globalData, this);
      };
      CanvasRendererBase.prototype.createImage = function (t) {
        return new CVImageElement(t, this.globalData, this);
      };
      CanvasRendererBase.prototype.createSolid = function (t) {
        return new CVSolidElement(t, this.globalData, this);
      };
      CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;
      CanvasRendererBase.prototype.ctxTransform = function (t) {
        if (t[0] !== 1 || t[1] !== 0 || t[4] !== 0 || t[5] !== 1 || t[12] !== 0 || t[13] !== 0) {
          this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
        }
      };
      CanvasRendererBase.prototype.ctxOpacity = function (t) {
        this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
      };
      CanvasRendererBase.prototype.ctxFillStyle = function (t) {
        this.canvasContext.fillStyle = t;
      };
      CanvasRendererBase.prototype.ctxStrokeStyle = function (t) {
        this.canvasContext.strokeStyle = t;
      };
      CanvasRendererBase.prototype.ctxLineWidth = function (t) {
        this.canvasContext.lineWidth = t;
      };
      CanvasRendererBase.prototype.ctxLineCap = function (t) {
        this.canvasContext.lineCap = t;
      };
      CanvasRendererBase.prototype.ctxLineJoin = function (t) {
        this.canvasContext.lineJoin = t;
      };
      CanvasRendererBase.prototype.ctxMiterLimit = function (t) {
        this.canvasContext.miterLimit = t;
      };
      CanvasRendererBase.prototype.ctxFill = function (t) {
        this.canvasContext.fill(t);
      };
      CanvasRendererBase.prototype.ctxFillRect = function (t, e, i, s) {
        this.canvasContext.fillRect(t, e, i, s);
      };
      CanvasRendererBase.prototype.ctxStroke = function () {
        this.canvasContext.stroke();
      };
      CanvasRendererBase.prototype.reset = function () {
        if (!this.renderConfig.clearCanvas) {
          this.canvasContext.restore();
          return;
        }
        this.contextData.reset();
      };
      CanvasRendererBase.prototype.save = function () {
        this.canvasContext.save();
      };
      CanvasRendererBase.prototype.restore = function (t) {
        if (!this.renderConfig.clearCanvas) {
          this.canvasContext.restore();
          return;
        }
        if (t) {
          this.globalData.blendMode = "source-over";
        }
        this.contextData.restore(t);
      };
      CanvasRendererBase.prototype.configAnimation = function (t) {
        if (this.animationItem.wrapper) {
          this.animationItem.container = createTag("canvas");
          var e = this.animationItem.container.style;
          e.width = "100%";
          e.height = "100%";
          var i = "0px 0px 0px";
          e.transformOrigin = i;
          e.mozTransformOrigin = i;
          e.webkitTransformOrigin = i;
          e["-webkit-transform"] = i;
          e.contentVisibility = this.renderConfig.contentVisibility;
          this.animationItem.wrapper.appendChild(this.animationItem.container);
          this.canvasContext = this.animationItem.container.getContext("2d");
          if (this.renderConfig.className) {
            this.animationItem.container.setAttribute("class", this.renderConfig.className);
          }
          if (this.renderConfig.id) {
            this.animationItem.container.setAttribute("id", this.renderConfig.id);
          }
        } else {
          this.canvasContext = this.renderConfig.context;
        }
        this.contextData.setContext(this.canvasContext);
        this.data = t;
        this.layers = t.layers;
        this.transformCanvas = {
          w: t.w,
          h: t.h,
          sx: 0,
          sy: 0,
          tx: 0,
          ty: 0
        };
        this.setupGlobalData(t, document.body);
        this.globalData.canvasContext = this.canvasContext;
        this.globalData.renderer = this;
        this.globalData.isDashed = false;
        this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
        this.globalData.transformCanvas = this.transformCanvas;
        this.elements = createSizedArray(t.layers.length);
        this.updateContainerSize();
      };
      CanvasRendererBase.prototype.updateContainerSize = function (t, e) {
        this.reset();
        if (t) {
          i = t;
          s = e;
          this.canvasContext.canvas.width = i;
          this.canvasContext.canvas.height = s;
        } else {
          if (this.animationItem.wrapper && this.animationItem.container) {
            i = this.animationItem.wrapper.offsetWidth;
            s = this.animationItem.wrapper.offsetHeight;
          } else {
            i = this.canvasContext.canvas.width;
            s = this.canvasContext.canvas.height;
          }
          this.canvasContext.canvas.width = i * this.renderConfig.dpr;
          this.canvasContext.canvas.height = s * this.renderConfig.dpr;
        }
        if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
          var i;
          var s;
          var r;
          var a;
          var n = this.renderConfig.preserveAspectRatio.split(" ");
          var o = n[1] || "meet";
          var h = n[0] || "xMidYMid";
          var l = h.substr(0, 4);
          var p = h.substr(4);
          r = i / s;
          if ((a = this.transformCanvas.w / this.transformCanvas.h) > r && o === "meet" || a < r && o === "slice") {
            this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr);
            this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr);
          } else {
            this.transformCanvas.sx = s / (this.transformCanvas.h / this.renderConfig.dpr);
            this.transformCanvas.sy = s / (this.transformCanvas.h / this.renderConfig.dpr);
          }
          if (l === "xMid" && (a < r && o === "meet" || a > r && o === "slice")) {
            this.transformCanvas.tx = (i - this.transformCanvas.w * (s / this.transformCanvas.h)) / 2 * this.renderConfig.dpr;
          } else if (l === "xMax" && (a < r && o === "meet" || a > r && o === "slice")) {
            this.transformCanvas.tx = (i - this.transformCanvas.w * (s / this.transformCanvas.h)) * this.renderConfig.dpr;
          } else {
            this.transformCanvas.tx = 0;
          }
          if (p === "YMid" && (a > r && o === "meet" || a < r && o === "slice")) {
            this.transformCanvas.ty = (s - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2 * this.renderConfig.dpr;
          } else if (p === "YMax" && (a > r && o === "meet" || a < r && o === "slice")) {
            this.transformCanvas.ty = (s - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr;
          } else {
            this.transformCanvas.ty = 0;
          }
        } else {
          if (this.renderConfig.preserveAspectRatio === "none") {
            this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr);
            this.transformCanvas.sy = s / (this.transformCanvas.h / this.renderConfig.dpr);
          } else {
            this.transformCanvas.sx = this.renderConfig.dpr;
            this.transformCanvas.sy = this.renderConfig.dpr;
          }
          this.transformCanvas.tx = 0;
          this.transformCanvas.ty = 0;
        }
        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
        this.ctxTransform(this.transformCanvas.props);
        this.canvasContext.beginPath();
        this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
        this.canvasContext.closePath();
        this.canvasContext.clip();
        this.renderFrame(this.renderedFrame, true);
      };
      CanvasRendererBase.prototype.destroy = function () {
        var t;
        if (this.renderConfig.clearCanvas && this.animationItem.wrapper) {
          this.animationItem.wrapper.innerText = "";
        }
        t = (this.layers ? this.layers.length : 0) - 1;
        for (; t >= 0; t -= 1) {
          if (this.elements[t] && this.elements[t].destroy) {
            this.elements[t].destroy();
          }
        }
        this.elements.length = 0;
        this.globalData.canvasContext = null;
        this.animationItem.container = null;
        this.destroyed = true;
      };
      CanvasRendererBase.prototype.renderFrame = function (t, e) {
        if ((this.renderedFrame !== t || this.renderConfig.clearCanvas !== true || e) && !this.destroyed && t !== -1) {
          this.renderedFrame = t;
          this.globalData.frameNum = t - this.animationItem._isFirstFrame;
          this.globalData.frameId += 1;
          this.globalData._mdf = !this.renderConfig.clearCanvas || e;
          this.globalData.projectInterface.currentFrame = t;
          var i;
          var s = this.layers.length;
          if (!this.completeLayers) {
            this.checkLayers(t);
          }
          i = s - 1;
          for (; i >= 0; i -= 1) {
            if (this.completeLayers || this.elements[i]) {
              this.elements[i].prepareFrame(t - this.layers[i].st);
            }
          }
          if (this.globalData._mdf) {
            if (this.renderConfig.clearCanvas === true) {
              this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
            } else {
              this.save();
            }
            i = s - 1;
            for (; i >= 0; i -= 1) {
              if (this.completeLayers || this.elements[i]) {
                this.elements[i].renderFrame();
              }
            }
            if (this.renderConfig.clearCanvas !== true) {
              this.restore();
            }
          }
        }
      };
      CanvasRendererBase.prototype.buildItem = function (t) {
        var e = this.elements;
        if (!e[t] && this.layers[t].ty !== 99) {
          var i = this.createItem(this.layers[t], this, this.globalData);
          e[t] = i;
          i.initExpressions();
        }
      };
      CanvasRendererBase.prototype.checkPendingElements = function () {
        while (this.pendingElements.length) {
          this.pendingElements.pop().checkParenting();
        }
      };
      CanvasRendererBase.prototype.hide = function () {
        this.animationItem.container.style.display = "none";
      };
      CanvasRendererBase.prototype.show = function () {
        this.animationItem.container.style.display = "block";
      };
      CVContextData.prototype.duplicate = function () {
        var t = this._length * 2;
        var e = 0;
        for (e = this._length; e < t; e += 1) {
          this.stack[e] = new CanvasContext();
        }
        this._length = t;
      };
      CVContextData.prototype.reset = function () {
        this.cArrPos = 0;
        this.cTr.reset();
        this.stack[this.cArrPos].opacity = 1;
      };
      CVContextData.prototype.restore = function (t) {
        this.cArrPos -= 1;
        var e;
        var i = this.stack[this.cArrPos];
        var s = i.transform;
        var r = this.cTr.props;
        for (e = 0; e < 16; e += 1) {
          r[e] = s[e];
        }
        if (t) {
          this.nativeContext.restore();
          var a = this.stack[this.cArrPos + 1];
          this.appliedFillStyle = a.fillStyle;
          this.appliedStrokeStyle = a.strokeStyle;
          this.appliedLineWidth = a.lineWidth;
          this.appliedLineCap = a.lineCap;
          this.appliedLineJoin = a.lineJoin;
          this.appliedMiterLimit = a.miterLimit;
        }
        this.nativeContext.setTransform(s[0], s[1], s[4], s[5], s[12], s[13]);
        if (t || i.opacity !== -1 && this.currentOpacity !== i.opacity) {
          this.nativeContext.globalAlpha = i.opacity;
          this.currentOpacity = i.opacity;
        }
        this.currentFillStyle = i.fillStyle;
        this.currentStrokeStyle = i.strokeStyle;
        this.currentLineWidth = i.lineWidth;
        this.currentLineCap = i.lineCap;
        this.currentLineJoin = i.lineJoin;
        this.currentMiterLimit = i.miterLimit;
      };
      CVContextData.prototype.save = function (t) {
        if (t) {
          this.nativeContext.save();
        }
        var e;
        var i = this.cTr.props;
        if (this._length <= this.cArrPos) {
          this.duplicate();
        }
        var s = this.stack[this.cArrPos];
        for (e = 0; e < 16; e += 1) {
          s.transform[e] = i[e];
        }
        this.cArrPos += 1;
        var r = this.stack[this.cArrPos];
        r.opacity = s.opacity;
        r.fillStyle = s.fillStyle;
        r.strokeStyle = s.strokeStyle;
        r.lineWidth = s.lineWidth;
        r.lineCap = s.lineCap;
        r.lineJoin = s.lineJoin;
        r.miterLimit = s.miterLimit;
      };
      CVContextData.prototype.setOpacity = function (t) {
        this.stack[this.cArrPos].opacity = t;
      };
      CVContextData.prototype.setContext = function (t) {
        this.nativeContext = t;
      };
      CVContextData.prototype.fillStyle = function (t) {
        if (this.stack[this.cArrPos].fillStyle !== t) {
          this.currentFillStyle = t;
          this.stack[this.cArrPos].fillStyle = t;
        }
      };
      CVContextData.prototype.strokeStyle = function (t) {
        if (this.stack[this.cArrPos].strokeStyle !== t) {
          this.currentStrokeStyle = t;
          this.stack[this.cArrPos].strokeStyle = t;
        }
      };
      CVContextData.prototype.lineWidth = function (t) {
        if (this.stack[this.cArrPos].lineWidth !== t) {
          this.currentLineWidth = t;
          this.stack[this.cArrPos].lineWidth = t;
        }
      };
      CVContextData.prototype.lineCap = function (t) {
        if (this.stack[this.cArrPos].lineCap !== t) {
          this.currentLineCap = t;
          this.stack[this.cArrPos].lineCap = t;
        }
      };
      CVContextData.prototype.lineJoin = function (t) {
        if (this.stack[this.cArrPos].lineJoin !== t) {
          this.currentLineJoin = t;
          this.stack[this.cArrPos].lineJoin = t;
        }
      };
      CVContextData.prototype.miterLimit = function (t) {
        if (this.stack[this.cArrPos].miterLimit !== t) {
          this.currentMiterLimit = t;
          this.stack[this.cArrPos].miterLimit = t;
        }
      };
      CVContextData.prototype.transform = function (t) {
        this.transformMat.cloneFromProps(t);
        var e = this.cTr;
        this.transformMat.multiply(e);
        e.cloneFromProps(this.transformMat.props);
        var i = e.props;
        this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]);
      };
      CVContextData.prototype.opacity = function (t) {
        var e = this.stack[this.cArrPos].opacity;
        e *= t < 0 ? 0 : t;
        if (this.stack[this.cArrPos].opacity !== e) {
          if (this.currentOpacity !== t) {
            this.nativeContext.globalAlpha = t;
            this.currentOpacity = t;
          }
          this.stack[this.cArrPos].opacity = e;
        }
      };
      CVContextData.prototype.fill = function (t) {
        if (this.appliedFillStyle !== this.currentFillStyle) {
          this.appliedFillStyle = this.currentFillStyle;
          this.nativeContext.fillStyle = this.appliedFillStyle;
        }
        this.nativeContext.fill(t);
      };
      CVContextData.prototype.fillRect = function (t, e, i, s) {
        if (this.appliedFillStyle !== this.currentFillStyle) {
          this.appliedFillStyle = this.currentFillStyle;
          this.nativeContext.fillStyle = this.appliedFillStyle;
        }
        this.nativeContext.fillRect(t, e, i, s);
      };
      CVContextData.prototype.stroke = function () {
        if (this.appliedStrokeStyle !== this.currentStrokeStyle) {
          this.appliedStrokeStyle = this.currentStrokeStyle;
          this.nativeContext.strokeStyle = this.appliedStrokeStyle;
        }
        if (this.appliedLineWidth !== this.currentLineWidth) {
          this.appliedLineWidth = this.currentLineWidth;
          this.nativeContext.lineWidth = this.appliedLineWidth;
        }
        if (this.appliedLineCap !== this.currentLineCap) {
          this.appliedLineCap = this.currentLineCap;
          this.nativeContext.lineCap = this.appliedLineCap;
        }
        if (this.appliedLineJoin !== this.currentLineJoin) {
          this.appliedLineJoin = this.currentLineJoin;
          this.nativeContext.lineJoin = this.appliedLineJoin;
        }
        if (this.appliedMiterLimit !== this.currentMiterLimit) {
          this.appliedMiterLimit = this.currentMiterLimit;
          this.nativeContext.miterLimit = this.appliedMiterLimit;
        }
        this.nativeContext.stroke();
      };
      extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement);
      CVCompElement.prototype.renderInnerContent = function () {
        var t;
        var e = this.canvasContext;
        e.beginPath();
        e.moveTo(0, 0);
        e.lineTo(this.data.w, 0);
        e.lineTo(this.data.w, this.data.h);
        e.lineTo(0, this.data.h);
        e.lineTo(0, 0);
        e.clip();
        t = this.layers.length - 1;
        for (; t >= 0; t -= 1) {
          if (this.completeLayers || this.elements[t]) {
            this.elements[t].renderFrame();
          }
        }
      };
      CVCompElement.prototype.destroy = function () {
        var t;
        for (t = this.layers.length - 1; t >= 0; t -= 1) {
          if (this.elements[t]) {
            this.elements[t].destroy();
          }
        }
        this.layers = null;
        this.elements = null;
      };
      CVCompElement.prototype.createComp = function (t) {
        return new CVCompElement(t, this.globalData, this);
      };
      extendPrototype([CanvasRendererBase], CanvasRenderer);
      CanvasRenderer.prototype.createComp = function (t) {
        return new CVCompElement(t, this.globalData, this);
      };
      HBaseElement.prototype = {
        checkBlendMode: function () {},
        initRendererElement: function () {
          this.baseElement = createTag(this.data.tg || "div");
          if (this.data.hasMask) {
            this.svgElement = createNS("svg");
            this.layerElement = createNS("g");
            this.maskedElement = this.layerElement;
            this.svgElement.appendChild(this.layerElement);
            this.baseElement.appendChild(this.svgElement);
          } else {
            this.layerElement = this.baseElement;
          }
          styleDiv(this.baseElement);
        },
        createContainerElements: function () {
          this.renderableEffectsManager = new CVEffects(this);
          this.transformedElement = this.baseElement;
          this.maskedElement = this.layerElement;
          if (this.data.ln) {
            this.layerElement.setAttribute("id", this.data.ln);
          }
          if (this.data.cl) {
            this.layerElement.setAttribute("class", this.data.cl);
          }
          if (this.data.bm !== 0) {
            this.setBlendMode();
          }
        },
        renderElement: function () {
          var t = this.transformedElement ? this.transformedElement.style : {};
          if (this.finalTransform._matMdf) {
            var e = this.finalTransform.mat.toCSS();
            t.transform = e;
            t.webkitTransform = e;
          }
          if (this.finalTransform._opMdf) {
            t.opacity = this.finalTransform.mProp.o.v;
          }
        },
        renderFrame: function () {
          if (!this.data.hd && !this.hidden) {
            this.renderTransform();
            this.renderRenderable();
            this.renderElement();
            this.renderInnerContent();
            this._isFirstFrame &&= false;
          }
        },
        destroy: function () {
          this.layerElement = null;
          this.transformedElement = null;
          this.matteElement &&= null;
          if (this.maskManager) {
            this.maskManager.destroy();
            this.maskManager = null;
          }
        },
        createRenderableComponents: function () {
          this.maskManager = new MaskElement(this.data, this, this.globalData);
        },
        addEffects: function () {},
        setMatte: function () {}
      };
      HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement;
      HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy;
      HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
      extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement);
      HSolidElement.prototype.createContent = function () {
        var t;
        if (this.data.hasMask) {
          (t = createNS("rect")).setAttribute("width", this.data.sw);
          t.setAttribute("height", this.data.sh);
          t.setAttribute("fill", this.data.sc);
          this.svgElement.setAttribute("width", this.data.sw);
          this.svgElement.setAttribute("height", this.data.sh);
        } else {
          (t = createTag("div")).style.width = this.data.sw + "px";
          t.style.height = this.data.sh + "px";
          t.style.backgroundColor = this.data.sc;
        }
        this.layerElement.appendChild(t);
      };
      extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement);
      HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent;
      HShapeElement.prototype.createContent = function () {
        var t;
        this.baseElement.style.fontSize = 0;
        if (this.data.hasMask) {
          this.layerElement.appendChild(this.shapesContainer);
          t = this.svgElement;
        } else {
          t = createNS("svg");
          var e = this.comp.data ? this.comp.data : this.globalData.compSize;
          t.setAttribute("width", e.w);
          t.setAttribute("height", e.h);
          t.appendChild(this.shapesContainer);
          this.layerElement.appendChild(t);
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true);
        this.filterUniqueShapes();
        this.shapeCont = t;
      };
      HShapeElement.prototype.getTransformedPoint = function (t, e) {
        var i;
        var s = t.length;
        for (i = 0; i < s; i += 1) {
          e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
        }
        return e;
      };
      HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
        var i;
        var s;
        var r;
        var a;
        var n;
        var o = t.sh.v;
        var h = t.transformers;
        var l = o._length;
        if (!(l <= 1)) {
          for (i = 0; i < l - 1; i += 1) {
            s = this.getTransformedPoint(h, o.v[i]);
            r = this.getTransformedPoint(h, o.o[i]);
            a = this.getTransformedPoint(h, o.i[i + 1]);
            n = this.getTransformedPoint(h, o.v[i + 1]);
            this.checkBounds(s, r, a, n, e);
          }
          if (o.c) {
            s = this.getTransformedPoint(h, o.v[i]);
            r = this.getTransformedPoint(h, o.o[i]);
            a = this.getTransformedPoint(h, o.i[0]);
            n = this.getTransformedPoint(h, o.v[0]);
            this.checkBounds(s, r, a, n, e);
          }
        }
      };
      HShapeElement.prototype.checkBounds = function (t, e, i, s, r) {
        this.getBoundsOfCurve(t, e, i, s);
        var a = this.shapeBoundingBox;
        r.x = bmMin(a.left, r.x);
        r.xMax = bmMax(a.right, r.xMax);
        r.y = bmMin(a.top, r.y);
        r.yMax = bmMax(a.bottom, r.yMax);
      };
      HShapeElement.prototype.shapeBoundingBox = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      HShapeElement.prototype.tempBoundingBox = {
        x: 0,
        xMax: 0,
        y: 0,
        yMax: 0,
        width: 0,
        height: 0
      };
      HShapeElement.prototype.getBoundsOfCurve = function (t, e, i, s) {
        var r;
        var a;
        var n;
        var o;
        var h;
        var l;
        var p;
        var f = [[t[0], s[0]], [t[1], s[1]]];
        var c = 0;
        for (; c < 2; ++c) {
          a = t[c] * 6 - e[c] * 12 + i[c] * 6;
          r = t[c] * -3 + e[c] * 9 - i[c] * 9 + s[c] * 3;
          n = e[c] * 3 - t[c] * 3;
          a |= 0;
          n |= 0;
          if ((r |= 0) != 0 || a !== 0) {
            if (r === 0) {
              if ((o = -n / a) > 0 && o < 1) {
                f[c].push(this.calculateF(o, t, e, i, s, c));
              }
            } else if ((h = a * a - n * 4 * r) >= 0) {
              if ((l = (-a + bmSqrt(h)) / (r * 2)) > 0 && l < 1) {
                f[c].push(this.calculateF(l, t, e, i, s, c));
              }
              if ((p = (-a - bmSqrt(h)) / (r * 2)) > 0 && p < 1) {
                f[c].push(this.calculateF(p, t, e, i, s, c));
              }
            }
          }
        }
        this.shapeBoundingBox.left = bmMin.apply(null, f[0]);
        this.shapeBoundingBox.top = bmMin.apply(null, f[1]);
        this.shapeBoundingBox.right = bmMax.apply(null, f[0]);
        this.shapeBoundingBox.bottom = bmMax.apply(null, f[1]);
      };
      HShapeElement.prototype.calculateF = function (t, e, i, s, r, a) {
        return bmPow(1 - t, 3) * e[a] + bmPow(1 - t, 2) * 3 * t * i[a] + (1 - t) * 3 * bmPow(t, 2) * s[a] + bmPow(t, 3) * r[a];
      };
      HShapeElement.prototype.calculateBoundingBox = function (t, e) {
        var i;
        var s = t.length;
        for (i = 0; i < s; i += 1) {
          if (t[i] && t[i].sh) {
            this.calculateShapeBoundingBox(t[i], e);
          } else if (t[i] && t[i].it) {
            this.calculateBoundingBox(t[i].it, e);
          } else if (t[i] && t[i].style && t[i].w) {
            this.expandStrokeBoundingBox(t[i].w, e);
          }
        }
      };
      HShapeElement.prototype.expandStrokeBoundingBox = function (t, e) {
        var i = 0;
        if (t.keyframes) {
          for (var s = 0; s < t.keyframes.length; s += 1) {
            var r = t.keyframes[s].s;
            if (r > i) {
              i = r;
            }
          }
          i *= t.mult;
        } else {
          i = t.v * t.mult;
        }
        e.x -= i;
        e.xMax += i;
        e.y -= i;
        e.yMax += i;
      };
      HShapeElement.prototype.currentBoxContains = function (t) {
        return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
      };
      HShapeElement.prototype.renderInnerContent = function () {
        this._renderShapeFrame();
        if (!this.hidden && (this._isFirstFrame || this._mdf)) {
          var t = this.tempBoundingBox;
          var e = 999999;
          t.x = e;
          t.xMax = -e;
          t.y = e;
          t.yMax = -e;
          this.calculateBoundingBox(this.itemsData, t);
          t.width = t.xMax < t.x ? 0 : t.xMax - t.x;
          t.height = t.yMax < t.y ? 0 : t.yMax - t.y;
          if (!this.currentBoxContains(t)) {
            var i = false;
            if (this.currentBBox.w !== t.width) {
              this.currentBBox.w = t.width;
              this.shapeCont.setAttribute("width", t.width);
              i = true;
            }
            if (this.currentBBox.h !== t.height) {
              this.currentBBox.h = t.height;
              this.shapeCont.setAttribute("height", t.height);
              i = true;
            }
            if (i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
              this.currentBBox.w = t.width;
              this.currentBBox.h = t.height;
              this.currentBBox.x = t.x;
              this.currentBBox.y = t.y;
              this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              var s = this.shapeCont.style;
              var r = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              s.transform = r;
              s.webkitTransform = r;
            }
          }
        }
      };
      extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement);
      HTextElement.prototype.createContent = function () {
        this.isMasked = this.checkMasks();
        if (this.isMasked) {
          this.renderType = "svg";
          this.compW = this.comp.data.w;
          this.compH = this.comp.data.h;
          this.svgElement.setAttribute("width", this.compW);
          this.svgElement.setAttribute("height", this.compH);
          var t = createNS("g");
          this.maskedElement.appendChild(t);
          this.innerElem = t;
        } else {
          this.renderType = "html";
          this.innerElem = this.layerElement;
        }
        this.checkParenting();
      };
      HTextElement.prototype.buildNewText = function () {
        var t = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
        var e = this.innerElem.style;
        var i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
        e.fill = i;
        e.color = i;
        if (t.sc) {
          e.stroke = this.buildColor(t.sc);
          e.strokeWidth = t.sw + "px";
        }
        var s = this.globalData.fontManager.getFontByName(t.f);
        if (!this.globalData.fontManager.chars) {
          e.fontSize = t.finalSize + "px";
          e.lineHeight = t.finalSize + "px";
          if (s.fClass) {
            this.innerElem.className = s.fClass;
          } else {
            e.fontFamily = s.fFamily;
            var r = t.fWeight;
            var a = t.fStyle;
            e.fontStyle = a;
            e.fontWeight = r;
          }
        }
        var n = t.l;
        f = n.length;
        var o = this.mHelper;
        var h = "";
        var l = 0;
        for (p = 0; p < f; p += 1) {
          if (this.globalData.fontManager.chars) {
            if (this.textPaths[l]) {
              c = this.textPaths[l];
            } else {
              (c = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]);
              c.setAttribute("stroke-linejoin", lineJoinEnum[2]);
              c.setAttribute("stroke-miterlimit", "4");
            }
            if (!this.isMasked) {
              if (this.textSpans[l]) {
                u = (m = this.textSpans[l]).children[0];
              } else {
                (m = createTag("div")).style.lineHeight = 0;
                (u = createNS("svg")).appendChild(c);
                styleDiv(m);
              }
            }
          } else if (this.isMasked) {
            c = this.textPaths[l] ? this.textPaths[l] : createNS("text");
          } else if (this.textSpans[l]) {
            m = this.textSpans[l];
            c = this.textPaths[l];
          } else {
            styleDiv(m = createTag("span"));
            styleDiv(c = createTag("span"));
            m.appendChild(c);
          }
          if (this.globalData.fontManager.chars) {
            var p;
            var f;
            var c;
            var m;
            var u;
            var d;
            var g;
            var y = this.globalData.fontManager.getCharData(t.finalText[p], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
            g = y ? y.data : null;
            o.reset();
            if (g && g.shapes && g.shapes.length) {
              d = g.shapes[0].it;
              o.scale(t.finalSize / 100, t.finalSize / 100);
              h = this.createPathShape(o, d);
              c.setAttribute("d", h);
            }
            if (this.isMasked) {
              this.innerElem.appendChild(c);
            } else {
              this.innerElem.appendChild(m);
              if (g && g.shapes) {
                document.body.appendChild(u);
                var v = u.getBBox();
                u.setAttribute("width", v.width + 2);
                u.setAttribute("height", v.height + 2);
                u.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                var b = u.style;
                var x = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                b.transform = x;
                b.webkitTransform = x;
                n[p].yOffset = v.y - 1;
              } else {
                u.setAttribute("width", 1);
                u.setAttribute("height", 1);
              }
              m.appendChild(u);
            }
          } else {
            c.textContent = n[p].val;
            c.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
            if (this.isMasked) {
              this.innerElem.appendChild(c);
            } else {
              this.innerElem.appendChild(m);
              var _ = c.style;
              var k = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              _.transform = k;
              _.webkitTransform = k;
            }
          }
          if (this.isMasked) {
            this.textSpans[l] = c;
          } else {
            this.textSpans[l] = m;
          }
          this.textSpans[l].style.display = "block";
          this.textPaths[l] = c;
          l += 1;
        }
        while (l < this.textSpans.length) {
          this.textSpans[l].style.display = "none";
          l += 1;
        }
      };
      HTextElement.prototype.renderInnerContent = function () {
        this.validateText();
        if (this.data.singleShape) {
          if (!this._isFirstFrame && !this.lettersChangedFlag) {
            return;
          }
          if (this.isMasked && this.finalTransform._matMdf) {
            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH);
            t = this.svgElement.style;
            var t;
            var e;
            var i;
            var s;
            var r;
            var a;
            var n = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
            t.transform = n;
            t.webkitTransform = n;
          }
        }
        this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        if (this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
          var o = 0;
          var h = this.textAnimator.renderedLetters;
          var l = this.textProperty.currentData.l;
          e = 0;
          i = l.length;
          for (; e < i; e += 1) {
            if (l[e].n) {
              o += 1;
            } else {
              r = this.textSpans[e];
              a = this.textPaths[e];
              s = h[o];
              o += 1;
              if (s._mdf.m) {
                if (this.isMasked) {
                  r.setAttribute("transform", s.m);
                } else {
                  r.style.webkitTransform = s.m;
                  r.style.transform = s.m;
                }
              }
              r.style.opacity = s.o;
              if (s.sw && s._mdf.sw) {
                a.setAttribute("stroke-width", s.sw);
              }
              if (s.sc && s._mdf.sc) {
                a.setAttribute("stroke", s.sc);
              }
              if (s.fc && s._mdf.fc) {
                a.setAttribute("fill", s.fc);
                a.style.color = s.fc;
              }
            }
          }
          if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
            var p = this.innerElem.getBBox();
            if (this.currentBBox.w !== p.width) {
              this.currentBBox.w = p.width;
              this.svgElement.setAttribute("width", p.width);
            }
            if (this.currentBBox.h !== p.height) {
              this.currentBBox.h = p.height;
              this.svgElement.setAttribute("height", p.height);
            }
            var f = 1;
            if (this.currentBBox.w !== p.width + f * 2 || this.currentBBox.h !== p.height + f * 2 || this.currentBBox.x !== p.x - f || this.currentBBox.y !== p.y - f) {
              this.currentBBox.w = p.width + f * 2;
              this.currentBBox.h = p.height + f * 2;
              this.currentBBox.x = p.x - f;
              this.currentBBox.y = p.y - f;
              this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              t = this.svgElement.style;
              var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              t.transform = c;
              t.webkitTransform = c;
            }
          }
        }
      };
      extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement);
      HCameraElement.prototype.setup = function () {
        var t;
        var e;
        var i;
        var s;
        var r = this.comp.threeDElements.length;
        for (t = 0; t < r; t += 1) {
          if ((e = this.comp.threeDElements[t]).type === "3d") {
            i = e.perspectiveElem.style;
            s = e.container.style;
            var a = this.pe.v + "px";
            var n = "0px 0px 0px";
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            i.perspective = a;
            i.webkitPerspective = a;
            s.transformOrigin = n;
            s.mozTransformOrigin = n;
            s.webkitTransformOrigin = n;
            i.transform = o;
            i.webkitTransform = o;
          }
        }
      };
      HCameraElement.prototype.createElements = function () {};
      HCameraElement.prototype.hide = function () {};
      HCameraElement.prototype.renderFrame = function () {
        var t = this._isFirstFrame;
        if (this.hierarchy) {
          i = 0;
          s = this.hierarchy.length;
          for (; i < s; i += 1) {
            t = this.hierarchy[i].finalTransform.mProp._mdf || t;
          }
        }
        if (t || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
          this.mat.reset();
          if (this.hierarchy) {
            for (i = s = this.hierarchy.length - 1; i >= 0; i -= 1) {
              var e = this.hierarchy[i].finalTransform.mProp;
              this.mat.translate(-e.p.v[0], -e.p.v[1], e.p.v[2]);
              this.mat.rotateX(-e.or.v[0]).rotateY(-e.or.v[1]).rotateZ(e.or.v[2]);
              this.mat.rotateX(-e.rx.v).rotateY(-e.ry.v).rotateZ(e.rz.v);
              this.mat.scale(1 / e.s.v[0], 1 / e.s.v[1], 1 / e.s.v[2]);
              this.mat.translate(e.a.v[0], e.a.v[1], e.a.v[2]);
            }
          }
          if (this.p) {
            this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]);
          } else {
            this.mat.translate(-this.px.v, -this.py.v, this.pz.v);
          }
          if (this.a) {
            var i;
            var s;
            var r;
            var a = Math.sqrt(Math.pow((r = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]])[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2));
            var n = [r[0] / a, r[1] / a, r[2] / a];
            var o = Math.sqrt(n[2] * n[2] + n[0] * n[0]);
            var h = Math.atan2(n[1], o);
            var l = Math.atan2(n[0], -n[2]);
            this.mat.rotateY(l).rotateX(-h);
          }
          this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
          this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
          this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0);
          this.mat.translate(0, 0, this.pe.v);
          var p = !this._prevMat.equals(this.mat);
          if ((p || this.pe._mdf) && this.comp.threeDElements) {
            i = 0;
            s = this.comp.threeDElements.length;
            for (; i < s; i += 1) {
              if ((f = this.comp.threeDElements[i]).type === "3d") {
                if (p) {
                  var f;
                  var c;
                  var m;
                  var u = this.mat.toCSS();
                  (m = f.container.style).transform = u;
                  m.webkitTransform = u;
                }
                if (this.pe._mdf) {
                  (c = f.perspectiveElem.style).perspective = this.pe.v + "px";
                  c.webkitPerspective = this.pe.v + "px";
                }
              }
            }
            this.mat.clone(this._prevMat);
          }
        }
        this._isFirstFrame = false;
      };
      HCameraElement.prototype.prepareFrame = function (t) {
        this.prepareProperties(t, true);
      };
      HCameraElement.prototype.destroy = function () {};
      HCameraElement.prototype.getBaseElement = function () {
        return null;
      };
      extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement);
      HImageElement.prototype.createContent = function () {
        var t = this.globalData.getAssetsPath(this.assetData);
        var e = new Image();
        if (this.data.hasMask) {
          this.imageElem = createNS("image");
          this.imageElem.setAttribute("width", this.assetData.w + "px");
          this.imageElem.setAttribute("height", this.assetData.h + "px");
          this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t);
          this.layerElement.appendChild(this.imageElem);
          this.baseElement.setAttribute("width", this.assetData.w);
          this.baseElement.setAttribute("height", this.assetData.h);
        } else {
          this.layerElement.appendChild(e);
        }
        e.crossOrigin = "anonymous";
        e.src = t;
        if (this.data.ln) {
          this.baseElement.setAttribute("id", this.data.ln);
        }
      };
      extendPrototype([BaseRenderer], HybridRendererBase);
      HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem;
      HybridRendererBase.prototype.checkPendingElements = function () {
        while (this.pendingElements.length) {
          this.pendingElements.pop().checkParenting();
        }
      };
      HybridRendererBase.prototype.appendElementInPos = function (t, e) {
        var i = t.getBaseElement();
        if (i) {
          var s = this.layers[e];
          if (s.ddd && this.supports3d) {
            this.addTo3dContainer(i, e);
          } else if (this.threeDElements) {
            this.addTo3dContainer(i, e);
          } else {
            var r;
            var a;
            var n = 0;
            while (n < e) {
              if (this.elements[n] && this.elements[n] !== true && this.elements[n].getBaseElement) {
                a = this.elements[n];
                r = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || r;
              }
              n += 1;
            }
            if (r) {
              if (!s.ddd || !this.supports3d) {
                this.layerElement.insertBefore(i, r);
              }
            } else if (!s.ddd || !this.supports3d) {
              this.layerElement.appendChild(i);
            }
          }
        }
      };
      HybridRendererBase.prototype.createShape = function (t) {
        if (this.supports3d) {
          return new HShapeElement(t, this.globalData, this);
        } else {
          return new SVGShapeElement(t, this.globalData, this);
        }
      };
      HybridRendererBase.prototype.createText = function (t) {
        if (this.supports3d) {
          return new HTextElement(t, this.globalData, this);
        } else {
          return new SVGTextLottieElement(t, this.globalData, this);
        }
      };
      HybridRendererBase.prototype.createCamera = function (t) {
        this.camera = new HCameraElement(t, this.globalData, this);
        return this.camera;
      };
      HybridRendererBase.prototype.createImage = function (t) {
        if (this.supports3d) {
          return new HImageElement(t, this.globalData, this);
        } else {
          return new IImageElement(t, this.globalData, this);
        }
      };
      HybridRendererBase.prototype.createSolid = function (t) {
        if (this.supports3d) {
          return new HSolidElement(t, this.globalData, this);
        } else {
          return new ISolidElement(t, this.globalData, this);
        }
      };
      HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;
      HybridRendererBase.prototype.getThreeDContainerByPos = function (t) {
        var e = 0;
        var i = this.threeDElements.length;
        while (e < i) {
          if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) {
            return this.threeDElements[e].perspectiveElem;
          }
          e += 1;
        }
        return null;
      };
      HybridRendererBase.prototype.createThreeDContainer = function (t, e) {
        var i;
        var s;
        var r = createTag("div");
        styleDiv(r);
        var a = createTag("div");
        styleDiv(a);
        if (e === "3d") {
          (i = r.style).width = this.globalData.compSize.w + "px";
          i.height = this.globalData.compSize.h + "px";
          var n = "50% 50%";
          i.webkitTransformOrigin = n;
          i.mozTransformOrigin = n;
          i.transformOrigin = n;
          var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          (s = a.style).transform = o;
          s.webkitTransform = o;
        }
        r.appendChild(a);
        var h = {
          container: a,
          perspectiveElem: r,
          startPos: t,
          endPos: t,
          type: e
        };
        this.threeDElements.push(h);
        return h;
      };
      HybridRendererBase.prototype.build3dContainers = function () {
        var t;
        var e;
        var i = this.layers.length;
        var s = "";
        for (t = 0; t < i; t += 1) {
          if (this.layers[t].ddd && this.layers[t].ty !== 3) {
            if (s !== "3d") {
              s = "3d";
              e = this.createThreeDContainer(t, "3d");
            }
          } else if (s !== "2d") {
            s = "2d";
            e = this.createThreeDContainer(t, "2d");
          }
          e.endPos = Math.max(e.endPos, t);
        }
        for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) {
          this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
        }
      };
      HybridRendererBase.prototype.addTo3dContainer = function (t, e) {
        var i = 0;
        var s = this.threeDElements.length;
        while (i < s) {
          if (e <= this.threeDElements[i].endPos) {
            var r;
            var a = this.threeDElements[i].startPos;
            while (a < e) {
              if (this.elements[a] && this.elements[a].getBaseElement) {
                r = this.elements[a].getBaseElement();
              }
              a += 1;
            }
            if (r) {
              this.threeDElements[i].container.insertBefore(t, r);
            } else {
              this.threeDElements[i].container.appendChild(t);
            }
            break;
          }
          i += 1;
        }
      };
      HybridRendererBase.prototype.configAnimation = function (t) {
        var e = createTag("div");
        var i = this.animationItem.wrapper;
        var s = e.style;
        s.width = t.w + "px";
        s.height = t.h + "px";
        this.resizerElem = e;
        styleDiv(e);
        s.transformStyle = "flat";
        s.mozTransformStyle = "flat";
        s.webkitTransformStyle = "flat";
        if (this.renderConfig.className) {
          e.setAttribute("class", this.renderConfig.className);
        }
        i.appendChild(e);
        s.overflow = "hidden";
        var r = createNS("svg");
        r.setAttribute("width", "1");
        r.setAttribute("height", "1");
        styleDiv(r);
        this.resizerElem.appendChild(r);
        var a = createNS("defs");
        r.appendChild(a);
        this.data = t;
        this.setupGlobalData(t, r);
        this.globalData.defs = a;
        this.layers = t.layers;
        this.layerElement = this.resizerElem;
        this.build3dContainers();
        this.updateContainerSize();
      };
      HybridRendererBase.prototype.destroy = function () {
        if (this.animationItem.wrapper) {
          this.animationItem.wrapper.innerText = "";
        }
        this.animationItem.container = null;
        this.globalData.defs = null;
        var t;
        var e = this.layers ? this.layers.length : 0;
        for (t = 0; t < e; t += 1) {
          if (this.elements[t] && this.elements[t].destroy) {
            this.elements[t].destroy();
          }
        }
        this.elements.length = 0;
        this.destroyed = true;
        this.animationItem = null;
      };
      HybridRendererBase.prototype.updateContainerSize = function () {
        var t;
        var e;
        var i;
        var s;
        var r = this.animationItem.wrapper.offsetWidth;
        var a = this.animationItem.wrapper.offsetHeight;
        var n = r / a;
        if (this.globalData.compSize.w / this.globalData.compSize.h > n) {
          t = r / this.globalData.compSize.w;
          e = r / this.globalData.compSize.w;
          i = 0;
          s = (a - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2;
        } else {
          t = a / this.globalData.compSize.h;
          e = a / this.globalData.compSize.h;
          i = (r - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2;
          s = 0;
        }
        var o = this.resizerElem.style;
        o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + s + ",0,1)";
        o.transform = o.webkitTransform;
      };
      HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame;
      HybridRendererBase.prototype.hide = function () {
        this.resizerElem.style.display = "none";
      };
      HybridRendererBase.prototype.show = function () {
        this.resizerElem.style.display = "block";
      };
      HybridRendererBase.prototype.initItems = function () {
        this.buildAllItems();
        if (this.camera) {
          this.camera.setup();
        } else {
          var t;
          var e = this.globalData.compSize.w;
          var i = this.globalData.compSize.h;
          var s = this.threeDElements.length;
          for (t = 0; t < s; t += 1) {
            var r = this.threeDElements[t].perspectiveElem.style;
            r.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px";
            r.perspective = r.webkitPerspective;
          }
        }
      };
      HybridRendererBase.prototype.searchExtraCompositions = function (t) {
        var e;
        var i = t.length;
        var s = createTag("div");
        for (e = 0; e < i; e += 1) {
          if (t[e].xt) {
            var r = this.createComp(t[e], s, this.globalData.comp, null);
            r.initExpressions();
            this.globalData.projectInterface.registerComposition(r);
          }
        }
      };
      extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement);
      HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements;
      HCompElement.prototype.createContainerElements = function () {
        this._createBaseContainerElements();
        if (this.data.hasMask) {
          this.svgElement.setAttribute("width", this.data.w);
          this.svgElement.setAttribute("height", this.data.h);
          this.transformedElement = this.baseElement;
        } else {
          this.transformedElement = this.layerElement;
        }
      };
      HCompElement.prototype.addTo3dContainer = function (t, e) {
        var i;
        var s = 0;
        while (s < e) {
          if (this.elements[s] && this.elements[s].getBaseElement) {
            i = this.elements[s].getBaseElement();
          }
          s += 1;
        }
        if (i) {
          this.layerElement.insertBefore(t, i);
        } else {
          this.layerElement.appendChild(t);
        }
      };
      HCompElement.prototype.createComp = function (t) {
        if (this.supports3d) {
          return new HCompElement(t, this.globalData, this);
        } else {
          return new SVGCompElement(t, this.globalData, this);
        }
      };
      extendPrototype([HybridRendererBase], HybridRenderer);
      HybridRenderer.prototype.createComp = function (t) {
        if (this.supports3d) {
          return new HCompElement(t, this.globalData, this);
        } else {
          return new SVGCompElement(t, this.globalData, this);
        }
      };
      var CompExpressionInterface = function () {
        return function (t) {
          function e(e) {
            var i = 0;
            var s = t.layers.length;
            while (i < s) {
              if (t.layers[i].nm === e || t.layers[i].ind === e) {
                return t.elements[i].layerInterface;
              }
              i += 1;
            }
            return null;
          }
          Object.defineProperty(e, "_name", {
            value: t.data.nm
          });
          e.layer = e;
          e.pixelAspect = 1;
          e.height = t.data.h || t.globalData.compSize.h;
          e.width = t.data.w || t.globalData.compSize.w;
          e.pixelAspect = 1;
          e.frameDuration = 1 / t.globalData.frameRate;
          e.displayStartTime = 0;
          e.numLayers = t.layers.length;
          return e;
        };
      }();
      function _typeof$2(t) {
        return (_typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t;
        } : function (t) {
          if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof t;
          }
        })(t);
      }
      function seedRandom(t, e) {
        var i;
        var s = this;
        var r = 256;
        var a = 6;
        var n = 52;
        var o = "random";
        var h = e.pow(r, a);
        var l = e.pow(2, n);
        var p = l * 2;
        var f = r - 1;
        function c(i, s, n) {
          var f = [];
          var c = g(d((s = s === true ? {
            entropy: true
          } : s || {}).entropy ? [i, v(t)] : i === null ? y() : i, 3), f);
          var b = new m(f);
          function x() {
            var t = b.g(a);
            var e = h;
            var i = 0;
            while (t < l) {
              t = (t + i) * r;
              e *= r;
              i = b.g(1);
            }
            while (t >= p) {
              t /= 2;
              e /= 2;
              i >>>= 1;
            }
            return (t + i) / e;
          }
          x.int32 = function () {
            return b.g(4) | 0;
          };
          x.quick = function () {
            return b.g(4) / 4294967296;
          };
          x.double = x;
          g(v(b.S), t);
          return (s.pass || n || function (t, i, s, r) {
            if (r) {
              if (r.S) {
                u(r, b);
              }
              t.state = function () {
                return u(b, {});
              };
            }
            if (s) {
              e[o] = t;
              return i;
            } else {
              return t;
            }
          })(x, c, "global" in s ? s.global : this == e, s.state);
        }
        function m(t) {
          var e;
          var i = t.length;
          var s = this;
          var a = 0;
          var n = s.i = s.j = 0;
          var o = s.S = [];
          for (i || (t = [i++]); a < r;) {
            o[a] = a++;
          }
          for (a = 0; a < r; a++) {
            o[a] = o[n = f & n + t[a % i] + (e = o[a])];
            o[n] = e;
          }
          s.g = function (t) {
            var e;
            var i = 0;
            var a = s.i;
            var n = s.j;
            var o = s.S;
            while (t--) {
              e = o[a = f & a + 1];
              i = i * r + o[f & (o[a] = o[n = f & n + e]) + (o[n] = e)];
            }
            s.i = a;
            s.j = n;
            return i;
          };
        }
        function u(t, e) {
          e.i = t.i;
          e.j = t.j;
          e.S = t.S.slice();
          return e;
        }
        function d(t, e) {
          var i;
          var s = [];
          var r = _typeof$2(t);
          if (e && r == "object") {
            for (i in t) {
              try {
                s.push(d(t[i], e - 1));
              } catch (t) {}
            }
          }
          if (s.length) {
            return s;
          } else if (r == "string") {
            return t;
          } else {
            return t + "\0";
          }
        }
        function g(t, e) {
          var i;
          var s = t + "";
          var r = 0;
          while (r < s.length) {
            e[f & r] = f & (i ^= e[f & r] * 19) + s.charCodeAt(r++);
          }
          return v(e);
        }
        function y() {
          try {
            if (i) {
              return v(i.randomBytes(r));
            }
            var e = new Uint8Array(r);
            (s.crypto || s.msCrypto).getRandomValues(e);
            return v(e);
          } catch (e) {
            var a = s.navigator;
            var n = a && a.plugins;
            return [+new Date(), s, n, s.screen, v(t)];
          }
        }
        function v(t) {
          return String.fromCharCode.apply(0, t);
        }
        e["seed" + o] = c;
        g(e.random(), t);
      }
      function initialize$2(t) {
        seedRandom([], t);
      }
      var propTypes = {
        SHAPE: "shape"
      };
      function _typeof$1(t) {
        return (_typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t;
        } : function (t) {
          if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof t;
          }
        })(t);
      }
      var ExpressionManager = function () {
        var ob = {};
        var Math = BMMath;
        var window = null;
        var document = null;
        var XMLHttpRequest = null;
        var fetch = null;
        var frames = null;
        var _lottieGlobal = {};
        function resetFrame() {
          _lottieGlobal = {};
        }
        function $bm_isInstanceOfArray(t) {
          return t.constructor === Array || t.constructor === Float32Array;
        }
        function isNumerable(t, e) {
          return t === "number" || e instanceof Number || t === "boolean" || t === "string";
        }
        function $bm_neg(t) {
          var e = _typeof$1(t);
          if (e === "number" || t instanceof Number || e === "boolean") {
            return -t;
          }
          if ($bm_isInstanceOfArray(t)) {
            var i;
            var s = t.length;
            var r = [];
            for (i = 0; i < s; i += 1) {
              r[i] = -t[i];
            }
            return r;
          }
          if (t.propType) {
            return t.v;
          } else {
            return -t;
          }
        }
        initialize$2(BMMath);
        var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get;
        var easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get;
        var easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
        function sum(t, e) {
          var i = _typeof$1(t);
          var s = _typeof$1(e);
          if (isNumerable(i, t) && isNumerable(s, e) || i === "string" || s === "string") {
            return t + e;
          }
          if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
            t = t.slice(0);
            t[0] += e;
            return t;
          }
          if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) {
            (e = e.slice(0))[0] = t + e[0];
            return e;
          }
          if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
            var r = 0;
            var a = t.length;
            var n = e.length;
            var o = [];
            while (r < a || r < n) {
              if ((typeof t[r] == "number" || t[r] instanceof Number) && (typeof e[r] == "number" || e[r] instanceof Number)) {
                o[r] = t[r] + e[r];
              } else {
                o[r] = e[r] === undefined ? t[r] : t[r] || e[r];
              }
              r += 1;
            }
            return o;
          }
          return 0;
        }
        var add = sum;
        function sub(t, e) {
          var i = _typeof$1(t);
          var s = _typeof$1(e);
          if (isNumerable(i, t) && isNumerable(s, e)) {
            if (i === "string") {
              t = parseInt(t, 10);
            }
            if (s === "string") {
              e = parseInt(e, 10);
            }
            return t - e;
          }
          if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
            t = t.slice(0);
            t[0] -= e;
            return t;
          }
          if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) {
            (e = e.slice(0))[0] = t - e[0];
            return e;
          }
          if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
            var r = 0;
            var a = t.length;
            var n = e.length;
            var o = [];
            while (r < a || r < n) {
              if ((typeof t[r] == "number" || t[r] instanceof Number) && (typeof e[r] == "number" || e[r] instanceof Number)) {
                o[r] = t[r] - e[r];
              } else {
                o[r] = e[r] === undefined ? t[r] : t[r] || e[r];
              }
              r += 1;
            }
            return o;
          }
          return 0;
        }
        function mul(t, e) {
          var i;
          var s;
          var r;
          var a = _typeof$1(t);
          var n = _typeof$1(e);
          if (isNumerable(a, t) && isNumerable(n, e)) {
            return t * e;
          }
          if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
            s = 0;
            i = createTypedArray("float32", r = t.length);
            for (; s < r; s += 1) {
              i[s] = t[s] * e;
            }
            return i;
          }
          if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
            s = 0;
            i = createTypedArray("float32", r = e.length);
            for (; s < r; s += 1) {
              i[s] = t * e[s];
            }
            return i;
          }
          return 0;
        }
        function div(t, e) {
          var i;
          var s;
          var r;
          var a = _typeof$1(t);
          var n = _typeof$1(e);
          if (isNumerable(a, t) && isNumerable(n, e)) {
            return t / e;
          }
          if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
            s = 0;
            i = createTypedArray("float32", r = t.length);
            for (; s < r; s += 1) {
              i[s] = t[s] / e;
            }
            return i;
          }
          if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
            s = 0;
            i = createTypedArray("float32", r = e.length);
            for (; s < r; s += 1) {
              i[s] = t / e[s];
            }
            return i;
          }
          return 0;
        }
        function mod(t, e) {
          if (typeof t == "string") {
            t = parseInt(t, 10);
          }
          if (typeof e == "string") {
            e = parseInt(e, 10);
          }
          return t % e;
        }
        var $bm_sum = sum;
        var $bm_sub = sub;
        var $bm_mul = mul;
        var $bm_div = div;
        var $bm_mod = mod;
        function clamp(t, e, i) {
          if (e > i) {
            var s = i;
            i = e;
            e = s;
          }
          return Math.min(Math.max(t, e), i);
        }
        function radiansToDegrees(t) {
          return t / degToRads;
        }
        var radians_to_degrees = radiansToDegrees;
        function degreesToRadians(t) {
          return t * degToRads;
        }
        var degrees_to_radians = radiansToDegrees;
        var helperLengthArray = [0, 0, 0, 0, 0, 0];
        function length(t, e) {
          if (typeof t == "number" || t instanceof Number) {
            e = e || 0;
            return Math.abs(t - e);
          }
          e ||= helperLengthArray;
          var i;
          var s = Math.min(t.length, e.length);
          var r = 0;
          for (i = 0; i < s; i += 1) {
            r += Math.pow(e[i] - t[i], 2);
          }
          return Math.sqrt(r);
        }
        function normalize(t) {
          return div(t, length(t));
        }
        function rgbToHsl(t) {
          var e;
          var i;
          var s = t[0];
          var r = t[1];
          var a = t[2];
          var n = Math.max(s, r, a);
          var o = Math.min(s, r, a);
          var h = (n + o) / 2;
          if (n === o) {
            e = 0;
            i = 0;
          } else {
            var l = n - o;
            i = h > 0.5 ? l / (2 - n - o) : l / (n + o);
            switch (n) {
              case s:
                e = (r - a) / l + (r < a) * 6;
                break;
              case r:
                e = (a - s) / l + 2;
                break;
              case a:
                e = (s - r) / l + 4;
            }
            e /= 6;
          }
          return [e, i, h, t[3]];
        }
        function hue2rgb(t, e, i) {
          if (i < 0) {
            i += 1;
          }
          if (i > 1) {
            i -= 1;
          }
          if (i < 1 / 6) {
            return t + (e - t) * 6 * i;
          } else if (i < 0.5) {
            return e;
          } else if (i < 2 / 3) {
            return t + (e - t) * (2 / 3 - i) * 6;
          } else {
            return t;
          }
        }
        function hslToRgb(t) {
          var e;
          var i;
          var s;
          var r = t[0];
          var a = t[1];
          var n = t[2];
          if (a === 0) {
            e = n;
            s = n;
            i = n;
          } else {
            var o = n < 0.5 ? n * (1 + a) : n + a - n * a;
            var h = n * 2 - o;
            e = hue2rgb(h, o, r + 1 / 3);
            i = hue2rgb(h, o, r);
            s = hue2rgb(h, o, r - 1 / 3);
          }
          return [e, i, s, t[3]];
        }
        function linear(t, e, i, s, r) {
          if (s === undefined || r === undefined) {
            s = e;
            r = i;
            e = 0;
            i = 1;
          }
          if (i < e) {
            var a;
            var n = i;
            i = e;
            e = n;
          }
          if (t <= e) {
            return s;
          }
          if (t >= i) {
            return r;
          }
          var o = i === e ? 0 : (t - e) / (i - e);
          if (!s.length) {
            return s + (r - s) * o;
          }
          var h = s.length;
          var l = createTypedArray("float32", h);
          for (a = 0; a < h; a += 1) {
            l[a] = s[a] + (r[a] - s[a]) * o;
          }
          return l;
        }
        function random(t, e) {
          if (e === undefined) {
            if (t === undefined) {
              t = 0;
              e = 1;
            } else {
              e = t;
              t = undefined;
            }
          }
          if (e.length) {
            var i;
            var s = e.length;
            t ||= createTypedArray("float32", s);
            var r = createTypedArray("float32", s);
            var a = BMMath.random();
            for (i = 0; i < s; i += 1) {
              r[i] = t[i] + a * (e[i] - t[i]);
            }
            return r;
          }
          if (t === undefined) {
            t = 0;
          }
          return t + BMMath.random() * (e - t);
        }
        function createPath(t, e, i, s) {
          var r;
          var a;
          var n;
          var o = t.length;
          var h = shapePool.newElement();
          h.setPathData(!!s, o);
          var l = [0, 0];
          for (r = 0; r < o; r += 1) {
            a = e && e[r] ? e[r] : l;
            n = i && i[r] ? i[r] : l;
            h.setTripleAt(t[r][0], t[r][1], n[0] + t[r][0], n[1] + t[r][1], a[0] + t[r][0], a[1] + t[r][1], r, true);
          }
          return h;
        }
        function initiateExpression(elem, data, property) {
          function noOp(t) {
            return t;
          }
          if (!elem.globalData.renderConfig.runExpressions) {
            return noOp;
          }
          var transform;
          var $bm_transform;
          var content;
          var effect;
          var loopIn;
          var loop_in;
          var loopOut;
          var loop_out;
          var smooth;
          var toWorld;
          var fromWorld;
          var fromComp;
          var toComp;
          var fromCompToSurface;
          var position;
          var rotation;
          var anchorPoint;
          var scale;
          var thisLayer;
          var thisComp;
          var mask;
          var valueAtTime;
          var velocityAtTime;
          var scoped_bm_rt;
          var time;
          var velocity;
          var value;
          var text;
          var textIndex;
          var textTotal;
          var selectorValue;
          var parent;
          var val = data.x;
          var needsVelocity = /velocity(?![\w\d])/.test(val);
          var _needsRandom = val.indexOf("random") !== -1;
          var elemType = elem.data.ty;
          var thisProperty = property;
          thisProperty.valueAtTime = thisProperty.getValueAtTime;
          Object.defineProperty(thisProperty, "value", {
            get: function () {
              return thisProperty.v;
            }
          });
          elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
          elem.comp.displayStartTime = 0;
          var inPoint = elem.data.ip / elem.comp.globalData.frameRate;
          var outPoint = elem.data.op / elem.comp.globalData.frameRate;
          var width = elem.data.sw ? elem.data.sw : 0;
          var height = elem.data.sh ? elem.data.sh : 0;
          var name = elem.data.nm;
          var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0];
          var numKeys = property.kf ? data.k.length : 0;
          var active = !this.data || this.data.hd !== true;
          var wiggle = function (t, e) {
            var i;
            var s;
            var r = this.pv.length ? this.pv.length : 1;
            var a = createTypedArray("float32", r);
            t = 5;
            var n = Math.floor(time * t);
            i = 0;
            s = 0;
            while (i < n) {
              for (s = 0; s < r; s += 1) {
                a[s] += -e + e * 2 * BMMath.random();
              }
              i += 1;
            }
            var o = time * t;
            var h = o - Math.floor(o);
            var l = createTypedArray("float32", r);
            if (r > 1) {
              for (s = 0; s < r; s += 1) {
                l[s] = this.pv[s] + a[s] + (-e + e * 2 * BMMath.random()) * h;
              }
              return l;
            }
            return this.pv + a[0] + (-e + e * 2 * BMMath.random()) * h;
          }.bind(this);
          function loopInDuration(t, e) {
            return loopIn(t, e, true);
          }
          function loopOutDuration(t, e) {
            return loopOut(t, e, true);
          }
          if (thisProperty.loopIn) {
            loop_in = loopIn = thisProperty.loopIn.bind(thisProperty);
          }
          if (thisProperty.loopOut) {
            loop_out = loopOut = thisProperty.loopOut.bind(thisProperty);
          }
          if (thisProperty.smooth) {
            smooth = thisProperty.smooth.bind(thisProperty);
          }
          if (this.getValueAtTime) {
            valueAtTime = this.getValueAtTime.bind(this);
          }
          if (this.getVelocityAtTime) {
            velocityAtTime = this.getVelocityAtTime.bind(this);
          }
          var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
          function lookAt(t, e) {
            var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
            var s = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
            return [-Math.atan2(i[1], i[2]) / degToRads, s, 0];
          }
          function easeOut(t, e, i, s, r) {
            return applyEase(easeOutBez, t, e, i, s, r);
          }
          function easeIn(t, e, i, s, r) {
            return applyEase(easeInBez, t, e, i, s, r);
          }
          function ease(t, e, i, s, r) {
            return applyEase(easeInOutBez, t, e, i, s, r);
          }
          function applyEase(t, e, i, s, r, a) {
            if (r === undefined) {
              r = i;
              a = s;
            } else {
              e = (e - i) / (s - i);
            }
            if (e > 1) {
              e = 1;
            } else if (e < 0) {
              e = 0;
            }
            var n = t(e);
            if ($bm_isInstanceOfArray(r)) {
              var o;
              var h = r.length;
              var l = createTypedArray("float32", h);
              for (o = 0; o < h; o += 1) {
                l[o] = (a[o] - r[o]) * n + r[o];
              }
              return l;
            }
            return (a - r) * n + r;
          }
          function nearestKey(t) {
            var e;
            var i;
            var s;
            var r = data.k.length;
            if (data.k.length && typeof data.k[0] != "number") {
              i = -1;
              if ((t *= elem.comp.globalData.frameRate) < data.k[0].t) {
                i = 1;
                s = data.k[0].t;
              } else {
                for (e = 0; e < r - 1; e += 1) {
                  if (t === data.k[e].t) {
                    i = e + 1;
                    s = data.k[e].t;
                    break;
                  }
                  if (t > data.k[e].t && t < data.k[e + 1].t) {
                    if (t - data.k[e].t > data.k[e + 1].t - t) {
                      i = e + 2;
                      s = data.k[e + 1].t;
                    } else {
                      i = e + 1;
                      s = data.k[e].t;
                    }
                    break;
                  }
                }
                if (i === -1) {
                  i = e + 1;
                  s = data.k[e].t;
                }
              }
            } else {
              i = 0;
              s = 0;
            }
            var a = {
              index: i,
              time: s / elem.comp.globalData.frameRate
            };
            return a;
          }
          function key(t) {
            if (!data.k.length || typeof data.k[0] == "number") {
              throw Error("The property has no keyframe at index " + t);
            }
            t -= 1;
            e = {
              time: data.k[t].t / elem.comp.globalData.frameRate,
              value: []
            };
            var e;
            var i;
            var s;
            var r = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
            i = 0;
            s = r.length;
            for (; i < s; i += 1) {
              e[i] = r[i];
              e.value[i] = r[i];
            }
            return e;
          }
          function framesToTime(t, e) {
            e ||= elem.comp.globalData.frameRate;
            return t / e;
          }
          function timeToFrames(t, e) {
            if (!t && t !== 0) {
              t = time;
            }
            e ||= elem.comp.globalData.frameRate;
            return t * e;
          }
          function seedRandom(t) {
            BMMath.seedrandom(randSeed + t);
          }
          function sourceRectAtTime() {
            return elem.sourceRectAtTime();
          }
          function substring(t, e) {
            if (typeof value == "string") {
              if (e === undefined) {
                return value.substring(t);
              } else {
                return value.substring(t, e);
              }
            } else {
              return "";
            }
          }
          function substr(t, e) {
            if (typeof value == "string") {
              if (e === undefined) {
                return value.substr(t);
              } else {
                return value.substr(t, e);
              }
            } else {
              return "";
            }
          }
          function posterizeTime(t) {
            time = t === 0 ? 0 : Math.floor(time * t) / t;
            value = valueAtTime(time);
          }
          var index = elem.data.ind;
          var hasParent = !!elem.hierarchy && !!elem.hierarchy.length;
          var randSeed = Math.floor(Math.random() * 1000000);
          var globalData = elem.globalData;
          function executeExpression(t) {
            value = t;
            if (this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector") {
              return value;
            } else {
              if (this.propType === "textSelector") {
                textIndex = this.textIndex;
                textTotal = this.textTotal;
                selectorValue = this.selectorValue;
              }
              if (!thisLayer) {
                text = elem.layerInterface.text;
                thisLayer = elem.layerInterface;
                thisComp = elem.comp.compInterface;
                toWorld = thisLayer.toWorld.bind(thisLayer);
                fromWorld = thisLayer.fromWorld.bind(thisLayer);
                fromComp = thisLayer.fromComp.bind(thisLayer);
                toComp = thisLayer.toComp.bind(thisLayer);
                mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null;
                fromCompToSurface = fromComp;
              }
              if (!transform) {
                $bm_transform = transform = elem.layerInterface("ADBE Transform Group");
                if (transform) {
                  anchorPoint = transform.anchorPoint;
                }
              }
              if (elemType === 4 && !content) {
                content = thisLayer("ADBE Root Vectors Group");
              }
              effect ||= thisLayer(4);
              if ((hasParent = !!elem.hierarchy && !!elem.hierarchy.length) && !parent) {
                parent = elem.hierarchy[0].layerInterface;
              }
              time = this.comp.renderedFrame / this.comp.globalData.frameRate;
              if (_needsRandom) {
                seedRandom(randSeed + time);
              }
              if (needsVelocity) {
                velocity = velocityAtTime(time);
              }
              expression_function();
              this.frameExpressionId = elem.globalData.frameId;
              return scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt;
            }
          }
          executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData];
          return executeExpression;
        }
        ob.initiateExpression = initiateExpression;
        ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal];
        ob.resetFrame = resetFrame;
        return ob;
      }();
      var Expressions = function () {
        var t = {};
        function e(t) {
          var e = 0;
          var i = [];
          function s() {
            e += 1;
          }
          function r() {
            if ((e -= 1) == 0) {
              n();
            }
          }
          function a(t) {
            if (i.indexOf(t) === -1) {
              i.push(t);
            }
          }
          function n() {
            var t;
            var e = i.length;
            for (t = 0; t < e; t += 1) {
              i[t].release();
            }
            i.length = 0;
          }
          t.renderer.compInterface = CompExpressionInterface(t.renderer);
          t.renderer.globalData.projectInterface.registerComposition(t.renderer);
          t.renderer.globalData.pushExpression = s;
          t.renderer.globalData.popExpression = r;
          t.renderer.globalData.registerExpressionProperty = a;
        }
        t.initExpressions = e;
        t.resetFrame = ExpressionManager.resetFrame;
        return t;
      }();
      var MaskManagerInterface = function () {
        function t(t, e) {
          this._mask = t;
          this._data = e;
        }
        Object.defineProperty(t.prototype, "maskPath", {
          get: function () {
            if (this._mask.prop.k) {
              this._mask.prop.getValue();
            }
            return this._mask.prop;
          }
        });
        Object.defineProperty(t.prototype, "maskOpacity", {
          get: function () {
            if (this._mask.op.k) {
              this._mask.op.getValue();
            }
            return this._mask.op.v * 100;
          }
        });
        return function (e) {
          var i;
          var s = createSizedArray(e.viewData.length);
          var r = e.viewData.length;
          for (i = 0; i < r; i += 1) {
            s[i] = new t(e.viewData[i], e.masksProperties[i]);
          }
          return function (t) {
            for (i = 0; i < r;) {
              if (e.masksProperties[i].nm === t) {
                return s[i];
              }
              i += 1;
            }
            return null;
          };
        };
      }();
      var ExpressionPropertyInterface = function () {
        var t = {
          pv: 0,
          v: 0,
          mult: 1
        };
        var e = {
          pv: [0, 0, 0],
          v: [0, 0, 0],
          mult: 1
        };
        function i(t, e, i) {
          Object.defineProperty(t, "velocity", {
            get: function () {
              return e.getVelocityAtTime(e.comp.currentFrame);
            }
          });
          t.numKeys = e.keyframes ? e.keyframes.length : 0;
          t.key = function (s) {
            if (!t.numKeys) {
              return 0;
            }
            var r = "";
            r = "s" in e.keyframes[s - 1] ? e.keyframes[s - 1].s : "e" in e.keyframes[s - 2] ? e.keyframes[s - 2].e : e.keyframes[s - 2].s;
            var a = i === "unidimensional" ? new Number(r) : Object.assign({}, r);
            a.time = e.keyframes[s - 1].t / e.elem.comp.globalData.frameRate;
            a.value = i === "unidimensional" ? r[0] : r;
            return a;
          };
          t.valueAtTime = e.getValueAtTime;
          t.speedAtTime = e.getSpeedAtTime;
          t.velocityAtTime = e.getVelocityAtTime;
          t.propertyGroup = e.propertyGroup;
        }
        function s(e) {
          if (!e || !("pv" in e)) {
            e = t;
          }
          var s = 1 / e.mult;
          var r = e.pv * s;
          var a = new Number(r);
          a.value = r;
          i(a, e, "unidimensional");
          return function () {
            if (e.k) {
              e.getValue();
            }
            r = e.v * s;
            if (a.value !== r) {
              (a = new Number(r)).value = r;
              i(a, e, "unidimensional");
            }
            return a;
          };
        }
        function r(t) {
          if (!t || !("pv" in t)) {
            t = e;
          }
          var s = 1 / t.mult;
          var r = t.data && t.data.l || t.pv.length;
          var a = createTypedArray("float32", r);
          var n = createTypedArray("float32", r);
          a.value = n;
          i(a, t, "multidimensional");
          return function () {
            if (t.k) {
              t.getValue();
            }
            for (var e = 0; e < r; e += 1) {
              n[e] = t.v[e] * s;
              a[e] = n[e];
            }
            return a;
          };
        }
        function a() {
          return t;
        }
        return function (t) {
          if (t) {
            if (t.propType === "unidimensional") {
              return s(t);
            } else {
              return r(t);
            }
          } else {
            return a;
          }
        };
      }();
      var TransformExpressionInterface = function () {
        return function (t) {
          var e;
          var i;
          var s;
          var r;
          function a(t) {
            switch (t) {
              case "scale":
              case "Scale":
              case "ADBE Scale":
              case 6:
                return a.scale;
              case "rotation":
              case "Rotation":
              case "ADBE Rotation":
              case "ADBE Rotate Z":
              case 10:
                return a.rotation;
              case "ADBE Rotate X":
                return a.xRotation;
              case "ADBE Rotate Y":
                return a.yRotation;
              case "position":
              case "Position":
              case "ADBE Position":
              case 2:
                return a.position;
              case "ADBE Position_0":
                return a.xPosition;
              case "ADBE Position_1":
                return a.yPosition;
              case "ADBE Position_2":
                return a.zPosition;
              case "anchorPoint":
              case "AnchorPoint":
              case "Anchor Point":
              case "ADBE AnchorPoint":
              case 1:
                return a.anchorPoint;
              case "opacity":
              case "Opacity":
              case 11:
                return a.opacity;
              default:
                return null;
            }
          }
          Object.defineProperty(a, "rotation", {
            get: ExpressionPropertyInterface(t.r || t.rz)
          });
          Object.defineProperty(a, "zRotation", {
            get: ExpressionPropertyInterface(t.rz || t.r)
          });
          Object.defineProperty(a, "xRotation", {
            get: ExpressionPropertyInterface(t.rx)
          });
          Object.defineProperty(a, "yRotation", {
            get: ExpressionPropertyInterface(t.ry)
          });
          Object.defineProperty(a, "scale", {
            get: ExpressionPropertyInterface(t.s)
          });
          if (t.p) {
            r = ExpressionPropertyInterface(t.p);
          } else {
            e = ExpressionPropertyInterface(t.px);
            i = ExpressionPropertyInterface(t.py);
            if (t.pz) {
              s = ExpressionPropertyInterface(t.pz);
            }
          }
          Object.defineProperty(a, "position", {
            get: function () {
              if (t.p) {
                return r();
              } else {
                return [e(), i(), s ? s() : 0];
              }
            }
          });
          Object.defineProperty(a, "xPosition", {
            get: ExpressionPropertyInterface(t.px)
          });
          Object.defineProperty(a, "yPosition", {
            get: ExpressionPropertyInterface(t.py)
          });
          Object.defineProperty(a, "zPosition", {
            get: ExpressionPropertyInterface(t.pz)
          });
          Object.defineProperty(a, "anchorPoint", {
            get: ExpressionPropertyInterface(t.a)
          });
          Object.defineProperty(a, "opacity", {
            get: ExpressionPropertyInterface(t.o)
          });
          Object.defineProperty(a, "skew", {
            get: ExpressionPropertyInterface(t.sk)
          });
          Object.defineProperty(a, "skewAxis", {
            get: ExpressionPropertyInterface(t.sa)
          });
          Object.defineProperty(a, "orientation", {
            get: ExpressionPropertyInterface(t.or)
          });
          return a;
        };
      }();
      var LayerExpressionInterface = function () {
        function t(t) {
          var e = new Matrix();
          if (t !== undefined) {
            this._elem.finalTransform.mProp.getValueAtTime(t).clone(e);
          } else {
            this._elem.finalTransform.mProp.applyToMatrix(e);
          }
          return e;
        }
        function e(t, e) {
          var i = this.getMatrix(e);
          i.props[12] = 0;
          i.props[13] = 0;
          i.props[14] = 0;
          return this.applyPoint(i, t);
        }
        function i(t, e) {
          var i = this.getMatrix(e);
          return this.applyPoint(i, t);
        }
        function s(t, e) {
          var i = this.getMatrix(e);
          i.props[12] = 0;
          i.props[13] = 0;
          i.props[14] = 0;
          return this.invertPoint(i, t);
        }
        function r(t, e) {
          var i = this.getMatrix(e);
          return this.invertPoint(i, t);
        }
        function a(t, e) {
          if (this._elem.hierarchy && this._elem.hierarchy.length) {
            var i;
            var s = this._elem.hierarchy.length;
            for (i = 0; i < s; i += 1) {
              this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t);
            }
          }
          return t.applyToPointArray(e[0], e[1], e[2] || 0);
        }
        function n(t, e) {
          if (this._elem.hierarchy && this._elem.hierarchy.length) {
            var i;
            var s = this._elem.hierarchy.length;
            for (i = 0; i < s; i += 1) {
              this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t);
            }
          }
          return t.inversePoint(e);
        }
        function o(t) {
          var e = new Matrix();
          e.reset();
          this._elem.finalTransform.mProp.applyToMatrix(e);
          if (this._elem.hierarchy && this._elem.hierarchy.length) {
            var i;
            var s = this._elem.hierarchy.length;
            for (i = 0; i < s; i += 1) {
              this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
            }
          }
          return e.inversePoint(t);
        }
        function h() {
          return [1, 1, 1, 1];
        }
        return function (l) {
          function p(t) {
            c.mask = new MaskManagerInterface(t, l);
          }
          function f(t) {
            c.effect = t;
          }
          function c(t) {
            switch (t) {
              case "ADBE Root Vectors Group":
              case "Contents":
              case 2:
                return c.shapeInterface;
              case 1:
              case 6:
              case "Transform":
              case "transform":
              case "ADBE Transform Group":
                return m;
              case 4:
              case "ADBE Effect Parade":
              case "effects":
              case "Effects":
                return c.effect;
              case "ADBE Text Properties":
                return c.textInterface;
              default:
                return null;
            }
          }
          c.getMatrix = t;
          c.invertPoint = n;
          c.applyPoint = a;
          c.toWorld = i;
          c.toWorldVec = e;
          c.fromWorld = r;
          c.fromWorldVec = s;
          c.toComp = i;
          c.fromComp = o;
          c.sampleImage = h;
          c.sourceRectAtTime = l.sourceRectAtTime.bind(l);
          c._elem = l;
          var m;
          var u = getDescriptor(m = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
          Object.defineProperties(c, {
            hasParent: {
              get: function () {
                return l.hierarchy.length;
              }
            },
            parent: {
              get: function () {
                return l.hierarchy[0].layerInterface;
              }
            },
            rotation: getDescriptor(m, "rotation"),
            scale: getDescriptor(m, "scale"),
            position: getDescriptor(m, "position"),
            opacity: getDescriptor(m, "opacity"),
            anchorPoint: u,
            anchor_point: u,
            transform: {
              get: function () {
                return m;
              }
            },
            active: {
              get: function () {
                return l.isInRange;
              }
            }
          });
          c.startTime = l.data.st;
          c.index = l.data.ind;
          c.source = l.data.refId;
          c.height = l.data.ty === 0 ? l.data.h : 100;
          c.width = l.data.ty === 0 ? l.data.w : 100;
          c.inPoint = l.data.ip / l.comp.globalData.frameRate;
          c.outPoint = l.data.op / l.comp.globalData.frameRate;
          c._name = l.data.nm;
          c.registerMaskInterface = p;
          c.registerEffectsInterface = f;
          return c;
        };
      }();
      var propertyGroupFactory = function () {
        return function (t, e) {
          return function (i) {
            if ((i = i === undefined ? 1 : i) <= 0) {
              return t;
            } else {
              return e(i - 1);
            }
          };
        };
      }();
      var PropertyInterface = function () {
        return function (t, e) {
          var i = {
            _name: t
          };
          return function (t) {
            if ((t = t === undefined ? 1 : t) <= 0) {
              return i;
            } else {
              return e(t - 1);
            }
          };
        };
      }();
      var EffectsExpressionInterface = function () {
        function t(i, s, r, a) {
          function n(t) {
            var e = i.ef;
            var s = 0;
            var r = e.length;
            while (s < r) {
              if (t === e[s].nm || t === e[s].mn || t === e[s].ix) {
                if (e[s].ty === 5) {
                  return l[s];
                }
                return l[s]();
              }
              s += 1;
            }
            throw Error();
          }
          var o;
          var h = propertyGroupFactory(n, r);
          var l = [];
          var p = i.ef.length;
          for (o = 0; o < p; o += 1) {
            if (i.ef[o].ty === 5) {
              l.push(t(i.ef[o], s.effectElements[o], s.effectElements[o].propertyGroup, a));
            } else {
              l.push(e(s.effectElements[o], i.ef[o].ty, a, h));
            }
          }
          if (i.mn === "ADBE Color Control") {
            Object.defineProperty(n, "color", {
              get: function () {
                return l[0]();
              }
            });
          }
          Object.defineProperties(n, {
            numProperties: {
              get: function () {
                return i.np;
              }
            },
            _name: {
              value: i.nm
            },
            propertyGroup: {
              value: h
            }
          });
          n.enabled = i.en !== 0;
          n.active = n.enabled;
          return n;
        }
        function e(t, e, i, s) {
          var r = ExpressionPropertyInterface(t.p);
          function a() {
            if (e === 10) {
              return i.comp.compInterface(t.p.v);
            } else {
              return r();
            }
          }
          if (t.p.setGroupProperty) {
            t.p.setGroupProperty(PropertyInterface("", s));
          }
          return a;
        }
        return {
          createEffectsInterface: function (e, i) {
            if (e.effectsManager) {
              var s;
              var r = [];
              var a = e.data.ef;
              var n = e.effectsManager.effectElements.length;
              for (s = 0; s < n; s += 1) {
                r.push(t(a[s], e.effectsManager.effectElements[s], i, e));
              }
              var o = e.data.ef || [];
              function h(t) {
                s = 0;
                n = o.length;
                while (s < n) {
                  if (t === o[s].nm || t === o[s].mn || t === o[s].ix) {
                    return r[s];
                  }
                  s += 1;
                }
                return null;
              }
              Object.defineProperty(h, "numProperties", {
                get: function () {
                  return o.length;
                }
              });
              return h;
            }
            return null;
          }
        };
      }();
      var ShapePathInterface = function () {
        return function (t, e, i) {
          var s = e.sh;
          function r(t) {
            if (t === "Shape" || t === "shape" || t === "Path" || t === "path" || t === "ADBE Vector Shape" || t === 2) {
              return r.path;
            } else {
              return null;
            }
          }
          var a = propertyGroupFactory(r, i);
          s.setGroupProperty(PropertyInterface("Path", a));
          Object.defineProperties(r, {
            path: {
              get: function () {
                if (s.k) {
                  s.getValue();
                }
                return s;
              }
            },
            shape: {
              get: function () {
                if (s.k) {
                  s.getValue();
                }
                return s;
              }
            },
            _name: {
              value: t.nm
            },
            ix: {
              value: t.ix
            },
            propertyIndex: {
              value: t.ix
            },
            mn: {
              value: t.mn
            },
            propertyGroup: {
              value: i
            }
          });
          return r;
        };
      }();
      var ShapeExpressionInterface = function () {
        function t(t, e, h) {
          var u;
          var d = [];
          var g = t ? t.length : 0;
          for (u = 0; u < g; u += 1) {
            if (t[u].ty === "gr") {
              d.push(i(t[u], e[u], h));
            } else if (t[u].ty === "fl") {
              d.push(s(t[u], e[u], h));
            } else if (t[u].ty === "st") {
              d.push(n(t[u], e[u], h));
            } else if (t[u].ty === "tm") {
              d.push(o(t[u], e[u], h));
            } else if (t[u].ty !== "tr") {
              if (t[u].ty === "el") {
                d.push(l(t[u], e[u], h));
              } else if (t[u].ty === "sr") {
                d.push(p(t[u], e[u], h));
              } else if (t[u].ty === "sh") {
                d.push(ShapePathInterface(t[u], e[u], h));
              } else if (t[u].ty === "rc") {
                d.push(f(t[u], e[u], h));
              } else if (t[u].ty === "rd") {
                d.push(c(t[u], e[u], h));
              } else if (t[u].ty === "rp") {
                d.push(m(t[u], e[u], h));
              } else if (t[u].ty === "gf") {
                d.push(r(t[u], e[u], h));
              } else {
                d.push(a(t[u], e[u], h));
              }
            }
          }
          return d;
        }
        function e(e, i, s) {
          var r;
          function a(t) {
            var e = 0;
            var i = r.length;
            while (e < i) {
              if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t) {
                return r[e];
              }
              e += 1;
            }
            if (typeof t == "number") {
              return r[t - 1];
            } else {
              return null;
            }
          }
          a.propertyGroup = propertyGroupFactory(a, s);
          r = t(e.it, i.it, a.propertyGroup);
          a.numProperties = r.length;
          var n = h(e.it[e.it.length - 1], i.it[i.it.length - 1], a.propertyGroup);
          a.transform = n;
          a.propertyIndex = e.cix;
          a._name = e.nm;
          return a;
        }
        function i(t, i, s) {
          function r(t) {
            switch (t) {
              case "ADBE Vectors Group":
              case "Contents":
              case 2:
                return r.content;
              default:
                return r.transform;
            }
          }
          r.propertyGroup = propertyGroupFactory(r, s);
          var a = e(t, i, r.propertyGroup);
          var n = h(t.it[t.it.length - 1], i.it[i.it.length - 1], r.propertyGroup);
          r.content = a;
          r.transform = n;
          Object.defineProperty(r, "_name", {
            get: function () {
              return t.nm;
            }
          });
          r.numProperties = t.np;
          r.propertyIndex = t.ix;
          r.nm = t.nm;
          r.mn = t.mn;
          return r;
        }
        function s(t, e, i) {
          function s(t) {
            if (t === "Color" || t === "color") {
              return s.color;
            } else if (t === "Opacity" || t === "opacity") {
              return s.opacity;
            } else {
              return null;
            }
          }
          Object.defineProperties(s, {
            color: {
              get: ExpressionPropertyInterface(e.c)
            },
            opacity: {
              get: ExpressionPropertyInterface(e.o)
            },
            _name: {
              value: t.nm
            },
            mn: {
              value: t.mn
            }
          });
          e.c.setGroupProperty(PropertyInterface("Color", i));
          e.o.setGroupProperty(PropertyInterface("Opacity", i));
          return s;
        }
        function r(t, e, i) {
          function s(t) {
            if (t === "Start Point" || t === "start point") {
              return s.startPoint;
            } else if (t === "End Point" || t === "end point") {
              return s.endPoint;
            } else if (t === "Opacity" || t === "opacity") {
              return s.opacity;
            } else {
              return null;
            }
          }
          Object.defineProperties(s, {
            startPoint: {
              get: ExpressionPropertyInterface(e.s)
            },
            endPoint: {
              get: ExpressionPropertyInterface(e.e)
            },
            opacity: {
              get: ExpressionPropertyInterface(e.o)
            },
            type: {
              get: function () {
                return "a";
              }
            },
            _name: {
              value: t.nm
            },
            mn: {
              value: t.mn
            }
          });
          e.s.setGroupProperty(PropertyInterface("Start Point", i));
          e.e.setGroupProperty(PropertyInterface("End Point", i));
          e.o.setGroupProperty(PropertyInterface("Opacity", i));
          return s;
        }
        function a() {
          return function () {
            return null;
          };
        }
        function n(t, e, i) {
          var s;
          var r = propertyGroupFactory(l, i);
          var a = propertyGroupFactory(h, r);
          function n(i) {
            Object.defineProperty(h, t.d[i].nm, {
              get: ExpressionPropertyInterface(e.d.dataProps[i].p)
            });
          }
          var o = t.d ? t.d.length : 0;
          var h = {};
          for (s = 0; s < o; s += 1) {
            n(s);
            e.d.dataProps[s].p.setGroupProperty(a);
          }
          function l(t) {
            if (t === "Color" || t === "color") {
              return l.color;
            } else if (t === "Opacity" || t === "opacity") {
              return l.opacity;
            } else if (t === "Stroke Width" || t === "stroke width") {
              return l.strokeWidth;
            } else {
              return null;
            }
          }
          Object.defineProperties(l, {
            color: {
              get: ExpressionPropertyInterface(e.c)
            },
            opacity: {
              get: ExpressionPropertyInterface(e.o)
            },
            strokeWidth: {
              get: ExpressionPropertyInterface(e.w)
            },
            dash: {
              get: function () {
                return h;
              }
            },
            _name: {
              value: t.nm
            },
            mn: {
              value: t.mn
            }
          });
          e.c.setGroupProperty(PropertyInterface("Color", r));
          e.o.setGroupProperty(PropertyInterface("Opacity", r));
          e.w.setGroupProperty(PropertyInterface("Stroke Width", r));
          return l;
        }
        function o(t, e, i) {
          function s(e) {
            if (e === t.e.ix || e === "End" || e === "end") {
              return s.end;
            } else if (e === t.s.ix) {
              return s.start;
            } else if (e === t.o.ix) {
              return s.offset;
            } else {
              return null;
            }
          }
          var r = propertyGroupFactory(s, i);
          s.propertyIndex = t.ix;
          e.s.setGroupProperty(PropertyInterface("Start", r));
          e.e.setGroupProperty(PropertyInterface("End", r));
          e.o.setGroupProperty(PropertyInterface("Offset", r));
          s.propertyIndex = t.ix;
          s.propertyGroup = i;
          Object.defineProperties(s, {
            start: {
              get: ExpressionPropertyInterface(e.s)
            },
            end: {
              get: ExpressionPropertyInterface(e.e)
            },
            offset: {
              get: ExpressionPropertyInterface(e.o)
            },
            _name: {
              value: t.nm
            }
          });
          s.mn = t.mn;
          return s;
        }
        function h(t, e, i) {
          function s(e) {
            if (t.a.ix === e || e === "Anchor Point") {
              return s.anchorPoint;
            } else if (t.o.ix === e || e === "Opacity") {
              return s.opacity;
            } else if (t.p.ix === e || e === "Position") {
              return s.position;
            } else if (t.r.ix === e || e === "Rotation" || e === "ADBE Vector Rotation") {
              return s.rotation;
            } else if (t.s.ix === e || e === "Scale") {
              return s.scale;
            } else if (t.sk && t.sk.ix === e || e === "Skew") {
              return s.skew;
            } else if (t.sa && t.sa.ix === e || e === "Skew Axis") {
              return s.skewAxis;
            } else {
              return null;
            }
          }
          var r = propertyGroupFactory(s, i);
          e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", r));
          e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", r));
          e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", r));
          e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", r));
          e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", r));
          if (e.transform.mProps.sk) {
            e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", r));
            e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", r));
          }
          e.transform.op.setGroupProperty(PropertyInterface("Opacity", r));
          Object.defineProperties(s, {
            opacity: {
              get: ExpressionPropertyInterface(e.transform.mProps.o)
            },
            position: {
              get: ExpressionPropertyInterface(e.transform.mProps.p)
            },
            anchorPoint: {
              get: ExpressionPropertyInterface(e.transform.mProps.a)
            },
            scale: {
              get: ExpressionPropertyInterface(e.transform.mProps.s)
            },
            rotation: {
              get: ExpressionPropertyInterface(e.transform.mProps.r)
            },
            skew: {
              get: ExpressionPropertyInterface(e.transform.mProps.sk)
            },
            skewAxis: {
              get: ExpressionPropertyInterface(e.transform.mProps.sa)
            },
            _name: {
              value: t.nm
            }
          });
          s.ty = "tr";
          s.mn = t.mn;
          s.propertyGroup = i;
          return s;
        }
        function l(t, e, i) {
          function s(e) {
            if (t.p.ix === e) {
              return s.position;
            } else if (t.s.ix === e) {
              return s.size;
            } else {
              return null;
            }
          }
          var r = propertyGroupFactory(s, i);
          s.propertyIndex = t.ix;
          var a = e.sh.ty === "tm" ? e.sh.prop : e.sh;
          a.s.setGroupProperty(PropertyInterface("Size", r));
          a.p.setGroupProperty(PropertyInterface("Position", r));
          Object.defineProperties(s, {
            size: {
              get: ExpressionPropertyInterface(a.s)
            },
            position: {
              get: ExpressionPropertyInterface(a.p)
            },
            _name: {
              value: t.nm
            }
          });
          s.mn = t.mn;
          return s;
        }
        function p(t, e, i) {
          function s(e) {
            if (t.p.ix === e) {
              return s.position;
            } else if (t.r.ix === e) {
              return s.rotation;
            } else if (t.pt.ix === e) {
              return s.points;
            } else if (t.or.ix === e || e === "ADBE Vector Star Outer Radius") {
              return s.outerRadius;
            } else if (t.os.ix === e) {
              return s.outerRoundness;
            } else if (t.ir && (t.ir.ix === e || e === "ADBE Vector Star Inner Radius")) {
              return s.innerRadius;
            } else if (t.is && t.is.ix === e) {
              return s.innerRoundness;
            } else {
              return null;
            }
          }
          var r = propertyGroupFactory(s, i);
          var a = e.sh.ty === "tm" ? e.sh.prop : e.sh;
          s.propertyIndex = t.ix;
          a.or.setGroupProperty(PropertyInterface("Outer Radius", r));
          a.os.setGroupProperty(PropertyInterface("Outer Roundness", r));
          a.pt.setGroupProperty(PropertyInterface("Points", r));
          a.p.setGroupProperty(PropertyInterface("Position", r));
          a.r.setGroupProperty(PropertyInterface("Rotation", r));
          if (t.ir) {
            a.ir.setGroupProperty(PropertyInterface("Inner Radius", r));
            a.is.setGroupProperty(PropertyInterface("Inner Roundness", r));
          }
          Object.defineProperties(s, {
            position: {
              get: ExpressionPropertyInterface(a.p)
            },
            rotation: {
              get: ExpressionPropertyInterface(a.r)
            },
            points: {
              get: ExpressionPropertyInterface(a.pt)
            },
            outerRadius: {
              get: ExpressionPropertyInterface(a.or)
            },
            outerRoundness: {
              get: ExpressionPropertyInterface(a.os)
            },
            innerRadius: {
              get: ExpressionPropertyInterface(a.ir)
            },
            innerRoundness: {
              get: ExpressionPropertyInterface(a.is)
            },
            _name: {
              value: t.nm
            }
          });
          s.mn = t.mn;
          return s;
        }
        function f(t, e, i) {
          function s(e) {
            if (t.p.ix === e) {
              return s.position;
            } else if (t.r.ix === e) {
              return s.roundness;
            } else if (t.s.ix === e || e === "Size" || e === "ADBE Vector Rect Size") {
              return s.size;
            } else {
              return null;
            }
          }
          var r = propertyGroupFactory(s, i);
          var a = e.sh.ty === "tm" ? e.sh.prop : e.sh;
          s.propertyIndex = t.ix;
          a.p.setGroupProperty(PropertyInterface("Position", r));
          a.s.setGroupProperty(PropertyInterface("Size", r));
          a.r.setGroupProperty(PropertyInterface("Rotation", r));
          Object.defineProperties(s, {
            position: {
              get: ExpressionPropertyInterface(a.p)
            },
            roundness: {
              get: ExpressionPropertyInterface(a.r)
            },
            size: {
              get: ExpressionPropertyInterface(a.s)
            },
            _name: {
              value: t.nm
            }
          });
          s.mn = t.mn;
          return s;
        }
        function c(t, e, i) {
          function s(e) {
            if (t.r.ix === e || e === "Round Corners 1") {
              return s.radius;
            } else {
              return null;
            }
          }
          var r = propertyGroupFactory(s, i);
          var a = e;
          s.propertyIndex = t.ix;
          a.rd.setGroupProperty(PropertyInterface("Radius", r));
          Object.defineProperties(s, {
            radius: {
              get: ExpressionPropertyInterface(a.rd)
            },
            _name: {
              value: t.nm
            }
          });
          s.mn = t.mn;
          return s;
        }
        function m(t, e, i) {
          function s(e) {
            if (t.c.ix === e || e === "Copies") {
              return s.copies;
            } else if (t.o.ix === e || e === "Offset") {
              return s.offset;
            } else {
              return null;
            }
          }
          var r = propertyGroupFactory(s, i);
          var a = e;
          s.propertyIndex = t.ix;
          a.c.setGroupProperty(PropertyInterface("Copies", r));
          a.o.setGroupProperty(PropertyInterface("Offset", r));
          Object.defineProperties(s, {
            copies: {
              get: ExpressionPropertyInterface(a.c)
            },
            offset: {
              get: ExpressionPropertyInterface(a.o)
            },
            _name: {
              value: t.nm
            }
          });
          s.mn = t.mn;
          return s;
        }
        return function (e, i, s) {
          var r;
          function a(t) {
            if (typeof t == "number") {
              if ((t = t === undefined ? 1 : t) === 0) {
                return s;
              } else {
                return r[t - 1];
              }
            }
            var e = 0;
            var i = r.length;
            while (e < i) {
              if (r[e]._name === t) {
                return r[e];
              }
              e += 1;
            }
            return null;
          }
          function n() {
            return s;
          }
          a.propertyGroup = propertyGroupFactory(a, n);
          r = t(e, i, a.propertyGroup);
          a.numProperties = r.length;
          a._name = "Contents";
          return a;
        };
      }();
      var TextExpressionInterface = function () {
        return function (t) {
          var e;
          function i(t) {
            if (t === "ADBE Text Document") {
              return i.sourceText;
            } else {
              return null;
            }
          }
          Object.defineProperty(i, "sourceText", {
            get: function () {
              t.textProperty.getValue();
              var i = t.textProperty.currentData.t;
              if (!e || i !== e.value) {
                (e = new String(i)).value = i || new String(i);
                Object.defineProperty(e, "style", {
                  get: function () {
                    return {
                      fillColor: t.textProperty.currentData.fc
                    };
                  }
                });
              }
              return e;
            }
          });
          return i;
        };
      }();
      function _typeof(t) {
        return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t;
        } : function (t) {
          if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof t;
          }
        })(t);
      }
      var FootageInterface = function () {
        function t(t) {
          var e = "";
          var i = t.getFootageData();
          function s(t) {
            if (i[t]) {
              e = t;
              i = i[t];
              if (_typeof(i) === "object") {
                return s;
              } else {
                return i;
              }
            }
            var r = t.indexOf(e);
            if (r !== -1) {
              i = i[parseInt(t.substr(r + e.length), 10)];
              if (_typeof(i) === "object") {
                return s;
              } else {
                return i;
              }
            } else {
              return "";
            }
          }
          return function () {
            e = "";
            i = t.getFootageData();
            return s;
          };
        }
        function e(e) {
          function i(t) {
            if (t === "Outline") {
              return i.outlineInterface();
            } else {
              return null;
            }
          }
          i._name = "Outline";
          i.outlineInterface = t(e);
          return i;
        }
        return function (t) {
          function i(t) {
            if (t === "Data") {
              return i.dataInterface;
            } else {
              return null;
            }
          }
          i._name = "Data";
          i.dataInterface = e(t);
          return i;
        };
      }();
      var interfaces = {
        layer: LayerExpressionInterface,
        effects: EffectsExpressionInterface,
        comp: CompExpressionInterface,
        shape: ShapeExpressionInterface,
        text: TextExpressionInterface,
        footage: FootageInterface
      };
      function getInterface(t) {
        return interfaces[t] || null;
      }
      var expressionHelpers = function () {
        return {
          searchExpressions: function (t, e, i) {
            if (e.x) {
              i.k = true;
              i.x = true;
              i.initiateExpression = ExpressionManager.initiateExpression;
              i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i));
            }
          },
          getSpeedAtTime: function (t) {
            var e;
            var i = -0.01;
            var s = this.getValueAtTime(t);
            var r = this.getValueAtTime(t + i);
            var a = 0;
            if (s.length) {
              for (e = 0; e < s.length; e += 1) {
                a += Math.pow(r[e] - s[e], 2);
              }
              a = Math.sqrt(a) * 100;
            } else {
              a = 0;
            }
            return a;
          },
          getVelocityAtTime: function (t) {
            if (this.vel !== undefined) {
              return this.vel;
            }
            var e;
            var i;
            var s = -0.001;
            var r = this.getValueAtTime(t);
            var a = this.getValueAtTime(t + s);
            if (r.length) {
              i = 0;
              e = createTypedArray("float32", r.length);
              for (; i < r.length; i += 1) {
                e[i] = (a[i] - r[i]) / s;
              }
            } else {
              e = (a - r) / s;
            }
            return e;
          },
          getValueAtTime: function (t) {
            t *= this.elem.globalData.frameRate;
            if ((t -= this.offsetTime) !== this._cachingAtTime.lastFrame) {
              this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0;
              this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime);
              this._cachingAtTime.lastFrame = t;
            }
            return this._cachingAtTime.value;
          },
          getStaticValueAtTime: function () {
            return this.pv;
          },
          setGroupProperty: function (t) {
            this.propertyGroup = t;
          }
        };
      }();
      function addPropertyDecorator() {
        function t(t, e, i) {
          if (!this.k || !this.keyframes) {
            return this.pv;
          }
          t = t ? t.toLowerCase() : "";
          var s;
          var r;
          var a;
          var n;
          var o;
          var h = this.comp.renderedFrame;
          var l = this.keyframes;
          var p = l[l.length - 1].t;
          if (h <= p) {
            return this.pv;
          }
          if (i) {
            s = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip);
            r = p - s;
          } else {
            if (!e || e > l.length - 1) {
              e = l.length - 1;
            }
            s = p - (r = l[l.length - 1 - e].t);
          }
          if (t === "pingpong") {
            if (Math.floor((h - r) / s) % 2 != 0) {
              return this.getValueAtTime((s - (h - r) % s + r) / this.comp.globalData.frameRate, 0);
            }
          } else if (t === "offset") {
            var f = this.getValueAtTime(r / this.comp.globalData.frameRate, 0);
            var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0);
            var m = this.getValueAtTime(((h - r) % s + r) / this.comp.globalData.frameRate, 0);
            var u = Math.floor((h - r) / s);
            if (this.pv.length) {
              a = 0;
              n = (o = Array(f.length)).length;
              for (; a < n; a += 1) {
                o[a] = (c[a] - f[a]) * u + m[a];
              }
              return o;
            }
            return (c - f) * u + m;
          } else if (t === "continue") {
            var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0);
            var g = this.getValueAtTime((p - 0.001) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              a = 0;
              n = (o = Array(d.length)).length;
              for (; a < n; a += 1) {
                o[a] = d[a] + (d[a] - g[a]) * ((h - p) / this.comp.globalData.frameRate) / 0.0005;
              }
              return o;
            }
            return d + (h - p) / 0.001 * (d - g);
          }
          return this.getValueAtTime(((h - r) % s + r) / this.comp.globalData.frameRate, 0);
        }
        function e(t, e, i) {
          if (!this.k) {
            return this.pv;
          }
          t = t ? t.toLowerCase() : "";
          var s;
          var r;
          var a;
          var n;
          var o;
          var h = this.comp.renderedFrame;
          var l = this.keyframes;
          var p = l[0].t;
          if (h >= p) {
            return this.pv;
          }
          if (i) {
            s = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p);
            r = p + s;
          } else {
            if (!e || e > l.length - 1) {
              e = l.length - 1;
            }
            s = (r = l[e].t) - p;
          }
          if (t === "pingpong") {
            if (Math.floor((p - h) / s) % 2 == 0) {
              return this.getValueAtTime(((p - h) % s + p) / this.comp.globalData.frameRate, 0);
            }
          } else if (t === "offset") {
            var f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0);
            var c = this.getValueAtTime(r / this.comp.globalData.frameRate, 0);
            var m = this.getValueAtTime((s - (p - h) % s + p) / this.comp.globalData.frameRate, 0);
            var u = Math.floor((p - h) / s) + 1;
            if (this.pv.length) {
              a = 0;
              n = (o = Array(f.length)).length;
              for (; a < n; a += 1) {
                o[a] = m[a] - (c[a] - f[a]) * u;
              }
              return o;
            }
            return m - (c - f) * u;
          } else if (t === "continue") {
            var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0);
            var g = this.getValueAtTime((p + 0.001) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              a = 0;
              n = (o = Array(d.length)).length;
              for (; a < n; a += 1) {
                o[a] = d[a] + (d[a] - g[a]) * (p - h) / 0.001;
              }
              return o;
            }
            return d + (d - g) * (p - h) / 0.001;
          }
          return this.getValueAtTime((s - ((p - h) % s + p)) / this.comp.globalData.frameRate, 0);
        }
        function i(t, e) {
          if (!this.k || (t = (t || 0.4) * 0.5, (e = Math.floor(e || 5)) <= 1)) {
            return this.pv;
          }
          var i;
          var s;
          var r = this.comp.renderedFrame / this.comp.globalData.frameRate;
          var a = r - t;
          var n = r + t;
          var o = e > 1 ? (n - a) / (e - 1) : 1;
          var h = 0;
          var l = 0;
          for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; h < e;) {
            s = this.getValueAtTime(a + h * o);
            if (this.pv.length) {
              for (l = 0; l < this.pv.length; l += 1) {
                i[l] += s[l];
              }
            } else {
              i += s;
            }
            h += 1;
          }
          if (this.pv.length) {
            for (l = 0; l < this.pv.length; l += 1) {
              i[l] /= e;
            }
          } else {
            i /= e;
          }
          return i;
        }
        function s(t) {
          this._transformCachingAtTime ||= {
            v: new Matrix()
          };
          var e = this._transformCachingAtTime.v;
          e.cloneFromProps(this.pre.props);
          if (this.appliedTransformations < 1) {
            var i = this.a.getValueAtTime(t);
            e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult);
          }
          if (this.appliedTransformations < 2) {
            var s = this.s.getValueAtTime(t);
            e.scale(s[0] * this.s.mult, s[1] * this.s.mult, s[2] * this.s.mult);
          }
          if (this.sk && this.appliedTransformations < 3) {
            var r = this.sk.getValueAtTime(t);
            var a = this.sa.getValueAtTime(t);
            e.skewFromAxis(-r * this.sk.mult, a * this.sa.mult);
          }
          if (this.r && this.appliedTransformations < 4) {
            var n = this.r.getValueAtTime(t);
            e.rotate(-n * this.r.mult);
          } else if (!this.r && this.appliedTransformations < 4) {
            var o = this.rz.getValueAtTime(t);
            var h = this.ry.getValueAtTime(t);
            var l = this.rx.getValueAtTime(t);
            var p = this.or.getValueAtTime(t);
            e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult);
          }
          if (this.data.p && this.data.p.s) {
            var f = this.px.getValueAtTime(t);
            var c = this.py.getValueAtTime(t);
            if (this.data.p.z) {
              var m = this.pz.getValueAtTime(t);
              e.translate(f * this.px.mult, c * this.py.mult, -m * this.pz.mult);
            } else {
              e.translate(f * this.px.mult, c * this.py.mult, 0);
            }
          } else {
            var u = this.p.getValueAtTime(t);
            e.translate(u[0] * this.p.mult, u[1] * this.p.mult, -u[2] * this.p.mult);
          }
          return e;
        }
        function r() {
          return this.v.clone(new Matrix());
        }
        var a = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function (t, e, i) {
          var n = a(t, e, i);
          if (n.dynamicProperties.length) {
            n.getValueAtTime = s.bind(n);
          } else {
            n.getValueAtTime = r.bind(n);
          }
          n.setGroupProperty = expressionHelpers.setGroupProperty;
          return n;
        };
        var n = PropertyFactory.getProp;
        function o(t) {
          this._cachingAtTime ||= {
            shapeValue: shapePool.clone(this.pv),
            lastIndex: 0,
            lastTime: initialDefaultFrame
          };
          t *= this.elem.globalData.frameRate;
          if ((t -= this.offsetTime) !== this._cachingAtTime.lastTime) {
            this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0;
            this._cachingAtTime.lastTime = t;
            this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime);
          }
          return this._cachingAtTime.shapeValue;
        }
        PropertyFactory.getProp = function (s, r, a, o, h) {
          var l = n(s, r, a, o, h);
          if (l.kf) {
            l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l);
          } else {
            l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l);
          }
          l.setGroupProperty = expressionHelpers.setGroupProperty;
          l.loopOut = t;
          l.loopIn = e;
          l.smooth = i;
          l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l);
          l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l);
          l.numKeys = r.a === 1 ? r.k.length : 0;
          l.propertyIndex = r.ix;
          var p = 0;
          if (a !== 0) {
            p = createTypedArray("float32", r.a === 1 ? r.k[0].s.length : r.k.length);
          }
          l._cachingAtTime = {
            lastFrame: initialDefaultFrame,
            lastIndex: 0,
            value: p
          };
          expressionHelpers.searchExpressions(s, r, l);
          if (l.k) {
            h.addDynamicProperty(l);
          }
          return l;
        };
        var h = ShapePropertyFactory.getConstructorFunction();
        var l = ShapePropertyFactory.getKeyframedConstructorFunction();
        function p() {}
        p.prototype = {
          vertices: function (t, e) {
            if (this.k) {
              this.getValue();
            }
            var i;
            var s = this.v;
            if (e !== undefined) {
              s = this.getValueAtTime(e, 0);
            }
            var r = s._length;
            var a = s[t];
            var n = s.v;
            var o = createSizedArray(r);
            for (i = 0; i < r; i += 1) {
              if (t === "i" || t === "o") {
                o[i] = [a[i][0] - n[i][0], a[i][1] - n[i][1]];
              } else {
                o[i] = [a[i][0], a[i][1]];
              }
            }
            return o;
          },
          points: function (t) {
            return this.vertices("v", t);
          },
          inTangents: function (t) {
            return this.vertices("i", t);
          },
          outTangents: function (t) {
            return this.vertices("o", t);
          },
          isClosed: function () {
            return this.v.c;
          },
          pointOnPath: function (t, e) {
            var i;
            var s = this.v;
            if (e !== undefined) {
              s = this.getValueAtTime(e, 0);
            }
            this._segmentsLength ||= bez.getSegmentsLength(s);
            var r = this._segmentsLength;
            var a = r.lengths;
            var n = r.totalLength * t;
            var o = 0;
            var h = a.length;
            var l = 0;
            while (o < h) {
              if (l + a[o].addedLength > n) {
                var p = o;
                var f = s.c && o === h - 1 ? 0 : o + 1;
                var c = (n - l) / a[o].addedLength;
                i = bez.getPointInSegment(s.v[p], s.v[f], s.o[p], s.i[f], c, a[o]);
                break;
              }
              l += a[o].addedLength;
              o += 1;
            }
            i ||= s.c ? [s.v[0][0], s.v[0][1]] : [s.v[s._length - 1][0], s.v[s._length - 1][1]];
            return i;
          },
          vectorOnPath: function (t, e, i) {
            if (t == 1) {
              t = this.v.c;
            } else if (t == 0) {
              t = 0.999;
            }
            var s = this.pointOnPath(t, e);
            var r = this.pointOnPath(t + 0.001, e);
            var a = r[0] - s[0];
            var n = r[1] - s[1];
            var o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
            if (o === 0) {
              return [0, 0];
            } else if (i === "tangent") {
              return [a / o, n / o];
            } else {
              return [-n / o, a / o];
            }
          },
          tangentOnPath: function (t, e) {
            return this.vectorOnPath(t, e, "tangent");
          },
          normalOnPath: function (t, e) {
            return this.vectorOnPath(t, e, "normal");
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime
        };
        extendPrototype([p], h);
        extendPrototype([p], l);
        l.prototype.getValueAtTime = o;
        l.prototype.initiateExpression = ExpressionManager.initiateExpression;
        var f = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (t, e, i, s, r) {
          var a = f(t, e, i, s, r);
          a.propertyIndex = e.ix;
          a.lock = false;
          if (i === 3) {
            expressionHelpers.searchExpressions(t, e.pt, a);
          } else if (i === 4) {
            expressionHelpers.searchExpressions(t, e.ks, a);
          }
          if (a.k) {
            t.addDynamicProperty(a);
          }
          return a;
        };
      }
      function initialize$1() {
        addPropertyDecorator();
      }
      function addDecorator() {
        function t() {
          if (this.data.d.x) {
            this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this);
            this.addEffect(this.getExpressionValue.bind(this));
            return true;
          } else {
            return null;
          }
        }
        TextProperty.prototype.getExpressionValue = function (t, e) {
          var i = this.calculateExpression(e);
          if (t.t !== i) {
            var s = {};
            this.copyData(s, t);
            s.t = i.toString();
            s.__complete = false;
            return s;
          }
          return t;
        };
        TextProperty.prototype.searchProperty = function () {
          var t = this.searchKeyframes();
          var e = this.searchExpressions();
          this.kf = t || e;
          return this.kf;
        };
        TextProperty.prototype.searchExpressions = t;
      }
      function initialize() {
        addDecorator();
      }
      function SVGComposableEffect() {}
      SVGComposableEffect.prototype = {
        createMergeNode: function (t, e) {
          var i;
          var s;
          var r = createNS("feMerge");
          r.setAttribute("result", t);
          s = 0;
          for (; s < e.length; s += 1) {
            (i = createNS("feMergeNode")).setAttribute("in", e[s]);
            r.appendChild(i);
            r.appendChild(i);
          }
          return r;
        }
      };
      var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
      function SVGTintFilter(t, e, i, s, r) {
        this.filterManager = e;
        var a = createNS("feColorMatrix");
        a.setAttribute("type", "matrix");
        a.setAttribute("color-interpolation-filters", "linearRGB");
        a.setAttribute("values", linearFilterValue + " 1 0");
        this.linearFilter = a;
        a.setAttribute("result", s + "_tint_1");
        t.appendChild(a);
        (a = createNS("feColorMatrix")).setAttribute("type", "matrix");
        a.setAttribute("color-interpolation-filters", "sRGB");
        a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0");
        a.setAttribute("result", s + "_tint_2");
        t.appendChild(a);
        this.matrixFilter = a;
        var n = this.createMergeNode(s, [r, s + "_tint_1", s + "_tint_2"]);
        t.appendChild(n);
      }
      function SVGFillFilter(t, e, i, s) {
        this.filterManager = e;
        var r = createNS("feColorMatrix");
        r.setAttribute("type", "matrix");
        r.setAttribute("color-interpolation-filters", "sRGB");
        r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0");
        r.setAttribute("result", s);
        t.appendChild(r);
        this.matrixFilter = r;
      }
      function SVGStrokeEffect(t, e, i) {
        this.initialized = false;
        this.filterManager = e;
        this.elem = i;
        this.paths = [];
      }
      function SVGTritoneFilter(t, e, i, s) {
        this.filterManager = e;
        var r = createNS("feColorMatrix");
        r.setAttribute("type", "matrix");
        r.setAttribute("color-interpolation-filters", "linearRGB");
        r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0");
        t.appendChild(r);
        var a = createNS("feComponentTransfer");
        a.setAttribute("color-interpolation-filters", "sRGB");
        a.setAttribute("result", s);
        this.matrixFilter = a;
        var n = createNS("feFuncR");
        n.setAttribute("type", "table");
        a.appendChild(n);
        this.feFuncR = n;
        var o = createNS("feFuncG");
        o.setAttribute("type", "table");
        a.appendChild(o);
        this.feFuncG = o;
        var h = createNS("feFuncB");
        h.setAttribute("type", "table");
        a.appendChild(h);
        this.feFuncB = h;
        t.appendChild(a);
      }
      function SVGProLevelsFilter(t, e, i, s) {
        this.filterManager = e;
        var r = this.filterManager.effectElements;
        var a = createNS("feComponentTransfer");
        if (r[10].p.k || r[10].p.v !== 0 || r[11].p.k || r[11].p.v !== 1 || r[12].p.k || r[12].p.v !== 1 || r[13].p.k || r[13].p.v !== 0 || r[14].p.k || r[14].p.v !== 1) {
          this.feFuncR = this.createFeFunc("feFuncR", a);
        }
        if (r[17].p.k || r[17].p.v !== 0 || r[18].p.k || r[18].p.v !== 1 || r[19].p.k || r[19].p.v !== 1 || r[20].p.k || r[20].p.v !== 0 || r[21].p.k || r[21].p.v !== 1) {
          this.feFuncG = this.createFeFunc("feFuncG", a);
        }
        if (r[24].p.k || r[24].p.v !== 0 || r[25].p.k || r[25].p.v !== 1 || r[26].p.k || r[26].p.v !== 1 || r[27].p.k || r[27].p.v !== 0 || r[28].p.k || r[28].p.v !== 1) {
          this.feFuncB = this.createFeFunc("feFuncB", a);
        }
        if (r[31].p.k || r[31].p.v !== 0 || r[32].p.k || r[32].p.v !== 1 || r[33].p.k || r[33].p.v !== 1 || r[34].p.k || r[34].p.v !== 0 || r[35].p.k || r[35].p.v !== 1) {
          this.feFuncA = this.createFeFunc("feFuncA", a);
        }
        if (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) {
          a.setAttribute("color-interpolation-filters", "sRGB");
          t.appendChild(a);
        }
        if (r[3].p.k || r[3].p.v !== 0 || r[4].p.k || r[4].p.v !== 1 || r[5].p.k || r[5].p.v !== 1 || r[6].p.k || r[6].p.v !== 0 || r[7].p.k || r[7].p.v !== 1) {
          (a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB");
          a.setAttribute("result", s);
          t.appendChild(a);
          this.feFuncRComposed = this.createFeFunc("feFuncR", a);
          this.feFuncGComposed = this.createFeFunc("feFuncG", a);
          this.feFuncBComposed = this.createFeFunc("feFuncB", a);
        }
      }
      function SVGDropShadowEffect(t, e, i, s, r) {
        var a = e.container.globalData.renderConfig.filterSize;
        var n = e.data.fs || a;
        t.setAttribute("x", n.x || a.x);
        t.setAttribute("y", n.y || a.y);
        t.setAttribute("width", n.width || a.width);
        t.setAttribute("height", n.height || a.height);
        this.filterManager = e;
        var o = createNS("feGaussianBlur");
        o.setAttribute("in", "SourceAlpha");
        o.setAttribute("result", s + "_drop_shadow_1");
        o.setAttribute("stdDeviation", "0");
        this.feGaussianBlur = o;
        t.appendChild(o);
        var h = createNS("feOffset");
        h.setAttribute("dx", "25");
        h.setAttribute("dy", "0");
        h.setAttribute("in", s + "_drop_shadow_1");
        h.setAttribute("result", s + "_drop_shadow_2");
        this.feOffset = h;
        t.appendChild(h);
        var l = createNS("feFlood");
        l.setAttribute("flood-color", "#00ff00");
        l.setAttribute("flood-opacity", "1");
        l.setAttribute("result", s + "_drop_shadow_3");
        this.feFlood = l;
        t.appendChild(l);
        var p = createNS("feComposite");
        p.setAttribute("in", s + "_drop_shadow_3");
        p.setAttribute("in2", s + "_drop_shadow_2");
        p.setAttribute("operator", "in");
        p.setAttribute("result", s + "_drop_shadow_4");
        t.appendChild(p);
        var f = this.createMergeNode(s, [s + "_drop_shadow_4", r]);
        t.appendChild(f);
      }
      extendPrototype([SVGComposableEffect], SVGTintFilter);
      SVGTintFilter.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e = this.filterManager.effectElements[0].p.v;
          var i = this.filterManager.effectElements[1].p.v;
          var s = this.filterManager.effectElements[2].p.v / 100;
          this.linearFilter.setAttribute("values", linearFilterValue + " " + s + " 0");
          this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0");
        }
      };
      SVGFillFilter.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e = this.filterManager.effectElements[2].p.v;
          var i = this.filterManager.effectElements[6].p.v;
          this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0");
        }
      };
      SVGStrokeEffect.prototype.initialize = function () {
        var t;
        var e;
        var i;
        var s;
        var r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        if (this.filterManager.effectElements[1].p.v === 1) {
          s = this.elem.maskManager.masksProperties.length;
          i = 0;
        } else {
          s = (i = this.filterManager.effectElements[0].p.v - 1) + 1;
        }
        (e = createNS("g")).setAttribute("fill", "none");
        e.setAttribute("stroke-linecap", "round");
        e.setAttribute("stroke-dashoffset", 1);
        for (; i < s; i += 1) {
          t = createNS("path");
          e.appendChild(t);
          this.paths.push({
            p: t,
            m: i
          });
        }
        if (this.filterManager.effectElements[10].p.v === 3) {
          var a = createNS("mask");
          var n = createElementID();
          a.setAttribute("id", n);
          a.setAttribute("mask-type", "alpha");
          a.appendChild(e);
          this.elem.globalData.defs.appendChild(a);
          var o = createNS("g");
          for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); r[0];) {
            o.appendChild(r[0]);
          }
          this.elem.layerElement.appendChild(o);
          this.masker = a;
          e.setAttribute("stroke", "#fff");
        } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
          if (this.filterManager.effectElements[10].p.v === 2) {
            for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length;) {
              this.elem.layerElement.removeChild(r[0]);
            }
          }
          this.elem.layerElement.appendChild(e);
          this.elem.layerElement.removeAttribute("mask");
          e.setAttribute("stroke", "#fff");
        }
        this.initialized = true;
        this.pathMasker = e;
      };
      SVGStrokeEffect.prototype.renderFrame = function (t) {
        if (!this.initialized) {
          this.initialize();
        }
        var e = this.paths.length;
        for (i = 0; i < e; i += 1) {
          if (this.paths[i].m !== -1 && (s = this.elem.maskManager.viewData[this.paths[i].m], r = this.paths[i].p, (t || this.filterManager._mdf || s.prop._mdf) && r.setAttribute("d", s.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || s.prop._mdf)) {
            if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
              var i;
              var s;
              var r;
              var a;
              var n;
              var o = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
              var h = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
              var l = r.getTotalLength();
              a = "0 0 0 " + l * o + " ";
              var p = Math.floor(l * (h - o) / (1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01));
              for (n = 0; n < p; n += 1) {
                a += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + " ";
              }
              a += "0 " + l * 10 + " 0 0";
            } else {
              a = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
            }
            r.setAttribute("stroke-dasharray", a);
          }
        }
        if (t || this.filterManager.effectElements[4].p._mdf) {
          this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2);
        }
        if (t || this.filterManager.effectElements[6].p._mdf) {
          this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v);
        }
        if ((this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
          var f = this.filterManager.effectElements[3].p.v;
          this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(f[0] * 255) + "," + bmFloor(f[1] * 255) + "," + bmFloor(f[2] * 255) + ")");
        }
      };
      SVGTritoneFilter.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e = this.filterManager.effectElements[0].p.v;
          var i = this.filterManager.effectElements[1].p.v;
          var s = this.filterManager.effectElements[2].p.v;
          var r = s[0] + " " + i[0] + " " + e[0];
          var a = s[1] + " " + i[1] + " " + e[1];
          var n = s[2] + " " + i[2] + " " + e[2];
          this.feFuncR.setAttribute("tableValues", r);
          this.feFuncG.setAttribute("tableValues", a);
          this.feFuncB.setAttribute("tableValues", n);
        }
      };
      SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
        var i = createNS(t);
        i.setAttribute("type", "table");
        e.appendChild(i);
        return i;
      };
      SVGProLevelsFilter.prototype.getTableValue = function (t, e, i, s, r) {
        var a;
        var n;
        var o = 0;
        var h = 256;
        var l = Math.min(t, e);
        var p = Math.max(t, e);
        var f = Array.call(null, {
          length: 256
        });
        var c = 0;
        var m = r - s;
        var u = e - t;
        while (o <= 256) {
          n = (a = o / 256) <= l ? u < 0 ? r : s : a >= p ? u < 0 ? s : r : s + m * Math.pow((a - t) / u, 1 / i);
          f[c] = n;
          c += 1;
          o += 256 / (h - 1);
        }
        return f.join(" ");
      };
      SVGProLevelsFilter.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e;
          var i = this.filterManager.effectElements;
          if (this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf)) {
            e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v);
            this.feFuncRComposed.setAttribute("tableValues", e);
            this.feFuncGComposed.setAttribute("tableValues", e);
            this.feFuncBComposed.setAttribute("tableValues", e);
          }
          if (this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf)) {
            e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v);
            this.feFuncR.setAttribute("tableValues", e);
          }
          if (this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf)) {
            e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v);
            this.feFuncG.setAttribute("tableValues", e);
          }
          if (this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf)) {
            e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v);
            this.feFuncB.setAttribute("tableValues", e);
          }
          if (this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf)) {
            e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v);
            this.feFuncA.setAttribute("tableValues", e);
          }
        }
      };
      extendPrototype([SVGComposableEffect], SVGDropShadowEffect);
      SVGDropShadowEffect.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          if (t || this.filterManager.effectElements[4].p._mdf) {
            this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4);
          }
          if (t || this.filterManager.effectElements[0].p._mdf) {
            var e = this.filterManager.effectElements[0].p.v;
            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(e[0] * 255), Math.round(e[1] * 255), Math.round(e[2] * 255)));
          }
          if (t || this.filterManager.effectElements[1].p._mdf) {
            this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255);
          }
          if (t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
            var i = this.filterManager.effectElements[3].p.v;
            var s = (this.filterManager.effectElements[2].p.v - 90) * degToRads;
            var r = i * Math.cos(s);
            var a = i * Math.sin(s);
            this.feOffset.setAttribute("dx", r);
            this.feOffset.setAttribute("dy", a);
          }
        }
      };
      var _svgMatteSymbols = [];
      function SVGMatte3Effect(t, e, i) {
        this.initialized = false;
        this.filterManager = e;
        this.filterElem = t;
        this.elem = i;
        i.matteElement = createNS("g");
        i.matteElement.appendChild(i.layerElement);
        i.matteElement.appendChild(i.transformedElement);
        i.baseElement = i.matteElement;
      }
      function SVGGaussianBlurEffect(t, e, i, s) {
        t.setAttribute("x", "-100%");
        t.setAttribute("y", "-100%");
        t.setAttribute("width", "300%");
        t.setAttribute("height", "300%");
        this.filterManager = e;
        var r = createNS("feGaussianBlur");
        r.setAttribute("result", s);
        t.appendChild(r);
        this.feGaussianBlur = r;
      }
      function TransformEffect() {}
      function SVGTransformEffect(t, e) {
        this.init(e);
      }
      function CVTransformEffect(t) {
        this.init(t);
      }
      SVGMatte3Effect.prototype.findSymbol = function (t) {
        var e = 0;
        var i = _svgMatteSymbols.length;
        while (e < i) {
          if (_svgMatteSymbols[e] === t) {
            return _svgMatteSymbols[e];
          }
          e += 1;
        }
        return null;
      };
      SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
        var i;
        var s = t.layerElement.parentNode;
        if (s) {
          var r = s.children;
          var a = 0;
          var n = r.length;
          while (a < n && r[a] !== t.layerElement) {
            a += 1;
          }
          if (a <= n - 2) {
            i = r[a + 1];
          }
          var o = createNS("use");
          o.setAttribute("href", "#" + e);
          if (i) {
            s.insertBefore(o, i);
          } else {
            s.appendChild(o);
          }
        }
      };
      SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
        if (!this.findSymbol(e)) {
          var i = createElementID();
          var s = createNS("mask");
          s.setAttribute("id", e.layerId);
          s.setAttribute("mask-type", "alpha");
          _svgMatteSymbols.push(e);
          var r = t.globalData.defs;
          r.appendChild(s);
          var a = createNS("symbol");
          a.setAttribute("id", i);
          this.replaceInParent(e, i);
          a.appendChild(e.layerElement);
          r.appendChild(a);
          var n = createNS("use");
          n.setAttribute("href", "#" + i);
          s.appendChild(n);
          e.data.hd = false;
          e.show();
        }
        t.setMatte(e.layerId);
      };
      SVGMatte3Effect.prototype.initialize = function () {
        var t = this.filterManager.effectElements[0].p.v;
        var e = this.elem.comp.elements;
        var i = 0;
        var s = e.length;
        while (i < s) {
          if (e[i] && e[i].data.ind === t) {
            this.setElementAsMask(this.elem, e[i]);
          }
          i += 1;
        }
        this.initialized = true;
      };
      SVGMatte3Effect.prototype.renderFrame = function () {
        if (!this.initialized) {
          this.initialize();
        }
      };
      SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
        if (t || this.filterManager._mdf) {
          var e = 0.3;
          var i = this.filterManager.effectElements[0].p.v * e;
          var s = this.filterManager.effectElements[1].p.v;
          var r = s == 3 ? 0 : i;
          var a = s == 2 ? 0 : i;
          this.feGaussianBlur.setAttribute("stdDeviation", r + " " + a);
          var n = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
          this.feGaussianBlur.setAttribute("edgeMode", n);
        }
      };
      TransformEffect.prototype.init = function (t) {
        this.effectsManager = t;
        this.type = effectTypes.TRANSFORM_EFFECT;
        this.matrix = new Matrix();
        this.opacity = -1;
        this._mdf = false;
        this._opMdf = false;
      };
      TransformEffect.prototype.renderFrame = function (t) {
        this._opMdf = false;
        this._mdf = false;
        if (t || this.effectsManager._mdf) {
          var e = this.effectsManager.effectElements;
          var i = e[0].p.v;
          var s = e[1].p.v;
          var r = e[2].p.v === 1;
          var a = e[3].p.v;
          var n = r ? a : e[4].p.v;
          var o = e[5].p.v;
          var h = e[6].p.v;
          var l = e[7].p.v;
          this.matrix.reset();
          this.matrix.translate(-i[0], -i[1], i[2]);
          this.matrix.scale(n * 0.01, a * 0.01, 1);
          this.matrix.rotate(-l * degToRads);
          this.matrix.skewFromAxis(-o * degToRads, (h + 90) * degToRads);
          this.matrix.translate(s[0], s[1], 0);
          this._mdf = true;
          if (this.opacity !== e[8].p.v) {
            this.opacity = e[8].p.v;
            this._opMdf = true;
          }
        }
      };
      extendPrototype([TransformEffect], SVGTransformEffect);
      extendPrototype([TransformEffect], CVTransformEffect);
      registerRenderer("canvas", CanvasRenderer);
      registerRenderer("html", HybridRenderer);
      registerRenderer("svg", SVGRenderer);
      ShapeModifiers.registerModifier("tm", TrimModifier);
      ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier);
      ShapeModifiers.registerModifier("rp", RepeaterModifier);
      ShapeModifiers.registerModifier("rd", RoundCornersModifier);
      ShapeModifiers.registerModifier("zz", ZigZagModifier);
      ShapeModifiers.registerModifier("op", OffsetPathModifier);
      setExpressionsPlugin(Expressions);
      setExpressionInterfaces(getInterface);
      initialize$1();
      initialize();
      registerEffect$1(20, SVGTintFilter, true);
      registerEffect$1(21, SVGFillFilter, true);
      registerEffect$1(22, SVGStrokeEffect, false);
      registerEffect$1(23, SVGTritoneFilter, true);
      registerEffect$1(24, SVGProLevelsFilter, true);
      registerEffect$1(25, SVGDropShadowEffect, true);
      registerEffect$1(28, SVGMatte3Effect, false);
      registerEffect$1(29, SVGGaussianBlurEffect, true);
      registerEffect$1(35, SVGTransformEffect, false);
      registerEffect(35, CVTransformEffect);
      return lottie;
    });
  }
}