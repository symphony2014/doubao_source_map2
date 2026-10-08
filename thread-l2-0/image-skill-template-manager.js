// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'templateInfoManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 384089
         */
module.exports = function (module, exports, require) {
  let r;
  class i {
    getTemplateInfo() {
      return this.currentTemplateInfo;
    }
    setTemplateInfo(e, t) {
      this.currentTemplateInfo = {
        id: e,
        genre: t
      };
    }
    clearTemplateInfo() {
      this.currentTemplateInfo = undefined;
    }
    constructor() {
      var e;
      var t;
      var n;
      t = undefined;
      if ((e = typeof (n = function (e, t) {
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
      }(e = "currentTemplateInfo", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  let a = () => {
    r ||= new i();
    return r;
  };
  require.d(exports, {
    templateInfoManager: function () {
      return a;
    }
  });
}