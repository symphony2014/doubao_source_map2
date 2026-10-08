(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([['chat-upload-components', 73638], {
        "guest-file-upload-button": require("./chat-upload-components/guest-file-upload-button.js"),
"155754": require("./chat-upload-components/guest-file-upload-button.js"),
"coding-chat-file-upload": require("./chat-upload-components/coding-chat-file-upload.js"),
"208950": require("./chat-upload-components/coding-chat-file-upload.js"),
"chat-paste-handler": require("./chat-upload-components/chat-paste-handler.js"),
"226734": require("./chat-upload-components/chat-paste-handler.js"),
"samantha-button-component": require("./chat-upload-components/samantha-button-component.js"),
"307533": require("./chat-upload-components/samantha-button-component.js"),
"chat-input-file-upload-button": require("./chat-upload-components/chat-input-file-upload-button.js"),
"333699": require("./chat-upload-components/chat-input-file-upload-button.js"),
"chat-input-button-context": require("./chat-upload-components/chat-input-button-context.js"),
"414026": require("./chat-upload-components/chat-input-button-context.js"),
"image-compression-utils_1": require("./chat-upload-components/image-compression-utils_1.js"),
"532036": require("./chat-upload-components/image-compression-utils_1.js"),
"chat-file-upload-hook": require("./chat-upload-components/chat-file-upload-hook.js"),
"541666": require("./chat-upload-components/chat-file-upload-hook.js"),
"input-tool-menu-listener": require("./chat-upload-components/input-tool-menu-listener.js"),
"719698": require("./chat-upload-components/input-tool-menu-listener.js"),
"supported-file-extensions-utility": require("./chat-upload-components/supported-file-extensions-utility.js"),
"79808": require("./chat-upload-components/supported-file-extensions-utility.js"),
"listener-manager": require("./chat-upload-components/listener-manager.js"),
"814180": require("./chat-upload-components/listener-manager.js"),
"samantha-tooltip-styles": require("./chat-upload-components/samantha-tooltip-styles.js"),
"815392": require("./chat-upload-components/samantha-tooltip-styles.js"),
"chat-input-file-upload": require("./chat-upload-components/chat-input-file-upload.js"),
"850654": require("./chat-upload-components/chat-input-file-upload.js"),
"coding-skill-chat-utils": require("./chat-upload-components/coding-skill-chat-utils.js"),
"881555": require("./chat-upload-components/coding-skill-chat-utils.js"),
"use-chat-file-extensions": require("./chat-upload-components/use-chat-file-extensions.js"),
"896476": require("./chat-upload-components/use-chat-file-extensions.js"),
"semi-tooltip-wrapper": require("./chat-upload-components/semi-tooltip-wrapper.js"),
"905177": require("./chat-upload-components/semi-tooltip-wrapper.js"),
"coding-skill-chat-input_1": require("./chat-upload-components/coding-skill-chat-input_1.js"),
"965068": require("./chat-upload-components/coding-skill-chat-input_1.js")
        }, function (e) {
  !function () {
    if ("undefined" != typeof window) {
      var e = {
          image_upload_toast_maxNum: "\u6700\u591A\u652F\u6301 {s_number} \u5F20\u56FE\u7247",
          multi_upload_toast_mixedtype: "\u6587\u4EF6\u548C\u56FE\u7247\u4E0D\u80FD\u540C\u65F6\u4E0A\u4F20\uFF0C\u8BF7\u5206\u522B\u4E0A\u4F20\u6587\u4EF6\u6216\u56FE\u7247\u3002",
          file_token_limit: "%1$s \u53EA\u80FD\u7406\u89E3 %2$s \u4E2A\u6587\u4EF6",
          skill_pdf_error_exclusive: "\u672C\u5730\u6587\u4EF6\u548C\u6587\u4EF6\u94FE\u63A5\u65E0\u6CD5\u540C\u65F6\u603B\u7ED3",
          read_file_type_error: "\u4E0D\u652F\u6301%s\u6587\u4EF6\u7C7B\u578B",
          file_size_over_limit: "%1$s \u8D85\u8FC7\u4E86 %2$s \u9650\u5236",
          cici_web_ai_coding_file_type_limit_multiple: "%s \u7B49 %s \u4E2A\u6587\u4EF6\u7C7B\u578B\u4E0D\u652F\u6301\uFF0C\u65E0\u6CD5\u4E0A\u4F20",
          cici_web_ai_coding_file_type_limit_single: "%s \u7684\u6587\u4EF6\u7C7B\u578B\u4E0D\u652F\u6301\uFF0C\u65E0\u6CD5\u4E0A\u4F20",
          cici_web_ai_coding_file_null_limit: "%s \u6587\u4EF6\u4E3A\u7A7A\uFF0C\u4E0D\u652F\u6301\u4E0A\u4F20",
          cici_web_ai_coding_file_null_limit_mutiple: "%s \u7B49 %s \u4E2A\u6587\u4EF6\u4E3A\u7A7A\uFF0C\u4E0D\u652F\u6301\u4E0A\u4F20",
          cici_web_ai_coding_file_num_limit: "\u6587\u4EF6\u5939\u6587\u4EF6\u6570\u91CF\u8D85\u8FC7 50 \u4E2A\uFF0C\u4E0D\u652F\u6301\u4E0A\u4F20",
          cici_web_ai_coding_file_size_limit_single: "\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7200KB\uFF0C\u4E0D\u652F\u6301\u4E0A\u4F20",
          cici_web_ai_coding_file_size_limit_multiple: "%s \u7B49 %s \u4E2A\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7 200 KB\uFF0C\u4E0D\u652F\u6301\u4E0A\u4F20",
          skill_copliotreading_2M_acknowledge: "\u6211\u77E5\u9053\u4E86",
          skill_copliotreading_2M_upload_now: "\u5F00\u59CB\u4E0A\u4F20",
          skill_copliotreading_3M_promotion_title: "\uD83C\uDF89 \u8C46\u5305\u652F\u6301\u4E0A\u4F20 300 \u4E07\u5B57\u957F\u6587\u5566",
          skill_copliotreading_3M_promotion_content: "\u6A21\u578B\u5168\u65B0\u5347\u7EA7\uFF01\u65E0\u8BBA\u662F\u6574\u672C\u300A\u7EA2\u697C\u68A6\u300B\u3001\u5927\u90E8\u5934\u300A\u8FFD\u5FC6\u4F3C\u6C34\u5E74\u534E\u300B\u3001\u5386\u5E74\u8003\u5377\u8FD8\u662F\u5E74\u5EA6\u8D22\u62A5\uFF0C\u73B0\u5728\u90FD\u80FD\u4E00\u952E\u5B8C\u6574\u4E0A\u4F20\uFF0C\u8BA9\u8C46\u5305\u4E3A\u4F60\u63D0\u4F9B\u5168\u9762\u7684\u603B\u7ED3\u5206\u6790\uFF5E",
          multiple_files_not_supported: "\u6682\u4E0D\u652F\u6301\u540C\u65F6\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6",
          image_oversize: "\u62B1\u6B49\uFF0C\u4F60\u4E0A\u4F20\u7684\u56FE\u7247\u8FC7\u5927\uFF0C\u8BF7\u4E0A\u4F20\u4E00\u4E2A\u8F83\u5C0F\u7684\u6587\u4EF6\u3002",
          file_not_supported: "\u4E0D\u652F\u6301\u53D1\u9001\u8BE5\u7C7B\u578B\u6587\u4EF6"
        },
        t = window.__i18n__ && window.__i18n__.instance;
      t ? t.addResourceBundle("zh", "web", e, !0, !0) : (window.__i18n__ = window.__i18n__ || {}, window.__i18n__.queue = window.__i18n__.queue || {}, window.__i18n__.queue.zh = Object.assign(window.__i18n__.queue.zh || {}, e));
    }
  }();
}]);
        