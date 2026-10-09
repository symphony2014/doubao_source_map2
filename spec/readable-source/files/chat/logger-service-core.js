// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'defaultLogger'
// - Renamed export 'C' to 'configureLogger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 474960
         */
module.exports = function (module, exports, require) {
  var logConstants = require("log-constants") /*id: 966837*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  function o(e) {
    let {
      namespace: t,
      scope: n,
      level: i,
      message: o,
      eventName: a,
      ...l
    } = e;
    var s;
    var u = arguments.length;
    var c = Array(u > 1 ? u - 1 : 0);
    var d = 1;
    for (; d < u; d++) {
      c[d - 1] = arguments[d];
    }
    let h = [`%c Logger %c ${t || i}${n ? ` %c ${n}` : ""} %c`, "background:#444444 ; padding: 1px; border-radius: 3px 0 0 3px; color: #fff", `background:${(s = i) === "success" ? "#00CC00" : s === "warning" ? "#CC9900" : s === "error" ? "#CC3333" : s === "fatal" ? "#FF0000" : "#0099CC"}; padding: 1px; border-radius: ${n ? "0" : "0 3px 3px 0"}; color: #fff`, n ? "background:#777777; padding: 1px; border-radius: 0 3px 3px 0; color: #fff; margin-left: -1px;" : "background:transparent"];
    if (n) {
      h.push("background:transparent");
    }
    h.push(a || o);
    let m = l.error ? l : l.meta;
    if (!isEmptyUtil.isEmpty(m)) {
      h.push(m);
    }
    h.push(...c);
  }
  let a = new class {
    send(e) {
      let {
        meta: t,
        message: n,
        eventName: r,
        action: a,
        ...l
      } = e;
      let s = n || (r ? `Event: ${r}` : undefined);
      if (!(a == null ? undefined : a.includes(logConstants.getLogTargets.CONSOLE)) || !s) {
        return;
      }
      let u = {
        ...l,
        message: s
      };
      if (t) {
        o(u, t);
      } else {
        o(u);
      }
    }
  }();
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  class s {
    static merge() {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      return t.filter(Boolean).reduce((e, t) => function (e, t) {
        let {
          action: n = [],
          meta: i,
          ...o
        } = e;
        let {
          action: a = [],
          meta: l,
          ...s
        } = t;
        let u = {
          ...i,
          ...l
        };
        return {
          ...o,
          ...s,
          action: [...n, ...a],
          ...(isEmptyUtil.isEmpty(u) ? {} : {
            meta: u
          })
        };
      }(e, t), {});
    }
    updateMeta(e) {
      this.options.meta = e(this.options.meta);
    }
    get() {
      return this.options;
    }
    constructor(e) {
      var t;
      var n;
      var i;
      n = undefined;
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
      }(t = "options", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = n;
      }
      this.options = e;
    }
  }
  function u(e, t, n) {
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
  function c(e) {
    if (typeof e == "string") {
      return {
        message: e
      };
    } else {
      return e;
    }
  }
  let d = {
    level: logConstants.getLogLevels.INFO,
    action: [logConstants.getLogTargets.CONSOLE]
  };
  class h {
    addClient(e) {
      this.clients.push(e);
    }
    setClients(e) {
      this.clients = e;
    }
    resolveCloneParams(e) {
      let {
        ctx: t,
        clients: n = [],
        beforeSend: i = [],
        disableConsole: r
      } = e;
      return {
        ctx: s.merge(this.ctx.get(), t),
        clients: [...this.clients, ...n],
        beforeSend: [...this.logOptionsResolvers, ...i],
        disableConsole: isNullishCheck.isNil(r) ? this.disableConsole : r
      };
    }
    createLoggerWith(e) {
      return new h(this.resolveCloneParams(e));
    }
    log(e) {
      let t = s.merge(d, this.ctx.get(), e);
      let n = this.logOptionsResolvers.length > 0 ? this.logOptionsResolvers.reduce((e, t) => t ? t(e) : e, {
        ...t
      }) : t;
      (this.disableConsole ? this.clients.filter(e => e !== a) : this.clients).forEach(e => {
        e.send(n);
      });
    }
    fatal(e) {
      this.log({
        ...e,
        level: logConstants.getLogLevels.FATAL
      });
    }
    error(e) {
      this.log({
        ...e,
        level: logConstants.getLogLevels.ERROR
      });
    }
    warning(e) {
      this.log({
        ...c(e),
        level: logConstants.getLogLevels.WARNING
      });
    }
    info(e) {
      this.log({
        ...c(e),
        level: logConstants.getLogLevels.INFO
      });
    }
    success(e) {
      this.log({
        ...c(e),
        level: logConstants.getLogLevels.SUCCESS
      });
    }
    constructor({
      ctx: e = {},
      clients: t = [],
      beforeSend: n = [],
      disableConsole: i
    }) {
      u(this, "ctx", undefined);
      u(this, "logOptionsResolvers", []);
      u(this, "disableConsole", undefined);
      u(this, "clients", undefined);
      this.ctx = new s(e);
      this.clients = t;
      this.logOptionsResolvers = n;
      this.disableConsole = i || false;
    }
  }
  function m(e, t, n) {
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
  function g(e) {
    let {
      action: t = [],
      clients: n,
      disableConsole: r
    } = e;
    let o = n.includes(a) || !t.includes(logConstants.getLogTargets.CONSOLE) ? n : [a, ...n];
    if (r) {
      return o.filter(e => e !== a);
    } else {
      return o;
    }
  }
  class f extends h {
    addClient(e) {
      super.addClient(e);
      this.persist.addClient(e);
    }
    setClients(e) {
      let t = g({
        action: this.ctx.get().action,
        clients: e,
        disableConsole: this.disableConsole
      });
      super.setClients(t);
      let n = g({
        action: this.persist.ctx.get().action,
        clients: e,
        disableConsole: this.disableConsole
      });
      this.persist.setClients(n);
    }
    createLoggerWith(e) {
      return new f(this.resolveCloneParams(e));
    }
    log(e) {
      super.log(e);
    }
    fatal(e) {
      super.fatal(e);
    }
    error(e) {
      super.error(e);
    }
    warning(e) {
      super.warning(e);
    }
    info(e) {
      super.info(e);
    }
    success(e) {
      super.success(e);
    }
    constructor({
      clients: e = [],
      ...t
    } = {}) {
      super({
        ...t
      });
      m(this, "persist", super.createLoggerWith({
        ctx: {
          action: [logConstants.getLogTargets.CONSOLE, logConstants.getLogTargets.PERSIST]
        }
      }));
      m(this, "console", super.createLoggerWith({
        ctx: {
          action: [logConstants.getLogTargets.CONSOLE]
        },
        clients: [a]
      }));
      this.setClients(g({
        action: t.ctx?.action,
        clients: e,
        disableConsole: t.disableConsole
      }));
    }
  }
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  var jsonSafeUtils_1 = require("json-safe-utils_1") /*id: 176900*/;
  var apiErrorHandler = require("api-error-handler") /*id: 291616*/;
  var y = {
    ApiError: "ApiError",
    Unknown: "Unknown"
  };
  let E = e => {
    if (!e) {
      return y.Unknown;
    }
    if (e instanceof apiErrorHandler.ApiError) {
      if (e.errorOption?.errorType) {
        return e.errorOption.errorType;
      } else {
        return y.ApiError;
      }
    }
    return y.Unknown;
  };
  let x = e => {
    var t;
    if (e) {
      return {
        ...apiErrorHandler.extractErrorInfo(e),
        message: e.message,
        stack: (t = e.stack) === null || t === undefined ? undefined : t.slice(0, 256),
        type: E(e)
      };
    } else {
      return {};
    }
  };
  let T = {
    [logConstants.getLogLevels.INFO]: "info",
    [logConstants.getLogLevels.SUCCESS]: "success",
    [logConstants.getLogLevels.WARNING]: "warn",
    [logConstants.getLogLevels.ERROR]: "error",
    [logConstants.getLogLevels.FATAL]: "fatal"
  };
  let k = {
    [logConstants.getLogLevels.INFO]: "info",
    [logConstants.getLogLevels.SUCCESS]: "info",
    [logConstants.getLogLevels.WARNING]: "warn",
    [logConstants.getLogLevels.ERROR]: "error",
    [logConstants.getLogLevels.FATAL]: "error"
  };
  let R = e => isFunctionUtil_1.isFunction(e) ? e() : e;
  class w {
    get slardarInstance() {
      let e = R(this.loggerSlardarInstance);
      if (e) {
        return e;
      }
    }
    send(e) {
      var t;
      var n;
      var r;
      var o;
      if (!((t = e.action) === null || t === undefined ? undefined : t.includes(logConstants.getLogTargets.PERSIST))) {
        return;
      }
      let {
        level: a,
        message: s,
        eventName: u,
        meta: c,
        error: d,
        ...h
      } = e;
      let m = e => function (e, t) {
        let {
          keySeparator: n = ".",
          maxDepth: i
        } = t || {};
        let r = function (e, t, o = 1, a) {
          for (let [l, s] of Object.entries(e)) {
            let e = a ? `${a}${n}${l}` : l;
            let u = o + 1;
            if (s && Object.prototype.toString.call(s) === "[object Object]" && (!i || u <= i)) {
              r(s, t, u, e);
            } else {
              t[e] = s;
            }
          }
          return t;
        };
        return r(e, {});
      }({
        ...h,
        ...e,
        error: x(d),
        level: function (e = logConstants.getLogLevels.INFO) {
          return T[e];
        }(a)
      }, {
        maxDepth: 4
      });
      if (a === logConstants.getLogLevels.ERROR && (c == null ? undefined : c.reportJsError) === true) {
        let {
          reactInfo: e,
          ...t
        } = c || {};
        let i = m({
          ...t,
          message: s,
          eventName: u
        });
        if ((n = this.slardarInstance) !== null && n !== undefined) {
          n.call(this, "captureException", d, objectExcludeFilterUtil.filterObjectExclude(safeObjectPropertyMap.safeObjectMap(i, e => isStringTypeCheck.isString(e) ? e : jsonSafeUtils_1.jsonUtils.stringify(e)), (e, t) => t === "error.stack" || isNullishCheck.isNil(e)), e);
        }
      } else if (u) {
        let e = m({
          ...c
        });
        if ("message" in e) {
          e.rawMessage = s;
        } else {
          e.message = s;
        }
        let {
          metrics: t,
          categories: n
        } = function (e) {
          let t = {};
          let n = {};
          for (let i in e) {
            let r = e[i];
            if (isNumberUtil.isNumber(r)) {
              t[i] = r;
            } else {
              n[i] = isStringTypeCheck.isString(r) ? r : jsonSafeUtils_1.jsonUtils.stringify(r);
            }
          }
          return {
            metrics: t,
            categories: n
          };
        }(e);
        if ((r = this.slardarInstance) !== null && r !== undefined) {
          r.call(this, "sendEvent", {
            name: u,
            metrics: t,
            categories: n
          });
        }
      } else if (s) {
        let e = m({
          ...c
        });
        if ((o = this.slardarInstance) !== null && o !== undefined) {
          o.call(this, "sendLog", {
            level: function (e = logConstants.getLogLevels.INFO) {
              return k[e];
            }(a),
            content: s,
            extra: function (e) {
              let t = {};
              for (let n in e) {
                let i = e[n];
                if (isNumberUtil.isNumber(i) || isStringTypeCheck.isString(i)) {
                  t[n] = i;
                } else {
                  t[n] = jsonSafeUtils_1.jsonUtils.stringify(i);
                }
              }
              return t;
            }(e)
          });
        }
      }
    }
    constructor(e) {
      var t;
      var n;
      var i;
      n = undefined;
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
      }(t = "loggerSlardarInstance", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = n;
      }
      this.loggerSlardarInstance = e;
      this.loggerSlardarInstance;
    }
  }
  let I = new f();
  let M = e => {
    let {
      disableConsole: t,
      slardarInstance: n,
      clients: i
    } = e;
    I.disableConsole = t || false;
    if (i) {
      I.setClients(i);
    } else if (n) {
      let e = new w(n);
      I.setClients([e]);
    }
  };
  require.d(exports, {
    defaultLogger: function () {
      return I;
    },
    configureLogger: function () {
      return M;
    }
  });
}