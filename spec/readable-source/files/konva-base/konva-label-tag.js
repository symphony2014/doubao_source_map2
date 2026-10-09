// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaShapeBase'
// - Resolved require(790913) to 'konva-shape-base'
// - Renamed variable 'n' to 'konvaGroupNode'
// - Resolved require(215538) to 'konva-group-node'
// - Renamed variable 's' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// - Renamed variable 'o' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 205008
         */
module.exports = function (module, exports, require) {
  exports.Tag = exports.Label = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaGroupNode = require("konva-group-node") /*id: 215538*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  var h = ["fontFamily", "fontSize", "fontStyle", "padding", "lineHeight", "text", "width", "height", "pointerDirection", "pointerWidth", "pointerHeight"];
  var l = "right";
  var d = "down";
  var c = "left";
  var u = h.length;
  class f extends konvaGroupNode.Group {
    constructor(t) {
      super(t);
      this.on("add.konva", function (t) {
        this._addListeners(t.child);
        this._sync();
      });
    }
    getText() {
      return this.find("Text")[0];
    }
    getTag() {
      return this.find("Tag")[0];
    }
    _addListeners(t) {
      var e;
      var i = this;
      function r() {
        i._sync();
      }
      for (e = 0; e < u; e++) {
        t.on(h[e] + "Change.konva", r);
      }
    }
    getWidth() {
      return this.getText().width();
    }
    getHeight() {
      return this.getText().height();
    }
    _sync() {
      var t;
      var e;
      var i;
      var r;
      var a;
      var n;
      var s;
      var o = this.getText();
      var h = this.getTag();
      if (o && h) {
        t = o.width();
        e = o.height();
        i = h.pointerDirection();
        r = h.pointerWidth();
        s = h.pointerHeight();
        a = 0;
        n = 0;
        switch (i) {
          case "up":
            a = t / 2;
            n = s * -1;
            break;
          case l:
            a = t + r;
            n = e / 2;
            break;
          case d:
            a = t / 2;
            n = e + s;
            break;
          case c:
            a = r * -1;
            n = e / 2;
        }
        h.setAttrs({
          x: a * -1,
          y: n * -1,
          width: t,
          height: e
        });
        o.setAttrs({
          x: a * -1,
          y: n * -1
        });
      }
    }
  }
  exports.Label = f;
  f.prototype.className = "Label";
  konvaCoreConfig._registerNode(f);
  class g extends konvaShapeBase.Shape {
    _sceneFunc(t) {
      var e = this.width();
      var i = this.height();
      var r = this.pointerDirection();
      var a = this.pointerWidth();
      var n = this.pointerHeight();
      var s = this.cornerRadius();
      let o = 0;
      let h = 0;
      let u = 0;
      let f = 0;
      if (typeof s == "number") {
        o = h = u = f = Math.min(s, e / 2, i / 2);
      } else {
        o = Math.min(s[0] || 0, e / 2, i / 2);
        h = Math.min(s[1] || 0, e / 2, i / 2);
        f = Math.min(s[2] || 0, e / 2, i / 2);
        u = Math.min(s[3] || 0, e / 2, i / 2);
      }
      t.beginPath();
      t.moveTo(o, 0);
      if (r === "up") {
        t.lineTo((e - a) / 2, 0);
        t.lineTo(e / 2, n * -1);
        t.lineTo((e + a) / 2, 0);
      }
      t.lineTo(e - h, 0);
      t.arc(e - h, h, h, Math.PI * 3 / 2, 0, false);
      if (r === l) {
        t.lineTo(e, (i - n) / 2);
        t.lineTo(e + a, i / 2);
        t.lineTo(e, (i + n) / 2);
      }
      t.lineTo(e, i - f);
      t.arc(e - f, i - f, f, 0, Math.PI / 2, false);
      if (r === d) {
        t.lineTo((e + a) / 2, i);
        t.lineTo(e / 2, i + n);
        t.lineTo((e - a) / 2, i);
      }
      t.lineTo(u, i);
      t.arc(u, i - u, u, Math.PI / 2, Math.PI, false);
      if (r === c) {
        t.lineTo(0, (i + n) / 2);
        t.lineTo(a * -1, i / 2);
        t.lineTo(0, (i - n) / 2);
      }
      t.lineTo(0, o);
      t.arc(o, o, o, Math.PI, Math.PI * 3 / 2, false);
      t.closePath();
      t.fillStrokeShape(this);
    }
    getSelfRect() {
      var t = 0;
      var e = 0;
      var i = this.pointerWidth();
      var r = this.pointerHeight();
      var a = this.pointerDirection();
      var n = this.width();
      var s = this.height();
      if (a === "up") {
        e -= r;
        s += r;
      } else if (a === d) {
        s += r;
      } else if (a === c) {
        t -= i * 1.5;
        n += i;
      } else if (a === l) {
        n += i * 1.5;
      }
      return {
        x: t,
        y: e,
        width: n,
        height: s
      };
    }
  }
  exports.Tag = g;
  g.prototype.className = "Tag";
  konvaCoreConfig._registerNode(g);
  konvaPropertyFactory.Factory.addGetterSetter(g, "pointerDirection", "none");
  konvaPropertyFactory.Factory.addGetterSetter(g, "pointerWidth", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(g, "pointerHeight", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(g, "cornerRadius", 0, konvaPropertyValidators.getNumberOrArrayOfNumbersValidator(4));
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}