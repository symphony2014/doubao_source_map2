// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxScrollManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable-revision_resource.9a7282fa.js
         * chunkId: 57653
         * moduleId: 117388
         */
module.exports = function (module, exports, require) {
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var scrollAnimationManager = require("scroll-animation-manager") /*id: 5545*/;
  var commentScroller = require("comment-scroller") /*id: 832480*/;
  function s(e, i, o) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var n = o.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = o;
    }
    return e;
  }
  class a extends commentScroller.CommentScroller {
    getScrollerElement() {
      return this.scroller;
    }
    get scroller() {
      if (this.scrollerElement) {
        return this.scrollerElement;
      } else {
        return document.querySelector(`.${docxEditorConstantsConfig.containerIds.ROOT}`);
      }
    }
    get scrollTop() {
      return this.scroller?.scrollTop || 0;
    }
    get scrollerClientHeight() {
      return this.scroller?.clientHeight || 0;
    }
    waitToScroll(e, i, o = false) {
      if (o) {
        let o = this.scroller;
        scrollAnimationManager.scrollToPosition(o, e, true, i, i);
        return;
      }
      let n = this.scroller;
      scrollAnimationManager.stopScrollAnimation(n);
      if (n != null) {
        n.scrollTo(0, e);
      }
      if (i != null) {
        i();
      }
    }
    scrollToBottom() {}
    constructor(...e) {
      super(...e);
      s(this, "strategy", commentScroller.scrollStrategy.Upward);
      s(this, "getCommentPositionInfo", (e, i, o) => {
        let n = super.getCommentPositionInfo(e, i, o);
        if (!n) {
          return n;
        }
        let {
          top: r,
          bottom: l,
          viewportHeight: s,
          headerHeight: a
        } = n;
        return {
          top: r,
          bottom: l,
          viewportHeight: s || this.scrollerClientHeight,
          gap: Math.max(90, a ?? 0)
        };
      });
    }
  }
  exports.DocxScrollManager = a;
}