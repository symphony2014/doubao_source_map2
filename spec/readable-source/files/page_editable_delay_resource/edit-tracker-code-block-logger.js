// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'a' to 'docxEditorDependenciesFactory'
// - Resolved require(534133) to 'docx-editor-dependencies-factory'
// - Renamed variable 'l' to 'docxEditorKitProviders'
// - Resolved require(519830) to 'docx-editor-kit-providers'
// - Renamed variable 's' to 'docxEditorRendererConfig'
// - Resolved require(98367) to 'docx-editor-renderer-config'
// - Renamed variable 'c' to 'typescriptHelpers'
// - Resolved require(45459) to 'typescript-helpers'
// - Renamed variable 'd' to 'editorEventConstants'
// - Resolved require(520265) to 'editor-event-constants'
// - Renamed variable 'u' to 'baseRendererClass'
// - Resolved require(999785) to 'base-renderer-class'
// - Renamed variable 'm' to 'docxFeatureFlags'
// - Resolved require(939543) to 'docx-feature-flags'
// - Renamed variable 'v' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'b' to 'contentDeltaUtilityFunctions'
// - Resolved require(348536) to 'content-delta-utility-functions'
// - Renamed variable 'y' to 'diProviderCollectEvent'
// - Resolved require(308105) to 'di-provider-collect-event'
// - Renamed variable 'w' to 'docxPasteResourcePlugin'
// - Resolved require(505247) to 'docx-paste-resource-plugin'
// - Renamed variable 'M' to 'pageResourceRenderer'
// - Resolved require(528361) to 'page-resource-renderer'
// - Renamed variable 'x' to 'docxLinkEditorController'
// - Resolved require(881473) to 'docx-link-editor-controller'
// - Renamed variable 'C' to 'triggerRendererClass'
// - Resolved require(16171) to 'trigger-renderer-class'
// - Renamed variable 'B' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Renamed variable 'S' to 'docCodeBlockDeltaHandler'
// - Resolved require(566957) to 'doc-code-block-delta-handler'
// - Updated imported property 'd' to 'extendClass' (module 45459)
// - Updated imported property 'r' to 'editorEventTypes' (module 520265)
// - Updated imported property 'S' to 'BaseRenderer' (module 999785)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'VB' to 'toNumber' (module 348536)
// - Updated imported property '$Y' to 'isFeatureEnabled' (module 939543)
// - Updated imported property 'V' to 'collectEventName' (module 308105)
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// - Updated imported property 's1' to 'VIEW_TOKEN' (module 135760)
// - Updated imported property 'f3' to 'get' (module 555385)
// - Updated imported property 'QO' to 'textualDepProvider' (module 519830)
// - Updated imported property 'D' to 'createDocxEditorDependencies' (module 534133)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// - Updated imported property 'n' to 'PageResourceRenderer' (module 528361)
// - Updated imported property 'L' to 'TriggerRenderer' (module 16171)
// - Updated imported property 'M' to 'DocxLinkEditorController' (module 881473)
// - Updated imported property 'W' to 'PasteResourcePlugin' (module 505247)
// - Updated imported property 'r' to 'getEditorPlugins' (module 98367)
// - Updated imported property 'X' to 'CodeBlockHandler' (module 566957)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 75256
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxEditorDependenciesFactory = require("docx-editor-dependencies-factory") /*id: 534133*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  var docxEditorRendererConfig = require("docx-editor-renderer-config") /*id: 98367*/;
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  function h() {
    this.log = function (e) {};
    this.loggable = function (e) {
      var r = e.activeZone;
      var i = e.selection;
      return !!r && !!i;
    };
  }
  var p = {
    INPUT: "input",
    RETURN: "return",
    DELETE: "delete",
    UNDO: "undo",
    REDO: "redo",
    PASTE: "paste",
    CUT: "cut"
  };
  var g = [17, 18, 91, 93, 38, 40, 37, 39, 16];
  var f = function (e) {
    function r(r) {
      var i = e.call(this) || this;
      i.name = "EditTracker";
      i.handleKeydown = function (e) {
        if (i.shouldTrack()) {
          if (e.key === "Enter") {
            i.startProfile(p.RETURN);
            return;
          }
          if (e.key === "Backspace") {
            i.startProfile(p.DELETE);
            return;
          }
          if ((e.ctrlKey || e.metaKey) && e.key === "v") {
            i.startProfile(p.PASTE);
            return;
          }
          if ((e.ctrlKey || e.metaKey) && e.key === "x") {
            if (!i.editor.selection.getSelection().isCollapsed()) {
              i.startProfile(p.CUT);
            }
            return;
          }
          if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key === "z") {
            i.startProfile(p.UNDO);
            return;
          }
          if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "z") {
            i.startProfile(p.REDO);
            return;
          }
          if (!(g.indexOf(e.keyCode) > -1)) {
            i.startProfile(p.INPUT);
          }
        }
      };
      i.startProfile = function (e) {
        var r = performance.now();
        var n = i.editor.getContentState().getActiveZone();
        if (n) {
          var o = n.getZoneId();
          var a = n.getModelText().length;
          var l = n.lines.length;
          window.requestAnimationFrame(function () {
            var n = performance.now();
            i.track({
              zoneId: o,
              editType: e,
              zoneTextLength: a,
              zoneLinesLength: l,
              costTime: n - r
            });
          });
        }
      };
      var n = r.editor;
      var o = r.logger;
      i.editor = n;
      i.logger = o || new h();
      i.bindEvents();
      return i;
    }
    typescriptHelpers.extendClass(r, e);
    var i = r.prototype;
    i.destroy = function () {
      this.unbindEvents();
    };
    i.bindEvents = function () {
      this.editor.on(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeydown, 0);
    };
    i.unbindEvents = function () {
      this.editor.off(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeydown);
    };
    i.shouldTrack = function () {
      if (!this.editor.isFocus()) {
        return false;
      }
      var e = this.editor.getContentState().getActiveZone();
      if (!e) {
        return false;
      }
      var r = this.editor.selection.getSelection();
      return !!this.logger.loggable({
        selection: r,
        activeZone: e
      });
    };
    i.track = function (e) {
      var r = e.zoneId;
      var i = e.editType;
      var n = e.zoneTextLength;
      var o = e.zoneLinesLength;
      var a = e.costTime;
      this.logger.log({
        zoneId: r,
        editType: i,
        zoneTextLength: n,
        zoneLinesLength: o,
        costTime: a
      });
    };
    r.KEY = "EditTracker";
    return r;
  }(baseRendererClass.BaseRenderer);
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  function k(e, r, i) {
    var n;
    if ((r = typeof (n = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, r || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, r, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = i;
    }
    return e;
  }
  let I = [docBlockTypeConstants.blockTypeConstants.CODE];
  class E {
    constructor(e) {
      k(this, "blockManager", undefined);
      k(this, "loggable", e => {
        let {
          activeZone: r
        } = e;
        let i = r.getZoneId();
        let n = this.blockManager.getBlockModelByBlockId(contentDeltaUtilityFunctions.toNumber(i));
        return !!n && !!I.includes(n.type);
      });
      k(this, "log", e => {
        let {
          zoneId: r,
          editType: i,
          zoneTextLength: n,
          zoneLinesLength: o,
          costTime: a
        } = e;
        let l = this.blockManager.getBlockModelByBlockId(contentDeltaUtilityFunctions.toNumber(r));
        let {
          zoneState: s
        } = l;
        if (s && l && l.type === docBlockTypeConstants.blockTypeConstants.CODE) {
          let e = docxFeatureFlags.isFeatureEnabled() ? "editor_kit" : "docx";
          this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_docx_code_block_edit_dev", {
            edit_type: i,
            code_text_length: n,
            code_lines_length: o,
            cost_time: a,
            version: e
          });
        }
      });
      let {
        blockManager: r
      } = e;
      this.blockManager = r;
    }
  }
  var docxPasteResourcePlugin = require("docx-paste-resource-plugin") /*id: 505247*/;
  var pageResourceRenderer = require("page-resource-renderer") /*id: 528361*/;
  var docxLinkEditorController = require("docx-link-editor-controller") /*id: 881473*/;
  var triggerRendererClass = require("trigger-renderer-class") /*id: 16171*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var docCodeBlockDeltaHandler = require("doc-code-block-delta-handler") /*id: 566957*/;
  function T() {
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(docxEditorKitProviders.textualDepProvider);
      let r = docxEditorDependenciesFactory.createDocxEditorDependencies();
      let i = function () {
        let e = new E({
          blockManager: dependencyInjectionContainer.get(blockManagerToken.blockManagerToken)
        });
        return [[pageResourceRenderer.PageResourceRenderer], [triggerRendererClass.TriggerRenderer], [docxLinkEditorController.DocxLinkEditorController], [docxPasteResourcePlugin.PasteResourcePlugin], [f, {
          logger: e
        }]];
      }();
      let c = docxEditorRendererConfig.getEditorPlugins();
      let d = i.map(e => {
        let [i, n] = e;
        return [i, {
          ...(n || {}),
          ...r
        }];
      });
      e.appendPlugins(docCodeBlockDeltaHandler.CodeBlockHandler.type, d);
      e.removePlugins(docCodeBlockDeltaHandler.CodeBlockHandler.type, c);
      dependencyInjectionContainer.get(docxEditorCore.VIEW_TOKEN).requestBlockViewsRenderByType(docCodeBlockDeltaHandler.CodeBlockHandler.type);
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return T;
    }
  });
}