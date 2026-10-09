// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SV' to 'getMyCreationStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 736603
         */
module.exports = function (module, exports, require) {
  let i;
  var skillMessageListUtil = require("skill-message-list-util") /*id: 97107*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var aispaceFileDownloadUtilities = require("aispace-file-download-utilities") /*id: 130148*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  async function u(e) {
    let t;
    try {
      let {
        data: n
      } = await apiServicesCollection.SamanthaApiService.AISpaceNodeInfo(e);
      if (!n) {
        return Promise.reject(Error("FetchNodeInfoApiDataNotFound"));
      }
      let {
        children: i
      } = n;
      n.children = i == null ? undefined : i.filter(e => !function (e) {
        if (!e) {
          return false;
        }
        let {
          node_type: n
        } = e || {};
        let i = e.content?.directory_type;
        return !isUndefinedCheck.isUndefined(i) && n === businessLayoutConstants.ItemType.Directory && i !== businessLayoutConstants.ViewCategory.Default;
      }(e));
      t = n;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "FetchNodeInfoApiErrorByMyCreation",
        error: e
      });
      return Promise.reject(e);
    }
    return t;
  }
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  function m(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class v {
    get getState() {
      return this.storeApi.getState;
    }
    constructor(e) {
      m(this, "storeApi", undefined);
      m(this, "setState", e => {
        let t = this.storeApi.setState;
        if (typeof e == "function") {
          t(immerCoreImplementation.produce(t => {
            e(t);
          }));
          return;
        }
        t(e);
      });
      m(this, "useShallowStore", e => this.storeApi(e, deepEqualityUtil_1.isDeepEqual));
      m(this, "createStore", e => ({
        storeApi: reactStoreFactory.createStore(() => e)
      }));
      immerCoreImplementation.MapSetPlugin();
      let {
        storeApi: t
      } = this.createStore(e);
      this.storeApi = t;
    }
  }
  function g(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class _ extends v {
    constructor(...e) {
      super(...e);
      g(this, "showMyCreation", e => {
        this.setState({
          nodeId: e
        });
        this.fetchNodeList();
      });
      g(this, "hideMyCreation", () => {
        this.reset();
      });
      g(this, "fetchNodeId", async () => {
        try {
          let n = await apiServicesCollection.SamanthaApiService.AISpaceHomepage();
          if (n == null ? undefined : n.data?.system_directory) {
            let e = n.data.system_directory.filter(e => {
              return (e == null ? undefined : e.content?.directory_type) === businessLayoutConstants.ViewCategory.Creation;
            })?.[0];
            let i = e == null ? undefined : e.id;
            if (i) {
              this.setState({
                nodeId: i
              });
              return i;
            }
          }
        } catch (e) {}
      });
      g(this, "fetchNodeList", async () => {
        let e = this.getState();
        let {
          inited: t,
          loading: n
        } = e;
        if (n) {
          return;
        }
        if (!e.nodeId) {
          await this.fetchNodeId();
        }
        let {
          nodeId: i
        } = this.getState();
        if (i) {
          if (!t) {
            this.setState({
              loading: true
            });
          }
          try {
            let {
              children: e = [],
              next_cursor: t,
              has_more: n
            } = (await u({
              node_id: i,
              need_full_path: true,
              size: 50,
              sort_param: {
                need_sort_config: true,
                sort_order: businessLayoutConstants.SortOrder.Desc,
                sort_type: businessLayoutConstants.SortField.Default
              }
            })) || {};
            this.setState(i => {
              i.nodeList = e;
              i.hasMore = n;
              i.nextCursor = t;
              let r = {
                ...i.nodeMap
              };
              e.forEach(e => {
                r[e.id || ""] = e;
              });
              i.nodeMap = r;
            });
          } catch (e) {}
          this.setState(e => {
            e.inited = true;
            e.loading = false;
          });
        }
      });
      g(this, "loadMore", async () => {
        let {
          hasMore: e,
          loadMoreLoading: t,
          nextCursor: n,
          nodeId: i
        } = this.getState();
        if (e !== false && !t && i && n) {
          this.setState({
            loadMoreLoading: true
          });
          try {
            let {
              children: e = [],
              next_cursor: t,
              has_more: o
            } = (await u({
              node_id: i,
              need_full_path: true,
              size: 50,
              cursor: n,
              sort_param: {
                need_sort_config: true,
                sort_order: businessLayoutConstants.SortOrder.Desc,
                sort_type: businessLayoutConstants.SortField.Default
              }
            })) || {};
            this.setState(n => {
              n.nodeList = skillMessageListUtil.skillMessageProcessor(n.nodeList || [], e, e => e.id);
              n.hasMore = o;
              n.nextCursor = t;
              let i = {
                ...n.nodeMap
              };
              e.forEach(e => {
                i[e.id || ""] = e;
              });
              n.nodeMap = i;
            });
          } catch (e) {}
          this.setState({
            loadMoreLoading: false
          });
        }
      });
      g(this, "handlePreviewImage", async e => {
        let {
          nodeList: t
        } = this.getState();
        let n = t == null ? undefined : t.filter(e => (e == null ? undefined : e.node_type) === businessLayoutConstants.ItemType.Image && aispaceFileDownloadUtilities.isSupportedFileType(getFileExtension.getFileExtension(e.name || e.key || "")));
        let i = n == null ? undefined : n.findIndex(t => (t == null ? undefined : t.id) === e);
        if ((n == null ? undefined : n.length) && i > -1) {
          let e = await aispaceFileDownloadUtilities.getCachedFileUrls(n);
          this.setState({
            previewData: {
              list: n.map(t => ({
                name: t.name,
                url: e == null ? undefined : e[t.id || ""],
                node: t
              })),
              index: i
            }
          });
        }
      });
      g(this, "closePreview", () => {
        this.setState({
          previewData: undefined
        });
      });
      g(this, "selectNodes", e => {
        this.setState(t => {
          let {
            selectedNodeIdSet: n
          } = t;
          let i = new Set(n);
          e.forEach(e => {
            let {
              id: t
            } = e;
            if (t) {
              i.add(t);
            }
          });
          t.selectedNodeIdSet = i;
        });
      });
      g(this, "unselectNodes", e => {
        this.setState(t => {
          let {
            selectedNodeIdSet: n
          } = t;
          let i = new Set(n);
          e.forEach(e => {
            let {
              id: t
            } = e;
            if (t) {
              i.delete(t);
            }
          });
          t.selectedNodeIdSet = i;
        });
      });
      g(this, "removeSelectedNodes", () => {
        this.setState(e => {
          let t = e.nodeList || [];
          let n = new Set(e.selectedNodeIdSet);
          e.nodeList = t.filter(e => e.id && !n.has(e.id));
          e.selectedNodeIdSet = undefined;
        });
      });
      g(this, "unselectAll", () => {
        this.setState({
          selectedNodeIdSet: undefined
        });
      });
      g(this, "selectAll", () => {
        let {
          nodeList: e
        } = this.getState();
        this.setState({
          selectedNodeIdSet: new Set(e == null ? undefined : e.map(e => e.id || ""))
        });
      });
      g(this, "reset", () => {
        let e = this.getState();
        let t = {};
        Object.keys(e).forEach(e => e !== "nodeId" && (t[e] = undefined));
        this.setState(t);
      });
    }
  }
  let b = () => i ||= new _({});
  require.d(exports, {
    getMyCreationStore: function () {
      return b;
    }
  });
}