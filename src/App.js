
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router';

function App() {
  return (
    <div className=' bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900' >
     <RouterProvider router={router}>

     </RouterProvider>
    </div>
  );
}

export default App;
