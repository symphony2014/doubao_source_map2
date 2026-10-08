// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Lc' to 'emptySubscription'
// - Renamed export 'w0' to 'Subscription'
// - Renamed export 'Nn' to 'isSubscription'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 259043
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  var o = require("custom-error-factory") /*id: 205452*/.createErrorClass(function (e) {
    return function (t) {
      e(this);
      this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function (e, t) {
        return t + 1 + ") " + e.toString();
      }).join("\n  ") : "";
      this.name = "UnsubscriptionError";
      this.errors = t;
    };
  });
  var arrayRemoveUtil = require("array-remove-util") /*id: 91229*/;
  var l = function () {
    var e;
    function t(e) {
      this.initialTeardown = e;
      this.closed = false;
      this._parentage = null;
      this._finalizers = null;
    }
    t.prototype.unsubscribe = function () {
      if (!this.closed) {
        this.closed = true;
        var e;
        var t;
        var n;
        var a;
        var l;
        var s = this._parentage;
        if (s) {
          this._parentage = null;
          if (Array.isArray(s)) {
            try {
              var c = typescriptRuntimeHelpers.iteratorValues(s);
              var u = c.next();
              for (; !u.done; u = c.next()) {
                u.value.remove(this);
              }
            } catch (t) {
              e = {
                error: t
              };
            } finally {
              try {
                if (u && !u.done && (t = c.return)) {
                  t.call(c);
                }
              } finally {
                if (e) {
                  throw e.error;
                }
              }
            }
          } else {
            s.remove(this);
          }
        }
        var _ = this.initialTeardown;
        if (isFunctionUtil.isFunction(_)) {
          try {
            _();
          } catch (e) {
            l = e instanceof o ? e.errors : [e];
          }
        }
        var m = this._finalizers;
        if (m) {
          this._finalizers = null;
          try {
            var v = typescriptRuntimeHelpers.iteratorValues(m);
            var f = v.next();
            for (; !f.done; f = v.next()) {
              var p = f.value;
              try {
                d(p);
              } catch (e) {
                l = l ?? [];
                if (e instanceof o) {
                  l = typescriptRuntimeHelpers.arraySpread(typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(l)), typescriptRuntimeHelpers.spreadArray(e.errors));
                } else {
                  l.push(e);
                }
              }
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (f && !f.done && (a = v.return)) {
                a.call(v);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
        }
        if (l) {
          throw new o(l);
        }
      }
    };
    t.prototype.add = function (e) {
      if (e && e !== this) {
        if (this.closed) {
          d(e);
        } else {
          if (e instanceof t) {
            if (e.closed || e._hasParent(this)) {
              return;
            }
            e._addParent(this);
          }
          (this._finalizers = this._finalizers ?? []).push(e);
        }
      }
    };
    t.prototype._hasParent = function (e) {
      var t = this._parentage;
      return t === e || Array.isArray(t) && t.includes(e);
    };
    t.prototype._addParent = function (e) {
      var t = this._parentage;
      this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
    };
    t.prototype._removeParent = function (e) {
      var t = this._parentage;
      if (t === e) {
        this._parentage = null;
      } else if (Array.isArray(t)) {
        arrayRemoveUtil.removeFromArray(t, e);
      }
    };
    t.prototype.remove = function (e) {
      var n = this._finalizers;
      if (n) {
        arrayRemoveUtil.removeFromArray(n, e);
      }
      if (e instanceof t) {
        e._removeParent(this);
      }
    };
    (e = new t()).closed = true;
    t.EMPTY = e;
    return t;
  }();
  var s = l.EMPTY;
  function c(e) {
    return e instanceof l || e && "closed" in e && isFunctionUtil.isFunction(e.remove) && isFunctionUtil.isFunction(e.add) && isFunctionUtil.isFunction(e.unsubscribe);
  }
  function d(e) {
    if (isFunctionUtil.isFunction(e)) {
      e();
    } else {
      e.unsubscribe();
    }
  }
  require.d(exports, {
    emptySubscription: function () {
      return s;
    },
    Subscription: function () {
      return l;
    },
    isSubscription: function () {
      return c;
    }
  });
}