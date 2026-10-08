// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createEmojiReplacer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 656896
         */
module.exports = function (module, exports, require) {
  var emojiDataConstants = require("emoji-data-constants") /*id: 211667*/;
  var emojiGraphemeRegexFactory = require("emoji-grapheme-regex-factory") /*id: 936818*/;
  var runtimeTypeChecker = require("runtime-type-checker") /*id: 623935*/;
  require("emoji-skin-tone-modifier") /*id: 422022*/;
  emojiGraphemeRegexFactory();
  var i = RegExp(String.fromCharCode(65039), "g");
  var s = Object.entries(emojiDataConstants.lib).map(([e, {
    char: a
  }]) => [e, a]);
  var l = new Map(s);
  s.map(([e, a]) => [a.replace(i, ""), e]);
  var c = e => {
    runtimeTypeChecker.assert.string(e);
    return l.get(/:.+:/.test(e) ? e.slice(1, -1) : e);
  };
  let u = [{
    description: "angry face",
    emoji: "😠",
    emoticons: [">:(", ">:[", ">:-(", ">:-[", ">=(", ">=[", ">=-(", ">=-["],
    name: "angry",
    tags: ["mad", "annoyed"]
  }, {
    description: "smiling face with smiling eyes",
    emoji: "😊",
    emoticons: [":\")", ":\"]", ":\"D", ":-\")", ":-\"]", ":-\"D", "=\")", "=\"]", "=\"D", "=-\")", "=-\"]", "=-\"D"],
    name: "blush",
    tags: ["proud"]
  }, {
    description: "broken heart",
    emoji: "💔",
    emoticons: ["<\\3", "</3"],
    name: "broken_heart",
    tags: []
  }, {
    description: "confused face",
    emoji: "😕",
    emoticons: [":/", ":\\", ":-/", ":-\\", "=/", "=\\", "=-/", "=-\\"],
    name: "confused",
    tags: []
  }, {
    description: "crying face",
    emoji: "😢",
    emoticons: [":,(", ":,[", ":,|", ":,-(", ":,-[", ":,-|", ":'(", ":'[", ":'|", ":'-(", ":'-[", ":'-|", "=,(", "=,[", "=,|", "=,-(", "=,-[", "=,-|", "='(", "='[", "='|", "='-(", "='-[", "='-|", "T-T"],
    name: "cry",
    tags: ["sad", "tear"]
  }, {
    description: "frowning face with open mouth",
    emoji: "😦",
    emoticons: [":(", ":[", ":-(", ":-[", "=(", "=[", "=-(", "=-["],
    name: "frowning",
    tags: []
  }, {
    description: "red heart",
    emoji: "❤️",
    emoticons: ["<3"],
    name: "heart",
    tags: ["love"]
  }, {
    description: "angry face with horns",
    emoji: "👿",
    emoticons: ["]:(", "]:[", "]:-(", "]:-[", "]=(", "]=[", "]=-(", "]=-["],
    name: "imp",
    tags: ["angry", "devil", "evil", "horns"]
  }, {
    description: "smiling face with halo",
    emoji: "😇",
    emoticons: ["o:)", "o:]", "o:D", "o:-)", "o:-]", "o:-D", "o=)", "o=]", "o=D", "o=-)", "o=-]", "o=-D", "O:)", "O:]", "O:D", "O:-)", "O:-]", "O:-D", "O=)", "O=]", "O=D", "O=-)", "O=-]", "O=-D", "0:)", "0:]", "0:D", "0:-)", "0:-]", "0:-D", "0=)", "0=]", "0=D", "0=-)", "0=-]", "0=-D"],
    name: "innocent",
    tags: ["angel"]
  }, {
    description: "face with tears of joy",
    emoji: "😂",
    emoticons: [":,)", ":,]", ":,D", ":,-)", ":,-]", ":,-D", ":')", ":']", ":'D", ":'-)", ":'-]", ":'-D", "=,)", "=,]", "=,D", "=,-)", "=,-]", "=,-D", "=')", "=']", "='D", "='-)", "='-]", "='-D"],
    name: "joy",
    tags: ["tears"]
  }, {
    description: "kissing face",
    emoji: "😗",
    emoticons: [":*", ":-*", "=*", "=-*"],
    name: "kissing",
    tags: []
  }, {
    description: "grinning squinting face",
    emoji: "😆",
    emoticons: ["x)", "x]", "xD", "x-)", "x-]", "x-D", "X)", "X]", "X-)", "X-]", "X-D"],
    name: "laughing",
    tags: ["happy", "haha"]
  }, {
    description: "man",
    emoji: "👨",
    emoticons: [":3", ":-3", "=3", "=-3", ";3", ";-3", "x3", "x-3", "X3", "X-3"],
    name: "man",
    tags: ["mustache", "father", "dad"]
  }, {
    description: "neutral face",
    emoji: "😐",
    emoticons: [":|", ":-|", "=|", "=-|"],
    name: "neutral_face",
    tags: ["meh"]
  }, {
    description: "face without mouth",
    emoji: "😶",
    emoticons: [":-"],
    name: "no_mouth",
    tags: ["mute", "silence"]
  }, {
    description: "face with open mouth",
    emoji: "😮",
    emoticons: [":o", ":O", ":0", ":-o", ":-O", ":-0", "=o", "=O", "=0", "=-o", "=-O", "=-0"],
    name: "open_mouth",
    tags: ["surprise", "impressed", "wow"]
  }, {
    description: "enraged face",
    emoji: "😡",
    emoticons: [":@", ":-@", "=@", "=-@"],
    name: "rage",
    tags: ["angry"]
  }, {
    description: "grinning face with smiling eyes",
    emoji: "😄",
    emoticons: [":D", ":-D", "=D", "=-D"],
    name: "smile",
    tags: ["happy", "joy", "laugh", "pleased"]
  }, {
    description: "grinning face with big eyes",
    emoji: "😃",
    emoticons: [":)", ":]", ":-)", ":-]", "=)", "=]", "=-)", "=-]"],
    name: "smiley",
    tags: ["happy", "joy", "haha"]
  }, {
    description: "smiling face with horns",
    emoji: "😈",
    emoticons: ["]:)", "]:]", "]:D", "]:-)", "]:-]", "]:-D", "]=)", "]=]", "]=D", "]=-)", "]=-]", "]=-D"],
    name: "smiling_imp",
    tags: ["devil", "evil", "horns"]
  }, {
    description: "loudly crying face",
    emoji: "😭",
    emoticons: [":,'(", ":,'[", ":,'-(", ":,'-[", ":',(", ":',[", ":',-(", ":',-[", "=,'(", "=,'[", "=,'-(", "=,'-[", "=',(", "=',[", "=',-(", "=',-["],
    name: "sob",
    tags: ["sad", "cry", "bawling"]
  }, {
    description: "face with tongue",
    emoji: "😛",
    emoticons: [":p", ":P", ":d", ":-p", ":-P", ":-d", "=p", "=P", "=d", "=-p", "=-P", "=-d"],
    name: "stuck_out_tongue",
    tags: []
  }, {
    description: "squinting face with tongue",
    emoji: "😝",
    emoticons: ["xP", "x-p", "x-P", "x-d", "Xp", "Xd", "X-p", "X-P", "X-d"],
    name: "stuck_out_tongue_closed_eyes",
    tags: ["prank"]
  }, {
    description: "winking face with tongue",
    emoji: "😜",
    emoticons: [";p", ";P", ";d", ";-p", ";-P", ";-d"],
    name: "stuck_out_tongue_winking_eye",
    tags: ["prank", "silly"]
  }, {
    description: "smiling face with sunglasses",
    emoji: "😎",
    emoticons: ["8)", "8]", "8D", "8-)", "8-]", "8-D", "B)", "B]", "B-)", "B-]", "B-D"],
    name: "sunglasses",
    tags: ["cool"]
  }, {
    description: "downcast face with sweat",
    emoji: "😓",
    emoticons: [",:(", ",:[", ",:-(", ",:-[", ",=(", ",=[", ",=-(", ",=-[", "':(", "':[", "':-(", "':-[", "'=(", "'=[", "'=-(", "'=-["],
    name: "sweat",
    tags: []
  }, {
    description: "grinning face with sweat",
    emoji: "😅",
    emoticons: [",:)", ",:]", ",:D", ",:-)", ",:-]", ",:-D", ",=)", ",=]", ",=D", ",=-)", ",=-]", ",=-D", "':)", "':]", "':D", "':-)", "':-]", "':-D", "'=)", "'=]", "'=D", "'=-)", "'=-]", "'=-D"],
    name: "sweat_smile",
    tags: ["hot"]
  }, {
    description: "unamused face",
    emoji: "😒",
    emoticons: [":$", ":s", ":z", ":S", ":Z", ":-$", ":-s", ":-z", ":-S", ":-Z", "=$", "=s", "=z", "=S", "=Z", "=-$", "=-s", "=-z", "=-S", "=-Z"],
    name: "unamused",
    tags: ["meh"]
  }, {
    description: "winking face",
    emoji: "😉",
    emoticons: [";)", ";]", ";D", ";-)", ";-]", ";-D"],
    name: "wink",
    tags: ["flirt"]
  }];
  var eventTextReplaceUtil = require("event-text-replace-util") /*id: 92199*/;
  let p = /:\+1:|:-1:|:[\w-]+:/g;
  let f = /[$@|*'",;.=:\-)([\]\\/<>038BOopPsSdDxXzZ]{2,5}/g;
  let g = /(?:_|-(?!1))/g;
  let y = {
    padSpaceAfter: false,
    emoticon: false,
    accessible: false
  };
  var h = e => {
    let a = Object.assign({}, y, e);
    let t = !!a.padSpaceAfter;
    let r = !!a.emoticon;
    let n = !!a.accessible;
    function o(e, a) {
      return {
        type: "text",
        value: e,
        data: {
          hName: "span",
          hProperties: {
            role: "img",
            ariaLabel: a
          },
          hChildren: [{
            type: "text",
            value: e
          }]
        }
      };
    }
    let i = [[p, function (e) {
      let a = c(e);
      return a !== undefined && ((t && (a += " "), n) ? o(a, e.slice(1, -1).replace(g, " ") + " emoji") : a);
    }]];
    if (r) {
      i.push([f, function (e) {
        let a = u.find(a => a.emoticons.includes(e));
        let r = u.find(a => a.emoticons.includes(e.slice(0, -1)));
        let i = a || r;
        if (!i) {
          return false;
        }
        let s = !a && r ? e.slice(-1) : "";
        let l = i.emoji + (t ? " " : "") + s;
        if (n) {
          return o(l, i.name + " emoticon");
        } else {
          return l;
        }
      }]);
    }
    return function (e) {
      eventTextReplaceUtil.replaceTextContent(e, i);
    };
  };
  require.d(exports, {
    createEmojiReplacer: function () {
      return h;
    }
  });
}