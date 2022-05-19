let fechasComNac = [];
let registrosInformadosComNac = [];
let whatsAppEnviadosComNac = [];
let mailsEnviadosComNac = [];
let smsEnvidadosComNac = [];
let montoComNac = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let comNacional = data.compraNacional;
      comNacional.forEach(element=>{
        fechasComNac.push(element['FECHA']);
        registrosInformadosComNac.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosComNac.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosComNac.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosComNac.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoComNac.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosComNac = data.totalesRegistrosInformadosComNac;
      let registrosTotalesComNac = document.querySelector('#registrosInformadosComNAc');
      registrosTotalesComNac.innerHTML = totalesRegistrosInformadosComNac;

      let totalesWhatsappsEnviadosComNac = data.totalesWhatsappsEnviadosComNac;
      let whatsappTotalesComNac = document.querySelector('#whatsappEnviadosComNac');
      whatsappTotalesComNac.innerHTML = totalesWhatsappsEnviadosComNac;

      let totalesMailsEnviadosComNac = data.totalesMailsEnviadosComNac;
      let mailsTotalesComNac = document.querySelector('#mailsEnviadosComNac');
      mailsTotalesComNac.innerHTML = totalesMailsEnviadosComNac;

      let totalesSmsEnviadosComNac = data.totalesSmsEnviadosComNac;
      let smsTotalesComNac = document.querySelector('#smsEnviadosComNac');
      smsTotalesComNac.innerHTML = totalesSmsEnviadosComNac;

      let totalesMontoComNac = data.totalesMontoComNac;
      let montoTotalesComNac = document.querySelector('#montoComNac');
      montoTotalesComNac.innerHTML = totalesMontoComNac;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("comNacional").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasComNac,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosComNac,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosComNac,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosComNac,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosComNac,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoComNac,
                        backgroundColor:'#D0A8F4',
                        borderColor: '#9B2FFE'      
                    }
                ]
                },
            options:{
                responsive: false,
                maintainAspectRadio: true,
                scales:{
                        yAxes:[{
                        ticks:{
                            beginAtZero:true
                        }
                    }]
                }
            },
        });
    }
)


