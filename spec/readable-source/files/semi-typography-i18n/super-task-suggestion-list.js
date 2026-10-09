// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'SuperTaskSuggestion'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 60734.035973bf.js
         * chunkId: 60734
         * moduleId: 657847
         */
module.exports = function (module, exports, require) {
  let o;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var chatIcon_1 = require("chat-icon_1") /*id: 336160*/;
  var arrowRightIconComponent = require("arrow-right-icon-component") /*id: 317574*/;
  var superTaskEventTracker = require("super-task-event-tracker") /*id: 368178*/;
  var y = {
    suggestion_list: "suggestion_list-byrRPv",
    suggestion_item: "suggestion_item-nJqouW",
    suggestion_title: "suggestion_title-CMe6j9"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      category: t,
      title: n,
      windowWidth: o,
      hover: r
    } = e;
    let [a, l] = reactCoreLibraryReexport.useState(false);
    let s = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      let e = s.current;
      if (e && r) {
        l(e.scrollWidth > e.clientWidth);
      }
    }, [s, o, r]);
    reactCoreLibraryReexport.useEffect(() => {
      superTaskEventTracker.trackShowSuggestedContent({
        genre: t || "",
        content_detail: n || ""
      });
    }, []);
    if (a) {
      return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
        content: a ? n : "",
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: y.suggestion_title,
          ref: s,
          children: n
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("span", {
        className: y.suggestion_title,
        ref: s,
        children: n
      });
    }
  };
  let k = e => {
    let {
      suggestionItems: t,
      handleClickItem: n
    } = e;
    let [o, r] = reactCoreLibraryReexport.useState(false);
    let [a, l] = reactCoreLibraryReexport.useState("");
    let [s, c] = reactCoreLibraryReexport.useState(0);
    let {
      run: u
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      c(window.innerWidth);
    }, {
      wait: 200
    });
    reactCoreLibraryReexport.useLayoutEffect(() => {
      window.addEventListener("resize", u);
      return () => {
        window.removeEventListener("resize", u);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      r(false);
      setTimeout(() => {
        r(true);
      }, 30);
    }, [t]);
    if (o) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: y.suggestion_list,
        children: t.map(e => reactJsxRuntimeCoreReexport.jsxs("div", {
          className: y.suggestion_item,
          onClick: () => n(e, "use_template"),
          onMouseEnter: () => l(e.share_id || ""),
          onMouseLeave: () => l(""),
          children: [reactJsxRuntimeCoreReexport.jsx(chatIcon_1.ChatIcon, {
            className: "size-16 text-dbx-text-tertiary"
          }), reactJsxRuntimeCoreReexport.jsx(_, {
            category: e.category || "",
            title: e.title || "",
            windowWidth: s,
            hover: a === e.share_id
          }), reactJsxRuntimeCoreReexport.jsx(arrowRightIconComponent.ArrowRightIcon, {
            className: `
              size-16 text-dbx-text-tertiary
              ${a !== e.share_id ? "hidden" : ""}
            `
          })]
        }, e.share_id))
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          width: 0,
          height: ((t == null ? undefined : t.length) || 0) * 46
        }
      });
    }
  };
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var codingChatFileUpload = require("coding-chat-file-upload") /*id: 208950*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let P = {};
  async function A(e, t) {
    if (!e.length) {
      return;
    }
    let n = e.filter(e => !P[e]);
    if (n == null ? undefined : n.length) {
      var o;
      let {
        data: e
      } = await apiServicesCollection.ResourceApiService.GetFileURL({
        uris: n,
        type: t
      });
      if (e != null && (o = e.file_urls) !== null && o !== undefined) {
        o.forEach(e => {
          let {
            main_url: t,
            back_url: n,
            uri: o
          } = e;
          let i = t || n;
          if (o && i) {
            P[o] = i;
          }
        });
      }
    }
    return throttledPathFilterStringify.throttledPathStr(P, e);
  }
  let Z = e => {
    let {
      chatId: t,
      chatType: n,
      skillType: o
    } = e;
    let [r] = reactCoreLibraryReexport.useState(Date.now());
    let {
      addAttachmentDirectly: l,
      clearAttachments: s
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: t || "",
      skillType: o
    });
    let c = codingChatFileUpload.useFileUpload(true, true);
    return {
      addInputAttachment: async e => {
        let i = attachmentUploadStoreHooks.processUploadAttachment({
          chatId: t ?? ""
        });
        let s = collectionMapMatcher.mapWithMatcher(e, e => {
          if (collectionIncludesUtil.includes(["file", "image", "vlm_image", "link"], e == null ? undefined : e.type) && (e == null ? undefined : e.key)) {
            return {
              type: (e == null ? undefined : e.type) === "vlm_image" ? "image" : e == null ? undefined : e.type,
              id: (e == null ? undefined : e.identifier) || "",
              ...e
            };
          }
        }).filter(Boolean);
        let u = {
          conversation_id: t,
          conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), t) || 1,
          module_actionid: r,
          chat_type: n,
          skill_name: skillTypeMappings.getSkillName(o),
          skill_id: String(o),
          duration: "0",
          upload_way: "super-task-suggestion",
          upload_collection_way: s.length + i.length > 1 ? "multi" : "single",
          collection_id: "",
          upload_token_length: "",
          upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_SUPER_TASK_SUGGESTION
        };
        let d = [];
        let p = false;
        s.forEach(e => {
          if (!e) {
            return;
          }
          let {
            id: t,
            type: n,
            size: o,
            name: i
          } = e;
          if (n && n !== "link") {
            let e = {
              size: o ? Number(o) : 0,
              name: i,
              type: n,
              id: t
            };
            d.push(e);
          } else if (n === "link") {
            p = true;
          }
        });
        let m = (await c(d, i, {
          trackParams: u,
          hasLink: p
        })).map(e => e.id);
        let f = s.filter(e => {
          return (e == null ? undefined : e.type) === "link" || !!m.includes((e == null ? undefined : e.id) ?? "");
        });
        if (!(f == null ? undefined : f.length)) {
          return;
        }
        let h = f.filter(e => (e == null ? undefined : e.type) === "image").map(e => e == null ? undefined : e.key).filter(Boolean);
        let g = await A(h, "image");
        f.forEach(e => {
          if (e) {
            l({
              type: e == null ? undefined : e.type,
              fileName: e == null ? undefined : e.name,
              from: "super-task-suggestion",
              fileKey: e == null ? undefined : e.key,
              size: (e == null ? undefined : e.size) ? Number(e == null ? undefined : e.size) : 0,
              blobUrl: (e == null ? undefined : e.key) && (e == null ? undefined : e.type) === "image" ? g == null ? undefined : g[e == null ? undefined : e.key] : undefined,
              url: (e == null ? undefined : e.type) === "link" ? e == null ? undefined : e.key : undefined
            });
          }
        });
      },
      clearInputAttachment: async () => {
        await s({});
      }
    };
  };
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var W = {
    suggestion_list: "suggestion_list-jjYKkB",
    suggestion_item: "suggestion_item-c3pcSr",
    suggestion_title: "suggestion_title-PTkDSM"
  };
  let D = e => {
    let {
      category: t,
      title: n,
      windowWidth: o,
      hover: r
    } = e;
    let [a, l] = reactCoreLibraryReexport.useState(false);
    let s = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      let e = s.current;
      if (e && r) {
        l(e.scrollWidth > e.clientWidth);
      }
    }, [s, o, r]);
    reactCoreLibraryReexport.useEffect(() => {
      superTaskEventTracker.trackShowSuggestedContent({
        genre: t || "",
        content_detail: n || ""
      });
    }, []);
    if (a) {
      return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
        content: a ? n : "",
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: W.suggestion_title,
          ref: s,
          children: n
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("span", {
        className: W.suggestion_title,
        ref: s,
        children: n
      });
    }
  };
  let L = e => {
    let {
      suggestionItems: t,
      handleClickItem: n,
      disableReplay: o = false
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let [a, l] = reactCoreLibraryReexport.useState(false);
    let [s, c] = reactCoreLibraryReexport.useState("");
    let [u, d] = reactCoreLibraryReexport.useState(0);
    let {
      run: m
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      d(window.innerWidth);
    }, {
      wait: 200
    });
    reactCoreLibraryReexport.useLayoutEffect(() => {
      window.addEventListener("resize", m);
      return () => {
        window.removeEventListener("resize", m);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      l(false);
      setTimeout(() => {
        l(true);
      }, 30);
    }, [t]);
    if (a) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: W.suggestion_list,
        children: t.map(e => reactJsxRuntimeCoreReexport.jsxs("div", {
          className: W.suggestion_item,
          onClick: () => n(e, o ? "use_template" : "replay"),
          onMouseEnter: () => c(e.share_id || ""),
          onMouseLeave: () => c(""),
          children: [reactJsxRuntimeCoreReexport.jsx(chatIcon_1.ChatIcon, {
            className: "size-16"
          }), reactJsxRuntimeCoreReexport.jsx(D, {
            category: e.category || "",
            title: e.title || "",
            windowWidth: u,
            hover: s === e.share_id
          }), o ? reactJsxRuntimeCoreReexport.jsx(arrowRightIconComponent.ArrowRightIcon, {
            className: `
                size-16 text-dbx-text-tertiary
                ${s !== e.share_id ? "hidden" : ""}
              `
          }) : reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            size: "sm",
            variant: "rectangle",
            color: "grey-outline",
            style: {
              display: s === e.share_id ? "" : "none"
            },
            onClick: t => {
              t.stopPropagation();
              n(e, "use_template");
            },
            children: r("superAgent_btn_makeSimilar")
          })]
        }, e.share_id))
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          width: 0,
          height: ((t == null ? undefined : t.length) || 0) * 46
        }
      });
    }
  };
  var rightOutlinedIcon = require("right-outlined-icon") /*id: 831095*/;
  var F = "tabs-bar-action-btn-PA6UhX";
  let z = e => {
    let {
      className: t,
      activeKey: n,
      tabList: o,
      onChange: r
    } = e;
    let a = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      let e = a.current;
      if (e) {
        let t = () => {
          let {
            scrollLeft: t,
            offsetWidth: n,
            scrollWidth: o
          } = e;
          let i = e.parentElement;
          if (n === o) {
            i.removeAttribute("data-scroll-pos");
          } else if (t <= 0) {
            i.setAttribute("data-scroll-pos", "start");
          } else if (Math.ceil(t + n) >= o) {
            i.setAttribute("data-scroll-pos", "end");
          } else {
            i.setAttribute("data-scroll-pos", "center");
          }
        };
        e.addEventListener("scroll", t);
        let n = new ResizeObserver(t);
        n.observe(e);
        t();
        return () => {
          n.disconnect();
          e.removeEventListener("scroll", t);
        };
      }
    }, []);
    let l = e => {
      let t = a.current;
      if (t) {
        let n = t.scrollLeft;
        t.scrollTo({
          left: n + e * 150,
          top: 0,
          behavior: "smooth"
        });
      }
    };
    let c = e => {
      let t = e.target;
      let n = a.current;
      if (n) {
        let {
          offsetLeft: e,
          offsetWidth: o
        } = t;
        n.scroll({
          left: e - (n.offsetWidth - o) / 2,
          top: 0,
          behavior: "smooth"
        });
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s("tabs-kZF579", t),
      children: [reactJsxRuntimeCoreReexport.jsx("span", {
        className: F,
        "data-action": "prev",
        onClick: () => l(-1),
        children: reactJsxRuntimeCoreReexport.jsx(rightOutlinedIcon.RightOutlinedIcon, {
          className: "relative size-16"
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "tabs-bar-oEiko3",
        ref: a,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "tabs-list-eEWRuJ",
          children: o.map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
            "data-active": e.key === n,
            "data-testid": `tab-item-${e.key}`,
            onClick: n => {
              c(n);
              if (r != null) {
                r(e.key, t);
              }
            },
            className: "tab-item-oc5f8F",
            children: e.item
          }))
        })
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        className: F,
        "data-action": "next",
        onClick: () => l(1),
        children: reactJsxRuntimeCoreReexport.jsx(rightOutlinedIcon.RightOutlinedIcon, {
          className: "relative size-16"
        })
      })]
    });
  };
  var superTaskGuidancePortalWrapper = require("super-task-guidance-portal-wrapper") /*id: 107267*/;
  var imageSkillTemplateManager = require("image-skill-template-manager") /*id: 384089*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  let X = e => {
    if (!o || e) {
      (o = apiServicesCollection.SamanthaApiService.RecommendTask()).catch(() => {
        o = undefined;
      });
    }
    return o;
  };
  let U = e => {
    let [t, n] = reactCoreLibraryReexport.useState(true);
    let [o, r] = reactCoreLibraryReexport.useState([]);
    let [a, l] = reactCoreLibraryReexport.useState([]);
    reactCoreLibraryReexport.useEffect(() => {
      X(e).then(e => {
        r((e == null ? undefined : e.data?.recommend_tasks) || []);
        l((e == null ? undefined : e.data?.suggestions) || []);
      }).finally(() => {
        n(false);
      });
    }, [e]);
    return {
      allTasks: o,
      suggestTasks: a,
      loading: t
    };
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  let V = e => {
    window.open(xssContentSanitizer.sanitizeUrl(`/super-task-replay/${e}`, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlWek-yWW1rNW$WcFlRbk5a$0d0M$pFaE9hR050WkR*amR6MDk"
    }));
  };
  var K = {
    container: "container-VW9xjP",
    tabs_container: "tabs_container-Y5vZ49",
    suggestions_content: "suggestions_content-kOs0ZE",
    simple: "simple-pKzYAH"
  };
  let Y = "superAgent_tab_featured";
  let J = e => {
    let {
      chatInputRef: t
    } = chatRefsContext.useChatRefs();
    let {
      chatId: n,
      chatType: o
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil.deepEqual);
    let l = chatStoreManager.useStoreSelector("chatInputStore", e => n ? e.activeSkillTypeMap[n] : undefined);
    let {
      allTasks: s,
      suggestTasks: u
    } = U(e === "simple");
    let [p, m] = reactCoreLibraryReexport.useState(Y);
    let f = e === "full" ? p : Y;
    let h = e === "full" ? 5 : 3;
    let [g, b] = reactCoreLibraryReexport.useState([]);
    let {
      addInputAttachment: y,
      clearInputAttachment: w
    } = Z({
      chatId: n || "",
      chatType: o,
      skillType: l
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (f === Y) {
        b(u.length && e === "simple" ? u.slice(0, 5) : s.sort(() => Math.random() - 0.5).slice(0, h));
      } else {
        b(s.filter(e => e.category === f).slice(0, h));
      }
    }, [f, s, u]);
    let {
      duplicateStyleInfo: _
    } = superTaskStore.superTaskStore(e => ({
      duplicateStyleInfo: e.duplicateStyleInfo
    }), deepEqualityUtil.deepEqual);
    let k = async e => {
      var n;
      var o;
      var i;
      var r;
      let {
        text: l,
        attachments: s,
        sendImmediately: c = false
      } = e;
      await w();
      if (c) {
        if ((r = t.current) !== null && r !== undefined) {
          r.focus();
        }
        let e = s && (s == null ? undefined : s.length) > 0;
        if (e) {
          let e = collectionMapMatcher.mapWithMatcher(s, e => ({
            ...e,
            size: Number(e.size)
          }));
          superTaskStore.superTaskStore.setState({
            hideInputAttachments: true
          });
          try {
            await y(e);
          } catch (e) {}
        }
        setTimeout(() => {
          var n;
          var o;
          if ((o = t.current) !== null && o !== undefined && (n = o.submit) !== null && n !== undefined) {
            n.call(o, undefined, l);
          }
          if (e) {
            superTaskStore.superTaskStore.setState({
              hideInputAttachments: false
            });
          }
        }, 10);
        return;
      }
      if ((o = t.current) !== null && o !== undefined && (n = o.setText) !== null && n !== undefined) {
        n.call(o, l);
      }
      if ((i = t.current) !== null && i !== undefined) {
        i.focus();
      }
      if (s && (s == null ? undefined : s.length) > 0) {
        let e = collectionMapMatcher.mapWithMatcher(s, e => ({
          ...e,
          size: Number(e.size)
        }));
        await y(e);
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if ((_ == null ? undefined : _.shareId) && s.length) {
        let e = s.find(e => e.share_id === _.shareId);
        if (e) {
          k({
            text: (e == null ? undefined : e.user_prompt) || "",
            attachments: (e == null ? undefined : e.attachments) || []
          });
        }
        superTaskStore.superTaskStore.setState({
          duplicateStyleInfo: undefined
        });
      }
    }, [_, s]);
    let E = async (t, n) => {
      superTaskEventTracker.trackClickSuggestedContent({
        button_name: t,
        genre: n.category || "",
        content_detail: n.title || ""
      });
      if (t === "use_template") {
        await k({
          text: n.user_prompt || "",
          attachments: n.attachments || [],
          sendImmediately: e === "simple"
        });
        imageSkillTemplateManager.templateInfoManager().setTemplateInfo(n.share_id || "", n.category || "");
        return;
      }
      V(n.share_id || "");
    };
    let x = [...new Set(s.map(e => e.category || "").filter(Boolean))].sort();
    x.unshift(Y);
    return {
      activeCategory: f,
      tasks: g,
      categories: x,
      handleClickAction: E,
      handleTabChange: e => {
        m(e);
      }
    };
  };
  let Q = e => {
    let {
      mode: t = "full",
      useNewUI: n = false
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let {
      tasks: r,
      categories: a,
      handleClickAction: l,
      handleTabChange: c,
      activeCategory: d
    } = J(t);
    let {
      inputAggregateList: f
    } = chatLauncherConfigHooks.useLauncherConfig();
    let h = !!(f == null ? undefined : f.includes(String(chatAppEnums.SkillType.DesExtSkillSuperTask)));
    let g = reactCoreLibraryReexport.useRef(null);
    if (r.length) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: g,
        className: s(K.container, t === "simple" ? K.simple : ""),
        children: [t === "full" ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: K.tabs_container,
          children: reactJsxRuntimeCoreReexport.jsx(z, {
            tabList: a.map(e => ({
              item: o(e),
              key: e
            })),
            onChange: c,
            activeKey: d
          })
        }) : null, reactJsxRuntimeCoreReexport.jsx("div", {
          className: K.suggestions_content,
          children: n ? reactJsxRuntimeCoreReexport.jsx(k, {
            suggestionItems: r,
            handleClickItem: (e, t) => l(t, e)
          }) : reactJsxRuntimeCoreReexport.jsx(L, {
            disableReplay: t === "simple",
            suggestionItems: r,
            handleClickItem: (e, t) => l(t, e)
          })
        }), h && reactJsxRuntimeCoreReexport.jsx(superTaskGuidancePortalWrapper.SuperTaskGuidancePortal, {})]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    SuperTaskSuggestion: function () {
      return Q;
    }
  });
}