if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

if(window.Notification && Notification.permission !== 'denied' ) {
    Notification.requestPermission(status => {
        console.log(status)
        let n = new Notification('Te avisaremos lo nuevo', {
            body: 'Te haremos saber de la nueva información que subamos :)',
            icon: './HM.png'
        })
    })
}
