// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ol' to 'InlineBlockRenderer'
// - Renamed export 'Qj' to 'TextRevisionRenderer'
// - Renamed export 'Fk' to 'TripleClickHandler'
// - Renamed export 'rU' to 'LinkRenderer'
// - Renamed export 'sP' to 'TextHighlightBackgroundRenderer'
// - Renamed export 'O5' to 'MentionDocRenderer'
// - Renamed export 'Bw' to 'TextHighlightRenderer'
// - Renamed export 'hs' to 'TextCommentRenderer'
// - Renamed export 'CQ' to 'EquationRendererClass'
// - Renamed export 'Fc' to 'NonEmptyLineDecorator'
// - Renamed export 'DB' to 'TodoLineThroughRenderer'
// - Renamed export 'Il' to 'TextRevisionPlugin'
// - Renamed export 'P4' to 'CodeHighlightRenderer'
// - Renamed export 'RA' to 'translatePluginMgr'
// - Renamed export 'S2' to 'SelectionRenderer'
// - Renamed export 'Rd' to 'CollabConnector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 381474
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var h;
  var p;
  var f;
  var v;
  var g;
  var b;
  var m;
  var y;
  var k;
  var E;
  var S;
  var T;
  var I;
  var C;
  var P;
  var A;
  var O;
  var docxLinkRenderer = require("docx-link-renderer") /*id: 829614*/;
  var todoLineThroughRenderer = require("todo-line-through-renderer") /*id: 544876*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var reactDomContextDecorator = require("react-dom-context-decorator") /*id: 955275*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var priorityConstants = require("priority-constants") /*id: 219839*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var primitiveConverters = require("primitive-converters") /*id: 383327*/;
  function W(e) {
    let {
      blockManager: i,
      recordId: n,
      operationZoneId: r
    } = e;
    let {
      structService: o
    } = i;
    let l = reactCoreLibraryReexport.useRef(n);
    let s = reactCoreLibraryReexport.useRef(r);
    let [a, c] = reactCoreLibraryReexport.useState(() => {
      let e = o.getBlockStructByBlockId(primitiveConverters.toNumber(r));
      if (n && e) {
        return o.createInlineBlockStruct(n, e);
      } else {
        return null;
      }
    });
    reactCoreLibraryReexport.useEffect(() => () => {
      if (a) {
        o.destroyInlineBlockStruct(a.id);
      }
    }, [a, o]);
    reactCoreLibraryReexport.useEffect(() => {
      if (l.current === n && s.current === r) {
        return;
      }
      l.current = n;
      s.current = r;
      let e = o.getBlockStructByBlockId(primitiveConverters.toNumber(r));
      c(n && e ? o.createInlineBlockStruct(n, e) : null);
    }, [n, r, o]);
    if (a) {
      return i.viewService.render(a.id, {
        displaymode: "inline"
      });
    } else {
      return null;
    }
  }
  var iosEditorLeafTextWrapper = require("ios-editor-leaf-text-wrapper") /*id: 575135*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function Z(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  S = editorPluginManager.createPriority(priorityConstants.priorityConstants.BEFORE_DEFAULT);
  T = reactDomContextDecorator.withContextConsumer();
  I = class e extends baseRendererClass.BaseRenderer {
    match(i) {
      return i === e.KEY;
    }
    render(i) {
      let r = i.attributes[e.KEY];
      let o = i.op.insert?.length;
      if (r) {
        i.key = r;
        return reactJsxRuntimeCoreReexport.jsx(iosEditorLeafTextWrapper.IosLeafTextWrapper, {
          selectionAPI: this.selectionAPI,
          className: "embed-inline-block",
          "data-embed-inlineblock": true,
          length: o,
          children: reactJsxRuntimeCoreReexport.jsx(W, {
            recordId: r,
            operationZoneId: i.zoneId,
            blockManager: this.blockManager
          })
        });
      }
    }
    constructor(e) {
      super();
      Z(this, "blockManager", undefined);
      Z(this, "selectionAPI", undefined);
      this.blockManager = e.blockManager;
      this.selectionAPI = e.blockManager.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey);
    }
  };
  Z(I, "init", false);
  Z(I, "KEY", displayTypeConstants.displayInlineBlock);
  r = I.prototype;
  o = "render";
  l = [S, T];
  s = Object.getOwnPropertyDescriptor(I.prototype, "render");
  a = I.prototype;
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
    return i(r, o, e) || e;
  }, c);
  if (a && c.initializer !== undefined) {
    c.value = c.initializer ? c.initializer.call(a) : undefined;
    c.initializer = undefined;
  }
  if (c.initializer === undefined) {
    Object.defineProperty(r, o, c);
  }
  let z = I;
  var docxMentionDocRenderer = require("docx-mention-doc-renderer") /*id: 957981*/;
  var docxTextCommentRenderer = require("docx-text-comment-renderer") /*id: 192686*/;
  var textHighlightThemeRenderer = require("text-highlight-theme-renderer") /*id: 853585*/;
  var backgroundColorRenderer = require("background-color-renderer") /*id: 43995*/;
  var uiThemeColorResolver = require("ui-theme-color-resolver") /*id: 410762*/;
  var uiThemeConstants = require("ui-theme-constants") /*id: 541237*/;
  var docCommentUtils = require("doc-comment-utils") /*id: 315488*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var textHighlightConstant = require("text-highlight-constant") /*id: 103599*/;
  function q(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  class ee extends backgroundColorRenderer.BackgroundColor {
    render(e) {
      let {
        attributes: i,
        children: n,
        zoneId: r
      } = e;
      let o = i[this.attributeKey];
      let l = i[docxTextCommentRenderer.inlineCodeConstant];
      let s = o && uiThemeColorResolver.getThemeClassConfig(uiThemeConstants.basicTheme.Background, o);
      let a = new Set(["text-highlight-background"]);
      if (s) {
        a.add(`text-highlight-background-${s}`);
      }
      let c = this.blockManager.getBlockModelByBlockId(contentDeltaUtilityFunctions.toNumber(r));
      if (c && l && !docCommentUtils.isCodeBlock(c)) {
        a.add("text-highlight-background-inline-code-wrapper");
      }
      e.class += ` ${Array.from(a).join(" ")}`;
      return n;
    }
    constructor(e) {
      super({
        ...e,
        customizedAttributeKey: ee.KEY
      });
      q(this, "blockManager", undefined);
      this.blockManager = e.blockManager;
    }
  }
  q(ee, "KEY", textHighlightConstant.textHighlightBg);
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var docxEditorLineEditableManager = require("docx-editor-line-editable-manager") /*id: 996925*/;
  var editorDataTextUtils = require("editor-data-text-utils") /*id: 606734*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  function ep(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  C = editorPluginManager.createPriority(priorityConstants.priorityConstants.LATEST);
  d = (P = class {
    editorWillApplyChange(e) {
      let {
        deltaSet: i,
        options: n
      } = e;
      if (!docxEditorLineEditableManager.LineEditableManager.lineEditable) {
        return i;
      }
      let {
        isRemote: r,
        extra: o = {
          replaceAll: false
        },
        type: l
      } = n;
      if (l && editorModuleConstantsConfig.mentionLinkOperations.includes(l)) {
        return i;
      }
      for (let e of Object.keys(i.deltas)) {
        let r = this.blockManager.getBlockModelByBlockId(contentDeltaUtilityFunctions.toNumber(e));
        if (contentDeltaUtilityFunctions.S(r.record.snapshot.text)) {
          o.replaceAll = true;
          n.extra = o;
          return i;
        }
      }
      let {
        shouldCollab: s = true
      } = o;
      if (r || !s) {
        return i;
      }
      let a = Object.keys(i.deltas)[0];
      if (!a) {
        return i;
      }
      let c = this.blockManager.getBlockModelByBlockId(contentDeltaUtilityFunctions.toNumber(a));
      let {
        record: d
      } = c;
      let u = flowSyncDeltaOperations.buildNumToAttribMap(i, {
        filterLocalAttributes: true
      });
      let h = new deltaSetCore.DeltaSet({
        [editorModuleConstantsConfig.defaultVersion]: new contentStructureDelta.ContentDelta({
          zoneId: editorModuleConstantsConfig.defaultVersion
        }).concat(i.get(a))
      });
      let p = this.getTexts(c);
      let f = d.snapshot.text.initialAttributedTexts.text[editorModuleConstantsConfig.defaultVersion];
      if (this.getText(c) !== f) {
        return i;
      }
      if (flowSyncDeltaOperations.hasCarriageReturn(f)) {
        p = {
          [editorModuleConstantsConfig.defaultVersion]: f
        };
      }
      let v = flowSyncDeltaOperations.deltaSetToChangeset(h, d, {
        apool: u,
        zone_changesets: p,
        toChangeSetOptions: {
          filterLocalAttributes: true
        }
      });
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "collab_will_apply",
        info: JSON.stringify({
          id: docxUtilityHelpers.maskSensitiveData(d.id),
          content: this.getText(c).length,
          delta: flowSyncDeltaOperations.formatOpsForDisplay(i),
          snapshot: f.length,
          cs: flowSyncDeltaOperations.escapeDollarSigns(v.zone_changesets[editorModuleConstantsConfig.defaultVersion]),
          attr: flowSyncDeltaOperations.formatAttribsToString(v.apool.numToAttrib)
        })
      });
      o.easysyncData = v;
      n.extra = o;
      return i;
    }
    getClientVars(e) {
      return editorDataTextUtils.getAttributedTexts(contentDeltaUtilityFunctions.k(e));
    }
    getOriginText(e) {
      return e.zoneState.getModelText();
    }
    getText(e) {
      let i = this.getOriginText(e);
      return i.substr(0, i.length - 1);
    }
    getTexts(e) {
      let i = {};
      i[editorModuleConstantsConfig.defaultVersion] = this.getText(e);
      return i;
    }
    destroy() {
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
    }
    constructor(e) {
      ep(this, "name", editorModuleConstantsConfig.collabConnectorName);
      ep(this, "editor", undefined);
      ep(this, "blockManager", undefined);
      ep(this, "handleContentChange", e => {
        var n;
        let {
          options: r,
          changes: o
        } = e;
        let l = Object.keys(o)[0];
        if (!l) {
          return;
        }
        let s = contentDeltaUtilityFunctions.toNumber(l);
        let a = this.blockManager.getBlockModelByBlockId(s);
        let c = this.getOriginText(a).length;
        if (a && c <= 0) {
          this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
            action: "contentState_length_error",
            info: JSON.stringify({
              id: docxUtilityHelpers.maskSensitiveData(a.record.id),
              snapshot: a.record.snapshot.text.initialAttributedTexts.text[0].length,
              content: c
            })
          });
        }
        let {
          type: d = "onApplyChange",
          isRemote: u,
          extra: h = {}
        } = r;
        let {
          path: p = ["text"],
          op: f,
          shouldCollab: v = true,
          replaceAll: g = false,
          easysyncData: b
        } = h;
        if (u || v === false) {
          return;
        }
        let m = this.blockManager.getRecordByBlockId(s)?.id;
        if (!m) {
          return;
        }
        let y = (n = this.editor.getContentState().getZoneState(l)) === null || n === undefined ? undefined : n.getContent(true);
        if (!y) {
          return;
        }
        let k = new deltaSetCore.DeltaSet({
          [editorModuleConstantsConfig.defaultVersion]: {
            zoneId: editorModuleConstantsConfig.defaultVersion,
            ops: y.ops,
            zoneType: y.zoneType
          }
        });
        let E = g;
        let S = contentDeltaUtilityFunctions.w(r);
        if (syncUrlBlockUtils.isSyncingActive() && a.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE && a.isNeedAddSnapshotText) {
          if (a != null) {
            a.revertOriginValueBeforeTransaction();
          }
          E = true;
        }
        if (!E && b) {
          let e = this.blockManager.getBlockModelByBlockId(s);
          let i = e.record.snapshot.text.initialAttributedTexts.text[editorModuleConstantsConfig.defaultVersion];
          this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
            action: "collab_content_change",
            info: JSON.stringify({
              id: docxUtilityHelpers.maskSensitiveData(m),
              snapshot: i.length,
              content: this.getText(e).length
            })
          });
          if (f) {
            f.edit(m, p, b);
          } else {
            this.blockManager.applyTransaction(d, e => e.edit(m, p, b), {
              ...r,
              ...S,
              from: collaborativeEditingFlowSyncModule.kq.LOCAL
            });
          }
          return;
        }
        if (f) {
          f.replace(m, p, this.getClientVars(k));
        } else {
          let e = this.getClientVars(k);
          this.blockManager.applyTransaction(d, i => i.replace(m, p, e), {
            ...r,
            ...S,
            from: collaborativeEditingFlowSyncModule.kq.LOCAL
          });
        }
      });
      let {
        blockManager: i,
        editor: n
      } = e;
      this.editor = n;
      this.blockManager = i;
      this.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
    }
  }).prototype;
  u = "editorWillApplyChange";
  h = [C];
  p = Object.getOwnPropertyDescriptor(P.prototype, "editorWillApplyChange");
  f = P.prototype;
  v = {};
  Object.keys(p).forEach(function (e) {
    v[e] = p[e];
  });
  v.enumerable = !!v.enumerable;
  v.configurable = !!v.configurable;
  if ("value" in v || v.initializer) {
    v.writable = true;
  }
  v = h.slice().reverse().reduce(function (e, i) {
    return i(d, u, e) || e;
  }, v);
  if (f && v.initializer !== undefined) {
    v.value = v.initializer ? v.initializer.call(f) : undefined;
    v.initializer = undefined;
  }
  if (v.initializer === undefined) {
    Object.defineProperty(d, u, v);
  }
  let ef = P;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var safariSelectionManager = require("safari-selection-manager") /*id: 441280*/;
  function em(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  let {
    PAINT: ey,
    SELECTION_CHANGE: ek
  } = editorEventConstants.editorEventTypes;
  new safariSelectionManager.SelectionManager();
  let eE = false;
  class eS extends baseRendererClass.BaseRenderer {
    destroy() {
      this.props.editor.off(ey, this.handleEditorPaint);
      this.props.editor.off(ek, this.handleEditorSelectionChange);
    }
    constructor(e) {
      super();
      this.props = e;
      em(this, "handleEditorPaint", e => {
        let {
          zoneId: i
        } = e;
        let {
          selectionAPI: n
        } = this.props;
        if (!n.isTextSelectionAcrossBlocks() || !n.isFocus() || n.isSelecting()) {
          return;
        }
        let r = contentDeltaUtilityFunctions.toNumber(i);
        if (n.getSelectedBlockIfInSelection(r)) {
          this.props.selectionAPI.updateBrowserSelection();
        }
      });
      em(this, "rangeToSelection", e => {
        let i = e.toPosition();
        return {
          id: contentDeltaUtilityFunctions.toNumber(i.zoneId),
          type: docxBlockSelectionHandler_1.blockTypes.TEXT,
          selection: {
            start: i.start,
            end: i.start + i.len
          }
        };
      });
      em(this, "handleEditorSelectionChange", e => {
        let {
          props: i
        } = this;
        let {
          selectionAPI: n
        } = i;
        let r = n.getSelection();
        if (!n.isSelecting() || !n.isBlockSelection(r)) {
          this.handleTextSelectionChangeByRemote(e, r);
        }
      });
      em(this, "handleTextSelectionChangeByRemote", (e, i) => {
        let {
          selectionAPI: r,
          editor: o
        } = this.props;
        if (!docxFeatureFlags.isPiEnabled() || !r.isFocus() || r.isSelecting() || eE) {
          return;
        }
        let l = o.getContentState().contentApplyRuntime.currentRuntime;
        if ((l == null ? undefined : l.options.extra?.from) === collaborativeEditingFlowSyncModule.kq.REMOTE) {
          eE = true;
          let n = new Map();
          let o = {
            origin: JSON.stringify(i),
            transformed: ""
          };
          e.currentRanges.forEach(e => {
            let i = this.rangeToSelection(e);
            n.set(i.id, i);
          });
          let l = false;
          i.forEach(e => {
            if (n.has(e.id)) {
              let o = n.get(e.id);
              if (o.selection.start !== e.selection?.start || o.selection.end !== e.selection?.end) {
                l = true;
                e.selection = o.selection;
              }
            }
          });
          if (l) {
            r.setSelection(i, {
              source: docxBlockSelectionHandler_1.commandTypes.TextSelection,
              syncBrowser: false
            });
            o.transformed = JSON.stringify(i);
            this.props.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_selection_follow_dev", {
              from: "text",
              info: JSON.stringify(o)
            });
          }
          eE = false;
        }
      });
      e.editor.on(ey, this.handleEditorPaint);
      e.editor.on(ek, this.handleEditorSelectionChange);
    }
  }
  var codeBlockHighlightjsConstants = require("code-block-highlightjs-constants") /*id: 433332*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var eC = classnamesUtils;
  function eP(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  class eA extends baseRendererClass.BaseRenderer {
    match(e) {
      return e === eA.KEY;
    }
    render(e) {
      e.class = eC(e.class, e.attributes[codeBlockHighlightjsConstants.clientSideHighlightFlag]);
      return e.children;
    }
    constructor(...e) {
      super(...e);
      eP(this, "name", "CodeHighlight");
    }
  }
  function eO(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  eP(eA, "KEY", codeBlockHighlightjsConstants.clientSideHighlightFlag);
  let eB = "non-empty";
  class ex extends baseRendererClass.BaseRenderer {
    bindEvents() {
      this.editor.on(editorEventConstants.editorEventTypes.COMPOSITION_START, this.handleCompositionStart);
      this.editor.on(editorEventConstants.editorEventTypes.COMPOSITION_END, this.handleCompositionEnd);
      this.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
    }
    unBindEvents() {
      this.editor.off(editorEventConstants.editorEventTypes.COMPOSITION_START, this.handleCompositionStart);
      this.editor.off(editorEventConstants.editorEventTypes.COMPOSITION_END, this.handleCompositionEnd);
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
    }
    destroy() {
      this.unBindEvents();
    }
    constructor({
      editor: e
    }) {
      super();
      eO(this, "editor", undefined);
      eO(this, "handleCompositionStart", () => {
        let e = this.editor.getContentState().getActiveZone();
        if (e.isEmpty()) {
          var i;
          if ((i = e._node) !== null && i !== undefined) {
            i.classList.add(eB);
          }
        }
      });
      eO(this, "handleCompositionEnd", () => {
        let e = this.editor.getContentState().getActiveZone();
        if (e.isEmpty()) {
          var i;
          if ((i = e._node) !== null && i !== undefined) {
            i.classList.remove(eB);
          }
        }
      });
      eO(this, "handleContentChange", e => {
        Object.keys(e.changes).forEach(e => {
          var i;
          var n;
          let r = this.editor.getContentState().getZoneState(e);
          if (r) {
            if (r.isEmpty()) {
              if ((i = r._node) !== null && i !== undefined) {
                i.classList.remove(eB);
              }
            } else if ((n = r._node) !== null && n !== undefined) {
              n.classList.add(eB);
            }
          }
        });
      });
      this.editor = e;
      this.bindEvents();
    }
  }
  var docxEquationBlockRenderer = require("docx-equation-block-renderer") /*id: 541234*/;
  var docxReminderConstants = require("docx-reminder-constants") /*id: 770772*/;
  var docxBlockUtils_2 = require("docx-block-utils_2") /*id: 239669*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  function eN(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  class ew extends baseRendererClass.BaseRenderer {
    destroy() {
      this.unBindEvents();
    }
    bindEvents() {
      this.editor.on("click", this.tripleClick, 999);
    }
    unBindEvents() {
      this.editor.off("click", this.tripleClick);
    }
    constructor(e) {
      super();
      eN(this, "name", "docx-triple-click");
      eN(this, "editor", undefined);
      eN(this, "selectionAPI", undefined);
      eN(this, "blockManager", undefined);
      eN(this, "tripleClick", e => {
        if (e && !(e.detail < 3) && e.target instanceof Element && (e.target.closest(`.${inlineComponentFacade.containerClass}`) || e.target.closest(`.${docxReminderConstants.componentName}`))) {
          let i = docxBlockUtils_2.getBlockIdFromNode(e.target);
          if (!i) {
            return;
          }
          let n = this.blockManager.getBlockViewByBlockIdNotCheck(i);
          if (n && docBlockTypeConstants.agendaCodeTypes.includes(n.type)) {
            this.selectionAPI.setSelection([{
              id: i,
              type: docxBlockSelectionHandler_1.blockTypes.TEXT,
              selection: {
                start: 0,
                end: 0
              }
            }]);
          }
        }
      });
      this.editor = e.editor;
      this.selectionAPI = e.selectionAPI;
      this.blockManager = e.blockManager;
      this.bindEvents();
    }
  }
  var selectionHighlightRenderer = require("selection-highlight-renderer") /*id: 527546*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var editorInputHandler = require("editor-input-handler") /*id: 142590*/;
  var editorPositionClass = require("editor-position-class") /*id: 77106*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  function eH(e, i = () => true) {
    return Object.entries(e).reduce((n, r) => {
      let [o, l] = r;
      if ((o.startsWith(editorRevisionConstants.revisionIdString) || o.startsWith(editorRevisionConstants.revisionIdPrefix)) && l) {
        let r = JSON.parse(l);
        if ((!n || r.createTime > JSON.parse(e[n]).createTime) && i(r)) {
          return o;
        }
      }
      return n;
    }, "");
  }
  var editorRevisionOperationsHelper = require("editor-revision-operations-helper") /*id: 882925*/;
  var editorRevisionOperations = require("editor-revision-operations") /*id: 907135*/;
  var editorRevisionSelectionUtils = require("editor-revision-selection-utils") /*id: 421120*/;
  var editorRevisionDeleteOperations = require("editor-revision-delete-operations") /*id: 642450*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorRevisionAddHandler = require("editor-revision-add-handler") /*id: 856858*/;
  var multipleSelectionConstants = require("multiple-selection-constants") /*id: 512848*/;
  var textInsertionAndSelectionHandler = require("text-insertion-and-selection-handler") /*id: 829563*/;
  var docColorUtils = require("doc-color-utils") /*id: 986243*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function e2(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  emptyExportFunction.emptyFunction(reactinxDomContextExports.ReactInXExports);
  A = editorPluginManager.createPriority(priorityConstants.priorityConstants.BEFORE_DEFAULT);
  O = class extends baseRendererClass.BaseRenderer {
    get isRevising() {
      return this.blockManager.editorAPI.config.get("revising");
    }
    match(e) {
      return editorRevisionUtilities.isRevisionIdString(e) || editorRevisionUtilities.isRevisionIdPrefix(e);
    }
    editorWillApplyChange(e) {
      let {
        options: i,
        deltaSet: n
      } = e;
      if (!this.isRevising) {
        return n;
      }
      if ((i == null ? undefined : i.type) === "codeBlockEnter") {
        this.handleCodeBlockEnter(n, i);
        return n;
      }
      if ([editorInputHandler.InputActionTypes.FlushInput, editorInputHandler.InputActionTypes.Composition].includes(i == null ? undefined : i.type)) {
        Object.keys(n.deltas).forEach(e => {
          for (let r of n.get(e).ops) {
            if (r.insert && r.attributes) {
              let e = Object.keys(r.attributes).find(e => editorRevisionUtilities.isRevisionIdString(e));
              if (!e) {
                continue;
              }
              let n = {
                revisionId: editorRevisionUtilities.stripRevIdString(e),
                type: editorRevisionUtilities.parseJsonSafe(r.attributes[e]).type
              };
              i.extra = {
                ...i.extra,
                revisionContext: n
              };
              break;
            }
          }
        });
        return n;
      }
      let r = [editorInputHandler.InputActionTypes.DeleteBackward, editorInputHandler.InputActionTypes.DeleteEntireWordBackward, editorInputHandler.InputActionTypes.DeleteToLineStart, editorInputHandler.InputActionTypes.DeleteRange];
      if ([...r, editorInputHandler.InputActionTypes.DeleteForward, editorInputHandler.InputActionTypes.DeleteEntireWordForward, editorInputHandler.InputActionTypes.DeleteToLineStart].includes(i == null ? undefined : i.type)) {
        Object.keys(n.deltas).forEach(e => {
          let o = n.get(e);
          let l = 0;
          o.forEach((n, s) => {
            if (!n.delete) {
              l += n.retain || 0;
              return;
            }
            let a = new editorPositionClass.EditorPosition({
              zoneId: e,
              editor: this.editor,
              start: l,
              len: n.delete
            }).toRange();
            let c = [editorRangeUtilities.toSelectionObject(a)];
            let {
              revision: d,
              hasCompleteDeletedRevision: u,
              hasCompleteAdditiveRevision: h
            } = editorRevisionDeleteOperations.getDeleteRevision(this.blockManager, c);
            if (d) {
              let [e, r] = d;
              let l = editorRevisionUtilities.parseJsonSafe(r);
              let a = {
                revisionId: editorRevisionUtilities.stripRevIdString(e),
                type: (l == null ? undefined : l.type) || editorRevisionConstants.diffOperationMap.DELETE
              };
              if (h && l) {
                a.type = l.type;
              } else {
                o.ops[s] = {
                  retain: n.delete,
                  attributes: {
                    [e]: r
                  }
                };
              }
              i.extra = {
                ...i.extra,
                revisionContext: a
              };
            } else if (u) {
              delete o.ops[s];
            }
            if (r.includes(i == null ? undefined : i.type)) {
              Promise.resolve().then(() => {
                editorRevisionDeleteOperations.adjustSelectionAfterDelete(this.selectionAPI, {
                  isTextSelection: true,
                  deletedTextLength: n.delete
                });
              });
            }
          });
        });
      }
      return n;
    }
    renderLinefeed(e) {
      let {
        attributes: i,
        children: n,
        style: r
      } = e;
      if (!i[editorRevisionConstants.revisionHlPrefix]) {
        return n;
      }
      e.class += " revision-linefeed";
      let o = eH(i);
      let l = i[o];
      let s = editorRevisionUtilities.parseJsonSafe(l);
      if (s) {
        r["--revision-border-color"] = docColorUtils.getDocColorWithAlpha(s.userId);
        r["--revision-linefeed-background"] = docColorUtils.getDocColorWithAlpha(s.userId, true);
        r.borderWidth = "0 0 1px";
      }
      let a = eH(i, e => {
        return editorRevisionUtilities.isDeleteOp(e.type) || editorRevisionUtilities.isReplaceDeleteOp(e.type, e.details?.subType);
      });
      if (a) {
        let i = editorRevisionUtilities.parseJsonSafe(e.attributes[a]);
        if (i) {
          r.textDecorationColor = docColorUtils.getDocColorWithAlpha(i.userId);
          r["--revision-border-color"] = docColorUtils.getTextOrBgColor();
          r["--revision-linefeed-background"] = docColorUtils.getTextOrBgColor(true);
          r.borderWidth = "0";
          e.class += `${e.class ? " " : ""}revision-linethrough`;
        }
      }
      return n;
    }
    render(e) {
      let i = new Set();
      let n = eH(e.attributes, e => {
        return editorRevisionUtilities.isDeleteOp(e.type) || editorRevisionUtilities.isReplaceDeleteOp(e.type, e.details?.subType);
      });
      if (n) {
        let r = editorRevisionUtilities.parseJsonSafe(e.attributes[n]);
        if (r) {
          e.style["--revision-linethrough-color"] = docColorUtils.getDocColorWithAlpha(r.userId);
          i.add("revision-linethrough");
        }
      }
      for (let n in e.attributes) {
        if (editorRevisionUtilities.isRevisionIdString(n)) {
          i.add("text-revision");
          i.add(n);
        }
      }
      e.class += `${e.class ? " " : ""}${[...i].join(" ")}`;
      return e.children;
    }
    renderInlineWrapper(e) {
      let {
        lineState: a,
        index: c,
        attributes: d,
        key: u
      } = e;
      if (d.enter) {
        return null;
      }
      let h = a.getOps();
      let p = d["clientside-revision-hl"];
      let f = p ? editorRevisionUtilities.formatRevisionId(p) : eH(d);
      let v = d[f];
      let g = editorRevisionUtilities.parseJsonSafe(v);
      let b = h[c - 1];
      let m = !!(b == null ? undefined : b.attributes?.[f]);
      if (g && (!this.inlineWrapperCache || !m || this.inlineWrapperCache.attributeKey !== f || !editorRevisionUtilities.compareOpTypes(g, {
        type: this.inlineWrapperCache.type,
        details: {
          subType: this.inlineWrapperCache.subType
        }
      }))) {
        let e = "revision-container";
        if (g.auto_accept) {
          e += " auto-accept";
        }
        let i = {
          "--revision-border-color": docColorUtils.getBrandColorWithAlpha()
        };
        if (editorRevisionUtilities.isDeleteOp(g.type) || editorRevisionUtilities.isReplaceDeleteOp(g.type, g.details?.subType)) {
          i.color = docColorUtils.getTextOrBgColor(false);
        } else {
          i.color = docColorUtils.getDocColorWithAlpha(g.userId);
          if (!browserEnvironmentDetectionUtils.browserDetector.isDoubaoApp) {
            i.borderWidth = "0 0 1px";
          }
        }
        if (d[editorRevisionConstants.revisionHlPrefix]) {
          i.backgroundColor = docColorUtils.getDocColorWithAlpha(g.userId, true);
          if (editorRevisionUtilities.isDeleteOp(g.type) || editorRevisionUtilities.isReplaceDeleteOp(g.type, g.details?.subType)) {
            i.backgroundColor = docColorUtils.getTextOrBgColor(true);
          }
        }
        let n = reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.TextSymbol, {
          className: e,
          style: i
        });
        this.inlineWrapperCache = {
          inlineWrapper: n,
          attributeKey: f,
          type: g.type,
          subType: g.details?.subType
        };
      }
      e.key = this.inlineWrapperCache?.attributeKey || u;
      return this.inlineWrapperCache?.inlineWrapper || null;
    }
    _editorLineStateWillRender(e) {
      let {
        lineState: i
      } = e;
      let n = i.getZoneId();
      let r = primitiveConverters.toNumber(n);
      let o = this.blockManager.getBlockModelByBlockId(r);
      let l = editorRevisionSelectionUtils.findLatestTurnIntoRevision(o.snapshot);
      let s = i.getModelText();
      if (!l || !s.length) {
        return;
      }
      let {
        revisionId: a,
        userId: c
      } = l;
      let d = new contentStructureDelta.ContentDelta({
        zoneId: n
      }).retain(s.length - 1, editorRevisionOperations.createFormatOperation({
        revisionId: a,
        userId: c,
        details: {
          formattedAttributePairs: [],
          turnInto: true
        }
      }));
      e.lineState = i.compose(d);
    }
    handleCodeBlockEnter(e, i) {
      let n = this.selectionAPI.getSelection();
      let r = this.curReplaceRevisionId ? editorRevisionOperationsHelper.createReplaceAddOpEntry(this.curReplaceRevisionId) : editorRevisionAddHandler.getInheritRevision(this.blockManager, n);
      if (r) {
        Object.keys(e.deltas).forEach(n => {
          let o = e.get(n);
          for (let [e, n] of o.ops.entries()) {
            if (n.insert === documentOperationConstants.newlineChar) {
              let [n, l] = r;
              let s = editorRevisionUtilities.stripRevIdString(n);
              let a = editorRevisionUtilities.parseJsonSafe(l);
              if (!a) {
                break;
              }
              let c = {
                revisionId: s,
                type: a.type
              };
              i.extra = {
                ...i.extra,
                revisionContext: c
              };
              o.ops[e].attributes = {
                ...o.ops[e].attributes,
                [n]: l
              };
              break;
            }
          }
        });
      }
    }
    editorWillHandleCompositionStart(e) {
      let {
        event: i
      } = e;
      if (this.isRevising) {
        this.handleInputWhenTextSelected({
          isComposing: true,
          event: i
        });
      }
    }
    editorWillHandleBeforeInput(e) {
      let {
        event: i
      } = e;
      if (this.isRevising) {
        this.handleInputWhenTextSelected({
          event: i
        });
      }
    }
    constructor({
      editor: e,
      blockManager: i,
      selectionAPI: n
    }) {
      super();
      e2(this, "name", "TextRevision");
      e2(this, "editor", undefined);
      e2(this, "blockManager", undefined);
      e2(this, "selectionAPI", undefined);
      e2(this, "inlineWrapperCache", null);
      e2(this, "isAdditiveRevisionSelected", false);
      e2(this, "curReplaceRevisionId", "");
      e2(this, "editorGetInheritAttributes", e => {
        if (!this.isRevising) {
          return {};
        }
        let i = this.selectionAPI.getSelection();
        if (!this.selectionAPI.isCollapsedTextSelection(i) && !this.isAdditiveRevisionSelected) {
          return {};
        }
        if (this.isAdditiveRevisionSelected && !this.selectionAPI.isCursor(i) && i.length === 1) {
          if (i[0].selection?.end) {
            i[0].selection.end = i[0].selection.start;
          }
          if (this.editor.getStatus("isComposing")) {
            this.isAdditiveRevisionSelected = false;
          }
        }
        let r = this.curReplaceRevisionId ? editorRevisionOperationsHelper.createReplaceAddOpEntry(this.curReplaceRevisionId) : editorRevisionAddHandler.getInheritRevision(this.blockManager, i);
        if (!r) {
          return {};
        }
        let [o, l] = r;
        return Object.assign(e || {}, {
          [o]: l
        });
      });
      e2(this, "handleInputWhenTextSelected", e => {
        let i = this.editor.selection.getSelection();
        if (i.isCollapsed()) {
          return;
        }
        let {
          isComposing: n,
          event: r
        } = e;
        let o = this.selectionAPI.getSelection();
        (function (e, i) {
          let n = new Map();
          for (let e of i) {
            let i = e.toPosition();
            let r = {
              id: primitiveConverters.toNumber(i.zoneId),
              type: editorTypeConstants.blockTypes.TEXT,
              selection: {
                start: i.start,
                end: i.start + i.len,
                isBackForward: i.isBackward
              }
            };
            n.set(r.id, r);
          }
          for (let i of e) {
            let e = n.get(i.id);
            if (!e) {
              return;
            }
            i.selection = e.selection;
          }
        })(o, this.editor.selection.getMultipleSelection());
        if (this.selectionAPI.isTextSelectionAcrossBlocks(o) && n) {
          let {
            replaceDeleteRevisionInfo: e,
            revisionContext: i
          } = editorRevisionOperationsHelper.getReplaceDeleteRevision(this.blockManager, this.selectionAPI);
          textInsertionAndSelectionHandler.insertTextWithSelection({
            blockManager: this.blockManager,
            selectionAPI: this.selectionAPI,
            editorAPI: this.blockManager.editorAPI,
            source: multipleSelectionConstants.selectionEventTypes.MULTIPLE_SELECTION_COMPOSITIONSTART,
            revisionContext: {
              replaceDeleteRevisionInfo: e,
              revisionTransactionContext: i
            }
          }, r.data, {}, {
            type: "flushInput"
          });
          this.editor.setPreventUpdateDomSelection(false);
          this.curReplaceRevisionId = (i == null ? undefined : i.revisionId) || "";
          setTimeout(() => {
            this.curReplaceRevisionId = "";
          });
          return;
        }
        let {
          revision: l,
          hasCompleteAdditiveRevision: s
        } = editorRevisionOperationsHelper.getRevisionInfo(this.blockManager, o);
        if (s) {
          this.isAdditiveRevisionSelected = true;
          setTimeout(() => {
            if (!this.editor.getStatus("isComposing")) {
              this.isAdditiveRevisionSelected = false;
            }
          });
          return;
        }
        if (!l) {
          return;
        }
        let [a, c] = l;
        let d = editorRevisionUtilities.stripRevIdString(a);
        let u = {
          extra: {
            revisionContext: {
              revisionId: d,
              type: editorRevisionConstants.diffOperationMap.REPLACE
            }
          }
        };
        this.editor.getContentState().setAttributes(i, {
          [a]: c
        }, u);
        this.curReplaceRevisionId = d;
        setTimeout(() => {
          this.curReplaceRevisionId = "";
        });
        let h = this.editor.getContentState().rangeToPosition(i);
        if (!h) {
          return;
        }
        let {
          start: p,
          zoneId: f
        } = h;
        this.selectionAPI.setSelection([{
          type: docxBlockSelectionHandler_1.blockTypes.TEXT,
          id: primitiveConverters.toNumber(f),
          selection: {
            start: p,
            end: p
          }
        }]);
        if (browserEnvironmentDetectionUtils.browserDetector.isSafari && !n && i.start.offset === 0) {
          let e = new contentStructureDelta.ContentDelta({
            zoneId: f
          });
          let [, i] = editorRevisionOperationsHelper.createReplaceAddOpEntry(d);
          if (!r.data) {
            return;
          }
          e.retain(p).insert(r.data, {
            [a]: i
          });
          this.editor.getContentState().apply(e, u);
          r.preventDefault();
          r.stopPropagation();
        }
      });
      this.editor = e;
      this.blockManager = i;
      this.selectionAPI = n;
    }
  };
  e2(O, "KEY", "TextRevision");
  g = O.prototype;
  b = "editorWillApplyChange";
  m = [A];
  y = Object.getOwnPropertyDescriptor(O.prototype, "editorWillApplyChange");
  k = O.prototype;
  E = {};
  Object.keys(y).forEach(function (e) {
    E[e] = y[e];
  });
  E.enumerable = !!E.enumerable;
  E.configurable = !!E.configurable;
  if ("value" in E || E.initializer) {
    E.writable = true;
  }
  E = m.slice().reverse().reduce(function (e, i) {
    return i(g, b, e) || e;
  }, E);
  if (k && E.initializer !== undefined) {
    E.value = E.initializer ? E.initializer.call(k) : undefined;
    E.initializer = undefined;
  }
  if (E.initializer === undefined) {
    Object.defineProperty(g, b, E);
  }
  let e8 = O;
  var translateStatusPluginBridge = require("translate-status-plugin-bridge") /*id: 682283*/;
  require.d(exports, {
    InlineBlockRenderer: function () {
      return z;
    },
    TextRevisionRenderer: function () {
      return e8;
    },
    TripleClickHandler: function () {
      return ew;
    },
    LinkRenderer: function () {
      return docxLinkRenderer.DocxLinkRenderer;
    },
    TextHighlightBackgroundRenderer: function () {
      return ee;
    },
    MentionDocRenderer: function () {
      return docxMentionDocRenderer.DocxMentionDocRenderer;
    },
    TextHighlightRenderer: function () {
      return textHighlightThemeRenderer.TextHighlightRenderer;
    },
    TextCommentRenderer: function () {
      return docxTextCommentRenderer.TextCommentRenderer;
    },
    EquationRendererClass: function () {
      return docxEquationBlockRenderer.EquationRenderer;
    },
    NonEmptyLineDecorator: function () {
      return ex;
    },
    TodoLineThroughRenderer: function () {
      return todoLineThroughRenderer.TodoLineThroughRenderer;
    },
    TextRevisionPlugin: function () {
      return eS;
    },
    CodeHighlightRenderer: function () {
      return eA;
    },
    translatePluginMgr: function () {
      return translateStatusPluginBridge.translatePluginMgr;
    },
    SelectionRenderer: function () {
      return selectionHighlightRenderer.SelectionRenderer;
    },
    CollabConnector: function () {
      return ef;
    }
  });
}