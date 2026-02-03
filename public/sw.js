// Service worker mínimo para PWA - Seu Elias
// Permite instalação "Adicionar à tela inicial" e app instalável

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
