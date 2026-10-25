export const club = {
  name: 'Club Ambitions Jeunes EMSI',
  shortName: 'AMJ EMSI',
  founded: 2019,
  members: 100,
  mission: 'Agir auprès des personnes dans le besoin et laisser une empreinte positive dans leur vie.',
  email: 'ambitionjeuneemsi.amj@gmail.com',
  instagram: 'https://www.instagram.com/amj.emsi/',
  phones: ['0628035800', '0681452315'],
} as const;

export const caravans = [
  { year: 2024, date: 'Décembre 2024', region: 'Al Haouz', achievement: 'Construction d’un puits' },
  { year: 2025, date: 'Mai 2025', region: 'Al Haouz', achievement: 'Rénovation d’une mosquée et financement d’une Omra pour une personne âgée' },
] as const;

export const currentCaravan = {
  title: 'Caravane LAHLAL 2027',
  date: 'Janvier 2027',
  location: 'Village LAHLAL, commune Aït Mazigh, province d’Azilal',
  families: 60,
  goals: 'Paniers alimentaires, vêtements et couvertures ; projets envisagés de mosquée et de puits, sous réserve des études et autorisations nécessaires.',
} as const;
