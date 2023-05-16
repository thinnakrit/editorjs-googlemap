
// eslint-disable-next-line
// import css from './index.css';
import polyfill from 'url-polyfill';
class GoogleMap {
	constructor({ data, config }) {
		this.data = data
		this.wrapper = undefined
		this.place = ''
		this.config = config || {}
	}

	static get toolbox() {
		return {
			title: 'Google Map',
			icon: `<?xml version="1.0" encoding="UTF-8"?>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16pt" height="16pt" viewBox="0 0 16 16" version="1.1">
			<g id="surface1">
			<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,85.490196%,17.647059%);fill-opacity:1;" d="M 8.515625 8.390625 L 6.796875 11.046875 L 5.160156 11.746094 C 4.195312 10.640625 3.164062 9.328125 2.675781 7.667969 L 3.65625 5.84375 L 5.234375 5.109375 C 5.207031 5.277344 5.1875 5.445312 5.1875 5.625 C 5.1875 7.171875 6.453125 8.4375 8 8.4375 C 8.179688 8.4375 8.347656 8.417969 8.515625 8.390625 Z M 8.515625 8.390625 "/>
			<path style=" stroke:none;fill-rule:nonzero;fill:rgb(50.196078%,68.235294%,97.254902%);fill-opacity:1;" d="M 10.765625 6.136719 C 10.792969 5.96875 10.8125 5.800781 10.8125 5.625 C 10.8125 4.078125 9.546875 2.8125 8.003906 2.8125 L 8 2.8125 C 7.820312 2.8125 7.652344 2.832031 7.484375 2.859375 L 9.976562 0.367188 C 11.488281 0.929688 12.695312 2.136719 13.257812 3.648438 L 10.765625 6.140625 C 10.765625 6.140625 10.765625 6.140625 10.765625 6.136719 Z M 10.765625 6.136719 "/>
			<path style=" stroke:none;fill-rule:nonzero;fill:rgb(25.098039%,52.54902%,95.686275%);fill-opacity:1;" d="M 13.257812 3.648438 L 12.40625 5.3125 L 10.765625 6.140625 C 10.765625 6.140625 10.765625 6.140625 10.765625 6.136719 C 10.792969 5.96875 10.8125 5.800781 10.8125 5.625 C 10.8125 4.078125 9.546875 2.8125 8.003906 2.8125 L 8 2.8125 L 8 2.34375 L 8.5625 1.09375 L 9.976562 0.367188 C 11.488281 0.929688 12.695312 2.136719 13.257812 3.648438 Z M 13.257812 3.648438 "/>
			<path style=" stroke:none;fill-rule:nonzero;fill:rgb(34.901961%,76.470588%,41.568627%);fill-opacity:1;" d="M 13.257812 3.648438 L 10.765625 6.140625 C 10.550781 7.273438 9.648438 8.175781 8.515625 8.390625 L 5.160156 11.746094 C 5.320312 11.925781 5.460938 12.085938 5.609375 12.253906 C 6.640625 13.425781 7.53125 14.5 7.53125 15.53125 C 7.53125 15.792969 7.738281 16 8 16 C 8.261719 16 8.46875 15.792969 8.46875 15.53125 C 8.46875 14.5 9.359375 13.425781 10.390625 12.253906 C 11.835938 10.632812 13.625 8.605469 13.625 5.625 C 13.625 4.929688 13.503906 4.265625 13.257812 3.648438 Z M 13.257812 3.648438 "/>
			<path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,65.098039%,42.352941%);fill-opacity:1;" d="M 13.257812 3.648438 L 10.765625 6.140625 C 10.550781 7.273438 9.648438 8.175781 8.515625 8.390625 L 8 8.90625 L 8 16 C 8.261719 16 8.46875 15.792969 8.46875 15.53125 C 8.46875 14.5 9.359375 13.425781 10.390625 12.253906 C 11.835938 10.632812 13.625 8.605469 13.625 5.625 C 13.625 4.929688 13.503906 4.265625 13.257812 3.648438 Z M 13.257812 3.648438 "/>
			<path style=" stroke:none;fill-rule:nonzero;fill:rgb(99.215686%,74.901961%,0%);fill-opacity:1;" d="M 8 8.90625 L 8.515625 8.390625 C 8.347656 8.417969 8.179688 8.4375 8 8.4375 Z M 8 8.90625 "/>
			<path style=" stroke:none;fill-rule:nonzero;fill:rgb(25.098039%,52.54902%,95.686275%);fill-opacity:1;" d="M 9.976562 0.367188 L 7.484375 2.859375 C 6.914062 2.972656 6.40625 3.242188 6.011719 3.636719 L 4.5625 3.03125 L 4.023438 1.648438 C 5.039062 0.628906 6.445312 0 8 0 C 8.695312 0 9.359375 0.121094 9.976562 0.367188 Z M 9.976562 0.367188 "/>
			<path style=" stroke:none;fill-rule:nonzero;fill:rgb(25.490196%,45.882353%,87.45098%);fill-opacity:1;" d="M 8 2.34375 L 9.976562 0.367188 C 9.359375 0.121094 8.695312 0 8 0 Z M 8 2.34375 "/>
			<path style=" stroke:none;fill-rule:nonzero;fill:rgb(94.117647%,21.960784%,0%);fill-opacity:1;" d="M 6.011719 3.636719 C 5.617188 4.03125 5.347656 4.539062 5.234375 5.109375 L 2.675781 7.667969 C 2.488281 7.039062 2.375 6.367188 2.375 5.625 C 2.375 4.070312 3.003906 2.664062 4.023438 1.648438 Z M 6.011719 3.636719 "/>
			</g>
			</svg>
			`,
		}
	}

	render() {
		this.wrapper = document.createElement('div')

		if (this.data && this.data.place) {
			const iframe = document.createElement('iframe')
			this.place = this.data.place
			iframe.height = '500'
			iframe.src = `https://maps.google.com/maps?q=${this.data.place}&t=&z=13&ie=UTF8&iwloc=&output=embed`
			iframe.style =
				'width: 100%;border-radius: 10px;border: 1px solid #cccccc;'
			this.wrapper.appendChild(iframe)
		} else {
			const input = document.createElement('input')
			const button = document.createElement('button')

			this.wrapper.classList.add('google-map-input')
			this.wrapper.appendChild(input)
			this.wrapper.appendChild(button)
			button.innerHTML = this.config.searchValue || ''
			input.placeholder = this.config.placeholder || ''
			input.value =
				this.data && this.data.place ? this.data.place : ''
			button.addEventListener('click', (event) => {
				this._applyIFrame(input.value);
				this.wrapper.removeChild(input);
				this.wrapper.removeChild(button);
			});
		}
		return this.wrapper
	}

	_applyIFrame(value) {
		const iframe = document.createElement('iframe')
		iframe.width = '600'
		iframe.height = '500'
		iframe.src = `https://maps.google.com/maps?q=${value}&t=&z=13&ie=UTF8&iwloc=&output=embed`
		iframe.style =
			'width: 100%;border-radius: 10px;border: 1px solid #cccccc;'
		this.place = value
		this.wrapper.appendChild(iframe)
	}

	save() {
		return {
			place: this.place,
		}
	}
}

export default GoogleMap
