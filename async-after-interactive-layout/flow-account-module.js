// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'flowAccountService'
// - Resolved require(317959) to 'flow-account-service'
// - Renamed variable 'r' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'o' to 'promiseAsyncUtilities'
// - Resolved require(592307) to 'promise-async-utilities'
// - Resolved require.e(50072) to 'animation-date-ui-utilities'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(5550) to 'semi-ui-components-2'
// - Resolved require.bind(158256) to 'flow-account-manager'
// - Updated imported property 'C5' to 'retryPromise' (module 374795)
// - Updated imported property 'G9' to 'asyncContentProxy' (module 592307)
// - Updated imported property 'jQ' to 'initService' (module 317959)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 898004
         */
module.exports = function (module, exports, require) {
  var flowAccountService = require("flow-account-service") /*id: 317959*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  let a = null;
  let s = null;
  let l = null;
  let c = async () => {
    let {
      FlowAccount: e
    } = await asyncRetryUtils.retryPromise(() => Promise.all([require.e("animation-date-ui-utilities") /*id: 50072*/, require.e("api-client-services") /*id: 26176*/, require.e("semi-ui-components-2") /*id: 5550*/]).then(require.bind(require, "flow-account-manager") /*id: 158256*/));
    return new e(s);
  };
  let d = () => {
    if (!s) {
      throw Error("flowAccount is not initialized");
    }
    if (!a) {
      let e = promiseAsyncUtilities.asyncContentProxy(c());
      a = {
        ageGate: promiseAsyncUtilities.asyncContentProxy(e.ageGate),
        third: promiseAsyncUtilities.asyncContentProxy(e.third),
        cookie: promiseAsyncUtilities.asyncContentProxy(e.cookie),
        passportApi: promiseAsyncUtilities.asyncContentProxy(e.passportApi)
      };
    }
    return a;
  };
  let u = e => {
    if (a) {
      return;
    }
    let {
      login: t,
      logout: n,
      checkLogin: r,
      ...o
    } = e;
    s = o;
    if (l) {
      l(d());
      l = null;
    }
    if (t || n || r) {
      flowAccountService.initService({
        login: t,
        logout: n,
        checkLogin: r
      });
    }
  };
  let h = async () => s ? d() : await new Promise(e => {
    l = e;
  });
  require.r(exports);
  require.d(exports, {
    getFlowAccount: function () {
      return d;
    },
    getFlowAccountAsync: function () {
      return h;
    },
    initFlowAccount: function () {
      return u;
    }
  });
}