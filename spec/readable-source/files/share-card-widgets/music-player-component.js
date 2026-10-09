// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'mP' to 'MusicPlayerComponent'
// - Renamed export 'zI' to 'MusicPlayer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 564298
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var musicAutoplayStateSetter = require("music-autoplay-state-setter") /*id: 90452*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  (n = {})[n.OTHER = 0] = "OTHER";
  n[n.PLAY = 1] = "PLAY";
  n[n.DOWNLOAD = 2] = "DOWNLOAD";
  let v = n;
  let _ = async e => {
    let {
      vid: t,
      sourceId: r
    } = e;
    try {
      var n;
      var i;
      var a;
      let {
        data: e
      } = await apiServicesCollection.MessageApiService.LoadMusicQS({
        vid_list: [t],
        source_id_list: [r]
      });
      let o = (e == null ? undefined : (n = e.music_list) === null || n === undefined ? undefined : n.find(e => e.vid === t)) || {};
      o.main_url = (i = o.main_url) === null || i === undefined ? undefined : i.replace(/http:\/\//, "https://");
      o.backup_url = (a = o.backup_url) === null || a === undefined ? undefined : a.replace(/http:\/\//, "https://");
      return o;
    } catch {
      return {};
    }
  };
  let y = async e => {
    let {
      source_from: t,
      source_id: r
    } = e;
    try {
      var n;
      let {
        data: e
      } = await apiServicesCollection.AliceApiService.MCheckMusic({
        check_list: [{
          source_from: t,
          source_id: r
        }],
        scene: v.PLAY
      });
      if (!e) {
        return {
          status: -2
        };
      }
      let i = (n = e.status_list) === null || n === undefined ? undefined : n.find(e => e.id === r);
      if (!i) {
        return {
          status: -2
        };
      }
      let {
        status: a,
        risk_result: o
      } = i;
      if (a === 0 || o === undefined) {
        return {
          status: -2
        };
      }
      return {
        status: o
      };
    } catch {
      return {
        status: -2
      };
    }
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var playButtonComponent = require("play-button-component") /*id: 959765*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var C = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = e => {
    let {
      musicData: t,
      onClick: r,
      playStatus: n = playButtonComponent.PlaybackStatus.Initial,
      progressPercent: i,
      className: a
    } = e;
    let {
      source_app_icon: o,
      source_app_name: s,
      album_image: l,
      artist_name: c,
      song_name: d
    } = t;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: C("music-wrapper-C8Nl0H", a),
      onClick: r,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "music-header-W0epV3",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "music-source-app-icon-R6QhEn",
          style: {
            backgroundImage: `url(${o})`
          }
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "music-source-app-name-noQ_oA",
          children: s
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "music-poster-LTZpQ8",
        style: {
          backgroundImage: `url(${l})`
        }
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "music-footer-CMU2wv",
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "music-info-zZA7eS",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "music-name-ceOp1D",
            children: d
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "artist-name-Jw5jQA",
            children: c
          })]
        }), reactJsxRuntimeCoreReexport.jsx(playButtonComponent.PlayButton, {
          className: "music-play-button-eUziTl",
          status: n,
          progressPercent: i,
          mainColor: "#0066ff",
          stroke: "#0066ff80"
        })]
      })]
    });
  };
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  let R = e => +!!e;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var baseFlowXgPlayer = require("base-flow-xg-player") /*id: 401141*/;
  var mp4VideoPreloaderAdapter = require("mp4-video-preloader-adapter") /*id: 624235*/;
  function I(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  function $() {
    return {
      preloadSize: 8000,
      secretKey: "",
      useEME: false
    };
  }
  class A {
    get playerProperties() {
      let {
        currentTime: e,
        duration: t,
        isPlaying: r,
        cumulateTime: n,
        version: i
      } = this.player;
      return {
        currentTime: e,
        duration: t,
        isPlaying: r,
        cumulateTime: n,
        playerVersion: i
      };
    }
    requestPlayerHandler() {
      return {
        play: this.play.bind(this),
        pause: this.pause.bind(this),
        seek: this.seek.bind(this)
      };
    }
    async play(e) {
      let t = new Promise((e, t) => {
        this.player.once(videoPlayerEventConstants.PLAY, () => {
          e();
        });
        this.player.once(videoPlayerEventConstants.ERROR, e => {
          t(e);
        });
      });
      if (this.needChangeUrl(e)) {
        let {
          main_url: t,
          backup_url: r,
          player_access_key: n
        } = e;
        this.player.playNext({
          url: [{
            src: xssContentSanitizer.sanitizeUrl(t, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWWxo$2$tRlh%WFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmpXRTEwWWxo$2$tRlh%WFJaTWpsM$pFZFdk$1JET1hSa1dFNXdXW*t4-$dJelozWmlXRlo2W$ZkTmRHTkhlR2hs$jFaN$R*-3hhR0p0%m01-$dFbDFaRWhP-%dOdFpERmpkejA5"
            }),
            type: "video/mp4"
          }, {
            src: xssContentSanitizer.sanitizeUrl(r, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWWxo$2$tRlh%WFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmpXRTEwWWxo$2$tRlh%WFJaTWpsM$pFZFdk$1JET1hSa1dFNXdXW*t4-$dJelozWmlXRlo2W$ZkTmRHTkhlR2hs$jFaN$R*-3hhR0p0%m01-$dFbDFaRWhP-%dOdFpERmpkejA5"
            }),
            type: "video/mp4"
          }],
          autoplay: true,
          Mp4EncryptPlayer: {
            ...$(),
            secretKey: n
          }
        });
      } else {
        this.player.play();
      }
      this.currentMusicInfo = {
        ...e
      };
      return t;
    }
    needChangeUrl(e) {
      if (!this.currentMusicInfo) {
        return true;
      }
      let {
        main_url: t,
        backup_url: r,
        player_access_key: n
      } = e;
      let {
        main_url: i,
        backup_url: a,
        player_access_key: o
      } = this.currentMusicInfo;
      return t !== i || r !== a || n !== o;
    }
    pause() {
      if (!this.player.paused) {
        this.player.pause();
      }
    }
    seek(e) {
      this.player.seek(e);
    }
    onPlayerEvents(e, t) {
      if (typeof e == "string") {
        this.player.on(e, t);
      } else if (Array.isArray(e)) {
        e.forEach(e => {
          this.player.on(e, t);
        });
      }
    }
    offPlayerEvents(e, t) {
      if (typeof e == "string") {
        this.player.off(e, t);
      } else if (Array.isArray(e)) {
        e.forEach(e => {
          this.player.off(e, t);
        });
      }
    }
    destroy() {
      var e;
      this.pause();
      if ((e = this.removeEventBinding) !== null && e !== undefined) {
        e.call(this);
      }
      this.player.destroy();
      this.container = null;
    }
    constructor() {
      I(this, "player", undefined);
      I(this, "container", undefined);
      I(this, "currentMusicInfo", null);
      I(this, "removeEventBinding", undefined);
      this.container = document.createElement("div");
      this.player = new baseFlowXgPlayer.BaseXgPlayer({
        el: this.container,
        url: "",
        volume: 0.5,
        plugins: [mp4VideoPreloaderAdapter.default],
        videoInit: false,
        Mp4EncryptPlayer: $()
      });
    }
  }
  let O = () => {
    if (window && "thirdXgPlayerManager" in window) {
      return window.thirdXgPlayerManager;
    }
    let e = new A();
    if (window) {
      window.thirdXgPlayerManager = e;
    }
    return e;
  };
  function F(e) {
    return e === O().currentMusicInfo?.componentId;
  }
  let M = e => {
    let {
      inView: t,
      musicContentData: r,
      itemId: n,
      conversationId: a = "",
      autoPlay: o = false,
      onMusicWillPlay: s,
      fetchMusicResource: l,
      checkMusicStatus: c,
      onTrackEvent: d,
      onCreateReportEvent: u,
      musicInvalidErrorTitle: h = "This music cannot be played",
      internetErrorTitle: p = "Connection failed"
    } = e;
    let f = reactCoreLibraryReexport.useMemo(() => n || uuidV1Generator.generateUuid(), []);
    let m = reactCoreLibraryReexport.useRef({
      componentId: f,
      conversationId: a
    });
    let g = reactCoreLibraryReexport.useRef(true);
    let [v] = function (e) {
      let [t, r] = reactCoreLibraryReexport.useState(playButtonComponent.PlaybackStatus.Initial);
      let n = O();
      reactCoreLibraryReexport.useEffect(() => {
        let i = () => {
          if (t === playButtonComponent.PlaybackStatus.Playing) {
            r(playButtonComponent.PlaybackStatus.Paused);
          }
        };
        let a = () => {
          if (F(e)) {
            r(playButtonComponent.PlaybackStatus.Playing);
          } else if (t === playButtonComponent.PlaybackStatus.Playing) {
            r(playButtonComponent.PlaybackStatus.Paused);
          }
        };
        let o = () => {
          if (F(e)) {
            r(playButtonComponent.PlaybackStatus.Initial);
          }
        };
        let s = () => {
          if (F(e) && n.playerProperties.isPlaying) {
            r(playButtonComponent.PlaybackStatus.Playing);
          }
        };
        n.onPlayerEvents(videoPlayerEventConstants.PAUSE, i);
        n.onPlayerEvents(videoPlayerEventConstants.PLAY, a);
        n.onPlayerEvents(videoPlayerEventConstants.ENDED, o);
        n.onPlayerEvents(videoPlayerEventConstants.TIME_UPDATE, s);
        return () => {
          n.offPlayerEvents(videoPlayerEventConstants.PAUSE, i);
          n.offPlayerEvents(videoPlayerEventConstants.PLAY, a);
          n.offPlayerEvents(videoPlayerEventConstants.ENDED, o);
          n.offPlayerEvents(videoPlayerEventConstants.TIME_UPDATE, s);
        };
      }, [t, e]);
      return [t, r];
    }(f);
    let [_] = function (e) {
      let [t, r] = reactCoreLibraryReexport.useState(0);
      let n = O();
      reactCoreLibraryReexport.useEffect(() => {
        let t = () => {
          if (!F(e)) {
            return;
          }
          let {
            duration: t,
            currentTime: i
          } = n.playerProperties;
          let a = i / t * 100;
          if (!isNaN(a)) {
            r(a);
          }
        };
        let i = () => {
          if (F(e)) {
            r(0);
          }
        };
        n.onPlayerEvents(videoPlayerEventConstants.TIME_UPDATE, t);
        n.onPlayerEvents(videoPlayerEventConstants.ENDED, i);
        return () => {
          n.offPlayerEvents(videoPlayerEventConstants.TIME_UPDATE, t);
          n.offPlayerEvents(videoPlayerEventConstants.ENDED, i);
        };
      }, [e]);
      return [t, r];
    }(f);
    let y = O();
    let {
      playerVersion: k
    } = y.playerProperties;
    let {
      vid: C
    } = r;
    let T = {
      vid: C,
      conversation_id: a,
      player_sdk_version: k
    };
    let P = reactCoreLibraryReexport.useRef();
    let I = async () => {
      var e;
      var t;
      var n;
      if (s != null) {
        s();
      }
      let {
        vid: i,
        source_from: a,
        source_id: o,
        song_name: l,
        artist_name: u,
        album_image: f
      } = r;
      let v = function () {
        var e;
        let {
          reason: t,
          ...r
        } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          reason: ""
        };
        if ((e = P.current) !== null && e !== undefined) {
          e.error({
            reason: t,
            meta: r
          });
        }
      };
      if (!window.navigator.onLine) {
        semiToastNotification.toastInstance.error(p);
        v({
          reason: "network_is_offline"
        });
        return;
      }
      let _ = await (c == null ? undefined : c({
        source_from: a,
        source_id: o
      }));
      if (!_) {
        return;
      }
      if ((e = P.current) !== null && e !== undefined) {
        e.addDurationPoint("copyright_verified");
      }
      let {
        status: w
      } = _;
      if (d != null) {
        d("music_risk_result", {
          song_id: i,
          risk_result: w
        });
      }
      if (w !== 0) {
        semiToastNotification.toastInstance.error(h);
        v({
          reason: "copyright_verified_fail"
        });
        return;
      }
      let x = 0;
      let k = true;
      let C = async () => {
        if (!m.current) {
          return;
        }
        if (!m.current?.main_url) {
          await $();
        }
        let t = y.requestPlayerHandler();
        return t.play(m.current).catch(async () => {
          var e;
          x++;
          k = false;
          await $();
          if ((e = P.current) !== null && e !== undefined) {
            e.addDurationPoint("get_url");
          }
          if (m.current) {
            return await t.play(m.current);
          }
        });
      };
      n = {
        title: l,
        artist: u,
        artwork: [{
          src: xssContentSanitizer.sanitizeUrl(f, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWWxo$2$tRlh%WFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmpXRTEwWWxo$2$tRlh%WFJaTWpsM$pFZFdk$1JET1hSa1dFNXdXW*t4-$dJelozWmlXRlo2W$ZkTmRHTkhlR2hs$jFaN$R*aEdla3h1$W5wbFIwWj$Xak5XZWc9PQ"
          })
        }]
      };
      if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata(n);
      }
      if ((t = C()) !== null && t !== undefined) {
        t.then(() => {
          var e;
          var t;
          if ((e = P.current) !== null && e !== undefined) {
            e.addDurationPoint("start_play");
          }
          if ((t = P.current) !== null && t !== undefined) {
            t.success({
              meta: {
                retry_count: x,
                prefetch_get_url_result: R(k),
                is_first_play: R(g.current)
              }
            });
          }
          g.current = false;
        }).catch(e => {
          let t = e == null ? undefined : e.errorCode;
          v({
            reason: t ? "sdk_error" : "get_url_fail",
            retry_count: x,
            prefetch_get_url_result: R(k),
            sdk_error_code: t
          });
          semiToastNotification.toastInstance.error(h);
        });
      }
    };
    let $ = reactCoreLibraryReexport.useCallback(async () => {
      if (!l) {
        return;
      }
      let {
        vid: e,
        source_id: t
      } = r;
      let n = await l({
        vid: e,
        sourceId: t
      });
      if (!(n == null ? undefined : n.main_url)) {
        return Promise.reject(Error("url_is_empty"));
      }
      Object.assign(m.current, n);
    }, [l, r]);
    async function A() {
      var e;
      var t;
      if (o) {
        P.current = u == null ? undefined : u({
          eventName: "music_card_play",
          meta: {
            ...T,
            scene: "receive_auto"
          }
        });
        try {
          await $();
          if ((e = P.current) !== null && e !== undefined) {
            e.addDurationPoint("fetch_music_url");
          }
          await I();
        } catch (e) {
          if ((t = P.current) !== null && t !== undefined) {
            t.error({
              reason: e.message,
              error: e
            });
          }
        }
      }
    }
    (function (e, t, r = 60000) {
      let n = reactCoreLibraryReexport.useRef(0);
      reactCoreLibraryReexport.useEffect(() => {
        if (!e) {
          return;
        }
        let i = n.current;
        let a = new Date().getTime();
        if (a - i > r) {
          t();
          n.current = a;
        }
      }, [e, t, r]);
    })(!!t, () => {
      $().catch(() => {});
    });
    (function (e, t) {
      let r = O();
      reactCoreLibraryReexport.useEffect(() => {
        let n = () => {
          if (F(t) && e > 0 && e < 100) {
            let {
              duration: t,
              currentTime: n
            } = r.playerProperties;
            if (Math.abs(t * e / 100 - n) > 1) {
              let {
                seek: n
              } = r.requestPlayerHandler();
              n(t * e / 100);
            }
          }
        };
        r.onPlayerEvents(videoPlayerEventConstants.LOADED_DATA, n);
        return () => {
          r.offPlayerEvents(videoPlayerEventConstants.LOADED_DATA, n);
        };
      }, [e, t]);
    })(_, f);
    (function (e, t, r, n) {
      let a = O();
      let o = reactCoreLibraryReexport.useRef(0);
      let s = reactCoreLibraryReexport.useRef(0);
      reactCoreLibraryReexport.useEffect(() => {
        let {
          vid: i
        } = t;
        let l = () => {
          var t;
          if (F(e)) {
            s.current = 0;
            o.current = new Date().getTime();
            if (n != null) {
              n("music_play_start", {
                song_id: i
              });
            }
            if ((t = r.current) !== null && t !== undefined) {
              t.addDurationPoint("play_start");
            }
          }
        };
        let c = () => {
          var t;
          var l;
          if (!F(e)) {
            return;
          }
          let c = new Date().getTime() - o.current;
          let {
            duration: d,
            playerVersion: u
          } = a.playerProperties;
          if (!(c / 1000 > d)) {
            if (n != null) {
              n("music_play_end", {
                song_id: i,
                duration: c
              });
            }
            if ((t = r.current) !== null && t !== undefined) {
              t.addDurationPoint("play_end");
            }
            if ((l = r.current) !== null && l !== undefined) {
              l.success({
                meta: {
                  vid: i,
                  player_sdk_version: u,
                  has_been_stuck: +(s.current > 0),
                  stuck_count: s.current,
                  music_duration: d * 1000,
                  play_duration: c
                }
              });
            }
          }
        };
        let d = e => {
          if (e && e.eventType === "waitingStart" && e.type === 0) {
            s.current++;
          }
        };
        a.onPlayerEvents(videoPlayerEventConstants.PLAY, l);
        a.onPlayerEvents(videoPlayerEventConstants.PAUSE, c);
        a.onPlayerEvents(videoPlayerEventConstants.XGLOG, d);
        return () => {
          a.offPlayerEvents(videoPlayerEventConstants.PLAY, l);
          a.offPlayerEvents(videoPlayerEventConstants.PAUSE, c);
          a.offPlayerEvents(videoPlayerEventConstants.XGLOG, d);
        };
      }, [e, t, n]);
    })(f, r, P, d);
    reactCoreLibraryReexport.useEffect(() => {
      A();
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        if (d != null) {
          d("music_card_show", {
            song_id: r.vid
          }, {
            key: `${r.vid}`
          });
        }
      }
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx(S, {
      musicData: r,
      onClick: () => {
        let e = 1;
        if (v === playButtonComponent.PlaybackStatus.Playing) {
          y.requestPlayerHandler().pause();
          e = 0;
        } else {
          P.current = u == null ? undefined : u({
            eventName: "music_card_play",
            meta: {
              ...T,
              scene: "ui_click"
            }
          });
          I();
        }
        if (d != null) {
          d("music_card_click", {
            song_id: r.vid,
            to_status: e
          });
        }
      },
      playStatus: v,
      progressPercent: _
    });
  };
  let D = e => {
    let {
      contentData: t,
      inView: r,
      message: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let {
      musicData: a,
      onTrackEvent: o,
      isAutoPlay: s,
      onMusicWillPlay: l
    } = t;
    let c = n == null ? undefined : n.message_id;
    if (a && c) {
      return reactJsxRuntimeCoreReexport.jsx(M, {
        musicContentData: a,
        itemId: c,
        conversationId: n.conversation_id || "",
        messageId: c,
        inView: r,
        autoPlay: s,
        onMusicWillPlay: l,
        fetchMusicResource: _,
        checkMusicStatus: y,
        onTrackEvent: o,
        onCreateReportEvent: eventReportingService.createEventReporter,
        musicInvalidErrorTitle: i("music_url_not_vaild"),
        internetErrorTitle: i("internet_connection_failed")
      });
    } else {
      return null;
    }
  };
  let B = e => {
    let {
      isLastAvailableMessage: n,
      message: s
    } = e;
    let f = chatConversationBotId.getConversationBotId(s.conversation_id);
    let [m] = chatMessageStoreFactory.createMessageStore(e => [e.musicAutoPlay], deepEqualityUtil_1.isDeepEqual);
    let g = m && (s == null ? undefined : s.local_info?.from) !== chatCoreConstants.ChatSourceTypes.Api && n;
    return {
      onMusicWillPlay: () => {
        musicAutoplayStateSetter.setMusicAutoPlay(false);
      },
      onTrackEvent: reactCoreLibraryReexport.useCallback((e, t, r) => {
        teaAnalyticsEventTracker.trackEvent(e, {
          ...t,
          bot_id: f
        }, r);
      }, [f]),
      musicData: arrayFirstElement.getFirstElement(messageContentTypeAndStatusChecker.vU5(s) ? s.content_obj?.music_list : []),
      isAutoPlay: g
    };
  };
  let L = e => {
    let r = emptyExportFunction.emptyFunction;
    return {
      onMusicWillPlay: r,
      onTrackEvent: emptyExportFunction.emptyFunction,
      musicData: arrayFirstElement.getFirstElement(messageContentTypeAndStatusChecker.vU5(e) ? e.content_obj?.music_list : []),
      isAutoPlay: false
    };
  };
  let Z = e => {
    let {
      inView: t,
      message: r
    } = e;
    let n = L(r);
    return reactJsxRuntimeCoreReexport.jsx(D, {
      message: r,
      contentData: n,
      inView: t
    });
  };
  let W = e => {
    let {
      inView: t,
      isLastAvailableMessage: r,
      message: n
    } = e;
    let i = B({
      message: n,
      isLastAvailableMessage: r
    });
    return reactJsxRuntimeCoreReexport.jsx(D, {
      message: n,
      contentData: i,
      inView: t
    });
  };
  require.d(exports, {
    MusicPlayerComponent: function () {
      return W;
    },
    MusicPlayer: function () {
      return Z;
    }
  });
}