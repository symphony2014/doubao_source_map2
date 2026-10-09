// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'getConversationTitle'
// - Renamed export 'I' to 'ConversationHeaderTitle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 213403
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatAbConfigSelectors = require("chat-ab-config-selectors") /*id: 561916*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var rtlIconComponent_1 = require("rtl-icon-component_1") /*id: 66332*/;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      conversationName: t,
      conversationNameSuffix: n,
      aiGenHint: i,
      threadSourceLinkTitle: r,
      onEditTitleClick: o,
      linkPrefixText: a,
      onThreadSourceLinkClick: s
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex h-full w-full flex-col justify-center",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
          -ml-4 box-border text-s-color-text-primary s-font-small-strong
        `,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: d("w-fit max-w-full flex items-center justify-start", {
            "hover:bg-s-color-bg-trans cursor-pointer select-none": !!o,
            "hover:u-hover-show-parent-upVdhA": !!o,
            "group/title": !!o
          }, "rounded-s-radius-xxs px-4"),
          onClick: o,
          children: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: "truncate",
              children: t
            }), n, reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1.RtlIcon, {
              className: d("block !text-14 p-2 ml-2 flex-shrink-0 text-s-color-text-quaternary", "u-hover-show-child-VwyWI1")
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "flex-1"
            })]
          })
        })
      }), (!!r || !!i) && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
            flex w-full items-center truncate text-s-color-text-tertiary
            s-font-xxs
          `,
        children: [i, !!r && !!i && reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
                mx-6 my-auto h-8 w-1 flex-shrink-0 bg-s-color-border-tertiary
              `
        }), !!r && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            children: a
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: d("flex-1 min-w-0 flex items-center", {
              "cursor-pointer text-s-color-brand-primary-default hover:text-s-color-brand-primary-hover active:text-s-color-brand-primary-press select-none": !!s
            }),
            onClick: s,
            children: [reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
              className: "mx-2 block p-2 !text-10"
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "max-w-[360px] min-w-0 flex-1 truncate",
              title: r,
              children: r
            })]
          })]
        })]
      })]
    });
  };
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var editConversationDialogLazyLoader = require("edit-conversation-dialog-lazy-loader") /*id: 94019*/;
  var cocoConversationStateChecker = require("coco-conversation-state-checker") /*id: 425443*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  let b = (e, t) => {
    try {
      var i;
      if (e == null ? undefined : (i = e.thread_source) === null || i === undefined ? undefined : i.web_link?.link_url) {
        let t = new URL(e.thread_source.web_link.link_url);
        window.open(xssContentSanitizer.sanitizeUrl(t, null, {
          logType: "js.window.location",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4-W1Je%5%SmFXRXA2$1Zo%2NHSXlOSFpqTTBwc$RESk9kb%pZ%W5aaWJWWjFaRWhOZ*xwWF$uQmtRekZxWWpJM%1scFlTbnBa$0ZKd1lqSTBkR0ZI$m1o-$IxWj$%RmhTZ*1JeWQz%lpibFl3Wk$jNWR$d3p$bTlq-lZab1drTXhlb%l6$m5sWk1s$jBX$Eo0-0ZreWMz$mtTRT$vWTIxa01XTjNQ$DA9"
        }));
      }
    } catch (e) {}
  };
  let y = e => {
    let {
      conversationName: t,
      conversationNameSuffix: n,
      aiGenHint: i,
      threadSourceLinkTitle: r,
      onEditTitleClick: o,
      linkPrefixText: a,
      onThreadSourceLinkClick: s
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex h-full w-full flex-col justify-center",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
          box-border flex justify-center text-s-color-text-primary
          s-font-small-strong
        `,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: d("w-fit max-w-full flex items-center justify-center", {
            "hover:bg-s-color-bg-trans cursor-pointer select-none relative": !!o,
            "hover:u-hover-show-parent-_897Mk": !!o,
            "group/title": !!o
          }, "rounded-s-radius-xxs px-4"),
          onClick: o,
          children: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: "truncate",
              children: t
            }), n, reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1.RtlIcon, {
              className: d("block !text-14 p-2 ml-2 flex-shrink-0 text-s-color-text-quaternary", "u-hover-show-child-ru78DG")
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "flex-1"
            })]
          })
        })
      }), (!!r || !!i) && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
            flex w-full items-center justify-center truncate !text-[10px]
            text-(--dbx-text-disable) s-font-xxs
          `,
        children: [i, !!r && !!i && reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
                mx-6 my-auto h-8 w-1 flex-shrink-0 bg-s-color-border-tertiary
              `
        }), !!r && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            children: a
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: d("flex-1 min-w-0 flex items-center", {
              "cursor-pointer text-s-color-brand-primary-default hover:text-s-color-brand-primary-hover active:text-s-color-brand-primary-press select-none": !!s
            }),
            onClick: s,
            children: [reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
              className: "mx-2 block p-2 !text-10"
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "max-w-[360px] min-w-0 flex-1 truncate",
              title: r,
              children: r
            })]
          })]
        })]
      })]
    });
  };
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let x = [{
    identifier: "complex-task-tag",
    Content: e => {
      let {
        className: t = ""
      } = e;
      let n = i18nTranslationUtils.useTranslationWithFallback();
      let i = chatGuidanceSelectors.useSidebarSkills();
      if (i == null ? undefined : i.some(e => e.skill_type === chatAppEnums.SkillType.DesExtSkillSuperTask)) {
        return reactJsxRuntimeCoreReexport.jsx("span", {
          className: `
          ml-4
          inline-flex shrink-[0] rounded-[4px] border-[0.5px]
          border-[var(--dbx-line-10)] p-[1px_4px] text-[10px] leading-[14px]
          font-[400] text-dbx-text-tertiary
          ${t}
        `,
          children: n("homepage_sidebar_complexTask")
        });
      } else {
        return null;
      }
    },
    matcher: e => safeJsonUtils.safeParse((e == null ? undefined : e.extra) || "", {}).flowpc_supertask_sidebar_complex_task === "1"
  }];
  let C = e => {
    let t = x.find(t => {
      var n;
      if ((n = t.matcher) === null || n === undefined) {
        return undefined;
      } else {
        return n.call(t, e);
      }
    });
    return {
      suffix: t ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsx(t.Content, {})
      }) : null
    };
  };
  let k = e => {
    let {
      conversationId: t,
      enableEdit: n,
      center: r,
      ...o
    } = e;
    let [a, s] = reactCoreLibraryReexport.useState({
      visible: false
    });
    let l = () => s({
      visible: true,
      click_from: "thread_title"
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [a.visible && reactJsxRuntimeCoreReexport.jsx(editConversationDialogLazyLoader.EditConversationDialog, {
        conversationId: t,
        exts: a,
        onHide: () => s({
          visible: false
        })
      }), r ? reactJsxRuntimeCoreReexport.jsx(y, {
        onEditTitleClick: n && t ? l : undefined,
        ...o
      }) : reactJsxRuntimeCoreReexport.jsx(p, {
        onEditTitleClick: n && t ? l : undefined,
        ...o
      })]
    });
  };
  let T = (e, t, n) => {
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let c = t === chatConversationTypes.ConversationTypes.Conversation ? e : undefined;
    let d = chatConversationSelectors.selectConversation(c ?? "");
    let {
      isLandingToMainCoco: u,
      excludeNewConversationButton: h
    } = chatAbConfigSelectors.useChatAbSelectors();
    if (t === chatConversationTypes.ConversationTypes.NewThread && n === "chat") {
      return i("sidebar_newChat_placeholder");
    } else if (chatConversationCheckers.isCocoConversation(d)) {
      return i(u ? h ? "brandName_doubao" : "chat_main" : "recent_chats_main_bot_doubao_title");
    } else if (d == null) {
      return undefined;
    } else {
      return d.name;
    }
  };
  let E = e => {
    try {
      if (new URL(e).protocol.startsWith("http")) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };
  let I = e => {
    var i;
    var o;
    var d;
    let {
      showFixedThreadConvHeader: u,
      conversationId: h,
      center: p
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let _ = chatConversationSelectors.selectConversation(h ?? "");
    let {
      suffix: y
    } = C(_);
    let w = (_ == null ? undefined : _.thread_source?.source_type) === chatAppEnums.ThreadSourceType.WebLink;
    let {
      loading: S,
      showConversationGuidancePage: x
    } = cocoConversationStateChecker.getCocoConversationState(h);
    if (!S && x) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(k, {
        enableEdit: _ && !chatConversationCheckers.isCocoConversation(_),
        conversationId: h,
        conversationName: u || "",
        conversationNameSuffix: y,
        linkPrefixText: v("cici_desktop_chat_web"),
        aiGenHint: v(chatConversationCheckers.isCocoConversation(_) ? "tag_aiGenerated_content" : "tag_aiGenerated_content_brand_cn"),
        onThreadSourceLinkClick: w && (_ == null ? undefined : (i = _.thread_source) === null || i === undefined ? undefined : i.web_link?.link_url) && E(_ == null ? undefined : (o = _.thread_source) === null || o === undefined ? undefined : o.web_link?.link_url) ? () => {
          b(_, h);
        } : undefined,
        threadSourceLinkTitle: w ? _ == null ? undefined : (d = _.thread_source) === null || d === undefined ? undefined : d.web_link?.link_title : undefined,
        center: p
      });
    }
  };
  require.d(exports, {
    getConversationTitle: function () {
      return T;
    },
    ConversationHeaderTitle: function () {
      return I;
    }
  });
}