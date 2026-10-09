// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(237941) to 'image-set-entity-definition'
// - Resolved require(328408) to 'chatter-type-entity-definition'
// - Resolved require(431229) to 'bot-config-entity-definition'
// - Resolved require(448134) to 'work-status-entity-schema'
// - Resolved require(931788) to 'crypto-image-entity-def'
// - Resolved require(992596) to 'protobuf-timezone-definition'
// - Resolved require(708911) to 'department-entity-definition-module'
// - Resolved require(342966) to 'chatter-custom-status-entity-definition'
// - Resolved require(530709) to 'i18n-val-entity-definition'
// - Resolved require(36994) to 'protobuf-tag-data-codec'
// - Resolved require(410193) to 'tenant-name-status-entities'
// - Resolved require(854036) to 'protobuf-open-field-option'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 503877
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("image-set-entity-definition") /*id: 237941*/;
  require("chatter-type-entity-definition") /*id: 328408*/;
  require("bot-config-entity-definition") /*id: 431229*/;
  require("work-status-entity-schema") /*id: 448134*/;
  let n = {
    fields: {
      isAccessible: {
        type: "bool",
        id: 1,
        options: {
          default: true
        }
      },
      inaccessibleCode: {
        type: "InaccessibleCode",
        id: 2
      }
    },
    nested: {
      InaccessibleCode: {
        values: {
          DEFAULT: 0,
          EXECUTIVES: 1,
          EMPTY_NAME: 2,
          EMPTY_PHONE: 3,
          CROSS_TENANT: 4,
          NOT_FRIEND: 5
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "AccessibleInfo", n);
  protobufCodecHelper.createProtobufCodec("entities", "AccessibleInfo", undefined, true);
  n.nested.InaccessibleCode.values;
  protobufCodecHelper.createProtobufCodec("entities", "UserConfig", {
    fields: {
      phoneCallAccessible: {
        type: "bool",
        id: 1,
        options: {
          default: true
        }
      },
      voiceCallAccessible: {
        type: "bool",
        id: 2,
        options: {
          default: true
        }
      },
      videoCallAccessible: {
        type: "bool",
        id: 3,
        options: {
          default: true
        }
      },
      accessPhoneCall: {
        type: "AccessibleInfo",
        id: 4
      },
      accessVoiceCall: {
        type: "AccessibleInfo",
        id: 5
      },
      accessVideoCall: {
        type: "AccessibleInfo",
        id: 6
      },
      accessUrgent: {
        type: "AccessibleInfo",
        id: 7
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "UserConfig", undefined, true);
  require("crypto-image-entity-def") /*id: 931788*/;
  require("protobuf-timezone-definition") /*id: 992596*/;
  require("department-entity-definition-module") /*id: 708911*/;
  require("chatter-custom-status-entity-definition") /*id: 342966*/;
  require("i18n-val-entity-definition") /*id: 530709*/;
  protobufCodecHelper.createProtobufCodec("entities", "AvatarMedal", {
    fields: {
      key: {
        type: "string",
        id: 1
      },
      fsUnit: {
        type: "string",
        id: 2
      },
      i18nName: {
        type: "I18nVal",
        id: 3
      },
      showSwitch: {
        type: "bool",
        id: 4
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "AvatarMedal", undefined, true);
  protobufCodecHelper.createProtobufCodec("entities", "BotMutedInfo", {
    fields: {
      mutedScenes: {
        keyType: "string",
        type: "bool",
        id: 1
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "BotMutedInfo", undefined, true);
  require("protobuf-tag-data-codec") /*id: 36994*/;
  require("tenant-name-status-entities") /*id: 410193*/;
  require("protobuf-open-field-option") /*id: 854036*/;
  let s = {
    fields: {
      id: {
        type: "string",
        id: 1,
        options: {
          "(open.id)": "user_id"
        }
      },
      name: {
        type: "string",
        id: 2
      },
      avatar: {
        type: "ImageSet",
        id: 3
      },
      status: {
        type: "int32",
        id: 4
      },
      avatarUrl: {
        type: "string",
        id: 5
      },
      updateTime: {
        type: "int64",
        id: 6
      },
      namePinyin: {
        type: "string",
        id: 7
      },
      creatorId: {
        type: "string",
        id: 8
      },
      type: {
        type: "ChatterType",
        id: 9
      },
      description: {
        type: "string",
        id: 11
      },
      isRegistered: {
        type: "bool",
        id: 12
      },
      namePy: {
        type: "string",
        id: 13
      },
      enUsName: {
        type: "string",
        id: 14
      },
      tenantId: {
        type: "string",
        id: 15
      },
      descriptionFlag: {
        type: "DescriptionFlag",
        id: 16,
        options: {
          default: "DEFAULT"
        }
      },
      botConfig: {
        type: "BotConfig",
        id: 17
      },
      internationalName: {
        keyType: "string",
        type: "string",
        id: 18
      },
      alias: {
        type: "string",
        id: 19
      },
      workStatus: {
        type: "WorkStatus",
        id: 20
      },
      i18nDescriptions: {
        keyType: "string",
        type: "string",
        id: 21,
        options: {
          deprecated: true
        }
      },
      accountId: {
        type: "string",
        id: 22
      },
      i18nInf: {
        type: "I18nInf",
        id: 23
      },
      userConfig: {
        type: "UserConfig",
        id: 24
      },
      email: {
        type: "string",
        id: 25
      },
      donotDisturbBeforeMs: {
        type: "int64",
        id: 26
      },
      acceptSmsPhoneUrgent: {
        type: "bool",
        id: 27
      },
      lastLoginTime: {
        type: "int64",
        id: 28
      },
      avatarImage: {
        type: "Image",
        id: 29
      },
      timeZone: {
        type: "TimeZone",
        id: 30
      },
      isGuest: {
        type: "bool",
        id: 31
      },
      isFrozen: {
        type: "bool",
        id: 32
      },
      isAnonymous: {
        type: "bool",
        id: 33
      },
      department: {
        rule: "repeated",
        type: "Department",
        id: 34
      },
      enterpriseEmail: {
        type: "string",
        id: 35
      },
      customStatuses: {
        rule: "repeated",
        type: "ChatterCustomStatus",
        id: 36
      },
      avatarMedal: {
        type: "AvatarMedal",
        id: 37
      },
      anotherName: {
        type: "string",
        id: 38
      },
      activeStatus: {
        type: "int32",
        id: 39
      },
      isSpecialFocus: {
        type: "bool",
        id: 40
      },
      majorLanguage: {
        type: "string",
        id: 41
      },
      mutedInfo: {
        type: "BotMutedInfo",
        id: 42
      },
      displayName: {
        type: "I18nVal",
        id: 43
      },
      tagData: {
        type: "TagData",
        id: 44
      },
      isTenantCertification: {
        type: "bool",
        id: 45
      },
      tenantNameStatus: {
        type: "TenantNameStatus",
        id: 46
      },
      commonLocales: {
        rule: "repeated",
        type: "string",
        id: 47
      }
    },
    nested: {
      DescriptionFlag: {
        values: {
          DEFAULT: 0,
          ON_BUSINESS: 1,
          ON_LEAVE: 2,
          ON_MEETING: 3
        }
      },
      I18nInf: {
        fields: {
          i18nDescriptions: {
            keyType: "string",
            type: "string",
            id: 1
          }
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "Chatter", s);
  protobufCodecHelper.createProtobufCodec("entities", "Chatter", undefined, true);
  s.nested.DescriptionFlag.values;
}