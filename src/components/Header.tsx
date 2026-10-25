import { useState } from 'react';
import { HeartHandshake, Menu, X } from 'lucide-react';
import emsiLogo from '../assets/emsi-logo.webp';
import amjLogo from '../assets/amj-logo.png';

const links = [
  { href: '#club', label: 'Le club' },
  { href: '#actions', label: 'Nos actions' },
  { href: '#caravane', label: 'LAHLAL 2027' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#accueil" onClick={closeMenu} aria-label="Ambitions Jeunes EMSI — Accueil">
          <img src={amjLogo} alt="Logo Ambitions Jeunes EMSI" />
          <span>Ambitions Jeunes <small>EMSI · Depuis 2019</small></span>
        </a>
        <nav className={`header-nav ${open ? 'is-open' : ''}`} id="primary-navigation" aria-label="Navigation principale">
          {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a className="mobile-contribute" href="#soutenir" onClick={closeMenu}><HeartHandshake size={18} /> Contribuer</a>
        </nav>
        <a className="header-cta" href="#soutenir" onClick={closeMenu}><HeartHandshake size={18} /> Contribuer</a>
        <img className="school-logo" src={emsiLogo} alt="École Marocaine des Sciences de l'Ingénieur" />
        <button className="menu-toggle" type="button" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
