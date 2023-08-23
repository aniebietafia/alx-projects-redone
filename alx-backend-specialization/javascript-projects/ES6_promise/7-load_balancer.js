export default function loadBalancer(chinaDownload, USDownload) {
  const inputs = [chinaDownload, USDownload];
  return Promise.race(inputs);
}
