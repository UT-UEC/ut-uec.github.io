if(!self.define){let s,e={};const a=(a,c)=>(a=new URL(a+".js",c).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(c,d)=>{const b=s||("document"in self?document.currentScript.src:"")||location.href;if(e[b])return;let r={};const i=s=>a(s,b),f={module:{uri:b},exports:r,require:i};e[b]=Promise.all(c.map((s=>f[s]||i(s)))).then((s=>(d(...s),r)))}}define(["./workbox-6db16f92"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.html-2ba5c8b1.js",revision:"60322c786641b148eb4d28f6d06a900d"},{url:"assets/404.html-ffa163c6.js",revision:"64915cf4ad3b5f5a3ee7560acb0ae89e"},{url:"assets/align.html-d5cf7b79.js",revision:"55a6d91fffa68e784ee17e6daf13e448"},{url:"assets/align.html-e7aaa69b.js",revision:"7c476f651e371adae6a2c7aaea3467f6"},{url:"assets/apkxa.html-92bd4409.js",revision:"625b995b65a2250a780f9d0003415391"},{url:"assets/apkxa.html-a4b294f1.js",revision:"519fb74a58487d9d695c0c23451cef5c"},{url:"assets/app-61859c31.js",revision:"041bbda36c12bf48b45be717374af883"},{url:"assets/auto-fa8841cf.js",revision:"34b2dbde32156a3e945129af69ce72c3"},{url:"assets/BP.html-10e24bca.js",revision:"3d37b76c3b242ca9da98d2d4daf5bfc7"},{url:"assets/BP.html-123ab43b.js",revision:"854af7029de21f9f7b013402eb522f66"},{url:"assets/BS.html-18d511cf.js",revision:"5ce1c9f22a923b5f3ca999026b912ebb"},{url:"assets/BS.html-b5243d8c.js",revision:"a394e005529fcf7bacaa02a62b3d0920"},{url:"assets/card.html-03307bf0.js",revision:"56c56dacae27f0fa993cc0cd2b260246"},{url:"assets/card.html-643d5069.js",revision:"f0c8c74877ec6ae58b1d8f552db01831"},{url:"assets/chart.html-1b012adf.js",revision:"796fb24dd4c115fdecd42b398b6fa67a"},{url:"assets/chart.html-1f270cce.js",revision:"baad664d165576a6683a2ed953f4d65b"},{url:"assets/cn.html-468684c6.js",revision:"037902cc92fa0c3077a582744c7fa0d7"},{url:"assets/cn.html-dacbcfe8.js",revision:"1e78db711061bf4e0b64c65cfda67ff1"},{url:"assets/component-df16a2d0.js",revision:"99f01ee80106557e635f66cd5705c984"},{url:"assets/container.html-1d8cdbe0.js",revision:"c84f411ad96b219bac899fa3060bb3f1"},{url:"assets/container.html-3b9b02e0.js",revision:"249e5223a80846cd02f36a08a7bb7cb4"},{url:"assets/ct.html-c6da09c2.js",revision:"bf33402401940c57877a5257e64b7994"},{url:"assets/ct.html-e753fbbf.js",revision:"479dcf401130cb01c019c92989086849"},{url:"assets/ctto.html-a1ad9d49.js",revision:"5875ad296c97106653e5474fc51e9628"},{url:"assets/ctto.html-ddb14425.js",revision:"88fafdd055cb458cdb68326b964edb2c"},{url:"assets/CYCT.html-586e74ee.js",revision:"cfe4651a37ffca4fd2238ad322229bb8"},{url:"assets/CYCT.html-f26411f1.js",revision:"64dce15884999b2723df672cd994f03b"},{url:"assets/DE.html-003d80d5.js",revision:"5ceca934f5da9fbaed4a5f2301a06270"},{url:"assets/DE.html-143269ef.js",revision:"6890609f55a20c56b2442bba10a5ae6d"},{url:"assets/echarts.html-99ef1570.js",revision:"b5da4aa253428115cb2e270eb9ffcec3"},{url:"assets/echarts.html-f965d563.js",revision:"7affcbcd7b90ee57716681e5a55e2b17"},{url:"assets/EGG.html-ac0eb179.js",revision:"a95bf1455a58f5520c914935297bdcfb"},{url:"assets/EGG.html-e1aeae11.js",revision:"c0a9240ccf35e4e31be8ae0d8d00c2a5"},{url:"assets/external.html-4cfc7863.js",revision:"cdb0b05c8de10120de71e78cb12099f9"},{url:"assets/external.html-9d6f8b21.js",revision:"e39206647c8c6c490ea03807d755c558"},{url:"assets/Game.html-04a1a63b.js",revision:"b3b2478d303a28ce83569a9449523157"},{url:"assets/Game.html-606752fd.js",revision:"6e1d84427ba36442bb7810ac68a4bc25"},{url:"assets/GO.html-31c927a1.js",revision:"94a816b3ee4e5cffa63e765242e4079d"},{url:"assets/GO.html-8e092db8.js",revision:"363da8975d0326fa2cb2c62d574bcc57"},{url:"assets/Google.html-0f30801f.js",revision:"b719f1e0a52abcebc4413fdd78d2ab03"},{url:"assets/Google.html-f7a64055.js",revision:"8cc0e5184d15f71b3a2553fcb7ea86f7"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-ae8c1e74.js",revision:"2bf09e0b1a03439412e37096534213d6"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-04da67da.js",revision:"534f0540200c1cddbf4ba2067a382fa1"},{url:"assets/index.html-14e93b31.js",revision:"e3ff3805eaf27bae37761260ff444f6d"},{url:"assets/index.html-31623896.js",revision:"6245ed871ce3e68e399386d1d3a765a3"},{url:"assets/index.html-5c434042.js",revision:"10055bd558a6e77a7d73041622733191"},{url:"assets/index.html-7440c2cc.js",revision:"7192283fa8f5af00983dc3347d9c7a3e"},{url:"assets/index.html-ac232125.js",revision:"8fdd83a1520b4f575a7e5975591520aa"},{url:"assets/index.html-c58af8f5.js",revision:"1c564d572720e3dc8b6ef6511db6c5ac"},{url:"assets/index.html-ce2a16da.js",revision:"bee2f56a6160cca9a49efe83ed9273bd"},{url:"assets/index.html-edd1099e.js",revision:"cd90a1bb7709ebd63ad8e59e858b34c5"},{url:"assets/index.html-f8bdb951.js",revision:"ea824e70518a5fc32eeb01401f189f1e"},{url:"assets/info.html-9a2ecc14.js",revision:"e4c38175b5ffff534d15ee78922d8d22"},{url:"assets/info.html-c24fcce6.js",revision:"7c2338bd1ba9e53c8ebf4f9395491919"},{url:"assets/IOS.html-66a2e953.js",revision:"b1ac6c6282fe636e8e799727ae1ced66"},{url:"assets/IOS.html-a2b5e6ed.js",revision:"a865a2f27ce64a52e109b3118a7a7fb0"},{url:"assets/JC.html-06ba4ed3.js",revision:"1b8b7c5bd04289100d02bfae4434023e"},{url:"assets/JC.html-b84af48d.js",revision:"9f610a4e300487370273a7502c3c4037"},{url:"assets/JD.html-963423b7.js",revision:"1bdfae499e9ed943fa4233b5adc093e1"},{url:"assets/JD.html-d768d8c1.js",revision:"b6448788eb2da3b27503239d663ab5a6"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/LJ.html-61867d7a.js",revision:"82ecd03c370790b7a19055424eadb61d"},{url:"assets/LJ.html-edae4644.js",revision:"335a6d9e8b2a3da01a9da74736b8fee6"},{url:"assets/LT.html-592d73a2.js",revision:"a61255aa721ee4cbfe7c090f6113b3dc"},{url:"assets/LT.html-cd171c00.js",revision:"68417b80efbc78400eb3b01a31b16b33"},{url:"assets/mark.html-7da3dd4b.js",revision:"802cabbd52d6722f0ed3f4c77001d04e"},{url:"assets/mark.html-9a140ff1.js",revision:"baad2c0cb1332428ae8f876b672fa46b"},{url:"assets/markdown.esm-0191f9da.js",revision:"5e8c1ebb5afc5e81804eac9fe00a00c0"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/md.html-4b2c5bca.js",revision:"91804b66c248ed670e31e031f1efbe06"},{url:"assets/md.html-c18fc60c.js",revision:"aa14277fcffc522d5c2392ddd9065d5a"},{url:"assets/mod.html-57d87c8b.js",revision:"bac020da6ceee708f6406418417404a0"},{url:"assets/mod.html-58c5fa28.js",revision:"2bc0038282070d7ca7605e9980813e8b"},{url:"assets/musk.html-093e2cfa.js",revision:"50359c52cd210033dc40bd22dacb6fbb"},{url:"assets/musk.html-f2c28a93.js",revision:"6f1db7267be8da459be45f918994607e"},{url:"assets/mw68.html-37c06010.js",revision:"9f6cc604b898fb5096ec5d5f631b1115"},{url:"assets/mw68.html-873855fc.js",revision:"6bd568d76149a0e991b644d5ee371166"},{url:"assets/mw70.html-10cfa3f4.js",revision:"9226ceff51144d5140b64ad46b5ce659"},{url:"assets/mw70.html-923e8da1.js",revision:"1659abf87ad3cd5c82e8932ef9b965c1"},{url:"assets/nature.html-8cd79fb4.js",revision:"6446061acfb75b4478e77f6abe0a5e22"},{url:"assets/nature.html-a0a30e34.js",revision:"c7e4433e38eeba163269f30415a88bf2"},{url:"assets/news.html-3389dcc9.js",revision:"59e8a101f339edcf7403db3d18c37046"},{url:"assets/news.html-4bebaba3.js",revision:"dab1c29dadbb9ca2f109c3d204956ea9"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/object.html-43df20ab.js",revision:"4151120494a19fbadc9f2ff0492c2d9a"},{url:"assets/object.html-e04642bc.js",revision:"6ba325a0328cdb8e4913355911e97c57"},{url:"assets/pan.html-a319a741.js",revision:"ec0c31af9fb9a80d9faf203317d5e429"},{url:"assets/pan.html-aecc2a81.js",revision:"d2e584610423d35a57248da0ad5bf743"},{url:"assets/PC.html-3e23167d.js",revision:"f69b0c9fa6277153089f0a10c4f46fad"},{url:"assets/PC.html-fc9a0db0.js",revision:"b8162245e9aa66c3377dfe06978b3f24"},{url:"assets/people.html-159ce007.js",revision:"92b72c3609160e3b116966590b2f67ae"},{url:"assets/people.html-f8f2d98e.js",revision:"faa27313c57fe61fafd89e67901046be"},{url:"assets/place.html-9c2455ec.js",revision:"8176f245f0bb145cd44751779e116b47"},{url:"assets/place.html-a6114faf.js",revision:"8ace82489900d6f07eb7d6a75edadf86"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/presentation.html-0c2f5323.js",revision:"b4eac10b384950eb55ff5c990c0482b9"},{url:"assets/presentation.html-c3ebc1f0.js",revision:"98f3070d2200cce55d3cf8c40f6ee09e"},{url:"assets/qnsj.html-8f989afe.js",revision:"949ca0b8100ac2b17545ccd98dd7f30b"},{url:"assets/qnsj.html-d4517616.js",revision:"7a5f28f830f62bd7eb136d00324b2083"},{url:"assets/QT.html-73e290ca.js",revision:"03135c7a3d50728f10e801a100b9aeb1"},{url:"assets/QT.html-eac0cc40.js",revision:"d9e1d8f96efa21a127eb55038780d3f4"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/SC.html-266cc117.js",revision:"52709fa05a48ca769ed430abf9ca9a2a"},{url:"assets/SC.html-306ebce1.js",revision:"23f3910b126abed4a7b5663050a75b88"},{url:"assets/SD.html-46b89b9d.js",revision:"7d185e1d9489b5219de0671145f6b193"},{url:"assets/SD.html-f9fa5b53.js",revision:"33b0797c7185ce36aee7e6cd98fc74fb"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/SearchResult-e4a61359.js",revision:"359c9aa46835e8d283e8c2b1c832729e"},{url:"assets/SMS.html-13f96cdc.js",revision:"18b5e7fb2bc8b40c4ed3b152b8ab6ca7"},{url:"assets/SMS.html-8dcb61ed.js",revision:"8dea3be688de1b68c07d3825b3b4c6a1"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style-3bfa0bde.css",revision:"fc4fd7c1de496090c9addccbaff663f0"},{url:"assets/sup-sub.html-112068b9.js",revision:"f82f24337efc8026ea47efd242606bbb"},{url:"assets/sup-sub.html-70402780.js",revision:"b68b2a85704b2d62482fbc24863d55c7"},{url:"assets/symbol.html-82779535.js",revision:"08714e419b8e5dc482a35d3dccc155a0"},{url:"assets/symbol.html-de45add8.js",revision:"5f4a8a3cca45f5da466a21d28b2d3054"},{url:"assets/tabs.html-82a028e7.js",revision:"a319c7425ef263237d2f0611a86a03ea"},{url:"assets/tabs.html-e666a809.js",revision:"8c6a33bafc667a0838b3e038e32d5b5d"},{url:"assets/tasklist.html-530da8aa.js",revision:"076dae2c541a68fc6cc46268e607cdb8"},{url:"assets/tasklist.html-7658f274.js",revision:"d541d902751c127d9b608ef4bd633b49"},{url:"assets/UP.html-5fec648e.js",revision:"0909fa77372e2b45c61402bdac8e69a6"},{url:"assets/UP.html-eeaa55a2.js",revision:"da5d64d075571908fd6514898fae028e"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"assets/WF.html-a8cbc829.js",revision:"4e4ac713ad062c7ded94972fd116502f"},{url:"assets/WF.html-ba5683f9.js",revision:"28d38744b56f5bc9f5af2659bd90d643"},{url:"assets/YJ.html-9a57c796.js",revision:"f600393e4418cf58abc376b0abd21099"},{url:"assets/YJ.html-cd1a6a87.js",revision:"dd3af73477febf01b070b166249576c1"},{url:"assets/YS.html-64e87290.js",revision:"abac093132dc5972106539863ecfd5eb"},{url:"assets/YS.html-99cf7e65.js",revision:"9eb2366d4d51a901f96b64c511e82190"},{url:"assets/ZB.html-3069cc33.js",revision:"0ff701784965873fcbec0e484875bd41"},{url:"assets/ZB.html-b3f9bc42.js",revision:"98eef7d9ae63e31d16af477666c7c0d6"},{url:"assets/ZD.html-125e1698.js",revision:"bdc038b417ba27cdde274d4bac1a25dd"},{url:"assets/ZD.html-d2798237.js",revision:"3815138439ce11baf1c95287e342df19"},{url:"assets/ZG.html-e07e013d.js",revision:"61a245065cbced5cc56f10ea60496a7b"},{url:"assets/ZG.html-fea16d12.js",revision:"a3bb336bb6c4328238fdadefc45be029"},{url:"assets/ZH.html-d5dc0da3.js",revision:"86830946e7d0354a028cc843ec020465"},{url:"assets/ZH.html-e7a537be.js",revision:"0801e731451675909994441c1f9946d2"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"assets/ZY.html-1ea993d2.js",revision:"ef3dfe5d06b41604209038b51002a9ac"},{url:"assets/ZY.html-8f916eca.js",revision:"43a6d9ca426aa3176c54abfc28f397c7"},{url:"index.html",revision:"f5dac6dd154ce33200965c53f7e689b5"},{url:"404.html",revision:"6d7aba9e1368c3d05533aaa2007a25dc"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
