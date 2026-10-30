import { createElement, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type Variant = 'up' | 'left' | 'right' | 'zoom' | 'clip';

type RevealProps = {
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  [prop: string]: unknown;
};

/** Fait apparaître son contenu en douceur quand il arrive à l'écran. */
export function Reveal({ as = 'div', variant = 'up', delay = 0, className = '', style, children, ...rest }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  return createElement(
    as,
    {
      ...rest,
      ref,
      'data-reveal': variant === 'up' ? '' : variant,
      className: `${className}${inView ? ' is-visible' : ''}`.trim() || undefined,
      style: delay ? ({ ...style, '--d': `${delay}ms` } as CSSProperties) : style,
    },
    children,
  );
}
