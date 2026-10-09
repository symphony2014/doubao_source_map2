// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'si' to 'setShowHistoryList'
// - Renamed export 'eH' to 'toggleCommentPanel'
// - Renamed export 'yM' to 'setHighlightComment'
// - Renamed export 'sE' to 'setHoverCommentId'
// - Renamed export 'g4' to 'setCommentList'
// - Renamed export 'yj' to 'useDocxCommentStore'
// - Renamed export 'hA' to 'initCommentStore'
// - Renamed export 'pE' to 'resetCommentStore'
// - Renamed export 'qQ' to 'setRevisionList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 822624
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var docFgServiceConstants = require("doc-fg-service-constants") /*id: 699539*/;
  let u = {
    showHistoryCommentList: false,
    highlightComment: undefined,
    hoverCommentId: undefined,
    commentList: [],
    revisionList: []
  };
  let c = () => ({
    ...u
  });
  let _ = e => {
    let {
      prefix: n
    } = e;
    let {
      getFGValue: r,
      isEnableDebug: u
    } = docFgServiceConstants.getDocFgService();
    let _ = r(docFgServiceConstants.featureFlags.reduxDevToolsSnapshot, {
      source: docFgServiceConstants.serviceKeys.debugStorage
    });
    let l = reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(c);
    if (u() && _) {
      return reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.devToolsMiddleware(l, {
        name: `${n}-docx-flow-comment-store`
      }));
    } else {
      return reactStoreFactory.createStore()(l);
    }
  };
  let l = function (e = {}) {
    let {
      prefix: n
    } = e;
    return _({
      prefix: n
    });
  };
  let s = function () {
    var e = arguments.length;
    var n = Array(e);
    var r = 0;
    for (; r < e; r++) {
      n[r] = arguments[r];
    }
    if (!s.prototype._useDocxFlowCommentStore) {
      E();
    }
    return s.prototype._useDocxFlowCommentStore(...n);
  };
  function E() {
    let {
      _useDocxFlowCommentStore: e
    } = s.prototype || {};
    if (!e) {
      let e = l();
      Object.setPrototypeOf(s.prototype, e);
      Object.defineProperties(s, {
        ...Object.getOwnPropertyDescriptors(e)
      });
      s.prototype._useDocxFlowCommentStore = e;
    }
    return s.prototype._useDocxFlowCommentStore;
  }
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docxCommentUiSelectors = require("docx-comment-ui-selectors") /*id: 133504*/;
  var panelToggleActions = require("panel-toggle-actions") /*id: 310864*/;
  let S = () => {
    E();
    s.setState(u);
  };
  let f = e => {
    s.setState({
      commentList: e
    });
  };
  let A = e => {
    s.setState({
      revisionList: e
    });
  };
  let m = e => {
    let {
      commentList: n,
      revisionList: r
    } = s.getState();
    if (!e || !n.find(n => n.id === e.id) && !r.find(n => n.id === e.id)) {
      s.setState({
        highlightComment: undefined
      });
      return;
    }
    s.setState({
      highlightComment: {
        id: e.id,
        type: e.type
      }
    });
  };
  let I = e => {
    s.setState({
      hoverCommentId: e
    });
  };
  let O = (e = !docxCommentUiSelectors.isCommentPanelShown(reduxStoreInitializer.reduxStore.getState())) => {
    reduxStoreInitializer.reduxStore.dispatch(panelToggleActions.toggleCommentPanel(e));
    return e;
  };
  let R = e => {
    s.setState({
      showHistoryCommentList: e ?? s.getState().showHistoryCommentList
    });
  };
  require.d(exports, {
    setShowHistoryList: function () {
      return R;
    },
    toggleCommentPanel: function () {
      return O;
    },
    setHighlightComment: function () {
      return m;
    },
    setHoverCommentId: function () {
      return I;
    },
    setCommentList: function () {
      return f;
    },
    useDocxCommentStore: function () {
      return s;
    },
    initCommentStore: function () {
      return E;
    },
    resetCommentStore: function () {
      return S;
    },
    setRevisionList: function () {
      return A;
    }
  });
}