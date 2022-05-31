let Data = new Date()


function alistamento(idade , altura){

    // controles para onde os soldados vão para ala

    if(Data.getHours >=18 ,  altura>=parseFloat(1.70)){
        console.log("ALA 1")
    }

    else if(idade <=17 , altura <=parseFloat(1.70)){
        console.log('ala 2 ')
    }

    else{
        console.log('Voce não colocou seus dados')
    }
}