import { useEffect, useState } from 'react';

/*
 * Gère l'écran de chargement (logo) affiché à la première visite.
 * Les animations du haut de page attendent qu'il ait disparu.
 */
let ready = false;
const listeners = new Set<() => void>();

function markReady() {
  if (ready) return;
  ready = true;
  document.documentElement.classList.add('is-loaded');
  listeners.forEach((fn) => fn());
  listeners.clear();
}

export function initPreloader() {
  let seen = false;
  try {
    seen = sessionStorage.getItem('belki-visited') === '1';
    sessionStorage.setItem('belki-visited', '1');
  } catch {
    /* stockage indisponible : on affiche simplement le préchargement */
  }
  if (seen) {
    document.documentElement.classList.add('no-preload');
    markReady();
    return;
  }
  const done = () => setTimeout(markReady, 600);
  if (document.readyState === 'complete') done();
  else window.addEventListener('load', done, { once: true });
  setTimeout(markReady, 3500); // filet de sécurité
}

export function useAppReady() {
  const [isReady, setReady] = useState(ready);
  useEffect(() => {
    if (ready) {
      setReady(true);
      return;
    }
    const fn = () => setReady(true);
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  }, []);
  return isReady;
}
