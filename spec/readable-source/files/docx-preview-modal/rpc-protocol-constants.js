// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cs' to 'messageTypes'
// - Renamed export 'em' to 'connectionStates'
// - Renamed export 'jg' to 'isError'
// - Renamed export 'tm' to 'errorCodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 645329
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  let o = {
    PARSE_ERROR: -32700,
    INVALID_REQUEST: -32600,
    METHOD_NOT_FOUND: -32601,
    INVALID_PARAMS: -32602,
    INTERNAL_ERROR: -32603,
    TIMEOUT: -32000,
    CONNECTION_CLOSED: -32001,
    HANDLER_ERROR: -32002
  };
  (i = {}).HANDSHAKE_REQUEST = "HANDSHAKE_REQUEST";
  i.HANDSHAKE_RESPONSE = "HANDSHAKE_RESPONSE";
  i.HEARTBEAT = "HEARTBEAT";
  i.HEARTBEAT_ACK = "HEARTBEAT_ACK";
  i.RPC_REQUEST = "RPC_REQUEST";
  i.RPC_RESPONSE = "RPC_RESPONSE";
  i.EVENT = "EVENT";
  let s = i;
  (r = {}).DISCONNECTED = "disconnected";
  r.CONNECTING = "connecting";
  r.CONNECTED = "connected";
  r.RECONNECTING = "reconnecting";
  let a = r;
  function l(e) {
    return "error" in e;
  }
  require.d(exports, {
    messageTypes: function () {
      return s;
    },
    connectionStates: function () {
      return a;
    },
    isError: function () {
      return l;
    },
    errorCodes: function () {
      return o;
    }
  });
}