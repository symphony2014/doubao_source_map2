// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'useAudioPlayer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: music-skill-guidance-page.fa791232.js
         * chunkId: 16408
         * moduleId: 75716
         */
module.exports = function (module, exports, require) {
  let n;
  let l;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var playButtonComponent = require("play-button-component") /*id: 959765*/;
  var videoPlayerModuleLoader = require("video-player-module-loader") /*id: 914809*/;
  let u = e => {
    let {
      audioUrl: t,
      playerOptions: r,
      playerInstance: u,
      contentUniquekey: s
    } = e;
    let d = reactCoreLibraryReexport.useRef({
      initial: false,
      audioUrl: t || "",
      Player: u || null,
      playerOptions: r || {},
      contentUniquekey: s || Symbol("playingContentUniqueKey"),
      contentLoading: false
    });
    let [p, f] = reactCoreLibraryReexport.useState(playButtonComponent.PlaybackStatus.Initial);
    let [v, m] = reactCoreLibraryReexport.useState(0);
    let [y, h] = reactCoreLibraryReexport.useState(0);
    let [g, w] = reactCoreLibraryReexport.useState(false);
    d.current.audioUrl = t || d.current.audioUrl;
    d.current.playerOptions = r || d.current.playerOptions;
    d.current.Player = u || d.current.Player;
    d.current.contentUniquekey = s || d.current.contentUniquekey;
    let b = () => {
      let {
        Player: e,
        contentUniquekey: t
      } = d.current;
      return (e == null ? undefined : e.playingContentUniqueKey) === t;
    };
    let k = () => {
      let {
        Player: e,
        initial: t
      } = d.current;
      if (e && !t) {
        d.current.initial = true;
        e.on(n.LOAD_START, () => {
          if (b()) {
            w(true);
          }
        });
        e.on(n.LOADED_DATA, () => {
          if (b()) {
            w(false);
          }
        });
        e.on(n.PLAY, () => {
          f(b() ? playButtonComponent.PlaybackStatus.Playing : playButtonComponent.PlaybackStatus.Paused);
        });
        e.on(n.TIME_UPDATE, function (e = {}) {
          if (b() && e.duration) {
            R(e);
          }
        });
        e.on(n.PAUSE, () => {
          if (b()) {
            f(playButtonComponent.PlaybackStatus.Paused);
          }
        });
        e.on(n.ENDED, () => {
          if (b()) {
            m(0);
          }
        });
        e.on(n.ERROR, e => {
          if (b()) {
            w(false);
            f(playButtonComponent.PlaybackStatus.Paused);
          }
        });
      }
    };
    let R = e => {
      let t = Math.floor(e.duration * 1000);
      let r = Math.floor(e.currentTime * 1000);
      h(t);
      m(r);
      f(e.paused ? playButtonComponent.PlaybackStatus.Paused : playButtonComponent.PlaybackStatus.Playing);
    };
    let A = e => {
      d.current.audioUrl = e;
    };
    let x = () => {
      if (!l) {
        videoPlayerModuleLoader.loadVideoPlayer().then(e => {
          l = e.BaseXgPlayer;
          n = e.Events;
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      x();
    }, [l]);
    return {
      Player: d.current.Player,
      audioUrl: d.current.audioUrl,
      initial: d.current.initial,
      currentTime: v,
      duration: y,
      playerState: p,
      contentLoading: g,
      onTriggerPause: () => {
        let {
          Player: e
        } = d.current;
        if (e != null) {
          e.pause();
        }
        f(playButtonComponent.PlaybackStatus.Paused);
      },
      onTriggerPlay: function (e = {}) {
        if (!d.current.Player) {
          if (!d.current.playerOptions || !l) {
            return;
          }
          d.current.Player = new l(d.current.playerOptions);
        }
        let {
          Player: t,
          contentUniquekey: r
        } = d.current;
        let n = (e == null ? undefined : e.url) || d.current.audioUrl;
        if (!n) {
          return;
        }
        A(n);
        let i = Math.floor((isNumberUtil.isNumber(e == null ? undefined : e.startTime) ? e == null ? undefined : e.startTime : v) / 1000);
        switch (true) {
          case b() && t.url !== n:
            t.playNext({
              url: n,
              autoplay: true,
              startTime: i
            });
            break;
          case b() && t.url === n:
            t.seek(i);
            break;
          default:
            t.pause();
            t.playingContentUniqueKey = r;
            t.playNext({
              url: n,
              autoplay: true,
              startTime: i
            });
        }
        k();
      },
      onUpdatePlayerInstance: e => {
        if (!d.current.Player) {
          d.current.Player = e;
          e.playingContentUniqueKey = d.current.contentUniquekey;
          k();
        }
      },
      onUpdateCurrentTime: e => {
        m(e);
        if (p === playButtonComponent.PlaybackStatus.Playing && e !== v) {
          var t;
          if ((t = d.current.Player) !== null && t !== undefined) {
            t.seek(e / 1000);
          }
        }
      },
      onUpdateAudioUrl: A
    };
  };
  require.d(exports, {
    useAudioPlayer: function () {
      return u;
    }
  });
}