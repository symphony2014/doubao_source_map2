// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 'n' to 'momentJsCoreLib'
// - Resolved require(132840) to 'moment-js-core-lib'
// - Renamed variable 'o' to 'observableMergeOperator'
// - Resolved require(746368) to 'observable-merge-operator'
// - Renamed variable 'l' to 'observableFromEventUtil'
// - Resolved require(704650) to 'observable-from-event-util'
// - Renamed variable 'u' to 'behaviorSubjectClass'
// - Resolved require(263814) to 'behavior-subject-class'
// - Renamed variable 's' to 'observableSafeMapFactory'
// - Resolved require(574000) to 'observable-safe-map-factory'
// - Renamed variable 'c' to 'rxjsSafeDebounceUtil'
// - Resolved require(491207) to 'rxjs-safe-debounce-util'
// - Renamed variable 'a' to 'observableSafeMapOperator'
// - Resolved require(297880) to 'observable-safe-map-operator'
// - Renamed variable 'f' to 'observableSafeFilter'
// - Resolved require(669476) to 'observable-safe-filter'
// - Renamed variable 'b' to 'userEditDetectionObservableSetup'
// - Resolved require(841747) to 'user-edit-detection-observable-setup'
// - Renamed variable 'A' to 'reduxStoreInitializer'
// - Resolved require(75100) to 'redux-store-initializer'
// - Renamed variable 'S' to 'networkStateEventCollector'
// - Resolved require(67722) to 'network-state-event-collector'
// - Renamed variable 'P' to 'docTokenHelperUtils'
// - Resolved require(740758) to 'doc-token-helper-utils'
// - Renamed variable 'O' to 'collabTriggersProvider'
// - Resolved require(164012) to 'collab-triggers-provider'
// - Renamed variable 'T' to 'flowDocChatMemberIo'
// - Resolved require(956604) to 'flow-doc-chat-member-io'
// - Updated imported property 'T' to 'mergeObservable' (module 746368)
// - Updated imported property 'R' to 'fromEvent' (module 704650)
// - Updated imported property 'h' to 'createSafeMapOp' (module 574000)
// - Updated imported property 'b' to 'debounceOperator' (module 491207)
// - Updated imported property 'U' to 'createSafeMapOperator' (module 297880)
// - Updated imported property 'X' to 'BehaviorSubject' (module 263814)
// - Updated imported property 'h' to 'createSafeFilter' (module 669476)
// - Updated imported property 'b9' to 'filteredUserEditObservable' (module 841747)
// - Updated imported property 'ZP' to 'reduxStore' (module 75100)
// - Updated imported property 'G' to 'collectNetworkState' (module 67722)
// - Updated imported property 'yE' to 'getMemberId' (module 956604)
// - Updated imported property 'LP' to 'resolveDocToken' (module 740758)
// - Updated imported property 'i' to 'collabProvider' (module 164012)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: limit-edit-mode-quantity-helper.b768f868.js
         * chunkId: 97207
         * moduleId: 47415
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var momentJsCoreLib = require("moment-js-core-lib") /*id: 132840*/;
  var observableMergeOperator = require("observable-merge-operator") /*id: 746368*/;
  var observableFromEventUtil = require("observable-from-event-util") /*id: 704650*/;
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var observableSafeMapFactory = require("observable-safe-map-factory") /*id: 574000*/;
  var rxjsSafeDebounceUtil = require("rxjs-safe-debounce-util") /*id: 491207*/;
  var observableSafeMapOperator = require("observable-safe-map-operator") /*id: 297880*/;
  function d(t, e, i) {
    var r;
    if ((e = typeof (r = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var i = t[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(t, e || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? r : r + "") in t) {
      Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = i;
    }
    return t;
  }
  class v {
    isActive() {
      return this.isActive$.getValue();
    }
    start() {
      if (this.isActiveSub) {
        return;
      }
      this.isActive$.next(true);
      let {
        activeEvents: t,
        ACTIVE_EXPIRATION_PERIOD: e
      } = v;
      let i = observableMergeOperator.mergeObservable(...t.map(t => observableFromEventUtil.fromEvent(window, t))).pipe(observableSafeMapFactory.createSafeMapOp(true));
      let r = i.pipe(rxjsSafeDebounceUtil.debounceOperator(e), observableSafeMapFactory.createSafeMapOp(false));
      this.isActiveSub = observableMergeOperator.mergeObservable(i, r).pipe(observableSafeMapOperator.createSafeMapOperator(t => t || this.editorHasFocus())).subscribe(this.isActive$);
    }
    stop() {
      if (this.isActiveSub) {
        this.isActiveSub.unsubscribe();
        this.isActiveSub = null;
      }
    }
    editorHasFocus() {
      return window.getSelection() !== null && document.hasFocus() && this.selectionAPI.isFocus();
    }
    constructor(t) {
      this.selectionAPI = t;
      d(this, "isActive$", new behaviorSubjectClass.BehaviorSubject(true));
      d(this, "isActiveSub", undefined);
    }
  }
  d(v, "activeEvents", ["mousemove", "mousedown", "scroll", "mousewheel", "DOMMouseScroll", "touchstart", "keydown", "resize"]);
  d(v, "ACTIVE_EXPIRATION_PERIOD", momentJsCoreLib.duration(2, "minute").asMilliseconds());
  var observableSafeFilter = require("observable-safe-filter") /*id: 669476*/;
  var userEditDetectionObservableSetup = require("user-edit-detection-observable-setup") /*id: 841747*/;
  let {
    sheetEdit$: h,
    mindnoteClick$: m,
    mindnoteEdit$: p,
    bitableFullScreenClick$: y
  } = platformDocUtils.oFU;
  class g {
    start(t, e) {
      this.stop();
      let i = document.querySelector(".editor-container");
      if (!i) {
        throw Error("can not find root element when attempt eo edit detector");
      }
      if (!e) {
        this.sub = observableFromEventUtil.fromEvent(i, "click").subscribe(t);
        return;
      }
      this.sub = observableMergeOperator.mergeObservable(observableMergeOperator.mergeObservable(observableFromEventUtil.fromEvent(i, "click"), m, y).pipe(observableSafeFilter.createSafeFilter(e)), observableMergeOperator.mergeObservable(userEditDetectionObservableSetup.filteredUserEditObservable, h, p).pipe(observableSafeFilter.createSafeFilter(() => !e()))).subscribe(t);
    }
    stop() {
      if (this.sub) {
        this.sub.unsubscribe();
        this.sub = null;
      }
    }
    constructor() {
      var t;
      var e;
      if ((t = typeof (e = function (t, e) {
        if (typeof t != "object" || !t) {
          return t;
        }
        var i = t[Symbol.toPrimitive];
        if (i !== undefined) {
          var r = i.call(t, e || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(t);
      }(t = "sub", "string")) == "symbol" ? e : e + "") in this) {
        Object.defineProperty(this, t, {
          value: null,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = null;
      }
    }
  }
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  class w {
    on() {
      reduxStoreInitializer.reduxStore.dispatch(platformDocUtils.Mbt(true));
    }
    off() {
      reduxStoreInitializer.reduxStore.dispatch(platformDocUtils.Mbt(false));
    }
  }
  class E {
    constructor(t, e) {
      var i;
      var r;
      var n;
      this.hard = t;
      this.limitSource = e;
      r = undefined;
      if ((i = typeof (n = function (t, e) {
        if (typeof t != "object" || !t) {
          return t;
        }
        var i = t[Symbol.toPrimitive];
        if (i !== undefined) {
          var r = i.call(t, e || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(t);
      }(i = "soft", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
      this.soft = Math.round(t * 0.8);
    }
  }
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var flowDocChatMemberIo = require("flow-doc-chat-member-io") /*id: 956604*/;
  function j(t, e, i) {
    var r;
    if ((e = typeof (r = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var i = t[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(t, e || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? r : r + "") in t) {
      Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = i;
    }
    return t;
  }
  class x {
    addHeartbeat(t) {
      var e;
      if ((e = this.collab) !== null && e !== undefined) {
        e.addHeartbeat(this.entity, t, {});
      }
    }
    removeHeartbeat(t) {
      var e;
      if ((e = this.collab) !== null && e !== undefined) {
        e.removeHeartbeat(this.entity, t);
      }
    }
    isOnline() {
      return networkStateEventCollector.collectNetworkState();
    }
    getMemberId() {
      return flowDocChatMemberIo.getMemberId();
    }
    constructor(t) {
      j(this, "entity", {
        type: "DOCX",
        token: docTokenHelperUtils.resolveDocToken()
      });
      j(this, "collab", undefined);
      this.collab = t.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      });
    }
  }
  class _ extends platformDocUtils.UCP {
    constructor(t) {
      super(new x(t), _.REQUEST_TIMEOUT);
    }
  }
  j(_, "REQUEST_TIMEOUT", momentJsCoreLib.duration(5, "seconds").asMilliseconds());
  class M {
    createLimiterRequest() {
      return new _(this.blockManager);
    }
    createActivityDetector() {
      return new v(this.selectionAPI);
    }
    createAttemptToEditDetector() {
      return new g();
    }
    createLimitCtor() {
      return E;
    }
    constructor(t, e) {
      this.blockManager = t;
      this.selectionAPI = e;
    }
  }
  class I extends platformDocUtils.YUS {
    constructor(t, e) {
      super(new w(), new M(t, e));
      this.blockManager = t;
      this.selectionAPI = e;
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return I;
    }
  });
}