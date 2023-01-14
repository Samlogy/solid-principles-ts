class Email {
    public email : string;

    constructor(email : string){
        if(this.validateEmail(email))  this.email = email;
        else throw new Error("Invalid email!");  
    }
    validateEmail(email : string) {
        const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return regex.test(email);
    }
}
class Person {
    public name : string;
    public surname : string;
    public email : Email;

    constructor(name : string, surname : string, email : Email){
        this.surname = surname;
        this.name = name;
        this.email = email;
    }
    validateEmail(email : string) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }
    presentOneSelf() {
        const message = "Hi! i'm "+ this.name + "surname: "+this.surname+ " email: "+ this.email
        console.log(message);
    }
   
}

interface Salary {
    calculateSalary(): number
}
interface Serializable {
    serialize(): string;
}

interface IEngineer {
    experience:number
    skills:number
}
interface IHR {
    experience:number
    achievements:number
}
class Employee extends Person {
// return salaries for all employees salaries
    getSalary(positions: Salary[]) {
        return positions.reduce(
            (previous, current) => previous + current.calculateSalary(),
            0
        );
    }
}

class Engineer extends Employee implements IEngineer, Salary {
    public experience: number;
    public skills: number;

    public calculateSalary() {
        return this.experience * this.skills 
    }
}

class HR extends Employee implements IHR, Salary {
   public experience: number;
    public achievements: number;

   public calculateSalary() {
        return this.experience * this.achievements 
    }
}

class EngineerDTO implements IEngineer, Serializable {

   public experience: number;
    public skills: number;

    public calculateSalary() {
        return this.experience * this.skills 
    }
    public serialize() {
        return JSON.stringify(this);
    }
}

class HrDTO implements IHR, Serializable {
    public experience: number;
    public achievements: number;

    public serialize() {
        return JSON.stringify(this);
    }
}

const person = new Person('sam', "ss", "sam@gmail.com")
person.presentOneSelf()

// 1/ S: single responsabilty
// create another class "Email" (to handle responsability)

const employee = new Employee('sam', "ss", "sam@gmail.com")

// 2/ O: Open/close principle (entities should be open for extension, but closed for modification)
// we can other employees different from engineer or hr without changing the written codebase (add class...)


// 3/ Liskov substitution principle
// 

// 4/ Interface segregation principle
// HR, engineer need salay, their own interface but do not need serilize interface, 
// we can create another layer to deal with it (class) --> "EngineerDTO, HrDTO"


// 5/ Dependency inversion principle#
