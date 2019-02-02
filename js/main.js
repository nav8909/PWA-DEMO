if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {   //segun google developers
        navigator.serviceWorker.register('./service-worker.js') // TODO : update to your correct filename
        .then(reg => console.log('SW registrdo :)', reg))
        .catch(err => console.log('Boo X(', err));
    }); // eliminar esto y segun google developers
} 
// else {
//     console.error('ServiceWorker no disponible');
// }



if(window.Notification && Notification.permission !== 'denied' ) {
    Notification.requestPermission(status => {
        console.log(status)
        let n = new Notification('Te avisaremos lo nuevo', {
            body: 'Te haremos saber de la nueva información que subamos :)',
            icon: './HM.png'
        })
    })
}


