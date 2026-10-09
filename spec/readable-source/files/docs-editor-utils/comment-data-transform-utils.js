// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KR' to 'createCommentMap'
// - Renamed export 'TX' to 'transformComment'
// - Renamed export 'g$' to 'transformComments'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 567918
         */
module.exports = function (module, exports, require) {
  var commentEventConstants = require("comment-event-constants") /*id: 616817*/;
  var contentCommentTypes = require("content-comment-types") /*id: 900376*/;
  var contentDeltaUtils_1 = require("content-delta-utils_1") /*id: 192362*/;
  let c = e => ({
    replyId: e.id,
    content: contentDeltaUtils_1.extractPlainText(e.text),
    createTimestamp: e.create_time,
    updateTimestamp: e.modify_time,
    deleted: 0,
    modify: +!!e.is_modified,
    userId: e.creator_id,
    avatarUrl: "",
    name: "",
    extra: {
      image_list: []
    }
  });
  let u = e => (e == null ? undefined : e.map(e => c(e))) || [];
  let a = e => {
    var r;
    var c;
    var s;
    return {
      commentId: e.id,
      quote: e.ref_text,
      commentList: u(e.reply_list),
      finish: +(e.status !== contentCommentTypes.CommentStatus.normal),
      userId: ((r = e.reply_list) === null || r === undefined ? undefined : r[0]?.creator_id) ?? "",
      createTimestamp: ((c = e.reply_list) === null || c === undefined ? undefined : c[0]?.create_time) ?? 0,
      updateTimestamp: ((s = e.reply_list) === null || s === undefined ? undefined : s[0]?.modify_time) ?? 0,
      isWhole: 0,
      tempCommentId: e.id,
      replyList: [],
      commentType: commentEventConstants.ContentType.ContentComment
    };
  };
  let s = e => e.map(e => a(e));
  let d = e => {
    let n = new Map();
    e.forEach(e => {
      n.set(e.commentId, e);
    });
    return n;
  };
  require.d(exports, {
    createCommentMap: function () {
      return d;
    },
    transformComment: function () {
      return a;
    },
    transformComments: function () {
      return s;
    }
  });
}