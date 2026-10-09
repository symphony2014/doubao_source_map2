// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(673317) to 'theme-color-protobuf-schema'
// - Resolved require(520501) to 'image-entities-protobuf-definition'
// - Renamed variable 'o' to 'protobufDescriptorRootExport'
// - Resolved require(717712) to 'protobuf-descriptor-root-export'
// - Resolved require(285116) to 'ud-icon-protobuf-codec'
// - Resolved require(172234) to 'mathjax-extpfeil-config_2'
// - Resolved require(931788) to 'crypto-image-entity-def'
// - Resolved require(71298) to 'protobuf-doc-type-definition'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// - Updated imported property 'J' to 'descriptorRoot' (module 717712)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 887765
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("theme-color-protobuf-schema") /*id: 673317*/;
  let i = {
    oneofs: {
      content: {
        oneof: ["linear"]
      }
    },
    fields: {
      type: {
        type: "Type",
        id: 1
      },
      linear: {
        type: "Linear",
        id: 2
      }
    },
    nested: {
      Type: {
        values: {
          LINEAR: 0
        }
      },
      Linear: {
        fields: {
          deg: {
            type: "int32",
            id: 1,
            options: {
              default: 0
            }
          },
          colors: {
            rule: "repeated",
            type: "int32",
            id: 2,
            options: {
              deprecated: true,
              packed: false
            }
          },
          colorsV2: {
            rule: "repeated",
            type: "uint32",
            id: 3,
            options: {
              packed: false
            }
          },
          colorsV3: {
            rule: "repeated",
            type: "ThemeColor",
            id: 4
          }
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "Gradient", i);
  protobufCodecHelper.createProtobufCodec("entities", "Gradient", undefined, true);
  i.nested.Type.values;
  protobufCodecHelper.createProtobufCodec("entities", "Border", {
    fields: {
      width: {
        type: "float",
        id: 1
      },
      color: {
        type: "uint32",
        id: 2,
        options: {
          deprecated: true
        }
      },
      cornerRadius: {
        type: "float",
        id: 3
      },
      colorV2: {
        type: "ThemeColor",
        id: 4
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "Border", undefined, true);
  require("image-entities-protobuf-definition") /*id: 520501*/;
  var protobufDescriptorRootExport = require("protobuf-descriptor-root-export") /*id: 717712*/;
  let _ = {
    Tag: {
      values: {
        UNKNOWN_TAG: 0,
        APPROVAL: 1,
        OFFICIAL: 2,
        ONCALL: 3,
        ONCALL_OFFLINE: 4,
        EXTERNAL: 5,
        EXTERNAL_WARN: 6
      }
    }
  };
  protobufDescriptorRootExport.descriptorRoot.define("entities").addJSON(_);
  _.Tag.values;
  require("ud-icon-protobuf-codec") /*id: 285116*/;
  require("mathjax-extpfeil-config_2") /*id: 172234*/;
  require("crypto-image-entity-def") /*id: 931788*/;
  require("protobuf-doc-type-definition") /*id: 71298*/;
  let a = {
    oneofs: {
      URLPreviewComponentProperty: {
        oneof: ["empty", "linearLayout", "flexLayout", "header", "richtext", "image", "chattersPreview", "button", "iconButton", "textButton", "time", "text", "tagList", "spinButton", "avatar", "video", "cardContainer", "docImage", "loading", "timeZone", "oversizedText", "engine", "docStateButton", "imageContainer"]
      }
    },
    fields: {
      type: {
        rule: "required",
        type: "Type",
        id: 1
      },
      canSkipWhenUnknown: {
        type: "bool",
        id: 2,
        options: {
          default: true
        }
      },
      style: {
        type: "Style",
        id: 3
      },
      childIds: {
        rule: "repeated",
        type: "string",
        id: 4
      },
      isFontZoomable: {
        type: "bool",
        id: 5,
        options: {
          default: true
        }
      },
      empty: {
        type: "EmptyProperty",
        id: 1000
      },
      linearLayout: {
        type: "LinearLayoutProperty",
        id: 1001
      },
      flexLayout: {
        type: "FlexLayoutProperty",
        id: 1002
      },
      header: {
        type: "PreviewHeaderProperty",
        id: 1501
      },
      richtext: {
        type: "RichTextProperty",
        id: 1502
      },
      image: {
        type: "ImageProperty",
        id: 1503
      },
      chattersPreview: {
        type: "ChattersPreviewProperty",
        id: 1504
      },
      button: {
        type: "ButtonProperty",
        id: 1505
      },
      iconButton: {
        type: "IconButtonProperty",
        id: 1506
      },
      textButton: {
        type: "TextButtonProperty",
        id: 1507
      },
      time: {
        type: "TimeProperty",
        id: 1508
      },
      text: {
        type: "TextProperty",
        id: 1509
      },
      tagList: {
        type: "TagListProperty",
        id: 1510
      },
      spinButton: {
        type: "SpinButtonProperty",
        id: 1511
      },
      avatar: {
        type: "AvatarProperty",
        id: 1512
      },
      video: {
        type: "VideoProperty",
        id: 1513
      },
      cardContainer: {
        type: "CardContainerProperty",
        id: 1514
      },
      docImage: {
        type: "DocImageProperty",
        id: 1515
      },
      loading: {
        type: "LoadingProperty",
        id: 1516
      },
      timeZone: {
        type: "TimeZoneProperty",
        id: 1517
      },
      oversizedText: {
        type: "OversizedTextProperty",
        id: 1518
      },
      engine: {
        type: "EngineProperty",
        id: 1519
      },
      docStateButton: {
        type: "DocStateButtonProperty",
        id: 1520
      },
      imageContainer: {
        type: "ImageContainerProperty",
        id: 1521
      }
    },
    nested: {
      Type: {
        values: {
          EMPTY: 0,
          LINEAR_LAYOUT: 1,
          FLEX_LAYOUT: 2,
          HEADER: 501,
          RICHTEXT: 502,
          IMAGE: 503,
          CHATTERS_PREVIEW: 504,
          BUTTON: 505,
          ICON_BUTTON: 506,
          TEXT_BUTTON: 507,
          TIME: 508,
          TEXT: 509,
          TAG_LIST: 510,
          SPIN_BUTTON: 511,
          AVATAR: 512,
          VIDEO: 513,
          CARD_CONTAINER: 514,
          DOC_IMAGE: 515,
          LOADING: 516,
          TIME_ZONE: 517,
          OVERSIZED_TEXT: 518,
          ENGINE: 519,
          DOC_STATE_BUTTON: 520,
          IMAGE_CONTAINER: 521
        }
      },
      SizeLevel: {
        values: {
          NORMAL: 0,
          SMALL: 1,
          LARGE: 2
        }
      },
      ValueType: {
        values: {
          AUTO: 0,
          POINT: 1,
          PERCENTAGE: 2
        }
      },
      Direction: {
        values: {
          LTR: 0,
          RTL: 1
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
      Align: {
        values: {
          TOP: 0,
          MIDDLE: 1,
          BOTTOM: 2,
          STRETCH: 3,
          BASELINE: 4
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
      Theme: {
        values: {
          LIGHT: 0,
          DARK: 1
        }
      },
      FontType: {
        values: {
          TITLE: 0,
          HEADLINE: 1,
          BODY: 2,
          CAPTION: 3
        }
      },
      FontLevel: {
        fields: {
          type: {
            type: "FontType",
            id: 1,
            options: {
              default: "CAPTION"
            }
          },
          level: {
            type: "int32",
            id: 2,
            options: {
              default: 0
            }
          }
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
      Item: {
        fields: {
          actionId: {
            type: "string",
            id: 1
          },
          text: {
            type: "string",
            id: 2
          }
        }
      },
      Style: {
        fields: {
          sizeLevel: {
            type: "SizeLevel",
            id: 1
          },
          textColor: {
            type: "uint32",
            id: 2,
            options: {
              deprecated: true
            }
          },
          backgroundColor: {
            type: "Gradient",
            id: 3
          },
          width: {
            type: "Value",
            id: 4
          },
          height: {
            type: "Value",
            id: 5
          },
          maxWidth: {
            type: "Value",
            id: 6
          },
          maxHeight: {
            type: "Value",
            id: 7
          },
          minWidth: {
            type: "Value",
            id: 8
          },
          minHeight: {
            type: "Value",
            id: 9
          },
          growWeight: {
            type: "int32",
            id: 10
          },
          shrinkWeight: {
            type: "int32",
            id: 11
          },
          fontLevel: {
            type: "FontLevel",
            id: 12
          },
          border: {
            type: "Border",
            id: 13
          },
          textColorV2: {
            type: "ThemeColor",
            id: 14
          },
          aspectRatio: {
            type: "int32",
            id: 15
          },
          alignSelf: {
            type: "Align",
            id: 16
          }
        }
      },
      EmptyProperty: {
        fields: {
          actionId: {
            type: "string",
            id: 1
          },
          hover: {
            type: "ThemeColor",
            id: 2
          },
          active: {
            type: "ThemeColor",
            id: 3
          },
          containerStyle: {
            type: "string",
            id: 4
          }
        }
      },
      LinearLayoutProperty: {
        fields: {
          orientation: {
            type: "Orientation",
            id: 1,
            options: {
              default: "ROW"
            }
          },
          spacing: {
            type: "float",
            id: 2
          },
          wrapWidth: {
            type: "float",
            id: 3
          },
          padding: {
            type: "float",
            id: 4
          },
          mainAxisJustify: {
            type: "Justify",
            id: 5,
            options: {
              default: "START"
            }
          },
          crossAxisAlign: {
            type: "Align",
            id: 6,
            options: {
              default: "TOP"
            }
          },
          sidePadding: {
            type: "Padding",
            id: 7
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
          forceUseNarrowMode: {
            type: "bool",
            id: 8,
            options: {
              default: false
            }
          }
        }
      },
      PreviewHeaderProperty: {
        fields: {
          icon: {
            type: "ImageSetV2",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          larkTag: {
            type: "Tag",
            id: 3
          },
          childComponentId: {
            type: "string",
            id: 4
          },
          isNeedCopyLink: {
            type: "bool",
            id: 5,
            options: {
              default: true
            }
          },
          isNeedClose: {
            type: "bool",
            id: 6,
            options: {
              default: true
            }
          },
          theme: {
            type: "Theme",
            id: 7,
            options: {
              default: "LIGHT"
            }
          },
          type: {
            type: "Type",
            id: 8,
            options: {
              default: "NORMAL"
            }
          },
          tagColor: {
            type: "ThemeColor",
            id: 9
          },
          tagTextColor: {
            type: "ThemeColor",
            id: 10
          },
          headerTag: {
            type: "string",
            id: 11
          },
          faviconUrl: {
            type: "string",
            id: 12
          },
          iconColor: {
            type: "ThemeColor",
            id: 13
          },
          udIcon: {
            type: "UDIcon",
            id: 14
          },
          numberOfLines: {
            type: "int32",
            id: 15,
            options: {
              default: 3
            }
          }
        },
        nested: {
          Type: {
            values: {
              NORMAL: 0,
              HEADLINES: 1
            }
          }
        }
      },
      RichTextProperty: {
        fields: {
          richtext: {
            type: "RichText",
            id: 1
          },
          numberOfLines: {
            type: "int32",
            id: 2,
            options: {
              default: 0
            }
          },
          atOutChatterIds: {
            rule: "repeated",
            type: "string",
            id: 3
          },
          showUpdateTime: {
            type: "bool",
            id: 4
          },
          theme: {
            type: "RichTextTheme",
            id: 5
          }
        },
        nested: {
          RichTextTheme: {
            values: {
              DEFAULT: 0,
              DARK: 1,
              LIGHT: 2
            }
          }
        }
      },
      ImageProperty: {
        fields: {
          image: {
            type: "ImageSetV2",
            id: 1
          },
          alt: {
            type: "string",
            id: 2
          },
          udIcon: {
            type: "UDIcon",
            id: 3
          },
          imageUrl: {
            type: "string",
            id: 4
          }
        }
      },
      ImageContainerProperty: {
        fields: {
          background: {
            type: "ImageSetV2",
            id: 1
          },
          actionId: {
            type: "string",
            id: 2
          },
          contentMode: {
            type: "ContentMode",
            id: 3,
            options: {
              default: "SCALE_TO_FILL"
            }
          }
        },
        nested: {
          ContentMode: {
            values: {
              SCALE_TO_FILL: 0,
              SCALE_ASPECT_FIT: 1,
              SCALE_ASPECT_FILL: 2,
              CENTER: 3
            }
          }
        }
      },
      ChattersPreviewProperty: {
        fields: {
          theme: {
            type: "Theme",
            id: 1,
            options: {
              default: "LIGHT"
            }
          },
          chattersCount: {
            type: "int32",
            id: 2
          },
          chatterInfos: {
            rule: "repeated",
            type: "ChatterInfo",
            id: 3
          },
          maxShowCount: {
            type: "int32",
            id: 4,
            options: {
              default: 5
            }
          },
          chattersMode: {
            type: "ChattersMode",
            id: 5,
            options: {
              default: "DYNAMIC"
            }
          },
          title: {
            type: "string",
            id: 6
          }
        },
        nested: {
          ChatterType: {
            values: {
              UNKNOWN: 0,
              USER: 1
            }
          },
          ChatterInfo: {
            fields: {
              avatar: {
                type: "Image",
                id: 1
              },
              chatterId: {
                type: "string",
                id: 2
              },
              name: {
                type: "string",
                id: 3
              },
              type: {
                type: "ChatterType",
                id: 4,
                options: {
                  default: "USER"
                }
              }
            }
          },
          ChattersMode: {
            values: {
              STATIC: 0,
              DYNAMIC: 1
            }
          }
        }
      },
      ButtonProperty: {
        fields: {
          icon: {
            type: "ImageSetV2",
            id: 1
          },
          text: {
            type: "string",
            id: 2
          },
          direction: {
            type: "Direction",
            id: 3,
            options: {
              default: "LTR"
            }
          },
          actionId: {
            type: "string",
            id: 4
          },
          isDisable: {
            type: "bool",
            id: 5
          },
          udIcon: {
            type: "UDIcon",
            id: 6
          }
        }
      },
      IconButtonProperty: {
        fields: {
          icon: {
            type: "ImageSetV2",
            id: 1
          },
          actionId: {
            type: "string",
            id: 2
          },
          isDisable: {
            type: "bool",
            id: 3
          },
          alt: {
            type: "string",
            id: 4
          },
          udIcon: {
            type: "UDIcon",
            id: 5
          }
        }
      },
      TextButtonProperty: {
        fields: {
          text: {
            type: "string",
            id: 1
          },
          actionId: {
            type: "string",
            id: 2
          },
          isDisable: {
            type: "bool",
            id: 3
          }
        }
      },
      TimeProperty: {
        fields: {
          startTimeStamp: {
            rule: "required",
            type: "int64",
            id: 1
          },
          isCountdown: {
            type: "bool",
            id: 2,
            options: {
              default: false
            }
          },
          ntpActionId: {
            type: "string",
            id: 3
          },
          isEnd: {
            type: "bool",
            id: 4
          },
          endTimeStamp: {
            type: "int64",
            id: 5
          }
        }
      },
      TextProperty: {
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
          },
          actionId: {
            type: "string",
            id: 3
          }
        }
      },
      TagListProperty: {
        fields: {
          tags: {
            rule: "repeated",
            type: "string",
            id: 1
          },
          mixedTags: {
            rule: "repeated",
            type: "Tag",
            id: 2
          },
          numberOfLines: {
            type: "int32",
            id: 3,
            options: {
              default: 1
            }
          }
        },
        nested: {
          Tag: {
            fields: {
              tag: {
                type: "string",
                id: 1
              },
              textColor: {
                type: "ThemeColor",
                id: 2
              },
              backgroundColor: {
                type: "ThemeColor",
                id: 3
              }
            }
          }
        }
      },
      SpinButtonProperty: {
        fields: {
          icon: {
            type: "ImageSetV2",
            id: 1
          },
          items: {
            rule: "repeated",
            type: "Item",
            id: 2
          },
          selectedIndex: {
            type: "int64",
            id: 3,
            options: {
              default: 0
            }
          },
          direction: {
            type: "Direction",
            id: 4,
            options: {
              default: "LTR"
            }
          }
        }
      },
      AvatarProperty: {
        fields: {
          chatterInfo: {
            type: "ChatterInfo",
            id: 1
          }
        },
        nested: {
          ChatterInfo: {
            fields: {
              avatar: {
                type: "Image",
                id: 1
              },
              chatterId: {
                type: "string",
                id: 2
              }
            }
          }
        }
      },
      VideoProperty: {
        fields: {
          site: {
            type: "Site",
            id: 1
          },
          coverImage: {
            type: "ImageSetV2",
            id: 2
          },
          duration: {
            type: "int64",
            id: 3
          },
          srcUrl: {
            type: "string",
            id: 4
          },
          vid: {
            type: "string",
            id: 5
          },
          iframeUrl: {
            type: "string",
            id: 6
          },
          coverImageUrl: {
            type: "string",
            id: 7
          }
        },
        nested: {
          Site: {
            values: {
              UNKNOWN: 0,
              XIGUA: 1,
              DOUYIN: 2,
              HUOSHAN: 3,
              YOUTUBE: 4
            }
          }
        }
      },
      CardContainerProperty: {
        fields: {
          maskColor: {
            type: "ThemeColor",
            id: 1
          }
        }
      },
      DocImageProperty: {
        fields: {
          docType: {
            type: "DocType",
            id: 1,
            options: {
              default: "UNKNOWN_DOC_TYPE"
            }
          },
          thumbnailUrl: {
            type: "string",
            id: 2
          },
          secretUrl: {
            type: "string",
            id: 3
          },
          secretType: {
            type: "int32",
            id: 4
          },
          secretKey: {
            type: "string",
            id: 5
          },
          secretNonce: {
            type: "string",
            id: 6
          }
        }
      },
      LoadingProperty: {
        fields: {}
      },
      TimeZoneProperty: {
        fields: {
          timeZoneType: {
            type: "TimeZoneType",
            id: 1,
            options: {
              default: "FULL_DATE_TIME"
            }
          },
          formatType: {
            type: "FormatType",
            id: 2,
            options: {
              default: "LONG"
            }
          },
          timePrecisionType: {
            type: "TimePrecisionType",
            id: 3,
            options: {
              default: "MINUTE"
            }
          },
          timeStyle: {
            type: "TimeStyle",
            id: 4,
            options: {
              default: "DEFAULT"
            }
          },
          datePrecisionType: {
            type: "DatePrecisionType",
            id: 5,
            options: {
              default: "DAY_TYPE"
            }
          },
          dateStatusType: {
            type: "DateStatusType",
            id: 6,
            options: {
              default: "RELATIVE"
            }
          },
          startTimeStamp: {
            type: "int64",
            id: 7
          },
          endTimeStamp: {
            type: "int64",
            id: 8
          },
          enableGmt: {
            type: "bool",
            id: 9,
            options: {
              default: true
            }
          }
        },
        nested: {
          TimeZoneType: {
            values: {
              MERIDIEM: 0,
              WEEK: 1,
              MONTH: 2,
              TIME: 3,
              DATE: 4,
              FULL_DATE: 5,
              DATE_TIME: 6,
              FULL_DATE_TIME: 7,
              DATE_RANGE: 8,
              DATE_TIME_RANGE: 9
            }
          },
          FormatType: {
            values: {
              SHORT: 0,
              LONG: 1
            }
          },
          TimePrecisionType: {
            values: {
              SECOND: 0,
              MINUTE: 1,
              HOUR: 2
            }
          },
          TimeStyle: {
            values: {
              DEFAULT: 0,
              BY_12_HOUR: 1,
              BY_24_HOUR: 2
            }
          },
          DatePrecisionType: {
            values: {
              DAY_TYPE: 0,
              MONTH_TYPE: 1
            }
          },
          DateStatusType: {
            values: {
              ABSOLUTE: 0,
              RELATIVE: 1
            }
          }
        }
      },
      OversizedTextProperty: {
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
          },
          fontSize: {
            type: "int32",
            id: 3,
            options: {
              default: 36
            }
          },
          fontWeight: {
            type: "FontWeight",
            id: 4,
            options: {
              default: "REGULAR"
            }
          }
        },
        nested: {
          FontWeight: {
            values: {
              REGULAR: 0,
              SEMI_BOLD: 1
            }
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
              MESSAGE: 0,
              DOC_COMPONENT: 1,
              TURTLE_CANVAS: 2
            }
          }
        }
      },
      DocStateButtonProperty: {
        fields: {
          currState: {
            type: "string",
            id: 1
          },
          stateMap: {
            keyType: "string",
            type: "DocState",
            id: 2
          }
        },
        nested: {
          DocState: {
            fields: {
              alt: {
                type: "string",
                id: 1
              },
              udIcon: {
                type: "UDIcon",
                id: 2
              },
              nextState: {
                type: "string",
                id: 3
              },
              udBtnColor: {
                type: "string",
                id: 4
              },
              loading: {
                type: "bool",
                id: 5
              },
              selected: {
                type: "bool",
                id: 6
              }
            }
          }
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewComponent", a);
  protobufCodecHelper.createProtobufCodec("entities", "URLPreviewComponent", undefined, true);
  a.nested.Type.values;
  a.nested.SizeLevel.values;
  a.nested.ValueType.values;
  a.nested.Direction.values;
  a.nested.Orientation.values;
  a.nested.Justify.values;
  a.nested.Align.values;
  a.nested.FlexWrap.values;
  a.nested.Theme.values;
  a.nested.FontType.values;
}