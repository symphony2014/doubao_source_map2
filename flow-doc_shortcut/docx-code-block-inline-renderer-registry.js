// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'getInlineRendererPlugins'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 497319
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var editorBoldRendererPlugin = require("editor-bold-renderer-plugin") /*id: 454650*/;
  var editorItalicPlugin = require("editor-italic-plugin") /*id: 566226*/;
  var strikethroughRenderer = require("strikethrough-renderer") /*id: 728874*/;
  var authorRenderer = require("author-renderer") /*id: 937435*/;
  var codeHighlightRenderer_1 = require("code-highlight-renderer_1") /*id: 645611*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var k = classnamesUtils;
  var priorityConstants = require("priority-constants") /*id: 219839*/;
  var docxCodeBlockFeatureFlags = require("docx-code-block-feature-flags") /*id: 888140*/;
  var docxCodeBlockUtils = require("docx-code-block-utils") /*id: 352632*/;
  var editorContentFoldOperations = require("editor-content-fold-operations") /*id: 35914*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var codeFoldResizeConstants = require("code-fold-resize-constants") /*id: 637342*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var docBlockConstants_1 = require("doc-block-constants_1") /*id: 329056*/;
  var codeBlockFoldManagerPlugin = require("code-block-fold-manager-plugin") /*id: 590725*/;
  var codeBlockHighlightjsConstants = require("code-block-highlightjs-constants") /*id: 433332*/;
  class P extends codeBlockFoldManagerPlugin.CodeBlockPlugin {
    isCodeBlockZoneState(e) {
      let i = e.getZoneId();
      let r = this.blockManager.getBlockModelByBlockIdNotCheck(contentDeltaUtilityFunctions.toNumber(i));
      return !!r && r.type === docBlockTypeConstants.blockTypeConstants.CODE;
    }
    getLanguage(e) {
      let i = e.getZoneId();
      let r = this.blockManager.getBlockModelByBlockIdNotCheck(contentDeltaUtilityFunctions.toNumber(i));
      return (r == null ? undefined : r.language) || codeBlockHighlightjsConstants.plainTextLabel;
    }
    constructor(e) {
      var i;
      var r;
      var n;
      super(e);
      r = undefined;
      if ((i = typeof (n = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, i || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(i = "blockManager", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
      this.blockManager = e.blockManager;
    }
  }
  d = editorPluginManager.createPriority(priorityConstants.priorityConstants.BEFORE_DEFAULT);
  n = (u = class extends P {
    get isHistory() {
      return this.blockManager.isHistory;
    }
    get editable() {
      return this.blockManager.config.get("editable");
    }
    isFoldEnable(e) {
      let i = this.blockManager.getRecordByBlockId(contentDeltaUtilityFunctions.toNumber(e));
      return i != null && !!i.snapshot.text && (!!editorContentFoldOperations.hasFoldedContent(i.snapshot.text) || docxCodeBlockFeatureFlags.isCodeBlockInlineFold() && docxCodeBlockUtils.hasCodeBlockCaption(i.snapshot));
    }
    getFoldControllerClassName(e, i) {
      let r = super.getFoldControllerClassName(e, i);
      if (this.isHistory && this.isControllerChange(i)) {
        return k(r, "history-block-fold-controller");
      } else {
        return r;
      }
    }
    foldZoneLine(e) {
      var i;
      let {
        zoneId: r,
        index: n,
        unFold: o,
        isLocal: l,
        isByClick: s = false
      } = e;
      let a = this.editable ? undefined : {
        extra: {
          shouldCollab: false
        }
      };
      super.foldZoneLine({
        zoneId: r,
        index: n,
        unFold: o,
        isLocal: l || !this.editable,
        applyOptions: a
      });
      let c = (i = this.editor.getContentState()) === null || i === undefined ? undefined : i.getZoneState(r);
      if (c && s) {
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_content_page_click", {
          click: "block_custom_action",
          action_type: o ? "code_unfold_line" : "code_fold_line",
          action_value: this.getLanguage(c)
        });
      }
    }
    editorWillApplyChange(e) {
      let {
        options: r,
        deltaSet: n
      } = e;
      if (r.extra?.fromCodeFoldAutoFix) {
        delete r.nonundoable;
        r.extra.mergeMode = true;
      }
      if (!r.type || !["codeBlockEnter", "deleteBackward"].includes(r == null ? undefined : r.type)) {
        return n;
      }
      let o = Object.keys(n.deltas)[0];
      if (!o) {
        return n;
      }
      let l = this.blockManager.getBlockViewByBlockIdNotCheck(contentDeltaUtilityFunctions.toNumber(o));
      if (l.type !== docBlockTypeConstants.blockTypeConstants.CODE) {
        return n;
      }
      let {
        model: s
      } = l;
      let a = s.getSelection();
      if ((a == null ? undefined : a.start.offset) !== 0 || (a == null ? undefined : a.end.offset) !== 0) {
        return n;
      }
      let {
        viewport: c
      } = this.blockManager.editorAPI.getService(compatibleEditorContext_1.compatibleContext);
      c.scrollCaretIntoView(l);
      return n;
    }
    handleCollapsedChange(e) {
      var i;
      super.handleCollapsedChange(e);
      if ((i = this.blockManager.editorAPI.getService(codeFoldResizeConstants.foldServiceName)) !== null && i !== undefined) {
        i.codeInlineFoldStatusChange$.next(e);
      }
    }
    clearSelection(e) {
      super.clearSelection(e);
      if (!browserEnvDetectionUtil.browserDetector.isIOS) {
        return;
      }
      let i = document.querySelector(".docx-selection-hidden-textarea");
      if (i != null) {
        i.focus();
      }
    }
    constructor(...e) {
      var i;
      var r;
      var n;
      super(...e);
      i = "isControllerChange";
      r = e => {
        if (!e) {
          return false;
        }
        let r = e.getOps() || [];
        return (r.length > 0 ? r[r.length - 1] : {}).attributes?.[docBlockConstants_1.editTypeConstants.change] === "true";
      };
      if ((i = typeof (n = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, i || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(i, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
    }
  }).prototype;
  o = "editorWillApplyChange";
  l = [d];
  s = Object.getOwnPropertyDescriptor(u.prototype, "editorWillApplyChange");
  a = u.prototype;
  c = {};
  Object.keys(s).forEach(function (e) {
    c[e] = s[e];
  });
  c.enumerable = !!c.enumerable;
  c.configurable = !!c.configurable;
  if ("value" in c || c.initializer) {
    c.writable = true;
  }
  c = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, c);
  if (a && c.initializer !== undefined) {
    c.value = c.initializer ? c.initializer.call(a) : undefined;
    c.initializer = undefined;
  }
  if (c.initializer === undefined) {
    Object.defineProperty(n, o, c);
  }
  let D = u;
  var docxCodeblockConfigConstants = require("docx-codeblock-config-constants") /*id: 587865*/;
  var opendocImageViewerUtils = require("opendoc-image-viewer-utils") /*id: 356868*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var underlineRendererExtension = require("underline-renderer-extension") /*id: 669460*/;
  function Z() {
    let e = [[docxInlineBlockRenderers.CollabConnector], [docxInlineBlockRenderers.NonEmptyLineDecorator], [docxInlineBlockRenderers.TextRevisionPlugin], [docxInlineBlockRenderers.SelectionRenderer], [editorBoldRendererPlugin.BoldRenderer], [editorItalicPlugin.ItalicPlugin], [underlineRendererExtension.UnderlineRendererExtension], [strikethroughRenderer.StrikethroughRender], [authorRenderer.AuthorRenderer, {
      authorId: userEnvironmentUtils.getUserInfo().userId || ""
    }], [docxInlineBlockRenderers.TextHighlightRenderer], [docxInlineBlockRenderers.TextHighlightBackgroundRenderer], [docxInlineBlockRenderers.InlineBlockRenderer], [docxInlineBlockRenderers.MentionDocRenderer], [docxInlineBlockRenderers.LinkRenderer], [D, {
      i18n: docxCodeblockConfigConstants.codeblockTextLabels,
      foldable: docxCodeBlockFeatureFlags.isCodeBlockInlineFold()
    }], [codeHighlightRenderer_1.CodeHighlight], [docxInlineBlockRenderers.TextRevisionRenderer, {
      authorId: userEnvironmentUtils.getUserInfo().userId || ""
    }]];
    if (opendocImageViewerUtils.OpendocImageViewerUtils.checkShouldRegisComment()) {
      e.push([docxInlineBlockRenderers.TextCommentRenderer]);
    }
    return e;
  }
  require.d(exports, {
    getInlineRendererPlugins: function () {
      return Z;
    }
  });
}