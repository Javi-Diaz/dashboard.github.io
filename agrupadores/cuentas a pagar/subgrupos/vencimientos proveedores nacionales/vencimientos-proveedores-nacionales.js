let fechasVenPN = [];
let registrosInformadosVenPN = [];
let whatsAppEnviadosVenPN = [];
let mailsEnviadosVenPN = [];
let smsEnvidadosVenPN = [];
let montoVenPN = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let vencimientosPN = data.vencimientosProveedoresNacionales;
      vencimientosPN.forEach(element=>{
        fechasVenPN.push(element['FECHA']);
        registrosInformadosVenPN.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosVenPN.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosVenPN.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosVenPN.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoVenPN.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosVenPN = data.totalesRegistrosInformadosVenPN;
      let registrosTotalesVenPN = document.querySelector('#registrosInformadosVenPN');
      registrosTotalesVenPN.innerHTML = totalesRegistrosInformadosVenPN;

      let totalesWhatsappsEnviadosVenPN = data.totalesWhatsappsEnviadosVenPN;
      let whatsappTotalesVenPN = document.querySelector('#whatsappEnviadosVenPN');
      whatsappTotalesVenPN.innerHTML = totalesWhatsappsEnviadosVenPN;

      let totalesMailsEnviadosVenPN = data.totalesMailsEnviadosVenPN;
      let mailsTotalesVenPN = document.querySelector('#mailsEnviadosVenPN');
      mailsTotalesVenPN.innerHTML = totalesMailsEnviadosVenPN;

      let totalesSmsEnviadosVenPN = data.totalesSmsEnviadosVenPN;
      let smsTotalesVenPN = document.querySelector('#smsEnviadosVenPN');
      smsTotalesVenPN.innerHTML = totalesSmsEnviadosVenPN;

      let totalesMontoVenPN = data.totalesMontoVenPN;
      let montoTotalesVenPN = document.querySelector('#montoVenPN');
      montoTotalesVenPN.innerHTML = totalesMontoVenPN;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("vencimientosPN").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasVenPN,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosVenPN,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosVenPN,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosVenPN,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosVenPN,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoVenPN,
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


