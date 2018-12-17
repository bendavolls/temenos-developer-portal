$(document).ready(function() {
	$("#submit").click(function(event){
    var firstName = $("#first_name").val();
    var lastName = $("#last_name").val();
	var whatIsTheSolution = $("#00N2X000009FMvw").val();
	var whatDifferentiatesTheSolution = $("#00N2X000009FMvm").val();
	var reasonToBuy = $("#00N2X000009FMvh").val();
	var averageSellingPrice = $("#00N2X000009FMvr").val();
	var whichBanksUseTheSolution = $("#00N2X000009FMw1").val();
	var referredBy = $("#00N2X000009FMwG").val();
	var nameOfReferral = $("#00N2X000009FMwB").val();
	var address = $("#street").val()+" "+$("#city").val()+" "+$("#state").val()+" "+$("#zip").val()+" "+$("#country").val()	
	var orgEmail = $("#00Nw0000008OXBb").val();
	var countryOfIncorporation = $("#00N2X000009FMvN").val();
	var companyAndApps = $("#00N2X000009FMvI").val();
	var businessFunction = $("#00N2X000009FMv8").val();
	var businessFunctionOther = $("#00N2X000009FMvD").val();
	var primaryMarket = $("#00N2X000009FMvS").val();
	var primaryMarketOther = $("#00N2X000009FMvX").val();
	var jobTitle = $("#title").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	var company = $("#company").val();
	var orgId;
    var personId;
	
	if (firstName !== null && firstName !== '' && lastName !== null && lastName !== '' && whatIsTheSolution !== null && whatIsTheSolution !== '' && whatDifferentiatesTheSolution !== null && whatDifferentiatesTheSolution !== '' && reasonToBuy !== null && reasonToBuy !== '' && averageSellingPrice !== null && averageSellingPrice !== '' && whichBanksUseTheSolution !== null && whichBanksUseTheSolution !== '' && referredBy !== null && referredBy !== '' && nameOfReferral !== null && nameOfReferral !== '' && address !== null && address !== '' && orgEmail !== null && orgEmail !== '' && countryOfIncorporation !== null && countryOfIncorporation !== '' && companyAndApps !== null && companyAndApps !== '' && businessFunction !== null && businessFunction !== '' && businessFunctionOther !== '' && businessFunctionOther !== null && primaryMarket !== '' && primaryMarket !== null && primaryMarketOther !== '' && primaryMarketOther !== null && jobTitle !== '' && jobTitle !== null && phone !== '' && phone !== null && email !== '' && email !== null && company !== '' && company !== null && orgId !== '' && orgId !== null && personId !== '' && personId !== null) 
	
	{
		
	
	//create organization
	var post1 = $.ajax({
    url: 'https://api.pipedrive.com/v1/organizations?api_token=5478e2c6a03fbc64d35241c2b15c9a17189792c8',
    headers: {
        'Accept':'application/json',
        'Authorizationuthorization':'5478e2c6a03fbc64d35241c2b15c9a17189792c8',
        'Content-Type':'application/json'
    },
    type: 'POST',
    dataType: 'json',
                contentType: "application/json",
                async: false,
   data: JSON.stringify({ "name": company, "visible_to": "3", "address": address, "37523b9d3372ef6077a83210ad2b29da8aab00d0": orgEmail, "018ac3a4631ba42cf2d11011141d575d0a5aed09": countryOfIncorporation, "d7a58f5365b1dfe5554c1cc23cafb8d9d7052647": companyAndApps, "2f09bcc490dec9b56f0d6016bb45b45ae6300ca3": businessFunction, "9076af399c5c06d39eee3b6254b83b95bb7aa96c": businessFunctionOther, "c652755437de55901aa91ae78c88ab54245cfe47": primaryMarket, "e055aeedebfeb0649529a72f8ebb0b9a9116f91c": primaryMarketOther}),
                
    success: function(response){
      console.log('succes: ' + response.data.id);
                  orgId=response.data.id
    },
                error: function(errorResponse){
                                console.log('error: ' + errorResponse);
                },
        done: function(results) {
        // uhm, maybe I don't even need this?
        console.log(results);
    },
    fail: function( jqXHR, textStatus, errorThrown ) {
        console.log( 'Could not get posts, server response: ' + textStatus + ': ' + errorThrown );
    }
  }).responseJSON;
  
  //create person
    var post1 = $.ajax({
    url: 'https://api.pipedrive.com/v1/persons?api_token=5478e2c6a03fbc64d35241c2b15c9a17189792c8',
    headers: {
        'Accept':'application/json',
        'Authorizationuthorization':'5478e2c6a03fbc64d35241c2b15c9a17189792c8',
        'Content-Type':'application/json'
    },
    type: 'POST',
    dataType: 'json',
                contentType: "application/json",
                async: false,
    data: JSON.stringify({ "name": firstName + " "  +lastName, "org_id": orgId, "email": email, "phone": phone, "visible_to": "3", "email": email, "phone": phone, "4631430cc993779dca4dc7262323414e4cc309b1": jobTitle}),
                
    success: function(response){
      console.log('succes: ' + response.data.id);
                  personId = response.data.id
    },
                error: function(errorResponse){
                                console.log('error: ' + errorResponse);
                },
                done: function(results) {
        // uhm, maybe I don't even need this?
        console.log(results);
    },
    fail: function( jqXHR, textStatus, errorThrown ) {
        console.log( 'Could not get posts, server response: ' + textStatus + ': ' + errorThrown );
    }
  }).responseJSON;
  
  //create deal
    var post1 = $.ajax({
    url: 'https://api.pipedrive.com/v1/deals?api_token=5478e2c6a03fbc64d35241c2b15c9a17189792c8',
    headers: {
        'Accept':'application/json',
        'Authorizationuthorization':'5478e2c6a03fbc64d35241c2b15c9a17189792c8',
        'Content-Type':'application/json'
    },
    type: 'POST',
    dataType: 'json',
                contentType: "application/json",
                async: false,
    data: JSON.stringify({ "title": company + " - Deal", "value": "0", "stage_id": "7", "org_id": orgId, "person_id": personId, "99efe884575665db20e98422ccf2d79d842814f5": whatIsTheSolution, "b2f1b1df9c0e27df3b4d79ed8c0aaf3a68952ac2": whatDifferentiatesTheSolution, "ab19be8ae99b837b82706b605d153d3328d1bcbc": reasonToBuy, "15c65d495070dbdf9fc8bc38395291a807dc1a05": averageSellingPrice, "87e0306537a6c41364abebb756db4f3d6bc5d17f": whichBanksUseTheSolution, "5b39723e96b922a1d1d962f2dddef9b7dc93571d": referredBy, "9ce3644b9d4cc1049d0a362b3b752f7dfdaa92f2": nameOfReferral}),
                
    success: function(response){
      console.log('succes: ' + response.data.id);
    },
                error: function(errorResponse){
                                console.log('error: ' + errorResponse);
                },
                done: function(results) {
        // uhm, maybe I don't even need this?
        console.log(results);
    },
    fail: function( jqXHR, textStatus, errorThrown ) {
        console.log( 'Could not get posts, server response: ' + textStatus + ': ' + errorThrown );
    }
  }).responseJSON;
	}
		

    //$.ajax({
    //url: 'https://api.pipedrive.com/v1/deals?api_token=5478e2c6a03fbc64d35241c2b15c9a17189792c8',
    //headers: {
    ///    'Accept':'application/json',
    //   'Authorizationuthorization':'5478e2c6a03fbc64d35241c2b15c9a17189792c8',
    //    'Content-Type':'application/json'
    //},
    //type: 'POST',
    //dataType: 'json',
    //contentType: "application/json",
	//async: false,
    //data: JSON.stringify({ "title": firstName, "value": "0", "850e55e1eefc22fef5dbf7aef8c1a087f9a8cc87": "No", "b21677107b8da49b2a88f352de03b5a600dd2673": lastName, "stage_id": "7", "43d082df603339ae328eb2716a3b9409ea55d956": whatIsTheSolution, "b2f1b1df9c0e27df3b4d79ed8c0aaf3a68952ac2": whatDifferentiatesTheSolution, "ab19be8ae99b837b82706b605d153d3328d1bcbc": reasonToBuy, "15c65d495070dbdf9fc8bc38395291a807dc1a05": averageSellingPrice, "87e0306537a6c41364abebb756db4f3d6bc5d17f": whichBanksUseTheSolution, "5b39723e96b922a1d1d962f2dddef9b7dc93571d": referredBy, "9ce3644b9d4cc1049d0a362b3b752f7dfdaa92f2": nameOfReferral}),
    //success: function(data){
    //    console.log('succes: '+data);
    //},
    //failure: function(data){
    //   console.log('error: '+data);
    //}
  //});
});
});
