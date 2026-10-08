// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MJ' to 'useMessageCopyHandler'
// - Renamed export 'Rn' to 'handleClipboardCopy'
// - Renamed export 'Ss' to 'findMessageElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58948.b1d5109e.js
         * chunkId: 58948
         * moduleId: 541976
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let c = e => e ? document.querySelector(`[data-message-id="${e}"]`) : null;
  let d = ["color", "font", "font-size", "font-weight", "line-height", "text-align", "white-space", "display", "flex", "flex-direction", "justify-content", "align-items", "padding", "margin", "background", "background-color", "border", "border-width", "border-style", "border-color"];
  let u = [{
    type: "data-plugin-identifier",
    value: ["block_type:10030"]
  }, {
    type: "data-foundation-type",
    value: ["send-message-action-bar", "receive-message-action-bar", "receive-message-suggest-foundation"]
  }];
  let h = e => {
    var t;
    var n;
    var i;
    if (!e.clipboardData) {
      return;
    }
    let r = window.getSelection();
    if (!r || r.rangeCount === 0) {
      return;
    }
    let o = r.getRangeAt(0);
    let a = document.createElement("div");
    a.appendChild(o.cloneContents());
    for (let e of u) {
      for (let n of e.value) {
        for (let i of a.querySelectorAll(`[${e.type}*="${n}"]`)) {
          if ((t = i.parentNode) !== null && t !== undefined) {
            t.removeChild(i);
          }
        }
      }
    }
    try {
      if ((n = document.getElementById("root")) !== null && n !== undefined) {
        n.appendChild(a);
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        error: e
      });
    }
    (function (e) {
      e.querySelectorAll("*").forEach(e => {
        let t = [];
        let n = window.getComputedStyle(e);
        for (let e of d) {
          let i = n.getPropertyValue(e);
          if (i) {
            if (e.startsWith("border") && n.getPropertyValue("border-width") === "0px") {
              continue;
            }
            t.push(`${e}: ${i};`);
          }
        }
        if (t.length) {
          e.setAttribute("style", t.join(" "));
        }
        e.removeAttribute("id");
        e.removeAttribute("class");
        Array.from(e.attributes).forEach(t => {
          if (t.name.startsWith("data-")) {
            e.removeAttribute(t.name);
          }
        });
      });
    })(a);
    e.preventDefault();
    e.clipboardData.setData("text/plain", r.toString());
    e.clipboardData.setData("text/html", a.innerHTML);
    try {
      if ((i = document.getElementById("root")) !== null && i !== undefined) {
        i.removeChild(a);
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        error: e
      });
    }
  };
  let p = e => {
    var t;
    var n;
    var i;
    var r;
    let {
      messageId: p,
      message: m,
      extraParams: f,
      canvasTeaParams: g
    } = e;
    let v = (n = document) === null || n === undefined ? undefined : (t = n.getSelection()) === null || t === undefined ? undefined : t.toString().trim().replace(/\s+$/, "");
    let A = c(p);
    if (v) {
      let e = (A == null ? undefined : (r = A.innerText) === null || r === undefined ? undefined : (i = r.replace(/\r?\n/g, "")) === null || i === undefined ? undefined : i.indexOf(v.replace(/\r?\n/g, ""))) || 0;
      let t = (A == null ? undefined : A.querySelector("[data-testid=\"code_block\"]")) !== null;
      let n = e + v.length;
      let c = [...((A == null ? undefined : A.querySelectorAll("[data-render-engine=\"block\"]")) ?? []), ...((A == null ? undefined : A.querySelectorAll("[data-render-engine=\"node\"]")) ?? [])].every(e => {
        var t;
        var n;
        return ((n = e.innerText) === null || n === undefined ? undefined : (t = n.replace(/\r?\n/g, "")) === null || t === undefined ? undefined : t.indexOf(v.replace(/\r?\n/g, ""))) === -1;
      });
      if (e !== -1 && n > 0) {
        let {
          conversation: i
        } = chatSkillPinTypeDeterminer.getConversationBotInfo(m.conversation_id);
        teaAnalyticsEventTracker.trackEvent("right_click_copy", {
          message_id: m.message_id,
          bot_id: m.bot_id,
          conversation_id: m.conversation_id,
          start_index: String(e),
          end_index: String(n),
          is_image: "0",
          skill_id: m == null ? undefined : m.skill?.skill_id_no_default,
          content_type: "text",
          click_from: t ? "code" : "answer",
          copy_content_type: "message",
          copy_type: "partial",
          tenant_id: (i == null ? undefined : i.tenant_id) || "0",
          llm_intention: (m == null ? undefined : m.ext?.llm_intention) || "",
          llm_intention_detail: (m == null ? undefined : m.ext?.llm_intention_detail) || "",
          is_multi_block: c,
          ...f,
          ...g
        });
      }
    }
  };
  let m = e => {
    let {
      messageId: t,
      message: n,
      extraParams: o
    } = e;
    let a = c(t);
    let l = useLatestCallbackHook_1.useLatestCallback(async e => {
      let i = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      p({
        messageId: t,
        message: n,
        extraParams: o,
        canvasTeaParams: i == null ? undefined : i.getCanvasTeaParams()
      });
      h(e);
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (a) {
        a.oncopy = l;
      }
    }, [a, l]);
  };
  require.d(exports, {
    useMessageCopyHandler: function () {
      return m;
    },
    handleClipboardCopy: function () {
      return h;
    },
    findMessageElement: function () {
      return c;
    }
  });
}