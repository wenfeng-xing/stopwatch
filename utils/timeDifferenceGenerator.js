export default function* timeDifferenceGenerator() {
    const initTime = Date.now();

    while (true) {
        yield Date.now() - initTime;
    }
}