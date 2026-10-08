// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'lr' to 'isValidPageId'
// - Renamed export 'fZ' to 'getPageUpgradeInfo'
// - Renamed export 'Jn' to 'isNonLarkPage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 259114
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var businessSkillEnums = require("business-skill-enums") /*id: 594084*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let l = async function (e, t = false) {
    try {
      if (t) {
        return {
          status: businessSkillEnums.TaskStatus.None,
          page_type: e.page_type,
          dst_page_id: e.page_id
        };
      }
      let n = await apiServicesCollection.OtterDocApiService.AGWGetPageUpgradeStatus(e);
      if (n.code === 0 && n.data) {
        return n.data;
      }
      throw Error(`[resp_error]: ${JSON.stringify(n)}`);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_agw_page_upgrade_status_error",
        error: e
      });
      throw e;
    }
  };
  async function s(e) {
    let {
      pageType: n
    } = (await d(e)) ?? {};
    return n !== businessSkillEnums.EditorType.Lark;
  }
  let c = new Map();
  async function d(e) {
    let t = c.get(e);
    if (t) {
      return t;
    }
    let n = m(e).finally(() => {
      c.delete(e);
    });
    c.set(e, n);
    return n;
  }
  let u = new Map();
  let _ = e => ({
    upgradeStatus: businessSkillEnums.TaskStatus.Succeeded,
    pageType: businessSkillEnums.EditorType.Lark,
    dstPageId: e
  });
  async function m(e) {
    var c;
    if (e && u.has(e)) {
      return u.get(e);
    }
    let d = v(e);
    let m = !!(c = e) && c.length < 20;
    if (!d && !m) {
      u.set(e, _(e));
      return _(e);
    }
    let f = await l({
      page_id: e,
      page_type: m ? businessSkillEnums.EditorType.Markdown : businessSkillEnums.EditorType.Otter
    }, false).catch(emptyExportFunction.emptyFunction);
    if ((f == null ? undefined : f.status) === businessSkillEnums.TaskStatus.Succeeded) {
      u.set(e, {
        upgradeStatus: f == null ? undefined : f.status,
        pageType: (f == null ? undefined : f.page_type) ?? businessSkillEnums.EditorType.Otter,
        dstPageId: (f == null ? undefined : f.dst_page_id) ?? ""
      });
    }
    return {
      upgradeStatus: (f == null ? undefined : f.status) ?? businessSkillEnums.TaskStatus.None,
      pageType: (f == null ? undefined : f.page_type) ?? businessSkillEnums.EditorType.Otter,
      dstPageId: (f == null ? undefined : f.dst_page_id) ?? ""
    };
  }
  function v(e) {
    if (!e || e.length < 15) {
      return false;
    }
    let t = e[0];
    return !(t < "A") && !(t > "Z") && !e.startsWith("dox") && e[4] === "f" && e[9] === "d" && e[14] === "c";
  }
  require.d(exports, {
    isValidPageId: function () {
      return v;
    },
    getPageUpgradeInfo: function () {
      return d;
    },
    isNonLarkPage: function () {
      return s;
    }
  });
}