// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'shuffleUtil'
// - Resolved require(341643) to 'shuffle-util'
// - Renamed variable 's' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'crowdTestMessageGroupHook'
// - Resolved require(93246) to 'crowd-test-message-group-hook'
// - Renamed variable 'c' to 'brandNameConstants'
// - Resolved require(63170) to 'brand-name-constants'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'f' to 'semiInputComponent'
// - Resolved require(410861) to 'semi-input-component'
// - Renamed variable '_' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'C' to 'chatMessageBottomSymbol'
// - Resolved require(657258) to 'chat-message-bottom-symbol'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'p' to 'useCrowdTestMessageGroup' (module 93246)
// - Updated imported property 'Z' to 'shuffle' (module 341643)
// - Updated imported property 'pJ' to 'toastInstance' (module 697541)
// - Updated imported property 'E7' to 'roleType' (module 292449)
// - Updated imported property 'fz' to 'getBrandName' (module 63170)
// - Updated imported property 'Z' to 'InputComponent' (module 410861)
// - Updated imported property 'J' to 'messageBottomSymbol' (module 657258)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-group.90ca15b6.js
         * chunkId: 97027
         * moduleId: 847559
         */
module.exports = function (module, exports, require) {
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var shuffleUtil = require("shuffle-util") /*id: 341643*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var crowdTestMessageGroupHook = require("crowd-test-message-group-hook") /*id: 93246*/;
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  (i = {})[i.Default = 0] = "Default";
  i[i.Like = 1] = "Like";
  i[i.Unlike = 2] = "Unlike";
  i[i.Better = 3] = "Better";
  i[i.Almost = 4] = "Almost";
  i[i.BothBad = 5] = "BothBad";
  i[i.Form = 6] = "Form";
  let h = i;
  var semiInputComponent = require("semi-input-component") /*id: 410861*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var m = {
    "feedback-bar": "feedback-bar-omyQGZ",
    feedbackBar: "feedback-bar-omyQGZ",
    title: "title-FiQbe6",
    subtitle: "subtitle-rn6zAF",
    "btn-group": "btn-group-MrtU0W",
    btnGroup: "btn-group-MrtU0W",
    btn: "btn-Vqtsx3",
    active: "active-EUEPW8",
    "submit-btn": "submit-btn-PpkySZ",
    submitBtn: "submit-btn-PpkySZ",
    "edit-box": "edit-box-q63neE",
    editBox: "edit-box-q63neE",
    "feedback-bar-done": "feedback-bar-done-_Rnfvw",
    feedbackBarDone: "feedback-bar-done-_Rnfvw",
    "icon-color": "icon-color-VdLKi9",
    iconColor: "icon-color-VdLKi9"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = {
    common: ["publicTest_card_option_poorContent", "publicTest_card_option_misunderstand", "publicTest_card_option_inaccurate", "publicTest_card_option_longContent"],
    writing: ["publicTest_card_option_uncreative", "publicTest_card_option_impratical", "publicTest_card_option_poorFormat", "publicTest_card_option_longContent", "publicTest_card_option_notDetail", "publicTest_card_option_personalPref"],
    browsing: ["publicTest_card_option_vague", "publicTest_card_option_hard2Understand", "publicTest_card_option_misunderstand", "publicTest_card_option_inaccurate", "publicTest_card_option_longContent"]
  };
  let v = e => {
    let {
      className: t,
      text: n,
      onClick: i,
      children: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("button", {
      type: "button",
      className: o(t, m.btn),
      onClick: i,
      children: r ?? n
    });
  };
  var y = e => {
    let {
      conversationId: t,
      message: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let {
      displayStreamIndex: s,
      feedbackStreamIndex: y,
      feedbackType: C,
      customReason: S,
      feedbackDone: E,
      isAllFinished: T,
      messageGroups: O,
      updateBlockState: w,
      submitFeedback: x,
      updateMessageStatus: P,
      isWriting: I,
      isBrowsing: A
    } = crowdTestMessageGroupHook.useCrowdTestMessageGroup({
      conversationId: t,
      message: n
    });
    let k = b[A ? "browsing" : I ? "writing" : "common"];
    let N = reactCoreLibraryReexport.useMemo(() => [...shuffleUtil.shuffle(k), "publicTest_card_option_other"], [k]);
    let [R, L] = reactCoreLibraryReexport.useState(!!S);
    let [M, j] = reactCoreLibraryReexport.useState("");
    let D = reactCoreLibraryReexport.useRef(0);
    let Z = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      D.current = Date.now();
      return () => {
        if (Z.current) {
          clearTimeout(Z.current);
        }
      };
    }, []);
    let F = reactCoreLibraryReexport.useCallback(e => {
      w({
        customReason: e
      });
      if (Z.current) {
        clearTimeout(Z.current);
      }
    }, [w]);
    let U = e => {
      j(e);
      L(true);
      if (Z.current) {
        clearTimeout(Z.current);
      }
      if (!S) {
        Z.current = setTimeout(() => $(), 15000);
      }
    };
    let $ = reactCoreLibraryReexport.useCallback(async function (e) {
      var n;
      let a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : C;
      samanthaToastFactory.toastInstance.success(i("selectText_thankFeedback"));
      w({
        feedbackDone: true
      });
      try {
        await x({
          feedbackSource: messagingConstants.roleType.User,
          feedbackType: a,
          mainReason: M,
          customReason: S
        });
      } catch (e) {}
      teaAnalyticsEventTracker.trackEvent("crowdsource_test_feedback_click", {
        message_id: (n = O[y ?? s ?? 0]) === null || n === undefined ? undefined : n[0]?.message_id,
        duration: D.current ? (Date.now() - D.current) / 1000 : 0,
        button_name: a === h.Almost ? i("seed_public_testing_information_tie") : e ?? i("publicTest_card_option_other")
      });
      setTimeout(() => {
        P(y);
      }, 1000);
    }, [S, w, P, y]);
    let B = reactCoreLibraryReexport.useCallback((e, t) => {
      w({
        feedbackType: e,
        feedbackStreamIndex: t
      });
      Z.current = setTimeout(() => $("", e), 15000);
    }, [n]);
    let K = reactCoreLibraryReexport.useMemo(() => C ? C === h.BothBad ? i("publicTest_card_question_bothNotGood") : i("publicTest_card_question_compare", {
      s_answerBad: C === h.Better ? y === 0 ? i("publicTest_card_question_answer2") : i("publicTest_card_question_answer1") : "",
      s_answerGood: C === h.Better ? y === 0 ? i("publicTest_card_question_answer1") : i("publicTest_card_question_answer2") : ""
    }) : i("publicTest_card_header", {
      brandName: brandNameConstants.getBrandName()
    }), [C, y]);
    if (T) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: !E && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: o(m["feedback-bar"], "mt-20"),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: o(m.title),
              children: K
            })
          }), !C && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: o(m["btn-group"]),
            children: [reactJsxRuntimeCoreReexport.jsx(v, {
              onClick: () => B(h.Better, 0),
              children: i("seed_public_testing_information_answer_1")
            }), reactJsxRuntimeCoreReexport.jsx(v, {
              onClick: () => B(h.Better, 1),
              children: i("seed_public_testing_information_answer_2")
            }), reactJsxRuntimeCoreReexport.jsx(v, {
              onClick: () => {
                $("", h.Almost);
              },
              children: i("seed_public_testing_information_tie")
            }), reactJsxRuntimeCoreReexport.jsx(v, {
              onClick: () => {
                B(h.BothBad);
              },
              children: i("seed_public_testing_information_both_bad")
            })]
          }), C && reactJsxRuntimeCoreReexport.jsx("div", {
            className: o(m["btn-group"]),
            children: N.map(e => {
              let t = i(e);
              return reactJsxRuntimeCoreReexport.jsx(v, {
                className: o({
                  [m.active]: t === M
                }),
                onClick: () => U(t),
                children: t
              }, t);
            })
          }), R && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: o(m["edit-box"]),
            children: [reactJsxRuntimeCoreReexport.jsx(semiInputComponent.InputComponent, {
              className: o(m.textarea),
              placeholder: i("publicTest_card_inputBox_placeholder"),
              value: S,
              onChange: F,
              size: "small",
              maxLength: 200
            }), reactJsxRuntimeCoreReexport.jsx("button", {
              className: o(m["submit-btn"]),
              onClick: () => $(),
              children: i("publicTest_card_btn_submit")
            })]
          })]
        })
      });
    } else {
      return null;
    }
  };
  var chatMessageBottomSymbol = require("chat-message-bottom-symbol") /*id: 657258*/;
  function S(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class E {
    constructor() {
      S(this, "pluginIdentifier", chatMessageBottomSymbol.messageBottomSymbol);
      S(this, "Content", y);
    }
  }
  require.r(exports);
  require.d(exports, {
    CrowdTestMessageBottomPlugin: function () {
      return E;
    }
  });
}