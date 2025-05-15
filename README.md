# React Exam - May 2025

### Instructions

This repository contains the starting code for a lab-based exam for React app development. You are required to take the following steps in preparation for this exam:

+ Clone this repository.
+ Open the project into VS Code.
+ Create a .env file in the base folder. Add your TMDB API key (the same as you used in the React labs)
~~~ts
VITE_TMDB_KEY=...YOUR TMDB KEY....
~~~

+ Create a new **private** repository in your GitHub account called '**reactExam**'.
+ In VS Code terminal, type the following commands:
```cmd
git remote remove origin
git remote add origin ...URL of your new repository...
git push origin main
```

 + Run the following commands:
```cmd
npm install
npm run dev
```
**What I did:**
  - Created a `TrendingMoviesPage` that fetches and displays trending movies from the TMDB API.
  - Used React hooks (`useState`, `useEffect`) for managing and loading data.
  - Integrated the new page into the app’s routing with `react-router-dom`.
  - Used `PageTemplate` for consistent movie list rendering.
  - Displayed a loading spinner while fetching data.
  - Implemented a `MovieDetails` component that:
    - Shows movie metadata (runtime, revenue, rating, release date, original language).
    - Displays genres using Material UI `Chip` components.
    - Includes a floating action button (FAB) to toggle a drawer showing movie reviews.

Now check that the Movie App runs correctly and is accessible from a browser on your machine.  
**Please ensure you have completed these steps before the lab-based exam and that you can push changes to your remote repository on GitHub.**