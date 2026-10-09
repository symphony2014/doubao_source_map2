// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ClientVarMetaManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 865679
         */
module.exports = function (module, exports, require) {
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var o = eventEmitterUmd;
  function l(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let s = require("debug-logger-factory") /*id: 102743*/.createLogger("data:ClientVarMeta");
  let a = new class {
    updateMeta(e) {
      if (!e) {
        s("meta_map undefined");
        return;
      }
      for (let [i, r] of Object.entries(e)) {
        this.setMeta(i, r);
      }
    }
    updateEditor(e) {
      let i = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (e) {
        for (let [r, n] of Object.entries(e)) {
          let e = this.formatEditorData(n);
          if (i || !this.editorMap.has(r)) {
            this.setEditor(r, e);
          }
        }
      }
    }
    applyClientVar(e) {
      let {
        meta_map: i,
        editor_map: r
      } = e;
      this.updateEditor(r, false);
      this.updateMeta(i);
    }
    getCurrentPageTenantId() {
      return this.currentPageTenantId;
    }
    setEditor(e, i) {
      this.editorMap.set(e, i);
      this.eventEmitter.emit("editor_change", e, i);
    }
    setMeta(e, i) {
      this.metaMap.set(e, i);
      this.eventEmitter.emit("meta_change", e, i);
    }
    getMetaByToken(e) {
      return this.metaMap.get(e);
    }
    getEditorByUid(e) {
      return this.editorMap.get(e);
    }
    applyNewChangesExtra(e) {
      let {
        editor_map: i
      } = e;
      this.updateEditor(i);
    }
    formatEditorData(e) {
      return {
        ...e,
        display_name: {
          value: e.name,
          i18n_value: {
            zh_cn: e.name,
            en_us: e.en_name
          }
        },
        i18n_value: e.i18n_value,
        user_type: e.user_type
      };
    }
    constructor() {
      l(this, "currentPageTenantId", "");
      l(this, "metaMap", new Map());
      l(this, "editorMap", new Map());
      l(this, "eventEmitter", new o());
    }
  }();
  exports.ClientVarMetaManager = a;
}