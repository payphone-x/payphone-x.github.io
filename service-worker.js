/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Payphone-X's Blog/public/2018/12/31/hello-world/index.html","2e8d06d9112f61b5aae4a2bf5a930a62"],["D:/Payphone-X's Blog/public/2019/01/21/sort-unique/index.html","54385e3119ea9430a9be5d7b003acb61"],["D:/Payphone-X's Blog/public/2019/01/22/Heap/index.html","df6f2f02904a850c2b8369554c346200"],["D:/Payphone-X's Blog/public/2019/01/23/LogeyOIDay1T1/index.html","de2366f747d9ed80c5829d8b7c0489d4"],["D:/Payphone-X's Blog/public/2019/01/23/STL/index.html","d4d1f2728886c23da4477768250505ea"],["D:/Payphone-X's Blog/public/2019/01/24/Tree/index.html","ca3f7c9aa9fff9ee944d86bcdd540938"],["D:/Payphone-X's Blog/public/2019/01/27/HNOI2006/index.html","45806a21f0c52a75e92628deb368c389"],["D:/Payphone-X's Blog/public/2019/02/12/English-1/index.html","ad7436331174e2af04068b30d16b6693"],["D:/Payphone-X's Blog/public/2019/02/12/wen-hua-ke-start/index.html","6e6071fa21048b2001ad8d40cbbfa3c4"],["D:/Payphone-X's Blog/public/2019/02/17/luoguP4643/index.html","a0150daab0547a5d282aaa3c644107f4"],["D:/Payphone-X's Blog/public/2019/02/23/Floyd/index.html","8b1dbaeab361a7aee70b4a982fd0a38a"],["D:/Payphone-X's Blog/public/2019/02/27/Dijkstra/index.html","232758035765d61c0c344bf5b8314a1c"],["D:/Payphone-X's Blog/public/2019/03/16/linjiebiao/index.html","47a544cdec63cd31a6d1d9f413077cf6"],["D:/Payphone-X's Blog/public/2019/03/20/luoguP1330/index.html","015efa5d7d35162179bcf50b77593eed"],["D:/Payphone-X's Blog/public/2019/04/13/history/index.html","3f83b9fd41d7425be987e5428a6c6231"],["D:/Payphone-X's Blog/public/2019/05/01/path/index.html","bc308ad0cccdbe9bd58502ed1170f7a7"],["D:/Payphone-X's Blog/public/2019/06/17/unionfind/index.html","8c48e8486a1f7e17304d4b6c01adb418"],["D:/Payphone-X's Blog/public/2019/06/18/luoguP1119/index.html","d38a9518f4af8807688902856fffc224"],["D:/Payphone-X's Blog/public/2019/06/19/Simulate-Anneal/index.html","9d7ae4a0716756aa31334063964ceb59"],["D:/Payphone-X's Blog/public/2019/06/26/luoguP1969/index.html","208471daa577f1d10d6b7a93488eeeb7"],["D:/Payphone-X's Blog/public/2019/06/26/luoguP5019/index.html","c5329d5150adb976bf724234961bbeae"],["D:/Payphone-X's Blog/public/2019/06/30/cartoon/index.html","25b4d60b12cb6f74d860eb981038f1c7"],["D:/Payphone-X's Blog/public/2019/06/30/zhongkaoBUG/index.html","1afcd8683f03cb9446beb80affba6879"],["D:/Payphone-X's Blog/public/2019/07/05/left-tree/index.html","bb17f6cb9a9329869653c023171ee04c"],["D:/Payphone-X's Blog/public/2019/07/15/luoguP5020/index.html","6e428308f7fb73c0930e912cc5abd679"],["D:/Payphone-X's Blog/public/2019/07/20/LYOI-Summer-Round-1/index.html","890ef73be6ef6909a67e71cd7ad8e5af"],["D:/Payphone-X's Blog/public/2019/08/02/Bit-operation/index.html","b8951639aa6a2e04299fd1fda425e7af"],["D:/Payphone-X's Blog/public/2019/08/04/Tarjan-point&edge/index.html","42f662becf1cc3703a93164e17ca80f0"],["D:/Payphone-X's Blog/public/2019/08/09/math1/index.html","5f31bf7d197d27f4a952ff6a3e21d763"],["D:/Payphone-X's Blog/public/2019/08/11/my-first-acm/index.html","adfdb355aa5b64dbfd1b9f944b47b7aa"],["D:/Payphone-X's Blog/public/2019/08/12/luoguP4971/index.html","4aa0bfe930bb861703cc164691911aed"],["D:/Payphone-X's Blog/public/2019/08/12/nothing/index.html","192f72d0ee9faa4f1d1576689dd78140"],["D:/Payphone-X's Blog/public/2019/08/22/luoguP1326/index.html","565f9cc2ec60aa50f942f4c2001dcdbb"],["D:/Payphone-X's Blog/public/2019/09/07/luoguP1608/index.html","e399c38b357d51f64f302fc69647148b"],["D:/Payphone-X's Blog/public/2019/09/10/math2/index.html","e06aa2251c2a5c8ef212e7337c28c15f"],["D:/Payphone-X's Blog/public/2019/09/17/same/index.html","742d5546f8c77f7df8d89d637436d63e"],["D:/Payphone-X's Blog/public/2019/10/04/Chtholly-Tree/index.html","de0fd4a3c66950ef597db299698ff4e1"],["D:/Payphone-X's Blog/public/2019/10/06/luoguP1352/index.html","410e74edad85ee8dd2127eab78c113cc"],["D:/Payphone-X's Blog/public/2019/10/08/luoguP1967/index.html","4b62098c7d79d5461941bdd6607a6636"],["D:/Payphone-X's Blog/public/2019/10/08/zz-mistake/index.html","bd8397814829d117ffcde0b8de6dc6e3"],["D:/Payphone-X's Blog/public/2019/10/09/CF140C/index.html","047d1e8277fd1d85081f0b324c01a2b6"],["D:/Payphone-X's Blog/public/2019/10/09/luoguP2580/index.html","1e35956cb5e569c24d01848b486d6371"],["D:/Payphone-X's Blog/public/2019/10/10/luoguP3879/index.html","8b059e413f070e394bcd270817eef96e"],["D:/Payphone-X's Blog/public/2019/10/11/luoguP4107/index.html","8894903fcf605f2459ff2f89bbaa7533"],["D:/Payphone-X's Blog/public/2019/10/12/ZROI-pj5-Day3/index.html","0c5a28fa086e0267978a77f3d6180af8"],["D:/Payphone-X's Blog/public/2019/10/13/luoguP1197/index.html","f10fb1d3d7075ac4e31631a8aecb7b6f"],["D:/Payphone-X's Blog/public/2019/10/14/luoguP4568/index.html","5ad77f162250e1dbcb8084658fa57850"],["D:/Payphone-X's Blog/public/2019/10/16/CF161B/index.html","22db43b820f434812f5cff47e19fa257"],["D:/Payphone-X's Blog/public/2019/10/16/CF660C/index.html","ce034e6dae42595d858c8832940ceeee"],["D:/Payphone-X's Blog/public/2019/10/16/luoguP4053/index.html","bbf9b3c10977baed2a0f1504bd3d07b6"],["D:/Payphone-X's Blog/public/2019/10/17/CF449B/index.html","928fec1c950180ea53c9f1841deb1d28"],["D:/Payphone-X's Blog/public/2019/10/18/luoguP5278/index.html","3799054d69c6578258ad7673b20c0d06"],["D:/Payphone-X's Blog/public/2019/10/19/csp-s2019-1/index.html","89bfb6705440a679f20bd81c98e057b9"],["D:/Payphone-X's Blog/public/2019/10/20/luoguP2822/index.html","b839b69e15e1e308fedf7f836067f533"],["D:/Payphone-X's Blog/public/2019/10/21/CF1180B/index.html","ff5c375457797a90b56789cf976b9429"],["D:/Payphone-X's Blog/public/2019/10/21/luoguP1541/index.html","7013ba370249395f7845d426ab3172b6"],["D:/Payphone-X's Blog/public/2019/10/24/vijosP1615/index.html","7fa51c4d3ce916cd7b88eede580d6814"],["D:/Payphone-X's Blog/public/2019/10/24/vijosP1616/index.html","e58a683ba9a4695560c5a41d7e9e214f"],["D:/Payphone-X's Blog/public/2019/10/24/vijosP1617/index.html","6e2e52f6f32051386c467a3802b42a70"],["D:/Payphone-X's Blog/public/2019/10/25/GmojP6342/index.html","afec048c2973b7ce9cf5c8a57f606a18"],["D:/Payphone-X's Blog/public/2019/10/26/GmojP3814/index.html","b28432356c44132f61a98d0ad0e67f63"],["D:/Payphone-X's Blog/public/2019/10/27/CF521D/index.html","3d2f38d710eb1725948d69614e25347a"],["D:/Payphone-X's Blog/public/2019/10/27/luoguP1613/index.html","fc20456c67571f9928bf4e9f0d3b64b4"],["D:/Payphone-X's Blog/public/2019/10/28/GmojP1751/index.html","dacd0a9fe6d18db3e734fcf503bc1a79"],["D:/Payphone-X's Blog/public/2019/10/28/GmojP1752/index.html","26d0c41ae192e154bfdd2e6b8b3a71dd"],["D:/Payphone-X's Blog/public/2019/10/29/CF147B/index.html","6d5f12d294d11ae7a955f3404286914c"],["D:/Payphone-X's Blog/public/2019/10/29/CF148E/index.html","4ce463797b2c50ddeb22c20749f7f1e1"],["D:/Payphone-X's Blog/public/2019/10/30/GmojP3462/index.html","29a32c225fb61aabd17577aca284c3c9"],["D:/Payphone-X's Blog/public/2019/10/30/STL-plus/index.html","1faa0f05d79f95c26175425c3027c172"],["D:/Payphone-X's Blog/public/2019/10/31/GmojP1295/index.html","fe3644ed8ec7554790d4208432cc8b8e"],["D:/Payphone-X's Blog/public/2019/11/02/luoguP3467/index.html","61c2c7d2f88f03e590c4728bbbb19236"],["D:/Payphone-X's Blog/public/2019/11/03/difference-constraints/index.html","020803ae002536e0945fe45f20acafa9"],["D:/Payphone-X's Blog/public/2019/11/04/GmojP1350/index.html","a2eb870c754685e7e60d73eb71e0a214"],["D:/Payphone-X's Blog/public/2019/11/04/csp-s30sentences/index.html","9aeac57309f5aa25b45ef1bae9e114e0"],["D:/Payphone-X's Blog/public/2019/11/06/GmojP3843/index.html","765113527a0e854edaf53d192f17d576"],["D:/Payphone-X's Blog/public/2019/11/06/GmojP3844/index.html","f93a7b1db434cfadd9066a2c69af4002"],["D:/Payphone-X's Blog/public/2019/11/07/luoguP3197/index.html","68bb7fa666179164a3b1c326b1b9da0f"],["D:/Payphone-X's Blog/public/2019/11/08/luoguP2869/index.html","6c5ede10b30bb55a7be6b8aa2778c929"],["D:/Payphone-X's Blog/public/2019/11/09/CF508E/index.html","27cc2883227b638fbed0450c62315343"],["D:/Payphone-X's Blog/public/2019/11/12/luoguP1654/index.html","917ddbfef1ec71f123b9568821a1adc1"],["D:/Payphone-X's Blog/public/2020/02/05/luoguP1987/index.html","4c7dbac2cf9d8453d3d411520a7863dc"],["D:/Payphone-X's Blog/public/2020/02/09/luoguP1447/index.html","0daa75a1cbee7714adcc178275e6e686"],["D:/Payphone-X's Blog/public/2020/02/12/luoguP1445/index.html","cf504079527966967bf8a7214852fe2e"],["D:/Payphone-X's Blog/public/2020/02/25/luoguP2986/index.html","3503343919323539d96232d1ef5db0bc"],["D:/Payphone-X's Blog/public/2020/04/05/luoguP5658/index.html","1fe69a425b4921027e4953e52f19c44e"],["D:/Payphone-X's Blog/public/2020/04/06/luoguP4823/index.html","6aa5f3df9ea7fa52f4e3f05a4097db79"],["D:/Payphone-X's Blog/public/2020/04/10/luoguP1944/index.html","4ab0ada3ab4ee876ab2abac6edd0a122"],["D:/Payphone-X's Blog/public/2020/04/17/luoguP4141/index.html","0cecd5f86a60092eb5d8dbbce25c9cc2"],["D:/Payphone-X's Blog/public/2020/05/03/UVA1437/index.html","ca2ede627c355cfa198fe946bf484a1d"],["D:/Payphone-X's Blog/public/2020/05/14/luoguP1505/index.html","bd2bd4f90f7098ca06af9ba7d5f0af71"],["D:/Payphone-X's Blog/public/2020/05/22/luoguP3237/index.html","bf4a7570467406915d409a253b7191ff"],["D:/Payphone-X's Blog/public/2020/05/26/CF1353F/index.html","4cc4cdb0c46150a2dc6c33f7ea9c944c"],["D:/Payphone-X's Blog/public/2020/06/03/luoguP4071/index.html","6cd57a2a543b68b48af8927052ea1342"],["D:/Payphone-X's Blog/public/2020/06/04/luoguP1712/index.html","bdda1945fc7bb8f3eced882ea6433542"],["D:/Payphone-X's Blog/public/2020/06/19/luoguP6569/index.html","3944478403ec72096506181838584b6a"],["D:/Payphone-X's Blog/public/2020/07/30/LYOI2020SummerCompetition1/index.html","52f6d2e925864c36505a417e6d780563"],["D:/Payphone-X's Blog/public/2020/08/07/dsu-on-tree/index.html","14f59ce15e007c28a4a12045bca34abc"],["D:/Payphone-X's Blog/public/2020/08/10/luoguP3758/index.html","a8a7dcecb6e774d85f7023e56af4f2b5"],["D:/Payphone-X's Blog/public/2020/08/16/luoguP4342/index.html","fcd933fd8eeca292137202c96c459b6e"],["D:/Payphone-X's Blog/public/2020/08/19/luoguP4159/index.html","aa2bb24c378ce886ff74661223943cc1"],["D:/Payphone-X's Blog/public/2020/09/01/CF149D/index.html","72f8137fda25a16640938d0fbab42d34"],["D:/Payphone-X's Blog/public/2020/09/10/CF1407/index.html","d643381d8f6ba1ad4a2f67e6a57c1a87"],["D:/Payphone-X's Blog/public/2020/09/16/CF1398E/index.html","25a61bdfdc928a1aedbebba651270bfc"],["D:/Payphone-X's Blog/public/2020/09/16/CF1406C/index.html","3b4a1a1d06ac492828e3cc0298fa55c3"],["D:/Payphone-X's Blog/public/2020/10/09/luoguP5482/index.html","ae7f60c86f2c22a5036055e1777a0563"],["D:/Payphone-X's Blog/public/2020/10/29/CF1437-part/index.html","406fc3f5f3cf239092badf653075ad66"],["D:/Payphone-X's Blog/public/404.html","84c2ce2b13244ca21bf6f55f906b47bf"],["D:/Payphone-X's Blog/public/Problems/index.html","a4f29de5a6531f0cc845083ab962199e"],["D:/Payphone-X's Blog/public/Template/index.html","5d7f8e8e3afec0ea571df31d9d3053d7"],["D:/Payphone-X's Blog/public/about/index.html","edbe2c8fd36421ee0ef71abb354e1753"],["D:/Payphone-X's Blog/public/archives/2018/12/index.html","d8291ab55c8fa8725563de7d6c0b1ccc"],["D:/Payphone-X's Blog/public/archives/2018/index.html","93740fbd52fce19682b8965f5c862014"],["D:/Payphone-X's Blog/public/archives/2019/01/index.html","945486e8dd283a7d25570db1ed528dde"],["D:/Payphone-X's Blog/public/archives/2019/02/index.html","da21f0d3f8f111a04d6144f62f6e6a9f"],["D:/Payphone-X's Blog/public/archives/2019/03/index.html","8989d033c24a65b2e056024a9c385ab0"],["D:/Payphone-X's Blog/public/archives/2019/04/index.html","e345d08d9cf92ff804243c5b53165513"],["D:/Payphone-X's Blog/public/archives/2019/05/index.html","8876b352c53d92a71039191add1ce084"],["D:/Payphone-X's Blog/public/archives/2019/06/index.html","b2d13e61866ab214247d41542089c453"],["D:/Payphone-X's Blog/public/archives/2019/07/index.html","7aefa3a356e7f7b92c0d0fd0c2e5a6a0"],["D:/Payphone-X's Blog/public/archives/2019/08/index.html","ab84c91281e243fa14e959579a02474d"],["D:/Payphone-X's Blog/public/archives/2019/09/index.html","b6d2adc8679e01eb57fa2f3919933a8e"],["D:/Payphone-X's Blog/public/archives/2019/10/index.html","707a8cb2bdb346e286ce90adb14b5be7"],["D:/Payphone-X's Blog/public/archives/2019/10/page/2/index.html","7050ebd5dee88101aa44817e421af1bf"],["D:/Payphone-X's Blog/public/archives/2019/10/page/3/index.html","560dcbd4a3bfa43323a65b23f1a848cc"],["D:/Payphone-X's Blog/public/archives/2019/10/page/4/index.html","956e107e341918d5264f4bb85e425061"],["D:/Payphone-X's Blog/public/archives/2019/11/index.html","1b8db46b7d8a9bd1b4392fe2919b11a2"],["D:/Payphone-X's Blog/public/archives/2019/index.html","6d318f2632ce77d911ab498f1ed905e3"],["D:/Payphone-X's Blog/public/archives/2019/page/2/index.html","929b7c0702b46b4476d9f0aa91df3d8a"],["D:/Payphone-X's Blog/public/archives/2019/page/3/index.html","cb4c5d9434eee7e94a115cc666655241"],["D:/Payphone-X's Blog/public/archives/2019/page/4/index.html","8bbf1a4682bebafcece12f7259e638bb"],["D:/Payphone-X's Blog/public/archives/2019/page/5/index.html","196c77f2f1bafe0c7bb4dfd605252aff"],["D:/Payphone-X's Blog/public/archives/2019/page/6/index.html","054c503c0f90c80210ed275c10722be4"],["D:/Payphone-X's Blog/public/archives/2019/page/7/index.html","1a5caadab13884710d9cfb3d9c4af345"],["D:/Payphone-X's Blog/public/archives/2019/page/8/index.html","2ce47aa038ddfc54420be3e6a6013823"],["D:/Payphone-X's Blog/public/archives/2020/02/index.html","7be4bc74e704492d31a8fd4e743a6b12"],["D:/Payphone-X's Blog/public/archives/2020/04/index.html","523fce678164798dd24b4f07a9ef2394"],["D:/Payphone-X's Blog/public/archives/2020/05/index.html","4e5be33f631f10e09b53e84680572f4c"],["D:/Payphone-X's Blog/public/archives/2020/06/index.html","871834c74f561687ad78c13fcdf215f3"],["D:/Payphone-X's Blog/public/archives/2020/07/index.html","f006fb9d4cd27aeb6bf9f73ac3957bc1"],["D:/Payphone-X's Blog/public/archives/2020/08/index.html","1a288455344cb74545132e4e3d77c7c4"],["D:/Payphone-X's Blog/public/archives/2020/09/index.html","741467ffb2d6bf1a0cecca1dad8a8621"],["D:/Payphone-X's Blog/public/archives/2020/10/index.html","664a7bd9eda30c54d1181641a099853f"],["D:/Payphone-X's Blog/public/archives/2020/index.html","f9e7073c38acef5113b28458c61eeb61"],["D:/Payphone-X's Blog/public/archives/2020/page/2/index.html","2224c7ed0a363a145e0ea6c5980905e8"],["D:/Payphone-X's Blog/public/archives/2020/page/3/index.html","6e4634fbb3deadb36a402934c1b3e0df"],["D:/Payphone-X's Blog/public/archives/index.html","5ecbd66cabf673f51d5b18471ce4a175"],["D:/Payphone-X's Blog/public/archives/page/10/index.html","cf0c6a132f4950525bda2b33a5543611"],["D:/Payphone-X's Blog/public/archives/page/11/index.html","eac8715ce6f6402f31757c7791e7f736"],["D:/Payphone-X's Blog/public/archives/page/2/index.html","fdfccf57d463144ea4ff33efc433ba33"],["D:/Payphone-X's Blog/public/archives/page/3/index.html","fbc6c7c082c0d1f662119fc748754597"],["D:/Payphone-X's Blog/public/archives/page/4/index.html","3cd54605b48f30d8f197c6dc6ce496c3"],["D:/Payphone-X's Blog/public/archives/page/5/index.html","34c4fa659eff03834d5fe9ef0f7da1d2"],["D:/Payphone-X's Blog/public/archives/page/6/index.html","8768220fd9688216c062a89a9ee4c9ac"],["D:/Payphone-X's Blog/public/archives/page/7/index.html","5e09864ed62c8c1613c9c5b04e49e519"],["D:/Payphone-X's Blog/public/archives/page/8/index.html","4d218a9c83be27b1fc570c06515178e8"],["D:/Payphone-X's Blog/public/archives/page/9/index.html","adb608c13a3080e817ed36273f24f5f2"],["D:/Payphone-X's Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Payphone-X's Blog/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/Payphone-X's Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Payphone-X's Blog/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/Payphone-X's Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Payphone-X's Blog/public/categories/index.html","12da366a5409d87d2e356df46a6aba95"],["D:/Payphone-X's Blog/public/categories/命题报告/index.html","2a38edcabe37dc2979601368bc88b7e8"],["D:/Payphone-X's Blog/public/categories/成长之路/index.html","a70e8d455f3e0c80cf51e9843d4ef7cf"],["D:/Payphone-X's Blog/public/categories/文化课专栏/index.html","92ed11d646b34be498e971968a97d950"],["D:/Payphone-X's Blog/public/categories/灌水-摸鱼区/index.html","f593df46f366112e17c7a37ef42ca51e"],["D:/Payphone-X's Blog/public/categories/算法笔记/index.html","5a8e8453e27f0265dd89e8cd265765d5"],["D:/Payphone-X's Blog/public/categories/算法笔记/page/2/index.html","4d915a99b3747bc3525614b642551652"],["D:/Payphone-X's Blog/public/categories/考场技巧/index.html","623b39fa32bfba9d2a957b16a042024c"],["D:/Payphone-X's Blog/public/categories/解题报告/index.html","c753cbce3238a0c6c53446c33bf17384"],["D:/Payphone-X's Blog/public/categories/解题报告/page/2/index.html","1b543cd30762ac25e2b8f537eefbf510"],["D:/Payphone-X's Blog/public/categories/解题报告/page/3/index.html","5b9fde15618b452c31277da064478fae"],["D:/Payphone-X's Blog/public/categories/解题报告/page/4/index.html","c3ffda58d7296e06842598bbb43cd04d"],["D:/Payphone-X's Blog/public/categories/解题报告/page/5/index.html","e161f2260280ebfb5066f2e41dd63129"],["D:/Payphone-X's Blog/public/categories/解题报告/page/6/index.html","1a74922be87cabcfda10385397ea43bb"],["D:/Payphone-X's Blog/public/categories/解题报告/page/7/index.html","dec64cc4326c9a339f0919d67e3021da"],["D:/Payphone-X's Blog/public/categories/解题报告/page/8/index.html","8dd9a4d9f70e9678b9d1953c65157e6f"],["D:/Payphone-X's Blog/public/categories/转载区/index.html","109037b4b05c26b1c10ef4ed2c0f7329"],["D:/Payphone-X's Blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Payphone-X's Blog/public/css/index.css","9c51791fd238fb03c8e6046ba6bb3455"],["D:/Payphone-X's Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Payphone-X's Blog/public/img/404.jpg","eb132744554a88cad1861dd3527cfd8c"],["D:/Payphone-X's Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Payphone-X's Blog/public/img/avatar.png","f3b75076e7744706ab293e0b457e91cd"],["D:/Payphone-X's Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/Payphone-X's Blog/public/img/favicon.png","a9b4cc377cfbf5792f1261ef64cb2c04"],["D:/Payphone-X's Blog/public/img/friend_404.gif","63b842685a219d37234a3b7eb306dd33"],["D:/Payphone-X's Blog/public/img/loading.gif","f38710671d6d5e0a665e6925e4eef630"],["D:/Payphone-X's Blog/public/img/qq.jpg","0d468a5b5429f6010cbd60ca2b9a7a6f"],["D:/Payphone-X's Blog/public/img/wechat.png","56ffaccefc73c47e5b717772395e65fe"],["D:/Payphone-X's Blog/public/index.html","20e1143d84bbaa6d1c1b99790646565f"],["D:/Payphone-X's Blog/public/js/main.js","125fa8cc0f50b559881e6b0be97b3db2"],["D:/Payphone-X's Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Payphone-X's Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Payphone-X's Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Payphone-X's Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Payphone-X's Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Payphone-X's Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Payphone-X's Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Payphone-X's Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Payphone-X's Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Payphone-X's Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Payphone-X's Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Payphone-X's Blog/public/lib/blog-encrypt.js","037b40f88c8f0c44818849b9127a5e3f"],["D:/Payphone-X's Blog/public/lib/canvas-nest/README.html","20baf98cab6767d75389c29f846c0380"],["D:/Payphone-X's Blog/public/lib/canvas-nest/canvas-nest-nomobile.min.js","84a5b97a68b9da1b2822fd5e6032239d"],["D:/Payphone-X's Blog/public/lib/canvas-nest/canvas-nest.min.js","665a95d412391153d919403760b0b522"],["D:/Payphone-X's Blog/public/lib/three/README.html","e001d4c5fd70e1f3a9e1afe12b09a744"],["D:/Payphone-X's Blog/public/lib/three/canvas_lines.min.js","a2a04ec628d0cfab3d7523efaf0c42b1"],["D:/Payphone-X's Blog/public/lib/three/canvas_sphere.min.js","8de5ac69c0ee3a40b9e7212cf7c29b64"],["D:/Payphone-X's Blog/public/lib/three/gulpfile.js","3a628d93c78c87a3fd51a4450b179214"],["D:/Payphone-X's Blog/public/lib/three/lib/CanvasRenderer.js","e0cea30b8085000e16072a623e0156c5"],["D:/Payphone-X's Blog/public/lib/three/lib/Projector.js","303f29af7228fc63227ad71d7d187486"],["D:/Payphone-X's Blog/public/lib/three/src/canvas_lines.js","69e4af5d3b64551d037c10ba8d3ca37f"],["D:/Payphone-X's Blog/public/lib/three/src/canvas_sphere.js","b879d04e4281d99743985d849fde6ad5"],["D:/Payphone-X's Blog/public/lib/three/src/three-waves.js","1f8aa77634cacee3c21df9b780f1dc4e"],["D:/Payphone-X's Blog/public/lib/three/three-waves.min.js","1190bda07ccd3c69c9e89af8d83e138d"],["D:/Payphone-X's Blog/public/lib/three/three.min.js","2e45c2b237129a422ec0041f046699cf"],["D:/Payphone-X's Blog/public/link/index.html","cb9e4f3f02d20b568eef82fc98c0881b"],["D:/Payphone-X's Blog/public/live2dw/assets/model.2048/texture_00.png","ae34664ad879d043476c43d041b4aecd"],["D:/Payphone-X's Blog/public/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["D:/Payphone-X's Blog/public/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["D:/Payphone-X's Blog/public/page/10/index.html","eb362baf00808934c9c7fd5be1da5052"],["D:/Payphone-X's Blog/public/page/11/index.html","aebbb071b0ee63d953ecdedc439a67d9"],["D:/Payphone-X's Blog/public/page/2/index.html","cf8e14b46d2716e690bbfa269a2cf7c9"],["D:/Payphone-X's Blog/public/page/3/index.html","97fd09f0ce623ddbb94a4d0fe5bd16e1"],["D:/Payphone-X's Blog/public/page/4/index.html","28813c4bf0521ca10e6dc863f9721d0f"],["D:/Payphone-X's Blog/public/page/5/index.html","15fd64d013a82592a346102d90fb9a56"],["D:/Payphone-X's Blog/public/page/6/index.html","74d9da35c3d49fa951457964bbb9e2ec"],["D:/Payphone-X's Blog/public/page/7/index.html","dfb3b3221bea2e9cd4ce8b73daa8f60a"],["D:/Payphone-X's Blog/public/page/8/index.html","d1e1306abe8daf7c6a8e6e5cae21c9c7"],["D:/Payphone-X's Blog/public/page/9/index.html","3d432ff6895a9ea444acdacd5f4f4d9c"],["D:/Payphone-X's Blog/public/tags/Algorithm/index.html","3180ada19f7e3cebd3bc727124e4f4f1"],["D:/Payphone-X's Blog/public/tags/BZOJ/index.html","5d8842cb2b3cf39586276aceef647597"],["D:/Payphone-X's Blog/public/tags/Codeforces/index.html","c3e303821ec46197249c541246465f9e"],["D:/Payphone-X's Blog/public/tags/Codeforces/page/2/index.html","ec25386aa34e2529849047642a67f7e2"],["D:/Payphone-X's Blog/public/tags/DFS序/index.html","d056121097118becf5fab90e8ed3c89f"],["D:/Payphone-X's Blog/public/tags/Dijkstra/index.html","24464a475a84d0552ff3a95e6909eb2d"],["D:/Payphone-X's Blog/public/tags/Exgcd/index.html","2e5cfe230a0edef063bcca65f00442f6"],["D:/Payphone-X's Blog/public/tags/Floyd/index.html","ca534390b3ab6ffa7dbe8b2a10d00827"],["D:/Payphone-X's Blog/public/tags/Gcd/index.html","f27c720be514e5a65e19e9655687c217"],["D:/Payphone-X's Blog/public/tags/IOI/index.html","c7c620a8f52462aadbcef4bd2d319b9f"],["D:/Payphone-X's Blog/public/tags/LCA/index.html","ae328711f1e0d3c4cdf4765f2d714c7b"],["D:/Payphone-X's Blog/public/tags/LYOI/index.html","5715047932ab4e7d10994129c9744d2e"],["D:/Payphone-X's Blog/public/tags/Luogu/index.html","b92096c8217470a3651ae95e06d422ff"],["D:/Payphone-X's Blog/public/tags/Luogu/page/2/index.html","7530b6c172ea3d40ee13bbe8c410b352"],["D:/Payphone-X's Blog/public/tags/Luogu/page/3/index.html","2bdcde542d43d3256760288871bbc238"],["D:/Payphone-X's Blog/public/tags/Luogu/page/4/index.html","d36edcaef08dc03bd707f65a5b3fd02b"],["D:/Payphone-X's Blog/public/tags/Luogu/page/5/index.html","ea10e36433fee0f9f496f4eea70aa22d"],["D:/Payphone-X's Blog/public/tags/NOI-Online/index.html","952322725ab49e2a4e8770f80388e72f"],["D:/Payphone-X's Blog/public/tags/NOI/index.html","f15e3936df15245b640d411f722ae794"],["D:/Payphone-X's Blog/public/tags/NOIP/index.html","e97cb77674aedf92c2b831a96cba7300"],["D:/Payphone-X's Blog/public/tags/POI/index.html","14182fbf3133f35e234ca4c7bdfaafbf"],["D:/Payphone-X's Blog/public/tags/SPFA/index.html","9d525a67f051ce0531aa287e7958ce3a"],["D:/Payphone-X's Blog/public/tags/STL/index.html","5df722a5ba0cbf1ee091cbf3e2f0ed41"],["D:/Payphone-X's Blog/public/tags/Tarjan/index.html","0b6dda3dcf38eba2e0086c1d4bf4726b"],["D:/Payphone-X's Blog/public/tags/Treap/index.html","1413e04e884dd5e21d61460bea1c40cf"],["D:/Payphone-X's Blog/public/tags/Trie树/index.html","1be6ccaac81681a909764ba5d15aa0e7"],["D:/Payphone-X's Blog/public/tags/USACO/index.html","427bc59b76444a49c152b8a147fa31c0"],["D:/Payphone-X's Blog/public/tags/UVA/index.html","efb9fc7d0af4bdbbab36c1eb6750aecb"],["D:/Payphone-X's Blog/public/tags/Vijos/index.html","cb37e55dce95fd5a8d506d8029ea00fe"],["D:/Payphone-X's Blog/public/tags/WC-CTSC-集训队/index.html","1b3d703893cf9b5a562582d594e3c135"],["D:/Payphone-X's Blog/public/tags/ZROI/index.html","5bbdefdad8a46c068824617460b3071f"],["D:/Payphone-X's Blog/public/tags/bitset/index.html","dd902b495dc84243da06b6b1d9a2ddf5"],["D:/Payphone-X's Blog/public/tags/index.html","bf20b9972d23aa54f15a2a951b26acb3"],["D:/Payphone-X's Blog/public/tags/乱搞/index.html","37b130facebe78777d7046a1e011c3e5"],["D:/Payphone-X's Blog/public/tags/二分/index.html","0d0c0374e8603f88538fb50f0f1e4d3e"],["D:/Payphone-X's Blog/public/tags/交互题/index.html","ee05e425579ae480a3707b391b22c009"],["D:/Payphone-X's Blog/public/tags/优先队列/index.html","2138efdc7307a50bd7f387827c04f94f"],["D:/Payphone-X's Blog/public/tags/位运算/index.html","1a8aed3529db800b336c9c615110e524"],["D:/Payphone-X's Blog/public/tags/倍增/index.html","faf342329a62257893ac1c6cf92d74ed"],["D:/Payphone-X's Blog/public/tags/分层图最短路/index.html","4b6947a27100b1e8954e59c147359968"],["D:/Payphone-X's Blog/public/tags/分类讨论/index.html","a40ae71da27c92ccb81843ccc33c7207"],["D:/Payphone-X's Blog/public/tags/前缀和/index.html","b9461a0b2128ca4d0d8f0adc71209b82"],["D:/Payphone-X's Blog/public/tags/动态规划/index.html","0cf507019a00ee72dff4c3da3b20bbd9"],["D:/Payphone-X's Blog/public/tags/动态规划/page/2/index.html","dd060b14c2b5c7b5eaba19a8d83da324"],["D:/Payphone-X's Blog/public/tags/动态规划/page/3/index.html","96b3efa91dba368fc3dd3ba70c0342db"],["D:/Payphone-X's Blog/public/tags/区间dp/index.html","cd14c3c61d53a91623be9aa127f4901b"],["D:/Payphone-X's Blog/public/tags/博弈论/index.html","9eeb5f36221590918f4d0fb5d54635e1"],["D:/Payphone-X's Blog/public/tags/可并堆/index.html","8f2fcedc83134c51f21f331915f29b34"],["D:/Payphone-X's Blog/public/tags/各省省选/index.html","94b5b5e3142bff6a889143b3f9e3808b"],["D:/Payphone-X's Blog/public/tags/各省省选/page/2/index.html","323f6cc9863bd42c5ef51c835ffde798"],["D:/Payphone-X's Blog/public/tags/启发式合并/index.html","b434ef80ab2c0199999d00e43b983e0c"],["D:/Payphone-X's Blog/public/tags/唯一分解定理/index.html","dc8ef257d147f7d6a981b53877f28026"],["D:/Payphone-X's Blog/public/tags/图论/index.html","8f996451fae02c83a7742d7a1f4cdd18"],["D:/Payphone-X's Blog/public/tags/图论/page/2/index.html","d1f7da8a741532ee74ee3460248c3732"],["D:/Payphone-X's Blog/public/tags/埃氏筛/index.html","68800ade6699eee4a73a43795e49f88d"],["D:/Payphone-X's Blog/public/tags/夏令营/index.html","6560c63375f33d21b9b4c0a6ab8f51fb"],["D:/Payphone-X's Blog/public/tags/字符串/index.html","7c902894f691db61085cbb9382748aac"],["D:/Payphone-X's Blog/public/tags/学习笔记/index.html","f525f62d608262208b0451a609c94e6e"],["D:/Payphone-X's Blog/public/tags/学习笔记/page/2/index.html","5cebeeb761cc4edc4e68fced737d294f"],["D:/Payphone-X's Blog/public/tags/容斥原理/index.html","a26e74d91ccca1bd5efb79a47372c19f"],["D:/Payphone-X's Blog/public/tags/尺取法/index.html","d756467df84c05ea9e635d09d29d7cbe"],["D:/Payphone-X's Blog/public/tags/差分约束/index.html","ed40cbb3bd7a9e3b87e7e04333031d5d"],["D:/Payphone-X's Blog/public/tags/并查集/index.html","568522a52222c4c1189b387afa4fed34"],["D:/Payphone-X's Blog/public/tags/总结篇/index.html","0e1c2a1287064cbce9e683ff61f7d216"],["D:/Payphone-X's Blog/public/tags/成长之路/index.html","6646b3884fa32002ff0e104fb2917954"],["D:/Payphone-X's Blog/public/tags/拆点-拆边/index.html","9755e7af0da16aefb7d465de9c6d9d2e"],["D:/Payphone-X's Blog/public/tags/换根法/index.html","9f903b7ad9de7e2c22b06b1bb6a34dcb"],["D:/Payphone-X's Blog/public/tags/排序/index.html","4c5919340c48d0814615ae54ed12b0db"],["D:/Payphone-X's Blog/public/tags/搜索/index.html","a197a13e851ac967c729d605595be0d8"],["D:/Payphone-X's Blog/public/tags/数学/index.html","50f9155938f42f973578c1674175278e"],["D:/Payphone-X's Blog/public/tags/数据结构/index.html","b5f247a951dafe8121173d96af505077"],["D:/Payphone-X's Blog/public/tags/数论/index.html","217e06121cba131215a12b6de9b0a9e5"],["D:/Payphone-X's Blog/public/tags/文化课专栏/index.html","9c90ef05f7f363e1f484186be67b8c1c"],["D:/Payphone-X's Blog/public/tags/文章转载/index.html","b2338f50ecc85e11c8e2e0457e9a066e"],["D:/Payphone-X's Blog/public/tags/暴力/index.html","7295925e9230cce490a3958dfa285675"],["D:/Payphone-X's Blog/public/tags/最小生成树/index.html","869083f41011a4910888453cb78e0210"],["D:/Payphone-X's Blog/public/tags/最短路计数/index.html","bbb6525df7483da5b93d4828bb469647"],["D:/Payphone-X's Blog/public/tags/期望dp/index.html","45939775b8ebf16968fdef16fbefc438"],["D:/Payphone-X's Blog/public/tags/染色法/index.html","bb7381e2dbd03a9f784a48b5b141149b"],["D:/Payphone-X's Blog/public/tags/栈/index.html","91f0afcdb80deda4ebd1498bc7a33413"],["D:/Payphone-X's Blog/public/tags/树上启发式合并/index.html","43df386d9c12d17fe20b78ff089dd725"],["D:/Payphone-X's Blog/public/tags/树形dp/index.html","ae7dc5bdfb7a64349b9430bf23fdaf9d"],["D:/Payphone-X's Blog/public/tags/树状数组/index.html","e4a88bcdefd8de14c3ebf6d3fd085ccb"],["D:/Payphone-X's Blog/public/tags/树的直径/index.html","f4020ab1c3a29fa96e72ffbd123db40b"],["D:/Payphone-X's Blog/public/tags/树的重心/index.html","fa34b150e512f93eae7a2716bfe3eeab"],["D:/Payphone-X's Blog/public/tags/树链剖分/index.html","0b3d2caa4369a9de3dab9d764365d997"],["D:/Payphone-X's Blog/public/tags/概率期望/index.html","117a06b2df6498676438c475993e380d"],["D:/Payphone-X's Blog/public/tags/模拟/index.html","23ee76f0c31317db7e9b394431971bbb"],["D:/Payphone-X's Blog/public/tags/模拟退火/index.html","4fe64f6d35a903b3ef314b5932a9b025"],["D:/Payphone-X's Blog/public/tags/欧拉筛/index.html","d8b4467ae3389f08442a429f3e1a256f"],["D:/Payphone-X's Blog/public/tags/灌水区/index.html","9b06cc18220f7a556fd75a74bdd88b59"],["D:/Payphone-X's Blog/public/tags/玄学/index.html","4ad7bc2b075fce2cbf0ef8aa7782387c"],["D:/Payphone-X's Blog/public/tags/珂朵莉树/index.html","559a3fa9515242c993a045d5786c334d"],["D:/Payphone-X's Blog/public/tags/矩阵运算/index.html","03bde6c38b6f56fbe1f96b35dbcbdca3"],["D:/Payphone-X's Blog/public/tags/纪中集训/index.html","3c667f848928123d86bb90cf0ed5844f"],["D:/Payphone-X's Blog/public/tags/纪中集训/page/2/index.html","444ee66bfda99e81f605a8f938eed508"],["D:/Payphone-X's Blog/public/tags/线性dp/index.html","09f14f244f573892235aa4f10f69c19f"],["D:/Payphone-X's Blog/public/tags/线段树/index.html","3e993c52fef4db1529fc44def08f75dc"],["D:/Payphone-X's Blog/public/tags/组合数学/index.html","569b4ac3b049fb63a095df1ad35b9048"],["D:/Payphone-X's Blog/public/tags/考场技巧/index.html","4b12378ca99774a318cb6086df61fe42"],["D:/Payphone-X's Blog/public/tags/背包问题/index.html","f1e2d0fe8f173c0f5ada10f46e193adb"],["D:/Payphone-X's Blog/public/tags/贪心/index.html","989676128fb4179406092c21c3be8660"],["D:/Payphone-X's Blog/public/tags/贪心/page/2/index.html","8f363e87f85a31b00ca7192af9a0c8c8"],["D:/Payphone-X's Blog/public/tags/超可爱哒/index.html","54efa5f5e6013c7896cc211d0b6f4933"],["D:/Payphone-X's Blog/public/tags/逆序对/index.html","9360a1dd6e5b8903b03730949e739fd5"],["D:/Payphone-X's Blog/public/tags/递推/index.html","6bef591060e89706da4260d609753485"],["D:/Payphone-X's Blog/public/tags/链式前向星/index.html","17a229974183e91a364276461fc79a12"],["D:/Payphone-X's Blog/public/tags/题解/index.html","ea0ac551474cc89b96788f276666d9e4"],["D:/Payphone-X's Blog/public/tags/题解/page/2/index.html","84129708e8764225d6baa3bfce4b9143"],["D:/Payphone-X's Blog/public/tags/题解/page/3/index.html","f7f27d187f0c74b2c609eb15cc1bd9ae"],["D:/Payphone-X's Blog/public/tags/题解/page/4/index.html","7b93df6a3c82cfb095fc11b60a1f2a7c"],["D:/Payphone-X's Blog/public/tags/题解/page/5/index.html","bb29f4ced2843f30ab1b091aba91fe76"],["D:/Payphone-X's Blog/public/tags/题解/page/6/index.html","efee365c86b3ff073cd9da23e123ed36"],["D:/Payphone-X's Blog/public/tags/题解/page/7/index.html","9a640f4fc8fd8788ebff5feee50f1e1c"],["D:/Payphone-X's Blog/public/tags/题解/page/8/index.html","964cbbe31b3ddda629c266ed4e1b5812"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







