// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerDocxEditorKit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 730751
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var contentStateManager = require("content-state-manager") /*id: 519638*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var mentionSharePanelProvider = require("mention-share-panel-provider") /*id: 868039*/;
  var mentionShareOverlayManager = require("mention-share-overlay-manager") /*id: 249196*/;
  var editorZoneStateExtended = require("editor-zone-state-extended") /*id: 132405*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  var grammarlyClientData = require("grammarly-client-data") /*id: 18674*/;
  var smartCorrectionServiceToken = require("smart-correction-service-token") /*id: 381585*/;
  let E = dependencyInjectionContainer.Provide(smartCorrectionServiceToken.smartCorrectionToken)((n = (c = class {
    get plugin() {
      this._plugin ||= this.editor.pluginManager.getPlugin(grammarlyClientData.grammarlyDataKey);
      return this._plugin;
    }
    handleBlockViewDidMount(e) {
      if (e.isCreatedByPaste) {
        var i;
        if ((i = this.plugin) !== null && i !== undefined) {
          i.checkAll(e.zoneId);
        }
      }
    }
    constructor() {
      var e;
      var i;
      var r;
      var n;
      var o;
      e = "editor";
      if (i = d) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      n = undefined;
      if ((r = typeof (o = function (e, i) {
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
      }(r = "_plugin", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, r, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[r] = n;
      }
    }
  }).prototype, o = "editor", l = [docxEditorKitProviders.editorKitProviderName], a = {}, Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), d = (a = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, o, a), null) : a, c)) || c;
  var buttonTriggerSignalModule = require("button-trigger-signal-module") /*id: 717887*/;
  function _() {
    docxEditorCore.registerProviders([{
      provide: docxEditorKitProviders.contentStateService,
      useFactory: () => new docxEditorKitProviders.ContentStateProvider().contentState
    }, {
      provide: docxEditorKitProviders.editorKitProviderName,
      deps: [docxEditorKitProviders.contentStateService],
      useFactory: e => new docxEditorKitProviders.EditorKitProvider(e).editor
    }, docxEditorKitProviders.TextualDepProvider, E]);
    docxEditorCore.registerSignals([{
      provide: buttonTriggerSignalModule.signalValue,
      useClass: docxEditorCore.SubjectType
    }]);
    docxEditorCore.registerViewExt(mentionSharePanelProvider.mentionProviderName, mentionShareOverlayManager.MentionShareManager);
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(docxEditorKitProviders.textualDepProvider).setModules(docxEditorKitProviders.textualDepTypes.BLOCK_CONTENT, {
        [editorModuleConstants.editorModuleConsts.ContentState]: contentStateManager.ContentStateManager,
        [editorModuleConstants.editorModuleConsts.Range]: activeEditorRange.ActiveEditorRange,
        [editorModuleConstants.editorModuleConsts.ZoneState]: editorZoneStateExtended.ExtendedEditorZoneState
      });
    });
  }
  require.d(exports, {
    registerDocxEditorKit: function () {
      return _;
    }
  });
}