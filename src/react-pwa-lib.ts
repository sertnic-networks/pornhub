
async function buildPWA(): Promise<ServiceWorkerRegistration> {
  return new Promise(async (res, rej) => {

    // check serviceWorker is supported browser?
    if ('serviceWorker' in navigator === false) {
      rej('your browser is not support serviceWorker!');
      return;
    }

    // Try install serviceWorker
    try {
      await navigator.serviceWorker.register('/sw.js')
        .then(swr => res(swr))
        .catch(err => rej(err))
    } catch {
      rej('can not install serviceWorker!');
    }

  })
}

export default buildPWA;
