// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Qs' to 'clearHooks'
// - Renamed export 'ZP' to 'initHooks'
// - Renamed export 'bR' to 'usePluginHooks'
// - Renamed export 'g2' to 'removePluginHooks'
// - Renamed export 'rl' to 'runHooks'
// - Renamed export 'v8' to 'deleteHook'
// - Renamed export 'xn' to 'setHook'
// - Renamed export 'z3' to 'createHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 206040
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  function o(e, t, n) {
    var r = arguments.length;
    var o = Array(r > 3 ? r - 3 : 0);
    var i = 3;
    for (; i < r; i++) {
      o[i - 3] = arguments[i];
    }
    var a = t.call.apply(t, [e].concat(o));
    if (n && typeof n == "function") {
      if (a && a.then) {
        a.then(function () {
          var t = arguments.length;
          var r = Array(t);
          var o = 0;
          for (; o < t; o++) {
            r[o] = arguments[o];
          }
          n.call.apply(n, [e].concat(r));
        });
      } else {
        n.call.apply(n, [e].concat(o));
      }
    }
  }
  function i(e, t, n = {
    pre: null,
    next: null
  }) {
    this.__hooks ||= {};
    this.__hooks[e] ||= null;
    return function () {
      var i = arguments;
      var a = this;
      if (n.pre) {
        try {
          (u = n.pre).call.apply(u, [this].concat(Array.prototype.slice.call(arguments)));
        } catch (t) {
          t.message = `[pluginName: ${this.pluginName}:${e}:pre error] >> ${t.message}`;
          throw t;
        }
      }
      if (this.__hooks && this.__hooks[e]) {
        try {
          var u;
          var c;
          var l = (c = this.__hooks[e]).call.apply(c, [this, this].concat(Array.prototype.slice.call(arguments)));
          if (l) {
            if (l.then) {
              l.then(function (e) {
                if (e !== false) {
                  o.apply(undefined, [a, t, n.next].concat(babelRuntimeHelpers_1.toArray(i)));
                }
              }).catch(function (e) {
                throw e;
              });
            } else {
              o.apply(undefined, [this, t, n.next].concat(Array.prototype.slice.call(arguments)));
            }
          } else if (l === undefined) {
            o.apply(undefined, [this, t, n.next].concat(Array.prototype.slice.call(arguments)));
          }
        } catch (t) {
          t.message = `[pluginName: ${this.pluginName}:${e}] >> ${t.message}`;
          throw t;
        }
      } else {
        o.apply(undefined, [this, t, n.next].concat(Array.prototype.slice.call(arguments)));
      }
    }.bind(this);
  }
  function a(e, t) {
    var n = this.__hooks;
    if (n) {
      return !!n.hasOwnProperty(e) && (n && (n[e] = t), true);
    } else {
      return undefined;
    }
  }
  function u(e, t) {
    var n = this.__hooks;
    if (n) {
      delete n[e];
    }
  }
  function c(e) {
    if (this.plugins && this.plugins[e.toLowerCase()]) {
      var t = this.plugins[e.toLowerCase()];
      var n = arguments.length;
      var r = Array(n > 1 ? n - 1 : 0);
      var o = 1;
      for (; o < n; o++) {
        r[o - 1] = arguments[o];
      }
      return t.useHooks && t.useHooks.apply(t, r);
    }
  }
  function l(e) {
    if (this.plugins && this.plugins[e.toLowerCase()]) {
      var t = this.plugins[e.toLowerCase()];
      if (t) {
        var n = arguments.length;
        var r = Array(n > 1 ? n - 1 : 0);
        var o = 1;
        for (; o < n; o++) {
          r[o - 1] = arguments[o];
        }
        return t.removeHooks && t.removeHooks.apply(t, r);
      }
    }
  }
  function s(e, t = []) {
    e.__hooks = {};
    if (t) {
      t.map(function (t) {
        e.__hooks[t] = null;
      });
    }
    Object.defineProperty(e, "hooks", {
      get: function () {
        return e.__hooks && Object.keys(e.__hooks).map(function (t) {
          if (e.__hooks[t]) {
            return t;
          }
        });
      }
    });
  }
  function d(e) {
    e.__hooks = null;
  }
  function f(e, t, n) {
    var r = arguments.length;
    var o = Array(r > 3 ? r - 3 : 0);
    var i = 3;
    for (; i < r; i++) {
      o[i - 3] = arguments[i];
    }
    if (!e.__hooks || !e.__hooks[t]) {
      return n.call.apply(n, [e, e].concat(o));
    }
    var a;
    var u = (a = e.__hooks[t]).call.apply(a, [e, e].concat(o));
    if (u && u.then) {
      u.then(function (t) {
        if (t === false) {
          return null;
        } else {
          return n.call.apply(n, [e, e].concat(o));
        }
      }).catch(function (e) {});
    } else if (u !== false) {
      return n.call.apply(n, [e, e].concat(o));
    }
  }
  require.d(exports, {
    clearHooks: function () {
      return d;
    },
    initHooks: function () {
      return s;
    },
    usePluginHooks: function () {
      return c;
    },
    removePluginHooks: function () {
      return l;
    },
    runHooks: function () {
      return f;
    },
    deleteHook: function () {
      return u;
    },
    setHook: function () {
      return a;
    },
    createHook: function () {
      return i;
    }
  });
}