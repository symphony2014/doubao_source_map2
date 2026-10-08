// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Uc' to 'historyService'
// - Renamed export 'jL' to 'splitVersionRanges'
// - Renamed export 'nP' to 'mergeHistoryChanges'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72566.6916328b.js
         * chunkId: 72566
         * moduleId: 837313
         */
module.exports = function (module, exports, require) {
  var r;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  var docxHistoryConstants = require("docx-history-constants") /*id: 995012*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var l = {
    default: require("document-change-history") /*id: 71757*/,
    running: {
      code: 0,
      msg: "Success",
      data: {
        status: 0
      }
    },
    fail: {
      code: 0,
      msg: "Success",
      data: {
        status: 2
      }
    },
    error: {
      code: 1,
      msg: "Fail"
    }
  };
  var h = {
    fetchHistoryList: {
      default: require("document-history-mock") /*id: 663717*/,
      old: {
        code: 0,
        msg: "Success",
        data: {
          major_history: [{
            id: "major_history_id1",
            version: 0,
            name: "需求评审定稿",
            edit_time: 1617883379,
            minor_history: [{
              id: "minor_history1",
              version: 0.1,
              name: "string",
              edit_time: 123456789,
              type: 2,
              user_id: ["12345678"],
              content: {
                changes: [{
                  block_token: "doccnYlCS3JnaulaZC1qXVOfNCh",
                  block_type: "DOC_BLOCK",
                  rev_range: [1, 10]
                }],
                revert_version: {
                  time: 123456789,
                  id: "string"
                },
                origin: {
                  icon: {
                    type: 1,
                    key: "string",
                    fs_unit: "string"
                  },
                  title: "string"
                },
                now: {
                  icon: {
                    type: 1,
                    key: "string",
                    fs_unit: "string"
                  },
                  title: "string"
                }
              }
            }, {
              id: "minor_history2",
              version: 0.2,
              name: "string",
              edit_time: 123456789,
              type: 2,
              user_id: ["12345678"],
              content: {
                changes: [{
                  block_token: "doccnYlCS3JnaulaZC1qXVOfNCh",
                  block_type: "DOC_BLOCK",
                  rev_range: [1, 27]
                }],
                origin: {
                  title: "string"
                },
                now: {
                  title: "string"
                }
              }
            }, {
              id: "minor_history3",
              version: 0.3,
              name: "string",
              edit_time: 123456789,
              type: 2,
              user_id: ["12345678"],
              content: {
                changes: [{
                  block_token: "doccnYlCS3JnaulaZC1qXVOfNCh",
                  block_type: "DOC_BLOCK",
                  rev_range: [1, 30]
                }, {
                  block_token: "bascnW1nVcill2UU1OZ2CSKVr1g_tblDrQXOW9",
                  block_type: "BITABLE_BLOCK",
                  rev_range: [1, 3]
                }],
                revert_version: {
                  time: 123456789,
                  id: "string"
                },
                origin: {
                  icon: {
                    type: 1,
                    key: "string",
                    fs_unit: "string"
                  },
                  title: "string"
                },
                now: {
                  icon: {
                    type: 1,
                    key: "string",
                    fs_unit: "string"
                  },
                  title: "string"
                }
              }
            }],
            type: 1,
            user_id: ["12345678"],
            content: {
              changes: [{
                block_token: "doccnYlCS3JnaulaZC1qXVOfNCh",
                block_type: "DOC_BLOCK",
                rev_range: [1, 10]
              }],
              revert_version: {
                time: 143456789
              },
              origin: {
                icon: {
                  type: 2,
                  key: "531967b7-d010-4404-8f89-41348976becg",
                  fs_unit: "eu_nc-cdn"
                }
              },
              now: {
                icon: {
                  type: 2,
                  key: "41d41fdb-6e22-4df2-b913-6932df85516g",
                  fs_unit: "heu_nc-cdn"
                }
              }
            }
          }, {
            id: "major_history_id2",
            version: 1,
            name: "",
            edit_time: 1594176346,
            minor_history: [{
              id: "minor_history1",
              version: 1.1,
              edit_time: 123456789,
              type: 1,
              user_id: ["12345678"],
              content: {
                changes: [{
                  block_token: "doccnYlCS3JnaulaZC1qXVOfNCh",
                  block_type: "DOC_BLOCK",
                  rev_range: [1, 10]
                }],
                revert_version: {
                  time: 123456789,
                  id: "string"
                },
                origin: {
                  icon: {
                    type: 1,
                    key: "string",
                    fs_unit: "string"
                  },
                  title: "需求测试"
                },
                now: {
                  icon: {
                    type: 1,
                    key: "string",
                    fs_unit: "string"
                  },
                  title: "string"
                }
              }
            }],
            type: 1,
            user_id: ["12345678"],
            content: {
              changes: [{
                block_token: "doccnYlCS3JnaulaZC1qXVOfNCh",
                block_type: "DOC_BLOCK",
                rev_range: [1, 33]
              }, {
                block_token: "bascnW1nVcill2UU1OZ2CSKVr1g_tblDrQXOW9",
                block_type: "BITABLE_BLOCK",
                rev_range: [1, 3]
              }],
              origin: {
                icon: {
                  type: 2,
                  key: "531967b7-d010-4404-8f89-41348976becg",
                  fs_unit: "eu_nc-cdn"
                },
                title: "测试文档初稿"
              },
              now: {
                icon: {
                  type: 2,
                  key: "41d41fdb-6e22-4df2-b913-6932df85516g",
                  fs_unit: "heu_nc-cdn"
                },
                title: "测试文档二稿"
              }
            }
          }, {
            id: "major_history_id4",
            version: 2,
            name: "string 4",
            edit_time: 1594051200,
            minor_history: [{
              id: "minor_history1",
              version: 2.1,
              name: "string",
              edit_time: 123456789,
              type: 1,
              user_id: ["string"],
              content: {
                changes: [{
                  block_token: "doccnYlCS3JnaulaZC1qXVOfNCh",
                  block_type: "DOC_BLOCK",
                  rev_range: [1, 10]
                }],
                revert: {
                  time: 123456789,
                  id: "string"
                },
                origin: {
                  icon: {
                    type: 1,
                    key: "string",
                    fs_unit: "string"
                  },
                  title: "string"
                },
                now: {
                  icon: {
                    type: 1,
                    key: "string",
                    fs_unit: "string"
                  },
                  title: "string"
                }
              }
            }],
            type: 1,
            user_id: ["string"],
            content: {
              changes: [{
                block_token: "doccnYlCS3JnaulaZC1qXVOfNCh",
                block_type: "DOC_BLOCK",
                rev_range: [1, 53]
              }, {
                block_token: "bascnW1nVcill2UU1OZ2CSKVr1g_tblDrQXOW9",
                block_type: "BITABLE_BLOCK",
                rev_range: [1, 3]
              }, {
                block_token: "shtcnyNekk4juKGw6uJKis1yrCg",
                block_type: "SHEET_BLOCK",
                rev_range: [1, 4]
              }],
              revert_version: {
                time: 123456789
              },
              origin: {
                icon: {
                  type: 1,
                  key: "string",
                  fs_unit: "string"
                },
                title: "string"
              },
              now: {
                icon: {
                  type: "int",
                  key: "string",
                  fs_unit: "string"
                },
                title: "string"
              }
            }
          }],
          entities: {
            user: {
              12345678: {
                avatar_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594965243083&di=356d7b282289e1eea7c176feb08062af&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838685c484ab999a9014c08f11f.jpg",
                cn_name: "中文名字",
                email: "guohui@abc.com",
                en_name: "english name",
                id: "12345678",
                suid: "string",
                tanant_id: "string",
                anonymity: false
              },
              "6939807648791396371": {
                avatar_url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594965243083&di=356d7b282289e1eea7c176feb08062af&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F267f9e2f07082838685c484ab999a9014c08f11f.jpg",
                cn_name: "李雨宸",
                email: "xixixi@abc.com",
                en_name: "李雨宸",
                id: "6939807648791396371",
                suid: "string",
                tanant_id: "string",
                anonymity: false
              }
            }
          },
          has_more: true
        }
      },
      noData: {
        code: 0,
        msg: "Success",
        data: {
          major_history: [],
          entities: {
            user: {}
          },
          has_more: false
        }
      },
      error: {
        code: 1,
        msg: "Fail"
      }
    },
    fetchHistorySnapshot: {
      default: require("document-block-sample-data") /*id: 628761*/,
      error: {
        code: 1,
        msg: "Fail"
      }
    },
    revert: {
      default: {
        code: 0,
        msg: "Success",
        data: {
          query_duration: 10,
          event_id: "mock_event_id"
        }
      },
      error: {
        code: 0,
        msg: "Fail"
      }
    },
    revertACK: {
      default: {
        code: 0,
        msg: "Success",
        data: {
          status: 1
        }
      },
      running: {
        code: 0,
        msg: "Success",
        data: {
          status: 0
        }
      },
      fail: {
        code: 0,
        msg: "Success",
        data: {
          status: 2
        }
      },
      error: {
        code: 0,
        msg: "Fail"
      }
    },
    fetchChanges: l
  };
  var d = {
    fetchHistoryList: {
      isUseMock: false,
      scene: "default",
      delay: 0
    },
    fetchHistorySnapshot: {
      isUseMock: false,
      scene: "default",
      delay: 0
    },
    revert: {
      isUseMock: false,
      scene: "default",
      delay: 0
    },
    revertACK: {
      isUseMock: false,
      scene: "default",
      delay: 0
    },
    fetchChanges: {
      isUseMock: false,
      scene: "default",
      delay: 0
    }
  };
  r = {
    fetchHistoryList: docxApiConstantsExports.docxApiService.fetchHistoryList,
    fetchHistorySnapshot: docxApiConstantsExports.docxApiService.fetchHistorySnapshot,
    revert: docxApiConstantsExports.docxApiService.revert,
    revertACK: docxApiConstantsExports.docxApiService.revertACK,
    fetchChanges: p,
    revertHistoryAndGetStatus: f
  };
  Object.keys(d).forEach(t => {
    let e = d[t];
    if (!e || !e.isUseMock) {
      return;
    }
    let {
      scene: i = "default",
      delay: n = 0
    } = e;
    r[t] = async () => {
      await docxUtilityHelpers.delayPromise(n);
      let e = h[t][i];
      e.__isMock__ = true;
      return e;
    };
  });
  let c = r;
  function u(t, e) {
    let i = Math.floor((e - t) / docxHistoryConstants.historyDebounceTime);
    let r = t;
    let n = [];
    while (i) {
      let t = r;
      let e = r += docxHistoryConstants.historyDebounceTime;
      n.push([t, e]);
      i--;
    }
    if (r < e) {
      n.push([r, e]);
    }
    return n;
  }
  async function p(t) {
    let {
      page_id: e,
      from_ver: i,
      to_ver: r,
      auth_token: n,
      auth_type: s
    } = t;
    let a = u(i, r).map(t => {
      let [i, r] = t;
      return docxApiConstantsExports.docxApiService.fetchChanges({
        page_id: e,
        from_ver: i,
        to_ver: r,
        auth_token: n,
        auth_type: s
      });
    });
    return _(await Promise.all(a));
  }
  function _(t) {
    return t.slice(1).reduce((t, e) => {
      let {
        data: i
      } = t;
      let {
        data: r
      } = e;
      for (let t in r.changes) {
        if (t in i.changes) {
          i.changes[t] = i.changes[t].concat(r.changes[t]);
        } else {
          i.changes[t] = r.changes[t];
        }
      }
      i.new_blocks = Object.assign(i.new_blocks || {}, r.new_blocks);
      i.users &&= Object.assign(i.users, r.users);
      return Object.assign(t, {
        data: i
      });
    }, t[0]);
  }
  async function f(t) {
    let e = await c.revert(t);
    let {
      task_id: i,
      query_duration: r = 60
    } = e.data;
    let o = Math.round(r / 2);
    let a = true;
    let l = 0;
    for (await collaborativeEditingFlowSyncModule._v(2000); a;) {
      l++;
      let e = await c.revertACK({
        task_id: i,
        page_id: t.page_id
      });
      let {
        status: r
      } = e.data;
      let h = l >= o;
      if (!(a = r === docxHistoryConstants.HistoryStatusCodes.RUNNING && !h)) {
        if (h) {
          e.data.isTimeout = true;
        }
        return e;
      }
      await collaborativeEditingFlowSyncModule._v(2000);
    }
    return e;
  }
  require.d(exports, {
    historyService: function () {
      return c;
    },
    splitVersionRanges: function () {
      return u;
    },
    mergeHistoryChanges: function () {
      return _;
    }
  });
}