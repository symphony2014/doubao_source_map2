// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'translateSkillGuidancePage_2'
// - Resolved require(670554) to 'translate-skill-guidance-page_2'
// - Updated imported property 'j' to 'TranslateSkillGuidance' (module 670554)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 282502
         */
module.exports = function (module, exports, require) {
  var translateSkillGuidancePage_2 = require("translate-skill-guidance-page_2") /*id: 670554*/;
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
      n(this, "titleKey", "newChat_skill_triggered_title_for_translation");
      n(this, "Content", translateSkillGuidancePage_2.TranslateSkillGuidance);
    }
  }
  require.r(exports);
  require.d(exports, {
    TranslateGuidanceSuggestionsPlugin: function () {
      return l;
    }
  });
}