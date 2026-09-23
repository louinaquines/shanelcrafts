import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './MaskedHeading.css';

export default function MaskedHeading({ text, src = '', className = '', as: Tag = 'h1', ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const tween = gsap.fromTo(element, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1.05, ease: 'power4.out' });
    return () => tween.kill();
  }, []);
  return <Tag ref={ref} className={`masked-heading ${className}`.trim()} style={src ? { '--masked-image': `url(${src})` } : undefined} {...rest}>{text}</Tag>;
}
