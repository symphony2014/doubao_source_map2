// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typescriptRuntimeHelpers'
// - Resolved require(4100) to 'typescript-runtime-helpers'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'mouseWheelNormalizer'
// - Resolved require(578332) to 'mouse-wheel-normalizer'
// - Updated imported property 'pi' to 'objectAssign' (module 4100)
// - Updated imported property 'ZT' to 'classExtends' (module 4100)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: react-easy-crop.320047a5.js
         * chunkId: 26549
         * moduleId: 914264
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var mouseWheelNormalizer = require("mouse-wheel-normalizer") /*id: 578332*/;
  var a = mouseWheelNormalizer;
  function s(e, t, o, n, r = 0) {
    var i = f(t.width, t.height, r);
    var a = i.width;
    var s = i.height;
    return {
      x: c(e.x, a, o.width, n),
      y: c(e.y, s, o.height, n)
    };
  }
  function c(e, t, o, n) {
    var r = t * n / 2 - o / 2;
    return g(e, -r, r);
  }
  function h(e, t) {
    return Math.sqrt(Math.pow(e.y - t.y, 2) + Math.pow(e.x - t.x, 2));
  }
  function p(e, t) {
    return Math.atan2(t.y - e.y, t.x - e.x) * 180 / Math.PI;
  }
  function u(e, t) {
    return Math.min(e, Math.max(0, t));
  }
  function d(e, t) {
    return t;
  }
  function l(e, t, o, n, r, i) {
    var a = f(t.width, t.height, o);
    var s = g(n.width / a.width * (100 / e.width), r, i);
    return {
      crop: {
        x: s * a.width / 2 - n.width / 2 - a.width * s * (e.x / 100),
        y: s * a.height / 2 - n.height / 2 - a.height * s * (e.y / 100)
      },
      zoom: s
    };
  }
  function v(e, t, o = 0, n, r, i) {
    var a;
    var s = f(t.naturalWidth, t.naturalHeight, o);
    var c = g((a = t.width > t.height ? t.width / t.naturalWidth : t.height / t.naturalHeight, n.height > n.width ? n.height / (e.height * a) : n.width / (e.width * a)), r, i);
    var h = n.height > n.width ? n.height / e.height : n.width / e.width;
    return {
      crop: {
        x: ((s.width - e.width) / 2 - e.x) * h,
        y: ((s.height - e.height) / 2 - e.y) * h
      },
      zoom: c
    };
  }
  function m(e, t) {
    return {
      x: (t.x + e.x) / 2,
      y: (t.y + e.y) / 2
    };
  }
  function f(e, t, o) {
    var n = o * Math.PI / 180;
    return {
      width: Math.abs(Math.cos(n) * e) + Math.abs(Math.sin(n) * t),
      height: Math.abs(Math.sin(n) * e) + Math.abs(Math.cos(n) * t)
    };
  }
  function g(e, t, o) {
    return Math.min(Math.max(e, t), o);
  }
  function w() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return e.filter(function (e) {
      return typeof e == "string" && !!(e.length > 0);
    }).join(" ").trim();
  }
  var C = function (e) {
    function t() {
      var o = e !== null && e.apply(this, arguments) || this;
      o.imageRef = reactCoreLibraryReexport.createRef();
      o.videoRef = reactCoreLibraryReexport.createRef();
      o.containerRef = null;
      o.styleRef = null;
      o.containerRect = null;
      o.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      };
      o.dragStartPosition = {
        x: 0,
        y: 0
      };
      o.dragStartCrop = {
        x: 0,
        y: 0
      };
      o.gestureZoomStart = 0;
      o.gestureRotationStart = 0;
      o.isTouching = false;
      o.lastPinchDistance = 0;
      o.lastPinchRotation = 0;
      o.rafDragTimeout = null;
      o.rafPinchTimeout = null;
      o.wheelTimer = null;
      o.currentDoc = typeof document != "undefined" ? document : null;
      o.currentWindow = typeof window != "undefined" ? window : null;
      o.resizeObserver = null;
      o.state = {
        cropSize: null,
        hasWheelJustStarted: false
      };
      o.initResizeObserver = function () {
        if (window.ResizeObserver !== undefined && o.containerRef) {
          var e = true;
          o.resizeObserver = new window.ResizeObserver(function (t) {
            if (e) {
              e = false;
              return;
            }
            o.computeSizes();
          });
          o.resizeObserver.observe(o.containerRef);
        }
      };
      o.preventZoomSafari = function (e) {
        return e.preventDefault();
      };
      o.cleanEvents = function () {
        if (o.currentDoc) {
          o.currentDoc.removeEventListener("mousemove", o.onMouseMove);
          o.currentDoc.removeEventListener("mouseup", o.onDragStopped);
          o.currentDoc.removeEventListener("touchmove", o.onTouchMove);
          o.currentDoc.removeEventListener("touchend", o.onDragStopped);
          o.currentDoc.removeEventListener("gesturemove", o.onGestureMove);
          o.currentDoc.removeEventListener("gestureend", o.onGestureEnd);
        }
      };
      o.clearScrollEvent = function () {
        if (o.containerRef) {
          o.containerRef.removeEventListener("wheel", o.onWheel);
        }
        if (o.wheelTimer) {
          clearTimeout(o.wheelTimer);
        }
      };
      o.onMediaLoad = function () {
        var e = o.computeSizes();
        if (e) {
          o.emitCropData();
          o.setInitialCrop(e);
        }
        if (o.props.onMediaLoaded) {
          o.props.onMediaLoaded(o.mediaSize);
        }
      };
      o.setInitialCrop = function (e) {
        if (o.props.initialCroppedAreaPercentages) {
          var t = l(o.props.initialCroppedAreaPercentages, o.mediaSize, o.props.rotation, e, o.props.minZoom, o.props.maxZoom);
          var n = t.crop;
          var r = t.zoom;
          o.props.onCropChange(n);
          if (o.props.onZoomChange) {
            o.props.onZoomChange(r);
          }
        } else if (o.props.initialCroppedAreaPixels) {
          var i = v(o.props.initialCroppedAreaPixels, o.mediaSize, o.props.rotation, e, o.props.minZoom, o.props.maxZoom);
          var n = i.crop;
          var r = i.zoom;
          o.props.onCropChange(n);
          if (o.props.onZoomChange) {
            o.props.onZoomChange(r);
          }
        }
      };
      o.computeSizes = function () {
        var c = o.imageRef.current || o.videoRef.current;
        if (c && o.containerRef) {
          o.containerRect = o.containerRef.getBoundingClientRect();
          var h;
          var p;
          var u;
          var d;
          var l;
          var v;
          var m;
          var g;
          var w;
          var C;
          var S;
          var y = o.containerRect.width / o.containerRect.height;
          var R = o.imageRef.current?.naturalWidth || o.videoRef.current?.videoWidth || 0;
          var z = o.imageRef.current?.naturalHeight || o.videoRef.current?.videoHeight || 0;
          var x = c.offsetWidth < R || c.offsetHeight < z;
          var D = R / z;
          var M = undefined;
          if (x) {
            switch (o.getObjectFit()) {
              default:
              case "contain":
                M = y > D ? {
                  width: o.containerRect.height * D,
                  height: o.containerRect.height
                } : {
                  width: o.containerRect.width,
                  height: o.containerRect.width / D
                };
                break;
              case "horizontal-cover":
                M = {
                  width: o.containerRect.width,
                  height: o.containerRect.width / D
                };
                break;
              case "vertical-cover":
                M = {
                  width: o.containerRect.height * D,
                  height: o.containerRect.height
                };
            }
          } else {
            M = {
              width: c.offsetWidth,
              height: c.offsetHeight
            };
          }
          o.mediaSize = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, M), {
            naturalWidth: R,
            naturalHeight: z
          });
          if (o.props.setMediaSize) {
            o.props.setMediaSize(o.mediaSize);
          }
          var E = o.props.cropSize ? o.props.cropSize : (h = o.mediaSize.width, p = o.mediaSize.height, u = o.containerRect.width, d = o.containerRect.height, l = o.props.aspect, (v = o.props.rotation) === undefined && (v = 0), g = (m = f(h, p, v)).width, w = m.height, (C = Math.min(g, u)) > (S = Math.min(w, d)) * l ? {
            width: S * l,
            height: S
          } : {
            width: C,
            height: C / l
          });
          if ((o.state.cropSize?.height !== E.height || o.state.cropSize?.width !== E.width) && o.props.onCropSizeChange) {
            o.props.onCropSizeChange(E);
          }
          o.setState({
            cropSize: E
          }, o.recomputeCropPosition);
          if (o.props.setCropSize) {
            o.props.setCropSize(E);
          }
          return E;
        }
      };
      o.onMouseDown = function (e) {
        if (o.currentDoc) {
          e.preventDefault();
          o.currentDoc.addEventListener("mousemove", o.onMouseMove);
          o.currentDoc.addEventListener("mouseup", o.onDragStopped);
          o.onDragStart(t.getMousePoint(e));
        }
      };
      o.onMouseMove = function (e) {
        return o.onDrag(t.getMousePoint(e));
      };
      o.onTouchStart = function (e) {
        if (o.currentDoc) {
          o.isTouching = true;
          if (!o.props.onTouchRequest || o.props.onTouchRequest(e)) {
            o.currentDoc.addEventListener("touchmove", o.onTouchMove, {
              passive: false
            });
            o.currentDoc.addEventListener("touchend", o.onDragStopped);
            if (e.touches.length === 2) {
              o.onPinchStart(e);
            } else if (e.touches.length === 1) {
              o.onDragStart(t.getTouchPoint(e.touches[0]));
            }
          }
        }
      };
      o.onTouchMove = function (e) {
        e.preventDefault();
        if (e.touches.length === 2) {
          o.onPinchMove(e);
        } else if (e.touches.length === 1) {
          o.onDrag(t.getTouchPoint(e.touches[0]));
        }
      };
      o.onGestureStart = function (e) {
        if (o.currentDoc) {
          e.preventDefault();
          o.currentDoc.addEventListener("gesturechange", o.onGestureMove);
          o.currentDoc.addEventListener("gestureend", o.onGestureEnd);
          o.gestureZoomStart = o.props.zoom;
          o.gestureRotationStart = o.props.rotation;
        }
      };
      o.onGestureMove = function (e) {
        e.preventDefault();
        if (!o.isTouching) {
          var n = t.getMousePoint(e);
          var r = o.gestureZoomStart - 1 + e.scale;
          o.setNewZoom(r, n, {
            shouldUpdatePosition: true
          });
          if (o.props.onRotationChange) {
            var i = o.gestureRotationStart + e.rotation;
            o.props.onRotationChange(i);
          }
        }
      };
      o.onGestureEnd = function (e) {
        o.cleanEvents();
      };
      o.onDragStart = function (e) {
        var t;
        var r;
        var i = e.x;
        var a = e.y;
        o.dragStartPosition = {
          x: i,
          y: a
        };
        o.dragStartCrop = typescriptRuntimeHelpers.objectAssign({}, o.props.crop);
        if ((r = (t = o.props).onInteractionStart) !== null && r !== undefined) {
          r.call(t);
        }
      };
      o.onDrag = function (e) {
        var t = e.x;
        var n = e.y;
        if (o.currentWindow) {
          if (o.rafDragTimeout) {
            o.currentWindow.cancelAnimationFrame(o.rafDragTimeout);
          }
          o.rafDragTimeout = o.currentWindow.requestAnimationFrame(function () {
            if (o.state.cropSize && t !== undefined && n !== undefined) {
              var e = t - o.dragStartPosition.x;
              var r = n - o.dragStartPosition.y;
              var i = {
                x: o.dragStartCrop.x + e,
                y: o.dragStartCrop.y + r
              };
              var a = o.props.restrictPosition ? s(i, o.mediaSize, o.state.cropSize, o.props.zoom, o.props.rotation) : i;
              o.props.onCropChange(a);
            }
          });
        }
      };
      o.onDragStopped = function () {
        var e;
        var t;
        o.isTouching = false;
        o.cleanEvents();
        o.emitCropData();
        if ((t = (e = o.props).onInteractionEnd) !== null && t !== undefined) {
          t.call(e);
        }
      };
      o.onWheel = function (e) {
        if (o.currentWindow && (!o.props.onWheelRequest || o.props.onWheelRequest(e))) {
          e.preventDefault();
          var n = t.getMousePoint(e);
          var r = a(e).pixelY;
          var i = o.props.zoom - r * o.props.zoomSpeed / 200;
          o.setNewZoom(i, n, {
            shouldUpdatePosition: true
          });
          if (!o.state.hasWheelJustStarted) {
            o.setState({
              hasWheelJustStarted: true
            }, function () {
              var e;
              var t;
              if ((t = (e = o.props).onInteractionStart) === null || t === undefined) {
                return undefined;
              } else {
                return t.call(e);
              }
            });
          }
          if (o.wheelTimer) {
            clearTimeout(o.wheelTimer);
          }
          o.wheelTimer = o.currentWindow.setTimeout(function () {
            return o.setState({
              hasWheelJustStarted: false
            }, function () {
              var e;
              var t;
              if ((t = (e = o.props).onInteractionEnd) === null || t === undefined) {
                return undefined;
              } else {
                return t.call(e);
              }
            });
          }, 250);
        }
      };
      o.getPointOnContainer = function (e) {
        var t = e.x;
        var n = e.y;
        if (!o.containerRect) {
          throw Error("The Cropper is not mounted");
        }
        return {
          x: o.containerRect.width / 2 - (t - o.containerRect.left),
          y: o.containerRect.height / 2 - (n - o.containerRect.top)
        };
      };
      o.getPointOnMedia = function (e) {
        var t = e.x;
        var n = e.y;
        var r = o.props;
        var i = r.crop;
        var a = r.zoom;
        return {
          x: (t + i.x) / a,
          y: (n + i.y) / a
        };
      };
      o.setNewZoom = function (e, t, n) {
        var r = (n === undefined ? {} : n).shouldUpdatePosition;
        if (o.state.cropSize && o.props.onZoomChange) {
          var i = g(e, o.props.minZoom, o.props.maxZoom);
          if (r === undefined || r) {
            var a = o.getPointOnContainer(t);
            var c = o.getPointOnMedia(a);
            var h = {
              x: c.x * i - a.x,
              y: c.y * i - a.y
            };
            var p = o.props.restrictPosition ? s(h, o.mediaSize, o.state.cropSize, i, o.props.rotation) : h;
            o.props.onCropChange(p);
          }
          o.props.onZoomChange(i);
        }
      };
      o.getCropData = function () {
        var e;
        var t;
        var r;
        var i;
        var a;
        var c;
        var h;
        var p;
        var l;
        var v;
        var m;
        var g;
        var w;
        var C;
        var S;
        if (o.state.cropSize) {
          e = o.props.restrictPosition ? s(o.props.crop, o.mediaSize, o.state.cropSize, o.props.zoom, o.props.rotation) : o.props.crop;
          t = o.mediaSize;
          r = o.state.cropSize;
          i = o.getAspect();
          a = o.props.zoom;
          c = o.props.rotation;
          h = o.props.restrictPosition;
          if (c === undefined) {
            c = 0;
          }
          if (h === undefined) {
            h = true;
          }
          p = h ? u : d;
          l = f(t.width, t.height, c);
          v = f(t.naturalWidth, t.naturalHeight, c);
          m = {
            x: p(100, ((l.width - r.width / a) / 2 - e.x / a) / l.width * 100),
            y: p(100, ((l.height - r.height / a) / 2 - e.y / a) / l.height * 100),
            width: p(100, r.width / l.width * 100 / a),
            height: p(100, r.height / l.height * 100 / a)
          };
          g = Math.round(p(v.width, m.width * v.width / 100));
          w = Math.round(p(v.height, m.height * v.height / 100));
          C = v.width >= v.height * i ? {
            width: Math.round(w * i),
            height: w
          } : {
            width: g,
            height: Math.round(g / i)
          };
          S = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, C), {
            x: Math.round(p(v.width - C.width, m.x * v.width / 100)),
            y: Math.round(p(v.height - C.height, m.y * v.height / 100))
          });
          return {
            croppedAreaPercentages: m,
            croppedAreaPixels: S
          };
        } else {
          return null;
        }
      };
      o.emitCropData = function () {
        var e = o.getCropData();
        if (e) {
          var t = e.croppedAreaPercentages;
          var n = e.croppedAreaPixels;
          if (o.props.onCropComplete) {
            o.props.onCropComplete(t, n);
          }
          if (o.props.onCropAreaChange) {
            o.props.onCropAreaChange(t, n);
          }
        }
      };
      o.emitCropAreaChange = function () {
        var e = o.getCropData();
        if (e) {
          var t = e.croppedAreaPercentages;
          var n = e.croppedAreaPixels;
          if (o.props.onCropAreaChange) {
            o.props.onCropAreaChange(t, n);
          }
        }
      };
      o.recomputeCropPosition = function () {
        if (o.state.cropSize) {
          var e = o.props.restrictPosition ? s(o.props.crop, o.mediaSize, o.state.cropSize, o.props.zoom, o.props.rotation) : o.props.crop;
          o.props.onCropChange(e);
          o.emitCropData();
        }
      };
      return o;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    t.prototype.componentDidMount = function () {
      if (this.currentDoc && this.currentWindow) {
        if (this.containerRef) {
          if (this.containerRef.ownerDocument) {
            this.currentDoc = this.containerRef.ownerDocument;
          }
          if (this.currentDoc.defaultView) {
            this.currentWindow = this.currentDoc.defaultView;
          }
          this.initResizeObserver();
          if (window.ResizeObserver === undefined) {
            this.currentWindow.addEventListener("resize", this.computeSizes);
          }
          if (this.props.zoomWithScroll) {
            this.containerRef.addEventListener("wheel", this.onWheel, {
              passive: false
            });
          }
          this.containerRef.addEventListener("gesturestart", this.onGestureStart);
        }
        if (!this.props.disableAutomaticStylesInjection) {
          this.styleRef = this.currentDoc.createElement("style");
          this.styleRef.setAttribute("type", "text/css");
          if (this.props.nonce) {
            this.styleRef.setAttribute("nonce", this.props.nonce);
          }
          this.styleRef.innerHTML = ".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n";
          this.currentDoc.head.appendChild(this.styleRef);
        }
        if (this.imageRef.current && this.imageRef.current.complete) {
          this.onMediaLoad();
        }
        if (this.props.setImageRef) {
          this.props.setImageRef(this.imageRef);
        }
        if (this.props.setVideoRef) {
          this.props.setVideoRef(this.videoRef);
        }
      }
    };
    t.prototype.componentWillUnmount = function () {
      var e;
      var t;
      if (this.currentDoc && this.currentWindow) {
        if (window.ResizeObserver === undefined) {
          this.currentWindow.removeEventListener("resize", this.computeSizes);
        }
        if ((e = this.resizeObserver) !== null && e !== undefined) {
          e.disconnect();
        }
        if (this.containerRef) {
          this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari);
        }
        if (this.styleRef) {
          if ((t = this.styleRef.parentNode) !== null && t !== undefined) {
            t.removeChild(this.styleRef);
          }
        }
        this.cleanEvents();
        if (this.props.zoomWithScroll) {
          this.clearScrollEvent();
        }
      }
    };
    t.prototype.componentDidUpdate = function (e) {
      var h;
      if (e.rotation !== this.props.rotation) {
        this.computeSizes();
        this.recomputeCropPosition();
      } else if (e.aspect !== this.props.aspect) {
        this.computeSizes();
      } else if (e.zoom !== this.props.zoom) {
        this.recomputeCropPosition();
      } else if (e.cropSize?.height !== this.props.cropSize?.height || e.cropSize?.width !== this.props.cropSize?.width) {
        this.computeSizes();
      } else if (e.crop?.x !== this.props.crop?.x || e.crop?.y !== this.props.crop?.y) {
        this.emitCropAreaChange();
      }
      if (e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef) {
        if (this.props.zoomWithScroll) {
          this.containerRef.addEventListener("wheel", this.onWheel, {
            passive: false
          });
        } else {
          this.clearScrollEvent();
        }
      }
      if (e.video !== this.props.video) {
        if ((h = this.videoRef.current) !== null && h !== undefined) {
          h.load();
        }
      }
    };
    t.prototype.getAspect = function () {
      var e = this.props;
      var t = e.cropSize;
      var o = e.aspect;
      if (t) {
        return t.width / t.height;
      } else {
        return o;
      }
    };
    t.prototype.getObjectFit = function () {
      if (this.props.objectFit === "cover") {
        if ((this.imageRef.current || this.videoRef.current) && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var r = this.containerRect.width / this.containerRect.height;
          if ((this.imageRef.current?.naturalWidth || this.videoRef.current?.videoWidth || 0) / (this.imageRef.current?.naturalHeight || this.videoRef.current?.videoHeight || 0) < r) {
            return "horizontal-cover";
          } else {
            return "vertical-cover";
          }
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    };
    t.prototype.onPinchStart = function (e) {
      var o = t.getTouchPoint(e.touches[0]);
      var n = t.getTouchPoint(e.touches[1]);
      this.lastPinchDistance = h(o, n);
      this.lastPinchRotation = p(o, n);
      this.onDragStart(m(o, n));
    };
    t.prototype.onPinchMove = function (e) {
      var o = this;
      if (this.currentDoc && this.currentWindow) {
        var n = t.getTouchPoint(e.touches[0]);
        var r = t.getTouchPoint(e.touches[1]);
        var i = m(n, r);
        this.onDrag(i);
        if (this.rafPinchTimeout) {
          this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout);
        }
        this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function () {
          var e = h(n, r);
          var t = o.props.zoom * (e / o.lastPinchDistance);
          o.setNewZoom(t, i, {
            shouldUpdatePosition: false
          });
          o.lastPinchDistance = e;
          var a = p(n, r);
          var s = o.props.rotation + (a - o.lastPinchRotation);
          if (o.props.onRotationChange) {
            o.props.onRotationChange(s);
          }
          o.lastPinchRotation = a;
        });
      }
    };
    t.prototype.render = function () {
      var e = this;
      var t = this.props;
      var o = t.image;
      var i = t.video;
      var a = t.mediaProps;
      var s = t.transform;
      var c = t.crop;
      var h = c.x;
      var p = c.y;
      var u = t.rotation;
      var d = t.zoom;
      var l = t.cropShape;
      var v = t.showGrid;
      var m = t.style;
      var f = m.containerStyle;
      var g = m.cropAreaStyle;
      var C = m.mediaStyle;
      var S = t.classes;
      var y = S.containerClassName;
      var R = S.cropAreaClassName;
      var z = S.mediaClassName;
      var x = this.getObjectFit();
      return reactCoreLibraryReexport.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function (t) {
          return e.containerRef = t;
        },
        "data-testid": "container",
        style: f,
        className: w("reactEasyCrop_Container", y)
      }, o ? reactCoreLibraryReexport.createElement("img", typescriptRuntimeHelpers.objectAssign({
        alt: "",
        className: w("reactEasyCrop_Image", x === "contain" && "reactEasyCrop_Contain", x === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", x === "vertical-cover" && "reactEasyCrop_Cover_Vertical", z)
      }, a, {
        src: o,
        ref: this.imageRef,
        style: typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, C), {
          transform: s || `translate(${h}px, ${p}px) rotate(${u}deg) scale(${d})`
        }),
        onLoad: this.onMediaLoad
      })) : i && reactCoreLibraryReexport.createElement("video", typescriptRuntimeHelpers.objectAssign({
        autoPlay: true,
        loop: true,
        muted: true,
        className: w("reactEasyCrop_Video", x === "contain" && "reactEasyCrop_Contain", x === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", x === "vertical-cover" && "reactEasyCrop_Cover_Vertical", z)
      }, a, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, C), {
          transform: s || `translate(${h}px, ${p}px) rotate(${u}deg) scale(${d})`
        }),
        controls: false
      }), (Array.isArray(i) ? i : [{
        src: i
      }]).map(function (e) {
        return reactCoreLibraryReexport.createElement("source", typescriptRuntimeHelpers.objectAssign({
          key: e.src
        }, e));
      })), this.state.cropSize && reactCoreLibraryReexport.createElement("div", {
        style: typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, g), {
          width: this.state.cropSize.width,
          height: this.state.cropSize.height
        }),
        "data-testid": "cropper",
        className: w("reactEasyCrop_CropArea", l === "round" && "reactEasyCrop_CropAreaRound", v && "reactEasyCrop_CropAreaGrid", R)
      }));
    };
    t.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: 3,
      minZoom: 1,
      cropShape: "rect",
      objectFit: "contain",
      showGrid: true,
      style: {},
      classes: {},
      mediaProps: {},
      zoomSpeed: 1,
      restrictPosition: true,
      zoomWithScroll: true
    };
    t.getMousePoint = function (e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    };
    t.getTouchPoint = function (e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  require.r(exports);
  require.d(exports, {
    default: function () {
      return C;
    },
    getInitialCropFromCroppedAreaPercentages: function () {
      return l;
    },
    getInitialCropFromCroppedAreaPixels: function () {
      return v;
    }
  });
}