// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(388917) to 'flexbox-layout-enums'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 540568
         */
module.exports = function (module, exports, require) {
  exports.default = function (e) {
    function t(e, t, r) {
      let n = e[t];
      e[t] = function () {
        var e = arguments.length;
        var t = Array(e);
        var i = 0;
        for (; i < e; i++) {
          t[i] = arguments[i];
        }
        return r.call(this, n, ...t);
      };
    }
    for (let r of ["setPosition", "setMargin", "setFlexBasis", "setWidth", "setHeight", "setMinWidth", "setMinHeight", "setMaxWidth", "setMaxHeight", "setPadding"]) {
      let i = {
        [n.Unit.Point]: e.Node.prototype[r],
        [n.Unit.Percent]: e.Node.prototype[`${r}Percent`],
        [n.Unit.Auto]: e.Node.prototype[`${r}Auto`]
      };
      t(e.Node.prototype, r, function (e) {
        let t;
        let o;
        var a = arguments.length;
        var s = Array(a > 1 ? a - 1 : 0);
        var l = 1;
        for (; l < a; l++) {
          s[l - 1] = arguments[l];
        }
        let u = s.pop();
        if (u === "auto") {
          t = n.Unit.Auto;
          o = undefined;
        } else if (typeof u == "object") {
          t = u.unit;
          o = u.valueOf();
        } else {
          t = typeof u == "string" && u.endsWith("%") ? n.Unit.Percent : n.Unit.Point;
          o = parseFloat(u);
          if (!Number.isNaN(u) && Number.isNaN(o)) {
            throw Error(`Invalid value ${u} for ${r}`);
          }
        }
        if (!i[t]) {
          throw Error(`Failed to execute "${r}": Unsupported unit '${u}'`);
        }
        if (o !== undefined) {
          return i[t].call(this, ...s, o);
        } else {
          return i[t].call(this, ...s);
        }
      });
    }
    t(e.Node.prototype, "setMeasureFunc", function (t, r) {
      if (r) {
        return t.call(this, e.MeasureCallback.implement({
          measure: function () {
            let {
              width: e,
              height: t
            } = r(...arguments);
            return {
              width: e ?? NaN,
              height: t ?? NaN
            };
          }
        }));
      } else {
        return this.unsetMeasureFunc();
      }
    });
    t(e.Node.prototype, "setDirtiedFunc", function (t, r) {
      t.call(this, e.DirtiedCallback.implement({
        dirtied: r
      }));
    });
    t(e.Config.prototype, "free", function () {
      e.Config.destroy(this);
    });
    t(e.Node, "create", (t, r) => r ? e.Node.createWithConfig(r) : e.Node.createDefault());
    t(e.Node.prototype, "free", function () {
      e.Node.destroy(this);
    });
    t(e.Node.prototype, "freeRecursive", function () {
      for (let e = 0, t = this.getChildCount(); e < t; ++e) {
        this.getChild(0).freeRecursive();
      }
      this.free();
    });
    t(e.Node.prototype, "calculateLayout", function (e, t = NaN, r = NaN, i = n.Direction.LTR) {
      return e.call(this, t, r, i);
    });
    return {
      Config: e.Config,
      Node: e.Node,
      ...n.default
    };
  };
  var n = function (e, t) {
    if (e && e.__esModule) {
      return e;
    }
    if (e === null || typeof e != "object" && typeof e != "function") {
      return {
        default: e
      };
    }
    var r = i(t);
    if (r && r.has(e)) {
      return r.get(e);
    }
    var n = {};
    var o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e) {
      if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
        var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
        if (s && (s.get || s.set)) {
          Object.defineProperty(n, a, s);
        } else {
          n[a] = e[a];
        }
      }
    }
    n.default = e;
    if (r) {
      r.set(e, n);
    }
    return n;
  }(require("flexbox-layout-enums") /*id: 388917*/);
  function i(e) {
    if (typeof WeakMap != "function") {
      return null;
    }
    var t = new WeakMap();
    var r = new WeakMap();
    return (i = function (e) {
      if (e) {
        return r;
      } else {
        return t;
      }
    })(e);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}