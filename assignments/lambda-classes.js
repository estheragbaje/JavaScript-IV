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

const speaker = new Person("Esther", 26, "Nigeria");
console.log(speaker);

const speaking = speaker.speak();
console.log(speaking);

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

const sweets = new Instructors(
  "Sade",
  40,
  "Lagos",
  "Array Methods",
  "JavaScript",
  "Lambda School is Awesome"
);

console.log(sweets);

sweets.demo("English");
console.log(sweets);

let student = { name: "Segun" };

sweets.grade(student, "Maths");

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
