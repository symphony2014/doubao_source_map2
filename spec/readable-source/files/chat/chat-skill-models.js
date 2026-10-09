// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'SkillDefinition'
// - Renamed export 'U' to 'SkillUiConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 53859
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
  class r {
    constructor() {
      i(this, "skillType", undefined);
      i(this, "service", undefined);
    }
  }
  i(r, "pluginName", undefined);
  class o {
    constructor() {
      i(this, "skillType", undefined);
      i(this, "icon", undefined);
      i(this, "ColorfulIcon", undefined);
      i(this, "landingPageRoute", undefined);
      i(this, "Component", undefined);
      i(this, "LiteComponent", undefined);
    }
  }
  require.d(exports, {
    SkillDefinition: function () {
      return r;
    },
    SkillUiConfig: function () {
      return o;
    }
  });
}