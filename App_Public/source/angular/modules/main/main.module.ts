import { NgModule }								from '@angular/core'
import { BrowserModule } 						from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } 	from '@angular/forms'
import { HttpModule } 							from '@angular/http'

// route
import { UIRouterModule }						from '@uirouter/angular'
import { Routes } 								from './main.routes'

// services
import { ContactService } 						from './services/contact.service'

// components
import { MainComponent } 						from './components/main/main.component'
import { HeaderComponent } 						from './components/header/header.component'
import { ListComponent } 						from './components/list/list.component'
import { CardComponent } 						from './components/card/card.component'
import { AddComponent } 						from './components/add/add.component'

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule,
		UIRouterModule.forRoot(Routes)
	],
	declarations: [ 
		MainComponent,
		HeaderComponent,
		ListComponent,
		CardComponent,
		AddComponent
	],
	providers: [
		ContactService
	],
	bootstrap: [ MainComponent ]
})
export class MainModule { }
