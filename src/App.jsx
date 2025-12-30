import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import { lazy, Suspense } from 'react';

const App = () =>
{
    const Contact = lazy(() => import("./components/Contact"));
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Signup/>} />
                    <Route path='login' element={<Login/>} />
                </Route>
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={
                    <Suspense fallback={<div>Loading....</div>}>
                        <Contact/>
                    </Suspense>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
