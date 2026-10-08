// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Am' to 'toast'
// - Renamed export 'x7' to 'Toaster'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17574.32d72dbf.js
         * chunkId: 17574
         * moduleId: 913343
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  let a = e => {
    switch (e) {
      case "success":
        return l;
      case "info":
        return d;
      case "warning":
        return c;
      case "error":
        return u;
      default:
        return null;
    }
  };
  let i = Array(12).fill(0);
  let s = ({
    visible: e,
    className: t
  }) => reactCoreLibraryReexport.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
  }, reactCoreLibraryReexport.createElement("div", {
    className: "sonner-spinner"
  }, i.map((e, t) => reactCoreLibraryReexport.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${t}`
  }))));
  let l = reactCoreLibraryReexport.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, reactCoreLibraryReexport.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  }));
  let c = reactCoreLibraryReexport.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, reactCoreLibraryReexport.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  }));
  let d = reactCoreLibraryReexport.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, reactCoreLibraryReexport.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  }));
  let u = reactCoreLibraryReexport.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, reactCoreLibraryReexport.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
  let p = reactCoreLibraryReexport.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, reactCoreLibraryReexport.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), reactCoreLibraryReexport.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
  let h = () => {
    let [e, t] = reactCoreLibraryReexport.useState(document.hidden);
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        t(document.hidden);
      };
      document.addEventListener("visibilitychange", e);
      return () => window.removeEventListener("visibilitychange", e);
    }, []);
    return e;
  };
  let f = 1;
  let m = new class {
    constructor() {
      this.subscribe = e => {
        this.subscribers.push(e);
        return () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        };
      };
      this.publish = e => {
        this.subscribers.forEach(t => t(e));
      };
      this.addToast = e => {
        this.publish(e);
        this.toasts = [...this.toasts, e];
      };
      this.create = e => {
        var t;
        let {
          message: n,
          ...o
        } = e;
        let r = typeof (e == null ? undefined : e.id) == "number" || ((t = e.id) == null ? undefined : t.length) > 0 ? e.id : f++;
        let a = this.toasts.find(e => e.id === r);
        let i = e.dismissible === undefined || e.dismissible;
        if (this.dismissedToasts.has(r)) {
          this.dismissedToasts.delete(r);
        }
        if (a) {
          this.toasts = this.toasts.map(t => t.id === r ? (this.publish({
            ...t,
            ...e,
            id: r,
            title: n
          }), {
            ...t,
            ...e,
            id: r,
            dismissible: i,
            title: n
          }) : t);
        } else {
          this.addToast({
            title: n,
            ...o,
            dismissible: i,
            id: r
          });
        }
        return r;
      };
      this.dismiss = e => {
        if (e) {
          this.dismissedToasts.add(e);
          requestAnimationFrame(() => this.subscribers.forEach(t => t({
            id: e,
            dismiss: true
          })));
        } else {
          this.toasts.forEach(e => {
            this.subscribers.forEach(t => t({
              id: e.id,
              dismiss: true
            }));
          });
        }
        return e;
      };
      this.message = (e, t) => this.create({
        ...t,
        message: e
      });
      this.error = (e, t) => this.create({
        ...t,
        message: e,
        type: "error"
      });
      this.success = (e, t) => this.create({
        ...t,
        type: "success",
        message: e
      });
      this.info = (e, t) => this.create({
        ...t,
        type: "info",
        message: e
      });
      this.warning = (e, t) => this.create({
        ...t,
        type: "warning",
        message: e
      });
      this.loading = (e, t) => this.create({
        ...t,
        type: "loading",
        message: e
      });
      this.promise = (e, t) => {
        let n;
        let r;
        if (!t) {
          return;
        }
        if (t.loading !== undefined) {
          r = this.create({
            ...t,
            promise: e,
            type: "loading",
            message: t.loading,
            description: typeof t.description != "function" ? t.description : undefined
          });
        }
        let a = Promise.resolve(e instanceof Function ? e() : e);
        let i = r !== undefined;
        let s = a.then(async e => {
          n = ["resolve", e];
          if (reactCoreLibraryReexport.isValidElement(e)) {
            i = false;
            this.create({
              id: r,
              type: "default",
              message: e
            });
          } else if (g(e) && !e.ok) {
            i = false;
            let n = typeof t.error == "function" ? await t.error(`HTTP error! status: ${e.status}`) : t.error;
            let a = typeof t.description == "function" ? await t.description(`HTTP error! status: ${e.status}`) : t.description;
            let s = typeof n != "object" || reactCoreLibraryReexport.isValidElement(n) ? {
              message: n
            } : n;
            this.create({
              id: r,
              type: "error",
              description: a,
              ...s
            });
          } else if (e instanceof Error) {
            i = false;
            let n = typeof t.error == "function" ? await t.error(e) : t.error;
            let a = typeof t.description == "function" ? await t.description(e) : t.description;
            let s = typeof n != "object" || reactCoreLibraryReexport.isValidElement(n) ? {
              message: n
            } : n;
            this.create({
              id: r,
              type: "error",
              description: a,
              ...s
            });
          } else if (t.success !== undefined) {
            i = false;
            let n = typeof t.success == "function" ? await t.success(e) : t.success;
            let a = typeof t.description == "function" ? await t.description(e) : t.description;
            let s = typeof n != "object" || reactCoreLibraryReexport.isValidElement(n) ? {
              message: n
            } : n;
            this.create({
              id: r,
              type: "success",
              description: a,
              ...s
            });
          }
        }).catch(async e => {
          n = ["reject", e];
          if (t.error !== undefined) {
            i = false;
            let n = typeof t.error == "function" ? await t.error(e) : t.error;
            let a = typeof t.description == "function" ? await t.description(e) : t.description;
            let s = typeof n != "object" || reactCoreLibraryReexport.isValidElement(n) ? {
              message: n
            } : n;
            this.create({
              id: r,
              type: "error",
              description: a,
              ...s
            });
          }
        }).finally(() => {
          if (i) {
            this.dismiss(r);
            r = undefined;
          }
          if (t.finally != null) {
            t.finally.call(t);
          }
        });
        let l = () => new Promise((e, t) => s.then(() => n[0] === "reject" ? t(n[1]) : e(n[1])).catch(t));
        if (typeof r != "string" && typeof r != "number") {
          return {
            unwrap: l
          };
        } else {
          return Object.assign(r, {
            unwrap: l
          });
        }
      };
      this.custom = (e, t) => {
        let n = (t == null ? undefined : t.id) || f++;
        this.create({
          jsx: e(n),
          id: n,
          ...t
        });
        return n;
      };
      this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id));
      this.subscribers = [];
      this.toasts = [];
      this.dismissedToasts = new Set();
    }
  }();
  let g = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number";
  let y = Object.assign((e, t) => {
    let n = (t == null ? undefined : t.id) || f++;
    m.addToast({
      title: e,
      ...t,
      id: n
    });
    return n;
  }, {
    success: m.success,
    info: m.info,
    warning: m.warning,
    error: m.error,
    custom: m.custom,
    message: m.message,
    promise: m.promise,
    dismiss: m.dismiss,
    loading: m.loading
  }, {
    getHistory: () => m.toasts,
    getToasts: () => m.getActiveToasts()
  });
  function v(e) {
    return e.label !== undefined;
  }
  function b(...e) {
    return e.filter(Boolean).join(" ");
  }
  (function (e) {
    if (!e || typeof document == "undefined") {
      return;
    }
    let t = document.head || document.getElementsByTagName("head")[0];
    let n = document.createElement("style");
    n.type = "text/css";
    t.appendChild(n);
    if (n.styleSheet) {
      n.styleSheet.cssText = e;
    } else {
      n.appendChild(document.createTextNode(e));
    }
  })("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
  let w = e => {
    var t;
    var n;
    var r;
    var i;
    var l;
    var c;
    var d;
    var u;
    var f;
    var y;
    var w;
    let {
      invert: E,
      toast: x,
      unstyled: O,
      interacting: C,
      setHeights: S,
      visibleToasts: T,
      heights: k,
      index: N,
      toasts: j,
      expanded: P,
      removeToast: R,
      defaultRichColors: D,
      closeButton: A,
      style: L,
      cancelButtonStyle: M,
      actionButtonStyle: I,
      className: Z = "",
      descriptionClassName: _ = "",
      duration: $,
      position: F,
      gap: B,
      expandByDefault: z,
      classNames: K,
      icons: W,
      closeButtonAriaLabel: U = "Close toast"
    } = e;
    let [H, G] = reactCoreLibraryReexport.useState(null);
    let [V, Y] = reactCoreLibraryReexport.useState(null);
    let [X, q] = reactCoreLibraryReexport.useState(false);
    let [J, Q] = reactCoreLibraryReexport.useState(false);
    let [ee, et] = reactCoreLibraryReexport.useState(false);
    let [en, eo] = reactCoreLibraryReexport.useState(false);
    let [er, ea] = reactCoreLibraryReexport.useState(false);
    let [ei, es] = reactCoreLibraryReexport.useState(0);
    let [el, ec] = reactCoreLibraryReexport.useState(0);
    let ed = reactCoreLibraryReexport.useRef(x.duration || $ || 4000);
    let eu = reactCoreLibraryReexport.useRef(null);
    let ep = reactCoreLibraryReexport.useRef(null);
    let eh = N === 0;
    let ef = N + 1 <= T;
    let em = x.type;
    let eg = x.dismissible !== false;
    let ey = x.className || "";
    let ev = x.descriptionClassName || "";
    let eb = reactCoreLibraryReexport.useMemo(() => k.findIndex(e => e.toastId === x.id) || 0, [k, x.id]);
    let ew = reactCoreLibraryReexport.useMemo(() => {
      return x.closeButton ?? A;
    }, [x.closeButton, A]);
    let eE = reactCoreLibraryReexport.useMemo(() => x.duration || $ || 4000, [x.duration, $]);
    let ex = reactCoreLibraryReexport.useRef(0);
    let eO = reactCoreLibraryReexport.useRef(0);
    let eC = reactCoreLibraryReexport.useRef(0);
    let eS = reactCoreLibraryReexport.useRef(null);
    let [eT, ek] = F.split("-");
    let eN = reactCoreLibraryReexport.useMemo(() => k.reduce((e, t, n) => n >= eb ? e : e + t.height, 0), [k, eb]);
    let ej = h();
    let eP = x.invert || E;
    let eR = em === "loading";
    eO.current = reactCoreLibraryReexport.useMemo(() => eb * B + eN, [eb, eN]);
    reactCoreLibraryReexport.useEffect(() => {
      ed.current = eE;
    }, [eE]);
    reactCoreLibraryReexport.useEffect(() => {
      q(true);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let e = ep.current;
      if (e) {
        let t = e.getBoundingClientRect().height;
        ec(t);
        S(e => [{
          toastId: x.id,
          height: t,
          position: x.position
        }, ...e]);
        return () => S(e => e.filter(e => e.toastId !== x.id));
      }
    }, [S, x.id]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (!X) {
        return;
      }
      let e = ep.current;
      let t = e.style.height;
      e.style.height = "auto";
      let n = e.getBoundingClientRect().height;
      e.style.height = t;
      ec(n);
      S(e => e.find(e => e.toastId === x.id) ? e.map(e => e.toastId === x.id ? {
        ...e,
        height: n
      } : e) : [{
        toastId: x.id,
        height: n,
        position: x.position
      }, ...e]);
    }, [X, x.title, x.description, S, x.id, x.jsx, x.action, x.cancel]);
    let eD = reactCoreLibraryReexport.useCallback(() => {
      Q(true);
      es(eO.current);
      S(e => e.filter(e => e.toastId !== x.id));
      setTimeout(() => {
        R(x);
      }, 200);
    }, [x, R, S, eO]);
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      if ((!x.promise || em !== "loading") && x.duration !== Infinity && x.type !== "loading") {
        if (P || C || ej) {
          (() => {
            if (eC.current < ex.current) {
              let e = new Date().getTime() - ex.current;
              ed.current = ed.current - e;
            }
            eC.current = new Date().getTime();
          })();
        } else if (ed.current !== Infinity) {
          ex.current = new Date().getTime();
          e = setTimeout(() => {
            if (x.onAutoClose != null) {
              x.onAutoClose.call(x, x);
            }
            eD();
          }, ed.current);
        }
        return () => clearTimeout(e);
      }
    }, [P, C, x, em, ej, eD]);
    reactCoreLibraryReexport.useEffect(() => {
      if (x.delete) {
        eD();
        if (x.onDismiss != null) {
          x.onDismiss.call(x, x);
        }
      }
    }, [eD, x.delete]);
    let eA = x.icon || (W == null ? undefined : W[em]) || a(em);
    return reactCoreLibraryReexport.createElement("li", {
      tabIndex: 0,
      ref: ep,
      className: b(Z, ey, K == null ? undefined : K.toast, x == null ? undefined : (t = x.classNames) == null ? undefined : t.toast, K == null ? undefined : K.default, K == null ? undefined : K[em], x == null ? undefined : (n = x.classNames) == null ? undefined : n[em]),
      "data-sonner-toast": "",
      "data-rich-colors": x.richColors ?? D,
      "data-styled": !x.jsx && !x.unstyled && !O,
      "data-mounted": X,
      "data-promise": !!x.promise,
      "data-swiped": er,
      "data-removed": J,
      "data-visible": ef,
      "data-y-position": eT,
      "data-x-position": ek,
      "data-index": N,
      "data-front": eh,
      "data-swiping": ee,
      "data-dismissible": eg,
      "data-type": em,
      "data-invert": eP,
      "data-swipe-out": en,
      "data-swipe-direction": V,
      "data-expanded": !!P || !!z && !!X,
      "data-testid": x.testId,
      style: {
        "--index": N,
        "--toasts-before": N,
        "--z-index": j.length - N,
        "--offset": `${J ? ei : eO.current}px`,
        "--initial-height": z ? "auto" : `${el}px`,
        ...L,
        ...x.style
      },
      onDragEnd: () => {
        et(false);
        G(null);
        eS.current = null;
      },
      onPointerDown: e => {
        if (e.button !== 2 && !eR && eg) {
          eu.current = new Date();
          es(eO.current);
          e.target.setPointerCapture(e.pointerId);
          if (e.target.tagName !== "BUTTON") {
            et(true);
            eS.current = {
              x: e.clientX,
              y: e.clientY
            };
          }
        }
      },
      onPointerUp: () => {
        var e;
        var t;
        var n;
        var o;
        var r;
        if (en || !eg) {
          return;
        }
        eS.current = null;
        let a = Number(((e = ep.current) == null ? undefined : e.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0);
        let i = Number(((t = ep.current) == null ? undefined : t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0);
        let s = new Date().getTime() - ((n = eu.current) == null ? undefined : n.getTime());
        let l = H === "x" ? a : i;
        let c = Math.abs(l) / s;
        if (Math.abs(l) >= 45 || c > 0.11) {
          es(eO.current);
          if (x.onDismiss != null) {
            x.onDismiss.call(x, x);
          }
          if (H === "x") {
            Y(a > 0 ? "right" : "left");
          } else {
            Y(i > 0 ? "down" : "up");
          }
          eD();
          eo(true);
          return;
        }
        if ((o = ep.current) != null) {
          o.style.setProperty("--swipe-amount-x", "0px");
        }
        if ((r = ep.current) != null) {
          r.style.setProperty("--swipe-amount-y", "0px");
        }
        ea(false);
        et(false);
        G(null);
      },
      onPointerMove: t => {
        var n;
        var o;
        var r;
        if (!eS.current || !eg || ((n = window.getSelection()) == null ? undefined : n.toString().length) > 0) {
          return;
        }
        let i = t.clientY - eS.current.y;
        let s = t.clientX - eS.current.x;
        let l = e.swipeDirections ?? function (e) {
          let [t, n] = e.split("-");
          let o = [];
          if (t) {
            o.push(t);
          }
          if (n) {
            o.push(n);
          }
          return o;
        }(F);
        if (!H && (Math.abs(s) > 1 || Math.abs(i) > 1)) {
          G(Math.abs(s) > Math.abs(i) ? "x" : "y");
        }
        let c = {
          x: 0,
          y: 0
        };
        let d = e => 1 / (1.5 + Math.abs(e) / 20);
        if (H === "y") {
          if (l.includes("top") || l.includes("bottom")) {
            if (l.includes("top") && i < 0 || l.includes("bottom") && i > 0) {
              c.y = i;
            } else {
              let e = i * d(i);
              c.y = Math.abs(e) < Math.abs(i) ? e : i;
            }
          }
        } else if (H === "x" && (l.includes("left") || l.includes("right"))) {
          if (l.includes("left") && s < 0 || l.includes("right") && s > 0) {
            c.x = s;
          } else {
            let e = s * d(s);
            c.x = Math.abs(e) < Math.abs(s) ? e : s;
          }
        }
        if (Math.abs(c.x) > 0 || Math.abs(c.y) > 0) {
          ea(true);
        }
        if ((o = ep.current) != null) {
          o.style.setProperty("--swipe-amount-x", `${c.x}px`);
        }
        if ((r = ep.current) != null) {
          r.style.setProperty("--swipe-amount-y", `${c.y}px`);
        }
      }
    }, ew && !x.jsx && em !== "loading" ? reactCoreLibraryReexport.createElement("button", {
      "aria-label": U,
      "data-disabled": eR,
      "data-close-button": true,
      onClick: eR || !eg ? () => {} : () => {
        eD();
        if (x.onDismiss != null) {
          x.onDismiss.call(x, x);
        }
      },
      className: b(K == null ? undefined : K.closeButton, x == null ? undefined : (r = x.classNames) == null ? undefined : r.closeButton)
    }, (W == null ? undefined : W.close) ?? p) : null, (em || x.icon || x.promise) && x.icon !== null && ((W == null ? undefined : W[em]) !== null || x.icon) ? reactCoreLibraryReexport.createElement("div", {
      "data-icon": "",
      className: b(K == null ? undefined : K.icon, x == null ? undefined : (i = x.classNames) == null ? undefined : i.icon)
    }, x.promise || x.type === "loading" && !x.icon ? x.icon || ((W == null ? undefined : W.loading) ? reactCoreLibraryReexport.createElement("div", {
      className: b(K == null ? undefined : K.loader, x == null ? undefined : (w = x.classNames) == null ? undefined : w.loader, "sonner-loader"),
      "data-visible": em === "loading"
    }, W.loading) : reactCoreLibraryReexport.createElement(s, {
      className: b(K == null ? undefined : K.loader, x == null ? undefined : (y = x.classNames) == null ? undefined : y.loader),
      visible: em === "loading"
    })) : null, x.type !== "loading" ? eA : null) : null, reactCoreLibraryReexport.createElement("div", {
      "data-content": "",
      className: b(K == null ? undefined : K.content, x == null ? undefined : (l = x.classNames) == null ? undefined : l.content)
    }, reactCoreLibraryReexport.createElement("div", {
      "data-title": "",
      className: b(K == null ? undefined : K.title, x == null ? undefined : (c = x.classNames) == null ? undefined : c.title)
    }, x.jsx ? x.jsx : typeof x.title == "function" ? x.title() : x.title), x.description ? reactCoreLibraryReexport.createElement("div", {
      "data-description": "",
      className: b(_, ev, K == null ? undefined : K.description, x == null ? undefined : (d = x.classNames) == null ? undefined : d.description)
    }, typeof x.description == "function" ? x.description() : x.description) : null), reactCoreLibraryReexport.isValidElement(x.cancel) ? x.cancel : x.cancel && v(x.cancel) ? reactCoreLibraryReexport.createElement("button", {
      "data-button": true,
      "data-cancel": true,
      style: x.cancelButtonStyle || M,
      onClick: e => {
        if (v(x.cancel) && eg) {
          if (x.cancel.onClick != null) {
            x.cancel.onClick.call(x.cancel, e);
          }
          eD();
        }
      },
      className: b(K == null ? undefined : K.cancelButton, x == null ? undefined : (u = x.classNames) == null ? undefined : u.cancelButton)
    }, x.cancel.label) : null, reactCoreLibraryReexport.isValidElement(x.action) ? x.action : x.action && v(x.action) ? reactCoreLibraryReexport.createElement("button", {
      "data-button": true,
      "data-action": true,
      style: x.actionButtonStyle || I,
      onClick: e => {
        if (v(x.action)) {
          if (x.action.onClick != null) {
            x.action.onClick.call(x.action, e);
          }
          if (!e.defaultPrevented) {
            eD();
          }
        }
      },
      className: b(K == null ? undefined : K.actionButton, x == null ? undefined : (f = x.classNames) == null ? undefined : f.actionButton)
    }, x.action.label) : null);
  };
  function E() {
    if (typeof window == "undefined" || typeof document == "undefined") {
      return "ltr";
    }
    let e = document.documentElement.getAttribute("dir");
    if (e !== "auto" && e) {
      return e;
    } else {
      return window.getComputedStyle(document.documentElement).direction;
    }
  }
  let x = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      id: n,
      invert: a,
      position: i = "bottom-right",
      hotkey: s = ["altKey", "KeyT"],
      expand: l,
      closeButton: c,
      className: d,
      offset: u,
      mobileOffset: p,
      theme: h = "light",
      richColors: f,
      duration: g,
      style: y,
      visibleToasts: v = 3,
      toastOptions: b,
      dir: x = E(),
      gap: O = 14,
      icons: C,
      containerAriaLabel: S = "Notifications"
    } = e;
    let [T, k] = reactCoreLibraryReexport.useState([]);
    let N = reactCoreLibraryReexport.useMemo(() => n ? T.filter(e => e.toasterId === n) : T.filter(e => !e.toasterId), [T, n]);
    let j = reactCoreLibraryReexport.useMemo(() => Array.from(new Set([i].concat(N.filter(e => e.position).map(e => e.position)))), [N, i]);
    let [P, R] = reactCoreLibraryReexport.useState([]);
    let [D, A] = reactCoreLibraryReexport.useState(false);
    let [L, M] = reactCoreLibraryReexport.useState(false);
    let [I, Z] = reactCoreLibraryReexport.useState(h !== "system" ? h : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    let _ = reactCoreLibraryReexport.useRef(null);
    let $ = s.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    let F = reactCoreLibraryReexport.useRef(null);
    let B = reactCoreLibraryReexport.useRef(false);
    let z = reactCoreLibraryReexport.useCallback(e => {
      k(t => {
        var n;
        if (!((n = t.find(t => t.id === e.id)) == null ? undefined : n.delete)) {
          m.dismiss(e.id);
        }
        return t.filter(({
          id: t
        }) => t !== e.id);
      });
    }, []);
    reactCoreLibraryReexport.useEffect(() => m.subscribe(e => {
      if (e.dismiss) {
        requestAnimationFrame(() => {
          k(t => t.map(t => t.id === e.id ? {
            ...t,
            delete: true
          } : t));
        });
        return;
      }
      setTimeout(() => {
        reactDomEntryWrapper.flushSync(() => {
          k(t => {
            let n = t.findIndex(t => t.id === e.id);
            if (n !== -1) {
              return [...t.slice(0, n), {
                ...t[n],
                ...e
              }, ...t.slice(n + 1)];
            } else {
              return [e, ...t];
            }
          });
        });
      });
    }), [T]);
    reactCoreLibraryReexport.useEffect(() => {
      if (h !== "system") {
        Z(h);
        return;
      }
      if (h === "system") {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          Z("dark");
        } else {
          Z("light");
        }
      }
      if (typeof window == "undefined") {
        return;
      }
      let e = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        e.addEventListener("change", ({
          matches: e
        }) => {
          if (e) {
            Z("dark");
          } else {
            Z("light");
          }
        });
      } catch (t) {
        e.addListener(({
          matches: e
        }) => {
          try {
            if (e) {
              Z("dark");
            } else {
              Z("light");
            }
          } catch (e) {}
        });
      }
    }, [h]);
    reactCoreLibraryReexport.useEffect(() => {
      if (T.length <= 1) {
        A(false);
      }
    }, [T]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        var t;
        var n;
        if (s.every(t => e[t] || e.code === t)) {
          A(true);
          if ((n = _.current) != null) {
            n.focus();
          }
        }
        if (e.code === "Escape" && (document.activeElement === _.current || ((t = _.current) == null ? undefined : t.contains(document.activeElement)))) {
          A(false);
        }
      };
      document.addEventListener("keydown", e);
      return () => document.removeEventListener("keydown", e);
    }, [s]);
    reactCoreLibraryReexport.useEffect(() => {
      if (_.current) {
        return () => {
          if (F.current) {
            F.current.focus({
              preventScroll: true
            });
            F.current = null;
            B.current = false;
          }
        };
      }
    }, [_.current]);
    return reactCoreLibraryReexport.createElement("section", {
      ref: t,
      "aria-label": `${S} ${$}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: true
    }, j.map((t, n) => {
      var r;
      let [i, s] = t.split("-");
      if (N.length) {
        return reactCoreLibraryReexport.createElement("ol", {
          key: t,
          dir: x === "auto" ? E() : x,
          tabIndex: -1,
          ref: _,
          className: d,
          "data-sonner-toaster": true,
          "data-sonner-theme": I,
          "data-y-position": i,
          "data-x-position": s,
          style: {
            "--front-toast-height": `${((r = P[0]) == null ? undefined : r.height) || 0}px`,
            "--width": "356px",
            "--gap": `${O}px`,
            ...y,
            ...function (e, t) {
              let n = {};
              [e, t].forEach((e, t) => {
                let o = t === 1;
                let r = o ? "--mobile-offset" : "--offset";
                let a = o ? "16px" : "24px";
                function i(e) {
                  ["top", "right", "bottom", "left"].forEach(t => {
                    n[`${r}-${t}`] = typeof e == "number" ? `${e}px` : e;
                  });
                }
                if (typeof e == "number" || typeof e == "string") {
                  i(e);
                } else if (typeof e == "object") {
                  ["top", "right", "bottom", "left"].forEach(t => {
                    if (e[t] === undefined) {
                      n[`${r}-${t}`] = a;
                    } else {
                      n[`${r}-${t}`] = typeof e[t] == "number" ? `${e[t]}px` : e[t];
                    }
                  });
                } else {
                  i(a);
                }
              });
              return n;
            }(u, p)
          },
          onBlur: e => {
            if (B.current && !e.currentTarget.contains(e.relatedTarget)) {
              B.current = false;
              if (F.current) {
                F.current.focus({
                  preventScroll: true
                });
                F.current = null;
              }
            }
          },
          onFocus: e => {
            if ((!(e.target instanceof HTMLElement) || e.target.dataset.dismissible !== "false") && !B.current) {
              B.current = true;
              F.current = e.relatedTarget;
            }
          },
          onMouseEnter: () => A(true),
          onMouseMove: () => A(true),
          onMouseLeave: () => {
            if (!L) {
              A(false);
            }
          },
          onDragEnd: () => A(false),
          onPointerDown: e => {
            if (!(e.target instanceof HTMLElement) || e.target.dataset.dismissible !== "false") {
              M(true);
            }
          },
          onPointerUp: () => M(false)
        }, N.filter(e => !e.position && n === 0 || e.position === t).map((n, r) => {
          return reactCoreLibraryReexport.createElement(w, {
            key: n.id,
            icons: C,
            index: r,
            toast: n,
            defaultRichColors: f,
            duration: (b == null ? undefined : b.duration) ?? g,
            className: b == null ? undefined : b.className,
            descriptionClassName: b == null ? undefined : b.descriptionClassName,
            invert: a,
            visibleToasts: v,
            closeButton: (b == null ? undefined : b.closeButton) ?? c,
            interacting: L,
            position: t,
            style: b == null ? undefined : b.style,
            unstyled: b == null ? undefined : b.unstyled,
            classNames: b == null ? undefined : b.classNames,
            cancelButtonStyle: b == null ? undefined : b.cancelButtonStyle,
            actionButtonStyle: b == null ? undefined : b.actionButtonStyle,
            closeButtonAriaLabel: b == null ? undefined : b.closeButtonAriaLabel,
            removeToast: z,
            toasts: N.filter(e => e.position == n.position),
            heights: P.filter(e => e.position == n.position),
            setHeights: R,
            expandByDefault: l,
            gap: O,
            expanded: D,
            swipeDirections: e.swipeDirections
          });
        }));
      } else {
        return null;
      }
    }));
  });
  require.d(exports, {
    toast: function () {
      return y;
    },
    Toaster: function () {
      return x;
    }
  });
}