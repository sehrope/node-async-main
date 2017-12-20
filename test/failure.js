const main = require('../lib').default;

main(async () => {
    throw new Error('Simulated error!');
});
