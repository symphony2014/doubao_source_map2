// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'useHeaderPopupStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 38587
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  let o = e => ({
    popups: [],
    register: t => e(e => e.popups.some(e => e.id === t.id) ? e : {
      popups: [...e.popups, {
        ...t,
        visible: false,
        finished: false,
        showed: false
      }]
    }),
    finishExecution: t => e(e => {
      if (!t) {
        return e;
      }
      let n = e.popups.find(e => e.id === t);
      if (n) {
        n.finished = true;
        return {
          popups: [...e.popups.filter(e => e.id !== t), n]
        };
      } else {
        return e;
      }
    }),
    updateVisible: t => {
      let {
        id: n,
        visible: i
      } = t;
      return e(e => {
        if (!n) {
          return e;
        }
        let t = e.popups.find(e => e.id === n);
        if (t) {
          t.visible = i;
          if (i) {
            t.showed = true;
          }
          return {
            popups: [...e.popups.filter(e => e.id !== n), t]
          };
        } else {
          return e;
        }
      });
    }
  });
  let a = () => reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(o));
  let l = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    let {
      _useHeaderPopupStore: i
    } = l.prototype;
    if (!i) {
      (function () {
        let {
          _useHeaderPopupStore: e
        } = l.prototype || {};
        if (!e) {
          let e = a();
          Object.setPrototypeOf(l.prototype, e);
          Object.defineProperties(l, {
            ...Object.getOwnPropertyDescriptors(e)
          });
          l.prototype._useHeaderPopupStore = e;
        }
      })();
    }
    let {
      _useHeaderPopupStore: r
    } = l.prototype;
    if (r) {
      return r(...t);
    }
    throw Error("useHeaderPopupStore is not initialized");
  };
  require.d(exports, {
    useHeaderPopupStore: function () {
      return l;
    }
  });
}