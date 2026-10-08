// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'CardFallbackView'
// - Renamed export 'B' to 'ChatWidgetRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 907668
         */
module.exports = function (module, exports, require) {
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var chatContextProviders = require("chat-context-providers") /*id: 793426*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var configuredAxiosClientWrapper = require("configured-axios-client-wrapper") /*id: 881790*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let d = (e, t) => {
    var r;
    let n = "";
    try {
      n = JSON.parse(JSON.parse(e).data).widgetId;
    } catch (e) {}
    return {
      url: ((r = window == null ? undefined : window.location) == null ? undefined : r.href) || "",
      message_id: (t == null ? undefined : t.message_id) || "",
      rec_id: n,
      message_type: "episode_card",
      current_page: "chat_history"
    };
  };
  let u = e => {
    let {
      data: t
    } = JSON.parse(e);
    return JSON.parse(t);
  };
  let h = e => {
    let t = u(e);
    let {
      widgetType: r
    } = t;
    switch (r) {
      case 1:
        let {
          podcastList: n
        } = t;
        let {
          podcasts: i
        } = n;
        return i;
      case 2:
        let {
          episodeList: a
        } = t;
        let {
          episodes: o,
          isFromSinglePodcast: s
        } = a;
        return {
          isFromSinglePodcast: s,
          episodes: o
        };
      case 4:
        return {
          episodeList: t.episodeList,
          podcastList: t.podcastList
        };
      default:
        return t;
    }
  };
  var p = () => reactJsxRuntimeCoreReexport.jsxs("div", {
    className: "music-card__header_304cc",
    children: [reactJsxRuntimeCoreReexport.jsx("img", {
      className: "music-card__header-icon_304cc",
      src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/jpzbt_hwm/ljhwZthlaukjlkulzlp/PodcastTitle.png"
    }), reactJsxRuntimeCoreReexport.jsx("div", {
      className: "music-card__header-text_304cc",
      children: "播客"
    })]
  });
  function f(e) {
    if (!e) {
      return "";
    }
    let t = (Date.now() - Number(e)) / 3600000;
    if (t < 24) {
      let e = t < 1 ? 1 : Math.floor(t);
      return `${e}\u{5C0F}\u{65F6}\u{524D}`;
    }
    if (t >= 24 && t < 720) {
      let e = Math.floor(t / 24);
      return `${e}\u{5929}\u{524D}`;
    }
    if (t >= 720 && t < 8760) {
      let e = Math.floor(t / 720);
      return `${e}\u{4E2A}\u{6708}\u{524D}`;
    }
    {
      let e = Math.floor(t / 8760);
      return `${e}\u{5E74}\u{524D}`;
    }
  }
  var m = {
    musicItem: "musicItem_ee98e",
    imgWrapper: "imgWrapper_ee98e",
    img: "img_ee98e",
    titleWrapper: "titleWrapper_ee98e",
    title: "title_ee98e",
    artist: "artist_ee98e",
    artistShrink: "artistShrink_ee98e",
    artistRest: "artistRest_ee98e",
    playIcon: "playIcon_ee98e"
  };
  var g = e => {
    let {
      episode: t,
      showBorderTop: r,
      hidePlayIcon: n = false,
      onclick: i
    } = e;
    let {
      podcast_cover: a,
      podcast_cover_thumbnail: o,
      title: s = ""
    } = t;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: m.musicItem,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: m.imgWrapper,
        children: reactJsxRuntimeCoreReexport.jsx("img", {
          className: m.img,
          src: o ?? a,
          alt: s
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: m.titleWrapper,
        style: {
          borderTop: r ? "0.5px solid var(--neutral-transparent-1, rgba(0, 0, 0, 0.06))" : "none"
        },
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: m.title,
          children: s
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: m.artist,
          children: (e => {
            let {
              publish_time: t = 0,
              podcast_title: r
            } = e;
            let n = t ? f(t) : "";
            return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
              children: [reactJsxRuntimeCoreReexport.jsx("span", {
                className: m.artistShrink,
                children: r
              }), n && reactJsxRuntimeCoreReexport.jsxs("span", {
                className: m.artistRest,
                children: [" · ", n]
              })]
            });
          })(t)
        })]
      }), !n && reactJsxRuntimeCoreReexport.jsx("div", {
        className: m.playIcon,
        onClick: () => i == null ? undefined : i("play_button"),
        style: {
          borderTop: r ? "0.5px solid var(--neutral-transparent-1, rgba(0, 0, 0, 0.06))" : "none"
        },
        children: reactJsxRuntimeCoreReexport.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "32",
          height: "32",
          viewBox: "0 0 32 32",
          fill: "none",
          children: reactJsxRuntimeCoreReexport.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM14.1838 10.6351C13.2479 10.4922 12.3733 11.1351 12.2304 12.071L12.2007 12.2762C12.0669 13.2527 12 14.4937 12 15.9992C12 17.6078 12.0764 18.9144 12.2291 19.919C12.2461 20.0307 12.274 20.1404 12.3126 20.2465C12.6358 21.1364 13.6192 21.5959 14.5091 21.2727L14.7126 21.1967C15.6724 20.8286 16.777 20.2713 18.0262 19.5248C19.2229 18.8096 20.1865 18.1396 20.9169 17.5145C20.9946 17.448 21.0671 17.3757 21.1337 17.2981C21.8534 16.4602 21.7577 15.1975 20.9198 14.4778L20.747 14.3322C20.0395 13.7467 19.1326 13.1234 18.0262 12.4622C16.6857 11.6612 15.5123 11.0794 14.506 10.7169C14.4015 10.6793 14.2936 10.6519 14.1838 10.6351Z",
            fill: "#000"
          })
        })
      })]
    });
  };
  var v = e => {
    let {
      text: t,
      onClick: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "footer_cb6c9",
      onClick: () => {
        r();
      },
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "footerInner_cb6c9",
        children: t
      })
    });
  };
  function _(e) {
    let {
      widgetData: t,
      onclick: r
    } = e;
    let {
      episodes: n,
      isFromSinglePodcast: i = false
    } = h(t);
    let a = n.length > 4;
    let o = n.slice(0, 4);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "card_container_f2036",
      children: [reactJsxRuntimeCoreReexport.jsx(p, {}), o.map((e, t) => reactJsxRuntimeCoreReexport.jsx(g, {
        episode: e.meta,
        showBorderTop: t !== 0,
        onclick: r
      }, t)), a && reactJsxRuntimeCoreReexport.jsx(v, {
        text: i ? "查看播客节目" : "查看更多单集",
        onClick: () => r == null ? undefined : r("card")
      })]
    });
  }
  var y = e => {
    let {
      podcast: t,
      showBorderTop: r
    } = e;
    let {
      cover_link: n,
      cover_thumbnail_link: i,
      title: a = ""
    } = t;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "musicItem_85beb",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "imgWrapper_85beb",
        children: reactJsxRuntimeCoreReexport.jsx("img", {
          className: "img_85beb",
          src: i ?? n,
          alt: a
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "titleWrapper_85beb",
        style: {
          borderTop: r ? "0.5px solid var(--neutral-transparent-1, rgba(0, 0, 0, 0.06))" : "none"
        },
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "title_85beb",
          children: a
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "artist_85beb",
          children: (e => {
            let t = [f(e.latest_update_time)];
            if (e.episode_cnt) {
              t.push(`${e.episode_cnt} \u{671F}`);
            }
            return t.join(" · ");
          })(t)
        })]
      })]
    });
  };
  function b(e) {
    let {
      widgetData: t,
      onclick: r
    } = e;
    let n = h(t);
    let i = n.length > 4;
    let a = n.slice(0, 4);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "card_container_57aae",
      children: [reactJsxRuntimeCoreReexport.jsx(p, {}), a.map((e, t) => reactJsxRuntimeCoreReexport.jsx(y, {
        podcast: e.meta,
        showBorderTop: t !== 0,
        onclick: r
      }, t)), i && reactJsxRuntimeCoreReexport.jsx(v, {
        text: "查看更多节目",
        onClick: () => r == null ? undefined : r("card")
      })]
    });
  }
  function w(e) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    let {
      widgetData: s,
      onclick: c
    } = e;
    let {
      episodeList: d,
      podcastList: u
    } = h(s);
    let f = (d == null ? undefined : d.episodeIds) || [];
    let m = (u == null ? undefined : u.podcasts) || [];
    let _ = f.length > 0;
    let b = _ ? m.slice(0, 3) : m.slice(0, 4);
    let w = _ ? {
      title: "我收藏的播客",
      podcast_title: `\u{5171} ${f.length || 0} \u{671F}`,
      podcast_cover: (n = (r = (t = d == null ? undefined : d.episodes) == null ? undefined : t[0]) == null ? undefined : r.meta) == null ? undefined : n.podcast_cover,
      podcast_cover_thumbnail: (o = (a = (i = d == null ? undefined : d.episodes) == null ? undefined : i[0]) == null ? undefined : a.meta) == null ? undefined : o.podcast_cover_thumbnail
    } : {};
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "card_container_1a8d9",
      children: [reactJsxRuntimeCoreReexport.jsx(p, {}), _ && reactJsxRuntimeCoreReexport.jsx(g, {
        episode: w,
        showBorderTop: false,
        onclick: c,
        hidePlayIcon: true
      }), b.map((e, t) => reactJsxRuntimeCoreReexport.jsx(y, {
        podcast: e.meta,
        showBorderTop: !!_ || t !== 0,
        onclick: c
      }, t)), reactJsxRuntimeCoreReexport.jsx(v, {
        text: "查看收藏",
        onClick: () => c == null ? undefined : c("card")
      })]
    });
  }
  var x = Object.defineProperty;
  var k = Object.defineProperties;
  var C = Object.getOwnPropertyDescriptors;
  var j = Object.getOwnPropertySymbols;
  var S = Object.prototype.hasOwnProperty;
  var E = Object.prototype.propertyIsEnumerable;
  var R = (e, t, r) => t in e ? x(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r;
  var N = (e, t) => {
    for (var r in t ||= {}) {
      if (S.call(t, r)) {
        R(e, r, t[r]);
      }
    }
    if (j) {
      for (var r of j(t)) {
        if (E.call(t, r)) {
          R(e, r, t[r]);
        }
      }
    }
    return e;
  };
  var T = (e, t) => k(e, C(t));
  function P(e) {
    let {
      widgetContent: t,
      defaultDisplayText: r,
      handleClick: n,
      teaReportFn: i,
      message: a
    } = e;
    let {
      applet_id: o,
      widget_data: s,
      widget_id: u
    } = t;
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof i == "function") {
        let e = d(s, a);
        if (i != null) {
          i("music_card_h5_share_page_view", T(N({}, e), {
            card_type: u
          }));
        }
      }
    }, []);
    let h = e => {
      if (typeof i == "function") {
        let t = d(s, a);
        if (i != null) {
          i("music_card_h5_share_page_click", T(N({}, t), {
            click_from: e || "",
            card_type: u
          }));
        }
      }
      if (n != null) {
        n();
      }
    };
    if (o !== "com.flow.podcast") {
      return null;
    }
    switch (u) {
      case "widget__episode":
        return reactJsxRuntimeCoreReexport.jsx(_, {
          widgetData: s,
          onclick: h
        });
      case "widget__series":
        return reactJsxRuntimeCoreReexport.jsx(b, {
          widgetData: s,
          onclick: h
        });
      case "widget__collect_mixed":
        return reactJsxRuntimeCoreReexport.jsx(w, {
          widgetData: s,
          onclick: h
        });
      default:
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [" ", r, " "]
        });
    }
  }
  var newsWidgetComponent = require("news-widget-component") /*id: 135489*/;
  var $ = newsWidgetComponent;
  var musicShareCardWidget = require("music-share-card-widget") /*id: 485054*/;
  var locallifeWidgetRenderer = require("locallife-widget-renderer") /*id: 651137*/;
  require.e("runtime-chunk-loader") /*id: 5761*/.then(require.bind(require, "runtime-export-helper") /*id: 875368*/);
  require.e("webpack-chunk") /*id: 97726*/.then(require.bind(require, "webpack-module-definition") /*id: 634041*/);
  let F = e => {
    return (e == null ? undefined : e.ext?.default_display_content) || "暂不支持该消息类型，请前往App尝试。";
  };
  let M = e => {
    let {
      applet_id: t = "",
      widget_id: r = "",
      widget_data: n = ""
    } = (e == null ? undefined : e.content_obj) || {};
    return {
      applet_id: t,
      widget_id: r,
      widget_data: n
    };
  };
  let D = e => {
    let {
      message: t
    } = e;
    let {
      onArtifactCardClick: r
    } = chatContextProviders.useArtifactClick();
    let c = F(t);
    let d = M(t);
    switch (d.applet_id) {
      case contentTypeEnums.contentTypeAuth.Music:
        return reactJsxRuntimeCoreReexport.jsx(musicShareCardWidget.MusicShareCard, {
          widgetContent: d,
          defaultDisplayText: c,
          handleClick: r,
          teaReportFn: teaAnalyticsEventTracker.trackEvent,
          message: t
        });
      case contentTypeEnums.contentTypeAuth.Podcast:
        return reactJsxRuntimeCoreReexport.jsx(P, {
          widgetContent: d,
          defaultDisplayText: c,
          handleClick: r,
          teaReportFn: teaAnalyticsEventTracker.trackEvent,
          message: t
        });
      case contentTypeEnums.contentTypeAuth.Locallife:
        return reactJsxRuntimeCoreReexport.jsx(locallifeWidgetRenderer.default, {
          widgetContent: d,
          defaultDisplayText: c,
          handleClick: r,
          teaReportFn: teaAnalyticsEventTracker.trackEvent,
          message: t,
          logger: loggerServiceCore.defaultLogger.persist
        });
      case contentTypeEnums.contentTypeAuth.News:
        return reactJsxRuntimeCoreReexport.jsx($, {
          request: configuredAxiosClientWrapper.makeRequest,
          widgetContent: d,
          defaultDisplayText: c,
          openDoubao: r,
          teaReportFn: teaAnalyticsEventTracker.trackEvent,
          message: t,
          logger: loggerServiceCore.defaultLogger.persist
        });
      default:
        return reactJsxRuntimeCoreReexport.jsx("div", {
          children: c
        });
    }
  };
  let B = e => {
    let {
      message: t
    } = e;
    let r = F(t);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      children: r
    });
  };
  require.d(exports, {
    CardFallbackView: function () {
      return B;
    },
    ChatWidgetRenderer: function () {
      return D;
    }
  });
}