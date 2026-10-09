// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qJ' to 'isInstructionOrDevMode'
// - Renamed export 'ZP' to 'modeManager'
// - Renamed export 'XK' to 'getCurrentMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30108.9930390a.js
         * chunkId: 30108
         * moduleId: 722076
         */
module.exports = function (module, exports, require) {
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var skillActionConstants = require("skill-action-constants") /*id: 418389*/;
  let i = "code_agent_mode";
  function c(e, t, r) {
    var a;
    if ((t = typeof (a = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var a = r.call(e, t || "default");
        if (typeof a != "object") {
          return a;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? a : a + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let d = () => {
    let e = storageWrapperWithFallback.LocalStorageWrapper.getItem(i);
    if (e && [skillActionConstants.ConfigKeys.ChatMode, skillActionConstants.ConfigKeys.DevMode].includes(e)) {
      return e;
    } else {
      return skillActionConstants.ConfigKeys.DevMode;
    }
  };
  function s() {
    if (!storageWrapperWithFallback.LocalStorageWrapper.getItem(i) || !codeRouteUtils.isCodePage()) {
      return false;
    }
    let e = d();
    return e === skillActionConstants.ConfigKeys.InstructionOpt || e === skillActionConstants.ConfigKeys.DevMode;
  }
  class l {
    get(e) {
      return skillActionConstants.ConfigKeys.ChatMode;
    }
    set(e, t) {}
    initialize(e) {
      if (arguments.length > 1 && arguments[1] !== undefined) {
        arguments[1];
      } else {
        skillActionConstants.ConfigKeys.ChatMode;
      }
    }
  }
  class u {
    get(e) {
      return skillActionConstants.ConfigKeys.DevMode;
    }
    set(e, t) {}
    initialize(e) {
      if (arguments.length > 1 && arguments[1] !== undefined) {
        arguments[1];
      } else {
        skillActionConstants.ConfigKeys.DevMode;
      }
    }
  }
  let f = () => codeRouteUtils.isCodePage() ? new u() : new l();
  var p = new class {
    getDefaultMode() {
      if (codeRouteUtils.isCodePage()) {
        return skillActionConstants.ConfigKeys.DevMode;
      } else {
        return skillActionConstants.ConfigKeys.ChatMode;
      }
    }
    isValidMode(e) {
      return [skillActionConstants.ConfigKeys.ChatMode, skillActionConstants.ConfigKeys.DevMode].includes(e);
    }
    setMode(e) {
      if (this.isValidMode(e)) {
        this.strategy.set(this.key, e);
      }
    }
    getCurrentMode() {
      let e = this.strategy.get(this.key);
      if (this.isValidMode(e)) {
        return e;
      } else {
        return null;
      }
    }
    initialize() {
      let e = this.getDefaultMode();
      this.strategy.initialize(this.key, e);
    }
    constructor() {
      c(this, "strategy", undefined);
      c(this, "key", i);
      this.strategy = f();
    }
  }();
  require.d(exports, {
    isInstructionOrDevMode: function () {
      return s;
    },
    modeManager: function () {
      return p;
    },
    getCurrentMode: function () {
      return d;
    }
  });
}