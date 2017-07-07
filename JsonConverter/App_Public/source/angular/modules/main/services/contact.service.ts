import { Injectable } 	from '@angular/core'
import { Http } 		from '@angular/http'
import { StateService } from '@uirouter/angular'
import { IContact }		from '../interfaces/i-contact.interface'

@Injectable()
export class ContactService
{

	private _url:string = '/api/Contact'
	public contacts:Array<IContact>

	constructor(
		private http:Http,
		private stateService:StateService
	){}

	public Get()
	{

		this.http.get(this._url)
			.subscribe(
				res => {
					const contacts:Array<IContact> = res.json()
					this.contacts = contacts !== null ? contacts : []
				},
				err => console.log(err)
			)
	}

	public Post(contact:IContact)
	{

		this.http.post(this._url, contact)
			.subscribe(
				res => this.stateService.go('list'),
				err => console.log(err)
			)
	}

	public Delete(name:string)
	{
		const url = `${ this._url }/${ name }`
		
		this.http.delete(url)
			.subscribe(
				res => this.Get(),
				err => console.log(err)
			)
	}

}