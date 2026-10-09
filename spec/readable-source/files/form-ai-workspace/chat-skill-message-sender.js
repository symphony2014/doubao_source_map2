// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'sendSkillMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: read-pdf-latest-reading-url-parse-plugin.68a64c76.js
         * chunkId: 63210
         * moduleId: 500722
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatInputAiFeatureUtils = require("chat-input-ai-feature-utils") /*id: 458924*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  let s = e => {
    let {
      attachments: t,
      attachmentStates: a,
      enableImageVlm: i
    } = e;
    return t.map(e => {
      if (e.type === "link" || e.type === "remote") {
        return;
      }
      let t = a.find(t => t.localKey === e.localKey);
      if (!t) {
        return;
      }
      let r = {
        type: contentTypeEnums.resourceType.File,
        fileKey: t.fileKey,
        fileName: t.fileName,
        size: t.size,
        identifier: t.localKey,
        parseState: t.parseState,
        reviewState: t.reviewState,
        md5: t.md5,
        localKey: e.localKey
      };
      if (messageBoxTypeCheckers.isImageType(e)) {
        return {
          ...r,
          type: i ? contentTypeEnums.resourceType.Image : contentTypeEnums.resourceType.File,
          fileType: contentTypeEnums.mediaType.OCRImage,
          image: {
            key: t.fileKey,
            image_ori: {
              width: t.imageWidth,
              height: t.imageHeight
            }
          }
        };
      } else {
        return {
          ...r,
          fileType: contentTypeEnums.mediaType.File
        };
      }
    }).filter(Boolean);
  };
  let c = async e => {
    let t;
    let {
      conversationId: a,
      preGeneratedLocalMessageId: o,
      reportParams: c,
      extraExt: _,
      inputSkillObj: d,
      text: m,
      presetPrompt: u,
      attachments: p,
      attachmentStates: f,
      enableImageVlm: h,
      refContents: R,
      rawSendMessage: k
    } = e;
    let S = chatAppEnums.SkillType.ReadPDF;
    let g = S.toString();
    let $ = {
      ...c
    };
    let y = chatInputAiFeatureUtils.getFeatureCommand(u);
    let T = {
      input_skill: JSON.stringify({
        skill_id: g,
        skill_type: S,
        ...d
      }),
      ...y,
      ..._
    };
    let w = {
      conversationId: a,
      preGeneratedLocalMessageId: o,
      reportParams: $,
      extraExt: T
    };
    if (p && p.length !== 0) {
      t = p.every(messageBoxTypeCheckers.isLinkType) ? {
        compositeContent: {
          text: m || "",
          links: p.map(e => e.url)
        },
        ...w
      } : {
        text: m,
        nestedItems: s({
          attachments: p,
          attachmentStates: f || [],
          enableImageVlm: h
        }),
        ...w
      };
    } else {
      let e = R && messageBoxTypeCheckers.filterEnabledRefs(R);
      t = {
        text: (d == null ? undefined : d.template_key) === "explain" && (R == null ? undefined : R[0]?.type) === "text" ? (R == null ? undefined : R[0]?.text) || "" : m,
        ...w,
        extraExt: {
          ...T,
          ...(isEmptyUtil.isEmpty(e) ? {} : {
            reference_content: JSON.stringify(e)
          })
        }
      };
    }
    await k([t]);
  };
  require.d(exports, {
    sendSkillMessage: function () {
      return c;
    }
  });
}