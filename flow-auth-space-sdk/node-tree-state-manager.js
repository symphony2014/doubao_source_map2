// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'createStateUpdater'
// - Renamed export 'O' to 'defaultNodeState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 654652
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var resourceEnumTypes = require("resource-enum-types") /*id: 801204*/;
  let r = {
    rootId: "0",
    docRootId: "doc_root",
    mettingMinutesRootId: "metting_minutes_root",
    systemNodeIds: [],
    nodeListMap: {},
    nodeListStatusMap: {},
    nodeInfoMap: {},
    currentPathStack: [],
    selectedNodeIds: [],
    selectedNodes: [],
    disbaleNodeInfoMap: {},
    mediaTransformStatus: {},
    sortStatus: {
      sortOrder: resourceEnumTypes.SortOrder.Desc,
      sortType: resourceEnumTypes.SortFields.UpdateTime
    },
    sortConfig: {}
  };
  let o = e => ({
    ...r,
    updateRootId: i => {
      e(() => ({
        rootId: i
      }));
    },
    updateSystemNodeIds: i => {
      e(() => ({
        systemNodeIds: i
      }));
    },
    setNodeListMap: (i, t) => {
      e(immerCoreImplementation.produce(e => {
        e.nodeListMap[i] = t;
      }));
    },
    deleteNodeListMap: i => {
      e(immerCoreImplementation.produce(e => {
        delete e.nodeListMap[i];
      }));
    },
    clearNodeListMap: () => {
      e(() => ({
        nodeListMap: {}
      }));
    },
    setNodeListStatusMap: (i, t) => {
      e(immerCoreImplementation.produce(e => {
        e.nodeListStatusMap[i] = t;
      }));
    },
    deleteNodeListStatusMap: i => {
      e(immerCoreImplementation.produce(e => {
        delete e.nodeListStatusMap[i];
      }));
    },
    clearNodeListStatusMap: () => {
      e(() => ({
        nodeListStatusMap: {}
      }));
    },
    setNodeInfoMap: (i, t) => {
      e(immerCoreImplementation.produce(e => {
        e.nodeInfoMap[i] = t;
      }));
    },
    deleteNodeInfoMap: i => {
      e(immerCoreImplementation.produce(e => {
        delete e.nodeInfoMap[i];
      }));
    },
    clearNodeInfoMap: () => {
      e(() => ({
        nodeInfoMap: {}
      }));
    },
    pushCurrentPathStack: i => {
      e(immerCoreImplementation.produce(e => {
        e.currentPathStack.push(i);
      }));
    },
    popCurrentPathStack: () => {
      let i;
      e(immerCoreImplementation.produce(e => {
        i = e.currentPathStack.pop();
      }));
      return i;
    },
    updateCurrentPathStack: i => {
      e(immerCoreImplementation.produce(e => {
        e.currentPathStack = i;
      }));
    },
    updateSelectedNodeIds: i => {
      e(immerCoreImplementation.produce(e => {
        e.selectedNodeIds = i;
        let t = [];
        i.forEach(i => {
          let n = e.nodeInfoMap[i];
          if (n) {
            t.push(n);
          }
        });
        e.selectedNodes = t;
      }));
    },
    deleteNodes: (i, t) => {
      e(immerCoreImplementation.produce(e => {
        let n = e.nodeListMap[i];
        let a = n == null ? undefined : n.filter(e => !t.includes(e));
        e.nodeListMap[i] = a;
        t.forEach(i => {
          delete e.nodeInfoMap[i];
        });
      }));
    },
    renameNode: (i, t) => {
      e(immerCoreImplementation.produce(e => {
        let n = e.nodeInfoMap[i];
        if (n) {
          n.name = t;
          n.updateTime = String(new Date().getTime());
        }
      }));
    },
    updateGuestCanCreateThread: i => {
      e(immerCoreImplementation.produce(e => {
        e.guestCanCreateThread = i;
      }));
    },
    updateGuestCanSendMessage: i => {
      e(immerCoreImplementation.produce(e => {
        e.guestCanSendMessage = i;
      }));
    },
    disableNode: i => {
      e(immerCoreImplementation.produce(e => {
        (Array.isArray(i) ? i : [i]).forEach(i => {
          e.disbaleNodeInfoMap[i] = true;
        });
      }));
    },
    batchUpdateMediaTransformStatus: i => {
      if (i == null ? undefined : i.length) {
        e(immerCoreImplementation.produce(e => {
          e.mediaTransformStatus = {
            ...e.mediaTransformStatus
          };
          i.forEach(i => {
            e.mediaTransformStatus[i.nodeId] = i.status;
          });
        }));
      }
    },
    batchUpdateNodeAISkillStatus: i => {
      if (i == null ? undefined : i.length) {
        e(immerCoreImplementation.produce(e => {
          i.forEach(i => {
            let t = e.nodeInfoMap[i.nodeId];
            if (t) {
              e.nodeInfoMap[i.nodeId] = {
                ...t,
                content: {
                  ...t.content,
                  aiSkillStatus: i.aiSkillStatus
                }
              };
            }
          });
        }));
      }
    },
    clearAllNodeList: () => {
      e(() => ({
        nodeListMap: {}
      }));
    }
  });
  require.d(exports, {
    createStateUpdater: function () {
      return o;
    },
    defaultNodeState: function () {
      return r;
    }
  });
}