// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 's' to 'resolveRuntimeHook'
// - Resolved require(770715) to 'resolve-runtime-hook'
// - Renamed variable 'l' to 'chatLayoutRouteMatchers'
// - Resolved require(391713) to 'chat-layout-route-matchers'
// - Renamed variable 'c' to 'chatAbConfigSelectorHook'
// - Resolved require(167077) to 'chat-ab-config-selector-hook'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'S' to 'resolveUseMatches' (module 770715)
// - Updated imported property 't' to 'useChatAbConfigSelector' (module 167077)
// - Updated imported property 'tv' to 'isChatIdPage' (module 391713)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 877398
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function i(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  class o {
    report(e, t) {
      if (!this.reportedMap[e]) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: e,
          meta: {
            value: t,
            ...this.params
          }
        });
        this.reportedMap[e] = true;
      }
    }
    setPerfParams(e, t) {
      this.params[e] = t;
    }
    addPerfParams(e) {
      this.params = {
        ...this.params,
        ...e
      };
    }
    getPerfParams(e) {
      return this.params[e];
    }
    triggerTTU(e, t) {
      this.ttu = e;
      if (t) {
        this.addPerfParams(t);
      }
      this.report("TTU", this.ttu);
    }
    triggerTTV(e, t) {
      this.ttv = e;
      if (t) {
        this.addPerfParams(t);
      }
      this.report("TTV", this.ttv);
    }
    constructor(e) {
      i(this, "ttv", 0);
      i(this, "ttu", 0);
      i(this, "reportedMap", {});
      i(this, "params", undefined);
      this.params = e;
    }
  }
  var resolveRuntimeHook = require("resolve-runtime-hook") /*id: 770715*/;
  var chatLayoutRouteMatchers = require("chat-layout-route-matchers") /*id: 391713*/;
  var chatAbConfigSelectorHook = require("chat-ab-config-selector-hook") /*id: 167077*/;
  function d(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  let u = ["sidebar", "input", "skills"];
  let f = {
    home: {
      ttvTargets: [...u, "obSug"],
      ttuTargets: [...u, "obSug", "imService", "navigateService"]
    },
    conversation: {
      ttvTargets: [...u, "messageList"],
      ttuTargets: [...u, "messageList", "imService"]
    }
  };
  let m = new class extends o {
    triggerTTU(e, t) {
      this.ttu = e;
      if (t) {
        this.addPerfParams(t);
      }
      this.setPerfParams("isTTUFaster", this.ttv === 0);
      if (this.ttv !== 0) {
        this.report("TTU", this.ttu);
      }
    }
    triggerTTV(e, t) {
      this.ttv = e;
      this.addPerfParams(t);
      this.report("TTV", this.ttv);
      if (this.params.isTTUFaster) {
        this.report("TTU", this.ttv);
      }
    }
    calculateResult(e) {
      return e.entries().reduce((e, t) => {
        let [n, {
          value: r,
          params: a
        }] = t;
        e.max = Math.max(e.max, r);
        e.params = {
          ...e.params,
          [n]: r,
          ...a
        };
        return e;
      }, {
        max: 0,
        params: {}
      });
    }
    checkDone(e, t, n, r) {
      let {
        ttvTargets: a,
        ttuTargets: i
      } = n;
      let o = a.every(t => e.has(`TTV_${t}`));
      let s = i.every(e => t.has(`TTU_${e}`));
      if (o) {
        let {
          max: t,
          params: n
        } = this.calculateResult(e);
        this.triggerTTV(t, {
          ...n,
          ...r
        });
      }
      if (s) {
        let {
          max: e,
          params: n
        } = this.calculateResult(t);
        this.triggerTTU(e, {
          ...n,
          ...r
        });
      }
      return o && s;
    }
    constructor(...e) {
      super(...e);
      d(this, "ttvTriggered", false);
      d(this, "ttuTriggered", false);
    }
  }({
    page: "unknown"
  });
  let v = e => {
    let {
      isHome: t
    } = e;
    let n = resolveRuntimeHook.resolveUseMatches();
    let i = reactCoreLibraryReexport.useRef(null);
    let {
      isLandingToMainCoco: o
    } = chatAbConfigSelectorHook.useChatAbConfigSelector();
    reactCoreLibraryReexport.useEffect(() => {
      let e = chatLayoutRouteMatchers.isChatIdPage(n);
      let r = t ? "home" : "conversation";
      if (!t && !e) {
        return;
      }
      let a = new Map([]);
      let s = new Map([]);
      let c = new PerformanceObserver(e => {
        for (let t of e.getEntries()) {
          if (!a.has(t.name) && !s.has(t.name) && (t.name.startsWith("TTV_") && a.set(t.name, {
            value: t.startTime,
            params: t.detail || {}
          }), t.name.startsWith("TTU_") && s.set(t.name, {
            value: t.startTime,
            params: t.detail || {}
          }), m.checkDone(a, s, f[o ? "conversation" : r], {
            page: r,
            isLandingToMainCoco: o
          }))) {
            if (i.current) {
              clearTimeout(i.current);
            }
            c.disconnect();
            break;
          }
        }
      });
      try {
        c.observe({
          type: "mark",
          buffered: true
        });
      } catch {
        c.observe({
          entryTypes: ["mark"],
          buffered: true
        });
      }
      return () => {
        c.disconnect();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      i.current = setTimeout(() => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "render_timeout"
        });
        i.current = null;
      }, 7000);
      return () => {
        if (i.current) {
          clearTimeout(i.current);
        }
      };
    }, []);
  };
  let p = e => {
    let {
      isHome: t
    } = e;
    v({
      isHome: t
    });
    return null;
  };
  require.r(exports);
  require.d(exports, {
    PerfCollector: function () {
      return p;
    }
  });
}