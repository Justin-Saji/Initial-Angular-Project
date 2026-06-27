import { Routes } from '@angular/router';
import { Home } from "./home/home";
import { ContactUs } from "./contact-us/contact-us";
import { About } from "./about/about";

export const routes: Routes = [
    {
        path:'',component:Home
    },
    {
        path:'about', component:About 
    },
    {
        path:'contact', component:ContactUs
    }
];
