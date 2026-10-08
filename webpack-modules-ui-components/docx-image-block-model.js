// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ImageBlockModel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 608725
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var a;
  var l;
  var c;
  var s;
  var u;
  var d;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxCaptionModelLoader = require("docx-caption-model-loader") /*id: 947061*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  var tempTransactionConst = require("temp-transaction-const") /*id: 825163*/;
  var docTempTransactionManager = require("doc-temp-transaction-manager") /*id: 633045*/;
  var imageManagerProviderName = require("image-manager-provider-name") /*id: 852709*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var waitingMonitorService = require("waiting-monitor-service") /*id: 622032*/;
  var offlineUploadProvider = require("offline-upload-provider") /*id: 363270*/;
  var docxEditorConstants = require("docx-editor-constants") /*id: 708986*/;
  function C(e, n, i, r) {
    if (i) {
      Object.defineProperty(e, n, {
        enumerable: i.enumerable,
        configurable: i.configurable,
        writable: i.writable,
        value: i.initializer ? i.initializer.call(r) : undefined
      });
    }
  }
  function Z(e, n, i) {
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
  function x(e, n, i, r, o) {
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
  r = dependencyInjectionContainer.Dynamic();
  o = dependencyInjectionContainer.Async();
  a = dependencyInjectionContainer.Optional();
  d = class extends docBlockModelClass.DocBlockModel {
    get view() {
      return this.editorAPI.viewService.getBlockViewByBlockId(this.id);
    }
    get captionFindAndReplaceModel() {
      this.captionFindAndReplaceModelImpl ||= docxCaptionModelLoader.createCaptionModel({
        blockId: this.id,
        blockManager: this.blockManager,
        snapshotPath: docxEditorConstants.mediaTypes
      });
      return this.captionFindAndReplaceModelImpl;
    }
    onInit() {
      docxCaptionModelLoader.loadCaptionModel();
    }
    onDestroy() {
      var e;
      let {
        recordId: n
      } = this;
      docTempTransactionManager.cancelTempTx(this.blockManager, `${tempTransactionConst.tempTransaction}-${platformDocUtils.p5T(n)}`);
      if ((e = this.incompleteModelMonitor) !== null && e !== undefined) {
        e.delete(n);
      }
    }
    getText() {
      return `[${t("editorbar.image")}]`;
    }
    constructor(e) {
      super(e);
      C(this, "blockManager", l, this);
      C(this, "imageManager", c, this);
      C(this, "offlineUpload", s, this);
      C(this, "incompleteModelMonitor", u, this);
      Z(this, "captionFindAndReplaceModelImpl", null);
    }
  };
  Z(d, "type", docBlockTypeConstants.blockTypeConstants.IMAGE);
  l = x(d.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  c = x(d.prototype, "imageManager", [imageManagerProviderName.imageManagerName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  s = x(d.prototype, "offlineUpload", [r, o, offlineUploadProvider.offlineUploadSvcId], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  u = x(d.prototype, "incompleteModelMonitor", [a, waitingMonitorService.waitingMonitor], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let S = d;
  exports.ImageBlockModel = S;
}