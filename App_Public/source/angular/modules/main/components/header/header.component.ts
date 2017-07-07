import { Component } from '@angular/core'

const Pug = require('./header.component.pug')
const Stylus = require('./header.component.styl')

@Component({
	selector: 'header',
	template: Pug(),
	styleUrls: [Stylus]
})
export class HeaderComponent{ }
