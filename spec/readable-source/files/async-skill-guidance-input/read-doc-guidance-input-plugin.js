// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillGuidanceInput_1'
// - Resolved require(392848) to 'async-skill-guidance-input_1'
// - Updated imported property 'p' to 'ReadDocSkillInput' (module 392848)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 980588
         */
module.exports = function (module, exports, require) {
  var asyncSkillGuidanceInput_1 = require("async-skill-guidance-input_1") /*id: 392848*/;
  class r {
    constructor() {
      var e;
      var t;
      var n;
      e = "Content";
      t = asyncSkillGuidanceInput_1.ReadDocSkillInput;
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
    ReadDocGuidanceInputPlugin: function () {
      return r;
    }
  });
}