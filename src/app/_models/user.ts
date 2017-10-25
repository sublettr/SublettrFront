export class User {
  id: number;
  username: string;
  password: string;
  name: string;
  age: number;
  sex: string;
  major: string;
  grade: number;
  isSeller: boolean;

  constructor(userData: any) {
    this.id = userData.id;
    this.username = userData.username;
    this.password = userData.password;
    this.name = userData.name;
    this.age = userData.age;
    this.sex = userData.sex;
    this.major = userData.major;
    this.grade = userData.grade;
    this.isSeller = userData.isSeller;
  }
}
