// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'throttledOmitPathStringify'
// - Resolved require(159496) to 'throttled-omit-path-stringify'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'docxEditorConstantsConfig'
// - Resolved require(302915) to 'docx-editor-constants-config'
// - Renamed variable 'l' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'findBlockConstants'
// - Resolved require(352857) to 'find-block-constants'
// - Renamed variable 's' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'c' to 'requestScheduler'
// - Resolved require(297734) to 'request-scheduler'
// - Renamed variable 'h' to 'docxFindReplaceConfig'
// - Resolved require(106059) to 'docx-find-replace-config'
// - Renamed variable 'u' to 'docFindRectUtilities'
// - Resolved require(122406) to 'doc-find-rect-utilities'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'f' to 'deepEqualUtil_1'
// - Resolved require(702050) to 'deep-equal-util_1'
// - Renamed variable 'y' to 'captionEditorConstants'
// - Resolved require(287236) to 'caption-editor-constants'
// - Renamed variable 'B' to 'docBlockCellUtils'
// - Resolved require(48515) to 'doc-block-cell-utils'
// - Renamed variable 'C' to 'domRectBboxHelpers'
// - Resolved require(412452) to 'dom-rect-bbox-helpers'
// - Renamed variable 'w' to 'docxEditorEventConstantsAndManager'
// - Resolved require(267720) to 'docx-editor-event-constants-and-manager'
// - Renamed variable 'x' to 'docxCommentSelectionBlocks'
// - Resolved require(853827) to 'docx-comment-selection-blocks'
// - Renamed variable '_' to 'editorPositionClass'
// - Resolved require(77106) to 'editor-position-class'
// - Renamed variable 'E' to 'codeBlockConstants'
// - Resolved require(48094) to 'code-block-constants'
// - Updated imported property 'Bd' to 'roundNumber' (module 122406)
// - Updated imported property 'cn' to 'createRangeRect' (module 122406)
// - Updated imported property 'YQ' to 'getRangeDomRect' (module 122406)
// - Updated imported property 'Z' to 'deepEqual' (module 702050)
// - Updated imported property 'zl' to 'highlightWrapperClass' (module 106059)
// - Updated imported property 'Qw' to 'findReplaceEvents' (module 106059)
// - Updated imported property 'y' to 'RequestScheduler' (module 297734)
// - Updated imported property 'j9' to 'captionEditorArea' (module 287236)
// - Updated imported property 'BZ' to 'createEmptyRect' (module 412452)
// - Updated imported property 'r3' to 'copyRectProps' (module 412452)
// - Updated imported property 's8' to 'calcRelativeRect' (module 412452)
// - Updated imported property 'Lw' to 'hasCellInPath' (module 48515)
// - Updated imported property 'TB' to 'globalEventConstants' (module 267720)
// - Updated imported property 'HI' to 'CommentBlock' (module 853827)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'FL' to 'codeBlockMinWidth' (module 48094)
// - Updated imported property 'k8' to 'codeBlockIndent' (module 48094)
// - Updated imported property 'L' to 'EditorPosition' (module 77106)
// - Updated imported property '_q' to 'blockTypes' (module 352857)
// - Updated imported property 'Us' to 'resizeGridEvent' (module 302915)
// - Updated imported property 'Z' to 'omitPathStringify' (module 159496)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: find-replace-highlight.ee87218d.js
         * chunkId: 82986
         * moduleId: 311241
         */
module.exports = function (module, exports, require) {
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var findBlockConstants = require("find-block-constants") /*id: 352857*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var requestScheduler = require("request-scheduler") /*id: 297734*/;
  var docxFindReplaceConfig = require("docx-find-replace-config") /*id: 106059*/;
  var docFindRectUtilities = require("doc-find-rect-utilities") /*id: 122406*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function p(t) {
    let {
      startTop: e,
      startLeft: i,
      endLeft: n,
      endBottom: r,
      height: o,
      color: l,
      id: a,
      lineHeight: s,
      paddingLeft: c,
      paddingRight: h,
      rangePadding: p,
      classPrefix: f
    } = t;
    if (s === 0 || s === undefined || c === undefined || h === undefined || i === undefined || n === undefined || o === 0) {
      return null;
    }
    let m = o + p * 2;
    let b = docFindRectUtilities.roundNumber((r - e) / s);
    let v = e - (m - o) / 2;
    let k = v + s;
    let y = g({
      color: l,
      height: m,
      left: i,
      top: v,
      width: b === 1 ? n - i : undefined,
      right: b === 1 ? undefined : h,
      classPrefix: f
    });
    let B = [];
    let C = k;
    if (b > 2) {
      for (let t = 0; t < b - 2; t++) {
        B.push(g({
          color: l,
          height: m,
          left: c,
          top: k + t * s,
          right: h,
          classPrefix: f
        }));
      }
      C = k + s * (b - 2);
    }
    let I = null;
    if (b >= 2) {
      I = g({
        color: l,
        height: m,
        left: c,
        top: C,
        width: n - c,
        classPrefix: f
      });
    }
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `${f}-container`,
      "data-id": a,
      children: [y, B, I]
    }, a);
  }
  function g(t) {
    let {
      color: e,
      left: i,
      right: n,
      top: r,
      width: o,
      height: l,
      classPrefix: a
    } = t;
    let s = {
      height: l,
      backgroundColor: e.background || "transparent",
      borderBottom: e.underline ? `2px solid ${e.underline}` : "none",
      left: docFindRectUtilities.roundNumber(i),
      top: docFindRectUtilities.roundNumber(r),
      position: "absolute",
      pointerEvents: "none",
      zIndex: 1
    };
    if (n !== undefined) {
      s.right = docFindRectUtilities.roundNumber(n);
    } else {
      s.width = o;
    }
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `${a}-content`,
      style: s
    });
  }
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  function m(t, e) {
    let {
      selectionAPI: i,
      blockManager: n,
      rect: r,
      ranges: o,
      version: l
    } = e;
    let {
      selectionAPI: a,
      blockManager: s,
      rect: c,
      ranges: h,
      version: u
    } = t;
    return a !== i || s !== n || c !== r || l !== u || !deepEqualUtil_1.deepEqual(h, o);
  }
  function b(t, e, i) {
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
  let v = "docx-bookmark-title";
  class k extends reactCoreLibraryReexport.Component {
    shouldComponentUpdate(t) {
      return m(this.props, t);
    }
    UNSAFE_componentWillReceiveProps(t) {
      if (t.version !== this.props.version) {
        this.updateInfo();
      }
    }
    componentWillUnmount() {
      this.sub.unsubscribe();
      this.afterSetIsReplacingAllAnimationFrame.cancel();
      this.container = null;
    }
    getContainer(t) {
      let {
        blockManager: e
      } = this.props;
      let i = e.getBlockViewByBlockIdNotCheck(t);
      if (i) {
        return i.hostElement;
      } else {
        return null;
      }
    }
    getBlockStyle() {
      var t;
      let e = (t = this.container) === null || t === undefined ? undefined : t.querySelector(`.${v}`);
      if (!e) {
        return {};
      }
      let i = getComputedStyle(e);
      let n = docFindRectUtilities.roundNumber(Number(i.lineHeight.replace("px", "")));
      let r = e.getBoundingClientRect();
      let o = this.container.getBoundingClientRect();
      return {
        lineHeight: n,
        paddingLeft: r.left - o.left,
        paddingRight: o.right - r.right
      };
    }
    renderTitleRange(t) {
      let {
        blockId: e,
        blockManager: i
      } = this.props;
      let {
        color: n,
        match: r
      } = t;
      let {
        lineHeight: o
      } = this.blockStyle;
      if (!this.container || o === undefined) {
        return;
      }
      let {
        hostElement: l
      } = i.getBlockViewByBlockId(e);
      let a = l.querySelector(`.${v}`);
      if (!a) {
        return;
      }
      let s = docFindRectUtilities.createRangeRect(a.firstChild, r.range, t => {});
      if (!s) {
        return;
      }
      let {
        left: c,
        top: h
      } = l.getBoundingClientRect();
      let {
        startLeft: g,
        startTop: f,
        endBottom: m,
        endLeft: b,
        height: k
      } = s;
      return reactJsxRuntimeCoreReexport.jsx(p, {
        startLeft: g - c,
        endLeft: b - c,
        startTop: f - h,
        endBottom: m - h,
        height: k,
        color: n,
        id: r.matchId,
        lineHeight: this.blockStyle.lineHeight,
        paddingLeft: this.blockStyle.paddingLeft,
        paddingRight: this.blockStyle.paddingRight,
        rangePadding: 2,
        classPrefix: "docx-bookmark-highlight"
      });
    }
    renderContent() {
      let {
        ranges: t
      } = this.props;
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: t.map(t => this.renderTitleRange(t))
      });
    }
    render() {
      if (this.container) {
        return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx("span", {
          className: docxFindReplaceConfig.highlightWrapperClass,
          children: this.renderContent()
        }), this.container);
      } else {
        return null;
      }
    }
    constructor(t) {
      super(t);
      b(this, "container", undefined);
      b(this, "afterSetIsReplacingAllAnimationFrame", new requestScheduler.RequestScheduler());
      b(this, "blockStyle", undefined);
      b(this, "sub", undefined);
      b(this, "updateInfo", () => {
        let {
          blockId: t
        } = this.props;
        this.container = this.getContainer(t);
        this.blockStyle = this.getBlockStyle();
      });
      b(this, "updateInfoWithForceUpdate", async t => {
        if (t.props.blockId === this.props.blockId) {
          await this.afterSetIsReplacingAllAnimationFrame.request();
          this.updateInfo();
          this.forceUpdate();
        }
      });
      let {
        blockManager: e
      } = t;
      this.sub = e.viewService.blockViewMount$.subscribe(this.updateInfoWithForceUpdate);
      this.updateInfo();
    }
  }
  var captionEditorConstants = require("caption-editor-constants") /*id: 287236*/;
  var docBlockCellUtils = require("doc-block-cell-utils") /*id: 48515*/;
  var domRectBboxHelpers = require("dom-rect-bbox-helpers") /*id: 412452*/;
  function I(t, e, i) {
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
  class S extends reactCoreLibraryReexport.Component {
    shouldComponentUpdate(t) {
      let {
        rect: e,
        ranges: i,
        version: n
      } = t;
      let {
        rect: r,
        ranges: o,
        version: l
      } = this.props;
      return r !== e || n !== l || !deepEqualUtil_1.deepEqual(o, i);
    }
    UNSAFE_componentWillReceiveProps(t) {
      if (t.version !== this.props.version) {
        this.updateInfo();
      }
    }
    componentWillUnmount() {
      this.sub.unsubscribe();
      this.afterSetIsReplacingAllAnimationFrame.cancel();
      this.container = null;
    }
    getContainer(t) {
      let {
        blockManager: e
      } = this.props;
      let i = e.getBlockViewByBlockIdNotCheck(t);
      if (i) {
        return i.hostElement;
      } else {
        return null;
      }
    }
    getBlockStyle() {
      var t;
      let e = (t = this.container) === null || t === undefined ? undefined : t.querySelector(`.${captionEditorConstants.captionEditorArea}`);
      if (!e) {
        return {};
      }
      let i = getComputedStyle(e);
      let n = docFindRectUtilities.roundNumber(Number(i.lineHeight.replace("px", "")));
      let r = getComputedStyle(this.container);
      return {
        lineHeight: n,
        paddingLeft: docFindRectUtilities.roundNumber(Number(r.paddingLeft.replace("px", ""))),
        paddingRight: docFindRectUtilities.roundNumber(Number(r.paddingRight.replace("px", "")))
      };
    }
    getActualCaretRect(t) {
      if (!this.blockView.captionInstance?.editor) {
        return domRectBboxHelpers.createEmptyRect();
      }
      let {
        editor: i
      } = this.blockView.captionInstance;
      let n = i.getContentState().getActiveZone();
      let r = i.rectModule.getRawCaretRect({
        ...n.offsetToPoint(t),
        zoneId: n.getZoneId()
      });
      let o = domRectBboxHelpers.copyRectProps(this.blockView.hostElement.getBoundingClientRect());
      return domRectBboxHelpers.calcRelativeRect(r, o);
    }
    renderTextRange(t) {
      let {
        color: e,
        match: i
      } = t;
      let [n, r] = i.range;
      let {
        lineHeight: o
      } = this.blockStyle;
      if (!this.container || o === undefined) {
        return;
      }
      let {
        left: l,
        top: a,
        height: s
      } = this.getActualCaretRect(n);
      let {
        left: c,
        bottom: h
      } = this.getActualCaretRect(r);
      return this.renderRange({
        startLeft: l,
        endLeft: c,
        startTop: a,
        endBottom: h,
        height: s,
        color: e,
        id: i.matchId
      });
    }
    fixRange(t, e) {
      var i;
      let {
        rect: n,
        blockId: r
      } = this.props;
      let o = n.getBlockClientRect(r);
      let l = (i = this.container) === null || i === undefined ? undefined : i.querySelector(`.${captionEditorConstants.captionEditorArea}`);
      let a = l == null ? undefined : l.getClientRects()[0];
      if (!a || !o) {
        return [];
      }
      let s = a.left - o.left;
      let c = a.right - o.left;
      if (t > c || e < s) {
        return [];
      } else {
        return [Math.max(s, t), Math.min(c, e)];
      }
    }
    renderRange(t) {
      let {
        startTop: e,
        startLeft: i,
        endLeft: n,
        endBottom: r,
        height: o,
        color: l,
        id: a
      } = t;
      let {
        lineHeight: s,
        paddingLeft: c,
        paddingRight: h
      } = this.blockStyle;
      let [u, g] = this.fixRange(i, n);
      return reactJsxRuntimeCoreReexport.jsx(p, {
        startLeft: u,
        endLeft: g,
        startTop: e,
        endBottom: r,
        height: o,
        color: l,
        id: a,
        lineHeight: s,
        paddingLeft: c,
        paddingRight: h,
        rangePadding: this.rangePadding,
        classPrefix: "docx-caption-highlight"
      });
    }
    render() {
      if (!this.container) {
        return null;
      }
      let {
        ranges: t
      } = this.props;
      return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx("span", {
        className: docxFindReplaceConfig.highlightWrapperClass,
        children: t.map(t => this.renderTextRange(t))
      }), this.container);
    }
    constructor(t) {
      super(t);
      I(this, "container", undefined);
      I(this, "blockView", undefined);
      I(this, "afterSetIsReplacingAllAnimationFrame", new requestScheduler.RequestScheduler());
      I(this, "blockStyle", undefined);
      I(this, "rangePadding", 2);
      I(this, "sub", undefined);
      I(this, "updateInfo", () => {
        let {
          blockId: t,
          blockManager: e
        } = this.props;
        this.blockView = e.getBlockViewByBlockId(t);
        this.container = this.getContainer(t);
        this.blockStyle = this.getBlockStyle();
        this.rangePadding = !docBlockCellUtils.hasCellInPath(this.props.blockManager, t) * 2;
      });
      I(this, "updateInfoWithForceUpdate", async t => {
        if (t.props.blockId === this.props.blockId) {
          await this.afterSetIsReplacingAllAnimationFrame.request();
          this.updateInfo();
          this.forceUpdate();
        }
      });
      let {
        blockManager: e
      } = t;
      this.sub = e.viewService.blockViewMount$.subscribe(this.updateInfoWithForceUpdate);
      this.updateInfo();
    }
  }
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxCommentSelectionBlocks = require("docx-comment-selection-blocks") /*id: 853827*/;
  class R extends reactCoreLibraryReexport.Component {
    componentDidMount() {
      this.updateHighlight();
    }
    componentDidUpdate() {
      this.updateHighlight();
    }
    render() {
      return null;
    }
    constructor(t) {
      var e;
      var i;
      var n;
      super(t);
      e = "updateHighlight";
      i = () => {
        let {
          ranges: t
        } = this.props;
        if (!t.length) {
          return;
        }
        let e = t.find(t => {
          let {
            isSelected: e
          } = t;
          return e;
        });
        if (!e) {
          docxEditorEventConstantsAndManager.globalEventConstants.emit(docxFindReplaceConfig.findReplaceEvents.GLOBAL_COMMENT_HIGHLIGHT_CHANGE, []);
          docxEditorEventConstantsAndManager.globalEventConstants.emit(docxFindReplaceConfig.findReplaceEvents.COMMENT_HIGHLIGHT_CHANGE, []);
          return;
        }
        let i = e.match.commentType === docxCommentSelectionBlocks.CommentBlock.global ? docxFindReplaceConfig.findReplaceEvents.GLOBAL_COMMENT_HIGHLIGHT_CHANGE : docxFindReplaceConfig.findReplaceEvents.COMMENT_HIGHLIGHT_CHANGE;
        docxEditorEventConstantsAndManager.globalEventConstants.emit(i, [e.match.matchContent]);
      };
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
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = i;
      }
    }
  }
  var editorPositionClass = require("editor-position-class") /*id: 77106*/;
  var codeBlockConstants = require("code-block-constants") /*id: 48094*/;
  function j(t, e, i) {
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
  class T extends reactCoreLibraryReexport.Component {
    shouldComponentUpdate(t) {
      return m(this.props, t);
    }
    UNSAFE_componentWillReceiveProps(t) {
      if (t.version !== this.props.version) {
        this.updateInfo();
      }
    }
    componentWillUnmount() {
      this.sub.unsubscribe();
      this.afterSetIsReplacingAllAnimationFrame.cancel();
      this.container = null;
    }
    getContainer(t) {
      let {
        blockManager: e
      } = this.props;
      let i = e.getBlockViewByBlockIdNotCheck(t);
      if (i) {
        return i.hostElement;
      } else {
        return null;
      }
    }
    getEditorDOM() {
      var e;
      var i;
      if (this.block?.type === docBlockTypeConstants.blockTypeConstants.PAGE) {
        if ((i = this.container) === null || i === undefined) {
          return undefined;
        } else {
          return i.querySelector(".page-block-content .text-editor");
        }
      } else if ((e = this.container) === null || e === undefined) {
        return undefined;
      } else {
        return e.querySelector(".text-editor");
      }
    }
    getBlockStyle() {
      let t = this.getEditorDOM();
      if (!this.block) {
        return {};
      }
      let e = this.block.type === docBlockTypeConstants.blockTypeConstants.CODE;
      let i = e && this.block.isNewUI;
      if (e) {
        t = this.block.realScroller;
      }
      if (!t) {
        return {};
      }
      let n = getComputedStyle(t);
      let r = docFindRectUtilities.roundNumber(Number(n.lineHeight.replace("px", "")));
      let o = t.getBoundingClientRect();
      let a = o;
      if (i) {
        a = {
          ...JSON.parse(JSON.stringify(o)),
          left: o.left + codeBlockConstants.codeBlockMinWidth,
          right: this.block.snapshot.wrap ? o.right - codeBlockConstants.codeBlockIndent : o.right
        };
      }
      let s = this.container.getBoundingClientRect();
      let c = a.left - s.left;
      let h = s.right - a.right;
      return {
        editorRect: a,
        blockRect: s,
        lineHeight: r,
        paddingLeft: c,
        paddingRight: h
      };
    }
    renderTextRange(t) {
      let i;
      let n;
      let {
        rect: r,
        blockId: o
      } = this.props;
      let {
        color: l,
        match: a
      } = t;
      let [s, c] = a.range;
      let {
        lineHeight: h
      } = this.blockStyle;
      if (!this.container || h === undefined || !this.block) {
        return;
      }
      let u = this.block.model;
      if (u && u.virtualListModule?.isEnabled) {
        i = {
          ignoreRectContainer: false,
          ignoreMeasureDom: true
        };
        let t = new editorPositionClass.EditorPosition({
          zoneId: u.zoneId,
          editor: this.block.editor,
          start: s,
          len: c - s
        }).toRange();
        if (!u.virtualListModule.isLineInViewport(t.start.line)) {
          n = h;
        }
      }
      let {
        left: d,
        top: p,
        height: g
      } = r.getActualCaretRect(o, s, o, true, i);
      let {
        left: f,
        bottom: m
      } = r.getActualCaretRect(o, c, o, false, i);
      return this.renderRange({
        startLeft: d,
        endLeft: f,
        startTop: p,
        endBottom: n ? p + n : m,
        height: n || g,
        color: l,
        id: a.matchId
      });
    }
    renderEmbedTextRange(t) {
      if (!this.block) {
        return null;
      }
      let {
        rect: e,
        blockId: i
      } = this.props;
      let {
        color: n,
        match: r
      } = t;
      let {
        range: o,
        contentOffset: l,
        matchId: a
      } = r;
      let {
        lineHeight: s
      } = this.blockStyle;
      let c = docFindRectUtilities.getRangeDomRect(this.block, o, l);
      let h = e.getBlockClientRect(i);
      if (s === undefined || !c || !h) {
        return null;
      }
      let {
        startLeft: d,
        startTop: p,
        endBottom: g,
        endLeft: f,
        height: m
      } = c;
      return this.renderRange({
        startLeft: d - h.left,
        startTop: p - h.top,
        endLeft: f - h.left,
        endBottom: g - h.top,
        height: m,
        color: n,
        id: a
      });
    }
    renderRange(t) {
      return function (t, e, i, n, r) {
        let {
          startTop: o,
          startLeft: l,
          endLeft: a,
          endBottom: s,
          height: c,
          color: h,
          id: u
        } = t;
        let {
          lineHeight: g,
          paddingLeft: f,
          paddingRight: m
        } = e;
        let [b, v, k] = i(l, a, o, s);
        return reactJsxRuntimeCoreReexport.jsx(p, {
          startLeft: b,
          endLeft: v,
          startTop: k ?? o,
          endBottom: s,
          height: c,
          color: h,
          id: u,
          lineHeight: g,
          paddingLeft: f,
          paddingRight: m,
          rangePadding: n,
          classPrefix: r
        });
      }(t, this.blockStyle, this.fixRange, this.rangePadding, "text-block-highlight");
    }
    renderContent() {
      let {
        ranges: t
      } = this.props;
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: t.map(t => {
          let {
            type: e
          } = t.match;
          if (findBlockConstants.blockTypes.TextBlock === e) {
            return this.renderTextRange(t);
          } else {
            return this.renderEmbedTextRange(t);
          }
        })
      });
    }
    render() {
      if (this.container) {
        return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx("span", {
          className: docxFindReplaceConfig.highlightWrapperClass,
          children: this.renderContent()
        }), this.container);
      } else {
        return null;
      }
    }
    constructor(t) {
      super(t);
      j(this, "container", undefined);
      j(this, "block", undefined);
      j(this, "afterSetIsReplacingAllAnimationFrame", new requestScheduler.RequestScheduler());
      j(this, "blockStyle", undefined);
      j(this, "rangePadding", 2);
      j(this, "sub", undefined);
      j(this, "updateInfo", () => {
        let {
          blockId: t,
          blockManager: e
        } = this.props;
        this.block = e.getBlockViewByBlockIdNotCheck(t);
        this.container = this.getContainer(t);
        this.blockStyle = this.getBlockStyle();
        this.rangePadding = !docBlockCellUtils.hasCellInPath(this.props.blockManager, t) * 2;
      });
      j(this, "updateInfoWithForceUpdate", async t => {
        if (t.props.id === this.props.blockId) {
          await this.afterSetIsReplacingAllAnimationFrame.request();
          this.updateInfo();
          this.forceUpdate();
        }
      });
      j(this, "fixRange", (t, e, i, n) => {
        if (this.block?.type === docBlockTypeConstants.blockTypeConstants.CODE) {
          let {
            blockRect: r,
            editorRect: o
          } = this.blockStyle;
          if (!o || !r) {
            return [];
          }
          let l = o.top - r.top;
          let a = o.left - r.left;
          let s = o.right - r.left;
          if (n <= l || t > s || e < a) {
            return [];
          } else {
            return [Math.max(a, t), Math.min(s, e), Math.max(l, i)];
          }
        }
        return [t, e, i];
      });
      let {
        blockManager: e
      } = t;
      this.sub = e.viewService.blockViewMount$.subscribe(this.updateInfoWithForceUpdate);
      this.updateInfo();
    }
  }
  let M = 16;
  class N extends reactCoreLibraryReexport.Component {
    componentDidMount() {
      window.addEventListener("resize", this.handleUpdateHighlight);
      this.props.blockManager.addListener(docxEditorConstantsConfig.resizeGridEvent, this.handleUpdateHighlight);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleUpdateHighlight);
      this.props.blockManager.removeListener(docxEditorConstantsConfig.resizeGridEvent, this.handleUpdateHighlight);
    }
    shouldComponentUpdate(t) {
      return m(this.props, t);
    }
    generateBlockRangeMap() {
      let {
        ranges: t
      } = this.props;
      return t.reduce((t, e) => {
        let {
          rangeId: i,
          type: n
        } = e.match;
        if (n === findBlockConstants.blockTypes.Comment) {
          t.comment ||= [];
          t.comment.push(e);
        } else {
          t[i] = (t[i] || []).concat([e]);
        }
        return t;
      }, {});
    }
    renderContent(t, e) {
      if (t === "comment") {
        return reactJsxRuntimeCoreReexport.jsx(R, {
          ranges: e
        }, t);
      }
      t = Number(t);
      let i = this.props.blockManager.getBlockModelByBlockIdNotCheck(t);
      if (!i) {
        return null;
      }
      let {
        type: r
      } = i;
      let o = throttledOmitPathStringify.omitPathStringify(this.props, "name", "ranges", "version");
      switch (r) {
        case docBlockTypeConstants.blockTypeConstants.BOOKMARK:
          return reactJsxRuntimeCoreReexport.jsx(k, {
            blockId: t,
            ranges: e,
            version: this.props.version,
            ...o
          }, t);
        case docBlockTypeConstants.blockTypeConstants.IMAGE:
          return reactJsxRuntimeCoreReexport.jsx(S, {
            blockId: t,
            ranges: e,
            version: this.props.version,
            ...o
          }, t);
        case docBlockTypeConstants.blockTypeConstants.CODE:
          {
            let i = e.filter(t => t.match.type === "caption");
            let n = e.filter(t => t.match.type !== "caption");
            return [i.length > 0 && reactJsxRuntimeCoreReexport.jsx(S, {
              blockId: t,
              ranges: i,
              version: this.props.version,
              ...o
            }, `code_caption_${t}`), n.length > 0 && reactJsxRuntimeCoreReexport.jsx(T, {
              blockId: t,
              ranges: n,
              version: this.props.version,
              ...o
            }, `code_${t}`)];
          }
        default:
          return reactJsxRuntimeCoreReexport.jsx(T, {
            blockId: t,
            ranges: e,
            version: this.props.version,
            ...o
          }, t);
      }
    }
    render() {
      let t = this.generateBlockRangeMap();
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: Object.keys(t).map(e => this.renderContent(e, t[e]))
      });
    }
    constructor(...t) {
      var e;
      var i;
      var n;
      super(...t);
      e = "handleUpdateHighlight";
      i = () => {
        this.props.textHighlight.reflush();
      };
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
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = i;
      }
    }
  }
  var P = N;
  require.r(exports);
  require.d(exports, {
    default: function () {
      return P;
    },
    DEBOUNCE_DURATION: function () {
      return M;
    }
  });
}