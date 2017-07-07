import { Component, ViewEncapsulation } from '@angular/core'

const Pug = require('./main.component.pug')
const Stylus = require('./main.component.styl')

@Component({
	selector: 'main',
	template: Pug(),
	styleUrls: [Stylus],
	host: { 'class':'grow column' },
	encapsulation: ViewEncapsulation.None
})
export class MainComponent{ }
