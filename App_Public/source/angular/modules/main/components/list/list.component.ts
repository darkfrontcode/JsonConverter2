import { Component, Input, OnInit } from '@angular/core'
import { ContactService }			from '../../services/contact.service'
import { IContact }					from '../../interfaces/i-contact.interface'

const Pug = require('./list.component.pug')
const Stylus = require('./list.component.styl')

@Component({
	selector: 'list',
	template: Pug(),
	styleUrls: [Stylus]
})
export class ListComponent implements OnInit
{
	constructor(private contactService:ContactService)
	{

	}

	ngOnInit()
	{
		this.contactService.Get()
	}

/* ==========================================================================
	-- Contacts ( getter )
========================================================================== */

	get contacts() : Array<IContact>
	{
		return this.contactService.contacts
	}

/* ==========================================================================
	-- Delete
========================================================================== */

	public delete(name:string) : void
	{
		this.contactService.Delete(name)
	}
}
