// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'LoadingTrigger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 821282
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let i = t => e => t === e;
  let o = function () {
    let t = new Set();
    let e = 0;
    let n = [];
    let r = (n, r) => {
      let i = t.size !== 0 || e !== 0;
      if (r !== i) {
        n(i);
        return i;
      } else {
        return r;
      }
    };
    let o = {
      subscribe(t) {
        let e = {
          listener: t,
          lastParams: r(t, null)
        };
        n.push(e);
        return {
          unsubscribe() {
            let t = n.findIndex(i(e));
            if (t !== -1) {
              n.splice(t, 1);
            }
          }
        };
      },
      next() {
        n.forEach(t => {
          t.lastParams = r(t.listener, t.lastParams);
        });
      }
    };
    return {
      requestLoading(n) {
        if (n) {
          t.add(n);
        } else {
          e += 1;
        }
        o.next();
      },
      requestEndLoading(n) {
        if (n) {
          t.delete(n);
        } else {
          e -= 1;
        }
        o.next();
      },
      $Observable: o
    };
  }();
  let s = reactCoreLibraryReexport.createContext(o);
  function a() {
    let t = reactCoreLibraryReexport.useContext(s);
    reactCoreLibraryReexport.useEffect(() => {
      t.requestLoading();
      return () => t.requestEndLoading();
    }, []);
    return null;
  }
  require.d(exports, {
    LoadingTrigger: function () {
      return a;
    }
  });
}