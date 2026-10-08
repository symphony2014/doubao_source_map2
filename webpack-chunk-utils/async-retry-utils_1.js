// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AD' to 'retryWithFallback'
// - Renamed export 'Bo' to 'safeStringify'
// - Renamed export 'aG' to 'retryUntilSuccess'
// - Renamed export 'b4' to 'safeAsyncExec'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 989891
         */
module.exports = function (module, exports, require) {
  let i = async e => {
    try {
      return [await e()];
    } catch (e) {
      return [null, e];
    }
  };
  let o = e => {
    try {
      return JSON.stringify(e);
    } catch (e) {
      return "";
    }
  };
  let a = e => {
    let {
      fn: n,
      retriesLeft: r = 3,
      interval: i = 1000,
      fallback: o = {
        default: () => null
      },
      onError: u = () => {}
    } = e;
    return new Promise((e, c) => {
      n().then(e).catch(_ => {
        setTimeout(() => {
          if (r === 1) {
            if (u != null) {
              u(_);
            }
            e(o);
            return;
          }
          a({
            fn: n,
            retriesLeft: r - 1,
            interval: i,
            fallback: o,
            onError: u
          }).then(e, c);
        }, i);
      });
    });
  };
  let u = e => new Promise(n => {
    setTimeout(n, e);
  });
  let c = async e => {
    let {
      value: n,
      interval: r = 1000,
      count: i = 10,
      ifRetry: o
    } = e;
    for (let e = 0; e < i; e++) {
      if (e !== 0) {
        await u(r);
      }
      try {
        let r = await n();
        if (!(o == null ? undefined : o(r)) || e === i - 1) {
          return r;
        }
      } catch (n) {
        if (e === i - 1) {
          throw n;
        }
      }
    }
    throw Error("Unreatched branch");
  };
  require.d(exports, {
    retryWithFallback: function () {
      return a;
    },
    safeStringify: function () {
      return o;
    },
    retryUntilSuccess: function () {
      return c;
    },
    safeAsyncExec: function () {
      return i;
    }
  });
}