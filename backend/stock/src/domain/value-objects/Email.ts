export default class Email {
	value: string;

	constructor(readonly email: string) {
		if (!this.isValid(email)) {
			throw new Error('Invalid email');
		}
		this.value = email.toLowerCase();
	}

	private isValid(email: string) {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			);
	}
}
