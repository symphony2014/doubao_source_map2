// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$e' to 'commentMaxDepth'
// - Renamed export 'CB' to 'commentInteractionEvents'
// - Renamed export 'D9' to 'commentContainerClass'
// - Renamed export 'EA' to 'commentMentionTypes'
// - Renamed export 'FJ' to 'commentIdPrefix'
// - Renamed export 'Fj' to 'commentHighlightClass'
// - Renamed export 'GF' to 'commentMenuTypes'
// - Renamed export 'Mq' to 'commentMenuSourceMap'
// - Renamed export 'N5' to 'commentSyncedBlockSuffix'
// - Renamed export 'PJ' to 'commentLoadingStates'
// - Renamed export 'Ps' to 'commentAnchorActiveEvent'
// - Renamed export 'S9' to 'commentSyncedBlockClass'
// - Renamed export 'Uh' to 'commentSourceTypes'
// - Renamed export 'VK' to 'commentBlockOffsets'
// - Renamed export 'Z7' to 'commentEventStreams'
// - Renamed export 'ZF' to 'commentFallbackPrefix'
// - Renamed export 'bJ' to 'commentTopChangeEvents'
// - Renamed export 'bw' to 'commentSyncedContainerClass'
// - Renamed export 'eU' to 'commentMonitorDevName'
// - Renamed export 'hL' to 'commentActionEvents'
// - Renamed export 'i2' to 'commentInvalidValue'
// - Renamed export 'lQ' to 'commentFullIdPrefix'
// - Renamed export 'mZ' to 'commentHighlightPrefixed'
// - Renamed export 'md' to 'exitFullscreenEvent'
// - Renamed export 'n8' to 'commentSyncedContainer'
// - Renamed export 'oO' to 'isMobileCommentMode'
// - Renamed export 'ol' to 'commentScrollEvents'
// - Renamed export 'pQ' to 'commentBlockTypes'
// - Renamed export 's4' to 'commentTimeoutMs'
// - Renamed export 'tj' to 'commentHighlightBase'
// - Renamed export 'un' to 'commentMaxWaitMs'
// - Renamed export 'wV' to 'commentScrollReturnMs'
// - Renamed export 'xZ' to 'commentFallbackFullPrefix'
// - Renamed export 'xx' to 'commentMinValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 580976
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var a;
  var l;
  var s;
  var c;
  var d;
  var u;
  var clientsidePrefixConstant = require("clientside-prefix-constant") /*id: 888035*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  browserEnvironmentDetectionUtils.browserDetector.isMobile;
  let v = "CommentAnchorActiveEvent";
  let f = "exitFullscreenEvent";
  let g = "flow-comment-id-";
  let b = clientsidePrefixConstant.clientsidePrefix + g;
  let w = `${clientsidePrefixConstant.clientsidePrefix}fallback-`;
  let x = w + g;
  let y = `${docxEditorConstantsConfig.clientSidePrefix}comment-hl`;
  let k = "comment-hl";
  let S = -1;
  let R = {
    [docBlockTypeConstants.blockTypeConstants.BITABLE]: {
      top: 52
    },
    [docBlockTypeConstants.blockTypeConstants.BASE_REFER]: {
      top: 52
    },
    [docBlockTypeConstants.blockTypeConstants.JIRA_FILTER]: {
      top: 20
    }
  };
  let E = {
    [docBlockTypeConstants.blockTypeConstants.BITABLE]: {
      top: 13
    },
    [docBlockTypeConstants.blockTypeConstants.BASE_REFER]: {
      top: 13
    }
  };
  let C = "docx-comment-container-inner";
  let $ = `${docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE}-block-comment`;
  let j = `docx-${docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE}-block`;
  let N = `docx-${docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE}-block-container`;
  docBlockTypeConstants.blockTypeConstants.BITABLE;
  docBlockTypeConstants.blockTypeConstants.BASE_REFER;
  (i = {}).feed = "feed";
  i.anchor = "anchor";
  i.panel = "panel";
  i.syncedSeparateFeed = "syncedSeparateFeed";
  i.announce = "announce";
  i.interaction = "interaction";
  i.numbers = "numbers";
  i.url = "url";
  i.newComment = "new_comment";
  i.thirdParty = "third_party";
  i.noticeCenter = "notice_center";
  i.vc = "vc";
  i.findReplace = "findReplace";
  i.toggleContentReaction = "toggleContentReaction";
  i.unknown = "unknown";
  i.initActive = "init_active";
  i.switch = "switch";
  i.AiStreaming = "ai_streaming";
  i.Keyboard = "keyboard";
  i.CloseCanvas = "close_canvas";
  let M = i;
  M.feed;
  M.url;
  M.noticeCenter;
  M.initActive;
  let T = ["WHITEBOARD_BLOCK", "SYNCED_REFERENCE_BLOCK"];
  (r = {}).afterResolve = "AfterResolve";
  r.interaction = "Interaction";
  r.feedClosePanel = "FeedClosePanel";
  r.selectedBlockHasNoComment = "SelectedBlockHasNoComment";
  r.thirdParty = "ThirdParty";
  r.blockTurnInto = "BlockTurnInto";
  r.hasNoSelectedBlock = "HasNoSelectedBlock";
  r.selectionOutOfComment = "SelectionOutOfComment";
  r.afterLocateToBlock = "AfterLocateToBlock";
  r.deleteCommentContent = "DeleteCommentContent";
  r.enterFullScreen = "enterFullScreen";
  let W = r;
  (a = {}).commentReady = "commentReady$";
  a.updateComments = "updateComments$";
  a.resolveComments = "resolveComments$";
  a.reopenComments = "reopenComments$";
  a.addedComments = "addedComments$";
  a.deletedComments = "deletedComments$";
  a.bufferEnteredComments = "bufferEnteredComments$";
  a.topChangedBlockIds = "topChangedBlockIds$";
  a.topDelay = "topDelay$";
  a.thirdPartyComments = "thirdPartyComments$";
  a.relationChange = "relationChange$";
  a.deferRelationChange = "deferRelationChange$";
  a.activateCommentWithSelection = "activateCommentWithSelection$";
  a.startedRevision = "startedRevision$";
  a.commentRelationData = "commentRelationData$";
  let I = a;
  let D = [I.bufferEnteredComments, I.topChangedBlockIds];
  (l = {}).triggerStartNewComment = "trigger_start_new_comment";
  l.startNewComment = "start_new_comment";
  l.exception = "exception";
  l.updateTempRelation = "update_temp_relation";
  l.addLocalCommentMark = "add_local_comment_mark";
  l.removeLocalCommentMark = "remove_local_comment_mark";
  l.willCancelAddComment = "will_cancel_add_comment";
  l.cancelAddComment = "cancel_add_comment";
  l.afterAddComment = "after_add_comment";
  l.doReplaceTempComment = "do_replace_temp_comment";
  l.commentChange = "comment_change";
  l.afterDeleteComment = "after_delete_comment";
  l.activateComment = "activate_comment";
  l.deactivateComment = "deactivate_comment";
  l.activeCommentChange = "activeCommentChange";
  l.flushActiveCommentChange = "flushActiveCommentChange";
  l.resolveComment = "resolve_comment";
  l.reopenComment = "reopen_comment";
  l.commentDataReady = "comment_data_ready";
  l.hoverCommentChange = "hover_comment_change";
  l.commentThirdParty = "comment_third_party";
  l.commentUpdateRelation = "comment_update_relation";
  l.commentUpdateStorePosition = "comment_update_store_position";
  l.urlJump = "url_jump";
  l.showCommentPanel = "show_comment_panel";
  l.feedJump = "feed_jump";
  l.feedJumpSuccess = "feed_jump_success";
  l.feedJumpFailed = "feed_jump_failed";
  l.blockManagerReady = "block_manager_ready";
  l.handleViewportLocked = "handle_viewport_locked";
  l.lockViewport = "lock_viewport";
  l.relationChange = "relation_change";
  l.positionChangeStream = "position_change_stream";
  l.positionsDiff = "positions_diff";
  l.filterInvalidComment = "filter_invalid_comment";
  l.linkCommentToContentStart = "link_comment_to_content_start";
  l.linkCommentToContentSuccess = "link_comment_to_content_success";
  l.linkCommentToContentFail = "link_comment_to_content_failed";
  l.locateCommentStart = "locate_comment_start";
  l.locateComment = "locate_comment";
  l.locateCommentSuccess = "locate_comment_success";
  l.locateCommentAsyncSuccess = "locate_comment_success_async";
  l.locateCommentFailed = "locate_comment_failed";
  l.thirdPartyCommentLoaded = "third_party_comment_loaded";
  l.thirdPartyCommentPreloadMissCache = "third_party_comment_preload_miss_cache";
  l.asyncResourceMouted = "async_resource_mouted";
  l.addedFallbackComment = "added_fallback_comment";
  l.deferUpdatePosition = "defer_update_position";
  l.commentBinded = "comment_binded";
  l.allDone = "all_done";
  l.printAllCommentError = "print_all_comment_error";
  l.syncedRefStartCommentError = "synced_ref_start_comment_error";
  l.syncedRefGetCommentRecalculate = "synced_ref_get_comment_recalculate";
  l.commentAnchor = "comment_anchor";
  l.beforeAddForwardComment = "before_add_forward_comment";
  l.addCommentWithContent = "add_comment_with_content";
  l.followCommentActive = "followCommentActive";
  l.getRectNoCache = "get_rect_no_cache";
  l.activateCommentHighlight = "activate_comment_highlight";
  l.clickInteraction = "click_interaction";
  l.afterScrollToComment = "after_scroll_to_comment";
  l.checkCommentsForSRB = "check_comments_for_SRB";
  l.onPositionUpdate = "on_position_update";
  l.commentRelationDataChange = "comment_relation_data_change";
  l.trustedRelationChange = "trusted_relation_change";
  l.docVersionChange = "doc_version_change";
  l.thirdPartyChange = "third_party_change";
  l.commentRelationInvalid = "comment_relation_invalid";
  l.commentRelationCached = "comment_relation_cached";
  let Z = l;
  let F = browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp || browserEnvironmentDetectionUtils.browserDetector.isOpendoc && browserEnvironmentDetectionUtils.browserDetector.isMobile;
  (s = {}).MobileBlockMenu = "MobileBlockMenu";
  s.MobileContextMenu = "MobileContextMenu";
  s.WebBlockToolbar = "BlockToolbar";
  s.WebTextToolbar = "TextToolbar";
  s.WebBlockMenu = "BlockMenu";
  s.SuspensionComment = "SuspensionComment";
  s.Mindmap = "Mindmap";
  let P = s;
  let A = {
    [P.WebBlockMenu]: "ccm_from_web_menu_panel",
    [P.WebTextToolbar]: "ccm_from_text_bubble_toolbar",
    [P.WebBlockToolbar]: "ccm_from_block_bubble_toolbar",
    [P.MobileContextMenu]: "ccm_doc_mobile_bubble_toolbar_view",
    [P.MobileBlockMenu]: "ccm_doc_mobile_menu_toolbar_view"
  };
  I.addedComments;
  I.deferRelationChange;
  I.deletedComments;
  I.activateCommentWithSelection;
  I.relationChange;
  I.reopenComments;
  I.resolveComments;
  I.thirdPartyComments;
  let z = "docx_comment_monitor_dev";
  (c = {}).SCROLL_ALIGN_COMMENT = "scroll_align_comment";
  c.SCROLL_ALIGN_COMMENT_RETURN = "scroll_align_comment_return";
  c.SCROLL_COMMENT_FLOAT = "scroll_comment_float";
  c.MS_ACTIVE_COMMENT = "ms_active_comment";
  c.MS_ACTIVE_COMMENT_RETURN = "ms_active_comment_return";
  c.MS_FOLLOW_COMMENT_ACTIVE = "ms_follow_comment_active";
  c.FEED_JUMP = "feed_jump";
  c.FAKE_POS_COMMENT = "fake_pos_comment";
  let O = c;
  (d = {}).MENTION = "mention";
  d.COMMENT = "comment";
  d.THIRD_PARTY = "third_party";
  d.REVISION = "revision";
  d.WHOLE_COMMENT = "whole_comment";
  let B = d;
  (u = {}).START = "start";
  u.START_WHOLE_COMMENT = "start_whole_comment";
  u.START_MENTION = "start_mention";
  u.START_COMMENT = "start_comment";
  u.START_REVISION = "start_revision";
  u.LOADING = "loading";
  u.SUCCESS_ON_SCROLL = "success_on_scroll";
  u.SUCCESS_WITHOUT_SCROLL = "success_without_scroll";
  u.FAILED = "failed";
  u.CANCEL = "cancel";
  let L = u;
  let U = [docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER];
  let H = 3000;
  let J = 20;
  let V = 17;
  let X = -9999;
  let G = 300;
  require.d(exports, {
    commentMaxDepth: function () {
      return J;
    },
    commentInteractionEvents: function () {
      return W;
    },
    commentContainerClass: function () {
      return C;
    },
    commentMentionTypes: function () {
      return B;
    },
    commentIdPrefix: function () {
      return g;
    },
    commentHighlightClass: function () {
      return U;
    },
    commentMenuTypes: function () {
      return P;
    },
    commentMenuSourceMap: function () {
      return A;
    },
    commentSyncedBlockSuffix: function () {
      return $;
    },
    commentLoadingStates: function () {
      return L;
    },
    commentAnchorActiveEvent: function () {
      return v;
    },
    commentSyncedBlockClass: function () {
      return E;
    },
    commentSourceTypes: function () {
      return M;
    },
    commentBlockOffsets: function () {
      return R;
    },
    commentEventStreams: function () {
      return I;
    },
    commentFallbackPrefix: function () {
      return w;
    },
    commentTopChangeEvents: function () {
      return D;
    },
    commentSyncedContainerClass: function () {
      return j;
    },
    commentMonitorDevName: function () {
      return z;
    },
    commentActionEvents: function () {
      return Z;
    },
    commentInvalidValue: function () {
      return X;
    },
    commentFullIdPrefix: function () {
      return x;
    },
    commentHighlightPrefixed: function () {
      return y;
    },
    exitFullscreenEvent: function () {
      return f;
    },
    commentSyncedContainer: function () {
      return N;
    },
    isMobileCommentMode: function () {
      return F;
    },
    commentScrollEvents: function () {
      return O;
    },
    commentBlockTypes: function () {
      return T;
    },
    commentTimeoutMs: function () {
      return S;
    },
    commentHighlightBase: function () {
      return k;
    },
    commentMaxWaitMs: function () {
      return H;
    },
    commentScrollReturnMs: function () {
      return G;
    },
    commentFallbackFullPrefix: function () {
      return b;
    },
    commentMinValue: function () {
      return V;
    }
  });
}