// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'blockitModuleFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 829862
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var docxTokenMappingResolver = require("docx-token-mapping-resolver") /*id: 586713*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  function p(e, n, r) {
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
  let g = null;
  let m = 0;
  let v = "docx";
  let b = new Map();
  class y {
    get blockitModuleReady() {
      return platformDocUtils.RUC.ready && this.hasInit;
    }
    encodeISVBlockKey(e) {
      let [n] = e.split("_");
      return n;
    }
    findWikiToken(e) {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile || !platformDocUtils.mNU()) {
        return "";
      }
      let n = objectPathGetDefault.getObjectPathDefault(flowPermissionSettingSelectors.flowSelectorsHub, "wiki.selectWikiInfos");
      let r = objectPathGetDefault.getObjectPathDefault(flowPermissionSettingSelectors.flowSelectorsHub, "wiki.selectNodeMapNew");
      let c = n ? n(reduxStoreInitializer.reduxStore.getState()) : {};
      let u = r ? r(reduxStoreInitializer.reduxStore.getState()) : {};
      let s = Object.values(c).find(n => n.objToken === e);
      if (s && s.wikiToken) {
        return s.wikiToken;
      }
      let d = Object.values(u).find(n => n && n.objToken === e);
      if (d && d.wikiToken) {
        return d.wikiToken;
      } else {
        return "";
      }
    }
    getblockManger(e) {
      let n;
      let r = platformDocUtils.RUC.findFlagByOpBlock(e);
      let i = this.encodeISVBlockKey(r);
      let l = false;
      if (b.size === 1) {
        l = true;
      }
      b.forEach(e => {
        if (l || i && e.hasRecordByRecordId(i)) {
          n = e;
        }
      });
      return n;
    }
    setBlockManagerMap(e, n) {
      var r;
      b.set(e, n);
      let o = this.encodeISVBlockKey(e);
      n.addListenerOnce(renderEventConstants.paint, () => {
        this.firstPaintStatus.set(o, true);
        let e = this.firstPaintHandlerMap.get(o);
        if (e) {
          e.forEach(e => e());
          this.firstPaintHandlerMap.delete(o);
        }
      });
      let i = [n.editorAPI.lifecycle.editorReady$.subscribe(() => {
        this.blockitDataManager.batchFetchData(this.getAllAPPBlockID(n), {
          forceWrite: true,
          host: v
        });
      }), (r = n.lazyRecordStatus) === null || r === undefined ? undefined : r.applyAllDone$.subscribe(() => {
        this.blockitDataManager.batchFetchData(this.getAllAPPBlockID(n), {
          host: v
        });
      })];
      n.editorAPI.lifecycle.editorWillDestroy$.subscribe(() => {
        i.forEach(e => e == null ? undefined : e.unsubscribe());
      });
    }
    destroy() {
      platformDocUtils.RUC.destroy(platformDocUtils.Emj.DOCX);
      this.blockitDataManager.destory();
      this.hasInit = false;
    }
    setBlockRect(e, n) {
      this.rectCache.set(e, n);
    }
    getBlockRect(e) {
      let n = platformDocUtils.RUC.findFlagByOpBlock(e);
      if (n) {
        return this.rectCache.get(n);
      } else {
        return null;
      }
    }
    getBlockInstance(e) {
      return platformDocUtils.RUC.getBlockInstance(e);
    }
    subscribeEvent(e, n) {
      platformDocUtils.RUC.subscribeEvent(e, n);
    }
    unSubscribeEvent(e, n) {
      platformDocUtils.RUC.unSubscribeEvent(e, n);
    }
    triggerEventAPI(e) {
      var n = arguments.length;
      var r = Array(n > 1 ? n - 1 : 0);
      var i = 1;
      for (; i < n; i++) {
        r[i - 1] = arguments[i];
      }
      platformDocUtils.RUC.triggerEventAPI(e, ...r);
    }
    subscribeFirstPaintEvent(e, n) {
      if (!this.firstPaintStatus.get(e)) {
        let r = this.firstPaintHandlerMap.get(e);
        if (r) {
          r.push(n);
        } else {
          this.firstPaintHandlerMap.set(e, [n]);
        }
      }
    }
    getBlockConfig(e) {
      if (platformDocUtils.RUC.getBlockConfig) {
        return platformDocUtils.RUC.getBlockConfig(e);
      } else {
        return null;
      }
    }
    async getBlockList() {
      return await docxTaskSchedulerUtilities.scheduleTaskWithConfig({
        name: "docx.blockitList",
        action: () => platformDocUtils.RUC.getAvailableBlockList({
          host: v
        })
      });
    }
    async mountBlock(e) {
      if (!this.blockitModuleReady) {
        try {
          let n = Date.now();
          await this.initBlockit();
          platformDocUtils.RUC.setCollectionInfo(e.flag, {
            block_init_duration: Date.now() - n
          });
        } catch (n) {
          platformDocUtils.RUC.setCollectionInfo(e.flag, {
            status: "fail",
            error_msg: n.message
          });
        }
      }
      return platformDocUtils.RUC.mountBlock({
        ...e,
        channel: platformDocUtils.Emj.DOCX
      });
    }
    reloadBlock(e) {
      platformDocUtils.RUC.reloadBlock(e);
    }
    getBlockInfo(e) {
      return platformDocUtils.RUC.getBlockInfo(e);
    }
    getBlockLocalPackMode(e) {
      let n = platformDocUtils.RUC.getBlockInfo(e);
      if (n) {
        return {
          hasLocalPack: n.hasLocalPack,
          isOnline: n.isOnline
        };
      } else {
        return null;
      }
    }
    setBlockDebugStatus(e, n) {
      platformDocUtils.RUC.setBlockDebugStatus(e, n);
    }
    isBlockUseLocal(e) {
      return platformDocUtils.RUC.getBlockDebugStatus(e);
    }
    async mountCreator(e) {
      if (!this.blockitModuleReady) {
        try {
          await this.initBlockit();
        } catch (e) {
          platformDocUtils.RUC.blockitCollectEvent("cmm_isv_creator_loaded_dev", {
            status: "fail",
            error_msg: e.message
          });
        }
      }
      return platformDocUtils.RUC.mountCreator({
        ...e,
        channel: platformDocUtils.Emj.DOCX
      });
    }
    getAllAPPBlockID(e) {
      let n = [];
      let r = {};
      e.structService.getBlockStructsByType(docBlockTypeConstants.blockTypeConstants.ISV).forEach(e => {
        let {
          app_block_id: o
        } = e.snapshot;
        if (!r[o]) {
          r[o] = 1;
          n.push(o);
        }
      });
      return n;
    }
    reloadCreator(e) {
      platformDocUtils.RUC.reloadCreator(e);
    }
    get isDebugMode() {
      return platformDocUtils.RUC.isDebugMode;
    }
    destroyInstance(e) {
      platformDocUtils.RUC.destroyBlock(e);
    }
    generateSchema(e, n) {
      return platformDocUtils.RUC.generateSchema(e, {
        ...n,
        host: v
      });
    }
    async pasteBlock(e, n, r) {
      if (!this.blockitModuleReady) {
        await this.initBlockit();
      }
      let i = await platformDocUtils.RUC.bulkPaste([e], {
        ...n,
        host: v
      }, {
        locale: platformDocUtils.HiA.getLocale(),
        platform: browserEnvironmentDetectionUtils.browserDetector.isMobile ? "mobile" : "pc"
      }, r).then(e => e[0]);
      if (i.code) {
        throw i;
      }
      return i;
    }
    async initBlockit(e) {
      if (!this.hasInit) {
        platformDocUtils.RUC.switchHost(platformDocUtils.Emj.DOCX);
        platformDocUtils.RUC.registerAPI(platformDocUtils.Emj.DOCX, platformDocUtils.fnj.GET_CONTAINER_RECT, this.getContainerRect);
        platformDocUtils.RUC.registerAPI(platformDocUtils.Emj.DOCX, platformDocUtils.fnj.GET_INIT_PARAMS, this.getInitParams);
        platformDocUtils.RUC.registerAPI(platformDocUtils.Emj.DOCX, platformDocUtils.fnj.GET_DOC_INFO, this.getDocInfo);
        if (docxFeatureFlags.isNotEmbedDocx()) {
          platformDocUtils.RUC.registerAPI(platformDocUtils.Emj.DOCX, platformDocUtils.fnj.GET_DOC_EDITABLE, this.getDocEditable);
        }
        this.hasInit = true;
      }
      await platformDocUtils.RUC.init(e);
      if (!platformDocUtils.RUC.ready) {
        throw Error("Blockit init op has fail , plz check log ");
      }
    }
    constructor() {
      p(this, "hasInit", false);
      p(this, "rectCache", new Map());
      p(this, "firstPaintHandlerMap", new Map());
      p(this, "firstPaintStatus", new Map());
      p(this, "blockitDataManager", new platformDocUtils.yTy());
      p(this, "getDocInfo", (e, n) => {
        let {
          node: r
        } = n;
        let i = this.getblockManger(r);
        let l = i ? docxTokenMappingResolver.resolveDocToken(i == null ? undefined : i.rootRecordId) : "default token";
        return {
          status: platformDocUtils.hiA.Success,
          data: {
            token: l,
            wikiToken: this.findWikiToken(l),
            data: {
              token: l
            }
          }
        };
      });
      p(this, "getDocEditable", (e, n) => {
        var r;
        let {
          node: i
        } = n;
        let l = this.getblockManger(i);
        let a = (r = l == null ? undefined : l.config.editable) !== null && r !== undefined && r;
        let c = l == null ? undefined : l.config.get("revising");
        return {
          status: platformDocUtils.hiA.Success,
          data: {
            editable: a && !c
          }
        };
      });
      p(this, "getInitParams", () => ({
        status: platformDocUtils.hiA.Success
      }));
      p(this, "getContainerRect", (e, n) => {
        let {
          node: r
        } = n;
        let i = {
          height: 0,
          width: 0
        };
        let l = this.getBlockRect(r);
        if (l) {
          let {
            width: e,
            height: n
          } = l;
          i.height = n;
          i.width = e;
        }
        return {
          status: platformDocUtils.hiA.Success,
          data: i
        };
      });
      p(this, "getStaticBlock", e => this.blockitDataManager.getStaticBlock(e, v));
      p(this, "fetchStaticBlockData", e => this.blockitDataManager.batchFetchData([e], {
        forceWrite: false,
        host: v
      }));
    }
  }
  exports.blockitModuleFactory = {
    creatorBlockitModule: (e, n) => {
      m += 1;
      g ||= new y();
      g.setBlockManagerMap(e, n);
      return g;
    },
    getBlockitModule: () => g,
    destroyBlockitModule(e, n) {
      b.delete(n);
      if (g === e && (m -= 1) == 0) {
        g.destroy();
        g = null;
      }
    }
  };
}