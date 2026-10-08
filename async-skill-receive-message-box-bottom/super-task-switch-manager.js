// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'getSuperTaskSwitchManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 656965
         */
module.exports = function (module, exports, require) {
  let i;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  function a(e, t, n) {
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
  class o {
    updateSwitchValue(e, t) {
      this.switchValueMap[e] = {
        ...t
      };
    }
    removeSwitchValue(e) {
      delete this.switchValueMap[e];
    }
    getSwitchValueByChatKey(e, t) {
      let n = this.switchValueMap[e];
      if (t) {
        this.removeSwitchValue(e);
      }
      return n;
    }
    executeSync(e, t) {
      let n = this.getSwitchValueByChatKey(t, true);
      if (n && e) {
        superTaskStore.superTaskStore.getState().setStatusByConvId(e, {
          ...n,
          lastUpdate: Date.now()
        });
      }
      if (e && t) {
        this.localToConvIdMap[t] = e;
      }
    }
    getConvIdByLocalChat(e) {
      return this.localToConvIdMap[e];
    }
    constructor() {
      a(this, "switchValueMap", {});
      a(this, "localToConvIdMap", {});
    }
  }
  i = null;
  let l = () => i = i || new o();
  require.d(exports, {
    getSuperTaskSwitchManager: function () {
      return l;
    }
  });
}