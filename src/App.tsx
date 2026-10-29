import { useState } from 'react';
import { ArrowRight, Heart, Mail, MapPin, Phone, Users, CalendarDays, CheckCircle2, Sparkles, Package, Wallet, Handshake, Instagram, MessageCircle, ShieldCheck, Youtube, ExternalLink, Navigation } from 'lucide-react';
import { Header } from './components/Header';
import { caravans, club, currentCaravan } from './data/club';
import afficheLahlal from './assets/affiche-lahlal-2027.jpg';

const whatsappNumber = '212681452315';
const documentaryVideos: Record<number, string> = {
  2024: 's29gX2orHq4',
  2025: 'c9E-9LYmX2Y',
};
const lahlalMapsUrl = 'https://maps.app.goo.gl/X3fcEKqmzpJGudh88';
const lahlalMapSearch = 'Village LAHLAL, Aït Mazigh, Azilal, Maroc';
const lahlalMapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(lahlalMapSearch)}&output=embed`;

const contributionTypes = [
  { title: 'Don financier', description: 'Participer au financement des actions humanitaires.', icon: Wallet },
  { title: 'Don matériel', description: 'Offrir des denrées, vêtements ou couvertures.', icon: Package },
  { title: 'Partenariat / sponsoring', description: 'Accompagner la caravane en tant que partenaire.', icon: Handshake },
  { title: 'Bénévolat', description: 'Proposer son aide à l’organisation de la mission.', icon: Users },
] as const;

export default function App() {
  const [name, setName] = useState('');
  const [type, setType] = useState<string>(contributionTypes[0].title);
  const [message, setMessage] = useState('');
  const emailSubject = `Caravane LAHLAL 2027 — ${type}`;
  const emailBody = [
    'Bonjour Club Ambitions Jeunes EMSI,',
    '',
    'Je vous contacte au sujet de la Caravane LAHLAL 2027.',
    '',
    `Nom : ${name.trim() || 'Non précisé'}`,
    `Type de contribution : ${type}`,
    '',
    'Message :',
    message.trim() || 'Je souhaite contribuer dans votre initiative.',
    '',
    'Cordialement,',
    name.trim(),
  ].join('\n');
  const emailUrl = `mailto:${club.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  return <>
    <Header />
    <main>
      <section className="hero" id="accueil" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow"><Sparkles size={15} aria-hidden="true" /> UNIS POUR FAIRE LA DIFFÉRENCE</p>
            <h1 id="hero-title">Une jeunesse engagée. <em>Une solidarité qui dure.</em></h1>
            <p className="lead">Depuis 2019, les étudiants du Club Ambitions Jeunes EMSI se mobilisent pour aider celles et ceux qui en ont besoin.</p>
            <div className="actions">
              <a className="btn primary" href="#soutenir">Soutenir LAHLAL 2027 <Heart size={18} aria-hidden="true" /></a>
              <a className="btn outline" href="#actions">Découvrir nos actions <ArrowRight size={18} aria-hidden="true" /></a>
            </div>
            <div className="hero-stats" aria-label="Le club en chiffres">
              <span><strong>2019</strong> Création du club</span>
              <span><strong>100</strong> Étudiants membres</span>
              <span><strong>60</strong> Familles ciblées en 2027</span>
            </div>
          </div>
          <aside className="hero-feature" aria-label="Caravane à la une">
            <div className="feature-top"><span className="feature-label"><span className="feature-dot" /> NOTRE MISSION À LA UNE</span><span className="feature-year">2027</span></div>
            <div className="feature-body">
              <span className="feature-kicker">JANVIER 2027 · AZILAL</span>
              <h2>Caravane<br /><em>LAHLAL 2027</em></h2>
              <p>Ensemble, apportons un soutien concret à 60 familles du village LAHLAL.</p>
              <div className="feature-chips"><span><Users size={16} /> 60 familles</span><span><MapPin size={16} /> Aït Mazigh</span></div>
              <a className="feature-link" href="#caravane">Découvrir la mission <ArrowRight size={18} /></a>
            </div>
            <div className="feature-footer"><CheckCircle2 size={18} /> Chaque geste peut faire la différence.</div>
          </aside>
        </div>
      </section>
      <section className="section" id="club"><div className="container"><p className="eyebrow">QUI SOMMES-NOUS ?</p><h2>Un club étudiant, <em>une mission humaine.</em></h2><p className="section-copy">Fondé en 2019, le Club Ambitions Jeunes EMSI (AMJ EMSI) est un club humanitaire composé d'une centaine d'étudiants de l'École Marocaine des Sciences de l'Ingénieur, réunis autour d'une même volonté : venir en aide aux personnes dans le besoin et contribuer à améliorer leur quotidien. Animés par des valeurs de solidarité, de générosité, nous croyons que chaque geste, aussi simple soit-il, peut faire une véritable différence. À travers nos initiatives et nos caravanes humanitaires, nous nous engageons à apporter un soutien concret aux populations qui en ont besoin, tout en favorisant l'esprit de partage, la responsabilité sociale et l'engagement collectif des jeunes. Nous souhaitons également apporter de l'espoir, créer des liens humains et laisser une empreinte positive et durable dans la vie des personnes que nous accompagnons. Pour nous, être membre d'AMJ EMSI, c'est avant tout croire en la force de la jeunesse et agir ensemble pour construire une société plus solidaire et plus humaine.</p></div></section>
      <section className="section muted" id="actions" aria-labelledby="actions-title">
        <div className="container">
          <p className="eyebrow">NOTRE HISTOIRE</p>
          <h2 id="actions-title">Des actions qui <em>laissent une trace.</em></h2>
          <p className="section-copy">Découvrez les documentaires de nos caravanes humanitaires et les actions réalisées sur le terrain.</p>
          <div className="cards documentary-cards">
            {caravans.map((item) => {
              const videoId = documentaryVideos[item.year];
              return (
                <article className="action-card documentary-card" key={item.year}>
                  <div className="documentary-video">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                      title={`Documentaire de la Caravane ${item.date} — Club Ambitions Jeunes EMSI`}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="documentary-content">
                    <div className="documentary-meta"><span className="year">{item.date}</span><span className="documentary-tag"><Youtube size={16} aria-hidden="true"/> DOCUMENTAIRE</span></div>
                    <h3>Caravane {item.date}</h3>
                    <p className="location"><MapPin size={17} aria-hidden="true"/> Région d’{item.region}</p>
                    <p className="documentary-achievement">{item.achievement}</p>
                    <a className="documentary-link" href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
                      Voir sur YouTube <ExternalLink size={17} aria-hidden="true"/>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section" id="caravane" aria-labelledby="caravane-title">
        <div className="container">
          <div className="campaign">
            <div>
              <p className="eyebrow">NOTRE PROCHAINE MISSION</p>
              <h2 id="caravane-title">{currentCaravan.title}</h2>
              <p className="lead">Ensemble, apportons un soutien concret aux familles du village LAHLAL.</p>
              <p>{currentCaravan.goals}</p>
              <div className="campaign-facts">
                <span><CalendarDays size={18}/>{currentCaravan.date}</span>
                <span><Users size={18}/>{currentCaravan.families} familles</span>
                <span><MapPin size={18}/>{currentCaravan.location}</span>
              </div>
              <a className="btn primary" href="#soutenir">Je souhaite contribuer <Heart size={17}/></a>
            </div>
            <div className="campaign-poster"><img src={afficheLahlal} alt="Affiche officielle de la Caravane LAHLAL 2027 — Club Ambitions Jeunes EMSI" loading="lazy" /></div>
          </div>
          <div className="campaign-map-section" aria-labelledby="map-title">
            <div className="campaign-map-heading">
              <div>
                <p className="eyebrow">OÙ SE DÉROULERA NOTRE MISSION ?</p>
                <h3 id="map-title">Retrouvez <em>LAHLAL sur la carte.</em></h3>
                <p><MapPin size={17} aria-hidden="true"/> {currentCaravan.location}</p>
              </div>
              <a className="btn outline map-external-link" href={lahlalMapsUrl} target="_blank" rel="noopener noreferrer">
                Ouvrir l'emplacement sur Google Maps <Navigation size={17} aria-hidden="true"/>
              </a>
            </div>
            <div className="campaign-map-frame">
              <iframe
                title="Recherche Google Maps du village LAHLAL, commune Aït Mazigh, Azilal"
                src={lahlalMapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="map-note">Pour consulter le point partagé par l'équipe, utilisez le bouton Google Maps ci-dessus.</p>
          </div>
        </div>
      </section>
      <section className="section muted solidarity" id="soutenir" aria-labelledby="solidarity-title">
        <div className="container">
          <div className="solidarity-intro">
            <p className="eyebrow">APPEL À LA SOLIDARITÉ · LAHLAL 2027</p>
            <h2 id="solidarity-title">Un petit geste, <em>un grand impact.</em></h2>
            <p className="section-copy">En janvier 2027, notre caravane souhaite apporter une aide concrète à 60 familles du village LAHLAL. Il existe plusieurs façons de nous accompagner.</p>
          </div>
          <div className="contribution-grid">
            {contributionTypes.map(({ title, description, icon: Icon }) => (
              <article className="contribution-card" key={title}>
                <span className="contribution-icon"><Icon size={25} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="solidarity-banner">
            <div><ShieldCheck size={24} aria-hidden="true" /><strong>Des contributions encadrées</strong><p>Pour les virements ou les dons financiers, demandez les coordonnées officielles vérifiées et les modalités de remise au club avant tout paiement.</p></div>
            <a className="btn light" href="#contact">Contacter l’équipe <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container contact-layout">
          <div className="contact-details">
            <p className="eyebrow">PARLONS SOLIDARITÉ</p>
            <h2 id="contact-title">Construisons quelque chose <em>ensemble.</em></h2>
            <p className="section-copy">Une question, une proposition de partenariat ou l’envie de contribuer ? Écrivez-nous directement. Notre équipe pourra vous orienter.</p>
            <div className="contact-methods">
              <a className="contact-method" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Bonjour AMJ EMSI, je souhaite avoir des informations sur la Caravane LAHLAL 2027.')}`} target="_blank" rel="noopener noreferrer"><span><MessageCircle size={22}/></span><span><strong>WhatsApp</strong><small>06 81 45 23 15</small></span><ArrowRight size={18}/></a>
              <a className="contact-method" href={`mailto:${club.email}`}><span><Mail size={22}/></span><span><strong>Adresse e-mail</strong><small>{club.email}</small></span><ArrowRight size={18}/></a>
              <a className="contact-method" href={club.instagram} target="_blank" rel="noopener noreferrer"><span><Instagram size={22}/></span><span><strong>Instagram</strong><small>@amj.emsi</small></span><ArrowRight size={18}/></a>
              <a className="contact-method" href={`tel:+212${club.phones[0].slice(1)}`}><span><Phone size={22}/></span><span><strong>Autre téléphone</strong><small>06 28 03 58 00</small></span><ArrowRight size={18}/></a>
            </div>
          </div>
          <div className="contact-form-card">
            <span className="form-label">CONTACT DIRECT</span>
            <h3>Préparer votre message</h3>
            <p>Remplissez les champs, puis ouvrez votre messagerie pour vérifier et envoyer votre e-mail.</p>
            <form onSubmit={(event) => { event.preventDefault(); window.location.href = emailUrl; }}>
              <label htmlFor="support-name">Votre nom</label>
              <input id="support-name" name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Votre nom ou organisation" maxLength={100} required />
              <label htmlFor="support-type">Je souhaite</label>
              <select id="support-type" name="type" value={type} onChange={(event) => setType(event.target.value)}>
                {contributionTypes.map(({title}) => <option value={title} key={title}>{title}</option>)}
                <option value="Demande d'information">Demander des informations</option>
              </select>
              <label htmlFor="support-message">Votre message <span>(facultatif)</span></label>
              <textarea id="support-message" name="message" rows={5} maxLength={1500} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Expliquez-nous comment vous souhaitez participer…" />
              <button className="btn primary form-submit" type="submit">Préparer mon e-mail <Mail size={17} aria-hidden="true" /></button>
              <p className="form-disclaimer">Aucun message n’est enregistré sur ce site. Votre messagerie s’ouvrira avec un e-mail prérempli ; vous devrez confirmer son envoi.</p>
            </form>
          </div>
        </div>
      </section>
    </main>
    <footer><div className="container">© {new Date().getFullYear()} Club Ambitions Jeunes EMSI · Ensemble pour la solidarité.</div></footer>
  </>;
}
