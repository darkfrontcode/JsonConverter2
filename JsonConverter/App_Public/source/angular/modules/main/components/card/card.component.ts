import { Component, Input, Output, EventEmitter } 	from '@angular/core'
import { IContact }									from '../../interfaces/i-contact.interface'

const Pug = require('./card.component.pug')
const Stylus = require('./card.component.styl')

@Component({
	selector: 'card',
	template: Pug(),
	styleUrls: [Stylus]
})
export class CardComponent
{ 
	@Input()
	public contact:Array<IContact>

	@Output()
	public delete = new EventEmitter<any>()

	public deleteChange(name:string)
	{
		this.delete.emit(name)
	}
}
