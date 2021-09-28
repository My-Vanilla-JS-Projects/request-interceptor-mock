// import * as sw from './serviceWorker.index.js';
import { messages } from './messages/index.js';
import { validations } from './validations/index.js';
import mocks from '../../mocks/index.js';

export const init = async (options) => {
    const {
        environmentAllowList = [],
        environment = 'development',
        mocksPath = './src/mocks/index.js'
    } = options;

    // Don't execute if environment isn't within allowed list
    if (!environmentAllowList.includes(environment)) return;
    
    // If ServiceWorker don't exists throw an error
    if (!validations.hasServiceWorker()) {
        throw new Error(messages.SERVICE_WORKER_DONT_EXISTS);
    }
    
    const { default: mocks } = await import(mocksPath);
    
    // sw.register();
    // sw.install();
};

const rim = {
    init,
};

export default rim;