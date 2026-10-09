// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'CardComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 899467
         */
module.exports = function (module, exports, require) {
  var i;
  var reactIntersectionObserver = require("react-intersection-observer") /*id: 637954*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  (i = c || {}).PENDING = "pending";
  i.SUCCESS = "success";
  i.FAIL = "fail";
  var c = i;
  var d = {
    cardItem: "cardItem-h5BuxQ",
    card: "card-vUm0BG",
    activeImg: "activeImg-LWHh2E",
    activeTxt: "activeTxt-XiZgTQ",
    animCard: "animCard-HEbHmi",
    normalImg: "normalImg-enZOB3"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = new class {
    preload(e, t, l) {
      if (!e) {
        if (l != null) {
          l(Error("图片 URL 不能为空"));
        }
        return;
      }
      let i = this.cache.get(e);
      if ((i == null ? undefined : i.status) === c.SUCCESS && i.image) {
        t(i.image);
        return;
      }
      if ((i == null ? undefined : i.status) === c.PENDING) {
        i.callbacks.push(t);
        if (l) {
          (i.errorCallbacks ||= []).push(l);
        }
        return;
      }
      let n = {
        status: c.PENDING,
        image: null,
        callbacks: [t],
        errorCallbacks: l ? [l] : []
      };
      this.cache.set(e, n);
      let o = new Image();
      o.onload = () => {
        n.status = c.SUCCESS;
        n.image = o;
        n.callbacks.forEach(e => e(o));
        n.callbacks = [];
        n.errorCallbacks = [];
      };
      o.onerror = t => {
        var l;
        let i = Error(`\u{56FE}\u{7247}\u{52A0}\u{8F7D}\u{5931}\u{8D25}: ${e}`);
        n.status = c.FAIL;
        n.image = null;
        if ((l = n.errorCallbacks) !== null && l !== undefined) {
          l.forEach(e => e(i));
        }
        n.callbacks = [];
        n.errorCallbacks = [];
      };
      o.src = xssContentSanitizer.sanitizeUrl(e, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1doaF$6RjNZM*hSZ*1NelNtcE1Naz%yWWxoQ2RtSnRWblZr%0%xMlpFZFdkR05IZ%doa1Ix$jBX$EpHZ$ZwRE1-QmtSM$ow$ERKc2R*cD$NW*Rq-lZaellqSkdhMXBZ%1hWa1NFNW9ZMjFrT$dOM1B%MD0"
      });
    }
    preloadBatch(e, t, l) {
      if (e.length === 0) {
        t([]);
        return;
      }
      let i = [];
      let n = 0;
      e.forEach(o => {
        this.preload(o, l => {
          i.push(l);
          if (++n === e.length) {
            t(i);
          }
        }, a => {
          if (l != null) {
            l(o, a);
          }
          if (++n === e.length) {
            t(i);
          }
        });
      });
    }
    clearCache(e) {
      this.cache.delete(e);
    }
    clearAllCache() {
      this.cache.clear();
    }
    getStatus(e) {
      return this.cache.get(e)?.status;
    }
    constructor() {
      var e;
      var t;
      var l;
      e = "cache";
      t = new Map();
      if ((e = typeof (l = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var l = e[Symbol.toPrimitive];
        if (l !== undefined) {
          var i = l.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? l : l + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }();
  let p = e => {
    let {
      item: l,
      onClick: i,
      onShow: a,
      active: s,
      previewPageDetail: c,
      onCardInView: p,
      tabVersion: _
    } = e;
    let v = Math.min((l == null ? undefined : l.pageDetails?.pageCount) || 20, 6);
    let [g, h] = reactCoreLibraryReexport.useState(false);
    let [f, b] = reactCoreLibraryReexport.useState(-1);
    let [w, y] = reactCoreLibraryReexport.useState(false);
    let C = reactCoreLibraryReexport.useRef(null);
    let S = reactCoreLibraryReexport.useRef(null);
    let [E, k] = reactCoreLibraryReexport.useState({
      width: 0,
      height: 0
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!S.current) {
        return;
      }
      let e = () => {
        var e;
        let {
          height: t = 0,
          width: l = 0
        } = ((e = S.current) === null || e === undefined ? undefined : e.getBoundingClientRect()) || {};
        k({
          width: l,
          height: t
        });
      };
      let t = new ResizeObserver(() => {
        e();
      });
      t.observe(S.current);
      let l = setTimeout(() => {
        e();
        h(true);
      }, 100);
      return () => {
        h(false);
        clearTimeout(l);
        t.disconnect();
      };
    }, [S.current]);
    let [R, x] = reactCoreLibraryReexport.useState(-1);
    let {
      ref: T,
      inView: I
    } = reactIntersectionObserver.useInView({
      initialInView: false
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (I && R !== _) {
        if (p != null) {
          p(l);
        }
        x(_);
      }
    }, [I, _, R, p, l]);
    let $ = reactCoreLibraryReexport.useCallback(e => {
      if (!C.current || !c) {
        return;
      }
      let {
        clientX: t
      } = e;
      let {
        left: l,
        width: i
      } = C.current.getBoundingClientRect();
      let n = Math.floor((t - l) / i * v);
      if (n >= 0 && n < v) {
        b(n);
      }
    }, [v]);
    reactCoreLibraryReexport.useEffect(() => a(l), [l, a]);
    let N = reactCoreLibraryReexport.useMemo(() => {
      if (!w && f >= 0) {
        m.preload(e.item.pageDetails?.url || "", e => {
          y(true);
        }, t => {
          m.clearCache(e.item.pageDetails?.url || "");
          y(false);
        });
      }
      if (!g) {
        return {};
      }
      if (w && f > 0 && e.item.pageDetails && S.current) {
        let {
          rowCount: t,
          columnCount: l,
          url: i
        } = e.item.pageDetails;
        let {
          height: n,
          width: o
        } = S.current.getBoundingClientRect();
        return {
          backgroundImage: `url(${i})`,
          backgroundSize: `${o * l}px ${n * t}px`,
          backgroundPosition: `-${f % l * o + 1}px -${n * Math.floor(f / l) + 1}px`
        };
      }
      if (S.current) {
        let {
          height: e,
          width: t
        } = S.current.getBoundingClientRect();
        return {
          backgroundImage: `url(${l.cover_url})`,
          backgroundSize: `${Math.ceil(t) + 2}px ${Math.ceil(e) + 2}px`,
          backgroundPosition: "-1px -1px"
        };
      }
      return {
        backgroundImage: `url(${l.cover_url})`,
        backgroundSize: "cover"
      };
    }, [f, g, l, w, E.width, E.height]);
    let A = reactCoreLibraryReexport.useCallback(e => {
      C.current = e;
      T(e);
    }, [T]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: A,
      onMouseLeave: () => b(-1),
      onMouseMove: $,
      className: r(e.className, d.cardItem, `
          h-full
          flex cursor-pointer flex-col overflow-x-hidden
          transition-all
          bg-dbx-bg-body-overlay items-center
          text-dbx-text-secondary
        `),
      onClick: () => i(l),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: S,
        draggable: "false",
        className: r("w-full rounded-12 object-cover", d.card, c ? "" : d.animCard, s ? d.activeImg : d.normalImg),
        style: {
          aspectRatio: "16/9",
          ...N
        }
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        title: l.title,
        className: r(d.titleTxt, `
          mx-14 my-10 mt-8 line-clamp-2 flex items-center justify-center overflow-hidden
          [font-size:14px]
          leading-22
          [font-weight:400]
          whitespace-nowrap overflow-ellipsis
        `, s ? d.activeTxt : ""),
        children: l.title || ""
      })]
    });
  };
  require.d(exports, {
    CardComponent: function () {
      return p;
    }
  });
}