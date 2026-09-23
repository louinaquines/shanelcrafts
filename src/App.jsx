import { useEffect, useRef, useState } from 'react';
import './app.css';
import '../styles.css';
import StaggeredMenu from './components/StaggeredMenu.jsx';
import MaskedHeading from './components/MaskedHeading.jsx';
import TextType from './components/TextType.jsx';
import logo from '../assets/s-logo.jpg';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s4 from '../assets/s4.jpg';
import s5 from '../assets/s5.jpg';
import s6 from '../assets/s6.jpg';
import s7 from '../assets/s7.jpg';
import s8 from '../assets/s8.jpg';
import s9 from '../assets/s9.jpg';
import s10 from '../assets/s10.jpg';
import s11 from '../assets/s11.jpg';
import s12 from '../assets/s12.jpg';
import s13 from '../assets/s13.jpg';
import s14 from '../assets/s14.jpg';
import s15 from '../assets/s15.jpg';
import s16 from '../assets/s16.jpg';
import s17 from '../assets/s17.jpg';

const facebook = 'https://www.facebook.com/profile.php?id=61556467323059';
const instagram = 'https://www.instagram.com/shanelcrafts.ph/';
const menuItems = [
  { label: 'Our creations', ariaLabel: 'See our creations', link: '#gama' },
  { label: 'How to order', ariaLabel: 'Learn how to order', link: '#order' },
  { label: 'Our story', ariaLabel: 'Learn about Shanel Crafts', link: '#story' },
  { label: 'Message us', ariaLabel: 'Message Shanel Crafts on Facebook', link: facebook }
];
const socialItems = [{ label: 'Facebook', link: facebook }, { label: 'Instagram', link: instagram }];
const divider = <div className="floral-divider" aria-hidden="true"><span>✿</span><i></i><span className="divider-center">❀</span><i></i><span>✿</span></div>;
const signatureCollections = {
  fuzzy: {
    label: 'Fuzzy wires',
    title: 'Fuzzy-wire bouquets',
    description: 'Our signature handmade flowers, shaped and arranged by hand in colors made for your favorite people.',
    items: [[s2, 'Blue & lavender'], [s4, 'Pink garden mix'], [s5, 'Full color mix'], [s6, 'Blue bouquet'], [s7, 'Sunflower bouquet'], [s8, 'Warm sunflower mix'], [s15, 'Elegant bouquet'], [s17, 'Garden color mix']]
  },
  garland: {
    label: 'Money garland',
    title: 'Money garlands',
    description: 'Colorful money garlands for graduations, celebrations, and meaningful milestones.',
    items: [[s14, 'Graduation money garlands']]
  },
  money: {
    label: 'Money bouquet',
    title: 'Money bouquets',
    description: 'A thoughtful bouquet with a little extra surprise, arranged for birthdays and special celebrations.',
    items: [[s10, 'Birthday money bouquet'], [s11, 'Orange money bouquet'], [s12, 'Pink money bouquet'], [s16, 'Blue money bouquet']]
  }
};

function FloralSection({ className = '', children, ...props }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: .12, rootMargin: '0px 0px -12% 0px' });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className={`section-pad reveal-section ${visible ? 'is-visible' : ''} ${className}`.trim()} {...props}>{divider}{children}</section>;
}

function SignatureCollection() {
  const [active, setActive] = useState('fuzzy');
  const collection = signatureCollections[active];
  return <FloralSection className="signature" id="gama" aria-labelledby="signature-title">
    <div className="signature-heading"><div><p className="eyebrow">Our signature collection</p><h2 id="signature-title">Made for meaningful moments.</h2></div><p>Explore the handmade pieces Shanel Crafts creates for birthdays, graduations, surprises, and every celebration worth remembering.</p></div>
    <div className="signature-tabs" role="tablist" aria-label="Product categories">{Object.entries(signatureCollections).map(([key, item]) => <button key={key} className={`signature-tab ${active === key ? 'is-active' : ''}`} type="button" role="tab" aria-selected={active === key} onClick={() => setActive(key)}>{item.label}</button>)}</div>
    <div className="signature-showcase"><div className="signature-copy"><p className="eyebrow">{collection.label}</p><h3>{collection.title}</h3><p>{collection.description}</p><a className="text-link" href={facebook} target="_blank" rel="noreferrer">Ask what we can create <span aria-hidden="true">↗</span></a></div><div className="signature-grid">{collection.items.map(([image, label], index) => <figure className={index === 0 ? 'is-featured' : ''} key={label}><img src={image} alt={label} /><figcaption>{label}</figcaption></figure>)}</div></div>
  </FloralSection>;
}

function App() {
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    document.head.appendChild(favicon);
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const context = canvas.getContext('2d');
      context.beginPath();
      context.arc(32, 32, 30, 0, Math.PI * 2);
      context.closePath();
      context.clip();
      context.drawImage(image, 2, 2, 60, 60);
      favicon.href = canvas.toDataURL('image/png');
    };
    image.src = logo;
  }, []);

  return <>
    <StaggeredMenu logoUrl={logo} items={menuItems} socialItems={socialItems} />
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-topbar"><a className="hero-brand" href="#top" aria-label="Shanel Crafts PH home"><img src={logo} alt="Shanel Crafts logo" /><span>Shanel Crafts <small>PH</small></span></a></div>
        <div className="hero-art"><img src={s1} alt="Shanel Crafts handmade bouquet display at a market stall" /></div>
        <div className="hero-copy">
          <p className="eyebrow">Handmade in Cebu</p>
          <MaskedHeading as="h1" id="hero-title" className="hero-title" text="Flowers that never wilt." />
          <p className="hero-lede"><TextType text={["Handmade bouquets and keepsakes for birthdays, graduations, anniversaries, and every meaningful moment.", "Thoughtful gifts made to celebrate the people and occasions that matter most to you.", "Beautiful handmade pieces, carefully created in Cebu and made to last."]} typingSpeed={34} deletingSpeed={20} pauseDuration={2400} /></p>
          <div className="hero-actions"><a className="button button-primary" href={facebook} target="_blank" rel="noreferrer">Message us on Facebook <span aria-hidden="true">↗</span></a><a className="button button-outline" href={instagram} target="_blank" rel="noreferrer">Follow us on Instagram <span aria-hidden="true">↗</span></a></div>
          <a className="catalog-link" href="#gama">See our creations <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <FloralSection className="promise" id="story" aria-labelledby="promise-title"><div className="section-intro"><p className="eyebrow">Why Shanel Crafts?</p><h2 id="promise-title">A small gift,<br /><em>a lasting joy.</em></h2></div><div className="promise-grid"><article><span className="number">01</span><h3>Made to last</h3><p>Handmade fuzzy-wire flowers you can keep, enjoy, and look back on for years.</p></article><article><span className="number">02</span><h3>Made for you</h3><p>Choose the colors, style, ribbon, and message that fit the person you are gifting.</p></article><article><span className="number">03</span><h3>For every occasion</h3><p>Birthdays, graduations, anniversaries, surprises — every gift gets a personal touch.</p></article></div></FloralSection>

      <SignatureCollection />

      <FloralSection className="more" aria-labelledby="more-title"><div className="section-heading"><div><p className="eyebrow">More from the shop</p><h2 id="more-title">A bouquet for every kind of moment</h2></div><p>From fuzzy-wire flowers to money bouquets and graduation garlands, browse a few of the pieces we love making.</p></div><div className="carousel" aria-label="Bouquet gallery"><div className="carousel-track">{[[s2,'Blue & lavender'],[s4,'Pink garden mix'],[s5,'Full color mix'],[s6,'Blue bouquet'],[s7,'Sunflower bouquet'],[s8,'Warm sunflower mix'],[s10,'Birthday money bouquet'],[s11,'Orange money bouquet'],[s12,'Pink money bouquet'],[s15,'Elegant bouquet'],[s16,'Blue money bouquet'],[s17,'Garden color mix']].map(([image, label]) => <figure key={`${label}-one`}><img src={image} alt={label} /><figcaption>{label}</figcaption></figure>)}<div className="carousel-clone" aria-hidden="true">{[[s2,'Blue & lavender'],[s4,'Pink garden mix'],[s5,'Full color mix'],[s6,'Blue bouquet'],[s7,'Sunflower bouquet'],[s8,'Warm sunflower mix'],[s10,'Birthday money bouquet'],[s11,'Orange money bouquet'],[s12,'Pink money bouquet'],[s15,'Elegant bouquet'],[s16,'Blue money bouquet'],[s17,'Garden color mix']].map(([image, label]) => <figure key={`${label}-two`}><img src={image} alt="" /><figcaption>{label}</figcaption></figure>)}</div></div></div></FloralSection>

      <FloralSection className="order" id="order" aria-labelledby="order-title"><div className="order-copy"><p className="eyebrow">Ready to order?</p><h2 id="order-title">Let’s create your gift.</h2><p>Ordering is easy. Message us with the occasion, preferred colors, and what you would like us to make.</p><div className="order-actions"><a className="button button-primary" href={facebook} target="_blank" rel="noreferrer">Message us on Facebook <span aria-hidden="true">↗</span></a><a className="button button-light" href={instagram} target="_blank" rel="noreferrer">Follow us on Instagram <span aria-hidden="true">↗</span></a></div></div><ol className="steps"><li><span>1</span><div><h3>Send us a message</h3><p>Use Facebook Messenger or Instagram DM — whichever is more convenient.</p></div></li><li><span>2</span><div><h3>Share your idea</h3><p>Tell us the occasion, colors, size, wording, and deadline.</p></div></li><li><span>3</span><div><h3>Finalize the details</h3><p>We’ll send your quote and details for payment, pickup, or delivery.</p></div></li></ol></FloralSection>

      <FloralSection className="visit" aria-labelledby="visit-title"><div className="visit-image"><img src={s17} alt="Colorful handmade fuzzy-wire bouquet outdoors" /></div><div><p className="eyebrow">Made for your moments</p><h2 id="visit-title">From our little craft table to your special moment.</h2><p>Every bouquet is made with care, from the first fuzzy-wire flower to the final ribbon. Follow us on Facebook and Instagram for new designs and updates.</p><div className="social-links"><a href={facebook} target="_blank" rel="noreferrer">Facebook Messenger <span>↗</span></a><a href={instagram} target="_blank" rel="noreferrer">Instagram <span>↗</span></a></div></div></FloralSection>
    </main>
    <footer><a className="brand" href="#top"><img src={logo} alt="" /><span>Shanel Crafts <small>PH</small></span></a><p>Handmade with love · Est. 2024 · Cebu</p><a href="#top" className="back-top">Back to top ↑</a></footer>
  </>;
}

export default App;
