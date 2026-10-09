// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'SkillReceiveMessage'
// - Renamed export 'o' to 'SkeletonLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 874614
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var useSmoothTextHook = require("use-smooth-text-hook") /*id: 899617*/;
  var errorOutlineComponent = require("error-outline-component") /*id: 345768*/;
  var skeletonLayoutComponent = require("skeleton-layout-component") /*id: 367791*/;
  var writingOutlineComponent = require("writing-outline-component") /*id: 948439*/;
  var aiChatSkillInputUtils = require("ai-chat-skill-input-utils") /*id: 862269*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var chatMessageRetryHandler = require("chat-message-retry-handler") /*id: 725789*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var aiSpaceAttachmentConstants = require("ai-space-attachment-constants") /*id: 241695*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var skillActionStatusEnums = require("skill-action-status-enums") /*id: 313178*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var writingSkillConfigHooks = require("writing-skill-config-hooks") /*id: 276565*/;
  var asyncMessageNodeUtils = require("async-message-node-utils") /*id: 189511*/;
  let M = async e => {
    try {
      await apiServicesCollection.SamanthaApiService.AddReference(e);
    } catch (t) {
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "add_reference_error",
        meta: {
          ...e
        }
      });
      throw t;
    }
  };
  let A = async e => {
    try {
      let {
        data: t
      } = await apiServicesCollection.SamanthaApiService.QueryReferenceContent(e);
      return t ?? [];
    } catch (t) {
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "query_reference_status_error",
        meta: {
          ...e
        }
      });
      throw t;
    }
  };
  var asyncMessageThinkingNode = require("async-message-thinking-node") /*id: 889095*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let W = reactCoreLibraryReexport.memo(function (e) {
    let {
      message: G
    } = e;
    let J = i18nTranslationUtils.useTranslationWithFallback();
    let Q = writingSkillConfigHooks.useWritingParagraphOptions();
    let q = messageContentTypeAndStatusChecker.fdv(G) ? G : undefined;
    let K = q == null ? undefined : q.message_id;
    let Y = q == null ? undefined : q.conversation_id;
    let {
      text: ee = "",
      outline_leading_content: et = "",
      outline_meta: en = {},
      outline_id: ei
    } = asyncMessageNodeUtils.getOutlineBlock(q);
    let er = chatMessageStatusCheck.isMessageFinished(q);
    let eo = messageContentTypeAndStatusChecker.vlk(q);
    let ea = !!(q == null ? undefined : q.content_obj?.outline);
    let el = messageContentTypeAndStatusChecker.$bh(q);
    let [es, ec] = reactCoreLibraryReexport.useState();
    let [ed, eu] = reactCoreLibraryReexport.useState();
    let [e_, em] = reactCoreLibraryReexport.useState(false);
    let ev = messageContentTypeAndStatusChecker.F3w(q);
    let {
      isSelectMode: ef
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      isSelectMode: e.isSelectMode
    }), deepEqualityUtil_1.isDeepEqual);
    let ep = reactCoreLibraryReexport.useMemo(() => {
      var e;
      var t;
      return !ev && !ef && !!el && (!!e_ || !!es && ((t = es.content) === null || t === undefined || (e = t.sub_paragraph_content) === null || e === undefined || !e.length || !es.content.sub_paragraph_content.some(e => e.reference_status === skillActionStatusEnums.SearchStatus.WaitingForSearch)));
    }, [e_, el, es, ev, ef]);
    let {
      data: eh,
      cancel: eg
    } = useRequestHook.useRequest(async () => {
      if (!ev && el) {
        if (!ei) {
          em(true);
          return;
        }
        return await apiServicesCollection.SamanthaApiService.GetOutlineMeta({
          outline_id: ei
        }).then(e => e.data).catch(e => {});
      }
    }, {
      pollingInterval: 2000,
      pollingWhenHidden: false
    });
    reactCoreLibraryReexport.useEffect(() => {
      if ((eh == null ? undefined : eh.content?.reference_status) && (eh == null ? undefined : eh.content?.reference_status) !== skillActionStatusEnums.SearchStatus.WaitingForSearch) {
        if (skillActionStatusEnums.GenerationStatus.Modified === eh.status) {
          eu(eh.update_time);
        }
        ec(eh);
        eg();
      }
    }, [eh, eg]);
    let {
      text: eb
    } = useSmoothTextHook.useSmoothText(et, {
      enable: !er
    });
    let ey = functionInvoker.invoke(() => ev || !et || (et == null ? undefined : et.length) === eb.length ? ee : "");
    let ew = reactCoreLibraryReexport.useRef();
    let ek = reactCoreLibraryReexport.useRef();
    let ex = async () => {
      if (!ek.current?.client) {
        let {
          UploaderService: e
        } = await asyncRetryUtils.retryPromise(() => Promise.all([require.e("event-emitter-utilities") /*id: 35613*/, require.e("uploader-service-file-upload") /*id: 50948*/]).then(require.bind(require, "file-uploader-service") /*id: 566355*/));
        let r = new e({
          type: aiSpaceAttachmentConstants.attachmentTypes.File,
          scene: aiSpaceAttachmentConstants.spaceSceneIds.BOT_CHAT,
          userId: chatUserInfoActions.getUserIdStr() ?? "",
          appId: uniParamsManager.uniParamsManager.getParam("aid") ?? 1
        });
        ek.current = r;
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      ex();
    }, []);
    let eS = async e => {
      var r;
      var o;
      var l;
      if (!!ep && (!!ei || !!(q == null ? undefined : q.message_id)) && !isNullishCheck.isNil(e == null ? undefined : e.meta.content?.reference_status) && (e == null ? undefined : e.meta.content?.reference_status) !== skillActionStatusEnums.SearchStatus.WaitingForSearch && (!!isNullishCheck.isNil(e == null ? undefined : (r = e.meta.content) === null || r === undefined ? undefined : r.sub_paragraph_content?.length) || !(e == null ? undefined : (l = e.meta.content) === null || l === undefined ? undefined : (o = l.sub_paragraph_content) === null || o === undefined ? undefined : o.some(e => isNullishCheck.isNil(e.reference_status) || e.reference_status === skillActionStatusEnums.SearchStatus.WaitingForSearch)))) {
        try {
          if ((await apiServicesCollection.SamanthaApiService.UpdateOutlineMeta({
            outline_id: ei,
            content: e.meta.content,
            markdown_content: e.content
          })).code) {
            return;
          }
        } catch (e) {
          return;
        }
        try {
          let e = await apiServicesCollection.SamanthaApiService.GetOutlineMeta({
            outline_id: ei
          });
          if (e.code) {
            throw Error(e.msg);
          }
          eu(Number(e == null ? undefined : e.data?.update_time));
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.warning({
            eventName: "writing_outline_update_time_fail",
            meta: {
              outlineId: ei,
              error: e == null ? undefined : e.message
            }
          });
        }
      }
    };
    let eC = e => {
      if (Y && K) {
        teaAnalyticsEventTracker.trackEvent("writing_outline_button_click", {
          button_name: e,
          writing_genre: aiChatSkillInputUtils.getReplyChatGenre(Y, K),
          message_id: K
        });
      }
    };
    let eE = e => {
      if (Y && K) {
        teaAnalyticsEventTracker.trackEvent("edit_reference_popup_click", {
          button_name: e,
          message_id: K,
          skill_id: chatAppEnums.SkillType.WriteAssistant.toString(),
          writing_genre: aiChatSkillInputUtils.getReplyChatGenre(Y, K)
        });
      }
    };
    let eR = () => {
      if (Y && K) {
        teaAnalyticsEventTracker.trackEvent("edit_reference_popup_show", {
          skill_id: chatAppEnums.SkillType.WriteAssistant.toString(),
          writing_genre: aiChatSkillInputUtils.getReplyChatGenre(Y, K),
          message_id: K
        });
      }
    };
    let eT = async () => {
      var t;
      await promiseAsyncUtilities.createDelayedPromise(500);
      let i = ew.current;
      if (i && ((i == null ? undefined : (t = i.content) === null || t === undefined ? undefined : t.sub_paragraph_content?.length) ?? 0) < 2) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "writing_outline_bad_case_show",
          meta: {
            text: ey,
            parsedOutline: JSON.stringify(ew.current),
            messageId: K,
            conversationId: Y
          }
        });
      }
      if (Y && K) {
        teaAnalyticsEventTracker.trackEvent("writing_outline_show", {
          writing_genre: aiChatSkillInputUtils.getReplyChatGenre(Y, K),
          message_id: K,
          is_long_content: aiChatSkillInputUtils.hasLongContentReply(Y, K)
        });
      }
    };
    let ej = async e => {
      let t = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      let n = t == null ? undefined : t.getCanvasTeaParams();
      if (teaAnalyticsEventTracker.trackEvent !== null && teaAnalyticsEventTracker.trackEvent !== undefined) {
        teaAnalyticsEventTracker.trackEvent("right_click_copy", {
          message_id: K,
          bot_id: chatConversationBotId.getConversationBotId(Y || ""),
          conversation_id: Y,
          skill_id: chatAppEnums.SkillType.WriteAssistant.toString(),
          skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.WriteAssistant),
          section_id: q == null ? undefined : q.section_id,
          click_from: "canvas_outline",
          canvas_type: "",
          start_index: "0",
          end_index: "",
          ...n
        });
      }
    };
    let eN = async () => {
      (await chatMessageRetryHandler.retryReceiveMessage({
        message: q
      }))();
    };
    if (((q == null ? undefined : q.content_obj?.samantha_code) ?? (q == null ? undefined : q.ext?.samantha_code)) || er && !ei && !ea && !eo) {
      return reactJsxRuntimeCoreReexport.jsx(errorOutlineComponent.ErrorOutline, {
        tip: (q == null ? undefined : q.brief) ?? (q == null ? undefined : q.ext?.brief) ?? (q == null ? undefined : q.content_obj?.brief),
        onRetryClick: eN,
        actionBarConfigStr: (q == null ? undefined : q.content_obj?.action_bar_config) ?? (q == null ? undefined : q.ext?.action_bar_config),
        i18nConfig: {
          skill_writing_outline_failure_retry_button_titile: J("skill_writing_outline_failure_retry_button_titile")
        }
      });
    } else if (ea && !es) {
      return reactJsxRuntimeCoreReexport.jsx(skeletonLayoutComponent.SkeletonLayout, {});
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(asyncMessageThinkingNode.ThinkingMessageNode, {
          message: q
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "container-IqY0vy",
          "data-testid": "message_outline_content",
          "data-finished": er,
          onCopy: ej,
          tabIndex: 0,
          children: [reactJsxRuntimeCoreReexport.jsx("p", {
            className: "prev-message-tip-gSVkeW",
            "data-testid": "outline_prefix_text",
            children: eb
          }), reactJsxRuntimeCoreReexport.jsx(writingOutlineComponent.WritingOutlineComponent, {
            isHeritageOutline: e_,
            smooth: {
              enable: !er,
              maxFirstTextSmoothSize: 10,
              onSmoothFinished: eT
            },
            paragraphCountOptions: Q,
            heritageOutlineOption: en,
            markdown: ey,
            editable: ep,
            simplify: ev,
            isStreaming: !er,
            meta: es,
            updateTime: ed,
            suspenseMeta: eh,
            onUpdate: eS,
            onUpload: e => new observableCoreClass.Observable(t => {
              var n;
              if (ek != null && (n = ek.current) !== null && n !== undefined) {
                n.upload(e, {
                  complete: n => {
                    let i = n.uploadResult.Uri;
                    t.next({
                      status: "done",
                      percent: 100,
                      uri: i
                    });
                    asyncMessageNodeUtils.trackFileUpload({
                      file: e,
                      success: true,
                      collectionId: i
                    });
                  },
                  error: () => {
                    t.error();
                    asyncMessageNodeUtils.trackFileUpload({
                      file: e,
                      success: false
                    });
                  },
                  progress: e => t.next({
                    status: "progress",
                    percent: e.percent
                  })
                });
              }
            }),
            onAddReference: M,
            onQueryReferenceStatus: e => A({
              uuid: e
            }),
            services: {
              refreshChapterReferenceService: e => apiServicesCollection.SamanthaApiService.SearchReferenceByParagraph({
                paragraph_content: e
              }).then(e => {
                return e.data?.references ?? [];
              }).catch(() => []),
              searchReferenceService: e => apiServicesCollection.SamanthaApiService.SearchOutlineReference({
                query: e
              }).then(e => {
                return e.data?.references ?? [];
              }).catch(() => [])
            },
            behavior: {
              onAddPhrase() {
                eC("add_phrase");
              },
              onDeletePhrase() {
                eC("remove_phrase");
              },
              onOrderPhrase() {
                eC("order_phrase");
              },
              onSetWordCount() {
                eC("set_word_count");
              },
              onOutlineReferenceClick() {
                eC("reference_modify");
              },
              onChangeCountStyle() {
                eC("paragraph_setting");
              },
              onDeleteSubTitle() {
                eC("delete_subtitle");
              },
              onAddSubTitle() {
                eC("add_subtitle");
              },
              onOutlineTextEdit() {
                eC("edit_subtitle");
              },
              onReferenceModalShow() {
                eR();
              },
              onReferenceModalClose() {
                eE("cancel");
              },
              onReferenceModalConfirm() {
                eE("ok");
              },
              onReferenceSelected() {
                eE("check_box_click");
              },
              onReferenceSearch() {
                eE("search");
              },
              onReferenceSearchSelected() {
                eE("check_box_click_after_search");
              },
              onReferenceAddFileClick() {
                eE("add_reference_local");
              },
              onReferenceAddLinkClick() {
                eE("add_reference_link");
              },
              onReferenceAddLinkConfirm() {
                eE("add_reference_link_confirm");
              },
              onReferenceAddLinkCancel() {
                eE("add_reference_link_cancel");
              },
              onReferenceShowAll() {
                eE("check_all_reference");
              }
            },
            onParse: e => {
              let {
                outlineMeta: t
              } = e;
              ew.current = t;
            },
            i18nConfig: {
              reference_modal_title: J("reference_modal_title"),
              reference_modal_search_input_placeholder: J("reference_modal_search_input_placeholder"),
              reference_modal_add_button_title: J("reference_modal_add_button_title"),
              confirm_button_title: J("confirm_button_title"),
              cancel_button_title: J("cancel_button_title"),
              reference_modal_selected_item_view: J("reference_modal_selected_item_view"),
              reference_modal_loading: J("reference_modal_loading"),
              reference_modal_selection_limit_toast: J("reference_modal_selection_limit_toast"),
              reference_modal_reference_item_delete: J("reference_modal_reference_item_delete"),
              reference_modal_reference_item_clickToView: J("reference_modal_reference_item_clickToView"),
              reference_modal_search_result_empty: J("reference_modal_search_result_empty"),
              reference_modal_selected_item: J("reference_modal_selected_item"),
              reference_modal_all_reference_title: J("reference_modal_all_reference_title"),
              reference_modal_empty_placeholder: J("reference_modal_empty_placeholder"),
              reference_modal_view_all_reference: J("reference_modal_view_all_reference"),
              reference_modal_add_type_localFile: J("reference_modal_add_type_localFile"),
              reference_modal_add_type_webpage: J("reference_modal_add_type_webpage"),
              reference_modal_urlInput_placeholder: J("reference_modal_urlInput_placeholder"),
              add_button_title: J("add_button_title"),
              reference_modal_reference_item_type_pdf: J("addreference_modal_reference_item_type_pdf_button_title"),
              reference_modal_reference_item_type_word: J("reference_modal_reference_item_type_word"),
              reference_modal_reference_item_type_text: J("reference_modal_reference_item_type_text"),
              reference_modal_reference_item_type_webpage: J("reference_modal_reference_item_type_webpage"),
              reference_modal_reference_item_status_parsing: J("reference_modal_reference_item_status_parsing"),
              reference_modal_reference_item_parse_error: J("reference_modal_reference_item_parse_error"),
              reference_modal_add_files_limit_toast: J("reference_modal_add_files_limit_toast"),
              reference_modal_add_webpage_repeat_toast: J("reference_modal_add_webpage_repeat_toast"),
              reference_modal_reference_item_status_uploading: J("reference_modal_reference_item_status_uploading"),
              reference_modal_add_webpage_notSubmitted_toast: J("reference_modal_add_webpage_notSubmitted_toast"),
              reference_modal_add_webpage_invalidURL_toast: J("reference_modal_add_webpage_invalidURL_toast"),
              professional_writing_add_chapter: J("professional_writing_add_chapter"),
              professional_writing_chapter_title: J("professional_writing_chapter_title"),
              professional_writing_heading: J("professional_writing_heading"),
              professional_writing_subtitle: J("professional_writing_subtitle"),
              professional_writing_subtitle_theme: J("professional_writing_subtitle_theme"),
              professional_writing_add_title: J("professional_writing_add_title"),
              professional_writing_del_chapter: J("professional_writing_del_chapter"),
              skill_writing_outline_paragraph_setting: J("skill_writing_outline_paragraph_setting"),
              skill_writing_outline_reference_modified_alert_title: J("skill_writing_outline_reference_modified_alert_title"),
              skill_writing_outline_reference_modified_alert_button_searchAgain: J("skill_writing_outline_reference_modified_alert_button_searchAgain"),
              skill_writing_outline_reference_modified_alert_button_doNoting: J("skill_writing_outline_reference_modified_alert_button_doNoting"),
              skill_writing_outline_reference_searching: J("skill_writing_outline_reference_searching"),
              skill_writing_outline_reference_modify: J("skill_writing_outline_reference_modify"),
              skill_writing_outline_title_label: J("skill_writing_outline_title_label"),
              skill_writing_outline_reference_addNew: J("skill_writing_outline_reference_addNew"),
              skill_writing_last_edited_time: J("skill_writing_last_edited_time"),
              skill_writing_delete_confirm_dialogue_title: J("skill_writing_delete_confirm_dialogue_title"),
              skill_writing_delete_confirm_dialogue_content: J("skill_writing_delete_confirm_dialogue_content"),
              general_btn_delete: J("general_btn_delete"),
              general_btn_cancel: J("general_btn_cancel")
            }
          })]
        })]
      });
    }
  });
  let Z = skeletonLayoutComponent.SkeletonLayout;
  require.d(exports, {
    SkillReceiveMessage: function () {
      return W;
    },
    SkeletonLayout: function () {
      return Z;
    }
  });
}