// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'kX' to 'ensureMemberId'
// - Renamed export 's8' to 'getChatIoInstance'
// - Renamed export 'yE' to 'getMemberId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70666.7b9c3546.js
         * chunkId: 70666
         * moduleId: 956604
         */
module.exports = function (module, exports, require) {
  var flowDocIoClient = require("flow-doc-io-client") /*id: 257963*/;
  function r() {
    let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    return flowDocIoClient.FlowDocIoClient.getInstance({
      initialTicket: "",
      autoConnect: e
    });
  }
  function o() {
    return r().getMemberId();
  }
  async function s() {
    let {
      member_id: e
    } = await r().ensureBaseInfoExist();
    return e;
  }
  require.d(exports, {
    ensureMemberId: function () {
      return s;
    },
    getChatIoInstance: function () {
      return r;
    },
    getMemberId: function () {
      return o;
    }
  });
}