import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Starred from './Pages/Starred'
import NoMatch from './Pages/NoMatch';
import MainLayout from "./components/MainLayout";
import Show from './Pages/Show';
import { GlobalTheme } from './theme';

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>        
        <BrowserRouter>
          <Routes>
              <Route element={<MainLayout />}>
              <Route path="/" element={ <Home/>} />
              <Route path="/starred" element={ <Starred/>} />
            </Route>

              <Route path='/show/:showId' element={<Show />}/>
              <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>  
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
