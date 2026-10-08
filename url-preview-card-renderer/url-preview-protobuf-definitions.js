// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(887765) to 'ui-entities-protobuf-schema'
// - Resolved require(229507) to 'url-preview-action-schema'
// - Resolved require(559565) to 'url-entity-registration'
// - Resolved require(520501) to 'image-entities-protobuf-definition'
// - Resolved require(673317) to 'theme-color-protobuf-schema'
// - Resolved require(172234) to 'mathjax-extpfeil-config_2'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 34889
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("ui-entities-protobuf-schema") /*id: 887765*/;
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewComponents", {
    fields: {
      rootIds: {
        rule: "repeated",
        type: "string",
        id: 1
      },
      elements: {
        keyType: "string",
        type: "URLPreviewComponent",
        id: 2
      },
      imageIds: {
        rule: "repeated",
        type: "string",
        id: 3
      },
      atIds: {
        rule: "repeated",
        type: "string",
        id: 4
      },
      buttonIds: {
        rule: "repeated",
        type: "string",
        id: 5
      },
      richtextIds: {
        rule: "repeated",
        type: "string",
        id: 6
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewComponents", undefined, true);
  require("url-preview-action-schema") /*id: 229507*/;
  require("url-entity-registration") /*id: 559565*/;
  require("image-entities-protobuf-definition") /*id: 520501*/;
  require("theme-color-protobuf-schema") /*id: 673317*/;
  protobufCodecHelper.createProtobufCodec("entities", "PreviewData", {
    oneofs: {
      value: {
        oneof: ["str", "i32", "i64", "b", "f", "imageSetV2", "items", "themeColor", "padding", "themeColors", "layoutValue", "chatterInfos", "stringList", "chatterInfo", "fontLevel", "tagList"]
      }
    },
    fields: {
      str: {
        type: "string",
        id: 1
      },
      i32: {
        type: "int32",
        id: 2
      },
      i64: {
        type: "int64",
        id: 3
      },
      b: {
        type: "bool",
        id: 4
      },
      f: {
        type: "float",
        id: 5
      },
      imageSetV2: {
        type: "ImageSetV2",
        id: 6
      },
      items: {
        type: "Items",
        id: 7
      },
      themeColor: {
        type: "ThemeColor",
        id: 8
      },
      padding: {
        type: "URLPreviewComponent.Padding",
        id: 9
      },
      themeColors: {
        type: "ThemeColors",
        id: 10
      },
      layoutValue: {
        type: "URLPreviewComponent.Value",
        id: 11
      },
      chatterInfos: {
        type: "ChatterInfos",
        id: 12
      },
      stringList: {
        type: "StringList",
        id: 13
      },
      chatterInfo: {
        type: "URLPreviewComponent.AvatarProperty.ChatterInfo",
        id: 14
      },
      fontLevel: {
        type: "URLPreviewComponent.FontLevel",
        id: 15
      },
      tagList: {
        type: "TagList",
        id: 16
      }
    },
    nested: {
      Items: {
        fields: {
          items: {
            rule: "repeated",
            type: "URLPreviewComponent.Item",
            id: 1
          }
        }
      },
      ThemeColors: {
        fields: {
          colors: {
            rule: "repeated",
            type: "ThemeColor",
            id: 1
          }
        }
      },
      ChatterInfos: {
        fields: {
          chatterInfos: {
            rule: "repeated",
            type: "URLPreviewComponent.ChattersPreviewProperty.ChatterInfo",
            id: 1
          }
        }
      },
      StringList: {
        fields: {
          stringList: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      },
      TagList: {
        fields: {
          mixedTags: {
            rule: "repeated",
            type: "URLPreviewComponent.TagListProperty.Tag",
            id: 1
          }
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "PreviewData", undefined, true);
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewStyleData", {
    fields: {
      previewStyleData: {
        keyType: "int32",
        type: "PreviewData",
        id: 2
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewStyleData", undefined, true);
  require("mathjax-extpfeil-config_2") /*id: 172234*/;
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewPropertyData", {
    fields: {
      type: {
        rule: "required",
        type: "URLPreviewComponent.Type",
        id: 1
      },
      previewPropertyData: {
        keyType: "int32",
        type: "PreviewData",
        id: 2
      },
      richText: {
        type: "RichText",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewPropertyData", undefined, true);
  let i = {
    fields: {
      type: {
        rule: "required",
        type: "Type",
        id: 1
      },
      templateId: {
        type: "string",
        id: 2
      },
      cardUrl: {
        type: "URL",
        id: 3
      },
      actions: {
        keyType: "string",
        type: "UrlPreviewAction",
        id: 4
      },
      styles: {
        keyType: "string",
        type: "URLPreviewStyleData",
        id: 5
      },
      properties: {
        keyType: "string",
        type: "URLPreviewPropertyData",
        id: 6
      }
    },
    nested: {
      Type: {
        values: {
          CARD: 0,
          ALERT: 1
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewState", i);
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewState", undefined, true);
  i.nested.Type.values;
  protobufCodecHelper.createProtobufCodec("entities", "PreviewHangPoint", {
    fields: {
      previewId: {
        type: "string",
        id: 1
      },
      needLocalPreview: {
        type: "bool",
        id: 2,
        options: {
          default: false
        }
      },
      closeCardPreview: {
        type: "bool",
        id: 3,
        options: {
          default: false
        }
      },
      url: {
        type: "string",
        id: 4
      },
      isLazyLoad: {
        type: "bool",
        id: 5,
        options: {
          default: false
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "PreviewHangPoint", undefined, true);
  protobufCodecHelper.createProtobufCodec("entities", "PreviewHangPointPair", {
    fields: {
      urlPreviewHangPointMap: {
        keyType: "string",
        type: "PreviewHangPoint",
        id: 1
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "PreviewHangPointPair", undefined, true);
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewBody", {
    fields: {
      components: {
        type: "URLPreviewComponents",
        id: 1,
        options: {
          deprecated: true
        }
      },
      actions: {
        keyType: "string",
        type: "UrlPreviewAction",
        id: 2,
        options: {
          deprecated: true
        }
      },
      cardUrl: {
        type: "URL",
        id: 3,
        options: {
          deprecated: true
        }
      },
      currentStateId: {
        type: "string",
        id: 4
      },
      states: {
        keyType: "string",
        type: "URLPreviewState",
        id: 5
      },
      componentHangPointPairs: {
        keyType: "string",
        type: "PreviewHangPointPair",
        id: 6
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewBody", undefined, true);
}