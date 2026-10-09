// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'DocxRenderer'
// - Renamed export 'r' to 'getEditorPlugins'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 98367
         */
module.exports = function (module, exports, require) {
  var editorDeleteAttributeRenderer = require("editor-delete-attribute-renderer") /*id: 541916*/;
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var htmlTextMaskUtil = require("html-text-mask-util") /*id: 822125*/;
  var elementJsonSerializer = require("element-json-serializer") /*id: 39786*/;
  function c(e, n) {
    var i = n.start;
    var r = n.end;
    var o = i.zoneId;
    if (!e.has(o)) {
      e.set(o, new Set());
    }
    var l = e.get(o);
    var a = i.line;
    for (; a <= r.line; a++) {
      l.add(a);
    }
  }
  function h(e) {
    return e.nodeType === Node.ELEMENT_NODE;
  }
  var f = function (e) {
    function n(n) {
      var i = e.call(this) || this;
      i.recordPosition = null;
      i.triggered = true;
      i.handleContentWillChange = function () {
        i.recordPosition = i.editor.selection.getSelection().toPosition();
      };
      i.handleContentChange = function () {
        var e;
        var n;
        var r = new Map();
        c(r, i.editor.selection.getSelection());
        if (i.recordPosition) {
          c(r, i.recordPosition.toRange());
          i.recordPosition = null;
        }
        try {
          var l = typescriptHelpers.createIterator(r);
          var a = l.next();
          for (; !a.done; a = l.next()) {
            var s = typescriptHelpers.iteratorToArray(a.value, 2);
            var d = s[0];
            var u = s[1];
            i.checkLineDOM(d, typescriptHelpers.spreadArguments(u));
          }
        } catch (n) {
          e = {
            error: n
          };
        } finally {
          try {
            if (a && !a.done && (n = l.return)) {
              n.call(l);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        i.triggered = true;
      };
      i.handleCompositionEndPre = function () {
        i.triggered = false;
      };
      i.handleCompositionEndPost = function () {
        if (!i.triggered) {
          i.handleContentChange();
        }
        i.triggered = true;
      };
      i.editor = n.editor;
      i.editor.on(editorEventConstants.editorEventTypes.CONTENT_WILL_CHANGE, i.handleContentWillChange, 9999);
      i.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, i.handleContentChange, 9999);
      i.editor.on(editorEventConstants.editorEventTypes.COMPOSITION_END, i.handleCompositionEndPre, -1);
      i.editor.on(editorEventConstants.editorEventTypes.COMPOSITION_END, i.handleCompositionEndPost, 9999);
      return i;
    }
    typescriptHelpers.extendClass(n, e);
    var i = n.prototype;
    i.destroy = function () {
      this.recordPosition = null;
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_WILL_CHANGE, this.handleContentWillChange);
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
    };
    i.checkLineDOM = function (e, n) {
      var i;
      var r = [];
      var o = 0;
      for (; o < n.length; o++) {
        var l = (i = this.editor.getContentState().getZoneState(e)) === null || i === undefined ? undefined : i.getLine(n[o]);
        if (l && this.isLineDirty(l)) {
          r.push(l.index);
          var a = htmlTextMaskUtil.maskElementText(l._node);
          this.editor.log("trace", "[DOMObserver] line is dirty", {
            zoneId: e,
            line: l.index,
            filterDom: a
          });
        }
      }
      if (r.length) {
        this.editor.getContentState()._forceRefresh(e, r);
      }
    };
    i.isLineDirty = function (e) {
      return !!this.isLeavesDirty(e);
    };
    i.isLeavesDirty = function (e) {
      var i = e.getNode();
      var r = (i == null ? undefined : i.querySelector("[" + editorConstantsKeycodes.dataEnter + "]"))?.parentNode;
      if (!r) {
        return true;
      }
      var o = {
        count: 0,
        isDirty: false,
        reason: "",
        dirtyNode: "",
        leafNodes: []
      };
      this.getChildNodesInfo(r, o, 0);
      if (!o.isDirty && o.count !== e.leaves.length) {
        var l = {
          lineState: e.clone()
        };
        this.editor.callAll("_editorLineStateWillRender", l);
        if (o.count !== l.lineState.leaves.length) {
          o.isDirty = true;
          o.reason = "count is not matched";
        }
      }
      if (o.isDirty) {
        try {
          var s = JSON.stringify({
            modelCount: e.leaves.length,
            viewCount: o.count,
            reason: o.reason,
            dirtyNode: o.dirtyNode,
            leafNodes: JSON.stringify(o.leafNodes)
          });
          this.editor.error({
            level: editorConstantsKeycodes.LogLevel.ERROR,
            message: "leaf sibling DOM is dirty",
            extra: s
          });
        } catch (e) {}
      }
      return o.isDirty;
    };
    i.getChildNodesInfo = function (e, n, i) {
      if (e.querySelector(":scope > [" + editorConstantsKeycodes.dataLeaf + "]")) {
        for (var r = 0; r < e.childNodes.length; r++) {
          var o = e.childNodes[r];
          if (!h(o)) {
            if (i === 0) {
              n.isDirty = true;
              n.reason = "unexpected text node";
              n.dirtyNode = elementJsonSerializer.serializeElement(o);
              return;
            }
            continue;
          }
          if (!this.editor._isRenderBrInEmptyLine && o.hasAttribute(editorConstantsKeycodes.dataString) && o.querySelector("br")) {
            n.isDirty = true;
            n.reason = "unexpected br element";
            n.dirtyNode = elementJsonSerializer.serializeElement(o);
          }
          if (o.hasAttribute(editorConstantsKeycodes.dataLeaf)) {
            n.count++;
            n.leafNodes.push(elementJsonSerializer.serializeElement(o));
          } else if (o.hasAttribute(editorConstantsKeycodes.dataInlineWrapper)) {
            this.getChildNodesInfo(o, n, i + 1);
          } else if (!o.hasAttribute(editorConstantsKeycodes.dataVoid)) {
            n.isDirty = true;
            n.reason = "unexpected child node";
            n.dirtyNode = elementJsonSerializer.serializeElement(o);
          }
          if (n.isDirty) {
            return;
          }
        }
      } else if (e.hasAttribute(editorConstantsKeycodes.dataInlineWrapper)) {
        for (var r = 0; r < e.childNodes.length; r++) {
          var o = e.childNodes[r];
          if (h(o)) {
            this.getChildNodesInfo(o, n, i + 1);
          }
        }
      }
    };
    return n;
  }(baseRendererClass.BaseRenderer);
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var autoSpaceEditorRendererPlugin = require("auto-space-editor-renderer-plugin") /*id: 359610*/;
  var docxAutoSpaceCheck = require("docx-auto-space-check") /*id: 47206*/;
  var docxPasteResourcePlugin = require("docx-paste-resource-plugin") /*id: 505247*/;
  var pageResourceRenderer = require("page-resource-renderer") /*id: 528361*/;
  var docxLinkEditorController = require("docx-link-editor-controller") /*id: 881473*/;
  var triggerRendererClass = require("trigger-renderer-class") /*id: 16171*/;
  var autoCapitalizationPlugin = require("auto-capitalization-plugin") /*id: 782204*/;
  function k() {
    let e = [[pageResourceRenderer.PageResourceRenderer], [triggerRendererClass.TriggerRenderer], [editorDeleteAttributeRenderer.DeleteAttrRenderer, {
      attributesInheritFromDelete: ["bold"]
    }], ...autoCapitalizationPlugin.autoCapPlugin(), [docxLinkEditorController.DocxLinkEditorController], [docxPasteResourcePlugin.PasteResourcePlugin]];
    if (docxAutoSpaceCheck.checkDocxAutoSpace()) {
      e.push([autoSpaceEditorRendererPlugin.AutoSpaceRenderer]);
    }
    if (docxFeatureFlags.isMmEnabled()) {
      e.push([f]);
    }
    return e;
  }
  function P() {
    return [docxInlineBlockRenderers.LinkRenderer, docxInlineBlockRenderers.MentionDocRenderer];
  }
  require.d(exports, {
    DocxRenderer: function () {
      return k;
    },
    getEditorPlugins: function () {
      return P;
    }
  });
}