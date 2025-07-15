#  REST Countries React App

A responsive React application that displays country information using the [REST Countries API](https://restcountries.com/).  
Users can browse, search, and filter countries, view detailed information, and toggle between light and dark modes.

---

##  Live Demo

[ Click here to view the live version](https://your-live-link.com)

> Replace this link with your deployed site if available (e.g., Vercel or Netlify)

---

##  Features

-  Fetches data from REST Countries API
-  Search for countries by name
-  Filter countries by region
-  View detailed country information
-  Dark/Light mode with localStorage
- Fully responsive design (mobile + desktop)

---

##  Built With

-  [React](https://reactjs.org/)
-  [Tailwind CSS](https://tailwindcss.com/)
- [REST Countries API](https://restcountries.com/)
-  [React Router](https://reactrouter.com/)
-  localStorage (for theme and data persistence)

---

##  Project Structure

```bash
rest-countries-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── CountryCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── CountryDetail.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── package.json

## Getting Started
 Clone the repository
```bash 
git clone https://github.com/your-username/rest-countries-react.git
cd rest-countries-react
 ## Install dependencies
```bash 
npm install
 ## Run the development server
```bash 
npm run dev
## Dark Mode
A toggle button allows switching between light and dark themes.

Theme preference is saved in localStorage and remembered on reload.

## Future Improvements
 Add pagination or infinite scroll

 Display full border country names instead of codes

Save favorite countries to localStorage

Improve accessibility with ARIA roles and keyboard navigation

## Author
Made with ❤️ by Khadija Amzoug

## License
This project is open-source and available under the MIT License.