console.log("Welcome !! validating Pincode");
	
	const pincodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
	
	function validatePincode(pincode){

	    if(pincodeRegex.test(pincode))
	        console.log(pincode + " : Pincode is Valid");
	    else
	        throw pincode + " : Pincode is Invalid !";
	}
	
	try{
	    validatePincode("400088");
	    validatePincode("400 088");
      
       
	}
	catch(e){
	    console.error(e);
	}

