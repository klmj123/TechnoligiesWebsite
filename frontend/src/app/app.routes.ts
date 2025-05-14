import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { PokemonAPIComponent } from './components/pokemon-api/pokemon-api.component';
import { APIsListComponent } from './components/apis-list/apis-list.component';
import { SpotifyApiComponent } from './components/spotify-api/spotify-api.component';
import { BooksApiComponent } from './components/books-api/books-api.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { TextBotComponent } from './components/text-bot/text-bot.component';
import { InfoComponent } from './components/info/info.component';

export const routes: Routes = [
    {path: 'employees', component: EmployeeListComponent},
    {path: 'create-employee', component: CreateEmployeeComponent},
    {path: 'update-employee/:id', component: UpdateEmployeeComponent},
    {path: 'employee-details/:id', component: EmployeeDetailsComponent},
    {path: 'pokemon-api', component: PokemonAPIComponent},
    {path: 'spotify-api', component: SpotifyApiComponent},
    {path: 'books-api', component: BooksApiComponent},
    {path: 'api', component: APIsListComponent},
    {path: 'view-book/:id', component: ViewBookComponent},
    {path: 'text-bot', component: TextBotComponent},
    {path: 'info', component: InfoComponent},
    {path: '', redirectTo: 'employees', pathMatch: 'full'}
];