// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'EditorDataManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 508496
         */
module.exports = function (module, exports, require) {
  var changesetOperationsCore = require("changeset-operations-core") /*id: 378584*/;
  var editorDebugHelper = require("editor-debug-helper") /*id: 248384*/;
  var deepEqualityCheck = require("deep-equality-check") /*id: 875502*/;
  var u = deepEqualityCheck;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  function _(e = {}, n = {}) {
    Object.keys(n).forEach(r => {
      e[r] = n[r];
    });
    return e;
  }
  class l extends editorDebugHelper.EditorDebugHelper {
    static createEmptyInputData() {
      return {
        alltext: "",
        size: 0,
        nodes: []
      };
    }
    static createEmptyClientVars() {
      return {
        apool: {
          nextNum: 0,
          numToAttrib: {}
        },
        initialAttributedTexts: {
          attribs: {
            0: ""
          },
          text: {
            0: ""
          }
        }
      };
    }
    static serialize(e) {
      if (!e) {
        return this.createEmptyInputData();
      }
      let {
        initialAttributedTexts: n,
        apool: r
      } = e;
      let {
        attribs: o,
        text: a
      } = n;
      let u = new changesetOperationsCore.AttribPool().fromJsonable(r);
      let c = o["0"];
      let _ = a["0"];
      return {
        alltext: a["0"],
        size: a["0"].length,
        nodes: function (e, n, r) {
          let o = [];
          let a = changesetOperationsCore.createOpIterator(e);
          let u = 0;
          while (a.hasNext()) {
            let e = a.next();
            let c = {};
            let {
              attribs: _,
              chars: l,
              opcode: s
            } = e;
            if (_) {
              changesetOperationsCore.iterateAttribs(_, e => {
                c[r.getAttribKey(e)] = r.getAttribValue(e);
              });
            }
            let E = Object.keys(c).length;
            if (s === "+") {
              let e = n.substr(u, l);
              let r = {
                text: n.substr(u, l)
              };
              if (E) {
                r.mark = c;
              }
              o.push(r);
              u += e.length;
            }
          }
          return o;
        }(c, _, u)
      };
    }
    static deserialize(e) {
      if (!e.nodes.length) {
        return this.createEmptyClientVars();
      }
      let {
        nodes: n,
        size: r,
        alltext: o
      } = e;
      let a = changesetOperationsCore.buildChangeset(r, "Z", "0");
      let u = function (e) {
        let n = {};
        let r = 0;
        let i = new Set();
        for (let o of e) {
          for (let e of Object.entries(o.mark || {})) {
            if (typeof e[1] != "string") {
              e[1] = String(e[1]);
            }
            let o = String(e);
            if (!i.has(o)) {
              i.add(o);
              n[r] = e;
              r++;
            }
          }
        }
        return {
          numToAttrib: n,
          nextNum: r
        };
      }(n);
      let c = new changesetOperationsCore.AttribPool().fromJsonable(u);
      for (let e of n) {
        let n = Object.entries(e.mark || {});
        a.insert(e.text, n, c);
      }
      return {
        initialAttributedTexts: {
          text: {
            0: o
          },
          attribs: {
            0: changesetOperationsCore.parseChangeset(a.toString())["0"].ops
          }
        },
        apool: u
      };
    }
    static deserializePlainText(e) {
      let n = {
        alltext: e,
        size: e.length,
        nodes: [{
          text: e
        }]
      };
      return this.deserialize(n);
    }
    static getPlainText(e) {
      if (e) {
        if (typeof e == "string") {
          return e;
        } else {
          return e.initialAttributedTexts.text["0"];
        }
      } else {
        return "";
      }
    }
    static isEmpty(e) {
      let n = this.getPlainText(e);
      return !n || n === "\n";
    }
    static getSize(e) {
      return this.getPlainText(e).length;
    }
    static replaceMark(e, n, r) {
      return this.replaceMarkKV(e, n, (e, n) => [e, r(e, n)]);
    }
    static replaceMarkKV(e, n, r) {
      let o = new changesetOperationsCore.AttribPool().fromJsonable(e.apool);
      this.eachMark(e, (e, i) => {
        if (e === n) {
          let n = o.getAttribNum(String([e, i]));
          o.updateAttrib(n, r(e, i));
        }
      });
      e.apool = o.toJsonable();
    }
    static addMark(e, n = []) {
      let r = function (e, n, r) {
        let i = {};
        let o = 0;
        e.nodes.forEach(e => {
          let [n, r] = [o, o += e.text.length];
          for (let o = n; o < r; o++) {
            i[o] = _(i[o] || {}, e.mark);
          }
        });
        n.forEach(e => {
          let [n, r] = e.range;
          for (let o = n; o < r; o++) {
            i[o] = _(i[o], e.mark);
          }
        });
        r.forEach(e => {
          let [n, r] = e.range;
          for (let o = n; o < r; o++) {
            i[o] = function (e = {}, n) {
              if (Array.isArray(n)) {
                for (let r of n) {
                  if (Object.prototype.hasOwnProperty.call(e, r)) {
                    delete e[r];
                  }
                }
              } else {
                n = n || {};
                for (let r in e) {
                  if (Object.prototype.hasOwnProperty.call(n, r)) {
                    delete e[r];
                  }
                }
              }
              if (!isEmptyUtil.isEmpty(e)) {
                return e;
              }
            }(i[o], e.mark) || {};
          }
        });
        let a = [];
        Object.keys(i).reduce((e, n) => {
          if (e !== null && Number(e) + 1 !== Number(n)) {
            a.push([Number(n)]);
          } else {
            var r;
            var o;
            if (e !== null && (r = i[e], o = i[n], u(r, o))) {
              a[a.length - 1].push(Number(n));
            } else {
              a.push([Number(n)]);
            }
          }
          return n;
        }, null);
        let l = a.map(n => {
          var r;
          if (n.length === 1) {
            n = [n[0], n[0] + 1];
          } else if (n.length > 1) {
            n = [n[0], n[n.length - 1] + 1];
          }
          let o = i[n[0]];
          if ((r = {
            text: e.alltext.slice(n[0], n[1]),
            mark: o
          }).mark === undefined) {
            delete r.mark;
          }
          return r;
        });
        return {
          ...e,
          nodes: l
        };
      }(l.serialize(e), n, []);
      return l.deserialize(r);
    }
    static eachMark(e, n) {
      return new changesetOperationsCore.AttribPool().fromJsonable(e.apool).eachAttrib(n);
    }
    static eachMarkByKey(e, n, r) {
      this.eachMark(e, (e, i) => {
        if (e === n) {
          r(i);
        }
      });
    }
  }
  require.d(exports, {
    EditorDataManager: function () {
      return l;
    }
  });
}