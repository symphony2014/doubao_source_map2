// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'AiPptTemplateSelectorComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 410801
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var aiPptTemplateSelector = require("ai-ppt-template-selector") /*id: 276405*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  var aiPptTemplateStore = require("ai-ppt-template-store") /*id: 603769*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  exports.AiPptTemplateSelectorComponent = () => {
    let {
      selectedTemplateItem: e,
      selectTemplateItem: t,
      enableTemplate: n,
      setShowModule: c,
      showModule: u,
      chatType: d
    } = aiPptTemplateStore_1.aiPptTemplateStore(e => ({
      selectedTemplateItem: e.selectedTemplateItem,
      selectTemplateItem: e.selectTemplateItem,
      enableTemplate: e.enableTemplate,
      setShowModule: e.setShowModule,
      showModule: e.showModule,
      chatType: e.chatType
    }));
    let p = (e, t) => ({
      skill_id: "5000",
      skill_name: "ai_slides",
      genre: t || "",
      template_show_scene: "input_template",
      show_scene: d === chatConversationTypes.ConversationTypes.NewThread ? "landing" : "bottom_bar",
      content_detail: (e == null ? undefined : e.title) || ""
    });
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(aiPptTemplateSelector.TemplateSelector, {
        showModule: u,
        setShowModule: c,
        onCardClick: e => {
          if (e.id === aiPptTemplateStore.customUploadCard.id) {
            teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
              ...p(e, "")
            });
          }
        },
        onConfirm: (n, i) => {
          t(n);
          if (n && (e == null ? undefined : e.id) !== (n == null ? undefined : n.id)) {
            teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
              ...p(n, i || "")
            });
          }
        },
        onCardInView: (e, t) => {
          teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
            ...p(e, t || "")
          });
        }
      });
    } else {
      return null;
    }
  };
}