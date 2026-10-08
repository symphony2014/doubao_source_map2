// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'AutoSizer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-pdf-viewer.a091068e.js
         * chunkId: 55505
         * moduleId: 512361
         */
module.exports = function (module, exports, require) {
  let n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  n = typeof window != "undefined" ? window : typeof self != "undefined" ? self : require.g;
  let o = null;
  let s = null;
  let a = n.clearTimeout;
  let l = n.setTimeout;
  let c = n.cancelAnimationFrame || n.mozCancelAnimationFrame || n.webkitCancelAnimationFrame;
  let d = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame;
  if (c == null || d == null) {
    o = a;
    s = function (e) {
      return l(e, 20);
    };
  } else {
    o = function ([e, t]) {
      c(e);
      a(t);
    };
    s = function (e) {
      let t = d(function () {
        a(i);
        e();
      });
      let i = l(function () {
        c(t);
        e();
      }, 20);
      return [t, i];
    };
  }
  class u extends reactCoreLibraryReexport.Component {
    constructor(...e) {
      super(...e);
      this.state = {
        height: this.props.defaultHeight || 0,
        width: this.props.defaultWidth || 0
      };
      this._autoSizer = null;
      this._detectElementResize = null;
      this._didLogDeprecationWarning = false;
      this._parentNode = null;
      this._resizeObserver = null;
      this._timeoutId = null;
      this._onResize = () => {
        this._timeoutId = null;
        let {
          disableHeight: e,
          disableWidth: t,
          onResize: i
        } = this.props;
        if (this._parentNode) {
          let n = window.getComputedStyle(this._parentNode) || {};
          let r = parseFloat(n.paddingLeft || "0");
          let o = parseFloat(n.paddingRight || "0");
          let s = parseFloat(n.paddingTop || "0");
          let a = parseFloat(n.paddingBottom || "0");
          let l = this._parentNode.getBoundingClientRect();
          let c = l.height - s - a;
          let d = l.width - r - o;
          if (!e && this.state.height !== c || !t && this.state.width !== d) {
            this.setState({
              height: c,
              width: d
            });
            let e = () => {
              this._didLogDeprecationWarning ||= true;
            };
            if (typeof i == "function") {
              i({
                height: c,
                width: d,
                get scaledHeight() {
                  e();
                  return c;
                },
                get scaledWidth() {
                  e();
                  return d;
                }
              });
            }
          }
        }
      };
      this._setRef = e => {
        this._autoSizer = e;
      };
    }
    componentDidMount() {
      let {
        nonce: e
      } = this.props;
      let t = this._autoSizer ? this._autoSizer.parentNode : null;
      if (t != null && t.ownerDocument && t.ownerDocument.defaultView && t instanceof t.ownerDocument.defaultView.HTMLElement) {
        this._parentNode = t;
        let i = t.ownerDocument.defaultView.ResizeObserver;
        if (i != null) {
          this._resizeObserver = new i(() => {
            this._timeoutId = setTimeout(this._onResize, 0);
          });
          this._resizeObserver.observe(t);
        } else {
          this._detectElementResize = function (e) {
            let t;
            let i;
            let r;
            let a;
            let l;
            let c;
            let d;
            let u = typeof document != "undefined" && document.attachEvent;
            if (!u) {
              c = function (e) {
                let t = e.__resizeTriggers__;
                let i = t.firstElementChild;
                let n = t.lastElementChild;
                let r = i.firstElementChild;
                n.scrollLeft = n.scrollWidth;
                n.scrollTop = n.scrollHeight;
                r.style.width = i.offsetWidth + 1 + "px";
                r.style.height = i.offsetHeight + 1 + "px";
                i.scrollLeft = i.scrollWidth;
                i.scrollTop = i.scrollHeight;
              };
              l = function (e) {
                return e.offsetWidth !== e.__resizeLast__.width || e.offsetHeight !== e.__resizeLast__.height;
              };
              d = function (e) {
                if (e.target.className && typeof e.target.className.indexOf == "function" && e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0) {
                  return;
                }
                let t = this;
                c(this);
                if (this.__resizeRAF__) {
                  o(this.__resizeRAF__);
                }
                this.__resizeRAF__ = s(function () {
                  if (l(t)) {
                    t.__resizeLast__.width = t.offsetWidth;
                    t.__resizeLast__.height = t.offsetHeight;
                    t.__resizeListeners__.forEach(function (i) {
                      i.call(t, e);
                    });
                  }
                });
              };
              let e = false;
              let n = "";
              r = "animationstart";
              let u = "Webkit Moz O ms".split(" ");
              let h = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");
              let p = "";
              {
                let t = document.createElement("fakeelement");
                if (t.style.animationName !== undefined) {
                  e = true;
                }
                if (e === false) {
                  for (let i = 0; i < u.length; i++) {
                    if (t.style[u[i] + "AnimationName"] !== undefined) {
                      n = "-" + (0, u[i]).toLowerCase() + "-";
                      r = h[i];
                      e = true;
                      break;
                    }
                  }
                }
              }
              t = "@" + n + "keyframes " + (i = "resizeanim") + " { from { opacity: 0; } to { opacity: 0; } } ";
              a = n + "animation: 1ms " + i + "; ";
            }
            let h = function (i) {
              if (!i.getElementById("detectElementResize")) {
                let n = (t || "") + ".resize-triggers { " + (a || "") + "visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }";
                let r = i.head || i.getElementsByTagName("head")[0];
                let o = i.createElement("style");
                o.id = "detectElementResize";
                o.type = "text/css";
                if (e != null) {
                  o.setAttribute("nonce", e);
                }
                if (o.styleSheet) {
                  o.styleSheet.cssText = n;
                } else {
                  o.appendChild(i.createTextNode(n));
                }
                r.appendChild(o);
              }
            };
            return {
              addResizeListener: function (e, t) {
                if (u) {
                  e.attachEvent("onresize", t);
                } else {
                  if (!e.__resizeTriggers__) {
                    let t = e.ownerDocument;
                    let o = n.getComputedStyle(e);
                    if (o && o.position === "static") {
                      e.style.position = "relative";
                    }
                    h(t);
                    e.__resizeLast__ = {};
                    e.__resizeListeners__ = [];
                    (e.__resizeTriggers__ = t.createElement("div")).className = "resize-triggers";
                    let s = t.createElement("div");
                    s.className = "expand-trigger";
                    s.appendChild(t.createElement("div"));
                    let a = t.createElement("div");
                    a.className = "contract-trigger";
                    e.__resizeTriggers__.appendChild(s);
                    e.__resizeTriggers__.appendChild(a);
                    e.appendChild(e.__resizeTriggers__);
                    c(e);
                    e.addEventListener("scroll", d, true);
                    if (r) {
                      e.__resizeTriggers__.__animationListener__ = function (t) {
                        if (t.animationName === i) {
                          c(e);
                        }
                      };
                      e.__resizeTriggers__.addEventListener(r, e.__resizeTriggers__.__animationListener__);
                    }
                  }
                  e.__resizeListeners__.push(t);
                }
              },
              removeResizeListener: function (e, t) {
                if (u) {
                  e.detachEvent("onresize", t);
                } else {
                  e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1);
                  if (!e.__resizeListeners__.length) {
                    e.removeEventListener("scroll", d, true);
                    if (e.__resizeTriggers__.__animationListener__) {
                      e.__resizeTriggers__.removeEventListener(r, e.__resizeTriggers__.__animationListener__);
                      e.__resizeTriggers__.__animationListener__ = null;
                    }
                    try {
                      e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__);
                    } catch (e) {}
                  }
                }
              }
            };
          }(e);
          this._detectElementResize.addResizeListener(t, this._onResize);
        }
        this._onResize();
      }
    }
    componentWillUnmount() {
      if (this._parentNode) {
        if (this._detectElementResize) {
          this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
        }
        if (this._timeoutId !== null) {
          clearTimeout(this._timeoutId);
        }
        if (this._resizeObserver) {
          this._resizeObserver.disconnect();
        }
      }
    }
    render() {
      let {
        children: e,
        defaultHeight: t,
        defaultWidth: i,
        disableHeight: n = false,
        disableWidth: o = false,
        doNotBailOutOnEmptyChildren: s = false,
        nonce: a,
        onResize: l,
        style: c = {},
        tagName: d = "div",
        ...u
      } = this.props;
      let {
        height: h,
        width: p
      } = this.state;
      let f = {
        overflow: "visible"
      };
      let m = {};
      let g = false;
      if (!n) {
        if (h === 0) {
          g = true;
        }
        f.height = 0;
        m.height = h;
        m.scaledHeight = h;
      }
      if (!o) {
        if (p === 0) {
          g = true;
        }
        f.width = 0;
        m.width = p;
        m.scaledWidth = p;
      }
      if (s) {
        g = false;
      }
      return reactCoreLibraryReexport.createElement(d, {
        ref: this._setRef,
        style: {
          ...f,
          ...c
        },
        ...u
      }, !g && e(m));
    }
  }
  require.d(exports, {
    AutoSizer: function () {
      return u;
    }
  });
}