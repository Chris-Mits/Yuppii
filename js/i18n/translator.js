"use strict"
export default class Translator {
	constructor() {
		this.language = this.getLanguage();
		this.translatableEls = document.querySelectorAll("[data-lang]");
	}
	
	getLanguage() {
		const lang = navigator.languages[0].slice(0, 2) === 'el' ? 'el' : 'en';
		// return lang.slice(0, 2);
		return lang;
	}
	
	translate(translation) {
		this.translatableEls.forEach(element => {
			const keys = element.dataset.lang.split(".");
			const text = keys.reduce((obj, i) => obj[i], translation);
			if(text) {
				element.textContent = text;
			}
		});
	}
  
  load(lang = null) {
		if(lang) {
			this.language = lang;
		}
		fetch(`./js/i18n/${this.language}.json`)
			.then(response => response.json())
			.then(translation => this.translate(translation))
      .catch(error => console.error(error.message));
	}
  
  toggleHtmlLangAttr() {
		if(document.documentElement.lang !== this.language) {
			document.documentElement.lang = this.language;
		}
	}
}
