<!DOCTYPE html>
<html lang="zh-TW">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    
    <!-- PWA 關鍵設定：Viewport 禁止縮放，模擬原生 App 體驗 -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    
    <meta name="theme-color" content="#3b82f6" />
    <meta
      name="description"
      content="優惠翻譯蒟蒻 - 幫您快速計算真實折扣與單價比價"
    />
    
    <!-- 引入 PWA Manifest -->
    <link rel="manifest" href="/manifest.json" />
    
    <!-- Apple Touch Icon (iOS 支援) -->
    <link rel="apple-touch-icon" href="/icon-192.png" />

    <title>優惠翻譯蒟蒻</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

    <!-- Service Worker 註冊邏輯 -->
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
              console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, (err) => {
              console.log('ServiceWorker registration failed: ', err);
            });
        });
      }
    </script>
    
    <!-- React 應用程式的進入點通常由建置工具自動注入 script 標籤 -->
  </body>
</html>