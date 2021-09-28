const hasServiceWorker = () => 'serviceWorker' in navigator;

const validations = {
    hasServiceWorker,
};

export default validations;
