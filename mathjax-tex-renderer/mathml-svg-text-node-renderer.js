// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Renamed variable 'i' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Resolved require(683182) to 'common-text-node-mixin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 967098
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var n = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  exports.SVGTextNode = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e;
      var Q;
      var r = this.node.getText();
      var T = this.parent.variant;
      if (r.length !== 0) {
        if (T === "-explicitFont") {
          this.element = this.adaptor.append(t, this.jax.unknownText(r, T));
        } else {
          var o = this.remappedText(r, T);
          if (this.parent.childNodes.length > 1) {
            t = this.element = this.adaptor.append(t, this.svg("g", {
              "data-mml-node": "text"
            }));
          }
          var i = 0;
          try {
            var a = n(o);
            var u = a.next();
            for (; !u.done; u = a.next()) {
              var s = u.value;
              i += this.placeChar(s, i, 0, t, T);
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              if (u && !u.done && (Q = a.return)) {
                Q.call(a);
              }
            } finally {
              if (e) {
                throw e.error;
              }
            }
          }
        }
      }
    };
    e.kind = mathmlAbstractNodeClasses.TextNode.prototype.kind;
    e.styles = {
      "mjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c]": {
        "stroke-width": 3
      }
    };
    return e;
  }(require("common-text-node-mixin") /*id: 683182*/.CommonTextNodeMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGTextNode = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}