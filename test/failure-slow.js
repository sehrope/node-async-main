const main = require('../lib').default;

function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis);
    });
}

main(async () => {
    await sleep(1000);
    throw new Error('Simulated delayed error!');
});
