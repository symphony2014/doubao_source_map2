// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'useReadingSkillLabels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 932866
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  let o = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return reactCoreLibraryReexport.useMemo(() => ({
      skill_copliotreading_read: e("skill_copliotreading_read"),
      skill_copliotreading_not_read: e("skill_copliotreading_not_read"),
      skill_copliotreading_partial_read: e("skill_copliotreading_partial_read"),
      skill_copliotreading_read_percentage: e("skill_copliotreading_read_percentage"),
      label_token_count_largenumber: e("label_token_count_largenumber"),
      label_token_count_smallnumber: e("label_token_count_smallnumber"),
      chat_list_subtitle_link: e("chat_list_subtitle_link"),
      skill_read_quote: e("skill_read_quote"),
      skill_copliotreading_zoom_in: e("skill_copliotreading_zoom_in"),
      skill_read_pic_untitled: e("skill_read_pic_untitled"),
      file_parse_error: e("file_parse_error"),
      files_parse_click_retry: e("files_parse_click_retry"),
      skill_copliotreading_open: e("skill_copliotreading_open"),
      skill_copliotreading_download: e("skill_copliotreading_download"),
      skill_copliotreading_open_new_tab: e("skill_copliotreading_open_new_tab"),
      skill_read_parsing_file: e("skill_read_parsing_file"),
      reference_modal_reference_item_status_uploading: e("reference_modal_reference_item_status_uploading"),
      file_upload_error: e("file_upload_error")
    }), [e]);
  };
  require.d(exports, {
    useReadingSkillLabels: function () {
      return o;
    }
  });
}