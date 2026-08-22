import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WeddingInviteComponent } from './components/wedding-invite/wedding-invite.component';

export const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'wedding-invite', component: WeddingInviteComponent },
  { path: '**', redirectTo: '' }
];
