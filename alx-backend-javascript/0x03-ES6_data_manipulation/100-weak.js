export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
    let query = weakMap.get(endpoint) || 0;

    query++;

    weakMap.set(endpoint, query);

    if (query >= 5) {
        throw new Error("Endpoint load is high.");
    }

    return query;
}
