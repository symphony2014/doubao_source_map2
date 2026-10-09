// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'getInputConfig'
// - Renamed export 'rw' to 'extractValidUrl'
// - Renamed export 'vQ' to 'getEmptyConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 621598
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  let o = e => {
    let t = e.match(/https:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|]/g);
    if (t) {
      return t.map(e => e.trim()).filter(e => messageContentTypeAndStatusChecker.KZS(e)).shift();
    }
  };
  let a = e => ({
    data: [{
      type: chatFieldTypes.getFieldTypes.Text,
      text: `${e("landing_creation_title")} `
    }, {
      type: chatFieldTypes.getFieldTypes.Placeholder,
      placeholder: e("landing_inputmessage_enterURL"),
      text: ""
    }]
  });
  let s = () => ({
    data: []
  });
  require.d(exports, {
    getInputConfig: function () {
      return a;
    },
    extractValidUrl: function () {
      return o;
    },
    getEmptyConfig: function () {
      return s;
    }
  });
}