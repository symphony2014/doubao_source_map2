// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$8' to 'selectIsLoaded'
// - Renamed export 'E8' to 'getLoadedState'
// - Renamed export 'JK' to 'setLoginList'
// - Renamed export 'to' to 'setLoadedState'
// - Renamed export 'KD' to 'selectLoginList'
// - Renamed export 'TI' to 'subscribeLoaded'
// - Renamed export '_x' to 'getListState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 730252
         */
module.exports = function (module, exports, require) {
  var reduxPersistStoreFactory = require("redux-persist-store-factory") /*id: 273160*/;
  let o = {
    thirdLoginList: ["aweme_v2"],
    thirdLoginListLoaded: true
  };
  let a = reduxPersistStoreFactory.createPersistStore({
    id: Symbol("third-login-store"),
    createSlice: () => o
  });
  let r = () => a(e => {
    let {
      thirdLoginList: n
    } = e;
    return n;
  });
  let c = () => a(e => {
    let {
      thirdLoginListLoaded: n
    } = e;
    return n;
  });
  let s = () => a.getState().thirdLoginList;
  let l = () => a.getState().thirdLoginListLoaded;
  let d = e => a.subscribe((n, i) => {
    let {
      thirdLoginListLoaded: t
    } = n;
    let {
      thirdLoginListLoaded: o
    } = i;
    return e(t, o);
  });
  let _ = e => {
    a.setState({
      thirdLoginList: e,
      thirdLoginListLoaded: true
    });
  };
  let u = e => {
    a.setState({
      thirdLoginListLoaded: e
    });
  };
  require.d(exports, {
    selectIsLoaded: function () {
      return c;
    },
    getLoadedState: function () {
      return l;
    },
    setLoginList: function () {
      return _;
    },
    setLoadedState: function () {
      return u;
    },
    selectLoginList: function () {
      return r;
    },
    subscribeLoaded: function () {
      return d;
    },
    getListState: function () {
      return s;
    }
  });
}