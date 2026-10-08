// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'extractSkillBoxData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 179396
         */
module.exports = function (module, exports, require) {
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  let r = e => {
    let a = skillMessageProcessor.skillTypeInfo(e == null ? undefined : e.ext);
    let s = e.content_obj;
    let c = a == null ? undefined : a.show_variables;
    return {
      tone: c == null ? undefined : c.tone,
      language: c == null ? undefined : c.language,
      length: c == null ? undefined : c.length,
      style: c == null ? undefined : c.style,
      skillType: a == null ? undefined : a.skill_type,
      templateType: (c == null ? undefined : c.template_type) ?? "",
      templateKey: (a == null ? undefined : a.template_key) ?? "",
      template: (c == null ? undefined : c.template) ?? "",
      originalText: (c == null ? undefined : c.original_text) ?? "",
      targetLang: s == null ? undefined : s.show_variables?.target_lang
    };
  };
  require.d(exports, {
    extractSkillBoxData: function () {
      return r;
    }
  });
}