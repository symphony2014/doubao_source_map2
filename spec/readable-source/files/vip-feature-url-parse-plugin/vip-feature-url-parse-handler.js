// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'a' to 'aliceChatService'
// - Resolved require(756668) to 'alice-chat-service'
// - Renamed variable 'l' to 'chatConstantId'
// - Resolved require(392213) to 'chat-constant-id'
// - Renamed variable 'r' to 'chatUserInfoActions'
// - Resolved require(400206) to 'chat-user-info-actions'
// - Renamed variable '_' to 'toastNotificationHelper'
// - Resolved require(83051) to 'toast-notification-helper'
// - Updated imported property '_' to 'toastNotification' (module 83051)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'n5' to 'getUserIdStr' (module 400206)
// - Updated imported property 'Hy' to 'getAliceChatService' (module 756668)
// - Updated imported property 'p1' to 'specificBotType' (module 876559)
// - Updated imported property 'FW' to 'userType' (module 876559)
// - Updated imported property '_b' to 'memberRole' (module 876559)
// - Updated imported property 'e' to 'chatConstantId' (module 392213)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: vip-feature-url-parse-plugin.108689f4.js
         * chunkId: 82789
         * moduleId: 836142
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var chatConstantId = require("chat-constant-id") /*id: 392213*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var toastNotificationHelper = require("toast-notification-helper") /*id: 83051*/;
  let s = async e => {
    let {
      payload: c,
      navigate: d
    } = e;
    let {
      conversation_name: u,
      vip_feature_key: v
    } = c;
    if (location.hostname !== "beta.doubao.com") {
      let e = toastNotificationHelper.toastNotification.warning("仅支持beta.doubao.com域名下使用该功能");
      setTimeout(() => {
        toastNotificationHelper.toastNotification.dismiss(e);
        window.location.href = xssContentSanitizer.sanitizeUrl(`https://${location.host}/chat/`, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4-W1Je%5%SmFXRXA2$1Zo%2NHSXlOSFpqTTBwc$RETkNjMlJ-WkhCaWJrMTJaRmhL-zB4WFJtc*tSMngyWW1rN%1tRllRWFJh-lZab1pFaFdl$nB%T1c5WlZ6$nJZa2RXZ$$4d$$ucFpXRXB1WkZoTlBRPT0"
        });
      }, 3000);
      return;
    }
    let m = chatUserInfoActions.getUserIdStr() ?? "";
    if (!m) {
      let e = toastNotificationHelper.toastNotification.warning("请先登录豆包后再使用该功能");
      setTimeout(() => {
        toastNotificationHelper.toastNotification.dismiss(e);
        window.location.href = xssContentSanitizer.sanitizeUrl(`https://${location.host}/chat/?ghh=1`, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4-W1Je%5%SmFXRXA2$1Zo%2NHSXlOSFpqTTBwc$RETkNjMlJ-WkhCaWJrMTJaRmhL-zB4WFJtc*tSMngyWW1rN%1tRllRWFJh-lZab1pFaFdl$nB%T1c5WlZ6$nJZa2RXZ$$4d$$ucFpXRXB1WkZoTlBRPT0"
        });
      }, 3000);
      return;
    }
    let p = aliceChatService.getAliceChatService();
    let h = await p.threadCreate({
      name: u,
      ext: {
        vip_feature_key: v
      },
      bot_type: chatConstantsEnum.specificBotType.COCO_SUB,
      is_model_gen_name: false,
      participant_list: [{
        user_id: chatConstantId.chatConstantId,
        user_type: chatConstantsEnum.userType.AIBOT
      }, {
        user_id: m,
        user_type: chatConstantsEnum.userType.HUMAN,
        role: chatConstantsEnum.memberRole.CREATOR
      }]
    });
    let {
      thread_info: y
    } = (h == null ? undefined : h.data) ?? {};
    let T = y == null ? undefined : y.conversation?.conversation_id;
    if (!T) {
      toastNotificationHelper.toastNotification.error("创建对话失败，请重新访问链接进行重试");
      return;
    }
    toastNotificationHelper.toastNotification.success("对话创建成功");
    setTimeout(() => {
      d(`/chat/${T}`);
    }, 1000);
  };
  require.r(exports);
  require.d(exports, {
    handler: function () {
      return s;
    }
  });
}