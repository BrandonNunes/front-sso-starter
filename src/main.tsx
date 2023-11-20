import ReactDOM from 'react-dom/client'
import './index.css'
import {
    RouterProvider,
} from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'
import router from "./routes";

ReactDOM.createRoot(document.getElementById('root')!).render(<PrimeReactProvider children={<RouterProvider router={router} />}/>  );
