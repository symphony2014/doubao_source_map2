// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Renamed variable 'n' to 'protobufDescriptorRootExport'
// - Resolved require(717712) to 'protobuf-descriptor-root-export'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// - Updated imported property 'J' to 'descriptorRoot' (module 717712)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 342966
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  protobufCodecHelper.createProtobufCodec("entities", "EffectiveInterval", {
    fields: {
      startTime: {
        type: "int64",
        id: 1
      },
      endTime: {
        type: "int64",
        id: 2
      },
      isShowEndTime: {
        type: "bool",
        id: 3,
        options: {
          default: true
        }
      },
      isOpenWithoutEndTime: {
        type: "bool",
        id: 4
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "EffectiveInterval", undefined, true);
  var protobufDescriptorRootExport = require("protobuf-descriptor-root-export") /*id: 717712*/;
  let s = {
    TagColor: {
      values: {
        BLUE: 0,
        GRAY: 1,
        INDIGO: 2,
        WATHET: 3,
        GREEN: 4,
        TURQUOISE: 5,
        YELLOW: 6,
        LIME: 7,
        RED: 8,
        ORANGE: 9,
        PURPLE: 10,
        VIOLET: 11,
        CARMINE: 12
      }
    }
  };
  protobufDescriptorRootExport.descriptorRoot.define("entities").addJSON(s);
  s.TagColor.values;
  protobufCodecHelper.createProtobufCodec("entities", "TagInfo", {
    fields: {
      isShowTag: {
        type: "bool",
        id: 1
      },
      tagColor: {
        type: "TagColor",
        id: 2
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "TagInfo", undefined, true);
  let o = {
    TimeUnit: {
      values: {
        SECOND: 0,
        MINUTE: 1,
        HOUR: 2,
        DAY: 3,
        MONTH: 4,
        YEAR: 5
      }
    }
  };
  protobufDescriptorRootExport.descriptorRoot.define("entities").addJSON(o);
  o.TimeUnit.values;
  let a = {
    fields: {
      timeUnit: {
        type: "TimeUnit",
        id: 1
      },
      startEndLayout: {
        type: "StartEndLayout",
        id: 2
      },
      isShowToOthers: {
        type: "bool",
        id: 3
      }
    },
    nested: {
      StartEndLayout: {
        values: {
          HIDE: 0,
          NORMAL: 1,
          START_ONLY: 2,
          END_ONLY: 3
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "TimeFormat", a);
  protobufCodecHelper.createProtobufCodec("entities", "TimeFormat", undefined, true);
  a.nested.StartEndLayout.values;
  protobufCodecHelper.createProtobufCodec("entities", "ChatterCustomStatus", {
    fields: {
      title: {
        type: "string",
        id: 1
      },
      i18nTitle: {
        keyType: "string",
        type: "string",
        id: 2
      },
      iconKey: {
        type: "string",
        id: 3
      },
      fsUnit: {
        type: "string",
        id: 4
      },
      effectiveInterval: {
        type: "EffectiveInterval",
        id: 5
      },
      isNotDisturbMode: {
        type: "bool",
        id: 6
      },
      tagInfo: {
        type: "TagInfo",
        id: 7
      },
      timeFormat: {
        type: "TimeFormat",
        id: 8
      },
      statusId: {
        type: "int64",
        id: 9
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "ChatterCustomStatus", undefined, true);
}