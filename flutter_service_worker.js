'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "7078f13424c518959582c4e933ccb300",
"main.dart.js": "a6a8f3147fc3d36295c3d535b3dcbac3",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"flutter_bootstrap.js": "d447d75ab7b41bef8c112aca5d45d21d",
"index.html": "d28500ff032ddece409c94a65da86db0",
"/": "d28500ff032ddece409c94a65da86db0",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/Icon-512.png": "632a82983a2aed05d71da19424bec6f8",
"icons/Icon-maskable-192.png": "03126e1671342d81c8c1d76fb3372e4a",
"icons/Icon-maskable-512.png": "632a82983a2aed05d71da19424bec6f8",
"icons/Icon-192.png": "03126e1671342d81c8c1d76fb3372e4a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "190c849c50192233496555eaaf102e18",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "921a6dfb9c6513975ccaa544dcb3edb0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/NOTICES": "dc761d5e9454c35ba4cbda0ad8c665f1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fb6e618c250337410fc491325f433988",
"assets/AssetManifest.json": "1fc196d23a643b9e2145b51d876449ae",
"assets/assets/images/splash/logo-black.png": "6a988c39ee9825a8e9a8fb14159d16bf",
"assets/assets/images/splash/logo-no-background.png": "f3d3f34cbbef3af96c0de776a4ddf7ce",
"assets/assets/images/splash/logo-color.png": "407c8e5f9b1c525796a226437d6cf29d",
"assets/assets/images/splash/logo-white.png": "bee8234e58d902ef44c798ac410781b0",
"assets/assets/images/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/images/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/images/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/images/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/images/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/images/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/images/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/images/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/images/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/images/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/images/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/images/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/images/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/images/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/images/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/images/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/images/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/images/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/images/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/images/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/images/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/images/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/images/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/images/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/fonts/MaterialIcons-Regular.otf": "eb59f118f9dfc40d8090c8da026e33f1",
"assets/AssetManifest.bin.json": "bd47ac8e0119c82c7d3fe416697d1bc2",
"manifest.json": "8e1f3896a8e2a5cea05c32a87641f4cb",
"version.json": "efc5d188af9584cf9cc4419859194dea"};
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
