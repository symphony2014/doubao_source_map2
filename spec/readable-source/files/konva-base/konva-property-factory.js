// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'a' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 637238
         */
module.exports = function (module, exports, require) {
  exports.Factory = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  exports.Factory = {
    addGetterSetter(t, i, r, a, n) {
      exports.Factory.addGetter(t, i, r);
      exports.Factory.addSetter(t, i, a, n);
      exports.Factory.addOverloadedGetterSetter(t, i);
    },
    addGetter(t, e, i) {
      var a = "get" + konvaTransformUtil.Util._capitalize(e);
      t.prototype[a] = t.prototype[a] || function () {
        var t = this.attrs[e];
        if (t === undefined) {
          return i;
        } else {
          return t;
        }
      };
    },
    addSetter(t, i, a, n) {
      var s = "set" + konvaTransformUtil.Util._capitalize(i);
      if (!t.prototype[s]) {
        exports.Factory.overWriteSetter(t, i, a, n);
      }
    },
    overWriteSetter(t, e, i, a) {
      var n = "set" + konvaTransformUtil.Util._capitalize(e);
      t.prototype[n] = function (t) {
        if (i && t != null) {
          t = i.call(this, t, e);
        }
        this._setAttr(e, t);
        if (a) {
          a.call(this);
        }
        return this;
      };
    },
    addComponentsGetterSetter(t, i, n, s, o) {
      var h;
      var l;
      var d = n.length;
      var c = konvaTransformUtil.Util._capitalize;
      var u = "get" + c(i);
      var f = "set" + c(i);
      t.prototype[u] = function () {
        var t = {};
        for (h = 0; h < d; h++) {
          t[l = n[h]] = this.getAttr(i + c(l));
        }
        return t;
      };
      var g = konvaPropertyValidators.getComponentValidator(n);
      t.prototype[f] = function (t) {
        var e;
        var r = this.attrs[i];
        if (s) {
          t = s.call(this, t);
        }
        if (g) {
          g.call(this, t, i);
        }
        for (e in t) {
          if (t.hasOwnProperty(e)) {
            this._setAttr(i + c(e), t[e]);
          }
        }
        if (!t) {
          n.forEach(t => {
            this._setAttr(i + c(t), undefined);
          });
        }
        this._fireChangeEvent(i, r, t);
        if (o) {
          o.call(this);
        }
        return this;
      };
      exports.Factory.addOverloadedGetterSetter(t, i);
    },
    addOverloadedGetterSetter(t, e) {
      var i = konvaTransformUtil.Util._capitalize(e);
      var a = "set" + i;
      var n = "get" + i;
      t.prototype[e] = function () {
        if (arguments.length) {
          this[a](arguments[0]);
          return this;
        } else {
          return this[n]();
        }
      };
    },
    addDeprecatedGetterSetter(t, i, a, n) {
      konvaTransformUtil.Util.error("Adding deprecated " + i);
      var s = "get" + konvaTransformUtil.Util._capitalize(i);
      var o = i + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
      t.prototype[s] = function () {
        konvaTransformUtil.Util.error(o);
        var t = this.attrs[i];
        if (t === undefined) {
          return a;
        } else {
          return t;
        }
      };
      exports.Factory.addSetter(t, i, n, function () {
        konvaTransformUtil.Util.error(o);
      });
      exports.Factory.addOverloadedGetterSetter(t, i);
    },
    backCompat(t, e) {
      konvaTransformUtil.Util.each(e, function (e, i) {
        var a = t.prototype[i];
        var n = "get" + konvaTransformUtil.Util._capitalize(e);
        var s = "set" + konvaTransformUtil.Util._capitalize(e);
        function o() {
          a.apply(this, arguments);
          konvaTransformUtil.Util.error("\"" + e + "\" method is deprecated and will be removed soon. Use \"\"" + i + "\" instead.");
        }
        t.prototype[e] = o;
        t.prototype[n] = o;
        t.prototype[s] = o;
      });
    },
    afterSetFilter() {
      this._filterUpToDate = false;
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}