// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'generateImagesFromPrompt'
// - Renamed export 'I' to 'uploadImageToCodeAssistant'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42552.606ee944.js
         * chunkId: 42552
         * moduleId: 954528
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatMessageStreamProcessor = require("chat-message-stream-processor") /*id: 850590*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var uuidV1GeneratorWrapper = require("uuid-v1-generator-wrapper") /*id: 471924*/;
  var serviceRequestHelpers = require("service-request-helpers") /*id: 410370*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var apiErrorHandler = require("api-error-handler") /*id: 291616*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  class p extends Error {
    get id() {
      return this.config.id;
    }
    get rawError() {
      return this.config.rawError;
    }
    get extra() {
      return this.config.extra;
    }
    constructor(e) {
      super(e.message);
      this.config = e;
    }
  }
  let g = e => {
    let {
      mode: t,
      track: i,
      ext: n,
      ...c
    } = e;
    let d = false;
    return new Promise((e, h) => {
      chatMessageStreamProcessor.streamChatMessageProcessing({
        mode: t,
        track: i,
        memoryType: 2,
        message: {
          is_delta: false,
          conversation_type: chatCoreConstants.BotTypes.Coco,
          content_type: aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantInput,
          content_obj: c,
          attachments: [],
          ext: n,
          skill: {
            skill_type: aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant,
            skill_type_no_default: aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant,
            skill_id: `${aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant}`,
            skill_id_no_default: `${aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant}`
          },
          local_message_id: uuidV1GeneratorWrapper.generateUuidV1()
        },
        onMessage(t) {
          if (!t) {
            return;
          }
          let {
            content_type: i,
            content_obj: n
          } = t;
          if (i !== aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantOutput || !n || isEmptyUtil.isEmpty(n) || !n.image_data_list || isEmptyUtil.isEmpty(n.image_data_list)) {
            return;
          }
          let r = n.image_data_list;
          if (r.length) {
            d = true;
            e(r.filter(e => {
              return e.image_ori?.url;
            }).map(e => {
              return {
                ...e,
                url: e.image_ori?.url || "",
                status: e.status
              };
            }));
          } else {
            e(null);
          }
        },
        onError(e) {
          h(new p({
            id: "generate_image_error",
            rawError: e
          }));
        },
        async onFinish() {
          await promiseAsyncUtilities.createDelayedPromise(500);
          if (!d) {
            h(new p({
              id: "generate_image_error",
              rawError: Error("generate image called stream call bot finished without value emit")
            }));
          }
        }
      });
    });
  };
  let _ = async e => {
    let {
      blob: t,
      isPublic: i = false,
      overrideConfig: a
    } = e;
    try {
      let e = new FormData();
      e.append("file_type", t.type.split("/")[1]);
      e.append("data", t);
      if (i) {
        e.append("is_public", "true");
      }
      let {
        code: r,
        data: s = {}
      } = await serviceRequestHelpers.requestWithPath("/samantha/code/upload_image")({
        method: "POST",
        data: e,
        url: ""
      }, ...(a ? [{
        overrideConfig: a
      }] : []));
      if (r === chatErrorCodes.chatErrorCodes.IMAGE_SAFETY_ERROR) {
        throw new apiErrorHandler.ApiError({
          message: "Code upload image safety error",
          code: r,
          httpStatus: ""
        });
      }
      if (!s) {
        throw Error("upload file failed");
      }
      let {
        url: o = "",
        uri: l
      } = s;
      return {
        src: xssContentSanitizer.sanitizeUrl(o, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t5T1d0aFZ6$n$%RmRPZ*1OdFZ-WmpNMHBx$ERO$01HRlhlSHBNTWtaM1lWTTFNR015%m5s-%0xWj-"
        }),
        uri: l
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "code_upload_image_error",
        error: e
      });
      throw e;
    }
  };
  require.d(exports, {
    generateImagesFromPrompt: function () {
      return g;
    },
    uploadImageToCodeAssistant: function () {
      return _;
    }
  });
}