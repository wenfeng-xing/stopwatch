export default function* timeDifferenceGenerator(diff) {
    let initTime = Date.now();

    while (true) {
        const result = diff > 0 ? (Date.now() - initTime + diff) : Date.now() - initTime;
        yield result;
    }
}