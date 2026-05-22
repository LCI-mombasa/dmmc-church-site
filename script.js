function openMpesa(){

    const isAndroid = /Android/i.test(navigator.userAgent);

    const isiPhone = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if(isAndroid){

        window.location.href = "mpesa://";

        setTimeout(() => {

            window.location.href =
            "https://play.google.com/store/apps/details?id=com.android.stk";

        },2000);

    }

    else if(isiPhone){

        window.location.href =
        "https://apps.apple.com/ke/app/m-pesa/id1496788866";

    }

    else{

        alert("Open on a mobile device to launch M-Pesa.");

    }

}