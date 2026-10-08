// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'SkillCardContent'
// - Renamed export 'P' to 'SkillCardConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-card.1870af5c.js
         * chunkId: 48185
         * moduleId: 171032
         */
module.exports = function (module, exports, require) {
  function i(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class n {
    constructor() {
      i(this, "Content", undefined);
    }
  }
  class o {
    constructor() {
      i(this, "skillType", undefined);
      i(this, "renderIcon", undefined);
      i(this, "renderDesc", undefined);
      i(this, "renderTitle", undefined);
      i(this, "render", undefined);
      i(this, "onClick", undefined);
    }
  }
  require.d(exports, {
    SkillCardContent: function () {
      return n;
    },
    SkillCardConfig: function () {
      return o;
    }
  });
}