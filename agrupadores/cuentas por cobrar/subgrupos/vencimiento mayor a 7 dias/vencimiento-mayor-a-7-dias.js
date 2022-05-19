let fechasVenMay7D = [];
let registrosInformadosVenMay7D = [];
let whatsAppEnviadosVenMay7D = [];
let mailsEnviadosVenMay7D = [];
let smsEnvidadosVenMay7D = [];
let montoVenMay7D = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let venVenMay7D = data.vencimientoMayorA7Dias;
      venVenMay7D.forEach(element=>{
        fechasVenMay7D.push(element['FECHA']);
        registrosInformadosVenMay7D.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosVenMay7D.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosVenMay7D.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosVenMay7D.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoVenMay7D.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosVenMay7D = data.totalesRegistrosInformadosVenMSD;
      let registrosTotalesVenMay7D = document.querySelector('#registrosInformadosVenMay7D');
      registrosTotalesVenMay7D.innerHTML = totalesRegistrosInformadosVenMay7D;

      let totalesWhatsappsEnviadosVenMay7D = data.totalesWhatsappsEnviadosVenMSD;
      let whatsappTotalesVenMay7D = document.querySelector('#whatsappEnviadosVenMay7D');
      whatsappTotalesVenMay7D.innerHTML = totalesWhatsappsEnviadosVenMay7D;

      let totalesMailsEnviadosVenMay7D = data.totalesMailsEnviadosVenMSD;
      let mailsTotalesVenMay7D = document.querySelector('#mailsEnviadosVenMay7D');
      mailsTotalesVenMay7D.innerHTML = totalesMailsEnviadosVenMay7D;

      let totalesSmsEnviadosVenMay7D = data.totalesSmsEnviadosVenMSD;
      let smsTotalesVenMay7D = document.querySelector('#smsEnviadosVenMay7D');
      smsTotalesVenMay7D.innerHTML = totalesSmsEnviadosVenMay7D;

      let totalesMontoVenMay7D = data.totalesMontoVenMSD;
      let montoTotalesVenMay7D = document.querySelector('#montoVenMay7D');
      montoTotalesVenMay7D.innerHTML = totalesMontoVenMay7D;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("venMay30D").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasVenMay7D,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosVenMay7D,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosVenMay7D,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosVenMay7D,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosVenMay7D,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoVenMay7D,
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


