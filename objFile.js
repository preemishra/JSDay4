const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        dicegame: "Two player dice game using Javascript"
    }
}
const {name,age,projects:{dicegame}} = student;

console.log("Name: " + name);
console.log("Age: " + age);
console.log("*Projects* DiceGame: " + dicegame);

/**
const {dicegame} = student.projects;
console.log("*Projects* DiceGame: " + dicegame);
**/