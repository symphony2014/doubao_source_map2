// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'samanthaToSkillMap'
// - Renamed export 'y' to 'skillToSamanthaMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 71372
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let r = {
    [aiAssistantSkillTypes.SkillTypes.SkillImageGen]: aiAssistantSkillTypes.SamanthaTypes.SamanthaImageInput,
    [aiAssistantSkillTypes.SkillTypes.SkillMusicGen]: aiAssistantSkillTypes.SamanthaTypes.SamanthaMusicGenInput,
    [aiAssistantSkillTypes.SkillTypes.SkillSearch]: aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchInput,
    [aiAssistantSkillTypes.SkillTypes.SkillRead]: aiAssistantSkillTypes.SamanthaTypes.SamanthaReadInput,
    [aiAssistantSkillTypes.SkillTypes.SkillWebpage]: aiAssistantSkillTypes.SamanthaTypes.SamanthaWebpageInput,
    [aiAssistantSkillTypes.SkillTypes.SkillTranslate]: aiAssistantSkillTypes.SamanthaTypes.SamanthaTranslate,
    [aiAssistantSkillTypes.SkillTypes.SkillDeepSearch]: aiAssistantSkillTypes.SamanthaTypes.SamanthaDeepSearchInput,
    [aiAssistantSkillTypes.SkillTypes.SkillFreeChat]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant]: aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantInput,
    [aiAssistantSkillTypes.SkillTypes.SkillWrite]: aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteInput,
    [aiAssistantSkillTypes.SkillTypes.SkillVideoGeneration]: aiAssistantSkillTypes.SamanthaTypes.SamanthaVideoGenerationInput,
    [aiAssistantSkillTypes.SkillTypes.SkillType_AiPPT]: aiAssistantSkillTypes.SamanthaTypes.SamanthaAiPPTInput,
    [aiAssistantSkillTypes.SkillTypes.SkillCodeInterpreter]: aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeInterpreterInput,
    [aiAssistantSkillTypes.SkillTypes.SkillEdu]: aiAssistantSkillTypes.SamanthaTypes.SamanthaEduInput,
    [aiAssistantSkillTypes.SkillTypes.SkillAiPodcast]: aiAssistantSkillTypes.SamanthaTypes.SamanthaAiPodcastInput,
    [aiAssistantSkillTypes.SkillTypes.DesExtChatSkillPlaceholder]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillTranslate]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSummaryHighlight]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillExplain]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillDesExtSearchCard]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillLinkPreview]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillDesExtSuggest]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillVideoSummary]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillOneLevelVideoSummary]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillRewriteWithTone]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillCustomSkill]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSearchMindNote]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillTextToMindNote]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillBilingualSentence]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillAITitle]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtPodcastTranscript]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillWebsiteDetail]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSummary]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillMultiWebsites]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillAIToolSummary]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillReferenceAsk]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillMindMap]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSimplifiedRead]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillGrammar]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillReply]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask]: aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtSupertask,
    [aiAssistantSkillTypes.SkillTypes.SkillTypeMediaUnderstandingByAsr]: aiAssistantSkillTypes.SamanthaTypes.SamanthaMediaUnderstandingByAsrInput,
    [aiAssistantSkillTypes.SkillTypes.SkillSearchEngine]: aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchEngineInput,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillVideoListSummary]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillCommentAnalyze]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillVideoDeepAnalyze]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillTopicTrendAnalyze]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillPageTranslate]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.SkillDeepResearch]: aiAssistantSkillTypes.SamanthaTypes.SamanthaDeepResearchInput,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSharedAppAssistant]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillGrammarCorrection]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillPodcastReading]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillMeetingSummary]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillEncyclopedia]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillMindMapGenerate]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText,
    [aiAssistantSkillTypes.SkillTypes.SkillUserCustomSkill]: aiAssistantSkillTypes.SamanthaTypes.SamanthaText
  };
  let o = {
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchInput]: aiAssistantSkillTypes.SkillTypes.SkillSearch,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaDeepSearchInput]: aiAssistantSkillTypes.SkillTypes.SkillDeepSearch,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaImageInput]: aiAssistantSkillTypes.SkillTypes.SkillImageGen,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaMusicGenInput]: aiAssistantSkillTypes.SkillTypes.SkillMusicGen,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaReadInput]: aiAssistantSkillTypes.SkillTypes.SkillRead,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaWebpageInput]: aiAssistantSkillTypes.SkillTypes.SkillWebpage,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaTranslate]: aiAssistantSkillTypes.SkillTypes.SkillTranslate,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaText]: aiAssistantSkillTypes.SkillTypes.SkillFreeChat,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantInput]: aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaVideoGenerationInput]: aiAssistantSkillTypes.SkillTypes.SkillVideoGeneration,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteInput]: aiAssistantSkillTypes.SkillTypes.SkillWrite,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaAiPPTInput]: aiAssistantSkillTypes.SkillTypes.SkillType_AiPPT,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaEduInput]: aiAssistantSkillTypes.SkillTypes.SkillEdu,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeInterpreterInput]: aiAssistantSkillTypes.SkillTypes.SkillCodeInterpreter,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtSupertask]: aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaMediaUnderstandingByAsrInput]: aiAssistantSkillTypes.SkillTypes.SkillTypeMediaUnderstandingByAsr,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaDeepResearchInput]: aiAssistantSkillTypes.SkillTypes.SkillDeepResearch,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchEngineInput]: aiAssistantSkillTypes.SkillTypes.SkillSearchEngine,
    [aiAssistantSkillTypes.SamanthaTypes.SamanthaSharedAppAssistant]: aiAssistantSkillTypes.SkillTypes.DesExtSkillSharedAppAssistant
  };
  require.d(exports, {
    samanthaToSkillMap: function () {
      return o;
    },
    skillToSamanthaMap: function () {
      return r;
    }
  });
}