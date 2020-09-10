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

var precacheConfig = [["D:/Payphone-X's Blog/public/2018/12/31/hello-world/index.html","61321338b24953de9343fdb10b86510f"],["D:/Payphone-X's Blog/public/2019/01/21/sort-unique/index.html","be84d334525635cab5f14f478a012fd4"],["D:/Payphone-X's Blog/public/2019/01/22/Heap/index.html","6a25f963192af0291de758942aa645ef"],["D:/Payphone-X's Blog/public/2019/01/23/LogeyOIDay1T1/index.html","9317b845a082a6c4a020a727034b9497"],["D:/Payphone-X's Blog/public/2019/01/23/STL/index.html","c2a1423efd3f58581e08320df3d919d5"],["D:/Payphone-X's Blog/public/2019/01/24/Tree/index.html","06367b1923cd2b8c7166177ac6aff352"],["D:/Payphone-X's Blog/public/2019/01/27/HNOI2006/index.html","9317abce120223a48df722f6030ebd27"],["D:/Payphone-X's Blog/public/2019/02/12/English-1/index.html","616353c3d4cd31a4c7f2678a80002bc6"],["D:/Payphone-X's Blog/public/2019/02/12/wen-hua-ke-start/index.html","f129d383cbc36302c63011a7bd8ccb1f"],["D:/Payphone-X's Blog/public/2019/02/17/luoguP4643/index.html","57c44d09fda6b25e544a07c0747c6305"],["D:/Payphone-X's Blog/public/2019/02/23/Floyd/index.html","26a094dcfa7d1eab5257de8aebaa0acd"],["D:/Payphone-X's Blog/public/2019/02/27/Dijkstra/index.html","f73259214040fc168bcaee6027a96e06"],["D:/Payphone-X's Blog/public/2019/03/16/linjiebiao/index.html","be8f65814d6ddde1d92b1cbce55bc447"],["D:/Payphone-X's Blog/public/2019/03/20/luoguP1330/index.html","067d51bcb2ae49ddd43e64bbcdccc9c5"],["D:/Payphone-X's Blog/public/2019/04/13/history/index.html","c5bfa708e7d86d59750fe4e1503519c6"],["D:/Payphone-X's Blog/public/2019/05/01/path/index.html","6a3768ab31f270563d1a2e5fba4c1c35"],["D:/Payphone-X's Blog/public/2019/06/17/unionfind/index.html","4fd4e84e9788f494ee496f66df1171c4"],["D:/Payphone-X's Blog/public/2019/06/18/luoguP1119/index.html","ce57f898f5f77ed99d2ae9f781acbf8e"],["D:/Payphone-X's Blog/public/2019/06/19/Simulate-Anneal/index.html","02338b244de475c9d0ca62ddfe53f2cb"],["D:/Payphone-X's Blog/public/2019/06/26/luoguP1969/index.html","3012651085c2826e2cf260430e86cdcc"],["D:/Payphone-X's Blog/public/2019/06/26/luoguP5019/index.html","d9f7876a266401b44d6a8fcfb58627b3"],["D:/Payphone-X's Blog/public/2019/06/30/cartoon/index.html","0ffbf0b503f43af7416be35977f55130"],["D:/Payphone-X's Blog/public/2019/06/30/zhongkaoBUG/index.html","42cbd5a39b9b71f03d46b48c8f61513e"],["D:/Payphone-X's Blog/public/2019/07/05/left-tree/index.html","89e4672bd65a6544934e069d28300bde"],["D:/Payphone-X's Blog/public/2019/07/15/luoguP5020/index.html","e7e104103492135b2539564dffafbe9a"],["D:/Payphone-X's Blog/public/2019/07/20/LYOI-Summer-Round-1/index.html","fba65b53b3c6c0b706b297072ec1357d"],["D:/Payphone-X's Blog/public/2019/08/02/Bit-operation/index.html","7274727aaba27ebdd94420a0d0fc938c"],["D:/Payphone-X's Blog/public/2019/08/04/Tarjan-point&edge/index.html","92a89cbad89d9ed0288e64eaee0c8811"],["D:/Payphone-X's Blog/public/2019/08/09/math1/index.html","c4edfaf71fabb04d0f8ef9d230952185"],["D:/Payphone-X's Blog/public/2019/08/11/my-first-acm/index.html","87915483f47d4aaf66ee289bc704859a"],["D:/Payphone-X's Blog/public/2019/08/12/luoguP4971/index.html","d33aa4fab44541a723ca70d3afc90974"],["D:/Payphone-X's Blog/public/2019/08/12/nothing/index.html","da2d3e3cd32bde118c52fb0b54447bb3"],["D:/Payphone-X's Blog/public/2019/08/22/luoguP1326/index.html","849833918b183ac014d5ff30ecae1482"],["D:/Payphone-X's Blog/public/2019/09/07/luoguP1608/index.html","b666f79cd556b58b46bc10c7b4db6fe1"],["D:/Payphone-X's Blog/public/2019/09/10/math2/index.html","9910a578639b8814b13efd3a4230cbe5"],["D:/Payphone-X's Blog/public/2019/09/17/same/index.html","f27208263f1c3b965582aa031c1d7bb8"],["D:/Payphone-X's Blog/public/2019/10/04/Chtholly-Tree/index.html","f1e57dc3773648184b43879ddca6d591"],["D:/Payphone-X's Blog/public/2019/10/06/luoguP1352/index.html","5850106872f1f80f03ae6f79eadfb722"],["D:/Payphone-X's Blog/public/2019/10/08/luoguP1967/index.html","36d1f1f69c86f9608152a4cee9d0a6a4"],["D:/Payphone-X's Blog/public/2019/10/08/zz-mistake/index.html","405f766267eb43b4ab7ebb4fe7b2fc8b"],["D:/Payphone-X's Blog/public/2019/10/09/CF140C/index.html","cd51b5231d710dcc253c59135f60eeb1"],["D:/Payphone-X's Blog/public/2019/10/09/luoguP2580/index.html","67d9d8f09997029257872a0c89ec8715"],["D:/Payphone-X's Blog/public/2019/10/10/luoguP3879/index.html","5b011e6941698742d45ef8d0ec3b822e"],["D:/Payphone-X's Blog/public/2019/10/11/luoguP4107/index.html","e2b0984687b5ff77ceb19534dcc29144"],["D:/Payphone-X's Blog/public/2019/10/12/ZROI-pj5-Day3/index.html","c5d701a5bedbf1d5a71b7b7cddf1d8e9"],["D:/Payphone-X's Blog/public/2019/10/13/luoguP1197/index.html","837a489b0aaca9ad222ac19799632170"],["D:/Payphone-X's Blog/public/2019/10/14/luoguP4568/index.html","b7565cf2d37bb19b0872e473984849b4"],["D:/Payphone-X's Blog/public/2019/10/16/CF161B/index.html","b559cfcb3aab87993b947cb5600bf926"],["D:/Payphone-X's Blog/public/2019/10/16/CF660C/index.html","d9938b90131fbf103c44c7eb93366ce6"],["D:/Payphone-X's Blog/public/2019/10/16/luoguP4053/index.html","b216466653afb52900fb8ef6ac736d76"],["D:/Payphone-X's Blog/public/2019/10/17/CF449B/index.html","90e5de52cdd68000cc7e6d872e45a7cd"],["D:/Payphone-X's Blog/public/2019/10/18/luoguP5278/index.html","94011c0f8832f31fdba19b60c0401504"],["D:/Payphone-X's Blog/public/2019/10/19/csp-s2019-1/index.html","16d6b355b364d4ec3368445f621fce31"],["D:/Payphone-X's Blog/public/2019/10/20/luoguP2822/index.html","50c734c4d08dd35c012c8e2aacb42f7b"],["D:/Payphone-X's Blog/public/2019/10/21/CF1180B/index.html","68a7db8d342c05d0aa3984f682c76d02"],["D:/Payphone-X's Blog/public/2019/10/21/luoguP1541/index.html","39a7872634c06be9e20e119f6310787e"],["D:/Payphone-X's Blog/public/2019/10/24/vijosP1615/index.html","6a0d4b5998227774bd639feec1b56c74"],["D:/Payphone-X's Blog/public/2019/10/24/vijosP1616/index.html","2e4380a9c819774e93b074ebb4dd40c2"],["D:/Payphone-X's Blog/public/2019/10/24/vijosP1617/index.html","3f1e8816b01c2daaea8c038b68cb115a"],["D:/Payphone-X's Blog/public/2019/10/25/GmojP6342/index.html","2f0b06b9efa3dad2e0c0279a96a46e20"],["D:/Payphone-X's Blog/public/2019/10/26/GmojP3814/index.html","23c16c7bc22db55da5fa5abfbcb75c0f"],["D:/Payphone-X's Blog/public/2019/10/27/CF521D/index.html","c9082f1b0a348a3d5b25e13462836770"],["D:/Payphone-X's Blog/public/2019/10/27/luoguP1613/index.html","84811c59745c6a88c952afd20e7b57eb"],["D:/Payphone-X's Blog/public/2019/10/28/GmojP1751/index.html","4567ff9ee9a9e3374b2c907b141c4eda"],["D:/Payphone-X's Blog/public/2019/10/28/GmojP1752/index.html","5e6f1de7536910a6f78ced59c363e80d"],["D:/Payphone-X's Blog/public/2019/10/29/CF147B/index.html","ebe386221fca7bac07e30ef8ee965bf4"],["D:/Payphone-X's Blog/public/2019/10/29/CF148E/index.html","fc3b3700102d6eddb2d2bd7bebbb43ca"],["D:/Payphone-X's Blog/public/2019/10/30/GmojP3462/index.html","68398f953eb3941568ff478fb6a6683d"],["D:/Payphone-X's Blog/public/2019/10/30/STL-plus/index.html","25fb3b28ffad398b4f061eb82710a1c9"],["D:/Payphone-X's Blog/public/2019/10/31/GmojP1295/index.html","ac032898f09937e402b5356941ddc9b8"],["D:/Payphone-X's Blog/public/2019/11/02/luoguP3467/index.html","6d0c7f9966e8935a04197a21a5231e8b"],["D:/Payphone-X's Blog/public/2019/11/03/difference-constraints/index.html","6d91163533681e3d80d1292a12f12b45"],["D:/Payphone-X's Blog/public/2019/11/04/GmojP1350/index.html","e7e956e3db459f827014b6825a0bb164"],["D:/Payphone-X's Blog/public/2019/11/04/csp-s30sentences/index.html","1a5d220d06d21e9a645711bbcc6f4acd"],["D:/Payphone-X's Blog/public/2019/11/06/GmojP3843/index.html","c3bd78025fe83b68aabc1cd2dd0cf9a9"],["D:/Payphone-X's Blog/public/2019/11/06/GmojP3844/index.html","16c5e0b6a17a75a9055b6ba62f9cb8ef"],["D:/Payphone-X's Blog/public/2019/11/07/luoguP3197/index.html","7bd5fcac601480b998d211186037152d"],["D:/Payphone-X's Blog/public/2019/11/08/luoguP2869/index.html","a8a6df03f748adb3390edf5bbb4ee631"],["D:/Payphone-X's Blog/public/2019/11/09/CF508E/index.html","7f3d944f5b2e7cbe52ddd5232390466b"],["D:/Payphone-X's Blog/public/2019/11/12/luoguP1654/index.html","0c8654e1ce62aef993b39aaa7e248359"],["D:/Payphone-X's Blog/public/2020/02/05/luoguP1987/index.html","f6d948aa8e124313e700f196ab95eed9"],["D:/Payphone-X's Blog/public/2020/02/09/luoguP1447/index.html","59a018755bac61bc449bc82e7f77c431"],["D:/Payphone-X's Blog/public/2020/02/12/luoguP1445/index.html","2e997fc1c57fa70baec6538c3b8fc6f3"],["D:/Payphone-X's Blog/public/2020/02/25/luoguP2986/index.html","2e12e52b41a0596a3e31fdb4b8e536a4"],["D:/Payphone-X's Blog/public/2020/04/05/luoguP5658/index.html","a6aca90536f2c401ca82cd1501b4bb2e"],["D:/Payphone-X's Blog/public/2020/04/06/luoguP4823/index.html","4450c93ed21b58a701ace43204d20582"],["D:/Payphone-X's Blog/public/2020/04/10/luoguP1944/index.html","f5058914f6c48bd64531f5a7ecd565e5"],["D:/Payphone-X's Blog/public/2020/04/17/luoguP4141/index.html","d79740442e4a825fc3601676d17e36c1"],["D:/Payphone-X's Blog/public/2020/05/03/UVA1437/index.html","9eb1a164636e2304596b785bd0bd54b7"],["D:/Payphone-X's Blog/public/2020/05/14/luoguP1505/index.html","6a340eacd86ee2ff2ba90238ba05d6c9"],["D:/Payphone-X's Blog/public/2020/05/22/luoguP3237/index.html","6994c91c2dc9c9e60bfd8f08c6e7fd59"],["D:/Payphone-X's Blog/public/2020/05/26/CF1353F/index.html","be8ffd2d2ac3b17a5f0eb578f77a1a4f"],["D:/Payphone-X's Blog/public/2020/06/03/luoguP4071/index.html","5aa877363c88e9f4460188e8228adc01"],["D:/Payphone-X's Blog/public/2020/06/04/luoguP1712/index.html","b6cc7dfa690af6a1c6fdb31565469963"],["D:/Payphone-X's Blog/public/2020/06/19/luoguP6569/index.html","9b07d0b4e848b9bdc619e6451c2a6d51"],["D:/Payphone-X's Blog/public/2020/07/30/LYOI2020SummerCompetition1/index.html","17a625034e7b32b65d5e740503dcb730"],["D:/Payphone-X's Blog/public/2020/08/07/dsu-on-tree/index.html","6cc79b0ca0b27b789db0fe8fb50fe2c5"],["D:/Payphone-X's Blog/public/2020/08/10/luoguP3758/index.html","aeea06aff405fd2ac50b0bf276887731"],["D:/Payphone-X's Blog/public/2020/08/16/luoguP4342/index.html","d1a740f42b9bbc903753376b4cc98934"],["D:/Payphone-X's Blog/public/2020/08/19/luoguP4159/index.html","d6de2d67d37406cd26ed574c7c4e8f8f"],["D:/Payphone-X's Blog/public/2020/09/01/CF149D/index.html","37afc81ce184218f754161caaf29aa59"],["D:/Payphone-X's Blog/public/2020/09/10/CF1407/index.html","b700c0071df02e38ec5a99238b3b63df"],["D:/Payphone-X's Blog/public/404.html","2c09153f07d021c9cf15edc774cc6d07"],["D:/Payphone-X's Blog/public/Problems/index.html","efbf1015e5746e5333eef8506879f829"],["D:/Payphone-X's Blog/public/Template/index.html","eac64b6daf40cb6cb9bcc907d7f7393b"],["D:/Payphone-X's Blog/public/about/index.html","c5a2e794ef9214d5d201063823adda48"],["D:/Payphone-X's Blog/public/archives/2018/12/index.html","65eaa2f021f49b45680525bc5a50e44d"],["D:/Payphone-X's Blog/public/archives/2018/index.html","f630811e0fbe9731031957c67124b785"],["D:/Payphone-X's Blog/public/archives/2019/01/index.html","40a9794c4aeb37c32469fcd1e5079fc4"],["D:/Payphone-X's Blog/public/archives/2019/02/index.html","aa4adbb2c82822cbdeddbc7f487d8539"],["D:/Payphone-X's Blog/public/archives/2019/03/index.html","eef8f6dbaf2657058dd097c219ef54b8"],["D:/Payphone-X's Blog/public/archives/2019/04/index.html","45376183140ac947175ef6abfce81ecc"],["D:/Payphone-X's Blog/public/archives/2019/05/index.html","e1dfa0d26207700883d46df309141d5a"],["D:/Payphone-X's Blog/public/archives/2019/06/index.html","973098a94269f7a3b2a7ae5c08570f03"],["D:/Payphone-X's Blog/public/archives/2019/07/index.html","4cde06603f5517eb0fa43a60d166a5ca"],["D:/Payphone-X's Blog/public/archives/2019/08/index.html","774e670e14a029596c0ce0f8ec723f89"],["D:/Payphone-X's Blog/public/archives/2019/09/index.html","b10bc09f97559987bdc556eeb2205747"],["D:/Payphone-X's Blog/public/archives/2019/10/index.html","02811d3ed46c2434fc7c6fe24d6dd33a"],["D:/Payphone-X's Blog/public/archives/2019/10/page/2/index.html","4a3dd1bdcfcad24f010559e11767013b"],["D:/Payphone-X's Blog/public/archives/2019/10/page/3/index.html","ef657b4b6022c9e10d538e5460312e77"],["D:/Payphone-X's Blog/public/archives/2019/10/page/4/index.html","545b501c0edcb45d5b73efb94fbcf429"],["D:/Payphone-X's Blog/public/archives/2019/11/index.html","8d1f7530c27f87463a1cf9b970f63936"],["D:/Payphone-X's Blog/public/archives/2019/index.html","61cbfb81ca417db361835a57be3f1943"],["D:/Payphone-X's Blog/public/archives/2019/page/2/index.html","0021d1fe90dc73933e344d123ca499a9"],["D:/Payphone-X's Blog/public/archives/2019/page/3/index.html","3d4a21f99f9e4f4bf17ef499076a9dfa"],["D:/Payphone-X's Blog/public/archives/2019/page/4/index.html","c07aaa17321e717d2893b69f22e188b7"],["D:/Payphone-X's Blog/public/archives/2019/page/5/index.html","2104dbf83bbe9f9f0e6b9681b14a0923"],["D:/Payphone-X's Blog/public/archives/2019/page/6/index.html","2d8bcfedcea5c26ae6bc6fa03f213152"],["D:/Payphone-X's Blog/public/archives/2019/page/7/index.html","66982e279288f26dd54810a1ed743820"],["D:/Payphone-X's Blog/public/archives/2019/page/8/index.html","40fa022c09900c8155442545b2c9fd9d"],["D:/Payphone-X's Blog/public/archives/2020/02/index.html","fa37b9652b5fcbde598b5d3cf8fc60fd"],["D:/Payphone-X's Blog/public/archives/2020/04/index.html","357d1a0306d2025ea737e48c99f0383b"],["D:/Payphone-X's Blog/public/archives/2020/05/index.html","b6f9a5940ae1c042502b94e99cf326e0"],["D:/Payphone-X's Blog/public/archives/2020/06/index.html","5f97851d1632637e5bae8b7d51b6e582"],["D:/Payphone-X's Blog/public/archives/2020/07/index.html","54026357c9f3c88090c3adcdf8d805b2"],["D:/Payphone-X's Blog/public/archives/2020/08/index.html","80bfb7663897df380bd2b946b9808c73"],["D:/Payphone-X's Blog/public/archives/2020/09/index.html","5e3ef9a811204953967f228e0782a48b"],["D:/Payphone-X's Blog/public/archives/2020/index.html","ce6b320ad1552b5ef05c81b4e64927d3"],["D:/Payphone-X's Blog/public/archives/2020/page/2/index.html","5c17c257626e16b8cc893ea393233d04"],["D:/Payphone-X's Blog/public/archives/2020/page/3/index.html","8192e77460b118e354ed6a40c1e7bde6"],["D:/Payphone-X's Blog/public/archives/index.html","8a0ddf8184ee9fdd0daa946fc4f20434"],["D:/Payphone-X's Blog/public/archives/page/10/index.html","c02731739237b093eca75693e792c367"],["D:/Payphone-X's Blog/public/archives/page/11/index.html","858dab56539e768fb9467e9c2427dffe"],["D:/Payphone-X's Blog/public/archives/page/2/index.html","cd1d39f28641b48309bc8ecce66e1d6d"],["D:/Payphone-X's Blog/public/archives/page/3/index.html","95f601cbac2c32d180af7bb8248f1e9e"],["D:/Payphone-X's Blog/public/archives/page/4/index.html","63368f09095545d62b7e82784299ec31"],["D:/Payphone-X's Blog/public/archives/page/5/index.html","bbcb6c3540ebee1d8cfc7551f4bcd313"],["D:/Payphone-X's Blog/public/archives/page/6/index.html","5879b9d2f58b0561d7c0b3cdd6ebe59a"],["D:/Payphone-X's Blog/public/archives/page/7/index.html","e1eb0b3e15731b43d1e06b1f874f5661"],["D:/Payphone-X's Blog/public/archives/page/8/index.html","b80640625433892afc8a1789609d37fe"],["D:/Payphone-X's Blog/public/archives/page/9/index.html","292ae6d4fe8bd4520142f09ade92a63b"],["D:/Payphone-X's Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Payphone-X's Blog/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/Payphone-X's Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Payphone-X's Blog/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/Payphone-X's Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Payphone-X's Blog/public/categories/index.html","2fd1e2e455b6674081a5abd947419951"],["D:/Payphone-X's Blog/public/categories/命题报告/index.html","c73747dfe5b3dae146f94d1add2d6bb1"],["D:/Payphone-X's Blog/public/categories/成长之路/index.html","217e858e1535e0b0740528c55de3aa3b"],["D:/Payphone-X's Blog/public/categories/文化课专栏/index.html","9e62c0d96f59759762c3cc3f34001de0"],["D:/Payphone-X's Blog/public/categories/灌水-摸鱼区/index.html","c0f223463babf65929b92b5936b21667"],["D:/Payphone-X's Blog/public/categories/算法笔记/index.html","b2e5becca6fd650b8ee55d92b06b9e0e"],["D:/Payphone-X's Blog/public/categories/算法笔记/page/2/index.html","6983b2a3309b2569dcfd04e88c55fc13"],["D:/Payphone-X's Blog/public/categories/考场技巧/index.html","96f1d331010938bd6fe003491e293bb7"],["D:/Payphone-X's Blog/public/categories/解题报告/index.html","d8d411cf5fbb7a52627ef4ff7ad5b085"],["D:/Payphone-X's Blog/public/categories/解题报告/page/2/index.html","148f52af90efcad32255e90a54098acd"],["D:/Payphone-X's Blog/public/categories/解题报告/page/3/index.html","c48aea2f92e6e7175b8f1a16010951e2"],["D:/Payphone-X's Blog/public/categories/解题报告/page/4/index.html","769b8d3f8c92b6ee83e9f72ec1a22906"],["D:/Payphone-X's Blog/public/categories/解题报告/page/5/index.html","ed5b9ec79c0da25f50693a31542d3f4d"],["D:/Payphone-X's Blog/public/categories/解题报告/page/6/index.html","dabbb00a1e85b71e54c31d940612657a"],["D:/Payphone-X's Blog/public/categories/解题报告/page/7/index.html","a419e4d19d7fe1c35a3a8c422730b08b"],["D:/Payphone-X's Blog/public/categories/转载区/index.html","d697a4ce7279d784fa995ba4749067e2"],["D:/Payphone-X's Blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Payphone-X's Blog/public/css/index.css","9c51791fd238fb03c8e6046ba6bb3455"],["D:/Payphone-X's Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Payphone-X's Blog/public/img/404.jpg","eb132744554a88cad1861dd3527cfd8c"],["D:/Payphone-X's Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Payphone-X's Blog/public/img/avatar.png","f3b75076e7744706ab293e0b457e91cd"],["D:/Payphone-X's Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/Payphone-X's Blog/public/img/favicon.png","a9b4cc377cfbf5792f1261ef64cb2c04"],["D:/Payphone-X's Blog/public/img/friend_404.gif","63b842685a219d37234a3b7eb306dd33"],["D:/Payphone-X's Blog/public/img/loading.gif","f38710671d6d5e0a665e6925e4eef630"],["D:/Payphone-X's Blog/public/img/qq.jpg","0d468a5b5429f6010cbd60ca2b9a7a6f"],["D:/Payphone-X's Blog/public/img/wechat.png","56ffaccefc73c47e5b717772395e65fe"],["D:/Payphone-X's Blog/public/index.html","961b3dc8b0d41e919c5eb21726872c6e"],["D:/Payphone-X's Blog/public/js/main.js","125fa8cc0f50b559881e6b0be97b3db2"],["D:/Payphone-X's Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Payphone-X's Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Payphone-X's Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Payphone-X's Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Payphone-X's Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Payphone-X's Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Payphone-X's Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Payphone-X's Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Payphone-X's Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Payphone-X's Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Payphone-X's Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Payphone-X's Blog/public/lib/blog-encrypt.js","037b40f88c8f0c44818849b9127a5e3f"],["D:/Payphone-X's Blog/public/lib/canvas-nest/README.html","f3e149d7901fd13420bcf36e442640fc"],["D:/Payphone-X's Blog/public/lib/canvas-nest/canvas-nest-nomobile.min.js","84a5b97a68b9da1b2822fd5e6032239d"],["D:/Payphone-X's Blog/public/lib/canvas-nest/canvas-nest.min.js","665a95d412391153d919403760b0b522"],["D:/Payphone-X's Blog/public/lib/three/README.html","6bdc238b5dd9d8670ef80b5a240fefb0"],["D:/Payphone-X's Blog/public/lib/three/canvas_lines.min.js","a2a04ec628d0cfab3d7523efaf0c42b1"],["D:/Payphone-X's Blog/public/lib/three/canvas_sphere.min.js","8de5ac69c0ee3a40b9e7212cf7c29b64"],["D:/Payphone-X's Blog/public/lib/three/gulpfile.js","3a628d93c78c87a3fd51a4450b179214"],["D:/Payphone-X's Blog/public/lib/three/lib/CanvasRenderer.js","e0cea30b8085000e16072a623e0156c5"],["D:/Payphone-X's Blog/public/lib/three/lib/Projector.js","303f29af7228fc63227ad71d7d187486"],["D:/Payphone-X's Blog/public/lib/three/src/canvas_lines.js","69e4af5d3b64551d037c10ba8d3ca37f"],["D:/Payphone-X's Blog/public/lib/three/src/canvas_sphere.js","b879d04e4281d99743985d849fde6ad5"],["D:/Payphone-X's Blog/public/lib/three/src/three-waves.js","1f8aa77634cacee3c21df9b780f1dc4e"],["D:/Payphone-X's Blog/public/lib/three/three-waves.min.js","1190bda07ccd3c69c9e89af8d83e138d"],["D:/Payphone-X's Blog/public/lib/three/three.min.js","2e45c2b237129a422ec0041f046699cf"],["D:/Payphone-X's Blog/public/link/index.html","5742786e9cd7301fd455eae4ed345ebd"],["D:/Payphone-X's Blog/public/live2dw/assets/model.2048/texture_00.png","ae34664ad879d043476c43d041b4aecd"],["D:/Payphone-X's Blog/public/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["D:/Payphone-X's Blog/public/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["D:/Payphone-X's Blog/public/page/10/index.html","bbae07f08dd56426ffef25d98c22fdcc"],["D:/Payphone-X's Blog/public/page/11/index.html","b796d07203ec49a6a4d7b8cf8cd9baa6"],["D:/Payphone-X's Blog/public/page/2/index.html","8c9443ed07aaf5b289dba2550c582815"],["D:/Payphone-X's Blog/public/page/3/index.html","e446cc75753bc619114977c25f933bde"],["D:/Payphone-X's Blog/public/page/4/index.html","d5228104f573fbab031138cbb5e42fde"],["D:/Payphone-X's Blog/public/page/5/index.html","e99ed35f6057b4f7fa1db1c105a38ea3"],["D:/Payphone-X's Blog/public/page/6/index.html","57f1df122f58d2defff6ff54c4cf2254"],["D:/Payphone-X's Blog/public/page/7/index.html","e570428a057a94400fb66cdccdd46ff2"],["D:/Payphone-X's Blog/public/page/8/index.html","1f6f219111b04cf68edad194f74ca6d2"],["D:/Payphone-X's Blog/public/page/9/index.html","fa2d46a9312be64833295a83aa9d249f"],["D:/Payphone-X's Blog/public/tags/Algorithm/index.html","f8335c5050ac5eb9d9b50ea7be18c43f"],["D:/Payphone-X's Blog/public/tags/BZOJ/index.html","c857b8e5bfc126618d8040cb5e2190f9"],["D:/Payphone-X's Blog/public/tags/Codeforces/index.html","ec79aace014002c9413193256737adc0"],["D:/Payphone-X's Blog/public/tags/DFS序/index.html","c50463d72ebfa0c82c0a228cf0c7fb7b"],["D:/Payphone-X's Blog/public/tags/Dijkstra/index.html","63a7f8f101a4d5707410a77aaadc060e"],["D:/Payphone-X's Blog/public/tags/Exgcd/index.html","b285cd3fe9b16741b952281ce58f042f"],["D:/Payphone-X's Blog/public/tags/Floyd/index.html","fc33153e8ab9f5e09dacd46f95e8d6c2"],["D:/Payphone-X's Blog/public/tags/Gcd/index.html","4277f648be4c61a224f65fe6d47c1ba7"],["D:/Payphone-X's Blog/public/tags/IOI/index.html","8bf9167cdb8c2157758b05e5ba1f7bda"],["D:/Payphone-X's Blog/public/tags/LCA/index.html","c04fee5ab32ddc649c527723577b8123"],["D:/Payphone-X's Blog/public/tags/LYOI/index.html","f2cd29cf95a3aefc3509ac062c969e16"],["D:/Payphone-X's Blog/public/tags/Luogu/index.html","def5beba5a6eb59ad594eeb43b296c18"],["D:/Payphone-X's Blog/public/tags/Luogu/page/2/index.html","151d10888daf3710838ef16e5f4261f4"],["D:/Payphone-X's Blog/public/tags/Luogu/page/3/index.html","4aa2e9a9fab4ef1b161f6e9852be32ec"],["D:/Payphone-X's Blog/public/tags/Luogu/page/4/index.html","70667df8837de68a1e8a38805e809008"],["D:/Payphone-X's Blog/public/tags/NOI-Online/index.html","eb9a5d14e2aa2bc9bccead0a37dcc2a0"],["D:/Payphone-X's Blog/public/tags/NOI/index.html","092aec7b66aa8401825895ad7ed6ca82"],["D:/Payphone-X's Blog/public/tags/NOIP/index.html","be97ff40aaa20c9a1e6adada9ec73d1d"],["D:/Payphone-X's Blog/public/tags/POI/index.html","c4186d8ecc93f584fa8fca734aa17f1d"],["D:/Payphone-X's Blog/public/tags/SPFA/index.html","52c722f2f9024e573521b9a49b3d8aa1"],["D:/Payphone-X's Blog/public/tags/STL/index.html","07faeee42801eab0a76cff0b9d3f07f3"],["D:/Payphone-X's Blog/public/tags/Tarjan/index.html","8d06237c94fdb1442b388ec25ab9f0fa"],["D:/Payphone-X's Blog/public/tags/Treap/index.html","5bd964023eb7238a4acbcc339977d241"],["D:/Payphone-X's Blog/public/tags/Trie树/index.html","0dd4cd6c0d7be88f7e06e2e31683eb28"],["D:/Payphone-X's Blog/public/tags/USACO/index.html","5e1df8bcda88d176e80afa4894a6ac18"],["D:/Payphone-X's Blog/public/tags/UVA/index.html","48fe2ac288191b58995ae6bbfdd63647"],["D:/Payphone-X's Blog/public/tags/Vijos/index.html","14da62627e932b95955ca8ca37b658d8"],["D:/Payphone-X's Blog/public/tags/WC-CTSC-集训队/index.html","99aeb3e524ce59a9565c9141907a28da"],["D:/Payphone-X's Blog/public/tags/ZROI/index.html","137459a6c8dc4606f1cfae3094f1fe67"],["D:/Payphone-X's Blog/public/tags/bitset/index.html","f7b8f06111549a57196a0af438a10bff"],["D:/Payphone-X's Blog/public/tags/index.html","4ec8d263a8c9b5cf6fc0b9af6d240380"],["D:/Payphone-X's Blog/public/tags/乱搞/index.html","1ece2b677521087c5cca885483c55ca6"],["D:/Payphone-X's Blog/public/tags/二分/index.html","89efceb8b1747d080ccbfa80fdd47e4e"],["D:/Payphone-X's Blog/public/tags/交互题/index.html","23f01f88686db329d14b9d69e30633ad"],["D:/Payphone-X's Blog/public/tags/优先队列/index.html","092e01cfd0031e45d08c0eae33b52ff2"],["D:/Payphone-X's Blog/public/tags/位运算/index.html","5d70bcaa79244087bb1a2be5c51aa934"],["D:/Payphone-X's Blog/public/tags/倍增/index.html","35752ecd9a4979935392d3ead1d30a27"],["D:/Payphone-X's Blog/public/tags/分层图最短路/index.html","321dd6fcc683f57ae685e365770d3700"],["D:/Payphone-X's Blog/public/tags/分类讨论/index.html","b3703426bb9af638adc2d906c96c3ec9"],["D:/Payphone-X's Blog/public/tags/前缀和/index.html","b038a75f24e55b834320c51132161a62"],["D:/Payphone-X's Blog/public/tags/动态规划/index.html","4e2cbdc89afd6ed38d4e2fca127751fc"],["D:/Payphone-X's Blog/public/tags/动态规划/page/2/index.html","112f05819d6fc68d366a745cd3d9ff6c"],["D:/Payphone-X's Blog/public/tags/动态规划/page/3/index.html","63fa9af1e9046b480a95bec9b25361fe"],["D:/Payphone-X's Blog/public/tags/区间dp/index.html","e0ec4c6a1b6ca924e014667f08d8bfbd"],["D:/Payphone-X's Blog/public/tags/博弈论/index.html","d486261b4a1406231146d9dab0698154"],["D:/Payphone-X's Blog/public/tags/可并堆/index.html","a6539f3accb4cfeab9abc00d5851fa99"],["D:/Payphone-X's Blog/public/tags/各省省选/index.html","46434c8251a6a62080f69ea3f5de81d3"],["D:/Payphone-X's Blog/public/tags/各省省选/page/2/index.html","d82ba2400d377527f961905dd191a0d3"],["D:/Payphone-X's Blog/public/tags/启发式合并/index.html","c1af595a58387a7d3ae64e3a1468c545"],["D:/Payphone-X's Blog/public/tags/唯一分解定理/index.html","6c84f62938e14addea0419bf791ced94"],["D:/Payphone-X's Blog/public/tags/图论/index.html","f8625c63902cd82c92f6fe846ea09433"],["D:/Payphone-X's Blog/public/tags/图论/page/2/index.html","b6d9a19482056ceb68b58d3ca75736e9"],["D:/Payphone-X's Blog/public/tags/埃氏筛/index.html","f822601fb947509780452ccb9bffc37a"],["D:/Payphone-X's Blog/public/tags/夏令营/index.html","72fd1eec4e582907468dfdde1a7adb1d"],["D:/Payphone-X's Blog/public/tags/字符串/index.html","33046e5c9e4a83a7c58fbc2f909a167a"],["D:/Payphone-X's Blog/public/tags/学习笔记/index.html","64a3c99fdec1f5fd3e3a76881decc8aa"],["D:/Payphone-X's Blog/public/tags/学习笔记/page/2/index.html","20663157789f23a4fbe7a48dfe20ea51"],["D:/Payphone-X's Blog/public/tags/容斥原理/index.html","6de44057e50c0807990873939394b230"],["D:/Payphone-X's Blog/public/tags/尺取法/index.html","ab4b855bdf79c8db79dff11183379eb8"],["D:/Payphone-X's Blog/public/tags/差分约束/index.html","3775d3c7d218bc34a5d16f00cf6047b3"],["D:/Payphone-X's Blog/public/tags/并查集/index.html","1565e862342e0e465578f06f213f0e67"],["D:/Payphone-X's Blog/public/tags/总结篇/index.html","a913bcd1c388489684255c1dcac34ae2"],["D:/Payphone-X's Blog/public/tags/成长之路/index.html","c73997dd1204c5acf194bfe3d32db263"],["D:/Payphone-X's Blog/public/tags/拆点-拆边/index.html","31bcbb34916ab1b38d75196f58776bbe"],["D:/Payphone-X's Blog/public/tags/换根法/index.html","9303c39b5842ec0382a4ec72d20f8254"],["D:/Payphone-X's Blog/public/tags/排序/index.html","0d9411584f4032e86703146f908a8664"],["D:/Payphone-X's Blog/public/tags/搜索/index.html","6380cbf74a33895931f59a1be40b6477"],["D:/Payphone-X's Blog/public/tags/数学/index.html","d4628727597910a395879330624a6bf8"],["D:/Payphone-X's Blog/public/tags/数据结构/index.html","493ac966713ff00d7a181cf7458b0d4e"],["D:/Payphone-X's Blog/public/tags/数论/index.html","529811f86b00f7ed76ad82d72ff9ceb9"],["D:/Payphone-X's Blog/public/tags/文化课专栏/index.html","d195526abd39a5572cfff5e92672a31e"],["D:/Payphone-X's Blog/public/tags/文章转载/index.html","b867d3d63e90030422200e3789509af0"],["D:/Payphone-X's Blog/public/tags/暴力/index.html","b9158e6f98007fe7f0f89ac3fd29799e"],["D:/Payphone-X's Blog/public/tags/最小生成树/index.html","e0bbc02fd3172006c77cb4882f845ae8"],["D:/Payphone-X's Blog/public/tags/最短路计数/index.html","e67f25f1724275276072b302e3949027"],["D:/Payphone-X's Blog/public/tags/期望dp/index.html","6cbc6440f92a5636a56d7f5588cad668"],["D:/Payphone-X's Blog/public/tags/染色法/index.html","c86a724c1c98bee5d0322e549b257c05"],["D:/Payphone-X's Blog/public/tags/栈/index.html","8838dfbd2cc6902a058d2a0714e55b5d"],["D:/Payphone-X's Blog/public/tags/树上启发式合并/index.html","72a7efa74c54fba1e48cf81ddd8adb93"],["D:/Payphone-X's Blog/public/tags/树形dp/index.html","4203d15b4700bf47c9106acb84217cf2"],["D:/Payphone-X's Blog/public/tags/树状数组/index.html","64d438fded43f088e92802b0ae47502f"],["D:/Payphone-X's Blog/public/tags/树的直径/index.html","a7702117dee8bb1e7776856ae0352aa4"],["D:/Payphone-X's Blog/public/tags/树链剖分/index.html","2c7dd9f3dba5badf7433d3469ffeff14"],["D:/Payphone-X's Blog/public/tags/概率期望/index.html","7ad6ca3ee213b60235df5ac9ec911530"],["D:/Payphone-X's Blog/public/tags/模拟/index.html","d2920718b970a4a772714f19c03fce93"],["D:/Payphone-X's Blog/public/tags/模拟退火/index.html","797744e2794729424285c2231fdec643"],["D:/Payphone-X's Blog/public/tags/欧拉筛/index.html","49497c3f93c2f4ef7f765cfa325b9e1c"],["D:/Payphone-X's Blog/public/tags/灌水区/index.html","c99953fba9e3dcadf252d2cbe7ee3d34"],["D:/Payphone-X's Blog/public/tags/玄学/index.html","9a0d474ab5bf9d6231a118ea0bfe382e"],["D:/Payphone-X's Blog/public/tags/珂朵莉树/index.html","7dc54444873a4a702f76979794a8826d"],["D:/Payphone-X's Blog/public/tags/矩阵运算/index.html","5eaf95efa3887de44fe4298ee7b026e1"],["D:/Payphone-X's Blog/public/tags/纪中集训/index.html","eba8b866c346c5e305abe8c4656d1123"],["D:/Payphone-X's Blog/public/tags/纪中集训/page/2/index.html","c15bf09282362e4ce512bf141c7094ee"],["D:/Payphone-X's Blog/public/tags/线性dp/index.html","ed2d51412d52b8fb26b1c15d1d6772f2"],["D:/Payphone-X's Blog/public/tags/线段树/index.html","5b3ce76d912f855f238f297225c04f57"],["D:/Payphone-X's Blog/public/tags/组合数学/index.html","f77f570cb541843e958d3a2c2753288c"],["D:/Payphone-X's Blog/public/tags/考场技巧/index.html","bed06776da30b806d962a0b462728291"],["D:/Payphone-X's Blog/public/tags/背包问题/index.html","4b8422c498d024318760434af20a3726"],["D:/Payphone-X's Blog/public/tags/贪心/index.html","383b6623860a1f87543823a663a90bfd"],["D:/Payphone-X's Blog/public/tags/贪心/page/2/index.html","2fb12ba9e4b810c9ac9cc8b5725ed04e"],["D:/Payphone-X's Blog/public/tags/超可爱哒/index.html","4a2fde10313ee11ece35e56138a5c048"],["D:/Payphone-X's Blog/public/tags/逆序对/index.html","215052725041830814aea0964488bcdc"],["D:/Payphone-X's Blog/public/tags/递推/index.html","17c6e1190918b137648769a93cb7951e"],["D:/Payphone-X's Blog/public/tags/链式前向星/index.html","155e4864305f18b8426f3c8263da5fdd"],["D:/Payphone-X's Blog/public/tags/题解/index.html","582740601fde769bc09dbd1e2babb9ef"],["D:/Payphone-X's Blog/public/tags/题解/page/2/index.html","a08095b18557b672155a4d5fe94abf66"],["D:/Payphone-X's Blog/public/tags/题解/page/3/index.html","989f07aec438ba2397c12467393d7710"],["D:/Payphone-X's Blog/public/tags/题解/page/4/index.html","71f519860a4777a5b20986541efd84bc"],["D:/Payphone-X's Blog/public/tags/题解/page/5/index.html","e417518d34099afa172d628ad91d6e3c"],["D:/Payphone-X's Blog/public/tags/题解/page/6/index.html","afbc5d44d31952db8f4b8309e907904d"],["D:/Payphone-X's Blog/public/tags/题解/page/7/index.html","0394f3680c0b193232592876b7fd59c8"],["D:/Payphone-X's Blog/public/tags/题解/page/8/index.html","e12a3bf4dca5c9b54a40e7d295758e89"]];
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







