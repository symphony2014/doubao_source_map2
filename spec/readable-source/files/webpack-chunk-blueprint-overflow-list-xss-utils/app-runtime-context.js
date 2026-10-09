// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CH' to 'getLayoutApp'
// - Renamed export 'FM' to 'getApp'
// - Renamed export 'Hb' to 'getAppInit'
// - Renamed export 'Uk' to 'getRuntimeContext'
// - Renamed export 'cE' to 'initAppState'
// - Renamed export 'hb' to 'setRuntimeContext'
// - Renamed export 'jn' to 'getRoutes'
// - Renamed export 'nB' to 'getAppConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 732669
         */
module.exports = function (module, exports, require) {
  var r = {};
  function i(e) {
    r.entryName = e.entryName;
    r.App = e.App;
    r.routes = e.routes;
    r.appInit = e.appInit;
    r.appConfig = typeof e.appConfig == "function" ? e.appConfig() : e.appConfig;
    r.layoutApp = e.layoutApp;
    r.RSCRoot = e.RSCRoot;
  }
  function o(e) {
    r.internalRuntimeContext = e;
  }
  function a() {
    return r.internalRuntimeContext;
  }
  function s() {
    return r.App;
  }
  function u() {
    return r.routes;
  }
  function c() {
    return r.appInit || s()?.init || f()?.init;
  }
  function l() {
    return r.appConfig || s()?.config || f()?.config;
  }
  function f() {
    return r.layoutApp;
  }
  require.d(exports, {
    getLayoutApp: function () {
      return f;
    },
    getApp: function () {
      return s;
    },
    getAppInit: function () {
      return c;
    },
    getRuntimeContext: function () {
      return a;
    },
    initAppState: function () {
      return i;
    },
    setRuntimeContext: function () {
      return o;
    },
    getRoutes: function () {
      return u;
    },
    getAppConfig: function () {
      return l;
    }
  });
}