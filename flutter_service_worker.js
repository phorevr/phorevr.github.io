'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "90e2a3bd404f9b2cb50c5e0f19914292",
"version.json": "b4dbdf4ec92f58f018b71a4fb3a544e6",
"index.html": "55be635b7a534e162cad8c045cf140ae",
"/": "55be635b7a534e162cad8c045cf140ae",
"CNAME": "4b9acb51756bbc72087b76ece4052261",
"main.dart.js": "70b4a9ec05efe24e5fa086b0441e20ec",
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
".git/ORIG_HEAD": "b5d2ba6b1978cd3624911d34df543e7d",
".git/config": "5f6147efdd2291fb50d62edeb3c9c10b",
".git/objects/3e/03ae350e1214d596145fdf217526158de95568": "b5f25af766b83d00c16fbbcbf4978569",
".git/objects/04/d8a3d3e1148d89977c0234aeddd774504985d5": "9519cdf0719c683d89548f7d284bcb3f",
".git/objects/3c/08d00b308cc6434fad0f3a50695d1a64bdf03d": "93b5a0d366b2bff25415f5c442f63e0c",
".git/objects/67/1d03e8623f96d53e46ef74ef27864da91249f0": "4d03d76e6720c4380b085a31dffdfd75",
".git/objects/5f/171ff9efc563bcc2e419e5739a8a0c0df19998": "fa9f1aa695971680c9271b8c72ada5ab",
".git/objects/b3/ccb1ef6ce372815d1ccfc6095653eea14c68bc": "8f2a426856a3e7ddaa9b9aa32e8705cb",
".git/objects/da/b261462b00f8dd5f94462bdc9b0bcd879dc033": "beb25b04d05af544e72a4f5ecb2acb44",
".git/objects/b4/78ea5725cc8a6db1f110557ee36ed001bd4920": "5e39b49c72d5c13f4409f59df5d4f374",
".git/objects/e5/4b523675f40f7c200fd22b14fff41c6c03d1f5": "5073d49b95cfc123f98ad35f9690350c",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/e3/92d1d2958c0538f2a9d9a13e26b3184832e3b4": "08d4589671fdd4c8587492871b02a47e",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/20/185f3c37c117a4f1e949082bdd923eae7c3c04": "c7d27c8426e3b9e310ede197a494ad05",
".git/objects/4b/e94ba318aa998935f1249e26fccaf9f8662755": "40e97f5adbfafd319faeff16c26abd9b",
".git/objects/4b/94eeb1aeb606fbb17ad3c5e6709f08bd2b0855": "d2b09eb7d031347770693a187ace26d3",
".git/objects/pack/pack-b03b63b53b0917b2fa49e39d937c3b367618c917.pack": "c8425974f00c710a7aac3ed9400bdcba",
".git/objects/pack/pack-b03b63b53b0917b2fa49e39d937c3b367618c917.idx": "87129825e0523790ce5fe8f63f214bf5",
".git/objects/81/1a77efd2c89fec2b27ecf3028be2d2abaff462": "88d55b4647acf899bd72e427373e35ce",
".git/objects/88/e71a6992feae473a968c21b43b2f824ed4b1d1": "62ac3eb17e0baeb46a2bbf1c9527f58e",
".git/objects/38/890fe42e7b7655bbe7c9b4773e5d3c3a535493": "5047ea0e0be23a8e7ceb0f8204ec5558",
".git/objects/6e/7ca1ddb58b8a82b7b115f577a75fddd632cb4a": "46449ba8c3f97dc3d4f620aae0a896c6",
".git/objects/36/24cf4f0cd6643eab530faaab5adb7125779039": "3bfe911a6c1e906912bd215d1030cfe3",
".git/objects/31/7e464ae1a8211188d6c248029fdbbc85166f34": "504ac7e803b89508640fd864923ca9b1",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/6d/6f329ac1eb8519ec669a904fab55b5e746bf52": "d4969ee4f51d0db7cb36d0caf73bbc5d",
".git/objects/99/b3ddf30acbf4fbea8c7bbaca4e0b30cf116caf": "9cce1cf4ed860f0de5e301587ed94b41",
".git/objects/e9/f069e9904477eec0457f12b665d58ad8ee3c89": "4a859a3792455ccf01c6ccaeb921a2f0",
".git/objects/1c/3f806fbf5130f1752b684c02fd73a3c65f6865": "0d788c6d335f06e669b59e35c9b4a995",
".git/objects/40/9d8b7e32597de27af554b8b2bfbeadb173ae38": "9feb7d7c93d8f199f16459b09b5e2501",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "a92d73ffb3a89281d7a1d12ab0f8fd7d",
".git/logs/refs/heads/main": "ecd528a4d88bfd4c81964f8219fbfbd5",
".git/logs/refs/remotes/origin/main": "4905fef793d9bf3a1465d80b24ae7e0e",
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
".git/refs/heads/main": "7bf3f7a5795481d2c7047466c375c129",
".git/refs/remotes/origin/main": "7bf3f7a5795481d2c7047466c375c129",
".git/index": "1126a39d35cc201a683233ea7c7123ef",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "4ece7e2bc5f0aab9991ea9a8ac6451b7",
"assets/AssetManifest.json": "f2bec46a7d765a177cf64293cb2deef9",
"assets/NOTICES": "917666a201e43113dd0706daac2895e3",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/AssetManifest.bin.json": "a7822af6cbf98572b6156e290b94fbfe",
"assets/circular_progress_indicator_square_large.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "69dcd65d1ab0fd11838f43f278a55dbc",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "069ba6b3d4405f7ecdd20f1f68ecfd43",
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
