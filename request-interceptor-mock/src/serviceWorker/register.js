export const register = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', async () => {
            try {
                const registration = await navigator.serviceWorker.register('./serviceWorker.js');
                const { scope } = registration;
                console.log('ServiceWorker registration successfull with scope: ', scope);
            } catch (e) {
                console.log('ServiceWorker registration failed: ', e);
            }
        });
    }
}