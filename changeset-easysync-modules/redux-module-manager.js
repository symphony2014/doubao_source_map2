// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reduxReducerManager'
// - Resolved require(799825) to 'redux-reducer-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 171678
         */
module.exports = function (module, exports, require) {
  var r = this && this.__spreadArrays || function () {
    var t = 0;
    var e = 0;
    var n = arguments.length;
    for (; e < n; e++) {
      t += arguments[e].length;
    }
    var r = Array(t);
    var i = 0;
    var e = 0;
    for (; e < n; e++) {
      var o = arguments[e];
      var s = 0;
      var a = o.length;
      for (; s < a; s++, i++) {
        r[i] = o[s];
      }
    }
    return r;
  };
  exports.__esModule = true;
  var reduxReducerManager = require("redux-reducer-manager") /*id: 799825*/;
  exports.getModuleManager = function (t, e, n) {
    var o;
    var s = null;
    var a = [];
    var u = new Set();
    function c() {
      s({
        type: "@@Internal/ModuleManager/SeedReducers"
      });
    }
    function l(t) {
      if (t) {
        if (!s) {
          throw Error("setDispatch should be called on ModuleManager before adding any modules.");
        }
        t.forEach(s);
      }
    }
    function p(e) {
      if (e) {
        t.add(e);
      }
    }
    function h(e) {
      if (e) {
        t.remove(e);
      }
    }
    function f(t) {
      if (t) {
        if (o) {
          for (var e in t) {
            o.add(e, t[e]);
          }
        } else {
          o = reduxReducerManager.getRefCountedReducerManager(reduxReducerManager.getReducerManager(t, n));
        }
      }
    }
    function d(t) {
      if (t && o) {
        for (var e in t) {
          o.remove(e);
        }
      }
    }
    var v = {
      getReducer: function (t, e) {
        if (o) {
          return o.reduce(t, e);
        } else {
          return t || null;
        }
      },
      setDispatch: function (t) {
        s = t;
      },
      getItems: function () {
        return [];
      },
      add: function (t) {
        if (t && t.length !== 0) {
          t = t.filter(function (t) {
            return t;
          });
          var n = [];
          t.forEach(function (t) {
            if (!u.has(t.id)) {
              u.add(t.id);
              a.push(t);
              f(t.reducerMap);
              var e = t.middlewares;
              if (e) {
                p(e);
              }
              n.push(t);
            }
          });
          c();
          n.forEach(function (t) {
            e.forEach(function (e) {
              if (e.onModuleAdded) {
                e.onModuleAdded(t);
              }
            });
            var n = {
              type: "@@Internal/ModuleManager/ModuleAdded",
              payload: t.id
            };
            l(t.initialActions ? r([n], t.initialActions) : [n]);
          });
        }
      },
      remove: function (t) {
        if (t) {
          (t = t.filter(function (t) {
            return t;
          }).reverse()).forEach(function (t) {
            if (u.has(t.id)) {
              l(t.finalActions);
              d(t.reducerMap);
              h(t.middlewares);
              e.forEach(function (e) {
                if (e.onModuleRemoved) {
                  e.onModuleRemoved(t);
                }
              });
              u.delete(t.id);
              a = a.filter(function (e) {
                return e.id !== t.id;
              });
              l([{
                type: "@@Internal/ModuleManager/ModuleRemoved",
                payload: t.id
              }]);
            }
          });
        }
      },
      dispose: function () {
        v.remove(a);
      }
    };
    return v;
  };
}