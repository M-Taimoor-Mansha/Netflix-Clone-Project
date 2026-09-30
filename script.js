/**
 * NETFLIX WEB CLONE - MASTER SCRIPT
 * Comprehensive Movie Catalog (117+ titles across 13 distinct categories),
 * Interactive Hero Billboard with Rotating Features, Dynamic Swiper Sliders,
 * Netflix Subnav Category Filter Bar, Genre Dropdown & Category Pills,
 * Layout View Switcher (Carousels vs Responsive Netflix Grid),
 * Live Search Engine, Detail Modal with Category-Matching "More Like This",
 * Trailer Player, My List Persistence & Web Audio API Netflix 'Ta-Dum'.
 */

// =========================================================================
// 1. COMPREHENSIVE MOVIE & SHOW DATASET (117+ TITLES ACROSS 13 CATEGORIES)
// =========================================================================
const movieDatabase = [
  {
    "id": "game-of-thrones",
    "title": "Game of Thrones",
    "category": "webseries",
    "categoryName": "Famous TV Series & Binge Shows",
    "backdrop": "https://image.tmdb.org/t/p/w1280/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    "rating": "9.2",
    "match": "99% Match",
    "year": "2019",
    "ageRating": "TV-MA",
    "duration": "8 Seasons",
    "quality": "4K Ultra HD",
    "description": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.",
    "cast": [
      "Emilia Clarke",
      "Kit Harington",
      "Peter Dinklage",
      "Lena Headey"
    ],
    "genres": [
      "Fantasy",
      "Drama",
      "Epic",
      "War"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/bjqEWgDVPe0?autoplay=1"
  },
  {
    "id": "money-heist",
    "title": "Money Heist",
    "category": "webseries",
    "categoryName": "Famous TV Series & Binge Shows",
    "backdrop": "https://image.tmdb.org/t/p/w1280/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/mnyFsIbP9CzFSRuVXkT0EvPRIw4.jpg",
    "rating": "8.2",
    "match": "97% Match",
    "year": "2021",
    "ageRating": "TV-MA",
    "duration": "5 Parts",
    "quality": "4K Ultra HD",
    "description": "A criminal mastermind who goes by \"The Professor\" recruits a group of thieves to carry out the largest heist in Spanish history—stealing billions from the Royal Mint of Spain.",
    "cast": [
      "Álvaro Morte",
      "Úrsula Corberó",
      "Itziar Ituño",
      "Pedro Alonso"
    ],
    "genres": [
      "Crime",
      "Thriller",
      "Heist",
      "Drama"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/htMvMPDzYGk?autoplay=1"
  },
  {
    "id": "breaking-bad-ws",
    "title": "Breaking Bad",
    "category": "webseries",
    "categoryName": "Famous TV Series & Binge Shows",
    "backdrop": "https://image.tmdb.org/t/p/w1280/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/anFx9aTOOYqgS3v7x3R84Kz67ly.jpg",
    "rating": "9.5",
    "match": "99% Match",
    "year": "2013",
    "ageRating": "TV-MA",
    "duration": "5 Seasons",
    "quality": "4K Ultra HD",
    "description": "A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling the purest crystal meth.",
    "cast": [
      "Bryan Cranston",
      "Aaron Paul",
      "Anna Gunn",
      "Giancarlo Esposito"
    ],
    "genres": [
      "Crime",
      "Drama",
      "Thriller",
      "Gritty"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/HhesaQXLuRY?autoplay=1"
  },
  {
    "id": "squid-game-ws",
    "title": "Squid Game",
    "category": "webseries",
    "categoryName": "Famous TV Series & Binge Shows",
    "backdrop": "https://image.tmdb.org/t/p/w1280/2meX1nMdScFOoV4370rqHWKmXhY.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg",
    "rating": "8.0",
    "match": "98% Match",
    "year": "2024",
    "ageRating": "TV-MA",
    "duration": "2 Seasons",
    "quality": "4K Ultra HD",
    "description": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    "cast": [
      "Lee Jung-jae",
      "Park Hae-soo",
      "Wi Ha-jun",
      "Jung Ho-yeon"
    ],
    "genres": [
      "Thriller",
      "Suspense",
      "Drama",
      "Psychological"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/oqxAJKy0ii4?autoplay=1"
  },
  {
    "id": "stranger-things-ws",
    "title": "Stranger Things",
    "category": "webseries",
    "categoryName": "Famous TV Series & Binge Shows",
    "backdrop": "https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    "rating": "8.7",
    "match": "98% Match",
    "year": "2024",
    "ageRating": "TV-14",
    "duration": "4 Seasons",
    "quality": "4K Ultra HD",
    "description": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl with telekinetic powers.",
    "cast": [
      "Millie Bobby Brown",
      "Finn Wolfhard",
      "Winona Ryder",
      "David Harbour"
    ],
    "genres": [
      "Sci-Fi",
      "Horror",
      "Supernatural",
      "Nostalgic"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1"
  },
  {
    "id": "wednesday-ws",
    "title": "Wednesday",
    "category": "webseries",
    "categoryName": "Famous TV Series & Binge Shows",
    "backdrop": "https://image.tmdb.org/t/p/w1280/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    "rating": "8.1",
    "match": "96% Match",
    "year": "2023",
    "ageRating": "TV-14",
    "duration": "1 Season",
    "quality": "4K Ultra HD",
    "description": "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    "cast": [
      "Jenna Ortega",
      "Gwendoline Christie",
      "Riki Lindhome",
      "Christina Ricci"
    ],
    "genres": [
      "Mystery",
      "Dark Comedy",
      "Supernatural",
      "Fantasy"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/Di310BC8062?autoplay=1"
  },
  {
    "id": "witcher-ws",
    "title": "The Witcher",
    "category": "webseries",
    "categoryName": "Famous TV Series & Binge Shows",
    "backdrop": "https://image.tmdb.org/t/p/w1280/foGkPxpw9h8zln81j63mix5B7m8.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/AoGsDM02UVt0npBA8OvpDcZbaMi.jpg",
    "rating": "8.1",
    "match": "95% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "3 Seasons",
    "quality": "4K Ultra HD",
    "description": "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    "cast": [
      "Henry Cavill",
      "Anya Chalotra",
      "Freya Allan",
      "Joey Batey"
    ],
    "genres": [
      "Fantasy",
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/ndl1W4holtE?autoplay=1"
  },
  {
    "id": "the-boys-ws",
    "title": "The Boys",
    "category": "webseries",
    "categoryName": "Famous TV Series & Binge Shows",
    "backdrop": "https://image.tmdb.org/t/p/w1280/mGVrXeIjyecj6TKmwPVpHkttX7b.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISKAngskL6R.jpg",
    "rating": "8.7",
    "match": "97% Match",
    "year": "2024",
    "ageRating": "TV-MA",
    "duration": "4 Seasons",
    "quality": "4K Ultra HD",
    "description": "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers in this dark, wickedly funny satire of the superhero genre.",
    "cast": [
      "Karl Urban",
      "Jack Quaid",
      "Antony Starr",
      "Erin Moriarty"
    ],
    "genres": [
      "Action",
      "Dark Comedy",
      "Superhero",
      "Satire"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/tpQGMhPcMkI?autoplay=1"
  },
  {
    "id": "house-of-dragon",
    "title": "House of the Dragon",
    "category": "webseries",
    "categoryName": "Famous TV Series & Binge Shows",
    "backdrop": "https://image.tmdb.org/t/p/w1280/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/t9nyF3r0WAlJ7Kr6xcRYI4jr9jm.jpg",
    "rating": "8.5",
    "match": "96% Match",
    "year": "2024",
    "ageRating": "TV-MA",
    "duration": "2 Seasons",
    "quality": "4K Ultra HD",
    "description": "The story of House Targaryen set 200 years before Game of Thrones, with fire-breathing dragons and a battle for the Iron Throne that divides a family.",
    "cast": [
      "Paddy Considine",
      "Matt Smith",
      "Olivia Cooke",
      "Emma D'Arcy"
    ],
    "genres": [
      "Fantasy",
      "Drama",
      "Dragons",
      "Epic"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/DotnJ7tTA34?autoplay=1"
  },
  {
    "id": "peaky-blinders-ws",
    "title": "Peaky Blinders",
    "category": "webseries",
    "categoryName": "Famous TV Series & Binge Shows",
    "backdrop": "https://image.tmdb.org/t/p/w1280/dzq83RHwQcnP6WGJ6YkenIqeaa5.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    "rating": "8.8",
    "match": "96% Match",
    "year": "2022",
    "ageRating": "TV-MA",
    "duration": "6 Seasons",
    "quality": "4K Ultra HD",
    "description": "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    "cast": [
      "Cillian Murphy",
      "Paul Anderson",
      "Helen McCrory",
      "Tom Hardy"
    ],
    "genres": [
      "Period Piece",
      "Crime",
      "Drama",
      "Gritty"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/oVzVdvGIC7U?autoplay=1"
  },
  {
    "id": "ozark-ws",
    "title": "Ozark",
    "category": "webseries",
    "categoryName": "Famous TV Series & Binge Shows",
    "backdrop": "https://image.tmdb.org/t/p/w1280/aatG9iVAUL7U7OyFEmupESpOrD2.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fzw6rE1Pvi4BIXF6ET.jpg",
    "rating": "8.5",
    "match": "95% Match",
    "year": "2022",
    "ageRating": "TV-MA",
    "duration": "4 Seasons",
    "quality": "4K Ultra HD",
    "description": "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
    "cast": [
      "Jason Bateman",
      "Laura Linney",
      "Sofia Hublitz",
      "Julia Garner"
    ],
    "genres": [
      "Crime",
      "Thriller",
      "Suspenseful",
      "Dark"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/5hAXVqrljbs?autoplay=1"
  },
  {
    "id": "narcos-ws",
    "title": "Narcos",
    "category": "webseries",
    "categoryName": "Famous TV Series & Binge Shows",
    "backdrop": "https://image.tmdb.org/t/p/w1280/y9ekzkPFmWSqUU3Kj0wHmYUM8qu.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    "rating": "8.8",
    "match": "97% Match",
    "year": "2017",
    "ageRating": "TV-MA",
    "duration": "3 Seasons",
    "quality": "4K Ultra HD",
    "description": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    "cast": [
      "Wagner Moura",
      "Pedro Pascal",
      "Boyd Holbrook",
      "Alberto Ammann"
    ],
    "genres": [
      "Crime",
      "Biography",
      "Gritty",
      "Addictive"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/xl8zdCY-abw?autoplay=1"
  },
  {
    "id": "la-la-land",
    "title": "La La Land",
    "category": "romance",
    "categoryName": "Romance & Romantic Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/mSDsSDwaP3E7dEfUPWy4J0djt62.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    "rating": "8.0",
    "match": "97% Match",
    "year": "2016",
    "ageRating": "PG-13",
    "duration": "2h 08m",
    "quality": "4K Ultra HD",
    "description": "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    "cast": [
      "Ryan Gosling",
      "Emma Stone",
      "John Legend",
      "Rosemarie DeWitt"
    ],
    "genres": [
      "Romance",
      "Musical",
      "Drama",
      "Dreamy"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/0pdqf4P9MB8?autoplay=1"
  },
  {
    "id": "titanic",
    "title": "Titanic",
    "category": "romance",
    "categoryName": "Romance & Romantic Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/kHXEpyfl6zqn8a6YuU4pqlMnNI.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "rating": "7.9",
    "match": "97% Match",
    "year": "1997",
    "ageRating": "PG-13",
    "duration": "3h 14m",
    "quality": "4K Ultra HD",
    "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "cast": [
      "Leonardo DiCaprio",
      "Kate Winslet",
      "Billy Zane",
      "Kathy Bates"
    ],
    "genres": [
      "Romance",
      "Drama",
      "Epic",
      "Disaster"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/CHekzSiZjrY?autoplay=1"
  },
  {
    "id": "pride-prejudice",
    "title": "Pride & Prejudice",
    "category": "romance",
    "categoryName": "Romance & Romantic Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/bV0KCgBUmMZqAeGmx4LKqiCQpTj.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/bV0KCgBUmMZqAeGmx4LKqiCQpTj.jpg",
    "rating": "7.8",
    "match": "94% Match",
    "year": "2005",
    "ageRating": "PG",
    "duration": "2h 07m",
    "quality": "4K Ultra HD",
    "description": "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But is Darcy's pride really behind all her problems with him?",
    "cast": [
      "Keira Knightley",
      "Matthew Macfadyen",
      "Brenda Blethyn",
      "Donald Sutherland"
    ],
    "genres": [
      "Romance",
      "Period Drama",
      "Classic",
      "Witty"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/1dSHEz7QK2w?autoplay=1"
  },
  {
    "id": "bridgerton",
    "title": "Bridgerton",
    "category": "romance",
    "categoryName": "Romance & Romantic Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
    "rating": "7.3",
    "match": "94% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "3 Seasons",
    "quality": "4K Ultra HD",
    "description": "Wealth, lust and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.",
    "cast": [
      "Adjoa Andoh",
      "Jonathan Bailey",
      "Luke Newton",
      "Simone Ashley"
    ],
    "genres": [
      "Romance",
      "Period Drama",
      "Scandal",
      "Passion"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/gpv7ayf_tyE?autoplay=1"
  },
  {
    "id": "the-notebook",
    "title": "The Notebook",
    "category": "romance",
    "categoryName": "Romance & Romantic Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/qom1SZSENdmHFNZBXbtLqCybmEG.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/rNzQyW4f3PhAYMm6qWxSzHFCBvS.jpg",
    "rating": "7.8",
    "match": "95% Match",
    "year": "2004",
    "ageRating": "PG-13",
    "duration": "2h 03m",
    "quality": "HD",
    "description": "A young couple falls in love in the 1940s but find themselves separated by their social differences. They are then reunited years later when the now-married Allie remembers their passionate romance.",
    "cast": [
      "Ryan Gosling",
      "Rachel McAdams",
      "James Garner",
      "Gena Rowlands"
    ],
    "genres": [
      "Romance",
      "Drama",
      "Tearjerker",
      "Classic"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/yZGbSa-FQUI?autoplay=1"
  },
  {
    "id": "to-all-boys",
    "title": "To All the Boys I've Loved Before",
    "category": "romance",
    "categoryName": "Romance & Romantic Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/sOHnOGsBfFbdAbHqNHyVdlRHNXA.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/qFHzGDmFmYAYP1Y4lc0N3L3TBUF.jpg",
    "rating": "7.0",
    "match": "92% Match",
    "year": "2018",
    "ageRating": "TV-G",
    "duration": "1h 39m",
    "quality": "4K Ultra HD",
    "description": "A teenage girl's secret love letters are mysteriously mailed out, forcing her to navigate the consequences with the boys she once had crushes on.",
    "cast": [
      "Lana Condor",
      "Noah Centineo",
      "Janel Parrish",
      "Anna Cathcart"
    ],
    "genres": [
      "Romance",
      "Teen",
      "Comedy",
      "Heartwarming"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/SzNDoTNLrxo?autoplay=1"
  },
  {
    "id": "about-time",
    "title": "About Time",
    "category": "romance",
    "categoryName": "Romance & Romantic Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/vT6gR3eHHEjShuuS1LyITSjMjVO.jpg",
    "rating": "7.8",
    "match": "96% Match",
    "year": "2013",
    "ageRating": "R",
    "duration": "2h 03m",
    "quality": "HD",
    "description": "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his past. He decides to use this power to find love.",
    "cast": [
      "Domhnall Gleeson",
      "Rachel McAdams",
      "Bill Nighy",
      "Margot Robbie"
    ],
    "genres": [
      "Romance",
      "Sci-Fi",
      "Heartfelt",
      "Time-Travel"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/O0OD4lRK5VQ?autoplay=1"
  },
  {
    "id": "crazy-rich-asians",
    "title": "Crazy Rich Asians",
    "category": "romance",
    "categoryName": "Romance & Romantic Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/3lkFLFJkuEiGkORJxdpkQigzYuq.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/5rhtCI5O1Knn9Q0kVbdPCPnD1YH.jpg",
    "rating": "6.9",
    "match": "93% Match",
    "year": "2018",
    "ageRating": "PG-13",
    "duration": "2h 00m",
    "quality": "HD",
    "description": "This contemporary romantic comedy, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend Nick's family and discovers his family is among the richest in the world.",
    "cast": [
      "Constance Wu",
      "Henry Golding",
      "Michelle Yeoh",
      "Gemma Chan"
    ],
    "genres": [
      "Romance",
      "Comedy",
      "Glamorous",
      "Cultural"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/RBRG_9gCZsE?autoplay=1"
  },
  {
    "id": "stranger-things",
    "title": "Stranger Things",
    "category": "trending",
    "categoryName": "Trending Now",
    "backdrop": "https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    "rating": "8.7",
    "match": "98% Match",
    "year": "2024",
    "ageRating": "TV-14",
    "duration": "4 Seasons",
    "quality": "4K Ultra HD",
    "description": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl with telekinetic powers.",
    "cast": [
      "Millie Bobby Brown",
      "Finn Wolfhard",
      "Winona Ryder",
      "David Harbour"
    ],
    "genres": [
      "Sci-Fi",
      "Horror",
      "Supernatural",
      "Nostalgic"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1"
  },
  {
    "id": "dune-part-two",
    "title": "Dune: Part Two",
    "category": "trending",
    "categoryName": "Trending Now",
    "backdrop": "https://image.tmdb.org/t/p/w1280/zRKQW58MBEY078AxkHxEJzUskCl.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/v1tRXZ4JtD2Iv6fjkPvT4GiwslV.jpg",
    "rating": "8.6",
    "match": "97% Match",
    "year": "2024",
    "ageRating": "PG-13",
    "duration": "2h 46m",
    "quality": "4K Ultra HD",
    "description": "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family, facing a choice between love and the fate of the universe.",
    "cast": [
      "Timothée Chalamet",
      "Zendaya",
      "Rebecca Ferguson",
      "Javier Bardem"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure",
      "Epic",
      "Drama"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/Way9Dexny3w?autoplay=1"
  },
  {
    "id": "wednesday",
    "title": "Wednesday",
    "category": "trending",
    "categoryName": "Trending Now",
    "backdrop": "https://image.tmdb.org/t/p/w1280/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    "rating": "8.1",
    "match": "96% Match",
    "year": "2023",
    "ageRating": "TV-14",
    "duration": "1 Season",
    "quality": "4K Ultra HD",
    "description": "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    "cast": [
      "Jenna Ortega",
      "Gwendoline Christie",
      "Riki Lindhome",
      "Christina Ricci"
    ],
    "genres": [
      "Mystery",
      "Dark Comedy",
      "Supernatural",
      "Fantasy"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/Di310BC8062?autoplay=1"
  },
  {
    "id": "oppenheimer",
    "title": "Oppenheimer",
    "category": "trending",
    "categoryName": "Trending Now",
    "backdrop": "https://image.tmdb.org/t/p/w1280/7CENyUim29IEsaJhUxIGymCRvPu.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "rating": "8.9",
    "match": "99% Match",
    "year": "2023",
    "ageRating": "R",
    "duration": "3h 00m",
    "quality": "4K Ultra HD",
    "description": "The pulse-pounding story of American theoretical physicist J. Robert Oppenheimer, director of the Manhattan Project and father of the atomic bomb.",
    "cast": [
      "Cillian Murphy",
      "Emily Blunt",
      "Matt Damon",
      "Robert Downey Jr."
    ],
    "genres": [
      "Biography",
      "Drama",
      "Historical",
      "Intense"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/uYPbbksJxIg?autoplay=1"
  },
  {
    "id": "the-last-of-us",
    "title": "The Last of Us",
    "category": "trending",
    "categoryName": "Trending Now",
    "backdrop": "https://image.tmdb.org/t/p/w1280/lY2DhbA7Hy44fAKddr06UrXWWaQ.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg",
    "rating": "8.8",
    "match": "95% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "1 Season",
    "quality": "4K Ultra HD",
    "description": "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity’s last hope.",
    "cast": [
      "Pedro Pascal",
      "Bella Ramsey",
      "Gabriel Luna",
      "Anna Torv"
    ],
    "genres": [
      "Action",
      "Adventure",
      "Post-Apocalyptic",
      "Emotional"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/uLtkt8BonwM?autoplay=1"
  },
  {
    "id": "spider-verse",
    "title": "Spider-Man: Across the Spider-Verse",
    "category": "trending",
    "categoryName": "Trending Now",
    "backdrop": "https://image.tmdb.org/t/p/w1280/kVd3a9YeLGkoeR50jGEXM6EqseS.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "rating": "8.7",
    "match": "99% Match",
    "year": "2023",
    "ageRating": "PG",
    "duration": "2h 20m",
    "quality": "4K Ultra HD",
    "description": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    "cast": [
      "Shameik Moore",
      "Hailee Steinfeld",
      "Oscar Isaac",
      "Daniel Kaluuya"
    ],
    "genres": [
      "Animation",
      "Action",
      "Sci-Fi",
      "Superhero"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/cqGjhVJWtEg?autoplay=1"
  },
  {
    "id": "cyberpunk-edgerunners",
    "title": "Cyberpunk: Edgerunners",
    "category": "trending",
    "categoryName": "Trending Now",
    "backdrop": "https://image.tmdb.org/t/p/w1280/3UbHGmu9vIMSC5uNfnGt7DjetqT.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/7jSWOc6jWSw5hZ78HB8Hw3pJxuk.jpg",
    "rating": "8.3",
    "match": "94% Match",
    "year": "2022",
    "ageRating": "TV-MA",
    "duration": "1 Season",
    "quality": "4K Ultra HD",
    "description": "In a dystopia riddled with corruption and cybernetic implants, a talented street kid striving to survive chooses to become an edgerunner mercenary.",
    "cast": [
      "KENN",
      "Aoi Yuuki",
      "Hiroki Touchi",
      "Michiko Kaiden"
    ],
    "genres": [
      "Anime",
      "Sci-Fi",
      "Cyberpunk",
      "High-Octane"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/JtqIas3bYhg?autoplay=1"
  },
  {
    "id": "interstellar",
    "title": "Interstellar",
    "category": "trending",
    "categoryName": "Trending Now",
    "backdrop": "https://image.tmdb.org/t/p/w1280/8sNiAPPYU14PUepFNeSNGUTiHW.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    "rating": "8.7",
    "match": "98% Match",
    "year": "2014",
    "ageRating": "PG-13",
    "duration": "2h 49m",
    "quality": "4K Ultra HD",
    "description": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    "cast": [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure",
      "Mind-Bending",
      "Emotional"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1"
  },
  {
    "id": "squid-game",
    "title": "Squid Game",
    "category": "top10",
    "rank": 1,
    "categoryName": "Top 10 in Movies & TV Today",
    "backdrop": "https://image.tmdb.org/t/p/w1280/2meX1nMdScFOoV4370rqHWKmXhY.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg",
    "rating": "8.0",
    "match": "99% Match",
    "year": "2024",
    "ageRating": "TV-MA",
    "duration": "2 Seasons",
    "quality": "4K Ultra HD",
    "description": "Hundreds of cash-strapped players accept a strange invitation to compete in children’s games. Inside, a tempting prize awaits with deadly high stakes.",
    "cast": [
      "Lee Jung-jae",
      "Park Hae-soo",
      "Wi Ha-jun",
      "Jung Ho-yeon"
    ],
    "genres": [
      "Thriller",
      "Suspenseful",
      "Drama",
      "Psychological"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/oqxAJKy0ii4?autoplay=1"
  },
  {
    "id": "the-witcher",
    "title": "The Witcher",
    "category": "top10",
    "rank": 2,
    "categoryName": "Top 10 in Movies & TV Today",
    "backdrop": "https://image.tmdb.org/t/p/w1280/foGkPxpw9h8zln81j63mix5B7m8.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/AoGsDM02UVt0npBA8OvpDcZbaMi.jpg",
    "rating": "8.1",
    "match": "95% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "3 Seasons",
    "quality": "4K Ultra HD",
    "description": "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    "cast": [
      "Henry Cavill",
      "Anya Chalotra",
      "Freya Allan",
      "Joey Batey"
    ],
    "genres": [
      "Fantasy",
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/ndl1W4holtE?autoplay=1"
  },
  {
    "id": "breaking-bad",
    "title": "Breaking Bad",
    "category": "top10",
    "rank": 3,
    "categoryName": "Top 10 in Movies & TV Today",
    "backdrop": "https://image.tmdb.org/t/p/w1280/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/anFx9aTOOYqgS3v7x3R84Kz67ly.jpg",
    "rating": "9.5",
    "match": "99% Match",
    "year": "2013",
    "ageRating": "TV-MA",
    "duration": "5 Seasons",
    "quality": "4K Ultra HD",
    "description": "A high school chemistry teacher dying of cancer teams with a former student to secure his family’s future by manufacturing and selling the purest crystal meth.",
    "cast": [
      "Bryan Cranston",
      "Aaron Paul",
      "Anna Gunn",
      "Giancarlo Esposito"
    ],
    "genres": [
      "Crime",
      "Drama",
      "Gritty",
      "Suspenseful"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/HhesaQXLuRY?autoplay=1"
  },
  {
    "id": "avatar-way-of-water",
    "title": "Avatar: The Way of Water",
    "category": "top10",
    "rank": 4,
    "categoryName": "Top 10 in Movies & TV Today",
    "backdrop": "https://image.tmdb.org/t/p/w1280/kJsPVzdyBrYHLomuNv5SJDXUQ2f.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "rating": "7.6",
    "match": "92% Match",
    "year": "2023",
    "ageRating": "PG-13",
    "duration": "3h 12m",
    "quality": "4K Ultra HD",
    "description": "Jake Sully lives with his newfound family on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri.",
    "cast": [
      "Sam Worthington",
      "Zoe Saldana",
      "Sigourney Weaver",
      "Stephen Lang"
    ],
    "genres": [
      "Sci-Fi",
      "Action",
      "Visual Masterpiece",
      "Adventure"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1"
  },
  {
    "id": "the-batman",
    "title": "The Batman",
    "category": "top10",
    "rank": 5,
    "categoryName": "Top 10 in Movies & TV Today",
    "backdrop": "https://image.tmdb.org/t/p/w1280/rvtdN5XkWAfGX6xDuPL6yYS2seK.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "rating": "7.8",
    "match": "93% Match",
    "year": "2022",
    "ageRating": "PG-13",
    "duration": "2h 56m",
    "quality": "4K Ultra HD",
    "description": "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    "cast": [
      "Robert Pattinson",
      "Zoë Kravitz",
      "Paul Dano",
      "Jeffrey Wright"
    ],
    "genres": [
      "Action",
      "Crime",
      "Dark",
      "Mystery"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/mqqft2x_Aa4?autoplay=1"
  },
  {
    "id": "arcane",
    "title": "Arcane: League of Legends",
    "category": "top10",
    "rank": 6,
    "categoryName": "Top 10 in Movies & TV Today",
    "backdrop": "https://image.tmdb.org/t/p/w1280/5cvnxEHT3e39DvT6ARw4GNCFrB0.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    "rating": "9.0",
    "match": "99% Match",
    "year": "2024",
    "ageRating": "TV-14",
    "duration": "2 Seasons",
    "quality": "4K Ultra HD",
    "description": "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and incompatible convictions.",
    "cast": [
      "Hailee Steinfeld",
      "Ella Purnell",
      "Kevin Alejandro",
      "Katie Leung"
    ],
    "genres": [
      "Animation",
      "Sci-Fi",
      "Action",
      "Steampunk"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/fXmAurh012s?autoplay=1"
  },
  {
    "id": "peaky-blinders",
    "title": "Peaky Blinders",
    "category": "top10",
    "rank": 7,
    "categoryName": "Top 10 in Movies & TV Today",
    "backdrop": "https://image.tmdb.org/t/p/w1280/dzq83RHwQcnP6WGJ6YkenIqeaa5.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    "rating": "8.8",
    "match": "96% Match",
    "year": "2022",
    "ageRating": "TV-MA",
    "duration": "6 Seasons",
    "quality": "4K Ultra HD",
    "description": "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    "cast": [
      "Cillian Murphy",
      "Paul Anderson",
      "Helen McCrory",
      "Tom Hardy"
    ],
    "genres": [
      "Period Piece",
      "Crime",
      "Drama",
      "Gritty"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/oVzVdvGIC7U?autoplay=1"
  },
  {
    "id": "top-gun-maverick",
    "title": "Top Gun: Maverick",
    "category": "top10",
    "rank": 8,
    "categoryName": "Top 10 in Movies & TV Today",
    "backdrop": "https://image.tmdb.org/t/p/w1280/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg",
    "rating": "8.3",
    "match": "97% Match",
    "year": "2022",
    "ageRating": "PG-13",
    "duration": "2h 10m",
    "quality": "4K Ultra HD",
    "description": "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on an impossible mission.",
    "cast": [
      "Tom Cruise",
      "Miles Teller",
      "Jennifer Connelly",
      "Jon Hamm"
    ],
    "genres": [
      "Action",
      "Aviation",
      "Adrenaline",
      "Blockbuster"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/giXco2jaZ_4?autoplay=1"
  },
  {
    "id": "queens-gambit",
    "title": "The Queen's Gambit",
    "category": "top10",
    "rank": 9,
    "categoryName": "Top 10 in Movies & TV Today",
    "backdrop": "https://image.tmdb.org/t/p/w1280/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    "rating": "8.5",
    "match": "98% Match",
    "year": "2020",
    "ageRating": "TV-MA",
    "duration": "Limited Series",
    "quality": "4K Ultra HD",
    "description": "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA, but child stardom comes at a steep price.",
    "cast": [
      "Anya Taylor-Joy",
      "Bill Camp",
      "Marielle Heller",
      "Thomas Brodie-Sangster"
    ],
    "genres": [
      "Drama",
      "Introspective",
      "Intellectual",
      "Period"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/oZn3qSgmLqI?autoplay=1"
  },
  {
    "id": "dark-series",
    "title": "Dark",
    "category": "top10",
    "rank": 10,
    "categoryName": "Top 10 in Movies & TV Today",
    "backdrop": "https://image.tmdb.org/t/p/w1280/3jDXL4Xvj3AzDOF6UH1xeyHW8MH.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    "rating": "8.7",
    "match": "96% Match",
    "year": "2020",
    "ageRating": "TV-MA",
    "duration": "3 Seasons",
    "quality": "4K Ultra HD",
    "description": "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families across multiple generations.",
    "cast": [
      "Louis Hofmann",
      "Oliver Masucci",
      "Jördis Triebel",
      "Maja Schöne"
    ],
    "genres": [
      "Sci-Fi",
      "Time Travel",
      "Mind-Bending",
      "Mystery"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/rrwycJ08PSA?autoplay=1"
  },
  {
    "id": "glass-onion",
    "title": "Glass Onion: A Knives Out Mystery",
    "category": "originals",
    "categoryName": "Netflix Originals & Exclusives",
    "backdrop": "https://image.tmdb.org/t/p/w1280/y3uOfZAYwLkbvhunswBCskNMrfI.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
    "rating": "7.1",
    "match": "94% Match",
    "year": "2022",
    "ageRating": "PG-13",
    "duration": "2h 19m",
    "quality": "4K Ultra HD",
    "description": "Master detective Benoit Blanc travels to Greece to peel back the layers of a mystery involving a quirky tech billionaire and his eclectic circle of friends.",
    "cast": [
      "Daniel Craig",
      "Edward Norton",
      "Janelle Monáe",
      "Kathryn Hahn"
    ],
    "genres": [
      "Comedy",
      "Mystery",
      "Whodunit",
      "Witty"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/gj5ibYSz8C0?autoplay=1"
  },
  {
    "id": "extraction-2",
    "title": "Extraction 2",
    "category": "originals",
    "categoryName": "Netflix Originals & Exclusives",
    "backdrop": "https://image.tmdb.org/t/p/w1280/wRxLAw4l17LqiFcPLkobriPTZAw.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    "rating": "7.0",
    "match": "93% Match",
    "year": "2023",
    "ageRating": "R",
    "duration": "2h 02m",
    "quality": "4K Ultra HD",
    "description": "Back from the brink of death, Australian black ops mercenary Tyler Rake takes on another deadly mission: saving the battered family of a ruthless gangster.",
    "cast": [
      "Chris Hemsworth",
      "Golshifteh Farahani",
      "Adam Bessa",
      "Tornike Gogrichiani"
    ],
    "genres": [
      "Action",
      "Thriller",
      "Adrenaline",
      "Explosive"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/Y274jZs5s7s?autoplay=1"
  },
  {
    "id": "red-notice",
    "title": "Red Notice",
    "category": "originals",
    "categoryName": "Netflix Originals & Exclusives",
    "backdrop": "https://image.tmdb.org/t/p/w1280/p34WRcgkN2QIHcds5FtFiSpV3PC.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
    "rating": "6.3",
    "match": "90% Match",
    "year": "2021",
    "ageRating": "PG-13",
    "duration": "1h 58m",
    "quality": "4K Ultra HD",
    "description": "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
    "cast": [
      "Dwayne Johnson",
      "Ryan Reynolds",
      "Gal Gadot",
      "Ritu Arya"
    ],
    "genres": [
      "Action",
      "Comedy",
      "Heist",
      "Exciting"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/Pj0wz7zu3Ms?autoplay=1"
  },
  {
    "id": "the-irishman",
    "title": "The Irishman",
    "category": "originals",
    "categoryName": "Netflix Originals & Exclusives",
    "backdrop": "https://image.tmdb.org/t/p/w1280/1RDto0tLo8Fhq7OcwgDaM7nECb7.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
    "rating": "7.8",
    "match": "95% Match",
    "year": "2019",
    "ageRating": "R",
    "duration": "3h 29m",
    "quality": "4K Ultra HD",
    "description": "An aging hitman recalls his time with the mob and his involvement in Jimmy Hoffa's disappearance in Martin Scorsese's acclaimed crime masterwork.",
    "cast": [
      "Robert De Niro",
      "Al Pacino",
      "Joe Pesci",
      "Harvey Keitel"
    ],
    "genres": [
      "Crime",
      "Drama",
      "Epic",
      "Classic"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/WHXxVmeGQUc?autoplay=1"
  },
  {
    "id": "bird-box",
    "title": "Bird Box",
    "category": "originals",
    "categoryName": "Netflix Originals & Exclusives",
    "backdrop": "https://image.tmdb.org/t/p/w1280/pDKFL1zcHzEpmz4MJA5JJnRbJeD.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg",
    "rating": "6.6",
    "match": "91% Match",
    "year": "2018",
    "ageRating": "R",
    "duration": "2h 04m",
    "quality": "4K Ultra HD",
    "description": "Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety blindfolded.",
    "cast": [
      "Sandra Bullock",
      "Trevante Rhodes",
      "John Malkovich",
      "Sarah Paulson"
    ],
    "genres": [
      "Horror",
      "Sci-Fi",
      "Suspense",
      "Apocalyptic"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/o2AsIXSh2xo?autoplay=1"
  },
  {
    "id": "enola-holmes-2",
    "title": "Enola Holmes 2",
    "category": "originals",
    "categoryName": "Netflix Originals & Exclusives",
    "backdrop": "https://image.tmdb.org/t/p/w1280/rjlG7C5GZfXutoVoE3BJaYGUhk4.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg",
    "rating": "6.8",
    "match": "92% Match",
    "year": "2022",
    "ageRating": "PG-13",
    "duration": "2h 09m",
    "quality": "4K Ultra HD",
    "description": "Now a detective-for-hire, Enola Holmes takes on her first official case to find a missing girl, as the sparks of a dangerous conspiracy ignite a mystery.",
    "cast": [
      "Millie Bobby Brown",
      "Henry Cavill",
      "David Thewlis",
      "Helena Bonham Carter"
    ],
    "genres": [
      "Adventure",
      "Mystery",
      "Family",
      "Witty"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/KKXNmYoPkx0?autoplay=1"
  },
  {
    "id": "roma",
    "title": "Roma",
    "category": "originals",
    "categoryName": "Netflix Originals & Exclusives",
    "backdrop": "https://image.tmdb.org/t/p/w1280/abQxLSkGxpHyUxRjRXACt8NbiGf.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/w90ItYf9qagQKVEBr1uFxPomAtf.jpg",
    "rating": "7.7",
    "match": "96% Match",
    "year": "2018",
    "ageRating": "R",
    "duration": "2h 15m",
    "quality": "4K Ultra HD",
    "description": "Director Alfonso Cuarón delivers a vivid, emotional portrait of a domestic worker's journey set against domestic and political turmoil in 1970s Mexico.",
    "cast": [
      "Yalitza Aparicio",
      "Marina de Tavira",
      "Diego Cortina Autrey"
    ],
    "genres": [
      "Drama",
      "Art-House",
      "Poetic",
      "Award-Winner"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/6BS27ngZtxg?autoplay=1"
  },
  {
    "id": "all-quiet",
    "title": "All Quiet on the Western Front",
    "category": "originals",
    "categoryName": "Netflix Originals & Exclusives",
    "backdrop": "https://image.tmdb.org/t/p/w1280/xBwtP27cx8WfjHJVFkpuV6F1RES.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/2IRjbi9cADuDMKmHdLK7LaqQDKA.jpg",
    "rating": "7.8",
    "match": "97% Match",
    "year": "2022",
    "ageRating": "R",
    "duration": "2h 28m",
    "quality": "4K Ultra HD",
    "description": "When 17-year-old Paul joins the Western Front in World War I, his initial euphoria is soon shattered by the grim reality of life in the trenches.",
    "cast": [
      "Felix Kammerer",
      "Albrecht Schuch",
      "Aaron Hilmer",
      "Daniel Brühl"
    ],
    "genres": [
      "War",
      "Drama",
      "Visceral",
      "Masterpiece"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/hf8EYbVxpCY?autoplay=1"
  },
  {
    "id": "john-wick-4",
    "title": "John Wick: Chapter 4",
    "category": "action",
    "categoryName": "Action & Adventure Blockbusters",
    "backdrop": "https://image.tmdb.org/t/p/w1280/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    "rating": "7.7",
    "match": "97% Match",
    "year": "2023",
    "ageRating": "R",
    "duration": "2h 49m",
    "quality": "4K Ultra HD",
    "description": "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.",
    "cast": [
      "Keanu Reeves",
      "Donnie Yen",
      "Bill Skarsgård",
      "Laurence Fishburne"
    ],
    "genres": [
      "Action",
      "Martial Arts",
      "Thriller",
      "Gun-Fu"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/qEVUtrk8_B4?autoplay=1"
  },
  {
    "id": "mission-impossible-7",
    "title": "Mission: Impossible - Dead Reckoning",
    "category": "action",
    "categoryName": "Action & Adventure Blockbusters",
    "backdrop": "https://image.tmdb.org/t/p/w1280/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    "rating": "7.7",
    "match": "95% Match",
    "year": "2023",
    "ageRating": "PG-13",
    "duration": "2h 43m",
    "quality": "4K Ultra HD",
    "description": "Ethan Hunt and his IMF team track down a dangerous weapon that threatens all of humanity before it falls into the wrong hands.",
    "cast": [
      "Tom Cruise",
      "Hayley Atwell",
      "Ving Rhames",
      "Simon Pegg"
    ],
    "genres": [
      "Action",
      "Spy",
      "Adventure",
      "Blockbuster"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/avz05VVyH74?autoplay=1"
  },
  {
    "id": "mad-max-fury-road",
    "title": "Mad Max: Fury Road",
    "category": "action",
    "categoryName": "Action & Adventure Blockbusters",
    "backdrop": "https://image.tmdb.org/t/p/w1280/gqrnQA6Xppdl8vIb2eJc58VC1tW.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg",
    "rating": "8.1",
    "match": "98% Match",
    "year": "2015",
    "ageRating": "R",
    "duration": "2h 00m",
    "quality": "4K Ultra HD",
    "description": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners and a drifter named Max.",
    "cast": [
      "Tom Hardy",
      "Charlize Theron",
      "Nicholas Hoult",
      "Hugh Keays-Byrne"
    ],
    "genres": [
      "Action",
      "Sci-Fi",
      "High-Octane",
      "Visual Feast"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/hEJnMQG9ev8?autoplay=1"
  },
  {
    "id": "the-dark-knight",
    "title": "The Dark Knight",
    "category": "action",
    "categoryName": "Action & Adventure Blockbusters",
    "backdrop": "https://image.tmdb.org/t/p/w1280/9FE5eD92WfVCiivM9Pq9GVSrlWk.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "rating": "9.0",
    "match": "99% Match",
    "year": "2008",
    "ageRating": "PG-13",
    "duration": "2h 32m",
    "quality": "4K Ultra HD",
    "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability.",
    "cast": [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine"
    ],
    "genres": [
      "Action",
      "Crime",
      "Drama",
      "Legendary"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/EXeTwQWrcwY?autoplay=1"
  },
  {
    "id": "gladiator",
    "title": "Gladiator",
    "category": "action",
    "categoryName": "Action & Adventure Blockbusters",
    "backdrop": "https://image.tmdb.org/t/p/w1280/Ar7QuJ7sJEiC0oP3I8fKBKIQD9u.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg",
    "rating": "8.5",
    "match": "98% Match",
    "year": "2000",
    "ageRating": "R",
    "duration": "2h 35m",
    "quality": "4K Ultra HD",
    "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "cast": [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen",
      "Oliver Reed"
    ],
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Epic"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/owK1qxDselE?autoplay=1"
  },
  {
    "id": "inception",
    "title": "Inception",
    "category": "action",
    "categoryName": "Action & Adventure Blockbusters",
    "backdrop": "https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    "rating": "8.8",
    "match": "99% Match",
    "year": "2010",
    "ageRating": "PG-13",
    "duration": "2h 28m",
    "quality": "4K Ultra HD",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "cast": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy"
    ],
    "genres": [
      "Action",
      "Sci-Fi",
      "Mind-Bending",
      "Heist"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1"
  },
  {
    "id": "avengers-endgame",
    "title": "Avengers: Endgame",
    "category": "action",
    "categoryName": "Action & Adventure Blockbusters",
    "backdrop": "https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    "rating": "8.4",
    "match": "97% Match",
    "year": "2019",
    "ageRating": "PG-13",
    "duration": "3h 01m",
    "quality": "4K Ultra HD",
    "description": "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos’ actions.",
    "cast": [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth"
    ],
    "genres": [
      "Action",
      "Sci-Fi",
      "Epic",
      "Superheroes"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1"
  },
  {
    "id": "bullet-train",
    "title": "Bullet Train",
    "category": "action",
    "categoryName": "Action & Adventure Blockbusters",
    "backdrop": "https://image.tmdb.org/t/p/w1280/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/j8szC8OgrejDQjjMKSVXyaAjw3V.jpg",
    "rating": "7.3",
    "match": "93% Match",
    "year": "2022",
    "ageRating": "R",
    "duration": "2h 06m",
    "quality": "4K Ultra HD",
    "description": "Five assassins aboard a swiftly moving bullet train find out that their missions have something in common in this stylish thrill-ride from director David Leitch.",
    "cast": [
      "Brad Pitt",
      "Joey King",
      "Aaron Taylor-Johnson",
      "Brian Tyree Henry"
    ],
    "genres": [
      "Action",
      "Comedy",
      "Fast-Paced",
      "Violent"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/0IOsk2Vlc4o?autoplay=1"
  },
  {
    "id": "blade-runner-2049",
    "title": "Blade Runner 2049",
    "category": "scifi",
    "categoryName": "Sci-Fi & Mind-Bending Fiction Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/gNdLJU9TxrpGx4dkZidjys3fyy0.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    "rating": "8.0",
    "match": "98% Match",
    "year": "2017",
    "ageRating": "R",
    "duration": "2h 44m",
    "quality": "4K Ultra HD",
    "description": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    "cast": [
      "Ryan Gosling",
      "Harrison Ford",
      "Ana de Armas",
      "Sylvia Hoeks"
    ],
    "genres": [
      "Sci-Fi",
      "Cyberpunk",
      "Atmospheric",
      "Visual"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/gCcx85zbxz4?autoplay=1"
  },
  {
    "id": "severance",
    "title": "Severance",
    "category": "scifi",
    "categoryName": "Sci-Fi & Mind-Bending Fiction Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/ixgFmf1X59PUZam2qbAfskx2gQr.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg",
    "rating": "8.7",
    "match": "97% Match",
    "year": "2022",
    "ageRating": "TV-MA",
    "duration": "1 Season",
    "quality": "4K Ultra HD",
    "description": "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears, a journey begins.",
    "cast": [
      "Adam Scott",
      "Zach Cherry",
      "Britt Lower",
      "Patricia Arquette"
    ],
    "genres": [
      "Sci-Fi",
      "Mystery",
      "Psychological",
      "Dystopian"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/xEQP4VVuyrY?autoplay=1"
  },
  {
    "id": "arrival",
    "title": "Arrival",
    "category": "scifi",
    "categoryName": "Sci-Fi & Mind-Bending Fiction Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/8MUZz7oPXQftFTslZpRP3CVMOoq.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/pEzNVQfdzYDzVK0XqxERIw2x2se.jpg",
    "rating": "7.9",
    "match": "96% Match",
    "year": "2016",
    "ageRating": "PG-13",
    "duration": "1h 56m",
    "quality": "4K Ultra HD",
    "description": "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft land around the world, racing against time to avert global war.",
    "cast": [
      "Amy Adams",
      "Jeremy Renner",
      "Forest Whitaker",
      "Michael Stuhlbarg"
    ],
    "genres": [
      "Sci-Fi",
      "Drama",
      "Cerebral",
      "Thought-Provoking"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/tFMo3UJ4B4g?autoplay=1"
  },
  {
    "id": "black-mirror",
    "title": "Black Mirror",
    "category": "scifi",
    "categoryName": "Sci-Fi & Mind-Bending Fiction Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/dg3OindVAGZBjlT3xYKqIAdukPL.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/seN6rRfN0I6n8iDXjlSMk1QjNcq.jpg",
    "rating": "8.7",
    "match": "98% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "6 Seasons",
    "quality": "4K Ultra HD",
    "description": "This sci-fi anthology series explores a twisted, high-tech near-future where humanity's greatest innovations and darkest instincts collide.",
    "cast": [
      "Daniel Lapaine",
      "Hannah John-Kamen",
      "Michaela Coel",
      "Aaron Paul"
    ],
    "genres": [
      "Anthology",
      "Sci-Fi",
      "Dystopian",
      "Dark"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/V0O3nArb64s?autoplay=1"
  },
  {
    "id": "the-matrix",
    "title": "The Matrix",
    "category": "scifi",
    "categoryName": "Sci-Fi & Mind-Bending Fiction Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/lrtSb1skJayPydZk0OSMAKjBOVe.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
    "rating": "8.7",
    "match": "99% Match",
    "year": "1999",
    "ageRating": "R",
    "duration": "2h 16m",
    "quality": "4K Ultra HD",
    "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth: the life he knows is an elaborate deception of an evil cyber-intelligence.",
    "cast": [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving"
    ],
    "genres": [
      "Sci-Fi",
      "Action",
      "Mind-Bending",
      "Iconic"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/vKQi3bBA1y8?autoplay=1"
  },
  {
    "id": "ex-machina",
    "title": "Ex Machina",
    "category": "scifi",
    "categoryName": "Sci-Fi & Mind-Bending Fiction Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/uqOuJ50EtTj7kkDIXP8LCg7G45D.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg",
    "rating": "7.7",
    "match": "94% Match",
    "year": "2014",
    "ageRating": "R",
    "duration": "1h 48m",
    "quality": "4K Ultra HD",
    "description": "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
    "cast": [
      "Alicia Vikander",
      "Domhnall Gleeson",
      "Oscar Isaac",
      "Sonoya Mizuno"
    ],
    "genres": [
      "Sci-Fi",
      "Psychological",
      "A.I.",
      "Intense"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/EoQuVnKhxaM?autoplay=1"
  },
  {
    "id": "tenet",
    "title": "Tenet",
    "category": "scifi",
    "categoryName": "Sci-Fi & Mind-Bending Fiction Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/mQOUyqDybTqxl73hO5LujCZsM1o.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg",
    "rating": "7.3",
    "match": "92% Match",
    "year": "2020",
    "ageRating": "PG-13",
    "duration": "2h 30m",
    "quality": "4K Ultra HD",
    "description": "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    "cast": [
      "John David Washington",
      "Robert Pattinson",
      "Elizabeth Debicki",
      "Kenneth Branagh"
    ],
    "genres": [
      "Sci-Fi",
      "Action",
      "Time Inversion",
      "Complex"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/LdOM0x0WV3o?autoplay=1"
  },
  {
    "id": "annihilation",
    "title": "Annihilation",
    "category": "scifi",
    "categoryName": "Sci-Fi & Mind-Bending Fiction Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/9trZvBr44UGedUOiGo3jgSUw13e.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/4YRplSk6BhH6PRuE9gfyw9byUJ6.jpg",
    "rating": "6.8",
    "match": "91% Match",
    "year": "2018",
    "ageRating": "R",
    "duration": "1h 55m",
    "quality": "4K Ultra HD",
    "description": "A biologist signs up for a dangerous, secret expedition into a mysterious quarantined coastal zone where the laws of nature don't apply.",
    "cast": [
      "Natalie Portman",
      "Jennifer Jason Leigh",
      "Gina Rodriguez",
      "Tessa Thompson"
    ],
    "genres": [
      "Sci-Fi",
      "Horror",
      "Surreal",
      "Intriguing"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/89OP78l9oF0?autoplay=1"
  },
  {
    "id": "succession",
    "title": "Succession",
    "category": "dramas",
    "categoryName": "Critically Acclaimed TV Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/d87JXX3DLkRJMfm5StCmmnmhHuX.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg",
    "rating": "8.9",
    "match": "99% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "4 Seasons",
    "quality": "4K Ultra HD",
    "description": "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their aging father steps down from the company.",
    "cast": [
      "Brian Cox",
      "Jeremy Strong",
      "Sarah Snook",
      "Kieran Culkin"
    ],
    "genres": [
      "Drama",
      "Dark Humor",
      "Power Struggle",
      "Acclaimed"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/ozYX2m1r5k0?autoplay=1"
  },
  {
    "id": "better-call-saul",
    "title": "Better Call Saul",
    "category": "dramas",
    "categoryName": "Critically Acclaimed TV Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/rfxryDIv8huejujg4JueDJx8zCz.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/zjg4jpK1Wp2kiRvtt5ND0kznako.jpg",
    "rating": "9.0",
    "match": "99% Match",
    "year": "2022",
    "ageRating": "TV-MA",
    "duration": "6 Seasons",
    "quality": "4K Ultra HD",
    "description": "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.",
    "cast": [
      "Bob Odenkirk",
      "Rhea Seehorn",
      "Jonathan Banks",
      "Giancarlo Esposito"
    ],
    "genres": [
      "Crime",
      "Drama",
      "Masterpiece",
      "Character Study"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/HN4oyhmgoP0?autoplay=1"
  },
  {
    "id": "chernobyl",
    "title": "Chernobyl",
    "category": "dramas",
    "categoryName": "Critically Acclaimed TV Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    "rating": "9.4",
    "match": "99% Match",
    "year": "2019",
    "ageRating": "TV-MA",
    "duration": "Miniseries",
    "quality": "4K Ultra HD",
    "description": "In April 1986, an explosion at the Chernobyl nuclear power plant in the Soviet Union becomes one of the world's worst man-made catastrophes.",
    "cast": [
      "Jared Harris",
      "Stellan Skarsgård",
      "Emily Watson",
      "Paul Ritter"
    ],
    "genres": [
      "Historical",
      "Drama",
      "Tense",
      "Visceral"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/s9APLXM9Ei8?autoplay=1"
  },
  {
    "id": "the-crown",
    "title": "The Crown",
    "category": "dramas",
    "categoryName": "Critically Acclaimed TV Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/8VXhcrl5z2I1zEU9X3pkkNrZlD.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
    "rating": "8.6",
    "match": "97% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "6 Seasons",
    "quality": "4K Ultra HD",
    "description": "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    "cast": [
      "Claire Foy",
      "Olivia Colman",
      "Imelda Staunton",
      "Matt Smith"
    ],
    "genres": [
      "Historical",
      "Drama",
      "Royal",
      "Lavish"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/JWtnJzs690k?autoplay=1"
  },
  {
    "id": "mindhunter",
    "title": "Mindhunter",
    "category": "dramas",
    "categoryName": "Critically Acclaimed TV Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/lpDVJuIro21gtMj9iXMFKHuroZN.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/fbKE87mojpIETWepSbD5Qt741fp.jpg",
    "rating": "8.6",
    "match": "96% Match",
    "year": "2019",
    "ageRating": "TV-MA",
    "duration": "2 Seasons",
    "quality": "4K Ultra HD",
    "description": "In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and awkwardly getting too close to all-too-real monsters.",
    "cast": [
      "Jonathan Groff",
      "Holt McCallany",
      "Anna Torv",
      "Sonny Valicenti"
    ],
    "genres": [
      "True Crime",
      "Psychological",
      "Dark",
      "Investigative"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/oFL78zTylvQ?autoplay=1"
  },
  {
    "id": "narcos",
    "title": "Narcos",
    "category": "dramas",
    "categoryName": "Critically Acclaimed TV Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/y9ekzkPFmWSqUU3Kj0wHmYUM8qu.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    "rating": "8.8",
    "match": "97% Match",
    "year": "2017",
    "ageRating": "TV-MA",
    "duration": "3 Seasons",
    "quality": "4K Ultra HD",
    "description": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    "cast": [
      "Wagner Moura",
      "Pedro Pascal",
      "Boyd Holbrook",
      "Alberto Ammann"
    ],
    "genres": [
      "Crime",
      "Biography",
      "Gritty",
      "Addictive"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/xl8zdCY-abw?autoplay=1"
  },
  {
    "id": "ozark",
    "title": "Ozark",
    "category": "dramas",
    "categoryName": "Critically Acclaimed TV Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/aatG9iVAUL7U7OyFEmupESpOrD2.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fzw6rE1Pvi4BIXF6ET.jpg",
    "rating": "8.5",
    "match": "95% Match",
    "year": "2022",
    "ageRating": "TV-MA",
    "duration": "4 Seasons",
    "quality": "4K Ultra HD",
    "description": "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
    "cast": [
      "Jason Bateman",
      "Laura Linney",
      "Sofia Hublitz",
      "Julia Garner"
    ],
    "genres": [
      "Crime",
      "Thriller",
      "Suspenseful",
      "Dark"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/5hAXVqrljbs?autoplay=1"
  },
  {
    "id": "shogun",
    "title": "Shōgun",
    "category": "dramas",
    "categoryName": "Critically Acclaimed TV Dramas",
    "backdrop": "https://image.tmdb.org/t/p/w1280/bwSmgmd90hCWwqOKQYTEraeOZhJ.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
    "rating": "8.8",
    "match": "98% Match",
    "year": "2024",
    "ageRating": "TV-MA",
    "duration": "1 Season",
    "quality": "4K Ultra HD",
    "description": "When a mysterious European ship is found marooned in a nearby fishing village, Lord Yoshii Toranaga discovers secrets that could tip the scales of power in feudal Japan.",
    "cast": [
      "Hiroyuki Sanada",
      "Cosmo Jarvis",
      "Anna Sawai",
      "Tadanobu Asano"
    ],
    "genres": [
      "Historical",
      "Drama",
      "War",
      "Epic"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/yBLfs-OtkGE?autoplay=1"
  },
  {
    "id": "brooklyn-nine-nine",
    "title": "Brooklyn Nine-Nine",
    "category": "comedy",
    "categoryName": "Binge-Worthy Comedies & Sitcoms",
    "backdrop": "https://image.tmdb.org/t/p/w1280/9AeiA1XtP5sel2tAf9LaGeUjhDb.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/mpjlDzVjp7oyHUe2LaF9ltKe6f1.jpg",
    "rating": "8.4",
    "match": "97% Match",
    "year": "2021",
    "ageRating": "TV-14",
    "duration": "8 Seasons",
    "quality": "HD",
    "description": "Comedy series following the exploits of Detective Jake Peralta and his diverse, lovable colleagues in New York City's 99th Precinct under stern Captain Holt.",
    "cast": [
      "Andy Samberg",
      "Stephanie Beatriz",
      "Terry Crews",
      "Melissa Fumero",
      "Andre Braugher"
    ],
    "genres": [
      "Sitcom",
      "Comedy",
      "Police",
      "Feel-Good"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/sEOuJ4z5aTc?autoplay=1"
  },
  {
    "id": "the-good-place",
    "title": "The Good Place",
    "category": "comedy",
    "categoryName": "Binge-Worthy Comedies & Sitcoms",
    "backdrop": "https://image.tmdb.org/t/p/w1280/tZmlWeFEMvxrjJhBJJcLNXpSRiG.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/qIhsuhoIYR5yTnDta0IL4senbeN.jpg",
    "rating": "8.2",
    "match": "95% Match",
    "year": "2020",
    "ageRating": "TV-14",
    "duration": "4 Seasons",
    "quality": "HD",
    "description": "Four people and their otherworldly guide struggle in the afterlife to define what it means to be good in this brilliantly funny, philosophical comedy.",
    "cast": [
      "Kristen Bell",
      "William Jackson Harper",
      "Jameela Jamil",
      "Ted Danson"
    ],
    "genres": [
      "Comedy",
      "Fantasy",
      "Philosophical",
      "Witty"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/RfBgT5djaQw?autoplay=1"
  },
  {
    "id": "the-office",
    "title": "The Office (U.S.)",
    "category": "comedy",
    "categoryName": "Binge-Worthy Comedies & Sitcoms",
    "backdrop": "https://image.tmdb.org/t/p/w1280/mLyW3UTgi2lsMdtueYODcfAB9Ku.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/7DJKHzAi83BmQrWLrYYOqcoKfhR.jpg",
    "rating": "9.0",
    "match": "99% Match",
    "year": "2013",
    "ageRating": "TV-14",
    "duration": "9 Seasons",
    "quality": "HD",
    "description": "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium at Dunder Mifflin.",
    "cast": [
      "Steve Carell",
      "Rainn Wilson",
      "John Krasinski",
      "Jenna Fischer"
    ],
    "genres": [
      "Sitcom",
      "Mockumentary",
      "Cringe Comedy",
      "Comfort"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/LHOtME2DL4g?autoplay=1"
  },
  {
    "id": "rick-and-morty",
    "title": "Rick and Morty",
    "category": "comedy",
    "categoryName": "Binge-Worthy Comedies & Sitcoms",
    "backdrop": "https://image.tmdb.org/t/p/w1280/5BDNWWHweQL0q1fmTv7gmRXfnl4.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/owhkU6KRqdXoUQpjV8uyZGPtX58.jpg",
    "rating": "9.1",
    "match": "98% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "7 Seasons",
    "quality": "4K Ultra HD",
    "description": "The fractured domestic lives of a cynical mad scientist and his good-hearted but fretful grandson, who split their time between domestic life and interdimensional adventures.",
    "cast": [
      "Justin Roiland",
      "Chris Parnell",
      "Spencer Grammer",
      "Sarah Chalke"
    ],
    "genres": [
      "Animation",
      "Sci-Fi",
      "Dark Comedy",
      "Absurd"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/hl1U0bxTHbY?autoplay=1"
  },
  {
    "id": "sex-education",
    "title": "Sex Education",
    "category": "comedy",
    "categoryName": "Binge-Worthy Comedies & Sitcoms",
    "backdrop": "https://image.tmdb.org/t/p/w1280/u23G9KZregWHs1use6ir1fX27gl.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/bc3bmTdnoKcRuO9xdQKgAbB7Y9Z.jpg",
    "rating": "8.3",
    "match": "96% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "4 Seasons",
    "quality": "4K Ultra HD",
    "description": "Insecure Otis has all the answers when it comes to sex advice, thanks to his therapist mother. So rebel Maeve proposes an underground school sex therapy clinic.",
    "cast": [
      "Asa Butterfield",
      "Gillian Anderson",
      "Ncuti Gatwa",
      "Emma Mackey"
    ],
    "genres": [
      "Comedy",
      "Drama",
      "Teen",
      "Heartfelt"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/o3ST97HeQQA?autoplay=1"
  },
  {
    "id": "ted-lasso",
    "title": "Ted Lasso",
    "category": "comedy",
    "categoryName": "Binge-Worthy Comedies & Sitcoms",
    "backdrop": "https://image.tmdb.org/t/p/w1280/nE94ejEbzNCU48bW1oju0dqBONz.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/uRHsiw1wLxPHFXkkv4Ix1s0O6f4.jpg",
    "rating": "8.8",
    "match": "97% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "3 Seasons",
    "quality": "4K Ultra HD",
    "description": "American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling British football team, with his infectious optimism.",
    "cast": [
      "Jason Sudeikis",
      "Hannah Waddingham",
      "Brett Goldstein",
      "Juno Temple"
    ],
    "genres": [
      "Comedy",
      "Sports",
      "Feel-Good",
      "Inspiring"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/3u7EIiohs6U?autoplay=1"
  },
  {
    "id": "schitts-creek",
    "title": "Schitt's Creek",
    "category": "comedy",
    "categoryName": "Binge-Worthy Comedies & Sitcoms",
    "backdrop": "https://image.tmdb.org/t/p/w1280/ftNmVV8LuNVmtB8mzoUTucozVKE.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/iRfSzrPS5VYWQv7KVSEg2BZZL6C.jpg",
    "rating": "8.5",
    "match": "96% Match",
    "year": "2020",
    "ageRating": "TV-14",
    "duration": "6 Seasons",
    "quality": "HD",
    "description": "When rich video-store magnate Johnny Rose and his family suddenly find themselves broke, they are forced to leave their pampered life and regroup in Schitt's Creek.",
    "cast": [
      "Eugene Levy",
      "Catherine O'Hara",
      "Dan Levy",
      "Annie Murphy"
    ],
    "genres": [
      "Sitcom",
      "Heartwarming",
      "Satire",
      "Emmy-Winner"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/W08AODjBvdg?autoplay=1"
  },
  {
    "id": "bojack-horseman",
    "title": "BoJack Horseman",
    "category": "comedy",
    "categoryName": "Binge-Worthy Comedies & Sitcoms",
    "backdrop": "https://image.tmdb.org/t/p/w1280/81BCTObfPk0EvarJpUgnGXHvM9x.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/6JFWzlChcGgLiIUo2COgNlWGFKy.jpg",
    "rating": "8.8",
    "match": "98% Match",
    "year": "2020",
    "ageRating": "TV-MA",
    "duration": "6 Seasons",
    "quality": "4K Ultra HD",
    "description": "Meet the most beloved sitcom horse of the '90s, twenty years later. He's a curmudgeon with a heart of... not quite gold, but something like brass.",
    "cast": [
      "Will Arnett",
      "Amy Sedaris",
      "Alison Brie",
      "Aaron Paul"
    ],
    "genres": [
      "Adult Animation",
      "Dark Comedy",
      "Existential",
      "Satire"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/i1eJBug265g?autoplay=1"
  },
  {
    "id": "haunting-of-hill-house",
    "title": "The Haunting of Hill House",
    "category": "horror",
    "categoryName": "Horror & Dark Suspense Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/dQF17lG4OZ3pC4QD9iNjaMS96gO.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/nWPZb800NCGiDPNGsKCfY0w44Z2.jpg",
    "rating": "8.6",
    "match": "98% Match",
    "year": "2018",
    "ageRating": "TV-MA",
    "duration": "Miniseries",
    "quality": "4K Ultra HD",
    "description": "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
    "cast": [
      "Michiel Huisman",
      "Carla Gugino",
      "Henry Thomas",
      "Elizabeth Reaser"
    ],
    "genres": [
      "Horror",
      "Supernatural",
      "Psychological",
      "Masterpiece"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/G9OzG53VwIk?autoplay=1"
  },
  {
    "id": "talk-to-me",
    "title": "Talk to Me",
    "category": "horror",
    "categoryName": "Horror & Dark Suspense Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/46Os8U0DEPmI0OnvKDxucl6SLVZ.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
    "rating": "7.1",
    "match": "93% Match",
    "year": "2023",
    "ageRating": "R",
    "duration": "1h 35m",
    "quality": "4K Ultra HD",
    "description": "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them unleashes terrifying supernatural forces.",
    "cast": [
      "Sophie Wilde",
      "Alexandra Jensen",
      "Joe Bird",
      "Otis Dhanji"
    ],
    "genres": [
      "Horror",
      "Supernatural",
      "Chilling",
      "A24"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/aLAKJu9aJys?autoplay=1"
  },
  {
    "id": "a-quiet-place",
    "title": "A Quiet Place",
    "category": "horror",
    "categoryName": "Horror & Dark Suspense Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/nHRUtBwFNnNN70vcQ7lAsjc2T6S.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    "rating": "7.5",
    "match": "94% Match",
    "year": "2018",
    "ageRating": "PG-13",
    "duration": "1h 30m",
    "quality": "4K Ultra HD",
    "description": "In a desolate world overrun by lethal creatures that hunt by sound, a family must live in total silence to stay alive.",
    "cast": [
      "Emily Blunt",
      "John Krasinski",
      "Millicent Simmonds",
      "Noah Jupe"
    ],
    "genres": [
      "Horror",
      "Thriller",
      "Survival",
      "Tense"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/WR7cc5t7tv8?autoplay=1"
  },
  {
    "id": "hereditary",
    "title": "Hereditary",
    "category": "horror",
    "categoryName": "Horror & Dark Suspense Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/gJbTXKNTL6O7r7PzF6ZRkJGBlPp.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/4GFPuL14eXi66V96xBWY73Y9PfR.jpg",
    "rating": "7.3",
    "match": "92% Match",
    "year": "2018",
    "ageRating": "R",
    "duration": "2h 07m",
    "quality": "4K Ultra HD",
    "description": "A grieving family is tormented by tragic and disturbing occurrences after the death of their secretive grandmother.",
    "cast": [
      "Toni Collette",
      "Alex Wolff",
      "Milly Shapiro",
      "Gabriel Byrne"
    ],
    "genres": [
      "Psychological Horror",
      "Dark",
      "Disturbing",
      "Occult"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/V6wWKNij_1M?autoplay=1"
  },
  {
    "id": "midnight-mass",
    "title": "Midnight Mass",
    "category": "horror",
    "categoryName": "Horror & Dark Suspense Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/YauN3gyvgqktYhze4gXPWuoZBY.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/iYoMZYVD775MtBYJfv6OGY1FsnL.jpg",
    "rating": "7.7",
    "match": "95% Match",
    "year": "2021",
    "ageRating": "TV-MA",
    "duration": "Limited Series",
    "quality": "4K Ultra HD",
    "description": "An isolated island community experiences miraculous events — and frightening omens — after the arrival of a charismatic, mysterious young priest.",
    "cast": [
      "Kate Siegel",
      "Zach Gilford",
      "Hamish Linklater",
      "Samantha Sloyan"
    ],
    "genres": [
      "Horror",
      "Drama",
      "Religious Thriller",
      "Atmospheric"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/y-XIRcjf3l4?autoplay=1"
  },
  {
    "id": "the-conjuring",
    "title": "The Conjuring",
    "category": "horror",
    "categoryName": "Horror & Dark Suspense Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/ecKQlAEG95k62SMGhvX83oEqANK.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    "rating": "7.5",
    "match": "94% Match",
    "year": "2013",
    "ageRating": "R",
    "duration": "1h 52m",
    "quality": "4K Ultra HD",
    "description": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their secluded farmhouse.",
    "cast": [
      "Patrick Wilson",
      "Vera Farmiga",
      "Ron Livingston",
      "Lili Taylor"
    ],
    "genres": [
      "Supernatural",
      "Horror",
      "Demonology",
      "Scary"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/k10ETZ41q5o?autoplay=1"
  },
  {
    "id": "us-movie",
    "title": "Us",
    "category": "horror",
    "categoryName": "Horror & Dark Suspense Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/l3qnMiVwuWxBikOpBcYpUHKUBdN.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/bT7sMDsvWNeIGgZ6ZsisNdBcHdq.jpg",
    "rating": "6.8",
    "match": "91% Match",
    "year": "2019",
    "ageRating": "R",
    "duration": "1h 56m",
    "quality": "4K Ultra HD",
    "description": "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them in Jordan Peele's mind-bending nightmare.",
    "cast": [
      "Lupita Nyong'o",
      "Winston Duke",
      "Elisabeth Moss",
      "Tim Heidecker"
    ],
    "genres": [
      "Horror",
      "Mystery",
      "Psychological",
      "Social Thriller"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/hNCmb-4oUJA?autoplay=1"
  },
  {
    "id": "get-out",
    "title": "Get Out",
    "category": "horror",
    "categoryName": "Horror & Dark Suspense Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/bBQHALHRAaaORlPNXv7fNcRXYdx.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    "rating": "7.8",
    "match": "97% Match",
    "year": "2017",
    "ageRating": "R",
    "duration": "1h 44m",
    "quality": "4K Ultra HD",
    "description": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception reaches a boiling point.",
    "cast": [
      "Daniel Kaluuya",
      "Allison Williams",
      "Bradley Whitford",
      "Catherine Keener"
    ],
    "genres": [
      "Horror",
      "Mystery",
      "Social Thriller",
      "Oscar-Winner"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/DzfpyUB60YY?autoplay=1"
  },
  {
    "id": "attack-on-titan",
    "title": "Attack on Titan",
    "category": "anime",
    "categoryName": "Anime & Japanese Animation",
    "backdrop": "https://image.tmdb.org/t/p/w1280/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    "rating": "9.1",
    "match": "99% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "4 Seasons",
    "quality": "4K Ultra HD",
    "description": "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to extinction.",
    "cast": [
      "Yuki Kaji",
      "Yui Ishikawa",
      "Marina Inoue",
      "Hiroshi Kamiya"
    ],
    "genres": [
      "Anime",
      "Dark Fantasy",
      "Post-Apocalyptic",
      "Action"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/MGRm4IzK1SQ?autoplay=1"
  },
  {
    "id": "demon-slayer",
    "title": "Demon Slayer: Kimetsu no Yaiba",
    "category": "anime",
    "categoryName": "Anime & Japanese Animation",
    "backdrop": "https://image.tmdb.org/t/p/w1280/1RgPyOhN4DRs225BGTlHJqCudII.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/fWVSwgjpT2D78VUh6X8UBd2rorW.jpg",
    "rating": "8.6",
    "match": "98% Match",
    "year": "2024",
    "ageRating": "TV-14",
    "duration": "4 Seasons",
    "quality": "4K Ultra HD",
    "description": "A youth begins a quest to fight demons and turn his sister human again after his family is slaughtered and his sister turned into a demon.",
    "cast": [
      "Natsuki Hanae",
      "Akari Kito",
      "Hiro Shimono",
      "Yoshitsugu Matsuoka"
    ],
    "genres": [
      "Anime",
      "Action",
      "Supernatural",
      "Stunning Animation"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/VQGCKyvzIM4?autoplay=1"
  },
  {
    "id": "jujutsu-kaisen",
    "title": "Jujutsu Kaisen",
    "category": "anime",
    "categoryName": "Anime & Japanese Animation",
    "backdrop": "https://image.tmdb.org/t/p/w1280/qpin8cASXEVtwhzNsprHYFiOAGk.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/6qQzMJG27XOJsyAEEIisoJB45j2.jpg",
    "rating": "8.6",
    "match": "97% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "2 Seasons",
    "quality": "4K Ultra HD",
    "description": "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and exorcise himself.",
    "cast": [
      "Junya Enoki",
      "Yuma Uchida",
      "Asami Seto",
      "Yuichi Nakamura"
    ],
    "genres": [
      "Anime",
      "Action",
      "Dark Fantasy",
      "Supernatural"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/f7T48W0BXCo?autoplay=1"
  },
  {
    "id": "one-piece-live",
    "title": "One Piece",
    "category": "anime",
    "categoryName": "Anime & Japanese Animation",
    "backdrop": "https://image.tmdb.org/t/p/w1280/6fRwRD7GdCfg6owzmCT3VgQtowl.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/dB4EDhre2dsC2kxYDavyKWqLQwi.jpg",
    "rating": "8.3",
    "match": "96% Match",
    "year": "2023",
    "ageRating": "TV-14",
    "duration": "1 Season",
    "quality": "4K Ultra HD",
    "description": "With his straw hat and ragtag crew, young pirate Monkey D. Luffy sets out on an epic voyage for treasure in this celebrated live-action anime adaptation.",
    "cast": [
      "Iñaki Godoy",
      "Emily Rudd",
      "Mackenyu",
      "Jacob Romero Gibson"
    ],
    "genres": [
      "Adventure",
      "Action",
      "Fantasy",
      "Pirates"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/Ades3pQbeh8?autoplay=1"
  },
  {
    "id": "spirited-away",
    "title": "Spirited Away",
    "category": "anime",
    "categoryName": "Anime & Japanese Animation",
    "backdrop": "https://image.tmdb.org/t/p/w1280/6oaL4DP75yABrd5EbC4H2zq5ghc.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "rating": "8.6",
    "match": "99% Match",
    "year": "2001",
    "ageRating": "PG",
    "duration": "2h 05m",
    "quality": "HD",
    "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    "cast": [
      "Rumi Hiiragi",
      "Miyu Irino",
      "Mari Natsuki",
      "Takashi Naito"
    ],
    "genres": [
      "Anime",
      "Studio Ghibli",
      "Fantasy",
      "Masterpiece"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/ByXuk9QqQkk?autoplay=1"
  },
  {
    "id": "your-name",
    "title": "Your Name (Kimi no Na wa)",
    "category": "anime",
    "categoryName": "Anime & Japanese Animation",
    "backdrop": "https://image.tmdb.org/t/p/w1280/5En1U4PGJ7VdTOBE71BpTeaqjlA.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/azm8BsFekKv0RytT5WBJp5oCOVN.jpg",
    "rating": "8.4",
    "match": "98% Match",
    "year": "2016",
    "ageRating": "PG",
    "duration": "1h 46m",
    "quality": "4K Ultra HD",
    "description": "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things become even more complicated when the boy and girl decide to meet in person.",
    "cast": [
      "Ryunosuke Kamiki",
      "Mone Kamishiraishi",
      "Ryo Narita"
    ],
    "genres": [
      "Anime",
      "Romance",
      "Fantasy",
      "Emotional"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/xU47nhruN-Q?autoplay=1"
  },
  {
    "id": "drive-to-survive",
    "title": "Formula 1: Drive to Survive",
    "category": "docs",
    "categoryName": "Documentaries & Real Life",
    "backdrop": "https://image.tmdb.org/t/p/w1280/xefmNmSGCApfRPaqhIRTaAjFlpo.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/xGOGjJFYYeRSoOpnhN9IHZTXIxj.jpg",
    "rating": "8.5",
    "match": "97% Match",
    "year": "2024",
    "ageRating": "TV-MA",
    "duration": "6 Seasons",
    "quality": "4K Ultra HD",
    "description": "Drivers, managers and team owners live life in the fast lane — both on and off the track — during each cutthroat season of Formula 1 racing.",
    "cast": [
      "Lewis Hamilton",
      "Max Verstappen",
      "Toto Wolff",
      "Christian Horner"
    ],
    "genres": [
      "Documentary",
      "Motorsports",
      "High-Stakes",
      "Drama"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/wtJPe1ksS6E?autoplay=1"
  },
  {
    "id": "our-planet-2",
    "title": "Our Planet II",
    "category": "docs",
    "categoryName": "Documentaries & Real Life",
    "backdrop": "https://image.tmdb.org/t/p/w1280/elMGphkKUdT5rP56fZRtdKMi0UF.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/hw0RsW5V6oywYWspMeLTlftKbFW.jpg",
    "rating": "9.3",
    "match": "99% Match",
    "year": "2023",
    "ageRating": "TV-G",
    "duration": "2 Seasons",
    "quality": "4K Ultra HD",
    "description": "Experience our planet's natural beauty and examine how climate change impacts all living creatures in this ambitious, spectacular nature documentary.",
    "cast": [
      "David Attenborough"
    ],
    "genres": [
      "Nature",
      "Documentary",
      "Breathtaking",
      "Wildlife"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/c8aFcHFu8QM?autoplay=1"
  },
  {
    "id": "the-last-dance",
    "title": "The Last Dance",
    "category": "docs",
    "categoryName": "Documentaries & Real Life",
    "backdrop": "https://image.tmdb.org/t/p/w1280/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/vGXptEdgZIhPg3cGlc7e8sNPC2e.jpg",
    "rating": "9.1",
    "match": "99% Match",
    "year": "2020",
    "ageRating": "TV-MA",
    "duration": "Miniseries",
    "quality": "4K Ultra HD",
    "description": "Charting the rise of the 1990s Chicago Bulls, led by Michael Jordan, one of the most notable dynasties in sports history.",
    "cast": [
      "Michael Jordan",
      "Scottie Pippen",
      "Dennis Rodman",
      "Phil Jackson"
    ],
    "genres": [
      "Sports",
      "Biography",
      "Inspiring",
      "Basketball"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/Peh9Yqf1GXc?autoplay=1"
  },
  {
    "id": "beckham-series",
    "title": "Beckham",
    "category": "docs",
    "categoryName": "Documentaries & Real Life",
    "backdrop": "https://image.tmdb.org/t/p/w1280/aYpkxxsDznjkAsJ7tsSH7I0ZbGT.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/y9d3trMAczZWFqYvGSW6V695vf3.jpg",
    "rating": "8.1",
    "match": "95% Match",
    "year": "2023",
    "ageRating": "TV-MA",
    "duration": "Miniseries",
    "quality": "4K Ultra HD",
    "description": "With never-before-seen footage, this docuseries follows David Beckham's meteoric rise from humble working-class beginnings to global football stardom.",
    "cast": [
      "David Beckham",
      "Victoria Beckham",
      "Alex Ferguson",
      "Gary Neville"
    ],
    "genres": [
      "Biography",
      "Sports",
      "Intimate",
      "Documentary"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/m6lQp9XmN-g?autoplay=1"
  },
  {
    "id": "the-social-dilemma",
    "title": "The Social Dilemma",
    "category": "docs",
    "categoryName": "Documentaries & Real Life",
    "backdrop": "https://image.tmdb.org/t/p/w1280/iYqoT9VBGdGTuLl3cjfbG7ZXDkP.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/jcaM6V2tCtu6iMHDsGLBUbaYgYp.jpg",
    "rating": "7.6",
    "match": "93% Match",
    "year": "2020",
    "ageRating": "PG-13",
    "duration": "1h 34m",
    "quality": "4K Ultra HD",
    "description": "Tech experts from Silicon Valley sound the alarm on the dangerous human impact of social networking, with artificial intelligence tracking every click.",
    "cast": [
      "Tristan Harris",
      "Jeff Seibert",
      "Bailey Richardson",
      "Joe Toscano"
    ],
    "genres": [
      "Technology",
      "Documentary",
      "Eye-Opening",
      "Provocative"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/uaaC57tcci0?autoplay=1"
  },
  {
    "id": "wild-wild-country",
    "title": "Wild Wild Country",
    "category": "docs",
    "categoryName": "Documentaries & Real Life",
    "backdrop": "https://image.tmdb.org/t/p/w1280/sDuM3zw8OBqfciFVwR2r2loGDte.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/kprB5Jj2LYQAYlqVQMEucT2vGt.jpg",
    "rating": "8.1",
    "match": "94% Match",
    "year": "2018",
    "ageRating": "TV-MA",
    "duration": "6 Episodes",
    "quality": "4K Ultra HD",
    "description": "When a controversial cult leader builds a utopian city in the Oregon desert, conflict with the locals escalates into a national scandal.",
    "cast": [
      "Bhagwan Shree Rajneesh",
      "Ma Anand Sheela",
      "Jane Stork"
    ],
    "genres": [
      "True Crime",
      "Cult",
      "Investigative",
      "Shocking"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/hBLS_OM6Puk?autoplay=1"
  },
  {
    "id": "tiger-king",
    "title": "Tiger King",
    "category": "docs",
    "categoryName": "Documentaries & Real Life",
    "backdrop": "https://image.tmdb.org/t/p/w1280/8GGD7djS6oqTWcKwJb3uT833xeA.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/dXQCEjVth8P8L47XIsoRt0oL8Gw.jpg",
    "rating": "7.5",
    "match": "92% Match",
    "year": "2020",
    "ageRating": "TV-MA",
    "duration": "2 Seasons",
    "quality": "HD",
    "description": "A zoo owner spirals out of control amid a cast of eccentric characters in this true murder-for-hire story from the underworld of big cat breeding.",
    "cast": [
      "Joe Exotic",
      "Carole Baskin",
      "Bhagavan Antle"
    ],
    "genres": [
      "True Crime",
      "Bizarre",
      "Addictive",
      "Viral"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/acTdxsoa428?autoplay=1"
  },
  {
    "id": "14-peaks",
    "title": "14 Peaks: Nothing Is Impossible",
    "category": "docs",
    "categoryName": "Documentaries & Real Life",
    "backdrop": "https://image.tmdb.org/t/p/w1280/lRCAcwJeh93YHO3ghFBDf0Pj3w3.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/8YS9oRn9rcAyBhYELFbGKk1TpFs.jpg",
    "rating": "7.9",
    "match": "96% Match",
    "year": "2021",
    "ageRating": "TV-14",
    "duration": "1h 41m",
    "quality": "4K Ultra HD",
    "description": "Fearless Nepali mountaineer Nimsdai Purja embarks on a seemingly impossible quest to summit all 14 of the world's 8,000-meter peaks in just seven months.",
    "cast": [
      "Nimsdai Purja",
      "Suchana Purja",
      "Klimt Kalsang"
    ],
    "genres": [
      "Mountaineering",
      "Adventure",
      "Extreme",
      "Inspiring"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/8QH5hBOoz08?autoplay=1"
  },
  {
    "id": "shutter-island",
    "title": "Shutter Island",
    "category": "thrillers",
    "categoryName": "Mind-Twisting Thrillers & Mystery",
    "backdrop": "https://image.tmdb.org/t/p/w1280/5bmql5F241I401LO8pC8r4iP84m.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUtwK5ysagvk2Te.jpg",
    "rating": "8.2",
    "match": "98% Match",
    "year": "2010",
    "ageRating": "R",
    "duration": "2h 18m",
    "quality": "4K Ultra HD",
    "description": "A U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane on a secluded island.",
    "cast": [
      "Leonardo DiCaprio",
      "Mark Ruffalo",
      "Ben Kingsley",
      "Michelle Williams"
    ],
    "genres": [
      "Psychological Thriller",
      "Mystery",
      "Mind-Bending",
      "Noir"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/5iaYLCiq5RM?autoplay=1"
  },
  {
    "id": "gone-girl",
    "title": "Gone Girl",
    "category": "thrillers",
    "categoryName": "Mind-Twisting Thrillers & Mystery",
    "backdrop": "https://image.tmdb.org/t/p/w1280/5nbtM3N2fF3i0P78jV92x0U67H.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/qymaJhucquUwjpAC3GBWq6tdqH5.jpg",
    "rating": "8.1",
    "match": "97% Match",
    "year": "2014",
    "ageRating": "R",
    "duration": "2h 29m",
    "quality": "4K Ultra HD",
    "description": "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    "cast": [
      "Ben Affleck",
      "Rosamund Pike",
      "Neil Patrick Harris",
      "Tyler Perry"
    ],
    "genres": [
      "Mystery",
      "Psychological Thriller",
      "Suspense",
      "Drama"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/2-_-1nJf8Vg?autoplay=1"
  },
  {
    "id": "zodiac",
    "title": "Zodiac",
    "category": "thrillers",
    "categoryName": "Mind-Twisting Thrillers & Mystery",
    "backdrop": "https://image.tmdb.org/t/p/w1280/b6ba181vXzQ041rYyA8h3bB1K7k.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/6WBe96yq5vgf77w09QO7zM7b8gQ.jpg",
    "rating": "8.0",
    "match": "96% Match",
    "year": "2007",
    "ageRating": "R",
    "duration": "2h 37m",
    "quality": "4K Ultra HD",
    "description": "A cartoonist becomes an amateur detective obsessed with tracking down the mysterious Zodiac Killer who terrorizes Northern California.",
    "cast": [
      "Jake Gyllenhaal",
      "Mark Ruffalo",
      "Robert Downey Jr.",
      "Anthony Edwards"
    ],
    "genres": [
      "Crime",
      "Mystery",
      "Thriller",
      "True Crime"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/yNncHPl1UXg?autoplay=1"
  },
  {
    "id": "prisoners",
    "title": "Prisoners",
    "category": "thrillers",
    "categoryName": "Mind-Twisting Thrillers & Mystery",
    "backdrop": "https://image.tmdb.org/t/p/w1280/cIu20T4aL2U8Jc1pY23O7q7Vz4H.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/tuZhZ6W0bXq9hGjU9B8cR9xJ8xG.jpg",
    "rating": "8.2",
    "match": "98% Match",
    "year": "2013",
    "ageRating": "R",
    "duration": "2h 33m",
    "quality": "4K Ultra HD",
    "description": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
    "cast": [
      "Hugh Jackman",
      "Jake Gyllenhaal",
      "Viola Davis",
      "Paul Dano"
    ],
    "genres": [
      "Crime",
      "Drama",
      "Mystery",
      "Dark Suspense"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/bpXfcT61pnA?autoplay=1"
  },
  {
    "id": "se7en",
    "title": "Se7en",
    "category": "thrillers",
    "categoryName": "Mind-Twisting Thrillers & Mystery",
    "backdrop": "https://image.tmdb.org/t/p/w1280/GZJk0gD9R04sWfVqKz38Q4yE41k.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/69Sns8WoET6C69YIZPav4wmARv7.jpg",
    "rating": "8.6",
    "match": "99% Match",
    "year": "1995",
    "ageRating": "R",
    "duration": "2h 07m",
    "quality": "4K Ultra HD",
    "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    "cast": [
      "Brad Pitt",
      "Morgan Freeman",
      "Gwyneth Paltrow",
      "Kevin Spacey"
    ],
    "genres": [
      "Crime",
      "Mystery",
      "Psychological Thriller",
      "Iconic"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/znmZoVkCjpI?autoplay=1"
  },
  {
    "id": "knives-out-mystery",
    "title": "Knives Out",
    "category": "thrillers",
    "categoryName": "Mind-Twisting Thrillers & Mystery",
    "backdrop": "https://image.tmdb.org/t/p/w1280/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    "rating": "7.9",
    "match": "97% Match",
    "year": "2019",
    "ageRating": "PG-13",
    "duration": "2h 10m",
    "quality": "4K Ultra HD",
    "description": "A detective investigates the death of a patriarch of an eccentric, combative family.",
    "cast": [
      "Daniel Craig",
      "Ana de Armas",
      "Chris Evans",
      "Jamie Lee Curtis"
    ],
    "genres": [
      "Whodunnit",
      "Mystery",
      "Comedy",
      "Clever"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/qGqiHJTsRkQ?autoplay=1"
  },
  {
    "id": "parasite",
    "title": "Parasite",
    "category": "thrillers",
    "categoryName": "Mind-Twisting Thrillers & Mystery",
    "backdrop": "https://image.tmdb.org/t/p/w1280/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "rating": "8.5",
    "match": "99% Match",
    "year": "2019",
    "ageRating": "R",
    "duration": "2h 12m",
    "quality": "4K Ultra HD",
    "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "cast": [
      "Song Kang-ho",
      "Lee Sun-kyun",
      "Cho Yeo-jeong",
      "Choi Woo-shik"
    ],
    "genres": [
      "Thriller",
      "Drama",
      "Black Comedy",
      "Academy Award Winner"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/5xH0RZEWYxw?autoplay=1"
  },
  {
    "id": "nightcrawler",
    "title": "Nightcrawler",
    "category": "thrillers",
    "categoryName": "Mind-Twisting Thrillers & Mystery",
    "backdrop": "https://image.tmdb.org/t/p/w1280/j9Op2Td1GDOtLVMdKQxwXbR53tP.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/5X2wznmty4sEAHkFTdAJlREBUDs.jpg",
    "rating": "7.8",
    "match": "95% Match",
    "year": "2014",
    "ageRating": "R",
    "duration": "1h 57m",
    "quality": "HD",
    "description": "When Louis Bloom, a con man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant.",
    "cast": [
      "Jake Gyllenhaal",
      "Rene Russo",
      "Riz Ahmed",
      "Bill Paxton"
    ],
    "genres": [
      "Crime",
      "Drama",
      "Thriller",
      "Intense"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/u1uP_8vJir8?autoplay=1"
  },
  {
    "id": "death-note",
    "title": "Death Note",
    "category": "anime",
    "categoryName": "Anime & Japanese Animation",
    "backdrop": "https://image.tmdb.org/t/p/w1280/9ex2tRbOsHGvOC7rpKEj8T06bkZ.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/tCZFjgTIpH7P36ssnvdA0f7iY5.jpg",
    "rating": "9.0",
    "match": "99% Match",
    "year": "2006",
    "ageRating": "TV-14",
    "duration": "1 Season",
    "quality": "HD",
    "description": "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    "cast": [
      "Mamoru Miyano",
      "Kappei Yamaguchi",
      "Shidou Nakamura"
    ],
    "genres": [
      "Anime",
      "Psychological Thriller",
      "Supernatural",
      "Mind Games"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/NlJZ-YgAt-c?autoplay=1"
  },
  {
    "id": "chainsaw-man",
    "title": "Chainsaw Man",
    "category": "anime",
    "categoryName": "Anime & Japanese Animation",
    "backdrop": "https://image.tmdb.org/t/p/w1280/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/npdB6eFz4425AIMVQiZ99NW397.jpg",
    "rating": "8.5",
    "match": "98% Match",
    "year": "2022",
    "ageRating": "TV-MA",
    "duration": "1 Season",
    "quality": "4K Ultra HD",
    "description": "Denji is a teenage boy living with a Chainsaw Devil named Pochita. When he is betrayed and killed, Pochita fuses with his heart, resurrecting him as Chainsaw Man.",
    "cast": [
      "Kikunosuke Toya",
      "Tomori Kusunoki",
      "Shogo Sakata",
      "Fairouz Ai"
    ],
    "genres": [
      "Anime",
      "Dark Fantasy",
      "Gore",
      "Action"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/jk7QvEmtj_Y?autoplay=1"
  },
  {
    "id": "suzume",
    "title": "Suzume",
    "category": "anime",
    "categoryName": "Anime & Japanese Animation",
    "backdrop": "https://image.tmdb.org/t/p/w1280/1inF8N5x2k5yO97qT5n8cM6ZzR5.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/vIeu8WyssvrtQx2bhkqJy7ypNq4.jpg",
    "rating": "8.3",
    "match": "97% Match",
    "year": "2023",
    "ageRating": "PG",
    "duration": "2h 02m",
    "quality": "4K Ultra HD",
    "description": "A 17-year-old girl named Suzume helps a mysterious young man close mystical doors that are unleashing disasters all across Japan.",
    "cast": [
      "Nanoka Hara",
      "Hokuto Matsumura",
      "Eri Fukatsu"
    ],
    "genres": [
      "Anime",
      "Fantasy",
      "Adventure",
      "Emotional"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/6c-g75K9yW8?autoplay=1"
  },
  {
    "id": "solo-leveling",
    "title": "Solo Leveling",
    "category": "anime",
    "categoryName": "Anime & Japanese Animation",
    "backdrop": "https://image.tmdb.org/t/p/w1280/9yY9P1bNqVvjI0fI9v4XbYkM3aA.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/geCRueV3ElhRTr0xtJuPxJ8PGgd.jpg",
    "rating": "8.6",
    "match": "98% Match",
    "year": "2024",
    "ageRating": "TV-MA",
    "duration": "1 Season",
    "quality": "4K Ultra HD",
    "description": "In a world where hunters must battle deadly monsters to protect humanity, Sung Jinwoo, the weakest hunter of all mankind, is chosen by a mysterious quest program.",
    "cast": [
      "Taito Ban",
      "Genta Nakamura",
      "Reina Ueda"
    ],
    "genres": [
      "Anime",
      "Action",
      "Fantasy",
      "Overpowered"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/91N9yD7m-q0?autoplay=1"
  },
  {
    "id": "it-chapter-two",
    "title": "It: Chapter Two",
    "category": "horror",
    "categoryName": "Horror & Dark Suspense Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/zfE0R9WsvaFu68V95IRq85W2k4E.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/zfE0R9WsvaFu68V95IRq85W2k4E.jpg",
    "rating": "6.5",
    "match": "94% Match",
    "year": "2019",
    "ageRating": "R",
    "duration": "2h 49m",
    "quality": "4K Ultra HD",
    "description": "Twenty-seven years after their terrifying encounter with Pennywise the Clown, the childhood members of the Losers Club return to Derry to face the ancient nightmare once and for all.",
    "cast": [
      "Jessica Chastain",
      "James McAvoy",
      "Bill Hader",
      "Bill Skarsgård"
    ],
    "genres": [
      "Horror",
      "Supernatural",
      "Terror",
      "Clowns"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/xhJ5P7Up3jA?autoplay=1"
  },
  {
    "id": "scream-vi",
    "title": "Scream VI",
    "category": "horror",
    "categoryName": "Horror & Dark Suspense Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/44immBwzhDVyjn87b3x3Kf9x4Sm.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/wDWwt8QCGulTCnfioRw89guUNIN.jpg",
    "rating": "6.6",
    "match": "95% Match",
    "year": "2023",
    "ageRating": "R",
    "duration": "2h 02m",
    "quality": "4K Ultra HD",
    "description": "The four survivors of the Woodsboro Ghostface killings leave their hometown behind and attempt to start a fresh chapter in New York City, only to be hunted by a relentless new killer.",
    "cast": [
      "Melissa Barrera",
      "Jenna Ortega",
      "Courteney Cox",
      "Jasmin Savoy Brown"
    ],
    "genres": [
      "Slasher",
      "Horror",
      "Mystery",
      "Ghostface"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/h74AXurYTas?autoplay=1"
  },
  {
    "id": "the-nun-2",
    "title": "The Nun II",
    "category": "horror",
    "categoryName": "Horror & Dark Suspense Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/53z2fX7TGZ73vY2vP7pW95K9eZ.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/5gzzk7m39Y4A41z96JtE1gM2Uv7.jpg",
    "rating": "6.6",
    "match": "93% Match",
    "year": "2023",
    "ageRating": "R",
    "duration": "1h 50m",
    "quality": "4K Ultra HD",
    "description": "1956 France. A priest is murdered and evil is spreading. Sister Irene once again comes face-to-face with Valak, the demon nun.",
    "cast": [
      "Taissa Farmiga",
      "Jonas Bloquet",
      "Storm Reid",
      "Bonnie Aarons"
    ],
    "genres": [
      "Horror",
      "Supernatural",
      "Demons",
      "The Conjuring Universe"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/QF-oyCwaAr8?autoplay=1"
  },
  {
    "id": "everything-everywhere",
    "title": "Everything Everywhere All at Once",
    "category": "scifi",
    "categoryName": "Sci-Fi & Mind-Bending Fiction Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/ss0Os3uWbQO0Z5vLq7Xh1L1hB7F.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/w3LxiVYPqRLexPkaekcr9BTMZ9S.jpg",
    "rating": "8.8",
    "match": "99% Match",
    "year": "2022",
    "ageRating": "R",
    "duration": "2h 19m",
    "quality": "4K Ultra HD",
    "description": "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
    "cast": [
      "Michelle Yeoh",
      "Ke Huy Quan",
      "Stephanie Hsu",
      "Jamie Lee Curtis"
    ],
    "genres": [
      "Multiverse",
      "Sci-Fi",
      "Mind-Bending",
      "Oscar Winner"
    ],
    "isOriginal": false,
    "trailerUrl": "https://www.youtube.com/embed/wxN1T1uxQ2g?autoplay=1"
  },
  {
    "id": "dont-look-up",
    "title": "Don't Look Up",
    "category": "scifi",
    "categoryName": "Sci-Fi & Mind-Bending Fiction Movies",
    "backdrop": "https://image.tmdb.org/t/p/w1280/4lOkzLlGdxLf7gPsN1oMkKXeFMy.jpg",
    "poster": "https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg",
    "rating": "7.2",
    "match": "94% Match",
    "year": "2021",
    "ageRating": "R",
    "duration": "2h 18m",
    "quality": "4K Ultra HD",
    "description": "Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth — but nobody cares.",
    "cast": [
      "Leonardo DiCaprio",
      "Jennifer Lawrence",
      "Meryl Streep",
      "Jonah Hill"
    ],
    "genres": [
      "Satire",
      "Sci-Fi",
      "Dark Comedy",
      "Thought-Provoking"
    ],
    "isOriginal": true,
    "trailerUrl": "https://www.youtube.com/embed/RbIGmRpKQCM?autoplay=1"
  }
];

// =========================================================================
// 2. CATEGORY CONFIGURATIONS
// =========================================================================
const categoriesConfig = [
  { id: 'webseries', name: 'Famous TV Series & Binge Shows', shortName: 'TV Series', icon: '📺', isSeries: true },
  { id: 'top10', name: 'Top 10 in Movies & TV Today', shortName: 'Top 10', icon: '🔥', isTop10: true },
  { id: 'trending', name: 'Trending Now', shortName: 'Trending', icon: '⚡' },
  { id: 'horror', name: 'Horror & Dark Suspense Movies', shortName: 'Horror', icon: '👻', isMovie: true },
  { id: 'scifi', name: 'Sci-Fi & Mind-Bending Fiction Movies', shortName: 'Sci-Fi & Fiction', icon: '🚀', isMovie: true },
  { id: 'anime', name: 'Anime & Japanese Animation', shortName: 'Anime', icon: '⚔️', isAnime: true },
  { id: 'action', name: 'Action & Adventure Blockbusters', shortName: 'Action', icon: '💥', isMovie: true },
  { id: 'thrillers', name: 'Mind-Twisting Thrillers & Mystery', shortName: 'Thrillers', icon: '🔍', isMovie: true },
  { id: 'originals', name: 'Netflix Originals & Exclusives', shortName: 'Originals', icon: '✨', isOriginal: true },
  { id: 'comedy', name: 'Binge-Worthy Comedies & Sitcoms', shortName: 'Comedy', icon: '😂', isSeries: true },
  { id: 'romance', name: 'Romance & Romantic Dramas', shortName: 'Romance', icon: '❤️', isMovie: true },
  { id: 'dramas', name: 'Critically Acclaimed TV Dramas', shortName: 'Dramas', icon: '🎭', isSeries: true },
  { id: 'docs', name: 'Documentaries & Real Life', shortName: 'Documentaries', icon: '🌍' }
];

// Featured titles to cycle on Hero Billboard
const featuredHeroIds = [
  'stranger-things-ws',
  'dune-part-two',
  'squid-game-ws',
  'oppenheimer',
  'attack-on-titan',
  'shutter-island',
  'arcane'
];

// =========================================================================
// 3. APPLICATION STATE
// =========================================================================
let myList = JSON.parse(localStorage.getItem('netflix_my_list') || '[]');
let isMuted = true;
let activeModalMovie = null;
let currentNav = 'home'; // 'home', 'tv', 'movies', 'new', 'list', 'browse'
let activeCategoryFilter = 'all'; // 'all' or category id
let currentViewMode = 'rows'; // 'rows' or 'grid'
let currentHeroIndex = 0;

function saveMyList() {
  localStorage.setItem('netflix_my_list', JSON.stringify(myList));
  if (currentNav === 'list' || activeCategoryFilter === 'list') {
    renderMainContent();
  } else {
    renderMyListRow();
  }
}

function isInMyList(movieId) {
  return myList.includes(movieId);
}

function toggleMyList(movieId) {
  const movie = movieDatabase.find(m => m.id === movieId);
  if (!movie) return;

  if (isInMyList(movieId)) {
    myList = myList.filter(id => id !== movieId);
    showToast(`Removed "${movie.title}" from My List`);
  } else {
    myList.push(movieId);
    showToast(`Added "${movie.title}" to My List`);
  }
  saveMyList();
  updateCardBookmarkIcons();
}

// =========================================================================
// 4. SOUND SYNTHESIZER: AUTHENTIC NETFLIX "TA-DUM"
// =========================================================================
function playNetflixTaDum() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;

    // Deep Bass Boom
    const boomOsc = ctx.createOscillator();
    const boomGain = ctx.createGain();
    boomOsc.type = 'triangle';
    boomOsc.frequency.setValueAtTime(80, now);
    boomOsc.frequency.exponentialRampToValueAtTime(32, now + 0.85);

    boomGain.gain.setValueAtTime(0.7, now);
    boomGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    boomOsc.connect(boomGain);
    boomGain.connect(ctx.destination);
    boomOsc.start(now);
    boomOsc.stop(now + 1.25);

    // Cinematic Resonant Chime
    const chimeOsc = ctx.createOscillator();
    const chimeGain = ctx.createGain();
    chimeOsc.type = 'sine';
    chimeOsc.frequency.setValueAtTime(293.66, now + 0.12); // D4
    chimeOsc.frequency.exponentialRampToValueAtTime(146.83, now + 1.8); // D3

    chimeGain.gain.setValueAtTime(0.001, now);
    chimeGain.gain.linearRampToValueAtTime(0.4, now + 0.18);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

    chimeOsc.connect(chimeGain);
    chimeGain.connect(ctx.destination);
    chimeOsc.start(now + 0.12);
    chimeOsc.stop(now + 2.2);
  } catch (err) {
    // AudioContext blocked by user-gesture policy before interaction
  }
}

// =========================================================================
// 5. POSTER FALLBACK GENERATOR
// =========================================================================
function getFallbackPoster(title, isVertical = false) {
  const safeTitle = (title || 'Netflix Original').replace(/'/g, '').replace(/"/g, '');
  const width = isVertical ? 300 : 420;
  const height = isVertical ? 450 : 236;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#262626"/>
        <stop offset="40%" stop-color="#181818"/>
        <stop offset="100%" stop-color="#0e0e0e"/>
      </linearGradient>
      <radialGradient id="cardGlow" cx="50%" cy="38%" r="60%">
        <stop offset="0%" stop-color="#e50914" stop-opacity="0.38"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
    <rect width="${width}" height="${height}" fill="url(#cardGlow)"/>
    <path d="M${width/2 - 16} ${height/2 - 38} v76 l32 -76 v76" fill="none" stroke="#e50914" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="${width/2}" y="${height - 24}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="700" font-size="${isVertical ? 15 : 13}" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
      ${safeTitle}
    </text>
  </svg>`;

  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function handleImageError(img, title, isVertical = false) {
  if (!img || img.dataset.errorHandled) return;
  img.dataset.errorHandled = 'true';
  img.src = getFallbackPoster(title, isVertical);
}

// =========================================================================
// 6. HERO BILLBOARD
// =========================================================================
function setupHeroBillboard() {
  updateHeroBillboard();

  const heroPlayBtn = document.getElementById('heroPlayBtn');
  const heroInfoBtn = document.getElementById('heroInfoBtn');
  const heroMuteBtn = document.getElementById('heroMuteBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');

  if (heroPlayBtn) {
    heroPlayBtn.onclick = () => {
      const currentMovie = getCurrentHeroMovie();
      playNetflixTaDum();
      openTrailerPlayer(currentMovie);
    };
  }

  if (heroInfoBtn) {
    heroInfoBtn.onclick = () => {
      const currentMovie = getCurrentHeroMovie();
      openModal(currentMovie);
    };
  }

  if (heroNextBtn) {
    heroNextBtn.onclick = () => {
      currentHeroIndex = (currentHeroIndex + 1) % featuredHeroIds.length;
      updateHeroBillboard();
    };
  }

  if (heroMuteBtn) {
    heroMuteBtn.onclick = () => {
      isMuted = !isMuted;
      heroMuteBtn.innerHTML = isMuted 
        ? `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`
        : `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`;
      showToast(isMuted ? 'Audio Muted' : 'Audio Unmuted');
    };
  }
}

function getCurrentHeroMovie() {
  const heroId = featuredHeroIds[currentHeroIndex];
  return movieDatabase.find(m => m.id === heroId) || movieDatabase[0];
}

function updateHeroBillboard() {
  const heroMovie = getCurrentHeroMovie();
  const heroImg = document.getElementById('heroBackdropImg');
  const heroTitle = document.getElementById('heroTitle');
  const heroSynopsis = document.getElementById('heroSynopsis');

  if (heroImg) {
    heroImg.onerror = () => handleImageError(heroImg, heroMovie.title, false);
    heroImg.src = heroMovie.backdrop;
  }
  if (heroTitle) heroTitle.textContent = heroMovie.title.toUpperCase();
  if (heroSynopsis) heroSynopsis.textContent = heroMovie.description;
}

// =========================================================================
// 7. CARD GENERATORS
// =========================================================================
function createStandardMovieCard(movie) {
  const isBookmarked = isInMyList(movie.id);
  const card = document.createElement('div');
  card.className = currentViewMode === 'rows' ? 'swiper-slide' : 'grid-card-item';

  card.innerHTML = `
    <div class="movie-card" data-id="${movie.id}">
      <img class="movie-card-thumb" src="${movie.backdrop}" alt="${movie.title}" loading="lazy" />
      ${movie.isOriginal ? `<div class="n-card-badge">N</div>` : ''}
      
      <!-- Netflix Expanding Hover Preview -->
      <div class="movie-card-hover">
        <div class="hover-media">
          <img src="${movie.backdrop}" alt="${movie.title}" />
          ${movie.isOriginal ? `<div class="n-card-badge">N</div>` : ''}
        </div>
        <div class="hover-details">
          <div class="hover-actions">
            <div class="actions-left">
              <button class="icon-btn-circle icon-btn-play" title="Play Trailer" data-action="play">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <button class="icon-btn-circle ${isBookmarked ? 'active' : ''}" title="${isBookmarked ? 'Remove from My List' : 'Add to My List'}" data-action="bookmark">
                <svg class="icon-bookmark" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  ${isBookmarked 
                    ? `<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>` 
                    : `<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>`}
                </svg>
              </button>
              <button class="icon-btn-circle" title="I like this" data-action="like">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
              </button>
            </div>
            <button class="icon-btn-circle" title="More Info" data-action="info">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
          <div class="hover-title">${movie.title}</div>
          <div class="hover-meta">
            <span class="hover-match">${movie.match}</span>
            <span class="hover-badge">${movie.ageRating}</span>
            <span class="hover-duration">${movie.duration}</span>
            <span class="hover-badge">${movie.quality === '4K Ultra HD' ? '4K' : 'HD'}</span>
          </div>
          <div class="hover-genres">
            ${movie.genres.slice(0, 3).map(g => `<span>${g}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="card-title-label">${movie.title}</div>
  `;

  const thumbImg = card.querySelector('.movie-card-thumb');
  const hoverImg = card.querySelector('.hover-media img');
  if (thumbImg) {
    thumbImg.onerror = () => handleImageError(thumbImg, movie.title, false);
  }
  if (hoverImg) {
    hoverImg.onerror = () => handleImageError(hoverImg, movie.title, false);
  }

  attachCardEvents(card, movie);
  return card;
}

function createTop10Card(movie) {
  const card = document.createElement('div');
  card.className = currentViewMode === 'rows' ? 'swiper-slide' : 'grid-card-item';
  
  card.innerHTML = `
    <div class="top10-card" data-id="${movie.id}">
      <div class="top10-rank">${movie.rank}</div>
      <div class="top10-poster-wrap">
        <img src="${movie.poster}" alt="${movie.title}" loading="lazy" />
        ${movie.isOriginal ? `<div class="top10-n-tag">N</div>` : ''}
      </div>
    </div>
  `;

  const posterImg = card.querySelector('.top10-poster-wrap img');
  if (posterImg) {
    posterImg.onerror = () => handleImageError(posterImg, movie.title, true);
  }

  card.addEventListener('click', () => {
    openModal(movie);
  });

  return card;
}

function attachCardEvents(cardElement, movie) {
  const playBtn = cardElement.querySelector('[data-action="play"]');
  const bookmarkBtn = cardElement.querySelector('[data-action="bookmark"]');
  const likeBtn = cardElement.querySelector('[data-action="like"]');
  const infoBtn = cardElement.querySelector('[data-action="info"]');
  const cardMain = cardElement.querySelector('.movie-card');

  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playNetflixTaDum();
      openTrailerPlayer(movie);
    });
  }

  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMyList(movie.id);
    });
  }

  if (likeBtn) {
    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showToast(`Liked "${movie.title}"`);
    });
  }

  if (infoBtn) {
    infoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(movie);
    });
  }

  if (cardMain) {
    cardMain.addEventListener('click', () => {
      openModal(movie);
    });
  }
}

// =========================================================================
// 8. MASTER CONTENT RENDERER (CAROUSEL ROWS VS GRID VIEW)
// =========================================================================
function getFilteredCategories() {
  if (activeCategoryFilter !== 'all') {
    const single = categoriesConfig.find(c => c.id === activeCategoryFilter);
    return single ? [single] : categoriesConfig;
  }

  if (currentNav === 'tv') {
    return categoriesConfig.filter(c => c.isSeries || c.id === 'top10' || c.id === 'docs' || c.id === 'anime');
  } else if (currentNav === 'movies') {
    return categoriesConfig.filter(c => c.isMovie || c.id === 'trending' || c.id === 'top10' || c.id === 'originals');
  } else if (currentNav === 'new') {
    return categoriesConfig.filter(c => c.id === 'trending' || c.id === 'top10' || c.id === 'originals');
  } else if (currentNav === 'browse') {
    return categoriesConfig.filter(c => c.id === 'anime' || c.id === 'webseries' || c.id === 'dramas');
  }

  return categoriesConfig;
}

function renderMainContent() {
  const rowsContainer = document.getElementById('categoriesContainer');
  const gridContainer = document.getElementById('categoryGridContainer');
  if (!rowsContainer || !gridContainer) return;

  // Handle My List dedicated view
  if (currentNav === 'list' || activeCategoryFilter === 'list') {
    rowsContainer.style.display = 'none';
    gridContainer.style.display = 'grid';
    renderMyListFullView();
    return;
  }

  if (currentViewMode === 'grid') {
    rowsContainer.style.display = 'none';
    gridContainer.style.display = 'grid';
    renderGridView();
  } else {
    gridContainer.style.display = 'none';
    rowsContainer.style.display = 'block';
    renderCarouselRows();
  }
}

// Render Carousel Rows
function renderCarouselRows() {
  const container = document.getElementById('categoriesContainer');
  if (!container) return;
  container.innerHTML = '';

  // 1. My List Row (if items saved)
  const myListSection = document.createElement('section');
  myListSection.className = 'media-section';
  myListSection.id = 'myListSection';
  myListSection.style.display = myList.length > 0 ? 'block' : 'none';
  myListSection.innerHTML = `
    <div class="section-header">
      <div class="section-title">
        <span class="section-accent-dot"></span>
        <h2>My List</h2>
        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
      </div>
      <button class="section-explore-btn" onclick="switchToCategoryGrid('list')">Explore All &gt;</button>
    </div>
    <div class="swiper" id="myListSwiper">
      <div class="swiper-wrapper" id="myListWrapper"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  `;
  container.appendChild(myListSection);

  // 2. Render Categories
  const categoriesToRender = getFilteredCategories();

  categoriesToRender.forEach(cat => {
    const movies = movieDatabase.filter(m => m.category === cat.id);
    if (movies.length === 0) return;

    const section = document.createElement('section');
    section.className = 'media-section';
    section.id = `category-${cat.id}`;

    section.innerHTML = `
      <div class="section-header">
        <div class="section-title" onclick="switchToCategoryGrid('${cat.id}')">
          <span class="section-accent-dot"></span>
          <h2>${cat.name}</h2>
          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
        </div>
        <button class="section-explore-btn" onclick="switchToCategoryGrid('${cat.id}')">Explore All &gt;</button>
      </div>
      <div class="swiper ${cat.isTop10 ? 'top10-swiper' : 'standard-swiper'}">
        <div class="swiper-wrapper" id="wrapper-${cat.id}"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    `;

    container.appendChild(section);

    const wrapper = section.querySelector(`#wrapper-${cat.id}`);
    movies.forEach(movie => {
      if (cat.isTop10) {
        wrapper.appendChild(createTop10Card(movie));
      } else {
        wrapper.appendChild(createStandardMovieCard(movie));
      }
    });
  });

  renderMyListRow();
  initSwipers();
}

// Render Full Grid View
function renderGridView() {
  const gridContainer = document.getElementById('categoryGridContainer');
  if (!gridContainer) return;
  gridContainer.innerHTML = '';

  const activeCatObj = categoriesConfig.find(c => c.id === activeCategoryFilter);
  const headerHtml = `
    <div class="grid-category-header">
      <div class="grid-category-title">
        <span class="section-accent-dot"></span>
        <h2>${activeCatObj ? activeCatObj.name : 'All Titles'}</h2>
      </div>
      <div class="grid-category-count" id="gridCount">Showing titles</div>
    </div>
  `;
  gridContainer.insertAdjacentHTML('beforeend', headerHtml);

  let movies = [];
  if (activeCategoryFilter !== 'all') {
    movies = movieDatabase.filter(m => m.category === activeCategoryFilter);
  } else {
    const cats = getFilteredCategories().map(c => c.id);
    movies = movieDatabase.filter(m => cats.includes(m.category));
  }

  const countElem = document.getElementById('gridCount');
  if (countElem) {
    countElem.textContent = `${movies.length} titles available`;
  }

  movies.forEach(movie => {
    gridContainer.appendChild(createStandardMovieCard(movie));
  });
}

function renderMyListFullView() {
  const gridContainer = document.getElementById('categoryGridContainer');
  if (!gridContainer) return;
  gridContainer.innerHTML = '';

  const savedMovies = movieDatabase.filter(m => isInMyList(m.id));

  const headerHtml = `
    <div class="grid-category-header">
      <div class="grid-category-title">
        <span class="section-accent-dot"></span>
        <h2>My List</h2>
      </div>
      <div class="grid-category-count">${savedMovies.length} saved titles</div>
    </div>
  `;
  gridContainer.insertAdjacentHTML('beforeend', headerHtml);

  if (savedMovies.length === 0) {
    gridContainer.insertAdjacentHTML('beforeend', `
      <div style="grid-column: 1 / -1; text-align: center; padding: 5rem 1rem; color: #888;">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin-bottom: 1rem; opacity: 0.6;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <h3 style="color: #fff; font-size: 1.3rem;">You haven't added any titles to your list yet.</h3>
        <p style="margin-top: 0.5rem; font-size: 0.95rem;">Browse movies and TV series, and click the <strong>+</strong> icon to save your favorites here!</p>
      </div>
    `);
  } else {
    savedMovies.forEach(movie => {
      gridContainer.appendChild(createStandardMovieCard(movie));
    });
  }
}

function switchToCategoryGrid(categoryId) {
  activeCategoryFilter = categoryId;
  currentViewMode = 'grid';
  updateSubnavState();
  renderMainContent();
  window.scrollTo({ top: 300, behavior: 'smooth' });
}

function renderMyListRow() {
  const myListSection = document.getElementById('myListSection');
  const myListWrapper = document.getElementById('myListWrapper');
  if (!myListSection || !myListWrapper) return;

  const myMovies = movieDatabase.filter(m => isInMyList(m.id));

  if (myMovies.length === 0) {
    myListSection.style.display = 'none';
    myListWrapper.innerHTML = '';
  } else {
    myListSection.style.display = 'block';
    myListWrapper.innerHTML = '';
    myMovies.forEach(movie => {
      myListWrapper.appendChild(createStandardMovieCard(movie));
    });
    initSwipers();
  }
}

function updateCardBookmarkIcons() {
  document.querySelectorAll('[data-action="bookmark"]').forEach(btn => {
    const card = btn.closest('.movie-card');
    if (!card) return;
    const movieId = card.getAttribute('data-id');
    const isBookmarked = isInMyList(movieId);

    btn.title = isBookmarked ? 'Remove from My List' : 'Add to My List';
    btn.innerHTML = `
      <svg class="icon-bookmark" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        ${isBookmarked 
          ? `<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>` 
          : `<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>`}
      </svg>
    `;
  });
}

// =========================================================================
// 9. SWIPER INITIALIZATION
// =========================================================================
function initSwipers() {
  document.querySelectorAll('.standard-swiper, #myListSwiper').forEach(container => {
    if (container.swiper) container.swiper.destroy(true, true);

    new Swiper(container, {
      slidesPerView: 5.2,
      spaceBetween: 8,
      speed: 500,
      slidesPerGroup: 4,
      grabCursor: false,
      navigation: {
        nextEl: container.querySelector('.swiper-button-next'),
        prevEl: container.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        320: { slidesPerView: 1.8, spaceBetween: 6, slidesPerGroup: 1 },
        600: { slidesPerView: 2.8, spaceBetween: 8, slidesPerGroup: 2 },
        900: { slidesPerView: 3.8, spaceBetween: 8, slidesPerGroup: 3 },
        1200: { slidesPerView: 4.8, spaceBetween: 8, slidesPerGroup: 4 },
        1500: { slidesPerView: 5.8, spaceBetween: 10, slidesPerGroup: 5 }
      }
    });
  });

  document.querySelectorAll('.top10-swiper').forEach(container => {
    if (container.swiper) container.swiper.destroy(true, true);

    new Swiper(container, {
      slidesPerView: 4.5,
      spaceBetween: 16,
      speed: 500,
      slidesPerGroup: 3,
      grabCursor: false,
      navigation: {
        nextEl: container.querySelector('.swiper-button-next'),
        prevEl: container.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        320: { slidesPerView: 1.5, spaceBetween: 10, slidesPerGroup: 1 },
        600: { slidesPerView: 2.5, spaceBetween: 12, slidesPerGroup: 2 },
        900: { slidesPerView: 3.5, spaceBetween: 14, slidesPerGroup: 3 },
        1300: { slidesPerView: 4.5, spaceBetween: 16, slidesPerGroup: 4 }
      }
    });
  });
}

// =========================================================================
// 10. SUBNAV, GENRE DROPDOWN, PILLS & VIEW TOGGLE
// =========================================================================
function setupSubnavAndFilters() {
  const dropdownWrapper = document.getElementById('genreDropdownWrapper');
  const dropdownBtn = document.getElementById('genreDropdownBtn');
  const dropdownMenu = document.getElementById('genreDropdownMenu');
  const viewRowsBtn = document.getElementById('viewRowsBtn');
  const viewGridBtn = document.getElementById('viewGridBtn');

  // Toggle Dropdown
  if (dropdownBtn && dropdownWrapper) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownWrapper.classList.toggle('open');
    });

    window.addEventListener('click', () => {
      dropdownWrapper.classList.remove('open');
    });
  }

  // Genre dropdown item click
  document.querySelectorAll('.genre-option').forEach(option => {
    option.addEventListener('click', () => {
      const catId = option.getAttribute('data-category');
      activeCategoryFilter = catId;
      dropdownWrapper.classList.remove('open');
      updateSubnavState();

      if (catId === 'all') {
        currentViewMode = 'rows';
        renderMainContent();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetRow = document.getElementById(`category-${catId}`);
        if (targetRow && currentViewMode === 'rows') {
          targetRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          renderMainContent();
        }
      }
    });
  });

  // Category Pills Click
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const catId = pill.getAttribute('data-cat');
      activeCategoryFilter = catId;
      updateSubnavState();

      if (catId === 'all') {
        currentViewMode = 'rows';
        renderMainContent();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetRow = document.getElementById(`category-${catId}`);
        if (targetRow && currentViewMode === 'rows') {
          targetRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          renderMainContent();
        }
      }
    });
  });

  // View Mode Switcher
  if (viewRowsBtn) {
    viewRowsBtn.addEventListener('click', () => {
      currentViewMode = 'rows';
      updateSubnavState();
      renderMainContent();
    });
  }

  if (viewGridBtn) {
    viewGridBtn.addEventListener('click', () => {
      currentViewMode = 'grid';
      updateSubnavState();
      renderMainContent();
    });
  }
}

function updateSubnavState() {
  const subnavTitle = document.getElementById('subnavTitle');
  const genreLabel = document.getElementById('genreCurrentLabel');
  const viewRowsBtn = document.getElementById('viewRowsBtn');
  const viewGridBtn = document.getElementById('viewGridBtn');

  // Update Title
  if (subnavTitle) {
    if (activeCategoryFilter !== 'all') {
      const catObj = categoriesConfig.find(c => c.id === activeCategoryFilter);
      subnavTitle.textContent = catObj ? catObj.name : 'Titles';
    } else if (currentNav === 'tv') {
      subnavTitle.textContent = 'TV Shows & Series';
    } else if (currentNav === 'movies') {
      subnavTitle.textContent = 'Movies & Blockbusters';
    } else if (currentNav === 'new') {
      subnavTitle.textContent = 'New & Popular on Netflix';
    } else if (currentNav === 'list') {
      subnavTitle.textContent = 'My List';
    } else if (currentNav === 'browse') {
      subnavTitle.textContent = 'International & Anime';
    } else {
      subnavTitle.textContent = 'Browse All Titles';
    }
  }

  // Update Dropdown Label
  if (genreLabel) {
    const catObj = categoriesConfig.find(c => c.id === activeCategoryFilter);
    genreLabel.textContent = catObj ? catObj.shortName : 'Categories';
  }

  // Update Active Option in Dropdown
  document.querySelectorAll('.genre-option').forEach(opt => {
    if (opt.getAttribute('data-category') === activeCategoryFilter) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Update Active Pill
  document.querySelectorAll('.cat-pill').forEach(pill => {
    if (pill.getAttribute('data-cat') === activeCategoryFilter) {
      pill.classList.add('active');
      pill.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    } else {
      pill.classList.remove('active');
    }
  });

  // Update View Toggle Buttons
  if (viewRowsBtn && viewGridBtn) {
    if (currentViewMode === 'rows') {
      viewRowsBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
    } else {
      viewGridBtn.classList.add('active');
      viewRowsBtn.classList.remove('active');
    }
  }
}

// =========================================================================
// 11. SEARCH ENGINE
// =========================================================================
function setupSearchEngine() {
  const searchBox = document.getElementById('searchBox');
  const searchBtn = document.getElementById('searchIconBtn');
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const overlay = document.getElementById('searchResultsOverlay');
  const mainContent = document.getElementById('mainContentContainer');
  const subnav = document.getElementById('netflixSubnav');
  const heroSection = document.getElementById('heroSection');
  const queryDisplay = document.getElementById('searchQueryDisplay');
  const resultsCount = document.getElementById('searchResultsCount');
  const resultsGrid = document.getElementById('searchResultsGrid');

  if (!searchBtn || !searchInput) return;

  searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) {
      searchInput.focus();
    } else {
      searchInput.value = '';
      closeSearch();
    }
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    
    if (query.length > 0) {
      searchBox.classList.add('has-text');
      performSearch(query);
    } else {
      searchBox.classList.remove('has-text');
      closeSearch();
    }
  });

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchBox.classList.remove('has-text');
      closeSearch();
      searchInput.focus();
    });
  }

  function performSearch(query) {
    const matches = movieDatabase.filter(movie => {
      return (
        movie.title.toLowerCase().includes(query) ||
        movie.genres.some(g => g.toLowerCase().includes(query)) ||
        movie.cast.some(c => c.toLowerCase().includes(query)) ||
        movie.categoryName.toLowerCase().includes(query)
      );
    });

    if (heroSection) heroSection.style.display = 'none';
    if (mainContent) mainContent.style.display = 'none';
    if (subnav) subnav.style.display = 'none';
    if (overlay) overlay.classList.add('active');

    if (queryDisplay) queryDisplay.textContent = `"${query}"`;
    if (resultsCount) resultsCount.textContent = `${matches.length} titles found`;

    if (resultsGrid) {
      resultsGrid.innerHTML = '';
      if (matches.length === 0) {
        resultsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0; color: #777;">
            <h3>No movies or TV shows matched your query.</h3>
            <p style="margin-top: 0.5rem; font-size: 0.9rem;">Suggestions: Try another title, an actor's name, or a genre like Sci-Fi, Horror, or Anime.</p>
          </div>
        `;
      } else {
        matches.forEach(movie => {
          resultsGrid.appendChild(createStandardMovieCard(movie));
        });
      }
    }
  }

  function closeSearch() {
    if (overlay) overlay.classList.remove('active');
    if (heroSection) heroSection.style.display = 'block';
    if (mainContent) mainContent.style.display = 'block';
    if (subnav) subnav.style.display = 'flex';
  }
}

// =========================================================================
// 12. DETAIL MODAL & RECOMMENDATIONS
// =========================================================================
function setupDetailModal() {
  const modal = document.getElementById('movieModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const playBtn = document.getElementById('modalPlayBtn');
  const listBtn = document.getElementById('modalListBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeTrailerPlayer();
    }
  });

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (activeModalMovie) {
        playNetflixTaDum();
        openTrailerPlayer(activeModalMovie);
      }
    });
  }

  if (listBtn) {
    listBtn.addEventListener('click', () => {
      if (activeModalMovie) {
        toggleMyList(activeModalMovie.id);
        updateModalListButton();
      }
    });
  }
}

function openModal(movie) {
  if (!movie) return;
  activeModalMovie = movie;

  const modal = document.getElementById('movieModal');
  const heroImg = document.getElementById('modalHeroImg');
  const title = document.getElementById('modalTitle');
  const match = document.getElementById('modalMatch');
  const year = document.getElementById('modalYear');
  const age = document.getElementById('modalAge');
  const duration = document.getElementById('modalDuration');
  const quality = document.getElementById('modalQuality');
  const synopsis = document.getElementById('modalSynopsis');
  const cast = document.getElementById('modalCast');
  const genres = document.getElementById('modalGenres');
  const category = document.getElementById('modalCategory');

  if (heroImg) {
    heroImg.onerror = () => handleImageError(heroImg, movie.title, false);
    heroImg.src = movie.backdrop;
  }
  if (title) title.textContent = movie.title;
  if (match) match.textContent = movie.match;
  if (year) year.textContent = movie.year;
  if (age) age.textContent = movie.ageRating;
  if (duration) duration.textContent = movie.duration;
  if (quality) quality.textContent = movie.quality;
  if (synopsis) synopsis.textContent = movie.description;
  if (cast) cast.textContent = movie.cast.join(', ');
  if (genres) genres.textContent = movie.genres.join(', ');
  if (category) category.textContent = movie.categoryName;

  updateModalListButton();
  renderModalRecommendations(movie);

  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('movieModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  activeModalMovie = null;
}

function updateModalListButton() {
  const listBtn = document.getElementById('modalListBtn');
  if (!listBtn || !activeModalMovie) return;

  const isBookmarked = isInMyList(activeModalMovie.id);
  listBtn.innerHTML = `
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      ${isBookmarked 
        ? `<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>` 
        : `<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>`}
    </svg>
    <span>${isBookmarked ? 'In My List' : 'Add to My List'}</span>
  `;
}

function renderModalRecommendations(activeMovie) {
  const container = document.getElementById('modalRecommendationsGrid');
  if (!container) return;
  container.innerHTML = '';

  // Find other movies from the same category or sharing genres
  let recs = movieDatabase
    .filter(m => m.id !== activeMovie.id && (m.category === activeMovie.category || m.genres.some(g => activeMovie.genres.includes(g))))
    .slice(0, 6);

  if (recs.length < 6) {
    const additional = movieDatabase.filter(m => m.id !== activeMovie.id && !recs.includes(m)).slice(0, 6 - recs.length);
    recs = recs.concat(additional);
  }

  recs.forEach(rec => {
    const card = document.createElement('div');
    card.className = 'rec-card';
    card.innerHTML = `
      <div class="rec-thumb">
        <img src="${rec.backdrop}" alt="${rec.title}" loading="lazy" />
        <span class="rec-duration">${rec.duration}</span>
      </div>
      <div class="rec-body">
        <div class="rec-top-row">
          <span class="rec-match">${rec.match}</span>
          <span class="rec-badge">${rec.ageRating}</span>
          <span class="rec-year">${rec.year}</span>
        </div>
        <h4 class="rec-title">${rec.title}</h4>
        <p class="rec-desc">${rec.description.slice(0, 110)}...</p>
      </div>
    `;

    const img = card.querySelector('.rec-thumb img');
    if (img) img.onerror = () => handleImageError(img, rec.title, false);

    card.addEventListener('click', () => {
      openModal(rec);
    });

    container.appendChild(card);
  });
}

// =========================================================================
// 13. VIDEO TRAILER PLAYER
// =========================================================================
function setupTrailerPlayer() {
  const closeBtn = document.getElementById('videoPlayerCloseBtn');
  const overlay = document.getElementById('videoPlayerOverlay');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeTrailerPlayer);
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeTrailerPlayer();
    });
  }
}

function openTrailerPlayer(movie) {
  const overlay = document.getElementById('videoPlayerOverlay');
  const iframe = document.getElementById('trailerIframe');
  if (!overlay || !iframe || !movie) return;

  iframe.src = movie.trailerUrl;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeTrailerPlayer() {
  const overlay = document.getElementById('videoPlayerOverlay');
  const iframe = document.getElementById('trailerIframe');
  if (iframe) iframe.src = '';
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// =========================================================================
// 14. NAVBAR & USER CONTROLS
// =========================================================================
function setupNavbarAndInteractivity() {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('netflixLogo');
  const notifBtn = document.getElementById('notifBtn');
  const notifDropdown = document.getElementById('notificationsDropdown');

  // Sticky Navbar background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Netflix Logo Sound & Return to Top
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      playNetflixTaDum();
      currentNav = 'home';
      activeCategoryFilter = 'all';
      currentViewMode = 'rows';
      updateNavActiveState();
      updateSubnavState();
      renderMainContent();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Notification toggle
  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('show');
    });

    window.addEventListener('click', () => {
      notifDropdown.classList.remove('show');
    });
  }

  // Navigation Links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-nav');
      currentNav = target;
      activeCategoryFilter = 'all';

      updateNavActiveState();
      updateSubnavState();
      renderMainContent();

      if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (target === 'list') {
        window.scrollTo({ top: 300, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 380, behavior: 'smooth' });
      }
    });
  });
}

function updateNavActiveState() {
  document.querySelectorAll('.nav-links a').forEach(l => {
    if (l.getAttribute('data-nav') === currentNav) {
      l.classList.add('active');
    } else {
      l.classList.remove('active');
    }
  });
}

function showToast(message) {
  let toast = document.getElementById('netflixToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'netflixToast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" fill="var(--netflix-red)" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// =========================================================================
// 15. INITIALIZE APPLICATION
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupHeroBillboard();
  setupSubnavAndFilters();
  renderMainContent();
  setupSearchEngine();
  setupDetailModal();
  setupTrailerPlayer();
  setupNavbarAndInteractivity();
});
