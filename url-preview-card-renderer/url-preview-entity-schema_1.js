// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(559565) to 'url-entity-registration'
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
         * moduleId: 451734
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("url-entity-registration") /*id: 559565*/;
  require("url-preview-protobuf-definitions") /*id: 34889*/;
  require("card-component-entity-schema") /*id: 510123*/;
  require("image-entities-protobuf-definition") /*id: 520501*/;
  require("ud-icon-protobuf-codec") /*id: 285116*/;
  require("theme-color-protobuf-schema") /*id: 673317*/;
  let i = {
    fields: {
      previewId: {
        rule: "required",
        type: "string",
        id: 1
      },
      locale: {
        rule: "required",
        type: "string",
        id: 2,
        options: {
          default: "default"
        }
      },
      url: {
        type: "URL",
        id: 3
      },
      icon: {
        type: "PreviewIcon",
        id: 4
      },
      title: {
        type: "PreviewTitle",
        id: 5
      },
      tags: {
        rule: "repeated",
        type: "PreviewTag",
        id: 6
      },
      previewBody: {
        type: "URLPreviewBody",
        id: 7
      },
      renderRouterEntity: {
        type: "RenderRouterEntity",
        id: 10
      },
      previewStrategy: {
        type: "PreviewStrategy",
        id: 8
      },
      unifiedHeader: {
        type: "UnifiedHeader",
        id: 9
      },
      extInfo: {
        type: "ExtInfo",
        id: 11
      }
    },
    nested: {
      PreviewIcon: {
        fields: {
          imageSetV2: {
            type: "ImageSetV2",
            id: 1
          },
          udIcon: {
            type: "UDIcon",
            id: 2
          },
          useColorIcon: {
            type: "bool",
            id: 3,
            options: {
              default: false
            }
          }
        }
      },
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
      PreviewTitle: {
        fields: {
          title: {
            type: "string",
            id: 1
          },
          titleTextColor: {
            type: "ThemeColor",
            id: 2
          }
        }
      },
      PreviewTag: {
        fields: {
          tag: {
            type: "string",
            id: 1
          },
          tagTextColor: {
            type: "ThemeColor",
            id: 2
          },
          tagBgColor: {
            type: "ThemeColor",
            id: 3
          }
        }
      },
      PreviewStrategy: {
        fields: {
          version: {
            type: "int64",
            id: 1
          },
          expires: {
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
  };
  protobufCodecHelper.createProtobufCodec("entities", "UrlPreviewEntityV2", i);
  protobufCodecHelper.createProtobufCodec("entities", "UrlPreviewEntityV2", undefined, true);
}