# Netflix Clone Project

A responsive, Netflix-inspired movie and TV discovery interface built with **HTML5, CSS3, and vanilla JavaScript**. The project recreates the visual experience of a modern streaming-service homepage, with a cinematic hero section, browsable title collections, interactive carousels, search, category filters, title details, and a browser-persisted My List.

> **Project type:** Front-end UI demonstration  
> **Architecture:** Static, client-side web application  
> **Build tooling:** None required  
> **Backend / authentication:** Not included

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screens and Interface](#screens-and-interface)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [How the Application Works](#how-the-application-works)
- [Movie Catalogue](#movie-catalogue)
- [Browser Storage](#browser-storage)
- [External Resources](#external-resources)
- [Customization](#customization)
- [Deployment](#deployment)
- [Known Limitations](#known-limitations)
- [Troubleshooting](#troubleshooting)
- [Future Improvements](#future-improvements)
- [Credits and Attribution](#credits-and-attribution)
- [Disclaimer](#disclaimer)
- [Author](#author)
- [License](#license)

---

## Overview

Netflix Clone Project is a front-end recreation of a streaming platform's browsing experience. It is designed to demonstrate how a rich, interactive media catalogue can be built using standard web technologies without a JavaScript framework or a backend service.

The interface includes a large featured-title billboard, navigation for different content areas, a searchable catalogue, genre-based browsing, horizontal content rails, a responsive grid layout, title information dialogs, and a locally saved watchlist.

The catalogue is populated from a JavaScript data collection containing **117+ movie and TV-show entries across 13 categories**, as described in the application source. Each entry includes information such as its title, category, artwork URLs, rating, year, maturity rating, duration, synopsis, cast, genres, and YouTube trailer URL.

The application runs directly in the browser. There is no account registration, server-side database, subscription system, or real streaming service integration.

## Features

### 1. Netflix-inspired navigation

- Netflix-style red logo and dark interface.
- Desktop navigation for Home, TV Shows, Movies, New & Popular, My List, and Browse by Languages.
- Responsive mobile navigation drawer with a hamburger toggle.
- Active navigation state styling.
- Navbar background changes when the page is scrolled.
- Kids shortcut that opens a family and anime-oriented browsing view.

### 2. Cinematic hero billboard

- Large featured-title background image.
- Featured title, synopsis, content type, year, maturity rating, duration, quality, and match label.
- Play and More Info actions.
- Next button to cycle through featured titles.
- Mute control and maturity-rating badge.
- Animated entrance and subtle background-image movement.
- Netflix-inspired synthesized Ta-Dum-style sound effect using the Web Audio API.

The featured billboard rotates through a predefined selection of titles stored in the JavaScript source.

### 3. Movie and TV-show catalogue

- A locally defined catalogue of 117+ entries.
- 13 configured browsing categories.
- Movie and series cards with poster or backdrop artwork.
- Title, match percentage, maturity rating, duration, quality, and genre information.
- Netflix-style hover previews and card actions.
- Netflix-inspired Original badges for entries marked as originals.
- Lazy-loaded catalogue artwork.
- Fallback artwork generation when an image cannot be loaded.

### 4. Categories and genre browsing

The interface provides a category dropdown and quick-filter pills.

The configured categories are:

| Category | Description |
|---|---|
| Top 10 | Ranked titles in a Top 10-style collection |
| Popular | Popular TV shows and series |
| Action & Sci-Fi | Science-fiction and action titles |
| Top Rated | Highly rated catalogue entries |
| Comedy | Comedies and sitcoms |
| Originals | Entries marked as originals |
| Action | Action and adventure titles |
| Horror | Horror and dark suspense |
| Thrillers | Mystery and psychological thrillers |
| Romance | Romance and romantic dramas |
| Dramas | TV drama collection |
| Documentaries | Documentary and real-life content |
| Anime | Anime and Japanese animation |

Selecting a category updates the visible catalogue. The category controls are available through both the dropdown and quick-filter pills.

### 5. Horizontal content carousels

- Content is organized into horizontal rows.
- Previous and next navigation controls.
- Responsive slide counts at different viewport widths.
- Separate carousel configuration for standard title rows and the Top 10 collection.
- Dedicated My List carousel when saved titles exist.
- Swiper instances are reinitialized when the rendered content changes.

### 6. Grid browsing

- Switch between horizontal carousel rows and a responsive grid.
- Browse all available titles or a selected category.
- Category heading and visible title count.
- Open a category as a dedicated grid using its Explore All control.
- My List has its own full-grid view.

### 7. Live catalogue search

The search interface filters the local movie database as the user types.

Search checks:

- Movie and TV-show titles.
- Genres.
- Cast names.
- Category names.

Search results appear in a dedicated grid with a result count. A clear button resets the query and restores the main browsing interface.

**Keyboard shortcut:** Press `/` to focus the search field.

Search is performed locally in the browser. It does not call a remote search API.

### 8. Title details modal

Selecting a title opens a detailed information modal containing:

- Backdrop artwork and title.
- Match percentage, release year, maturity rating, duration, and quality.
- Synopsis and content advisory.
- Cast, creator or director information, genres, and descriptive tags.
- Episodes tab for entries recognized as series.
- More Like This recommendations.
- About tab with additional title information.
- Add to My List and like actions.
- Embedded trailer preview.

The recommendation section selects related entries using matching categories and genres, with additional catalogue entries used when necessary.

### 9. Trailer player

- Dedicated full-screen-style trailer overlay.
- YouTube embedded trailer playback.
- Trailer title in the player header.
- Close button and backdrop-click dismissal.
- Escape-key dismissal.
- Embedded trailer preview is also available inside the title details modal.

**Important:** The Play actions open the configured trailer embed. They do not play full movies or television episodes.

### 10. My List and local persistence

- Add titles to My List from catalogue cards and the details modal.
- Remove saved titles.
- Update bookmark icons to reflect saved state.
- Display saved titles in a dedicated carousel.
- Open a full My List grid.
- Preserve the list between browser sessions using `localStorage`.

The saved list is stored in the current browser profile, not in an online account.

### 11. Notifications and profile menus

- Notification dropdown with sample release announcements.
- Notification entries can open the corresponding title details when their IDs exist in the catalogue.
- Profile dropdown with sample profiles and account-related menu items.
- Netflix-inspired avatar illustrations.

These are interface demonstrations. They do not connect to Netflix accounts or real notification services.

### 12. Visual and responsive design

- Dark streaming-platform interface.
- Netflix-inspired red accent color.
- Inter and Bebas Neue typography loaded from Google Fonts.
- Responsive layouts for desktop, tablet, and mobile.
- Hover transitions, animated menus, card previews, and modal transitions.
- Custom scrollbar styling.
- Visible keyboard focus styling using `:focus-visible`.
- Category-themed SVG artwork fallbacks.

---

## Screens and Interface

The main page is composed of the following interface areas:

1. **Header:** Logo, navigation, search, Kids shortcut, notifications, and profile menu.
2. **Hero billboard:** Featured title, artwork, metadata, and actions.
3. **Catalogue sub-navigation:** Category dropdown, quick filters, and layout switcher.
4. **Search results:** A separate results view shown while searching.
5. **Content area:** Dynamically generated category rows or grid cards.
6. **Title details modal:** Extended metadata, recommendations, and trailer preview.
7. **Trailer player:** Embedded YouTube trailer overlay.
8. **Footer:** Social icons, informational links, service-code interaction, and copyright-style text.

---

## Technology Stack

| Technology / Library | Purpose |
|---|---|
| HTML5 | Page structure and semantic interface elements |
| CSS3 | Styling, responsive layouts, animations, and visual effects |
| JavaScript (Vanilla) | Catalogue data, rendering, interactions, search, filters, and state |
| Swiper.js 11 | Responsive horizontal content carousels |
| Web Audio API | Browser-generated cinematic sound effect |
| localStorage | Persistence of the My List collection |
| Google Fonts | Inter and Bebas Neue typography |
| TMDB image CDN | Remote movie and TV-show artwork URLs used by the catalogue |
| YouTube Embed | Trailer playback |

### No framework or build system

The repository uses plain HTML, CSS, and JavaScript. It does not require React, Vue, Angular, Vite, Webpack, Node.js, npm, or a compilation step to run the application.

Swiper is loaded from jsDelivr through a CDN script and stylesheet. Google Fonts and remote artwork also require an internet connection.

---

## Project Structure

The application is intentionally small and uses a straightforward static-file structure:

```text
Netflix-Clone-Project/
│
├── index.html       # Main HTML document and application interface
├── styles.css      # Global styles, responsive layouts, and animations
├── script.js       # Catalogue data and application functionality
└── README.md       # Project documentation
```

### Main source files

| File | Responsibility |
|---|---|
| `index.html` | Defines the navbar, hero, category controls, catalogue containers, modals, trailer player, and footer. Loads external libraries and local assets. |
| `styles.css` | Contains design tokens, layout rules, responsive breakpoints, component styles, transitions, and animations. |
| `script.js` | Contains the title dataset, category configuration, application state, rendering functions, carousel initialization, search, My List, modal logic, and event handlers. |
| `README.md` | Explains the project, setup, functionality, and limitations. |

---

## Getting Started

### Requirements

- A modern web browser.
- An internet connection for CDN libraries, Google Fonts, remote images, and YouTube trailers.
- Git, if you want to clone the repository.
- A local development server is recommended.

No API key, environment file, database, or package installation is required by the current implementation.

### 1. Clone the repository

```bash
git clone https://github.com/M-Taimoor-Mansha/Netflix-Clone-Project.git
```

### 2. Open the project folder

```bash
cd Netflix-Clone-Project
```

### 3. Run the application

**Option A: VS Code Live Server**

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

**Option B: Python local server**

If Python is installed, run:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

**Option C: Open the HTML file directly**

You can also double-click `index.html` and open it in a browser. A local server is recommended for a more consistent development experience.

---

## How to Use

| Action | How to use it |
|---|---|
| Browse the homepage | Open the application and explore the featured billboard and title rows. |
| Change sections | Use Home, TV Shows, Movies, New & Popular, My List, or Browse by Languages. |
| Search | Select the search icon and enter a title, actor, genre, or category. |
| Focus search quickly | Press `/` when you are not typing in an input. |
| Filter titles | Use the category dropdown or category pills. |
| Change layout | Select the carousel-row or grid view icon. |
| View title information | Select a title card or its More Info action. |
| Play a trailer | Use Play or the trailer-preview action in the details modal. |
| Save a title | Select the plus/bookmark action or Add to My List. |
| Remove a saved title | Select its active bookmark action again. |
| Close an overlay | Use its close button, click its backdrop where supported, or press Escape. |
| Play the interface sound | Select an action that triggers the synthesized Ta-Dum-style sound. |

---

## How the Application Works

### Application initialization

When the document finishes loading, the application initializes its main interface modules:

- Hero billboard.
- Category controls and layout switcher.
- Initial catalogue rendering.
- Search engine.
- Title details modal.
- Trailer player.
- Navbar and user controls.
- Mobile navigation drawer.
- Keyboard shortcuts.

### Data-driven rendering

The catalogue is defined in the `movieDatabase` array in `script.js`. Category definitions are maintained separately in `categoriesConfig`.

The rendering functions use these collections to build the page dynamically. This keeps catalogue information separate from the HTML structure.

### Carousel and grid rendering

The application maintains a view mode:

- `rows`: display category collections as horizontal Swiper carousels.
- `grid`: display titles in a responsive grid.

The active category and navigation section determine which entries are rendered.

### Search

Search normalizes the query to lowercase and checks the title, genre, cast, and category fields of each catalogue entry. Matching entries are rendered into the search-results area.

### Modal and recommendations

The selected catalogue entry becomes the active modal title. Its stored metadata is used to populate the modal. Recommendations are generated from entries sharing the same category or one or more genres.

### My List

The saved title IDs are read from browser storage during application initialization. Adding or removing a title updates the array and writes the updated value back to browser storage.

### Sound effect

The sound effect is synthesized with browser audio oscillators and gain nodes. It does not require a separate audio file.

---

## Movie Catalogue

Each catalogue entry is represented by a JavaScript object. The data model includes fields such as:

| Field | Description |
|---|---|
| `id` | Unique identifier used by the interface |
| `title` | Display title |
| `category` | Category identifier |
| `categoryName` | Human-readable category |
| `backdrop` | Remote landscape artwork URL |
| `poster` | Remote poster artwork URL |
| `rating` | Display rating |
| `match` | Display match percentage |
| `year` | Release year |
| `ageRating` | Maturity classification |
| `duration` | Runtime or series duration |
| `quality` | Display quality label |
| `description` | Synopsis |
| `cast` | Cast names |
| `genres` | Genre labels |
| `isOriginal` | Whether the entry is marked as an original |
| `trailerUrl` | YouTube embedded trailer URL |

Some entries may also include fields such as `rank` or `isSeries`.

### Adding a new title

1. Open `script.js`.
2. Find the `movieDatabase` array near the beginning of the file.
3. Add a new object following the existing data structure.
4. Give the entry a unique `id`.
5. Set its `category` to one of the configured category IDs.
6. Add valid artwork URLs and a YouTube embed URL.
7. Save the file and refresh the browser.

Example structure:

```javascript
{
  id: "example-title",
  title: "Example Title",
  category: "scifi",
  categoryName: "Sci-Fi & Mind-Bending Fiction Movies",
  backdrop: "https://example.com/backdrop.jpg",
  poster: "https://example.com/poster.jpg",
  rating: "8.0",
  match: "95% Match",
  year: "2025",
  ageRating: "PG-13",
  duration: "2h 00m",
  quality: "HD",
  description: "A short description of the title.",
  cast: ["Actor One", "Actor Two"],
  genres: ["Sci-Fi", "Adventure"],
  isOriginal: false,
  trailerUrl: "https://www.youtube.com/embed/VIDEO_ID"
}
```

Use an existing category ID unless you also update `categoriesConfig` and the relevant category controls in `index.html`.

---

## Browser Storage

The application stores the My List collection using this localStorage key:

```text
netflix_my_list
```

The stored value is a JSON array of catalogue IDs.

For example:

```json
[
  "stranger-things-ws",
  "interstellar",
  "squid-game"
]
```

### Important storage behavior

- Data is stored locally in the current browser profile.
- The list is not synchronized across devices.
- Clearing browser site data can remove saved titles.
- Opening the project in a different browser or browser profile creates a separate list.
- There is no user account or cloud backup.

To reset the saved list, open the browser developer console on the application page and run:

```javascript
localStorage.removeItem("netflix_my_list");
location.reload();
```

---

## External Resources

The application references these third-party services:

| Resource | Usage |
|---|---|
| jsDelivr | Loads Swiper.js 11 CSS and JavaScript |
| Google Fonts | Loads Inter and Bebas Neue |
| TMDB image CDN | Supplies catalogue and featured-title artwork |
| YouTube | Supplies embedded trailer videos |
| Netflix asset CDN | Supplies the favicon referenced by the HTML document |

The application does not currently use a TMDB API integration. Artwork URLs and catalogue metadata are defined directly in the project source.

Availability of third-party assets and embeds depends on the corresponding provider, network access, browser settings, and content availability.

---

## Customization

### Change the visual theme

Edit the CSS custom properties near the beginning of `styles.css`:

```css
:root {
  --netflix-red: #e50914;
  --netflix-red-hover: #b80710;
  --bg-black: #141414;
  --bg-darker: #0c0c0c;
  --text-white: #ffffff;
  --text-gray: #e5e5e5;
  --text-subtext: #a3a3a3;
}
```

These variables control several of the application's main colors and can be adjusted to create a different visual theme.

### Change featured titles

Find the `featuredHeroIds` array in `script.js` and replace its IDs with IDs that already exist in `movieDatabase`.

### Change carousel behavior

Find the `initSwipers()` function in `script.js`. It contains the slide counts, spacing, transition speed, navigation elements, and responsive breakpoints for the standard and Top 10 carousels.

### Change category definitions

Find `categoriesConfig` in `script.js`. Category IDs connect the catalogue data to category rendering and filtering.

### Change typography

The Google Fonts stylesheet is included in the `<head>` of `index.html`. Update the font import and the font-family declarations in `styles.css` if you want to use different fonts.

---

## Deployment

This is a static website, so it can be hosted on services that support static HTML, CSS, and JavaScript.

### GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Open **Pages**.
4. Select the deployment source and the `main` branch.
5. Select the repository root folder.
6. Save the settings and wait for GitHub Pages to publish the site.

### Vercel

1. Import the GitHub repository into Vercel.
2. Configure it as a static site.
3. Keep the project root as the root directory.
4. No build command is required.
5. No output directory is required for this plain static-file structure.
6. Deploy the project.

### Netlify

1. Import the repository into Netlify, or upload the project folder.
2. Set the publish directory to the repository root.
3. Leave the build command empty.
4. Deploy.

For all deployment options, make sure `index.html`, `styles.css`, and `script.js` are included in the published root.

---

## Known Limitations

This repository is a front-end demonstration, not a production streaming platform.

- **No real streaming:** Play actions open configured YouTube trailers. Full movies and episodes are not streamed.
- **No backend:** There is no server, database, or API layer.
- **No authentication:** The profile menu is illustrative and does not sign in users.
- **Local-only watchlist:** My List uses browser localStorage and is not synchronized.
- **Static catalogue:** Titles and metadata are maintained manually in JavaScript.
- **No live catalogue updates:** There is no live TMDB API integration.
- **Illustrative metadata:** Match percentages, rankings, quality labels, and some catalogue details are presentation data, not live Netflix data.
- **Simulated episode information:** Episode cards and progress values are generated by front-end logic. They are not fetched from a real episode service or connected to playback progress.
- **Demo interactions:** Notifications, profile options, social links, and some footer actions are visual or illustrative controls.
- **Third-party dependencies:** Fonts, artwork, Swiper, and trailers may not load when external services are unavailable.
- **Browser-dependent audio:** The synthesized sound may be restricted until the user interacts with the page.

---

## Troubleshooting

### The page loads without styling

Check that `styles.css` is in the same directory as `index.html` and that the stylesheet link has not been changed.

### Movie rows are empty or carousels do not work

- Confirm that `script.js` loads successfully.
- Check the browser developer console for JavaScript errors.
- Confirm that Swiper's CDN resources are accessible.
- Check that catalogue entries use category IDs present in `categoriesConfig`.

### Movie images are missing

Artwork is loaded from remote URLs. Check your internet connection and the availability of the referenced image. The application includes fallback artwork handling for failed images.

### Trailers do not play

- Check whether YouTube is accessible on your network.
- Confirm that the selected entry has a valid `trailerUrl`.
- Check whether browser extensions or content restrictions block embedded videos.

### My List is not being preserved

Make sure browser storage is enabled. Private browsing modes, browser cleanup settings, or clearing site data can prevent saved entries from remaining available.

### The sound does not play

Browsers commonly restrict audio until a user interaction occurs. Click an interactive control and try again.

---

## Future Improvements

Possible directions for expanding the project include:

- Integrate the TMDB API for dynamic and up-to-date catalogue metadata.
- Add a backend and database for user accounts and synchronized watchlists.
- Add real authentication and profile management.
- Add proper episode and season data.
- Add viewing history and Continue Watching functionality.
- Improve accessibility, keyboard navigation, and screen-reader support.
- Add automated tests for search, filtering, storage, and modal behavior.
- Add loading states and more robust handling of failed external resources.
- Add configurable language and subtitle metadata from a real content source.

These are potential improvements, not features currently implemented in the repository.

---

## Credits and Attribution

- **Interface inspiration:** Netflix.
- **Movie and TV artwork:** Remote image URLs from the TMDB image CDN, as referenced in the project data.
- **Trailer embeds:** YouTube.
- **Carousel library:** Swiper.js.
- **Typography:** Inter and Bebas Neue via Google Fonts.

Third-party services and assets remain subject to their respective terms and licenses.

## Disclaimer

This project is an independent educational and portfolio project created to demonstrate front-end development skills. It is not affiliated with, endorsed by, sponsored by, or officially connected to Netflix, Inc.

Netflix is a trademark of Netflix, Inc. This project does not provide Netflix subscriptions, accounts, or access to copyrighted full-length movies or television episodes.

## Author

**Muhammad Taimoor Mansha**

- GitHub: [@M-Taimoor-Mansha](https://github.com/M-Taimoor-Mansha)
- X: [@itsTaimoor_](https://x.com/itsTaimoor_)

## License

No explicit license file was present in the repository when this README was prepared. Unless a license is added to the repository, all rights are reserved by the copyright holder. Do not assume that the source code, branding, or third-party assets are licensed for redistribution or commercial reuse.
