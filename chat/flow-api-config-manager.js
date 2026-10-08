// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GZ' to 'getFlowApiOptions'
// - Renamed export 'Kg' to 'FlowApiOptions'
// - Renamed export 'xG' to 'parseClassConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 691950
         */
module.exports = function (module, exports, require) {
  function i(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let r = e => {
    let {
      baseURL: t,
      httpClient: n,
      getCommonParams: i,
      getCommonHeaders: r,
      responseInterceptors: o
    } = e;
    let a = function (e) {
      let {
        params: t,
        headers: a,
        ...l
      } = e;
      let {
        httpClient: s,
        ignoreCommonParams: u,
        ignoreCommonHeaders: c,
        ...d
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return (s ?? n)({
        params: {
          ...(u ? undefined : i == null ? undefined : i()),
          ...t
        },
        headers: {
          ...(c ? undefined : r == null ? undefined : r()),
          ...a,
          ...(d == null ? undefined : d.overrideHeaders)
        },
        ...l
      }, {
        ...d,
        overrideConfig: {
          ...d.overrideConfig,
          responseInterceptors: o
        }
      });
    };
    return {
      defaultServiceConstructorOption: {
        baseURL: t,
        request: a
      },
      request: a,
      extendedMethods: {
        rawRequest: (e, t) => n(e, {
          ...t,
          overrideConfig: {
            ignoreResponseInterceptors: true,
            ...(t == null ? undefined : t.overrideConfig)
          }
        }),
        normalRequest: (e, t) => a(e, t),
        requestWithPath: e => (n, i) => {
          let r = typeof t != "string" ? (t == null ? undefined : t(e)) || e : `${t}${e}`;
          return a({
            ...n,
            url: n.url || r
          }, i);
        }
      }
    };
  };
  class o {
    static init(e) {
      o._instance ||= new o(e);
    }
    static get isInitialized() {
      return !!o._instance;
    }
    static get flowApiOptions() {
      if (!this.isInitialized) {
        throw Error("FlowApiOptions not initialized");
      }
      return this._instance.localFowApiOptions;
    }
    static get serviceConstructorOptions() {
      if (!this.isInitialized) {
        throw Error("FlowApiOptions not initialized");
      }
      return this._instance.localServiceConstructorOptions;
    }
    constructor(e) {
      i(this, "localFowApiOptions", null);
      i(this, "localServiceConstructorOptions", null);
      this.localFowApiOptions = e;
      this.localServiceConstructorOptions = r(e);
    }
  }
  i(o, "_instance", undefined);
  let a = e => {
    let {
      classMap: t,
      classConstructorOptionsMap: n,
      ...i
    } = e;
    return [t, n, i];
  };
  let l = () => o.flowApiOptions;
  require.d(exports, {
    getFlowApiOptions: function () {
      return l;
    },
    FlowApiOptions: function () {
      return o;
    },
    parseClassConfig: function () {
      return a;
    }
  });
}