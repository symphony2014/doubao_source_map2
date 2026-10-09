// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cy' to 'runOnPageReady'
// - Renamed export 'FW' to 'runOnVisible'
// - Renamed export 'Zv' to 'runOnInteractive'
// - Renamed export 'a3' to 'onPageVisible'
// - Renamed export 'kZ' to 'onPageInteractive'
// - Renamed export 'q5' to 'onPageFinish'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 358717
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let a = function (e) {
    let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let n = emptyExportFunction.emptyFunction;
    return n = chatStoreManager.getStore("flowWebLayoutStore").subscribe(e => {
      let {
        pageVisible: t
      } = e;
      return t;
    }, i => {
      if (i) {
        e(true);
        if (t) {
          n();
        }
      }
    }, {
      fireImmediately: true
    });
  };
  let l = function (e) {
    let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let n = emptyExportFunction.emptyFunction;
    return n = chatStoreManager.getStore("flowWebLayoutStore").subscribe(e => {
      let {
        pageInteractive: t,
        pageVisible: n
      } = e;
      return n && t;
    }, i => {
      if (i) {
        e(true);
        if (t) {
          n();
        }
      }
    }, {
      fireImmediately: true
    });
  };
  let s = function (e) {
    let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let n = emptyExportFunction.emptyFunction;
    return n = chatStoreManager.getStore("flowWebLayoutStore").subscribe(e => {
      let {
        pageInteractive: t,
        pageVisible: n,
        pageFinish: i
      } = e;
      return n && t && i;
    }, i => {
      if (i) {
        e(true);
        if (t) {
          n();
        }
      }
    }, {
      fireImmediately: true
    });
  };
  async function u(e) {
    return new Promise(t => {
      a(() => {
        setTimeout(async () => {
          t(await asyncRetryUtils.retryWithFallback({
            fn: e
          }));
        });
      });
    });
  }
  async function c(e) {
    return new Promise(t => {
      l(() => {
        setTimeout(async () => {
          t(await asyncRetryUtils.retryWithFallback({
            fn: e
          }));
        });
      });
    });
  }
  async function d(e) {
    let [t] = await Promise.all([new Promise(e => {
      a(t => {
        if (t) {
          setTimeout(() => e(t));
        }
      });
    }).then(() => asyncRetryUtils.retryWithFallback({
      fn: e
    })), new Promise(e => {
      l(t => {
        if (t) {
          setTimeout(() => e(t));
        }
      });
    })]);
    return t;
  }
  require.d(exports, {
    runOnPageReady: function () {
      return d;
    },
    runOnVisible: function () {
      return u;
    },
    runOnInteractive: function () {
      return c;
    },
    onPageVisible: function () {
      return a;
    },
    onPageInteractive: function () {
      return l;
    },
    onPageFinish: function () {
      return s;
    }
  });
}