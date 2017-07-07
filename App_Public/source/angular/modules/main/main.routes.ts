import { ListComponent } 	from './components/list/list.component'
import { AddComponent } 	from './components/add/add.component'

export const Routes = new Object({
	states: new Array<any>(
		{ 
			name: 'list',
			url: '/list',
			component: ListComponent
		},
		{ 
			name: 'add',
			url: '/add',
			component: AddComponent
		}
	),
	otherwise: '/list',
	useHash: true
});