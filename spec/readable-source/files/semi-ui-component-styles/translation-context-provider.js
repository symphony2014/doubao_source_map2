// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'fv' to 'useTranslationCtx'
// - Renamed export 'QT' to 'useTranslation'
// - Renamed export 'x9' to 'TranslationProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 849355
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  let i = {
    outline_hidden: "隐藏侧栏",
    outline_page_title: "页码侧栏",
    outline_page_desc: "页码检索",
    outline_text_title: "大纲侧栏",
    outline_text_desc: "只能展示文件的大纲结构",
    outline_image_title: "图标侧栏",
    outline_image_desc: "展示文件内的图片和表格",
    translate_all_article: "翻译全文",
    translate_source_language: "源语言",
    translate_target_language: "翻译成",
    translate_show_raw_article: "展示原文",
    translate_save_config: "保存设置",
    translate_auto_detect: "自动检测",
    translate_browser_language: "浏览器语言",
    translate_loading: "翻译中...",
    translate_switch_off: "关闭翻译",
    translate_huoshan: "火山翻译",
    translate_microsoft: "微软翻译",
    translate_ai: "豆包 AI 翻译",
    translate_copy: "复制",
    translate_if_need_translate: "是否需要翻译成 %s ？",
    translate_translate_language_same_tooltip: "目标语言与源语言相同，暂无翻译。在下拉菜单里修改翻译设置",
    translate_settings: "翻译设置",
    translate_start: "开始翻译",
    screenshot_capture: "截图提问",
    zoom_in_tooltip: "放大",
    zoom_out_tooltip: "缩小",
    download_source_tooltip: "下载原文件",
    translate_disabled_tooltip: "未能识别文件内容，无法进行全文翻译，请重试。",
    screencapture_disable_tooltip: "对照翻译模式，不能截图",
    exit_immersive_reading_tooltip: "退出沉浸模式",
    hover_toolbar_ai_search: "AI 搜索",
    hover_toolbar_explain: "解释",
    hover_toolbar_translate: "翻译",
    hover_toolbar_copy: "复制",
    hover_toolbar_viewpic: "查看",
    hover_toolbar_ask_ai: "问问豆包",
    hover_toolbar_solve_problem: "解题答疑",
    toast_copy_success: "复制成功",
    hover_toolbar_extract: "提取",
    asset_list_close_sidebar: "收起目录",
    asset_list_multi_title: "和 %s 篇文章",
    skill_read_period_today: "今天",
    skill_read_period_days_earlier: "%s天前",
    skill_read_period_months_earlier: "%s个月前",
    skill_read_period_weeks_earlier: "%s周前",
    skill_read_period_years_earlier: "%s年前",
    skill_read_period_yesterday: "昨天",
    skill_copliotreading_fullscreen: "全屏查看",
    skill_copliotreading_fullscreen_exit: "退出全屏",
    skill_copliotreading_contentoutline: "内容目录",
    skill_copliotreading_multifiles: "对话文件",
    skill_copliotreading_multifiles_tooltip: "此处可切换查看当前对话内的所有文档",
    read_tooltip_outline: "{s_fileTopic}的内容目录",
    translate_service_tips: "如果需要翻译论文和专业文档，可以选择 AI 驱动的豆包翻译，提供更准确的解析。",
    translate_service_label: "翻译服务",
    translate_in_progress: "翻译中…",
    translate_text_inside_image: "翻译图片内的文字",
    translate_cici: "Dola翻译",
    translate_doubao: "豆包翻译",
    ai_reading_translationDownload_download: "下载翻译版",
    ai_reading_translationDownload_translating: "正在翻译第 %s 页...",
    ai_reading_cancel: "取消",
    ai_reading_translationDownload_exporting: "翻译已完成，正在导出",
    ai_reading_translationDownload_downloading: "已导出，正在下载",
    ai_reading_translationDownload_exceedLimit: "文件过长，暂不支持超过 50 页以上的翻译",
    read_translate_toast_serviceChange_capacity: "{s_transService1}当前容量不足，已切换至{s_transService2}",
    read_translate_toast_serviceChange_downloadNA: "{s_transService1}暂不支持下载翻译版，已切换至{s_transService2}",
    read_translate_tag_translated: "翻译版",
    read_pageSize_autoFit: "自动缩放",
    read_pageSize_width: "适合页宽",
    read_pageSize_height: "适合页高",
    read_pageSize_actualSize: "实际大小",
    read_pageSize_autoFit_tooltip_unsupported: "对照式翻译时暂不支持页面自适应",
    onboarding_highlight_title: "划词功能",
    onboarding_highlight_desc: "遇到不懂的内容？划一划，AI 联网搜索 + 专业解释，复杂概念变清晰。",
    onboarding_translate_title: "对照式翻译",
    onboarding_translate_desc: "中英对照，原文译文同步展示，英文阅读更流畅，轻松理解地道表达。",
    onboarding_screenshot_title: "截图提问",
    onboarding_screenshot_desc: "复杂图表看不懂？截图提问，智能解读数据趋势，剖析数据要点，解读重要发现。",
    onboarding_next: "下一步",
    onboarding_done: "知道了"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = reactCoreLibraryReexport.createContext(i);
  let s = e => {
    let {
      value: t = {},
      children: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(o.Provider, {
      value: objectDefaultsUtil.defaults(t, i),
      children: a
    });
  };
  let c = () => reactCoreLibraryReexport.useContext(o);
  let d = () => {
    let e = reactCoreLibraryReexport.useContext(o);
    return function (t, a = {}) {
      if (!("sprintf" in a) || !Array.isArray(a.sprintf)) {
        return Object.entries(a).reduce((e, t) => {
          let [a, n] = t;
          if (e == null) {
            return undefined;
          } else {
            return e.replace(`{${a}}`, String(n ?? ""));
          }
        }, e[t] || "");
      }
      {
        let {
          sprintf: n = []
        } = a;
        return n.reduce((e, t) => e == null ? undefined : e.replace("%s", t), e[t] || "");
      }
    };
  };
  require.d(exports, {
    useTranslationCtx: function () {
      return c;
    },
    useTranslation: function () {
      return d;
    },
    TranslationProvider: function () {
      return s;
    }
  });
}