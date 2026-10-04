class Student {
    firstName: string;
    lastName: string;
    age: number; 
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

class StudentEnhanced {
    constructor(
        public firstName: string, 
        public lastName: string, 
        public age: number, 
        private courses: string[]) 
    {}

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Mickey', 'Mouse', 200, ['Angular']);
student.enrol('React');
student.age;
// student.courses;     // doesn't work because it's private
student.listCourses();

const student2 = new Student('Minnie', 'Mouse', 200, ['Java']);
student2.enrol('C');
student2.age;
// student2.courses;    // private attribute
student2.listCourses();
