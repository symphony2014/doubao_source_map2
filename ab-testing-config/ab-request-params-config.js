// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(447912) to 'chat-ai-constants'
// - Updated imported property 'UB' to 'platformType' (module 447912)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 73206.b044f433.js
         * chunkId: 73206
         * moduleId: 722249
         */
module.exports = function (module, exports, require) {
  let n = {
    show_deep_thinking_btn: {
      parmas: ["rich_media_with_text", "loading", "deep_think_show"],
      ignore_login_status: true
    },
    deep_thinking_btn_memo: {
      parmas: ["rich_media_with_text", "loading", "deep_think_memory"],
      ignore_login_status: true
    },
    deep_thinking_auto: {
      parmas: ["rich_media_with_text", "loading", "deep_thinking_auto"],
      ignore_login_status: true
    },
    guidance_input_skill_behaivior: {
      parmas: ["guidance_input_skill_behaivior", "value"],
      ignore_login_status: true
    },
    new_guidance_type: {
      parmas: ["new_guidance_type", "value"],
      is_login: true
    },
    new_guest_guidance_type: {
      parmas: ["new_guest_guidance_type", "value"],
      is_login: false
    },
    show_upgrade: {
      parmas: ["samantha_skill", "image", "show_upgrade"],
      ignore_login_status: true
    },
    aispace_revert: {
      parmas: ["aispace_revert_v2", "enable_ai_space"],
      is_login: true,
      ignore_login_status: true
    },
    aispace_rename: {
      parmas: ["aispace_rename", "name_type"],
      is_login: true,
      ignore_login_status: true
    },
    creation_agent_v4_enabled: {
      parmas: ["samantha_agent_config", "pc_4.0_creation_banner"],
      ignore_login_status: true
    },
    creation_agent_new_tag: {
      parmas: ["samantha_agent_config", "pc_creation_new_tag_key"],
      ignore_login_status: true
    },
    creation_agent_banner: {
      parmas: ["samantha_agent_config", "pc_creation_banner"],
      ignore_login_status: true
    },
    creation_agent_banner_link: {
      parmas: ["samantha_agent_config", "pc_creation_link"],
      ignore_login_status: true
    },
    creation_agent_banner_image: {
      parmas: ["samantha_agent_config", "pc_creation_banner_image"],
      ignore_login_status: true
    },
    video_model_switch: {
      parmas: ["samantha_agent_config", "pc_video_model_switch"],
      ignore_login_status: true
    },
    ref_image_into_image_attachment_enabled: {
      parmas: ["samantha_agent_config", "creation_agent", "ui_config", "support_reference_image_count"],
      ignore_login_status: true
    },
    creation_ui_use_template_action: {
      parmas: ["creation_ui_use_template_action", "version"],
      ignore_login_status: true
    },
    creation_batch_download_supported: {
      parmas: ["creation_agent_batch_download", "enable"],
      ignore_login_status: true
    },
    creation_agent_model_switch_enable: {
      parmas: ["creation_agent_model_switch", "enable"],
      ignore_login_status: true
    },
    codeAssistantReact: {
      parmas: ["code_assistant_react", "enable_compile_react"],
      is_login: true
    },
    enable_code_skill: {
      parmas: ["skill", "enable_code_assist_str"],
      ignore_login_status: true
    },
    new_sidebar_ui: {
      parmas: ["ui_v2", "sidebar"],
      ignore_login_status: true
    },
    creation_input_skill_switch: {
      parmas: ["creation_input_skill_switch", "value"],
      ignore_login_status: true
    },
    doc_new_tab_home: {
      parmas: ["flowpc_web", "otter_page_ui", "new_tab_home"],
      ignore_login_status: true
    },
    doc_new_tag: {
      parmas: ["flowpc_web", "otter_page_ui", "new_tag"],
      ignore_login_status: true
    },
    doc_new_home: {
      parmas: ["flowpc_web", "otter_page_ui", "new_home"],
      ignore_login_status: true
    },
    enableCommerceCredit: {
      parmas: ["commerce_credit_config", "enable"],
      ignore_login_status: true,
      token_type: require("chat-ai-constants") /*id: 447912*/.platformType.App
    },
    enable_geogebra_code: {
      parmas: ["enable_geogebra_code", "value"],
      ignore_login_status: true
    },
    enable_new_image_group: {
      parmas: ["enable_new_image_group", "value"],
      ignore_login_status: true
    },
    bdms_mvp_delay2: {
      parmas: ["bdms_mvp_test2", "test", "delay"],
      ignore_login_status: true
    },
    creation_skill_chat_next: {
      parmas: ["support_new_creation_agent", "creation_skill_chat_next"],
      ignore_login_status: true
    },
    vlist: {
      parmas: ["virtual_list", "value"],
      ignore_login_status: true
    },
    vlist_buffer_size: {
      parmas: ["virtual_list", "buffer_size"],
      ignore_login_status: true
    },
    vlist_minimum_buffer_distance: {
      parmas: ["virtual_list", "minimum_buffer_distance"],
      ignore_login_status: true
    },
    receive_actionbar_always_show: {
      parmas: ["receive_actionbar_always_show", "value"],
      ignore_login_status: true
    },
    doc_streaming_smooth: {
      parmas: ["flowpc_web", "otter_page_ui", "doc_streaming_smooth"],
      ignore_login_status: true
    },
    auto_set_ref_node: {
      parmas: ["auto_set_ref_node", "value"],
      ignore_login_status: true
    },
    enable_followup: {
      parmas: ["enable_followup", "value"],
      ignore_login_status: true
    },
    followup_auto_ref: {
      parmas: ["enable_followup", "auto_ref"],
      ignore_login_status: true
    },
    disable_pdf_translate_service: {
      parmas: ["disable_pdf_translate_service", "value"],
      ignore_login_status: true
    },
    ai_doc_ssr_at_chat_page: {
      parmas: ["flowpc_web", "ai_doc_ssr_at_chat_page", "enable"],
      ignore_login_status: true
    },
    enable_deep_think_exceed: {
      parmas: ["enable_deep_think_exceed", "value"],
      ignore_login_status: true
    },
    video_upload_multiple_pic: {
      parmas: ["video_enable_multipic", "video_enable_multipic"],
      ignore_login_status: true
    }
  };
  require.d(exports, {
    AbRequestParams: function () {
      return n;
    }
  });
}