// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'getOutlineBlock'
// - Renamed export 'Q' to 'trackFileUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 189511
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  let u = e => {
    let t = getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(e));
    if (t === "pdf") {
      return "pdf";
    } else if (t === "doc" || t === "docx") {
      return "doc";
    } else {
      return undefined;
    }
  };
  let f = e => {
    let {
      file: t,
      success: n,
      collectionId: r
    } = e;
    teaAnalyticsEventTracker.trackEvent("upload_status", {
      upload_type: u(t),
      file_cnt: 1,
      success: String(n),
      upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(t))),
      collection_id: r,
      collection_name: t.name,
      upload_collection_way: "false",
      upload_from: "by_step_writing_add_ref_local",
      upload_way: "browse_folder",
      skill_id: String(chatAppEnums.SkillType.WriteAssistant),
      skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.WriteAssistant)
    });
  };
  let p = e => {
    var n;
    var i;
    let d = e == null ? undefined : (i = e.content_blocks_v2) === null || i === undefined ? undefined : (n = i.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_OUTLINE)) === null || n === undefined ? undefined : n.content?.outline_block;
    if (d) {
      return d;
    }
    let {
      text: u,
      outline_leading_content: f,
      outline_id: p,
      outline_meta: v
    } = (e == null ? undefined : e.content_obj) ?? {};
    let _ = safeJsonUtils.safeParse(v ?? (e == null ? undefined : e.ext?.outline_meta), {});
    return {
      text: u,
      outline_id: p ?? (e == null ? undefined : e.ext?.outline_id),
      outline_meta: _,
      outline_leading_content: f ?? (e == null ? undefined : e.ext?.outline_leading_content)
    };
  };
  require.d(exports, {
    getOutlineBlock: function () {
      return p;
    },
    trackFileUpload: function () {
      return f;
    }
  });
}