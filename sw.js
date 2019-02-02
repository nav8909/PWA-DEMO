;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_HM',
  urlsToCache = [
    './',
  './css/style.css',
  './css/menu-r.css',
  './css/img/HM.png',
  './css/img/icon_bed.png',
  './css/img/icon_people.png',
  './css/img/icon_size.png',
  './css/img/services.png',
  './css/img/1508774072.jpg',
  './css/img/1513285844.jpg',
  './css/img/1513285858.jpg',
  './css/img/alrededores1.jpg',
  './css/img/alrededores2.jpg',
  './css/img/alrededores3.jpg',
  './css/img/alrededores4.jpg',
  './css/img/bar4.jpg',
  './css/img/ecentos1.jpg',
  './css/img/ecentos2.jpg',
  './css/img/ecentos3.jpg',
  './css/img/gastronomia4.jpg',
  './css/img/habitacion-1.jpg',
  './css/img/habitacion-2.jpg',
  './css/img/habitacion-3.jpg',
  './css/img/historia1.jpg',
  './css/img/historia2.jpg',
  './css/img/historia3.jpg',
  './css/img/historia4.jpg',
  './css/img/HM-rest.jpg',
  './css/img/rooms.jpg',
  './img/HM.png',
  './img/habitacion-1.jpg',
  './img/habitacion-2.jpg',
  './img/habitacion-3.jpg',
  './envio.php',
  './js/jquery-2.1.3.min.js',
  './js/menu.js',
  './js/main.js',
  './index.html',
  './bar.html',
  './eventos.html',
  './explorar.html',
  './HM.html',
  './promociones.html',
  './restaurante.html',
  './room.html',
  './ibl-fv.png',
  './HM.png',
  './manifest.json',
  'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900',
  'https://use.fontawesome.com/releases/v5.3.1/css/all.css'
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})
