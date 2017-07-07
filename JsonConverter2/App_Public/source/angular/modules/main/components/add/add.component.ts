import { Component, OnInit } 					from '@angular/core'
import { FormGroup, FormBuilder, Validators } 	from '@angular/forms'
import { ContactService }						from '../../services/contact.service'
import { IContact }								from '../../interfaces/i-contact.interface'

const Pug = require('./add.component.pug')
const Stylus = require('./add.component.styl')

@Component({
	selector: 'add',
	template: Pug(),
	styleUrls: [Stylus]
})
export class AddComponent implements OnInit
{

	public contactForm:FormGroup

	constructor(
		private contactService:ContactService,
		private fb:FormBuilder
	){}

	ngOnInit()
	{
		this.contactForm = this.fb.group({
			Name: 		[null, [ Validators.required ]],
			Email: 		[null, [ Validators.required ]],
			Phone: 		[null, [ Validators.required ]],
			Subject: 	[null, [ Validators.required ]],
			Message: 	[null, [ Validators.required ]]
		})
	}

	public save(contact:IContact) : void
	{
		this.contactService.Post(contact)
	}
}
