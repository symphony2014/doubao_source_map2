// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'DocPreviewComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 669147
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function c(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  class s extends reactCoreLibraryReexport.Component {
    get editor() {
      return this.state.editor;
    }
    get dataService() {
      var e;
      if ((e = this.editor) === null || e === undefined) {
        return undefined;
      } else {
        return e.api.dataService;
      }
    }
    get blockManager() {
      var e;
      if ((e = this.editor) === null || e === undefined) {
        return undefined;
      } else {
        return e.api.getService(blockManagerToken.blockManagerToken);
      }
    }
    get editorContext() {
      var e;
      if ((e = this.editor) === null || e === undefined) {
        return undefined;
      } else {
        return e.api.getService(compatibleEditorContext_1.compatibleContext);
      }
    }
    get fold() {
      return this.editorContext?.fold;
    }
    get rect() {
      return this.editorContext?.rect;
    }
    get ctx() {
      return {
        blockManager: this.blockManager,
        fold: this.fold,
        rect: this.rect
      };
    }
    componentWillUnmount() {
      this.isDestroyed = true;
      if (this.props.onUnmount) {
        this.props.onUnmount(this.ctx);
      }
      this.subs.forEach(e => e.unsubscribe());
      if (this.editor) {
        var e;
        if ((e = this.editor) !== null && e !== undefined) {
          e.destroy();
        }
      }
    }
    init() {
      let e = this.props.createDocxEditor(this.container);
      e.api.viewService.didMount$.subscribe(this.handleEditorMounted);
      if (!e.isReady()) {
        e.lifecycle.editorReady$.subscribe(async () => {
          if (!this.isDestroyed) {
            this.forceUpdate();
          }
        });
      }
      this.setState({
        editor: e
      });
    }
    render() {
      var e;
      var n;
      let {
        editor: i
      } = this.state;
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          ref: this.setContainerRef,
          className: "page-preview-container",
          style: {
            position: "relative"
          },
          children: (i == null ? undefined : i.api.modelService.isInitialDataReady()) ? i.renderRoot() : null
        }), (e = (n = this.props).children) === null || e === undefined ? undefined : e.call(n, {
          editor: i
        })]
      });
    }
    constructor(...e) {
      super(...e);
      c(this, "container", null);
      c(this, "inited", false);
      c(this, "isDestroyed", false);
      c(this, "subs", []);
      c(this, "state", {
        editor: null
      });
      c(this, "setContainerRef", e => {
        this.container = e;
        if (e && !this.inited) {
          this.init();
        }
      });
      c(this, "handleEditorMounted", () => {
        var e;
        if ((e = this.editor) === null || e === undefined || !e.isDestroyed()) {
          if (this.props.onMount) {
            this.props.onMount(this.ctx);
          }
          this.subs.forEach(e => e.unsubscribe());
          if (this.dataService) {
            this.subs = [this.dataService.error$.subscribe(this.props.onError)];
          }
        }
      });
    }
  }
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var docxBlockChildrenUtils_1 = require("docx-block-children-utils_1") /*id: 891712*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var coverImageUrlUtils = require("cover-image-url-utils") /*id: 604470*/;
  var isDesktopBrowserChecker = require("is-desktop-browser-checker") /*id: 493826*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var clientVarMetaManager = require("client-var-meta-manager") /*id: 865679*/;
  var docxLazyConsumerConfig = require("docx-lazy-consumer-config") /*id: 157711*/;
  var clientVarLazyConsumerRegistry = require("client-var-lazy-consumer-registry") /*id: 365600*/;
  var resourceTypeEnum = require("resource-type-enum") /*id: 342261*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var C = debugBrowserConfig;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  let R = C("[shortcut fe]");
  async function I(e) {
    var n;
    var r;
    var o;
    var l;
    var c;
    var s;
    var u;
    let {
      anchorObj: d,
      clientVars: f,
      token: h
    } = e;
    let p = function (e) {
      let n = [];
      for (let i of Object.values(e.block_map)) {
        if (i.data.type === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE) {
          n.push({
            recordId: i.id,
            srcPageId: i.data.src_page_id,
            srcBlockId: i.data.src_block_id
          });
        }
      }
      return n;
    }(f);
    let m = (n = d.selectedBlocks) === null || n === undefined ? undefined : n.map(e => e.block_id);
    if (!p.length || !m) {
      R("[SyncedBlockHighlightHandler] return");
      return {
        anchorObj: d,
        clientVars: f
      };
    }
    let v = function (e) {
      let {
        list: n,
        selectedBlocks: i,
        clientVars: r
      } = e;
      return n.filter(e => {
        if (i.includes(e.recordId)) {
          return true;
        }
        {
          let o = r.block_map[e.recordId].data.parent_id;
          let a = false;
          while (o) {
            if (i.includes(o)) {
              a = true;
              o = null;
            } else {
              var n;
              o = (n = r.block_map[o]) === null || n === undefined ? undefined : n.data.parent_id;
            }
          }
          return a;
        }
      });
    }({
      list: p,
      selectedBlocks: m,
      clientVars: f
    });
    let g = await A({
      syncedBlockTokensList: v,
      hostToken: h
    });
    let y = [];
    v.reduce((e, n) => {
      let {
        srcBlockId: i
      } = n;
      let r = g[i];
      if (r.readable && r.visible) {
        e.push(n);
      }
      return e;
    }, y);
    let k = [];
    y.reduce((e, n) => {
      if (e.every(e => e.srcBlockId !== n.srcBlockId)) {
        e.push(n);
      }
      return e;
    }, k);
    let _ = !!((o = d.selectedBlocks) === null || o === undefined ? undefined : (r = o[0]) === null || r === undefined ? undefined : r.reference?.selected_blocks);
    let E = _ || docxShortcutFeatureDetection.isWholeBlockHighlightShare();
    let w = await Promise.all(k.map(e => M({
      token: e.srcPageId,
      blockId: e.srcBlockId
    }, E)));
    let C = y.map(e => {
      let {
        srcBlockId: n
      } = e;
      return Object.assign({}, e, {
        clientVars: w[k.findIndex(e => e.srcBlockId === n)] || null
      });
    });
    R("[SyncedBlockHighlightHandler] authorizedSyncedBlockDataList:", C.map(e => e.srcBlockId));
    let Z = (l = d.selectedBlocks) === null || l === undefined ? undefined : l[0]?.block_id;
    if (d.selectedBlocks && Z && _) {
      (function (e, n, i) {
        var o;
        var a;
        let l = e.find(e => e.recordId === n);
        let c = (a = i.selectedBlocks) === null || a === undefined ? undefined : (o = a[0]) === null || o === undefined ? undefined : o.reference?.selected_blocks;
        R(`[SyncedBlockHighlightHandler] updateaAnchorObj before update:${JSON.stringify(i)}`);
        if (l && c) {
          i.selectedBlocks = c.map(e => {
            let i = `${n}-${e.block_id}`;
            return Object.assign({}, e, {
              block_id: i
            });
          });
          i.recordId = i.selectedBlocks[0].block_id;
          R(`[SyncedBlockHighlightHandler] updateaAnchorObj have permission:${JSON.stringify(i)}`);
        } else {
          i.selectedBlocks = [{
            block_id: n,
            selected_text: null,
            src_version: 1
          }];
          i.recordId = n;
          R(`[SyncedBlockHighlightHandler] updateaAnchorObj no permission:${JSON.stringify(i)}`);
        }
      })(C, Z, d);
    }
    for (let e = 0; e < v.length; e++) {
      let {
        recordId: n,
        srcBlockId: i
      } = v[e];
      let r = C.find(e => e.srcBlockId === i);
      if (g[i].deleted) {
        f.block_map[n].data.synced_deleted = true;
      }
      if (!(r == null ? undefined : r.clientVars)) {
        continue;
      }
      let o = `${n}`;
      let a = deepClone(r.clientVars);
      let l = a.block_map[i].data.children;
      let d = (c = a.block_sequence) === null || c === undefined ? undefined : c.filter(e => e !== i);
      if (l && d) {
        let e = l.map(e => `${o}-${e}`);
        f.block_map[n] = {
          id: n,
          data: {
            parent_id: f.block_map[n].data.parent_id,
            type: "synced_source",
            children: e
          },
          version: 1
        };
        d.forEach(e => {
          var c;
          let u = Object.assign({}, a.block_map[e]);
          let d = `${o}-${u.id}`;
          u.id = d;
          if (u.data?.parent_id) {
            let e = u.data.parent_id;
            u.data.parent_id = e === i ? o : `${o}-${u.data.parent_id}`;
          }
          if (u.data?.cell_set) {
            Object.keys(u.data.cell_set).forEach(e => {
              let n = u.data.cell_set[e].block_id;
              u.data.cell_set[e].block_id = `${o}-${n}`;
            });
          }
          if ((c = u.data) === null || c === undefined ? undefined : c.objective_info?.progress_record_id) {
            let e = u.data.objective_info.progress_record_id;
            u.data.objective_info.progress_record_id = `${o}-${e}`;
          }
          if (u.data?.text) {
            let {
              text: e
            } = u.data;
            for (let n of Object.keys(e.apool.numToAttrib)) {
              let i = e.apool.numToAttrib[n];
              if (i[0] === displayTypeConstants.displayInlineBlock) {
                i[1] = `${o}-${i[1]}`;
              }
            }
          }
          u.data.children &&= u.data.children.map(e => `${o}-${e}`);
          f.block_map[`${o}-${e}`] = u;
        });
        let r = ((s = f.block_sequence) === null || s === undefined ? undefined : s.findIndex(e => e === n)) || -1;
        if (r > -1) {
          let e = d.map(e => `${o}-${e}`);
          if ((u = f.block_sequence) !== null && u !== undefined) {
            u.splice(r, 0, ...e);
          }
        }
        f.user_map = Object.assign({}, f.user_map, a.user_map);
        f.block_map[f.id].children = f.block_sequence;
      }
    }
    return {
      anchorObj: d,
      clientVars: f
    };
  }
  async function A(e) {
    let {
      syncedBlockTokensList: n,
      hostToken: i
    } = e;
    let r = n.map(e => e.srcBlockId).reduce((e, n) => {
      e[n] ||= resourceTypeEnum.ResourceType.SYNCED;
      return e;
    }, {});
    try {
      let e = await apiClientInstance.apiClient.post("/permission/refer_block/mget_refer", {
        obj_maps: r,
        host_token: i,
        host_objtype: resourceTypeEnum.ResourceType.DOCX
      }, {
        baseURL: "/space/api/suite",
        timeout: 10000
      });
      R(`[SyncedBlockHighlightHandler] bacthFetchSyncedReferencePermission result code: ${e.code}, msg: ${e.msg}`);
      R("[SyncedBlockHighlightHandler] bacthFetchSyncedReferencePermission result.data: ", JSON.stringify(e.data));
      let {
        obj_status: o,
        obj_attributes: a
      } = e.data;
      return n.reduce((e, n) => {
        let {
          srcBlockId: l,
          srcPageId: c
        } = n;
        let s = a[l]?.ReferAuthMode > 1;
        let u = c === i;
        e[l] = {
          srcBlockId: l,
          readable: s || u,
          visible: o[l] === 0,
          deleted: o[l] === 10048
        };
        return e;
      }, {});
    } catch (e) {
      R(`[SyncedBlockHighlightHandler] bacthFetchSyncedReferencePermission error message:${e.message}`);
      return n.reduce((e, n) => {
        let {
          srcBlockId: r,
          srcPageId: o
        } = n;
        let a = o === i;
        e[r] = {
          srcBlockId: r,
          readable: a,
          visible: true,
          deleted: false
        };
        return e;
      }, {});
    }
  }
  async function M(e) {
    let {
      token: n,
      blockId: i
    } = e;
    let r = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    try {
      let e = await apiClientInstance.apiClient.get("/api/docx/pages/client_vars", {
        baseURL: "/space",
        params: {
          mode: 4,
          id: n,
          limit: 239,
          block_id: i
        },
        retryMaxCount: 0
      });
      if (!r) {
        R("[SyncedBlockHighlightHandler] fetch first clientvars");
        return e.data;
      }
      let o = [e.data];
      let a = e.data.next_cursors;
      while (a.length > 0) {
        let e = a.shift();
        let i = await apiClientInstance.apiClient.get("/api/docx/pages/client_vars", {
          baseURL: "/space",
          params: {
            mode: 4,
            id: n,
            cursor: e,
            limit: 239
          }
        });
        o.push(i.data);
      }
      R("[SyncedBlockHighlightHandler]  fetch full clientvars");
      let l = docxBlockValidatorUtils.mergeBlockMaps(o);
      l.block_sequence = o.reduce((e, n) => {
        e.push(...n.block_sequence);
        return e;
      }, []);
      return l;
    } catch (e) {
      R(`[SyncedBlockHighlightHandler] fetch clientvars occur error, message: ${e.message}`);
      return null;
    }
  }
  R.enabled = true;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docBlockChildrenUtil = require("doc-block-children-util") /*id: 615212*/;
  var runtimeEnvFlags = require("runtime-env-flags") /*id: 573139*/;
  var docBlockPruningUtility = require("doc-block-pruning-utility") /*id: 596505*/;
  let L = Number(require("process-browser-shim") /*id: 488992*/.env.MAX_RENDERED_BLOCK_COUNT || platformDocUtils.o0s.parseQuery(location.href).max_block_count || 50);
  let D = "heading";
  function H(e, n) {
    if (!docxShortcutFeatureDetection.isShortcutEnabled()) {
      runtimeEnvFlags.isLocalDev;
    }
  }
  let $ = (e, n) => e.type !== docBlockTypeConstants.blockTypeConstants.CODE || docxShortcutFeatureDetection.isTextCardAnchor() ? n : e.folded;
  function F(e) {
    return e.startsWith(D);
  }
  function z(e) {
    return Number(e.slice(D.length));
  }
  function W(e, n) {
    if (n) {
      n.forEach(n => {
        let i = e[n];
        if (i) {
          W(e, i.data.children);
          delete e[n];
        }
      });
    }
  }
  function V(e, n) {
    if (!n) {
      return;
    }
    let i = e[n];
    if (!i) {
      return;
    }
    let r = i.data.parent_id;
    if (!r) {
      return;
    }
    let o = e[r];
    if (o) {
      o.data.folded &&= false;
      if (Array.isArray(o.data.children)) {
        let r = o.data.children.indexOf(n);
        let a = 10;
        for (F(i.data.type) && (a = z(i.data.type)); r-- > 0 && a > 1;) {
          let n = e[o.data.children[r]];
          let i = n.data.type;
          if (F(i)) {
            let e = z(i);
            if (e < a) {
              n.data.folded = false;
              a = e;
            }
          }
        }
      }
      V(e, r);
    }
  }
  function j(e, n, i, r, o) {
    let a = 0;
    if ((o == null ? undefined : o.table) === false) {
      a = 10;
    } else {
      if (!e) {
        return 0;
      }
      let o = e.id;
      i[o] = e;
      let {
        rows_id: l,
        columns_id: c,
        cell_set: s
      } = i[o].data;
      let u = docxBlockChildrenUtils_1.hasMergedCells(s);
      for (let e = 0; e < l.length; e++) {
        let o = l[e];
        let d = 0;
        if (!u && r < a) {
          let n = l.splice(e);
          c.forEach(e => {
            n.forEach(n => {
              let i = `${n}${e}`;
              if (s[i]) {
                delete s[i];
              }
            });
          });
          break;
        }
        for (let e of c) {
          let l = `${o}${e}`;
          if (s[l]) {
            let {
              block_id: e
            } = s[l];
            i[e] = n[e];
            d = Math.max(d, X(n[e])(n, i, u ? Infinity : r - a));
          }
        }
        a += d;
      }
    }
    return a;
  }
  function U(e, n, i, r, o) {
    let a = e.id;
    let l = 0;
    i[a] = e;
    for (let o of docxBlockChildrenUtils_1.getBlockChildren(e)) {
      i[o] = n[o];
      l = Math.max(l, X(n[o])(n, i, r));
    }
    return l;
  }
  function K(e, n, i, r, o) {
    let a = 0;
    let l = e.id;
    i[l] = n[l];
    let c = docxBlockChildrenUtils_1.getBlockChildren(i[l]);
    let s = [];
    let u = typeof (o == null ? undefined : o.start) == "string" ? c.indexOf(o.start) : 0;
    for (u === -1 && (u = 0); u < c.length; u++) {
      let e = c[u];
      if (r < a) {
        break;
      }
      a++;
      s.push(e);
      let o = n[e];
      if (!o.data.folded) {
        a += X(o)(n, i, r - a);
      }
    }
    docxBlockChildrenUtils_1.copyListBlockChildren(e, n, i);
    i[l].data = {
      ...i[l].data,
      children: s
    };
    return a;
  }
  function X(e) {
    let n = K;
    if (e) {
      if (docBlockTypeConstants.blockTypeConstants.GRID === e.data.type) {
        n = U;
      } else if (docBlockTypeConstants.blockTypeConstants.TABLE === e.data.type) {
        n = j;
      }
      return (i, r, o, a) => n(e, i, r, o, a);
    } else {
      return () => 0;
    }
  }
  var errorStatusCodes = require("error-status-codes") /*id: 187285*/;
  var editorCommands = require("editor-commands") /*id: 361547*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  var reduxProviderLogic = require("redux-provider-logic") /*id: 93342*/;
  var storeDocActions = require("store-doc-actions") /*id: 567140*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxBlockErrorBoundary = require("docx-block-error-boundary") /*id: 649744*/;
  var themeDesignTokensProvider = require("theme-design-tokens-provider") /*id: 408160*/;
  var themeAwareLogoComponent = require("theme-aware-logo-component") /*id: 384167*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var ea = classnamesUtils;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactThemeProviderWrapper = require("react-theme-provider-wrapper") /*id: 805172*/;
  var docCoverEventTracker = require("doc-cover-event-tracker") /*id: 746198*/;
  var docxCaptionConfig = require("docx-caption-config") /*id: 338988*/;
  var docCoverImageWrapper = require("doc-cover-image-wrapper") /*id: 756001*/;
  var docxCoverIntersectionHandler = require("docx-cover-intersection-handler") /*id: 584038*/;
  var statusModeTypes = require("status-mode-types") /*id: 811669*/;
  var docxCoverIntersectionHook = require("docx-cover-intersection-hook") /*id: 462592*/;
  var docxFileCoverUtils = require("docx-file-cover-utils") /*id: 326877*/;
  require("empty-webpack-chunk-74277") /*id: 246170*/;
  let ey = 3;
  let ek = statusModeTypes.StatusModes.PREVIEW;
  let e_ = reactThemeProviderWrapper.withThemeProvider(themeAwareLogoComponent.ThemeAwareLogo);
  let eE = ".template-center-preview__wrapper";
  let ew = () => {
    var e;
    let n = document.documentElement.clientHeight;
    return (((e = document.querySelector(eE)) === null || e === undefined ? undefined : e.getBoundingClientRect().height) || n) * docxCaptionConfig.maskOpacity;
  };
  let eC = () => {
    var e;
    let n = document.documentElement.clientWidth;
    return ((e = document.querySelector(eE)) === null || e === undefined ? undefined : e.getBoundingClientRect().width) || n;
  };
  var eZ = e => {
    let {
      coverInfo: n
    } = e;
    let i = networkStateEventCollector.collectNetworkState();
    let o = reactCoreLibraryReexport.useRef(null);
    let a = reactCoreLibraryReexport.useRef(null);
    let c = reactCoreLibraryReexport.useRef(null);
    let [s, d] = reactCoreLibraryReexport.useState(false);
    let [f, h] = reactCoreLibraryReexport.useState(false);
    let [p, m] = reactCoreLibraryReexport.useState(false);
    let [v, g] = reactCoreLibraryReexport.useState(false);
    let [b, y] = reactCoreLibraryReexport.useState({});
    let [k, _] = reactCoreLibraryReexport.useState("");
    let [E, w] = reactCoreLibraryReexport.useState("");
    docxCoverIntersectionHook.useCoverIntersection(o.current, n, ek);
    let C = reactCoreLibraryReexport.useRef({
      width: eC(),
      height: ew()
    });
    let Z = reactCoreLibraryReexport.useCallback(() => {
      if (eC() !== C.current.width || ew() !== C.current.height) {
        C.current = {
          width: eC(),
          height: ew()
        };
        docxCoverIntersectionHandler.updateCoverHeight({
          coverScene: ek
        });
        if (a.current) {
          y(docxFileCoverUtils.getCoverLayout(n, a.current, C.current));
        }
      }
    }, [n]);
    let x = () => {};
    let S = e => {
      let n = {
        pic_show_size: `${Math.round(C.current.width)}x${Math.round(C.current.height)}`,
        load_status: e ? "success" : "load_fail"
      };
      if (e) {
        n.pic_original_size = `${a.current?.naturalWidth}x${a.current?.naturalHeight}`;
      }
      docCoverEventTracker.DocCoverEventTracker.loadCover(n);
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (n) {
        let e = n && n.src || "";
        if (!e) {
          d(false);
          g(true);
          return;
        }
        if (docxFileCoverUtils.isSameUrlOriginPath(e, k)) {
          let e = docxFileCoverUtils.getCoverLayout(n, a.current, C.current);
          if (!deepEqualUtil_1.deepEqual(b, e) && !isEmptyUtil.isEmpty(e)) {
            y(e);
          }
        } else {
          ey = 3;
          h(false);
          m(false);
          _(e);
          w(n.lightSrc || "");
          d(true);
          g(false);
        }
      } else {
        _("");
        d(false);
        g(false);
        docxCoverIntersectionHandler.notifyHeightChange(0, ek);
      }
    }, [n]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isIPad;
      let n = {
        trailing: true
      };
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        n.maxWait = 200;
        n.leading = true;
      }
      let i = debounceUtil_1_1.debounce(Z, 60, n);
      if (!e || runtimeEnvFlags.isFromVideoCall) {
        window.addEventListener("resize", i);
      }
      return () => {
        if (!e || runtimeEnvFlags.isFromVideoCall) {
          window.removeEventListener("resize", i);
        }
      };
    }, [Z]);
    reactCoreLibraryReexport.useEffect(() => {
      Z();
    }, [Z]);
    let T = () => {
      if (k) {
        if (ey) {
          ey--;
          let e = new URL(k);
          e.searchParams.append("t", `${Number(new Date())}`);
          _(e.toString());
          if (!s) {
            d(true);
          }
          if (v) {
            g(false);
          }
        } else {
          d(false);
          g(true);
          S(false);
        }
      }
    };
    let R = () => {
      ey = 3;
      T();
    };
    let I = () => {
      d(false);
      y(docxFileCoverUtils.getCoverLayout(n, a.current, C.current));
      g(false);
      S(true);
    };
    let A = () => {
      m(true);
      y(docxFileCoverUtils.getCoverLayout(n, c.current, C.current));
    };
    let M = () => {
      h(true);
      m(true);
    };
    let O = () => n ? reactJsxRuntimeCoreReexport.jsxs(docCoverImageWrapper.CoverImageWrapper, {
      isDragging: false,
      style: b,
      updatePosition: x,
      children: [reactJsxRuntimeCoreReexport.jsx("img", {
        className: "doc-cover-image",
        ref: a,
        crossOrigin: "use-credentials",
        src: xssContentSanitizer.sanitizeUrl(k, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9Xc*lNak-zWWpJMWJHSn$$bnBNTWs1MlpHM$dl$Xd3$*5aa2JWWj$$MWN4-%Zve$ZsRmpi$ll5W$Zk$00weH$$bnBs%jBaN$dqTldlZz09"
        }),
        onLoad: I,
        onError: T
      }), s && E && !f && reactJsxRuntimeCoreReexport.jsx("img", {
        style: {
          visibility: p ? "visible" : "hidden"
        },
        ref: c,
        crossOrigin: "use-credentials",
        src: xssContentSanitizer.sanitizeUrl(E, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9Xc*lNak-zWWpJMWJHSn$$bnBNTWs1MlpHM$dl$Xd3$*5aa2JWWj$$MWN4-%Zve$ZsRmpi$ll5W$Zk$00weH$$bnBs%jBaN$dqTldlZz09"
        }),
        onLoad: A,
        onError: M
      })]
    }) : null;
    let N = e => {
      S(false);
      let i = n == null ? undefined : n.status;
      let r = reactJsxRuntimeCoreReexport.jsxs("span", {
        children: [t("CreationDoc_DocX_Block_Load_Fail"), reactJsxRuntimeCoreReexport.jsx("button", {
          type: "button",
          onClick: R,
          children: t("CreationDoc_Docs_TwoWayLinks_LoadingError_Toast12")
        })]
      });
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "doc-cover-error",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          onClick: e ? undefined : R,
          children: reactJsxRuntimeCoreReexport.jsx(e_, {})
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "doc-cover-error-desc",
          style: {
            fontSize: 16
          },
          children: e && (i !== 10 || (n == null ? undefined : n.token) ? r : t("CreationDoc_DocX_Cover_failed_placeholder"))
        })]
      });
    };
    let L = e => {
      S(false);
      let n = reactJsxRuntimeCoreReexport.jsx("div", {
        className: "doc-cover-offline-desc",
        style: {
          fontSize: 16
        },
        children: reactJsxRuntimeCoreReexport.jsxs("span", {
          className: "retry-text",
          children: [t("CreationDoc_DocX_Block_Load_Fail"), reactJsxRuntimeCoreReexport.jsx("button", {
            type: "button",
            onClick: R,
            className: "retry-btn",
            children: t("CreationDoc_Docs_TwoWayLinks_LoadingError_Toast12")
          })]
        })
      });
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "doc-cover-offline",
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "doc-cover-offline-content docx-retry-content",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            onClick: e ? undefined : R,
            children: reactJsxRuntimeCoreReexport.jsx(e_, {
              style: {
                maxHeight: "96px",
                maxWidth: "96px"
              }
            })
          }), e && n]
        })
      });
    };
    if (!n) {
      return null;
    }
    let D = ea(docxCaptionConfig.wrapperClass, "docx-preview-cover-image", {
      "doc-cover-wrapper-loading": s
    });
    let H = {
      width: Math.min(b.width || C.current.width, C.current.width),
      height: Math.floor(C.current.height),
      marginLeft: -(C.current.width * 0.1),
      marginBottom: 28
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: o,
      className: D,
      style: H,
      children: (() => {
        let e = Math.floor(C.current.height) > 160;
        if (s && !i) {
          return L(e);
        } else {
          return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [v ? N(e) : O(), s && reactJsxRuntimeCoreReexport.jsx(platformDocUtils.bev, {
              size: browserEnvironmentDetectionUtils.browserDetector.isMobile ? docxCaptionConfig.subtitleFontSize : docxCaptionConfig.titleFontSize,
              color: themeDesignTokensProvider.getTokenValue("text-disabled")
            })]
          });
        }
      })()
    });
  };
  var docxUserDetailManager = require("docx-user-detail-manager") /*id: 794466*/;
  var docxAnchorImageLoaderLogger = require("docx-anchor-image-loader-logger") /*id: 48587*/;
  var docPreviewBlockUtils = require("doc-preview-block-utils") /*id: 579459*/;
  var docxShortcutConstants = require("docx-shortcut-constants") /*id: 853990*/;
  var docxEditorFactory = require("docx-editor-factory") /*id: 450236*/;
  function eA(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  class eM extends reactCoreLibraryReexport.Component {
    get blockManager() {
      var e;
      if ((e = this.editor) === null || e === undefined) {
        return undefined;
      } else {
        return e.api.getService(blockManagerToken.blockManagerToken);
      }
    }
    componentDidMount() {
      this.fetchPage();
    }
    componentWillUnmount() {
      this.isUnmounted = true;
    }
    async fetchPage() {
      let {
        token: e,
        canUseCache: n,
        onFetchError: i,
        onPruneClientVars: r,
        recursionProps: o,
        docVersion: a,
        onFetchDoc: l
      } = this.props;
      try {
        let i;
        this.setState({
          fetchLoading: true
        });
        let c = {
          token: e,
          canUseCache: n
        };
        if (o == null ? undefined : o.isPreview) {
          c.extraParams = {
            open_type: 1
          };
          if (a) {
            c.extraParams.version = a;
          }
        }
        docxAnchorImageLoaderLogger.logStageDuration(docxShortcutConstants.shortcutEventTypes.CLIENTVAR_FETCH_BEFORE);
        let s = docxShortcutFeatureDetection.isSyncedBlockToken();
        i = l ? await l() : s ? await docxShortcutFeatureDetection.fetchSyncedBlockData(e) : (await docxApiConstantsExports.docxApiService.fetchClientVars(c)).data;
        docxAnchorImageLoaderLogger.logStageDuration(docxShortcutConstants.shortcutEventTypes.CLIENTVAR_FETCH_FINISH);
        let {
          id: u,
          meta_map: h
        } = i;
        let m = h[u];
        if (u && m) {
          reduxStoreInitializer.reduxStore.dispatch(storeDocActions.updateDocMetaMap(u, m));
        }
        if (docxShortcutFeatureDetection.isOkrContentHighlightShare()) {
          for (let e of Object.values(i.block_map)) {
            let {
              type: n,
              objective_info: i,
              children: r
            } = e.data;
            if (n === docBlockTypeConstants.blockTypeConstants.OBJECTIVE && (i == null ? undefined : i.progress_record_id) && !(r == null ? undefined : r.includes(i.progress_record_id))) {
              let n = [i.progress_record_id, ...(r ?? [])];
              e.data.children = n;
            }
          }
        }
        let v = deepCloneWrapper_1.deepClone(i);
        let {
          getAnchor: k,
          isNeedToBlock: _
        } = o;
        let E = docxShortcutFeatureDetection.isShortcutOnly();
        if (_) {
          let n;
          let o;
          let a = await (k == null ? undefined : k(i));
          let l = docxShortcutFeatureDetection.isTextCardAnchor();
          docxShortcutFeatureDetection.debugLogger(`[SyncedBlockHighlightHandler] enable:${docxShortcutFeatureDetection.isSyncedBlockHighlightShare()}`);
          if (docxShortcutFeatureDetection.isSyncedBlockHighlightShare() && l && a) {
            let {
              anchorObj: n,
              clientVars: r
            } = await I({
              anchorObj: a,
              clientVars: i,
              token: e
            });
            a = n;
            i = r;
          }
          if (l) {
            n = docPreviewBlockUtils.getTableCellsAnchor(a, i.block_map);
            docPreviewBlockUtils.expandSelectedBlocks(a, i.block_map);
          }
          if ((a == null ? undefined : a.recordId) && !E) {
            o = docxBlockChildrenUtils_1.getParentBlockId(a == null ? undefined : a.recordId, i);
          }
          docxAnchorImageLoaderLogger.logStageDuration(docxShortcutConstants.shortcutEventTypes.PRUNE_BEFORE);
          i = function (e, n) {
            let i = e == null ? undefined : e.id;
            let r = e == null ? undefined : e.block_map;
            if (!i || !r) {
              docxShortcutFeatureDetection.debugLogger("pruneClientVars empty clientVars");
              return e;
            }
            docxShortcutFeatureDetection.debugLogger(`pruneClientVars options:${JSON.stringify(n)}`);
            docxShortcutFeatureDetection.debugLogger(`pruneClientVars url source: ${location.href}`);
            H("origin", r);
            V(r, n == null ? undefined : n.start);
            let o = (n == null ? undefined : n.selectedBlocks) || [];
            if (Array.isArray(o) && o.length > 0) {
              let e = o[o.length - 1];
              if (e.block_id !== (n == null ? undefined : n.start)) {
                V(r, e.block_id);
              }
            }
            (function e(n, i, r = false) {
              if (!i || !n) {
                return;
              }
              let o = i[n];
              if (!o) {
                return;
              }
              let a = docBlockChildrenUtil.getBlockChildren(o);
              let l = [];
              if (!Array.isArray(a)) {
                return;
              }
              let c = -1;
              let s = o.data.type;
              for (r = r || docBlockTypeConstants.tableCalloutTypes.includes(s); ++c < a.length;) {
                let n = a[c];
                let o = i[n];
                if (!o) {
                  continue;
                }
                if (r) {
                  o.data.folded = false;
                }
                let s = o.data.type;
                let u = F(s);
                if (!u && o.data.folded) {
                  W(i, o.data.children);
                  o.data.children = [];
                } else if (u && o.data.folded) {
                  let e = function (e, n, i, r) {
                    for (let o = i; o < n.length; o++) {
                      let i = e[n[o]];
                      if (!i) {
                        break;
                      }
                      let a = i.data.type;
                      if (F(a) && z(a) <= r) {
                        return o;
                      }
                    }
                    return Infinity;
                  }(i, a, c + 1, z(s));
                  W(i, o.data.children);
                  o.data.children = [];
                  W(i, a.slice(Math.min(a.length, c + 1), e));
                  c = e - 1;
                } else {
                  e(n, i, r);
                }
                o.data.folded = $(o.data, false);
                l.push(n);
              }
              if (s !== docBlockTypeConstants.blockTypeConstants.TABLE) {
                o.data.children = l;
              }
            })(i, r);
            H("removed fold", r);
            let a = {};
            H("pruned", a = (n == null ? undefined : n.around) ? docBlockPruningUtility.pruneClientVarsByAround(e, n) : function (e, n) {
              docxShortcutFeatureDetection.debugLogger(`use compatiblePruneClientVars, MAX_RENDERED_COUNT:${L}`);
              let i = e.id;
              let r = e.block_map;
              let o = {};
              X(r[i])(r, o, L, n);
              return o;
            }(e, n));
            let l = {
              ...a
            };
            return {
              ...e,
              block_map: l
            };
          }(i, {
            start: E ? a == null ? undefined : a.recordId : o,
            around: E,
            textualCard: l,
            tableCellsAnchor: n,
            selectedBlocks: a == null ? undefined : a.selectedBlocks
          });
          docxAnchorImageLoaderLogger.logStageDuration(docxShortcutConstants.shortcutEventTypes.PRUNE_FINISH);
          if (l && a && !i.block_map[a == null ? undefined : a.recordId]) {
            docxShortcutFeatureDetection.debugLogger("not find anchor, will fallback highlight first block");
            docPreviewBlockUtils.updateBlockRecordId(a, i);
            docxAnchorImageLoaderLogger.reportDowngrade(docxShortcutFeatureDetection.notFindAnchor);
          }
          if (r != null) {
            r(i, a);
          }
        }
        docxUserDetailManager.UserDetailManager.applyClientVar(i);
        if (isDesktopBrowserChecker.isDesktopBrowser()) {
          clientVarMetaManager.ClientVarMetaManager.applyClientVar(i);
        }
        this.setState({
          fetchLoading: false,
          fetchError: false,
          clientVars: i,
          wholeClientVars: v
        });
      } catch (e) {
        if (e.code === errorStatusCodes.ErrorCode.NoPerm) {
          this.showNoPermError();
        }
        this.setState({
          fetchLoading: false,
          fetchError: true,
          coverInfo: null
        });
        if (i != null) {
          i(e);
        }
        reduxStoreInitializer.reduxStore.dispatch(storeDocActions.updateVarErrorCode(e.code));
      }
    }
    getScrollerForLayoutManager() {
      let {
        scroller: i
      } = this.props;
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isLark || !i) {
        return window;
      } else if (typeof i == "string") {
        return document.querySelector(i) ?? window;
      } else {
        return i.current ?? window;
      }
    }
    getCoverInfo(e) {
      let {
        record: {
          snapshot: n
        }
      } = e.getBlockModelByBlockId(e.getRootBlockId());
      let i = n.cover;
      if (i == null ? undefined : i.type) {
        return {
          type: i.type,
          offset_ratio_x: i.offset_ratio_x,
          offset_ratio_y: i.offset_ratio_y,
          [coverImageUrlUtils.getCoverSourceKey(i.type)]: coverImageUrlUtils.getCoverSourceValue(i),
          src: xssContentSanitizer.sanitizeUrl(coverImageUrlUtils.getCoverImageUrl(i), null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rWjNZME01ZDFsN%9Xc*lNak-zWWpJMWJHSn$$bnBNTTBwc1d%ST$l$nBET$hs-$Z6$nJXb*hL-kdOcE9WRlpWMlJz$l$oS2JH%nRiR3hrT$$wc1ltM$NiR050$m5sTWJsSjZa$WRHZ$ZvelZubz0"
          }),
          lightSrc: coverImageUrlUtils.getCoverImageUrlFromSource(i),
          mime_type: i.mime_type,
          status: i.status
        };
      } else {
        return null;
      }
    }
    render() {
      let n = this.props.store ?? reduxStoreInitializer.reduxStore;
      return reactJsxRuntimeCoreReexport.jsx(reduxProviderLogic.contextProvider, {
        store: n,
        children: e => {
          this.reactReduxContext = e;
          if (!this.state.fetchLoading && !this.state.fetchError) {
            return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
              children: [this.props.recursionProps.isPreview && reactJsxRuntimeCoreReexport.jsx(eZ, {
                coverInfo: this.state.coverInfo
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: docxEditorConstantsConfig.imageViewerSlot
              }), reactJsxRuntimeCoreReexport.jsx(s, {
                onError: this.props.onError,
                onMount: this.onMount,
                onUnmount: this.onUnmount,
                createDocxEditor: this.createDocxEditor,
                children: this.props.children
              })]
            });
          }
        }
      });
    }
    constructor(e) {
      super(e);
      eA(this, "editor", undefined);
      eA(this, "reactReduxContext", undefined);
      eA(this, "isUnmounted", false);
      eA(this, "state", {
        fetchError: false,
        fetchLoading: true,
        clientVars: null,
        wholeClientVars: null,
        coverInfo: null
      });
      eA(this, "onMount", e => {
        var n;
        var i;
        if ((n = (i = this.props).onMount) !== null && n !== undefined) {
          n.call(i, e);
        }
        let r = this.getCoverInfo(e.blockManager);
        this.setState({
          coverInfo: r
        });
      });
      eA(this, "onUnmount", e => {
        var n;
        var i;
        if ((n = (i = this.props).onUnmount) !== null && n !== undefined) {
          n.call(i, e);
        }
      });
      eA(this, "createDocxEditor", e => {
        var i;
        let {
          recursionProps: r
        } = this.props;
        let {
          token: a,
          getAuthToken: l
        } = this.props;
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(editorCommands.editorCommands.WillCreateDoc, Date.now());
        let c = new clientVarLazyConsumerRegistry.ClientVarLazyConsumerRegistry({
          isPreview: r == null ? undefined : r.isPreview,
          rootRecordId: a,
          onError: this.props.onError
        });
        let s = {
          BlockContextProvider: e => {
            let {
              children: n
            } = e;
            return reduxProviderLogic.reduxProvider(this.reactReduxContext, n);
          },
          layoutConfig: {
            scroller: this.getScrollerForLayoutManager(),
            enableVirtualRender: (i = this.props.enableVirtualRender) !== null && i !== undefined && i,
            enableIdleWorker: false,
            errorFrom: "recordRenderer"
          },
          ErrorBoundary: docxBlockErrorBoundary.BlockErrorBoundary
        };
        docxAnchorImageLoaderLogger.logStageDuration(docxShortcutConstants.shortcutEventTypes.EDITOR_INIT);
        let u = docxEditorFactory.createDocxEditor({
          name: "page-preview",
          dataProvider: c.dataProvider,
          config: {
            container: e,
            boundary: e,
            token: a,
            rootRecordId: a,
            copyable: r.isPreview,
            commentable: false,
            editable: false,
            editPermission: false,
            preview: true,
            scroller: this.getScrollerForLayoutManager(),
            ...r,
            messageBlockOptions: {
              version: this.state.clientVars?.structure_version || 0
            },
            dataHelper: c,
            getAuthToken: l,
            events: this.props.events
          },
          ...this.props.getEditorModules({
            "infra/compatible-editor-context": {
              getIsMobileEditMode: () => false
            },
            ...(this.props.docxSignal ? {
              "docx-root-injector": {
                docxSignal: this.props.docxSignal
              }
            } : {}),
            renderer: s
          })
        });
        u.api.lifecycle.editorDidDestroy$.subscribe(() => {
          c.destroy();
        });
        this.editor = u;
        let d = c.clientVarLazyConsumer;
        d.token = this.state.clientVars.id;
        Promise.resolve().then(() => {
          if (this.isUnmounted) {
            return;
          }
          let e = this.state.wholeClientVars;
          u.api.viewService.willMount$.subscribe(() => {
            let {
              orderedListModule: n,
              headingModule: i
            } = u.api.getService(compatibleEditorContext_1.compatibleContext);
            if (n != null) {
              n.initOrderFromClientvars(e, e.id);
            }
            if (i != null) {
              i.initOrderFromClientvars(e, e.id);
            }
          });
          let n = this.state.clientVars;
          d.add(n.id, docxLazyConsumerConfig.blockTypes.NORMAL, n, true);
        });
        return u;
      });
      eA(this, "showNoPermError", () => {
        toastNotificationManager_1.toastManager.show({
          type: "error",
          closable: true,
          content: t("error.doc.no_permission")
        });
      });
      this.onUnmount = this.onUnmount.bind(this);
    }
  }
  require.d(exports, {
    DocPreviewComponent: function () {
      return eM;
    }
  });
}