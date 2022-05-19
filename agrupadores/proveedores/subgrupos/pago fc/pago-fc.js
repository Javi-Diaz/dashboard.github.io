let fechasPagoFC = [];
let registrosInformadosPagFC = [];
let whatsAppEnviadosPagFC = [];
let mailsEnviadosPagFC = [];
let smsEnvidadosPagFC = [];
let montoPagFC = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let pagoFc = data.pagoFc;
      pagoFc.forEach(element=>{
        fechasPagoFC.push(element['FECHA']);
        registrosInformadosPagFC.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosPagFC.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosPagFC.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosPagFC.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoPagFC.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado en pantalla
      let totalesRegistrosInformadosPagFc = data.totalesRegistrosInformadosPagFc;
      let registrosTotalesPagFC = document.querySelector('#registrosTotalesPagFC');
      registrosTotalesPagFC.innerHTML = totalesRegistrosInformadosPagFc;

      let totalesWhatsappsEnviadosPagFc = data.totalesWhatsappsEnviadosPagFc;
      let whatsappTotalesPagFC = document.querySelector('#whatsappTotalesPagFC');
      whatsappTotalesPagFC.innerHTML = totalesWhatsappsEnviadosPagFc;

      let totalesMailsEnviadosPagFc = data.totalesMailsEnviadosPagFc;
      let mailsTotalesPagFC = document.querySelector('#mailsTotalesPagFC');
      mailsTotalesPagFC.innerHTML = totalesMailsEnviadosPagFc;

      let totalesSmsEnviadosPagFc = data.totalesSmsEnviadosPagFc;
      let smsTotalesPagFC = document.querySelector('#smsTotalesPagFC');
      smsTotalesPagFC.innerHTML = totalesSmsEnviadosPagFc;

      let totalesMontoPagFc = data.totalesMontoPagFc;
      let montoTotalesPagFC = document.querySelector('#montoTotalesPagFC');
      montoTotalesPagFC.innerHTML = totalesMontoPagFc;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("pagoFC").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasPagoFC,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosPagFC,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosPagFC,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosPagFC,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosPagFC,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoPagFC,
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


