// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'xE' to 'useAiSpaceStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 798389
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var storagePersistenceUtil = require("storage-persistence-util") /*id: 143136*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var fileEntityTypeMapper = require("file-entity-type-mapper") /*id: 300358*/;
  var nodeTreeStateManager = require("node-tree-state-manager") /*id: 654652*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var chatDriveConstants = require("chat-drive-constants") /*id: 44559*/;
  let u = {
    shareListReqInfo: {
      nextCursor: undefined,
      hasMore: true
    },
    shareList: [],
    shareListLoaded: false,
    transformedShareList: [],
    shareInfoMap: {},
    selectedShareIds: []
  };
  let p = e => ({
    ...u,
    updateSelectedShareIds: i => {
      e(() => ({
        selectedShareIds: i
      }));
    },
    appendShares: function (i, t, {
      isInit: n
    } = {}) {
      e(e => {
        let a = n ? {} : {
          ...e.shareInfoMap
        };
        i.forEach(e => {
          if (e.share_id) {
            a[e.share_id] = e;
          }
        });
        let r = fileEntityTypeMapper.visibilityToPermissionLevel({
          shareList: i
        });
        return {
          shareListReqInfo: t,
          shareList: n ? i : [...e.shareList, ...i],
          shareListLoaded: true,
          transformedShareList: n ? r : [...e.transformedShareList, ...r],
          shareInfoMap: a,
          selectedShareIds: e.selectedShareIds.filter(e => a[e])
        };
      });
    },
    deleteShares: i => {
      e(e => {
        let {
          shareList: t,
          transformedShareList: n,
          shareInfoMap: a
        } = e;
        let r = {};
        for (let [e, t] of Object.entries(a)) {
          if (!collectionIncludesUtil.includes(i, e)) {
            r[e] = t;
          }
        }
        return {
          shareList: t.filter(e => !collectionIncludesUtil.includes(i, e.share_id)),
          transformedShareList: n.filter(e => !collectionIncludesUtil.includes(i, e.id)),
          shareInfoMap: r,
          selectedShareIds: []
        };
      });
    }
  });
  let m = {
    ...nodeTreeStateManager.defaultNodeState,
    ...u,
    uploadTasks: [],
    disbaleNodeInfoMap: {},
    rootId: chatDriveConstants.defaultId,
    highlightNodeId: null,
    showBanner: true,
    activeTab: "recentAll",
    recentTabs: [],
    displayMode: {}
  };
  let _ = null;
  let h = (e, i, t) => {
    let n = nodeTreeStateManager.createStateUpdater(e, i, t);
    return {
      ...m,
      ...n,
      ...p(e, i, t),
      updateUploadTasks: i => {
        e(() => ({
          uploadTasks: i
        }));
      },
      updateHighlightNodeId: i => {
        e(() => ({
          highlightNodeId: i
        }));
        if (_) {
          clearTimeout(_);
        }
        _ = window.setTimeout(() => {
          e(() => ({
            highlightNodeId: null
          }));
        }, 4000);
      },
      updateShowBannerState: i => {
        e(() => ({
          showBanner: i
        }));
      },
      updaterecentTabs: i => e(() => ({
        recentTabs: i
      })),
      updateActiveTab: i => e(() => ({
        activeTab: i
      })),
      resetStatus() {
        e(() => ({
          currentPathStack: [],
          selectedNodeIds: [],
          selectedNodes: []
        }));
      },
      updateDisplayMode(t, n) {
        let {
          displayMode: a
        } = i();
        e(() => ({
          displayMode: {
            ...a,
            [t]: n
          }
        }));
      },
      updateSortStatus: t => {
        let {
          sortType: n,
          sortOrder: a
        } = t;
        let {
          sortStatus: r
        } = i();
        e(() => ({
          sortStatus: {
            sortType: n ?? r.sortType,
            sortOrder: a ?? r.sortOrder
          }
        }));
      },
      updateSortConfig: (t, n) => {
        let {
          sortConfig: a = {}
        } = i();
        e(() => {
          return {
            sortConfig: {
              ...a,
              [t]: {
                sortType: n.sortType ?? [],
                sortOrder: n.sortOrder ?? []
              }
            }
          };
        });
      },
      getAndUpdateSortStatus: t => {
        let {
          sortStatus: a,
          sortConfig: r
        } = i();
        if (t) {
          if ((r[t]?.sortType || []).includes(a == null ? undefined : a.sortType)) {
            return {
              sortType: a.sortType,
              sortOrder: a.sortOrder
            };
          } else {
            e(() => ({
              sortStatus: {
                ...a,
                sortType: businessLayoutConstants.SortField.Default
              }
            }));
            return {
              sortType: businessLayoutConstants.SortField.Default,
              sortOrder: a.sortOrder
            };
          }
        } else {
          return {
            sortType: a.sortType,
            sortOrder: a.sortOrder
          };
        }
      }
    };
  };
  let f = e => ({
    showBanner: e.showBanner
  });
  let v = e => {
    let {
      prefix: i = "flow",
      isEnableDebug: t,
      reduxDevToolsSnapshot: o,
      merge: s,
      partialize: l,
      storage: c
    } = e;
    let d = storagePersistenceUtil.createPersistOptions({
      name: "ai-space-store",
      prefix: i,
      merge: s,
      partialize: l ?? f,
      storage: c
    });
    let u = reduxDevtoolsPersistIntegration_1.persistMiddleware(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(h), d);
    if (t && o) {
      return reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.devToolsMiddleware(u, {
        name: `${i}-ai-space-store`
      }));
    } else {
      return reactStoreFactory.createStore()(u);
    }
  };
  let g = function () {
    var e = arguments.length;
    var i = Array(e);
    var t = 0;
    for (; t < e; t++) {
      i[t] = arguments[t];
    }
    let {
      _useAISpaceStore: n
    } = g.prototype;
    if (!n) {
      (function (e) {
        let {
          _useAISpaceStore: i
        } = g.prototype || {};
        if (!i) {
          let i = v({
            ...e
          });
          Object.setPrototypeOf(g.prototype, i);
          Object.defineProperties(g, {
            ...Object.getOwnPropertyDescriptors(i)
          });
          g.prototype._useAISpaceStore = i;
        }
      })({
        isEnableDebug: true,
        reduxDevToolsSnapshot: true
      });
    }
    let {
      _useAISpaceStore: a
    } = g.prototype;
    if (a) {
      return a(...i);
    }
    throw Error("useAISpaceStore is not initialized");
  };
  require.d(exports, {
    useAiSpaceStore: function () {
      return g;
    }
  });
}