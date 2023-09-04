//  Create a file Subject.ts and write a Subject class in the same namespace named Subjects. The class has one attribute teacher that implements the Teacher interface

namespace Subjects {
  export class Subject {
    teacher: Teacher;
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
