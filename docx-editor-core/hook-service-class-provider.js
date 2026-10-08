// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'HookServiceProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 71742
         */
module.exports = function (module, exports, require) {
  var o;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var hookServiceDiConstants = require("hook-service-di-constants") /*id: 565865*/;
  function c(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  let u = dependencyInjectionContainer.Provide(hookServiceDiConstants.hookServiceToken)(o = class {
    shouldStartRegistering(e) {
      let n = this.registerStatusMap.get(e);
      return n !== hookServiceDiConstants.RegistrationStatus.registered && n !== hookServiceDiConstants.RegistrationStatus.registering;
    }
    getRegisteredStatus(e) {
      return this.registerStatusMap.get(e);
    }
    setRegisteredStatus(e, n) {
      return this.registerStatusMap.set(e, n);
    }
    getHooks(e) {
      return this.featureHookMap.get(e);
    }
    register(e, n, r, o) {
      let i = this.featureHookMap.get(e) || new Map();
      let l = i.get(n);
      let a = {
        callback: r,
        options: o
      };
      if (l) {
        if (l.find(e => e.callback === r)) {
          return;
        }
        for (let e = 0; e < l.length; e++) {
          let n = o == null ? undefined : o.priority;
          let r = l[e].options?.priority;
          if (n !== undefined && r !== undefined && r > n) {
            l.splice(e, 0, a);
            return;
          }
        }
        l.push(a);
      } else {
        i.set(n, [a]);
        this.featureHookMap.set(e, i);
      }
    }
    unRegister(e, n, r) {
      let o = this.featureHookMap.get(e);
      if (o) {
        let e = o.get(n);
        if (e) {
          let n = e.findIndex(e => e.callback === r);
          if (n !== -1) {
            e.splice(n, 1);
          }
        }
      }
    }
    callHook(e, n, r, o) {
      var i;
      let a;
      let c = (i = this.featureHookMap.get(e)) === null || i === undefined ? undefined : i.get(n);
      if (o == null ? undefined : o.isAllResults) {
        a = [];
      }
      if (c && c.length > 0) {
        c.forEach(i => {
          let {
            options: c,
            callback: u
          } = i;
          try {
            let e = u(r);
            if (o == null ? undefined : o.isAllResults) {
              a.push(e);
            } else {
              a = e;
            }
          } catch (r) {
            docxAnalyticsEventTracker.trackDocxAnalyticsEvent("hook_service_callback_error", {
              featureName: e,
              hookName: n,
              priority: c == null ? undefined : c.priority,
              error: r.message
            });
            throw r;
          }
        });
      }
      return a;
    }
    getCallBackOrCallBackList(e, n, r) {
      var o;
      let l = (o = this.featureHookMap.get(e)) === null || o === undefined ? undefined : o.get(n);
      if (l && l.length > 0) {
        if (r) {
          return l.find(e => {
            return e.options?.priority === r;
          })?.callback;
        } else {
          return l;
        }
      }
    }
    async asyncCallHook(e, n, r) {
      var o;
      let i = (o = this.featureHookMap.get(e)) === null || o === undefined ? undefined : o.get(n);
      let a = [];
      if (i && i.length !== 0) {
        for (let o of i) {
          let {
            options: i,
            callback: c
          } = o;
          if (i == null ? undefined : i.usePromiseAll) {
            a.push(c(r));
            continue;
          }
          try {
            await c(r);
          } catch (r) {
            docxAnalyticsEventTracker.trackDocxAnalyticsEvent("hook_service_async_callback_error", {
              featureName: e,
              hookName: n,
              priority: i == null ? undefined : i.priority
            });
            throw r;
          }
        }
        if (a.length > 0) {
          return Promise.allSettled(a).then(e => {
            e.forEach((e, n) => {
              if (e.status !== "fulfilled") {
                if (i != null) {
                  i[n];
                }
              }
            });
            return e;
          });
        }
      }
    }
    onServiceDispose() {
      this.featureHookMap.forEach(e => {
        e.clear();
      });
      this.featureHookMap.clear();
      this.registerStatusMap.clear();
    }
    constructor() {
      c(this, "featureHookMap", new Map());
      c(this, "registerStatusMap", new Map());
    }
  }) || o;
  require.d(exports, {
    HookServiceProvider: function () {
      return u;
    }
  });
}