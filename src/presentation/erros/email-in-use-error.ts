export class EmailInUseError extends Error {
  constructor() {
    super('The email received is already in use');
    this.name = 'EmailInUseError';
  }
}
