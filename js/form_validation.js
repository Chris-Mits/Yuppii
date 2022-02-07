// FORM VALIDATION
const form = document.querySelector('#yuppii-form');
const inputFields = document.querySelectorAll('.form-control');

// Name input validaton
export function validateName() {
	const regexName = /^[a-zA-Zά-ωΑ-ώ]{5,15}$/;
	
	if(!regexName.test(form.name.value)) {
		form.name.classList.remove('is-valid');
		form.name.classList.add('is-invalid');
		return false;
	} else {
		form.name.classList.remove('is-invalid');
		form.name.classList.add('is-valid');
		return true;
	}
}

// Email input validaton
export function validateEmail() {
	const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{3})$/;

	if(!regexEmail.test(form.email.value)) {
		form.email.classList.remove('is-valid');
		form.email.classList.add('is-invalid');
		return false;
	} else {
		form.email.classList.remove('is-invalid');
		form.email.classList.add('is-valid');
		return true;
	}
}

// Phone input validaton
export function validatePhone() {
	const regexPhone = /^([+][3][0])?([6]{1})([9]{1})([0-9]{8})$/;
	
	if(!regexPhone.test(form.phone.value)) {
		form.phone.classList.remove('is-valid');
		form.phone.classList.add('is-invalid');
		return false;
	} else {
		form.phone.classList.remove('is-invalid');
		form.phone.classList.add('is-valid');
		return true;
	}
}
// Form event listener & submission
if(form) {
	form.addEventListener('submit', e => {
		e.preventDefault();
		
		const isNameValid = validateName();
		const isEmailValid = validateEmail();
		const isPhoneValid = validatePhone();
		
		// Prevent User from Submiting if not validated
		if(!isNameValid || !isEmailValid || !isPhoneValid) {
			return;
		} else {
			fetch("https://formsubmit.co/ajax/chrismits88@gmail.com", {
				method: "POST",
				headers: { 
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					Όνομα: form.name.value,
					Email: form.email.value,
					Τηλέφωνο: form.phone.value,
					Μήνυμα: form.message.value
				})
			}).then(response => response.json())
				.catch(error => console.log(error));
			
			$('#form-modal').modal('show');
			form.querySelectorAll('input.form-control').forEach(input => input.classList.remove('is-valid'));
			form.querySelectorAll('label').forEach(label => label.classList.remove('active'));
			form.reset();
		}
	});

	// Form Input Event Listeners
	form.name.addEventListener('keyup', validateName);
	form.email.addEventListener('keyup', validateEmail);
	form.phone.addEventListener('keyup', validatePhone);
	
	// Form Labels Event Listeners
	for(const field of inputFields) {
		field.addEventListener('focus', () => {
			if(field.value === '') {
				field.nextElementSibling.classList.add('active');
			}
		});
		
		field.addEventListener('blur', () => {
			if(field.value === '') {
				field.nextElementSibling.classList.remove('active');
			}
		});
	}
}