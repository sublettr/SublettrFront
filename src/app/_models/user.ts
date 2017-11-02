export class User {
  email: string;
  password: string;

  constructor(userData: any) {
    this.email = userData.email;
    this.password = userData.password;
  }
}
