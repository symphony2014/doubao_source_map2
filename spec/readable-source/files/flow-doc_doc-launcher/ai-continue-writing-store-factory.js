// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Xh' to 'createAIContinueWritingStore'
// - Renamed export 'cd' to 'useAIContinueWritingStore'
// - Renamed export 'n4' to 'initializeStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 809140
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var flowDebugStatus = require("flow-debug-status") /*id: 553601*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var docIframeEventConstants = require("doc-iframe-event-constants") /*id: 226725*/;
  let g = {
    editorEditable: false,
    globalEnabled: false,
    userEnabled: false,
    featureCanUse: false,
    blockMenuVisible: false,
    currentDraftKey: undefined,
    draftStreamMap: {},
    draftStateMap: {}
  };
  let p = e => {
    let i = (i, n) => {
      e(immerCoreImplementation.produce(e => {
        if (!e.draftStateMap[i]) {
          e.draftStateMap = {
            [i]: {}
          };
        }
        Object.assign(e.draftStateMap[i], typeof n == "function" ? n(e) : n);
      }));
    };
    return {
      ...g,
      updateAIContinueWritingSupported(i) {
        e(immerCoreImplementation.produce(e => {
          Object.assign(e, i);
          e.featureCanUse = e.editorEditable && e.globalEnabled && e.userEnabled;
          storageWrapperWithFallback.LocalStorageWrapper.setItem(docIframeEventConstants.autoContinueWriteEnable, `${e.userEnabled}`);
        }));
      },
      updateBlockMenuVisible(i) {
        e({
          blockMenuVisible: i
        });
      },
      updateAIContinueWritingCurrentDraftKey(i) {
        if (i) {
          e({
            currentDraftKey: i
          });
        }
      },
      updateAIContinueWritingDraftStreamInfo(i, n, r) {
        if (i && !(n < 0)) {
          e(immerCoreImplementation.produce(e => {
            if (!e.draftStreamMap[i]) {
              e.draftStreamMap = {
                [i]: []
              };
            }
            let o = e.draftStreamMap[i];
            o[n] ||= {};
            let l = o[n];
            Object.assign(l, r);
            l.isEnd = l.isFinished || l.isError;
          }));
        }
      },
      updateAIContinueWritingDraftStateInfo: i,
      updateAIContinueWritingDraftRegenerateIndex(e, n) {
        i(e, i => {
          let a = i.draftStreamMap[e]?.length ?? 0;
          let s = i.draftStateMap[e].regenerateIndex ?? 0;
          let c = s;
          if (n === "prev") {
            c = s - 1;
          } else if (n === "next") {
            c = s + 1;
          } else if (typeof n == "number") {
            c = n;
          }
          return {
            regenerateIndex: Math.max(0, Math.min(a - 1, c))
          };
        });
      }
    };
  };
  let f = e => {
    let {
      prefix: i
    } = e;
    let n = chatFgStoreHooks.getSourceKeySync(storageFeatureGateParser.featureGateKeys.reduxDevToolsSnapshot, {
      source: chatStorageKeys.chatStorageKeys.debugStorage
    });
    let l = reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(p);
    if (flowDebugStatus.isDebugEnabled() && n) {
      return reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.devToolsMiddleware(l, {
        name: `${i}-ai-continue-writing-store`
      }));
    } else {
      return reactStoreFactory.createStore()(l);
    }
  };
  let v = function (e = {}) {
    let {
      prefix: i
    } = e;
    return f({
      prefix: i
    });
  };
  let m = () => {
    _();
    return b;
  };
  let b = function () {
    var e = arguments.length;
    var i = Array(e);
    var n = 0;
    for (; n < e; n++) {
      i[n] = arguments[n];
    }
    if (!b.prototype._useAIContinueWritingStore) {
      _();
    }
    return b.prototype._useAIContinueWritingStore(...i);
  };
  function _() {
    let {
      _useAIContinueWritingStore: e
    } = b.prototype || {};
    if (!e) {
      let e = v();
      Object.setPrototypeOf(b.prototype, e);
      Object.defineProperties(b, {
        ...Object.getOwnPropertyDescriptors(e)
      });
      b.prototype._useAIContinueWritingStore = e;
    }
    return b.prototype._useAIContinueWritingStore;
  }
  require.d(exports, {
    createAIContinueWritingStore: function () {
      return m;
    },
    useAIContinueWritingStore: function () {
      return b;
    },
    initializeStore: function () {
      return _;
    }
  });
}