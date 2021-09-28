import rim from '../request-interceptor-mock/src/lib.js';

rim.init({
    environmentAllowList: ['development'],
    environment: 'development',
    mocksPath: '/mocks/index.js'
})

