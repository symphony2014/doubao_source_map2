// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'createAiSpaceMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 823688
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  let _ = async e => {
    let {
      payload: t,
      isSpaceNext: a
    } = e;
    let {
      files: _,
      prompt: u,
      shareId: p
    } = t;
    let m = _[0];
    if (!m) {
      return;
    }
    let {
      uri: f,
      name: h,
      size: v,
      nodeId: y,
      mediaType: S,
      conversationId: g
    } = m;
    let b = ["video_ask_doubao", "video_summary", "video_mind_map"].includes(S);
    if (g && (await checkConversationValid.isConversationValid(g))) {
      return null;
    }
    let w = {};
    let R = a ? {
      type: "mix_ai_space",
      value: JSON.stringify({
        obj_token: y,
        obj_type: 12,
        use_time: String(Math.floor(Date.now() / 1000))
      })
    } : {
      type: "ai_space",
      value: JSON.stringify({
        node_id: y,
        share_id: p
      })
    };
    w.samantha_onboarding = JSON.stringify(R);
    let $ = {
      type: attachmentConstants.AttachmentType.AttachmentTypeFile,
      identifier: "",
      media: {
        vid: f,
        media_type: b ? attachmentConstants.UploadMediaType.UploadMediaTypeVideo : attachmentConstants.UploadMediaType.UploadMediaTypeAudio,
        size: Number(v),
        duration: 0,
        name: h
      },
      parse_state: attachmentConstants.ParseState.ParseStateSuccess,
      review_state: attachmentConstants.ReviewState.ReviewStateAccess,
      upload_status: attachmentConstants.UploadStatus.UploadStatusSuccess,
      progress: 100,
      src: xssContentSanitizer.sanitizeUrl("", null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRsa3lPWFZr%0$wd1dXaz$N$050ZDNSWl-wNHdZ$mM1ZF$3elFuTmtWMlJ3WW01TmRtSlhWbXRo$jBWMFdWaE9ja3d6$*14aWJWRjBZb*RXZW1Ne$JtNWF$ekZwWWtjNWFtRj$O$EJqTWtaN$dqTldlZz09"
      })
    };
    let k = chatTextBlockFactory.createTextBlock(u);
    let x = [{
      block_type: chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT,
      content: {
        attachment_block: {
          attachments: [$]
        },
        pc_event_block: ""
      },
      block_id: "",
      parent_id: "",
      meta_info: [],
      append_fields: []
    }, ...(k ? [k] : [])];
    return {
      message: conversationMessageUtils.createMessageObject({
        conversation: {
          local_conversation_id: "",
          conversation_id: ""
        },
        message: {
          content_blocks_v2: x,
          ext: {
            ...w,
            chat_ability: conversationMessageUtils.serializeAbilityData(aiChatEnumConstants.skillTypes.SkillTypeMediaUnderstandingByAsr, "")
          }
        }
      }),
      reportParams: {
        scene: "ai_space",
        entrance_from: "ai_space_ask_doubao",
        upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_DRIVE
      }
    };
  };
  require.d(exports, {
    createAiSpaceMessage: function () {
      return _;
    }
  });
}