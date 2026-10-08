// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'pickerErrorCodes'
// - Renamed export 'w' to 'pickerActionTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 120865
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var i;
  var a;
  var c;
  var u;
  (a = r ||= {}).MULTI_SEARCH = "MULTI_SEARCH";
  a.MSGURGENT = "MSGURGENT";
  a.BATCH_SEARCH = "BATCH_SEARCH";
  a.QUERY_OVER_LIMIT = "QUERY_OVER_LIMIT";
  a.ADD = "ADD";
  a.ADD_WITH_OUTER = "ADD_WITH_OUTER";
  a.ADD_WITH_GROUP = "ADD_WITH_GROUP";
  a.ADD_WITH_GROUP_AND_OUTER = "ADD_WITH_GROUP_AND_OUTER";
  a.TRANSMIT = "TRANSMIT";
  a.TRANSMIT_WITH_OUTER = "TRANSMIT_WITH_OUTER";
  a.EMAILRECEIVER = "EMAILRECEIVER";
  a.EMAILURGENT = "EMAILURGENT";
  a.DOCS = "DOCS";
  a.ADDGROUP = "ADDGROUP";
  a.ADDGROUP_WITH_OUTER = "ADDGROUP_WITH_OUTER";
  a.P2P_CHAT = "P2P_CHAT";
  a.P2P_CHAT_WITH_OUTER = "P2P_CHAT_WITH_OUTER";
  a.BOT = "BOT";
  a.CALENDAR_SUBSCRIB = "CALENDAR_SUBSCRIB";
  a.CALENDAR_SUBSCRIB_WITH_OUTER = "CALENDAR_SUBSCRIB_WITH_OUTER";
  (c = o ||= {})[c.ALL = 1] = "ALL";
  c[c.USER = 2] = "USER";
  (u = i ||= {})[u.OVERSIZE = 1] = "OVERSIZE";
  u[u.NETWORK_ERROR = 2] = "NETWORK_ERROR";
  require.d(exports, {
    pickerErrorCodes: function () {
      return i;
    },
    pickerActionTypes: function () {
      return r;
    }
  });
}