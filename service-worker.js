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

var precacheConfig = [["D:/Payphone-X's Blog/public/2018/12/31/hello-world/index.html","10775e4e194a48f2518eb1b0454425df"],["D:/Payphone-X's Blog/public/2019/01/21/sort-unique/index.html","07eb868fb3296a5a277ae5e17c173ba4"],["D:/Payphone-X's Blog/public/2019/01/22/Heap/index.html","5b86f18102ba56f00eb46831782286c1"],["D:/Payphone-X's Blog/public/2019/01/23/LogeyOIDay1T1/index.html","05edf202522464ef477a81e66a845f77"],["D:/Payphone-X's Blog/public/2019/01/23/STL/index.html","f2db3ad083d568f950f9e3d4cdb4df36"],["D:/Payphone-X's Blog/public/2019/01/24/Tree/index.html","158d164614e90bd16331a578b2a4cd50"],["D:/Payphone-X's Blog/public/2019/01/27/HNOI2006/index.html","34d0665cbad9550284dbb98e117779d0"],["D:/Payphone-X's Blog/public/2019/02/12/English-1/index.html","8da75391fbabd5761aed7e4d782af1a8"],["D:/Payphone-X's Blog/public/2019/02/12/wen-hua-ke-start/index.html","5798f0bd5ace1b6722422f88ecdc9aed"],["D:/Payphone-X's Blog/public/2019/02/17/luoguP4643/index.html","a46ab687058aa5290b429e058b1e4d28"],["D:/Payphone-X's Blog/public/2019/02/23/Floyd/index.html","2a01086e6d3f31bbefa0f42578e07a11"],["D:/Payphone-X's Blog/public/2019/02/27/Dijkstra/index.html","f1699f3ccd3dd77f43527b6f5e122aa5"],["D:/Payphone-X's Blog/public/2019/03/16/linjiebiao/index.html","d0b75d3b6830bbfeeb729df218cd8b46"],["D:/Payphone-X's Blog/public/2019/03/20/luoguP1330/index.html","846c85c179179b242024c70e51d8bd8f"],["D:/Payphone-X's Blog/public/2019/04/13/history/index.html","45a8b89b0f89c8661190ff034b989e7d"],["D:/Payphone-X's Blog/public/2019/05/01/path/index.html","1e02f749a352d21f8ad85750864b46c4"],["D:/Payphone-X's Blog/public/2019/06/17/unionfind/index.html","003525355a91d3823c870058e1aa36fc"],["D:/Payphone-X's Blog/public/2019/06/18/luoguP1119/index.html","d0a6f808167d76143184ffb3d3c3645b"],["D:/Payphone-X's Blog/public/2019/06/19/Simulate-Anneal/index.html","0fcb97aec7f2ac953d35222550bca440"],["D:/Payphone-X's Blog/public/2019/06/26/luoguP1969/index.html","f4ee6da1c7f81376f1ccac1f0e04afbc"],["D:/Payphone-X's Blog/public/2019/06/26/luoguP5019/index.html","753be18868242d296b779b9edf548cea"],["D:/Payphone-X's Blog/public/2019/06/30/cartoon/index.html","2c20028ca7c01116330c660bb904e41c"],["D:/Payphone-X's Blog/public/2019/06/30/zhongkaoBUG/index.html","e7ba486b43e1f0ff79877a5009d3b2db"],["D:/Payphone-X's Blog/public/2019/07/05/left-tree/index.html","c44e513f786d19cdd5d33a7c3c8f1495"],["D:/Payphone-X's Blog/public/2019/07/15/luoguP5020/index.html","147f32baa9d87bd132784b41f9eaba63"],["D:/Payphone-X's Blog/public/2019/07/20/LYOI-Summer-Round-1/index.html","91b502af6f5640320ddabf5706212b3e"],["D:/Payphone-X's Blog/public/2019/08/02/Bit-operation/index.html","67c279bcf018e039bcfe8ea314e34e9d"],["D:/Payphone-X's Blog/public/2019/08/04/Tarjan-point&edge/index.html","b273ed73f99e68e8eee917829eeab1c2"],["D:/Payphone-X's Blog/public/2019/08/09/math1/index.html","ead3a562b640d360f71c2b2ac8f9a605"],["D:/Payphone-X's Blog/public/2019/08/11/my-first-acm/index.html","145d0195f9a5e72f3f52630506b317c0"],["D:/Payphone-X's Blog/public/2019/08/12/luoguP4971/index.html","aab443264a0e9204f75b29f834c5ab20"],["D:/Payphone-X's Blog/public/2019/08/12/nothing/index.html","57c9cb25b0e2620800948c9302232e12"],["D:/Payphone-X's Blog/public/2019/08/22/luoguP1326/index.html","5805fb52e5bb7affde9c835ac1ecdb05"],["D:/Payphone-X's Blog/public/2019/09/07/luoguP1608/index.html","97b97f24e0fd74f3ecb4e824371d0b59"],["D:/Payphone-X's Blog/public/2019/09/10/math2/index.html","fc4119ab396c85b672af7a2836d8733d"],["D:/Payphone-X's Blog/public/2019/09/17/same/index.html","f9d981fb60626fd50fe61645e0115c2f"],["D:/Payphone-X's Blog/public/2019/10/04/Chtholly-Tree/index.html","15c0ea01c7eae7b40080a3b7cc6d9e8e"],["D:/Payphone-X's Blog/public/2019/10/06/luoguP1352/index.html","b3663b6f93d3baf06c802dcc4231467c"],["D:/Payphone-X's Blog/public/2019/10/08/luoguP1967/index.html","24af039f01db17c170c8aaae5462cd70"],["D:/Payphone-X's Blog/public/2019/10/08/zz-mistake/index.html","17eeb94ef25d8b7d2148e800378a296c"],["D:/Payphone-X's Blog/public/2019/10/09/CF140C/index.html","6a187a6e54cb148e684b9a28ce2808aa"],["D:/Payphone-X's Blog/public/2019/10/09/luoguP2580/index.html","948228cdddd54bbd25fcde5f850562b9"],["D:/Payphone-X's Blog/public/2019/10/10/luoguP3879/index.html","b666f5b195c78951ba816d8cdaa84635"],["D:/Payphone-X's Blog/public/2019/10/11/luoguP4107/index.html","83fdc04f875c74de4946a5ff45f42fc2"],["D:/Payphone-X's Blog/public/2019/10/12/ZROI-pj5-Day3/index.html","5cd726bcab6e6f3bb0415296e4c12dba"],["D:/Payphone-X's Blog/public/2019/10/13/luoguP1197/index.html","8ab18671920e31c665097fcd28cb2937"],["D:/Payphone-X's Blog/public/2019/10/14/luoguP4568/index.html","b80b0089db876c99703639a17a8a72c3"],["D:/Payphone-X's Blog/public/2019/10/16/CF161B/index.html","d48a2a8dc54f7ac523b2976057468e19"],["D:/Payphone-X's Blog/public/2019/10/16/CF660C/index.html","31db55dcf274bbf90cc3259ede81f916"],["D:/Payphone-X's Blog/public/2019/10/16/luoguP4053/index.html","5baa097b848594fd9ea9704a58bd0a9f"],["D:/Payphone-X's Blog/public/2019/10/17/CF449B/index.html","5112ce078cd8549f3f9f321504f1625d"],["D:/Payphone-X's Blog/public/2019/10/18/luoguP5278/index.html","b6106e57f7f455db6010265dbdab8828"],["D:/Payphone-X's Blog/public/2019/10/19/csp-s2019-1/index.html","709372f0e56aebe7a4cb086132732125"],["D:/Payphone-X's Blog/public/2019/10/20/luoguP2822/index.html","25b06dc490137e50fff566e4ac93a800"],["D:/Payphone-X's Blog/public/2019/10/21/CF1180B/index.html","a89c65f442c7807655b52c8a1b3a67ae"],["D:/Payphone-X's Blog/public/2019/10/21/luoguP1541/index.html","23cea0e5ba0a7b64b4edeb08ad093162"],["D:/Payphone-X's Blog/public/2019/10/24/vijosP1615/index.html","f1a1ce505b28f73eb69b2091a062cb17"],["D:/Payphone-X's Blog/public/2019/10/24/vijosP1616/index.html","c7dbdfe1fdd43eea1a2bf53cf5aa0a9c"],["D:/Payphone-X's Blog/public/2019/10/24/vijosP1617/index.html","1b40851a3b38a8d9ff536d078cd2373e"],["D:/Payphone-X's Blog/public/2019/10/25/GmojP6342/index.html","bd4246bece22d02bcc3d8642f649402e"],["D:/Payphone-X's Blog/public/2019/10/26/GmojP3814/index.html","ec4a09debb0415c9791fd84411dbb8e1"],["D:/Payphone-X's Blog/public/2019/10/27/CF521D/index.html","fd726ca22219dda5cc3fc7abea672a84"],["D:/Payphone-X's Blog/public/2019/10/27/luoguP1613/index.html","e1fb60acb36cfac165bfa71324332c77"],["D:/Payphone-X's Blog/public/2019/10/28/GmojP1751/index.html","7d51de76a96ad14858e636968fc0e4db"],["D:/Payphone-X's Blog/public/2019/10/28/GmojP1752/index.html","8970deb7dea2c5e78d5c5b4e60ff1c34"],["D:/Payphone-X's Blog/public/2019/10/29/CF147B/index.html","e2afa0222f29cea11d243b728b1fe104"],["D:/Payphone-X's Blog/public/2019/10/29/CF148E/index.html","80da6755a0e645a3114a3ce262c078de"],["D:/Payphone-X's Blog/public/2019/10/30/GmojP3462/index.html","2d056ac9079eec687f70a8f2abaff16b"],["D:/Payphone-X's Blog/public/2019/10/30/STL-plus/index.html","39dcfec6658662631ab308fb14dec313"],["D:/Payphone-X's Blog/public/2019/10/31/GmojP1295/index.html","f34572b11f78fb860563b2718ca8c9e0"],["D:/Payphone-X's Blog/public/2019/11/02/luoguP3467/index.html","0f1d60154135216bc05e22127d66e41a"],["D:/Payphone-X's Blog/public/2019/11/03/difference-constraints/index.html","939c55bddeb0d852e42da49cb8bb638c"],["D:/Payphone-X's Blog/public/2019/11/04/GmojP1350/index.html","f296a6e4059997c7629955af0634a7a4"],["D:/Payphone-X's Blog/public/2019/11/04/csp-s30sentences/index.html","65a3d238e366ad260b6b5e30e00d29f6"],["D:/Payphone-X's Blog/public/2019/11/06/GmojP3843/index.html","5448bf84583b36b5833f8fae369fb9db"],["D:/Payphone-X's Blog/public/2019/11/06/GmojP3844/index.html","674441a4b91db1681377643234e8da2a"],["D:/Payphone-X's Blog/public/2019/11/07/luoguP3197/index.html","6d28e327184b75312f2fbfee6fa1c09c"],["D:/Payphone-X's Blog/public/2019/11/08/luoguP2869/index.html","9837a0d410ae79e190f3179430821a7a"],["D:/Payphone-X's Blog/public/2019/11/09/CF508E/index.html","34c4be6cbd92949221319bfc7ae59761"],["D:/Payphone-X's Blog/public/2019/11/12/luoguP1654/index.html","52d9563315336cc9eac2432acf3c1122"],["D:/Payphone-X's Blog/public/2020/02/05/luoguP1987/index.html","46735b423ed327e27da95240e7e98a5a"],["D:/Payphone-X's Blog/public/2020/02/09/luoguP1447/index.html","b63005e09e31b614ac9164afdee8ba08"],["D:/Payphone-X's Blog/public/2020/02/12/luoguP1445/index.html","3c0ad057bfc30c7d92c6363628785857"],["D:/Payphone-X's Blog/public/2020/02/25/luoguP2986/index.html","a1d93889f981c42447014a24709cc597"],["D:/Payphone-X's Blog/public/2020/04/05/luoguP5658/index.html","b2a9be030ce4d51222045f6ce52c6185"],["D:/Payphone-X's Blog/public/2020/04/06/luoguP4823/index.html","1f26d5bf8e8cbf17c3c6f23ebb803656"],["D:/Payphone-X's Blog/public/2020/04/10/luoguP1944/index.html","f5db14909fb9a7f4de07b99307eb5bf2"],["D:/Payphone-X's Blog/public/2020/04/17/luoguP4141/index.html","ae289410cc3e2b2746430a3e6f2b6c23"],["D:/Payphone-X's Blog/public/2020/05/03/UVA1437/index.html","152b6c1332fa5f2548242fc3379d9e50"],["D:/Payphone-X's Blog/public/2020/05/14/luoguP1505/index.html","c0bf63f6bfee912b7318bd9b97c9d9ad"],["D:/Payphone-X's Blog/public/2020/05/22/luoguP3237/index.html","21d641e751fcd067a78003382d04296a"],["D:/Payphone-X's Blog/public/2020/05/26/CF1353F/index.html","497e6574f089da2268e33aec851fade5"],["D:/Payphone-X's Blog/public/2020/06/03/luoguP4071/index.html","4330185100a6c9ac641c0e2e71029755"],["D:/Payphone-X's Blog/public/2020/06/04/luoguP1712/index.html","be0852d908720bf5fbe85ca1fc054466"],["D:/Payphone-X's Blog/public/2020/06/19/luoguP6569/index.html","e47c284877b9089fcc3ae430fb95ac7e"],["D:/Payphone-X's Blog/public/2020/07/30/LYOI2020SummerCompetition1/index.html","cf0b68a572bbd26d89138382167e3747"],["D:/Payphone-X's Blog/public/2020/08/07/dsu-on-tree/index.html","32f8226111a1d708cd16640218d16e43"],["D:/Payphone-X's Blog/public/2020/08/10/luoguP3758/index.html","ffd3621ce611e631300bf932149deb4b"],["D:/Payphone-X's Blog/public/2020/08/16/luoguP4342/index.html","5bd9c7567deed3d5c09e93d6fa7f5c2a"],["D:/Payphone-X's Blog/public/2020/08/19/luoguP4159/index.html","e601f79f1c8dd73e87982b034aed246c"],["D:/Payphone-X's Blog/public/2020/09/01/CF149D/index.html","f0436c08e7d72cc3763b1ab30b409038"],["D:/Payphone-X's Blog/public/2020/09/10/CF1407/index.html","a5967297183a83e38112379524f19a15"],["D:/Payphone-X's Blog/public/2020/09/16/CF1398E/index.html","9bdf4d0d0962767b29b8720706733dd1"],["D:/Payphone-X's Blog/public/2020/09/16/CF1406C/index.html","9d41885e2c71799d9d47edea0801af41"],["D:/Payphone-X's Blog/public/2020/10/09/luoguP5482/index.html","d14fd82e8b658d00abf8068985f9f989"],["D:/Payphone-X's Blog/public/2020/10/29/CF1437-part/index.html","c35ac0cae624aad28db752f04582cfe6"],["D:/Payphone-X's Blog/public/2020/10/29/luoguP5664/index.html","303c8a5baa85b7b654934d5cf361ace0"],["D:/Payphone-X's Blog/public/2020/11/02/01Trie/index.html","e22cef59bdf32f7db5f13a429939fd52"],["D:/Payphone-X's Blog/public/2020/11/03/HDU4597/index.html","82cd921fa01f4fbe6d27ef1a549a4498"],["D:/Payphone-X's Blog/public/2020/11/06/AGC002E/index.html","408b561b02f810acbe8a72d63e11db44"],["D:/Payphone-X's Blog/public/2020/11/16/luoguP7075/index.html","968fbe1df1774427e1fd28c8ec24ab41"],["D:/Payphone-X's Blog/public/2020/11/16/luoguP7076/index.html","47cddb83393526311a65ee26f9dc58e3"],["D:/Payphone-X's Blog/public/2020/11/16/luoguP7077/index.html","235d69cfe5e79b497c86811a1b1bc0ed"],["D:/Payphone-X's Blog/public/404.html","c46c79759143b899d8bda263ae032a99"],["D:/Payphone-X's Blog/public/Problems/index.html","b0b0547f31a254762469dc62a6c57843"],["D:/Payphone-X's Blog/public/Template/index.html","032fbcb6c81c864ed34aaf62b1d135b8"],["D:/Payphone-X's Blog/public/about/index.html","d20593c0f64e1052bcf8f6bca50b5ba5"],["D:/Payphone-X's Blog/public/archives/2018/12/index.html","561b0f8fc2ec1ba7c1374c5723eb3b62"],["D:/Payphone-X's Blog/public/archives/2018/index.html","60bcf86caf2d7f2069461fa8f5d7e278"],["D:/Payphone-X's Blog/public/archives/2019/01/index.html","8f156fba7cf840a99d6903da96fa3347"],["D:/Payphone-X's Blog/public/archives/2019/02/index.html","96c518a4f9491b9e1793b799cea03287"],["D:/Payphone-X's Blog/public/archives/2019/03/index.html","143cb0d9d8a0259fb0339880ea36bfd9"],["D:/Payphone-X's Blog/public/archives/2019/04/index.html","cac7a0455735a8149e66d45220b803ce"],["D:/Payphone-X's Blog/public/archives/2019/05/index.html","91805f7aa4eb7bde7fb04804cc469811"],["D:/Payphone-X's Blog/public/archives/2019/06/index.html","3e64fa13e5ee8eecf3b0e87b85c9b135"],["D:/Payphone-X's Blog/public/archives/2019/07/index.html","d857d0e4374971e88dfafa65efa2c81e"],["D:/Payphone-X's Blog/public/archives/2019/08/index.html","c220c1e3ee6c8312f9c642df81b65346"],["D:/Payphone-X's Blog/public/archives/2019/09/index.html","886e61898542353468bd5d36c97df0e7"],["D:/Payphone-X's Blog/public/archives/2019/10/index.html","2b8ffbd14cb0b7e27232c04a42473c04"],["D:/Payphone-X's Blog/public/archives/2019/10/page/2/index.html","671a1f9262ca94583ebaa518ef6886ec"],["D:/Payphone-X's Blog/public/archives/2019/10/page/3/index.html","315688ecd494be07c141f6aa2c794c7e"],["D:/Payphone-X's Blog/public/archives/2019/10/page/4/index.html","cc5e4ad5e5ce571b870fed45b967bd88"],["D:/Payphone-X's Blog/public/archives/2019/11/index.html","7c597b528fa1a3c5a7edfc45fd05d1a8"],["D:/Payphone-X's Blog/public/archives/2019/index.html","b4818659925fe828dea7bcdd1a185c36"],["D:/Payphone-X's Blog/public/archives/2019/page/2/index.html","310b4e0fcce02ef1b94e6af5701b93fd"],["D:/Payphone-X's Blog/public/archives/2019/page/3/index.html","fdb3775279f575cfdee2fd95d1de2ed1"],["D:/Payphone-X's Blog/public/archives/2019/page/4/index.html","070750040514ded52b64df63f94ae532"],["D:/Payphone-X's Blog/public/archives/2019/page/5/index.html","69dc81ca440fd0f741bf6a23a665b944"],["D:/Payphone-X's Blog/public/archives/2019/page/6/index.html","0a4f211de9d0941a0f7936694a8972ff"],["D:/Payphone-X's Blog/public/archives/2019/page/7/index.html","7795ec894d4a08451b0a4e990cf9c2bd"],["D:/Payphone-X's Blog/public/archives/2019/page/8/index.html","5ebf28a534feec8c6aeb975528c6940a"],["D:/Payphone-X's Blog/public/archives/2020/02/index.html","f87cccd0c25cc4599fecc087664d2cfe"],["D:/Payphone-X's Blog/public/archives/2020/04/index.html","89deae167ed8ae2bfd919391c09d8742"],["D:/Payphone-X's Blog/public/archives/2020/05/index.html","2233a458add64d6ca75f20125489bd74"],["D:/Payphone-X's Blog/public/archives/2020/06/index.html","59ad7c734a0c258ef9e5908638183fb8"],["D:/Payphone-X's Blog/public/archives/2020/07/index.html","88ec8f4768040c86db83ebb76abcaa04"],["D:/Payphone-X's Blog/public/archives/2020/08/index.html","652249fe2c8ec9921a9d4498a5753970"],["D:/Payphone-X's Blog/public/archives/2020/09/index.html","99ea2352fff460b2575cca080e625ef6"],["D:/Payphone-X's Blog/public/archives/2020/10/index.html","5758b96d8fc71f49ab4d9688e2c023b3"],["D:/Payphone-X's Blog/public/archives/2020/11/index.html","20df81685ba6b8de435d19b473bd6cb9"],["D:/Payphone-X's Blog/public/archives/2020/index.html","414e56fe3664f0aac8d89c8a5b58b814"],["D:/Payphone-X's Blog/public/archives/2020/page/2/index.html","c83dbc372d035c5b777a6a1772a708ee"],["D:/Payphone-X's Blog/public/archives/2020/page/3/index.html","2731551914f87913a05a48b9cd1c0719"],["D:/Payphone-X's Blog/public/archives/2020/page/4/index.html","6389f524414321efcddc2ea4bb2f4c46"],["D:/Payphone-X's Blog/public/archives/index.html","674b65a87c8321fe52ee8bdcb1d49296"],["D:/Payphone-X's Blog/public/archives/page/10/index.html","f8f1b7fb70c68d461088fe65b18f3196"],["D:/Payphone-X's Blog/public/archives/page/11/index.html","e7450a0fe711675a9350d8a0ebf008d8"],["D:/Payphone-X's Blog/public/archives/page/12/index.html","d8d0b9f8ebbe437c113677a6ffe94c69"],["D:/Payphone-X's Blog/public/archives/page/2/index.html","882bfd8d2b96ef4adc490512bd05455b"],["D:/Payphone-X's Blog/public/archives/page/3/index.html","35edf3431503cc7be3f9e781a12c6b73"],["D:/Payphone-X's Blog/public/archives/page/4/index.html","86c7ad313a07d1f35f6a82bfe291887a"],["D:/Payphone-X's Blog/public/archives/page/5/index.html","830f77f6aed64864c546e9f3a9d91b60"],["D:/Payphone-X's Blog/public/archives/page/6/index.html","d8671343c9b44513f2b1b68278025938"],["D:/Payphone-X's Blog/public/archives/page/7/index.html","b7fc4c7df8184c6f5c6ca8e5b0842800"],["D:/Payphone-X's Blog/public/archives/page/8/index.html","614fc3a80e11fd0dd9c5eda5ee1db8fc"],["D:/Payphone-X's Blog/public/archives/page/9/index.html","7c51a53c91a76390d38820f2aa5c70f0"],["D:/Payphone-X's Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Payphone-X's Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Payphone-X's Blog/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/Payphone-X's Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Payphone-X's Blog/public/categories/index.html","88a6512f999bda82e4869d8a40cae5a6"],["D:/Payphone-X's Blog/public/categories/命题报告/index.html","28757b9fb4de5411a156249c9ed0cac7"],["D:/Payphone-X's Blog/public/categories/成长之路/index.html","d82c10e632aef180b31632cad32ffe40"],["D:/Payphone-X's Blog/public/categories/文化课专栏/index.html","a54e6e222a9be8ac006edb33bd3ab86b"],["D:/Payphone-X's Blog/public/categories/灌水-摸鱼区/index.html","03e6a4a63380b569fcef72c457989c3d"],["D:/Payphone-X's Blog/public/categories/算法笔记/index.html","b43d54648e9a69619f23036a88aae6c2"],["D:/Payphone-X's Blog/public/categories/算法笔记/page/2/index.html","9b68c3e36e4e76ca58246c6a9c47e7c2"],["D:/Payphone-X's Blog/public/categories/考场技巧/index.html","0eaaf0a90e77e478d0b66aad1e4da5ea"],["D:/Payphone-X's Blog/public/categories/解题报告/index.html","388cfca2b17467f654388dbbba2e170c"],["D:/Payphone-X's Blog/public/categories/解题报告/page/2/index.html","090a52c2643db4333acd974b1cc0a2ce"],["D:/Payphone-X's Blog/public/categories/解题报告/page/3/index.html","7ff1e23bd484b8b7e8ddac3a02a84109"],["D:/Payphone-X's Blog/public/categories/解题报告/page/4/index.html","bcee58ccfe2c4b67419f8a33d9bc2288"],["D:/Payphone-X's Blog/public/categories/解题报告/page/5/index.html","4ea5f36f863fd54cdf331f56e1efdc34"],["D:/Payphone-X's Blog/public/categories/解题报告/page/6/index.html","b25b69b896ca18c6622c2107c2bade36"],["D:/Payphone-X's Blog/public/categories/解题报告/page/7/index.html","b6b6de21b825fb882af33a697f58c910"],["D:/Payphone-X's Blog/public/categories/解题报告/page/8/index.html","ee00e831eab8b6f9acc913dfff41eaf1"],["D:/Payphone-X's Blog/public/categories/转载区/index.html","4c272068cf155bb07f7876ffe5e59867"],["D:/Payphone-X's Blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Payphone-X's Blog/public/css/index.css","66f266e1702c0265ae9881698b7a414a"],["D:/Payphone-X's Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Payphone-X's Blog/public/img/404.jpg","eb132744554a88cad1861dd3527cfd8c"],["D:/Payphone-X's Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Payphone-X's Blog/public/img/avatar.png","f3b75076e7744706ab293e0b457e91cd"],["D:/Payphone-X's Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["D:/Payphone-X's Blog/public/img/favicon.png","a9b4cc377cfbf5792f1261ef64cb2c04"],["D:/Payphone-X's Blog/public/img/friend_404.gif","63b842685a219d37234a3b7eb306dd33"],["D:/Payphone-X's Blog/public/img/loading.gif","f38710671d6d5e0a665e6925e4eef630"],["D:/Payphone-X's Blog/public/img/qq.jpg","0d468a5b5429f6010cbd60ca2b9a7a6f"],["D:/Payphone-X's Blog/public/img/wechat.png","56ffaccefc73c47e5b717772395e65fe"],["D:/Payphone-X's Blog/public/index.html","99cf1f019fe158ebfe6acf651c87a509"],["D:/Payphone-X's Blog/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["D:/Payphone-X's Blog/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["D:/Payphone-X's Blog/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["D:/Payphone-X's Blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Payphone-X's Blog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Payphone-X's Blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/Payphone-X's Blog/public/lib/canvas-nest/README.html","de2f00b337c3c6252c067d1848f5402b"],["D:/Payphone-X's Blog/public/lib/canvas-nest/canvas-nest-nomobile.min.js","84a5b97a68b9da1b2822fd5e6032239d"],["D:/Payphone-X's Blog/public/lib/canvas-nest/canvas-nest.min.js","665a95d412391153d919403760b0b522"],["D:/Payphone-X's Blog/public/lib/three/README.html","bc8d06a47e4d448ba05d12fe47a23f16"],["D:/Payphone-X's Blog/public/lib/three/canvas_lines.min.js","a2a04ec628d0cfab3d7523efaf0c42b1"],["D:/Payphone-X's Blog/public/lib/three/canvas_sphere.min.js","8de5ac69c0ee3a40b9e7212cf7c29b64"],["D:/Payphone-X's Blog/public/lib/three/gulpfile.js","3a628d93c78c87a3fd51a4450b179214"],["D:/Payphone-X's Blog/public/lib/three/lib/CanvasRenderer.js","e0cea30b8085000e16072a623e0156c5"],["D:/Payphone-X's Blog/public/lib/three/lib/Projector.js","303f29af7228fc63227ad71d7d187486"],["D:/Payphone-X's Blog/public/lib/three/src/canvas_lines.js","69e4af5d3b64551d037c10ba8d3ca37f"],["D:/Payphone-X's Blog/public/lib/three/src/canvas_sphere.js","b879d04e4281d99743985d849fde6ad5"],["D:/Payphone-X's Blog/public/lib/three/src/three-waves.js","1f8aa77634cacee3c21df9b780f1dc4e"],["D:/Payphone-X's Blog/public/lib/three/three-waves.min.js","1190bda07ccd3c69c9e89af8d83e138d"],["D:/Payphone-X's Blog/public/lib/three/three.min.js","2e45c2b237129a422ec0041f046699cf"],["D:/Payphone-X's Blog/public/link/index.html","5bfbe42c03e79ab16b4d9b2df5048424"],["D:/Payphone-X's Blog/public/live2dw/assets/model.2048/texture_00.png","ae34664ad879d043476c43d041b4aecd"],["D:/Payphone-X's Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Payphone-X's Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Payphone-X's Blog/public/page/10/index.html","d22f01e205fad4386047240b2b0669c8"],["D:/Payphone-X's Blog/public/page/11/index.html","a21f2a3be326091737f6f185ad054dcb"],["D:/Payphone-X's Blog/public/page/12/index.html","12642d53f4fa55275c31bb0eb939cd69"],["D:/Payphone-X's Blog/public/page/2/index.html","5795ce25791cc605be4a31607e32ed2c"],["D:/Payphone-X's Blog/public/page/3/index.html","8f62c515e7958e64d0bbf6b580903391"],["D:/Payphone-X's Blog/public/page/4/index.html","69ab99569c3cc984fd2f721e2a8b3014"],["D:/Payphone-X's Blog/public/page/5/index.html","5bf57723cf6b51b736eeaaea21b49192"],["D:/Payphone-X's Blog/public/page/6/index.html","9790787d995a133f8eb39b4c7e787934"],["D:/Payphone-X's Blog/public/page/7/index.html","5fae9f1300b983b39c4ac218f001b8a5"],["D:/Payphone-X's Blog/public/page/8/index.html","a6a67db5562cbf010bd953cfad0ac700"],["D:/Payphone-X's Blog/public/page/9/index.html","b3c00adb466a4877256c84781e4f5b3e"],["D:/Payphone-X's Blog/public/tags/Algorithm/index.html","eaa4dd6080fe0ba70fa83dfa47a23935"],["D:/Payphone-X's Blog/public/tags/AtCoder/index.html","ee25508a07e53cc41510b71a0fafdcdf"],["D:/Payphone-X's Blog/public/tags/BZOJ/index.html","cefc0d777a95863c3d89ab05a303cbf9"],["D:/Payphone-X's Blog/public/tags/Codeforces/index.html","3a300b609a71a82bcb540768c6958a8a"],["D:/Payphone-X's Blog/public/tags/Codeforces/page/2/index.html","a155588b7209c86c087570fc75758ee0"],["D:/Payphone-X's Blog/public/tags/DFS序/index.html","48e1e3fdacb81ebcfeb377c2b0cc37a8"],["D:/Payphone-X's Blog/public/tags/Dijkstra/index.html","eb011d1d31cc5dbd43de1cf995a1ecef"],["D:/Payphone-X's Blog/public/tags/Exgcd/index.html","af02f1205ab499281cb8a2c931edd3c2"],["D:/Payphone-X's Blog/public/tags/Floyd/index.html","512cf2a380ff191bbba0e7a2bb13aa95"],["D:/Payphone-X's Blog/public/tags/Gcd/index.html","29359758649d8062ad26ff3a74469043"],["D:/Payphone-X's Blog/public/tags/HDU/index.html","f1721a304a135ed1c5ce9189a27cb4ad"],["D:/Payphone-X's Blog/public/tags/IOI/index.html","e9047d055d37af4aed38d3f886185545"],["D:/Payphone-X's Blog/public/tags/LCA/index.html","990a1975f6b29fc7036cf262b84078bc"],["D:/Payphone-X's Blog/public/tags/LYOI/index.html","19ce2ccf7bb740b598ca31326df19605"],["D:/Payphone-X's Blog/public/tags/Luogu/index.html","2b97538dc8d975caaaa602383c18c19b"],["D:/Payphone-X's Blog/public/tags/Luogu/page/2/index.html","a1324a5266ed5598414ba1f5895d5f6b"],["D:/Payphone-X's Blog/public/tags/Luogu/page/3/index.html","6ba160d4fa7530812255541b94cabfb7"],["D:/Payphone-X's Blog/public/tags/Luogu/page/4/index.html","26aba653e917661819cec4feb341efb1"],["D:/Payphone-X's Blog/public/tags/Luogu/page/5/index.html","657940abd7b960b46d1da01c2157d327"],["D:/Payphone-X's Blog/public/tags/NOI-Online/index.html","afb7ba53647b7be4aa42f25bb2f8e2bc"],["D:/Payphone-X's Blog/public/tags/NOI/index.html","3cc4ba23fcfdd5125dd197b913c9a323"],["D:/Payphone-X's Blog/public/tags/NOIP/index.html","3810e76f9274c385611880f9cda616e7"],["D:/Payphone-X's Blog/public/tags/NOIP/page/2/index.html","f16882b8150314aa0076346c2914b2ad"],["D:/Payphone-X's Blog/public/tags/POI/index.html","e29e939f12e2deb2aee88ae3ab82b5a7"],["D:/Payphone-X's Blog/public/tags/SPFA/index.html","dce838c19ed96099560e903ff7dbd3fe"],["D:/Payphone-X's Blog/public/tags/STL/index.html","832ccc5dd7efc8d7a1825bc479c99519"],["D:/Payphone-X's Blog/public/tags/Tarjan/index.html","2a89891e3bae533827259ccdda4cc7f8"],["D:/Payphone-X's Blog/public/tags/Treap/index.html","e8246a9496b9c236c694d8d3519c42e3"],["D:/Payphone-X's Blog/public/tags/Trie树/index.html","e82c5de4dae4ad7ea0097ed3d302e8e6"],["D:/Payphone-X's Blog/public/tags/USACO/index.html","aa3c9cee9cea8db8c31059da290af474"],["D:/Payphone-X's Blog/public/tags/UVA/index.html","b6ad45606cf2427413a44620b5549d6a"],["D:/Payphone-X's Blog/public/tags/Vijos/index.html","903ec3081d8835ef1b74ff09ff2152a9"],["D:/Payphone-X's Blog/public/tags/WC-CTSC-集训队/index.html","4974da0fad988eeba08a4d37f4b07596"],["D:/Payphone-X's Blog/public/tags/ZROI/index.html","e1aaba44896e068ff82cb0152f343257"],["D:/Payphone-X's Blog/public/tags/bitset/index.html","72dd38624f72f5ad91dfd14b6ff9026b"],["D:/Payphone-X's Blog/public/tags/index.html","b6a0b5cccb68aba30e936d07f23d3a81"],["D:/Payphone-X's Blog/public/tags/乱搞/index.html","4aea408ac81fd0c9782042f9042d5078"],["D:/Payphone-X's Blog/public/tags/二分/index.html","ca0f294393c38bace23125a6550065f7"],["D:/Payphone-X's Blog/public/tags/交互题/index.html","f91e05673a0578e77129c52708d422dc"],["D:/Payphone-X's Blog/public/tags/优先队列/index.html","19e88a1acec2980ee3072fbc2645e216"],["D:/Payphone-X's Blog/public/tags/位运算/index.html","72ebda59edb0abf59da164e8107a512a"],["D:/Payphone-X's Blog/public/tags/倍增/index.html","3b497142b1486922a1dcf68333a79d8f"],["D:/Payphone-X's Blog/public/tags/分层图最短路/index.html","8e5cc56637fc30f7643a6a59d7242df2"],["D:/Payphone-X's Blog/public/tags/分类讨论/index.html","324c6121585b5d64d866116b203eafdf"],["D:/Payphone-X's Blog/public/tags/前缀和/index.html","c15a9683cbbcff0275f3bcc197f8f0e4"],["D:/Payphone-X's Blog/public/tags/动态规划/index.html","9671191a71939fe174bedea01595197b"],["D:/Payphone-X's Blog/public/tags/动态规划/page/2/index.html","3c83951a1645f941b0344916ba189ebe"],["D:/Payphone-X's Blog/public/tags/动态规划/page/3/index.html","16608e9dc70c4859da7b851fd2cf053d"],["D:/Payphone-X's Blog/public/tags/区间dp/index.html","b671c546d5a48b593c8b132ca48d6f16"],["D:/Payphone-X's Blog/public/tags/博弈论/index.html","f2505856ec29e10e00dec591e8bd8a38"],["D:/Payphone-X's Blog/public/tags/可并堆/index.html","d3abe6540595b86e7697254828bc5ee3"],["D:/Payphone-X's Blog/public/tags/各省省选/index.html","21c4185ec7174213d606a6bf126e8045"],["D:/Payphone-X's Blog/public/tags/各省省选/page/2/index.html","7a8257b4354112ad747a1ffa559fe53f"],["D:/Payphone-X's Blog/public/tags/启发式合并/index.html","3545f909601d709e6509bf3794ea703f"],["D:/Payphone-X's Blog/public/tags/唯一分解定理/index.html","38bd0b87efeb838e8efe3116e1452de0"],["D:/Payphone-X's Blog/public/tags/图论/index.html","e1623bb6f7945daad68e74c37e2f8d63"],["D:/Payphone-X's Blog/public/tags/图论/page/2/index.html","c82057bf0ee907758ac73828faf47bc3"],["D:/Payphone-X's Blog/public/tags/埃氏筛/index.html","da80d5997090c1207ba570de50c27785"],["D:/Payphone-X's Blog/public/tags/夏令营/index.html","4864cc5bea022fc0de93258b07cd5248"],["D:/Payphone-X's Blog/public/tags/多校联考/index.html","5dc90df14804f8071878d0c139a47cc4"],["D:/Payphone-X's Blog/public/tags/字符串/index.html","7a8daf5d4057b4c36e95d427fd6f3e48"],["D:/Payphone-X's Blog/public/tags/学习笔记/index.html","067f17c99c96150f1fba6eb8d7db322e"],["D:/Payphone-X's Blog/public/tags/学习笔记/page/2/index.html","b4c9c8dbb59ad1c190b6cf1d47c122c2"],["D:/Payphone-X's Blog/public/tags/学习笔记/page/3/index.html","42b334e7d859acdf1433571bfe5e8d75"],["D:/Payphone-X's Blog/public/tags/容斥原理/index.html","64499db84ffae12d548d3dfeb94dd0eb"],["D:/Payphone-X's Blog/public/tags/尺取法/index.html","b2ef14458c15cda52423b89638d09f4c"],["D:/Payphone-X's Blog/public/tags/差分约束/index.html","692ac754ec0b610a8d2aedcf701a086b"],["D:/Payphone-X's Blog/public/tags/并查集/index.html","974817052f2a5f706c45e41423762ac7"],["D:/Payphone-X's Blog/public/tags/异或/index.html","2078230521b4ea74603e31f2de56e157"],["D:/Payphone-X's Blog/public/tags/总结篇/index.html","5b48ca3e057164e3066942b5c34a2972"],["D:/Payphone-X's Blog/public/tags/成长之路/index.html","764524a4c955cc9e46415472404268a5"],["D:/Payphone-X's Blog/public/tags/拆点-拆边/index.html","9610a8e0f49dea4a0f9385abcff3178d"],["D:/Payphone-X's Blog/public/tags/拓扑排序/index.html","b54783be84aa33af22049398ce1bde6b"],["D:/Payphone-X's Blog/public/tags/换根法/index.html","ecda5e98837169df0e08effdeeac73ca"],["D:/Payphone-X's Blog/public/tags/排序/index.html","8be58d688f4b2c70ac6cfa691ff409b3"],["D:/Payphone-X's Blog/public/tags/搜索/index.html","ab98ee54031072be7f0063d13d21d3be"],["D:/Payphone-X's Blog/public/tags/数学/index.html","cf9677e3448c0409b22660f48adc08c0"],["D:/Payphone-X's Blog/public/tags/数据结构/index.html","877429a69c4f3d42e6178a2ce2bc052e"],["D:/Payphone-X's Blog/public/tags/数论/index.html","9e05b88cbe76d06380aaa6bd887cd04b"],["D:/Payphone-X's Blog/public/tags/文化课专栏/index.html","9ef24b552091b9571a6033ea096d4cf0"],["D:/Payphone-X's Blog/public/tags/文章转载/index.html","fd18c731a44ebd78699cd3e6ca3f6877"],["D:/Payphone-X's Blog/public/tags/暴力/index.html","5ac11dd97da732be85c3f0684aa68b8c"],["D:/Payphone-X's Blog/public/tags/最小生成树/index.html","ba481ed0110dea4ba4250c1cd2f92f69"],["D:/Payphone-X's Blog/public/tags/最短路计数/index.html","fc1696084bb2d547a0f51961dddb3123"],["D:/Payphone-X's Blog/public/tags/期望dp/index.html","cffb7526757bca2ceac4137b5073e9d5"],["D:/Payphone-X's Blog/public/tags/染色法/index.html","1781048a241038fdb8f8d12eaf4a82fe"],["D:/Payphone-X's Blog/public/tags/栈/index.html","0d7cd769724965c68feb310d55d43e72"],["D:/Payphone-X's Blog/public/tags/树上启发式合并/index.html","e5c84b03634481153fb6f3e297a1e9a8"],["D:/Payphone-X's Blog/public/tags/树形dp/index.html","5e71b2d80f877fe852969e53eb6e0142"],["D:/Payphone-X's Blog/public/tags/树状数组/index.html","bca7471e6c3ad6e799a361edd99d1a96"],["D:/Payphone-X's Blog/public/tags/树的直径/index.html","a11d7b678c1fdc26e11e98cc219af886"],["D:/Payphone-X's Blog/public/tags/树的重心/index.html","2e44fd73fbeb62c665c1776c30673846"],["D:/Payphone-X's Blog/public/tags/树链剖分/index.html","a77c4828be383a84ccf9081735079fbb"],["D:/Payphone-X's Blog/public/tags/概率期望/index.html","95105a1494fb65d5e958de842886c3e6"],["D:/Payphone-X's Blog/public/tags/模拟/index.html","6f47edebba211d809c8c797c0950c434"],["D:/Payphone-X's Blog/public/tags/模拟退火/index.html","488f96859952fe206008552e60e1899d"],["D:/Payphone-X's Blog/public/tags/欧拉筛/index.html","0288b28f42ef7928ad9bbbf40854fb7e"],["D:/Payphone-X's Blog/public/tags/灌水区/index.html","bfa0520c76ed5f3be47d46ae0d7fb822"],["D:/Payphone-X's Blog/public/tags/玄学/index.html","f9ab725aaafa4237f206085fc82f53b7"],["D:/Payphone-X's Blog/public/tags/珂朵莉树/index.html","8acb504f84eabbd52187d52b4335fa87"],["D:/Payphone-X's Blog/public/tags/矩阵运算/index.html","c865c35d7adbafef08c27a293af54afc"],["D:/Payphone-X's Blog/public/tags/纪中集训/index.html","5d2268ef6d2318c0fa544b44b6b91a5c"],["D:/Payphone-X's Blog/public/tags/纪中集训/page/2/index.html","020e0761b21d77251488691780dbe457"],["D:/Payphone-X's Blog/public/tags/线性dp/index.html","6ac61e125ac70f9bef3bdd90ca0d5a7b"],["D:/Payphone-X's Blog/public/tags/线段树/index.html","7cb2117b74fa860d9ac86f8d6edc44d1"],["D:/Payphone-X's Blog/public/tags/组合数学/index.html","92351d61b6b12d9d0856915aa433af67"],["D:/Payphone-X's Blog/public/tags/考场技巧/index.html","dccc093cc5e5f604b64cbe31251ca126"],["D:/Payphone-X's Blog/public/tags/背包问题/index.html","049ebd7cfe5a17623c94dfd669f7a304"],["D:/Payphone-X's Blog/public/tags/记忆化搜索/index.html","724f545a8755fde7a123175fad129d2a"],["D:/Payphone-X's Blog/public/tags/贪心/index.html","bbddcc56a8b15ae843588f74f5af25de"],["D:/Payphone-X's Blog/public/tags/贪心/page/2/index.html","3dc7a467e348a13a014e628620cb59e4"],["D:/Payphone-X's Blog/public/tags/超可爱哒/index.html","6b24ee21bd92aca7e50719017397dd29"],["D:/Payphone-X's Blog/public/tags/逆序对/index.html","51c0e6a0249de2a7220e3ed35b38dec2"],["D:/Payphone-X's Blog/public/tags/递推/index.html","9ebeeaee47530abdc814371b217a0a3f"],["D:/Payphone-X's Blog/public/tags/链式前向星/index.html","51c179b8f46caad3836c08ea76fdd0f4"],["D:/Payphone-X's Blog/public/tags/题解/index.html","ccb8e83d49d0061a3f3bae8c138db4b4"],["D:/Payphone-X's Blog/public/tags/题解/page/2/index.html","ca251f0dd9d9135c9f32b49700c2933a"],["D:/Payphone-X's Blog/public/tags/题解/page/3/index.html","36cc1b521359a1e730637202afab245a"],["D:/Payphone-X's Blog/public/tags/题解/page/4/index.html","7f1c2158002ed7079fe52f801932595b"],["D:/Payphone-X's Blog/public/tags/题解/page/5/index.html","c8c18e123241a52b267c5d4cf9c72282"],["D:/Payphone-X's Blog/public/tags/题解/page/6/index.html","cc75adaf2e0ffe3a078f5933d2a9b563"],["D:/Payphone-X's Blog/public/tags/题解/page/7/index.html","358c1afaf2f65a31a562c1b68cbc6aa5"],["D:/Payphone-X's Blog/public/tags/题解/page/8/index.html","7dab53d27123b31bd08ebf169f44c44a"],["D:/Payphone-X's Blog/public/tags/题解/page/9/index.html","3bf44f972fdf21b938238865abf9be0e"]];
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







