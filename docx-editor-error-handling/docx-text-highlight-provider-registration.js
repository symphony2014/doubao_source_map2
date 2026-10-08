// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerTextHighlightProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 346133
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var getTextHighlightProviderName = require("get-text-highlight-provider-name") /*id: 318467*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var h = reactLoadableComponent;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var g = e => {
    let [i, r] = reactCoreLibraryReexport.useState([]);
    let n = reactCoreLibraryReexport.useCallback(() => {
      r(e.getVisibleLayerDatas());
    }, [e, r]);
    reactCoreLibraryReexport.useEffect(() => {
      e.onDrew(n);
      return () => {
        e.offDrew(n);
      };
    }, [e, n]);
    return i;
  };
  var localTextHighlightProvider = require("local-text-highlight-provider") /*id: 790796*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = h({
    loader: () => require.e("find-replace-highlight") /*id: 82986*/.then(require.bind(require, "find-replace-highlight-renderer") /*id: 311241*/),
    loading: () => null
  });
  class b extends editorContextFacade.EditorContextFacade {
    getAfterSlot() {
      return () => {
        let {
          selectionAPI: e,
          blockManager: i,
          rect: r,
          eventEmitter: n
        } = this;
        let o = i.editorAPI.getService(localTextHighlightProvider.localHighlightToken);
        let l = g(o);
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: l.map(l => {
            let {
              name: s,
              ranges: a,
              version: c
            } = l;
            return reactJsxRuntimeCoreReexport.jsx(v, {
              name: s,
              ranges: a,
              version: c,
              textHighlight: o,
              selectionAPI: e,
              blockManager: i,
              rect: r,
              eventEmitter: n
            }, s);
          })
        });
      };
    }
  }
  var virtualListConstants = require("virtual-list-constants") /*id: 951136*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var textHighlightConstants = require("text-highlight-constants") /*id: 184403*/;
  function M(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function T(e, i, r) {
    var n;
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
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  function w(e, i, r, n, o) {
    var l = {};
    Object.keys(n).forEach(function (e) {
      l[e] = n[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = r.slice().reverse().reduce(function (r, n) {
      return n(e, i, r) || r;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  let B = dependencyInjectionContainer.Provide(localTextHighlightProvider.localHighlightToken)((o = w((n = class {
    getVisibleLayerDatas() {
      let e = [];
      let i = this.layerMap.values();
      let r = i.next();
      while (!r.done) {
        let {
          ranges: n
        } = r.value;
        if (n.length) {
          e.push({
            ...r.value,
            ranges: n
          });
        }
        r = i.next();
      }
      return e;
    }
    onDrew(e) {
      if (this.subMap.has(e)) {
        throw Error("[LocalTextHighlight] Duplicate registration event!");
      }
      let i = this.onDrew$.subscribe(e);
      this.subMap.set(e, i);
    }
    offDrew(e) {
      let i = this.subMap.get(e);
      if (i != null) {
        i.unsubscribe();
      }
    }
    init() {
      this.isDestroyed = false;
      this.blockManager.addListener(renderEventConstants.viewportChanged, this.handleViewportChanged);
      this.blockManager.eventEmitter.on(textHighlightConstants.HighlightActions.DRAW, this.draw);
      this.blockManager.eventEmitter.on(textHighlightConstants.HighlightActions.CLEAR, this.clear);
      this.textEditor.on(virtualListConstants.virtualListEvent, this.handleTextualInnerViewportChange);
    }
    destroy() {
      this.isDestroyed = true;
      this.layerMap.clear();
      this.subMap.clear();
      this.onDrew$.unsubscribe();
      this.reflush.cancel();
      this.blockManager.removeListener(renderEventConstants.viewportChanged, this.handleViewportChanged);
      this.blockManager.eventEmitter.off(textHighlightConstants.HighlightActions.DRAW, this.draw);
      this.blockManager.eventEmitter.off(textHighlightConstants.HighlightActions.CLEAR, this.clear);
      this.textEditor.off(virtualListConstants.virtualListEvent, this.handleTextualInnerViewportChange);
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor() {
      M(this, "blockManager", o, this);
      M(this, "textEditor", l, this);
      T(this, "layerMap", new Map());
      T(this, "onDrew$", new observableSubjectClass.Subject());
      T(this, "subMap", new Map());
      T(this, "isDestroyed", false);
      T(this, "draw", (e, i) => {
        if (this.isDestroyed) {
          return;
        }
        let r = this.layerMap.get(e);
        let n = i;
        if (e !== textHighlightConstants.DocxFeatureKeys.DOCX_FINDRE_PLACE) {
          n = i.filter(e => {
            let {
              match: {
                blockId: i
              }
            } = e;
            let r = this.blockManager.getBlockModelByBlockIdNotCheck(i);
            if (r == null) {
              return undefined;
            } else {
              return r.isTextBlock;
            }
          });
        }
        n.length;
        i.length;
        if (!deepEqualUtil_1.deepEqual(r == null ? undefined : r.ranges, n)) {
          this.layerMap.set(e, {
            name: e,
            ranges: n,
            version: r ? r.version + 1 : 1
          });
          this.onDrew$.next();
        }
      });
      T(this, "reflush", debounceUtilWrapper.createDebounce(() => {
        if (!this.isDestroyed) {
          for (let [e, i] of this.layerMap.entries()) {
            this.layerMap.set(e, {
              ...i,
              version: i.version + 1
            });
          }
          this.onDrew$.next();
        }
      }, 16));
      T(this, "clear", e => {
        this.draw(e, []);
      });
      T(this, "handleViewportChanged", e => {
        this.reflush();
      });
      T(this, "handleTextualInnerViewportChange", e => {
        this.reflush();
      });
    }
  }).prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), l = w(n.prototype, "textEditor", [docxEditorKitProviders.editorKitProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), n)) || n;
  function P() {
    docxEditorCore.registerProviders([B]);
    docxEditorCore.registerViewExt(getTextHighlightProviderName.getProviderName, b);
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(localTextHighlightProvider.localHighlightToken).init();
    });
  }
  require.d(exports, {
    registerTextHighlightProvider: function () {
      return P;
    }
  });
}