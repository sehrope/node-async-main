const main = require('../lib').default;

main(() => {
    throw new Error('Simulated error!');
});
