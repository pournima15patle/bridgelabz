/**
  * @Purpose   :To Create Address book for person.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 18-03-2019
  **/
var filestream=require('fs');
/** Read the json file  */
var content=filestream.readFileSync('address.json');
var data=JSON.parse(content);
var util=require('../AddressBook/addressBook');
var addr=new util.AddressBook();

addr.address_book(data);
