// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'UserSettingResponse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 805396
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  protobufCodecHelper.createProtobufCodec("entities", "NotificationSetting", {
    oneofs: {
      method: {
        oneof: ["all", "specificMessages", "noNotificaion"]
      }
    },
    fields: {
      all: {
        type: "bool",
        id: 1
      },
      specificMessages: {
        type: "SpecificNotification",
        id: 2
      },
      noNotificaion: {
        type: "bool",
        id: 3
      }
    },
    nested: {
      SpecificNotification: {
        fields: {
          mention: {
            type: "bool",
            id: 1
          },
          buzz: {
            type: "bool",
            id: 2
          }
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "NotificationSetting", undefined, true);
  protobufCodecHelper.createProtobufCodec("entities", "NotificationSettingV2", {
    fields: {
      messengerSetting: {
        type: "bytes",
        id: 1
      },
      driveSetting: {
        type: "bytes",
        id: 2
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "NotificationSettingV2", undefined, true);
  let i = {
    fields: {
      workStatusSetting: {
        type: "WorkStatusSetting",
        id: 1
      },
      badgeSetting: {
        type: "BadgeSetting",
        id: 2
      },
      notificationSetting: {
        type: "NotificationSetting",
        id: 3
      },
      timeFormatSetting: {
        type: "TimeFormatSetting",
        id: 4
      },
      autoAudioToText: {
        type: "bool",
        id: 5
      },
      smsPhoneUrgentSetting: {
        type: "SmsPhoneUrgentSetting",
        id: 6
      },
      updateTimeMs: {
        type: "int64",
        id: 20
      },
      donotDisturbBeforeMs: {
        type: "int64",
        id: 21
      },
      feedSetting: {
        type: "FeedSetting",
        id: 22
      },
      notificationSettingV2: {
        type: "NotificationSettingV2",
        id: 23
      },
      messageNotificationsOffDuringCalls: {
        type: "bool",
        id: 24,
        options: {
          default: true
        }
      },
      navigationShowMuteBadge: {
        type: "bool",
        id: 25,
        options: {
          default: true
        }
      },
      externalDisplayTimezoneSetting: {
        type: "ExternalDisplayTimezoneSetting",
        id: 26
      }
    },
    nested: {
      WorkStatusSetting: {
        fields: {
          shouldNotifyWorkStatus: {
            type: "bool",
            id: 1,
            options: {
              default: true
            }
          }
        }
      },
      BadgeSetting: {
        fields: {
          style: {
            type: "Style",
            id: 1,
            options: {
              default: "DEFAULT"
            }
          }
        },
        nested: {
          Style: {
            values: {
              UNKNOWN: 0,
              DEFAULT: 1,
              RED_POINT: 2
            }
          }
        }
      },
      ExternalDisplayTimezoneSetting: {
        fields: {
          followSystem: {
            type: "bool",
            id: 1,
            options: {
              default: false
            }
          },
          timezone: {
            type: "string",
            id: 2
          },
          timezoneSettingType: {
            type: "TimezoneSettingType",
            id: 3,
            options: {
              default: "FOLLOW_SYSTEM"
            }
          }
        },
        nested: {
          TimezoneSettingType: {
            values: {
              UNKNOWN: 0,
              FOLLOW_SYSTEM: 1,
              CUSTOM: 2,
              HIDDEN: 3
            }
          }
        }
      },
      TimeFormatSetting: {
        fields: {
          timeFormat: {
            type: "TimeFormat",
            id: 1,
            options: {
              default: "TWELVE_HOUR"
            }
          }
        },
        nested: {
          TimeFormat: {
            values: {
              UNKNOWN: 0,
              TWELVE_HOUR: 1,
              TWENTY_FOUR_HOUR: 2
            }
          }
        }
      },
      SmsPhoneUrgentSetting: {
        fields: {
          accept: {
            type: "bool",
            id: 1
          },
          canModify: {
            type: "bool",
            id: 2
          },
          needConfirm: {
            type: "bool",
            id: 3
          },
          canSend: {
            type: "bool",
            id: 4
          }
        }
      },
      FeedSetting: {
        fields: {
          isOpenAutoBox: {
            type: "bool",
            id: 1,
            options: {
              default: false
            }
          }
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "UserSetting", i);
  protobufCodecHelper.createProtobufCodec("entities", "UserSetting", undefined, true);
  let o = protobufCodecHelper.createProtobufCodec("settings", "PullUserSettingResponse", {
    fields: {
      setting: {
        type: "entities.UserSetting",
        id: 1
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("settings", "PullUserSettingResponse", undefined, true);
  require.d(exports, {
    UserSettingResponse: function () {
      return o;
    }
  });
}