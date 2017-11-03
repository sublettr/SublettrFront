export class FullUser {
  id: number;
  userName: string;
  email: string;
  name: string;
  age: number;
  sex: string;
  major: string;
  grade: number;
  isSeller: boolean;

  constructor(userData: any) {
    this.id = userData.id;
    this.userName = userData.userName;
    this.email = userData.email;
    this.name = userData.name;
    this.age = userData.age;
    this.sex = userData.sex;
    this.major = userData.major;
    this.grade = userData.grade;
    this.isSeller = userData.isSeller;
  }
}
