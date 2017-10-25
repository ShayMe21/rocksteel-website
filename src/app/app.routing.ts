import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent} from './about/about.component';
import { Routes, RouterModule } from '@angular/router';

const MAINMENU_ROUTES: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'contact', component: ContactComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'about', component: AboutComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);