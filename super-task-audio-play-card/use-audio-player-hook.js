// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'useAudioPlayer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 884748
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var videoPlayerCoreClass = require("video-player-core-class") /*id: 741933*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  let a = e => {
    let {
      defaultSpeed: a = 1,
      defaultVolume: u = 0.5
    } = e;
    let c = reactCoreLibraryReexport.useRef();
    let l = reactCoreLibraryReexport.useRef();
    let [s, d] = reactCoreLibraryReexport.useState(0);
    let [f, p] = reactCoreLibraryReexport.useState(0);
    let [h, v] = reactCoreLibraryReexport.useState(u);
    let [m, g] = reactCoreLibraryReexport.useState(a);
    let [y, x] = reactCoreLibraryReexport.useState("pause");
    let [b, w] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => () => {
      var e;
      if ((e = c.current) !== null && e !== undefined) {
        e.destroy();
      }
    }, []);
    return {
      handlePlayAudio: function ({
        url: e
      } = {}) {
        if (!c.current) {
          return;
        }
        let t = c.current;
        if (e) {
          d(0);
          t.playNext({
            url: e,
            autoplay: true,
            startTime: 0
          });
        } else {
          t.play();
        }
      },
      handlePauseAudio: () => {
        if (c.current) {
          c.current.pause();
        }
      },
      handleChangePlayTime: e => {
        if (c.current) {
          c.current.seek(e);
        }
      },
      handleChangeVolume: e => {
        if (c.current) {
          c.current.volume = e;
        }
      },
      currentVolume: h,
      currentSpeed: m,
      currentTime: s,
      handleChangeSpeed: e => {
        if (c.current) {
          c.current.playbackRate = e;
          g(e);
        }
      },
      playStatus: y,
      duration: c.current?.duration ? Math.floor(c.current?.duration) : undefined,
      handleInitPlayer: e => {
        let {
          url: t,
          id: n,
          autoPlay: r
        } = e;
        if (!c.current) {
          c.current = new videoPlayerCoreClass.Player({
            id: n,
            url: t,
            autoplay: r
          });
          let e = c.current;
          e.on(videoPlayerEventConstants.PLAY, () => {
            x("play");
          });
          e.on(videoPlayerEventConstants.PAUSE, () => {
            x("pause");
          });
          e.on(videoPlayerEventConstants.LOADED_DATA, e => {
            w((e == null ? undefined : e.duration) || 0);
          });
          e.on(videoPlayerEventConstants.TIME_UPDATE, e => {
            p(e.currentTime);
            let t = Math.floor(e.currentTime);
            if (t !== l.current) {
              d(t);
              l.current = t;
            }
          });
          e.on(videoPlayerEventConstants.VOLUME_CHANGE, e => {
            v(e.volume);
          });
        }
      },
      realtime: f,
      metaDataDuration: Math.floor(b)
    };
  };
  require.d(exports, {
    useAudioPlayer: function () {
      return a;
    }
  });
}