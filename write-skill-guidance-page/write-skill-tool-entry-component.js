// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'WriteSkillToolEntry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: write-skill-guidance-page.8bdb5e97.js
         * chunkId: 56853
         * moduleId: 685032
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var textPasteModalComponent = require("text-paste-modal-component") /*id: 376230*/;
  var useBooleanHook = require("use-boolean-hook") /*id: 240989*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var writingChatInputController_1 = require("writing-chat-input-controller_1") /*id: 659572*/;
  var writingSkillConfigHooks = require("writing-skill-config-hooks") /*id: 276565*/;
  var skillPageWriteTemplateItem = require("skill-page-write-template-item") /*id: 561161*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var codingSkillChatInputIcon = require("coding-skill-chat-input-icon") /*id: 517798*/;
  var rtlArrowLeftIcon = require("rtl-arrow-left-icon") /*id: 31280*/;
  var S = "title-I1kXKs";
  var E = "inner-XS4Un7";
  var C = "content-x7MBmD";
  var k = "icon-pPyIEl";
  var T = "desc-giuF0E";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let O = e => {
    let {
      visible: t,
      className: n,
      onClose: i,
      multiple: o = false,
      onHandleUploadFile: s,
      onHandlePasteText: l
    } = e;
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let u = reactCoreLibraryReexport.useRef(null);
    let {
      uploadFileMaxSize: d
    } = attachmentUploadStoreHooks.getUploadConfig();
    reactCoreLibraryReexport.useEffect(() => {
      if (!t) {
        return;
      }
      let e = e => {
        let {
          clipboardData: t
        } = e;
        let n = t == null ? undefined : t.getData("Text");
        if (n) {
          l(n);
        }
      };
      document.addEventListener("paste", e);
      return () => document.removeEventListener("paste", e);
    }, [t]);
    let p = e => {
      teaAnalyticsEventTracker.trackEvent("pin_button_click", {
        button_name: e
      });
    };
    let h = userAgentDeviceDetector.isWindows() ? "（Control+V）" : "（Cmd+V）";
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("input", {
        className: "hidden",
        multiple: o,
        type: "file",
        ref: u,
        accept: "*",
        onChange: e => {
          let n = [...(e.target.files ?? [])];
          if (s != null) {
            s(n);
          }
        }
      }), reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
        visible: t,
        header: reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex items-center justify-between",
            children: [reactJsxRuntimeCoreReexport.jsx("span", {
              className: S,
              children: c("writing_tools_sourceInput_modal_title")
            }), reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              color: "grey",
              newIcon: true,
              onClick: () => {
                if (i != null) {
                  i({
                    visible: false
                  });
                }
              },
              children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {})
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "warning-Xxmsm9",
            children: reactJsxRuntimeCoreReexport.jsx("span", {
              children: c("writing_tools_sourceInput_modal_desc")
            })
          })]
        }),
        className: a("modal-UhHsZk", n),
        centered: true,
        maskClosable: false,
        footer: null,
        zIndex: 2000,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center justify-between",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: a("cursor-pointer", E),
            onClick: () => {
              if (u.current) {
                u.current.value = "";
                u.current.click();
                p("add_refe_local_upload");
              }
            },
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: C,
              children: [reactJsxRuntimeCoreReexport.jsx(codingSkillChatInputIcon.CodingChatInputIcon, {
                className: k
              }), reactJsxRuntimeCoreReexport.jsx("span", {
                className: S,
                children: c("writing_tools_sourceInput_modal_option_uploadDoc")
              }), reactJsxRuntimeCoreReexport.jsx("span", {
                className: T,
                children: c("writing_tools_sourceInput_modal_option_uploadDoc_desc", {
                  postProcess: "sprintf",
                  sprintf: [Number(d) / 1048576]
                })
              })]
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: a("cursor-pointer", E),
            onClick: () => {
              l("");
              p("add_refe_paste_text");
            },
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: C,
              children: [reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {
                className: k
              }), reactJsxRuntimeCoreReexport.jsx("span", {
                className: S,
                children: c("writing_tools_sourceInput_modal_option_pasteText")
              }), reactJsxRuntimeCoreReexport.jsxs("span", {
                className: T,
                children: [c("writing_tools_sourceInput_modal_option_pasteText_desc"), h]
              })]
            })
          })]
        })
      })]
    });
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var useIntersectionObserver = require("use-intersection-observer") /*id: 774639*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var M = {
    container: "container-wain5q",
    checked: "checked-suEBaD",
    disabled: "disabled-DqYct_",
    icon: "icon-h41DzM",
    title: "title-A8Y5W9",
    imageBox: "imageBox-AG2iXe",
    desc: "desc-NBSFT3",
    tag: "tag-ElGw3z",
    small: "small-gmJi01"
  };
  let A = e => {
    let {
      className: n,
      title: i,
      desc: o,
      checked: s,
      icon_url: l,
      notPublish: c,
      onClick: u,
      tool: d,
      small: p = false,
      trackParams: h
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let v = reactCoreLibraryReexport.useRef(null);
    let [y] = useIntersectionObserver.useIntersection(v, {
      threshold: 0.5
    });
    let b = chatFeedStoreFactory.useFeedStore(chatConversationSelectors_2.getBotId);
    let _ = useLatestRef_1.useLatestRef({
      ...h,
      genre: (d == null ? undefined : d.genre) ?? null,
      content_detail: d == null ? undefined : d.show_name,
      bot_id: b
    });
    let w = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      teaAnalyticsEventTracker.trackEvent("show_suggested_content", _.current);
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (y && b) {
        w();
      }
    }, [y, b]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: v,
        onClick: () => {
          if (!c) {
            if (u != null) {
              u();
            }
            teaAnalyticsEventTracker.trackEvent("click_suggested_content", _.current);
          }
        },
        className: a(M.container, n, {
          [M.checked]: s,
          [M.disabled]: c,
          [M.small]: p
        }),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: M.title,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: M.imageBox,
            children: reactJsxRuntimeCoreReexport.jsx("img", {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESk9kb%pZ%W5aaWJWWjFaRWhOZ*1SSE9-WmlRekZx$1ZoS2Ewd3liSFZh%jFZMFRHN$Nlb$ZI%m5s-%0xWj-"
              }),
              draggable: false,
              className: M.icon
            })
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            children: i
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: M.desc,
          children: o
        }), c && reactJsxRuntimeCoreReexport.jsx("div", {
          className: M.tag,
          children: f("writing_tools_tag_comming_soon")
        })]
      })
    });
  };
  var I = {
    container: "container-mVZkcB",
    first: "first-ixyjk3",
    small: "small-CYzdL7",
    card: "card-SAhXkB",
    list: "list-FwVMdd",
    carouselItem: "carouselItem-LkChRh",
    box: "box-H87Dap",
    tools: "tools-_Go5Cr"
  };
  let W = e => {
    let {
      children: t,
      cols: n
    } = e;
    if (n >= 4) {
      return reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
        itemClassName: I.carouselItem,
        carouselRowClassName: I["tool-carousel-wrapper"],
        children: t
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: t
      });
    }
  };
  let F = e => {
    let {
      currentTemplate: t,
      trackParams: n,
      toolTemplates: o = [],
      handleClickLongArticle: u,
      handleClickTemplate: f,
      small: m = false
    } = e;
    let [g, v] = reactCoreLibraryReexport.useState(false);
    let y = writingSkillConfigHooks.useWritingTemplateList();
    let [b, {
      setFalse: _,
      setTrue: w
    }] = useBooleanHook.useBoolean(false);
    let [x, {
      setFalse: S,
      setTrue: E
    }] = useBooleanHook.useBoolean(false);
    let C = reactCoreLibraryReexport.useRef(null);
    let {
      width: k = 0
    } = resizeObserverHooks.useResizeObserverEx({
      ref: C
    });
    let T = reactCoreLibraryReexport.useMemo(() => k >= 600 ? 4 : 2, [k]);
    let R = e => {
      if (e.is_not_published || !e.template) {
        return;
      }
      let o = (e == null ? undefined : e.template?.max_reference_count) ?? 0;
      f(e.template, e.template.value, {
        maxAllowCount: Number(o),
        tool_name: e.tool_name
      });
      if (!deepEqualUtil_1.deepEqual(t, e.template) && Number(o)) {
        w();
        v(o > 1);
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(I.container, {
        [I.box]: m
      }),
      "data-testid": "skill_page_tool_entry",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: I.tools,
        ref: C,
        children: reactJsxRuntimeCoreReexport.jsx(W, {
          cols: T,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: I.list,
            style: {
              gridTemplateColumns: `repeat(${T}, 1fr)`
            },
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: a(I.first, {
                [I.small]: m
              }),
              "data-testid": "skill_page_tool_entry_template_long_write",
              children: reactJsxRuntimeCoreReexport.jsx(skillPageWriteTemplateItem.writeTemplateItem, {
                small: m,
                show_name: y == null ? undefined : y.show_name,
                value: y == null ? undefined : y.value,
                onClick: e => {
                  u(y ?? {}, e);
                },
                checked: deepEqualUtil_1.deepEqual(t, y),
                trackParams: n,
                description: y == null ? undefined : y.description,
                background_url: y == null ? undefined : y.background_url
              }, "long_article_writing_config")
            }), o.map(e => {
              let {
                is_not_published: r,
                template: o,
                tool_name: s
              } = e;
              let {
                show_name: l,
                description: c,
                icon_url: u
              } = o || {};
              return reactJsxRuntimeCoreReexport.jsx(A, {
                small: m,
                tool: o,
                trackParams: n,
                title: l,
                desc: c,
                notPublish: r,
                icon_url: u,
                checked: deepEqualUtil_1.deepEqual(t, o),
                onClick: () => R(e),
                className: a(I.card, {
                  [I.small]: m
                })
              }, s);
            })]
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx(O, {
        multiple: g,
        visible: b,
        onHandlePasteText: () => {
          E();
          _();
        },
        onHandleUploadFile: e => {
          writingChatInputController_1.writingChatInput.addNewAttachmentFiles(e, {
            uploadWay: "browse_folder",
            from: "",
            uploadFrom: "add_refe_local_upload"
          });
          _();
        },
        onClose: _
      }), reactJsxRuntimeCoreReexport.jsx(textPasteModalComponent.TextPasteModal, {
        currentTemplate: t,
        visible: x,
        onConfirm: e => {
          if (e) {
            writingChatInputController_1.writingChatInput.addNewAttachmentFiles([e], {
              from: "",
              uploadWay: "paste",
              uploadFrom: "add_refe_paste_text"
            });
            S();
          }
        },
        onClose: S
      })]
    });
  };
  require.d(exports, {
    WriteSkillToolEntry: function () {
      return F;
    }
  });
}