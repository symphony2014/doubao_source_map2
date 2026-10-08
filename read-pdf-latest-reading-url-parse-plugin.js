(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([['read-pdf-latest-reading-url-parse-plugin', 63210], {
        "chat-input-ai-feature-constants": require("./read-pdf-latest-reading-url-parse-plugin/chat-input-ai-feature-constants.js"),
"155267": require("./read-pdf-latest-reading-url-parse-plugin/chat-input-ai-feature-constants.js"),
"attachment-to-message-block-transformer": require("./read-pdf-latest-reading-url-parse-plugin/attachment-to-message-block-transformer.js"),
"324654": require("./read-pdf-latest-reading-url-parse-plugin/attachment-to-message-block-transformer.js"),
"attachment-constants": require("./read-pdf-latest-reading-url-parse-plugin/attachment-constants.js"),
"373585": require("./read-pdf-latest-reading-url-parse-plugin/attachment-constants.js"),
"chat-input-ai-feature-utils": require("./read-pdf-latest-reading-url-parse-plugin/chat-input-ai-feature-utils.js"),
"458924": require("./read-pdf-latest-reading-url-parse-plugin/chat-input-ai-feature-utils.js"),
"chat-skill-message-sender": require("./read-pdf-latest-reading-url-parse-plugin/chat-skill-message-sender.js"),
"500722": require("./read-pdf-latest-reading-url-parse-plugin/chat-skill-message-sender.js"),
"chat-input-action-utils": require("./read-pdf-latest-reading-url-parse-plugin/chat-input-action-utils.js"),
"678030": require("./read-pdf-latest-reading-url-parse-plugin/chat-input-action-utils.js"),
"read-pdf-latest-reading-url-plugin": require("./read-pdf-latest-reading-url-parse-plugin/read-pdf-latest-reading-url-plugin.js"),
"728790": require("./read-pdf-latest-reading-url-parse-plugin/read-pdf-latest-reading-url-plugin.js"),
"chat-message-sender": require("./read-pdf-latest-reading-url-parse-plugin/chat-message-sender.js"),
"894807": require("./read-pdf-latest-reading-url-parse-plugin/chat-message-sender.js")
        }, function (e) {
  !function () {
    if ("undefined" != typeof window) {
      var e = {
          skill_read_file_shortcut2: "\u8BE6\u7EC6\u603B\u7ED3\u8FD9\u7BC7\u6587\u6863\u5185\u5BB9",
          skill_read_file_shortcut5: "\u8BE6\u7EC6\u603B\u7ED3\u8FD9\u4E9B\u6587\u6863\u5185\u5BB9",
          skill_read_file_shortcut7: "\u8BE6\u7EC6\u603B\u7ED3\u8FD9\u4E2A\u7F51\u9875\u5185\u5BB9",
          skill_read_file_shortcut1: "\u7528\u901A\u4FD7\u6613\u61C2\u7684\u8BDD\uFF0C\u8BF4\u8BF4\u6587\u6863\u8BB2\u4E86\u4EC0\u4E48",
          skill_read_file_explainDoc: "\u7528\u901A\u4FD7\u6613\u61C2\u7684\u8BDD\uFF0C\u8BF4\u8BF4\u8FD9\u4E9B\u6587\u6863\u8BB2\u4E86\u4EC0\u4E48",
          skill_read_file_shortcut8: "\u7528\u901A\u4FD7\u6613\u61C2\u7684\u8BDD\uFF0C\u8BF4\u8BF4\u7F51\u9875\u8BB2\u4E86\u4EC0\u4E48",
          skill_read_file_shortcut6: "\u751F\u6210\u8111\u56FE",
          skill_read_file_refineDoc: "\u5BF9\u6587\u6863\u5185\u5BB9\u8FDB\u884C\u6DA6\u8272",
          skill_read_file_pptScript: "\u6839\u636EPPT\u5185\u5BB9\u5199\u4E00\u7BC7\u8BB2\u7A3F",
          skill_read_file_shortcut3: "\u751F\u6210\u4E00\u4E2A\u7B80\u77ED\u6458\u8981",
          skill_read_file_writeFromWebpage: "\u53C2\u8003\u7F51\u9875\u5199\u4E00\u7BC7\u539F\u521B\u5185\u5BB9",
          skill_read_image_shortcut1: "\u89E3\u91CA\u56FE\u7247",
          skill_read_pic_prompt1: "\u6574\u7406\u56FE\u7247\u4E2D\u7684\u6838\u5FC3\u5185\u5BB9",
          skill_read_pic_prompt2: "\u63D0\u53D6\u56FE\u4E2D\u6587\u5B57",
          cici_web_ai_coding_default_query_intro_folder: "\u4ECB\u7ECD\u4E0B\u8FD9\u4E2A\u9879\u76EE",
          cici_web_ai_coding_default_query_usage_folder: "\u8FD9\u4E2A\u9879\u76EE\u7684\u4E3B\u8981\u7528\u9014\u662F\u4EC0\u4E48",
          cici_web_ai_coding_default_query_intro_repo: "\u4ECB\u7ECD\u4E0B\u8FD9\u4E2A\u4ED3\u5E93",
          cici_web_ai_coding_default_query_intro_file: "\u4ECB\u7ECD\u4E0B\u8FD9\u4E9B\u4EE3\u7801\u6587\u4EF6",
          cici_web_ai_coding_default_query_usage_file: "\u8FD9\u4E9B\u4EE3\u7801\u6587\u4EF6\u7684\u4E3B\u8981\u7528\u9014\u662F\u4EC0\u4E48",
          skill_dataAnalysis_prompt1: "\u8BE6\u7EC6\u5206\u6790\u6570\u636E\uFF0C\u751F\u6210\u5206\u6790\u62A5\u544A",
          skill_dataAnalysis_prompt2: "\u6839\u636E\u6570\u636E\u7ED8\u5236\u4E09\u5F20\u53EF\u89C6\u5316\u56FE\u8868",
          podcast_chat_option_generate: "\u751F\u6210\u64AD\u5BA2",
          web_ai_coding_default_query_data_analysis: "\u667A\u80FD\u5206\u6790\u4E0A\u4F20\u7684\u6570\u636E\uFF0C\u5E76\u751F\u6210\u53EF\u89C6\u5316\u6D1E\u5BDF\u62A5\u544A",
          coding_website_build_drawboard_query: "\u57FA\u4E8E\u753B\u677F\u751F\u6210\u4EE3\u7801",
          slides_chat_sug_gen: "\u751F\u6210 PPT",
          chat_selectText_ask_sug_explain: "\u89E3\u91CA\u4E00\u4E0B",
          chat_selectText_ask_sug_expand: "\u8BE6\u7EC6\u5C55\u5F00",
          web_deepResearch_btn: "\u6DF1\u5165\u7814\u7A76"
        },
        t = window.__i18n__ && window.__i18n__.instance;
      t ? t.addResourceBundle("zh", "web", e, !0, !0) : (window.__i18n__ = window.__i18n__ || {}, window.__i18n__.queue = window.__i18n__.queue || {}, window.__i18n__.queue.zh = Object.assign(window.__i18n__.queue.zh || {}, e));
    }
  }();
}]);
        