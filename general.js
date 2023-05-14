
no_data_retry_count = 0;
counter=0;
posts_count = 20;
post_value = 'normal'
//console.log('initial number of posts is --->' + posts_count);
caught_up_svg = '<svg viewBox="0 0 448 512" width="100" title="user-astronaut"><path d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z"></path></svg>'








function show_search(){

$('.search').show(100).removeClass('hidden');

}



function hide_search(){

$('.search').hide(100).addClass('hidden');

}





function show_top_elements(){

$('.table').show(100);
$('.search').show(100);
$('.header_link').show(100)

}



function hide_top_elements(){

$('.table').hide(100);
$('.search').hide(100);
//$('.header_link').hide(100)

}



function hide_top_elements_and_load(){

$('.table').hide(100);
$('.search').hide(100);
//$('.header_link').hide(100)

var logo = '<svg width="58" height="91" id="small-IM-logo" class ="small-IM-logo-longer-animation" viewBox="0 0 58 91" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M57.9897 6.69832C57.9173 16.93 57.9729 16.14 57.2426 17.2462C56.1592 18.8859 57.0021 18.3569 39.1263 28.6162C36.9548 29.8624 33.0982 32.0788 30.5569 33.5413C28.0156 35.0038 24.7017 36.895 23.1922 37.7442C21.6827 38.5929 20.4733 39.3031 20.5041 39.3216C20.5343 39.3402 21.3537 39.7237 22.3239 40.1744C40.8402 48.7699 50.2457 53.2468 51.169 53.9043C53.7351 55.7322 54.454 58.5594 52.9445 60.8942C51.9844 62.3798 52.3482 62.164 31.3971 73.669C26.232 76.5052 26.6246 76.2191 26.6722 77.115C26.9134 81.6406 18.7876 83.6111 15.4496 79.8363C12.182 76.1408 17.1018 71.4672 22.7017 72.9472L23.3389 73.1154L26.4571 71.3894C28.1724 70.4403 30.3961 69.2101 31.3991 68.6565C48.9084 58.988 47.8913 59.5857 48.2203 58.7707C48.6819 57.6273 47.9349 56.9543 44.3356 55.2714C41.5068 53.9489 42.1467 53.9063 39.2107 55.6122C38.1943 56.203 30.5194 60.5348 22.1557 65.2381C13.792 69.9419 6.66378 73.9932 6.31471 74.2417C5.37603 74.9092 5.33115 75.1541 5.38743 79.3108L5.437 83.0429L7.98973 81.6251C9.39406 80.8456 10.7649 80.1746 11.0369 80.1334C13.2238 79.8062 15.1394 81.995 13.7927 83.2833C13.6332 83.4359 10.4781 85.2347 6.78105 87.2804L0.060201 91L0.0153053 83.0379C-0.0322652 74.5965 -0.0155073 74.3706 0.775101 73.148C1.75197 71.6373 2.58211 71.1429 28.9053 56.4012C33.31 53.9344 36.918 51.8876 36.9226 51.853C36.9267 51.8184 30.374 48.7317 22.36 44.9931C6.42526 37.56 6.00851 37.3376 4.97201 35.72C3.57237 33.5343 4.032 30.9209 6.14051 29.0764C6.49427 28.7672 11.4115 25.925 17.1152 22.7329C22.7982 19.5524 28.2394 16.5054 29.2048 15.9613L30.9616 14.9726L30.977 14.1866C31.0333 11.4222 33.8011 9.45524 37.4466 9.59025C43.7694 9.82464 45.5135 16.1671 39.8459 18.3183C38.6298 18.78 35.7783 18.8633 34.8061 18.4658L34.2667 18.245L24.557 23.676C8.49224 32.6615 9.82756 31.8564 9.62053 32.683C9.30093 33.9604 9.99707 34.4819 14.931 36.6606C15.7162 37.0074 16.7561 37.4812 17.2412 37.7136C18.3996 38.2687 18.3568 38.1823 17.1079 37.4476C16.3347 36.9923 16.1357 36.8117 16.2724 36.6882C16.4519 36.5266 21.2425 33.7355 28.709 29.4438C30.8805 28.1956 33.1867 26.8686 33.8339 26.4952C34.4805 26.1212 37.064 24.6366 39.5745 23.1952C42.0851 21.7542 45.8431 19.5966 47.9255 18.4006C52.9579 15.5106 52.4735 16.2128 52.5358 11.7168L52.5874 8.01932L51.6963 8.50616C51.2058 8.77367 50.0213 9.43266 49.0652 9.97019C47.1563 11.0427 46.8696 11.1341 45.7178 11.0372C43.7755 10.8731 42.6793 8.72147 44.0294 7.7237C44.6157 7.29056 57.6667 0.00452017 57.865 3.09385e-06C57.981 -0.00300829 58.0212 2.19229 57.9897 6.69832ZM35.85 12.1901C33.659 12.9449 33.649 15.3756 35.8332 16.1184C38.7772 17.1202 41.4164 14.545 39.34 12.697C38.5032 11.9522 37.1223 11.7514 35.85 12.1901ZM19.4683 75.2133C16.9256 76.0394 16.9484 78.5484 19.5065 79.3489C22.4049 80.2564 24.9101 77.3007 22.6146 75.6816C21.6894 75.0281 20.5571 74.8595 19.4683 75.2133Z" fill="url(#paint00_linear_4_5)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M57.9897 6.69832C57.9173 16.93 57.9729 16.14 57.2426 17.2462C56.1592 18.8859 57.0021 18.3569 39.1263 28.6162C36.9548 29.8624 33.0982 32.0788 30.5569 33.5413C28.0156 35.0038 24.7017 36.895 23.1922 37.7442C21.6827 38.5929 20.4733 39.3031 20.5041 39.3216C20.5343 39.3402 21.3537 39.7237 22.3239 40.1744C40.8402 48.7699 50.2457 53.2468 51.169 53.9043C53.7351 55.7322 54.454 58.5594 52.9445 60.8942C51.9844 62.3798 52.3482 62.164 31.3971 73.669C26.232 76.5052 26.6246 76.2191 26.6722 77.115C26.9134 81.6406 18.7876 83.6111 15.4496 79.8363C12.182 76.1408 17.1018 71.4672 22.7017 72.9472L23.3389 73.1154L26.4571 71.3894C28.1724 70.4403 30.3961 69.2101 31.3991 68.6565C48.9084 58.988 47.8913 59.5857 48.2203 58.7707C48.6819 57.6273 47.9349 56.9543 44.3356 55.2714C41.5068 53.9489 42.1467 53.9063 39.2107 55.6122C38.1943 56.203 30.5194 60.5348 22.1557 65.2381C13.792 69.9419 6.66378 73.9932 6.31471 74.2417C5.37603 74.9092 5.33115 75.1541 5.38743 79.3108L5.437 83.0429L7.98973 81.6251C9.39406 80.8456 10.7649 80.1746 11.0369 80.1334C13.2238 79.8062 15.1394 81.995 13.7927 83.2833C13.6332 83.4359 10.4781 85.2347 6.78105 87.2804L0.060201 91L0.0153053 83.0379C-0.0322652 74.5965 -0.0155073 74.3706 0.775101 73.148C1.75197 71.6373 2.58211 71.1429 28.9053 56.4012C33.31 53.9344 36.918 51.8876 36.9226 51.853C36.9267 51.8184 30.374 48.7317 22.36 44.9931C6.42526 37.56 6.00851 37.3376 4.97201 35.72C3.57237 33.5343 4.032 30.9209 6.14051 29.0764C6.49427 28.7672 11.4115 25.925 17.1152 22.7329C22.7982 19.5524 28.2394 16.5054 29.2048 15.9613L30.9616 14.9726L30.977 14.1866C31.0333 11.4222 33.8011 9.45524 37.4466 9.59025C43.7694 9.82464 45.5135 16.1671 39.8459 18.3183C38.6298 18.78 35.7783 18.8633 34.8061 18.4658L34.2667 18.245L24.557 23.676C8.49224 32.6615 9.82756 31.8564 9.62053 32.683C9.30093 33.9604 9.99707 34.4819 14.931 36.6606C15.7162 37.0074 16.7561 37.4812 17.2412 37.7136C18.3996 38.2687 18.3568 38.1823 17.1079 37.4476C16.3347 36.9923 16.1357 36.8117 16.2724 36.6882C16.4519 36.5266 21.2425 33.7355 28.709 29.4438C30.8805 28.1956 33.1867 26.8686 33.8339 26.4952C34.4805 26.1212 37.064 24.6366 39.5745 23.1952C42.0851 21.7542 45.8431 19.5966 47.9255 18.4006C52.9579 15.5106 52.4735 16.2128 52.5358 11.7168L52.5874 8.01932L51.6963 8.50616C51.2058 8.77367 50.0213 9.43266 49.0652 9.97019C47.1563 11.0427 46.8696 11.1341 45.7178 11.0372C43.7755 10.8731 42.6793 8.72147 44.0294 7.7237C44.6157 7.29056 57.6667 0.00452017 57.865 3.09385e-06C57.981 -0.00300829 58.0212 2.19229 57.9897 6.69832ZM35.85 12.1901C33.659 12.9449 33.649 15.3756 35.8332 16.1184C38.7772 17.1202 41.4164 14.545 39.34 12.697C38.5032 11.9522 37.1223 11.7514 35.85 12.1901ZM19.4683 75.2133C16.9256 76.0394 16.9484 78.5484 19.5065 79.3489C22.4049 80.2564 24.9101 77.3007 22.6146 75.6816C21.6894 75.0281 20.5571 74.8595 19.4683 75.2133Z" fill="url(#paint00_linear_4_5)" fill-opacity="0.2"></path> <defs> <linearGradient id="paint00_linear_4_5" x1="48.1805" y1="0.139424" x2="18.8172" y2="96.6802" gradientUnits="userSpaceOnUse"> <stop stop-color="rebeccapurple"></stop> <stop offset="0.307668" stop-color="rebeccapurple" stop-opacity="0.8"></stop> <stop offset="0.633496" stop-color="rebeccapurple" stop-opacity="0.7"></stop> <stop offset="0.833333" stop-color="#98AF91" stop-opacity="0.9"></stop> <stop offset="0.994792" stop-color="#AAAAAA"></stop>s </linearGradient> <linearGradient id="paint00_linear_4_5" x1="55.3591" y1="-0.579818" x2="27.5275" y2="93.7326" gradientUnits="userSpaceOnUse"> <stop stop-color="#050505"></stop> <stop offset="1"></stop> </linearGradient> </defs> </svg>'
        
$("#everything").html("<div class = 'nIKn' >" + logo + "</div>");


}


/*
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}




function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function checkCookie() {
    var data = getCookie("Eshow_Splash");

    if (data != "") {

        //alert("we have welcomed you before "  + data + ' times(s)' );

        $('#splash').hide();

        console.log('splash screen hidden');


    } else {

        setCookie("Eshow_Splash", 1, .6);

        //alert("we have not welcomed you before" );

        $('#splash').show();

        $(document).ready(function(){

                window.setTimeout(function(){ $('#splash').hide(); },4500);

        });

        console.log('splash screen will show');

    }


}

*/






function add_active_to_feed(){

var current = document.getElementsByClassName("active");
console.log('current ' + current[0])
current[0].className = current[0].className.replace(" active", "");

$('a#feed.menu-item').addClass('active') ;
  

}




function show_body_loader(){

   var logo = '<svg width="58" height="91" id="small-IM-logo" class ="small-IM-logo-longer-animation" viewBox="0 0 58 91" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M57.9897 6.69832C57.9173 16.93 57.9729 16.14 57.2426 17.2462C56.1592 18.8859 57.0021 18.3569 39.1263 28.6162C36.9548 29.8624 33.0982 32.0788 30.5569 33.5413C28.0156 35.0038 24.7017 36.895 23.1922 37.7442C21.6827 38.5929 20.4733 39.3031 20.5041 39.3216C20.5343 39.3402 21.3537 39.7237 22.3239 40.1744C40.8402 48.7699 50.2457 53.2468 51.169 53.9043C53.7351 55.7322 54.454 58.5594 52.9445 60.8942C51.9844 62.3798 52.3482 62.164 31.3971 73.669C26.232 76.5052 26.6246 76.2191 26.6722 77.115C26.9134 81.6406 18.7876 83.6111 15.4496 79.8363C12.182 76.1408 17.1018 71.4672 22.7017 72.9472L23.3389 73.1154L26.4571 71.3894C28.1724 70.4403 30.3961 69.2101 31.3991 68.6565C48.9084 58.988 47.8913 59.5857 48.2203 58.7707C48.6819 57.6273 47.9349 56.9543 44.3356 55.2714C41.5068 53.9489 42.1467 53.9063 39.2107 55.6122C38.1943 56.203 30.5194 60.5348 22.1557 65.2381C13.792 69.9419 6.66378 73.9932 6.31471 74.2417C5.37603 74.9092 5.33115 75.1541 5.38743 79.3108L5.437 83.0429L7.98973 81.6251C9.39406 80.8456 10.7649 80.1746 11.0369 80.1334C13.2238 79.8062 15.1394 81.995 13.7927 83.2833C13.6332 83.4359 10.4781 85.2347 6.78105 87.2804L0.060201 91L0.0153053 83.0379C-0.0322652 74.5965 -0.0155073 74.3706 0.775101 73.148C1.75197 71.6373 2.58211 71.1429 28.9053 56.4012C33.31 53.9344 36.918 51.8876 36.9226 51.853C36.9267 51.8184 30.374 48.7317 22.36 44.9931C6.42526 37.56 6.00851 37.3376 4.97201 35.72C3.57237 33.5343 4.032 30.9209 6.14051 29.0764C6.49427 28.7672 11.4115 25.925 17.1152 22.7329C22.7982 19.5524 28.2394 16.5054 29.2048 15.9613L30.9616 14.9726L30.977 14.1866C31.0333 11.4222 33.8011 9.45524 37.4466 9.59025C43.7694 9.82464 45.5135 16.1671 39.8459 18.3183C38.6298 18.78 35.7783 18.8633 34.8061 18.4658L34.2667 18.245L24.557 23.676C8.49224 32.6615 9.82756 31.8564 9.62053 32.683C9.30093 33.9604 9.99707 34.4819 14.931 36.6606C15.7162 37.0074 16.7561 37.4812 17.2412 37.7136C18.3996 38.2687 18.3568 38.1823 17.1079 37.4476C16.3347 36.9923 16.1357 36.8117 16.2724 36.6882C16.4519 36.5266 21.2425 33.7355 28.709 29.4438C30.8805 28.1956 33.1867 26.8686 33.8339 26.4952C34.4805 26.1212 37.064 24.6366 39.5745 23.1952C42.0851 21.7542 45.8431 19.5966 47.9255 18.4006C52.9579 15.5106 52.4735 16.2128 52.5358 11.7168L52.5874 8.01932L51.6963 8.50616C51.2058 8.77367 50.0213 9.43266 49.0652 9.97019C47.1563 11.0427 46.8696 11.1341 45.7178 11.0372C43.7755 10.8731 42.6793 8.72147 44.0294 7.7237C44.6157 7.29056 57.6667 0.00452017 57.865 3.09385e-06C57.981 -0.00300829 58.0212 2.19229 57.9897 6.69832ZM35.85 12.1901C33.659 12.9449 33.649 15.3756 35.8332 16.1184C38.7772 17.1202 41.4164 14.545 39.34 12.697C38.5032 11.9522 37.1223 11.7514 35.85 12.1901ZM19.4683 75.2133C16.9256 76.0394 16.9484 78.5484 19.5065 79.3489C22.4049 80.2564 24.9101 77.3007 22.6146 75.6816C21.6894 75.0281 20.5571 74.8595 19.4683 75.2133Z" fill="url(.paint0_linear_4_5)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M57.9897 6.69832C57.9173 16.93 57.9729 16.14 57.2426 17.2462C56.1592 18.8859 57.0021 18.3569 39.1263 28.6162C36.9548 29.8624 33.0982 32.0788 30.5569 33.5413C28.0156 35.0038 24.7017 36.895 23.1922 37.7442C21.6827 38.5929 20.4733 39.3031 20.5041 39.3216C20.5343 39.3402 21.3537 39.7237 22.3239 40.1744C40.8402 48.7699 50.2457 53.2468 51.169 53.9043C53.7351 55.7322 54.454 58.5594 52.9445 60.8942C51.9844 62.3798 52.3482 62.164 31.3971 73.669C26.232 76.5052 26.6246 76.2191 26.6722 77.115C26.9134 81.6406 18.7876 83.6111 15.4496 79.8363C12.182 76.1408 17.1018 71.4672 22.7017 72.9472L23.3389 73.1154L26.4571 71.3894C28.1724 70.4403 30.3961 69.2101 31.3991 68.6565C48.9084 58.988 47.8913 59.5857 48.2203 58.7707C48.6819 57.6273 47.9349 56.9543 44.3356 55.2714C41.5068 53.9489 42.1467 53.9063 39.2107 55.6122C38.1943 56.203 30.5194 60.5348 22.1557 65.2381C13.792 69.9419 6.66378 73.9932 6.31471 74.2417C5.37603 74.9092 5.33115 75.1541 5.38743 79.3108L5.437 83.0429L7.98973 81.6251C9.39406 80.8456 10.7649 80.1746 11.0369 80.1334C13.2238 79.8062 15.1394 81.995 13.7927 83.2833C13.6332 83.4359 10.4781 85.2347 6.78105 87.2804L0.060201 91L0.0153053 83.0379C-0.0322652 74.5965 -0.0155073 74.3706 0.775101 73.148C1.75197 71.6373 2.58211 71.1429 28.9053 56.4012C33.31 53.9344 36.918 51.8876 36.9226 51.853C36.9267 51.8184 30.374 48.7317 22.36 44.9931C6.42526 37.56 6.00851 37.3376 4.97201 35.72C3.57237 33.5343 4.032 30.9209 6.14051 29.0764C6.49427 28.7672 11.4115 25.925 17.1152 22.7329C22.7982 19.5524 28.2394 16.5054 29.2048 15.9613L30.9616 14.9726L30.977 14.1866C31.0333 11.4222 33.8011 9.45524 37.4466 9.59025C43.7694 9.82464 45.5135 16.1671 39.8459 18.3183C38.6298 18.78 35.7783 18.8633 34.8061 18.4658L34.2667 18.245L24.557 23.676C8.49224 32.6615 9.82756 31.8564 9.62053 32.683C9.30093 33.9604 9.99707 34.4819 14.931 36.6606C15.7162 37.0074 16.7561 37.4812 17.2412 37.7136C18.3996 38.2687 18.3568 38.1823 17.1079 37.4476C16.3347 36.9923 16.1357 36.8117 16.2724 36.6882C16.4519 36.5266 21.2425 33.7355 28.709 29.4438C30.8805 28.1956 33.1867 26.8686 33.8339 26.4952C34.4805 26.1212 37.064 24.6366 39.5745 23.1952C42.0851 21.7542 45.8431 19.5966 47.9255 18.4006C52.9579 15.5106 52.4735 16.2128 52.5358 11.7168L52.5874 8.01932L51.6963 8.50616C51.2058 8.77367 50.0213 9.43266 49.0652 9.97019C47.1563 11.0427 46.8696 11.1341 45.7178 11.0372C43.7755 10.8731 42.6793 8.72147 44.0294 7.7237C44.6157 7.29056 57.6667 0.00452017 57.865 3.09385e-06C57.981 -0.00300829 58.0212 2.19229 57.9897 6.69832ZM35.85 12.1901C33.659 12.9449 33.649 15.3756 35.8332 16.1184C38.7772 17.1202 41.4164 14.545 39.34 12.697C38.5032 11.9522 37.1223 11.7514 35.85 12.1901ZM19.4683 75.2133C16.9256 76.0394 16.9484 78.5484 19.5065 79.3489C22.4049 80.2564 24.9101 77.3007 22.6146 75.6816C21.6894 75.0281 20.5571 74.8595 19.4683 75.2133Z" fill="url(.paint1_linear_4_5)" fill-opacity="0.2"></path> <defs> <linearGradient class="paint0_linear_4_5" x1="48.1805" y1="0.139424" x2="18.8172" y2="96.6802" gradientUnits="userSpaceOnUse"> <stop stop-color="rebeccapurple"></stop> <stop offset="0.307668" stop-color="rebeccapurple" stop-opacity="0.8"></stop> <stop offset="0.633496" stop-color="rebeccapurple" stop-opacity="0.7"></stop> <stop offset="0.833333" stop-color="#98AF91" stop-opacity="0.9"></stop> <stop offset="0.994792" stop-color="#AAAAAA"></stop>s </linearGradient> <linearGradient class="paint1_linear_4_" x1="55.3591" y1="-0.579818" x2="27.5275" y2="93.7326" gradientUnits="userSpaceOnUse"> <stop stop-color="#050505"></stop> <stop offset="1"></stop> </linearGradient> </defs> </svg>'
    
   $("#everything").html("<div class = 'nIKn' >" + logo + "</div>");


}



function show_body_loader_on_body(){

   var logo = '<svg width="58" height="91" id="small-IM-logo" class ="small-IM-logo-longer-animation" viewBox="0 0 58 91" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M57.9897 6.69832C57.9173 16.93 57.9729 16.14 57.2426 17.2462C56.1592 18.8859 57.0021 18.3569 39.1263 28.6162C36.9548 29.8624 33.0982 32.0788 30.5569 33.5413C28.0156 35.0038 24.7017 36.895 23.1922 37.7442C21.6827 38.5929 20.4733 39.3031 20.5041 39.3216C20.5343 39.3402 21.3537 39.7237 22.3239 40.1744C40.8402 48.7699 50.2457 53.2468 51.169 53.9043C53.7351 55.7322 54.454 58.5594 52.9445 60.8942C51.9844 62.3798 52.3482 62.164 31.3971 73.669C26.232 76.5052 26.6246 76.2191 26.6722 77.115C26.9134 81.6406 18.7876 83.6111 15.4496 79.8363C12.182 76.1408 17.1018 71.4672 22.7017 72.9472L23.3389 73.1154L26.4571 71.3894C28.1724 70.4403 30.3961 69.2101 31.3991 68.6565C48.9084 58.988 47.8913 59.5857 48.2203 58.7707C48.6819 57.6273 47.9349 56.9543 44.3356 55.2714C41.5068 53.9489 42.1467 53.9063 39.2107 55.6122C38.1943 56.203 30.5194 60.5348 22.1557 65.2381C13.792 69.9419 6.66378 73.9932 6.31471 74.2417C5.37603 74.9092 5.33115 75.1541 5.38743 79.3108L5.437 83.0429L7.98973 81.6251C9.39406 80.8456 10.7649 80.1746 11.0369 80.1334C13.2238 79.8062 15.1394 81.995 13.7927 83.2833C13.6332 83.4359 10.4781 85.2347 6.78105 87.2804L0.060201 91L0.0153053 83.0379C-0.0322652 74.5965 -0.0155073 74.3706 0.775101 73.148C1.75197 71.6373 2.58211 71.1429 28.9053 56.4012C33.31 53.9344 36.918 51.8876 36.9226 51.853C36.9267 51.8184 30.374 48.7317 22.36 44.9931C6.42526 37.56 6.00851 37.3376 4.97201 35.72C3.57237 33.5343 4.032 30.9209 6.14051 29.0764C6.49427 28.7672 11.4115 25.925 17.1152 22.7329C22.7982 19.5524 28.2394 16.5054 29.2048 15.9613L30.9616 14.9726L30.977 14.1866C31.0333 11.4222 33.8011 9.45524 37.4466 9.59025C43.7694 9.82464 45.5135 16.1671 39.8459 18.3183C38.6298 18.78 35.7783 18.8633 34.8061 18.4658L34.2667 18.245L24.557 23.676C8.49224 32.6615 9.82756 31.8564 9.62053 32.683C9.30093 33.9604 9.99707 34.4819 14.931 36.6606C15.7162 37.0074 16.7561 37.4812 17.2412 37.7136C18.3996 38.2687 18.3568 38.1823 17.1079 37.4476C16.3347 36.9923 16.1357 36.8117 16.2724 36.6882C16.4519 36.5266 21.2425 33.7355 28.709 29.4438C30.8805 28.1956 33.1867 26.8686 33.8339 26.4952C34.4805 26.1212 37.064 24.6366 39.5745 23.1952C42.0851 21.7542 45.8431 19.5966 47.9255 18.4006C52.9579 15.5106 52.4735 16.2128 52.5358 11.7168L52.5874 8.01932L51.6963 8.50616C51.2058 8.77367 50.0213 9.43266 49.0652 9.97019C47.1563 11.0427 46.8696 11.1341 45.7178 11.0372C43.7755 10.8731 42.6793 8.72147 44.0294 7.7237C44.6157 7.29056 57.6667 0.00452017 57.865 3.09385e-06C57.981 -0.00300829 58.0212 2.19229 57.9897 6.69832ZM35.85 12.1901C33.659 12.9449 33.649 15.3756 35.8332 16.1184C38.7772 17.1202 41.4164 14.545 39.34 12.697C38.5032 11.9522 37.1223 11.7514 35.85 12.1901ZM19.4683 75.2133C16.9256 76.0394 16.9484 78.5484 19.5065 79.3489C22.4049 80.2564 24.9101 77.3007 22.6146 75.6816C21.6894 75.0281 20.5571 74.8595 19.4683 75.2133Z" fill="url(.paint0_linear_4_5)"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M57.9897 6.69832C57.9173 16.93 57.9729 16.14 57.2426 17.2462C56.1592 18.8859 57.0021 18.3569 39.1263 28.6162C36.9548 29.8624 33.0982 32.0788 30.5569 33.5413C28.0156 35.0038 24.7017 36.895 23.1922 37.7442C21.6827 38.5929 20.4733 39.3031 20.5041 39.3216C20.5343 39.3402 21.3537 39.7237 22.3239 40.1744C40.8402 48.7699 50.2457 53.2468 51.169 53.9043C53.7351 55.7322 54.454 58.5594 52.9445 60.8942C51.9844 62.3798 52.3482 62.164 31.3971 73.669C26.232 76.5052 26.6246 76.2191 26.6722 77.115C26.9134 81.6406 18.7876 83.6111 15.4496 79.8363C12.182 76.1408 17.1018 71.4672 22.7017 72.9472L23.3389 73.1154L26.4571 71.3894C28.1724 70.4403 30.3961 69.2101 31.3991 68.6565C48.9084 58.988 47.8913 59.5857 48.2203 58.7707C48.6819 57.6273 47.9349 56.9543 44.3356 55.2714C41.5068 53.9489 42.1467 53.9063 39.2107 55.6122C38.1943 56.203 30.5194 60.5348 22.1557 65.2381C13.792 69.9419 6.66378 73.9932 6.31471 74.2417C5.37603 74.9092 5.33115 75.1541 5.38743 79.3108L5.437 83.0429L7.98973 81.6251C9.39406 80.8456 10.7649 80.1746 11.0369 80.1334C13.2238 79.8062 15.1394 81.995 13.7927 83.2833C13.6332 83.4359 10.4781 85.2347 6.78105 87.2804L0.060201 91L0.0153053 83.0379C-0.0322652 74.5965 -0.0155073 74.3706 0.775101 73.148C1.75197 71.6373 2.58211 71.1429 28.9053 56.4012C33.31 53.9344 36.918 51.8876 36.9226 51.853C36.9267 51.8184 30.374 48.7317 22.36 44.9931C6.42526 37.56 6.00851 37.3376 4.97201 35.72C3.57237 33.5343 4.032 30.9209 6.14051 29.0764C6.49427 28.7672 11.4115 25.925 17.1152 22.7329C22.7982 19.5524 28.2394 16.5054 29.2048 15.9613L30.9616 14.9726L30.977 14.1866C31.0333 11.4222 33.8011 9.45524 37.4466 9.59025C43.7694 9.82464 45.5135 16.1671 39.8459 18.3183C38.6298 18.78 35.7783 18.8633 34.8061 18.4658L34.2667 18.245L24.557 23.676C8.49224 32.6615 9.82756 31.8564 9.62053 32.683C9.30093 33.9604 9.99707 34.4819 14.931 36.6606C15.7162 37.0074 16.7561 37.4812 17.2412 37.7136C18.3996 38.2687 18.3568 38.1823 17.1079 37.4476C16.3347 36.9923 16.1357 36.8117 16.2724 36.6882C16.4519 36.5266 21.2425 33.7355 28.709 29.4438C30.8805 28.1956 33.1867 26.8686 33.8339 26.4952C34.4805 26.1212 37.064 24.6366 39.5745 23.1952C42.0851 21.7542 45.8431 19.5966 47.9255 18.4006C52.9579 15.5106 52.4735 16.2128 52.5358 11.7168L52.5874 8.01932L51.6963 8.50616C51.2058 8.77367 50.0213 9.43266 49.0652 9.97019C47.1563 11.0427 46.8696 11.1341 45.7178 11.0372C43.7755 10.8731 42.6793 8.72147 44.0294 7.7237C44.6157 7.29056 57.6667 0.00452017 57.865 3.09385e-06C57.981 -0.00300829 58.0212 2.19229 57.9897 6.69832ZM35.85 12.1901C33.659 12.9449 33.649 15.3756 35.8332 16.1184C38.7772 17.1202 41.4164 14.545 39.34 12.697C38.5032 11.9522 37.1223 11.7514 35.85 12.1901ZM19.4683 75.2133C16.9256 76.0394 16.9484 78.5484 19.5065 79.3489C22.4049 80.2564 24.9101 77.3007 22.6146 75.6816C21.6894 75.0281 20.5571 74.8595 19.4683 75.2133Z" fill="url(.paint1_linear_4_5)" fill-opacity="0.2"/> <defs> <linearGradient class="paint0_linear_4_5" x1="48.1805" y1="0.139424" x2="18.8172" y2="96.6802" gradientUnits="userSpaceOnUse"> <stop stop-color="rebeccapurple"/> <stop offset="0.307668" stop-color="rebeccapurple" stop-opacity="0.8"/> <stop offset="0.633496" stop-color="rebeccapurple" stop-opacity="0.7"/> <stop offset="0.833333" stop-color="#98AF91" stop-opacity="0.9"/> <stop offset="0.994792" stop-color="#AAAAAA"/>s </linearGradient> <linearGradient class="paint1_linear_4_5" x1="55.3591" y1="-0.579818" x2="27.5275" y2="93.7326" gradientUnits="userSpaceOnUse"> <stop stop-color="#050505"/> <stop offset="1"/> </linearGradient> </defs> </svg>'

   $("body").html("<div class = 'nIKn' >" + logo + "</div>");

}



















$(document).ready(function(){


/* handling profile picture upload */

var img_input = document.getElementsByClassName('CgjIAYEy').photo;

var img_preview = document.getElementById('image_preview');


if (img_input != undefined){


/*replacing the picture*/
img_input.onchange = evt => {
    console.log('changed!');
  const [file] = img_input.files;
  console.log(img_input.files);
  console.log("filename==>" + img_input.files[0].name);

  if (file) {
    img_preview.src = URL.createObjectURL(file)
    $("#image_preview").show(500);

    $('.pppreview_image').attr('src', URL.createObjectURL(file)).show(0);

  }
}



   
}




/*checkCookie();
*/

//reusable clone of our main modal
var post___modal = $('.create-post-modal').clone();





$(".svg-loader").fadeOut(10, function() {
    $("body").fadeIn(500);        
});






//controller for search box


    $(document).on('click','#times_search_cancel', function(){

        $('#search_area_objects').hide(300);

    });





    $('#inpt_search').keydown(function(){

            setTimeout(search, 800)

    });





    function search (){

    var c = $('#inpt_search').val().trim();

    //console.log(c);

    $('#search_loader').show();

    $('#search_area_objects').show(300);

    $.ajax({


          url: '/search_db_general' ,
            type : 'POST',
            contentType: 'application/json',

            data : JSON.stringify ( {'value': c, 'search_type': 'posts' } ),


          success: function (result) {
          $(".svg-loader").fadeOut();
          //console.log(result)


          $("#search_area_objects").html(result);


            $("#search_posts").find('.other-interests-fs').each(function(){

                    //console.log($(this).text());

                    var term = c; // search query we want to highlight in results 
                    var results = $(this).text(); // search results

                    results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);

                    r = results.replace(new RegExp(term, "gi"), (match) => `<span class="hashtag_highlight">${match}</span>`);

                    $(this).html(r) ;

                    //console.log(r);




            });;



            $("#search_posts").find('.other-interests-small-info').each(function(){

                    //console.log($(this).text());

                    var term = c; // search query we want to highlight in results 
                    var results = $(this).text(); // search results

                    results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);

                    r = results.replace(new RegExp(term, "gi"), (match) => `<span class="highlist">${match}</span>`);

                    $(this).html(r) ;

                    //console.log(r);




            });;




            $("#search_posts").find('.postitle').each(function(){

            //console.log($(this).text());

            var term = c; // search query we want to highlight in results 
            var results = $(this).text(); // search results

            results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);

            r = results.replace(new RegExp(term, "gi"), (match) => `<span class="highlist">${match}</span>`);

            $(this).html(r) ;

            //console.log(r);




            });;





          },
          error: function (result) {

            $('#search_area_objects').hide(300);

            $(".svg-loader").fadeOut();
            show_error_report(" something went wrong");
          }



    });




    };








function search_specific(search_type, search_phrase){


    var c = search_phrase;

    console.log(c);

    $('#search_loader').show();

    $('#search_area_objects').show(300);

    $.ajax({


          url: '/search_specific' ,
            type : 'POST',
            contentType: 'application/json',

            data : JSON.stringify  ( {'value': c, 'search_type': search_type } ),


          success: function (result) {
          $(".svg-loader").fadeOut();
          //console.log(result)


          $("#search_area_objects").html(result);



            $("#search_posts").find('.other-interests-fs').each(function(){

            //console.log($(this).text());

            var term = c; // search query we want to highlight in results 
            var results = $(this).text(); // search results

            results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);


            r = results.replace(new RegExp(term, "gi"), (match) => `<span class="highlist">${match}</span>`);

            $(this).html(r) ;

            //console.log(r);




            });;



            $("#search_posts").find('.other-interests-small-info').each(function(){

            //console.log($(this).text());

            var term = c; // search query we want to highlight in results 
            var results = $(this).text(); // search results

            results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);

            r = results.replace(new RegExp(term, "gi"), (match) => `<span class="highlist">${match}</span>`);

            $(this).html(r) ;

            //console.log(r);




            });;




            $("#search_posts").find('.postitle').each(function(){

            //console.log($(this).text());

            var term = c; // search query we want to highlight in results 
            var results = $(this).text(); // search results

            results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);

            r = results.replace(new RegExp(term, "gi"), (match) => `<span class="highlist">${match}</span>`);

            $(this).html(r) ;

            //console.log(r);




            });;





          },
          error: function (result) {

            $('#search_area_objects').hide(300);

            $(".svg-loader").fadeOut();
            show_error_report(" something went wrong");
          }



    });




}










$(document).on('click','.search_type_btn', function(){

var search_phrase = $('#inpt_search').val().trim();

var search_type = $(this).attr('search_type');
console.log(search_type, search_phrase)


search_specific(search_type, search_phrase);



});






















$(document).on('click','#see_all_posts', function(){





    var c = $('#inpt_search').val().trim();

    console.log(c);

    $('#search_loader').show();

    $('#search_area_objects').show(300);


    $.ajax({


          url: '/search_db_general_see_all_posts' ,
            type : 'POST',
            contentType: 'application/json',

            data : JSON.stringify ( {'value': c } ),


          success: function (result) {
          $(".svg-loader").fadeOut();
          //console.log(result)


          $("#search_area_objects").html(result);






            $("#search_posts").find('.other-interests-fs').each(function(){

            console.log($(this).text());

            var term = c; // search query we want to highlight in results 
            var results = $(this).text(); // search results

            results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);


            r = results.replace(new RegExp(term, "gi"), (match) => `<span class="highlist">${match}</span>`);

            $(this).html(r) ;

            console.log(r);




            });;



            $("#search_posts").find('.other-interests-small-info').each(function(){

            console.log($(this).text());

            var term = c; // search query we want to highlight in results 
            var results = $(this).text(); // search results

            results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);

            r = results.replace(new RegExp(term, "gi"), (match) => `<span class="highlist">${match}</span>`);

            $(this).html(r) ;

            console.log(r);




            });;




            $("#search_posts").find('.postitle').each(function(){

            console.log($(this).text());

            var term = c; // search query we want to highlight in results 
            var results = $(this).text(); // search results

            results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);

            r = results.replace(new RegExp(term, "gi"), (match) => `<span class="highlist">${match}</span>`);

            $(this).html(r) ;

            console.log(r);




            });;





          },
          error: function (result) {

            $('#search_area_objects').hide(300);

            $(".svg-loader").fadeOut();
            show_error_report(" something went wrong");
          }



    });




    




});
















//controller for the 'where to' buttons 

	$(document).on('click','button#navi-light', function(){

        $('html, body').animate({
            scrollTop: $("center#navi-light-section").offset().top
        }, 300);


	});




	$(document).on('click','button#navi-cart', function(){

        $('html, body').animate({
            scrollTop: $("center#navi-commerce-section").offset().top
        }, 300);


	});





	$(document).on('click','button#navi-topup', function(){

        $('html, body').animate({
            scrollTop: $("center#navi-topup-section").offset().top
        }, 300);


	});



	$(document).on('click','button#navi-gist', function(){

        $('html, body').animate({
            scrollTop: $("center#navi-gist-section").offset().top
        }, 300);


	});




	$(document).on('click','button#navi-roomie', function(){

        $('html, body').animate({
            scrollTop: $("center#navi-roomie-section").offset().top
        }, 300);


	});




	$(document).on('click','button#navi-rent', function(){

        $('html, body').animate({
            scrollTop: $("center#navi-rent-section").offset().top
        }, 300);


	});







    $(document).on('click','#fabhome', function(){


             no_data_retry_count = 0
             counter=0;
             posts_count = 20;
             post_value = 'normal';

             console.log(no_data_retry_count,counter, posts_count, post_value);

            var action_type = 'feed';

            /*initialise the loader*/
            show_body_loader(); 

            req = $.ajax({  
                url: '/',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'action_type' : action_type } )
 
            });


            req.done(function(data){

             $("#everything").fadeIn(800).html(data);        
                
            });

    });







    $(document).on('click','#fabrent', function(){


             no_data_retry_count = 0
             counter=0;
             posts_count = 20;
             post_value = 'normal';

             console.log(no_data_retry_count,counter, posts_count, post_value);

            var action_type = 'feed';

            /*initialise the loader*/
            show_body_loader(); 

            req = $.ajax({  
                url: '/',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'action_type' : action_type } )
 
            });


            req.done(function(data){

             $("#everything").fadeIn(800).html(data);        
                
            });

    });





    $(document).on('click','#fabroomie', function(){


             no_data_retry_count = 1;
             counter=0;
             posts_count = 20;
             post_value = 'normal';

             console.log(no_data_retry_count,counter, posts_count, post_value);

            var action_type = 'feed';

            /*initialise the loader*/
            show_body_loader(); 

            req = $.ajax({  
                url: 'roomie/_find-a-roomie',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'action_type' : action_type } )
 
            });


            req.done(function(data){

                    $("#everything").fadeIn(800).html(data);        
                
            });

    });




    $(document).on('click','#fablight', function(){

            add_active_to_feed()


             no_data_retry_count = 1;
             counter=0;
             posts_count = 20;
             post_value = ' ';

             console.log(no_data_retry_count,counter, posts_count, post_value);

            var action_type = 'light_where';

            /*initialise the loader*/
            show_body_loader(); 

            req = $.ajax({  
                url: 'electricity/_',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'action_type' : action_type } )
 
            });


            req.done(function(data){

                
                    $("#everything").fadeIn(800).html(data);        
                

            });

    });



    $(document).on('click','#fablight__chkcampus', function(){



            add_active_to_feed()


             no_data_retry_count = 1;
             counter=0;
             posts_count = 20;
             post_value = ' ';

             console.log(no_data_retry_count,counter, posts_count, post_value);

            var action_type = 'light_where_cmapus';

            /*initialise the loader*/
            show_body_loader(); 

            req = $.ajax({  
                url: 'electricity/_campus',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'action_type' : action_type } )
 
            });


            req.done(function(data){


                    $("#everything").fadeIn(800).html(data);        
                

            });

    });






    $(document).on('click','#fabbuy', function(){


             no_data_retry_count = 1;
             counter=0;
             posts_count = 20;
             post_value = 'normal';

             console.log(no_data_retry_count,counter, posts_count, post_value);

            var action_type = 'feed';

            /*initialise the loader*/
            show_body_loader(); 
            //$("body").html('<div class="didback"> test</div>'); 


            req = $.ajax({  
                url: 'buy-and-sell/_ads',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'action_type' : action_type } )
 
            });


            req.done(function(data){

                    $('#everything').fadeIn(800).html(data);        
                
            });

    });





    $(document).on('click','.sidheader', function(){

       hide_top_elements_and_load();

       
       var user = $(this).attr('user');


        $.ajax({


                url: '/_profile',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'user' : user } ),

                  success: function (result) {

                        $("#everything").fadeIn(800).html(result);        

                  },

                  error: function (result) {
                  
                    show_error_report(" something went wrong with that ");
                  
                  }

        });





    });



    $(document).on('click','.settings_pagee', function(){

       hide_top_elements_and_load();


       var user = $(this).attr('user');


        $.ajax({


                url: '/_settings',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'user' : user } ),

                  success: function (result) {

                        $("#everything").fadeIn(800).html(result);        

                  },

                  error: function (result) {
                  
                    show_error_report(" something went wrong with that ");
                  
                  }

        });





    });






    $(document).on('click','.finance_pagee', function(){

       hide_top_elements_and_load();


       var user = $(this).attr('user');


        $.ajax({


                url: '/_transactions',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'user' : user } ),

                  success: function (result) {

                        $("#everything").fadeIn(800).html(result);        

                  },

                  error: function (result) {
                  
                    show_error_report(" something went wrong with that ");
                  
                  }

        });



    });





    
    $(document).on('click','.premium_pagee_subscribed', function(){

       hide_top_elements_and_load();

       var user = $(this).attr('user');


        $.ajax({


                url: 'payment/_subscription',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'user' : user } ),

                  success: function (result) {

                        $("#everything").fadeIn(800).html(result);        

                  },

                  error: function (result) {
                  
                    show_error_report(" something went wrong with that ");
                  
                  }

        });



    });






    $(document).on('click','.developers_pagee', function(){

       hide_top_elements_and_load();

       var user = $(this).attr('user');


        $.ajax({

                url: 'about-us/_',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'user' : user } ),

                  success: function (result) {

                        $("#everything").fadeIn(800).html(result);        

                  },

                  error: function (result) {
                  
                    show_error_report(" something went wrong with that ");
                  
                  }

        });



    });





//end of controllers for the 'where to' buttons 















	$(document).on('click','a#feed.menu-item.active', function(){

            scroll_to_top();

            /*initialise the loader*/
            show_body_loader();        


             no_data_retry_count = 0
             counter=0;
             posts_count = 20;
             post_value = 'normal'

             console.log(no_data_retry_count,counter, posts_count, post_value);

             show_search();

			var action_type = 'feed'
			// window.alert(post_type)

			req = $.ajax({  
				url: '/',
				type : 'POST',
				contentType: 'application/json',
				data : JSON.stringify ( {'action_type' : action_type } )
 
			});

	/*		window.alert('ajax query block passed')*/

			req.done(function(data){
				

			 $("#everything").fadeIn(100).html(data);        


			});

	});



	$(document).on('click','a#sections.menu-item.active', function(){

            scroll_to_top();

            /*initialise the loader*/
            show_body_loader();  

			var action_type = 'sections'
			/*window.alert(post_type)*/


            hide_search();

			req = $.ajax({  
				url: '/',
				type : 'POST',
				contentType: 'application/json',
				data : JSON.stringify ( {'action_type' : action_type } )

 
			});

	/*		window.alert('ajax query block passed')*/

			req.done(function(data){

				
			     $("#everything").fadeIn(800).html(data);        


			});

	});



	$(document).on('click','a#requests.menu-item.active', function(){

            scroll_to_top();

            /*initialise the loader*/
            show_body_loader();  

			var action_type = 'requests'
			// window.alert(post_type)


		
            hide_search();

			req = $.ajax({  
				url: '/',
				type : 'POST',
				contentType: 'application/json',
				data : JSON.stringify ( {'action_type' : action_type } )

 
			});

	/*		window.alert('ajax query block passed')*/

			req.done(function(data){


			    $("#everything").fadeIn(800).html(data);        


			});


	});






    $(document).on('click','a#notifications.menu-item.active', function(){

    scroll_to_top();

    /*initialise the loader*/
    show_body_loader();  


    var action_type = 'notifications'
    /*initialise the loader*/

    $.ajax({


            url: '/',
            type : 'POST',
            contentType: 'application/json',
            data : JSON.stringify ( {'action_type' : action_type } ),

              success: function (result) {

                    $("#everything").fadeIn(800).html(result);        

              },

              error: function (result) {
              
                show_error_report(" something went wrong with that ");
              }

    });

    });





    $(document).on('click','#accepted_chat_requestes', function(){
 

    var request_type = 'roomies'

    $(".svg-loader").fadeIn(1)

    $.ajax({

            url: 'roomie/_roomie-requests' ,
            type : 'POST',
            contentType: 'application/json',
            data : JSON.stringify ( {'request_type' : request_type } ),

              success: function (result) {

                $(".svg-loader").fadeOut(500, function() {
                    $("#filter_requests").fadeOut().fadeIn().html(result);        
                });

              },

              error: function (result) {
                $(".svg-loader").fadeOut();
                show_error_report(" something went wrong with that ");
              }

    });


    });




    $(document).on('click','#suggestions', function(){


    var request_type = 'suggestions'

    $(".svg-loader").fadeIn(1)

    $.ajax({

            url: 'roomie/_roomie-requests' ,
            type : 'POST',
            contentType: 'application/json',
            data : JSON.stringify ( {'request_type' : request_type } ),

              success: function (result) {

                $(".svg-loader").fadeOut(500, function() {
                    $("#filter_requests").fadeOut().fadeIn().html(result);        
                });

              },

              error: function (result) {
                $(".svg-loader").fadeOut();
                show_error_report(" something went wrong with that ");
              }

    });


    });

































			

});







 





function show_success_report(sucess_text, input_field, stay_longer){



        $('div.info-modal-container').show().animate({right: '0%'});

        $('div.info-modal').css( {'color': "black",'background': "var(--gradient)"} );


        $('div#info-modal-body').html('<b>' + sucess_text + "</b>")


        $(input_field).css( {'border': "3px solid green"} );


        if (stay_longer != true ){ 

            /*if info modal container is visible at any point in time, leave it for five secs and then remove it*/
            if ($('div.info-modal-container:visible') ){

                    setTimeout(function()  { $('div.info-modal-container').fadeOut(2500).animate({right: '-120%'}) } , 5000);
            }

        }//if stay forever


        else{

            setTimeout(function()  { $('div.info-modal-container').fadeOut(18500).animate({right: '-120%'}) } , 5000);
        }




};







function show_error_report(error_text, input_field, stay_longer ){



        $('div.info-modal-container').show().animate({right: '0%'});

        $('div.info-modal').css( {'border': "3px solid red",'color': "white",'background': "red"} );


        $('div#info-modal-body').html('<b>' + error_text + "</b>")


        $(input_field).css( {'border': "3px solid red"} );



        if (stay_longer != true ){ 

            /*if info modal container is visible at any point in time, leave it for five secs and then remove it*/
            if ($('div.info-modal-container:visible') ){

                    setTimeout(function()  { $('div.info-modal-container').fadeOut(2500).animate({right: '-120%'}) } , 5000);
            }

        }//if stay forever


        else{

            setTimeout(function()  { $('div.info-modal-container').fadeOut(18500).animate({right: '-120%'}) } , 5000);
        }




};







function get_forms(clicked_element){


            var elememt = $(clicked_element);

            var command = elememt.attr('command');

            $(".svg-loader").fadeIn(100);

            $.ajax({


                    url: 'post/_get_forms' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'command': command } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $("#create-post-modal").hide(100).show(300).html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



};






function reset_form(clicked_element){

            var norm_form = $('.norms_form').clone().html();

            n = norm_form;

            $("#create-post-modal").hide(100).html(n);

            $(".create-post-modal").hide(100);

            console.log('post form should be reset!');

            $(".svg-loader").fadeOut(100);

};


















































































/*------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


    /*POST*/



/*------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/










































































































    $(".svg-loader").fadeOut();        




    if ($('div#flashes:visible') ){

            setTimeout(function()  { $('div#flashes').hide(1500) } , 5000);
    }








    function close(){
        $("#ShareModal").hide(100);
    }



    function showCommentModal(){


        $("#ShareModal").show(300);

/*        document.getElementById('ShareModal').style.display = "block";

*/

    }












        $(window).scroll(function () {
            if ( $('.wrap').length == 0  ){

                //console.log( $('.wrap').length);

            }else{

                //console.log( $('.wrap').length);

                if( no_data_retry_count >= 1){

                //console.log(no_data_retry_count + 'please stop you have viewed all your ads');
                
                }

                else if ( no_data_retry_count < 1 && $(window).scrollTop() > $(document).height() - $(window).height() - 1500 ) {
                    appendData();
                    //alert('scrollTop--->' + $(window).scrollTop(),  'window height--->' + $(window).height(), 'doc height--->' + $(document).height())
                   // console.log(no_data_retry_count + 'stopped ');
                } 

            }

        });





        if ( $('.wrap').length == 0  ){

            //console.log( $('.wrap').length);

        }else{

            $('body').on('touchmove', appendDataMobile);
            //console.log( $('.wrap').length);

        }






        function appendDataMobile() {



            if ($(window).scrollTop() >  $(document).height() - $(window).height() - 1500 ) {

                                //$(".svg-loader").fadeIn(1)

                                counter++;
                                
                                //console.log('the current number of posts is --->' + posts_count);

                                req = $.ajax({  
                                    url: 'post/_next-twenty-posts',
                                    type : 'POST',
                                    contentType: 'application/json',
                                    data : JSON.stringify ( {'offset' : posts_count, 'post_value' : post_value } )

                                });


                                req.done(function(data){



                                    //$(".svg-loader").fadeOut(500)

                                        if (data != "null" ){
                     
                                         $('#myScrollSecondaryWrap').append(data);



                                        }

                                        
                                        if (data == "null" ){

                                            
                                            if ($("#last-post").html() == undefined){

                                                no_data_retry_count += 1

                                              $('#myScrollSecondaryWrap').append('<div id = "last-post" class="last-post"><!-- all caught up -->  ' + caught_up_svg + ' <p>you"re all caught up</p></div><!-- last-post -->');  


                                            }   


                                        }
                            



                                });

                            

                            posts_count += 20;


                //alert("phone" + 'scrollTop--->' + $(window).scrollTop(),  'window height--->' + $(window).height(), 'doc height--->' + $(document).height())
            


            }





        }


        function appendData() {

            //$(".svg-loader").fadeIn(1)

            counter++;
            
            //console.log('the current number of posts is --->' + posts_count);

            req = $.ajax({  
                url: 'post/_next-twenty-posts',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'offset' : posts_count, 'post_value' : post_value } )

            });


            req.done(function(data){


                //$(".svg-loader").fadeOut()

                    if (data != "null" ){
 
                     $('#myScrollSecondaryWrap').append(data);

                    }

                    
                    if (data == "null" ){
                        
                        if ($("#last-post").html() == undefined){

                           no_data_retry_count += 1

                          $('#myScrollSecondaryWrap').append('<div id = "last-post" class="last-post"><!-- all caught up -->  ' + caught_up_svg + ' <p>you"re all caught up</p></div><!-- last-post -->');  

                        }   


                    }
        



            });

        

        posts_count += 20;


        }

















































    $(document).on('click','#create-post-form', function(){


    $("#primary-create-post-modal").fadeIn(500);


    });




    $(document).on('click','#fabpost', function(){


    $("#primary-create-post-modal").fadeIn(500);


    });







    $(document).on('click','#fabmessages, .messagee_pagee', function(){

        /*only load the users messages if it hasnt been loaded before*/ 
        if ($("#messages_modal").html().length < 1) {

                    loader = $("#comment-loader").html();

                    $("#messages_modal").html('<br> ' + loader).append(loader).show(800);



                    $.ajax({

                            url: 'roomie/_messages' ,
                            type : 'POST',
                            contentType: 'application/json',
                            data : JSON.stringify ( {'request_type' : '' } ),

                              success: function (result) {

                                    $("#messages_modal").html(result);  
                              },

                              error: function (result) {
                                $(".svg-loader").fadeOut();
                                show_error_report(" something went wrong with that ");
                              }

                    });

        }else{

            $("#messages_modal").show(500)


        }


    });






    $(document).on('click','#messagee_pagee', function(){

        /*only load the users messages if it hasnt been loaded before*/ 
        if ($("#messages_modal").html().length < 1) {

                    loader = $("#comment-loader").html();

                    $("#messages_modal").html('<br> ' + loader).append(loader).show(400);


                    $.ajax({

                            url: 'roomie/_messages' ,
                            type : 'POST',
                            contentType: 'application/json',
                            data : JSON.stringify ( {'request_type' : '' } ),

                              success: function (result) {

                                    $("#messages_modal").html(result);  
                              },

                              error: function (result) {
                                $(".svg-loader").fadeOut();
                                show_error_report(" something went wrong with that ");
                              }

                    });

        }else{

            if ( $("#messages_modal:visible")) {

                console.log('chat can be seen');

                $("#messages_modal").hide(500);


            }else{

                console.log('chat cannot be seen');

                $("#messages_modal").show(500);


            }


        }


    });







    $(document).on('click','#messages-back-button', function(){


    $("#messages_modal").hide(200);


    });






    $(document).on('click','.cancel-post', function(){


    $("#comment-modal").hide(100);

    reset_form('.cancel-post');


    });








    $(document).on('click','.close-modal', function(){

    $(".comment-modal-wrap").hide(100);

    reset_form('.cancel-post');


    });





    $(document).on('click','.js-export', function(){


    $(".preview-image-modal").hide(100);


    });



    $(document).on('click','#close-preview-svg', function(){


    $(".preview-image-modal").hide(100);


    });












    $(document).on('click','#close-view-modal', function(){


    var post_id = $(this).attr('post_id');

    console.log(post_id);

    $("#view-modal").hide(100);

    reset_form('.cancel-post');

    //console.log('form closed functions executed');

    if (post_id != undefined){


            $.ajax({


                    url: 'post/_refresh_pretty_comments' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'post_id': post_id } ),


                      success: function (result) {
                       /* console.log(result);*/
                      $(".svg-loader").fadeOut();

                      $('.pretty-comments-sections' + post_id).fadeOut(100).fadeIn(100).fadeOut(100).html('').html(result.pretty_comments).fadeIn(100);

                      $('.no-of-views' + post_id).fadeOut(100).fadeIn(100).fadeOut(100).html('').html(result.posts_count).fadeIn(100);

                      $('.no-of-comments' + post_id).fadeOut(100).fadeIn(100).fadeOut(100).html('').html(result.comments_count).fadeIn(100);



                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });


    };



    });








    $(document).on('click','#edit-post-svg', function(){

        $(".post-options").hide();

        var command = $(this).attr('command');

        var post_id = $(this).attr('post_id');

        var d = $('.' + post_id).find('.desc').text().trim() || $('.' + post_id).find('.desc-bigger').text().trim();

        var desc = $('.' + post_id).find('.desc');

        var desc_bigger = $('.' + post_id).find('.desc-bigger' + post_id);

        console.log('your current post content---------> ', d);


        $('#update-text-portal' + post_id).css({ "margin-left": "60px", "border-radius" : "20px", "text-align" : "left"  }).val(d);

        desc_bigger.hide(100).show(300).html($('#post-edit-form' + post_id).css({"display":"block", "z-index":"3000" }));

        desc.hide(100).show(300).html($('#post-edit-form' + post_id).css({"display":"block", "z-index":"3000" })); 

        $(".update-submitted-text").attr('post_id', post_id);
      
        $('.update-text-form' + post_id).find("#submit-updated-svg").attr('post_id', post_id);
/*
        $("#submit-updated-svg").attr('post_id', post_id);
*/

        if ($("#update-text-portal" + post_id).length >= 2) {

            console.log('2 forms detected!');

            console.log('its first element is' + $("#update-text-portal" + post_id)[2].val())

            /*desc.hide(100).show(300).html(d);*/

        }     





    });







    $(document).on('click','#submit-updated-svg', function(e){

        e.preventDefault();

        console.log($(this).attr('post_id'));

        var post_id = $(this).attr('post_id');



                $.ajax({


                    url: 'post/_update_single_post' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'post_id': post_id, 'content': $('#update-text-portal' + post_id).val().trim() } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      //show_success_report("changes made!");

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });




            setTimeout(function()  {


                            $.ajax({


                                url: 'post/_refresh_single_post' ,
                                type : 'POST',
                                contentType: 'application/json',
                                data : JSON.stringify ( { 'post_id': post_id } ),


                                  success: function (result) {
                                  $(".svg-loader").fadeOut();
                                  $('.' + post_id).fadeOut(100).html('').html(result);


                                  /*TAKE CARE OF HASHTAGS*/
                                  var results = $(".desc-bigger" + post_id ).text();
                                  var t = results //'this is a #hashtag'
                                  var s = t.replace(/#(\w+)/g , '<span class="hashtag_highlight" hashtag="#$1"  href="tag/$1">#$1</span>')
                                  $(".desc-bigger" + post_id).html(s) ;





                                  /*TAKE CARE OF HASHTAGS for smaller*/
                                  var resultsm = $(".desc" + post_id ).text();
                                  var smt = resultsm //'this is a #hashtag'
                                  var sms = smt.replace(/#(\w+)/g , '<span class="hashtag_highlight" hashtag="#$1"  href="tag/$1">#$1</span>')
                                  $(".desc" + post_id).html(sms) ;

                                  $('.' + post_id).fadeIn(300);



                                  },

                                  error: function (result) {
                                    $(".svg-loader").fadeOut();
                                    show_error_report(" something went wrong with that ");
                                  }


                        });




            } , 1000);




    



    });







    $(document).on('click','.post-content img', function(){

        
    });






    $(document).on('click','#control-post', function(){

    $("#post-options").show(100).css({display:"flex"});


    });





   $(document).on('click','#cancel-add-account', function(){

        $(".account-parent-wrap").hide(200);


    });






   $(document).on('click','#bank-account-btn', function(){

        $(".svg-loader").fadeIn();

        $(".account-parent-wrap").show(100);

        var command = 'account_form' ;

            $.ajax({


                    url: 'get_bank_account_form' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'command': command } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $(".account-wrap").show(100).html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



    });






    $(document).on('click','#post-types-child-event', function(){

        //get_forms('#post-types-child-event');
         //$("#primary-create-post-modal").hide(100);

         $('.scrollable-post-area-event').hide();

         $('.scrollable-post-area_normal_form').html($('.scrollable-post-area-event'));

         $('.scrollable-post-area-event').show(2300);         

    });





    $(document).on('click','#post-types-child-fundraiser', function(){

        get_forms('#post-types-child-fundraiser');
         $("#primary-create-post-modal").hide(100);



    });




   $(document).on('click','#post-types-child-lost', function(){

        get_forms('#post-types-child-lost');
         $("#primary-create-post-modal").hide(100);



    });





   $(document).on('click','#post-types-child-found', function(){

        get_forms('#post-types-child-found');
         $("#primary-create-post-modal").hide(100);



    });




/*   $(document).on('click','#save-new-account-number', function(){


        $("#add-new-account-form").find('input').each(function(){
       
                //$("#add-new-account-form").submit();

                setTimeout(function()  { $(this).val(''); } , 500);

                 

         });




    });

*/




    $(document).on('click','.post-options-front-btn', function(){

    var post_id = $(this).attr("post_id");

    $(".post-options-front-list" + post_id).show(100);

/*    console.log(post_id + 'im here')*/

    });









/*COMMMENTS*/



    $(document).on('click','.close-comment-modal', function(){

    var post_id = $(this).attr('post_id');
    console.log(post_id);

    $(".svg-loader").fadeIn();

    close();


            $.ajax({


                    url: 'post/_refresh_pretty_comments' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'post_id': post_id } ),


                      success: function (result) {
                       /* console.log(result);*/
                      $(".svg-loader").fadeOut();
                      $('.pretty-comments-sections' + post_id).fadeOut(100).fadeIn(100).fadeOut(100).html('').html(result.pretty_comments).fadeIn(100);

                      $('.no-of-views' + post_id).fadeOut(100).fadeIn(100).fadeOut(100).html('').html(result.posts_count).fadeIn(100);

                      $('.no-of-comments' + post_id).fadeOut(100).fadeIn(100).fadeOut(100).html('').html(result.comments_count).fadeIn(100);


                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });


    });









    $(document).on('click','#move-to-comments', function(){

        $("#view-modal").hide(100);


            var post_id = $(this).attr('post_id');

            console.log(post_id);

            comment_modal = $("#comment-modal-wrap")

            comment_modal.show(150);

            loader = $("#comment-loader").html();

            $(".comment-modal-body-wrap").html(loader)

            $("#comment-modal-wrap").show(150);

            $('#close-modal').attr('post_id', post_id);


            $.ajax({


                    url: 'post/_quick-comment',
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( {'post_id': post_id } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $(".comment-modal-body-wrap").fadeOut(100).fadeIn(100).html(result);
                      

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });
            






    });













    $(document).on('click','#quick_comment', function(){

            
            

            var post_id = $(this).attr('post_id');

            console.log(post_id);

            comment_modal = $("#comment-modal-wrap")

            comment_modal.show(150);

            loader = $("#comment-loader").html();

            $(".comment-modal-body-wrap").html(loader)

            $("#comment-modal-wrap").show(150);

            $('#close-modal').attr('post_id', post_id);


            $.ajax({


                    url: 'post/_quick-comment',
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( {'post_id': post_id } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $(".comment-modal-body-wrap").fadeOut(100).fadeIn(100).html(result);
                      

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });










    });







    $(document).on('click','#load-comments-button', function(){


            var post_id = $(this).attr('post_id');
/*          window.alert(post_id)*/


            var count = $(this).attr('count');
            /*window.alert(count)*/


            loader = $("#comment-loader").html();

            $(".comment-modal-body-wrap").html(loader)


                    $(".svg-loader").fadeIn(10);

                        req = $.ajax({  
                            url: 'post/_load-more-comments',
                            type : 'POST',
                            contentType: 'application/json',
                            data : JSON.stringify ( {'post_id': post_id, 'count': count  } )

             
                        });


                        req.done(function(data){

                            $(".svg-loader").fadeOut(100, function() {

                               $(".comment-modal-body-wrap").fadeOut(100).fadeIn(100).html(data);        

                        });



            });



    });





    $(document).on('click','.commentbutton', function(){


            var post_id = $(this).attr('post_id');
            console.log(post_id);

            var comment_body = $('#comment_portal' + post_id).val(); 

            console.log(comment_body);

            $.ajax({  


                url: 'post/_post-view-page/add-comment',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'post_id': post_id, 'comment_body' : comment_body } ),

                  success: function (result) {
                  $(".svg-loader").fadeOut();
                  $(".comment-modal-body-wrap" ).fadeOut(200).fadeIn(200).html(result);

                  socket.emit('update_pretty_comments', {'post_id': post_id, 'content': comment_body })

                  },

                  error: function (result) {
                    $(".svg-loader").fadeOut();
                    show_error_report(" something went wrong with that ");
                  }


            });



    });





    $(document).on('click','button#delete_comment_button', function(){


            var post_id = $(this).attr('post_id');
/*          window.alert(post_id)*/



            var comment_id = $(this).attr('comment_id');
/*          window.alert(comment_id)*/

            $(".svg-loader").fadeIn()


            req = $.ajax({  
                url: 'post/_post-view-page/delete-comment',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'post_id': post_id, 'comment_id' : comment_id } )
 
            });


            req.done(function(data){
            $(".svg-loader").fadeOut()
                $(".comment-modal-body-wrap" ).fadeOut(200).fadeIn(200).html(data);
                /*
                window.alert('req was sucessful')
                window.alert("data:", data) */

            });

    });










































/*END OF COMMENTS*/


    $(document).on('click','#delete-post-svg', function(){

            var post_id = $(this).attr('post_id');

            var command = $(this).attr('command');

            var page = 1;

            var post_type = "normal"




            $(".svg-loader").fadeIn(100);

                        $.ajax({  
                            url: 'post/_full_view_post_handler',
                            type : 'POST',
                            contentType: 'application/json',
                            data : JSON.stringify ( {'post_id': post_id, 'command': command } ),

                            success: function (result) {

                                                $(".svg-loader").fadeOut(300);

                                                 if (result == "post sucessfully deleted!"){

                                                    $("#view-modal").hide(200);

                                                    //show_success_report(" post deleted successfully! ")

                                                    $('.' + post_id).animate({
                                                                    
                                                                    background:'#d9d9d9',
                                                                    opacity: '0.2',
                                                                    left: '-1020%',
                                                                    height: '10px',
                                                                    width: '10px',
                                                                    

                                                                });

                                                    setTimeout(function(){ $('.' + post_id).hide() },500);

                                                    $('.post-options').hide();


                                                 };

                              },


                              error: function (result) {
                              
                                show_error_report(" something went wrong with that ");
                              }

    
                        });






    });









    $(document).on('click','#save-post', function(){

            var post_id = $(this).attr('post_id');

            var command = $(this).attr('command');

            var post_category = $(this).attr('post_category');

            var page = 1;

            var post_type = "normal"


/*          window.alert(post_id)*/


            $(".svg-loader").fadeIn(100);

                        req = $.ajax({  
                            url: 'post/_full_view_post_handler',
                            type : 'POST',
                            contentType: 'application/json',
                            data : JSON.stringify ( {'post_id': post_id, 'command': command, "post_category": post_category } )

             
                        });




                        req.done(function(data){

                                $(".svg-loader").fadeOut(300);

                                 if (data == "we have saved the new item"){

                                    show_success_report(" post saved successfully! ")

                                 }else if(data == "you have already saved this"){

                                    show_error_report(" you've already saved this")

                                 }


                                      
                        });




    });










    $(document).on('click', function(e){


                if (!

            (( $(e.target).closest("#post-options").length > 0 || 


            ($(e.target).closest('#control-post').length>0 )))

                     ){

                $("#post-options").hide(100);
            }


    });






    $(document).on('click', function(e){


                if (!

            (( $(e.target).closest(".post-options-front-list").length > 0 || 


            ($(e.target).closest('.post-options-front-btn').length>0 )))

                     ){

                $(".post-options-front-list").hide(100);
            }



    });











    $(document).on('click','button#followed_button', function(){

             no_data_retry_count = 0
             counter=0;
             posts_count = 20;
             post_value = 'followed'


                $('html, body').animate({
                    scrollTop: $("#myScrollSecondaryWrap").offset().top
                }, 500);
            


            console.log(no_data_retry_count,counter, posts_count, post_value);

            var page = $(this).attr('page');
            // window.alert(page)

            var post_type = $(this).attr('post_type');
            // window.alert(post_type)

            /*initialise the loader*/
            $(".svg-loader").fadeIn(1);

            req = $.ajax({ 

                url: 'post/_posts-page-jq-update',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'page': page, 'post_type' : post_type } )
 
            });

            req.done(function(data){
                
                $(".svg-loader").fadeOut(500, function() {
                    $("#myScrollSecondaryWrap").fadeOut(500).fadeIn(500).html(data);        
                });

            });


    });







    $(document).on('click','button#quick_follow', function(){

            var post_id = $(this).attr('post_id');
/*          window.alert(post_id)*/

            var user_id = $(this).attr('user_id');
/*          window.alert(email)*/

            var info_type = "follow"

            req = $.ajax({  
                url: 'post/_quick-follow',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'post_id': post_id, 'user_id' : user_id } )


            });


            req.done(function(data){

                $(".quick_buttons" + user_id).each(function(){
                    console.log('fond');
                            $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).html(data);
                });

            });



    });




    $(document).on('click','button#quick_unfollow', function(){

            var post_id = $(this).attr('post_id');
/*          window.alert(post_id)*/

            var user_id = $(this).attr('user_id');
/*          window.alert(email)*/

            
            var info_type = "unfollow"


            req = $.ajax({  
                url: 'post/_quick-unfollow',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'post_id': post_id, 'user_id' : user_id } )

 
            });




            req.done(function(data){

                $(".quick_buttons" + user_id ).each(function(){
                    //console.log('fond');
                            $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).html(data);
                });


            });





    });




    $(document).on('click','button#normal_button.navactive', function(){

             no_data_retry_count = 0
             counter=0;
             posts_count = 20;
             post_value = 'normal'

            $('html, body').animate({
                scrollTop: $("#myScrollSecondaryWrap").offset().top
            }, 500);
                
            console.log(no_data_retry_count,counter, posts_count, post_value);
            
            var page = $(this).attr('page');
            //window.alert(page)

            var post_type = $(this).attr('post_type');
            // window.alert(post_type)

            req = $.ajax({  
                url: 'post/_posts-page-jq-update',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'page': page, 'post_type' : post_type } )

 
            });




            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req.done(function(data){

                
                $(".svg-loader").fadeOut(50, function() {
                    $("#myScrollSecondaryWrap").fadeOut().fadeIn().html(data);        
                });             


            });

    });








    $(document).on('click','button#lost_item_button', function(){

            var page = $(this).attr('page');
/*          window.alert(page)*/

            var post_type = $(this).attr('post_type');
/*          window.alert(post_type)*/



            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req = $.ajax({  
                url: 'post/_posts-page-jq-update',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'page': page, 'post_type' : post_type } )

 
            });

    /*      window.alert('ajax query block passed')*/


            req.done(function(data){
/**/
                


            $(".svg-loader").fadeOut(500, function() {
                $("#myScrollSecondaryWrap").fadeOut(500).fadeIn(500).html(data);        
            });             



/*
                $("#myScrollSecondaryWrap").fadeOut(800).fadeIn(800).html(data);

*/              /*
                window.alert('req was sucessful')
                window.alert("data:", data)*/

            });

    });









    $(document).on('click','button#found_item_button', function(){

            var page = $(this).attr('page');
/*          window.alert(page)*/

            var post_type = $(this).attr('post_type');
/*          window.alert(post_type)*/

/*          var dict = {page: 'page', post_type : 'post_type'}
            window.alert(dict)*/

/*          var name = $('nameInput' + member_id).val();

            var email = $('emailInput' + member_id).val();*/


            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req = $.ajax({  
                url: 'post/_posts-page-jq-update',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'page': page, 'post_type' : post_type } )

 
            });

/*          window.alert('ajax query block passed')*/


            req.done(function(data){
/**/
                
                            
                $(".svg-loader").fadeOut(500, function() {
                    $("#myScrollSecondaryWrap").fadeOut(500).fadeIn(500).html(data);        
                });


/*
                $("#myScrollSecondaryWrap").fadeOut(800).fadeIn(800).html(data);*/
                /*
                window.alert('req was sucessful')
                window.alert("data:", data)*/

            });

    });






    $(document).on('click','button#claimed_item_button', function(){

            var page = $(this).attr('page');
/*          window.alert(page)*/

            var post_type = $(this).attr('post_type');
/*          window.alert(post_type)*/

/*          var dict = {page: 'page', post_type : 'post_type'}
            window.alert(dict)*/

/*          var name = $('nameInput' + member_id).val();

            var email = $('emailInput' + member_id).val();*/


            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req = $.ajax({  
                url: 'post/_posts-page-jq-update',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'page': page, 'post_type' : post_type } )

 
            });

/*          window.alert('ajax query block passed')*/


            req.done(function(data){
/**/
                
                            
                $(".svg-loader").fadeOut(500, function() {
                    $("#myScrollSecondaryWrap").fadeOut(500).fadeIn(500).html(data);        
                });


/*
                $("#myScrollSecondaryWrap").fadeOut(800).fadeIn(800).html(data);*/
                /*
                window.alert('req was sucessful')
                window.alert("data:", data)*/

            });

    });







    $(document).on('click','input#foundbtn', function(){

            var each = $('option:selected').val();

            var page = $('#lost_item_category').attr('page');
        /*  window.alert(each)*/

            var item_type = each
/*          window.alert(item_type)*/

/*          var dict = {page: 'page', post_type : 'post_type'}
            window.alert(dict)*/

/*          var name = $('nameInput' + member_id).val();

            var email = $('emailInput' + member_id).val();*/


            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req = $.ajax({  
                url: 'posts-found-category',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( { 'page' : page , 'item_type' : item_type } )

 
            });

/*          window.alert('ajax query block passed')

*/
            req.done(function(data){
/**/
                
                            
                $(".svg-loader").fadeOut(500, function() {
                    $("#small_content").fadeOut(500).fadeIn(500).html(data);        
                });




            });

    });










    $(document).on('click','input#filterbtn', function(){

            var each = $('option:selected').val();

            var page = $('#lost_item_category').attr('page');
        /*  window.alert(each)*/

            var item_type = each
/*          window.alert(item_type)*/

/*          var dict = {page: 'page', post_type : 'post_type'}
            window.alert(dict)*/

/*          var name = $('nameInput' + member_id).val();

            var email = $('emailInput' + member_id).val();*/


            /*initialise the loader*/
            $(".svg-loader").fadeIn(1)

            req = $.ajax({  
                url: 'posts-lost-item-category',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( { 'page' : page , 'item_type' : item_type } )

 
            });

/*          window.alert('ajax query block passed')

*/
            req.done(function(data){
/**/
                
                            
                $(".svg-loader").fadeOut(500, function() {
                    $("#small_content").fadeOut(500).fadeIn(500).html(data);        
                });




            });

    });












    $(document).on('click','#check-post', function(){


            var post_id = $(this).attr('post_id');

            var user = $(this).attr('user');


            var d = $('.' + post_id).find('.desc').text().trim();

            var desc = $('.' + post_id).find('.desc');


            if ($("#post-edit-form" + post_id).length >= 2) {

                console.log('2 forms detected!');

                console.log('its first element is' + $("#post-edit-form" + post_id)[0])

            }     





            $(".svg-loader").fadeIn(100);

                        req = $.ajax({  
                            url: 'post/_full_view_post',
                            type : 'POST',
                            contentType: 'application/json',
                            data : JSON.stringify ( {'post_id': post_id, 'user': user } )
             
                        });

                        req.done(function(result){

                                $(".svg-loader").fadeOut(300, function() {

                                  $("#view-modal").html('').html(result);  
                                  /*TAKE CARE OF HASHTAGS*/
                                  var resultsx = $("#view-modal").find('.post-stats-content').text();
                                  //console.log(resultsx);
                                  var tt = resultsx //'this is a #hashtag'
                                  var ss = tt.replace(/#(\w+)/g , '<span class="hashtag_highlight" hashtag="#$1"  href="tag/$1">#$1</span>')
                                  $("#view-modal").find('.post-stats-content').html(ss);
                                  $("#view-modal").show(100);



                                });
          
            });





    });










    $(document).on('dblclick','.wrap', function(){


            var post_id = $(this).attr('post_id');

            var user = $(this).attr('user');

/*            $("." + post_id ).animate({

                background: 'red',
                top:'10px',
                min_height: '100vh',
                min_width: '100%',
                max_height: '100%',
                min_height: '100%',
                z_index: '999999999999'

            });
            
*/
            $("." + post_id ).animate({
                'position': 'absolute',
                 'top':'10px',
                'min-height': '100vh',
                'height':'100%',
                'max-width': 'unset',
                'min-width': '80%',
                 'z-index': '99999'
            });



            $("." + post_id + ' img' ).animate(
                {
                'width': 'auto',
                'min-width': 'auto',
                'max-width': 'auto', 
                }, 

                'fast');



/*    min-height: 80vh;
    
    max-height: 480px;
*/

            $(".svg-loader").fadeOut(100);

/*                        req = $.ajax({  
                            url: 'post/_full_view_post',
                            type : 'POST',
                            contentType: 'application/json',
                            data : JSON.stringify ( {'post_id': post_id, 'user': user } )

             
                        });*/

/*                        req.done(function(result){

                                $(".svg-loader").fadeOut(300, function() {

                                  $("#view-modal").html('').html(result);  
                                  //TAKE CARE OF HASHTAGS
                                  var resultsx = $("#view-modal").find('.post-stats-content').text();
                                  //console.log(resultsx);
                                  var tt = resultsx //'this is a #hashtag'
                                  var ss = tt.replace(/#(\w+)/g , '<span class="hashtag_highlight" hashtag="#$1"  href="tag/$1">#$1</span>')
                                  $("#view-modal").find('.post-stats-content').html(ss);
                                  $("#view-modal").show(100);


                                });
          
                        });*/





    });








































/*------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


    /*ROOMIE*/



/*------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/









    $(".svg-loader").fadeOut();        



        var count = 15;


function show_roomie(user){


            var user = user;

            console.log(user)

            $(".svg-loader").fadeIn(100);

            $.ajax({

                    url: 'roomie/_show_roomie' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'user': user } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $("#create-post-modal").hide().show(100).html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



};





function save_roomie(user){


            var user = user;

            console.log(user)

            $(".svg-loader").fadeIn(100);

            $.ajax({


                    url: 'roomie/_save_roomie' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'user': user } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      show_success_report(result);
                      //$("#create-post-modal").hide().show(100).html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



};










function accept_roomie(user, div_to_affect){


            var user = user;

            console.log(user, div_to_affect)

            $(".svg-loader").fadeIn(100);

            $.ajax({


                    url: 'roomie/_accept-roomie-request-ajax' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'user': user } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      show_success_report(result);
                      //$("#create-post-modal").hide().show(100).html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



};





       $(document).on('click','.accept-request-link', function(){

        console.log($(this).attr('user'));

        user = $(this).attr('user')

        accept_roomie(user, '.other-interests-wrap');

        });






















       $(document).on('click','.accept-requests-full-view', function(){

        console.log($(this).attr('user'));

        user = $(this).attr('user')

        console.log(user);


            $(".svg-loader").fadeIn(100);

            $.ajax({


                    url: 'accept-roomie-request-full-view' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'user': user } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      console.log(result);
                      //var jsondata = result;
                      //alert(result.msg);
                      show_success_report(result.msg);
                      $(".your-roomie-affiliates").fadeOut(100).fadeIn(100).html(result.div);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });




        });























       $(document).on('click','#cancel-request-full-view', function(){

        console.log($(this).attr('user'));

        user = $(this).attr('user')

        console.log(user);


            $(".svg-loader").fadeIn(100);

            $.ajax({


                    url: 'roomie/_cancel-roomie-request-full-view' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'request_type': request_type } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      console.log(result);
                      //var jsondata = result;
                      //alert(result.msg);
                      show_success_report(result.msg);
                      $(".your-roomie-affiliates").fadeOut(100).fadeIn(100).html(result.div);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });




        });





       $(document).on('click','#send-request-full-view', function(){


        console.log($(this).attr('user'));

        user = $(this).attr('user');


        command = $(this).attr('command');


        console.log(user, command);


            $(".svg-loader").fadeIn(100);

            $.ajax({


                    url: 'roomie/_send-roomie-request-full-view' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'user': user } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      console.log(result);
                      //var jsondata = result;
                      //alert(result.msg);
                      show_success_report(result.msg);
                      $(".your-roomie-affiliates").fadeOut(100).fadeIn(100).html(result.div);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });




        });






function sort_roomie(sort, category){


            var sort = sort;


            var category = category;


            console.log(sort, category)

            $(".svg-loader").fadeIn(100);

            $.ajax({


                    url: 'roomie/_sort_roomie' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'sort': sort, 'category': category } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $("#check").prop('checked', false) 
                      $("#encapsulator").html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



};





       $(document).on('click','.droplink', function(){

        console.log($(this).attr('category'));

        console.log($(this).attr('sort'));

        sort = $(this).attr('sort');

        category = $(this).attr('category');

        sort_roomie(sort, category);



        });








       $(document).on('click','#check', function(){


                if (  $("#check").prop('checked') == true  ) {

                    console.log('ive been checked');

                }


        });

    




       $(document).on('click','#last-users', function(){

             no_data_retry_count = 1;
             counter=0;
             posts_count = 20;
             post_value = 'normal';

             console.log(no_data_retry_count,counter, posts_count, post_value);

            var action_type = 'feed';

            $(".svg-loader").fadeIn(1);

            req = $.ajax({  
                url: 'roomie/_find-a-roomie',
                type : 'POST',
                contentType: 'application/json',
                data : JSON.stringify ( {'action_type' : action_type } )
 
            });


            req.done(function(data){

                
                
                $(".svg-loader").fadeOut(500, function() {
                    $("#everything").fadeIn(800).html(data);        
                });

            });

        });



       $(document).on('click','#view-user', function(){

        console.log($(this).attr('user'));

        user = $(this).attr('user')

        show_roomie(user);

        });




       $(document).on('click','#save-user', function(){

        console.log($(this).attr('user'));

        user = $(this).attr('user')

        save_roomie(user);

        });








    $(document).on('click','#close-view-modal', function(){


     reset_form('.cancel-post');

     
    });
















       $(document).on('click','#next-twenty', function(){

        load_more( $(this).attr('category') , $(this).attr('sort') );

        });






        function load_more(category,sort) {

                 $(".svg-loader").fadeIn(1)

                 var sort = sort;
                 
                 console.log('the current number of roomies gotten is --->' + count);


              $.ajax({


                     url: 'roomie/_next-twenty-roomies',
                     type : 'POST',
                     contentType: 'application/json',
                     data : JSON.stringify ( {'offset' : count , 'sort' : sort , 'category' : category} ),

                      success: function (data) {

                             $(".svg-loader").fadeOut(500);
                         console.log(data);

                                 if (data != "null" ){
              
                                  $('#encapsulator').html(data);  

                                 }

                                 
                                 if (data == "null" ){

                                     
                                     if ($("#last-post").html() == undefined){


                                       $('#encapsulator').html("there's no one else");  


                                     }   


                                 }
                     



                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



             count += 15;








        }





































/*------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


    /*PAYMENT*/



/*------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/























      
 $(document).ready(function(){



    $(".svg-loader").fadeOut();       






function change_div(clicked_element){


            var elememt = $(clicked_element);

            var command = elememt.attr('command');

            $(".svg-loader").fadeIn(100);



            $.ajax({


                    url:'payment/change_div' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'command': command } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $("#encapsulator").hide(100).show(100).html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



};














    $(document).on('click','#card', function(){

        change_div('#card');

        $("#manage-card").hide(100);

        $("#manage-account").hide();

        $("#proceed-card").attr('reload', '');

    });



    $(document).on('click','#bank-account', function(){

        change_div('#bank-account');

        $("#manage-card").hide(100);

        $("#manage-account").hide();

        $("#proceed-card").attr('reload', '');

    });


  



    $(document).on('click','#monthly-plan', function(){

            $(".svg-loader").fadeIn();

            var plan = $(this).attr('plan_name');

            console.log(plan);


            $.ajax({


                    url:'payment/set_payment_plan' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'plan': $(this).attr('plan_name') } ),


                      success: function (result) {

                            $(".svg-loader").fadeOut();
   
                          show_success_report('you have selected  ' + plan + " plan"  );
                         
                            $(".choose-payment-method").hide().html($(".payment-method-wrap").show()).show(150) ;


                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }

 
            });


    });






    $(document).on('click','#yearly-plan', function(){

            $(".svg-loader").fadeIn();

            var plan = $(this).attr('plan_name');

            console.log(plan);


            $.ajax({


                    url:'payment/set_payment_plan' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'plan': $(this).attr('plan_name') } ),


                      success: function (result) {

                            $(".svg-loader").fadeOut();
   
                          show_success_report('you have selected  ' + plan + " plan"  );
                         
                            $(".choose-payment-method").hide().html($(".payment-method-wrap").show()).show(150) ;


                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }

 
            });


    });






   $(document).on('click','#bank-account-btn', function(){

        $(".svg-loader").fadeIn();

        $(".account-parent-wrap").show(100);

        $("#manage-account").hide();

        $('html, body').animate({
            scrollTop: $(".account-parent-wrap").offset().top
        }, 500);



        var command = 'account_form' ;

            $.ajax({


                    url:'payment/get_bank_account_form' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'command': command } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      $(".account-wrap").show(100).html(result);

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }

 
            });



    });









    $(document).on('click','#proceed-acct', function(){
    


    $("#iframe-modal").css({"display":"flex", "backgrond":"white"}).show();


    if ($(this).attr('reload') =='yes'){

/*        $(".chkout-iframe").prop("src", $(this).prop("src"));
        console.log('hackishly reloading iframe with url---->', $(this).prop("src") );*/



        /*MAKE AJAX CALL*/

        var acct = $("#proceed-acct").attr('acct');

        var payment_type = $("#proceed-acct").attr('payment_type');

        $(".svg-loader").fadeIn(100);
            

                 $.ajax({


                        url:'payment/checkout_manually/subscription' ,
                        type : 'POST',
                        contentType: 'application/json',
                        data : JSON.stringify ( { 'acct': acct, 'payment_type': payment_type } ),


                          success: function (result) {

                          console.log(result);


                          $(".svg-loader").fadeOut();


                        if (result.message == "There was an internet connection error, pls retry" ) {
                            show_error_report("There is stil an internet connection error, pls check your connection and retry");

                            setTimeout(function()  { $("#iframe-modal").hide(); } , 2000);
                            
                            $("#proceed-acct").attr('reload', 'yes');
                        }
                        else if(result.card_type == "first_time_card" ){

                           
                            $(".chkout-iframe").prop("src", result.payment_url);

                        }




                        else{


                          show_success_report(result.message);
                          $("#manage-card").hide(100);
                       

                        };


                          },

                          error: function (result) {

                          console.log(result);
                            $(".svg-loader").fadeOut();
                            show_error_report(result.message);
                          }


                });


    };



    });





   $(document).on('click','#cancel-add-account', function(){

        $(".account-parent-wrap").hide(200);


    });






   $(document).on('click','.no-single-card svg', function(){

        $("#add_card_wrap").show(200);


        $('html, body').animate({
            scrollTop: $("#add_card_wrap").offset().top
        }, 500);

        $("#manage-card").hide(100);



    });






   $(document).on('click','#cancel-card', function(){

        $("#add_card_wrap").hide(200);


    });






/*$(document).on('click','#sub-card', function() {

    var url = "v2_subscription";
    var input_data =  $("#generic-post-form").serialize();

    $.ajax({
           url: url,
           //data: $("generic-post-form").serialize(), // serializes the form's elements.
           type : 'POST',
           contentType: 'application/json',
           data : JSON.stringify ( { 'data': input_data } ),

           success: function(data)
           {
               console.log(data); // show response from the php script.
           }
         });

    return false; // avoid to execute the actual submit of the form.
});


*/






   $(document).on('click','#test-pay-paystack', function(){


        $(".svg-loader").fadeIn();


            $.ajax({

                    url:'payment/checkout' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { '': ''} ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      show_success_report("success! ");
                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });



    });









   $(document).on('click','.card-label', function(){

        console.log('cliced label!' + $(this).attr('value'));

        selected_card_id = $(this).attr('value');

        $("#proceed-card").attr('card_id', selected_card_id);

        $("#delete-card").attr('card_id', selected_card_id);

        $(".svg-loader").fadeIn(100);

            $("#manage-card").show(100);

        $(".svg-loader").fadeOut();


    });










   $(document).on('click','.account-label', function(){

        console.log('cliced acct!' + $(this).attr('value'));

        selected_card_id = $(this).attr('value');

        selected_bank_name = $(this).attr('bank_name');

        $("#proceed-card").attr('channel', 'bank_account')

        $("#proceed-acct").attr('acct', selected_card_id);

        $("#delete-account").attr('acct', selected_card_id);

        $("#delete-account").attr('acct_name', selected_bank_name);

        $(".svg-loader").fadeIn(100);

            $("#manage-card").hide();

            $("#manage-account").show(100);

        $(".svg-loader").fadeOut();


    });

















   $(document).on('click','#delete-card', function(){

     
            var card_id = $(this).attr('card_id');

            $(".svg-loader").fadeIn(100);



            $.ajax({


                    url:'payment/delete_card' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'card_id': card_id } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      show_success_report(" card deleted successfully! ");
                      $("#manage-card").hide(100);
                      $("#encapsulator").hide(100).show(100).html(result);
                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });




    });




   $(document).on('click','#delete-account', function(){

     
            var acct = $(this).attr('acct');

            var acct_name = $(this).attr('acct_name');

            $(".svg-loader").fadeIn(100);



            $.ajax({


                    url:'payment/delete_account' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'acct': acct, "acct_name" : acct_name } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut();
                      show_success_report(" account number deleted successfully! ");
                      $("#manage-card").hide(100);
                      $("#encapsulator").hide(100).show(100).html(result);
                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });




    });













    $(document).on('click','#proceed-card', function(){
    


    $("#iframe-modal").css({"display":"flex", "backgrond":"white"}).show();


    if ($(this).attr('reload') =='yes'){

/*        $(".chkout-iframe").prop("src", $(this).prop("src"));
        console.log('hackishly reloading iframe with url---->', $(this).prop("src") );*/



        /*MAKE AJAX CALL*/

        var card_id = $("#proceed-card").attr('card_id');

        var payment_type = $("#proceed-card").attr('payment_type');

        $(".svg-loader").fadeIn(100);
            

                 $.ajax({


                        url:'payment/checkout_manually/subscription' ,
                        type : 'POST',
                        contentType: 'application/json',
                        data : JSON.stringify ( { 'card_id': card_id, 'payment_type': payment_type } ),


                          success: function (result) {

                          console.log(result);
                          $(".svg-loader").fadeOut();

                        if (result.message == "There was an internet connection error, pls retry" ) {
                            show_error_report("There is stil an internet connection error, pls check your connection and retry");

                            setTimeout(function()  { $("#iframe-modal").hide(); } , 2000);
                            
                            $("#proceed-card").attr('reload', 'yes');
                        }
                        else if(result.card_type == "first_time_card" ){

                           
                            $(".chkout-iframe").prop("src", result.payment_url);

                        }




                        else{


                          show_success_report(result.message);
                          $("#manage-card").hide(100);
                       

                        };


                          },

                          error: function (result) {

                          console.log(result);
                            $(".svg-loader").fadeOut();
                            show_error_report(result.message);
                          }


                });


    };



    });





    $(document).on('click','.nb', function(){
            

        /*ANIMATE*/

        $("#chkout-iframe-box").animate({
            width: "95%" }, 500);


        $("#confirm_subscription").animate({
            width: "0%" }, 500);

        $(this).hide();

        $('.user-intended-vip-image-bg').hide();




        /*MAKE AJAX CALL*/

        var card_id = $("#proceed-card").attr('card_id');

        var payment_type = $("#proceed-card").attr('payment_type');

        var channel = $("#proceed-card").attr('channel');

        console.log(channel);


if (channel == 'card' ) {


                console.log('paying with card');

                 $.ajax({


                        url:'payment/checkout_manually/subscription' ,
                        type : 'POST',
                        contentType: 'application/json',
                        data : JSON.stringify ( { 'card_id': card_id, 'payment_type': payment_type, 'acct': 'null'  } ),


                          success: function (result) {

                          console.log(result);
                          $(".svg-loader").fadeOut();

                          if (result.message == "There was an internet connection error, pls retry" ) {
                            show_error_report(result.message);
                            $("#iframe-modal").hide();
                            $("#proceed-card").attr('reload', 'yes');
                            $("#dal").text('Retry Payment');                            
                        }
                        else if(result.card_type == "first_time_card" ){

                           
                            $(".chkout-iframe").prop("src", result.payment_url);

                        }




                        else{


                          show_success_report(result.message);
                          $("#manage-card").hide(100);
                       

                        };


                          },

                          error: function (result) {

                          console.log(result);
                            $(".svg-loader").fadeOut();
                            show_error_report(result.message);
                          }


                });


 

} else if(channel = 'bank_account'){


                console.log('paying with bank account');

                var acct = $("#proceed-acct").attr('acct');

                 $.ajax({


                        url:'payment/checkout_manually/subscription' ,
                        type : 'POST',
                        contentType: 'application/json',
                        data : JSON.stringify ( { 'acct': acct, 'payment_type': payment_type,'card_id': 'null' } ),


                          success: function (result) {

                          console.log(result);
                          $(".svg-loader").fadeOut();

                          if (result.message == "There was an internet connection error, pls retry" ) {
                            show_error_report(result.message);
                            $("#iframe-modal").hide();
                            $("#proceed-acct").attr('reload', 'yes');
                            $("#proceed-acct > #dal").text('Retry Payment');                            
                        }
                        else if(result.card_type == "first_time_card" ){

                           
                            $(".chkout-iframe").prop("src", result.payment_url);

                        }




                        else{


                          show_success_report(result.message);
                          $("#manage-card").hide(100);
                       

                        };


                          },

                          error: function (result) {

                          console.log(result);
                            $(".svg-loader").fadeOut();
                            show_error_report(result.message);
                          }


                });




}


        $(".svg-loader").fadeIn(100);
            






    });





    $(document).on('click','#iframe-close-btn', function(){
            
      $("#iframe-modal").hide();
      /*location.reload();*/

    });






    $(document).on('click','#initialise_payment', function(){
            
    var amount = $(this).attr('amount');
    var command = $(this).attr('command');
    var payment_type = $(this).attr('payment_type');

    


    $(".svg-loader").fadeIn();
    $("#iframe-modal").css({"display":"flex", "backgrond":"white"}).show();


    console.log(amount, command, payment_type);



            $.ajax({

                    url:'payment/payment/checkout_manually' ,
                    type : 'POST',
                    contentType: 'application/json',
                    data : JSON.stringify ( { 'amount': amount, 'command': command, 'payment_type': payment_type } ),


                      success: function (result) {
                      $(".svg-loader").fadeOut(200);
                      console.log(result);



                      if(result.authorization_url == "null"){

                        show_error_report(" we could not process payment due to network error!, you were not debited, please retry! ");
                        console.log(result);
                        console.log(" network error");

                      }else{

                      $(".chkout-iframe").prop("src", result.payment_url);
                      console.log("gotten data, now opening modal")
                      show_checkout_iframe();
                      console.log("opened modal");

                      }


                      
                      

                      },

                      error: function (result) {
                        $(".svg-loader").fadeOut();
                        show_error_report(" something went wrong with that ");
                      }


            });




    });




});












































