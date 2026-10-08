// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'useConvDisabled'
// - Renamed export 'Z' to 'useRateLimit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 688086
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  let a = e => {
    let t = reactCoreLibraryReexport.useRef();
    let n = () => {
      if (t.current) {
        clearTimeout(t.current);
        t.current = null;
      }
    };
    reactCoreLibraryReexport.useEffect(() => n, []);
    return {
      setExpired: i => {
        n();
        if (isUndefinedCheck.isUndefined(i)) {
          return;
        }
        let l = Math.max(i - Date.now(), 0);
        t.current = window.setTimeout(() => {
          e();
        }, l);
      },
      reset: n
    };
  };
  var setRateLimitConfig = require("set-rate-limit-config") /*id: 730897*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let d = () => {
    let {
      limitExpired: e,
      limitTips: t,
      isLimited: n
    } = chatMessageStoreFactory.createMessageStore(e => e.rateLimitConfig, deepEqualityUtil_1.isDeepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      r(e);
    }, [e]);
    let {
      setExpired: r
    } = a(() => {
      setRateLimitConfig.setRateLimitConfig({
        isLimited: false,
        limitExpired: undefined,
        limitTips: ""
      });
    });
    return {
      limitTips: t,
      isLimited: n
    };
  };
  let u = () => {
    let {
      conversationDisabledParams: e
    } = chatContextUtil.useChatContext({
      optionalProvider: true
    });
    let {
      isLimited: t,
      limitTips: n
    } = d();
    if (e == null ? undefined : e.isDisabled) {
      return {
        ...e
      };
    } else {
      return {
        disabledText: t ? n : undefined,
        isDisabled: !!t
      };
    }
  };
  require.d(exports, {
    useConvDisabled: function () {
      return u;
    },
    useRateLimit: function () {
      return d;
    }
  });
}