// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'yt' to 'getFlowWebPlatformUtils'
// - Renamed export 'mB' to 'taskSchedulerInstance'
// - Renamed export 'el' to 'cancelScheduledTask'
// - Renamed export 'Qy' to 'delayToFirstScreenMarker'
// - Renamed export 'EU' to 'createManualResolvePromise'
// - Renamed export 'nf' to 'scheduleTaskWithConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 572734
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var businessStageConstants = require("business-stage-constants") /*id: 187074*/;
  let l = new class {
    setConfig(e) {}
    flush(e) {
      return Promise.resolve();
    }
    flushAll() {
      return Promise.resolve();
    }
    disableSchedule() {}
    cleanup() {}
    addBlockingTask(e) {
      return e.action();
    }
    enableIdleTask() {}
    disableIdleTask() {}
    addTask(e) {
      return e.action();
    }
    cancelTask(e) {}
    cancelTaskByFilter(e) {}
    runTaskImmediatly(e) {}
  }();
  let a = {
    scheduler: l,
    scheduleTask: l.addTask.bind(l),
    log: () => {}
  };
  function c() {
    return platformDocUtils.yte();
  }
  function u(e, n = {
    isHistory: false,
    isTemplate: false,
    isBlocking: false
  }) {
    let {
      isHistory: r,
      isTemplate: o,
      isBlocking: l,
      shouldImmediate: c
    } = n;
    if (r || o || c) {
      e.config = e.config || {};
      e.config.stage = businessStageConstants.businessConstants.DocxStage.immediate;
    }
    return a.scheduleTask(e, l);
  }
  let s = e => a.scheduler.cancelTask(e);
  function d(e) {
    let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let {
      resolve: r,
      promise: o
    } = function () {
      let e = () => {
        throw Error("createManualResovePromise is not inited yet!");
      };
      let n = () => {
        e();
      };
      let r = n;
      let o = n;
      return {
        promise: new Promise((e, n) => {
          r = e;
          o = n;
        }),
        reject: o,
        resolve: r
      };
    }();
    u({
      name: e,
      action: () => o
    }, {
      isBlocking: n
    });
    return {
      cancel: r,
      notifyFinish: r
    };
  }
  let h = a;
  let f = "delayToFirstScreenMainContentUsable";
  require.d(exports, {
    getFlowWebPlatformUtils: function () {
      return c;
    },
    taskSchedulerInstance: function () {
      return h;
    },
    cancelScheduledTask: function () {
      return s;
    },
    delayToFirstScreenMarker: function () {
      return f;
    },
    createManualResolvePromise: function () {
      return d;
    },
    scheduleTaskWithConfig: function () {
      return u;
    }
  });
}