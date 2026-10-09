// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(612108) to 'card-action-packet-schema'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 852722
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("card-action-packet-schema") /*id: 612108*/;
  let n = {
    fields: {
      url: {
        rule: "required",
        type: "string",
        id: 1
      },
      method: {
        rule: "required",
        type: "Method",
        id: 2
      },
      requiredParameters: {
        type: "RequiredParameters",
        id: 3
      },
      parameters: {
        type: "Parameters",
        id: 4
      },
      cmd: {
        type: "int32",
        id: 5
      },
      packet: {
        type: "CardActionPacket",
        id: 6
      },
      openUrl: {
        type: "Url",
        id: 7
      }
    },
    nested: {
      Method: {
        values: {
          UNKNOWN_METHOD: 0,
          GET: 1,
          POST: 2,
          LARK_COMMAND: 3,
          OPEN_URL: 4
        }
      },
      Url: {
        fields: {
          url: {
            type: "string",
            id: 1
          },
          iosUrl: {
            type: "string",
            id: 2
          },
          androidUrl: {
            type: "string",
            id: 3
          },
          pcUrl: {
            type: "string",
            id: 4
          },
          harmonyUrl: {
            type: "string",
            id: 5
          }
        }
      },
      RequiredParameters: {
        fields: {
          needUserInfo: {
            type: "bool",
            id: 1,
            options: {
              default: false
            }
          },
          needMessageInfo: {
            type: "bool",
            id: 2,
            options: {
              default: false
            }
          },
          needUserId: {
            type: "bool",
            id: 3,
            options: {
              default: false
            }
          },
          needMessageId: {
            type: "bool",
            id: 4,
            options: {
              default: false
            }
          }
        }
      },
      UserInfo: {
        fields: {
          userOpenId: {
            type: "string",
            id: 1
          }
        }
      },
      MessageInfo: {
        fields: {
          messageOpenId: {
            type: "string",
            id: 2
          }
        }
      },
      Parameters: {
        fields: {
          parameters: {
            keyType: "string",
            type: "string",
            id: 1
          },
          userInfo: {
            type: "UserInfo",
            id: 2
          },
          messageInfo: {
            type: "MessageInfo",
            id: 3
          },
          userId: {
            type: "string",
            id: 4
          },
          messageId: {
            type: "string",
            id: 5
          }
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "CardAction", n);
  protobufCodecHelper.createProtobufCodec("entities", "CardAction", undefined, true);
  n.nested.Method.values;
}