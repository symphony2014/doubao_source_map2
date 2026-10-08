// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KA' to 'routeStatus'
// - Renamed export 'R' to 'routeStore'
// - Renamed export 'Wr' to 'getRouteState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 795456
         */
module.exports = function (module, exports, require) {
  var i;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var immerProduceCore = require("immer-produce-core") /*id: 949322*/;
  (i = {}).CLOSE = "close";
  i.OPEN = "open";
  let s = i;
  let l = {
    routesStack: [],
    routesStateMap: {},
    payload: {},
    activeKey: undefined,
    state: "replace",
    lastShowStatus: {},
    mode: ""
  };
  let c = reactStoreHookFactory.createStoreHook()(e => ({
    ...l,
    changeMode: t => e(() => ({
      mode: t
    })),
    setPayload: t => e(() => ({
      payload: t
    })),
    setStack: function (t) {
      var n = arguments.length;
      var i = Array(n > 1 ? n - 1 : 0);
      var r = 1;
      for (; r < n; r++) {
        i[r - 1] = arguments[r];
      }
      e(() => ({
        routesStack: t,
        state: "replace",
        routesStateMap: immerProduceCore.produce({}, e => {
          for (let n = 0; n < Math.min(i.length, t.length); n += 1) {
            e[n] = i[n];
          }
        })
      }));
    },
    setActiveKey: t => e(() => ({
      activeKey: t || undefined
    })),
    goBack: () => e(e => {
      let {
        routesStack: t,
        routesStateMap: n
      } = e;
      return {
        routesStack: [...t.slice(0, -1)],
        state: "pop",
        routesStateMap: immerProduceCore.produce(n, e => {
          delete e[t.length - 1];
        })
      };
    }),
    push: function (t, n = {}) {
      let {
        state: i
      } = n;
      e(e => {
        let {
          routesStack: n,
          routesStateMap: r
        } = e;
        return {
          routesStack: [...n, t],
          state: "push",
          routesStateMap: immerProduceCore.produce(r, e => {
            if (i) {
              e[n.length] = i;
            }
          })
        };
      });
    },
    setLastShowStatus: (t, n) => e(e => ({
      lastShowStatus: {
        ...e.lastShowStatus,
        [t]: n
      }
    }))
  }));
  let d = () => {
    let {
      routesStateMap: t,
      routesStack: n
    } = c(e => {
      let {
        routesStateMap: t,
        routesStack: n
      } = e;
      return {
        routesStateMap: t,
        routesStack: n
      };
    });
    return objectPathGetDefault.getObjectPathDefault(t, n.length - 1) ?? {};
  };
  require.d(exports, {
    routeStatus: function () {
      return s;
    },
    routeStore: function () {
      return c;
    },
    getRouteState: function () {
      return d;
    }
  });
}