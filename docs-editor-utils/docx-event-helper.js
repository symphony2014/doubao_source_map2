// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E9' to 'collectEventWithIdle'
// - Renamed export 'Y' to 'normalizeRecordId'
// - Renamed export '_k' to 'collectEventWithTarget'
// - Renamed export 'e_' to 'normalizeBlockIds'
// - Renamed export 'nq' to 'normalizeAndTransformEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 997602
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  function u(e) {
    if (!isPlainObjectUtil.isPlainObject(e)) {
      return e;
    }
    let n = {
      ...e
    };
    n.block_id &&= platformDocUtils.p5T(n.block_id);
    n.object_block_id &&= platformDocUtils.p5T(n.object_block_id);
    return n;
  }
  function a(e) {
    e.block_id = e.record_id;
    delete e.record_id;
    return e;
  }
  function s(e) {
    return u(a(e));
  }
  let d = (e, n, r, o) => {
    let i = () => {
      let i = Object.assign({}, s(n), r);
      docxEventCollector.wrappedCollector(e, i, o);
    };
    if (o) {
      i();
      return;
    }
    idleCallbackPolyfill_1.requestIdleCallback(i);
  };
  let f = (e, n, r) => {
    idleCallbackPolyfill_1.requestIdleCallback(() => {
      let o = {
        ...r,
        target: r.target || "none"
      };
      docxEventCollector.wrappedCollector(e, Object.assign({}, s(n), u(o)));
    });
  };
  require.d(exports, {
    collectEventWithIdle: function () {
      return d;
    },
    normalizeRecordId: function () {
      return a;
    },
    collectEventWithTarget: function () {
      return f;
    },
    normalizeBlockIds: function () {
      return u;
    },
    normalizeAndTransformEvent: function () {
      return s;
    }
  });
}