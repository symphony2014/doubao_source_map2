// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'tokenTypes'
// - Renamed export 'U' to 'parseTextLinks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 266843
         */
module.exports = function (module, exports, require) {
  var i;
  var emailValidator = require("email-validator") /*id: 339725*/;
  let o = "https?|s?ftp|ftps|nfs|ssh";
  let l = "\\b([/#?][\\-A-Z0-9@:%_+.~#?&'/=;$,!\\*\\[\\]\\(\\){}^|<>]*[-A-Z0-9&@#/%=~\\(\\)_|]?)?";
  let a = RegExp(`((((${o})://)?(${/localhost(:[0-9]{2,5})?/.source}))|(((${o})://)(${/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(2[0-4][0-9]|25[0-5]|1[0-9]{2}|[1-9][0-9]|[0-9])(:[0-9]{2,5})?/.source})))${l}`, "gi");
  let s = "([-A-Z0-9%_+~#@][\\-A-Z:0-9%_+~#@]{0,256}\\.){1,50}";
  let c = "[a-z\\-]{2,15}";
  let d = RegExp(`(((${o}):\\/\\/${s}${c})|(${s}(com|cn|tk|de|net|org|uk|info|nl|ru|hk)))(:[0-9]{2,5})?${l}`, "gi");
  let u = "[\\w.!#$%&'*+-/=?^_\\`{|}~]{1,2000}@[A-Za-z0-9_.-]+\\.";
  let p = RegExp(`^(?!data:)((mailto:${u}${c})|(${u}(com|org|net|int|edu|gov|mil|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gp|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|site|top|wtf|xxx|xyz|cloud|engineering|help|one)))\\b`, "gi");
  let h = RegExp(`(${a.source})|(${d.source})|(${p.source})`, "gi");
  (i = {})[i.text = 0] = "text";
  i[i.link = 1] = "link";
  let m = i;
  let f = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">"
  };
  let g = Object.keys(f);
  let v = Object.values(f);
  let b = [".", ",", "!", "?", "'", ":", ";", "@", "#"];
  let y = e => {
    let t = -1;
    let n = [];
    for (let i = 0; i < e.length; ++i) {
      let r = e[i];
      if (g.includes(r)) {
        n.push({
          char: r,
          index: i
        });
      } else if (v.includes(r)) {
        if (n.length) {
          let {
            char: e
          } = n[n.length - 1];
          if (r === f[e]) {
            n.pop();
          } else {
            ({
              index: t
            } = n[0]);
            break;
          }
        } else {
          t = i;
          break;
        }
      }
    }
    if (n.length) {
      ({
        index: t
      } = n[0]);
    }
    if (t === -1) {
      t = e.length;
    }
    while (t > 1 && b.includes(e[t - 1])) {
      t--;
    }
    return e.slice(0, t);
  };
  let x = e => {
    let t = [];
    let n = 0;
    for (h.lastIndex = 0;;) {
      let i = h.exec(e);
      if (!i) {
        break;
      }
      let {
        index: o,
        0: l
      } = i;
      let a = e.slice(n, o);
      if (a) {
        t.push({
          type: m.text,
          text: a
        });
      }
      if (l) {
        let e = /^(@|#|\+|-|%)+/.exec(l);
        if (e) {
          t.push({
            type: m.text,
            text: e[0]
          });
          n = i.index + e[0].length;
          h.lastIndex = n;
        } else {
          let e = y(l);
          if (e) {
            if (emailValidator.validate(e)) {
              t.push({
                type: m.text,
                text: e
              });
            } else {
              t.push({
                type: m.link,
                url: e
              });
            }
            n = i.index + e.length;
            h.lastIndex = n;
          } else {
            let e = l.slice(0, 1);
            t.push({
              type: m.text,
              text: e
            });
            n = i.index + e.length;
            h.lastIndex = n;
          }
        }
      }
    }
    if (n !== e.length) {
      t.push({
        type: m.text,
        text: e.slice(n)
      });
    }
    return t;
  };
  require.d(exports, {
    tokenTypes: function () {
      return m;
    },
    parseTextLinks: function () {
      return x;
    }
  });
}