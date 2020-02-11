// const person : {
//   name: string;
//   age: number;
//   hobbies: string[],
//   role: [number, string]
// } = {
//   name: "Andreea",
//   age: 30,
//   hobbies: ['sports', 'cooking'],
//   role: [2, 'author']
// }

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: "Andreea",
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
  }

let favoriteActivities: string[];
favoriteActivities = ['sports']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('is author')
}
