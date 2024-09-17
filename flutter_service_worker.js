'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "90e2a3bd404f9b2cb50c5e0f19914292",
"version.json": "b4dbdf4ec92f58f018b71a4fb3a544e6",
"index.html": "c53fc449c8fd229e21b86b3faf911dc1",
"/": "c53fc449c8fd229e21b86b3faf911dc1",
"main.dart.js": "8c1031abec9bcf321c7d4c5f3518a633",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "91f8eac40527954652eec889dfd9171d",
"icons/Icon-192.png": "30de3093e653d2539a019fbe1ef30d03",
"icons/Icon-maskable-192.png": "30de3093e653d2539a019fbe1ef30d03",
"icons/Icon-maskable-512.png": "97d970ecbc890ca482820f110798d571",
"icons/Icon-512.png": "97d970ecbc890ca482820f110798d571",
"scripts/deplan-client.min.js": "418c62d45e30a7750c701de754a7fa2c",
"scripts/workers_api.js": "393c0ff7c0886af1809ce07a7d481fa7",
"scripts/image_processor_worker.js": "31643d4d0a72cd8cd5469d266ac4f205",
"scripts/image_processor_fallback.js": "7a788b35856da128421182c3a0aa6a89",
"scripts/deplan_api.js": "1a91573f8b8fa9f3803b9515ce2a8fd5",
"scripts/crypto_worker.js": "dfb80323de8a6ff7745cd45f6c5e670f",
"manifest.json": "0cf28e771cca8ccce3c9351ad0476a47",
".git/config": "9c60b74cca44e1632a42a93afbd47d5c",
".git/objects/92/66c778f74b1c46fe7879358a8e4826c904c555": "92ab1bb44aad4760e2b8826d1d738e7f",
".git/objects/66/8ba74de34c031af572102883c0ddd830d5b929": "aa504ef692c6ba98d67e044cabee1d6d",
".git/objects/51/732e70bc68eeea5fa1bcb141c59f9395a6625b": "9581b462007b24c79b232c0021f13f63",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/6e79a40a2a5de35dbae1887c981cb99696ae45": "8389b0a14280a77d64b344af2e7420fc",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/f55b7e34cf9e5652ce62187140c9f9d0b3f592": "ca9cd912656a508d8e7e2366c8b897d4",
".git/objects/bb/7a618e1f9b7fc496ed14e16a9ea18607ef1449": "5541ff13ffa4651c7ae3f2f415e18d2f",
".git/objects/d7/80b66bd6605a388844cfff09c0607399affd63": "23f53f5ccb43e4c2f4bed401a0916992",
".git/objects/b3/165c931fc8f1648546db85f15f33b27e4c4af6": "5fd6e7c60a2e41d13677d3d87b8a566a",
".git/objects/b3/979c7169aff7f48ad897b40c8e88c142d1aa00": "3d518f9192e70b404fe26e83ecdba1d5",
".git/objects/b3/e7de05988b2d2680692e8687dfc46d3ff1bb98": "684c1f584fee4ce5c034c90f8a500ec3",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/1d31fca12ab8624069f4ab35cc7ee96e13251d": "bfd9f7d63d3e1ec42e2fa08fcb63daa0",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/70e4b6061f8d38cfc1612da0558bc9afaf47ad": "c17bdb7673fa1d2d9aafca1a03cd594e",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/36bb0180b22c51d6716f4a27d78ecd1737eda0": "8458bf9590011501944a9515a24083d8",
".git/objects/e2/557f2e52ae9d71958d2e7b7b7bb5a960bf4c6e": "9955ab0a07d4d3afd595646aaed8d616",
".git/objects/f3/d3f9f37f0ec97cba665940428c6bcefe188d48": "e8c5aa8fb0fbdf3e1c9a695960d5d311",
".git/objects/f3/b631643a0f80fa77bd998eb859403555e8cdd5": "0f623a788290f5cb6c586437a8182ee0",
".git/objects/eb/111c6d8680acbe4829fa5a173a23e4d11a50a3": "ed5b760ea49750a57fc4747b337907e9",
".git/objects/eb/3bec618d27372c479d621a6983e3a6fdd4071f": "98fe12908c95ebb279cf31f4aaaee0e6",
".git/objects/c0/12d066f2e65f0f3ca592dedf2f1ca71059d5ea": "983bdf4b9111cd273fd151bd2b58ec8d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/ebeb55f68ef3ba693ff2d3b2f1fb4e57e76298": "b8d559d57c2f6da5a846a259334fc5f6",
".git/objects/f2/0354f4f4f734b92d7e73713f33582a49a26537": "a414960efbf1d9d633d79e5a1905cb8f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/e1c33eed034b1ea588f4f3e963e1d5ec87bf73": "361157ad6558267d07a4a5ec9d3d09fd",
".git/objects/fe/d089c198771e3a455ff0f9da33453ebec88527": "5b2282b237644ae6fe6cd6b61328a458",
".git/objects/4e/9d53246b8751a5cedaad8b055f8075e9e08dbf": "41c925032ce6853b83571bdf374479f8",
".git/objects/4e/8ea5daadc6fa56cf27bf7310fed4b7e3cdb9f4": "84aece7c5a6c2e42f18c0afba3e34db9",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/3c075e35d8d3e123ad2b75c5ac7d24463cb2c9": "e49e91199432a56ea96d5e1e2da3352d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/42/ef1f1f3f175c7e5db5b73455f400c6fdc78cfc": "c3cfb3467709974fedcb1417cf86658b",
".git/objects/45/94a5a169ac25842bc3881cf56062529b519a72": "5f518b5b474ae47544122874933b101c",
".git/objects/73/421783616b9a2b4aab716c19e3f77e64d1403a": "8dfe9283cfa58b915bf94b54c01bbd78",
".git/objects/80/677988ca2d99eced0a084da2b9a73859a81c76": "03a7f57633d87d4c3a9095f52e8251f9",
".git/objects/28/a0c8d04ae49bd37ef0449a2b06e851620e4903": "1fb18be8d8b941ebbffafb14c4974c99",
".git/objects/28/fa5a4bb946386d665ce21a881f4813cdd32475": "bd712cefb13f07a5b96fd9620750b529",
".git/objects/17/2910472b29a4be8700c59f08821a4371de19dc": "af3a16d39ccdd442433ea9603efada84",
".git/objects/8a/63eba16d49670d20f8c79979c80676dd56b39e": "f21ce3d33cf9350a8d6bc3fcc21ba514",
".git/objects/8a/8ac3a9d6896c01222bc197ecafb24ecc48f45e": "a65ab77724ecad4a8ea38ac04493654f",
".git/objects/10/92fec12da627dcc6645c5c97aae7c1f343946c": "14fb20c818e5a2841a60846bf634ba0b",
".git/objects/2a/4bdfc7b933a67f6d7c27e68f5c31adcbc2932d": "6bc59ce0c36f294e20a22e88210d6498",
".git/objects/6b/5f8faefaff6c89d721d8df7de32f32928b8f8e": "a9fd644cd07a547d06effbe6937e3c90",
".git/objects/36/edd2aa8f2590acd14f851cd99084b602027ecb": "125bdf71e265aa6550e027ac9bee313d",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/54/5ab0a47df65fd7c11694197adaef412e23b107": "164284e0c0185079f80fb0ad0b21ea87",
".git/objects/54/666da48b795856e91acfa70827f37fad9556f9": "8d3d09cb3a106ec52c3b2fb266490b06",
".git/objects/98/5544b80c582e3d0e0fb7f2a0345103acf36f5c": "212ca1065041d64cb98c9aa5cc23e821",
".git/objects/3f/f4c31bfbfdd390a1149bd46001be5cb7fb04fb": "52a7b04aa7a01d34ea0a0a8913af9664",
".git/objects/08/dcf6e3e7e0a8e7b803dd493e5cb60950415491": "a91bfc2cb702f391216ca73a7cbfafe5",
".git/objects/08/3ccc85cf74d1c8240e5db6eec874e5822136cc": "2ed438e05cfbc28a271bb76714ce7a25",
".git/objects/08/1b59b104d2e274246b52c1fca0f99bc8c544cf": "5146ee01af6beed651ad1d0e760c6ebe",
".git/objects/99/b5b2f5da3d88a7e623cd310978bad1695d0b02": "4767eae74bc2e7acf3f0582f76323182",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b0/5bb5b63de8a0bd975495daa83b8898536dfcfc": "a1bb22ec463224173b85cd6ab44f0d91",
".git/objects/c3/d512e0c1b29667135fc70b35cd892335021937": "9f818c6cad0f5eb0e3e93744fa572c2c",
".git/objects/cd/ccfd9988acbacf32344a4fd8b88214cdcc4b43": "9fdd0774c26cad7e1bcbe4f41ca6bed9",
".git/objects/cc/eb6270753f71450db2fc530bc0400932f8ff55": "23f1e38d39249950159adcaeb41a81ba",
".git/objects/f9/c70200b110bfc567690ce3608a3bc212adfbc7": "3a4193d340bf1919dface36cc030f613",
".git/objects/e8/70eba2d4b42f19a0e4aeb77c0a8829f55d01c9": "ee01e10d5a832c1eda225c36909ac28b",
".git/objects/fa/004064a8bbb7e7931f1c80bb1488e1ed7ab0d1": "9d99e861336687488de7661e95f69245",
".git/objects/e9/aac6b2c3ea943179b7d34098316b639a461b69": "b1ffceb0cc251a59be27e7def62a5a87",
".git/objects/f8/5744ba07f6513d42bf190295e8ec9599a27555": "f66ad2bbb2202e109d28c4aa551e51c2",
".git/objects/2d/94440d1e79c83cc0dbbb0396e56dd5efd66a9f": "f0b16311ffa4fd5fdf9788ba1ef6e8bd",
".git/objects/70/423658e318fb3818f393a8685eda493898023c": "74cd82349380d663700e4d099b9964d7",
".git/objects/15/be5f357d1201e7b95ca1390fa97f5276248776": "8b00d517b5c9d2ee3e14a096491204e2",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/125f8b79cc20462cd4f9b4715868d6668fc707": "b528bd08652f209f85b9548674004300",
".git/objects/76/d7400b4ddd9fa822fccd84b32b0da8becc4d3d": "6c53ad884ee4fb06bcafc982fd5a4d85",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/47/cb689d1bbf526b99ca798e01423697c77556db": "97fbb2cdddcf3f9e837e6ce72720efe4",
".git/objects/8b/aaf3cd29fec779465db7657689adc3db1b00f2": "c6fce9b172944c20e6b42cbfe6276afb",
".git/objects/13/d632ce69afee10e5ead54fd5cd9e5e0b35ebd6": "91bc0bce708f3d27157b369f90053bfc",
".git/objects/7f/57fbfc3d396b4a1c8af76b6c02a92482a7f802": "3b2248ecc90e3bb052795555687e3937",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "9569aacf5aec1e4b4638916a29478cce",
".git/logs/refs/heads/main": "9af52860cb6f607fff13f4de78bba22d",
".git/logs/refs/remotes/origin/main": "b7b27ee8819b6860f0c23373cf9ede18",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "7ed9998bbfcc88fb73c87a8b30110e1c",
".git/refs/remotes/origin/main": "7ed9998bbfcc88fb73c87a8b30110e1c",
".git/index": "5ac9375cb56e809277f3d2cb46d40373",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
"assets/AssetManifest.json": "d421522ef0999b354fe0555295e9c01b",
"assets/NOTICES": "cee1577cc5d8a1a4a229a0a017e5ded3",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/AssetManifest.bin.json": "3126556844dfaf72a1fb1d70b674e8d5",
"assets/circular_progress_indicator_square_large.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6a1f4403ca6e13c46624b8b6beee4b6d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "37869cd63b119f63c705ede6ccc918e9",
"assets/fonts/MaterialIcons-Regular.otf": "197a68bace95ebd3481f70ef8580c165",
"assets/assets/app_icon.jpeg": "9efc381237767030e6ec7961c6bfd33f",
"assets/assets/images/logo_with_text.png": "6bf5448e2102b84116a3adc8af95c258",
"assets/assets/images/add_image.png": "b5e21c7cff1769bf5a36d880574a065c",
"assets/assets/images/android_pwa.png": "5b1a40c874bf4a7ed59706b694423fbc",
"assets/assets/images/ios_pwa.png": "b5fdecb0620af2214fe2571a3ae825aa",
"assets/assets/images/deplan.webp": "5c317fe719b8cc9d448fb2d18791fdc3",
"assets/assets/images/paypal.webp": "42f72f61521aca365bdfd859437a4c6c",
"assets/assets/images/credits.webp": "ddcaf345a1c5358a3536d0052bbc2612",
"assets/assets/icons/check_filled.svg": "881070c6c70ce1209ba965b16eb6c53e",
"assets/assets/icons/cross_red.svg": "b40fb2eda0e87371ea7bdfc707e3e906",
"assets/assets/icons/wallet.svg": "2983f7bfd3db4f0f3981c8000b4aaaec",
"assets/assets/icons/money_box.svg": "ae9a720932d5a0dd67472f73e143ca67",
"assets/assets/icons/logout_icon.svg": "ba28682ae566fb64687ef2e3bb91ed90",
"assets/assets/fonts/Gilroy-Medium.ttf": "ef9daf9c32f47a3468f30f861e92b9c4",
"assets/assets/fonts/SF-Pro-Display-Light.otf": "d2e8530d7b0f9ca7c5298263bd1a184a",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "f4245a5167ad609c4ba2d0850d553bd2",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "94348d7ee70c258261a757b66596c4f9",
"assets/assets/fonts/SF-Pro-Display-Medium.otf": "84d3637759a89aa1b59df2a828544511",
"assets/assets/fonts/Gilroy-Regular.ttf": "af5b8da12b32c5e74532c6446eb356b4",
"assets/assets/fonts/SF-Pro-Display-Semibold.otf": "2723a0240d8e4fd81b39668e0e33640a",
"assets/assets/fonts/Gilroy-Light.ttf": "1111f8b003573d984ba8a7179862fb32",
"assets/assets/fonts/Gilroy-Bold.ttf": "10b9cd1ddd69d318220fdfeca35a23b3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
