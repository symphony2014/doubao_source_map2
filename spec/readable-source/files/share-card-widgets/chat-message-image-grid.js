// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'ChatMessageImageGrid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 71679.8c039722.js
         * chunkId: 71679
         * moduleId: 575287
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var optimizedImageCard = require("optimized-image-card") /*id: 686991*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var u = {
    "image-box-grid": "image-box-grid-wOEf55",
    "image-box-grid-item": "image-box-grid-item-vjp7Qk",
    "top-left": "top-left-oVzvg6",
    "top-right": "top-right-D9IuH9",
    "bottom-left": "bottom-left-keE6et",
    "bottom-right": "bottom-right-D7R9OR",
    "image-box-more": "image-box-more-CCmXuL",
    "image-box-grid-pad-right": "image-box-grid-pad-right-r3nGpu"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = function (e, t, n = 2) {
    let i = e < n;
    let o = e % n == 0;
    let r = e >= t - (t % n || n);
    let s = e % n == Math.min(n, t) - 1;
    return l({
      [u["top-left"]]: e === 0,
      [u["top-right"]]: i && s,
      [u["bottom-left"]]: r && o,
      [u["bottom-right"]]: r && s
    });
  };
  let m = e => reactCoreLibraryReexport.createElement("img", {
    src: e,
    style: {
      display: "block"
    }
  });
  let f = e => {
    let {
      className: t,
      style: n,
      imgList: i,
      gridColumns: r,
      onMoreClick: s,
      onItemClick: a,
      isNarrow: c = false,
      maxShown: d = 4,
      children: f = m,
      ...g
    } = e;
    let v = c || i.length !== d - 1 ? r : i.length;
    let b = v ? `repeat(${v}, minmax(0, 1fr))` : undefined;
    let [y, w] = reactCoreLibraryReexport.useState([]);
    let [_, O] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      if (i.length >= d) {
        w(i.slice(0, d));
        O(i.length - d);
      } else {
        w(i);
      }
    }, [i]);
    let x = () => {
      if (s != null) {
        s(i);
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l(u["image-box-grid"], t),
      style: {
        ...n,
        ...(b ? {
          gridTemplateColumns: b
        } : {})
      },
      ...g,
      children: [y.map((e, t, n) => reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l(u["image-box-grid-item"], h(t, n.length, v)),
        onClick: () => a == null ? undefined : a({
          img: e,
          index: t,
          imgList: i
        }),
        children: [f(e, t, n), t === d - 1 && _ && reactJsxRuntimeCoreReexport.jsx("div", {
          className: u["image-box-more"],
          onClick: x,
          children: `+${_}`
        })]
      }, t)), c && y.length === d - 1 && reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(u["image-box-grid-item"], u["image-box-grid-pad-right"], h(3, d, r))
      })]
    });
  };
  var samanthaImagePreviewGallery = require("samantha-image-preview-gallery") /*id: 927160*/;
  var usePreviousHook = require("use-previous-hook") /*id: 903727*/;
  var useDeepCompareMemoHook = require("use-deep-compare-memo-hook") /*id: 880349*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  let x = e => e === 1 ? "single_card" : e === 2 ? "double_column" : "multiple_card";
  let E = e => {
    let {
      messageId: t,
      conversationId: n,
      replyId: i,
      images: o,
      disableTrack: r
    } = e;
    let s = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let l = () => {
      return {
        message_id: t,
        conversation_id: n || "",
        bot_id: chatConversationBotId.getConversationBotId(n || ""),
        chat_type: s == null ? undefined : s.chatType,
        reply_id: i,
        module_position: "no_text",
        card_count: o.length,
        card_type: "picture",
        module_type: x(o.length ?? 0),
        rich_media_type: "only_picture"
      };
    };
    let a = function (e, t = {}) {
      try {
        if (r) {
          return;
        }
        teaAnalyticsEventTracker.trackEvent(e, {
          ...l(),
          ...t
        });
      } catch (e) {}
    };
    return useStableObjectHook.useStableObject({
      trackShowCard: function (e = {}) {
        a("show_card", {
          ...e
        });
      },
      trackClickCard: function (e = {}) {
        a("click_card", {
          ...e
        });
      },
      trackClickCardSource: function (e = {}) {
        a("click_card_source", {
          ...e
        });
      },
      trackShowCardSource: function (e = {}) {
        a("show_card_source", {
          ...e
        });
      },
      trackPictureDownload: function (e = {}) {
        a("picture_download", {
          ...e
        });
      },
      trackEnterPictureDetail: function (e = {}) {
        a("enter_picture_detail", {
          ...e
        });
      },
      trackRichMediaPictureLinkClick: function (e = {}) {
        a("rich_media_picture_link_click", {
          ...e
        });
      },
      trackPictureInnerStreamDuration: function (e = {}) {
        a("picture_inner_stream_duration", {
          ...e
        });
      }
    });
  };
  var j = {
    container: "container-VIQMYK",
    "image-grid": "image-grid-w5HCLk",
    imageGrid: "image-grid-w5HCLk",
    "scale-down": "scale-down-SXfs5q",
    scaleDown: "scale-down-SXfs5q"
  };
  let C = new Map();
  let S = e => {
    let {
      messageId: t,
      conversationId: n,
      replyId: s,
      disableTrack: u,
      imageCardList: h
    } = e;
    let [m, y] = reactCoreLibraryReexport.useState(false);
    let [w, _] = reactCoreLibraryReexport.useState(-1);
    let O = h.map(e => e.thumb_url);
    let x = h.map(e => e.full_size_url[0]);
    let S = chatResponsiveSize.useChatScreenSize();
    let T = usePreviousHook.usePrevious(w);
    let R = reactCoreLibraryReexport.useRef(false);
    let {
      trackShowCard: $,
      trackClickCard: k,
      trackClickCardSource: N,
      trackShowCardSource: Z,
      trackPictureDownload: P,
      trackEnterPictureDetail: I,
      trackRichMediaPictureLinkClick: D,
      trackPictureInnerStreamDuration: M
    } = E({
      messageId: t,
      conversationId: n,
      replyId: s,
      images: h,
      disableTrack: u
    });
    let L = useDeepCompareMemoHook.useDeepCompareMemo(h.map(e => e.source_app_icon || ""));
    let {
      latestFileUrls: A
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: L || [],
      enable: m
    });
    let F = reactCoreLibraryReexport.useMemo(() => h.map((e, t) => {
      return {
        ...e,
        source_app_icon: (A == null ? undefined : A[t]) || (h == null ? undefined : h[t]?.source_app_icon)
      };
    }), [A]);
    let W = e => {
      return {
        module_type: "double_column",
        pic_id: h[e]?.id,
        card_position: 1,
        card_id: h[e]?.id,
        doc_id: h[e]?.doc_id,
        image_resolution: `(${h[e]?.width},${h[e]?.height})`,
        card_sub_position: e + 1,
        module_source: "no_text_normal"
      };
    };
    let B = e => {
      let t = h == null ? undefined : h[e];
      return {
        card_id: t == null ? undefined : t.id,
        doc_id: t == null ? undefined : t.doc_id,
        image_resolution: `(${t == null ? undefined : t.width},${t == null ? undefined : t.height})`
      };
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(T) && T !== -1) {
        M({
          ...B(T),
          position: T,
          duration: Date.now() - (C.get(T) || 0)
        });
      }
    }, [w]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: j.container,
      children: [reactJsxRuntimeCoreReexport.jsx(f, {
        imgList: O,
        onItemClick: e => {
          let {
            index: t
          } = e;
          y(true);
          _(t);
          k({
            ...W(t)
          });
        },
        className: l(j["image-grid"], {
          [j["scale-down"]]: S !== "sm" && O.length !== 3
        }),
        children: (e, t) => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: reactJsxRuntimeCoreReexport.jsx(optimizedImageCard.OptimizedImageCard, {
            src: xssContentSanitizer.sanitizeUrl(e, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWXpK$2FHTnR%bTlNTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qk1NMHBz$1RK$2NH%nRWWFJo$np*b1dqSlZkb%Z-Tld0-$dHZDFaRWhPTkZsW$NtNWtXRTA5"
            }),
            imageOptions: {
              squareContainer: true,
              width: 400,
              height: 400,
              objectFit: "cover"
            },
            errorClassName: j["img-error"],
            onCardShow: () => {
              $({
                ...W(t)
              });
            }
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx(samanthaImagePreviewGallery.ImagePreviewGallery, {
        visible: m,
        onVisibleChange: e => {
          if (!e) {
            _(-1);
          }
          y(e);
        },
        src: xssContentSanitizer.sanitizeUrl(x, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWXpK$2FHTnR%bTlNTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qk1NMHBz$1RK$2NH%nRWWFJo$np*b1dqSlZkb%Z-Tld0-$dHZDFaRWhPTkZsW$NtNWtXRTA5"
        }),
        currentIndex: w,
        onChange: _,
        onClickSourceApp: e => {
          N({
            card_position: w,
            module_type: "double_column",
            pic_id: h[w]?.id
          });
          D({
            ...B(w)
          });
          let {
            sourceAppUrl: n
          } = e || {};
          if (n) {
            window.open(xssContentSanitizer.sanitizeUrl(n, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWXpK$2FHTnR%bTlNTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qk1NMHBz$1RK$2NH%nRWWFJo$np*b1dqSlZkb%Z-Tld0-$dHZDFaRWhPTkZsW$NtNWtXRTA5"
            }));
          }
        },
        onSourceAppShow: () => {
          I({
            ...B(w),
            position: w,
            enter_method: R.current ? "slide" : "click"
          });
          Z({
            card_position: w,
            module_type: "double_column",
            pic_id: h[w]?.id
          });
          R.current = false;
          C.set(w, Date.now());
        },
        onClickDownload: () => {
          P({
            ...B(w),
            position: w,
            download_method: "click_icon"
          });
        },
        onNext: () => {
          R.current = true;
        },
        onPrev: () => {
          R.current = true;
        },
        getImageMeta: e => {
          if (isUndefinedCheck.isUndefined(e)) {
            return {};
          }
          let {
            source_app_icon: t,
            source_app_name: n,
            main_site_url: i
          } = F[e] || {};
          return {
            sourceAppName: n,
            sourceAppIcon: t,
            sourceAppUrl: i
          };
        }
      })]
    });
  };
  require.d(exports, {
    ChatMessageImageGrid: function () {
      return S;
    }
  });
}