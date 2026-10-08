// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'templateData'
// - Renamed export 'g' to 'useTemplateHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 44291.514b9aaa.js
         * chunkId: 44291
         * moduleId: 519617
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var writingSkillConfigHooks = require("writing-skill-config-hooks") /*id: 276565*/;
  var writingChatInputController_1 = require("writing-chat-input-controller_1") /*id: 659572*/;
  var chatAiTemplateParser = require("chat-ai-template-parser") /*id: 635776*/;
  let l = [0];
  let c = e => {
    let {
      clickBefore: t,
      clickAfter: n,
      currentCategories: c,
      source: d
    } = e ?? {};
    let [u, p] = reactCoreLibraryReexport.useState();
    let h = writingSkillConfigHooks.useWritingFilteredTemplates({
      filteredCategoryIndexes: c ?? l,
      source: d
    });
    let f = writingSkillConfigHooks.useWritingInputOptions({
      source: d
    });
    let m = writingSkillConfigHooks.useWritingGenreConfig();
    return {
      onClickTemplate: e => {
        let {
          template: i,
          value: o,
          attachmentConfig: l,
          isLongArticle: c
        } = e;
        if (t != null) {
          t(i);
        }
        let d = deepEqualUtil_1.deepEqual(u, i);
        writingChatInputController_1.writingChatInput.setAttachmentConfig(undefined);
        if (d) {
          p(undefined);
          writingChatInputController_1.writingChatInput.setTemplate(undefined);
          writingChatInputController_1.writingChatInput.setLongArticleWriting(false);
          return;
        }
        if (!o) {
          return;
        }
        writingChatInputController_1.writingChatInput.setLongArticleWriting(c != null && c);
        p(i);
        writingChatInputController_1.writingChatInput.setTemplate(i);
        if (l) {
          writingChatInputController_1.writingChatInput.setAttachmentConfig(l);
        }
        let h = chatAiTemplateParser.parseChatTemplate(o, {
          ...f,
          ...m
        });
        if (n != null) {
          n(h);
        }
      },
      templates: h,
      currentTemplate: u
    };
  };
  require.d(exports, {
    templateData: function () {
      return l;
    },
    useTemplateHandler: function () {
      return c;
    }
  });
}