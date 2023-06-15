class Student {
    constructor(name, surname, yearOfBirth, grades, presence) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.grades = grades;
        this.presence = presence || [];
    }

    absent() {
        if (this.presence.length <= 24) {
            this.presence.push(false);
        } else {
            console.log(`Student presence can't be more than 25`);
        }
        return this;
    }

    present() {
        if (this.presence.length <= 24) {
            this.presence.push(true);
        } else {
            console.log(`Student presence can't be more than 25`);
        }
        return this;
    }

    getAge() {
        let year = new Date().getFullYear();
        return year - this.yearOfBirth;
    }

    getAverageGrade() {
        let averageGrade = 0;

        this.grades.forEach(grade => {
            averageGrade += grade;
        });
        return averageGrade / this.grades.length;
    }

    getAveragePresence() {
        let averagePresence = 0;

        this.presence.forEach(presence => {
            if (presence === true) {
                averagePresence++;
            }
        });

        return averagePresence / this.presence.length;
    }

    summary(averageGrade, averagePresence) {
        if (averageGrade > 90 && averagePresence > 0.9) {
            return `Well done!`;
        } else if (averageGrade > 90 || averagePresence > 0.9) {
            return `Good, but can be better!`;
        } else {
            return `Lazy ass!`;
        }
    }
}

let Alina = new Student('Alina', 'Pavlinova', 2003, [70, 90, 100, 120, 80, 100, 90]);

Alina.present().present().present().absent().present().present().present().present().present().present();

let AlinasAverageGrade = Alina.getAverageGrade();
let AlinasAveragePresence = Alina.getAveragePresence();
let AlinasSummary = Alina.summary(AlinasAverageGrade, AlinasAveragePresence);

console.log(`Alina's age is ${Alina.getAge()}`);
console.log(`Alina's average grade is : ${AlinasAverageGrade}`);
console.log(`Alina's average presence is : ${AlinasAveragePresence}`);
console.log(`Alina's summary is : ${AlinasSummary}`);

let Pasha = new Student('Pasha', 'Stepanovich', 2000, [40, 30, 50, 90, 80, 60, 90]);

Pasha.absent().absent().absent().present();

let PashasAverageGrade = Pasha.getAverageGrade();
let PashasAveragePresence = Pasha.getAveragePresence();
let PashasSummary = Pasha.summary(PashasAverageGrade, PashasAveragePresence);

console.log(`Pasha's age is ${Pasha.getAge()}`);
console.log(`Pasha's average grade is : ${PashasAverageGrade}`);
console.log(`Pasha's average presence is : ${PashasAveragePresence}`);
console.log(`Pasha's summary is : ${PashasSummary}`);

let Victor = new Student('Victor', 'Spagetti', 2008, [100, 90, 95, 90, 80, 100, 100]);

Victor.present().present();

let VictorsAverageGrade = Victor.getAverageGrade();
let VictorsAveragePresence = Victor.getAveragePresence();
let VictorSummary = Victor.summary(VictorsAverageGrade, VictorsAveragePresence);

console.log(`Victor's age is ${Victor.getAge()}`);
console.log(`Victor's average grade is : ${VictorsAverageGrade}`);
console.log(`Victor's average presence is : ${VictorsAveragePresence}`);
console.log(`Victor's summary is : ${VictorSummary}`);