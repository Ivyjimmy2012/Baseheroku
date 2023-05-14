



var account = "", tronweb, useraddress = " ";



async function getAccount() {
    let self = this,
        tries = 0;

    var obj = setInterval(async () => {

        if (window.tronWeb) {


                        tronweb = window.tronWeb;

                        myContractInstanceold = await tronweb.contract(raila_abi, raila_address);

                        $('#bottom-informations').show();


                        if (window.tronWeb.defaultAddress.base58 == false){
                            showBottomWarning( " Please login to your wallet ");
                        }else{
                            //hideBottomWarning();
                            console.log('window.tronWeb.defaultAddress.base58 == false');
                        }


                        if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                            clearInterval(obj)
                            console.log('interval cleared')
                            tronweb = window.tronWeb;
                            _account = window.tronWeb.defaultAddress.base58;

                            //hideBottomWarning();
                            console.log('bottom warning hidden!')
                            $('#bottom-informations').show();

                            myContractInstanceold = await tronweb.contract(raila_abi, raila_address);

                            account = this._account;

                            //console.log('the current user is --->' + account)

                            useraddress = account;

                           
                        }




        }




        if (window.tronWeb == undefined ){

                        showBottomWarning( " Please install a Tron Wallet ");


        }


    }, 3000)

}




var globalamount=0;
var investamount=0;

async function getAccountExternal() {
    let self = this,
        tries = 0;

    var obj = setInterval(async () => {

        if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
            clearInterval(obj)
            tronweb = window.tronWeb;
            _account = window.tronWeb.defaultAddress.base58;

            globalamount=parseInt($('#totalwithdrawniglobal').html());
            /*investamount=parseInt($('#totalwithdrawniinvest').html(),16/ 1e6);*/

            myContractInstanceold = await tronweb.contract(raila_abi, raila_address);

            account = this._account;
            account = account;


            getProfitGlobal();
       //     getUserDividendsGlobal();
           console.log("get account external completed!")
        }
    }, 10)

}




async function getProfitGlobal() {




//get the users pglobal profit

 myContractInstanceold.methods.getProfit(useraddress).call().then(function(result){console.log(  tronweb.toDecimal(result) )});



}




function checkLevelResult(receipt)

{
                $('#myModal1').css('display','block');
                var fiveMinutes = 60 * 2,
                            display = document.querySelector('#time');
                        startTimer(fiveMinutes, display);
                        setTimeout(function () {
                            transactionhashLevel(receipt, 1);

                        }, 121000);
}









 async function transactionhashbuyLevel(txid, idd) {
    
        // for mainnet
        //await $.get("https://api.trongrid.io/v1/transactions/" + txid + "/events", function (data) {

        // for testnet
        await $.get("https://api.trongrid.io/v1/transactions/" + txid + "/events", function (data) {


            if (data.data.length > 0) {
  
                    show_success_report('transaction verified, congratulations page will reload in 5 seconds');

                    $('.signup-processing-modal').hide();

                        setTimeout(function () 
                            {

                            location.reload();


                            }, 5000);




            }
            else {
                show_error_report("transaction could not be found on the blockchain");

                $('.signup-processing-modal').hide();

                        setTimeout(function () 
                            {

                            location.reload();


                            }, 4000);


            }
        });

    };










async function buyLevelIncome(matrix, level, useraddress) {


    await getAccount();


    var levelPrice = [];

    levelPrice[0] = 10000000;
    levelPrice[1] = 20000000;
    levelPrice[2] = 40000000;
    levelPrice[3] = 60000000;
    levelPrice[4] = 80000000;
    levelPrice[5] = 100000000;
    levelPrice[6] = 120000000;
    levelPrice[7] = 200000000;
    levelPrice[8] = 400000000;
    levelPrice[9] = 600000000;
    levelPrice[10] = 800000000;
    levelPrice[11] = 1200000000;
    levelPrice[12] = 2400000000;
    levelPrice[13] = 3600000000;
    levelPrice[14] = 4800000000;
    levelPrice[15] = 6000000000;



/*    if (account != useraddress) {
        $('#myModal').modal('show');
        return false;
    }
*/



    if (account === undefined || account.length == 0) {
        show_error_report("<b> Please connect to your wallet account first </b>");
        return;
    }else if (account != undefined || account.length != 0){

        tradeobj = await tronWeb.trx.getAccount(account, ).then(result => {

            if (parseInt(result.balance) < levelPrice[level - 1] ){
                show_error_report('sorry you don"t have enough in your wallet to buy this slot  ');
            }else if (parseInt(result.balance) > levelPrice[level - 1]){

                    try {
                        
                        const promiseA = new Promise((resolutionFunc, rejectionFunc) => {

                            myContractInstanceold.methods.buyNewLevel(matrix, level).send({ feeLimit: 300000000, callValue: levelPrice[level - 1], shouldPollResponse: false })

                                .then(function (receipt) {


                                    console.log('reciept is---->' + receipt);

                                    resolutionFunc(777);//resolve thr promise


                                    console.log('entered buy new slot block ');

                                    $(".svg-loader").fadeOut();
                                  
                                    $('div#signupmodal').hide();

                                    $(document).ready(function(){

                                        var twoMinutes = 60 * 2,
                                        display = document.querySelector('#time');
                                        startTimer(twoMinutes, display);
                                                            

                                    });


                                    $('.signup-processing-modal').show();


                                    console.log('buying slot promise fulfilled!')
                   
                                    show_success_report("<b> <svg  xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z' fill='green'/></svg> your upgrade has begun, it will take only 2 mins  <b> ")


                                    //wait for 2 minutes the prform transaction hash

                                    setTimeout(function () 
                                        {

                                        $('.signup-processing-modal').show();
                                        
                                        transactionhashbuyLevel(receipt, 0);

                                        }, 121000);


             


                                }).catch(function (e) {
                                    console.log(e);

                                    if (e.message == "Contract validate error : Validate InternalTransfer error, balance is not sufficient.") {
                                        show_error_report("You dont have enough in your wallet to buy that level")
                                    }


                                    else if (e.error !== undefined && e.error != 'REVERT opcode executed') {

                                   show_error_report("<b>Signup is done but we have not found the receipt yet, However you can try logging in with the 'Authorization Button' </b>");
                                                                                        
            /*                            setTimeout(function () {
                                            location.href = "/Auth/SignIn?address=" + account;
                                        }, 6000);*/


                                    }
                                    else if (e.error == 'REVERT opcode executed'  ) {
                                        show_error_report('<b>Something went wrong, please wait 2 minutes and try loggin in </b>');
                                    }

                                    else if ( e.message == 'user exists' ) {
                                        show_error_report('<b>Account is already registered, please login</b>');
                                    }

                                    else if (e.message == 'contract validate error : account does not exist') {
                                        show_error_report('<b> Your account is not activated or does\'nt exist ')
                                    }


                                    else if (e.message == 'Network Error') {
                                        show_error_report('<b> Network connection error</b> ')
                                    }


                                    else {
                                        $('.reg-form__btn-comment').hide();
                                    }

                                    $(".svg-loader").fadeOut();

                                })


                                
                        });

                     
                        console.log("reached end of try block!");
                    } catch (e) {
                       console.log('this is the 1st try block erro caught--->', e);
                        $(".svg-loader").fadeOut();
                        show_error_report('<b> Something went wrong,  the transaction coundn"t be started </b> ')
                        //alert("Something went wrong the  transaction didnt initiate at all")
                    }





            }


        });

    }









}



















async function collect() {
    await getAccount();
    if (account === undefined || account.length == 0) {
        show_error_report("please connect to your wallet first");
        return;
    }



    if (account != useraddress) {
        //$('#myModal').modal('show');

        show_error_report("please login with authorization to withdraw from here! ");

        return false;
    }



/*    myContractInstanceold.methods.collect().send({ callValue: 0, shouldPollResponse: true })
        .then(function (receipt) {

            $(".svg-loader").fadeOut();*/

            // receipt example
            //console.log(receipt);

            //location.reload();

/*            show_success_report("Transaction confirmed, you can check your wallet ");

            location.reload();


        }).catch(function (e) {
            console.log(e);
            if (e.error !== undefined && e.error != 'REVERT opcode executed') {
                show_error_report("If transaction is confirmed wait for 2 to 3 minutes and check dashboard.");
                setTimeout(function () {
                    location.reload();
                }, 6000);
            }
            else if (e.error == 'REVERT opcode executed') {
                show_error_report(e.error)
            }

        })*/





$(".svg-loader").fadeIn();



if ( $('.p-glob-price_personal_p').text() == 0) {

//console.log($('.p-glob-price_personal_p').text());

show_error_report('You currently have no P-GLobal funds to withdraw yet')

$(".svg-loader").fadeOut();

} else { 





        try {
            //$('.reg-form__btn-comment').show();
            
            const promiseA = new Promise((resolutionFunc, rejectionFunc) => {

                myContractInstanceold.methods.collect().send({ callValue: 0, shouldPollResponse: true })

                    .then(function (receipt) {

                        console.log('reciept is---->' + receipt);

                        resolutionFunc(777);//resolve the promise

                        console.log('wthdraw block entered');

                        show_success_report("Transaction confirmed, the page will reload shortly");

                        


                                                                        
                        setTimeout(function () {
                           
                            location.reload();

                        }, 3000);





                    }).catch(function (e) {
                        console.log(e, e.message);

                        var processed_error = JSON.parse(e); 


                        if (e.error !== undefined && e.error != 'REVERT opcode executed') {

                        }
                        else if (e.error == 'REVERT opcode executed'  ) {
                            show_error_report('<b>Something went wrong, please try again </b>');
                        }


                        else if ( processed_error.message == 'Transaction expired') {
                            show_error_report(" Transaction expired, you took too long to sign the transaction ");
                        }

                        else if (e == 'Confirmation declined by user') {
                            show_error_report(" You sucessfully cancelled the transaction ")
                        }

                        else if ( e.message == 'user exists' ) {
                            show_error_report('<b>Account is already registered, please login</b>');
                        }

                        else if (e.message == 'contract validate error : account does not exist') {
                            show_error_report('<b> Your account is not activated or does\'nt exist ')
                        }


                        else if (e.message == 'Network Error') {
                            show_error_report('<b> Network connection error</b> ')
                        }


                        else if (e == 'Invalid transaction provided') {
                            show_error_report(e + " ,please retry")
                        }



                        else if (e == 'DUP_TRANSACTION_ERROR') {
                            show_error_report("Duplicate transaction ")
                        }

                        else if (e.error == 'Cannot find result in solidity node') {
                            show_error_report(e.error)
                        }

                        else {

                            $(".svg-loader").fadeOut();
                        }

                        $(".svg-loader").fadeOut();

                    })


                    
            });

         
            console.log("reached end of try block!");
        } catch (e) {
           console.log('this is the 1st try block erro caught--->', e);
            $(".svg-loader").fadeOut();
            show_error_report('<b> Something went wrong,  the transaction coundn"t be started </b> ')
            //alert("Something went wrong the  transaction didnt initiate at all")
        }//catch block





}//checking if th user ahas funds to withdaw


























}//collect function













$(document).ready(function () {





                                    getAccount();

                                    window.addEventListener('message', function (e) {
                                        if (e.data.message && e.data.message.action == "setAccount") {
                                            account = e.data.message.data.address;

                                        }
                                    });






                                    /*this is the event for the AUTHORIZATION BUTTON ON THE  LOGIN PAGE*/
                                        $('#authorization_btn').click(async () => {

                                            await getAccount();
                                            $(".svg-loader").fadeIn();


                                            if (window.tronWeb == undefined ){

                                                    show_error_report( "<b> Please install a Tron Wallet to continue <b> ");
                                                    $(".svg-loader").fadeOut();


                                            }


                                            else if (window.tronWeb.defaultAddress.base58 == false){

                                                    console.log('no tronlink account detected');
                                                    show_error_report( "<b> Please login to your wallet account first <b>");
                                                    $(".svg-loader").fadeOut();

                                            } 


                                            else if (account != null){


                                                $(".svg-loader").fadeOut();
                                                

                                                    var myPromise = MakeQuerablePromise(

                                                        myContractInstanceold.methods.users(account).call() 


                                                    );


                                                    $(".svg-loader").fadeIn();

                                                    setTimeout(function(){

                                                        if (myPromise.isRejected()) {

                                                            //do stuff after a failed promise here
                                                           
                                                                //show the error report 

                                                                show_error_report('<b> <svg viewBox="0 0 576 512" width="24" title="exclamation-triangle"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg> Network Connection Error   <b> ', 'input#signup-bar')

                                                                     console.log('promise rejected' )

                                                                     $(".svg-loader").fadeOut();

                                                        }



                                                        else if(myPromise.isPending()){

                                                        console.log('somehow this promise exceeded 3 secs and is still loading');

                                                        //this probably means the bad network is causing the promise to exceed 3 secs

                                                            //do stuff after a pending promise here
                                      
                                                                //show the error report and do other styling
                                            
                                                                show_error_report('<b> <svg viewBox="0 0 576 512" width="24" title="exclamation-triangle"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg> Network error, check your connection<b> ', 'input#signup-bar')

                                                                console.log('promise pending past 3 secs' )

                                                                $(".svg-loader").fadeOut();


                                                        }



                                                        else{

                                                         if(myPromise.isFulfilled()){


                                                            

                                                            myPromise.then(

                                                                function(result){


                                                                    var users_id = tronweb.toDecimal(result.id)
                                                                    console.log(users_id);


                                                                    var partnersCount = tronweb.toDecimal(result.partnersCount)
                                                                    console.log(partnersCount);

                                                                    var referrer = tronweb.address.fromHex(result.referrer)
                                                                    console.log(referrer)


                                                                            if (users_id != 0) {


                                                                                                
                                                                                                show_success_report("<b> <svg  xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z' fill='green'/></svg> Your Account has been found, redirecting you shortly <b> ", 'input#signup-bar')


                                                                                                $(".svg-loader").fadeOut();


                                                                                                //now send the data to the backend and use it to redirect the user

                                                                                                req = $.ajax({  
                                                                                                    url: '/authorization/ajax_reciever/for_login',
                                                                                                    type : 'POST',
                                                                                                    contentType: 'application/json',
                                                                                                    data : JSON.stringify ( {'user_tron_address': account, 'partnersCount': partnersCount, 'user_id': users_id, 'referrer': referrer, 'new_user':'yes'   } )

                                                                                                });
                                                                                    


                                                                                                req.done(function(data){

                                                                                                    $(".svg-loader").fadeOut();
                                                                                                    location.href = "/authorization/auto_login/" + account;


                                                                                                });

                                                                                                //finished sending the data to the backend

                                                                                                      

                                                                            }//if result is true
                                                                            else if (users_id == 0){

                                                                                $(".svg-loader").fadeOut();

                                                                                show_error_report('<b> <svg viewBox="0 0 576 512" width="24" title="exclamation-triangle"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg> <b>The current account is not registered yet </b> ', 'input#signup-bar')

                                                                                console.log('user is not registered' )

                                                                                



                                                                            }





                                                                }//end of function bracket

                                                                                                                )//end of then() clause
                                                         }//if promise is isFulfilled block


                                                    }},4000);//set timeout block












                                            }else{
                                                 show_error_report('<b>please login to your Tron wallet</b>')
                                            }

                                        });


                                    /*END*/









                                    /*this is the event for the 'ACCEPT' BUTTON ON THE REGISTER PAGE,  
                                    THIS BUTTON CAN ONLY BE SEEN AFTER YOU CLICK THE 'TO REGISTER' BUTTON AND THE MODAL TITLED "DISCLAIMER" POPS UP  */




                                    //when the 'ACCEPT' button is clicked;

                                    $('button#show-disclaimer.newbtn').click(async () => {


                                            $(".svg-loader").fadeIn();

                                    //1. Check for the current_user's account

                                            await getAccount();
                                            if (account === undefined || account.length == 0) {

                                                $(".svg-loader").fadeOut();

                                                show_error_report('<b>please login to your Tron wallet</b>')



                                                return;
                                            }

                                    //2. Check for the current_user's referral with a referral in format " 10UmX9h3  "
                                   

                                   
                                        var upline = $('input#signup-bar').val() ;

                                        console.log('upline-----> ' + upline)



                                        if ( upline.length == 0 ){

                                            $(".svg-loader").fadeOut();

                                            console.log('no upline inputed!');

                                            showSpecialSignup('You have not provided a referral, would you like to proceed automatically?', ' ')

                                            return false;
                                            
                                            

                                        } else if ( upline.length != 0 ) {

                                                    //slice out the digit from the referral code
                                                    upline = $('input#signup-bar').val().match(/(\d+)/)[0] ;

                                                    
                                                    console.log('sliced upline-----> ' + upline)


                                                    var myPromise = MakeQuerablePromise(

                                                        myContractInstanceold.methods.idToAddress(upline).call()     

                                                    );




                                                    setTimeout(function(){

                                                        if (myPromise.isRejected()) {

                                                            //do stuff after a failed promise here
                                                           
                                                                //show the error report 

                                                                show_error_report('<b> <svg viewBox="0 0 576 512" width="24" title="exclamation-triangle"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg> Network Connection Error   <b> ', 'input#signup-bar')

                                                                     console.log('promise rejected' )

                                                                     $(".svg-loader").fadeOut();

                                                        }



                                                        else if(myPromise.isPending()){

                                                        console.log('somehow this promise exceeded 3 secs and is still loading');

                                                        //this probably means a bad network connection is causing the promise to exceed 3 secs

                                                            //do stuff after a pending promise here
                                      
                                                                //show the error report and do other styling
                                            
                                                                show_error_report('<b> <svg viewBox="0 0 576 512" width="24" title="exclamation-triangle"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg> Network error, check your connection<b> ', 'input#signup-bar')

                                                                console.log('promise pending past 3 secs' )

                                                                $(".svg-loader").fadeOut();


                                                        }



                                                        else{

                                                         if(myPromise.isFulfilled()){


                                                            

                                                            myPromise.then(

                                                                function(result){



                                                                                if (tronWeb.address.fromHex(result) === "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb"){


                                                                                                //if the inputed id is out of range


                                                                                                //do stuff after finding out upline's id does not exist
                                                                                                $(".svg-loader").fadeOut();


                                                                                                //show the error report and do other styling

                                                                                                show_error_report('<b> <svg viewBox="0 0 576 512" width="24" title="exclamation-triangle"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>Upline does not exist <b>', 'input#signup-bar')

                                                                                                $(".svg-loader").fadeOut();
                                            

                                                                                } else {



                                                                                                var viewed_user_address = tronWeb.address.fromHex(result);

                                                                                                //do stuff after a sucessful promise here


                                                                                                console.log('promise fulfilled!')
                                                                                                

                                                                                                console.log( 'the result is this-->' + tronWeb.address.fromHex(result) );

                                                                                                

                                                                                                var referrer = tronWeb.address.fromHex(result);

                                                                                                
                                                                                                reactivate_button('button#viewmode');


                                                                                                show_success_report("<b> <svg  xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z' fill='green'/></svg> A Valid upline <b> ", 'input#signup-bar')


                                                                                                $(".svg-loader").fadeOut();


                                                                                                if (account != null) {

                                                                                                    SignUpPay(account, referrer);


                                                                                                }

                                                                                                else {

                                                                                                    show_error_report("Please login to you Tron wallet")

                                                                                                }
                                                                                          

                                                                                  }



                                                                }//end of function bracket

                                                                                                                )//end of then() clause
                                                         }//if promise is isFulfilled block


                                                    }},4000);//set timeout block








                                        }// checking if the loginbar is empty first







                                    });













                                    $('button#signup-confirm').click(async () => {

                                            $(".svg-loader").fadeIn();

                                            var referrer = 'TS7Y4qajaKCGbt8e7vsCYhtL8JLFPzHEJN';

                                            await getAccount();

                                            if (account === undefined || account.length == 0) {

                                                $(".svg-loader").fadeOut();
                                                
                                                show_error_report('<b> please login to your Tron wallet</b>')

                                                return;
                                            }




                                            if (account != null) {

                                                account = account;

                                                console.log('account trying to signp is ------>', account )

                                                SignUpPay(account, referrer);

                                                $('.special-signup-modal-wrapper').hide();//close the modal askin to use origin user

                                            }

                                            else {

                                                show_error_report("wallet not found");

                                            }


                                        });











async function transactionhash(txid, idd) {
    

    //for mainnnet
    //await $.get("https://api.trongrid.io/v1/transactions/" + txid + "/events", function (data) {

    $(".svg-loader").fadeIn();



    //for testnnet
    await $.get("https://api.trongrid.io/v1/transactions/" + txid + "/events", function (data) {




        if (data.data.length > 0) {
            if (idd == 1) {
                location.reload()
                /*alert('location not reloading');*/
            } else {
                //alert('after this message i should change location');






                /*after  signup get the users details and send to the backend*/

                    var myPromise = MakeQuerablePromise(

                        myContractInstanceold.methods.users(account).call() 

                    );

                    

                    setTimeout(function(){

                        if (myPromise.isRejected()) {

                            //do stuff after a failed promise here
                           
                                //show the error report 

                                show_error_report('<b> <svg viewBox="0 0 576 512" width="24" title="exclamation-triangle"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg> Network Connection Error   <b> ', 'input#signup-bar')

                             console.log('promise rejected' )

                             $(".svg-loader").fadeOut();

                        }



                        else if(myPromise.isPending()){

                        console.log('somehow this promise exceeded 3 secs and is still loading');

                        //this probably means the bad network is causing the promise to exceed 3 secs

                            //do stuff after a pending promise here
      
                                //show the error report and do other styling
            
                                show_error_report('<b> <svg viewBox="0 0 576 512" width="24" title="exclamation-triangle"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg> Network error, check your connection<b> ', 'input#signup-bar')

                                console.log('promise pending past 3 secs' )

                                $(".svg-loader").fadeOut();


                        }



                        else{

                         if(myPromise.isFulfilled()){


                            

                            myPromise.then(

                                function(result){
                                    $(".svg-loader").fadeOut();

                                    var users_id = tronweb.toDecimal(result.id)

                                    var partnersCount = 0

                                    var referrer = tronweb.address.fromHex(result.referrer)


                                            if (users_id != 0) {
                                    
                                                show_success_report("<b> <svg  xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z' fill='green'/></svg> Your Account has been found,  you should be redirected shortly <b> ", 'input#signup-bar')

                                                $(".svg-loader").fadeOut();

                                                //now send the data to the backend and use it to redirect the user





                                                $.ajax({


                                                    url: '/authorization/ajax_reciever/for_signup',
                                                    type : 'POST',
                                                    contentType: 'application/json',
                     /*                               data : JSON.stringify ( {'user_tron_address': account, 'partnersCount': partnersCount, 'user_id': users_id, 'referrer': referrer  } ),*/

                                                    data : JSON.stringify ( {'user_tron_address': account, 'partnersCount': partnersCount, 'user_id': users_id, 'referrer': referrer , 'new_user': 'yes' } ),



                                                      success: function (result) {

                                                                console.log("completed first ajax request");

                                                                $(".svg-loader").fadeOut();

                                                                /*enable the button*/
                                                               
                                                                location.href = "/authorization/auto_login/" + account;

                                                      },


                                                      error: function (result) {
                                                                $(".svg-loader").fadeOut();

                                                                show_error_report( "something went wrong, we couldn't redirect. Please manually login with authorisation ");

                                                                hide_and_disable_button('button#viewmode');

                                                                $('input#loginbar').css( {'border': "3px solid red"} );

                                                        
                                                      }



                                                });




                                                //finished sending the data to the backend

                                                      
                                            }//if result is true
                                            else if (users_id == 0){

                                                $(".svg-loader").fadeOut();

                                                show_error_report('<b> <svg viewBox="0 0 576 512" width="24" title="exclamation-triangle"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg> <b>The current account is not registered yet </b> ', 'input#signup-bar')

                                                console.log('user is not registered' )

                                                



                                            }





                                }//end of function bracket

                                                                                )//end of then() clause
                         }//if promise is isFulfilled block


                    }},4000);//set timeout block






            }


        }
        else {
            $(".svg-loader").fadeOut();
            
            show_error_report("<b>Signup was attempted but we have not found the transaction receipt, to confirm if you registered try logging in with the 'Authorisation Button' </b>", true);
            
            $('.signup-processing-modal').fadeOut();
        }


    }); //await get url
}







function SignUpPay(account, add) {
   

    try {
        
        
        const promiseA = new Promise((resolutionFunc, rejectionFunc) => {

            myContractInstanceold.methods.registrationExt(add).send({ feeLimit: 300000000, callValue: 20000000, shouldPollResponse: false })

                .then(function (receipt) {


                    console.log('reciept is---->' + receipt);

                    resolutionFunc(777);//resolve thr promise


                    console.log('entered signup pay block 2');

                    $(".svg-loader").fadeOut();
                  
                    $('div#signupmodal').hide();

                    $(document).ready(function(){

                        var twoMinutes = 60 * 2,
                        display = document.querySelector('#time');
                        startTimer(twoMinutes, display);
                                            

                    });


                    $('.signup-processing-modal').show();


                    console.log('signup promise fulfilled!');
   
                    show_success_report("<b> <svg  xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z' fill='green'/></svg> You will be redirected after signup  <b> ")


                    //wait for 2 minutes then perform transaction hash

                    setTimeout(function () 
                        {

                            $('.signup-processing-modal').hide();

                            transactionhash(receipt, 0);

                        }, 121000);




                }).catch(function (e) {
                    console.log(e);
                    if (e.error !== undefined && e.error != 'REVERT opcode executed') {

                   show_success_report("<b>Signup is done but not confirmed, However you can try logging in with the 'Authorization Button' </b>");
                                                                        
/*                            setTimeout(function () {
                            location.href = "/Auth/SignIn?address=" + account;
                        }, 6000);*/


                    }
                    else if (e.error == 'REVERT opcode executed'  ) {
                        show_error_report('<b>Something went wrong, please wait 2 minutes and try loggin in </b>');
                    }

                    else if ( e.message == 'user exists' ) {
                        show_error_report('<b>Account is already registered, please login</b>');
                    }

                    else if (e.message == 'contract validate error : account does not exist') {
                        show_error_report('<b> Your account is not activated or does\'nt exist ')
                    }


                    else if (e.message == 'Network Error') {
                        show_error_report('<b> Network connection error</b> ')
                    }


                    else {
                        $('.reg-form__btn-comment').hide();
                    }

                    $(".svg-loader").fadeOut();

                })


                
        });

     
        console.log("reached end of try block!");
    } catch (e) {
       console.log('this is the 1st try block erro caught--->', e);
        $(".svg-loader").fadeOut();
        show_error_report('<b> Something went wrong,  the transaction coundn"t be started </b> ')
        //alert("Something went wrong the  transaction didnt initiate at all")
    }//catch block

}//signuppay function















/*


$(document).ready(function(){

var twoMinutes = 60 * 0.5,
display = document.querySelector('#time');
startTimer(twoMinutes, display);
$('.signup-processing-modal').show();                   


setTimeout(function () 
    {

    $('.signup-processing-modal').hide();    

    }, 30000);





});

*/













$(document).on('click','.package-info-slot-in-active', function(){

/*
$(".svg-loader").fadeIn();

*/

});









})//document.ready























function MakeQuerablePromise(promise) {
    // Don't modify any promise that has been already modified.
    if (promise.isFulfilled) return promise;

    // Set initial state
    var isPending = true;
    var isRejected = false;
    var isFulfilled = false;

    // Observe the promise, saving the fulfillment in a closure scope.
    var result = promise.then(
        function(v) {
            isFulfilled = true;
            isPending = false;
            return v; 
        }, 
        function(e) {
            isRejected = true;
            isPending = false;





            if(e == 'No contract or not a valid smart contract' ){

            show_error_report(" <b>Please switch your wallet to testnet</b>" , 'input#loginbar')

            }


            else if(e == 'Smart contract is not exist.' ){

            show_error_report(" <b>Please switch your wallet to testnet</b>" , 'input#loginbar')

            }


            else if (e.error == 'REVERT opcode executed') {
                show_error_report(e.error)
            }

            else if (e.error == 'Confirmation declined by user') {
                show_error_report("transactoin cancelled by you")
            }

            else if (e.error == 'TRANSACTION_EXPIRATION_ERROR') {
                show_error_report("you took too long ")
            }

            else if (e.error == 'DUP_TRANSACTION_ERROR') {
                show_error_report("Duplicate transaction ")
            }

            else if (e.error == 'Cannot find result in solidity node') {
                show_error_report(e.error)
            }
                        
            else if (e.message == "Contract validate error : Validate InternalTransfer error, balance is not sufficient.") {
                show_error_report("you dont have enough tron to buy that level")
            }




            throw e; 


        }
    );

    result.isFulfilled = function() { return isFulfilled; };
    result.isPending = function() { return isPending; };
    result.isRejected = function() { return isRejected; };
    return result;
}









/*
                                                try {


*/


                                                /*}end of try block*/
 /*




                                                catch(err) {
                                                  console.log(err.message) ;
         

                                                
                                                }
*/

