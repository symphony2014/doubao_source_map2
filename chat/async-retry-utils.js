// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AD' to 'retryWithFallback'
// - Renamed export 'C5' to 'retryPromise'
// - Renamed export 'aG' to 'pollUntilSuccess'
// - Renamed export 'xK' to 'asyncRetry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 374795
         */
module.exports = function (module, exports, require) {
  let i = function (e, t = 3, n = 1000) {
    return new Promise((r, o) => {
      e().then(r).catch(a => {
        setTimeout(() => {
          if (t === 1) {
            o(a);
            return;
          }
          i(e, t - 1, n).then(r, o);
        }, n);
      });
    });
  };
  let r = e => {
    let {
      fn: t,
      retriesLeft: n = 3,
      interval: i = 1000,
      fallback: o = {
        default: () => null
      },
      onError: a = () => {}
    } = e;
    return new Promise((e, l) => {
      t().then(e).catch(s => {
        setTimeout(() => {
          if (n === 1) {
            if (a != null) {
              a(s);
            }
            e(o);
            return;
          }
          r({
            fn: t,
            retriesLeft: n - 1,
            interval: i,
            fallback: o,
            onError: a
          }).then(e, l);
        }, i);
      });
    });
  };
  let o = e => new Promise(t => {
    setTimeout(t, e);
  });
  let a = async (e, t, n, i) => {
    for (let r = 0; r < t; r++) {
      let a = r + 1;
      try {
        return await e();
      } catch (e) {
        if (a >= t) {
          throw e;
        }
        if (i != null) {
          i(e, r);
        }
      }
      let l = typeof n == "number" ? n : n(a);
      await o(l);
    }
    throw Error("retry times out of limit");
  };
  let l = async e => {
    let {
      value: t,
      interval: n = 1000,
      count: i = 10,
      ifRetry: r
    } = e;
    for (let e = 0; e < i; e++) {
      if (e !== 0) {
        await o(n);
      }
      try {
        let n = await t();
        if (!(r == null ? undefined : r(n)) || e === i - 1) {
          return n;
        }
      } catch (t) {
        if (e === i - 1) {
          throw t;
        }
      }
    }
    throw Error("Unreatched branch");
  };
  require.d(exports, {
    retryWithFallback: function () {
      return r;
    },
    retryPromise: function () {
      return i;
    },
    pollUntilSuccess: function () {
      return l;
    },
    asyncRetry: function () {
      return a;
    }
  });
}