// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'r' to 'chatEventEmitter'
// - Resolved require(740942) to 'chat-event-emitter'
// - Renamed variable 'u' to 'chatAppearanceConfig'
// - Resolved require(278549) to 'chat-appearance-config'
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'v' to 'chatEmitter' (module 740942)
// - Updated imported property 'd' to 'appearanceConfig' (module 278549)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 493141
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  let o = e => {
    chatStoreManager.getStore("chatGuidanceStore").setState({
      appear: e
    });
  };
  let s = e => {
    chatStoreManager.getStore("chatGuidanceStore").setState({
      skillGuidancePageFrom: e
    });
  };
  let l = e => {
    chatStoreManager.getStore("chatGuidanceStore").setState({
      sidebarSkills: e == null ? undefined : e.sidebarSkills,
      onboardingSkills: e == null ? undefined : e.onboardingSkills
    });
  };
  let a = e => {
    chatStoreManager.getStore("chatGuidanceStore").setState({
      skillConfig: e == null ? undefined : e.onboarding_skills
    });
  };
  let c = e => {
    chatStoreManager.getStore("chatGuidanceStore").setState({
      sidebarSkills: e
    });
  };
  var chatAppearanceConfig = require("chat-appearance-config") /*id: 278549*/;
  function d(e, t, n) {
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
  class p {
    initEventBinding() {
      chatEventEmitter.chatEmitter.on("chat.service.resetAll", this.resetStore);
    }
    unbindEvent() {
      chatEventEmitter.chatEmitter.off("chat.service.resetAll", this.resetStore);
    }
    constructor() {
      d(this, "setAppear", o);
      d(this, "setSkillGuidancePageFrom", s);
      d(this, "processSkillList", l);
      d(this, "processSamanthaSkills", a);
      d(this, "setSidebarSkills", c);
      d(this, "resetStore", () => {
        chatStoreManager.getStore("chatGuidanceStore").setState(chatAppearanceConfig.appearanceConfig);
      });
      d(this, "destroy", () => {
        this.unbindEvent();
      });
      this.initEventBinding();
    }
  }
  require.r(exports);
  require.d(exports, {
    ChatGuidanceService: function () {
      return p;
    }
  });
}