// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HH' to 'TextualDepProvider'
// - Renamed export 'HB' to 'ContentStateProvider'
// - Renamed export 'IV' to 'contentStateService'
// - Renamed export 'mb' to 'textualDepTypes'
// - Renamed export 'hm' to 'EditorKitProvider'
// - Renamed export 'QO' to 'textualDepProvider'
// - Renamed export 'lh' to 'editorKitProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 519830
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var contentStateServiceProvider = require("content-state-service-provider") /*id: 280621*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var richTextSchemaResolverFactory = require("rich-text-schema-resolver-factory") /*id: 873026*/;
  var extendedContentManager = require("extended-content-manager") /*id: 479288*/;
  let g = dependencyInjectionContainer.Provide(contentStateServiceProvider.contentStateService)(o = class {
    get contentState() {
      return this._contentState;
    }
    constructor() {
      var e;
      var n;
      var r;
      n = undefined;
      if ((e = typeof (r = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var o = r.call(e, n || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(e = "_contentState", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = n;
      }
      let o = new deltaSetCore.DeltaSet().add(zeroConstantModule_1.versionValue, new contentStructureDelta.ContentDelta().insertEnter());
      this._contentState = new extendedContentManager.ExtendedContentManager({
        deltaSet: o,
        schema: richTextSchemaResolverFactory.richTextSchemaResolver,
        modulesContainer: editorModuleConstantsConfig.editorModuleManager
      });
    }
  }) || o;
  var editorKitProviderName = require("editor-kit-provider-name") /*id: 799939*/;
  var editorCoreClass = require("editor-core-class") /*id: 137381*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxCodeblockConfigConstants = require("docx-codeblock-config-constants") /*id: 587865*/;
  var docxVirtualLayoutConfig = require("docx-virtual-layout-config") /*id: 173628*/;
  let C = dependencyInjectionContainer.Provide(editorKitProviderName.editorKitProviderName)(i = class {
    get editor() {
      return this._e;
    }
    constructor(e, n) {
      var r;
      var o;
      var i;
      this.contentState = e;
      o = undefined;
      if ((r = typeof (i = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var o = r.call(e, n || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(r = "_e", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, r, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[r] = o;
      }
      let l = new deltaSetCore.DeltaSet();
      this._e = new editorCoreClass.Editor({
        initData: l,
        editable: false,
        copyable: false,
        businessKey: "docx",
        contentState: this.contentState,
        debounceFlush: 0,
        modules: editorModuleConstantsConfig.editorModuleRegistry,
        listenEvents: docxCodeblockConfigConstants.allowedEventNames,
        schema: richTextSchemaResolverFactory.richTextSchemaResolver,
        followSelectionExclusively: true,
        reactDOMServerExternal: n,
        onLog: function () {
          var e = arguments.length;
          var n = Array(e);
          var r = 0;
          for (; r < e; r++) {
            n[r] = arguments[r];
          }
          if (n[0] === "trace") {
            try {
              docxEventCollector.docEventCollector("doc_bug_track_dev", {
                action: "editor_kit_trace",
                info: JSON.stringify(n.slice(1))
              });
            } catch {}
          }
        },
        fgMap: {
          isEditorKitDirtDOMRefreshEnabled: docxFeatureFlags.isMmEnabled(),
          enableVirtualMemoryOptimize: docxVirtualLayoutConfig.isLayoutEnabled()
        }
      });
    }
  }) || i;
  var docxTextualDependencyConsts = require("docx-textual-dependency-consts") /*id: 698399*/;
  function w(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  let I = dependencyInjectionContainer.Provide(docxTextualDependencyConsts.textualDepProvider)(l = class {
    getModules(e) {
      let n = this.typeToModules.get(e);
      if (!n) {
        throw Error(`editor-kit modules do not exist, type: ${e}`);
      }
      return n;
    }
    setModules(e, n) {
      this.typeToModules.set(e, n);
    }
    getPlugins(e) {
      return this.blockToPluginItem.get(e) || [];
    }
    setPlugins(e, n) {
      this.blockToPluginItem.set(e, n);
    }
    appendPlugins(e, n) {
      this.blockToPluginItem.set(e, this.getPlugins(e).concat(n));
    }
    removePlugins(e, n) {
      this.blockToPluginItem.set(e, this.getPlugins(e).filter(e => {
        let [r] = e;
        return !n.includes(r);
      }));
    }
    constructor() {
      w(this, "typeToModules", new Map());
      w(this, "blockToPluginItem", new Map());
    }
  }) || l;
  require.d(exports, {
    TextualDepProvider: function () {
      return I;
    },
    ContentStateProvider: function () {
      return g;
    },
    contentStateService: function () {
      return contentStateServiceProvider.contentStateService;
    },
    textualDepTypes: function () {
      return docxTextualDependencyConsts.textualDepTypes;
    },
    EditorKitProvider: function () {
      return C;
    },
    textualDepProvider: function () {
      return docxTextualDependencyConsts.textualDepProvider;
    },
    editorKitProviderName: function () {
      return editorKitProviderName.editorKitProviderName;
    }
  });
}