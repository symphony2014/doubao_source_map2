// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Tv' to 'createAttachmentBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 930060
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var referenceBlockTransformer = require("reference-block-transformer") /*id: 642515*/;
  var attachmentMessagingStateMappers = require("attachment-messaging-state-mappers") /*id: 804557*/;
  var attachmentFactoryFunctions = require("attachment-factory-functions") /*id: 651399*/;
  let f = e => {
    if (e.text) {
      return [chatTextBlockFactory.createTextBlock(e.text)];
    }
  };
  let g = e => {
    if (!e.image_key) {
      return;
    }
    let u = {
      type: attachmentConstants.AttachmentType.AttachmentTypeImage,
      identifier: e.local_key ?? "",
      image: attachmentFactoryFunctions.createImageObject(e.image_key ?? "", objectPathGetDefault.getObjectPathDefault(e.image_ori, "width") ?? 0, objectPathGetDefault.getObjectPathDefault(e.image_ori, "height") ?? 0, ""),
      parse_state: attachmentMessagingStateMappers.parseStateToAttachment[messagingConstants.parseState.ParseState_Success],
      review_state: attachmentMessagingStateMappers.reviewStateToAttachment[messagingConstants.reviewState.ReviewState_Access],
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haalIwWTFZa2M1-%ZwS$R-$mtTRT$vWTIxa01XTjNQ$DA9"
      })
    };
    return [{
      block_type: chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT,
      content: {
        attachment_block: {
          attachments: [u]
        },
        pc_event_block: ""
      },
      block_id: "",
      parent_id: "",
      meta_info: [],
      append_fields: []
    }];
  };
  let m = e => {
    let n = e.text ? chatTextBlockFactory.createTextBlock(e.text) : undefined;
    let r = (e.nestedItems ?? []).map(e => {
      var n;
      var s;
      if (e.type === contentTypeEnums.resourceType.Image) {
        return {
          type: attachmentConstants.AttachmentType.AttachmentTypeImage,
          identifier: e.identifier,
          image: attachmentFactoryFunctions.createImageObject(e.fileKey, ((n = e.image) === null || n === undefined ? undefined : n.image_ori?.width) ?? 0, ((s = e.image) === null || s === undefined ? undefined : s.image_ori?.height) ?? 0, e.fileName),
          parse_state: attachmentMessagingStateMappers.parseStateToAttachment[e.parseState ?? messagingConstants.parseState.ParseState_Success],
          review_state: attachmentMessagingStateMappers.reviewStateToAttachment[e.reviewState ?? messagingConstants.reviewState.ReviewState_Access],
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haalIwWTFZa2M1-%ZwS$R-$mtTRT$vWTIxa01XTjNQ$DA9"
          })
        };
      } else if (e.type === contentTypeEnums.resourceType.File) {
        if (e.fileType === contentTypeEnums.mediaType.Video || e.fileType === contentTypeEnums.mediaType.Audio) {
          return {
            type: attachmentConstants.AttachmentType.AttachmentTypeFile,
            identifier: e.identifier,
            media: attachmentFactoryFunctions.createVideoObject(e.fileKey, 0, e.size ? String(e.size) : "", e.fileType === contentTypeEnums.mediaType.Video ? attachmentConstants.UploadMediaType.UploadMediaTypeVideo : attachmentConstants.UploadMediaType.UploadMediaTypeAudio, e.fileName ?? ""),
            parse_state: attachmentMessagingStateMappers.parseStateToAttachment[e.parseState ?? messagingConstants.parseState.ParseState_Success],
            review_state: attachmentMessagingStateMappers.reviewStateToAttachment[e.reviewState ?? messagingConstants.reviewState.ReviewState_Access],
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haalIwWTFZa2M1-%ZwS$R-$mtTRT$vWTIxa01XTjNQ$DA9"
            })
          };
        } else {
          return {
            type: attachmentConstants.AttachmentType.AttachmentTypeFile,
            identifier: e.identifier,
            file: attachmentFactoryFunctions.createFileObject(e.fileKey, "", e.fileName, String(e.size)),
            parse_state: attachmentMessagingStateMappers.parseStateToAttachment[e.parseState ?? messagingConstants.parseState.ParseState_Success],
            review_state: attachmentMessagingStateMappers.reviewStateToAttachment[e.reviewState ?? messagingConstants.reviewState.ReviewState_Access],
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haalIwWTFZa2M1-%ZwS$R-$mtTRT$vWTIxa01XTjNQ$DA9"
            })
          };
        }
      } else {
        return undefined;
      }
    }).filter(e => e !== undefined);
    let c = {
      block_type: chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT,
      content: {
        attachment_block: {
          attachments: r
        },
        pc_event_block: ""
      },
      block_id: "",
      parent_id: "",
      meta_info: [],
      append_fields: []
    };
    return (r.length > 0 ? [c] : []).concat(n ? [n] : []);
  };
  let v = e => {
    return {
      type: attachmentConstants.AttachmentType.AttachmentTypeFile,
      identifier: e.local_key ?? "",
      file: attachmentFactoryFunctions.createFileObject(e.key ?? "", "", e.file_name ?? "", ""),
      parse_state: attachmentMessagingStateMappers.parseStateToAttachment[messagingConstants.parseState.ParseState_Success],
      review_state: attachmentMessagingStateMappers.reviewStateToAttachment[messagingConstants.reviewState.ReviewState_Access],
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haalIwWTFZa2M1-%ZwS$R-$mtTRT$vWTIxa01XTjNQ$DA9"
      })
    };
  };
  let _ = e => {
    var n;
    if (!e.compositeContent) {
      return;
    }
    let r = chatTextBlockFactory.createTextBlock(e.compositeContent?.text);
    return [{
      block_type: chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT,
      content: {
        attachment_block: {
          attachments: (n = e.compositeContent?.files || []) === null || n === undefined ? undefined : n.map(e => v(e))
        },
        pc_event_block: ""
      },
      block_id: "",
      parent_id: "",
      meta_info: [],
      append_fields: []
    }].concat(r ? [r] : []);
  };
  let y = e => {
    return {
      type: attachmentConstants.AttachmentType.AttachmentTypeFile,
      identifier: e.local_key ?? "",
      image: attachmentFactoryFunctions.createImageObject(e.key ?? "", objectPathGetDefault.getObjectPathDefault(e.image_ori, "width") ?? 0, objectPathGetDefault.getObjectPathDefault(e.image_ori, "height") ?? 0, e.file_name ?? ""),
      parse_state: attachmentMessagingStateMappers.parseStateToAttachment[messagingConstants.parseState.ParseState_Success],
      review_state: attachmentMessagingStateMappers.reviewStateToAttachment[messagingConstants.reviewState.ReviewState_Access],
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haalIwWTFZa2M1-%ZwS$R-$mtTRT$vWTIxa01XTjNQ$DA9"
      })
    };
  };
  let b = e => {
    var n;
    var i;
    if (!e.compositeContent) {
      return;
    }
    let r = chatTextBlockFactory.createTextBlock(e.compositeContent?.text);
    return [{
      block_type: chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT,
      content: {
        attachment_block: {
          attachments: (i = e.compositeContent) === null || i === undefined ? undefined : (n = i.images) === null || n === undefined ? undefined : n.map(e => y(e))
        },
        pc_event_block: ""
      },
      block_id: "",
      parent_id: "",
      meta_info: [],
      append_fields: []
    }].concat(r ? [r] : []);
  };
  let S = e => ({
    type: attachmentConstants.AttachmentType.AttachmentTypeLink,
    identifier: "",
    link: attachmentFactoryFunctions.createLinkWithCode(e),
    parse_state: attachmentMessagingStateMappers.parseStateToAttachment[messagingConstants.parseState.ParseState_Success],
    review_state: attachmentMessagingStateMappers.reviewStateToAttachment[messagingConstants.reviewState.ReviewState_Access],
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haalIwWTFZa2M1-%ZwS$R-$mtTRT$vWTIxa01XTjNQ$DA9"
    })
  });
  let T = e => {
    var n;
    var i;
    if (!e.compositeContent) {
      return;
    }
    let r = chatTextBlockFactory.createTextBlock(e.compositeContent?.text);
    return [{
      block_type: chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT,
      content: {
        attachment_block: {
          attachments: (i = e.compositeContent) === null || i === undefined ? undefined : (n = i.links) === null || n === undefined ? undefined : n.map(e => S(e))
        },
        pc_event_block: ""
      },
      block_id: "",
      parent_id: "",
      meta_info: [],
      append_fields: []
    }].concat(r ? [r] : []);
  };
  let w = e => ({
    type: attachmentConstants.AttachmentType.AttachmentTypeLink,
    identifier: "",
    link: attachmentFactoryFunctions.createBasicLink(e.url, e.icon, "", e.title),
    parse_state: attachmentMessagingStateMappers.parseStateToAttachment[messagingConstants.parseState.ParseState_Success],
    review_state: attachmentMessagingStateMappers.reviewStateToAttachment[messagingConstants.reviewState.ReviewState_Access],
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haalIwWTFZa2M1-%ZwS$R-$mtTRT$vWTIxa01XTjNQ$DA9"
    })
  });
  let E = e => {
    var n;
    var i;
    if (!e.compositeContent) {
      return;
    }
    let r = chatTextBlockFactory.createTextBlock(e.compositeContent?.text);
    return [{
      block_type: chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT,
      content: {
        attachment_block: {
          attachments: (i = e.compositeContent) === null || i === undefined ? undefined : (n = i.websites) === null || n === undefined ? undefined : n.map(e => w(e))
        },
        pc_event_block: ""
      },
      block_id: "",
      parent_id: "",
      meta_info: [],
      append_fields: []
    }].concat(r ? [r] : []);
  };
  let C = e => {
    let P = e.type === "file";
    let N = e.type === "link";
    let I = e.type === "directory";
    let M = e.type === "image";
    let L = P ? attachmentConstants.AttachmentType.AttachmentTypeFile : N ? attachmentConstants.AttachmentType.AttachmentTypeLink : I ? attachmentConstants.AttachmentType.AttachmentTypeCodeDirectory : M ? attachmentConstants.AttachmentType.AttachmentTypeImage : attachmentConstants.AttachmentType.AttachmentTypeUnknown;
    let D = P ? attachmentFactoryFunctions.createFileObject(e.key ?? "", e.url ?? "", e.name ?? "", e.size ? String(e.size) : "") : N ? attachmentFactoryFunctions.createCodeRepoLink(e.url ?? "", e.extra?.repo_id ?? "", e.extra?.repo_name ?? "", e.extra?.source ?? "", e.extra?.language ?? "", e.extra?.ref ?? "") : I ? attachmentFactoryFunctions.createDirectory(e.key ?? "", e.name ?? "") : M ? attachmentFactoryFunctions.createImageObject(e.key ?? "", e.option?.width ?? 0, e.option?.height ?? 0, e.name ?? "") : undefined;
    let Z = I ? {
      extra: {
        extra: {
          name: e.name ?? ""
        }
      }
    } : {};
    return {
      type: L,
      [P ? "file" : N ? "link" : I ? "code_directory" : M ? "image" : "file"]: D,
      identifier: e.identifier,
      ...Z,
      parse_state: e.file_parse_state ?? attachmentMessagingStateMappers.parseStateToAttachment[messagingConstants.parseState.ParseState_Success],
      review_state: e.file_parse_state ?? attachmentMessagingStateMappers.reviewStateToAttachment[messagingConstants.reviewState.ReviewState_Access],
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTWs1dldWaFJkRnB0T1R*aWJWSm9aRWRzZ*1KcE1-Qml$ekZ0$1ZkT2F*cEhWWFpqTTBwc$RESXhiR016$*1o-%1s$jJaRmhT-0dKS$R-WlpiW*gy$1RKemRH%klTbWhp-ms1dFlqTktkRnBZ%1haalIwWTFZa2M1-%ZwS$R-$mtTRT$vWTIxa01XTjNQ$DA9"
      })
    };
  };
  let R = e => {
    var t;
    if (!e.text && !e.sendAttachments) {
      return;
    }
    let n = e.text ? chatTextBlockFactory.createTextBlock(e.text) : undefined;
    return [{
      block_type: chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT,
      content: {
        attachment_block: {
          attachments: (((t = e.sendAttachments) === null || t === undefined ? undefined : t.filter(e => !!e)) || []).map(e => C(e))
        },
        pc_event_block: ""
      },
      block_id: "",
      parent_id: "",
      meta_info: [],
      append_fields: []
    }].concat(n ? [n] : []);
  };
  let k = e => {
    var i;
    var o;
    var a;
    var u;
    let h;
    h = e.sendAttachments ? R(e) : e.image_key ? g(e) : e.nestedItems?.length ? m(e) : ((i = e.compositeContent) === null || i === undefined ? undefined : i.websites?.length) ? E(e) : ((o = e.compositeContent) === null || o === undefined ? undefined : o.files?.length) ? _(e) : ((a = e.compositeContent) === null || a === undefined ? undefined : a.images?.length) ? b(e) : ((u = e.compositeContent) === null || u === undefined ? undefined : u.links?.length) ? T(e) : f(e);
    if (e.extraExt?.reference_content) {
      let t = safeJsonUtils.safeParse(e.extraExt.reference_content, []);
      h = [...referenceBlockTransformer.transformReferences(t), ...(h || [])];
    }
    return h;
  };
  require.d(exports, {
    createAttachmentBlocks: function () {
      return k;
    }
  });
}