// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'SkillCodingModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59170.744060e8.js
         * chunkId: 59170
         * moduleId: 539249
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var samanthaTagSelector = require("samantha-tag-selector") /*id: 848347*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var tabsComponentAdapter = require("tabs-component-adapter") /*id: 826897*/;
  var tabPaneComponent = require("tab-pane-component") /*id: 772025*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var pageVisitTrackContext = require("page-visit-track-context") /*id: 857541*/;
  var skillActionConstants = require("skill-action-constants") /*id: 418389*/;
  let m = e => {
    let {
      targetRef: t,
      rootRef: r,
      onEnter: i,
      onLeave: l,
      threshold: a = 0.5,
      once: o = true,
      rootMargin: s
    } = e;
    let u = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      let n = t == null ? undefined : t.current;
      if (!n || !i) {
        return;
      }
      let c = new IntersectionObserver(e => {
        e.forEach(e => {
          if (!o || !u.current) {
            if (e.isIntersecting) {
              u.current = true;
              if (i != null) {
                i();
              }
            } else if (l != null) {
              l();
            }
          }
        });
      }, {
        root: (r == null ? undefined : r.current) ?? null,
        rootMargin: s,
        threshold: a
      });
      c.observe(n);
      return () => {
        c.disconnect();
      };
    }, [t, r, i, a, o]);
    return null;
  };
  var h = require.p + "static/image/creation-item-fallback.43ce1e06.jpg";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      url: t = "",
      useInViewTracker: r,
      onInView: i,
      rootRef: a
    } = e;
    let [o, s] = reactCoreLibraryReexport.useState(false);
    let u = reactCoreLibraryReexport.useRef(null);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [r && reactJsxRuntimeCoreReexport.jsx(m, {
        once: true,
        targetRef: u,
        rootRef: a,
        onEnter: i
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: l("image-wrap-rOZySM", {
          "image-error-v7TK8m": o
        }),
        ref: u,
        children: reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(o || !t ? h : t, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3e$Jub*tSMnh0$1ZkT01HTj$N$EJh$np*M1lrZEdNRnB%T1hwaFJ6a3pX$EpHZWxw$E1-QmlWMFp1$2xNe*QyTnRWakpo$jFZelRHN$Nlb$ZI%m5s-%0xWj-"
          }),
          alt: "",
          className: "h-auto w-full",
          onError: e => {
            s(true);
          }
        })
      })]
    });
  };
  let _ = e => {
    let {
      artifactsList: t,
      activeTag: r,
      onSendTemplate: n,
      onShowTracker: i,
      onClickTracker: a,
      classNames: o,
      enableNavigate: s
    } = e;
    let {
      current_page: u
    } = pageVisitTrackContext.getVisitContext();
    let c = e => {
      if ((e == null ? undefined : e.home_page_item_type) === skillActionConstants.SkillActionType.CodeArtifacts) {
        if (n != null) {
          n({
            item: e,
            navigate: s
          });
        }
      } else {
        var t;
        let r = (e == null ? undefined : e.advertising_article_url) ?? "";
        if (e == null ? undefined : (t = e.advertising_article_url) === null || t === undefined ? undefined : t.includes("doubao.com/code/launch")) {
          r = `${e == null ? undefined : e.advertising_article_url}?prev_page=${u}&from=${u === "chat" ? "from_chatcase" : "from_landingcase"}`;
        }
        window.open(xssContentSanitizer.sanitizeUrl(r, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3e$Jub*tSMnh0$1ZkT01HTj$N$EJh$np*M1lrZEdNRnB%T1doamJsSndXbTFH-W1SS$R-%mtSM$owWTBkN*FH%khWWFZr%0%0MFdWaEtib$JZ$FQwPQ"
        }), "_blank", "noopener,noreferrer");
      }
      if (a != null) {
        a(e, r);
      }
    };
    if (t == null ? undefined : t.length) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: l("artifacts-template-Yk574g", o == null ? undefined : o.wrapper),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: l("artifacts-list-RSp4eE", o == null ? undefined : o.grid),
          children: t.map(e => {
            return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: reactJsxRuntimeCoreReexport.jsxs("div", {
                className: l("artifacts-item-ciZ4YP", o == null ? undefined : o.item),
                "data-testid": "code-assistant-guidance-recommend-item",
                children: [reactJsxRuntimeCoreReexport.jsx("div", {
                  className: l("item-image-lKYoIK", o == null ? undefined : o.image),
                  onClick: () => {
                    c(e);
                  },
                  children: reactJsxRuntimeCoreReexport.jsx(v, {
                    url: (e == null ? undefined : e.artifacts_image_url) ?? "",
                    useInViewTracker: true,
                    onInView: () => i == null ? undefined : i(e, r)
                  })
                }), reactJsxRuntimeCoreReexport.jsx("div", {
                  className: l("item-header-oHNKIs", o == null ? undefined : o.header),
                  children: reactJsxRuntimeCoreReexport.jsx("span", {
                    children: e == null ? undefined : e.artifacts_image_title
                  })
                })]
              }, e.artifacts_id)
            });
          })
        })
      });
    } else {
      return null;
    }
  };
  var y = {
    banner: "banner-KMRrOz",
    tabs: "tabs-pkpW3m",
    "popover-grid-canvas-large": "popover-grid-canvas-large-P4S9CH",
    popoverGridCanvasLarge: "popover-grid-canvas-large-P4S9CH",
    "popover-grid-canvas-medium": "popover-grid-canvas-medium-FWHvw8",
    popoverGridCanvasMedium: "popover-grid-canvas-medium-FWHvw8",
    "popover-grid-canvas-small": "popover-grid-canvas-small-oNuDep",
    popoverGridCanvasSmall: "popover-grid-canvas-small-oNuDep"
  };
  let b = e => {
    let {
      visible: t = true,
      artifactsCategoryList: r,
      onSendTemplate: i,
      onClickTracker: d,
      onShowTracker: p,
      onClickTagTracker: f,
      onBeforeSendMessage: m,
      reportParams: h,
      containerRef: v,
      enableTemplateNavigate: b
    } = e;
    let [w, k] = reactCoreLibraryReexport.useState(0);
    let [x, S] = reactCoreLibraryReexport.useState("large");
    let T = useElementSizeHook_2.useElementSize(v);
    reactCoreLibraryReexport.useEffect(() => {
      let e = T == null ? undefined : T.width;
      if (e) {
        if (e < 580) {
          S("small");
        } else if (e < 780) {
          S("medium");
        } else {
          S("large");
        }
      }
    }, [T]);
    let R = reactCoreLibraryReexport.useMemo(() => r[w].artifacts_category_name, [w]);
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(y.banner),
        "data-testid": "skill-modal-coding",
        children: reactJsxRuntimeCoreReexport.jsx(tabsComponentAdapter.TabsComponent, {
          className: y.tabs,
          type: "button",
          keepDOM: false,
          activeKey: r[w].artifacts_category_name,
          renderTabBar: () => reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
            enableArrowBorder: false,
            arrowSize: "large",
            carouselRowClassName: y["carousel-row-wrapper"],
            children: reactJsxRuntimeCoreReexport.jsx(samanthaTagSelector.SamanthaTagSelector, {
              items: r.map(e => ({
                label: e.artifacts_category_name,
                key: e.artifacts_category_id
              })),
              value: [r[w].artifacts_category_id],
              onChange: e => {
                let [n] = e;
                if (n !== undefined) {
                  if (k != null) {
                    k(r.findIndex(e => e.artifacts_category_id === n));
                  }
                  if (f != null) {
                    f(r == null ? undefined : r.find(e => e.artifacts_category_id === n)?.artifacts_category_name);
                  }
                }
              }
            })
          }),
          children: r == null ? undefined : r.map(e => {
            return reactJsxRuntimeCoreReexport.jsx(tabPaneComponent.TabPane, {
              tab: e.artifacts_category_name,
              itemKey: e.artifacts_category_name,
              children: reactJsxRuntimeCoreReexport.jsx(_, {
                onBeforeSendMessage: m,
                artifactsList: r[w]?.artifacts_items,
                activeTag: R,
                reportParams: h,
                classNames: {
                  wrapper: "!mb-12",
                  grid: y[`popover-grid-canvas-${x}`]
                },
                onShowTracker: p,
                onSendTemplate: i,
                onClickTracker: d,
                enableNavigate: b
              })
            }, e.artifacts_category_id);
          })
        })
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    SkillCodingModal: function () {
      return b;
    }
  });
}