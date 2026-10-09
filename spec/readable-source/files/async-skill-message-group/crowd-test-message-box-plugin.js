// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'isNumberUtil'
// - Resolved require(897814) to 'is-number-util'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'crowdTestMessageGroupHook'
// - Resolved require(93246) to 'crowd-test-message-group-hook'
// - Renamed variable 'l' to 'aiChatEnumConstants'
// - Resolved require(458113) to 'ai-chat-enum-constants'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'd' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'u' to 'radioGroupComponent'
// - Resolved require(579832) to 'radio-group-component'
// - Renamed variable 'p' to 'radioComponentExport'
// - Resolved require(423497) to 'radio-component-export'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'b' to 'crowdTestBatchMessageBox'
// - Resolved require(97668) to 'crowd-test-batch-message-box'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'p' to 'useCrowdTestMessageGroup' (module 93246)
// - Updated imported property 'Z' to 'RadioGroup' (module 579832)
// - Updated imported property 'ZP' to 'RadioComponent' (module 423497)
// - Updated imported property 'Z' to 'isNumber' (module 897814)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'zo' to 'skillTypes' (module 458113)
// - Updated imported property 'v' to 'crowdTestBatchKey' (module 97668)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-group.90ca15b6.js
         * chunkId: 97027
         * moduleId: 605278
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var crowdTestMessageGroupHook = require("crowd-test-message-group-hook") /*id: 93246*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var radioGroupComponent = require("radio-group-component") /*id: 579832*/;
  var radioComponentExport = require("radio-component-export") /*id: 423497*/;
  var h = {
    tabs: "tabs-VStO96"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      conversationId: t,
      message: n,
      ReceiveMessageBox: r
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    let l = reactCoreLibraryReexport.useRef(null);
    let {
      replyId: d,
      displayStreamIndex: _,
      messageGroups: m,
      updateBlockState: g
    } = crowdTestMessageGroupHook.useCrowdTestMessageGroup({
      conversationId: t,
      message: n
    });
    let b = reactCoreLibraryReexport.useCallback(e => {
      g({
        displayStreamIndex: e
      });
    }, [g]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: s(h.tabs),
        ref: l,
        children: reactJsxRuntimeCoreReexport.jsx(radioGroupComponent.RadioGroup, {
          type: "button",
          buttonSize: "middle",
          defaultValue: 0,
          onChange: e => b(e.target.value),
          className: h.crowdRadio,
          children: [0, 1].map((e, t) => reactJsxRuntimeCoreReexport.jsx(radioComponentExport.RadioComponent, {
            value: t,
            children: t === 0 ? a("publicTest_card_question_answer1") : a("publicTest_card_question_answer2")
          }))
        })
      }), m.map((e, t) => _ === t && e.map(e => e ? reactJsxRuntimeCoreReexport.jsx(r, {
        message: e,
        scene: "group"
      }, `crowd-test-message-box-${d}-${e.message_id}`) : null))]
    });
  };
  var m = {
    "crowd-test-container": "crowd-test-container-JZm9ji",
    "side-by-side-container": "side-by-side-container-ZmjiRv",
    "crowd-test-message-wrapper": "crowd-test-message-wrapper-a6_aZC",
    "side-by-side-header": "side-by-side-header-IGj_XQ"
  };
  var g = e => {
    var a;
    var u;
    let {
      conversationId: p,
      message: h,
      ReceiveMessageBox: g
    } = e;
    let b = i18nTranslationUtils.useTranslationWithFallback();
    let v = reactCoreLibraryReexport.useRef(null);
    let {
      replyId: y,
      messageGroups: C,
      isWriting: S
    } = crowdTestMessageGroupHook.useCrowdTestMessageGroup({
      conversationId: p,
      message: h
    });
    let E = reactCoreLibraryReexport.useMemo(() => {
      if (h.ext?.crowd_test_message_group_selected) {
        return Number(h.ext?.crowd_test_message_group_selected);
      } else {
        return undefined;
      }
    }, [h.ext?.crowd_test_message_group_selected]);
    if (isNumberUtil.isNumber(E)) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: C[E].map(e => e ? reactJsxRuntimeCoreReexport.jsx(g, {
          message: e,
          scene: "box"
        }, e.message_id) : null)
      });
    }
    let T = safeJsonUtils.safeParse(h == null ? undefined : (u = h.sub_message_group) === null || u === undefined ? undefined : (a = u.messages[0]) === null || a === undefined ? undefined : a.ext?.chat_ability, {});
    let O = (T == null ? undefined : T.ability_type) === aiChatEnumConstants.skillTypes.SkillWrite || S;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: v,
      "data-table-spillover-force-disable": "true",
      children: O ? reactJsxRuntimeCoreReexport.jsx(_, {
        conversationId: p,
        message: h,
        ReceiveMessageBox: g
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        className: s(m["crowd-test-container"], "side-by-side-messages"),
        children: C.map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s(m["side-by-side-container"]),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: s(m["side-by-side-header"]),
            children: t === 0 ? b("publicTest_card_question_answer1") : b("publicTest_card_question_answer2")
          }), e.map(e => e ? reactJsxRuntimeCoreReexport.jsx("div", {
            className: s(m["crowd-test-message-wrapper"]),
            children: reactJsxRuntimeCoreReexport.jsx(g, {
              message: e,
              scene: "group"
            }, `crowd-test-message-box-${y}-${e.message_id}`)
          }) : null)]
        }))
      })
    });
  };
  var crowdTestBatchMessageBox = require("crowd-test-batch-message-box") /*id: 97668*/;
  function v(e, t, n) {
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
  class y {
    constructor() {
      v(this, "pluginIdentifier", crowdTestBatchMessageBox.crowdTestBatchKey);
      v(this, "Content", g);
    }
  }
  require.r(exports);
  require.d(exports, {
    CrowdTestMessageBoxPlugin: function () {
      return y;
    }
  });
}