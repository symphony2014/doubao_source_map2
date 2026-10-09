// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BS' to 'getCurrentPathNodeInfos'
// - Renamed export 'Gn' to 'isCreationCategorySelector'
// - Renamed export 'I0' to 'getShareOverviewNodeInfos'
// - Renamed export 'IQ' to 'getActiveTabOrPath'
// - Renamed export 'IV' to 'isMeetingMinutesSelector'
// - Renamed export 'Rt' to 'isDocumentsCategorySelector'
// - Renamed export 'Sw' to 'getSelectedNodeIds'
// - Renamed export 'cn' to 'getCurrentTabNodeInfos'
// - Renamed export 'i5' to 'isDirectoryTypeSelector'
// - Renamed export 'jt' to 'getCurrentPathId'
// - Renamed export 'kK' to 'isConversationFilesSelector'
// - Renamed export 'kW' to 'isNotMyUploadTab'
// - Renamed export 'zg' to 'isCodeArtifactSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 941899
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var businessLayoutDirectoryChecks = require("business-layout-directory-checks") /*id: 960082*/;
  var aiSpaceStoreManager = require("ai-space-store-manager") /*id: 798389*/;
  var driveAiShareOverviewStore = require("drive-ai-share-overview-store") /*id: 262375*/;
  let s = () => {
    let e;
    let {
      activeTab: i,
      currentPathStack: t,
      rootId: n
    } = aiSpaceStoreManager.useAiSpaceStore.getState();
    if (i === "myUpload") {
      return t[t.length - 1] || n;
    } else {
      return i;
    }
  };
  function l() {
    return aiSpaceStoreManager.useAiSpaceStore(e => e.currentPathStack[e.currentPathStack.length - 1] || e.rootId);
  }
  let c = () => aiSpaceStoreManager.useAiSpaceStore(e => {
    let i = e.activeTab;
    let t = e.nodeListMap[i];
    if (t == null) {
      return undefined;
    } else {
      return t.map(i => e.nodeInfoMap[i]);
    }
  });
  let d = () => driveAiShareOverviewStore.shareOverviewStore(e => {
    let i = e.currentPathStack[e.currentPathStack.length - 1] || e.rootId;
    let t = e.nodeListMap[i];
    if (t == null) {
      return undefined;
    } else {
      return t.map(i => e.nodeInfoMap[i]);
    }
  });
  let u = () => aiSpaceStoreManager.useAiSpaceStore(e => {
    let i = e.currentPathStack[e.currentPathStack.length - 1] || e.rootId;
    let t = e.nodeListMap[i];
    if (t == null) {
      return undefined;
    } else {
      return t.map(i => e.nodeInfoMap[i]);
    }
  });
  function p() {
    return aiSpaceStoreManager.useAiSpaceStore(e => e.selectedNodeIds, deepEqualityUtil_1.isDeepEqual);
  }
  function m() {
    return aiSpaceStoreManager.useAiSpaceStore(e => {
      let i = e.currentPathStack[0];
      if (!i) {
        return false;
      }
      let t = e.nodeInfoMap[i];
      return businessLayoutDirectoryChecks.isDocumentsCategory(t);
    });
  }
  function _() {
    return aiSpaceStoreManager.useAiSpaceStore(e => {
      let i = e.currentPathStack[0];
      if (!i) {
        return false;
      }
      let t = e.nodeInfoMap[i];
      return businessLayoutDirectoryChecks.isConversationFiles(t);
    });
  }
  function h() {
    return aiSpaceStoreManager.useAiSpaceStore(e => {
      let i = e.currentPathStack[0];
      if (!i) {
        return false;
      }
      let t = e.nodeInfoMap[i];
      return businessLayoutDirectoryChecks.isMeetingMinutes(t);
    });
  }
  function f() {
    return aiSpaceStoreManager.useAiSpaceStore(e => {
      let i = e.currentPathStack[0];
      if (!i) {
        return false;
      }
      let t = e.nodeInfoMap[i];
      return businessLayoutDirectoryChecks.isCodeArtifact(t);
    });
  }
  function v() {
    return aiSpaceStoreManager.useAiSpaceStore(e => {
      let i = e.currentPathStack[0];
      if (!i) {
        return false;
      }
      let t = e.nodeInfoMap[i];
      return businessLayoutDirectoryChecks.isDirectoryType(t);
    });
  }
  function g() {
    return aiSpaceStoreManager.useAiSpaceStore(e => e.activeTab !== "myUpload");
  }
  function k() {
    return aiSpaceStoreManager.useAiSpaceStore(e => {
      let i = e.currentPathStack[0];
      if (!i) {
        return false;
      }
      let t = e.nodeInfoMap[i];
      return businessLayoutDirectoryChecks.isCreationCategory(t);
    });
  }
  require.d(exports, {
    getCurrentPathNodeInfos: function () {
      return u;
    },
    isCreationCategorySelector: function () {
      return k;
    },
    getShareOverviewNodeInfos: function () {
      return d;
    },
    getActiveTabOrPath: function () {
      return s;
    },
    isMeetingMinutesSelector: function () {
      return h;
    },
    isDocumentsCategorySelector: function () {
      return m;
    },
    getSelectedNodeIds: function () {
      return p;
    },
    getCurrentTabNodeInfos: function () {
      return c;
    },
    isDirectoryTypeSelector: function () {
      return v;
    },
    getCurrentPathId: function () {
      return l;
    },
    isConversationFilesSelector: function () {
      return _;
    },
    isNotMyUploadTab: function () {
      return g;
    },
    isCodeArtifactSelector: function () {
      return f;
    }
  });
}