// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HL' to 'getSkillPreview'
// - Renamed export 'Nu' to 'getSkillName'
// - Renamed export 'ci' to 'formatSkillId'
// - Renamed export 'lx' to 'getSkillActionClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 361602
         */
module.exports = function (module, exports, require) {
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let a = {
    [chatAppEnums.SkillType.ReadAndSummarize]: skillConstantsEnum.SkillName.SKILL_NAME_READ_SUMMARIZE,
    [aiAssistantSkillTypes.SkillTypes.SkillWrite]: skillConstantsEnum.SkillName.SKILL_NAME_WRITING_ASSISTANT,
    [aiAssistantSkillTypes.SkillTypes.SkillImageGen]: skillConstantsEnum.SkillName.SKILL_NAME_IMAGES_GENERATION,
    [aiAssistantSkillTypes.SkillTypes.SkillSearch]: skillConstantsEnum.SkillName.SKILL_NAME_SEARCH,
    [aiAssistantSkillTypes.SkillTypes.SkillDeepSearch]: skillConstantsEnum.SkillName.SKILL_NAME_DEEP_SEARCH,
    [aiAssistantSkillTypes.SkillTypes.SkillTranslate]: skillConstantsEnum.SkillName.SKILL_NAME_TRANSLATE,
    [aiAssistantSkillTypes.SkillTypes.SkillRead]: skillConstantsEnum.SkillName.SKILL_NAME_READ_PDF,
    [aiAssistantSkillTypes.SkillTypes.SkillWebpage]: skillConstantsEnum.SkillName.SKILL_NAME_READ_WEBPAGE,
    [aiAssistantSkillTypes.SkillTypes.SkillMusicGen]: skillConstantsEnum.SkillName.SKILL_NAME_MUSIC_GENERATION,
    [chatAppEnums.SkillType.AcademicSearch]: skillConstantsEnum.SkillName.SKILL_NAME_ACADEMIC_SEARCH,
    [chatAppEnums.SkillType.CodeInterpreter]: skillConstantsEnum.SkillName.SKILL_NAME_CODE_INTERPRETER,
    [aiAssistantSkillTypes.SkillTypes.SkillFreeChat]: null,
    [aiAssistantSkillTypes.SkillTypes.SkillEdu]: skillConstantsEnum.SkillName.SKILL_NAME_EXERCISE_ASSISTANT,
    [chatAppEnums.SkillType.ReadMultiWebsites]: skillConstantsEnum.SkillName.SKILL_NAME_READ_MULTIPLE_URL,
    [chatAppEnums.SkillType.CodeAssistant]: skillConstantsEnum.SkillName.SKILL_NAME_CODING,
    [chatAppEnums.SkillType.ReferenceAsk]: skillConstantsEnum.SkillName.SKILL_NAME_REFERENCE_ACK,
    [chatAppEnums.SkillType.VoiceCall]: skillConstantsEnum.SkillName.SKILL_NAME_VOICE_CALL,
    [chatAppEnums.SkillType.VideoGeneration]: skillConstantsEnum.SkillName.SKILL_NAME_VIDEO_GENERATION,
    [chatAppEnums.SkillType.AiPPT]: skillConstantsEnum.SkillName.SKILL_NAME_AI_PPT,
    [chatAppEnums.SkillType.AIPPTSlides]: skillConstantsEnum.SkillName.SKILL_NAME_AI_SLIDES,
    [aiAssistantSkillTypes.SkillTypes.SkillDeepResearch]: skillConstantsEnum.SkillName.SKILL_NAME_DEEP_RESEARCH,
    [chatAppEnums.SkillType.SkillAiPodcast]: skillConstantsEnum.SkillName.SKILL_NAME_PODCAST,
    [chatAppEnums.SkillType.UGCBot]: skillConstantsEnum.SkillName.SKILL_NAME_AI_BOTS,
    [chatAppEnums.SkillType.AiReadWebsite]: null,
    [chatAppEnums.SkillType.LocalModelQA]: null,
    [chatAppEnums.SkillType.AISpace]: skillConstantsEnum.SkillName.SKILL_NAME_AI_SPACE,
    [chatAppEnums.SkillType.AIPlayground]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtChatSkillPlaceholder]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillTranslate]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSummaryHighlight]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillExplain]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillDesExtSearchCard]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillLinkPreview]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillDesExtSuggest]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillVideoSummary]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillOneLevelVideoSummary]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillRewriteWithTone]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillCustomSkill]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSearchMindNote]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillTextToMindNote]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillBilingualSentence]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillAITitle]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtPodcastTranscript]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillWebsiteDetail]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSummary]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillAIToolSummary]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillMindMap]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSimplifiedRead]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillGrammar]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillReply]: null,
    [chatAppEnums.SkillType.DesExtSkillMeetingSummary]: skillConstantsEnum.SkillName.SKILL_NAME_MEETING_RECORD,
    [aiAssistantSkillTypes.SkillTypes.SkillTypeMediaUnderstandingByAsr]: null,
    [aiAssistantSkillTypes.SkillTypes.SkillSearchEngine]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillVideoListSummary]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillCommentAnalyze]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillVideoDeepAnalyze]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillTopicTrendAnalyze]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillPageTranslate]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSharedAppAssistant]: skillConstantsEnum.SkillName.SKILL_SHARED_APP_ASSISTANT,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillGrammarCorrection]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillPodcastReading]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillEncyclopedia]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillMindMapGenerate]: null,
    [aiAssistantSkillTypes.SkillTypes.SkillUserCustomSkill]: null,
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask]: skillConstantsEnum.SkillName.SKILL_NAME_SUPER_TASK,
    [chatAppEnums.SkillType.AIBilingualSubtitles]: null
  };
  let l = function (e = aiAssistantSkillTypes.SkillTypes.SkillFreeChat) {
    return a[e || aiAssistantSkillTypes.SkillTypes.SkillFreeChat];
  };
  let s = {
    [chatAppEnums.SkillType.ReadAndSummarize]: "chat_action_bar_read_summarize",
    [aiAssistantSkillTypes.SkillTypes.SkillWrite]: "chat_action_bar_compose",
    [aiAssistantSkillTypes.SkillTypes.SkillImageGen]: "chat_action_bar_image_creation",
    [aiAssistantSkillTypes.SkillTypes.SkillSearch]: "chat_action_bar_search",
    [aiAssistantSkillTypes.SkillTypes.SkillDeepSearch]: "chat_action_bar_deep_search",
    [aiAssistantSkillTypes.SkillTypes.SkillTranslate]: "chat_action_bar_translate",
    [aiAssistantSkillTypes.SkillTypes.SkillRead]: "chat_action_bar_read_pdf",
    [aiAssistantSkillTypes.SkillTypes.SkillWebpage]: "chat_action_bar_read_url",
    [aiAssistantSkillTypes.SkillTypes.SkillMusicGen]: "chat_action_bar_music_creation",
    [chatAppEnums.SkillType.AcademicSearch]: "chat_action_bar_academic_search",
    [chatAppEnums.SkillType.CodeInterpreter]: "chat_action_bar_code_interpreter",
    [chatAppEnums.SkillType.ExerciseAssistant]: "chat_action_bar_exercise_assistant",
    [aiAssistantSkillTypes.SkillTypes.SkillFreeChat]: "",
    [chatAppEnums.SkillType.ReadMultiWebsites]: "",
    [chatAppEnums.SkillType.CodeAssistant]: "chat_action_bar_coding",
    [chatAppEnums.SkillType.VoiceCall]: "",
    [chatAppEnums.SkillType.VideoGeneration]: "chat_action_bar_video_creation",
    [chatAppEnums.SkillType.AiPPT]: "chat_action_bar_video_creation",
    [chatAppEnums.SkillType.AIPPTSlides]: "chat_action_bar_slides_creation",
    [chatAppEnums.SkillType.UGCBot]: "",
    [chatAppEnums.SkillType.AiReadWebsite]: "",
    [chatAppEnums.SkillType.LocalModelQA]: "",
    [chatAppEnums.SkillType.AISpace]: "",
    [chatAppEnums.SkillType.AIPlayground]: "",
    [chatAppEnums.SkillType.SkillAiPodcast]: "",
    [chatAppEnums.SkillType.CustomSkill]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtChatSkillPlaceholder]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillTranslate]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSummaryHighlight]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillExplain]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillDesExtSearchCard]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillLinkPreview]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillDesExtSuggest]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillVideoSummary]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillOneLevelVideoSummary]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillRewriteWithTone]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillCustomSkill]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSearchMindNote]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillTextToMindNote]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillBilingualSentence]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillAITitle]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtPodcastTranscript]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillWebsiteDetail]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSummary]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillAIToolSummary]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillReferenceAsk]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillMindMap]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSimplifiedRead]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillGrammar]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillReply]: "",
    [chatAppEnums.SkillType.DesExtSkillMeetingSummary]: "",
    [aiAssistantSkillTypes.SkillTypes.SkillTypeMediaUnderstandingByAsr]: "",
    [aiAssistantSkillTypes.SkillTypes.SkillSearchEngine]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillVideoListSummary]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillCommentAnalyze]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillVideoDeepAnalyze]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillTopicTrendAnalyze]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillPageTranslate]: "",
    [aiAssistantSkillTypes.SkillTypes.SkillDeepResearch]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSharedAppAssistant]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillGrammarCorrection]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillPodcastReading]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillEncyclopedia]: "",
    [aiAssistantSkillTypes.SkillTypes.DesExtSkillMindMapGenerate]: "",
    [chatAppEnums.SkillType.AIBilingualSubtitles]: ""
  };
  let u = function () {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : aiAssistantSkillTypes.SkillTypes.SkillFreeChat;
    return s[t] ?? s[aiAssistantSkillTypes.SkillTypes.SkillFreeChat];
  };
  let c = {
    [aiAssistantSkillTypes.SkillTypes.SkillWrite]: "writing_preview",
    [aiAssistantSkillTypes.SkillTypes.SkillImageGen]: "image_preview",
    [aiAssistantSkillTypes.SkillTypes.SkillFreeChat]: "",
    [chatAppEnums.SkillType.CodeInterpreter]: "ci_preview"
  };
  let d = function () {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : aiAssistantSkillTypes.SkillTypes.SkillFreeChat;
    return c[t || aiAssistantSkillTypes.SkillTypes.SkillFreeChat] ?? c[aiAssistantSkillTypes.SkillTypes.SkillFreeChat];
  };
  let h = e => e === undefined ? "generic" : e.toString();
  require.d(exports, {
    getSkillPreview: function () {
      return d;
    },
    getSkillName: function () {
      return l;
    },
    formatSkillId: function () {
      return h;
    },
    getSkillActionClass: function () {
      return u;
    }
  });
}