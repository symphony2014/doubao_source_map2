// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'iframeConfigMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 464732
         */
module.exports = function (module, exports, require) {
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var iframeLayoutConstants = require("iframe-layout-constants") /*id: 147199*/;
  let a = "${matched.input}";
  let s = "(feishu|larkoffice|larksuite|larkenterprise)";
  let l = "cn|sg|us|jp|my";
  let c = {
    whimsical: {
      resizeType: 1,
      patterns: ["^https://whimsical.com/embed/(.*)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    byte_jnpm: {
      resizeType: 1,
      patterns: ["^https://([a-z]+)-pm" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/.*$", "^https://pm.gravitation" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/.*$"],
      template: a,
      border: true,
      defaultWidth: 1200,
      defaultHeight: 600
    },
    byte_dev_flow: {
      resizeType: 1,
      patterns: ["^https://devflow(-boe)?" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/space/\\d+/task/\\d+/design[?]tabKey=Review"],
      template: "${matched.input}&origin=larkDoc",
      renderLinkInMobile: true
    },
    byte_lark_devops: {
      resizeType: 1,
      patterns: ["^https://lark-devops(.boe|-staging)?" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "(/page/.+)?$"],
      template: a,
      renderLinkInMobile: true,
      border: true
    },
    byte_ml: {
      resizeType: 1,
      patterns: ["^https://ml" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/(.*)"],
      template: a,
      renderLinkInIOS: true
    }
  };
  var arrayPredicateFilterUtil = require("array-predicate-filter-util") /*id: 664399*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  let h = {
    [iframeLayoutConstants.IframeTypes.googleDrive]: {
      type: iframeLayoutConstants.IframeTypes.googleDrive,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^https?:\/\/docs\.google\.com\/([^/]+\/[^.]+.[^/]+\/)?(document|spreadsheets|presentation|forms)\/d\/([^/]+)/],
      templateFunc: e => {
        let n = e[2];
        let i = e.input;
        switch (n) {
          case "document":
            if (/\/pub\/?$/.test(i)) {
              i += "?embedded=true";
            }
            break;
          case "spreadsheets":
            if (/\/pubhtml\/?$/.test(i)) {
              i += "?widget=true&amp;headers=false";
            }
            break;
          case "presentation":
            i = i.replace(/\/pub/, "/embed");
            break;
          case "forms":
            i = `${e[0]}/viewform?embedded=true`;
        }
        return i;
      },
      renderLinkInMobile: true
    },
    [iframeLayoutConstants.IframeTypes.oneDrive]: {
      type: iframeLayoutConstants.IframeTypes.oneDrive,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^https?:\/\/onedrive\.live\.com\/\w+\.aspx\?(.+)\/?$/, /^https:\/\/onedrive\.live\.com\/embed\?(.+)&em=2$/],
      templateFunc: e => `https://onedrive.live.com/embed?${e[1].replace(/&amp;/g, "&")}&em=2`,
      renderLinkInMobile: true
    },
    [iframeLayoutConstants.IframeTypes.gmaps]: {
      type: iframeLayoutConstants.IframeTypes.gmaps,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^https?:\/\/(www\.)?google\.[a-z.]+\/maps\/place\/(.+)$/, /^https:\/\/www\.google\.com\/maps\/embed\/v1\/place\?key=.+$/, /^https?:\/\/(www\.)?google\.[a-z.]+\/maps\/@(.+)$/, /^https:\/\/www\.google\.com\/maps\/embed\/v1\/view\?key=.+$/],
      templateFunc: e => {
        if (/^https:\/\/www\.google\.com\/maps\/embed\/v1\/place.+$/.test(e.input) || /^https:\/\/www\.google\.com\/maps\/embed\/v1\/view\?key=.+$/.test(e.input)) {
          return e.input;
        }
        let {
          input: n
        } = e;
        let i = e[2];
        if (n.includes("place")) {
          let [e, n] = i.split("/");
          let r = "";
          if (n) {
            let [e, i, o] = n.substring(1).split(",");
            if (!isNaN(Number(e)) && !isNaN(Number(i))) {
              r = `&center=${e},${i}&zoom=${o}`;
            }
          }
          let o = boolDefaultGetterUtil.getDefaultBool("google_api_key", "");
          return `https://www.google.com/maps/embed/v1/place?key=${o}&q=${e}${r}&language=en`;
        }
        {
          let [e, n, r] = arrayPredicateFilterUtil.arrayPredicateFilter(i, e => e !== "?").join("").split(",");
          let o = boolDefaultGetterUtil.getDefaultBool("google_api_key", "");
          return `https://www.google.com/maps/embed/v1/view?key=${o}&center=${e},${n}&zoom=${r}&language=en`;
        }
      }
    },
    [iframeLayoutConstants.IframeTypes.tiktokCode]: {
      type: iframeLayoutConstants.IframeTypes.tiktokCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Fixed,
      patterns: [/^<iframe.+src='(https:\/\/www\.tiktok\.com\/embed\/[^']+)[^>]+><\/iframe>$/],
      templateFunc: e => e[1],
      code: true
    },
    [iframeLayoutConstants.IframeTypes.trelloCode]: {
      type: iframeLayoutConstants.IframeTypes.trelloCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Fixed,
      patterns: [/^<blockquote\sclass='trello-card'><a\shref='https?:\/\/trello\.com\/c\/(.+)'>.+<\/a><\/blockquote><script\ssrc='.+'><\/script>$/],
      templateFunc: e => `https://trello.com/embed/card?id=${e[1]}`,
      code: true
    },
    [iframeLayoutConstants.IframeTypes.vimeoCode]: {
      type: iframeLayoutConstants.IframeTypes.vimeoCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Fixed,
      patterns: [/^<iframe\ssrc='(https:\/\/player\.vimeo\.com[^']+)'.+><\/iframe>\n?(<p>.+<\/p>)?$/],
      templateFunc: e => e[1],
      code: true
    },
    [iframeLayoutConstants.IframeTypes.instagramCode]: {
      type: iframeLayoutConstants.IframeTypes.instagramCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Fixed,
      patterns: [/^<blockquote.+data-instgrm-permalink='https:\/\/www.instagram.com\/p\/([^/]+)\/[^>]+>[\s\S]+<\/blockquote>\s?<script.+src='.+www\.instagram\.com\/embed\.js'><\/script>$/],
      templateFunc: e => `https://www.instagram.com/p/${e[1]}/embed/captioned/`,
      code: true
    },
    [iframeLayoutConstants.IframeTypes.facebookCode]: {
      type: iframeLayoutConstants.IframeTypes.facebookCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Fixed,
      patterns: [/^<iframe\ssrc='(https:\/\/www.facebook.com\/plugins\/post.php[^']+)'[^>]+><\/iframe>$/],
      templateFunc: e => e[1],
      code: true,
      defaultWidth: 550,
      defaultHeight: 310
    },
    [iframeLayoutConstants.IframeTypes.googleDriveCode]: {
      type: iframeLayoutConstants.IframeTypes.googleDriveCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^<iframe.+src='(https:\/\/docs\.google\.com\/([^/]+\/[^.]+.[^/]+\/)?(?:document|spreadsheets|presentation|forms)[^']+)'[^>]*><\/iframe>$/],
      templateFunc: e => e[1],
      code: true
    },
    [iframeLayoutConstants.IframeTypes.datastudioCode]: {
      type: iframeLayoutConstants.IframeTypes.datastudioCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^<iframe.+src='(https:\/\/datastudio\.google\.com\/embed\/reporting\/[^']+)'[^>]+><\/iframe>$/],
      templateFunc: e => e[1],
      code: true
    },
    [iframeLayoutConstants.IframeTypes.openstreetmapCode]: {
      type: iframeLayoutConstants.IframeTypes.openstreetmapCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^<iframe.+src='(https:\/\/www\.openstreetmap\.org\/export\/embed\.html[^']+)'[^>]+><\/iframe>(|<br\/><small><a[^>]+>.+<\/a><\/small>)?$/],
      templateFunc: e => e[1],
      code: true
    },
    [iframeLayoutConstants.IframeTypes.figmaCode]: {
      type: iframeLayoutConstants.IframeTypes.figmaCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^<iframe.+src='(https:\/\/www.figma.com\/embed[^']+)'[^>]+><\/iframe>$/],
      templateFunc: e => e[1],
      border: true,
      code: true,
      renderLinkInMobile: true
    },
    [iframeLayoutConstants.IframeTypes.soundcloudCode]: {
      type: iframeLayoutConstants.IframeTypes.soundcloudCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Fixed,
      patterns: [/^<iframe.+src='(https:\/\/w\.soundcloud\.com\/player\/\?[^']+)'><\/iframe>/],
      templateFunc: e => e[1],
      code: true
    },
    [iframeLayoutConstants.IframeTypes.pastebinCode]: {
      type: iframeLayoutConstants.IframeTypes.pastebinCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^<iframe\ssrc='(https:\/\/pastebin\.com\/embed_iframe\/[^']+)'[^>]+><\/iframe>$/],
      templateFunc: e => e[1],
      code: true,
      defaultWidth: 748,
      defaultHeight: 55
    },
    [iframeLayoutConstants.IframeTypes.lucidchartCode]: {
      type: iframeLayoutConstants.IframeTypes.lucidchartCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^(?:<div[^>]*>)?<iframe.+src='(https:\/\/www\.lucidchart\.com\/documents\/embeddedchart\/[^']+)'[^>]+><\/iframe>(<\/div>)?$/],
      templateFunc: e => e[1],
      code: true
    },
    [iframeLayoutConstants.IframeTypes.drawIOCode]: {
      type: iframeLayoutConstants.IframeTypes.drawIOCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^<iframe.+src='(https:\/\/www\.draw\.io[^']+)'><\/iframe>$/],
      templateFunc: e => e[1],
      code: true,
      renderLinkInMobile: true
    },
    [iframeLayoutConstants.IframeTypes.slideshareCode]: {
      type: iframeLayoutConstants.IframeTypes.slideshareCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^<iframe\ssrc='((?:https?:)?\/\/www\.slideshare\.net\/slideshow\/embed_code\/key\/[^']+)'[^>]+>[^<]*<\/iframe>(|[^<]*<div[^>]*>.+<\/div>)?$/],
      templateFunc: e => e[1],
      code: true
    },
    [iframeLayoutConstants.IframeTypes.speakerdeckCode]: {
      type: iframeLayoutConstants.IframeTypes.speakerdeckCode,
      patterns: [/^<script.+data-id='([^']+)'[^>]+><\/script>$/],
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      templateFunc: e => `https://speakerdeck.com/player/${e[1]}`,
      code: true
    },
    [iframeLayoutConstants.IframeTypes.haikudeckCode]: {
      type: iframeLayoutConstants.IframeTypes.haikudeckCode,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^<iframe\ssrc='(https:\/\/www\.haikudeck\.com\/e[^']+)'[^>]+><\/iframe>(|<br\/><span[^>]+>.+<\/span>;)?$/],
      templateFunc: e => e[1],
      code: true
    }
  };
  let p = {
    byte_dashboard: {
      resizeType: 1,
      patterns: [`^https://[a-zA-Z0-9-_]+.(${l})?\\.${s}\\.(cn|net|com)/share/base/dashboard/(.+)$`],
      defaultHeight: 460,
      template: "${matched.input}?iframeFrom=docx&ccm_open=iframe",
      border: true,
      allowRef: 1
    },
    byte_base_form: {
      resizeType: 1,
      patterns: [`^https://[a-zA-Z0-9-_]+.(${l})?\\.${s}\\.(cn|net|com)/share/base/form/(.+)$`],
      defaultHeight: 460,
      template: "${matched.input}?iframeFrom=docx&ccm_open=iframe",
      border: true,
      renderLinkInMobile: true,
      allowRef: 1
    },
    byte_base_view: {
      resizeType: 1,
      patterns: [`^https://[a-zA-Z0-9-_]+.(${l})?\\.${s}\\.(cn|net|com)/share/base/view/(.+)$`],
      defaultHeight: 460,
      template: "${matched.input}?iframeFrom=docx&ccm_open=iframe",
      border: true,
      allowRef: 1
    },
    kunlun: {
      resizeType: 1,
      patterns: ["^https://biz.bytedance.(com|net)/embed(.html|_doc)[?]businessName=(.*)", "^https://([^/?#:]+)\\.feishuapp.cn/(.*)/ui/apps/(.*)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    coolcollege: {
      resizeType: 2,
      defaultWidth: 1366,
      defaultHeight: 768,
      patterns: ["^https://(pro|mobile).coolcollege.cn(.*)", "^https://gsdn.coolcollege.cn/assets/external-link/([0-9a-zA-Z]+)/index.html"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    data_wind: {
      resizeType: 1,
      patterns: ["^https://volcengine.yqsl.xyz/bi(.+)", "^https://console.volcengine.com/(datafinder|bi)/(.+)", "^https://datawind.(shalltry|nio(int)?).com/bi(.+)", "^https://(dev|upgrade).datarangers-onpremise.volces.com/bi#/(.+)", "^https://sparkbi.bg.(huohua|allschool).(cn|com)(.*)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    pugna: {
      resizeType: 1,
      patterns: ["^https://(data|pugna-sg|pugna-va)" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/.*", "^https://datareport" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/.*", "^https://data" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/(life|gaiapage)/.*", "^https://(data|insight-va)" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/life_report/.*", "^https://([^/?#:]+).maat-(boe|us).byteintl.net/.*"],
      template: a,
      border: true
    },
    reali_box: {
      resizeType: 2,
      patterns: ["^https://(([^/?#:]+).)?(realihub|realibox).com/(.+)"],
      template: a,
      border: true
    },
    pcp_xuanjia: {
      resizeType: 2,
      patterns: ["^https://pcp(3)?(-xuanjia(-[a-zA-Z0-9]{1,})?)?.agilines.(com|cn)/(.*)"],
      template: a,
      border: true
    },
    byte_guidera: {
      resizeType: 2,
      patterns: ["^https://guidera.(bytedance|feishu).(net|cn)/(guide|video-book)/embed/(.*)"],
      template: a,
      renderLinkInMobile: true,
      renderLinkInIOS: true
    },
    approval_pac: {
      resizeType: 1,
      patterns: ["^https://www.feishu(-pre)?.cn/approval/admin/(.*)"],
      template: a,
      border: false,
      defaultWidth: 730,
      defaultHeight: 410
    },
    douyin_embed_video: {
      resizeType: 2,
      patterns: ["^https://(www|m).douyin.com/(share/)?video/([a-zA-Z0-9]+)$", "^https://(www).douyin.com/(.*)?modal_id=([a-zA-Z0-9&=]+)"],
      srcRegExps: ["^https://open.douyin.com/player/video[?]vid=[0-9a-zA-Z]+(.*)"],
      template: "https://open.douyin.com/player/video?vid=${matched[3]}&mode=pc&source_from=lark",
      renderLinkInMobile: true
    },
    douyin_lander: {
      resizeType: 2,
      patterns: ["^https://lander" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/app/(render|preview)[?]pageId=([a-zA-Z0-9-_]+)$"],
      template: a,
      renderLinkInMobile: true
    },
    any_cross: {
      resizeType: 1,
      patterns: ["^https://anycross.feishu.cn/(.+)"],
      template: a,
      border: true,
      renderLinkInMobile: true,
      defaultWidth: 1240,
      defaultHeight: 520
    },
    weilai_skyeye: {
      resizeType: 2,
      patterns: ["https://skyeye.nio.com/dashboard/.*"],
      template: a,
      border: true
    },
    byte_dcd: {
      resizeType: 1,
      patterns: ["^https://dcd" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/data(.*)"],
      template: "${matched.input}?hidemenu=1",
      border: true,
      renderLinkInMobile: true
    },
    maiyawx: {
      resizeType: 2,
      patterns: ["^https://[a-zA-Z0-9-_]+.maiyawx.cn/(.+)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    myrightone: {
      resizeType: 0,
      patterns: ["^https://datarangers.myrightone.com/datafinder/app(.+)"],
      template: a,
      border: true
    },
    liga_ai_share: {
      resizeType: 2,
      patterns: ["^https://(dev.)?(ligai|leiga).(net|cn)/(u|app)/(.*)"],
      template: a,
      renderLinkInMobile: true
    },
    pixso: {
      resizeType: 2,
      patterns: ["^(http(s)?://([a-zA-Z0-9-]*[.])?(pixso|haier).(design)?(cn|net)?)/app/.*"],
      template: "${matched[1]}/app/ifr?url=${matched.input}",
      border: true
    },
    byte_ecop: {
      resizeType: 1,
      border: true,
      patterns: ["^https://ecop" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/(.*)"],
      template: a,
      renderLinkInMobile: true
    },
    jx_star_table: {
      resizeType: 2,
      border: true,
      patterns: ["^https://app.startable.cn/(.*)"],
      template: a
    },
    byte_newcony: {
      resizeType: 1,
      patterns: ["^https://newcony(-boe)?" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/(.*)"],
      template: a,
      renderLinkInMobile: true
    },
    webshelf: {
      resizeType: 2,
      patterns: ["^https://webshelf.koteicloud.com/webshelf/iframe/(.*)"],
      template: a
    },
    fabrie: {
      resizeType: 1,
      border: true,
      patterns: ["^https://(www.fabrie|f.tuoyal|world.tuoyal).(com|cn)(.*)"],
      template: "${matched.input}?from=embed",
      renderLinkInIOS: true
    },
    iqiyi_video: {
      resizeType: 2,
      patterns: ["^https://www.iqiyi.com/(.*)"],
      template: a,
      renderLinkInIOS: true,
      border: true
    },
    bilibili: {
      resizeType: 2,
      patterns: ["^https://www.bilibili.com/video/av([a-zA-Z0-9]+)$", "^https://www.bilibili.com/video/av([a-zA-Z0-9]+)/$", "^https://player.bilibili.com/player.html[?]aid=([a-zA-Z0-9]+)$"],
      template: "https://player.bilibili.com/player.html?aid=${matched[1]}",
      border: true
    },
    "bilibili-bv": {
      resizeType: 2,
      patterns: ["^https://www.bilibili.com/video/bv([a-zA-Z0-9]+)/?$", "^https://www.bilibili.com/video/BV([a-zA-Z0-9]+)/?$", "^https://player.bilibili.com/player.html[?]bvid=([a-zA-Z0-9]+)$"],
      template: "https://player.bilibili.com/player.html?bvid=${matched[1]}",
      border: true
    },
    bilibilip: {
      resizeType: 2,
      patterns: ["^https://www.bilibili.com/video/av([a-zA-Z0-9]+)[?](.+)?", "^https://player.bilibili.com/player.html[?]aid=([a-zA-Z0-9]+)&(.+)?"],
      template: "https://player.bilibili.com/player.html?aid=${matched[1]}&${matched[2]}",
      border: true
    },
    bilibili_bp: {
      resizeType: 2,
      patterns: ["^https://www.bilibili.com/video/bv([a-zA-Z0-9]+)/?[?](.+)?", "^https://www.bilibili.com/video/BV([a-zA-Z0-9]+)/?[?](.+)?", "^https://player.bilibili.com/player.html[?]bvid=([a-zA-Z0-9]+)&(.+)?"],
      template: "https://player.bilibili.com/player.html?bvid=${matched[1]}&${matched[2]}",
      border: true
    },
    xigua: {
      resizeType: 2,
      patterns: ["^http(s)?://www.(ixigua|365yg).com/(.+)"],
      template: a,
      renderLinkInIOS: true,
      border: true
    },
    youku: {
      resizeType: 2,
      patterns: ["^http(s)?://v.youku.com/v_show/id_([a-zA-Z0-9=]+).html[^\\s]*$", "^http(s)?://player.youku.com/embed/([a-zA-Z0-9=]+)$"],
      template: "https://player.youku.com/embed/${matched[2]}"
    },
    modao: {
      resizeType: 1,
      patterns: ["^https://([a-zA-Z0-9]*[.])?modao.cc/(app|proto)/([0-9a-zA-Z]+)(/embed/v2)?(/sharing)?([?](.+))?"],
      template: "https://modao.cc/${matched[2]}/${matched[3]}/embed/v2/sharing?${matched[7]}",
      border: true,
      renderLinkInMobile: true
    },
    baidumap: {
      resizeType: 1,
      renderLinkInMobile: true,
      lazyload: true,
      patterns: ["^http(s)?://(j.)?map(s)?.baidu.com/(.+)$", "^http(s)?://ditu.baidu.com/(.+)$"],
      template: a
    },
    autonavi: {
      resizeType: 1,
      lazyload: true,
      renderLinkInSafari: true,
      renderLinkInMobile: true,
      patterns: ["^https://(amap|gaode).com/(.+)", "^https://((surl)|(ditu)|(www)).amap.com/(.+)"],
      template: a
    },
    mock: {
      resizeType: 1,
      patterns: ["^https://([^/?#:]+).mockplus.cn/(.+)"],
      template: a,
      border: true
    },
    jinshuju: {
      resizeType: 1,
      patterns: ["^(https://jinshuju.net/f/[0-9a-zA-Z]{6}).*"],
      template: "${matched[1]}?background=white&banner=show&embedded=true&inner_redirect=false",
      border: true,
      renderLinkInIOS: true
    },
    jcode: {
      border: true,
      defaultWidth: 730,
      defaultHeight: 430,
      template: a,
      resizeType: 1,
      patterns: ["^https://code.juejin.cn/pen/(.+)"]
    },
    canva: {
      resizeType: 1,
      patterns: ["^https://www.canva.(cn|com)/design/(([0-9a-zA-Z_-]{11})/([0-9a-zA-Z_-]{11,28}))/.*", "^https://www.canva.(cn|com)/design/([0-9a-zA-Z_-]{11})/.*"],
      template: "https://www.canva.${matched[1]}/design/${matched[2]}/view?embed",
      border: true,
      renderLinkInIOS: true
    },
    yucekj: {
      resizeType: 2,
      patterns: ["^https://cube.yucekj.com/embed/index.html[?]id=([a-zA-Z0-9]+)$"],
      template: a,
      border: true
    },
    zetareview: {
      resizeType: 2,
      patterns: ["^https://www.zixel.cn/zetareview/index.html#/(.+)", "^https://zetareview.zixel.cn/(.+)"],
      template: a,
      renderLinkInMobile: true,
      border: true
    },
    jinweihaowu: {
      resizeType: 2,
      patterns: ["^https://op-test.jinweihaowu.com/(.+)", "^https://caiwu.hzsjrk.com/(.+)", "^https://bi.hzsjrk.com/(.+)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    yuntucad: {
      resizeType: 2,
      patterns: ["^https://www.yuntucad.com/model/(.+)"],
      template: a,
      border: true
    },
    spread_sound: {
      resizeType: 2,
      patterns: ["^https://datawind.shalltry.com/bi#/external/dashboard/(.+)"],
      template: a,
      border: true
    },
    eip_cmitrl: {
      resizeType: 1,
      patterns: ["^https://eip.cmitry.com/(.+)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    wumei_damll: {
      resizeType: 1,
      patterns: ["^https://qa-rtsales.wumart.com/(.+)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    ankeTableau: {
      resizeType: 1,
      defaultWidth: 840,
      defaultHeight: 800,
      patterns: ["^http(s)?://applet.anker-in.com/tableau/?$"],
      template: a
    },
    powerbi: {
      resizeType: 1,
      patterns: ["^https://app.powerbi.cn/reportEmbed[?]reportId=.+", "^https://app.powerbi.com/.*"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    tableau: {
      resizeType: 1,
      patterns: ["^https://mycompany/views/Superstore/Shipping(.+)", "^https://prod-apnortheast-a.online.tableau.com/(.+)", "^https://public.tableau.com/views/(.+)", "^http://pulse.nevext.com/t/PD/views/(.+)", "^http(s)?://(mktbi|applet|ddi|report).anker-in.com/(.+)"],
      template: a,
      border: true
    },
    js_design: {
      resizeType: 1,
      patterns: ["^https://js.design/.*"],
      template: "${matched.input}&iframe=true",
      border: true
    },
    survey: {
      resizeType: 1,
      patterns: ["^https://kariya-stage" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/m[?].*t=([0-9a-zA-Z-]+).*$", "^https://kariya-stage" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/m/cfm[?].*t=([0-9a-zA-Z-]+).*$"],
      template: "https://kariya-stage" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/m/cfm?t=${matched[1]}",
      border: true,
      defaultHeight: 500
    },
    feishu_survey: {
      resizeType: 1,
      patterns: ["^https://wenjuan.feishu.cn/m[?].*", "^https://wenjuan.feishu.cn/m/cfm[?].*"],
      template: a,
      border: true,
      defaultHeight: 500,
      renderLinkInMobile: true
    },
    ad: {
      resizeType: 1,
      patterns: ["^https://(ad|mpdc|(compass(-)?(sg|i18n|va|cockpit)?))\\.bytedance\\.net/(kompaso|compass|platform|)/(page|report|visualization(-center)?)/(.+)", "^https://mpdc\\.bytedance\\.net/viz-design-center/configuration/visualization/shared/component/(.*)", "^https://mpdc\\.bytedance\\.net/compass-cockpit/platform/visualization/shared/component/(.*)"],
      template: a,
      allowRef: 1
    },
    tea_bulletin: {
      resizeType: 1,
      patterns: ["^https://(data|tea-va)" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/tea/app/[0-9]+/dashboard/[0-9]+"],
      template: "${matched.input}?hideAppHeader&hideDashLeft",
      border: true,
      renderLinkInMobile: true
    },
    tea_report: {
      resizeType: 1,
      patterns: ["^https://(data|tea-va)" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/tea/app/[0-9]+/share-link/report[?]dashboardId=.+reportId=.+"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    tea_cross_business: {
      resizeType: 1,
      patterns: ["^https://data" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/tea/dashboard/[0-9]+"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    slardar: {
      resizeType: 1,
      patterns: ["^https://slardar([^?#:]+)?" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/(.+)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    byte_argus: {
      resizeType: 2,
      patterns: ["^https://argus" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/v3/(security|defense|asset|scan).*$"],
      template: a,
      border: true,
      defaultWidth: 1200,
      defaultHeight: 800,
      renderLinkInMobile: true
    },
    byte_rmc: {
      resizeType: 2,
      patterns: ["^https://rmc" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/data-center(.*)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    byte_babus: {
      resizeType: 1,
      patterns: ["^https://raven" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/raven/(.+)"],
      template: a,
      renderLinkInMobile: true,
      border: true
    },
    prism: {
      resizeType: 1,
      patterns: ["^https://data" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/prism/analysis[?](.+)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    insight: {
      resizeType: 2,
      patterns: ["^https://data" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/insight/api/file/[?](.+)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    ratio: {
      resizeType: 1,
      patterns: ["^https://ratio.boe" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/(.*)", "^https://ratio.bytedance.(local|net)/(.*)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    bigfunnel: {
      resizeType: 1,
      defaultWidth: 1200,
      defaultHeight: 660,
      patterns: ["^https://c360.bytedance.com/c360-h5/block/*", "^https://seal-api" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/fe/fallback/check[?]href=https%3A%2F%2Fbigfunnel" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "%2Fblock%2F(.+)", "^https://seal-api" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/fe/fallback/check[?]href=https%3A%2F%2Fbigfunnel-pre-release" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "%2Fblock%2F(.+)"],
      template: a,
      border: true
    },
    gaia: {
      resizeType: 1,
      patterns: ["https://[a-zA-Z0-9_-]+.dash" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/(.*)"],
      template: a,
      border: true
    },
    sandbox: {
      resizeType: 1,
      patterns: ["^https://webide" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/s/.+-(.+)", "^https://webide" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/s/(.+)", "^https://webide" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/embed/(.+)"],
      template: "https://webide" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/embed/${matched[1]}",
      border: true
    },
    growth_design: {
      resizeType: 1,
      patterns: ["^https://growth-material" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/material/page[?]url=.*", "^https://u" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/docs/.*"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    wonder: {
      resizeType: 1,
      patterns: ["https://wonder" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/dashboard/preview[?]id=([0-9a-zA-Z_-]+)"],
      template: "${matched.input}&iframe=true",
      border: true
    },
    modaoCode: {
      resizeType: 1,
      patterns: ["^<iframe .*src=.https://modao.cc/app/([0-9a-zA-Z]{40})[^>]+></iframe>$", "^<iframe .*src=.https://org.modao.cc/app/([0-9a-zA-Z]+)[^>]+></iframe>$"],
      template: "https://modao.cc/app/${matched[1]}/embed/v2",
      border: true,
      code: true,
      renderLinkInMobile: true
    },
    codepenCode: {
      resizeType: 1,
      patterns: ["^<iframe .*src=.https://codepen.io/([0-9a-zA-Z]+)/embed/([0-9a-zA-Z]+)[^>]+>[.]*"],
      template: "https://codepen.io/${matched[1]}/embed/${matched[2]}",
      border: true,
      code: true
    },
    jinshujuCode: {
      resizeType: 1,
      patterns: ["^<iframe .*src=.(https://jinshuju.net/f/[0-9a-zA-Z]{6})[^>]+></iframe>$"],
      template: "${matched[1]}?background=white&banner=show&embedded=true&inner_redirect=false",
      border: true,
      code: true,
      renderLinkInIOS: true
    }
  };
  let f = {
    byte_dashboard: {
      resizeType: 1,
      patterns: [`^https://[a-zA-Z0-9-_]+.(((${l})?\\.larksuite)|((${l})\\.${s}))\\.(com|cn|net)/share/base/dashboard/(.+)$`],
      defaultHeight: 460,
      template: "${matched.input}?iframeFrom=docx&ccm_open=iframe",
      border: true,
      allowRef: 1
    },
    byte_base_form: {
      resizeType: 1,
      patterns: [`^https://[a-zA-Z0-9-_]+.(((${l})?\\.larksuite)|((${l})\\.${s}))\\.(com|cn|net)/share/base/form/(.+)$`],
      defaultHeight: 460,
      template: "${matched.input}?iframeFrom=docx&ccm_open=iframe",
      border: true,
      renderLinkInMobile: true,
      allowRef: 1
    },
    byte_base_view: {
      resizeType: 1,
      patterns: [`^https://[a-zA-Z0-9-_]+.(((${l})?\\.larksuite)|((${l})\\.${s}))\\.(com|cn|net)/share/base/view/(.+)$`],
      defaultHeight: 460,
      template: "${matched.input}?iframeFrom=docx&ccm_open=iframe",
      border: true,
      allowRef: 1
    },
    kunlun: {
      resizeType: 1,
      patterns: ["^https://biz.bytedance.(com|net)/embed(.html|_doc)[?]businessName=(.*)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    byte_lark_euclid: {
      resizeType: 0,
      patterns: ["^https://mmm.byteintl.net/(apps/)?analytics/biportal(-va)?/(.*)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    slardar: {
      resizeType: 1,
      patterns: ["^https://slardar-us" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/(.+)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    tiktok_usts: {
      resizeType: 1,
      patterns: ["^https://datapower.tiktok-usts.net/bi/(.*)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    }
  };
  let g = {
    byte_minutes: {
      resizeType: 2,
      patterns: [`^(https://[a-zA-Z0-9-_]+.(${l})?\\.${s}(-pre)?\\.(cn|net|com)/minutes)/(ob|mm)([^?#:]+)([?](.+))?`],
      srcRegExps: [`^https://[a-zA-Z0-9-_]+.(${l})?\\.${s}(-pre)?\\.(cn|net|com)/minutes/embed/(ob|mm)(.+)[?]from=ccm`],
      template: "${matched[1]}/embed/${matched[6]}${matched[7]}?from=ccm",
      border: true,
      renderLinkInMobile: true,
      allowRef: 1
    },
    tea_dashboard: {
      resizeType: 1,
      patterns: ["^https://data" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/tea-next/project/12/dashboard/([0-9]+)(\\?[\\w=&-]+)?"],
      template: "https://data" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/tea-next/project/12/embed-dashboard?dashboardId=${matched[1]}${matched[2]}",
      border: true
    },
    aeolus: {
      resizeType: 1,
      patterns: ["^https://data" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/aeolus/?([?]from=[a-zA-Z_]+)?#(/external)?/dashboard/[0-9]+(/[0-9]+)?", "^https://data" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/aeolus-open/?([?]from=[a-zA-Z_]+)?#(/external)?/dashboard/[0-9]+(/[0-9]+)?", "^https://aeolus-([^?#:]+)" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/([?]from=[a-zA-Z_]+)?(aeolus/)?(aeolus)?#(/external)?/dashboard/[0-9]+(/[0-9]+)?"],
      template: a,
      border: true,
      renderLinkInIOS: true
    },
    bytedance_solar: {
      resizeType: 1,
      defaultWidth: 730,
      defaultHeight: 820,
      patterns: ["^https://solar(-gray|-doc.maat)?.bytedance.(com|net)/(.*)"],
      template: a,
      border: true
    },
    byte_ws: {
      resizeType: 1,
      patterns: ["^https://ws" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/sub/ws/plan/(.*)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    byte_jimeng: {
      resizeType: 2,
      patterns: ["^(https://(jimeng.jianying).com/(ai-tool/)?)(work-detail/(.*))"],
      srcRegExps: ["^https://jimeng.jianying.com/(ai-tool/)?embed/work-detail/(.*)"],
      template: "${matched[1]}embed/${matched[4]}"
    },
    says: {
      resizeType: 2,
      patterns: ["^https://getsays.cn/share/([0-9a-zA-Z]{32}.*)$"],
      template: "https://getsays.cn/embed/${matched[1]}",
      copyable: true
    },
    tiktok: {
      resizeType: 2,
      patterns: ["^http(s)?://vm\\.tiktok\\.com/(.+)$", "^http(s)?://vt\\.tiktok\\.com/(.+)$", "^http(s)?://t\\.tiktok\\.com/i18n/share/video/(.+)$", "^http(s)?://www\\.tiktok\\.com/embed/(.+)$", "^https://www\\.tiktok\\.com/@.+/video/(.+)$"],
      template: a,
      defaultWidth: 325,
      defaultHeight: 780,
      renderLinkInIOS: true,
      maxResizeWidth: 325,
      maxResizeHeight: 780,
      allowRef: 1
    },
    tiktok_direct: {
      resizeType: 1,
      patterns: ["^https://grafana-i18n" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/d/R5ICbF6nk/horus(.*)$"],
      template: a,
      defaultWidth: 325,
      defaultHeight: 780,
      renderLinkInIOS: true
    },
    codepen: {
      resizeType: 1,
      patterns: ["^https://codepen.io/([0-9a-zA-Z_-]+)/(pen|embed)/([0-9a-zA-Z]+.*)"],
      template: "https://codepen.io/${matched[1]}/embed/${matched[3]}",
      border: true
    },
    data_power: {
      resizeType: 1,
      patterns: ["^https://datapower(-va)?.(jiyunhudong|bytedance|bytelemon).(com|net)(.*)"],
      template: a,
      border: true,
      renderLinkInMobile: true
    },
    youtube: {
      resizeType: 2,
      patterns: ["^https://www.youtube.com/watch[?]v=([a-zA-Z0-9-_]+)$", "^https://youtu.be/([a-zA-Z0-9-_]+)$", "^https://www.youtube.com/watch[?].*v=([a-zA-Z0-9-_]+).*", "^https://www.youtube.com/embed/([a-zA-Z0-9-_]+)$"],
      template: "https://www.youtube.com/embed/${matched[1]}",
      border: true
    },
    lark_survey: {
      resizeType: 1,
      patterns: ["^https://survey.larksuite.com/m/.*", "^https://survey.larksuite.com/m[?].*"],
      template: a,
      border: true,
      defaultHeight: 500,
      renderLinkInMobile: true
    },
    airtable: {
      resizeType: 1,
      defaultHeight: 534,
      patterns: ["^https://airtable.com/shr([a-zA-Z0-9]+)[^/s]*$", "^https://airtable.com/embed/shr([a-zA-Z0-9]+)?backgroundColor=green&viewControls=on$"],
      template: "https://airtable.com/embed/shr${matched[1]}?backgroundColor=purple&viewControls=on"
    },
    datastudio: {
      resizeType: 1,
      patterns: ["^https://datastudio.google.com/embed/reporting.+"],
      template: a
    },
    figma: {
      renderLinkInMobile: true,
      resizeType: 1,
      patterns: ["^https://www.figma.com/((file|proto|design|board|embed|community|plugin|community|team|projects)/[0-9a-zA-Z]{22,128}(.*)?)$", "^https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/([a-zA-Z0-9=/_&?%#-]+)$"],
      template: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/${matched[1]}",
      border: true
    },
    trello: {
      renderLinkInMobile: true,
      resizeType: 2,
      patterns: ["^https://trello.com/c/(.+)?$", "^https://trello.com/embed/card?id=(.+)$"],
      template: "https://trello.com/embed/card?id=${matched[1]}"
    },
    vimeo: {
      resizeType: 2,
      patterns: ["^https://vimeo.com/(.+)/?$", "^https://player.vimeo.com/video/(w+)$"],
      template: "https://player.vimeo.com/video/${matched[1]}"
    },
    facebook: {
      resizeType: 2,
      renderLinkInMobile: true,
      patterns: ["^(https://www.facebook.com/[^/]+/(posts|videos)/.+/?)$", "^https://www.facebook.com/plugins/post.php?href=(https://www.facebook.com/[^/]+/(posts|videos)/.+/?)$"],
      template: "https://www.facebook.com/plugins/post.php?href=${matched[1]}"
    },
    openStreetMap: {
      renderLinkInMobile: true,
      resizeType: 1,
      patterns: ["^https://www.openstreetmap.org/export/embed.html.+$"],
      template: a
    },
    marvelapp: {
      resizeType: 1,
      renderLinkInMobile: true,
      patterns: ["^https?://marvelapp.com/.+/?$"],
      template: a
    },
    prezi: {
      resizeType: 1,
      renderLinkInMobile: true,
      patterns: ["^https://prezi.com/view/([^/]+)/?$", "^https://prezi.com/view/([^/]+)/embed$"],
      template: "https://prezi.com/view/${matched[1]}/embed"
    },
    soundcloud: {
      resizeType: 2,
      renderLinkInMobile: true,
      patterns: ["^https://w.soundcloud.com/player/?\\?url=.+$"],
      template: a
    },
    spotify: {
      resizeType: 2,
      renderLinkInMobile: true,
      patterns: ["^https://open.spotify.com/track/(.+)/?$", "^https://open.spotify.com/embed?uri=spotify:track:(.+)$"],
      template: "https://open.spotify.com/embed?uri=spotify:track:${matched[1]}"
    },
    pastebin: {
      renderLinkInMobile: true,
      resizeType: 1,
      template: a,
      patterns: ["^https://pastebin.com/(.+)/?$", "^https://pastebin.com/embed_iframe/(.+)$"]
    },
    lucidchart: {
      renderLinkInMobile: true,
      resizeType: 1,
      template: a,
      patterns: ["^https?://www.lucidchart.com/documents/embeddedchart/(.+)/?$"]
    },
    slideshare: {
      renderLinkInMobile: true,
      resizeType: 1,
      template: "${matched[1]}",
      patterns: ["^((https?:)?//www.slideshare.net/slideshow/embed_code/key/\\w+)$"]
    },
    haikudeck: {
      renderLinkInMobile: true,
      resizeType: 1,
      template: "https://www.haikudeck.com/e/${matched[2]}",
      patterns: ["^https://(www.)?haikudeck.com/p/(.+)/?$", "^https://www.haikudeck.com/e/(.+)$"]
    },
    upscribe: {
      renderLinkInMobile: true,
      resizeType: 2,
      template: "https://upscri.be/${matched[1]}?as_embed",
      patterns: ["^https?://upscri.be/(.+)/?$", "^https://upscri.be/[^?]+?as_embed$"]
    },
    wenjuan: {
      resizeType: 4,
      defaultHeight: 320,
      border: true,
      patterns: ["^https?://wj.(bytedance|toutiao).com/q/(.+)$"],
      template: a
    },
    indify: {
      renderLinkInMobile: true,
      resizeType: 4,
      template: a,
      patterns: ["^https?://indify.co/widgets/live/(.+)$"]
    },
    instagram: {
      renderLinkInMobile: true,
      resizeType: 2,
      template: "https://www.instagram.com/p/${matched[1]}/embed/captioned/",
      patterns: ["^https://www.instagram.com/p/(\\w+)/?$", "^https://www.instagram.com/p/(\\w+)/embed/captioned/?$"]
    },
    drawIO: {
      renderLinkInMobile: true,
      resizeType: 1,
      template: a,
      patterns: ["^https://www.draw.io/??.+$"]
    },
    byte_tech: {
      renderLinkInMobile: true,
      resizeType: 1,
      template: a,
      border: true,
      patterns: ["^https://bytetech.info/(.*)", "^https://(tech|study|course)" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/(.*)"]
    },
    byte_simple: {
      renderLinkInMobile: true,
      resizeType: 2,
      template: a,
      border: true,
      patterns: ["^https://simple-editor" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/(.*)"]
    }
  };
  let m = {
    [iframeLayoutConstants.IframeTypes.defaulIframe]: {
      type: iframeLayoutConstants.IframeTypes.defaulIframe,
      resizeType: iframeLayoutConstants.IframeScaleModes.Flexible,
      patterns: [/^https:\/\/(.+)?$/],
      templateFunc: e => e.input,
      border: true
    }
  };
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function _() {
    let e = browserEnvironmentDetectionUtils.browserDetector.isH5 || !browserEnvironmentDetectionUtils.browserDetector.isMobile ? boolDefaultGetterUtil.getDefaultBool("iframe_config", undefined) : objectPathGetDefault.getObjectPathDefault(window, "User.appConfig.iframe_config");
    if (typeof e == "string") {
      return JSON.parse(e);
    } else {
      return e;
    }
  }
  let y = e => n => {
    let i = function () {
      var e = arguments.length;
      var i = Array(e);
      var r = 0;
      for (; r < e; r++) {
        i[r] = arguments[r];
      }
      return n[i[2]];
    };
    return e.replace(/\$\{matched(\.(input))\}/g, i).replace(/\$\{matched(\[(\d{1,3})\])\}/g, i);
  };
  function w(e, n) {
    if (n) {
      return Object.entries(n).reduce((e, n) => {
        let [i, r] = n;
        let o = e[i];
        let {
          patterns: a,
          template: s,
          srcRegExps: l
        } = r;
        if (a) {
          r.patterns = a.map(e => new RegExp(e));
        }
        if (l) {
          r.srcRegExps = l.map(e => new RegExp(e));
        }
        if (s) {
          r.templateFunc = y(s);
        }
        r.type = i;
        e[i] = Object.assign({}, o, r);
        return e;
      }, e);
    } else {
      return e;
    }
  }
  var E = {
    ...function () {
      try {
        let {
          CN: e,
          JP: n,
          VA: i,
          SG: o,
          MY: a
        } = userEnvironmentUtils.regionConstants;
        let s = userEnvironmentUtils.getUserUnit();
        if (userEnvironmentUtils.isTenantOne()) {
          return w(h, {
            ...f,
            ...g,
            ...p,
            ...c,
            ..._()
          });
        }
        switch (s) {
          case e:
            return w(h, {
              ...g,
              ...p,
              ..._()
            });
          case i:
          case n:
          case o:
          case a:
            return w(h, {
              ...g,
              ...f,
              ..._()
            });
          default:
            return w(h, {
              ...g,
              ...p,
              ..._()
            });
        }
      } catch (e) {
        return w(h, {
          ...g,
          ...p
        });
      }
    }(),
    ...m
  };
  require.d(exports, {
    iframeConfigMap: function () {
      return E;
    }
  });
}