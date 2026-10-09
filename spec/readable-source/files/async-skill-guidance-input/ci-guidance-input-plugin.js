// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillGuidanceInputComponent'
// - Resolved require(570915) to 'async-skill-guidance-input-component'
// - Updated imported property 's' to 'AsyncSkillGuidanceInput' (module 570915)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 771747
         */
module.exports = function (module, exports, require) {
  var asyncSkillGuidanceInputComponent = require("async-skill-guidance-input-component") /*id: 570915*/;
  class r {
    constructor() {
      var e;
      var t;
      var n;
      e = "Content";
      t = asyncSkillGuidanceInputComponent.AsyncSkillGuidanceInput;
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
    CiGuidanceInputPlugin: function () {
      return r;
    }
  });
}