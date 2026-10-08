// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(559565) to 'url-entity-registration'
// - Resolved require(229507) to 'url-preview-action-schema'
// - Resolved require(34889) to 'url-preview-protobuf-definitions'
// - Resolved require(510123) to 'card-component-entity-schema'
// - Resolved require(520501) to 'image-entities-protobuf-definition'
// - Resolved require(285116) to 'ud-icon-protobuf-codec'
// - Resolved require(673317) to 'theme-color-protobuf-schema'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 823274
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  protobufCodecHelper.createProtobufCodec("entities", "I18nTemplates", {
    fields: {
      i18nTemplates: {
        keyType: "string",
        type: "string",
        id: 1
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "I18nTemplates", undefined, true);
  require("url-entity-registration") /*id: 559565*/;
  require("url-preview-action-schema") /*id: 229507*/;
  require("url-preview-protobuf-definitions") /*id: 34889*/;
  require("card-component-entity-schema") /*id: 510123*/;
  require("image-entities-protobuf-definition") /*id: 520501*/;
  require("ud-icon-protobuf-codec") /*id: 285116*/;
  require("theme-color-protobuf-schema") /*id: 673317*/;
  protobufCodecHelper.createProtobufCodec("entities", "UrlPreviewEntity", {
    fields: {
      sourceId: {
        rule: "required",
        type: "string",
        id: 1
      },
      previewId: {
        rule: "required",
        type: "string",
        id: 2
      },
      locale: {
        rule: "required",
        type: "string",
        id: 3,
        options: {
          default: "default"
        }
      },
      i18nIconKey: {
        type: "string",
        id: 4
      },
      fsUnit: {
        type: "string",
        id: 5
      },
      i18nTitleKey: {
        type: "string",
        id: 6
      },
      i18nTagKey: {
        type: "string",
        id: 7
      },
      localeI18nTemplates: {
        keyType: "string",
        type: "I18nTemplates",
        id: 8
      },
      url: {
        type: "URL",
        id: 9
      },
      needPull: {
        type: "bool",
        id: 10
      },
      version: {
        type: "int32",
        id: 11
      },
      body: {
        type: "bytes",
        id: 12,
        options: {
          deprecated: true
        }
      },
      actions: {
        keyType: "string",
        type: "UrlPreviewAction",
        id: 13,
        options: {
          deprecated: true
        }
      },
      previewBody: {
        type: "URLPreviewBody",
        id: 14
      },
      renderRouterEntity: {
        type: "RenderRouterEntity",
        id: 23
      },
      expires: {
        type: "int64",
        id: 15
      },
      i18nIcons: {
        keyType: "string",
        type: "ImageSetV2",
        id: 16
      },
      udIcon: {
        type: "UDIcon",
        id: 17
      },
      titleTextColor: {
        type: "ThemeColor",
        id: 18
      },
      tagTextColor: {
        type: "ThemeColor",
        id: 19
      },
      tagBgColor: {
        type: "ThemeColor",
        id: 20
      },
      appInfo: {
        type: "AppInfo",
        id: 21
      },
      unifiedHeader: {
        type: "UnifiedHeader",
        id: 22
      },
      useColorIcon: {
        type: "bool",
        id: 24,
        options: {
          default: false
        }
      },
      extInfo: {
        type: "ExtInfo",
        id: 25
      }
    },
    nested: {
      ColorIcon: {
        fields: {
          imageSetV2: {
            type: "ImageSetV2",
            id: 1
          },
          iconColor: {
            type: "ThemeColor",
            id: 2
          },
          udIcon: {
            type: "UDIcon",
            id: 3
          },
          faviconUrl: {
            type: "string",
            id: 4
          }
        }
      },
      UnifiedHeader: {
        fields: {
          icon: {
            type: "ColorIcon",
            id: 1
          }
        }
      },
      AppInfo: {
        fields: {
          appId: {
            type: "int64",
            id: 1
          },
          sceneType: {
            type: "int64",
            id: 2
          }
        }
      },
      LastUpdateInfo: {
        fields: {
          textColor: {
            type: "ThemeColor",
            id: 2
          },
          lastUpdateTimestamp: {
            type: "int64",
            id: 3
          },
          visible: {
            type: "bool",
            id: 4
          }
        }
      },
      TranslateInfo: {
        fields: {
          inlineReplacementElementId: {
            type: "string",
            id: 1
          },
          inlineReplacementEnginePropertyPath: {
            type: "string",
            id: 2
          }
        }
      },
      ExtInfo: {
        fields: {
          lastUpdateInfo: {
            type: "LastUpdateInfo",
            id: 1
          },
          translateInfo: {
            type: "TranslateInfo",
            id: 2
          }
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "UrlPreviewEntity", undefined, true);
}