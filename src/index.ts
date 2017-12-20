export default async function main(app: () => Promise<void>) {
    try {
        await app();
        process.exit(0);
    } catch(err) {
        console.error('%s', err.stack);
        process.exit(1);
    }
}
