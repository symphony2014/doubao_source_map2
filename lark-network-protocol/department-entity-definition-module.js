// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Renamed variable 'n' to 'protobufDescriptorRootExport'
// - Resolved require(717712) to 'protobuf-descriptor-root-export'
// - Resolved require(503877) to 'chatter-user-entity-definitions'
// - Resolved require(854036) to 'protobuf-open-field-option'
// - Updated imported property 'J' to 'descriptorRoot' (module 717712)
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 708911
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  var protobufDescriptorRootExport = require("protobuf-descriptor-root-export") /*id: 717712*/;
  let s = {
    LeaderType: {
      values: {
        MainLeader: 1,
        SubLeader: 2
      }
    }
  };
  protobufDescriptorRootExport.descriptorRoot.define("entities").addJSON(s);
  s.LeaderType.values;
  require("chatter-user-entity-definitions") /*id: 503877*/;
  protobufCodecHelper.createProtobufCodec("entities", "DepartmentLeader", {
    fields: {
      leaderType: {
        rule: "required",
        type: "LeaderType",
        id: 1
      },
      leaderID: {
        rule: "required",
        type: "int64",
        id: 2
      },
      leader: {
        type: "Chatter",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "DepartmentLeader", undefined, true);
  require("protobuf-open-field-option") /*id: 854036*/;
  protobufCodecHelper.createProtobufCodec("entities", "Department", {
    fields: {
      id: {
        rule: "required",
        type: "string",
        id: 1,
        options: {
          "(open.id)": "department_id"
        }
      },
      name: {
        type: "string",
        id: 2
      },
      parentId: {
        type: "string",
        id: 3
      },
      leaderId: {
        type: "string",
        id: 4
      },
      memberCount: {
        type: "int32",
        id: 5
      },
      status: {
        type: "int32",
        id: 6
      },
      namePinyin: {
        type: "string",
        id: 7
      },
      chatId: {
        type: "string",
        id: 8
      },
      hasChild: {
        type: "bool",
        id: 9
      },
      i18nName: {
        keyType: "string",
        type: "string",
        id: 10
      },
      deptLeaders: {
        rule: "repeated",
        type: "DepartmentLeader",
        id: 11
      },
      memberCountByDisplayRule: {
        type: "int32",
        id: 12
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "Department", undefined, true);
}