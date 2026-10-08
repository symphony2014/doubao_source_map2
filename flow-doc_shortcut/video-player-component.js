// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'VideoPlayerView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 483314
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var textTrackPlugin = require("text-track-plugin") /*id: 669260*/;
  var hlsPlayerPlugin = require("hls-player-plugin") /*id: 577532*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var arrayCompactUtil = require("array-compact-util") /*id: 571426*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var h = classnamesUtils;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  require("webpack-module-wrapper") /*id: 631708*/;
  require("module-block-wrapper") /*id: 603991*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var g = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M18.866 17.79c.325.22.73.14.967-.193 1.125-1.547 1.784-3.674 1.784-5.845s-.65-4.315-1.784-5.845c-.237-.334-.642-.413-.967-.193s-.378.633-.123.993c.958 1.354 1.512 3.173 1.512 5.045s-.571 3.674-1.512 5.045c-.246.36-.202.773.123.993M15.614 15.496c.29.202.703.14.94-.202.677-.888 1.082-2.197 1.082-3.542s-.405-2.646-1.081-3.542c-.238-.343-.65-.413-.94-.202-.361.246-.414.685-.141 1.046.51.703.8 1.678.8 2.698s-.3 1.986-.8 2.698c-.264.37-.22.791.14 1.046M11.475 19.513c.58 0 .993-.413.993-.985V5.046c0-.571-.413-1.037-1.011-1.037-.413 0-.686.184-1.134.606L6.57 8.131a.3.3 0 0 1-.22.079H3.838C2.642 8.21 2 8.87 2 10.135v3.27c0 1.274.642 1.924 1.837 1.924H6.35c.087 0 .167.026.22.08l3.752 3.55c.396.387.739.554 1.152.554"
    })
  }), {}));
  var _ = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M15.614 15.496c.29.202.703.14.94-.202.677-.888 1.082-2.197 1.082-3.542s-.405-2.646-1.081-3.542c-.238-.343-.65-.413-.94-.202-.361.246-.414.685-.141 1.046.51.703.8 1.678.8 2.698s-.3 1.986-.8 2.698c-.264.37-.22.791.14 1.046M11.475 19.513c.58 0 .993-.413.993-.985V5.046c0-.571-.413-1.037-1.011-1.037-.413 0-.686.184-1.134.606L6.57 8.131a.3.3 0 0 1-.22.079H3.838C2.642 8.21 2 8.87 2 10.135v3.27c0 1.274.642 1.924 1.837 1.924H6.35c.087 0 .167.026.22.08l3.752 3.55c.396.387.739.554 1.152.554"
    })
  }), {}));
  var w = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M15.98 18.86c-.114.417-.478.695-.954.695-.404 0-.747-.167-1.151-.554l-3.744-3.55a.32.32 0 0 0-.22-.08H7.388c-1.186 0-1.836-.65-1.836-1.924v-3.27q.002-.86.389-1.338zm.04-13.772v8.994l-5.903-5.898.014-.01 3.744-3.517c.448-.43.73-.606 1.134-.606.597 0 1.01.466 1.01 1.037M19.052 20.478a.68.68 0 0 0 .957 0 .687.687 0 0 0 0-.958L4.954 4.473a.69.69 0 0 0-.967 0 .696.696 0 0 0 0 .958z"
    })
  }), {}));
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  let {
    POSITIONS: x
  } = playerUiPluginBase.PlayerUiPlugin;
  function y(e) {
    let {
      name: i,
      position: n,
      index: r = 0,
      defaultConfig: o,
      template: s,
      component: a
    } = e;
    return class extends playerUiPluginBase.PlayerUiPlugin {
      static get pluginName() {
        return i;
      }
      static get defaultConfig() {
        return {
          position: n,
          index: r,
          ...o
        };
      }
      destroy() {
        reactDomEntryWrapper.unmountComponentAtNode(this.root);
      }
      render() {
        return s;
      }
      constructor(e) {
        super(e);
        reactDomEntryWrapper.render(reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.StrictMode, null, reactCoreLibraryReexport.createElement(a, {
          plugin: this,
          player: this.player
        })), this.root);
      }
    };
  }
  var sliderControlHook = require("slider-control-hook") /*id: 507026*/;
  let C = e => {
    let {
      min: i,
      max: n,
      value: r,
      style: l,
      onStartChange: o,
      onEndChange: s,
      onChange: a,
      visible: c
    } = e;
    let {
      sliderRef: d,
      handleSliderClick: u,
      percent: v,
      isGrabbing: g,
      handleStartGrabbing: _
    } = sliderControlHook.useSliderLogic({
      min: i,
      max: n,
      value: r,
      onStartChange: o,
      onEndChange: s,
      onChange: a,
      direction: "horizontal"
    });
    return reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
      content: i18nTranslationUtils.i18nextTranslate("aispace_playVideo_volume"),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: d,
        "data-testid": "volume-slider",
        className: h("slider-IxQehk", {
          "visible-tiOjDI": c
        }),
        style: l,
        onClick: u,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "rail-zXgXn_",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "track-au71ji",
            style: {
              width: `${v}%`
            }
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          "data-testid": "slider-handle",
          className: "handle-YNi9Xl",
          style: {
            left: `${v}%`,
            cursor: g ? "grabbing" : "grab"
          },
          onMouseDown: _
        })]
      })
    });
  };
  C.defaultProps = {
    vertical: false
  };
  let R = reactCoreLibraryReexport.forwardRef(function (e, i) {
    let {
      className: n,
      ...r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: i,
      className: "icon-button-KfaCOu",
      ...r
    });
  });
  let P = y({
    name: "custom-volume",
    position: x.CONTROLS_LEFT,
    index: 1,
    template: "<xg-icon />",
    component: e => {
      let {
        player: i
      } = e;
      let [n, r] = reactCoreLibraryReexport.useState(() => i.muted ? 0 : i.volume);
      reactCoreLibraryReexport.useEffect(() => {
        let e = () => {
          r(i.muted ? 0 : i.volume);
        };
        i.on(videoPlayerEventConstants.VOLUME_CHANGE, e);
        return () => {
          i.off(videoPlayerEventConstants.VOLUME_CHANGE, e);
        };
      }, []);
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "volume-ksFlvc",
        onMouseDown: e => {
          e.stopPropagation();
        },
        onMouseUp: e => {
          e.stopPropagation();
        },
        children: [reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
          content: n === 0 ? i18nTranslationUtils.i18nextTranslate("aispace_playVideo_unmute") : i18nTranslationUtils.i18nextTranslate("aispace_playVideo_mute"),
          children: reactJsxRuntimeCoreReexport.jsx(R, {
            role: "button",
            onClick: () => {
              if (i.muted || i.volume === 0) {
                i.muted = false;
                i.config.volume = i.volume = i.volume || 0.5;
              } else {
                i.muted = true;
              }
            },
            children: n > 0.5 ? reactJsxRuntimeCoreReexport.jsx(g, {}) : n > 0 ? reactJsxRuntimeCoreReexport.jsx(_, {}) : reactJsxRuntimeCoreReexport.jsx(w, {})
          })
        }), reactJsxRuntimeCoreReexport.jsx(C, {
          min: 0,
          max: 1,
          value: n,
          onChange: e => {
            i.config.volume = i.volume = e;
            if (e > 0 && i.muted) {
              i.muted = false;
            }
          },
          visible: true
        })]
      });
    }
  });
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var I = {
    label: "label-ALV8Vo",
    "label-active": "label-active-mVYnEf",
    labelActive: "label-active-mVYnEf",
    menu: "menu-XD09T7",
    "menu-item": "menu-item-XYXAG_",
    menuItem: "menu-item-XYXAG_",
    "active-icon-wrapper": "active-icon-wrapper-HidtDy",
    activeIconWrapper: "active-icon-wrapper-HidtDy",
    "active-icon": "active-icon-lVpkED",
    activeIcon: "active-icon-lVpkED"
  };
  let {
    Menu: j,
    Item: F
  } = samanthaDropdownWrapper.SamanthaDropdown;
  let M = () => [{
    label: i18nTranslationUtils.i18nextTranslate("aispace_playVideo_speed", {
      s_number: 0.75
    }),
    value: 0.75
  }, {
    label: i18nTranslationUtils.i18nextTranslate("aispace_playVideo_speed", {
      s_number: 1
    }),
    value: 1
  }, {
    label: i18nTranslationUtils.i18nextTranslate("aispace_playVideo_speed", {
      s_number: 1.25
    }),
    value: 1.25
  }, {
    label: i18nTranslationUtils.i18nextTranslate("aispace_playVideo_speed", {
      s_number: 1.5
    }),
    value: 1.5
  }, {
    label: i18nTranslationUtils.i18nextTranslate("aispace_playVideo_speed", {
      s_number: 2
    }),
    value: 2
  }];
  let O = e => {
    let {
      speedRates: i = M(),
      isHoverTrigger: n = false,
      onSettingChange: r,
      getPopupContainer: o
    } = e;
    let [s, a] = reactCoreLibraryReexport.useState(1);
    let [c, d] = reactCoreLibraryReexport.useState(false);
    let u = e => {
      a(e);
      d(false);
      if (r != null) {
        r({
          value: e
        });
      }
    };
    if (!i.length) {
      return null;
    }
    let p = i.filter(e => e.value === s)[0];
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      content: () => reactJsxRuntimeCoreReexport.jsx("div", {
        className: h(I["settings-popup"], I["dark-mode"]),
        children: reactJsxRuntimeCoreReexport.jsx(j, {
          className: I.menu,
          children: i.map(e => reactJsxRuntimeCoreReexport.jsxs(F, {
            className: I["menu-item"],
            onClick: () => {
              u(e.value);
            },
            active: e.value === s,
            children: [e.label, reactJsxRuntimeCoreReexport.jsx("div", {
              className: I["active-icon-wrapper"],
              children: e.value === s ? reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
                className: I["active-icon"]
              }) : null
            })]
          }, String(e.value)))
        })
      }),
      trigger: n ? "hover" : "custom",
      visible: c,
      position: "top",
      className: I["popup-container"],
      onClickOutSide: () => d(false),
      zIndex: 10030,
      style: {
        borderRadius: "10px",
        overflow: "hidden",
        background: "rgba(25, 28, 31, 1)"
      },
      getPopupContainer: o,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: h([I.label, c ? I["label-active"] : ""]),
        onClick: () => d(!c),
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          children: p == null ? undefined : p.label
        })
      })
    });
  };
  let A = y({
    name: "rate-definition",
    position: x.CONTROLS_RIGHT,
    index: 2,
    template: "<xg-icon />",
    component: e => {
      let {
        plugin: i,
        player: n
      } = e;
      let {
        speedRates: r,
        onSpeedClick: l,
        menuPopoverUseHoverTrigger: o
      } = n.config;
      return reactJsxRuntimeCoreReexport.jsx(O, {
        speedRates: r,
        isHoverTrigger: o,
        onSettingChange: e => {
          let {
            value: i
          } = e;
          if (typeof l == "function") {
            l();
          }
          n.playbackRate = i;
        },
        getPopupContainer: () => (n == null ? undefined : n.root) || document.body
      });
    }
  });
  let L = y({
    name: "custom-slot",
    position: x.CONTROLS_RIGHT,
    index: Infinity,
    template: "<xg-icon />",
    component: e => {
      let {
        player: i
      } = e;
      let {
        controlSlots: n
      } = i.config;
      return n || null;
    }
  });
  var playOutlinedIcon = require("play-outlined-icon") /*id: 525533*/;
  var rtlColumnsIcon = require("rtl-columns-icon") /*id: 663739*/;
  let B = y({
    name: "custom-play",
    position: x.CONTROLS_LEFT,
    index: 0,
    template: "<xg-icon />",
    component: e => {
      let {
        player: i
      } = e;
      let [n, r] = reactCoreLibraryReexport.useState(i.paused);
      reactCoreLibraryReexport.useEffect(() => {
        let e = () => {
          r(i.paused);
        };
        i.on(videoPlayerEventConstants.PAUSE, e);
        i.on(videoPlayerEventConstants.PLAY, e);
        return () => {
          i.off(videoPlayerEventConstants.PAUSE, e);
          i.off(videoPlayerEventConstants.PLAY, e);
        };
      }, []);
      let o = e => {
        e.preventDefault();
        e.stopPropagation();
        if (i.ended) {
          i.replay();
        } else if (i.paused) {
          i.play();
        } else {
          i.pause();
        }
      };
      return reactJsxRuntimeCoreReexport.jsx("div", {
        role: "button",
        onClick: o,
        onTouchEnd: o,
        children: reactJsxRuntimeCoreReexport.jsx(R, {
          children: n ? reactJsxRuntimeCoreReexport.jsx(playOutlinedIcon.PlayOutlinedIcon, {}) : reactJsxRuntimeCoreReexport.jsx(rtlColumnsIcon.ColumnsIcon, {})
        })
      });
    }
  });
  var rtlFileDocumentIcon = require("rtl-file-document-icon") /*id: 900958*/;
  var rtlExitIcon = require("rtl-exit-icon") /*id: 569004*/;
  (r = {}).ON_ENTER_IMMERSIVE_MODE = "onEnterImmersiveMode";
  let z = r;
  let $ = y({
    name: "immersive-playing",
    position: x.CONTROLS_RIGHT,
    index: 1,
    template: "<xg-icon />",
    component: e => {
      let {
        player: i
      } = e;
      let n = () => i.config.useCssFullscreen ? i.cssfullscreen : i.fullscreen;
      let r = () => i.config.useCssFullscreen ? i.getCssFullscreen() : i.getFullscreen();
      let o = () => i.config.useCssFullscreen ? i.exitCssFullscreen() : i.exitFullscreen();
      let [s, c] = reactCoreLibraryReexport.useState(n());
      let {
        onFullScreenClick: d
      } = i.config;
      reactCoreLibraryReexport.useEffect(() => {
        let e = () => {
          c(n());
          i.emit(z.ON_ENTER_IMMERSIVE_MODE, {
            isFullscreen: n()
          });
        };
        let r = i.config.useCssFullscreen ? videoPlayerEventConstants.CSS_FULLSCREEN_CHANGE : videoPlayerEventConstants.FULLSCREEN_CHANGE;
        i.on(r, e);
        return () => {
          i.off(r, e);
        };
      }, []);
      let h = s ? rtlFileDocumentIcon.FileDocumentIcon : rtlExitIcon.RtlExitIcon;
      return reactJsxRuntimeCoreReexport.jsx(h, {
        onClick: e => {
          e.preventDefault();
          e.stopPropagation();
          if (typeof d == "function") {
            d();
          }
          if (n()) {
            o();
          } else {
            r();
          }
        }
      });
    }
  });
  var W = {
    label: "label-DRmcN8",
    "label-active": "label-active-m4jzLn",
    labelActive: "label-active-m4jzLn",
    menu: "menu-UWDTOO",
    "menu-item": "menu-item-WLSFhl",
    menuItem: "menu-item-WLSFhl",
    "active-icon-wrapper": "active-icon-wrapper-oqB6hX",
    activeIconWrapper: "active-icon-wrapper-oqB6hX",
    "active-icon": "active-icon-XmTgfP",
    activeIcon: "active-icon-XmTgfP"
  };
  let {
    Menu: U,
    Item: X
  } = samanthaDropdownWrapper.SamanthaDropdown;
  let Y = e => {
    let {
      definitions: i = [],
      defaultDefinition: n,
      isHoverTrigger: r = false,
      onSettingChange: o,
      getPopupContainer: s
    } = e;
    let [a, c] = reactCoreLibraryReexport.useState(n);
    let [d, u] = reactCoreLibraryReexport.useState(false);
    let p = e => {
      c(e);
      if (e) {
        u(false);
        if (o != null) {
          o({
            value: e
          });
        }
      }
    };
    if (!i.length) {
      return null;
    }
    let f = i.filter(e => e.value === a)[0];
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      content: () => reactJsxRuntimeCoreReexport.jsx("div", {
        className: h(W["settings-popup"], W["dark-mode"]),
        children: reactJsxRuntimeCoreReexport.jsx(U, {
          className: W.menu,
          children: i.map(e => reactJsxRuntimeCoreReexport.jsxs(X, {
            className: W["menu-item"],
            onClick: () => {
              p(e.value);
            },
            active: e.value === a,
            children: [e.label, reactJsxRuntimeCoreReexport.jsx("div", {
              className: W["active-icon-wrapper"],
              children: e.value === a ? reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
                className: W["active-icon"]
              }) : null
            })]
          }, String(e.value)))
        })
      }),
      trigger: r ? "hover" : "custom",
      visible: d,
      position: "top",
      className: W["popup-container"],
      onClickOutSide: () => u(false),
      zIndex: 10030,
      style: {
        borderRadius: "10px",
        overflow: "hidden",
        background: "rgba(25, 28, 31, 1)"
      },
      getPopupContainer: s,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: h([W.label, d ? W["label-active"] : ""]),
        onClick: () => u(!d),
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          children: f == null ? undefined : f.label
        })
      })
    });
  };
  let J = y({
    name: "custom-definition",
    position: x.CONTROLS_RIGHT,
    index: 2,
    template: "<xg-icon />",
    component: e => {
      let {
        plugin: i,
        player: n
      } = e;
      let r = i.config;
      let o = n.url;
      let {
        menuPopoverUseHoverTrigger: s
      } = n.config || {};
      let [a, c] = reactCoreLibraryReexport.useState(r.definitions);
      return reactJsxRuntimeCoreReexport.jsx(Y, {
        definitions: a,
        defaultDefinition: o,
        isHoverTrigger: s,
        onSettingChange: e => {
          var i;
          let {
            value: l
          } = e;
          if (r != null && (i = r.onDefinitionClick) !== null && i !== undefined) {
            i.call(r);
          }
          if (n.src !== l) {
            n.switchURL(l, {
              seamless: true
            });
          }
        },
        getPopupContainer: () => (n == null ? undefined : n.root) || document.body
      });
    }
  });
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  let G = y({
    name: "custom-close",
    position: x.ROOT_TOP,
    index: Infinity,
    template: "<xg-icon />",
    component: e => {
      let {
        player: i
      } = e;
      let {
        onClose: n
      } = i.config;
      return reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          height: "24px",
          width: "24px",
          background: "var(--s-color-text-static-black-disable, rgba(0, 0, 0, 0.15))",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          onClick: () => n == null ? undefined : n()
        })
      });
    }
  });
  var videoPlayerClass = require("video-player-class") /*id: 578845*/;
  function Q(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  let ee = new (require("event-emitter-wrapper_1") /*id: 740547*/.getEventEmitter)();
  class et extends videoPlayerClass.VideoPlayer {
    destroy() {
      ee.off(videoPlayerEventConstants.PLAY, this._onPlay);
    }
    constructor(e) {
      super(e);
      Q(this, "_playerUniqueKey", undefined);
      Q(this, "_onPlay", () => {
        if (et.currentPlayerKey !== this._playerUniqueKey) {
          this.pause();
        }
      });
      Q(this, "_onEmitPlayEvent", () => {
        et.currentPlayerKey = this._playerUniqueKey;
        ee.emit(videoPlayerEventConstants.PLAY, this._playerUniqueKey);
      });
      this._playerUniqueKey = Symbol("EnhanceXgPlayer");
      this.on(videoPlayerEventConstants.PLAY, this._onEmitPlayEvent);
      ee.on(videoPlayerEventConstants.PLAY, this._onPlay);
    }
  }
  Q(et, "currentPlayerKey", undefined);
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  let en = () => {
    let e = 0;
    return function (i) {
      let n = er(i);
      let r = n - e;
      e = n;
      return r;
    };
  };
  let er = e => {
    let i = 0;
    for (let n = 0; n < e.length; n++) {
      i += e.end(n) - e.start(n);
    }
    return i;
  };
  let el = reactCoreLibraryReexport.forwardRef((e, i) => {
    let {
      url: n,
      useCssFullscreen: r = true,
      vid: d,
      definitions: p,
      subtitles: f,
      onTimeUpdate: v,
      onPlay: g,
      onPause: _,
      onEnded: w,
      onEnterImmersiveMode: b,
      onClose: E,
      posterUrl: x,
      speedRates: y,
      autoPlay: S,
      scene: C,
      className: R,
      showClose: T,
      controlSlots: k,
      menuPopoverUseHoverTrigger: N,
      controlsConfig: I,
      onSpeedClick: j,
      onDefinitionClick: F,
      onFullScreenClick: M
    } = e;
    let O = reactCoreLibraryReexport.useRef({
      startPlayTime: 0,
      waitingTime: 0,
      waitingStartTime: 0,
      firstFrameTime: 0,
      enoughPlayTime: 0
    });
    let D = reactCoreLibraryReexport.useRef(null);
    let H = reactCoreLibraryReexport.useRef({
      player: null
    });
    let V = e => {
      let {
        url: i,
        vid: n,
        isAutoPlay: l = false
      } = e;
      let a = function (e) {
        if (!e) {
          return false;
        }
        try {
          let i = new URL(e);
          return i.pathname.endsWith(".m3u8") || collectionIncludesUtil.includes(["m3u8", "hls"], i.searchParams.get("type"));
        } catch {
          return false;
        }
      }(i);
      return new et({
        root: document.body,
        el: D.current,
        autoplay: l,
        useCssFullscreen: r,
        ignores: ["fullscreen", "mobile", "volume", "play", "cssFullscreen", "playbackRate", "definition"],
        defaultDefinition: 0,
        "custom-definition": {
          definitions: p,
          onDefinitionClick: F
        },
        width: "100%",
        height: "100%",
        lang: "zh",
        disableBodyTrigger: true,
        plugins: arrayCompactUtil.compactArray([B, $, P, A, J, textTrackPlugin.TextTrackPlugin, a && hlsPlayerPlugin.HlsPlugin, T && G, k && L]),
        hls: {
          onPreM3U8Parse: e => e.replace(/http:\/\//gi, "https://")
        },
        controls: {
          autoHide: true,
          ...I
        },
        texttrack: {
          list: f
        },
        loop: false,
        url: i,
        vid: n,
        poster: x,
        speedRates: y,
        menuPopoverUseHoverTrigger: N,
        onSpeedClick: j,
        onClose: E,
        onFullScreenClick: M,
        controlSlots: k
      });
    };
    let [Z, W] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      let e = V({
        url: n,
        vid: d,
        isAutoPlay: S
      });
      let r = en();
      e.on(videoPlayerEventConstants.TIME_UPDATE, e => {
        if (v != null) {
          v({
            currentTime: e.currentTime
          });
        }
      });
      e.on(videoPlayerEventConstants.PLAY, () => {
        O.current.startPlayTime ||= Date.now();
        if (g != null) {
          g({
            duration: e.duration
          });
        }
      });
      e.on(videoPlayerEventConstants.PAUSE, () => {
        if (_ != null) {
          _({
            ranges: e.played,
            played: r(e.played),
            cumulateTime: e.cumulateTime,
            totalPlayed: er(e.played),
            duration: e.duration
          });
        }
      });
      e.on(videoPlayerEventConstants.ENDED, () => {
        if (w != null) {
          w({
            ranges: e.played,
            played: r(e.played),
            cumulateTime: e.cumulateTime,
            totalPlayed: er(e.played),
            duration: e.duration
          });
        }
      });
      e.on(z.ON_ENTER_IMMERSIVE_MODE, e => {
        let {
          isFullscreen: i
        } = e;
        W(i);
        if (b != null) {
          b();
        }
      });
      e.on(videoPlayerEventConstants.LOADED_DATA, () => {
        O.current.firstFrameTime ||= Date.now();
      });
      e.on(videoPlayerEventConstants.CANPLAY, () => {
        O.current.enoughPlayTime ||= Date.now();
      });
      e.on(videoPlayerEventConstants.WAITING, () => {
        O.current.waitingStartTime ||= Date.now();
      });
      e.on(videoPlayerEventConstants.PLAYING, () => {
        if (O.current.waitingStartTime) {
          O.current.waitingTime += Date.now() - O.current.waitingStartTime;
          O.current.waitingStartTime = 0;
        }
      });
      if (e != null) {
        e.setUserActive(true, false);
      }
      H.current.player = e;
      if (i) {
        if (typeof i == "function") {
          i(e);
        } else {
          i.current = e;
        }
      }
      e.focus();
      return () => {
        if (C) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "flow_media_player_perf",
            meta: {
              scene: C,
              waitingTime: O.current.waitingTime,
              firstFrameTime: O.current.firstFrameTime - O.current.startPlayTime,
              enoughPlayTime: O.current.enoughPlayTime - O.current.startPlayTime
            }
          });
        }
        if (e != null) {
          e.destroy();
        }
      };
    }, []);
    let U = e => {
      let {
        currentTime: i
      } = e;
      let n = 0;
      if (i - 5 >= 0) {
        n = i - 5;
      }
      e.currentTime = n;
    };
    let X = e => {
      let {
        currentTime: i,
        duration: n
      } = e;
      let r = i;
      r = i + 5 <= n ? i + 5 : n;
      e.currentTime = r;
    };
    let Y = e => {
      e.preventDefault();
      e.stopPropagation();
      let i = H.current.player;
      if (i == null ? undefined : i.state) {
        if (e.code === "Escape") {
          if (Z) {
            return i.exitCssFullscreen();
          } else if (E == null) {
            return undefined;
          } else {
            return E();
          }
        }
        if (e.code === "Space") {
          if (i.paused) {
            return i.play();
          } else {
            return i.pause();
          }
        }
        if (e.code === "ArrowLeft") {
          U(i);
        }
        if (e.code === "ArrowRight") {
          X(i);
        }
      }
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: h(["video-wrapper-CEqoeG", R]),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "video-container-deugfT",
        tabIndex: 0,
        onKeyDown: e => Y(e.nativeEvent),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          ref: D,
          onClick: () => {
            var e;
            var i;
            if ((i = H.current) !== null && i !== undefined && (e = i.player) !== null && e !== undefined) {
              e.focus();
            }
          },
          onTouchEnd: () => {
            var e;
            var i;
            if ((i = H.current) !== null && i !== undefined && (e = i.player) !== null && e !== undefined) {
              e.focus();
            }
          }
        })
      })
    });
  });
  require.d(exports, {
    VideoPlayerView: function () {
      return el;
    }
  });
}