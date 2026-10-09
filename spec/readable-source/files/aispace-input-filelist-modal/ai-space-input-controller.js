// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'AiSpaceNavController'
// - Renamed export 'k' to 'AiSpaceSearchCtrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: aispace-input-filelist-modal.0d7d9a41.js
         * chunkId: 38418
         * moduleId: 737589
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aispaceInputStore = require("aispace-input-store") /*id: 718092*/;
  var aispaceInputFilelistStore = require("aispace-input-filelist-store") /*id: 631075*/;
  var fileEntityTypeMapper = require("file-entity-type-mapper") /*id: 300358*/;
  var samanthaAiSpaceApiServices = require("samantha-ai-space-api-services") /*id: 563338*/;
  function c(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class u {
    async loadInitialData() {
      let {
        root_id: e,
        children: t = [],
        next_cursor: n,
        has_more: i,
        system_directory: a = []
      } = (await samanthaAiSpaceApiServices.fetchHomepage()) || {};
      if (!e) {
        return;
      }
      aispaceInputStore.aispaceInputStore.getState().updateRootId(e);
      let s = t == null ? undefined : t.map(e => e.id).filter(e => !isUndefinedCheck.isUndefined(e));
      let c = a.map(e => e.id).filter(e => !isUndefinedCheck.isUndefined(e));
      if (c) {
        aispaceInputStore.aispaceInputStore.getState().updateSystemNodeIds(c);
      }
      aispaceInputStore.aispaceInputStore.getState().setNodeListMap(e, s || []);
      [...a, ...t].forEach(e => {
        let t = fileEntityTypeMapper.convertApiResponse(e);
        if (e.id && t) {
          aispaceInputStore.aispaceInputStore.getState().setNodeInfoMap(e.id, t);
        }
      });
      if (!isUndefinedCheck.isUndefined(i) && !isUndefinedCheck.isUndefined(n)) {
        aispaceInputStore.aispaceInputStore.getState().setNodeListStatusMap(e, {
          hasMore: i,
          nextCursor: n
        });
      }
    }
    async fetchAndUpdateNodeInfo(e, {
      needFullPath: t = false,
      size: n
    } = {}) {
      let i = await samanthaAiSpaceApiServices.fetchNodeInfo({
        node_id: e,
        need_full_path: t,
        size: n
      });
      let {
        children: a = [],
        node_info: s,
        next_cursor: c,
        has_more: u
      } = i || {};
      let p = a.map(e => e.id).filter(e => !isUndefinedCheck.isUndefined(e));
      aispaceInputStore.aispaceInputStore.getState().setNodeListMap(e, p);
      [s, ...a].forEach(e => {
        let t = fileEntityTypeMapper.convertApiResponse(e);
        if (e.id && t) {
          aispaceInputStore.aispaceInputStore.getState().setNodeInfoMap(e.id, t);
        }
      });
      if (!isUndefinedCheck.isUndefined(u) && !isUndefinedCheck.isUndefined(c)) {
        aispaceInputStore.aispaceInputStore.getState().setNodeListStatusMap(e, {
          hasMore: u,
          nextCursor: c
        });
      }
      return i;
    }
    async loadAndEnterNode(e, {
      size: t
    } = {}) {
      try {
        let {
          path: n = []
        } = await this.fetchAndUpdateNodeInfo(e, {
          needFullPath: true,
          size: t
        });
        let i = n == null ? undefined : n[0];
        if (i) {
          let e = fileEntityTypeMapper.convertApiResponse(i);
          if (!i.id || !e) {
            return;
          }
          aispaceInputStore.aispaceInputStore.getState().setNodeInfoMap(i.id, e);
          aispaceInputStore.aispaceInputStore.getState().updateRootId(i.id);
        }
        n.forEach(e => {
          let t = fileEntityTypeMapper.convertApiResponse(e);
          if (e.id && t) {
            aispaceInputStore.aispaceInputStore.getState().setNodeInfoMap(e.id, t);
          }
        });
        let a = n.slice(1).map(e => e.id).filter(e => !isUndefinedCheck.isUndefined(e));
        aispaceInputStore.aispaceInputStore.getState().updateCurrentPathStack(a);
      } catch {
        aispaceInputStore.aispaceInputStore.getState().updateCurrentPathStack([]);
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "AISpaceController_LoadAndEnterNodeFailed",
          error: Error("AISpaceController_LoadAndEnterNodeFailed")
        });
      }
    }
    async loadMoreNodeList(e) {
      try {
        let {
          nextCursor: t,
          hasMore: n
        } = aispaceInputStore.aispaceInputStore.getState().nodeListStatusMap[e] || {};
        if (!n) {
          return Promise.reject(Error("AISpace_LoadMoreNodeListNotHasMore"));
        }
        let {
          data: s
        } = await apiServicesCollection.SamanthaApiService.AISpaceNodeInfo({
          node_id: e,
          cursor: t
        });
        let {
          children: d,
          next_cursor: c,
          has_more: u
        } = s || {};
        if (!isUndefinedCheck.isUndefined(u) && !isUndefinedCheck.isUndefined(c)) {
          aispaceInputStore.aispaceInputStore.getState().setNodeListStatusMap(e, {
            hasMore: u,
            nextCursor: c
          });
        }
        if (!d) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "AISpaceController_LoadMoreNodeListFoundNoChildren",
            error: Error("AISpaceController_LoadMoreNodeListFoundNoChildren")
          });
          return;
        }
        let p = aispaceInputStore.aispaceInputStore.getState().nodeListMap[e] || [];
        let h = d.map(e => e.id).filter(e => !isUndefinedCheck.isUndefined(e));
        aispaceInputStore.aispaceInputStore.getState().setNodeListMap(e, [...p, ...h]);
        d.forEach(e => {
          let t = fileEntityTypeMapper.convertApiResponse(e);
          if (e.id && t) {
            aispaceInputStore.aispaceInputStore.getState().setNodeInfoMap(e.id, t);
          }
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "AISpaceController_FetchNodeInfoApiError",
          error: e
        });
        return Promise.reject(e);
      }
    }
    getCurrentNodeId() {
      let {
        currentPathStack: e
      } = aispaceInputStore.aispaceInputStore.getState();
      let {
        rootId: t
      } = aispaceInputStore.aispaceInputStore.getState();
      return e[e.length - 1] || t;
    }
    getRootNodeId() {
      return aispaceInputStore.aispaceInputStore.getState().rootId;
    }
  }
  class p {
    async handleSearch(e) {
      let {
        fileTypes: t,
        searchValue: n
      } = e;
      if (!n) {
        return;
      }
      this.fileTypes = t;
      this.searchValue = n;
      let {
        rootID: i
      } = this;
      let {
        nodes: a,
        next_cursor: o,
        has_more: c
      } = (await samanthaAiSpaceApiServices.searchAttachments({
        file_types: t,
        limit: 50,
        key_word: n
      })) || {};
      aispaceInputFilelistStore.inputFilelistStore.getState().updateRootId(i);
      let u = a == null ? undefined : a.map(e => e.id).filter(e => !isUndefinedCheck.isUndefined(e));
      aispaceInputFilelistStore.inputFilelistStore.getState().setNodeListMap(i, u || []);
      if (a != null) {
        a.forEach(e => {
          let t = fileEntityTypeMapper.convertApiResponse(e);
          if (e.id && t) {
            aispaceInputFilelistStore.inputFilelistStore.getState().setNodeInfoMap(e.id, t);
          }
        });
      }
      if (!isUndefinedCheck.isUndefined(c) && !isUndefinedCheck.isUndefined(o)) {
        aispaceInputFilelistStore.inputFilelistStore.getState().setNodeListStatusMap(i, {
          hasMore: c,
          nextCursor: o
        });
      }
    }
    async loadMoreNodeList() {
      try {
        let {
          fileTypes: e,
          searchValue: t,
          rootID: n
        } = this;
        let {
          nextCursor: i,
          hasMore: a
        } = aispaceInputFilelistStore.inputFilelistStore.getState().nodeListStatusMap[n] || {};
        if (!a) {
          return Promise.reject(Error("AISpace_LoadMoreNodeListNotHasMore"));
        }
        let {
          nodes: o = [],
          next_cursor: c,
          has_more: u
        } = (await samanthaAiSpaceApiServices.searchAttachments({
          file_types: e,
          limit: 50,
          key_word: t,
          cursor: i
        })) || {};
        if (!isUndefinedCheck.isUndefined(u) && !isUndefinedCheck.isUndefined(c)) {
          aispaceInputFilelistStore.inputFilelistStore.getState().setNodeListStatusMap(n, {
            hasMore: u,
            nextCursor: c
          });
        }
        let p = aispaceInputFilelistStore.inputFilelistStore.getState().nodeListMap[n] || [];
        let h = o.map(e => e.id).filter(e => !isUndefinedCheck.isUndefined(e));
        aispaceInputFilelistStore.inputFilelistStore.getState().setNodeListMap(n, [...p, ...h]);
        o.forEach(e => {
          let t = fileEntityTypeMapper.convertApiResponse(e);
          if (e.id && t) {
            aispaceInputFilelistStore.inputFilelistStore.getState().setNodeInfoMap(e.id, t);
          }
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "AISpaceInputSearchController_FetchMoreListApiError",
          error: e
        });
        return Promise.reject(e);
      }
    }
    getCurrentNodeId() {
      let {
        currentPathStack: e
      } = aispaceInputFilelistStore.inputFilelistStore.getState();
      let {
        rootId: t
      } = aispaceInputFilelistStore.inputFilelistStore.getState();
      return e[e.length - 1] || t;
    }
    getRootNodeId() {
      return aispaceInputFilelistStore.inputFilelistStore.getState().rootId;
    }
    constructor() {
      c(this, "fileTypes", []);
      c(this, "searchValue", "");
      c(this, "rootID", "0");
    }
  }
  require.d(exports, {
    AiSpaceNavController: function () {
      return u;
    },
    AiSpaceSearchCtrl: function () {
      return p;
    }
  });
}