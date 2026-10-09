// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MC' to 'getVirtualConfig'
// - Renamed export 'PW' to 'isAnchorOptimized'
// - Renamed export 'US' to 'isMemoryRecycle'
// - Renamed export '_K' to 'isNextFinderV2'
// - Renamed export 'el' to 'isLayoutEnabled'
// - Renamed export 'x7' to 'TEXT_BLOCK_TYPES'
// - Renamed export 'x9' to 'isAnchorLockLong'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 173628
         */
module.exports = function (module, exports, require) {
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let {
    isMobile: d,
    isInVC: h
  } = browserEnvironmentDetectionUtils.browserDetector;
  let f = boolDefaultGetterUtil.getDefaultBool("ccm.docx.idle_worker_degrade_enable", false);
  let p = {
    docx_virtual_check_viewport_visibility_enable: true,
    docx_virtual_idle_worker_enable: true,
    docx_virtual_render_enable: true,
    docx_virtual_scroll_dirty_range: 8000,
    docx_virtual_slice_mount_threshold: 20,
    docx_virtual_viewport_threshold: 90,
    docx_virtual_buffer_range: undefined,
    docx_virtual_tracker_store_size: -1,
    docx_virtual_enable_record_document_structs: false,
    docx_virtual_idle_normal_render_distance: 5000,
    docx_virtual_idle_normal_min_interval: 300,
    docx_virtual_idle_fast_render_distance: 15000,
    docx_virtual_idle_fast_render_duration: 5000,
    docx_virtual_idle_fast_max_interval: 100,
    docx_virtual_idle_fast_scroll_distance_factor: d ? 3 : 1.5,
    docx_virtual_force_set_scrolltop_enable: true
  };
  let g = platformDocUtils.o0s.parseQuery(window.location.search);
  function m(e, n = false) {
    return e === "true" || e !== "false" && n;
  }
  function v(e) {
    let n = d ? objectPathGetDefault.getObjectPathDefault(window, "User.appConfig.virtualRenderConfig", p) : boolDefaultGetterUtil.getDefaultBool("docx_virtual_render_config", p);
    if (e) {
      return n[e];
    } else {
      return n;
    }
  }
  function b() {
    return v("docx_virtual_check_viewport_visibility_enable");
  }
  function y() {
    return m(g.enable_virtual_horizontal, boolDefaultGetterUtil.getDefaultBool("docx_virtual_horizontal_enable", false));
  }
  function _() {
    var n;
    let l = v();
    let u = l.docx_virtual_idle_normal_render_distance ? {
      normalRenderDistance: l.docx_virtual_idle_normal_render_distance,
      normalMinInterval: l.docx_virtual_idle_normal_min_interval,
      fastRenderDistance: l.docx_virtual_idle_fast_render_distance,
      fastRenderDuration: l.docx_virtual_idle_fast_render_duration,
      fastMaxInterval: l.docx_virtual_idle_fast_max_interval,
      fastScrollDistanceFactor: h && f ? 0 : l.docx_virtual_idle_fast_scroll_distance_factor
    } : undefined;
    return {
      enableVirtualRender: l.docx_virtual_render_enable,
      enableIdleWorker: browserEnvironmentDetectionUtils.browserDetector.isMobile ? l.docx_mobile_virtual_idle_worker_enable : l.docx_virtual_idle_worker_enable,
      extraDirtyRangeToBeUpdateWhenScrollUp: l.docx_virtual_scroll_dirty_range,
      viewportLockConfig: {
        partInViewportThreshold: l.docx_virtual_viewport_threshold,
        viewportLockThreshold: l.docx_virtual_viewport_lock_threshold ?? 10
      },
      bufferRange: l.docx_virtual_buffer_range,
      viewportLockBehaviorWhenScrolling: browserEnvironmentDetectionUtils.browserDetector.isIOS || browserEnvironmentDetectionUtils.browserDetector.isIPad ? docxFeatureFlags.isAyEnabled() || C() ? bearVirtualLayoutReconciler.ViewportLockBehaviorWhenScrolling.DISABLED_AUTO_UPDATE_SCROLL_TOP_EXCEPT_ANCHOR_LOCK : bearVirtualLayoutReconciler.ViewportLockBehaviorWhenScrolling.DISABLED_AUTO_UPDATE_SCROLL_TOP : bearVirtualLayoutReconciler.ViewportLockBehaviorWhenScrolling.ENABLED_AUTO_UPDATE_SCROLL_TOP,
      sliceMountThreshold: l.docx_virtual_slice_mount_threshold,
      trackerStoreSize: l.docx_virtual_tracker_store_size,
      enableRecordDocumentStructs: l.docx_virtual_enable_record_document_structs,
      autoFixedMode: l.docx_virtual_visibility_auto_fixed_mode,
      didChangeNodesRecordStoreSize: l.docx_virtual_did_change_node_record_store_size,
      idleRenderOptions: u,
      enableForceSetScrollTop: (n = l.docx_virtual_force_set_scrolltop_enable) === null || n === undefined || n,
      renderLimitTime: l.docx_virtual_scroll_render_limit_cost ?? 16,
      cacheCountLimit: isNaN(parseInt(g.cacheCountLimit)) ? l.docx_virtual_scroll_cache_count_limit ?? 100 : parseInt(g.cacheCountLimit)
    };
  }
  function E() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.virtual.memory_optimize", false);
  }
  function C() {
    return docxFeatureFlags.isAyEnabled() || boolDefaultGetterUtil.getDefaultBool("ccm.docx.anchor_position_optimization", false);
  }
  function k() {
    return {
      enableVirtualMemoryOptimize: m(g.enableVirtualMemoryOptimize, E()),
      disableVirtualDidUpdateNest: boolDefaultGetterUtil.getDefaultBool("ccm.docx.virtual.did_change_nodes_nest", false),
      useNextTargetFinderV2: docxFeatureFlags.isMobileLargeDocIdle(),
      useNoLayoutAnchorLock: docxFeatureFlags.isAyEnabled() || boolDefaultGetterUtil.getDefaultBool("ccm.docx.lock_no_layout_anchor", false),
      useLongDefaultAnchorLockTime: C(),
      clearAnchorWhenNotInViewport: docxFeatureFlags.isAyEnabled()
    };
  }
  let w = new Set([docBlockTypeConstants.blockTypeConstants.TEXT, docBlockTypeConstants.blockTypeConstants.HEADING1, docBlockTypeConstants.blockTypeConstants.HEADING2, docBlockTypeConstants.blockTypeConstants.HEADING3, docBlockTypeConstants.blockTypeConstants.HEADING4, docBlockTypeConstants.blockTypeConstants.HEADING5, docBlockTypeConstants.blockTypeConstants.HEADING6, docBlockTypeConstants.blockTypeConstants.HEADING7, docBlockTypeConstants.blockTypeConstants.HEADING8, docBlockTypeConstants.blockTypeConstants.HEADING9, docBlockTypeConstants.blockTypeConstants.ORDERED, docBlockTypeConstants.blockTypeConstants.BULLET, docBlockTypeConstants.blockTypeConstants.TODO]);
  if (boolDefaultGetterUtil.getDefaultBool("ccm.docx.virtual.image_memory_recycle", false)) {
    w.add(docBlockTypeConstants.blockTypeConstants.IMAGE);
  }
  require.d(exports, {
    getVirtualConfig: function () {
      return w;
    },
    isAnchorOptimized: function () {
      return k;
    },
    isMemoryRecycle: function () {
      return C;
    },
    isNextFinderV2: function () {
      return _;
    },
    isLayoutEnabled: function () {
      return E;
    },
    TEXT_BLOCK_TYPES: function () {
      return b;
    },
    isAnchorLockLong: function () {
      return y;
    }
  });
}