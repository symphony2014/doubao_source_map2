// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'a' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'n' to 'konvaCoreNodeBase'
// - Resolved require(395622) to 'konva-core-node-base'
// - Renamed variable 's' to 'konvaShapeBase'
// - Resolved require(790913) to 'konva-shape-base'
// - Renamed variable 'o' to 'konvaRectShape'
// - Resolved require(268160) to 'konva-rect-shape'
// - Renamed variable 'h' to 'konvaGroupNode'
// - Resolved require(215538) to 'konva-group-node'
// - Renamed variable 'l' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 'd' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// - Renamed variable 'c' to 'konvaCoreConfig_1'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 763702
         */
module.exports = function (module, exports, require) {
  exports.Transformer = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaRectShape = require("konva-rect-shape") /*id: 268160*/;
  let konvaGroupNode = require("konva-group-node") /*id: 215538*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig_1 = require("konva-core-config") /*id: 239057*/;
  var u = "tr-konva";
  var f = ["resizeEnabledChange", "rotateAnchorOffsetChange", "rotateEnabledChange", "enabledAnchorsChange", "anchorSizeChange", "borderEnabledChange", "borderStrokeChange", "borderStrokeWidthChange", "borderDashChange", "anchorStrokeChange", "anchorStrokeWidthChange", "anchorFillChange", "anchorCornerRadiusChange", "ignoreStrokeChange", "anchorStyleFuncChange"].map(t => `${t}.${u}`).join(" ");
  var g = "nodesRect";
  var p = ["widthChange", "heightChange", "scaleXChange", "scaleYChange", "skewXChange", "skewYChange", "rotationChange", "offsetXChange", "offsetYChange", "transformsEnabledChange", "strokeWidthChange"];
  var v = {
    "top-left": -45,
    "top-center": 0,
    "top-right": 45,
    "middle-right": -90,
    "middle-left": 90,
    "bottom-left": -135,
    "bottom-center": 180,
    "bottom-right": 135
  };
  let m = "ontouchstart" in konvaCoreConfig.Konva._global;
  var y = ["top-left", "top-center", "top-right", "middle-right", "middle-left", "bottom-left", "bottom-center", "bottom-right"];
  function _(t, e, i) {
    let r = i.x + (t.x - i.x) * Math.cos(e) - (t.y - i.y) * Math.sin(e);
    let a = i.y + (t.x - i.x) * Math.sin(e) + (t.y - i.y) * Math.cos(e);
    return {
      ...t,
      rotation: t.rotation + e,
      x: r,
      y: a
    };
  }
  let b = 0;
  class x extends konvaGroupNode.Group {
    constructor(t) {
      super(t);
      this._movingAnchorName = null;
      this._transforming = false;
      this._createElements();
      this._handleMouseMove = this._handleMouseMove.bind(this);
      this._handleMouseUp = this._handleMouseUp.bind(this);
      this.update = this.update.bind(this);
      this.on(f, this.update);
      if (this.getNode()) {
        this.update();
      }
    }
    attachTo(t) {
      this.setNode(t);
      return this;
    }
    setNode(t) {
      konvaTransformUtil.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead.");
      return this.setNodes([t]);
    }
    getNode() {
      return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
      return u + this._id;
    }
    setNodes(t = []) {
      if (this._nodes && this._nodes.length) {
        this.detach();
      }
      let e = t.filter(t => !t.isAncestorOf(this) || (konvaTransformUtil.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), false));
      this._nodes = t = e;
      if (t.length === 1 && this.useSingleNodeRotation()) {
        this.rotation(t[0].getAbsoluteRotation());
      } else {
        this.rotation(0);
      }
      this._nodes.forEach(t => {
        let e = () => {
          if (this.nodes().length === 1 && this.useSingleNodeRotation()) {
            this.rotation(this.nodes()[0].getAbsoluteRotation());
          }
          this._resetTransformCache();
          if (!this._transforming && !this.isDragging()) {
            this.update();
          }
        };
        let i = t._attrsAffectingSize.map(t => t + "Change." + this._getEventNamespace()).join(" ");
        t.on(i, e);
        t.on(p.map(t => `${t}.${this._getEventNamespace()}`).join(" "), e);
        t.on(`absoluteTransformChange.${this._getEventNamespace()}`, e);
        this._proxyDrag(t);
      });
      this._resetTransformCache();
      if (this.findOne(".top-left")) {
        this.update();
      }
      return this;
    }
    _proxyDrag(t) {
      let e;
      t.on(`dragstart.${this._getEventNamespace()}`, i => {
        e = t.getAbsolutePosition();
        if (!this.isDragging() && t !== this.findOne(".back")) {
          this.startDrag(i, false);
        }
      });
      t.on(`dragmove.${this._getEventNamespace()}`, i => {
        if (!e) {
          return;
        }
        let r = t.getAbsolutePosition();
        let a = r.x - e.x;
        let n = r.y - e.y;
        this.nodes().forEach(e => {
          if (e === t || e.isDragging()) {
            return;
          }
          let r = e.getAbsolutePosition();
          e.setAbsolutePosition({
            x: r.x + a,
            y: r.y + n
          });
          e.startDrag(i);
        });
        e = null;
      });
    }
    getNodes() {
      return this._nodes || [];
    }
    getActiveAnchor() {
      return this._movingAnchorName;
    }
    detach() {
      if (this._nodes) {
        this._nodes.forEach(t => {
          t.off("." + this._getEventNamespace());
        });
      }
      this._nodes = [];
      this._resetTransformCache();
    }
    _resetTransformCache() {
      this._clearCache(g);
      this._clearCache("transform");
      this._clearSelfAndDescendantCache("absoluteTransform");
    }
    _getNodeRect() {
      return this._getCache(g, this.__getNodeRect);
    }
    __getNodeShape(t, e = this.rotation(), i) {
      var r = t.getClientRect({
        skipTransform: true,
        skipShadow: true,
        skipStroke: this.ignoreStroke()
      });
      var a = t.getAbsoluteScale(i);
      var n = t.getAbsolutePosition(i);
      var s = r.x * a.x - t.offsetX() * a.x;
      var o = r.y * a.y - t.offsetY() * a.y;
      let h = (konvaCoreConfig.Konva.getAngle(t.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2);
      return _({
        x: n.x + s * Math.cos(h) + o * Math.sin(-h),
        y: n.y + o * Math.cos(h) + s * Math.sin(h),
        width: r.width * a.x,
        height: r.height * a.y,
        rotation: h
      }, -konvaCoreConfig.Konva.getAngle(e), {
        x: 0,
        y: 0
      });
    }
    __getNodeRect() {
      if (!this.getNode()) {
        return {
          x: -100000000,
          y: -100000000,
          width: 0,
          height: 0,
          rotation: 0
        };
      }
      let t = [];
      this.nodes().map(e => {
        let i = e.getClientRect({
          skipTransform: true,
          skipShadow: true,
          skipStroke: this.ignoreStroke()
        });
        var r = [{
          x: i.x,
          y: i.y
        }, {
          x: i.x + i.width,
          y: i.y
        }, {
          x: i.x + i.width,
          y: i.y + i.height
        }, {
          x: i.x,
          y: i.y + i.height
        }];
        var a = e.getAbsoluteTransform();
        r.forEach(function (e) {
          var i = a.point(e);
          t.push(i);
        });
      });
      let e = new konvaTransformUtil.Transform();
      e.rotate(-konvaCoreConfig.Konva.getAngle(this.rotation()));
      var i = Infinity;
      var a = Infinity;
      var n = -Infinity;
      var s = -Infinity;
      t.forEach(function (t) {
        var r = e.point(t);
        if (i === undefined) {
          i = n = r.x;
          a = s = r.y;
        }
        i = Math.min(i, r.x);
        a = Math.min(a, r.y);
        n = Math.max(n, r.x);
        s = Math.max(s, r.y);
      });
      e.invert();
      let o = e.point({
        x: i,
        y: a
      });
      return {
        x: o.x,
        y: o.y,
        width: n - i,
        height: s - a,
        rotation: konvaCoreConfig.Konva.getAngle(this.rotation())
      };
    }
    getX() {
      return this._getNodeRect().x;
    }
    getY() {
      return this._getNodeRect().y;
    }
    getWidth() {
      return this._getNodeRect().width;
    }
    getHeight() {
      return this._getNodeRect().height;
    }
    _createElements() {
      this._createBack();
      y.forEach(t => {
        this._createAnchor(t);
      });
      this._createAnchor("rotater");
    }
    _createAnchor(t) {
      var e = new konvaRectShape.Rect({
        stroke: "rgb(0, 161, 255)",
        fill: "white",
        strokeWidth: 1,
        name: t + " _anchor",
        dragDistance: 0,
        draggable: true,
        hitStrokeWidth: m ? 10 : "auto"
      });
      var i = this;
      e.on("mousedown touchstart", function (t) {
        i._handleMouseDown(t);
      });
      e.on("dragstart", t => {
        e.stopDrag();
        t.cancelBubble = true;
      });
      e.on("dragend", t => {
        t.cancelBubble = true;
      });
      e.on("mouseenter", () => {
        var i = function (t, e, i) {
          if (t === "rotater") {
            return i;
          }
          e += konvaTransformUtil.Util.degToRad(v[t] || 0);
          var a = (konvaTransformUtil.Util.radToDeg(e) % 360 + 360) % 360;
          if (konvaTransformUtil.Util._inRange(a, 337.5, 360) || konvaTransformUtil.Util._inRange(a, 0, 22.5)) {
            return "ns-resize";
          }
          if (konvaTransformUtil.Util._inRange(a, 22.5, 67.5)) {
            return "nesw-resize";
          }
          if (konvaTransformUtil.Util._inRange(a, 67.5, 112.5)) {
            return "ew-resize";
          }
          if (konvaTransformUtil.Util._inRange(a, 112.5, 157.5)) {
            return "nwse-resize";
          }
          if (konvaTransformUtil.Util._inRange(a, 157.5, 202.5)) {
            return "ns-resize";
          } else if (konvaTransformUtil.Util._inRange(a, 202.5, 247.5)) {
            return "nesw-resize";
          } else if (konvaTransformUtil.Util._inRange(a, 247.5, 292.5)) {
            return "ew-resize";
          } else if (konvaTransformUtil.Util._inRange(a, 292.5, 337.5)) {
            return "nwse-resize";
          } else {
            konvaTransformUtil.Util.error("Transformer has unknown angle for cursor detection: " + a);
            return "pointer";
          }
        }(t, konvaCoreConfig.Konva.getAngle(this.rotation()), this.rotateAnchorCursor());
        if (e.getStage().content) {
          e.getStage().content.style.cursor = i;
        }
        this._cursorChange = true;
      });
      e.on("mouseout", () => {
        if (e.getStage().content) {
          e.getStage().content.style.cursor = "";
        }
        this._cursorChange = false;
      });
      this.add(e);
    }
    _createBack() {
      var t = new konvaShapeBase.Shape({
        name: "back",
        width: 0,
        height: 0,
        draggable: true,
        sceneFunc(t, e) {
          var i = e.getParent();
          var a = i.padding();
          t.beginPath();
          t.rect(-a, -a, e.width() + a * 2, e.height() + a * 2);
          t.moveTo(e.width() / 2, -a);
          if (i.rotateEnabled() && i.rotateLineVisible()) {
            t.lineTo(e.width() / 2, -i.rotateAnchorOffset() * konvaTransformUtil.Util._sign(e.height()) - a);
          }
          t.fillStrokeShape(e);
        },
        hitFunc: (t, e) => {
          if (this.shouldOverdrawWholeArea()) {
            var i = this.padding();
            t.beginPath();
            t.rect(-i, -i, e.width() + i * 2, e.height() + i * 2);
            t.fillStrokeShape(e);
          }
        }
      });
      this.add(t);
      this._proxyDrag(t);
      t.on("dragstart", t => {
        t.cancelBubble = true;
      });
      t.on("dragmove", t => {
        t.cancelBubble = true;
      });
      t.on("dragend", t => {
        t.cancelBubble = true;
      });
      this.on("dragmove", t => {
        this.update();
      });
    }
    _handleMouseDown(t) {
      this._movingAnchorName = t.target.name().split(" ")[0];
      var e = this._getNodeRect();
      var i = e.width;
      var r = e.height;
      var a = Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2));
      this.sin = Math.abs(r / a);
      this.cos = Math.abs(i / a);
      if (typeof window != "undefined") {
        window.addEventListener("mousemove", this._handleMouseMove);
        window.addEventListener("touchmove", this._handleMouseMove);
        window.addEventListener("mouseup", this._handleMouseUp, true);
        window.addEventListener("touchend", this._handleMouseUp, true);
      }
      this._transforming = true;
      var n = t.target.getAbsolutePosition();
      var s = t.target.getStage().getPointerPosition();
      this._anchorDragOffset = {
        x: s.x - n.x,
        y: s.y - n.y
      };
      b++;
      this._fire("transformstart", {
        evt: t.evt,
        target: this.getNode()
      });
      this._nodes.forEach(e => {
        e._fire("transformstart", {
          evt: t.evt,
          target: e
        });
      });
    }
    _handleMouseMove(t) {
      var e;
      var i;
      var r;
      var a;
      var n = this.findOne("." + this._movingAnchorName);
      var s = n.getStage();
      s.setPointersPositions(t);
      let o = s.getPointerPosition();
      let h = {
        x: o.x - this._anchorDragOffset.x,
        y: o.y - this._anchorDragOffset.y
      };
      let d = n.getAbsolutePosition();
      if (this.anchorDragBoundFunc()) {
        h = this.anchorDragBoundFunc()(d, h, t);
      }
      n.setAbsolutePosition(h);
      let c = n.getAbsolutePosition();
      if (d.x !== c.x || d.y !== c.y) {
        if (this._movingAnchorName === "rotater") {
          var u = this._getNodeRect();
          e = n.x() - u.width / 2;
          let r = Math.atan2(-(i = -n.y() + u.height / 2), e) + Math.PI / 2;
          if (u.height < 0) {
            r -= Math.PI;
          }
          let a = konvaCoreConfig.Konva.getAngle(this.rotation()) + r;
          let s = konvaCoreConfig.Konva.getAngle(this.rotationSnapTolerance());
          let o = function (t, e, i) {
            let r = e;
            for (let a = 0; a < t.length; a++) {
              let n = konvaCoreConfig.Konva.getAngle(t[a]);
              let s = Math.abs(n - e) % (Math.PI * 2);
              if (Math.min(s, Math.PI * 2 - s) < i) {
                r = n;
              }
            }
            return r;
          }(this.rotationSnaps(), a, s) - u.rotation;
          let h = function (t, e) {
            let i = {
              x: t.x + t.width / 2 * Math.cos(t.rotation) + t.height / 2 * Math.sin(-t.rotation),
              y: t.y + t.height / 2 * Math.cos(t.rotation) + t.width / 2 * Math.sin(t.rotation)
            };
            return _(t, e, i);
          }(u, o);
          this._fitNodesInto(h, t);
          return;
        }
        var f = this.shiftBehavior();
        a = f === "inverted" ? this.keepRatio() && !t.shiftKey : f === "none" ? this.keepRatio() : this.keepRatio() || t.shiftKey;
        var g = this.centeredScaling() || t.altKey;
        if (this._movingAnchorName === "top-left") {
          if (a) {
            var p = g ? {
              x: this.width() / 2,
              y: this.height() / 2
            } : {
              x: this.findOne(".bottom-right").x(),
              y: this.findOne(".bottom-right").y()
            };
            r = Math.sqrt(Math.pow(p.x - n.x(), 2) + Math.pow(p.y - n.y(), 2));
            var v = this.findOne(".top-left").x() > p.x ? -1 : 1;
            var m = this.findOne(".top-left").y() > p.y ? -1 : 1;
            e = r * this.cos * v;
            i = r * this.sin * m;
            this.findOne(".top-left").x(p.x - e);
            this.findOne(".top-left").y(p.y - i);
          }
        } else if (this._movingAnchorName === "top-center") {
          this.findOne(".top-left").y(n.y());
        } else if (this._movingAnchorName === "top-right") {
          if (a) {
            var p = g ? {
              x: this.width() / 2,
              y: this.height() / 2
            } : {
              x: this.findOne(".bottom-left").x(),
              y: this.findOne(".bottom-left").y()
            };
            r = Math.sqrt(Math.pow(n.x() - p.x, 2) + Math.pow(p.y - n.y(), 2));
            var v = this.findOne(".top-right").x() < p.x ? -1 : 1;
            var m = this.findOne(".top-right").y() > p.y ? -1 : 1;
            e = r * this.cos * v;
            i = r * this.sin * m;
            this.findOne(".top-right").x(p.x + e);
            this.findOne(".top-right").y(p.y - i);
          }
          var y = n.position();
          this.findOne(".top-left").y(y.y);
          this.findOne(".bottom-right").x(y.x);
        } else if (this._movingAnchorName === "middle-left") {
          this.findOne(".top-left").x(n.x());
        } else if (this._movingAnchorName === "middle-right") {
          this.findOne(".bottom-right").x(n.x());
        } else if (this._movingAnchorName === "bottom-left") {
          if (a) {
            var p = g ? {
              x: this.width() / 2,
              y: this.height() / 2
            } : {
              x: this.findOne(".top-right").x(),
              y: this.findOne(".top-right").y()
            };
            r = Math.sqrt(Math.pow(p.x - n.x(), 2) + Math.pow(n.y() - p.y, 2));
            var v = p.x < n.x() ? -1 : 1;
            var m = n.y() < p.y ? -1 : 1;
            e = r * this.cos * v;
            i = r * this.sin * m;
            n.x(p.x - e);
            n.y(p.y + i);
          }
          y = n.position();
          this.findOne(".top-left").x(y.x);
          this.findOne(".bottom-right").y(y.y);
        } else if (this._movingAnchorName === "bottom-center") {
          this.findOne(".bottom-right").y(n.y());
        } else if (this._movingAnchorName === "bottom-right" && a) {
          var p = g ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          r = Math.sqrt(Math.pow(n.x() - p.x, 2) + Math.pow(n.y() - p.y, 2));
          var v = this.findOne(".bottom-right").x() < p.x ? -1 : 1;
          var m = this.findOne(".bottom-right").y() < p.y ? -1 : 1;
          e = r * this.cos * v;
          i = r * this.sin * m;
          this.findOne(".bottom-right").x(p.x + e);
          this.findOne(".bottom-right").y(p.y + i);
        }
        var g = this.centeredScaling() || t.altKey;
        if (g) {
          var b = this.findOne(".top-left");
          var x = this.findOne(".bottom-right");
          var S = b.x();
          var C = b.y();
          var w = this.getWidth() - x.x();
          var P = this.getHeight() - x.y();
          x.move({
            x: -S,
            y: -C
          });
          b.move({
            x: w,
            y: P
          });
        }
        var T = this.findOne(".top-left").getAbsolutePosition();
        e = T.x;
        i = T.y;
        var E = this.findOne(".bottom-right").x() - this.findOne(".top-left").x();
        var M = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
        this._fitNodesInto({
          x: e,
          y: i,
          width: E,
          height: M,
          rotation: konvaCoreConfig.Konva.getAngle(this.rotation())
        }, t);
      }
    }
    _handleMouseUp(t) {
      this._removeEvents(t);
    }
    getAbsoluteTransform() {
      return this.getTransform();
    }
    _removeEvents(t) {
      var e;
      if (this._transforming) {
        this._transforming = false;
        if (typeof window != "undefined") {
          window.removeEventListener("mousemove", this._handleMouseMove);
          window.removeEventListener("touchmove", this._handleMouseMove);
          window.removeEventListener("mouseup", this._handleMouseUp, true);
          window.removeEventListener("touchend", this._handleMouseUp, true);
        }
        var i = this.getNode();
        b--;
        this._fire("transformend", {
          evt: t,
          target: i
        });
        if ((e = this.getLayer()) !== null && e !== undefined) {
          e.batchDraw();
        }
        if (i) {
          this._nodes.forEach(e => {
            var i;
            e._fire("transformend", {
              evt: t,
              target: e
            });
            if ((i = e.getLayer()) !== null && i !== undefined) {
              i.batchDraw();
            }
          });
        }
        this._movingAnchorName = null;
      }
    }
    _fitNodesInto(t, e) {
      var i = this._getNodeRect();
      if (konvaTransformUtil.Util._inRange(t.width, -(this.padding() * 2) - 1, 1) || konvaTransformUtil.Util._inRange(t.height, -(this.padding() * 2) - 1, 1)) {
        this.update();
        return;
      }
      var a = new konvaTransformUtil.Transform();
      a.rotate(konvaCoreConfig.Konva.getAngle(this.rotation()));
      if (this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
        let e = a.point({
          x: -(this.padding() * 2),
          y: 0
        });
        t.x += e.x;
        t.y += e.y;
        t.width += this.padding() * 2;
        this._movingAnchorName = this._movingAnchorName.replace("left", "right");
        this._anchorDragOffset.x -= e.x;
        this._anchorDragOffset.y -= e.y;
      } else if (this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
        let e = a.point({
          x: this.padding() * 2,
          y: 0
        });
        this._movingAnchorName = this._movingAnchorName.replace("right", "left");
        this._anchorDragOffset.x -= e.x;
        this._anchorDragOffset.y -= e.y;
        t.width += this.padding() * 2;
      }
      if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
        let e = a.point({
          x: 0,
          y: -(this.padding() * 2)
        });
        t.x += e.x;
        t.y += e.y;
        this._movingAnchorName = this._movingAnchorName.replace("top", "bottom");
        this._anchorDragOffset.x -= e.x;
        this._anchorDragOffset.y -= e.y;
        t.height += this.padding() * 2;
      } else if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
        let e = a.point({
          x: 0,
          y: this.padding() * 2
        });
        this._movingAnchorName = this._movingAnchorName.replace("bottom", "top");
        this._anchorDragOffset.x -= e.x;
        this._anchorDragOffset.y -= e.y;
        t.height += this.padding() * 2;
      }
      if (this.boundBoxFunc()) {
        let e = this.boundBoxFunc()(i, t);
        if (e) {
          t = e;
        } else {
          konvaTransformUtil.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
        }
      }
      let n = new konvaTransformUtil.Transform();
      n.translate(i.x, i.y);
      n.rotate(i.rotation);
      n.scale(i.width / 10000000, i.height / 10000000);
      let s = new konvaTransformUtil.Transform();
      let o = t.width / 10000000;
      let h = t.height / 10000000;
      if (this.flipEnabled() === false) {
        s.translate(t.x, t.y);
        s.rotate(t.rotation);
        s.translate(t.width < 0 ? t.width : 0, t.height < 0 ? t.height : 0);
        s.scale(Math.abs(o), Math.abs(h));
      } else {
        s.translate(t.x, t.y);
        s.rotate(t.rotation);
        s.scale(o, h);
      }
      let d = s.multiply(n.invert());
      this._nodes.forEach(t => {
        var e;
        let i = t.getParent().getAbsoluteTransform();
        let a = t.getTransform().copy();
        a.translate(t.offsetX(), t.offsetY());
        let n = new konvaTransformUtil.Transform();
        n.multiply(i.copy().invert()).multiply(d).multiply(i).multiply(a);
        let s = n.decompose();
        t.setAttrs(s);
        if ((e = t.getLayer()) !== null && e !== undefined) {
          e.batchDraw();
        }
      });
      this.rotation(konvaTransformUtil.Util._getRotation(t.rotation));
      this._nodes.forEach(t => {
        this._fire("transform", {
          evt: e,
          target: t
        });
        t._fire("transform", {
          evt: e,
          target: t
        });
      });
      this._resetTransformCache();
      this.update();
      this.getLayer().batchDraw();
    }
    forceUpdate() {
      this._resetTransformCache();
      this.update();
    }
    _batchChangeChild(t, e) {
      this.findOne(t).setAttrs(e);
    }
    update() {
      var t;
      var e = this._getNodeRect();
      this.rotation(konvaTransformUtil.Util._getRotation(e.rotation));
      var i = e.width;
      var a = e.height;
      var n = this.enabledAnchors();
      var s = this.resizeEnabled();
      var o = this.padding();
      var h = this.anchorSize();
      let l = this.find("._anchor");
      l.forEach(t => {
        t.setAttrs({
          width: h,
          height: h,
          offsetX: h / 2,
          offsetY: h / 2,
          stroke: this.anchorStroke(),
          strokeWidth: this.anchorStrokeWidth(),
          fill: this.anchorFill(),
          cornerRadius: this.anchorCornerRadius()
        });
      });
      this._batchChangeChild(".top-left", {
        x: 0,
        y: 0,
        offsetX: h / 2 + o,
        offsetY: h / 2 + o,
        visible: s && n.indexOf("top-left") >= 0
      });
      this._batchChangeChild(".top-center", {
        x: i / 2,
        y: 0,
        offsetY: h / 2 + o,
        visible: s && n.indexOf("top-center") >= 0
      });
      this._batchChangeChild(".top-right", {
        x: i,
        y: 0,
        offsetX: h / 2 - o,
        offsetY: h / 2 + o,
        visible: s && n.indexOf("top-right") >= 0
      });
      this._batchChangeChild(".middle-left", {
        x: 0,
        y: a / 2,
        offsetX: h / 2 + o,
        visible: s && n.indexOf("middle-left") >= 0
      });
      this._batchChangeChild(".middle-right", {
        x: i,
        y: a / 2,
        offsetX: h / 2 - o,
        visible: s && n.indexOf("middle-right") >= 0
      });
      this._batchChangeChild(".bottom-left", {
        x: 0,
        y: a,
        offsetX: h / 2 + o,
        offsetY: h / 2 - o,
        visible: s && n.indexOf("bottom-left") >= 0
      });
      this._batchChangeChild(".bottom-center", {
        x: i / 2,
        y: a,
        offsetY: h / 2 - o,
        visible: s && n.indexOf("bottom-center") >= 0
      });
      this._batchChangeChild(".bottom-right", {
        x: i,
        y: a,
        offsetX: h / 2 - o,
        offsetY: h / 2 - o,
        visible: s && n.indexOf("bottom-right") >= 0
      });
      this._batchChangeChild(".rotater", {
        x: i / 2,
        y: -this.rotateAnchorOffset() * konvaTransformUtil.Util._sign(a) - o,
        visible: this.rotateEnabled()
      });
      this._batchChangeChild(".back", {
        width: i,
        height: a,
        visible: this.borderEnabled(),
        stroke: this.borderStroke(),
        strokeWidth: this.borderStrokeWidth(),
        dash: this.borderDash(),
        x: 0,
        y: 0
      });
      let d = this.anchorStyleFunc();
      if (d) {
        l.forEach(t => {
          d(t);
        });
      }
      if ((t = this.getLayer()) !== null && t !== undefined) {
        t.batchDraw();
      }
    }
    isTransforming() {
      return this._transforming;
    }
    stopTransform() {
      if (this._transforming) {
        this._removeEvents();
        var t = this.findOne("." + this._movingAnchorName);
        if (t) {
          t.stopDrag();
        }
      }
    }
    destroy() {
      if (this.getStage() && this._cursorChange && this.getStage().content) {
        this.getStage().content.style.cursor = "";
      }
      konvaGroupNode.Group.prototype.destroy.call(this);
      this.detach();
      this._removeEvents();
      return this;
    }
    toObject() {
      return konvaCoreNodeBase.Node.prototype.toObject.call(this);
    }
    clone(t) {
      return konvaCoreNodeBase.Node.prototype.clone.call(this, t);
    }
    getClientRect() {
      if (this.nodes().length > 0) {
        return super.getClientRect();
      } else {
        return {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
    }
  }
  exports.Transformer = x;
  x.isTransforming = () => b > 0;
  x.prototype.className = "Transformer";
  konvaCoreConfig_1._registerNode(x);
  konvaPropertyFactory.Factory.addGetterSetter(x, "enabledAnchors", y, function (t) {
    if (!(t instanceof Array)) {
      konvaTransformUtil.Util.warn("enabledAnchors value should be an array");
    }
    if (t instanceof Array) {
      t.forEach(function (t) {
        if (y.indexOf(t) === -1) {
          konvaTransformUtil.Util.warn("Unknown anchor name: " + t + ". Available names are: " + y.join(", "));
        }
      });
    }
    return t || [];
  });
  konvaPropertyFactory.Factory.addGetterSetter(x, "flipEnabled", true, konvaPropertyValidators.getBooleanValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "resizeEnabled", true);
  konvaPropertyFactory.Factory.addGetterSetter(x, "anchorSize", 10, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "rotateEnabled", true);
  konvaPropertyFactory.Factory.addGetterSetter(x, "rotateLineVisible", true);
  konvaPropertyFactory.Factory.addGetterSetter(x, "rotationSnaps", []);
  konvaPropertyFactory.Factory.addGetterSetter(x, "rotateAnchorOffset", 50, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "rotateAnchorCursor", "crosshair");
  konvaPropertyFactory.Factory.addGetterSetter(x, "rotationSnapTolerance", 5, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "borderEnabled", true);
  konvaPropertyFactory.Factory.addGetterSetter(x, "anchorStroke", "rgb(0, 161, 255)");
  konvaPropertyFactory.Factory.addGetterSetter(x, "anchorStrokeWidth", 1, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "anchorFill", "white");
  konvaPropertyFactory.Factory.addGetterSetter(x, "anchorCornerRadius", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "borderStroke", "rgb(0, 161, 255)");
  konvaPropertyFactory.Factory.addGetterSetter(x, "borderStrokeWidth", 1, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "borderDash");
  konvaPropertyFactory.Factory.addGetterSetter(x, "keepRatio", true);
  konvaPropertyFactory.Factory.addGetterSetter(x, "shiftBehavior", "default");
  konvaPropertyFactory.Factory.addGetterSetter(x, "centeredScaling", false);
  konvaPropertyFactory.Factory.addGetterSetter(x, "ignoreStroke", false);
  konvaPropertyFactory.Factory.addGetterSetter(x, "padding", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(x, "node");
  konvaPropertyFactory.Factory.addGetterSetter(x, "nodes");
  konvaPropertyFactory.Factory.addGetterSetter(x, "boundBoxFunc");
  konvaPropertyFactory.Factory.addGetterSetter(x, "anchorDragBoundFunc");
  konvaPropertyFactory.Factory.addGetterSetter(x, "anchorStyleFunc");
  konvaPropertyFactory.Factory.addGetterSetter(x, "shouldOverdrawWholeArea", false);
  konvaPropertyFactory.Factory.addGetterSetter(x, "useSingleNodeRotation", true);
  konvaPropertyFactory.Factory.backCompat(x, {
    lineEnabled: "borderEnabled",
    rotateHandlerOffset: "rotateAnchorOffset",
    enabledHandlers: "enabledAnchors"
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}