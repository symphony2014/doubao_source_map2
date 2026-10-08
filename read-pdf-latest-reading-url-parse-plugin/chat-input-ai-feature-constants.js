// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KP' to 'AiFeatureType'
// - Renamed export 'k5' to 'featureSkillIdMap'
// - Renamed export 'vQ' to 'featureActionNameMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 155267
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {})[i.SummarizeSingle = 1] = "SummarizeSingle";
  i[i.SummarizeMultiple = 2] = "SummarizeMultiple";
  i[i.SummarizeWebsite = 3] = "SummarizeWebsite";
  i[i.HighlightSingle = 4] = "HighlightSingle";
  i[i.HighlightMultiple = 5] = "HighlightMultiple";
  i[i.HighlightWebsite = 6] = "HighlightWebsite";
  i[i.GenerateMindMap = 7] = "GenerateMindMap";
  i[i.CreateByDoc = 8] = "CreateByDoc";
  i[i.CreateByPPT = 9] = "CreateByPPT";
  i[i.MakeQuiz = 10] = "MakeQuiz";
  i[i.CreateByWebsite = 11] = "CreateByWebsite";
  i[i.ExplainImage = 12] = "ExplainImage";
  i[i.SummarizeImage = 13] = "SummarizeImage";
  i[i.ExtractTextFromImage = 14] = "ExtractTextFromImage";
  i[i.IntroFolder = 15] = "IntroFolder";
  i[i.UsageFolder = 16] = "UsageFolder";
  i[i.IntroRepo = 17] = "IntroRepo";
  i[i.IntroFile = 18] = "IntroFile";
  i[i.UsageFile = 19] = "UsageFile";
  i[i.SummarizeData = 20] = "SummarizeData";
  i[i.GenerateCharts = 21] = "GenerateCharts";
  i[i.AnalyzeQueryData = 22] = "AnalyzeQueryData";
  i[i.GeneratePodcast = 23] = "GeneratePodcast";
  i[i.GenerateWhiteboardCode = 24] = "GenerateWhiteboardCode";
  i[i.GeneratePPT = 25] = "GeneratePPT";
  i[i.ExplainAskSug = 26] = "ExplainAskSug";
  i[i.ExpandAskSug = 27] = "ExpandAskSug";
  i[i.DeepResearchAskSug = 28] = "DeepResearchAskSug";
  let r = i;
  let a = {
    [r.SummarizeSingle]: "skill_read_file_shortcut2",
    [r.SummarizeMultiple]: "skill_read_file_shortcut5",
    [r.SummarizeWebsite]: "skill_read_file_shortcut7",
    [r.HighlightSingle]: "skill_read_file_shortcut1",
    [r.HighlightMultiple]: "skill_read_file_explainDoc",
    [r.HighlightWebsite]: "skill_read_file_shortcut8",
    [r.GenerateMindMap]: "skill_read_file_shortcut6",
    [r.CreateByDoc]: "skill_read_file_refineDoc",
    [r.CreateByPPT]: "skill_read_file_pptScript",
    [r.MakeQuiz]: "skill_read_file_shortcut3",
    [r.CreateByWebsite]: "skill_read_file_writeFromWebpage",
    [r.ExplainImage]: "skill_read_image_shortcut1",
    [r.SummarizeImage]: "skill_read_pic_prompt1",
    [r.ExtractTextFromImage]: "skill_read_pic_prompt2",
    [r.IntroFolder]: "cici_web_ai_coding_default_query_intro_folder",
    [r.UsageFolder]: "cici_web_ai_coding_default_query_usage_folder",
    [r.IntroRepo]: "cici_web_ai_coding_default_query_intro_repo",
    [r.IntroFile]: "cici_web_ai_coding_default_query_intro_file",
    [r.UsageFile]: "cici_web_ai_coding_default_query_usage_file",
    [r.SummarizeData]: "skill_dataAnalysis_prompt1",
    [r.GenerateCharts]: "skill_dataAnalysis_prompt2",
    [r.GeneratePodcast]: "podcast_chat_option_generate",
    [r.AnalyzeQueryData]: "web_ai_coding_default_query_data_analysis",
    [r.GenerateWhiteboardCode]: "coding_website_build_drawboard_query",
    [r.GeneratePPT]: "slides_chat_sug_gen",
    [r.ExplainAskSug]: "chat_selectText_ask_sug_explain",
    [r.ExpandAskSug]: "chat_selectText_ask_sug_expand",
    [r.DeepResearchAskSug]: "web_deepResearch_btn"
  };
  let l = {
    [r.HighlightSingle]: "highlight",
    [r.SummarizeSingle]: "summarize",
    [r.MakeQuiz]: "make_a_quiz",
    [r.GenerateMindMap]: "generate_mind_map",
    [r.SummarizeImage]: "image_summary",
    [r.ExtractTextFromImage]: "image_read_text",
    [r.ExplainImage]: "image_vlm_summary",
    [r.SummarizeData]: "data_analysis_summary",
    [r.GenerateCharts]: "data_analysis_three_charts",
    [r.SummarizeWebsite]: "link_summary",
    [r.HighlightWebsite]: "link_main_content",
    [r.GeneratePodcast]: "generate_podcast",
    [r.GeneratePPT]: "slides_chat_sug_gen"
  };
  require.d(exports, {
    AiFeatureType: function () {
      return r;
    },
    featureSkillIdMap: function () {
      return a;
    },
    featureActionNameMap: function () {
      return l;
    }
  });
}