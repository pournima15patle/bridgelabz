/**
  * @Purpose  :To create a class to manage a list of Doctors associated with the Clinique. This also manages the list of 
  *            patients who use the clinique. It manages Doctors by Name, Id, Specialization and Availability.
  *            It manages Patients by Name, ID, Mobile Number and Age. The Program allows users to search 
  *            Doctor by name, id, Specialization or Availability. Also the programs allows users to search
  *            patient by name, mobile number or id. The programs allows patients to take appointment with
  *            the doctor.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 19-03-2019
  **/
var readline = require('readline-sync');
var util=require('../CliniqueManagement/clinicUtil');
var filestream=require('fs');
/**To read the json file  */
var content=filestream.readFileSync('clinic.json');
var object=JSON.parse(content);
var data=new util.Clinic(object)
function clin(){
    data.clinicManagement(object);
}clin();
