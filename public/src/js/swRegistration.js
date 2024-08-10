var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(x => console.log('sw registered'));
    // navigator.serviceWorker.register('/sw.js',{scope:'/someRandonFolder'}).then(x => console.log('sw registered'));
    //explain about scope :D
}

