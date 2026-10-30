import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { photo, type Photo } from '../data/photos';
import { Icon } from './Icon';

type LightboxApi = { open: (items: Photo[], index: number) => void };
const LightboxContext = createContext<LightboxApi>({ open: () => {} });
export const useLightbox = () => useContext(LightboxContext);

/** Visionneuse plein écran : clavier (← → Échap), glisser au doigt, clic hors image pour fermer. */
export function LightboxProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Photo[]>([]);
  const [index, setIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);

  const open = useCallback((list: Photo[], i: number) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setItems(list);
    setIndex(i);
    setLoaded(false);
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
    lastFocus.current?.focus();
  }, []);
  const go = useCallback(
    (delta: number) => {
      setLoaded(false);
      setIndex((i) => (i + delta + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.documentElement.style.overflow = 'hidden';
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close, go]);

  const current = items[index];

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <div
        className={`lightbox${isOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Visionneuse photo"
        aria-hidden={!isOpen}
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {current && (
          <img
            key={current.name}
            className={`lightbox__img${loaded ? ' is-ready' : ''}`}
            src={photo(current.name)}
            alt={current.alt}
            onLoad={() => setLoaded(true)}
          />
        )}
        {current && (
          <p className="lightbox__caption">
            {current.alt} — {index + 1} / {items.length}
          </p>
        )}
        <button ref={closeBtn} className="lightbox__btn lightbox__close" type="button" aria-label="Fermer" onClick={close} tabIndex={isOpen ? 0 : -1}>
          <Icon name="close" />
        </button>
        {items.length > 1 && (
          <>
            <button className="lightbox__btn lightbox__prev" type="button" aria-label="Photo précédente" onClick={() => go(-1)} tabIndex={isOpen ? 0 : -1}>
              <Icon name="prev" />
            </button>
            <button className="lightbox__btn lightbox__next" type="button" aria-label="Photo suivante" onClick={() => go(1)} tabIndex={isOpen ? 0 : -1}>
              <Icon name="next" />
            </button>
          </>
        )}
      </div>
    </LightboxContext.Provider>
  );
}
