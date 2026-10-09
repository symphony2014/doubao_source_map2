// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'MusicShareCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 485054
         */
module.exports = function (module, exports, require) {
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var o = () => reactJsxRuntimeCoreReexport.jsxs("div", {
    className: "music-card__header_69a44",
    children: [reactJsxRuntimeCoreReexport.jsx("img", {
      className: "music-card__header-icon_69a44",
      src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/jpzbt_hwm/ljhwZthlaukjlkulzlp/Luna.png"
    }), reactJsxRuntimeCoreReexport.jsx("div", {
      className: "music-card__header-text_69a44",
      children: "汽水音乐"
    })]
  });
  function s() {
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "pivTag_80cb6",
      children: "VIP"
    });
  }
  var l = {
    musicItem: "musicItem_598ba",
    imgWrapper: "imgWrapper_598ba",
    img: "img_598ba",
    titleWrapper: "titleWrapper_598ba",
    title: "title_598ba",
    artist: "artist_598ba",
    artistName: "artistName_598ba",
    playIcon: "playIcon_598ba",
    douyinTag: "douyinTag_598ba"
  };
  var c = e => {
    let {
      track: t,
      showBottomBorder: r,
      hidePlayIcon: i = false,
      onclick: a
    } = e;
    let {
      id: o,
      name: c,
      artistName: d,
      coverImgUrl: u,
      isPiv: h,
      isDouyin: p
    } = t;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l.musicItem,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: l.imgWrapper,
        children: reactJsxRuntimeCoreReexport.jsx("img", {
          className: l.img,
          src: u,
          alt: c
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l.titleWrapper,
        style: {
          borderBottom: r ? "0.5px solid var(--neutral-transparent-1, rgba(0, 0, 0, 0.06))" : "none"
        },
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: l.title,
          children: c
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: l.artist,
          children: [h && reactJsxRuntimeCoreReexport.jsx(s, {}), p && reactJsxRuntimeCoreReexport.jsx("div", {
            className: l.douyinTag,
            children: "来自抖音"
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: l.artistName,
            children: d
          })]
        })]
      }), !i && reactJsxRuntimeCoreReexport.jsx("div", {
        className: l.playIcon,
        onClick: () => {
          if (a) {
            a("play_button");
          }
        },
        style: {
          borderBottom: r ? "0.5px solid var(--neutral-transparent-1, rgba(0, 0, 0, 0.06))" : "none"
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
  var d = {
    music_card_container: "music_card_container_d10f8"
  };
  let u = e => {
    let {
      data: t
    } = JSON.parse(e);
    return JSON.parse(t);
  };
  let h = e => u(e).songListData[0].entities[0].track;
  let p = e => u(e).songListData[0].entities[0].playlist;
  let f = e => u(e).songListData[0].entities[0].album;
  let m = e => u(e).songListData[0].entities;
  let g = e => u(e).songListData;
  let v = e => {
    let t = "";
    if (e.length > 0) {
      e.forEach((r, n) => {
        t += r.name + (n === e.length - 1 ? "" : "/");
      });
    }
    return t;
  };
  function _({
    urlObj: e,
    pattern: t
  }) {
    var o;
    var s;
    if (e == null ? undefined : e.uri) {
      let s = (t == null ? undefined : t.extname) ?? "jpg";
      let l = (t == null ? undefined : t.width) ?? 400;
      let c = (t == null ? undefined : t.height) ?? l ?? 400;
      return `${(o = e == null ? undefined : e.urls) == null ? undefined : o[0]}${e.uri}~${e.template_prefix ? `${e.template_prefix}-crop-center:${l}:${c}` : `c5_${l}x${c}`}.${s}`;
    }
    if ((s = e == null ? undefined : e.urls) == null ? undefined : s[0]) {
      return e.urls[0];
    } else {
      return "https://lf3-static.bytednsdoc.com/obj/eden-cn/jpzbt_hwm/ljhwZthlaukjlkulzlp/light_music_holder.png";
    }
  }
  let y = e => {
    var t;
    var r;
    var n;
    var i;
    if (e == null ? undefined : e.video_info) {
      let i = e == null ? undefined : e.video_info;
      let a = (n = (r = (t = i == null ? undefined : i.search_result) == null ? undefined : t.video_card) == null ? undefined : r.card_list) == null ? undefined : n[0];
      return {
        id: a.gid,
        coverImgUrl: a.album_image,
        name: i.song_name,
        artistName: v([{
          name: i.artist_name
        }]),
        isPiv: false,
        isDouyin: true
      };
    }
    return {
      id: e.id,
      name: e.name,
      artistName: v(e.artists),
      coverImgUrl: _({
        urlObj: (i = e.cover) == null ? undefined : i.url_cover,
        pattern: {
          extname: "png"
        }
      }),
      isPiv: e.vip_lable_info.only_vip_playable
    };
  };
  let b = e => {
    var t;
    let r = e.track_count;
    return {
      id: e.id,
      name: e.name,
      artistName: `${v(e.artist_list)} . ${r}\u{9996}`,
      coverImgUrl: _({
        urlObj: (t = e.album_cover_info) == null ? undefined : t.url_cover,
        pattern: {
          extname: "png"
        }
      }),
      isPiv: false
    };
  };
  let w = e => {
    let t = [];
    e.forEach(e => {
      let {
        group_type: r,
        entities: n
      } = e;
      n.forEach(e => {
        if (r === 3) {
          let r = e.playlist;
          if (t.length < 4) {
            t.push({
              id: r.id,
              name: r.id === "9223372036854775807" ? r.name : `\u{6B4C}\u{5355}\u{FF1A}${r.name}`,
              artistName: `\u{5171} ${r.total} \u{9996}`,
              coverImgUrl: _({
                urlObj: r.cover,
                pattern: {
                  extname: "png"
                }
              }),
              isPiv: false
            });
          }
        } else if (r === 2 && t.length < 4) {
          t.push(b(e.album));
        }
      });
    });
    return t;
  };
  let x = ({
    cover: e,
    title: t,
    subTitle: r,
    subTitleSuffix: i,
    onPlayBtnClick: a
  }) => reactJsxRuntimeCoreReexport.jsxs("div", {
    className: "wrapper_8b8b5",
    children: [reactJsxRuntimeCoreReexport.jsx("div", {
      className: "cover_8b8b5",
      children: e ? reactJsxRuntimeCoreReexport.jsx("img", {
        src: e
      }) : null
    }), reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "content_8b8b5",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "title_8b8b5",
        children: t
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "subTitleWrapper_8b8b5",
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: "subTitle_8b8b5",
          children: r
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "subTitleSuffix_8b8b5",
          children: i
        })]
      })]
    }), reactJsxRuntimeCoreReexport.jsx("div", {
      className: "btn_8b8b5",
      onClick: () => a == null ? undefined : a("play_button"),
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
  function k(e) {
    let {
      widgetData: t,
      onclick: r,
      isMixtureCard: i
    } = e;
    let s = y(h(t));
    if (i) {
      return reactJsxRuntimeCoreReexport.jsx(x, {
        cover: s.coverImgUrl,
        title: s.name,
        subTitle: s.artistName,
        onPlayBtnClick: r
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a("theme-light", d.music_card_container),
        children: [reactJsxRuntimeCoreReexport.jsx(o, {}), reactJsxRuntimeCoreReexport.jsx(c, {
          track: s,
          onclick: r
        })]
      });
    }
  }
  var C = {
    widget_playlist: "widget_playlist_c0faf"
  };
  var j = e => {
    let {
      text: t,
      onClick: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "footer_4e2c0",
      onClick: () => {
        r();
      },
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "footerInner_4e2c0",
        children: t
      })
    });
  };
  function S(e) {
    var t;
    var r;
    let {
      widgetData: i,
      onclick: a,
      isMixtureCard: s
    } = e;
    let l = p(i);
    let d = () => {
      if (a) {
        a("card");
      }
    };
    let u = y((t = l == null ? undefined : l.tracks) == null ? undefined : t[0]);
    if (s) {
      return reactJsxRuntimeCoreReexport.jsx(x, {
        cover: u == null ? undefined : u.coverImgUrl,
        title: `\u{6B4C}\u{5355}\u{FF1A}${(l == null ? undefined : l.name) || " "}`,
        subTitle: `${((r = l.tracks) == null ? undefined : r.length) || 0} \u{9996}`,
        onPlayBtnClick: d
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: C.widget_playlist,
        children: [reactJsxRuntimeCoreReexport.jsx(o, {}), l.tracks.map((e, t) => {
          if (t < 4) {
            let r = y(e);
            return reactJsxRuntimeCoreReexport.jsx(c, {
              track: r,
              showBottomBorder: t !== 3,
              onclick: a
            }, t);
          }
        }), reactJsxRuntimeCoreReexport.jsx(j, {
          text: "查看歌单",
          onClick: d
        })]
      });
    }
  }
  var E = {
    widget_album: "widget_album_9b039"
  };
  function R(e) {
    let {
      widgetData: t,
      onclick: r,
      isMixtureCard: i
    } = e;
    let a = f(t);
    let s = () => {
      if (r) {
        r("card");
      }
    };
    let l = y(a.tracks[0]);
    if (i) {
      return reactJsxRuntimeCoreReexport.jsx(x, {
        cover: l.coverImgUrl,
        title: `\u{4E13}\u{8F91}\u{FF1A}${a.name}`,
        subTitle: `${l.artistName}`,
        subTitleSuffix: `\xb7 ${a.tracks.length || 0} \u{9996}`,
        onPlayBtnClick: s
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: E.widget_album,
        children: [reactJsxRuntimeCoreReexport.jsx(o, {}), a.tracks.map((e, t) => {
          if (t < 4) {
            let i = y(e);
            return reactJsxRuntimeCoreReexport.jsx(c, {
              track: i,
              showBottomBorder: t !== 3,
              onclick: r
            }, t);
          }
        }), reactJsxRuntimeCoreReexport.jsx(j, {
          text: "查看专辑",
          onClick: s
        })]
      });
    }
  }
  function N(e) {
    let {
      widgetData: t,
      onclick: r
    } = e;
    let i = m(t);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "widget_artistAlbum_18700",
      children: [reactJsxRuntimeCoreReexport.jsx(o, {}), i.map((e, t) => {
        if (t < 4) {
          let i = b(e.album);
          return reactJsxRuntimeCoreReexport.jsx(c, {
            track: i,
            hidePlayIcon: true,
            showBottomBorder: t !== 3,
            onclick: r
          }, t);
        }
      }), reactJsxRuntimeCoreReexport.jsx(j, {
        text: "查看更多专辑",
        onClick: () => {
          if (r) {
            r("card");
          }
        }
      })]
    });
  }
  function T(e) {
    let {
      widgetData: t,
      onclick: r
    } = e;
    let i = p(t);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "widget_collectMusics_4df59",
      children: [reactJsxRuntimeCoreReexport.jsx(o, {}), i.tracks.map((e, t) => {
        if (t < 4) {
          let i = y(e);
          return reactJsxRuntimeCoreReexport.jsx(c, {
            track: i,
            hidePlayIcon: true,
            showBottomBorder: t !== 3,
            onclick: r
          }, t);
        }
      }), reactJsxRuntimeCoreReexport.jsx(j, {
        text: "查看收藏",
        onClick: () => {
          if (r) {
            r("card");
          }
        }
      })]
    });
  }
  function P(e) {
    let {
      widgetData: t,
      onclick: r
    } = e;
    let i = w(g(t));
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "widget_collectMix_be522",
      children: [reactJsxRuntimeCoreReexport.jsx(o, {}), i.map((e, t) => reactJsxRuntimeCoreReexport.jsx(c, {
        track: e,
        hidePlayIcon: true,
        showBottomBorder: t !== 3,
        onclick: r
      }, t)), reactJsxRuntimeCoreReexport.jsx(j, {
        text: "查看收藏",
        onClick: () => {
          if (r) {
            r("card");
          }
        }
      })]
    });
  }
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let $ = (e, t) => {
    var r;
    let n = "";
    try {
      n = JSON.parse(JSON.parse(e).data).genWidgetId;
    } catch (e) {}
    return {
      url: ((r = window == null ? undefined : window.location) == null ? undefined : r.href) || "",
      message_id: (t == null ? undefined : t.message_id) || "",
      rec_id: n,
      message_type: "music_card",
      current_page: "chat_history"
    };
  };
  var A = Object.defineProperty;
  var O = Object.defineProperties;
  var F = Object.getOwnPropertyDescriptors;
  var M = Object.getOwnPropertySymbols;
  var D = Object.prototype.hasOwnProperty;
  var B = Object.prototype.propertyIsEnumerable;
  var L = (e, t, r) => t in e ? A(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r;
  var Z = (e, t) => {
    for (var r in t ||= {}) {
      if (D.call(t, r)) {
        L(e, r, t[r]);
      }
    }
    if (M) {
      for (var r of M(t)) {
        if (B.call(t, r)) {
          L(e, r, t[r]);
        }
      }
    }
    return e;
  };
  var W = (e, t) => O(e, F(t));
  function U(e) {
    let {
      widgetContent: t,
      defaultDisplayText: r,
      handleClick: i,
      teaReportFn: a,
      message: o
    } = e;
    let {
      applet_id: s,
      widget_data: l,
      widget_id: c,
      mixture_card_id: d
    } = t;
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof a == "function") {
        let e = $(l, o);
        if (a != null) {
          a("music_card_h5_share_page_view", W(Z({}, e), {
            card_type: c
          }));
        }
      }
    }, []);
    let u = e => {
      if (typeof a == "function") {
        let t = $(l, o);
        if (a != null) {
          a("music_card_h5_share_page_click", W(Z({}, t), {
            click_from: e || "",
            card_type: c
          }));
        }
      }
      if (i) {
        i();
      }
    };
    let h = !!d;
    if (s !== "com.flow.music.auth") {
      return null;
    }
    switch (c) {
      case "widget__single_music":
      case "widget__single_music_rx":
        return reactJsxRuntimeCoreReexport.jsx(k, {
          widgetData: l,
          onclick: u,
          isMixtureCard: h
        });
      case "widget__playlist":
      case "widget__playlist_rx":
        return reactJsxRuntimeCoreReexport.jsx(S, {
          widgetData: l,
          onclick: u,
          isMixtureCard: h
        });
      case "widget__album":
      case "widget__album_rx":
        return reactJsxRuntimeCoreReexport.jsx(R, {
          widgetData: l,
          onclick: u,
          isMixtureCard: h
        });
      case "widget__artist_album":
      case "widget__artist_album_rx":
        return reactJsxRuntimeCoreReexport.jsx(N, {
          widgetData: l,
          onclick: u
        });
      case "widget__collect_mix":
      case "widget__collect_mix_rx":
        return reactJsxRuntimeCoreReexport.jsx(P, {
          widgetData: l,
          onclick: u
        });
      case "widget__collected_music":
      case "widget__collected_music_rx":
        return reactJsxRuntimeCoreReexport.jsx(T, {
          widgetData: l,
          onclick: u
        });
      default:
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [" ", r, " "]
        });
    }
  }
  require.d(exports, {
    MusicShareCard: function () {
      return U;
    }
  });
}