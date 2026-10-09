// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 510123
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  let i = {
    oneofs: {
      CardComponentProperty: {
        oneof: ["engine", "flexLayout"]
      }
    },
    fields: {
      type: {
        rule: "required",
        type: "Type",
        id: 1
      },
      childIds: {
        rule: "repeated",
        type: "string",
        id: 2
      },
      style: {
        type: "Style",
        id: 3
      },
      engine: {
        type: "EngineProperty",
        id: 1000
      },
      flexLayout: {
        type: "FlexLayoutProperty",
        id: 1001
      }
    },
    nested: {
      Type: {
        values: {
          FLEX_LAYOUT: 0,
          ENGINE: 1
        }
      },
      ValueType: {
        values: {
          AUTO: 0,
          POINT: 1,
          PERCENTAGE: 2
        }
      },
      Value: {
        fields: {
          type: {
            type: "ValueType",
            id: 1
          },
          value: {
            type: "float",
            id: 2
          }
        }
      },
      Align: {
        values: {
          TOP: 0,
          MIDDLE: 1,
          BOTTOM: 2,
          STRETCH: 3,
          BASELINE: 4
        }
      },
      Orientation: {
        values: {
          ROW: 0,
          COLUMN: 1,
          ROW_REVERSE: 2,
          COLUMN_REVERSE: 3
        }
      },
      Justify: {
        values: {
          START: 0,
          CENTER: 1,
          END: 2,
          SPACE_BETWEEN: 3,
          SPACE_AROUND: 4,
          SPACE_EVENLY: 5
        }
      },
      Padding: {
        fields: {
          top: {
            type: "float",
            id: 1
          },
          right: {
            type: "float",
            id: 2
          },
          bottom: {
            type: "float",
            id: 3
          },
          left: {
            type: "float",
            id: 4
          }
        }
      },
      FlexWrap: {
        values: {
          NO_WRAP: 0,
          WRAP: 1,
          WRAP_REVERSE: 2,
          LINEAR_WRAP: 3
        }
      },
      Style: {
        fields: {
          width: {
            type: "Value",
            id: 1
          },
          height: {
            type: "Value",
            id: 2
          },
          maxWidth: {
            type: "Value",
            id: 3
          },
          maxHeight: {
            type: "Value",
            id: 4
          },
          minWidth: {
            type: "Value",
            id: 5
          },
          minHeight: {
            type: "Value",
            id: 6
          },
          growWeight: {
            type: "int32",
            id: 7
          },
          shrinkWeight: {
            type: "int32",
            id: 8
          },
          alignSelf: {
            type: "Align",
            id: 9
          }
        }
      },
      EngineProperty: {
        fields: {
          type: {
            type: "EngineType",
            id: 1
          },
          body: {
            type: "bytes",
            id: 2
          }
        },
        nested: {
          EngineType: {
            values: {
              SMARTCARD: 0
            }
          }
        }
      },
      FlexLayoutProperty: {
        fields: {
          orientation: {
            type: "Orientation",
            id: 1,
            options: {
              default: "ROW"
            }
          },
          flexWrap: {
            type: "FlexWrap",
            id: 2,
            options: {
              default: "NO_WRAP"
            }
          },
          mainAxisSpacing: {
            type: "float",
            id: 3
          },
          crossAxisSpacing: {
            type: "float",
            id: 4
          },
          padding: {
            type: "Padding",
            id: 5
          },
          mainAxisJustify: {
            type: "Justify",
            id: 6,
            options: {
              default: "START"
            }
          },
          crossAxisAlign: {
            type: "Align",
            id: 7,
            options: {
              default: "TOP"
            }
          },
          forceUseCompactMode: {
            type: "bool",
            id: 8,
            options: {
              default: false
            }
          }
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "CardComponent", i);
  protobufCodecHelper.createProtobufCodec("entities", "CardComponent", undefined, true);
  i.nested.Type.values;
  i.nested.ValueType.values;
  i.nested.Align.values;
  i.nested.Orientation.values;
  i.nested.Justify.values;
  i.nested.FlexWrap.values;
  protobufCodecHelper.createProtobufCodec("entities", "RenderRouterEntity", {
    fields: {
      rootId: {
        type: "string",
        id: 1
      },
      elements: {
        keyType: "string",
        type: "CardComponent",
        id: 2
      },
      widthMode: {
        type: "string",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "RenderRouterEntity", undefined, true);
}