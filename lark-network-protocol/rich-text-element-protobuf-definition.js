// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Renamed variable 'n' to 'protobufDescriptorRootExport'
// - Resolved require(717712) to 'protobuf-descriptor-root-export'
// - Resolved require(330114) to 'cipher-entity-protobuf-definition'
// - Resolved require(809263) to 'crypto-entity-protobuf-definition'
// - Resolved require(931788) to 'crypto-image-entity-def'
// - Resolved require(520501) to 'image-entities-protobuf-definition'
// - Resolved require(852722) to 'card-action-schema'
// - Resolved require(237941) to 'image-set-entity-definition'
// - Updated imported property 'J' to 'descriptorRoot' (module 717712)
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 517377
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  var protobufDescriptorRootExport = require("protobuf-descriptor-root-export") /*id: 717712*/;
  let s = {
    SpecialURL: {
      values: {
        UNKNOWN_URL: 0,
        BEAR: 1,
        ENTITY_NUM: 2
      }
    }
  };
  protobufDescriptorRootExport.descriptorRoot.define("entities").addJSON(s);
  s.SpecialURL.values;
  require("cipher-entity-protobuf-definition") /*id: 330114*/;
  require("crypto-entity-protobuf-definition") /*id: 809263*/;
  require("crypto-image-entity-def") /*id: 931788*/;
  require("image-entities-protobuf-definition") /*id: 520501*/;
  require("card-action-schema") /*id: 852722*/;
  require("image-set-entity-definition") /*id: 237941*/;
  let o = {
    fields: {
      tag: {
        rule: "required",
        type: "Tag",
        id: 1
      },
      style: {
        keyType: "string",
        type: "string",
        id: 2
      },
      property: {
        rule: "required",
        type: "bytes",
        id: 3
      },
      childIds: {
        rule: "repeated",
        type: "string",
        id: 4
      },
      styleKeys: {
        rule: "repeated",
        type: "string",
        id: 5
      },
      upgradeElement: {
        type: "bytes",
        id: 6
      }
    },
    nested: {
      Tag: {
        values: {
          UNKNOWN_TAG: 0,
          TEXT: 1,
          IMG: 2,
          P: 3,
          FIGURE: 4,
          AT: 5,
          A: 6,
          B: 7,
          I: 8,
          U: 9,
          EMOTION: 10,
          BUTTON: 11,
          SELECT: 12,
          PROGRESS_SELECT_OPTION: 13,
          DIV: 14,
          TEXTABLE_AREA: 15,
          TIME: 16,
          LINK: 17,
          MEDIA: 18,
          SELECTMENU: 19,
          OVERFLOWMENU: 20,
          DATEPICKER: 21,
          DOCS: 22,
          H1: 23,
          H2: 24,
          H3: 25,
          UL: 26,
          OL: 27,
          LI: 28,
          QUOTE: 29,
          CODE: 30,
          CODE_BLOCK: 31,
          HR: 32,
          TIMEPICKER: 33,
          DATETIMEPICKER: 34,
          REACTION: 35,
          MENTION: 36,
          CODE_BLOCK_V2: 37,
          MY_AI_TOOL: 38,
          TABLE: 39,
          TABLE_ROW: 40,
          TABLE_CELL: 41,
          COLUMNS: 42,
          COLUMN: 43,
          H4: 44,
          H5: 45,
          H6: 46,
          AT_USER_GROUP: 47
        }
      },
      ParagraphProperty: {
        fields: {}
      },
      FigureProperty: {
        fields: {}
      },
      TextProperty: {
        fields: {
          content: {
            rule: "required",
            type: "string",
            id: 1
          },
          i18nKey: {
            type: "string",
            id: 2
          },
          numberOfLines: {
            type: "int32",
            id: 3,
            options: {
              default: 0
            }
          }
        }
      },
      ItalicProperty: {
        fields: {
          content: {
            rule: "required",
            type: "string",
            id: 1
          },
          i18nKey: {
            type: "string",
            id: 2
          }
        }
      },
      BoldProperty: {
        fields: {
          content: {
            rule: "required",
            type: "string",
            id: 1
          },
          i18nKey: {
            type: "string",
            id: 2
          }
        }
      },
      UnderlineProperty: {
        fields: {
          content: {
            rule: "required",
            type: "string",
            id: 1
          },
          i18nKey: {
            type: "string",
            id: 2
          }
        }
      },
      AnchorProperty: {
        fields: {
          href: {
            rule: "required",
            type: "string",
            id: 1
          },
          content: {
            rule: "required",
            type: "string",
            id: 2
          },
          textContent: {
            type: "string",
            id: 3
          },
          specialUrl: {
            type: "SpecialURL",
            id: 4
          },
          i18nKey: {
            type: "string",
            id: 5
          },
          iosHref: {
            type: "string",
            id: 6
          },
          androidHref: {
            type: "string",
            id: 7
          },
          pcHref: {
            type: "string",
            id: 8
          },
          isCustom: {
            type: "bool",
            id: 9
          },
          scene: {
            type: "Scene",
            id: 10
          },
          closeCardPreview: {
            type: "bool",
            id: 11,
            options: {
              default: false
            }
          }
        },
        nested: {
          Scene: {
            values: {
              UNKNOWN: 0,
              COPY_PASTE_ANCHOR: 1,
              COPY_PASTE_TEXT: 2,
              CUSTOM_EDIT: 3,
              SEVER_PARSE: 4
            }
          }
        }
      },
      AtProperty: {
        fields: {
          userId: {
            rule: "required",
            type: "string",
            id: 1
          },
          content: {
            rule: "required",
            type: "string",
            id: 2,
            options: {
              deprecated: true
            }
          }
        }
      },
      AtUserGroupProperty: {
        fields: {
          userGroupId: {
            type: "int64",
            id: 1
          },
          defaultGroupName: {
            type: "string",
            id: 2
          },
          i18nGroupName: {
            keyType: "string",
            type: "string",
            id: 3
          }
        }
      },
      MentionProperty: {
        fields: {
          item: {
            rule: "required",
            type: "MentionItem",
            id: 1
          },
          content: {
            rule: "required",
            type: "string",
            id: 2
          }
        }
      },
      MentionItem: {
        fields: {
          id: {
            rule: "required",
            type: "string",
            id: 1
          },
          type: {
            rule: "required",
            type: "MentionType",
            id: 2
          }
        },
        nested: {
          MentionType: {
            values: {
              UNKNOWN_MENTION_TYPE: 0,
              HASH_TAG: 1,
              MOMENTS_HASHTAG: 2
            }
          }
        }
      },
      ImageProperty: {
        fields: {
          token: {
            type: "string",
            id: 2,
            options: {
              default: ""
            }
          },
          alt: {
            type: "string",
            id: 10,
            options: {
              default: ""
            }
          },
          altI18nKey: {
            type: "string",
            id: 11,
            options: {
              default: ""
            }
          },
          imgCanPreview: {
            type: "bool",
            id: 12,
            options: {
              default: false
            }
          },
          cipher: {
            type: "Cipher",
            id: 3
          },
          cipherType: {
            type: "Crypto.Type",
            id: 19
          },
          originKey: {
            type: "string",
            id: 4,
            options: {
              default: ""
            }
          },
          fsUnit: {
            type: "string",
            id: 9
          },
          urls: {
            rule: "repeated",
            type: "string",
            id: 1,
            options: {
              deprecated: true
            }
          },
          middleKey: {
            type: "string",
            id: 5,
            options: {
              default: ""
            }
          },
          thumbKey: {
            type: "string",
            id: 6,
            options: {
              default: ""
            }
          },
          originWidth: {
            type: "int32",
            id: 7,
            options: {
              default: 0
            }
          },
          originHeight: {
            type: "int32",
            id: 8,
            options: {
              default: 0
            }
          },
          thumbnailWebp: {
            type: "Image",
            id: 13
          },
          middleWebp: {
            type: "Image",
            id: 14
          },
          middleMp4: {
            type: "Image",
            id: 15
          },
          cover: {
            type: "Image",
            id: 16
          },
          image: {
            type: "ImageSetV2",
            id: 17
          },
          customWidth: {
            type: "int32",
            id: 18
          },
          isOriginSource: {
            type: "bool",
            id: 20
          },
          originSize: {
            type: "uint64",
            id: 21
          },
          showMode: {
            type: "int32",
            id: 22
          },
          width: {
            type: "uint32",
            id: 23
          },
          height: {
            type: "uint32",
            id: 24
          }
        }
      },
      ReactionProperty: {
        fields: {
          key: {
            rule: "required",
            type: "string",
            id: 1
          }
        }
      },
      EmotionProperty: {
        fields: {
          key: {
            rule: "required",
            type: "string",
            id: 1
          }
        }
      },
      ButtonProperty: {
        fields: {
          actionId: {
            type: "string",
            id: 1
          },
          disable: {
            type: "bool",
            id: 2,
            options: {
              default: false
            }
          },
          active: {
            type: "bool",
            id: 3,
            options: {
              default: false
            }
          },
          confirm: {
            type: "ButtonConfirmProperty",
            id: 4
          },
          loading: {
            type: "ButtonLoadingProperty",
            id: 5
          },
          mode: {
            type: "string",
            id: 6
          }
        }
      },
      ButtonConfirmProperty: {
        fields: {
          title: {
            rule: "required",
            type: "string",
            id: 1
          },
          text: {
            rule: "required",
            type: "string",
            id: 2
          },
          confirm: {
            rule: "required",
            type: "string",
            id: 3
          },
          dismiss: {
            rule: "required",
            type: "string",
            id: 4
          },
          titleI18nKey: {
            type: "string",
            id: 5
          },
          textI18nKey: {
            type: "string",
            id: 6
          },
          confirmI18nKey: {
            type: "string",
            id: 7
          },
          dismissI18nKey: {
            type: "string",
            id: 8
          }
        }
      },
      ButtonLoadingProperty: {
        fields: {
          begin: {
            rule: "required",
            type: "string",
            id: 1
          },
          success: {
            rule: "required",
            type: "string",
            id: 2
          },
          fail: {
            rule: "required",
            type: "string",
            id: 3
          },
          beginI18nKey: {
            type: "string",
            id: 4
          },
          successI18nKey: {
            type: "string",
            id: 5
          },
          failI18nKey: {
            type: "string",
            id: 6
          }
        }
      },
      SelectProperty: {
        fields: {
          minPickNum: {
            type: "int32",
            id: 4,
            options: {
              default: 1
            }
          },
          maxPickNum: {
            type: "int32",
            id: 5,
            options: {
              default: 1
            }
          }
        }
      },
      SelectMenuProperty: {
        fields: {
          type: {
            type: "Type",
            id: 1
          },
          actionId: {
            type: "string",
            id: 2
          },
          placeHolder: {
            type: "string",
            id: 3
          },
          placeHolderI18nKey: {
            type: "string",
            id: 4
          },
          initialOption: {
            type: "string",
            id: 5
          },
          options: {
            rule: "repeated",
            type: "MenuOption",
            id: 6
          },
          confirm: {
            type: "ButtonConfirmProperty",
            id: 7
          }
        },
        nested: {
          Type: {
            values: {
              UNKNOWN: 0,
              STATIC: 1,
              PERSON: 2
            }
          }
        }
      },
      MenuOption: {
        fields: {
          text: {
            type: "string",
            id: 1
          },
          textI18nKey: {
            type: "string",
            id: 2
          },
          value: {
            type: "string",
            id: 3
          },
          url: {
            type: "CardAction.Url",
            id: 4
          },
          optionActionId: {
            type: "string",
            id: 5
          }
        }
      },
      OverflowMenuProperty: {
        fields: {
          actionId: {
            type: "string",
            id: 1
          },
          options: {
            rule: "repeated",
            type: "MenuOption",
            id: 2
          },
          confirm: {
            type: "ButtonConfirmProperty",
            id: 3
          }
        }
      },
      DatePickerProperty: {
        fields: {
          actionId: {
            type: "string",
            id: 1
          },
          placeHolder: {
            type: "string",
            id: 2
          },
          placeHolderI18nKey: {
            type: "string",
            id: 3
          },
          initialDate: {
            type: "string",
            id: 4
          },
          confirm: {
            type: "ButtonConfirmProperty",
            id: 5
          }
        }
      },
      TimePickerProperty: {
        fields: {
          actionId: {
            type: "string",
            id: 1
          },
          placeHolder: {
            type: "string",
            id: 2
          },
          placeHolderI18nKey: {
            type: "string",
            id: 3
          },
          initialTime: {
            type: "string",
            id: 4
          },
          confirm: {
            type: "ButtonConfirmProperty",
            id: 5
          }
        }
      },
      DatetimePickerProperty: {
        fields: {
          actionId: {
            type: "string",
            id: 1
          },
          placeHolder: {
            type: "string",
            id: 2
          },
          placeHolderI18nKey: {
            type: "string",
            id: 3
          },
          initialDatetime: {
            type: "string",
            id: 4
          },
          confirm: {
            type: "ButtonConfirmProperty",
            id: 5
          }
        }
      },
      ProgressSelectOptionProperty: {
        fields: {
          actionId: {
            type: "string",
            id: 1
          },
          actionParamName: {
            type: "string",
            id: 2
          },
          actionParamValue: {
            type: "string",
            id: 3
          },
          disable: {
            type: "bool",
            id: 4,
            options: {
              default: false
            }
          },
          selected: {
            type: "bool",
            id: 5,
            options: {
              default: false
            }
          },
          optionCase: {
            type: "string",
            id: 6
          },
          content: {
            type: "string",
            id: 7
          },
          numberOfSelected: {
            type: "int32",
            id: 8
          },
          numberOfTotal: {
            type: "int32",
            id: 9
          }
        }
      },
      DivProperty: {
        fields: {}
      },
      TextableAreaProperty: {
        fields: {
          numberOfLines: {
            type: "int32",
            id: 1,
            options: {
              default: 0
            }
          }
        }
      },
      TimeProperty: {
        fields: {
          millisecondSince1970: {
            rule: "required",
            type: "int64",
            id: 1
          },
          format: {
            type: "string",
            id: 2,
            options: {
              default: "YYYY.MM.DD(dddd) HH:mm (GMT)"
            }
          },
          link: {
            type: "string",
            id: 3
          },
          formatType: {
            type: "string",
            id: 4
          }
        }
      },
      LinkProperty: {
        fields: {
          url: {
            type: "string",
            id: 1
          },
          iosUrl: {
            type: "string",
            id: 2
          },
          androidUrl: {
            type: "string",
            id: 3
          },
          pcUrl: {
            type: "string",
            id: 4
          },
          specialUrl: {
            type: "SpecialURL",
            id: 5
          },
          scene: {
            type: "LinkScene",
            id: 6
          }
        },
        nested: {
          LinkScene: {
            values: {
              UNKNOWN: 0,
              CardLink: 1,
              ContentLink: 2,
              FooterLink: 3
            }
          }
        }
      },
      MediaProperty: {
        fields: {
          key: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          size: {
            type: "int64",
            id: 3
          },
          mime: {
            type: "string",
            id: 4
          },
          source: {
            type: "Source",
            id: 5
          },
          image: {
            type: "ImageSet",
            id: 6
          },
          duration: {
            type: "int32",
            id: 7
          },
          fsUnit: {
            type: "string",
            id: 8
          },
          cryptoToken: {
            type: "string",
            id: 9
          },
          crypto: {
            type: "bytes",
            id: 10
          }
        },
        nested: {
          Source: {
            values: {
              UNKNOWN: 0,
              LARK: 1
            }
          }
        }
      },
      DocsProperty: {
        fields: {}
      },
      H1Property: {
        fields: {}
      },
      H2Property: {
        fields: {}
      },
      H3Property: {
        fields: {}
      },
      H4Property: {
        fields: {}
      },
      H5Property: {
        fields: {}
      },
      H6Property: {
        fields: {}
      },
      ULProperty: {
        fields: {
          type: {
            type: "Type",
            id: 1
          }
        },
        nested: {
          Type: {
            values: {
              DISC: 0,
              CIRCLE: 1,
              SQUARE: 2,
              NONE: 3
            }
          }
        }
      },
      OLProperty: {
        fields: {
          type: {
            type: "Type",
            id: 1
          },
          start: {
            type: "int32",
            id: 2,
            options: {
              default: 1
            }
          }
        },
        nested: {
          Type: {
            values: {
              NUMBER: 0,
              LOWERCASE_A: 1,
              UPPERCASE_A: 2,
              LOWERCASE_ROMAN: 3,
              UPPERCASE_ROMAN: 4,
              NONE: 5
            }
          }
        }
      },
      LIProperty: {
        fields: {}
      },
      QuoteProperty: {
        fields: {}
      },
      CodeProperty: {
        fields: {}
      },
      CodeBlockProperty: {
        fields: {
          language: {
            type: "Language",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          styleRefs: {
            rule: "repeated",
            type: "StyleRef",
            id: 3
          },
          styles: {
            rule: "repeated",
            type: "Style",
            id: 4
          }
        },
        nested: {
          Language: {
            values: {
              JS: 0,
              APACHE: 1,
              BASH: 2,
              CS: 3,
              CPLUSPLUS: 4,
              COFFE_SCRIPT: 5,
              HTML: 6,
              XML: 7,
              HTTP: 8,
              JSON: 9,
              JAVA: 10,
              MAKEFILE: 11,
              MARKDOWN: 12,
              NGINX: 13,
              OBJC: 14,
              PHP: 15,
              PERL: 16,
              PYTHON: 17,
              RUBY: 18,
              SQL: 19,
              SHELL: 20,
              GO: 21,
              SCSS: 22,
              LUA: 23,
              DJANGO: 24,
              KOTLIN: 25
            }
          },
          StyleType: {
            values: {
              CUSTOMIZE: 0,
              GRAMMAR: 1
            }
          },
          Style: {
            fields: {
              type: {
                type: "StyleType",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              value: {
                type: "string",
                id: 3
              }
            }
          },
          StyleRef: {
            fields: {
              location: {
                type: "int32",
                id: 1,
                options: {
                  default: 0
                }
              },
              length: {
                type: "int32",
                id: 2,
                options: {
                  default: 0
                }
              },
              styleIds: {
                rule: "repeated",
                type: "int32",
                id: 3,
                options: {
                  packed: false
                }
              }
            }
          }
        }
      },
      CodeBlockV2Property: {
        fields: {
          language: {
            type: "Language",
            id: 1
          },
          contents: {
            rule: "repeated",
            type: "LineContent",
            id: 2
          },
          wordWrap: {
            type: "bool",
            id: 4
          },
          version: {
            type: "int32",
            id: 5
          }
        },
        nested: {
          Language: {
            values: {
              PLAIN_TEXT: 0,
              ABAP: 1,
              ADA: 2,
              APACHE: 3,
              APEX: 4,
              ASSEMBLY: 5,
              BASH: 6,
              C_SHARP: 7,
              CPP: 8,
              C: 9,
              CMAKE: 10,
              COBOL: 11,
              CSS: 12,
              COFFEE_SCRIPT: 13,
              D: 14,
              DART: 15,
              DELPHI: 16,
              DIFF: 17,
              DJANGO: 18,
              DOCKER_FILE: 19,
              ERLANG: 20,
              FORTRAN: 21,
              GHERKIN: 22,
              GO: 23,
              GRAPHQL: 24,
              GROOVY: 25,
              HTML: 26,
              HTMLBARS: 27,
              HTTP: 28,
              HASKELL: 29,
              JSON: 30,
              JAVA: 31,
              JAVASCRIPT: 32,
              JULIA: 33,
              KOTLIN: 34,
              LATEX: 35,
              LISP: 36,
              LUA: 37,
              MATLAB: 38,
              MAKEFILE: 39,
              MARKDOWN: 40,
              NGINX: 41,
              OBJECTIVE_C: 42,
              OPENGL_SHADING_LANGUAGE: 43,
              PHP: 44,
              PERL: 45,
              POWERSHELL: 46,
              PROLOG: 47,
              PROPERTIES: 48,
              PROTOBUF: 49,
              PYTHON: 50,
              R: 51,
              RUBY: 52,
              RUST: 53,
              SAS: 54,
              SCSS: 55,
              SQL: 56,
              SCALA: 57,
              SCHEME: 58,
              SHELL: 59,
              SOLIDITY: 60,
              SWIFT: 61,
              TOML: 62,
              THRIFT: 63,
              TYPESCRIPT: 64,
              VBSCRIPT: 65,
              VISUAL_BASIC: 66,
              XML: 67,
              YAML: 68
            }
          },
          ContentType: {
            values: {
              TEXT: 0,
              KEYWORD: 1,
              BUILT_IN: 2,
              TYPE: 3,
              LITERAL: 4,
              NUMBER: 5,
              OPERATOR: 6,
              PUNCTUATION: 7,
              PROPERTY: 8,
              REGEXP: 9,
              STRING: 10,
              CHAR_ESCAPE: 11,
              SUBST: 12,
              SYMBOL: 13,
              CLASS: 14,
              FUNCTION: 15,
              VARIABLE: 16,
              VARIABLE_LANGUAGE: 17,
              VARIABLE_CONSTANT: 18,
              TITLE: 19,
              TITLE_CLASS: 20,
              TITLE_CLASS_INHERITED: 21,
              TITLE_FUNCTION: 22,
              TITLE_FUNCTION_INVOKE: 23,
              PARAMS: 24,
              COMMENT: 25,
              DOCTAG: 26,
              META: 27,
              META_PROMPT: 28,
              META_KEYWORD: 29,
              META_STRING: 30,
              SECTION: 31,
              TAG: 32,
              NAME: 33,
              ATTR: 34,
              ATTRIBUTE: 35,
              BULLET: 36,
              CODE: 37,
              EMPHASIS: 38,
              FORMULA: 39,
              LINK: 40,
              QUOTE: 41,
              SELECTOR_TAG: 42,
              SELECTOR_ID: 43,
              SELECTOR_CLASS: 44,
              SELECTOR_ATTR: 45,
              SELECTOR_PSEUDO: 46,
              TEMPLATE_TAG: 47,
              TEMPLATE_VARIABLE: 48,
              ADDITION: 49,
              DELETION: 50
            }
          },
          Content: {
            fields: {
              content: {
                type: "string",
                id: 1
              },
              type: {
                type: "ContentType",
                id: 2
              },
              style: {
                keyType: "string",
                type: "string",
                id: 3
              }
            }
          },
          LineContent: {
            fields: {
              contents: {
                rule: "repeated",
                type: "Content",
                id: 1
              }
            }
          }
        }
      },
      HRProperty: {
        fields: {}
      },
      MyAIToolProperty: {
        fields: {
          toolId: {
            type: "string",
            id: 1
          },
          toolRuntimeId: {
            type: "string",
            id: 2
          },
          status: {
            type: "Status",
            id: 3
          },
          i18nName: {
            keyType: "string",
            type: "string",
            id: 4
          },
          name: {
            type: "string",
            id: 5
          },
          text: {
            type: "string",
            id: 6
          },
          icon: {
            type: "Icon",
            id: 7
          }
        },
        nested: {
          Status: {
            values: {
              RUNING: 0,
              SUCCESS: 1,
              FAILED: 2
            }
          },
          Icon: {
            values: {
              LOADING: 0,
              ANALYZING: 1,
              RETRIEVING: 2,
              GENERATING: 3,
              NONE: 4
            }
          }
        }
      },
      HorizontalAlign: {
        values: {
          HORIZONTAL_ALIGN_UNKNOWN: 0,
          HORIZONTAL_ALIGN_LEFT: 1,
          HORIZONTAL_ALIGN_CENTER: 2,
          HORIZONTAL_ALIGN_RIGHT: 3
        }
      },
      VerticalAlign: {
        values: {
          VERTICAL_ALIGN_UNKNOWN: 0,
          VERTICAL_ALIGN_TOP: 1,
          VERTICAL_ALIGN_CENTER: 2,
          VERTICAL_ALIGN_BOTTOM: 3
        }
      },
      TableProperty: {
        fields: {
          columns: {
            rule: "repeated",
            type: "Column",
            id: 1
          }
        },
        nested: {
          Column: {
            fields: {
              width: {
                type: "int32",
                id: 1
              },
              horizontalAlign: {
                type: "HorizontalAlign",
                id: 2
              },
              verticalAlign: {
                type: "VerticalAlign",
                id: 3
              },
              isHeader: {
                type: "bool",
                id: 4
              }
            }
          }
        }
      },
      TableRowProperty: {
        fields: {
          horizontalAlign: {
            type: "HorizontalAlign",
            id: 1
          },
          verticalAlign: {
            type: "VerticalAlign",
            id: 2
          },
          isHeader: {
            type: "bool",
            id: 3
          }
        }
      },
      TableCellProperty: {
        fields: {
          colspan: {
            type: "int32",
            id: 1,
            options: {
              default: 1
            }
          },
          rowspan: {
            type: "int32",
            id: 2,
            options: {
              default: 1
            }
          },
          horizontalAlign: {
            type: "HorizontalAlign",
            id: 3
          },
          verticalAlign: {
            type: "VerticalAlign",
            id: 4
          },
          isMerged: {
            type: "bool",
            id: 5
          }
        }
      },
      ColumnsProperty: {
        fields: {}
      },
      ColumnProperty: {
        fields: {
          width: {
            type: "int32",
            id: 1
          }
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "RichTextElement", o);
  protobufCodecHelper.createProtobufCodec("entities", "RichTextElement", undefined, true);
  o.nested.Tag.values;
  o.nested.HorizontalAlign.values;
  o.nested.VerticalAlign.values;
}