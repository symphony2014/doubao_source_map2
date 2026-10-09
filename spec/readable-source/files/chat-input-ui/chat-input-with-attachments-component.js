// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'ChatInputWithAttachments'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 759.d4297f73.js
         * chunkId: 759
         * moduleId: 158372
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var throttledDeepCloneUtil_1 = require("throttled-deep-clone-util_1") /*id: 891816*/;
  var chatAttachmentProcessor_1 = require("chat-attachment-processor_1") /*id: 670926*/;
  var writingAttachmentManager = require("writing-attachment-manager") /*id: 224274*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConstantId = require("chat-constant-id") /*id: 392213*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var syncedReferenceBlockManager = require("synced-reference-block-manager") /*id: 750510*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var chatInputSkillKeydownHandler = require("chat-input-skill-keydown-handler") /*id: 299053*/;
  var skillGuidanceInputContainer = require("skill-guidance-input-container") /*id: 216652*/;
  var searchSkillOverflowList = require("search-skill-overflow-list") /*id: 412695*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var skillStateHook = require("skill-state-hook") /*id: 377944*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let N = {
    data: []
  };
  let R = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: l,
      isToolButtonSmall: n,
      showAttachmentArea: a = false,
      attachmentStates: o = [],
      onDeleteAttachment: r,
      onRetryAttachment: s,
      onClickCollapseBtn: c,
      onClickExpandBtn: d,
      onClickExitButton: u,
      onCloseSkill: _,
      onSubmit: m,
      editorProps: f,
      sendBtnProps: R = {},
      rightActions: W,
      bottomActions: C = [],
      popoverVisible: E,
      popoverContent: Z,
      expandBtnText: M,
      onCheckLoadSuccess: F,
      customArea: z,
      ...I
    } = e;
    let [B, P] = skillStateHook.useSkillState({
      defaultValue: objectDefaultsUtil.defaults(syncedReferenceBlockManager.syncReferenceBlock(f == null ? undefined : f.defaultValue), N),
      value: f == null ? undefined : f.value,
      onChange: f == null ? undefined : f.onChange
    });
    let H = reactCoreLibraryReexport.useRef(null);
    let L = reactCoreLibraryReexport.useRef(null);
    let A = !B || inputToolConverter.extractText(B.data) === "";
    let X = (R == null ? undefined : R.disableToSend) || A;
    let {
      handleKeyDown: D
    } = chatInputSkillKeydownHandler.useChatInputSkillKeyHandler({
      editorValue: B,
      onSubmit: m,
      onResetEditorValue: () => {
        P(N);
      },
      onCloseSkillEvent: () => {
        if (_ != null) {
          _();
        }
      }
    });
    let O = e => {
      P(e);
    };
    let J = {
      type: "editor",
      isToolButtonSmall: n,
      getValue: () => B,
      onUpdateValue: O
    };
    let V = functionInvoker.invoke(() => {
      let e = [];
      e = typeof C == "function" ? C() : C;
      return collectionMapMatcher.mapWithMatcher(throttledOrderByUtil.throttledOrderBy(genericFilterUtil.genericFilter(e, Boolean), "sort"), e => e == null ? undefined : e.element(J));
    });
    let U = functionInvoker.invoke(() => {
      let e = [];
      if (typeof W == "function") {
        e = W();
      } else if (W) {
        e = W;
      }
      return collectionMapMatcher.mapWithMatcher(throttledOrderByUtil.throttledOrderBy(genericFilterUtil.genericFilter(e, Boolean), "sort"), e => {
        let t = e == null ? undefined : e.element(J);
        if (t == null) {
          return undefined;
        } else {
          return t({
            small: n
          });
        }
      });
    });
    return reactJsxRuntimeCoreReexport.jsx(skillGuidanceInputContainer.SkillGuidanceInput, {
      ref: t,
      ...I,
      className: l,
      editorProps: {
        ...f,
        value: B,
        onKeyDown: e => {
          var t;
          if (f != null && (t = f.onKeyDown) !== null && t !== undefined) {
            t.call(f, e);
          }
          D(e);
        },
        onChange: O
      },
      sendBtnProps: {
        ...R,
        disableToSend: X,
        onClickSendButton: () => {
          var e;
          if (m != null) {
            m();
          }
          if (R != null && (e = R.onClickSendButton) !== null && e !== undefined) {
            e.call(R);
          }
        }
      },
      customArea: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [z, a && reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
          ref: L,
          showPresetPrompt: false,
          attachmentStates: o,
          onDeleteAttachment: e => {
            if (r != null) {
              r(e);
            }
          },
          renderArea: e => reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentFileAreaLazy, {
            ...e
          }),
          onRetryAttachment: e => {
            if (s != null) {
              s(e);
            }
          }
        })]
      }),
      rightTools: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex gap-8",
        children: U
      }),
      leftTools: reactJsxRuntimeCoreReexport.jsx(searchSkillOverflowList.SkillOverflowList, {
        moreButtonPopoverProps: {
          clickToHide: false
        },
        small: n,
        list: V
      }),
      popoverRef: H,
      popoverVisible: E,
      popoverContent: Z,
      expandBtnText: M,
      onClickCollapseBtn: c,
      onClickExpandBtn: d,
      onCheckLoadSuccess: F,
      onClickExitButton: u
    });
  });
  var asyncSkillGuidanceInputHandler_1 = require("async-skill-guidance-input-handler_1") /*id: 368246*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let A = e => isObjectOrFunction_1_1.isObjectOrFunction(e) && "localKey" in e;
  let X = e => {
    let {
      skillType: t = "default"
    } = e;
    let [l, n] = reactCoreLibraryReexport.useState([]);
    let a = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId ?? "";
    });
    let {
      attachmentStates: o,
      attachmentKeys: r
    } = chatStoreManager.useStoreSelector("attachmentUploadStore", e => ({
      attachmentStates: attachmentUploadStoreHooks.processAttachment(l, e),
      attachmentKeys: l.map(t => {
        let l = e.preprocessTaskMap[t.localKey];
        return (l == null ? undefined : l.key) || (l == null ? undefined : l.localKey) || undefined;
      })
    }), deepEqualityUtil_1.isDeepEqual);
    let c = async e => {
      let t = e.map(e => {
        if (messageBoxTypeCheckers.isImageType(e) || messageBoxTypeCheckers.isFileType(e)) {
          let t = chatStoreManager.getStore("attachmentUploadStore").getState().preprocessTaskMap[e.localKey];
          return {
            uri: t == null ? undefined : t.key,
            data_type: messageBoxTypeCheckers.isImageType(e) ? "image" : "file"
          };
        }
      }).filter(e => !!(e == null ? undefined : e.uri));
      if (!isEmptyUtil.isEmpty(t)) {
        await apiServicesCollection.ResourceApiService.DeleteFiles({
          uris: t
        });
      }
    };
    return {
      attachments: l,
      attachmentKeys: r,
      attachmentStates: o,
      addAttachmentDirectly: e => {
        let {
          type: t,
          fileName: l,
          from: i,
          fileKey: a,
          size: o,
          blobUrl: r,
          url: c
        } = e;
        let d = uuidV1Generator.generateUuid();
        let u = {
          type: t,
          fileName: l,
          localKey: d,
          from: i,
          size: o,
          url: c
        };
        if (!A(u)) {
          return;
        }
        n(e => [...e, u]);
        let p = chatStoreManager.getStore("attachmentUploadStore");
        if (!deepEqualUtil_1.deepEqual(t, "link")) {
          p.setState(immerCoreImplementation.produce(e => {
            e.preprocessTaskMap[d] = {
              type: t,
              key: a,
              localKey: d,
              percent: 100,
              loading: false,
              failed: false,
              fileKey: a,
              parseState: 1,
              parsePercent: 100,
              size: o,
              blobUrl: r
            };
          }));
        }
      },
      addAttachment: e => {
        let {
          disablePreprocess: i,
          file: o,
          type: r,
          ctx: c
        } = e;
        let u = chatFeedStoreFactory.useFeedStore.getState().conversationMap[a]?.last_section_id || "";
        chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(e => {
          var d;
          let m = chatStoreManager.getStoreState("attachmentUploadStore");
          let f = (d = m.preGeneratedLocalMessageIdMap) === null || d === undefined ? undefined : d[a]?.[`_${t}`];
          let {
            local_key: h
          } = (e == null ? undefined : e.preprocessFile(o, r, c, {
            preHandle: i ? undefined : {
              version: "pre_handle_v2",
              preGeneratedLocalMessageId: f || "",
              sectionId: u,
              enableImageVlm: m.attachmentUploadConfig?.enableImageVlm
            }
          })) ?? {};
          if (h) {
            let e = {
              type: r,
              file: o,
              localKey: h,
              from: c.from
            };
            if (!A(e)) {
              return;
            }
            n(t => [...t, e]);
          }
        });
      },
      deleteAttachment: e => {
        let {
          options: i,
          index: o
        } = e;
        let {
          hardDelete: r = true
        } = i ?? {};
        let s = l[o];
        if (!s) {
          return;
        }
        let d = l.filter(e => e !== s);
        if (messageBoxTypeCheckers.isImageType(s) || messageBoxTypeCheckers.isFileType(s)) {
          chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(e => {
            if (e != null) {
              e.cancel(s.localKey);
            }
          });
        }
        n(d);
        if (isEmptyUtil.isEmpty(d)) {
          chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(e => {
            if (e != null) {
              e.updatePreGeneratedLocalMessageId({
                chatId: a,
                skillType: t
              });
            }
          });
        }
        if (r) {
          c([s]);
        }
      },
      clearAttachments: e => {
        let {
          options: i
        } = e;
        let {
          hardDelete: o = false
        } = i ?? {};
        chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(e => {
          if (e != null) {
            e.updatePreGeneratedLocalMessageId({
              chatId: a,
              skillType: t
            });
          }
        });
        if (o) {
          c(l);
        }
        n([]);
      },
      reuploadAttachment: e => {
        let {
          index: t
        } = e;
        let i = l[t];
        if (i) {
          chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(e => {
            if (e != null) {
              e.reUpload(i.localKey ?? "", chatConversationBotId.getConversationBotId(a) ?? "");
            }
          });
        }
      }
    };
  };
  var conditionalTooltipWrapper = require("conditional-tooltip-wrapper") /*id: 277603*/;
  var chatInputButtonContext = require("chat-input-button-context") /*id: 414026*/;
  var skillPinIcon_1 = require("skill-pin-icon_1") /*id: 646133*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var U = classnamesUtils;
  var textPasteModalComponent = require("text-paste-modal-component") /*id: 376230*/;
  var aiSpaceAttachmentInput = require("ai-space-attachment-input") /*id: 500254*/;
  var aiSpaceFileUploadModalLoader = require("ai-space-file-upload-modal-loader") /*id: 797653*/;
  var resourceEnumTypes = require("resource-enum-types") /*id: 801204*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useBooleanHook = require("use-boolean-hook") /*id: 240989*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var codingSkillChatInputIcon = require("coding-skill-chat-input-icon") /*id: 517798*/;
  var rtlArrowLeftIcon = require("rtl-arrow-left-icon") /*id: 31280*/;
  var eo = {
    container: "container-IIM47F",
    subtitle: "subtitle-kKLN9p",
    content: "content-isEge9",
    item: "item-HH4oYe",
    fileTitle: "fileTitle-we_coV",
    icon: "icon-KtxRXO",
    text: "text-AvMaQx",
    button: "button-D5S7Kw"
  };
  let er = function (e) {
    let {
      onFileUpload: t,
      onOverrideSpaceFileClick: l,
      disabled: n = false,
      i18nConfig: a,
      children: o,
      multiple: r = false,
      position: s = "topLeft",
      className: c,
      skill: d,
      onAISpaceModalVisibleChange: u
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let m = ["doc", "docx", "dot", "txt", "pdf"];
    let [f, h] = reactCoreLibraryReexport.useState(0);
    let v = reactCoreLibraryReexport.useRef(null);
    let [w, {
      setTrue: g,
      setFalse: x
    }] = useBooleanHook.useBoolean(false);
    let [b, {
      setTrue: k,
      setFalse: y
    }] = useBooleanHook.useBoolean(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (u) {
        u(b);
      }
    }, [b]);
    let S = (e, t) => {
      var l;
      teaAnalyticsEventTracker.trackEvent("pin_button_click", {
        button_name: e,
        click_from: "chat_enter_bar",
        skill_id: d == null ? undefined : (l = d.skill_type) === null || l === undefined ? undefined : l.toString(),
        skill_name: skillTypeMappings.getSkillName(d == null ? undefined : d.skill_type),
        ...t
      });
    };
    let T = l ? e => {
      l(e);
      y();
    } : undefined;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
        className: eo.container,
        zIndex: 9999,
        trigger: "click",
        clickToHide: true,
        position: s,
        rePosKey: f,
        closeOnEsc: true,
        content: !n && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: eo.content,
            children: [reactJsxRuntimeCoreReexport.jsx(aiSpaceAttachmentInput.AiSpaceAttachment, {
              onDataLoaded: () => {
                setTimeout(() => {
                  h(f + 1);
                }, 10);
              },
              onOverrideClickFile: T,
              titleClassName: eo.subtitle,
              itemClassName: eo.item,
              fileTitleClassName: eo.fileTitle,
              onOpenFileListModal: () => {
                setTimeout(() => {
                  k();
                }, 10);
                S("more_drive_files");
              },
              fileTypes: m,
              onAddFileToAttachment: e => {
                S("upload_drive_file", {
                  collection_id: e.key,
                  collection_name: e.name
                });
              },
              onNavigateToAISpace: () => {
                S("upload_to_drive");
              }
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: eo.subtitle,
              children: p("aispace_addMenu_sectionHeader_local")
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: eo.item,
              onClick: () => {
                if (v.current) {
                  v.current.value = "";
                  v.current.click();
                  S("add_refe_local_upload");
                }
              },
              children: [reactJsxRuntimeCoreReexport.jsx(codingSkillChatInputIcon.CodingChatInputIcon, {
                className: eo.icon
              }), reactJsxRuntimeCoreReexport.jsx("span", {
                className: eo.text,
                children: p("skill_writing_input_reference_uploadDoc")
              })]
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: eo.item,
              onClick: () => {
                g();
                S("add_refe_paste_text");
              },
              children: [reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {
                className: eo.icon
              }), reactJsxRuntimeCoreReexport.jsx("span", {
                className: eo.text,
                children: p("skill_writing_input_reference_pasteText")
              })]
            })]
          })
        }),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          "data-testid": "write_chat_input_upload_button",
          className: U(eo.button, c),
          onClick: () => {
            S("upload_file");
          },
          children: n ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            trigger: "hover",
            position: "top",
            content: a == null ? undefined : a.waring,
            children: o
          }) : o
        })
      }), b && reactJsxRuntimeCoreReexport.jsx(aiSpaceFileUploadModalLoader.AISpaceFileUploadModalLoader, {
        onClose: y,
        supportedFileTypes: m,
        unsupportedNodeTypes: [resourceEnumTypes.FileTypes.Link],
        onConfirmOverride: T,
        from: "input_bar"
      }), reactJsxRuntimeCoreReexport.jsx(textPasteModalComponent.TextPasteModal, {
        visible: w,
        onClose: x,
        onConfirm: e => {
          if (e) {
            t([e], "add_refe_paste_text");
            x();
          }
        }
      }), reactJsxRuntimeCoreReexport.jsx("input", {
        className: "hidden",
        multiple: r,
        type: "file",
        ref: v,
        accept: m.map(e => `.${e}`).join(","),
        onChange: e => {
          t([...(e.target.files ?? [])], "add_refe_local_upload");
        }
      })]
    });
  };
  let es = e => {
    let {
      disabled: t,
      skill: l,
      position: i = "bottomLeft",
      multiple: n = true,
      className: a,
      i18nConfig: o,
      onFileUpload: r,
      onSpaceFileUpload: s,
      onAISpaceModalVisibleChange: c
    } = e;
    let d = "add-reference-btn";
    return {
      key: d,
      sort: 0,
      element: () => e => {
        let {
          isOverflow: u,
          small: p
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(er, {
          disabled: t,
          skill: l,
          position: i,
          className: a,
          multiple: n,
          i18nConfig: {
            waring: o == null ? undefined : o.waring
          },
          onFileUpload: (e, t) => {
            if (r != null) {
              r(e, {
                from: "click",
                uploadFrom: t,
                uploadWay: "browse_folder"
              });
            }
          },
          onAISpaceModalVisibleChange: c,
          onOverrideSpaceFileClick: s,
          children: reactJsxRuntimeCoreReexport.jsx(conditionalTooltipWrapper.ConditionalTooltip, {
            disabled: !(o == null ? undefined : o.tooltip),
            trigger: "hover",
            clickToHide: true,
            content: o == null ? undefined : o.tooltip,
            position: u ? "right" : "top",
            children: reactJsxRuntimeCoreReexport.jsx(chatInputButtonContext.ChatInputButton, {
              small: p,
              isOverflow: u,
              className: "w-full",
              renderIcon: e => {
                let {
                  className: t
                } = e;
                return reactJsxRuntimeCoreReexport.jsx(skillPinIcon_1.SkillPinIcon, {
                  className: t
                });
              },
              title: undefined,
              buttonProps: {
                disabled: t
              }
            })
          })
        }, d);
      }
    };
  };
  var useFeatureFlagEffect = require("use-feature-flag-effect") /*id: 806314*/;
  var iconSunOutline = require("icon-sun-outline") /*id: 700480*/;
  let eu = e => {
    let {
      disabled: t,
      i18nConfig: l,
      className: i,
      defaultValue: n,
      value: a,
      onChange: o,
      buttonClassName: r,
      behavior: s
    } = e;
    let [c, d] = skillStateHook.useSkillState({
      defaultValue: n != null && n,
      value: a,
      onChange: o
    });
    useFeatureFlagEffect.useFeatureFlagEffect(() => {
      var e;
      if (s != null && (e = s.onInit) !== null && e !== undefined) {
        e.call(s);
      }
    });
    return {
      key: "online",
      sort: 2,
      element: () => e => {
        let {
          isOverflow: n,
          small: a
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(conditionalTooltipWrapper.ConditionalTooltip, {
          disabled: !(l == null ? undefined : l.tooltip),
          trigger: "hover",
          clickToHide: true,
          content: l == null ? undefined : l.tooltip,
          position: n ? "right" : "top",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: i,
            children: reactJsxRuntimeCoreReexport.jsx(chatInputButtonContext.ChatInputButton, {
              "data-testid": "write_chat_input_online_search_button",
              small: a,
              className: "w-full",
              isOverflow: n,
              renderIcon: () => reactJsxRuntimeCoreReexport.jsx(iconSunOutline.SunIcon, {}),
              title: l == null ? undefined : l.title,
              buttonProps: {
                className: r,
                disabled: t
              },
              active: c,
              onMouseUp: () => {
                var e;
                if (!t) {
                  if (s != null && (e = s.onClick) !== null && e !== undefined) {
                    e.call(s, {
                      value: !c
                    });
                  }
                  d(e => !e);
                }
              }
            })
          })
        });
      }
    };
  };
  var asrChatToolPlugin = require("asr-chat-tool-plugin") /*id: 591234*/;
  var chatDeepThinkingSwitch = require("chat-deep-thinking-switch") /*id: 458521*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  let ef = e => {
    let {
      disabled: t,
      i18nConfig: l,
      behavior: i
    } = e;
    useFeatureFlagEffect.useFeatureFlagEffect(() => {
      var e;
      if (i != null && (e = i.onInit) !== null && e !== undefined) {
        e.call(i);
      }
    });
    return {
      key: "deep-think",
      sort: 1,
      element: e => i => {
        let {
          small: n,
          isOverflow: a
        } = i;
        return reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButton, {
          ...e,
          isOverflow: a,
          identifier: chatDeepThinkingSwitch.deepThinkingSwitchKey,
          disabled: t,
          isToolButtonSmall: n,
          disabledTooltip: l == null ? undefined : l.tooltip,
          activeSkillType: chatAppEnums.SkillType.WriteAssistant
        });
      }
    };
  };
  let eh = reactCoreLibraryReexport.memo(reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      editorProps: l,
      skill: h,
      onAfterSendMessage: v,
      onBeforeSendMessage: w,
      onAttachmentsChange: g,
      reportParams: x = {},
      behavior: b,
      onAISpaceModalVisibleChange: k,
      ...y
    } = e;
    let S = throttledDeepCloneUtil_1.throttledDeepClone({
      skill_id: String(chatAppEnums.SkillType.WriteAssistant),
      skill_type: chatAppEnums.SkillType.WriteAssistant
    }, h);
    let T = i18nTranslationUtils.useTranslationWithFallback();
    let $ = reactCoreLibraryReexport.useRef(false);
    let N = reactCoreLibraryReexport.useRef();
    let {
      attachments: C,
      attachmentKeys: E,
      attachmentStates: Z,
      deleteAttachment: M,
      reuploadAttachment: F,
      addAttachment: z,
      addAttachmentDirectly: I
    } = X({
      skillType: S.skill_type
    });
    let B = writingAttachmentManager.addAttachmentFiles({
      maxAllowCount: 5,
      hasReadyFileCount: Z.length,
      addAttachment: z
    });
    let P = writingAttachmentManager.createDirectAdder({
      maxAllowCount: 5,
      hasReadyFileCount: Z.length,
      addAttachmentDirectly: I
    });
    let H = es({
      disabled: false,
      multiple: true,
      i18nConfig: {
        waring: T("skill_writing_input_reference_button_tooltip_filesLimitation").replace("%d", String(5))
      },
      onFileUpload: B,
      onSpaceFileUpload: P,
      onAISpaceModalVisibleChange: k
    });
    let L = eu({
      i18nConfig: {
        tooltip: T("chat_input_tool_search_switch_tooltip"),
        title: T("chat_input_tool_search_switch_title")
      },
      defaultValue: $.current,
      onChange: e => {
        $.current = e;
      },
      behavior: b == null ? undefined : b.onlineSearch
    });
    let A = asrChatToolPlugin.getAsrToolConfig();
    let D = ef({
      disabled: false,
      behavior: b == null ? undefined : b.deepThink
    });
    let O = asyncSkillGuidanceInputHandler_1.createAsyncSkillGuidanceInputHandler({
      skill: S,
      reportParams: x,
      onBeforeSendMessage: w,
      onAfterSendMessage: v
    });
    let J = () => {
      let e = {
        ...S,
        variables: {}
      };
      let t = JSON.stringify({
        attachments: Z.map(e => ({
          title: e.fileName,
          key: e.fileKey
        }))
      });
      if ($.current) {
        e.variables.enable_search = $.current;
      }
      if (t) {
        e.variables.attachments_context = t;
      }
      return e;
    };
    let V = async () => {
      if (!N.current?.data) {
        return;
      }
      let n = inputToolConverter.extractText(N.current?.data);
      let {
        chatId: o,
        chatType: _
      } = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig ?? {};
      let m = _ === chatConversationTypes.ConversationTypes.NewThread;
      let f = chatAttachmentProcessor_1.processChatAttachments({
        text: n,
        attachments: C,
        attachmentKeys: E,
        attachmentStates: Z,
        reportParams: x
      });
      await O({
        text: n,
        skillObj: J(),
        payload: {
          ...(f ?? {}),
          conversationId: m ? "0" : o,
          localConversationId: m ? o : undefined,
          botId: chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState()) || chatConstantId.chatConstantId
        },
        reportParams: {
          ...x,
          ...((f == null ? undefined : f.reportParams) ?? {})
        },
        extraExt: {
          need_create_thread: _ !== chatConversationTypes.ConversationTypes.Conversation ? "1" : "0"
        }
      });
    };
    let U = skillPinModalCallback.useSkillPinCallback(() => {
      if (g != null) {
        g(C);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      U();
    }, [E]);
    return reactJsxRuntimeCoreReexport.jsx(R, {
      ref: t,
      disableEditorModeSwitch: true,
      onSubmit: V,
      bottomActions: [H, L, D],
      rightActions: [A],
      showExitSkillButton: false,
      editorProps: {
        ...l,
        onChange: e => {
          var t;
          N.current = e;
          if (l != null && (t = l.onChange) !== null && t !== undefined) {
            t.call(l, e);
          }
        }
      },
      showAttachmentArea: Z.length > 0,
      attachmentStates: Z,
      onDeleteAttachment: e => {
        M({
          index: e
        });
      },
      onRetryAttachment: e => {
        F({
          index: e
        });
      },
      ...y
    });
  }));
  require.d(exports, {
    ChatInputWithAttachments: function () {
      return eh;
    }
  });
}