// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'noticeComponent_1'
// - Resolved require(854613) to 'notice-component_1'
// - Updated imported property 'q' to 'NoticeComponent' (module 854613)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: platform-fe-biz-exclusive-notice.230a433e.js
         * chunkId: 4910
         * moduleId: 985818
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var noticeComponent_1 = require("notice-component_1") /*id: 854613*/;
  function r(e, t) {
    let i = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => i.current ? e() : (i.current = true, () => {}), t);
  }
  class u {
    static subscribe(e) {
      this.entities.push(e);
      this.triggerShow();
    }
    static unsubscribe(e) {
      let t = this.entities.indexOf(e);
      this.entities.splice(t, 1);
      this.triggerShow();
    }
    static triggerHide() {
      this.entities.forEach(e => {
        if (e.visible && e.isShow) {
          e.close();
        }
      });
    }
    static triggerShow() {
      let e = () => "";
      let t = 0;
      this.triggerHide();
      this.entities.forEach(i => {
        if (t <= i.level && i.visible) {
          t = i.level;
          e = i.show;
        }
      });
      e();
    }
  }
  u.entities = [];
  let n = function (e) {
    if (e.level < 0 || e.level > 900) {
      throw Error("level的数值只能在0-900之间");
    }
    let [t, i] = function (e, {
      defaultValue: t,
      valuePropName: i = "value",
      defaultValuePropName: l = "defaultValue",
      changePropName: u = "onChange"
    }) {
      let n = i in e;
      let c = e[u];
      let o = l in e ? e[l] : t;
      let a = e[i];
      let [h, f] = reactCoreLibraryReexport.useState(() => n ? a : o);
      r(() => {
        if (i in e) {
          f(a);
        }
      }, [a, i]);
      return [h, reactCoreLibraryReexport.useCallback((e, ...t) => {
        if (c && typeof c == "function") {
          c(...t);
        }
        f(e);
      }, [f, c])];
    }(e, {
      defaultValue: true,
      valuePropName: "visible",
      changePropName: "onClose"
    });
    let [n, c] = reactCoreLibraryReexport.useState(true);
    let o = reactCoreLibraryReexport.useCallback(() => {
      c(true);
    }, [c]);
    let a = reactCoreLibraryReexport.useCallback(() => {
      c(false);
    }, [c]);
    let h = reactCoreLibraryReexport.useCallback(e => {
      i(false, e);
    }, [i]);
    let f = reactCoreLibraryReexport.useRef({
      level: e.level,
      show: o,
      close: a,
      visible: t,
      isShow: n
    });
    reactCoreLibraryReexport.useEffect(() => {
      u.subscribe(f.current);
      return () => {
        u.unsubscribe(f.current);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      f.current.visible = t;
      f.current.show = o;
      f.current.close = a;
      f.current.level = e.level;
      f.current.isShow = n;
    }, [t, a, o, e.level, n]);
    r(() => {
      if (!n) {
        u.triggerShow();
      }
    }, [n]);
    r(() => {
      u.triggerShow();
    }, [t]);
    if (n) {
      return reactCoreLibraryReexport.createElement(noticeComponent_1.NoticeComponent, Object.assign({}, e, {
        visible: t,
        onClose: h
      }));
    } else {
      return null;
    }
  };
  require.r(exports);
  require.d(exports, {
    ExclusiveNotice: function () {
      return n;
    }
  });
}