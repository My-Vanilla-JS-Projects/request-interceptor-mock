self.addEventListener('fetch', event => {
    console.log({event})

    event.respondWith(
        fetch(event.request)
    )
});