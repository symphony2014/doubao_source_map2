// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactIntersectionObserver'
// - Resolved require(637954) to 'react-intersection-observer'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 's' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'c' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'd' to 'pptTemplateManager'
// - Resolved require(477087) to 'ppt-template-manager'
// - Renamed variable 'u' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'p' to 'superTaskEventTracker'
// - Resolved require(368178) to 'super-task-event-tracker'
// - Renamed variable 'v' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'f' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 'h' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'g' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'b' to 'semiButtonWrapperComponent'
// - Resolved require(654274) to 'semi-button-wrapper-component'
// - Renamed variable 'k' to 'storageCutdownTimerHook'
// - Resolved require(993094) to 'storage-cutdown-timer-hook'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'w' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'S' to 'semiImageComponent'
// - Resolved require(87078) to 'semi-image-component'
// - Renamed variable 'C' to 'rtlSearchIcon'
// - Resolved require(717963) to 'rtl-search-icon'
// - Renamed variable 'T' to 'businessSkillBarIcon'
// - Resolved require(282062) to 'business-skill-bar-icon'
// - Renamed variable 'j' to 'rtlListIconComponent'
// - Resolved require(48768) to 'rtl-list-icon-component'
// - Renamed variable 'N' to 'businessSkillBarIcon_1'
// - Resolved require(353219) to 'business-skill-bar-icon_1'
// - Renamed variable 'F' to 'buttonComponentExport'
// - Resolved require(576887) to 'button-component-export'
// - Renamed variable 'B' to 'superTaskPptSelector'
// - Resolved require(204098) to 'super-task-ppt-selector'
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'hB' to 'trackClickCard' (module 368178)
// - Updated imported property 'zF' to 'trackShowCard' (module 368178)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'A' to 'pptTemplateManager' (module 477087)
// - Updated imported property 'Y' to 'useStorageCutdown' (module 993094)
// - Updated imported property 'Z' to 'SemiButtonWrapper' (module 654274)
// - Updated imported property 'ZP' to 'SemiImage' (module 87078)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'Z' to 'SearchRtlIcon' (module 717963)
// - Updated imported property 'Z' to 'SkillBarIcon' (module 282062)
// - Updated imported property 'Z' to 'RtlListIcon' (module 48768)
// - Updated imported property 'Z' to 'SkillBarIcon' (module 353219)
// - Updated imported property 'Z' to 'Button' (module 576887)
// - Updated imported property 'YD' to 'useInView' (module 637954)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'mg' to 'CommerceBenefitSupplyApiService' (module 147875)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'b3' to 'SceneType' (module 791429)
// - Updated imported property 'g' to 'pptTemplateSelector' (module 204098)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 759718
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver = require("react-intersection-observer") /*id: 637954*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var pptTemplateManager = require("ppt-template-manager") /*id: 477087*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var superTaskEventTracker = require("super-task-event-tracker") /*id: 368178*/;
  let m = e => {
    let {
      message: t
    } = e;
    return {
      trackCardClick: reactCoreLibraryReexport.useCallback(e => {
        var l;
        let {
          click_effect: r,
          templateOptionStr: o
        } = e;
        if (!!t && !isEmptyUtil.isEmpty(t)) {
          superTaskEventTracker.trackClickCard({
            card_type: "super_task_progress_card",
            card_sub_type: "super_task_progress_human_template_confirm",
            progress_status: "progress",
            click_effect: r,
            bot_id: String(t == null ? undefined : t.bot_id) || "",
            super_task_id: (t == null ? undefined : t.async_task?.id) || "",
            super_task_mode: (t == null ? undefined : (l = t.verbose) === null || l === undefined ? undefined : l.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task",
            message_id: (t == null ? undefined : t.message_id) || "",
            conversation_id: (t == null ? undefined : t.conversation_id) || "",
            ai_ppt_template_option: o
          });
        }
      }, []),
      trackCardShow: reactCoreLibraryReexport.useCallback(() => {
        var i;
        superTaskEventTracker.trackShowCard({
          card_type: "super_task_progress_card",
          card_sub_type: "super_task_progress_human_template_confirm",
          progress_status: "progress",
          status: "unfold",
          bot_id: String(t == null ? undefined : t.bot_id) || "",
          super_task_id: (t == null ? undefined : t.async_task?.id) || "",
          super_task_mode: (t == null ? undefined : (i = t.verbose) === null || i === undefined ? undefined : i.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task",
          message_id: (t == null ? undefined : t.message_id) || "",
          conversation_id: (t == null ? undefined : t.conversation_id) || ""
        });
      }, [])
    };
  };
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let _ = {
    page_min: -1,
    page_max: -1,
    type: 0
  };
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var storageCutdownTimerHook = require("storage-cutdown-timer-hook") /*id: 993094*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let [t, n] = reactCoreLibraryReexport.useState(false);
    let {
      currentChatViewConfig: i
    } = chatStoreManager.getStore("chatViewCoreStore").getState();
    let r = reactCoreLibraryReexport.useMemo(() => (i == null ? undefined : i.chatId) || "", [i == null ? undefined : i.chatId]);
    let o = reactCoreLibraryReexport.useCallback(e => {
      pptTemplateManager.pptTemplateManager.onTemplateBtnConfirm(r, e);
    }, [r]);
    let [a, s] = reactCoreLibraryReexport.useState(e("agent_PPT_btn_confirmLengthTemplate", "确认长度和模板"));
    let u = e("agent_PPT_btn_selectContinue", "选择并继续");
    let p = storageCutdownTimerHook.useStorageCutdown(r, t, () => o(true));
    let m = e("agent_PPT_btn_selectContinue_countdown", {
      s_second: p
    });
    reactCoreLibraryReexport.useEffect(() => {
      pptTemplateManager.pptTemplateManager.addSelecteChangeListener(r, () => {
        n(true);
      });
      return () => {
        pptTemplateManager.pptTemplateManager.removeSelecteChangeListener(r);
      };
    }, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        s((e == null ? undefined : e.textContent) || "");
      };
      pptTemplateManager.pptTemplateManager.addToggleConfirmBtnListener(r, e);
      return () => {
        pptTemplateManager.pptTemplateManager.removeToggleConfirmBtnListener(r, e);
      };
    }, [r]);
    let v = reactCoreLibraryReexport.useRef(null);
    let [f, g] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      if (v.current) {
        g(Math.ceil(v.current.getBoundingClientRect().width));
      }
    }, [v.current]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "stickyContainer-fkVcUi",
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "headerContainer-d0QVmN",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "title-DX03ts",
          children: a
        }), reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
          className: "btn-hHzDUt",
          onClick: () => o(false),
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            ref: v,
            style: {
              width: f && !t ? `${f}px` : undefined
            },
            children: `${p && !t ? m : u}`
          })
        })]
      })
    });
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  var R = {
    pptStyleSelectorContainer: "pptStyleSelectorContainer-SsuF57",
    title: "title-gPKjo4",
    gray: "gray-tQjqZZ",
    readOnly: "readOnly-tJTt2V",
    content: "content-P2I1TY",
    scrollbarHidden: "scrollbarHidden-mUKbCq",
    readOnlyContent: "readOnlyContent-u7UKEo",
    cardContent: "cardContent-uAWr5l",
    card: "card-Ze1m7O",
    active: "active-VQWU1a",
    readonly: "readonly-kaKV3H",
    description: "description-cECIrH"
  };
  let $ = e => {
    let {
      onlyShowSelected: t,
      selectedStyleId: n,
      styleInfoList: i,
      onSelectChange: r,
      onInit: a
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let [c, d] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (t || !a) {
        return;
      }
      let e = i.find(e => e.id === n) || i[0];
      a(e.id, (e == null ? undefined : e.title) || "", e.template);
    }, []);
    let u = reactCoreLibraryReexport.useMemo(() => {
      let e;
      return () => {
        d(true);
        if (e) {
          clearTimeout(e);
        }
        e = setTimeout(() => {
          d(false);
        }, 1000);
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: R.pptStyleSelectorContainer,
      children: t ? (() => {
        let e = i.find(e => e.id === n) || i[0];
        return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: o(R.title, R.gray),
            children: [s("agent_PPT_selectTemplate_header"), reactJsxRuntimeCoreReexport.jsx("span", {
              className: R.readOnly,
              children: `${e.title}`
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: o(R.content, R.scrollbarHidden, R.readOnlyContent),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: R.cardContent,
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: o(R.card, R.readonly),
                children: reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
                  preview: false,
                  src: xssContentSanitizer.sanitizeUrl(e.cover_url, null, {
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
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFpq%0$Jd1R*aFNiR0pZ%W5OWld*SnN%RmhP-kdKSFZtc*tSemw1$EROQ2Qy%kRNWHBr%0d4eldsTXhlbHB-Z%d4Wk0xSjJZMms1-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ"
                  })
                }, e.id)
              })
            })
          })]
        });
      })() : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: R.title,
          children: s("agent_PPT_selectTemplate_header")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: o(R.content, c ? "" : R.scrollbarHidden),
          onScroll: u,
          children: i == null ? undefined : i.map((e, t) => {
            let i = n ? e.id === n : t === 0;
            return reactJsxRuntimeCoreReexport.jsxs("div", {
              className: R.cardContent,
              onClick: () => r == null ? undefined : r(e.id, e.title, e.template),
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: o(R.card, i ? R.active : ""),
                children: reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
                  preview: false,
                  src: xssContentSanitizer.sanitizeUrl(e.cover_url, null, {
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
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFpq%0$Jd1R*aFNiR0pZ%W5OWld*SnN%RmhP-kdKSFZtc*tSemw1$EROQ2Qy%kRNWHBr%0d4eldsTXhlbHB-Z%d4Wk0xSjJZMms1-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ"
                  })
                }, e.id)
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: o(R.description, i ? R.active : ""),
                children: e.title
              })]
            });
          })
        })]
      })
    });
  };
  var rtlSearchIcon = require("rtl-search-icon") /*id: 717963*/;
  var businessSkillBarIcon = require("business-skill-bar-icon") /*id: 282062*/;
  var rtlListIconComponent = require("rtl-list-icon-component") /*id: 48768*/;
  var businessSkillBarIcon_1 = require("business-skill-bar-icon_1") /*id: 353219*/;
  var E = {
    pptContentLenSelectorContainer: "pptContentLenSelectorContainer-xEEkXF",
    title: "title-mMIEHp",
    gray: "gray-FohmNi",
    readOnly: "readOnly-BrEEKf",
    content: "content-OtHTDs",
    readOnlyContent: "readOnlyContent-TqMoXj",
    cardConent: "cardConent-PNo5Ag",
    card: "card-_f6j5B",
    active: "active-owbFxG",
    readonly: "readonly-DrXKPI",
    description: "description-ckvicq"
  };
  let P = e => {
    let {
      selectedType: t,
      contentConfig: n,
      onSelectChange: i,
      onlyShowSelected: r,
      onInit: a
    } = e;
    let s = n.sort((e, t) => e.page_min - t.page_min);
    let c = I(n);
    reactCoreLibraryReexport.useEffect(() => {
      if (r || !a) {
        return;
      }
      let [e] = c(s.findIndex(e => e.type === t));
      a(t, `${e}`);
    }, []);
    let d = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: E.pptContentLenSelectorContainer,
      children: r ? (() => {
        let [e, i] = c(Math.max(n.findIndex(e => e.type === t), 0));
        return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: o(E.title, E.gray),
            children: [d("agent_PPT_selectLength_header"), reactJsxRuntimeCoreReexport.jsx("span", {
              className: E.readOnly,
              children: `${e}`
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: o(E.content, E.readOnlyContent),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: o(E.cardConent, E.readonly),
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: o(E.card, E.readonly),
                children: reactJsxRuntimeCoreReexport.jsx(i, {})
              })
            })
          })]
        });
      })() : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: o(E.title),
          children: d("agent_PPT_selectLength_header")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: E.content,
          children: s.map((e, n) => {
            let l = e.type === t;
            let [r, a] = c(e.type);
            return reactJsxRuntimeCoreReexport.jsxs("div", {
              className: E.cardConent,
              onClick: () => i == null ? undefined : i(n, `${r}`),
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: o(E.card, l ? E.active : ""),
                children: reactJsxRuntimeCoreReexport.jsx(a, {})
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: o(E.description, l ? E.active : ""),
                children: `${r}`
              })]
            });
          })
        })]
      })
    });
  };
  let I = e => {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let n = e.length / 2;
    return reactCoreLibraryReexport.useCallback(i => {
      if (i >= e.length || i < 0) {
        return ["", rtlSearchIcon.SearchRtlIcon];
      }
      let l = e[i];
      if (l.page_max < 0 && l.page_min < 0) {
        return [t("agent_PPT_selectLength_recommend"), rtlSearchIcon.SearchRtlIcon];
      } else if (l.page_min >= 0 && l.page_max < 0) {
        return [t("agent_PPT_selectLength_long", {
          s_longNo: l.page_min
        }), businessSkillBarIcon.SkillBarIcon];
      } else if (i < n) {
        return [t("agent_PPT_selectLength_short", {
          s_shortMin: l.page_min,
          s_shortMax: l.page_max
        }), rtlListIconComponent.RtlListIcon];
      } else {
        return [t("agent_PPT_selectLength_medium", {
          s_mediumMin: l.page_min,
          s_mediumMax: l.page_max
        }), businessSkillBarIcon_1.SkillBarIcon];
      }
    }, [e]);
  };
  let W = () => reactJsxRuntimeCoreReexport.jsxs("div", {
    className: "loadingContainer-hbe3VX",
    children: [reactJsxRuntimeCoreReexport.jsx("div", {
      className: "shortLoadingItem-Sl6zC3"
    }), reactJsxRuntimeCoreReexport.jsx("div", {
      className: "bigLoadingItem-BcsXps"
    })]
  });
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  let M = e => {
    let {
      onRetryClick: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "title-WURz0x",
        children: n("agent_PPT_selectTemplate_header")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "errorContainer-ehoBnx",
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "tipsContainer-JUN3vO",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "errorTxt-n6QbZy",
            children: n("chat_list_load_failed")
          }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            color: "grey-outline",
            variant: "rectangle",
            onClick: t,
            children: n("retry")
          })]
        })
      })]
    });
  };
  var A = {
    templateContainer: "templateContainer-m5BBre",
    finishedStyle: "finishedStyle-Tstqr_",
    readOnly: "readOnly-q2aTpE",
    content: "content-RmmE4K"
  };
  let Z = e => {
    let {
      contentBlock: t,
      isShareMode: n,
      message: r
    } = e;
    let {
      ref: u,
      inView: p
    } = reactIntersectionObserver.useInView({
      initialInView: false,
      triggerOnce: true
    });
    let b = conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), r.conversation_id || "", r.message_id || "");
    let {
      content_obj: k
    } = t;
    let {
      card_id: w = "",
      version: S = "",
      need_template: R
    } = k || {};
    let C = (k == null ? undefined : k.need_page_count) || !R;
    let {
      currentChatViewConfig: T
    } = chatStoreManager.getStore("chatViewCoreStore").getState();
    let j = reactCoreLibraryReexport.useMemo(() => (T == null ? undefined : T.chatId) || "", [T]);
    let [N, E] = reactCoreLibraryReexport.useState(!b);
    let {
      contentTypeConfig: I,
      templateStyleList: F,
      status: Z,
      selected: B,
      handleRetry: O,
      selectedContentType: D,
      selectedTempId: L,
      setSelectedTempId: z,
      setSelectedContentType: V
    } = function (e, t) {
      let [n, i] = reactCoreLibraryReexport.useState([_]);
      let [r, o] = reactCoreLibraryReexport.useState([]);
      let [a, s] = reactCoreLibraryReexport.useState(1);
      let [c, d] = reactCoreLibraryReexport.useState("loading");
      let [u, p] = reactCoreLibraryReexport.useState(true);
      let [m, v] = reactCoreLibraryReexport.useState(undefined);
      let [f, h] = reactCoreLibraryReexport.useState(undefined);
      let b = reactCoreLibraryReexport.useCallback(() => s(Date.now()), []);
      reactCoreLibraryReexport.useEffect(() => {
        let n = false;
        d("loading");
        let l = e => {
          if (n) {
            return;
          }
          let {
            data: t = {}
          } = e;
          p(!!t.ack);
          if (t.ack_opts) {
            var r;
            v((r = t.ack_opts) === null || r === undefined ? undefined : r.page_num_ack?.num_type);
            h(t.ack_opts.ppt_style_opt?.id);
          }
          let {
            page_num_opts: s = [],
            ppt_style_opts: c = []
          } = t.tpl_opts || {};
          let u = s.map(e => {
            return {
              type: e.num_type || 0,
              page_min: e.range?.min || -1,
              page_max: e.range?.max || -1
            };
          });
          let m = c.filter(e => e.id).map(e => ({
            id: e.id || "",
            title: e.title || "",
            cover_url: e.cover_url || "",
            template: e.template || ""
          }));
          i(u);
          o(m);
          d("done");
        };
        apiServicesCollection.CommerceBenefitSupplyApiService.QueryPPTTemplateInfo({
          card_id: e,
          version: t
        }).then(e => l(e)).catch(() => {
          if (!n) {
            d("error");
          }
        });
        return () => {
          n = true;
        };
      }, [e, t, a]);
      return {
        contentTypeConfig: n,
        templateStyleList: r,
        status: c,
        handleRetry: b,
        selected: u,
        selectedContentType: m,
        selectedTempId: f,
        setSelectedTempId: h,
        setSelectedContentType: v
      };
    }(w, S);
    let {
      setTemplateTitle: H,
      setContentTypeTitle: X,
      handleConfirm: J,
      setTemplateStr: U
    } = function () {
      let [e, t] = reactCoreLibraryReexport.useState("");
      let [n, i] = reactCoreLibraryReexport.useState("");
      let [r, o] = reactCoreLibraryReexport.useState("");
      let {
        sendMessage: a
      } = chatServiceContext.useChatService("chatMessageService");
      let s = i18nTranslationUtils.useTranslationWithFallback();
      return {
        handleConfirm: reactCoreLibraryReexport.useCallback(t => {
          let i = "";
          let l = "";
          if (e && n) {
            i = s("agent_PPT_chat_prompt_lengthTemplate", {
              s_length: n,
              s_template: e
            });
            l = `${n},${e}`;
          } else if (n) {
            i = s("agent_PPT_chat_prompt_length", {
              s_length: n
            });
            l = n;
          } else if (e) {
            i = s("agent_PPT_chat_prompt_template", {
              s_template: e
            });
            l = e;
          }
          if (t != null) {
            t(l);
          }
          a([{
            text: i,
            reportParams: {
              scene: skillConstantsEnum.SceneType.SCENE_KEYBOARD
            }
          }]);
        }, [e, n]),
        setTemplateTitle: t,
        setContentTypeTitle: i,
        setTemplateStr: o
      };
    }();
    let {
      trackCardClick: K,
      trackCardShow: q
    } = m({
      message: r
    });
    let Q = reactCoreLibraryReexport.useCallback(() => {
      E(true);
      J(e => {
        K({
          click_effect: "aippt_confirm_template",
          templateOptionStr: e
        });
      });
    }, [D, L, J, K]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!b && Z !== "loading" && !N) {
        E(true);
        O();
      }
    }, [b, Z, N, j]);
    reactCoreLibraryReexport.useEffect(() => {
      pptTemplateManager.pptTemplateManager.addTemplateConfirmListener(j, Q);
      return () => {
        pptTemplateManager.pptTemplateManager.removeTemplateConfirmListener(j);
      };
    }, [j, Q, O]);
    let G = function (e, t) {
      let n = i18nTranslationUtils.useTranslationWithFallback();
      if (e && t) {
        return n("agent_PPT_btn_confirmLengthTemplate", "确认长度和模板");
      } else if (e) {
        return n("agent_PPT_btn_confirmLength", "确认长度");
      } else if (t) {
        return n("agent_PPT_btn_confirmTemplate", "确认模板");
      } else {
        return n("common.confirm", "确认");
      }
    }(C, R);
    let Y = reactCoreLibraryReexport.useCallback((e, t, n) => {
      if (!(n == null ? undefined : n.init) && D !== e) {
        K({
          click_effect: "aippt_length_click",
          templateOptionStr: t
        });
      }
      V(e);
      pptTemplateManager.pptTemplateManager.updateContentTypeId(j, e, w, S);
      pptTemplateManager.pptTemplateManager.updatePrecedingMessageId(j, r.message_id || "");
      X(t);
    }, [T, w, S, K, D]);
    let ee = reactCoreLibraryReexport.useCallback((e, t, n, i) => {
      if (!(i == null ? undefined : i.init) && L !== e) {
        K({
          click_effect: "aippt_template_click",
          templateOptionStr: t
        });
      }
      z(e);
      pptTemplateManager.pptTemplateManager.updateTemplateId(j, e, w, S);
      pptTemplateManager.pptTemplateManager.updatePrecedingMessageId(j, r.message_id || "");
      H(t);
      U(n || "");
    }, [T, w, S, K, L]);
    let et = N || B && Z !== "loading";
    let en = Z !== "done" || n || et;
    reactCoreLibraryReexport.useEffect(() => {
      pptTemplateManager.pptTemplateManager.updateConfirmBtnVisible(j, !en);
      return () => {
        pptTemplateManager.pptTemplateManager.updateConfirmBtnVisible(j, false);
      };
    }, [en, j]);
    reactCoreLibraryReexport.useEffect(() => {
      pptTemplateManager.pptTemplateManager.updateConfirmBtnText(j, G);
    }, [j, G]);
    reactCoreLibraryReexport.useEffect(() => {
      if (Z === "done" && !et && p && (R || C)) {
        q();
      }
    }, [Z, q, p, R, C, et]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [Z === "done" && !et && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsx(x, {})
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o(A.templateContainer, et && Z === "done" ? A.readOnly : "", Z === "done" ? A.finishedStyle : ""),
        children: [Z === "error" && reactJsxRuntimeCoreReexport.jsx(M, {
          onRetryClick: O
        }), Z === "loading" && reactJsxRuntimeCoreReexport.jsx(W, {}), Z === "done" && reactJsxRuntimeCoreReexport.jsxs("div", {
          ref: u,
          className: o(A.content, et && Z === "done" ? A.readOnly : ""),
          children: [C ? reactJsxRuntimeCoreReexport.jsx(P, {
            onSelectChange: (e, t) => {
              Y(e, t, {
                init: true
              });
              pptTemplateManager.pptTemplateManager.onSelecteChange(j);
            },
            onInit: (e, t) => {
              Y(e, t, {
                init: true
              });
            },
            selectedType: D || 0,
            contentConfig: I,
            onlyShowSelected: et
          }) : "", R ? reactJsxRuntimeCoreReexport.jsx($, {
            styleInfoList: F,
            selectedStyleId: L,
            onSelectChange: (e, t, n) => {
              ee(e, t, n, {
                init: true
              });
              pptTemplateManager.pptTemplateManager.onSelecteChange(j);
            },
            onInit: (e, t, n) => {
              ee(e, t, n, {
                init: true
              });
            },
            onlyShowSelected: et
          }) : ""]
        })]
      })]
    });
  };
  var superTaskPptSelector = require("super-task-ppt-selector") /*id: 204098*/;
  function O(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let D = e => {
    var t;
    var n;
    let {
      inView: i,
      contentBlock: l,
      message: r,
      shareMode: o
    } = e;
    let a = o || ((n = location) === null || n === undefined ? undefined : (t = n.pathname) === null || t === undefined ? undefined : t.includes("/thread"));
    return reactJsxRuntimeCoreReexport.jsx(Z, {
      inView: i,
      contentBlock: l,
      message: r,
      isShareMode: a
    });
  };
  class L {
    constructor() {
      O(this, "pluginIdentifier", superTaskPptSelector.pptTemplateSelector);
      O(this, "type", "Content");
      O(this, "Content", D);
    }
  }
  require.r(exports);
  require.d(exports, {
    BlockPlugin: function () {
      return L;
    },
    Content: function () {
      return D;
    }
  });
}