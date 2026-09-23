import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './StaggeredMenu.css';

export default function StaggeredMenu({ items = [], socialItems = [], logoUrl, colors = ['#E8A0B4', '#7D4A5C', '#4A2A3A'], accentColor = '#E8A0B4' }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const layerRefs = useRef([]);
  const itemRefs = useRef([]);
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.set([panelRef.current, ...layerRefs.current], { xPercent: 100 });
    return () => gsap.killTweensOf([panelRef.current, ...layerRefs.current, iconRef.current]);
  }, []);

  useEffect(() => {
    const target = open ? 0 : 100;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduce ? 0 : open ? .62 : .32;
    gsap.to(layerRefs.current, { xPercent: target, duration, stagger: open ? .07 : 0, ease: open ? 'power4.out' : 'power3.in' });
    gsap.to(panelRef.current, { xPercent: target, duration, delay: open ? .16 : 0, ease: open ? 'power4.out' : 'power3.in' });
    gsap.to(iconRef.current, { rotate: open ? 225 : 0, duration: open ? .65 : .3, ease: 'power3.out' });
    if (open && !reduce) gsap.fromTo(itemRefs.current, { yPercent: 120, rotate: 8 }, { yPercent: 0, rotate: 0, duration: .75, delay: .35, stagger: .08, ease: 'power4.out' });
  }, [open]);

  const close = () => setOpen(false);
  return <div className="staggered-menu-shell" style={{ '--sm-accent': accentColor }}>
    <header className="staggered-menu-header">
      <a href="#top" onClick={close} aria-label="Shanel Crafts PH home"><img src={logoUrl} alt="Shanel Crafts PH" /></a>
      <button type="button" className="sm-toggle" aria-expanded={open} aria-controls="staggered-panel" onClick={() => setOpen((value) => !value)}><span>{open ? 'Close' : 'Menu'}</span><i ref={iconRef} aria-hidden="true"><b></b><b></b></i></button>
    </header>
    <div className="sm-prelayers" aria-hidden="true">{colors.map((color, index) => <span key={color} ref={(node) => { layerRefs.current[index] = node; }} style={{ background: color }} />)}</div>
    <aside id="staggered-panel" ref={panelRef} className="staggered-panel" aria-hidden={!open}>
      <nav aria-label="Mobile navigation"><ul>{items.map((item, index) => <li key={item.label} ref={(node) => { itemRefs.current[index] = node; }}><a href={item.link} aria-label={item.ariaLabel} onClick={close}><small>{String(index + 1).padStart(2, '0')}</small>{item.label}</a></li>)}</ul></nav>
      <div className="sm-socials"><span>Follow along</span>{socialItems.map((item) => <a key={item.label} href={item.link} target="_blank" rel="noreferrer">{item.label}</a>)}</div>
    </aside>
  </div>;
}
