// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'a' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'n' to 'konvaContainerNode'
// - Resolved require(757034) to 'konva-container-node'
// - Renamed variable 's' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 'o' to 'konvaCanvasClasses'
// - Resolved require(210164) to 'konva-canvas-classes'
// - Renamed variable 'h' to 'konvaDragDropManager'
// - Resolved require(489337) to 'konva-drag-drop-manager'
// - Renamed variable 'l' to 'konvaCoreConfig_1'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 'd' to 'konvaPointerCaptureUtils'
// - Resolved require(837308) to 'konva-pointer-capture-utils'
// - Updated imported property 'DD' to 'dragDropManager' (module 489337)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 129542
         */
module.exports = function (module, exports, require) {
  exports.Stage = exports.stages = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaContainerNode = require("konva-container-node") /*id: 757034*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaCanvasClasses = require("konva-canvas-classes") /*id: 210164*/;
  let konvaDragDropManager = require("konva-drag-drop-manager") /*id: 489337*/;
  let konvaCoreConfig_1 = require("konva-core-config") /*id: 239057*/;
  let konvaPointerCaptureUtils = require("konva-pointer-capture-utils") /*id: 837308*/;
  var c = "mouseleave";
  var u = "mouseover";
  var f = "mouseenter";
  var g = "mousemove";
  var p = "mousedown";
  var v = "mouseup";
  var m = "pointermove";
  var y = "pointerdown";
  var _ = "pointerup";
  var b = "pointercancel";
  var x = "pointerout";
  var S = "pointerleave";
  var C = "pointerover";
  var w = "pointerenter";
  var P = "contextmenu";
  var T = "touchstart";
  var E = "touchend";
  var M = "touchmove";
  var k = "touchcancel";
  var A = "wheel";
  var O = [[f, "_pointerenter"], [p, "_pointerdown"], [g, "_pointermove"], [v, "_pointerup"], [c, "_pointerleave"], [T, "_pointerdown"], [M, "_pointermove"], [E, "_pointerup"], [k, "_pointercancel"], [u, "_pointerover"], [A, "_wheel"], [P, "_contextmenu"], [y, "_pointerdown"], [m, "_pointermove"], [_, "_pointerup"], [b, "_pointercancel"], ["lostpointercapture", "_lostpointercapture"]];
  let F = {
    mouse: {
      [x]: "mouseout",
      [S]: c,
      [C]: u,
      [w]: f,
      [m]: g,
      [y]: p,
      [_]: v,
      [b]: "mousecancel",
      pointerclick: "click",
      pointerdblclick: "dblclick"
    },
    touch: {
      [x]: "touchout",
      [S]: "touchleave",
      [C]: "touchover",
      [w]: "touchenter",
      [m]: M,
      [y]: T,
      [_]: E,
      [b]: k,
      pointerclick: "tap",
      pointerdblclick: "dbltap"
    },
    pointer: {
      [x]: x,
      [S]: S,
      [C]: C,
      [w]: w,
      [m]: m,
      [y]: y,
      [_]: _,
      [b]: b,
      pointerclick: "pointerclick",
      pointerdblclick: "pointerdblclick"
    }
  };
  let D = t => t.indexOf("pointer") >= 0 ? "pointer" : t.indexOf("touch") >= 0 ? "touch" : "mouse";
  let R = t => {
    let e = D(t);
    if (e === "pointer") {
      return konvaCoreConfig.Konva.pointerEventsEnabled && F.pointer;
    } else if (e === "touch") {
      return F.touch;
    } else if (e === "mouse") {
      return F.mouse;
    } else {
      return undefined;
    }
  };
  function N(t = {}) {
    if (t.clipFunc || t.clipWidth || t.clipHeight) {
      konvaTransformUtil.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups.");
    }
    return t;
  }
  exports.stages = [];
  class G extends konvaContainerNode.Container {
    constructor(t) {
      super(N(t));
      this._pointerPositions = [];
      this._changedPointerPositions = [];
      this._buildDOM();
      this._bindContentEvents();
      exports.stages.push(this);
      this.on("widthChange.konva heightChange.konva", this._resizeDOM);
      this.on("visibleChange.konva", this._checkVisibility);
      this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
        N(this.attrs);
      });
      this._checkVisibility();
    }
    _validateAdd(t) {
      let e = t.getType() === "Layer";
      let i = t.getType() === "FastLayer";
      if (!e && !i) {
        konvaTransformUtil.Util.throw("You may only add layers to the stage.");
      }
    }
    _checkVisibility() {
      if (!this.content) {
        return;
      }
      let t = this.visible() ? "" : "none";
      this.content.style.display = t;
    }
    setContainer(t) {
      if (typeof t == "string") {
        if (t.charAt(0) === ".") {
          var e;
          var i = t.slice(1);
          t = document.getElementsByClassName(i)[0];
        } else {
          e = t.charAt(0) !== "#" ? t : t.slice(1);
          t = document.getElementById(e);
        }
        if (!t) {
          throw "Can not find container in document with id " + e;
        }
      }
      this._setAttr("container", t);
      if (this.content) {
        if (this.content.parentElement) {
          this.content.parentElement.removeChild(this.content);
        }
        t.appendChild(this.content);
      }
      return this;
    }
    shouldDrawHit() {
      return true;
    }
    clear() {
      var t;
      var e = this.children;
      var i = e.length;
      for (t = 0; t < i; t++) {
        e[t].clear();
      }
      return this;
    }
    clone(t) {
      t ||= {};
      t.container = typeof document != "undefined" && document.createElement("div");
      return konvaContainerNode.Container.prototype.clone.call(this, t);
    }
    destroy() {
      super.destroy();
      var t = this.content;
      if (t && konvaTransformUtil.Util._isInDocument(t)) {
        this.container().removeChild(t);
      }
      var i = exports.stages.indexOf(this);
      if (i > -1) {
        exports.stages.splice(i, 1);
      }
      konvaTransformUtil.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas);
      return this;
    }
    getPointerPosition() {
      let t = this._pointerPositions[0] || this._changedPointerPositions[0];
      if (t) {
        return {
          x: t.x,
          y: t.y
        };
      } else {
        konvaTransformUtil.Util.warn("Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);");
        return null;
      }
    }
    _getPointerById(t) {
      return this._pointerPositions.find(e => e.id === t);
    }
    getPointersPositions() {
      return this._pointerPositions;
    }
    getStage() {
      return this;
    }
    getContent() {
      return this.content;
    }
    _toKonvaCanvas(t) {
      (t = t || {}).x = t.x || 0;
      t.y = t.y || 0;
      t.width = t.width || this.width();
      t.height = t.height || this.height();
      var e = new konvaCanvasClasses.SceneCanvas({
        width: t.width,
        height: t.height,
        pixelRatio: t.pixelRatio || 1
      });
      var i = e.getContext()._context;
      var r = this.children;
      if (t.x || t.y) {
        i.translate(t.x * -1, t.y * -1);
      }
      r.forEach(function (e) {
        if (e.isVisible()) {
          var r = e._toKonvaCanvas(t);
          i.drawImage(r._canvas, t.x, t.y, r.getWidth() / r.getPixelRatio(), r.getHeight() / r.getPixelRatio());
        }
      });
      return e;
    }
    getIntersection(t) {
      if (!t) {
        return null;
      }
      var e;
      var i = this.children;
      for (e = i.length - 1; e >= 0; e--) {
        let r = i[e].getIntersection(t);
        if (r) {
          return r;
        }
      }
      return null;
    }
    _resizeDOM() {
      var t = this.width();
      var e = this.height();
      if (this.content) {
        this.content.style.width = t + "px";
        this.content.style.height = e + "px";
      }
      this.bufferCanvas.setSize(t, e);
      this.bufferHitCanvas.setSize(t, e);
      this.children.forEach(i => {
        i.setSize({
          width: t,
          height: e
        });
        i.draw();
      });
    }
    add(t, ...e) {
      if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
          this.add(arguments[i]);
        }
        return this;
      }
      super.add(t);
      var a = this.children.length;
      if (a > 5) {
        konvaTransformUtil.Util.warn("The stage has " + a + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.");
      }
      t.setSize({
        width: this.width(),
        height: this.height()
      });
      t.draw();
      if (konvaCoreConfig.Konva.isBrowser) {
        this.content.appendChild(t.canvas._canvas);
      }
      return this;
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(t) {
      return konvaPointerCaptureUtils.hasPointerCapture(t, this);
    }
    setPointerCapture(t) {
      konvaPointerCaptureUtils.setPointerCapture(t, this);
    }
    releaseCapture(t) {
      konvaPointerCaptureUtils.releaseCapture(t, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      if (konvaCoreConfig.Konva.isBrowser) {
        O.forEach(([t, e]) => {
          this.content.addEventListener(t, t => {
            this[e](t);
          }, {
            passive: false
          });
        });
      }
    }
    _pointerenter(t) {
      this.setPointersPositions(t);
      let e = R(t.type);
      if (e) {
        this._fire(e.pointerenter, {
          evt: t,
          target: this,
          currentTarget: this
        });
      }
    }
    _pointerover(t) {
      this.setPointersPositions(t);
      let e = R(t.type);
      if (e) {
        this._fire(e.pointerover, {
          evt: t,
          target: this,
          currentTarget: this
        });
      }
    }
    _getTargetShape(t) {
      let e = this[t + "targetShape"];
      if (e && !e.getStage()) {
        e = null;
      }
      return e;
    }
    _pointerleave(t) {
      let e = R(t.type);
      let i = D(t.type);
      if (e) {
        this.setPointersPositions(t);
        var r = this._getTargetShape(i);
        var a = !konvaCoreConfig.Konva.isDragging() && !konvaCoreConfig.Konva.isTransforming() || konvaCoreConfig.Konva.hitOnDragEnabled;
        if (r && a) {
          r._fireAndBubble(e.pointerout, {
            evt: t
          });
          r._fireAndBubble(e.pointerleave, {
            evt: t
          });
          this._fire(e.pointerleave, {
            evt: t,
            target: this,
            currentTarget: this
          });
          this[i + "targetShape"] = null;
        } else if (a) {
          this._fire(e.pointerleave, {
            evt: t,
            target: this,
            currentTarget: this
          });
          this._fire(e.pointerout, {
            evt: t,
            target: this,
            currentTarget: this
          });
        }
        this.pointerPos = null;
        this._pointerPositions = [];
      }
    }
    _pointerdown(t) {
      let e = R(t.type);
      let i = D(t.type);
      if (e) {
        this.setPointersPositions(t);
        var r = false;
        this._changedPointerPositions.forEach(a => {
          var n = this.getIntersection(a);
          konvaDragDropManager.dragDropManager.justDragged = false;
          konvaCoreConfig.Konva["_" + i + "ListenClick"] = true;
          if (!n || !n.isListening()) {
            this[i + "ClickStartShape"] = undefined;
            return;
          }
          if (konvaCoreConfig.Konva.capturePointerEventsEnabled) {
            n.setPointerCapture(a.id);
          }
          this[i + "ClickStartShape"] = n;
          n._fireAndBubble(e.pointerdown, {
            evt: t,
            pointerId: a.id
          });
          r = true;
          let o = t.type.indexOf("touch") >= 0;
          if (n.preventDefault() && t.cancelable && o) {
            t.preventDefault();
          }
        });
        if (!r) {
          this._fire(e.pointerdown, {
            evt: t,
            target: this,
            currentTarget: this,
            pointerId: this._pointerPositions[0].id
          });
        }
      }
    }
    _pointermove(t) {
      let e = R(t.type);
      let i = D(t.type);
      if (!e || (konvaCoreConfig.Konva.isDragging() && konvaDragDropManager.dragDropManager.node.preventDefault() && t.cancelable && t.preventDefault(), this.setPointersPositions(t), (!!konvaCoreConfig.Konva.isDragging() || !!konvaCoreConfig.Konva.isTransforming()) && !konvaCoreConfig.Konva.hitOnDragEnabled)) {
        return;
      }
      var r = {};
      let a = false;
      var n = this._getTargetShape(i);
      this._changedPointerPositions.forEach(s => {
        let o = konvaPointerCaptureUtils.getCapturedShape(s.id) || this.getIntersection(s);
        let h = s.id;
        let l = {
          evt: t,
          pointerId: h
        };
        var c = n !== o;
        if (c && n) {
          n._fireAndBubble(e.pointerout, {
            ...l
          }, o);
          n._fireAndBubble(e.pointerleave, {
            ...l
          }, o);
        }
        if (o) {
          if (r[o._id]) {
            return;
          }
          r[o._id] = true;
        }
        if (o && o.isListening()) {
          a = true;
          if (c) {
            o._fireAndBubble(e.pointerover, {
              ...l
            }, n);
            o._fireAndBubble(e.pointerenter, {
              ...l
            }, n);
            this[i + "targetShape"] = o;
          }
          o._fireAndBubble(e.pointermove, {
            ...l
          });
        } else if (n) {
          this._fire(e.pointerover, {
            evt: t,
            target: this,
            currentTarget: this,
            pointerId: h
          });
          this[i + "targetShape"] = null;
        }
      });
      if (!a) {
        this._fire(e.pointermove, {
          evt: t,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
    }
    _pointerup(t) {
      let e = R(t.type);
      let i = D(t.type);
      if (!e) {
        return;
      }
      this.setPointersPositions(t);
      let r = this[i + "ClickStartShape"];
      let a = this[i + "ClickEndShape"];
      var n = {};
      let o = false;
      this._changedPointerPositions.forEach(l => {
        let c = konvaPointerCaptureUtils.getCapturedShape(l.id) || this.getIntersection(l);
        if (c) {
          c.releaseCapture(l.id);
          if (n[c._id]) {
            return;
          }
          n[c._id] = true;
        }
        let u = l.id;
        let f = {
          evt: t,
          pointerId: u
        };
        let g = false;
        if (konvaCoreConfig.Konva["_" + i + "InDblClickWindow"]) {
          g = true;
          clearTimeout(this[i + "DblTimeout"]);
        } else if (!konvaDragDropManager.dragDropManager.justDragged) {
          konvaCoreConfig.Konva["_" + i + "InDblClickWindow"] = true;
          clearTimeout(this[i + "DblTimeout"]);
        }
        this[i + "DblTimeout"] = setTimeout(function () {
          konvaCoreConfig.Konva["_" + i + "InDblClickWindow"] = false;
        }, konvaCoreConfig.Konva.dblClickWindow);
        if (c && c.isListening()) {
          o = true;
          this[i + "ClickEndShape"] = c;
          c._fireAndBubble(e.pointerup, {
            ...f
          });
          if (konvaCoreConfig.Konva["_" + i + "ListenClick"] && r && r === c) {
            c._fireAndBubble(e.pointerclick, {
              ...f
            });
            if (g && a && a === c) {
              c._fireAndBubble(e.pointerdblclick, {
                ...f
              });
            }
          }
        } else {
          this[i + "ClickEndShape"] = null;
          if (konvaCoreConfig.Konva["_" + i + "ListenClick"]) {
            this._fire(e.pointerclick, {
              evt: t,
              target: this,
              currentTarget: this,
              pointerId: u
            });
          }
          if (g) {
            this._fire(e.pointerdblclick, {
              evt: t,
              target: this,
              currentTarget: this,
              pointerId: u
            });
          }
        }
      });
      if (!o) {
        this._fire(e.pointerup, {
          evt: t,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      konvaCoreConfig.Konva["_" + i + "ListenClick"] = false;
      if (t.cancelable && i !== "touch") {
        t.preventDefault();
      }
    }
    _contextmenu(t) {
      this.setPointersPositions(t);
      var e = this.getIntersection(this.getPointerPosition());
      if (e && e.isListening()) {
        e._fireAndBubble(P, {
          evt: t
        });
      } else {
        this._fire(P, {
          evt: t,
          target: this,
          currentTarget: this
        });
      }
    }
    _wheel(t) {
      this.setPointersPositions(t);
      var e = this.getIntersection(this.getPointerPosition());
      if (e && e.isListening()) {
        e._fireAndBubble(A, {
          evt: t
        });
      } else {
        this._fire(A, {
          evt: t,
          target: this,
          currentTarget: this
        });
      }
    }
    _pointercancel(t) {
      this.setPointersPositions(t);
      let e = konvaPointerCaptureUtils.getCapturedShape(t.pointerId) || this.getIntersection(this.getPointerPosition());
      if (e) {
        e._fireAndBubble(_, konvaPointerCaptureUtils.createEvent(t));
      }
      konvaPointerCaptureUtils.releaseCapture(t.pointerId);
    }
    _lostpointercapture(t) {
      konvaPointerCaptureUtils.releaseCapture(t.pointerId);
    }
    setPointersPositions(t) {
      var e = this._getContentPosition();
      var i = null;
      var a = null;
      if ((t = t || window.event).touches !== undefined) {
        this._pointerPositions = [];
        this._changedPointerPositions = [];
        Array.prototype.forEach.call(t.touches, t => {
          this._pointerPositions.push({
            id: t.identifier,
            x: (t.clientX - e.left) / e.scaleX,
            y: (t.clientY - e.top) / e.scaleY
          });
        });
        Array.prototype.forEach.call(t.changedTouches || t.touches, t => {
          this._changedPointerPositions.push({
            id: t.identifier,
            x: (t.clientX - e.left) / e.scaleX,
            y: (t.clientY - e.top) / e.scaleY
          });
        });
      } else {
        i = (t.clientX - e.left) / e.scaleX;
        a = (t.clientY - e.top) / e.scaleY;
        this.pointerPos = {
          x: i,
          y: a
        };
        this._pointerPositions = [{
          x: i,
          y: a,
          id: konvaTransformUtil.Util._getFirstPointerId(t)
        }];
        this._changedPointerPositions = [{
          x: i,
          y: a,
          id: konvaTransformUtil.Util._getFirstPointerId(t)
        }];
      }
    }
    _setPointerPosition(t) {
      konvaTransformUtil.Util.warn("Method _setPointerPosition is deprecated. Use \"stage.setPointersPositions(event)\" instead.");
      this.setPointersPositions(t);
    }
    _getContentPosition() {
      if (!this.content || !this.content.getBoundingClientRect) {
        return {
          top: 0,
          left: 0,
          scaleX: 1,
          scaleY: 1
        };
      }
      var t = this.content.getBoundingClientRect();
      return {
        top: t.top,
        left: t.left,
        scaleX: t.width / this.content.clientWidth || 1,
        scaleY: t.height / this.content.clientHeight || 1
      };
    }
    _buildDOM() {
      this.bufferCanvas = new konvaCanvasClasses.SceneCanvas({
        width: this.width(),
        height: this.height()
      });
      this.bufferHitCanvas = new konvaCanvasClasses.HitCanvas({
        pixelRatio: 1,
        width: this.width(),
        height: this.height()
      });
      if (konvaCoreConfig.Konva.isBrowser) {
        var t = this.container();
        if (!t) {
          throw "Stage has no container. A container is required.";
        }
        t.innerHTML = "";
        this.content = document.createElement("div");
        this.content.style.position = "relative";
        this.content.style.userSelect = "none";
        this.content.className = "konvajs-content";
        this.content.setAttribute("role", "presentation");
        t.appendChild(this.content);
        this._resizeDOM();
      }
    }
    cache() {
      konvaTransformUtil.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.");
      return this;
    }
    clearCache() {
      return this;
    }
    batchDraw() {
      this.getChildren().forEach(function (t) {
        t.batchDraw();
      });
      return this;
    }
  }
  exports.Stage = G;
  G.prototype.nodeType = "Stage";
  konvaCoreConfig_1._registerNode(G);
  konvaPropertyFactory.Factory.addGetterSetter(G, "container");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}