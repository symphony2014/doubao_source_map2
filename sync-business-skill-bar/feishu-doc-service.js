// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$G' to 'downloadDocStream'
// - Renamed export 'A8' to 'getExportResult'
// - Renamed export 'Bq' to 'FeishuDocErrors'
// - Renamed export 'Nb' to 'cloneFeishuDoc'
// - Renamed export 'T0' to 'createFeishuDoc'
// - Renamed export 'vU' to 'createExportJob'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28074.36f432f6.js
         * chunkId: 28074
         * moduleId: 724566
         */
module.exports = function (module, exports, require) {
  var feishuAccessTokenService = require("feishu-access-token-service") /*id: 578645*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var appIdentityUtils = require("app-identity-utils") /*id: 604117*/;
  let o = "https://www.feishu.cn";
  let l = async () => {
    let e = feishuAccessTokenService.getFeishuAccessTokenService();
    return await (e == null ? undefined : e.getAuthHeadersAsync());
  };
  function s() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      let t = Math.random() * 16 | 0;
      return (e === "x" ? t : t & 3 | 8).toString(16);
    });
  }
  let c = async (e, t) => {
    let i = await l();
    let n = appIdentityUtils.getIdentityHeaders();
    if (t.body instanceof FormData || t.body instanceof URLSearchParams) {
      t.headers = {
        ...i,
        ...n,
        ...t.headers
      };
    } else {
      t.headers = {
        ...t.headers,
        "Content-Type": "application/json",
        ...n,
        ...i
      };
    }
    let r = await fetch(e, t);
    if (r.status !== 200) {
      throw Error(`fetch feishu api failed, status: ${r.status}`);
    }
    return r;
  };
  let d = async (e, t) => c(e, t).then(e => e.json());
  let u = async e => {
    let {
      parent_token: t = "",
      use_sync: i = false
    } = e;
    if (i) {
      return h({
        parent_token: t
      });
    } else {
      return m({
        parent_token: t
      });
    }
  };
  let h = async e => {
    let {
      parent_token: i = ""
    } = e;
    let n = new URLSearchParams();
    n.append("type", "22");
    n.append("parent_token", i);
    n.append("uuid", s());
    let r = await d(`${o}/space/api/explorer/v2/create/object/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: n
    });
    if (r.code !== 0) {
      throw Error(`create feishu empty doc failed, resp: ${JSON.stringify(r)}`);
    }
    let {
      entities: a
    } = r.data || {};
    if (!(a == null ? undefined : a.nodes)) {
      throw Error(`create feishu empty doc failed, resp: ${JSON.stringify(r)}`);
    }
    let {
      obj_token: l
    } = Object.values(a.nodes || {})?.[0] || {
      obj_token: ""
    };
    return {
      token: l
    };
  };
  let m = async e => {
    let {
      parent_token: t = ""
    } = e;
    let i = new URLSearchParams();
    i.append("type", "22");
    i.append("parent_token", t);
    i.append("uuid", s());
    let n = await d(`${o}/space/api/explorer/doubao/create/object/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: i
    });
    if (n.code !== 0) {
      throw Error(`create feishu empty doc failed, resp: ${JSON.stringify(n)}`);
    }
    let {
      obj_token: r
    } = n.data || {};
    if (!r) {
      throw Error(`create feishu empty doc failed, resp: ${JSON.stringify(n)}`);
    }
    return {
      token: r
    };
  };
  let g = async e => {
    let {
      obj_token: t,
      parent_token: i = "",
      title: n = "",
      need_comment: a = "0",
      copy_source: l = "7",
      time_zone: s,
      ua_type: c = "Web",
      scene: u = "",
      source: h = "0"
    } = e;
    let m = new FormData();
    m.append("obj_token", t);
    m.append("obj_type", "22");
    m.append("parent_token", i);
    m.append("title", i18nTranslationUtils.i18nextTranslate("doc_title_duplicate", {
      docName: n
    }));
    m.append("need_comment", a);
    m.append("copy_source", l);
    if (s) {
      m.append("time_zone", s);
    } else {
      let {
        timeZone: e
      } = Intl.DateTimeFormat().resolvedOptions();
      m.append("time_zone", e);
    }
    m.append("ua_type", c);
    m.append("scene", u);
    m.append("source", h);
    let g = await d(`${o}/space/api/explorer/v2/clone/`, {
      method: "POST",
      body: m
    });
    if ((g == null ? undefined : g.code) !== 0 || !g.data) {
      throw Error(`create feishu doc copy failed, resp: ${JSON.stringify(g)}`);
    }
    let {
      node_list: p,
      entities: f
    } = g.data;
    let w = "";
    try {
      if (p && p.length > 0 && (f == null ? undefined : f.nodes)) {
        ({
          obj_token: w = ""
        } = f.nodes[p[0]] || {});
      }
    } catch (e) {
      throw Error(`parse feishu doc copy response failed: ${e instanceof Error ? e.message : String(e)}`);
    }
    if (!w) {
      throw Error("create feishu doc copy failed, no obj_token returned");
    }
    return {
      obj_token: w,
      obj_type: "22",
      url: `${o}/docx/${w}`,
      title: n
    };
  };
  var p = {
    NO_PERMISSION: "NO_PERMISSION"
  };
  let f = async e => {
    let {
      origin: i,
      fileType: n,
      token: r
    } = e;
    let a = `${i}/space/api/export/create/`;
    let o = await d(a, {
      method: "POST",
      body: JSON.stringify({
        event_source: "41",
        file_extension: n,
        token: r,
        type: "docx"
      })
    });
    let l = o.data?.ticket;
    if (o.code === 1002) {
      throw Error(p.NO_PERMISSION);
    }
    if (o.code !== 0 || !l) {
      throw Error("Failed to create export job");
    }
    return {
      ticket: l
    };
  };
  let w = async e => {
    let {
      origin: i,
      ticket: n,
      token: r
    } = e;
    let a = new URLSearchParams();
    a.append("synced_block_host_type", "22");
    a.append("synced_block_host_token", r);
    a.append("token", r);
    a.append("type", "docx");
    let o = `${i}/space/api/export/result/${n}?${a.toString()}`;
    let l = await d(o, {
      method: "GET"
    });
    let s = l.data?.result;
    if (l.code !== 0 || !(s == null ? undefined : s.file_token) || !(s == null ? undefined : s.file_name)) {
      throw Error("Failed to fetch export result");
    }
    return {
      fileToken: s.file_token,
      fileName: s.file_name
    };
  };
  let v = async e => {
    let {
      origin: t,
      token: i
    } = e;
    let n = new URLSearchParams();
    n.append("synced_block_host_type", "22");
    n.append("synced_block_host_token", i);
    n.append("token", i);
    n.append("type", "docx");
    let r = `${t}/space/api/box/stream/download/all/${i}?${n.toString()}`;
    return (await c(r, {
      method: "GET"
    })).blob();
  };
  require.d(exports, {
    downloadDocStream: function () {
      return v;
    },
    getExportResult: function () {
      return w;
    },
    FeishuDocErrors: function () {
      return p;
    },
    cloneFeishuDoc: function () {
      return g;
    },
    createFeishuDoc: function () {
      return u;
    },
    createExportJob: function () {
      return f;
    }
  });
}