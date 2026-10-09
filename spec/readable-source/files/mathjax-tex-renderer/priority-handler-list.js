// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(591133) to 'priority-list-structure'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 104629
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
  exports.HandlerList = undefined;
  var o = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.register = function (t) {
      return this.add(t, t.priority);
    };
    e.prototype.unregister = function (t) {
      this.remove(t);
    };
    e.prototype.handlesDocument = function (t) {
      var e;
      var Q;
      try {
        var r = n(this);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var o = T.value.item;
          if (o.handlesDocument(t)) {
            return o;
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (T && !T.done && (Q = r.return)) {
            Q.call(r);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      throw Error("Can't find handler for document");
    };
    e.prototype.document = function (t, e = null) {
      return this.handlesDocument(t).create(t, e);
    };
    return e;
  }(require("priority-list-structure") /*id: 591133*/.PrioritizedList);
  exports.HandlerList = o;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}