// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CG' to 'setMessageBoxItem'
// - Renamed export 'Ed' to 'resetMessageView'
// - Renamed export 'RR' to 'clearMessageBoxMap'
// - Renamed export 'Uj' to 'setInViewMessageList'
// - Renamed export 'o7' to 'scrollMessageBoxItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47840.01121ae4.js
         * chunkId: 47840
         * moduleId: 732796
         */
module.exports = function (module, exports, require) {
  var messageViewStore = require("message-view-store") /*id: 241059*/;
  let r = e => {
    messageViewStore.messageStore.setState({
      inViewMessageList: e
    });
  };
  let a = () => {
    messageViewStore.messageStore.setState(messageViewStore.initialState);
  };
  let s = (e, t) => {
    messageViewStore.messageStore.setState(n => ({
      messageBoxElementsMap: {
        ...n.messageBoxElementsMap,
        [e]: t
      }
    }));
  };
  let o = () => {
    messageViewStore.messageStore.setState(() => ({
      messageBoxElementsMap: {}
    }));
  };
  let u = e => {
    let t = messageViewStore.messageStore.getState().messageBoxElementsMap[e];
    if (t) {
      t.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  require.d(exports, {
    setMessageBoxItem: function () {
      return s;
    },
    resetMessageView: function () {
      return a;
    },
    clearMessageBoxMap: function () {
      return o;
    },
    setInViewMessageList: function () {
      return r;
    },
    scrollMessageBoxItem: function () {
      return u;
    }
  });
}