// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'createAiSpaceMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 764148
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  var aiSpaceFileUrlResolver = require("ai-space-file-url-resolver") /*id: 550880*/;
  let _ = async e => {
    let t;
    let {
      payload: a,
      shareId: _,
      isSpaceNext: u
    } = e;
    let {
      images: p
    } = a;
    let m = p[0];
    if (!m) {
      return;
    }
    let {
      uri: f,
      nodeId: h,
      conversationId: v,
      width: y,
      height: S,
      name: g
    } = m;
    if (v) {
      let [e, a] = await Promise.all([aiSpaceFileUrlResolver.resolveFileUrls([h], _), checkConversationValid.isConversationValid(m.conversationId)]);
      if (a) {
        return null;
      }
      t = e == null ? undefined : e[h];
    }
    let b = {
      samantha_context: JSON.stringify({
        query_context: {
          ref_images: [{
            image_token: f,
            refer_types: "overall",
            identifier: "",
            url: t
          }]
        }
      }),
      answer_with_suggest: "0"
    };
    let w = u ? {
      type: "mix_ai_space",
      value: JSON.stringify({
        obj_token: h,
        obj_type: 12,
        use_time: String(Math.floor(Date.now() / 1000))
      })
    } : {
      type: "ai_space",
      value: JSON.stringify({
        node_id: h,
        share_id: _
      })
    };
    b.samantha_onboarding = JSON.stringify(w);
    let R = {
      type: attachmentConstants.AttachmentType.AttachmentTypeImage,
      identifier: "",
      image: {
        name: g,
        uri: f,
        image_ori: {
          url: t || "",
          width: y,
          height: S,
          format: "",
          url_formats: {}
        }
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRsa3lPWFZr%0$wd1dXaz$N$050ZDNSWl-wNHdZ$mM1ZF$3elFuTmtWMlJ3WW01TmRtRlhN$2hhTWxWMFd%TktiRmxZ$W14T%0wNXNZbTFSZEZsd*$IWlpNbk4wWWxk$2$tTXlSbT$h$Xp$d1l6Skdl$m96$m5vPQ"
      })
    };
    let $ = [{
      block_type: chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT,
      content: {
        attachment_block: {
          attachments: [R]
        },
        pc_event_block: ""
      },
      block_id: "",
      parent_id: "",
      meta_info: [],
      append_fields: []
    }];
    return {
      message: conversationMessageUtils.createMessageObject({
        conversation: {
          local_conversation_id: "",
          conversation_id: ""
        },
        message: {
          content_blocks_v2: $,
          ext: {
            ...b,
            chat_ability: conversationMessageUtils.serializeAbilityData(aiChatEnumConstants.skillTypes.SkillImageGen, "")
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