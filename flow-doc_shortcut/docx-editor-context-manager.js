// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'DocxEditorContextManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 721458
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var a;
  var l;
  var c;
  var s;
  var u;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockRectServiceId = require("block-rect-service-id") /*id: 768934*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var eventEmitterProviderNameExport = require("event-emitter-provider-name-export") /*id: 889973*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var docxBlockViewWidthManager = require("docx-block-view-width-manager") /*id: 145137*/;
  var docxEditorLayoutSelectorBase = require("docx-editor-layout-selector-base") /*id: 710348*/;
  var docxBlockitManager = require("docx-blockit-manager") /*id: 829862*/;
  var docxCoverManager = require("docx-cover-manager") /*id: 347206*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxHeadingOrderManager = require("docx-heading-order-manager") /*id: 703122*/;
  var docxLayoutChangeEventManager = require("docx-layout-change-event-manager") /*id: 319980*/;
  var layoutItemChangeManager = require("layout-item-change-manager") /*id: 988323*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var orderedBlockConstants = require("ordered-block-constants") /*id: 976830*/;
  var orderedBlockManager = require("ordered-block-manager") /*id: 107278*/;
  function B(e, n, i) {
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
  class O extends orderedBlockManager.OrderedBlockManager {
    match(e) {
      let n = e.record.get(["seq"]);
      return (this.matchType(e.type) || this.matchType(e.record.snapshot.type)) && this.isValidSeq(n);
    }
    matchType(e) {
      return typeof e == "string" && e === docBlockTypeConstants.blockTypeConstants.ORDERED;
    }
    forceUpdate(e) {
      emptyExportFunction.emptyFunction();
    }
    initContainer(e) {
      emptyExportFunction.emptyFunction();
    }
    handleInsert(e) {
      emptyExportFunction.emptyFunction();
    }
    handleRemove(e, n, i) {
      emptyExportFunction.emptyFunction();
    }
    calcOrder(e) {
      for (let n of e) {
        let e = 0;
        for (let i of n) {
          if (i.seq !== "auto") {
            e = Number(i.seq);
          } else {
            e++;
          }
          this.updateOrder(i.recordId, e);
        }
      }
    }
    calOrderQueue(e) {
      return [e];
    }
    batchModifySeqIfNecessary(e) {
      emptyExportFunction.emptyFunction();
    }
    constructor(...e) {
      super(...e);
      B(this, "blockTypes", [docBlockTypeConstants.blockTypeConstants.ORDERED]);
      B(this, "containerType", [...orderedBlockConstants.orderedBlockTypes]);
    }
  }
  var viewportScrollManager = require("viewport-scroll-manager") /*id: 546823*/;
  var docxCommentConnector = require("docx-comment-connector") /*id: 923545*/;
  var foldProviderAccessor = require("fold-provider-accessor") /*id: 786534*/;
  function D(e, n, i, r) {
    if (i) {
      Object.defineProperty(e, n, {
        enumerable: i.enumerable,
        configurable: i.configurable,
        writable: i.writable,
        value: i.initializer ? i.initializer.call(r) : undefined
      });
    }
  }
  function H(e, n, i) {
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
  function $(e, n, i, r, o) {
    var a = {};
    Object.keys(r).forEach(function (e) {
      a[e] = r[e];
    });
    a.enumerable = !!a.enumerable;
    a.configurable = !!a.configurable;
    if ("value" in a || a.initializer) {
      a.writable = true;
    }
    a = i.slice().reverse().reduce(function (i, r) {
      return r(e, n, i) || i;
    }, a);
    if (o && a.initializer !== undefined) {
      a.value = a.initializer ? a.initializer.call(o) : undefined;
      a.initializer = undefined;
    }
    if (a.initializer === undefined) {
      Object.defineProperty(e, n, a);
      return null;
    } else {
      return a;
    }
  }
  o = $((r = class {
    init(e) {
      var n;
      var i;
      var r;
      var o;
      var a;
      let {
        getIsMobileEditMode: l
      } = e;
      this.getIsMobileEditMode = l;
      let {
        rect: c,
        config: s,
        blockManager: u,
        eventEmitter: d
      } = this;
      let h = s.get("container");
      this.selectionAPI.init({
        getContentContainer: () => h,
        boundaryAreaContainer: s.get("boundary"),
        selectionAreaContainer: document.body,
        unSelectableType: docBlockTypeConstants.selectionViewTypes
      }, this.fold);
      if (!s.get("isPreview")) {
        this.coverModule = new docxCoverManager.DocxCoverManager({
          blockManager: u,
          pageToken: s.get("token"),
          editable: s.get("editable"),
          selectionAPI: this.selectionAPI
        });
      }
      this.viewport = new viewportScrollManager.ViewportScrollManager({
        container: s.get("boundary"),
        selectionAPI: this.selectionAPI,
        fold: this.fold,
        rect: this.rect,
        blockManager: u,
        eventEmitter: this.eventEmitter
      });
      if (docxShortcutFeatureDetection.isAdminWithComment() || s.get("isReview")) {
        n = this.fold;
        i = s.get("token");
        r = s.get("commentable") || false;
        docxEditorEventConstantsAndManager.globalEventBus;
        a = this.viewport;
        this.commentModule = new docxCommentConnector.CommentConnector({
          blockManager: u,
          token: i,
          rect: c,
          fold: n,
          commentable: r,
          pageEventEmitter: d,
          viewport: a,
          selectionAPI: this.selectionAPI,
          scroller: undefined
        });
      }
      this.vcKey = {
        token: s.get("token")
      };
      if (objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.channel") === "saas") {
        this.blockitModule = docxBlockitManager.blockitModuleFactory.creatorBlockitModule(`${this.vcKey.token}_${this.uuid}`, u);
      }
      this.autoExpandCellModule = new docxBlockViewWidthManager.DocxBlockViewWidthManager(this.blockManager);
      this.blockViewportAdapter = new docxEditorLayoutSelectorBase.createLayoutSelector({
        blockManager: this.blockManager
      });
      this.orderedListModule = new O({
        blockManager: this.blockManager,
        eventEmitter: this.eventEmitter,
        env: this.getOrderMode()
      });
      this.headingModule = new docxHeadingOrderManager.HeadingOrderManager({
        blockManager: this.blockManager,
        eventEmitter: this.eventEmitter,
        env: this.getOrderMode()
      });
      this.layout = new docxLayoutChangeEventManager.DocxLayoutChangeEventManager({
        catalogue: new layoutItemChangeManager.LayoutItemChangeManager(),
        content: new layoutItemChangeManager.LayoutItemChangeManager(),
        comment: new layoutItemChangeManager.LayoutItemChangeManager(() => browserEnvironmentDetectionUtils.browserDetector.isLarkFeed ? platformDocUtils.Q67() ? document.querySelector(".feed-container") : document.querySelector(".message-container") : document.querySelector("#flowCommentContainer")),
        editor: new layoutItemChangeManager.LayoutItemChangeManager(() => h)
      });
    }
    get isMobileEditMode() {
      var e;
      var n;
      return (n = (e = this.getIsMobileEditMode) === null || e === undefined ? undefined : e.call(this)) !== null && n !== undefined && n;
    }
    get boundary() {
      return this.config.get("boundary");
    }
    get scroller() {
      return this.config.get("scroller");
    }
    get container() {
      return this.config.get("container");
    }
    get editable() {
      return this.config.get("editable");
    }
    get editPermission() {
      return this.config.get("editPermission");
    }
    get copyable() {
      return this.config.get("copyable");
    }
    get exportable() {
      return this.config.get("exportable");
    }
    toPlainObject() {
      return {
        selectionAPI: this.selectionAPI,
        blockManager: this.blockManager,
        boundary: this.boundary,
        fold: this.fold,
        editable: this.editable,
        editPermission: this.editPermission,
        isMobileEditMode: this.isMobileEditMode,
        isPreview: this.config.get("isPreview"),
        copyable: this.copyable,
        exportable: this.exportable,
        scroller: this.scroller,
        rect: this.rect,
        eventEmitter: this.eventEmitter,
        layout: this.layout,
        container: this.container,
        viewport: this.viewport,
        tokenFromWiki: this.config.get("tokenFromWiki"),
        blockViewportAdapter: this.blockViewportAdapter,
        orderedListModule: this.orderedListModule,
        headingModule: this.headingModule
      };
    }
    destroy() {
      this.viewport.destroy();
      this.blockViewportAdapter.destroy();
      this.headingModule.destroy();
      docxBlockitManager.blockitModuleFactory.destroyBlockitModule(this.blockitModule, `${this.vcKey.token}_${this.uuid}`);
      this.autoExpandCellModule.destroy();
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor() {
      H(this, "getIsMobileEditMode", undefined);
      H(this, "coverModule", undefined);
      H(this, "blockitModule", undefined);
      H(this, "commentModule", undefined);
      H(this, "autoExpandCellModule", undefined);
      H(this, "blockViewportAdapter", undefined);
      H(this, "viewport", undefined);
      H(this, "orderedListModule", undefined);
      H(this, "headingModule", undefined);
      H(this, "layout", undefined);
      D(this, "fold", o, this);
      D(this, "selectionAPI", a, this);
      D(this, "config", l, this);
      D(this, "blockManager", c, this);
      D(this, "rect", s, this);
      D(this, "eventEmitter", u, this);
      H(this, "vcKey", undefined);
      H(this, "uuid", uuidGeneratorUtil.generateUuid());
      H(this, "getOrderMode", () => {
        let {
          config: e
        } = this;
        if (!e.get("isPDF") && e.get("isShortcut")) {
          return orderedBlockManager.RenderEnvEnum.SHORTCUT;
        } else if (e.get("isPDF")) {
          return orderedBlockManager.RenderEnvEnum.PDF;
        } else {
          return orderedBlockManager.RenderEnvEnum.PREVIEW;
        }
      });
    }
  }).prototype, "fold", [foldProviderAccessor.foldProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  a = $(r.prototype, "selectionAPI", [compatBrowserSelectionService_1.selectionServiceKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  l = $(r.prototype, "config", [docxEditorCore.CONFIG_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  c = $(r.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  s = $(r.prototype, "rect", [blockRectServiceId.blockRectServiceId], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  u = $(r.prototype, "eventEmitter", [eventEmitterProviderNameExport.eventEmitterProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let F = r;
  require.d(exports, {
    DocxEditorContextManager: function () {
      return F;
    }
  });
}