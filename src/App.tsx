import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MenuContextProvider} from './contexts/MenuContextProvider';
import {ThemeContextProvider} from './contexts/ThemeContextProvider';
import {HomepageGreeting, Navbar, Sidebar, MainContent } from './components/'
import createLevelRoutes from './utility/createLevelRoutes';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <MenuContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <Sidebar />
              <Routes>
                <Route path="/" element={<HomepageGreeting />}></Route>
                { createLevelRoutes() }
              </Routes>
          </ThemeContextProvider>
        </MenuContextProvider>
      </BrowserRouter>
    </>
  );
}




