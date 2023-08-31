/*
Export a const instance of WeakMap and name it weakMap.
Export a new function named queryAPI. It should accept an endpoint argument like so:
{
    protocol: 'http',
    name: 'getUsers',
  }
Track within the weakMap the number of times queryAPI is called for each endpoint.
When the number of queries is >= 5 throw an error with the message Endpoint load is high.
*/
export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  if (count >= 5) throw new Error("Endpoint load is high");
  weakMap.set(endpoint, count + 1);
}
