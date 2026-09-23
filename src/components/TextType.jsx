import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './TextType.css';

export default function TextType({ text, className = '', typingSpeed = 42, pauseDuration = 2100, deletingSpeed = 24, startOnVisible = false }) {
  const phrases = Array.isArray(text) ? text : [text];
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(!startOnVisible);
  const rootRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!startOnVisible || !rootRef.current) return undefined;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: .1 });
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!cursorRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const tween = gsap.to(cursorRef.current, { opacity: 0, duration: .5, repeat: -1, yoyo: true, ease: 'power2.inOut' });
    return () => tween.kill();
  }, []);

  useEffect(() => {
    if (!visible) return undefined;
    const current = phrases[index] || '';
    const complete = displayed === current;
    const empty = displayed.length === 0;
    const delay = complete && !deleting ? pauseDuration : (deleting ? deletingSpeed : typingSpeed);
    const timer = window.setTimeout(() => {
      if (complete && !deleting) return setDeleting(true);
      if (empty && deleting) {
        setDeleting(false);
        setIndex((value) => (value + 1) % phrases.length);
        return;
      }
      setDisplayed((value) => deleting ? value.slice(0, -1) : current.slice(0, value.length + 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [visible, displayed, deleting, index, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return <span ref={rootRef} className={`text-type ${className}`.trim()} aria-label={phrases.join(' ')}><span className="text-type__content">{displayed}</span><span ref={cursorRef} className="text-type__cursor" aria-hidden="true">|</span></span>;
}
