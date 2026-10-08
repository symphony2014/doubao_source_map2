// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'MusicLyricsEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59170.744060e8.js
         * chunkId: 59170
         * moduleId: 720526
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var htmlEscapeUtil = require("html-escape-util") /*id: 367013*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var smartTextareaWithFormFieldWrapper = require("smart-textarea-with-form-field-wrapper") /*id: 126704*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var h = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("rect", {
      width: 4,
      height: 4,
      x: 4,
      y: 10,
      fill: "#0057FF",
      rx: 2
    }), reactJsxRuntimeCoreReexport.jsx("rect", {
      width: 4,
      height: 4,
      x: 13,
      y: 5,
      fill: "#0057FF",
      rx: 2
    }), reactJsxRuntimeCoreReexport.jsx("rect", {
      width: 4,
      height: 4,
      x: 16,
      y: 10,
      fill: "#0057FF",
      rx: 2
    }), reactJsxRuntimeCoreReexport.jsx("rect", {
      width: 4,
      height: 4,
      x: 13,
      y: 15,
      fill: "#0057FF",
      rx: 2
    }), reactJsxRuntimeCoreReexport.jsx("rect", {
      width: 4,
      height: 4,
      x: 7,
      y: 15,
      fill: "#0057FF",
      rx: 2
    }), reactJsxRuntimeCoreReexport.jsx("rect", {
      width: 4,
      height: 4,
      x: 7,
      y: 5,
      fill: "#0057FF",
      rx: 2
    })]
  }), {}));
  var wrenchToolIcon = require("wrench-tool-icon") /*id: 457145*/;
  var useMusicSkillEventTracker = require("use-music-skill-event-tracker") /*id: 296506*/;
  var musicLyricsModalWrapper = require("music-lyrics-modal-wrapper") /*id: 84330*/;
  let y = e => {
    let {
      lyric: t,
      genre: r,
      mood: i,
      visible: d,
      setInvisible: f,
      onClickOK: h
    } = e;
    let g = i18nTranslationUtils.useTranslationWithFallback();
    let [y, w] = reactCoreLibraryReexport.useState("");
    let [k, x] = reactCoreLibraryReexport.useState(false);
    let S = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId || "";
    });
    let {
      sendTeaEvent: T
    } = useMusicSkillEventTracker.useMusicTeaEvent({
      conversation_id: S,
      message_id: ""
    });
    let R = k || y.trim().length < 20 || y.trim().length > 200;
    reactCoreLibraryReexport.useEffect(() => {
      w(t);
    }, [t, d]);
    return reactJsxRuntimeCoreReexport.jsx(musicLyricsModalWrapper.MusicLyricsModal, {
      className: l("lyric-modal-k1g4CH"),
      visible: d,
      onCancel: f,
      footer: reactJsxRuntimeCoreReexport.jsx(b, {
        length: y.trim().length,
        maxCount: 200,
        onClickOK: () => h(htmlEscapeUtil.escapeHtml(y.trim())),
        onClickGenerate: e => {
          x(true);
          T("click_music_lyric_generation", {
            generation_method: e
          });
          apiServicesCollection.MessageApiService.GetBigMusicLyricsWeb({
            genre: r,
            mood: i,
            prompt: y.trim()
          }, {
            overrideConfig: {
              timeout: 30000
            }
          }).then(e => {
            if (e.code === 0) {
              var r;
              w(((r = e.data) === null || r === undefined ? undefined : r.lyrics_list?.[0]) || "");
            } else {
              semiToastNotification.toastInstance.error({
                content: e.msg
              });
            }
          }).catch(e => {
            semiToastNotification.toastInstance.error({
              content: (e == null ? undefined : e.errorOption?.message) || g("lyrics_generate_failed")
            });
          }).finally(() => {
            x(false);
          });
        },
        generating: k,
        isEmpty: !y.trim(),
        disabled: R
      }),
      children: reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
        value: y,
        className: l("lyric-textarea-IKvFwx", "w-430 h-320 overflow-y-scroll !p-0 !rounded-none !border-0\tflex flex-col"),
        autosize: true,
        maxCount: 200,
        onChange: w,
        placeholder: g("lyrics_generate_customize")
      })
    });
  };
  let b = e => {
    let {
      generating: t,
      isEmpty: r,
      disabled: n,
      maxCount: i,
      length: a,
      onClickOK: s,
      onClickGenerate: u
    } = e;
    let c = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l("footer-Scyf1a", "flex justify-between items-center"),
      children: [reactJsxRuntimeCoreReexport.jsxs("span", {
        className: "text-14 text-[var(--s-color-text-quaternary)]",
        children: [c("music_lyrics_word_limit", {
          postProcess: "sprintf",
          sprintf: [i]
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: `
            ${a > i ? "text-[var(--s-color-alert)]" : ""}
          `,
          children: a
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-center",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: l({
            "cursor-pointer hover:bg-[var(--s-color-bg-trans)]": !t,
            "cursor-not-allowed\t hover:bg-none": t
          }, "lyric-generate-aoZ49r"),
          onClick: () => u(r ? "randamize" : "optimize"),
          children: t ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx(h, {
              className: "mr-2 animate-spin"
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              children: c("lyrics_generating")
            })]
          }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx(wrenchToolIcon.WrenchToolIcon, {
              className: "mr-2 p-3"
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              children: c(r ? "lyrics_generate_random" : "lyrics_generate_optimize")
            })]
          })
        }), reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
          theme: "solid",
          type: "primary",
          className: "lyric-confirm-fEHE7z",
          onClick: s,
          disabled: n,
          children: c("music_lyrics_confirm")
        })]
      })]
    });
  };
  require.d(exports, {
    MusicLyricsEditor: function () {
      return y;
    }
  });
}