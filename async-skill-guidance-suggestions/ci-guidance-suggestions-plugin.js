// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'codeInterpreterSkillGuidance'
// - Resolved require(180379) to 'code-interpreter-skill-guidance'
// - Updated imported property 'g' to 'SkillGuidancePage' (module 180379)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 39317
         */
module.exports = function (module, exports, require) {
  var codeInterpreterSkillGuidance = require("code-interpreter-skill-guidance") /*id: 180379*/;
  function n(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class l {
    constructor() {
      n(this, "titleKey", "newChat_skill_triggered_title_for_dataAnalysis");
      n(this, "Content", codeInterpreterSkillGuidance.SkillGuidancePage);
    }
  }
  require.r(exports);
  require.d(exports, {
    CiGuidanceSuggestionsPlugin: function () {
      return l;
    }
  });
}