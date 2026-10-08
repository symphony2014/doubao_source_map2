// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CloudBrowserCanvas'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 61271
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var internalEnvCheck = require("internal-env-check") /*id: 30256*/;
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  let d = e => +!!e.altKey | !!e.ctrlKey * 2 | !!e.metaKey * 4 | !!e.shiftKey * 8;
  let u = ["about:blank"];
  let p = e => moduleReExportWrapper.wrappedModule(e, e => !u.includes(e.url()));
  let m = e => e.some(e => u.includes(e.url()));
  var connectionResolutionConstants = require("connection-resolution-constants") /*id: 832973*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var _ = e => {
    let {
      className: t,
      style: i,
      wsEndpoint: c,
      onError: u,
      readonly: _ = false
    } = e;
    let g = reactCoreLibraryReexport.useRef(null);
    let f = reactCoreLibraryReexport.useRef(null);
    let w = reactCoreLibraryReexport.useRef(null);
    let k = reactCoreLibraryReexport.useRef(null);
    let b = reactCoreLibraryReexport.useRef(false);
    let [x, C] = reactCoreLibraryReexport.useState(connectionResolutionConstants.defaultResolution);
    let y = e => {
      if (!w.current || !g.current || !b.current || _) {
        return;
      }
      e.stopPropagation();
      let t = g.current;
      let a = t.getBoundingClientRect();
      let n = t.width / a.width;
      let r = t.height / a.height;
      let i = (e.clientX - a.left) * n;
      let l = (e.clientY - a.top) * r;
      if (e instanceof WheelEvent) {
        w.current.send("Input.dispatchMouseEvent", {
          type: "mouseWheel",
          x: i,
          y: l,
          deltaX: e.deltaX,
          deltaY: e.deltaY,
          modifiers: d(e)
        }).catch(console.error);
      } else if (e instanceof MouseEvent) {
        let t = {
          mousedown: "mousePressed",
          mouseup: "mouseReleased",
          mousemove: "mouseMoved"
        }[e.type];
        if (!t) {
          return;
        }
        w.current.send("Input.dispatchMouseEvent", {
          type: t,
          x: i,
          y: l,
          button: {
            0: "none",
            1: "left",
            2: "middle",
            3: "right"
          }[e.which],
          modifiers: d(e),
          clickCount: 1
        }).catch(console.error);
      }
    };
    let S = e => {
      if (!w.current || !b.current || _) {
        return;
      }
      if (e.key === "Backspace") {
        e.preventDefault();
      }
      let t = {
        keydown: "keyDown",
        keyup: "keyUp",
        keypress: "char"
      }[e.type];
      let a = t === "char" ? String.fromCharCode(e.charCode) : undefined;
      w.current.send("Input.dispatchKeyEvent", {
        type: t,
        text: a,
        unmodifiedText: a ? a.toLowerCase() : undefined,
        keyIdentifier: e.keyIdentifier,
        code: e.code,
        key: e.key,
        windowsVirtualKeyCode: e.keyCode,
        nativeVirtualKeyCode: e.keyCode,
        autoRepeat: false,
        isKeypad: false,
        isSystemKey: false
      }).catch(console.error);
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = g.current;
      if (!e) {
        return;
      }
      let t = e => y(e);
      let a = e => y(e);
      e.addEventListener("mousedown", t);
      e.addEventListener("mouseup", t);
      e.addEventListener("mousemove", t);
      e.addEventListener("wheel", a);
      e.addEventListener("keydown", S);
      e.addEventListener("keyup", S);
      e.addEventListener("keypress", S);
      return () => {
        e.removeEventListener("mousedown", t);
        e.removeEventListener("mouseup", t);
        e.removeEventListener("mousemove", t);
        e.removeEventListener("wheel", a);
        e.removeEventListener("keydown", S);
        e.removeEventListener("keyup", S);
        e.removeEventListener("keypress", S);
      };
    }, []);
    let A = async e => {
      let t;
      let r;
      try {
        let i = await require.e("puppeteer-core-browser") /*id: 41616*/.then(require.bind(require, "puppeteer-core-browser-module") /*id: 241538*/).then(e => e.connect);
        let l = e;
        try {
          let e = new URL(l);
          Object.entries({}).forEach(t => {
            let [a, n] = t;
            e.searchParams.append(a, n);
          });
          l = e.toString();
        } catch (e) {}
        t = await i({
          browserWSEndpoint: l,
          defaultViewport: {
            width: connectionResolutionConstants.defaultResolution.width,
            height: connectionResolutionConstants.defaultResolution.height,
            deviceScaleFactor: 1,
            hasTouch: false,
            isLandscape: true,
            isMobile: false
          }
        });
        b.current = true;
        k.current = t;
        let c = async e => {
          let t = e.url();
          if (!t || t.startsWith("about:blank")) {
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "cloud_browser_blank_page_error",
              error: Error("page screencast on blank page")
            });
          }
          f.current = e;
          await e.setViewport({
            width: connectionResolutionConstants.defaultResolution.width,
            height: connectionResolutionConstants.defaultResolution.height,
            deviceScaleFactor: 1,
            hasTouch: false,
            isLandscape: true,
            isMobile: false
          });
          let a = await e.viewport();
          if (!a) {
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "cloud_browser_init_viewport_failed",
              error: Error("Failed to get viewport from page")
            });
            return;
          }
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "cloud_browser_init_success",
            meta: {
              viewport: a
            }
          });
          C({
            width: a.width,
            height: a.height
          });
          requestAnimationFrame(async () => {
            var t;
            var a;
            if ((t = w.current) !== null && t !== undefined) {
              t.off("Page.screencastFrame");
            }
            await ((a = w.current) === null || a === undefined ? undefined : a.send("Page.stopScreencast").catch(e => {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "cloud_browser_stop_screencast_failed",
                error: e
              });
            }));
            try {
              r = await e.createCDPSession();
            } catch (e) {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "cloud_browser_create_cdp_session_failed",
                error: e
              });
              return;
            }
            w.current = r;
            try {
              await r.send("Page.startScreencast", {
                format: "jpeg",
                quality: 80
              });
            } catch (e) {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "cloud_browser_start_screencast_failed",
                error: e
              });
              return;
            }
            r.on("Page.screencastFrame", e => {
              let {
                data: t,
                sessionId: a
              } = e;
              if (g.current) {
                let e = new Image();
                e.onload = () => {
                  var t;
                  var a;
                  let r = (t = g.current) === null || t === undefined ? undefined : t.getContext("2d");
                  if (r && g.current) {
                    r.fillStyle = "rgba(255, 0, 0, 0.3)";
                    r.fillRect(0, 0, g.current.width, g.current.height);
                    r.drawImage(e, 0, 0, g.current.width, g.current.height);
                    if (internalEnvCheck.isInternalEnv()) {
                      r.font = "24px Arial";
                      r.fillStyle = "red";
                      r.fillText(((a = f.current) === null || a === undefined ? undefined : a.url()) ?? "[empty page url]", 10, 30);
                    }
                  }
                };
                e.onerror = () => {
                  loggerServiceCore.defaultLogger.persist.error({
                    eventName: "cloud_browser_image_load_error",
                    error: Error("Image load error for screencast frame.")
                  });
                };
                e.src = xssContentSanitizer.sanitizeUrl(`data:image/jpeg;base64,${t}`, null, {
                  logType: "js.href/src",
                  reportOnly: "false",
                  blackConfig: "{}",
                  configMode: "merge",
                  isCloseSSRReport: false,
                  bid: "flow_web",
                  region: "cn",
                  urlLimit: "-1",
                  htmlLimit: "-1",
                  isSaveValidUrl: false,
                  isRuntimeLog: false,
                  isDOMParser: true,
                  escapeRule: "escape-report",
                  reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                  scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                  scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                  scmVersion: "1.0.4.168",
                  webpackPluginVersion: "3.4.5",
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFpaTW5oMlp*ZFJkRmx1%25aa00wNXNZMmt4-0dKd$$te*pi$$pxWk$kc2RtSnBPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
                });
                r.send("Page.screencastFrameAck", {
                  sessionId: a
                }).catch(e => {
                  loggerServiceCore.defaultLogger.persist.error({
                    eventName: "cloud_browser_send_screencast_frame_ack_failed",
                    error: e
                  });
                });
              } else {
                r.send("Page.screencastFrameAck", {
                  sessionId: a
                }).catch(e => {
                  loggerServiceCore.defaultLogger.persist.error({
                    eventName: "cloud_browser_send_screencast_frame_ack_failed",
                    error: e
                  });
                });
              }
            });
            r.on("error", e => {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "cloud_browser_cdp_client_error",
                error: e
              });
            });
            r.on("disconnect", () => {
              loggerServiceCore.defaultLogger.persist.info({
                eventName: "cloud_browser_cdp_client_disconnected"
              });
            });
          });
        };
        t.on("targetcreated", async e => {
          if (e.type() === "page" && e.opener()) {
            loggerServiceCore.defaultLogger.persist.info({
              eventName: "cloud_browser_new_popup_page_opened"
            });
            try {
              let t = await e.page();
              if (t) {
                await c(t);
              }
            } catch (e) {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "cloud_browser_new_popup_page_open_error",
                error: e
              });
            }
          }
        });
        t.on("targetdestroyed", async e => {
          if (e.type() === "page") {
            loggerServiceCore.defaultLogger.persist.info({
              eventName: "cloud_browser_page_destroyed"
            });
            try {
              let e = await t.pages();
              if (e.length === 0) {
                loggerServiceCore.defaultLogger.persist.error({
                  eventName: "cloud_browser_page_empty",
                  error: Error("page is empty on target destroyed")
                });
              }
              if (m(e)) {
                loggerServiceCore.defaultLogger.persist.error({
                  eventName: "cloud_browser_has_invalid_page",
                  error: Error("has invalid page on target destroyed")
                });
              }
              let a = p(e);
              if (!a) {
                loggerServiceCore.defaultLogger.persist.error({
                  eventName: "cloud_browser_no_valid_page",
                  error: Error("no valid page on target destroyed")
                });
              }
              await c(a ?? (await t.newPage()));
            } catch (e) {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "cloud_browser_page_destroy_error",
                error: e
              });
            }
          }
        });
        t.on("targetchanged", async e => {
          if (e.type() === "page") {
            loggerServiceCore.defaultLogger.persist.info({
              eventName: "cloud_browser_page_changed"
            });
            try {
              let t = await e.page();
              if (t && t !== f.current) {
                await c(t);
              }
            } catch (e) {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "cloud_browser_page_changed_error",
                error: e
              });
            }
          }
        });
        t.on("disconnected", () => {
          b.current = false;
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "cloud_browser_disconnected"
          });
          if (u != null) {
            u({
              type: connectionResolutionConstants.connectionStatus.DISCONNECT,
              message: "cloud browser disconnected"
            });
          }
        });
        let d = await t.pages();
        if (d.length === 0) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "cloud_browser_page_empty",
            error: Error("page is empty when connected to cloud browser")
          });
        }
        if (m(d)) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "cloud_browser_has_invalid_page",
            error: Error("has invalid page on init pptr")
          });
        }
        let h = p(d);
        if (!h) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "cloud_browser_no_valid_page",
            error: Error("no valid page on init pptr")
          });
        }
        await c(h ?? (await t.newPage()));
      } catch (e) {
        b.current = false;
        if (u != null) {
          u({
            type: connectionResolutionConstants.connectionStatus.CONNECT_FAILED,
            message: e.message
          });
        }
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "cloud_browser_init_pptr_failed",
          error: e
        });
      }
    };
    let E = async e => {
      try {
        await A(e);
        if (f.current) {
          await f.current.setViewport({
            width: connectionResolutionConstants.defaultResolution.width,
            height: connectionResolutionConstants.defaultResolution.height,
            deviceScaleFactor: 1,
            hasTouch: false,
            isLandscape: true,
            isMobile: false
          });
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "cloud_browser_connect_cdp_failed",
          error: e
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = w.current;
      return () => {
        if (e != null) {
          e.off("Page.screencastFrame");
        }
      };
    }, []);
    let R = () => {
      var e;
      var t;
      if (w != null && (e = w.current) !== null && e !== undefined) {
        e.off("Page.screencastFrame");
      }
      if ((t = k.current) !== null && t !== undefined) {
        t.disconnect();
      }
    };
    let N = async e => {
      let t = g.current;
      if (t) {
        let e = t.getContext("2d");
        if (e) {
          e.clearRect(0, 0, t.width, t.height);
        }
      }
      try {
        await E(e);
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "cloud_browser_init_failed",
          error: e
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      N(c);
      return () => {
        R();
      };
    }, [c]);
    return reactJsxRuntimeCoreReexport.jsx("canvas", {
      tabIndex: 1,
      "data-is-cloud-browser": "true",
      ref: g,
      style: {
        ...i,
        aspectRatio: `${x.width} / ${x.height}`
      },
      className: l("canvas-SIVCxW", t, {
        "readonly-NFc8uz": _
      }),
      width: x.width,
      height: x.height
    });
  };
  require.d(exports, {
    CloudBrowserCanvas: function () {
      return _;
    }
  });
}