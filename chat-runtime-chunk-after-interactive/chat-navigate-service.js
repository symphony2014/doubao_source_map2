// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 277230
         */
module.exports = function (module, exports, require) {
  function i(e, t, n) {
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
  class r {
    constructor() {
      i(this, "navigate", undefined);
      i(this, "login", undefined);
      i(this, "init", (e, t) => {
        this.navigate = e;
        this.login = t;
      });
      i(this, "navigateToChatGuidancePage", () => {
        var e;
        if ((e = this.navigate) !== null && e !== undefined) {
          e.call(this, "/chat/");
        }
      });
      i(this, "navigateToChatDetailPage", e => {
        var t;
        var n;
        let {
          conversationId: i,
          replace: r
        } = e;
        if (typeof location != "undefined" && location.pathname === "/chat/url-action") {
          let e = new URLSearchParams(location.search);
          e.delete("action");
          if ((n = this.navigate) === null || n === undefined) {
            return undefined;
          } else {
            return n.call(this, `/chat/${i}?${e.toString()}`, {
              replace: r
            });
          }
        }
        if ((t = this.navigate) !== null && t !== undefined) {
          t.call(this, `/chat/${i}`, {
            replace: r
          });
        }
      });
      i(this, "navigateToCollectionPage", e => {
        var t;
        if ((t = this.navigate) !== null && t !== undefined) {
          t.call(this, e);
        }
      });
      i(this, "navigateToLoginPage", (e, t) => {
        var n;
        if ((n = this.login) !== null && n !== undefined) {
          n.call(this, e, t);
        }
      });
      i(this, "navigateToThreadListPage", () => {
        var e;
        if ((e = this.navigate) !== null && e !== undefined) {
          e.call(this, "/chat/thread/list");
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ChatNavigateService: function () {
      return r;
    }
  });
}