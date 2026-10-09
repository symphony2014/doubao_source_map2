// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'WriteSkillGuidancePage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: write-skill-guidance-page.8bdb5e97.js
         * chunkId: 56853
         * moduleId: 642563
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlWritingFiletypeIcon = require("rtl-writing-filetype-icon") /*id: 645397*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      className: t,
      innerClassName: n,
      style: i,
      title: a,
      onClick: s,
      onShow: p,
      onHide: h
    } = e;
    let [f, m] = reactCoreLibraryReexport.useState(false);
    let g = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (!g.current) {
        return;
      }
      let {
        scrollWidth: e,
        clientWidth: t
      } = g.current;
      m(e > t);
    }, [a]);
    let v = reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("container-TgJOIm", t),
      children: reactJsxRuntimeCoreReexport.jsx(reactIntersectionObserver_1.InView, {
        onChange: e => {
          if (e) {
            if (p != null) {
              p();
            }
          } else if (h != null) {
            h();
          }
        },
        children: e => {
          let {
            ref: t
          } = e;
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            ref: t,
            className: o("inner-OGojz6", n),
            style: i,
            onClick: s,
            children: [reactJsxRuntimeCoreReexport.jsx(rtlWritingFiletypeIcon.WritingFiletypeIcon, {
              className: "icon-fze7v4"
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              ref: g,
              className: "text-G0IsAt",
              children: a
            })]
          });
        }
      })
    });
    if (f) {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: a,
        children: v
      });
    } else {
      return v;
    }
  };
  var h = {
    container: "container-ApFs7B",
    header: "header-yThxRo",
    title: "title-wAPYkl",
    more: "more-vQSJx4",
    text: "text-BVsJHY",
    icon: "icon-M7nIHL",
    list: "list-__XYiP",
    "carousel-item": "carousel-item-YTzX7m",
    "carousel-arrow": "carousel-arrow-UvwaOu"
  };
  let f = e => {
    let {
      className: r,
      style: i,
      docInnerClassName: l,
      i18n: c = {},
      dataList: u,
      showMoreEntry: f = true,
      onItemShow: m,
      onItemHide: g,
      onItemClick: v,
      onShowMore: y
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(h.container, r),
      style: i,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: h.header,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: o(h.title, "write-doc-carousel-list-title"),
          children: c.titleText ?? "My Document"
        }), f && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: h.more,
          onClick: y,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: h.text,
            children: c.moreText ?? "Show More"
          }), reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
            className: h.icon
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
        className: h.list,
        itemClassName: h["carousel-item"],
        leftArrowClassName: h["carousel-arrow"],
        rightArrowClassName: h["carousel-arrow"],
        children: u == null ? undefined : u.map((e, t) => reactJsxRuntimeCoreReexport.jsx(p, {
          title: e.title,
          innerClassName: l,
          onClick: () => {
            if (v != null) {
              v(e);
            }
          },
          onShow: () => {
            if (m != null) {
              m(e);
            }
          },
          onHide: () => {
            if (g != null) {
              g(e);
            }
          }
        }, t))
      })]
    });
  };
  var documentNavigationAndCreationUtils = require("document-navigation-and-creation-utils") /*id: 491592*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var businessSkillEnums = require("business-skill-enums") /*id: 594084*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var migrationStatusHook = require("migration-status-hook") /*id: 85410*/;
  let C = e => {
    let {
      className: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let i = useNavigateRuntimeResolver.useNavigateResolver();
    let {
      refreshRecentDocs: a,
      getDocAISpaceNodeId: s
    } = writingSkillStore.writingSkillStore.getState();
    let l = writingSkillStore.writingSkillStore(e => e.recentDocs);
    let c = chatFgStoreHooks.getSourceValue("aispace_revert", {
      defaultValue: "0",
      source: chatStorageKeys.chatStorageKeys.serverAB
    });
    let {
      migrateStatus: u
    } = migrationStatusHook.useMigrationStatus();
    reactCoreLibraryReexport.useEffect(() => {
      if (u !== null) {
        a(u === businessSkillEnums.MigrationStatus.Migrated);
      }
    }, [u]);
    let p = async () => {
      try {
        teaAnalyticsEventTracker.trackEvent("created_doc_more_click");
        let e = await s();
        i(`/chat/drive/${e}`, {
          state: {
            enter_from: "writing_landing_viewall"
          }
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "write_guidance_page_open_ai_space_error",
          error: Error()
        });
      }
    };
    if (l.length) {
      return reactJsxRuntimeCoreReexport.jsx(f, {
        className: o("container-JtE6y_", t),
        docInnerClassName: o("docItem-nm02m6", {
          "v2-dCGZH7": false
        }),
        dataList: l.map(e => ({
          ...e,
          title: e.name || n("doc_title_unnamed")
        })),
        i18n: {
          titleText: n("aispace_system_folder_writing"),
          moreText: n("aispace_system_folder_writing_viewAll")
        },
        showMoreEntry: c !== "0" && l.length > 5,
        onShowMore: p,
        onItemClick: e => {
          let {
            conversation_id: t,
            key: n,
            title: r
          } = e;
          if (!n) {
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "write_guidance_page_open_doc_error",
              error: Error(),
              meta: {
                conversation_id: t,
                key: n
              }
            });
            return;
          }
          teaAnalyticsEventTracker.trackEvent("created_doc_click", {
            collection_id: n,
            collection_name: r
          });
          if (documentNavigationAndCreationUtils.isFusionDocResource({
            key: n
          })) {
            documentNavigationAndCreationUtils.openDocumentByToken({
              pageToken: n,
              isD2dFusionDoc: u === businessSkillEnums.MigrationStatus.Migrated
            });
            return;
          }
          if (!t) {
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "write_guidance_page_open_doc_error",
              error: Error(),
              meta: {
                conversation_id: t,
                key: n
              }
            });
            return;
          }
          documentNavigationAndCreationUtils.openDocumentByConversationAndPage({
            conversationId: t,
            pagesId: n,
            navigate: i
          });
        },
        onItemShow: e => {
          let {
            key: t,
            title: n
          } = e;
          teaAnalyticsEventTracker.trackEvent("created_doc_show", {
            collection_id: t,
            collection_name: n
          });
        }
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    WriteSkillGuidancePage: function () {
      return C;
    }
  });
}