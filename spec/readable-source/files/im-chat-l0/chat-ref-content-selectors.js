// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L9' to 'getRefContentState'
// - Renamed export 'Lv' to 'getRefContentNode'
// - Renamed export 'Qx' to 'getEnabledRefs'
// - Renamed export 'UC' to 'useRefContent'
// - Renamed export 'ZO' to 'useFilteredRefs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 434690
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatBotStateConstants = require("chat-bot-state-constants") /*id: 924042*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  let s = (e, t) => {
    let i = e.refContentMap[t];
    if (!!i && !isEmptyUtil.isEmpty(i.refContents)) {
      return i;
    }
  };
  let c = (e, t) => e.filter(e => {
    if (e.type !== "attachment") {
      return true;
    }
    for (let i in t) {
      if (t[i].key === e.fileKey) {
        return t[i].reviewState !== chatBotStateConstants.reviewStates.ReviewState_NotCompliant;
      }
    }
    return true;
  });
  let d = e => {
    let t = chatStoreManager.useStoreSelector("refContentStore", t => s(t, e), deepEqualUtil_1.deepEqual);
    let i = chatStoreManager.useStoreSelector("attachmentUploadStore", e => e.preprocessTaskMap, deepEqualUtil_1.deepEqual);
    return reactCoreLibraryReexport.useMemo(() => {
      if (!t || isEmptyUtil.isEmpty(t.refContents)) {
        return;
      }
      let e = c(t.refContents, i);
      return {
        ...t,
        refContents: e
      };
    }, [t, i]);
  };
  let p = e => {
    let t = d(e);
    return reactCoreLibraryReexport.useMemo(() => ({
      ...t,
      refContents: (t == null ? undefined : t.refContents) ? messageBoxTypeCheckers.filterEnabledRefs(t.refContents) : undefined
    }), [t]);
  };
  let _ = e => s(chatStoreManager.getStoreState("refContentStore"), e);
  let f = e => {
    let i = _(e);
    let n = chatStoreManager.getStoreState("attachmentUploadStore").preprocessTaskMap;
    let r = c((i == null ? undefined : i.refContents) ?? [], n);
    return messageBoxTypeCheckers.filterEnabledRefs(r);
  };
  require.d(exports, {
    getRefContentState: function () {
      return _;
    },
    getRefContentNode: function () {
      return s;
    },
    getEnabledRefs: function () {
      return f;
    },
    useRefContent: function () {
      return d;
    },
    useFilteredRefs: function () {
      return p;
    }
  });
}