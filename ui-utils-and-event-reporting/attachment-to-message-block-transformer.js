// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'transformAttachmentsToMessageBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18848.031095ef.js
         * chunkId: 18848
         * moduleId: 324654
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var attachmentMessagingStateMappers = require("attachment-messaging-state-mappers") /*id: 804557*/;
  var attachmentFactoryFunctions = require("attachment-factory-functions") /*id: 651399*/;
  let h = {
    matcher: messageBoxTypeCheckers.isLinkType,
    transform: e => {
      let {
        attachment: c,
        attachmentState: u
      } = e;
      return {
        type: attachmentConstants.AttachmentType.AttachmentTypeLink,
        identifier: (u == null ? undefined : u.repoInfo?.id) || "",
        link: attachmentFactoryFunctions.createLinkWithCode(c.url, (u == null ? undefined : u.repoInfo) ? {
          repo_id: u.repoInfo?.id || "",
          repo_name: u.repoInfo?.name || "",
          source: Number(u.repoInfo?.source || 0),
          language: u.repoInfo?.language || "",
          ref: u.repoInfo?.ref || ""
        } : undefined),
        review_state: attachmentConstants.ReviewState.ReviewStateAccess,
        parse_state: attachmentConstants.ParseState.ParseStateSuccess,
        upload_status: attachmentConstants.UploadStatus.UploadStatusSuccess,
        progress: 100,
        src: xssContentSanitizer.sanitizeUrl(c.url, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haWld*SXdX$mRP-jJKWFZu$mtTRTExWk$oT2FHTnRaREZqZHowOQ"
        })
      };
    }
  };
  let p = {
    matcher: messageBoxTypeCheckers.isImageType,
    transform: e => {
      let {
        attachment: h,
        attachmentState: p,
        attachmentKey: f
      } = e;
      if (f) {
        return {
          type: attachmentConstants.AttachmentType.AttachmentTypeImage,
          identifier: h.localKey,
          image: attachmentFactoryFunctions.createImageObject(f, (p == null ? undefined : p.imageWidth) ?? 0, (p == null ? undefined : p.imageHeight) ?? 0, (p == null ? undefined : p.fileName) ?? "", p == null ? undefined : p.url),
          parse_state: attachmentMessagingStateMappers.parseStateToAttachment[(p == null ? undefined : p.parseState) ?? messagingConstants.parseState.ParseState_Default],
          review_state: attachmentMessagingStateMappers.reviewStateToAttachment[(p == null ? undefined : p.reviewState) ?? messagingConstants.reviewState.ReviewState_Access],
          upload_status: attachmentConstants.UploadStatus.UploadStatusSuccess,
          progress: (p == null ? undefined : p.uploadPercent) ?? 100,
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haWld*SXdX$mRP-jJKWFZu$mtTRTExWk$oT2FHTnRaREZqZHowOQ"
          })
        };
      }
    }
  };
  let f = {
    matcher: messageBoxTypeCheckers.isFileType,
    transform: e => {
      let {
        attachment: m,
        attachmentKey: g,
        attachmentState: v
      } = e;
      if (g) {
        return {
          type: attachmentConstants.AttachmentType.AttachmentTypeFile,
          identifier: m.localKey,
          file: attachmentFactoryFunctions.createFileObject(g, "", m.fileName ?? objectPathGetDefault.getObjectPathDefault(m.file, "name") ?? "", String(m.file?.size ?? (v == null ? undefined : v.size) ?? 0)),
          parse_state: attachmentMessagingStateMappers.parseStateToAttachment[(v == null ? undefined : v.parseState) ?? messagingConstants.parseState.ParseState_Default],
          review_state: attachmentMessagingStateMappers.reviewStateToAttachment[(v == null ? undefined : v.reviewState) ?? messagingConstants.reviewState.ReviewState_Access],
          upload_status: attachmentConstants.UploadStatus.UploadStatusSuccess,
          progress: (v == null ? undefined : v.uploadPercent) ?? 100,
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haWld*SXdX$mRP-jJKWFZu$mtTRTExWk$oT2FHTnRaREZqZHowOQ"
          })
        };
      }
    }
  };
  let m = {
    matcher: messageBoxTypeCheckers.isLarkDocType,
    transform: e => {
      let {
        attachment: o,
        attachmentKey: l,
        attachmentState: a
      } = e;
      if (l) {
        return {
          type: attachmentConstants.AttachmentType.AttachmentTypeLarkDoc,
          identifier: o.localKey,
          lark_doc: {
            url: o.url,
            token: o.token,
            title: o.name
          },
          parse_state: attachmentMessagingStateMappers.parseStateToAttachment[(a == null ? undefined : a.parseState) ?? messagingConstants.parseState.ParseState_Default],
          review_state: attachmentMessagingStateMappers.reviewStateToAttachment[(a == null ? undefined : a.reviewState) ?? messagingConstants.reviewState.ReviewState_Access],
          upload_status: attachmentConstants.UploadStatus.UploadStatusSuccess,
          progress: (a == null ? undefined : a.uploadPercent) ?? 100,
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haWld*SXdX$mRP-jJKWFZu$mtTRTExWk$oT2FHTnRaREZqZHowOQ"
          })
        };
      }
    }
  };
  let g = [h, p, f, {
    matcher: messageBoxTypeCheckers.isDirectoryType,
    transform: e => {
      let {
        attachment: a,
        attachmentState: h
      } = e;
      return {
        type: attachmentConstants.AttachmentType.AttachmentTypeCodeDirectory,
        identifier: a.localKey,
        code_directory: attachmentFactoryFunctions.createDirectory((h == null ? undefined : h.fileKey) ?? "", (h == null ? undefined : h.dirName) ?? ""),
        parse_state: attachmentMessagingStateMappers.parseStateToAttachment[(h == null ? undefined : h.parseState) ?? messagingConstants.parseState.ParseState_Default],
        review_state: attachmentMessagingStateMappers.reviewStateToAttachment[(h == null ? undefined : h.reviewState) ?? messagingConstants.reviewState.ReviewState_Access],
        upload_status: attachmentConstants.UploadStatus.UploadStatusSuccess,
        progress: (h == null ? undefined : h.uploadPercent) ?? 100,
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haWld*SXdX$mRP-jJKWFZu$mtTRTExWk$oT2FHTnRaREZqZHowOQ"
        }),
        extra: {
          extra: {
            name: a.dirName
          }
        }
      };
    }
  }, {
    matcher: messageBoxTypeCheckers.isDesktopResourceType,
    transform: e => {
      let {
        attachment: t
      } = e;
      return {
        type: attachmentConstants.AttachmentType.AttachmentTypeResourceContent,
        identifier: "",
        resource_content: {
          resource_id: t.resource_id
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haWld*SXdX$mRP-jJKWFZu$mtTRTExWk$oT2FHTnRaREZqZHowOQ"
        })
      };
    }
  }, m];
  let v = e => {
    let {
      attachments: t,
      attachmentKeys: i,
      attachmentStates: n
    } = e;
    if (t.length === 0) {
      return;
    }
    let o = {
      attachments: t.map((e, t) => {
        let r = g.find(t => t.matcher(e));
        if (r == null) {
          return undefined;
        } else {
          return r.transform({
            attachment: e,
            attachmentKey: i[t],
            attachmentState: n[t]
          });
        }
      }).filter(e => e !== undefined)
    };
    if (o.attachments.length !== 0) {
      return {
        block_type: chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT,
        content: {
          attachment_block: o,
          pc_event_block: ""
        },
        block_id: uuidGeneratorUtil.generateUuid(),
        parent_id: "",
        meta_info: [],
        append_fields: []
      };
    }
  };
  require.d(exports, {
    transformAttachmentsToMessageBlock: function () {
      return v;
    }
  });
}