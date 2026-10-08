// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'createSpaceMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 248330
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
      links: _,
      prompt: u,
      shareId: p
    } = t;
    let m = _[0];
    if (!m) {
      return;
    }
    let {
      url: f,
      nodeId: h,
      conversationId: v,
      name: y
    } = m;
    if (v && (await checkConversationValid.isConversationValid(v))) {
      return null;
    }
    let S = {};
    let g = a ? {
      type: "mix_ai_space",
      value: JSON.stringify({
        obj_token: h,
        obj_type: 124,
        use_time: String(Math.floor(Date.now() / 1000))
      })
    } : {
      type: "ai_space",
      value: JSON.stringify({
        node_id: h,
        share_id: p
      })
    };
    S.samantha_onboarding = JSON.stringify(g);
    let b = {
      type: attachmentConstants.AttachmentType.AttachmentTypeLink,
      identifier: "",
      link: {
        link_url: f,
        icon_url: "",
        icon_url_dark: "",
        link_title: y
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRsa3lPWFZr%0$wd1dXaz$N$050ZDNSWl-wNHdZ$mM1ZF$3elFuTmtWMlJ3WW01TmRtSkhiSFZoZ$R*b1lWTXhl$nB-%m10T%0wNXNZbTFSZEdKWFZuc*pNa1p1$2xNe*FXSkhP$3BoZ$R$d1l6Skdl$m96$m5vPQ"
      })
    };
    let w = chatTextBlockFactory.createTextBlock(u);
    let R = [{
      block_type: chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT,
      content: {
        attachment_block: {
          attachments: [b]
        },
        pc_event_block: ""
      },
      block_id: "",
      parent_id: "",
      meta_info: [],
      append_fields: []
    }, ...(w ? [w] : [])];
    return {
      message: conversationMessageUtils.createMessageObject({
        conversation: {
          local_conversation_id: "",
          conversation_id: ""
        },
        message: {
          content_blocks_v2: R,
          ext: {
            ...S,
            chat_ability: conversationMessageUtils.serializeAbilityData(aiChatEnumConstants.skillTypes.SkillRead, "")
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
    createSpaceMessage: function () {
      return _;
    }
  });
}