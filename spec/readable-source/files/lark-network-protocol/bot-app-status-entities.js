// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(931788) to 'crypto-image-entity-def'
// - Resolved require(632032) to 'ugc-share-card-plugin_2'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 794543
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  protobufCodecHelper.createProtobufCodec("entities", "ActionExtraInfo", {
    fields: {
      adminId: {
        type: "int64",
        id: 1
      },
      url: {
        type: "string",
        id: 2
      },
      params: {
        type: "string",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "ActionExtraInfo", undefined, true);
  let n = {
    fields: {
      i18nText: {
        keyType: "string",
        type: "string",
        id: 1
      },
      operatorCode: {
        type: "ActionOperateCode",
        id: 2
      },
      actionCode: {
        type: "ActionCode",
        id: 3
      },
      extra: {
        type: "ActionExtraInfo",
        id: 4
      }
    },
    nested: {
      ActionOperateCode: {
        values: {
          CLOSE_WINDOW: 1,
          CLOSE_APP: 2
        }
      },
      ActionCode: {
        values: {
          ACTION_NONE: 0,
          ACTION_CONTACT_ADMIN: 1,
          ACTION_APPLY_USE: 2
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "ActionInfo", n);
  protobufCodecHelper.createProtobufCodec("entities", "ActionInfo", undefined, true);
  n.nested.ActionOperateCode.values;
  n.nested.ActionCode.values;
  protobufCodecHelper.createProtobufCodec("entities", "TipsContent", {
    fields: {
      version: {
        type: "int64",
        id: 1
      },
      i18nTitle: {
        keyType: "string",
        type: "string",
        id: 2
      },
      i18nMsg: {
        keyType: "string",
        type: "string",
        id: 3
      },
      actions: {
        rule: "repeated",
        type: "ActionInfo",
        id: 4
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "TipsContent", undefined, true);
  protobufCodecHelper.createProtobufCodec("entities", "BotTipsContent", {
    fields: {
      version: {
        type: "int64",
        id: 1
      },
      i18nMsg: {
        keyType: "string",
        type: "string",
        id: 2
      },
      adminId: {
        type: "int64",
        id: 3
      },
      adminName: {
        keyType: "string",
        type: "string",
        id: 4
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "BotTipsContent", undefined, true);
  let s = {
    fields: {
      botId: {
        type: "int64",
        id: 1
      },
      status: {
        type: "BotUsageStatus",
        id: 2
      },
      tips: {
        type: "BotTipsContent",
        id: 3
      }
    },
    nested: {
      BotUsageStatus: {
        values: {
          BOT_USABLE: 1,
          BOT_TENANT_FORBIDDEN: 2,
          BOT_PLATFORM_FORBIDDEN: 3,
          BOT_DEVELOPER_FORBIDDEN: 4,
          BOT_OFFLINE: 5,
          BOT_USER_UNVISIBLE: 6
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "BotCheckStatus", s);
  protobufCodecHelper.createProtobufCodec("entities", "BotCheckStatus", undefined, true);
  s.nested.BotUsageStatus.values;
  require("crypto-image-entity-def") /*id: 931788*/;
  require("ugc-share-card-plugin_2") /*id: 632032*/;
  let o = {
    fields: {
      cliId: {
        type: "string",
        id: 1
      },
      status: {
        type: "AppUsageStatus",
        id: 2
      },
      tips: {
        type: "TipsContent",
        id: 3
      },
      botList: {
        rule: "repeated",
        type: "BotCheckStatus",
        id: 4
      },
      appAbility: {
        rule: "repeated",
        type: "FeatureAbility",
        id: 5,
        options: {
          packed: false
        }
      },
      appUrl: {
        type: "string",
        id: 6
      },
      i18nNames: {
        keyType: "string",
        type: "string",
        id: 7
      },
      i18nDescriptions: {
        keyType: "string",
        type: "string",
        id: 8
      },
      avatarKey: {
        type: "string",
        id: 9
      },
      appId: {
        type: "int64",
        id: 10
      },
      chatable: {
        type: "bool",
        id: 11
      },
      extraConfig: {
        type: "string",
        id: 12
      },
      avatar: {
        type: "Image",
        id: 13
      },
      appStoreUrl: {
        type: "string",
        id: 14
      },
      isIsv: {
        type: "bool",
        id: 15
      },
      isAvailable: {
        type: "bool",
        id: 16
      },
      extraHitFields: {
        rule: "repeated",
        type: "ExtraHitField",
        id: 17
      },
      botMenuDisplayStrategy: {
        type: "BotMenuDisplayStrategy",
        id: 18
      }
    },
    nested: {
      AppUsageStatus: {
        values: {
          APP_USABLE: 1,
          APP_TENANT_FORBIDDEN: 2,
          APP_PLATFORM_FORBIDDEN: 3,
          APP_DEVELOPER_FORBIDDEN: 4,
          APP_OFFLINE: 5,
          APP_USER_UNVISIBLE: 6,
          APP_NEED_PAY_USE: 7,
          APP_DELETED: 8
        }
      },
      FeatureAbility: {
        values: {
          SMALL: 1,
          H5: 2,
          BOT: 3,
          LOCAL_COMPONENT: 4
        }
      },
      BotMenuDisplayStrategy: {
        values: {
          UNKNOWN: 0,
          CHAT_MENU: 1,
          CHAT_INPUT: 2,
          FLOATING: 3
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "AppStatusInfo", o);
  protobufCodecHelper.createProtobufCodec("entities", "AppStatusInfo", undefined, true);
  o.nested.AppUsageStatus.values;
  o.nested.FeatureAbility.values;
  o.nested.BotMenuDisplayStrategy.values;
}