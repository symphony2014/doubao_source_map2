// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'useCodingPrompt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29592.0fe385c7.js
         * chunkId: 29592
         * moduleId: 914487
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  var chatAiSkillPrompts = require("chat-ai-skill-prompts") /*id: 156336*/;
  let o = e => {
    let {
      setEditorValue: t,
      currentPage: n,
      trackParams: o,
      inputRef: s
    } = e;
    let [c, d] = reactCoreLibraryReexport.useState(false);
    let u = reactCoreLibraryReexport.useMemo(() => ({
      ...o,
      current_page: n
    }), [o]);
    let [_] = codingSkillStoreModule.codingSkillStore(e => [e.recommendCodePromptsTemplates], deepEqualityUtil.deepEqual);
    return {
      showPromptTemplateSelect: !!_.length,
      templateList: _ ?? [],
      templateSelectVisible: c,
      setTemplateSelectVisible: d,
      onChangeTemplate: e => {
        let n = _.find(t => t.key === e);
        if (n) {
          let e = chatAiSkillPrompts.parsePromptTemplate(n.template, n.variable_list);
          t(e);
          chatAiSkillPrompts.focusTemplateInput(e, s);
        } else {
          t({
            data: []
          });
        }
      },
      trackParams: u
    };
  };
  require.d(exports, {
    useCodingPrompt: function () {
      return o;
    }
  });
}