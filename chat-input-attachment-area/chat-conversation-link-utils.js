// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X0' to 'getFollowingLinks'
// - Renamed export 'eg' to 'buildThreadKey'
// - Renamed export 'r7' to 'matchThreadKey'
// - Renamed export 'yx' to 'getPreviousLinks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 709080
         */
module.exports = function (module, exports, require) {
  function i(e) {
    let {
      conversationLinks: t,
      botConversationIndex: n
    } = e;
    return t.slice(0, n);
  }
  function r(e) {
    let {
      conversationLinks: t,
      botConversationIndex: n
    } = e;
    return t.slice(n);
  }
  let o = function (e, t, n = "sub") {
    return `${n === "sub" ? "localThread_" : "localMainThread_"}${t || ""}_${e}`;
  };
  let a = function (e, t) {
    var n;
    var i;
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "sub";
    let o = r === "sub" ? "localThread_" : "localMainThread_";
    if (t) {
      if (e == null) {
        return undefined;
      } else if ((n = e.startsWith) === null || n === undefined) {
        return undefined;
      } else {
        return n.call(e, `${o}${t}_`);
      }
    } else if (e == null) {
      return undefined;
    } else if ((i = e.startsWith) === null || i === undefined) {
      return undefined;
    } else {
      return i.call(e, o);
    }
  };
  require.d(exports, {
    getFollowingLinks: function () {
      return r;
    },
    buildThreadKey: function () {
      return o;
    },
    matchThreadKey: function () {
      return a;
    },
    getPreviousLinks: function () {
      return i;
    }
  });
}