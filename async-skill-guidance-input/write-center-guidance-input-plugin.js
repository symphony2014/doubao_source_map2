// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillGuidanceInputComponentWrapper'
// - Resolved require(70044) to 'skill-guidance-input-component-wrapper'
// - Updated imported property 'D' to 'SkillGuidanceInputComponent' (module 70044)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 928092
         */
module.exports = function (module, exports, require) {
  var skillGuidanceInputComponentWrapper = require("skill-guidance-input-component-wrapper") /*id: 70044*/;
  class r {
    constructor() {
      var e;
      var t;
      var n;
      e = "Content";
      t = skillGuidanceInputComponentWrapper.SkillGuidanceInputComponent;
      if ((e = typeof (n = function (e, t) {
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
      }(e, "string")) == "symbol" ? n : n + "") in this) {
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
  require.r(exports);
  require.d(exports, {
    WriteCenterGuidanceInputPlugin: function () {
      return r;
    }
  });
}