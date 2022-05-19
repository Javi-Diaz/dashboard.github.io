let fechasFacPR = [];
let registrosInformadosFacPR = [];
let whatsAppEnviadosFacPR = [];
let mailsEnviadosFacPR = [];
let smsEnvidadosFacPR = [];
let montoFacPR = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let recepcionMP = data.recepcionDeMateriaPrima;
      recepcionMP.forEach(element=>{
        fechasFacPR.push(element['FECHA']);
        registrosInformadosFacPR.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosFacPR.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosFacPR.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosFacPR.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoFacPR.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosFacPR = data.totalesRegistrosInformadosFacPR;
      let registrosTotalesFacPR = document.querySelector('#registrosInformadosFacPR');
      registrosTotalesFacPR.innerHTML = totalesRegistrosInformadosFacPR;

      let totalesWhatsappsEnviadosFacPR = data.totalesWhatsappsEnviadosFacPR;
      let whatsappTotalesFacPR = document.querySelector('#whatsappEnviadosFacPR');
      whatsappTotalesFacPR.innerHTML = totalesWhatsappsEnviadosFacPR;

      let totalesMailsEnviadosFacPR = data.totalesMailsEnviadosFacPR;
      let mailsTotalesFacPR = document.querySelector('#mailsEnviadosFacPR');
      mailsTotalesFacPR.innerHTML = totalesMailsEnviadosFacPR;

      let totalesSmsEnviadosFacPR = data.totalesSmsEnviadosFacPR;
      let smsTotalesFacPR = document.querySelector('#smsEnviadosFacPR');
      smsTotalesFacPR.innerHTML = totalesSmsEnviadosFacPR;

      let totalesMontoFacPR = data.totalesMontoFacPR;
      let montoTotalesFacPR = document.querySelector('#montoFacPR');
      montoTotalesFacPR.innerHTML = totalesMontoFacPR;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("facturaPR").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasFacPR,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosFacPR,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosFacPR,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosFacPR,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosFacPR,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoFacPR,
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


