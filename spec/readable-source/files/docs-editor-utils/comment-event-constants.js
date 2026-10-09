// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E3' to 'CodeScrollScenes'
// - Renamed export 'ZP' to 'CommentEvents'
// - Renamed export 'as' to 'DataSourceType'
// - Renamed export 'i4' to 'ContentType'
// - Renamed export 'jz' to 'ActiveItemState'
// - Renamed export 'nw' to 'ActionType'
// - Renamed export 'vy' to 'RevisionType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 616817
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var c;
  var u;
  var a;
  var s;
  (o = {}).ACTIVE_COMMENT_CHANGE_BEFORE_SCROLL = "ACTIVE_COMMENT_CHANGE_BEFORE_SCROLL";
  o.ACTIVE_COMMENT_CHANGE_AFTER_SCROLL = "ACTIVE_COMMENT_CHANGE_AFTER_SCROLL";
  o.ACTIVE_COMMENT_CHANGE = "ACTIVE_COMMENT_CHANGE";
  o.COMMENT_CHANGE = "COMMENT_CHANGE";
  o.WHOLE_COMMENT_CHANGE = "WHOLE_COMMENT_CHANGE";
  o.HIGHLIGHT_WHOLE_COMMENT = "HIGHLIGHT_WHOLE_COMMENT";
  o.COMMENT_READY = "COMMENT_READY";
  o.HOVER_COMMENT_CHANGE = "HOVER_COMMENT_CHANGE";
  o.RESOLVE_COMMENT = "RESOLVE_COMMENT";
  o.DELETE_COMMENT = "DELETE_COMMENT";
  o.BEFORE_DELETE_COMMENT = "BEFORE_DELETE_COMMENT";
  o.ADDED_COMMENT = "ADDED_COMMENT";
  o.ADDED_FALLBACK_COMMENT = "ADDED_FALLBACK_COMMENT";
  o.DELETE_FALLBACK_COMMENT = "DELETE_FALLBACK_COMMENT";
  o.ADD_TEMP_COMMENT = "ADD_TEMP_COMMENT";
  o.UPDATE_COMMENT = "UPDATE_COMMENT";
  o.WILL_CANCEL_ADD_COMMENT = "WILL_CANCEL_ADD_COMMENT";
  o.CANCEL_ADD_COMMENT = "CANCEL_ADD_COMMENT";
  o.REOPEN_COMMENT = "REOPEN_COMMENT";
  o.COMMENT_POSITION_CHANGE = "COMMENT_POSITION_CHANGE";
  o.ACTIVATE_COMMENT = "ACTIVATE_COMMENT";
  o.DEACTIVATE_COMMENT = "DEACTIVATE_COMMENT";
  o.START_NEW_DOC_COMMENT = "START_NEW_DOC_COMMENT";
  o.JUMP_REPLY = "JUMP_REPLY";
  o.FOLLOW_SCROLL_TOP_CHANGE = "FOLLOW_SCROLL_TOP_CHANGE";
  o.COMMENT_TRANSACTION_APPLY = "COMMENT_TRANSACTION_APPLY";
  o.BAN_COMMENT_VIEW_RENDER_CHANGE = "BAN_COMMENT_VIEW_RENDER_CHANGE";
  o.BEFORE_SET_META = "BEFORE_SET_META";
  o.AFTER_VIEWPORT_LOCK = "AFTER_VIEWPORT_LOCK";
  o.HANDLE_PERMISSION_FAILED_MEMBER = "HANDLE_PERMISSION_FAILED_MEMBER";
  o.COMMENTABLE_CHANGE = "COMMENTABLE_CHANGE";
  o.COMMENT_CARD_ACTIVATED_BY_CLICK = "COMMENT_CARD_ACTIVATED_BY_CLICK";
  o.DO_SCROLL_WHEN_POSITION_UPDATE = "doScrollWhenPositionUpdate";
  o.SET_DISABLE_EXCUTE_ANIMATE_PERSISITENT = "setDisableExcuteAnimatePersistent";
  let d = o;
  (i = {})[i.ContentComment = 0] = "ContentComment";
  i[i.ContentReaction = 1] = "ContentReaction";
  i[i.ContentRevision = 2] = "ContentRevision";
  let f = i;
  (l = {}).comment = "comment";
  l.revision = "revision";
  let h = l;
  (c = {})[c.MARK = 0] = "MARK";
  c[c.SHARE = 1] = "SHARE";
  let _ = c;
  (u = {}).LOCAL = "LOCAL";
  u.REMOTE = "REMOTE";
  let p = u;
  (a = {}).activeComment = "activeComment";
  a.activeRevision = "activeRevision";
  let g = a;
  (s = {})[s.noNeedCodeScroll = 1] = "noNeedCodeScroll";
  s[s.noCodeView = 2] = "noCodeView";
  s[s.noCodeScroller = 3] = "noCodeScroller";
  s[s.calcScrollLeft = 4] = "calcScrollLeft";
  let E = s;
  require.d(exports, {
    CodeScrollScenes: function () {
      return E;
    },
    CommentEvents: function () {
      return d;
    },
    DataSourceType: function () {
      return p;
    },
    ContentType: function () {
      return f;
    },
    ActiveItemState: function () {
      return g;
    },
    ActionType: function () {
      return _;
    },
    RevisionType: function () {
      return h;
    }
  });
}