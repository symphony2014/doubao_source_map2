// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Xx' to 'AiEditor'
// - Renamed export 'bU' to 'isAiEditorInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 91148
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var editorHeadingPlugin = require("editor-heading-plugin") /*id: 899523*/;
  var richTextEditorListPlugin = require("rich-text-editor-list-plugin") /*id: 656274*/;
  var editorBoldPlugin = require("editor-bold-plugin") /*id: 13270*/;
  var italicAttributeRenderer = require("italic-attribute-renderer") /*id: 675703*/;
  var editorUnderlinePlugin = require("editor-underline-plugin") /*id: 368359*/;
  var editorStrikethroughRender = require("editor-strikethrough-render") /*id: 486446*/;
  var documentMarginCalculator = require("document-margin-calculator") /*id: 628830*/;
  var editorHyperlinkRenderer = require("editor-hyperlink-renderer") /*id: 623453*/;
  var blockquoteRenderer = require("blockquote-renderer") /*id: 954935*/;
  var codeBlockPlugin = require("code-block-plugin") /*id: 337472*/;
  var editorZoneState = require("editor-zone-state") /*id: 962363*/;
  var diffOperationValidators = require("diff-operation-validators") /*id: 735530*/;
  var editorCoreClass = require("editor-core-class") /*id: 137381*/;
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var trimStringBySubstring = require("trim-string-by-substring") /*id: 285645*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var arrayJoinHelper = require("array-join-helper") /*id: 183877*/;
  let k = e => {
    let {
      startLine: t,
      endLine: r,
      zoneState: n
    } = e;
    if (!n) {
      return "";
    }
    let i = numericRangeUtil.createRange(t, r + 1).map(e => {
      let t = n.getLine(e);
      if (t) {
        return trimStringBySubstring.trimStringBySubstring(t.getText());
      } else {
        return "";
      }
    }).filter(e => !collectionIncludesUtil.includes(["\n", "*"], trimStringBySubstring.trimStringBySubstring(e)));
    return arrayJoinHelper.joinArray(i, ",");
  };
  let S = e => {
    let {
      start: t,
      end: r,
      difference: n,
      fn: i
    } = e;
    if (t === r || n === 0) {
      return "";
    }
    let l = i == null ? undefined : i(t);
    return l || S({
      start: t + n,
      end: r,
      difference: n,
      fn: i
    });
  };
  let R = e => {
    if (!e) {
      return;
    }
    let t = e.getContentState();
    let {
      start: {
        zoneId: r,
        line: n
      },
      end: {
        line: i
      }
    } = e == null ? undefined : e.selection.getSelection();
    let l = t.getZoneState(r);
    if (!l) {
      return;
    }
    let o = {
      zoneState: l,
      editor: e,
      startLine: n,
      endLine: i
    };
    let a = S({
      start: n - 1,
      end: -1,
      difference: -1,
      fn: e => k({
        ...o,
        startLine: e,
        endLine: e
      })
    });
    return {
      preParagraph: a,
      currentParagraph: k(o),
      nextParagraph: S({
        start: i + 1,
        end: l.length(),
        difference: 1,
        fn: e => k({
          ...o,
          startLine: e,
          endLine: e
        })
      })
    };
  };
  var aiEditorConstants = require("ai-editor-constants") /*id: 383014*/;
  let W = {
    1: aiEditorConstants.blockTypes.Heading1,
    2: aiEditorConstants.blockTypes.Heading2,
    3: aiEditorConstants.blockTypes.Heading3,
    4: aiEditorConstants.blockTypes.Heading4
  };
  class E {
    async loadImageById(e) {
      let {
        loadImageById: t
      } = this.config;
      if (t) {
        return t(e);
      } else {
        return null;
      }
    }
    async loadImageByKey(e) {
      let {
        loadImageByKey: t
      } = this.config;
      if (t) {
        return t(e);
      } else {
        return null;
      }
    }
    async processImageBeforeLoad(e) {
      let {
        processImageBeforeLoad: t
      } = this.config;
      if (t) {
        return t(e);
      } else {
        return e;
      }
    }
    constructor(e) {
      this.config = e;
    }
  }
  class _ extends eventEmitterWrapper_1.eventEmitter {}
  var markdownToEditorDeltaProcessor = require("markdown-to-editor-delta-processor") /*id: 689610*/;
  var editorContentOperationsHelper = require("editor-content-operations-helper") /*id: 676428*/;
  var editorDeltaSetUtils = require("editor-delta-set-utils") /*id: 201746*/;
  var deltaToMarkdownConverter = require("delta-to-markdown-converter") /*id: 935302*/;
  var editorContentOperations = require("editor-content-operations") /*id: 444792*/;
  function N(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let B = e => !!e && e instanceof C;
  class C extends eventEmitterWrapper_1.eventEmitter {
    get raw() {
      let {
        editor: e
      } = this.config;
      if (e) {
        if (e instanceof editorCoreClass.Editor) {
          return e;
        } else {
          return e.current;
        }
      } else {
        return null;
      }
    }
    get requiredRaw() {
      let {
        editor: e
      } = this.config;
      let t = e && e instanceof editorCoreClass.Editor ? e : e == null ? undefined : e.current;
      if (!t) {
        throw Error("Cannot find editor instance");
      }
      return t;
    }
    error(e) {
      this.emit("error", e);
    }
    getTitle() {
      let {
        title: e
      } = this.config;
      if (e === null) {
        return null;
      } else if (isStringTypeCheck.isString(e)) {
        return e;
      } else {
        return e.current;
      }
    }
    getText() {
      if (this.raw) {
        return this.raw.getText();
      } else {
        return "";
      }
    }
    setText(e) {
      let t = this.raw;
      if (!t) {
        return;
      }
      let r = t.getContentState();
      if (r.getZoneState(zeroConstantModule_1.versionValue)) {
        r.apply(markdownToEditorDeltaProcessor.markdownDeltaConvert(e), {
          nonundoable: true
        });
      }
    }
    getParagraphContext() {
      if (this.raw) {
        return R(this.raw);
      }
    }
    getScroller() {
      let {
        scroller: e
      } = this.config;
      if (e) {
        return e.current;
      } else {
        return null;
      }
    }
    stopGenerate() {
      this.__internalEvents.emit("stopGenerate");
    }
    setHeader(e) {
      let {
        level: r
      } = e;
      if (this.raw) {
        this.raw.execCommand(editorHeadingPlugin.HeadingPlugin.KEY, {
          value: `h${r}`
        });
        this.behavior.emit("docToolsClick", {
          type: W[r] ?? aiEditorConstants.blockTypes.Unknown
        });
      }
    }
    setUnorderedList() {
      if (this.raw) {
        this.raw.execCommand(richTextEditorListPlugin.ListPlugin.KEY, {
          value: "bullet"
        });
        this.behavior.emit("docToolsClick", {
          type: aiEditorConstants.blockTypes.UnorderedList
        });
      }
    }
    setOrderedList() {
      if (this.raw) {
        this.raw.execCommand(richTextEditorListPlugin.ListPlugin.KEY, {
          value: "number"
        });
        this.behavior.emit("docToolsClick", {
          type: aiEditorConstants.blockTypes.OrderedList
        });
      }
    }
    setBold() {
      if (this.raw) {
        this.raw.execCommand(editorBoldPlugin.BoldPlugin.KEY);
        this.behavior.emit("docToolsClick", {
          type: aiEditorConstants.blockTypes.Bold
        });
      }
    }
    setItalic() {
      if (this.raw) {
        this.raw.execCommand(italicAttributeRenderer.ItalicRenderer.KEY);
        this.behavior.emit("docToolsClick", {
          type: aiEditorConstants.blockTypes.Italic
        });
      }
    }
    setUnderline() {
      if (this.raw) {
        this.raw.execCommand(editorUnderlinePlugin.UnderlinePlugin.KEY);
        this.behavior.emit("docToolsClick", {
          type: aiEditorConstants.blockTypes.Underline
        });
      }
    }
    setStrikeThrough() {
      if (this.raw) {
        this.raw.execCommand(editorStrikethroughRender.StrikethroughRender.KEY);
        this.behavior.emit("docToolsClick", {
          type: aiEditorConstants.blockTypes.StrikeThrough
        });
      }
    }
    setImage(e = {}) {
      if (!this.raw) {
        return;
      }
      let {
        image: t,
        attribute: r
      } = e;
      editorContentOperationsHelper.insertOrUpdateImage({
        editor: this.raw,
        image: t,
        attribute: r
      });
      this.behavior.emit("docToolsClick", {
        type: aiEditorConstants.blockTypes.Image
      });
    }
    setTable() {
      if (this.raw) {
        this.raw.execCommand(documentMarginCalculator.getMarginValue.KEY);
        this.behavior.emit("docToolsClick", {
          type: aiEditorConstants.blockTypes.Table
        });
      }
    }
    setLink() {
      if (this.raw) {
        this.raw.execCommand(editorHyperlinkRenderer.HyperLinksRenderer.KEY);
        this.behavior.emit("docToolsClick", {
          type: aiEditorConstants.blockTypes.Link
        });
      }
    }
    setBlockquote() {
      if (this.raw) {
        this.raw.toggleAttribute(blockquoteRenderer.BlockquoteRenderer.KEY, "true");
        this.behavior.emit("docToolsClick", {
          type: aiEditorConstants.blockTypes.Blockquote
        });
      }
    }
    setCodeBlock() {
      if (this.raw) {
        this.raw.execCommand(codeBlockPlugin.CodeBlockPlugin.KEY);
        this.behavior.emit("docToolsClick", {
          type: aiEditorConstants.blockTypes.CodeBlock
        });
      }
    }
    setInlineCode() {
      if (this.raw) {
        this.raw.toggleAttribute("inlineCode", "true");
        this.behavior.emit("docToolsClick", {
          type: aiEditorConstants.blockTypes.InlineCode
        });
      }
    }
    removeInlineAttributes() {
      if (this.raw) {
        editorContentOperationsHelper.removeLineMarkersFromSelection({
          editor: this.raw
        });
      }
    }
    copy(e = {}) {
      let {
        type: t
      } = e;
      if (this.raw) {
        editorContentOperationsHelper.copySelectionOrAll({
          editor: this.raw,
          type: t
        });
        this.behavior.emit("copy", {
          type: t
        });
      }
    }
    getSelectionHeadings() {
      if (this.raw) {
        return editorContentOperationsHelper.getHeadingAnchorsBeforeSelection({
          editor: this.raw,
          selection: this.raw.selection.getSelection()
        });
      } else {
        return [];
      }
    }
    async getSelectionText(e = {}) {
      let {
        selection: t
      } = e;
      if (!this.raw) {
        return null;
      }
      let r = t ?? this.raw.selection.getSelection();
      if (r.isCollapsed()) {
        return null;
      }
      let {
        start: n,
        len: i
      } = r.toPosition();
      let o = this.raw.getContent();
      let a = n === 0 ? null : editorDeltaSetUtils.getDeltaOpsRange({
        deltaSet: o,
        start: n - 1,
        end: n
      });
      let s = !!a && !!diffOperationValidators.isWildcardInsert(a[0]);
      let d = editorDeltaSetUtils.getRangeDeltaSet({
        deltaSet: this.raw.getContent(),
        start: s ? n - 1 : n,
        end: n + i
      });
      let u = new editorZoneState.EditorZoneState("", d.get(zeroConstantModule_1.versionValue)).getModelText();
      return (await deltaToMarkdownConverter.convertDeltaToMarkdown({
        deltaSet: d,
        docEditor: this
      })) || u;
    }
    async getSelectionParagraphText(e = {}) {
      let {
        selection: t
      } = e;
      if (!this.raw) {
        return null;
      }
      let r = editorContentOperations.getLeafParagraphRanges({
        editor: this.raw
      });
      let n = t ?? this.raw.selection.getSelection();
      for (let e of r) {
        let t = e.toPosition();
        let r = n.toPosition();
        if (r.start > t.start && r.start < t.start + t.len) {
          return await this.getSelectionText({
            selection: e
          });
        }
      }
      return null;
    }
    constructor(e) {
      super();
      this.config = e;
      N(this, "__internalEvents", new eventEmitterWrapper_1.eventEmitter());
      N(this, "behavior", new _());
      N(this, "image", null);
      let {
        image: t
      } = this.config;
      if (t) {
        this.image = new E(t);
      }
    }
  }
  require.d(exports, {
    AiEditor: function () {
      return C;
    },
    isAiEditorInstance: function () {
      return B;
    }
  });
}