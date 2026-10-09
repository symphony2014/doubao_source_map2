// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$e' to 'generateImage'
// - Renamed export 'Wg' to 'stopDocumentGeneration'
// - Renamed export 'Bi' to 'getImageBannerUrl'
// - Renamed export 'Lc' to 'createPageArtifact'
// - Renamed export 'ar' to 'fetchDocument'
// - Renamed export 'lV' to 'searchDocumentImages'
// - Renamed export 'D4' to 'fetchDocumentWithStatus'
// - Renamed export 'r7' to 'updateDocument'
// - Renamed export 'Ix' to 'uploadImage'
// - Renamed export 'LZ' to 'fetchDocumentMeta'
// - Renamed export 'pU' to 'getPlaceholderImageUrl'
// - Renamed export 'uS' to 'fetchMobileDocument'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 122025
         */
module.exports = function (module, exports, require) {
  var n;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var observableSafeMapOperator = require("observable-safe-map-operator") /*id: 297880*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var configErrorClass = require("config-error-class") /*id: 394787*/;
  var chatMessageStreamProcessor = require("chat-message-stream-processor") /*id: 850590*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var uuidV1GeneratorWrapper = require("uuid-v1-generator-wrapper") /*id: 471924*/;
  (n = {})[n.Loading = 0] = "Loading";
  n[n.Succeed = 1] = "Succeed";
  n[n.Failed = 2] = "Failed";
  let f = n;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var serviceRequestHelpers = require("service-request-helpers") /*id: 410370*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var apiErrorHandler = require("api-error-handler") /*id: 291616*/;
  var chatMessageBlockUtils = require("chat-message-block-utils") /*id: 292414*/;
  var inlineDocxActionTypes = require("inline-docx-action-types") /*id: 598431*/;
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var flowDocErrorClass = require("flow-doc-error-class") /*id: 664202*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeMergeMapFactory = require("safe-merge-map-factory") /*id: 128087*/;
  var observableOfUtility = require("observable-of-utility") /*id: 972100*/;
  let j = function (e, t = 0) {
    return r => r.pipe(safeMergeMapFactory.createSafeMergeMap((r, n) => {
      if (n === t) {
        e(r);
      }
      return observableOfUtility.observableOf(r);
    }));
  };
  let M = e => {
    let {
      ext: t,
      track: r,
      memoryType: n,
      onFirstReceive: i,
      onFirstError: l,
      ...a
    } = e;
    return new observableCoreClass.Observable(e => {
      let i = true;
      chatMessageStreamProcessor.streamChatMessageProcessing({
        track: r,
        memoryType: n,
        message: {
          is_delta: false,
          conversation_type: chatCoreConstants.BotTypes.Coco,
          content_type: aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteInput,
          content_obj: a,
          skill: {
            skill_type: aiAssistantSkillTypes.SkillTypes.SkillWrite,
            skill_type_no_default: aiAssistantSkillTypes.SkillTypes.SkillWrite,
            skill_id: `${aiAssistantSkillTypes.SkillTypes.SkillWrite}`,
            skill_id_no_default: `${aiAssistantSkillTypes.SkillTypes.SkillWrite}`
          },
          local_message_id: uuidV1GeneratorWrapper.generateUuidV1(),
          ext: t
        },
        onMessage(t) {
          if (!t) {
            return;
          }
          let {
            content_type: n,
            content_obj: a,
            reply_id: s,
            ext: d = {}
          } = t;
          if (n !== aiAssistantSkillTypes.SamanthaTypes.SamanthaText && n !== chatMessageTypes.ContentType.Text || !a || isEmptyUtil.isEmpty(a) || n === chatMessageTypes.ContentType.Text && s === "0") {
            return;
          }
          let u = a.samantha_code ?? d.samantha_code;
          if (u) {
            e.error(new flowDocErrorClass.FlowDocError({
              code: Number(u),
              message: a == null ? undefined : a.text
            }));
            if (i) {
              if (l != null) {
                l(a);
              }
            }
            return;
          }
          e.next(a);
          i = false;
        },
        onError(t) {
          e.error(t);
        },
        async onFinish() {
          await promiseAsyncUtilities.createDelayedPromise(500);
          e.complete();
        }
      });
    }).pipe(j(e => i == null ? undefined : i(e)));
  };
  let I = e => {
    let {
      text: t = "",
      remove_text_start_index: r,
      direct_output: n
    } = e;
    return {
      replaceFromIndex: infraUtilFunctions.parseNumber(r),
      text: t,
      directlyOnScreen: n === "1"
    };
  };
  let N = e => M(e).pipe(observableSafeMapOperator.createSafeMapOperator(I));
  let B = e => M({
    action: inlineDocxActionTypes.getDocxActionTypes.ReadDoc,
    read_doc_input: {
      pages_id: e
    }
  }).pipe(observableSafeMapOperator.createSafeMapOperator(e => {
    let {
      progress: t,
      remaining_expected_time: r
    } = e;
    return {
      ...I(e),
      progress: infraUtilFunctions.parseNumber(t),
      expectedTime: infraUtilFunctions.parseNumber(r)
    };
  }));
  let C = e => {
    let {
      docId: t,
      status: r,
      source_content: n,
      content: i
    } = e;
    if (r === chatAppEnums.PagesStatus.Generating) {
      return B(t);
    }
    if (r === chatAppEnums.PagesStatus.Generated) {
      return n;
    }
    if (r === chatAppEnums.PagesStatus.Updated) {
      let e = safeJsonUtils.safeParse(i, {});
      if (isEmptyUtil.isEmpty(e)) {
        return;
      }
      return new deltaSetCore.DeltaSet(e);
    }
  };
  let P = async e => {
    let {
      docId: t,
      docVersion: r,
      omitContent: n = false
    } = e;
    try {
      let {
        data: e = {}
      } = await apiServicesCollection.SamanthaApiService.GetPages({
        pages_id: t,
        pages_version: r
      });
      let {
        title: i,
        version: l,
        update_time: o,
        status: s
      } = e;
      return {
        title: i,
        value: n ? undefined : C({
          ...e,
          docId: t
        }),
        version: isUndefinedCheck.isUndefined(l) ? undefined : Number(l),
        updateTime: s === chatAppEnums.PagesStatus.Updated ? infraUtilFunctions.parseNumber(o) : undefined
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "fetch_doc_error",
        error: e,
        meta: {
          docId: t
        }
      });
      throw e;
    }
  };
  let z = async e => {
    let {
      docId: t,
      docVersion: r,
      version: n,
      content: i,
      title: l,
      markdown: o
    } = e;
    try {
      await apiServicesCollection.SamanthaApiService.UpdatePages({
        pages_id: t,
        pages_version: r,
        version: n,
        content: i,
        title: l,
        source_content: o
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "update_doc_error",
        error: e,
        meta: {
          title: l,
          docId: t,
          content: i
        }
      });
      throw e;
    }
  };
  let J = async e => {
    let {
      resourceId: t
    } = e;
    try {
      let e = await apiServicesCollection.SamanthaApiService.GetDeepResearchResource({
        resource_id: t
      });
      let {
        blocks: n = []
      } = (e == null ? undefined : e.data) ?? {};
      let i = chatMessageBlockUtils.renderBlockContent(n);
      return {
        title: "",
        value: i,
        version: undefined,
        updateTime: undefined
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "fetch_mobile_doc_error",
        error: e,
        meta: {
          resourceId: t
        }
      });
      throw e;
    }
  };
  let L = async function (e = {}) {
    let {
      query: t,
      offset: r = 0,
      limit: n = 20,
      throwOnEmpty: l = false,
      needRewrite: o = true,
      title: a,
      artifactKey: s
    } = e;
    try {
      let {
        data: e = {}
      } = await apiServicesCollection.SamanthaApiService.SearchPagesImages({
        query: t,
        offset: r,
        limit: n,
        need_rewrite_query: o,
        title: a,
        artifact_key: s
      });
      let {
        images: d = [],
        rewrite_query: u
      } = e;
      if (l && d.length) {
        throw Error("Empty search result");
      }
      return {
        images: d.map(e => {
          let {
            url: t = ""
          } = e;
          return {
            src: xssContentSanitizer.sanitizeUrl(t, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFpa-l$aNldsTXhhMkl5$FhSalIwWjFXb*QzZ*1SW$$uQmlTRTEy$1ZoQ2NFeH$$bnBa$0$wd$p*aE5Q%T09"
            })
          };
        }),
        rewrittenQuery: u || undefined
      };
    } catch (t) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "doc_search_image_error",
        error: t,
        meta: {
          ...e
        }
      });
      throw t;
    }
  };
  let H = async e => {
    let {
      blob: t
    } = e;
    try {
      let e = new FormData();
      e.append("file_type", t.type.split("/")[1]);
      e.append("data", t);
      let {
        code: r,
        data: n = {}
      } = await serviceRequestHelpers.requestWithPath("/samantha/pages/upload_image")({
        method: "POST",
        data: e,
        url: ""
      });
      if (r === chatErrorCodes.chatErrorCodes.IMAGE_SAFETY_ERROR) {
        throw new apiErrorHandler.ApiError({
          message: "Doc upload image safty error",
          code: r,
          httpStatus: ""
        });
      }
      if (!n) {
        throw Error("upload file failed");
      }
      let {
        url: l = "",
        uri: o
      } = n;
      return {
        src: xssContentSanitizer.sanitizeUrl(l, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFpa-l$aNldsTXhhMkl5$FhSalIwWjFXb*QzZ*1SW$$uQmlTRTEy$1ZoQ2NFeH$$bnBa$0$wd$p*aE5Q%T09"
        }),
        uri: o
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "doc_upload_image_error",
        error: e
      });
      throw e;
    }
  };
  let O = async e => {
    let {
      docId: t
    } = e;
    try {
      await apiServicesCollection.SamanthaApiService.TerminalGenPages({
        pages_id: t
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "stop_doc_error",
        error: e,
        meta: {
          docId: t
        }
      });
      throw e;
    }
  };
  let D = e => {
    let {
      track: t,
      ...r
    } = e;
    let n = false;
    return new Promise((e, l) => {
      chatMessageStreamProcessor.streamChatMessageProcessing({
        track: t,
        memoryType: 2,
        message: {
          is_delta: false,
          conversation_type: chatCoreConstants.BotTypes.Coco,
          content_type: aiAssistantSkillTypes.SamanthaTypes.SamanthaImageInput,
          content_obj: r,
          attachments: [],
          skill: {
            skill_type: aiAssistantSkillTypes.SkillTypes.SkillImageGen,
            skill_type_no_default: aiAssistantSkillTypes.SkillTypes.SkillImageGen,
            skill_id: `${aiAssistantSkillTypes.SkillTypes.SkillImageGen}`,
            skill_id_no_default: `${aiAssistantSkillTypes.SkillTypes.SkillImageGen}`
          },
          local_message_id: uuidV1GeneratorWrapper.generateUuidV1()
        },
        onMessage(t) {
          if (!t) {
            return;
          }
          let {
            content_type: r,
            content_obj: l
          } = t;
          if (r !== aiAssistantSkillTypes.SamanthaTypes.SamanthaImageOutput || !l || isEmptyUtil.isEmpty(l) || !l.data || isEmptyUtil.isEmpty(l.data)) {
            return;
          }
          let a = (l.data || [])[0];
          if (a.image_ori) {
            n = true;
            e({
              ...a.image_ori,
              src: xssContentSanitizer.sanitizeUrl(a.image_ori.url, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFpa-l$aNldsTXhhMkl5$FhSalIwWjFXb*QzZ*1SW$$uQmlTRTEy$1ZoQ2NFeH$$bnBa$0$wd$p*aE5Q%T09"
              })
            });
            return;
          }
        },
        onError(e) {
          l(new configErrorClass.ConfigError({
            id: "generate_image_error",
            rawError: e
          }));
        },
        async onFinish() {
          await promiseAsyncUtilities.createDelayedPromise(500);
          if (!n) {
            l(new configErrorClass.ConfigError({
              id: "generate_image_error",
              rawError: Error("generate image called stream call bot finished without value emit")
            }));
          }
        }
      });
    });
  };
  let X = async function (e = {}) {
    let {
      id: t
    } = e;
    if (t) {
      return await asyncRetryUtils.pollUntilSuccess({
        value: () => apiServicesCollection.SamanthaApiService.ImageBannerQuery({
          imageKey: t
        }).then(e => {
          let {
            url: t
          } = e;
          return {
            src: xssContentSanitizer.sanitizeUrl(t || "", null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFpa-l$aNldsTXhhMkl5$FhSalIwWjFXb*QzZ*1SW$$uQmlTRTEy$1ZoQ2NFeH$$bnBa$0$wd$p*aE5Q%T09"
            })
          };
        }).catch(() => Promise.reject(Error("get image url error"))),
        ifRetry: e => !(e == null ? undefined : e.src),
        count: 30
      });
    } else {
      return Promise.reject(Error("get image url error"));
    }
  };
  let U = async e => {
    let {
      key: r,
      pagesId: n
    } = e;
    if (!r || !n) {
      return Promise.reject(Error("get image url error"));
    }
    let {
      data: l
    } = (await asyncRetryUtils.pollUntilSuccess({
      value: () => apiServicesCollection.SamanthaApiService.GetPagesPlaceholderImage({
        image_key: r,
        pages_id: n
      }).then(e => e).catch(e => ({
        code: e.code
      })),
      ifRetry: e => {
        return (e == null ? undefined : e.code) === 0 && (e == null ? undefined : e.data?.image_status) === f.Loading;
      },
      count: 30
    })) ?? {};
    return {
      src: xssContentSanitizer.sanitizeUrl((l == null ? undefined : l.image_url) || "", null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFpa-l$aNldsTXhhMkl5$FhSalIwWjFXb*QzZ*1SW$$uQmlTRTEy$1ZoQ2NFeH$$bnBa$0$wd$p*aE5Q%T09"
      })
    };
  };
  let V = async e => {
    try {
      let {
        data: t
      } = await apiServicesCollection.SamanthaApiService.CreatePagesArtifact(e);
      return t;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "create_page_artifacts_error",
        error: e,
        meta: {}
      });
      throw e;
    }
  };
  let q = async e => {
    let {
      shareId: t,
      pageId: r,
      pageVersion: n
    } = e;
    try {
      let e = null;
      if (t) {
        var l;
        var o;
        let r = await apiServicesCollection.SamanthaApiService.GetArtifactShareContent({
          share_id: t
        });
        e = r == null ? undefined : (o = r.data) === null || o === undefined ? undefined : (l = o.share_content) === null || l === undefined ? undefined : l.pages?.page_meta;
      } else if (r) {
        let {
          data: t
        } = await apiServicesCollection.SamanthaApiService.GetPagesMeta({
          pages_id: r,
          pages_version: n
        });
        e = t;
      }
      if (e) {
        let {
          search_items: t,
          meta_infos: r
        } = e;
        let n = t == null ? undefined : t.map(e => {
          let {
            text_card: t
          } = e;
          if (t) {
            let {
              id: e,
              title: r,
              logo_url: n,
              url: i
            } = t;
            return {
              id: e,
              title: r,
              logoUrl: n,
              url: i
            };
          }
        }).filter(Boolean);
        return {
          metaInfos: r == null ? undefined : r.map(e => {
            let {
              info: t
            } = e;
            try {
              if (!t) {
                return;
              }
              let e = JSON.parse(t);
              if (!isNaN(e.pos_rune?.[0])) {
                return {
                  endIndex: e.pos_rune?.[0],
                  referenceId: e.insert_text
                };
              }
            } catch (e) {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "fetch_doc_meta_parse_error",
                error: e,
                meta: {}
              });
            }
          }).filter(Boolean),
          referenceList: n
        };
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "fetch_doc_meta_error",
        error: e,
        meta: {}
      });
      return;
    }
  };
  require.d(exports, {
    generateImage: function () {
      return D;
    },
    stopDocumentGeneration: function () {
      return O;
    },
    getImageBannerUrl: function () {
      return X;
    },
    createPageArtifact: function () {
      return V;
    },
    fetchDocument: function () {
      return N;
    },
    searchDocumentImages: function () {
      return L;
    },
    fetchDocumentWithStatus: function () {
      return P;
    },
    updateDocument: function () {
      return z;
    },
    uploadImage: function () {
      return H;
    },
    fetchDocumentMeta: function () {
      return q;
    },
    getPlaceholderImageUrl: function () {
      return U;
    },
    fetchMobileDocument: function () {
      return J;
    }
  });
}