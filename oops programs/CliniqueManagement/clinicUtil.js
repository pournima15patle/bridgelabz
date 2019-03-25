/**
 * @Purpose : To create a class to manage a list of Doctors associated with the Clinique. This also manages the list of 
 *            patients who use the clinique. It manages Doctors by Name, Id, Specialization and Availability.
 *            It manages Patients by Name, ID, Mobile Number and Age. The Program allows users to search 
 *            Doctor by name, id, Specialization or Availability. Also the programs allows users to search
 *            patient by name, mobile number or id. The programs allows patients to take appointment with
 *            the doctor.
 */
var readline = require('readline-sync');
var filestream = require('fs');
class Clinic {
    constructor(object) {
        this.object = object;
    }

    clinicManagement(data) {

        var doctor = data.Doctor;
        var patient = data.Patient;
        //console.log(patient)
        /**read the choice from user */
        var answer = Number(readline.question("Press 1 to search doctor \n and press 2 to search patient"));
        {
            if (answer == 1) {
                console.log(doctor);
                var count=0;
                let inf = readline.question("Press \n 1. to search doctor by his name \n 2. by ID ,\n 3.by Specialization ");
                if (inf == 1) {
                    var nam = readline.question("Enter the name of doctor ");
                    for (var key in doctor) {
                        if (doctor[key].name == nam) {
                            count=1;
                            console.log('nam')
                            console.log("----your doctor information----");
                            console.log(doctor[key]);
                        }
                    }
                    if(count==0){
                        console.log('Invalid Doctor Name');
                    }
                    
                }
                else if (inf == 2) {
                    var idn = readline.question("Enter the ID of doctor ");
                    for (var key in doctor) {
                        if (doctor[key].Id == idn) {
                            count=1;
                            console.log("----your doctor information----");
                            console.log(doctor[key]);
                        }
                    }if(count==0){
                        console.log('invalid doctor id')
                    }
                   
                }
                else if (inf == 3) {
                    var spc = readline.question("Enter the Specialization of doctor ");
                    for (var key in doctor) {
                        if (doctor[key].Specialization == spc) {
                            count=1;
                            console.log("----your doctor information----");
                            console.log(doctor[key]);
                        }
                    }if(count==0){
                        console.log('Invalid doctor specialization');
                    }
                    
                }
                else {
                    console.log("Enter valid input");
                    this.clinicManagement(data);
                }
            }
            else if (answer == 2) {
                console.log(patient);
                 var count1=0;
                let inf = readline.question("Press \n 1. to search patient by his name \n 2. by ID ,\n 3.by Mobile number ");
                if (inf == 1) {
                    var nam = readline.question("Enter the name of Patient ");
                    for (var key in patient) {
                        if (patient[key].name == nam) {
                            count1=1;
                            console.log("----your Patient information----");
                            console.log(patient[key]);
                        }
                    }
                    if(count1==0){
                        console.log('patient not available');
                    }
                    this.appointment(data, doctor, patient);
                }
                else if (inf == 2) {
                    var idn = readline.question("Enter the Id of Patient ");
                    for (var key in patient) {
                        if (patient[key].Id == idn) {
                            count1=1;
                            console.log("----your Patient information----");
                            console.log(patient[key]);
                        }
                    }
                    this.appointment(data, doctor, patient);
                }
                else if (inf == 3) {
                    var mob = readline.question("Enter the mobile number of Patient "); deck2D
                    for (var key in patient) {
                        if (patient[key].Contact_number == mob) {
                            count1=1;
                            console.log("----your Patient information----");
                            console.log(patient[key]);
                        }
                    }
                    this.appointment(data, doctor, patient);
                }
                else if (inf == 4) {
                    return;
                }
                else {
                    console.log("Enter the valid input")
                }
            }
            else {
                console.log("Enter valid input")
            }
        }

    }
    appointment(data, doctor, patient) {
        var spec = readline.question("enter the specialization of doctor");
        for (var key in doctor) {
            if (doctor[key].Specialization == spec) {
                console.log(doctor[key].name + ' is available on' + doctor[key].onDay);
            }
        }
        console.log("you can take appointment");
        var name = readline.question("enter the name of patient:");
        //console.log(patient);
        for (var key in patient) {
            console.log(patient);
            if (patient[key].name == name) {
                console.log('your appointment is fixed')

            }
            // }
            else {
                var name = readline.question("enter the new name of patient");
                if (!isNaN(name)) {
                    console.log('please enter valid name of patient');
                    var name = readline.question("enter the name of patient");
                    return;
                }
                var age = readline.question('enter the age of patient');
                if (isNaN(age)) {
                    console.log('please enter valid age ');
                    var age = readline.question('enter the age of patient');
                    return;
                }
                var contact = readline.question('enter the patient contact no.');
                while (contact >= 999999999 && contact <= 9999999999) {
                    console.log("please,enter 10 digit mobile no");
                    var contact = readline.question('enter the patient contact no.');
                }
                var id = Math.random() * 1000;

                data.Patient.push({
                    name: name,
                    Id: id,
                    Contact_number: contact,
                    age: age
                })
                filestream.writeFileSync('clinic.json', JSON.stringify(data));
                return;
            }
        }
    }


} module.exports = {
    Clinic
}