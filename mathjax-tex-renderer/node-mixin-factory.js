// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 26083
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
  var n = this && this.__assign || function () {
    return (n = Object.assign || function (t) {
      var e;
      var Q = 1;
      var r = arguments.length;
      for (; Q < r; Q++) {
        for (var T in e = arguments[Q]) {
          if (Object.prototype.hasOwnProperty.call(e, T)) {
            t[T] = e[T];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  };
  exports.NodeMixin = exports.NodeMixinOptions = undefined;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  exports.NodeMixinOptions = {
    badCSS: true,
    badSizes: true
  };
  exports.NodeMixin = function (t, Q) {
    var r;
    if (Q === undefined) {
      Q = {};
    }
    Q = optionsMergeUtils.userOptions(optionsMergeUtils.defaultOptions({}, exports.NodeMixinOptions), Q);
    (r = function (t) {
      function e() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.call(this, e[0]) || this;
        var T = r.constructor;
        r.options = optionsMergeUtils.userOptions(optionsMergeUtils.defaultOptions({}, T.OPTIONS), e[1]);
        return r;
      }
      T(e, t);
      e.prototype.fontSize = function (e) {
        if (Q.badCSS) {
          return this.options.fontSize;
        } else {
          return t.prototype.fontSize.call(this, e);
        }
      };
      e.prototype.fontFamily = function (e) {
        if (Q.badCSS) {
          return this.options.fontFamily;
        } else {
          return t.prototype.fontFamily.call(this, e);
        }
      };
      e.prototype.nodeSize = function (r, T = 1, n = null) {
        if (!Q.badSizes) {
          return t.prototype.nodeSize.call(this, r, T, n);
        }
        var o = this.textContent(r);
        var i = Array.from(o.replace(e.cjkPattern, "")).length;
        return [(Array.from(o).length - i) * this.options.cjkCharWidth + i * this.options.unknownCharWidth, this.options.unknownCharHeight];
      };
      e.prototype.nodeBBox = function (e) {
        if (Q.badSizes) {
          return {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          };
        } else {
          return t.prototype.nodeBBox.call(this, e);
        }
      };
      return e;
    }(t)).OPTIONS = n(n({}, Q.badCSS ? {
      fontSize: 16,
      fontFamily: "Times"
    } : {}), Q.badSizes ? {
      cjkCharWidth: 1,
      unknownCharWidth: 0.6,
      unknownCharHeight: 0.8
    } : {});
    r.cjkPattern = RegExp("[ᄀ-ᅟ〈〉⺀-〾぀-㉇㉐-䶿一-꓆ꥠ-ꥼ가-힣豈-﫿︐-︙︰-﹫！-｠￠-￦𛀀-𛀁🈀-🉑𠀀-𿿽]", "gu");
    return r;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}