// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(612108) to 'card-action-packet-schema'
// - Resolved require(559565) to 'url-entity-registration'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 229507
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("card-action-packet-schema") /*id: 612108*/;
  require("url-entity-registration") /*id: 559565*/;
  let i = {
    oneofs: {
      Action: {
        oneof: ["get", "post", "command", "openUrlV2", "switchState", "showToast", "showDialog"]
      }
    },
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
      parameters: {
        type: "Parameters",
        id: 3,
        options: {
          deprecated: true
        }
      },
      cmd: {
        type: "int32",
        id: 4,
        options: {
          deprecated: true
        }
      },
      packet: {
        type: "CardActionPacket",
        id: 5,
        options: {
          deprecated: true
        }
      },
      openUrl: {
        type: "URL",
        id: 6,
        options: {
          deprecated: true
        }
      },
      fallbackActionId: {
        type: "string",
        id: 7
      },
      get: {
        type: "GetAction",
        id: 1000
      },
      post: {
        type: "PostAction",
        id: 1001
      },
      command: {
        type: "LarkCommandAction",
        id: 1002
      },
      openUrlV2: {
        type: "OpenURLAction",
        id: 1003
      },
      switchState: {
        type: "SwitchStateAction",
        id: 1004
      },
      showToast: {
        type: "ShowToastAction",
        id: 1005
      },
      showDialog: {
        type: "ShowDialogAction",
        id: 1006
      }
    },
    nested: {
      Method: {
        values: {
          GET: 1,
          POST: 2,
          LARK_COMMAND: 3,
          OPEN_URL: 4,
          SWITCH_STATE: 5,
          SHOW_TOAST: 6,
          SHOW_DIALOG: 7
        }
      },
      Parameters: {
        fields: {
          parameters: {
            keyType: "string",
            type: "string",
            id: 1
          },
          userId: {
            type: "string",
            id: 2
          },
          sourceId: {
            type: "string",
            id: 3
          },
          previewId: {
            type: "string",
            id: 4
          }
        }
      },
      GetAction: {
        fields: {
          parameters: {
            type: "Parameters",
            id: 1
          }
        }
      },
      PostAction: {
        fields: {
          parameters: {
            type: "Parameters",
            id: 1
          }
        }
      },
      LarkCommandAction: {
        fields: {
          cmd: {
            type: "int32",
            id: 1
          },
          packet: {
            type: "CardActionPacket",
            id: 2
          },
          parameters: {
            type: "Parameters",
            id: 3
          }
        }
      },
      OpenURLAction: {
        fields: {
          openUrl: {
            type: "URL",
            id: 1
          }
        }
      },
      SwitchStateAction: {
        fields: {
          nextStateId: {
            type: "string",
            id: 1
          }
        }
      },
      ShowToastAction: {
        fields: {
          type: {
            type: "ToastType",
            id: 1,
            options: {
              default: "info"
            }
          },
          content: {
            type: "string",
            id: 2
          },
          duration: {
            type: "int32",
            id: 3
          }
        },
        nested: {
          ToastType: {
            values: {
              success: 1,
              error: 2,
              info: 3,
              warning: 4
            }
          }
        }
      },
      ShowDialogAction: {
        fields: {
          title: {
            type: "DialogItem",
            id: 1
          },
          content: {
            type: "DialogItem",
            id: 2
          },
          buttons: {
            rule: "repeated",
            type: "DialogButton",
            id: 3
          }
        },
        nested: {
          DialogItem: {
            fields: {
              text: {
                type: "string",
                id: 1
              },
              numberOfLines: {
                type: "int32",
                id: 2,
                options: {
                  default: 0
                }
              }
            }
          },
          DialogButtonType: {
            values: {
              DEFAULT: 0,
              PRIMARY: 1,
              DANGER: 2
            }
          },
          DialogButton: {
            fields: {
              text: {
                type: "string",
                id: 1
              },
              type: {
                type: "DialogButtonType",
                id: 2,
                options: {
                  default: "DEFAULT"
                }
              },
              actionId: {
                type: "string",
                id: 3
              }
            }
          }
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "UrlPreviewAction", i);
  protobufCodecHelper.createProtobufCodec("entities", "UrlPreviewAction", undefined, true);
  i.nested.Method.values;
}