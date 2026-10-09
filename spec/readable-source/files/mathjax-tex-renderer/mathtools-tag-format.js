// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 'u' to 'mathjaxEquationTaggingSystem'
// - Resolved require(9120) to 'mathjax-equation-tagging-system'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 322551
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
  var o = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var i = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.MathtoolsTagFormat = undefined;
  var a = i(require("message-format-util") /*id: 342117*/);
  var mathjaxEquationTaggingSystem = require("mathjax-equation-tagging-system") /*id: 9120*/;
  var s = 0;
  exports.MathtoolsTagFormat = function (t, e) {
    var Q = e.parseOptions.options.tags;
    if (Q !== "base" && t.tags.hasOwnProperty(Q)) {
      mathjaxEquationTaggingSystem.TagsFactory.add(Q, t.tags[Q]);
    }
    var r = function (t) {
      function Q() {
        var Q;
        var r;
        var T = t.call(this) || this;
        T.mtFormats = new Map();
        T.mtCurrent = null;
        var o = e.parseOptions.options.mathtools.tagforms;
        try {
          var i = n(Object.keys(o));
          var u = i.next();
          for (; !u.done; u = i.next()) {
            var s = u.value;
            if (!Array.isArray(o[s]) || o[s].length !== 3) {
              throw new a.default("InvalidTagFormDef", "The tag form definition for \"%1\" should be an array fo three strings", s);
            }
            T.mtFormats.set(s, o[s]);
          }
        } catch (t) {
          Q = {
            error: t
          };
        } finally {
          try {
            if (u && !u.done && (r = i.return)) {
              r.call(i);
            }
          } finally {
            if (Q) {
              throw Q.error;
            }
          }
        }
        return T;
      }
      T(Q, t);
      Q.prototype.formatTag = function (e) {
        if (this.mtCurrent) {
          var Q = o(this.mtCurrent, 3);
          var r = Q[0];
          var T = Q[1];
          var n = Q[2];
          if (n) {
            return `${r}${n}{${e}}${T}`;
          } else {
            return `${r}${e}${T}`;
          }
        }
        return t.prototype.formatTag.call(this, e);
      };
      return Q;
    }(mathjaxEquationTaggingSystem.TagsFactory.create(e.parseOptions.options.tags).constructor);
    var i = "MathtoolsTags-" + ++s;
    mathjaxEquationTaggingSystem.TagsFactory.add(i, r);
    e.parseOptions.options.tags = i;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}