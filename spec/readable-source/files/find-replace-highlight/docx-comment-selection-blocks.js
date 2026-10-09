// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HI' to 'CommentBlock'
// - Renamed export 'kt' to 'ReplyBlock'
// - Renamed export 'tM' to 'BaseCommentBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: find-replace-highlight.ee87218d.js
         * chunkId: 82986
         * moduleId: 853827
         */
module.exports = function (module, exports, require) {
  var n;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docxMatchChangeSignal = require("docx-match-change-signal") /*id: 227293*/;
  var findBlockConstants = require("find-block-constants") /*id: 352857*/;
  function s(t, e, i) {
    var n;
    if ((e = typeof (n = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var i = t[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(t, e || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? n : n + "") in t) {
      Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = i;
    }
    return t;
  }
  (n = {})[n.comment = 0] = "comment";
  n[n.global = 1] = "global";
  let c = n;
  class h {
    get isReplaceable() {
      return false;
    }
    get rangeId() {
      if (this.selection.replyId) {
        return `${this.selection.commentId}_${this.selection.replyId}`;
      } else {
        return this.selection.commentId;
      }
    }
    get matchContent() {
      return this.selection;
    }
    async scrollIntoView() {
      let {
        commentId: t,
        replyId: e
      } = this.selection;
      if (this.matchChangeSignal) {
        var i;
        if ((i = this.matchChangeSignal) !== null && i !== undefined) {
          i.next({
            commentId: t,
            replyId: e
          });
        }
      } else {
        this.commentModule.jumpToReply(t, e);
      }
    }
    constructor(t, e, i) {
      this.selection = t;
      this.commentModule = e;
      this.blockManager = i;
      s(this, "type", findBlockConstants.blockTypes.Comment);
      s(this, "range", undefined);
      s(this, "commentType", c.comment);
      s(this, "matchId", undefined);
      s(this, "matchChangeSignal", undefined);
      s(this, "initMatchChangeSignal", () => {
        if (this.blockManager) {
          docxEditorCore.onServiceReady(this.blockManager.editorAPI, docxMatchChangeSignal.matchChangeSignal, t => {
            this.matchChangeSignal = t;
          });
        }
      });
      this.matchId = uuidGeneratorUtil.generateUuid();
      this.initMatchChangeSignal();
    }
  }
  class u extends h {
    async scrollIntoView() {
      var t;
      let {
        commentId: e,
        replyId: i
      } = this.selection;
      await ((t = this.commentModule) === null || t === undefined ? undefined : t.scrollToWholeComment(e, i));
    }
    constructor(...t) {
      super(...t);
      s(this, "commentType", c.global);
    }
  }
  require.d(exports, {
    CommentBlock: function () {
      return c;
    },
    ReplyBlock: function () {
      return u;
    },
    BaseCommentBlock: function () {
      return h;
    }
  });
}