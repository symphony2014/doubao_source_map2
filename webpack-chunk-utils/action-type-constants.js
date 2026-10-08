// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'ActionTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 199942
         */
module.exports = function (module, exports, require) {
  let i = {
    findReplace: {
      TRIGGER_FIND_REPLACE: "TRIGGER_FIND_REPLACE",
      OPEN_FIND_REPLACE_BOX: "OPEN_FIND_REPLACE_BOX",
      CLOSE_FIND_REPLACE_BOX: "CLOSE_FIND_REPLACE_BOX",
      START_FINDING: "START_FINDING",
      SET_IS_REPLACING_ALL: "SET_IS_REPLACING_ALL",
      UPDATE_FIND_REPLACE_RESULT: "UPDATE_FIND_REPLACE_RESULT",
      SET_REPLACE_TEXT: "SET_REPLACE_TEXT",
      FIND_REPLACE_SHOW_MORE: "FIND_REPLACE_SHOW_MORE"
    },
    network: {
      SET_NETWORK_STATE: "SET_NETWORK_STATE"
    },
    member: {
      ADD_SUITE_MEMBERS: "ADD_SUITE_MEMBERS",
      UPDATE_SUITE_MEMBER: "UPDATE_SUITE_MEMBER",
      UPDATE_SUITE_MEMBERS: "UPDATE_SUITE_MEMBERS",
      REMOVE_SUITE_MEMBERS: "REMOVE_SUITE_MEMBERS",
      RESET_SUITE_MEMBERS: "RESET_SUITE_MEMBERS",
      SET_CURRENT_MEMBER_ID: "SET_CURRENT_MEMBER_ID",
      SET_MEMBERS_COUNT: "SET_MEMBERS_COUNT"
    },
    SET_SHOULD_PRINT: "SET_SHOULD_PRINT",
    flowPermission: {
      SET_FLOW_INIT: "SET_FLOW_INIT",
      UPDATE_FLOW_ROLE: "UPDATE_FLOW_ROLE",
      UPDATE_FLOW_ACTION: "UPDATE_FLOW_ACTION"
    },
    flowSetting: {
      UPDATE_FLOW_SETTING: "UPDATE_FLOW_SETTING"
    },
    suit: {
      SET_SUITE_CLIENTVARS_ERROR: "SET_SUITE_CLIENTVARS_ERROR",
      DELETE_SUITE_CLIENTVARS_ERROR: "DELETE_SUITE_CLIENTVARS_ERROR"
    }
  };
  require.d(exports, {
    ActionTypes: function () {
      return i;
    }
  });
}