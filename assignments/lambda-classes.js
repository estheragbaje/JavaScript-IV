// CODE here for your Lambda Classes

//Code for Person as a base class
class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

//Example for Object1: Esther
const esther = new Person("Esther", 26, "Nigeria");
console.log(esther);

const speaking = esther.speak();
console.log(speaking);

//Example for Object2: Lisa
const lisa = new Person("Lisa", 40, "Ireland");
console.log(lisa);

const lisaSpeaks = lisa.speak();
console.log(lisaSpeaks);

//Example for Object3: Pete
const pete = new Person("Pete", 29, "UK");
console.log(pete);

const peteSpeaks = pete.speak();
console.log(peteSpeaks);

//Code for Instructor
class Instructors extends Person {
  constructor(name, age, location, specialty, favLanguage, catchPhrase) {
    super(name, age, location);
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
    this.subject = "";
  }

  demo(subject) {
    this.subject = subject;
    return `Today we are learning about ${this.subject}`;
  }

  grade(student, subject) {
    this.student = student;
    this.subject = subject;
    return `${this.student.name} receives a perfect score on ${this.subject}`;
  }
}

//Example for Object1: Gabe

const gabe = new Instructors(
  "Gabe",
  40,
  "EU",
  "Array Methods",
  "JavaScript",
  "Lambda School is Awesome"
);

gabe.demo("English");
console.log(gabe);

let student = { name: "Segun" };

const gabeGrades = gabe.grade(student, "Maths");
console.log(gabeGrades);

//Example for Object2: Cindy
const cindy = new Instructors(
  "Cindy",
  37,
  "Ghana",
  "Constructors",
  "CSS",
  "I'm a great teacher"
);

console.log(cindy);

const cindyGrades = cindy.grade(student, "Data Science");
console.log(cindyGrades);

//Code for Student
class Student extends Person {
  constructor(name, age, location, previousBackground, className, favSubjects) {
    super(name, age, location);
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
  }

  listsSubjects() {
    return this.favSubjects;
  }

  PRAssignment(subject) {
    this.subject = subject;
    return `${this.name} has submitted a PR for ${this.subject}`;
  }

  sprintChallenge(subject) {
    this.subject = subject;

    return `${this.name} has begun sprint challenge on ${this.subject}`;
  }
}

//Example for Object1: Aaron
const aaron = new Student("Aaron", 26, "USA", "Teaching", "CS132", [
  "HTML",
  "CSS",
  "Java"
]);
console.log(aaron);

const aaronsSubjects = aaron.listsSubjects();
console.log(aaronsSubjects);

const aaronPR = aaron.PRAssignment("JavaScript");
console.log(aaronPR);

const aaronSprint = aaron.sprintChallenge("JavaScript");
console.log(aaronSprint);

//Example for Object2: Mariam
const mariam = new Student("Mariam", 26, "USA", "Teaching", "CS132", [
  "HTML",
  "CSS",
  "Java"
]);
console.log(mariam);

const mariamsSubjects = mariam.listsSubjects();
console.log(mariamsSubjects);

const mariamPR = mariam.PRAssignment("React");
console.log(mariamPR);

const mariamSprint = mariam.sprintChallenge("React");
console.log(mariamSprint);

//Code for Project Manager
class ProjectManager extends Instructors {
  constructor(
    name,
    age,
    location,
    specialty,
    favLanguage,
    catchPhrase,
    gradClassName,
    favInstructor
  ) {
    super(name, age, location, specialty, favLanguage, catchPhrase);
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }
  standUp(slackChannel) {
    this.slackChannel = slackChannel;
    return `${this.name} announces to ${
      this.slackChannel
    }, @channel standy times!​​​​​`;
  }

  debugsCode(student, subject) {
    this.student = student;
    this.subject = subject;
    return `${this.name} debugs ${this.student.name}'s code on ${this.subject}`;
  }
}

//Example for Object1: Emily
const emily = new ProjectManager(
  "Emily",
  30,
  "Canada",
  "Prototypes",
  "Python",
  "I gotcha",
  "WEBEU3",
  "Gabe"
);

console.log(emily);

const emilyStandUp = emily.standUp("webeu3");
console.log(emilyStandUp);

const emilyDebugs = emily.debugsCode({ name: "Chika" }, "Function");
console.log(emilyDebugs);

//Example for Object2: Tobi
const tobi = new ProjectManager(
  "Tobi",
  30,
  "Japan",
  "FlexBox",
  "CSS",
  "I'm always on time",
  "WEBEU2",
  "Mark"
);

console.log(tobi);

const tobiStandUp = tobi.standUp("webeu2");
console.log(tobiStandUp);

const tobiDebugs = tobi.debugsCode({ name: "Lois" }, "Arrays");
console.log(tobiDebugs);
