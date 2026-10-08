// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Xx' to 'checkLogin'
// - Renamed export 'jQ' to 'initService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 317959
         */
module.exports = function (module, exports, require) {
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  function r(e, t, n) {
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
  class o {
    login(e) {
      if (!this.passinLogin) {
        throw Error("FlowAccountService login is undefined");
      }
      let {
        from: t,
        state: n,
        trackMeta: r,
        onSuccess: o,
        onFailed: a,
        onCancel: s
      } = e;
      let l = e => {
        if (a != null) {
          a(e);
        }
      };
      try {
        this.passinLogin({
          ...e,
          onSuccess: e => {
            let {
              userInfo: t
            } = e;
            chatUserInfoActions.setUserInfo(t);
            if (o != null) {
              o(e);
            }
          },
          onFailed: l,
          onCancel: e => {
            if (s != null) {
              s(e);
            }
          }
        });
      } catch (e) {
        l({
          from: t,
          state: n,
          trackMeta: r,
          error: e instanceof Error ? e : Error(String(e)),
          type: "123",
          code: "code",
          message: "message"
        });
      }
    }
    logout(e) {
      if (!this.passinLogout) {
        throw Error("FlowAccountService logout is undefined");
      }
      let {
        from: t,
        state: n,
        trackMeta: i,
        onSuccess: r,
        onFailed: o
      } = e;
      let a = e => {
        if (o != null) {
          o(e);
        }
      };
      try {
        this.passinLogout({
          ...e,
          onSuccess: e => {
            if (r != null) {
              r(e);
            }
          },
          onFailed: a
        });
      } catch (e) {
        a({
          from: t,
          state: n,
          trackMeta: i,
          error: e instanceof Error ? e : Error(String(e)),
          code: "code",
          message: "message"
        });
      }
    }
    checkLogin(e) {
      if (!this.passinCheckLogin) {
        throw Error("FlowAccountService checkLogin is undefined");
      }
      let {
        onLogin: t,
        onUnlogin: n,
        onError: r
      } = e;
      try {
        this.passinCheckLogin({
          ...e,
          onLogin: e => {
            chatUserInfoActions.setUserInfo(e);
            if (t != null) {
              t(e);
            }
          },
          onUnlogin: () => {
            chatUserInfoActions.markUserInfoLoaded();
            if (n != null) {
              n();
            }
          }
        });
      } catch (e) {
        if (r) {
          chatUserInfoActions.markUserInfoLoaded();
          r(e instanceof Error ? e : Error(String(e)));
        } else {
          throw e;
        }
      }
    }
    constructor({
      login: e,
      logout: t,
      checkLogin: n
    }) {
      r(this, "passinLogin", undefined);
      r(this, "passinLogout", undefined);
      r(this, "passinCheckLogin", undefined);
      this.passinLogin = e ?? null;
      this.passinLogout = t ?? null;
      this.passinCheckLogin = n ?? null;
    }
  }
  let a = null;
  let s = null;
  let l = () => {
    if (!a) {
      if (!s) {
        throw Error("FlowAccountService is not initialized.");
      }
      a = new o(s);
    }
    return a;
  };
  let c = e => {
    s ||= e;
  };
  let d = e => {
    l().checkLogin(e);
  };
  require.d(exports, {
    checkLogin: function () {
      return d;
    },
    initService: function () {
      return c;
    }
  });
}