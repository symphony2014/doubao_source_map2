// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'transformReferences'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 642515
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var attachmentFactoryFunctions = require("attachment-factory-functions") /*id: 651399*/;
  let a = [{
    matcher: e => e.type === "link",
    transform: e => {
      let {
        refContent: t
      } = e;
      return {
        type: attachmentConstants.ReferenceType.ReferenceTypeLink,
        link: attachmentFactoryFunctions.createLinkWithCode(t.link)
      };
    }
  }, {
    matcher: e => ["attachment", "image", "file"].includes(e.type),
    transform: e => {
      let {
        refContent: n
      } = e;
      return {
        type: attachmentConstants.ReferenceType.ReferenceTypeFile,
        file: attachmentFactoryFunctions.createFileObject(n.fileKey, "", n.fileName, ""),
        ...(n.option?.local_path ? {
          extra: {
            extra: {
              local_path: n.option.local_path
            }
          }
        } : {})
      };
    }
  }, {
    matcher: e => e.type === "text",
    transform: e => {
      let {
        refContent: i
      } = e;
      let o = {
        text: i.text,
        message_id: "",
        position: i.extra?.rangeStart && i.extra?.rangeEnd ? {
          artifact_position: {
            file: i.extra.filename,
            start: Number(i.extra.rangeStart),
            end: Number(i.extra.rangeEnd)
          },
          type: attachmentConstants.PositionType.PositionTypeCodeArtifact
        } : undefined,
        option: undefined,
        sub_index: 0
      };
      return {
        type: attachmentConstants.ReferenceType.ReferenceTypeText,
        text: o
      };
    }
  }, {
    matcher: e => e.type === "lark_doc",
    transform: e => {
      let {
        refContent: t
      } = e;
      return {
        type: attachmentConstants.ReferenceType.ReferenceTypeLarkDoc,
        lark_doc: t.larkDoc
      };
    }
  }, {
    matcher: e => e.type === "ppt_template",
    transform: e => {
      let {
        refContent: t
      } = e;
      return {
        type: attachmentConstants.ReferenceType.ReferenceTypePPTTemplate,
        ppt_template: t.ppt_template
      };
    }
  }];
  let l = e => e.map(e => {
    let t = a.find(t => t.matcher(e));
    if (t == null) {
      return undefined;
    } else {
      return t.transform({
        refContent: e
      });
    }
  }).filter(e => e !== undefined).map(e => ({
    block_type: chatConstantsEnum.messageContentType.BLOCK_REFERENCE,
    content: {
      reference_block: e,
      pc_event_block: ""
    },
    block_id: uuidGeneratorUtil.generateUuid(),
    append_fields: [],
    parent_id: "",
    meta_info: []
  }));
  require.d(exports, {
    transformReferences: function () {
      return l;
    }
  });
}