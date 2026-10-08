// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reduxCoreApi'
// - Resolved require(76673) to 'redux-core-api'
// - Renamed variable 'o' to 'reduxDevtoolsExtension'
// - Resolved require(708437) to 'redux-devtools-extension'
// - Renamed variable 's' to 'reduxDynamicMiddlewareManager'
// - Resolved require(286768) to 'redux-dynamic-middleware-manager'
// - Renamed variable 'a' to 'reduxModuleManager'
// - Resolved require(171678) to 'redux-module-manager'
// - Renamed variable 'u' to 'refCountedManagerFactory'
// - Resolved require(680465) to 'ref-counted-manager-factory'
// - Renamed variable 'c' to 'arrayFlattenUtil'
// - Resolved require(977272) to 'array-flatten-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 904193
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
  var reduxCoreApi = require("redux-core-api") /*id: 76673*/;
  var reduxDevtoolsExtension = require("redux-devtools-extension") /*id: 708437*/;
  var reduxDynamicMiddlewareManager = require("redux-dynamic-middleware-manager") /*id: 286768*/;
  var reduxModuleManager = require("redux-module-manager") /*id: 171678*/;
  var refCountedManagerFactory = require("ref-counted-manager-factory") /*id: 680465*/;
  var arrayFlattenUtil = require("array-flatten-util") /*id: 977272*/;
  exports.createStore = function (t) {
    var e = [];
    var n = 1;
    for (; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }
    var l = t.initialState;
    var p = t.extensions;
    var h = p === undefined ? [] : p;
    var f = t.enhancers;
    var d = t.advancedComposeEnhancers;
    var v = d === undefined ? reduxDevtoolsExtension.composeWithDevTools({}) : d;
    var y = t.advancedCombineReducers;
    var g = h.reduce(function (t, e) {
      if (e.middleware) {
        t.push.apply(t, e.middleware);
      }
      return t;
    }, []);
    var _ = refCountedManagerFactory.getRefCountedManager(reduxDynamicMiddlewareManager.getMiddlewareManager(), function (t, e) {
      return t === e;
    });
    var m = v.apply(undefined, r(f === undefined ? [] : f, [reduxCoreApi.applyMiddleware.apply(undefined, r(g, [_.enhancer]))]));
    var b = refCountedManagerFactory.getRefCountedManager(reduxModuleManager.getModuleManager(_, h, y), function (t, e) {
      return t.id === e.id;
    }, function (t) {
      return t.retained;
    });
    var E = reduxCoreApi.createStore(b.getReducer, l === undefined ? {} : l, m);
    b.setDispatch(E.dispatch);
    function w(t) {
      var e = arrayFlattenUtil.flatten(t);
      b.add(e);
      return {
        remove: function () {
          b.remove(e);
        }
      };
    }
    function S(t) {
      return w([t]);
    }
    h.forEach(function (t) {
      if (t.onModuleManagerCreated) {
        t.onModuleManagerCreated({
          addModule: S,
          addModules: w
        });
      }
    });
    E.addModule = S;
    E.addModules = w;
    E.dispose = function () {
      b.dispose();
      _.dispose();
      h.forEach(function (t) {
        if (t.dispose) {
          t.dispose();
        }
      });
    };
    E.addModules(e);
    return E;
  };
}