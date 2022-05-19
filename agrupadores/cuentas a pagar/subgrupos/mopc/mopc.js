let fechasMOPC = [];
let registrosInformadosMOPC = [];
let whatsAppEnviadosMOPC= [];
let mailsEnviadosMOPC = [];
let smsEnvidadosMOPC = [];
let montoMOPC = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let MOPC = data.MOPC;
      MOPC.forEach(element=>{
        fechasMOPC.push(element['FECHA']);
        registrosInformadosMOPC.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosMOPC.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosMOPC.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosMOPC.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoMOPC.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosMOPC = data.totalesRegistrosInformadosMOPC;
      let registrosTotalesMOPC = document.querySelector('#registrosInformadosMOPC');
      registrosTotalesMOPC.innerHTML = totalesRegistrosInformadosMOPC;

      let totalesWhatsappsEnviadosMOPC = data.totalesWhatsappsEnviadosMOPC;
      let whatsappTotalesMOPC = document.querySelector('#whatsappEnviadosMOPC');
      whatsappTotalesMOPC.innerHTML = totalesWhatsappsEnviadosMOPC;

      let totalesMailsEnviadosMOPC = data.totalesMailsEnviadosMOPC;
      let mailsTotalesMOPC = document.querySelector('#mailsEnviadosMOPC');
      mailsTotalesMOPC.innerHTML = totalesMailsEnviadosMOPC;

      let totalesSmsEnviadosMOPC = data.totalesSmsEnviadosMOPC;
      let smsTotalesMOPC = document.querySelector('#smsEnviadosMOPC');
      smsTotalesMOPC.innerHTML = totalesSmsEnviadosMOPC;

      let totalesMontoMOPC = data.totalesMontoMOPC;
      let montoTotalesMOPC = document.querySelector('#montoMOPC');
      montoTotalesMOPC.innerHTML = totalesMontoMOPC;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("MOPC").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasMOPC,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosMOPC,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosMOPC,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosMOPC,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosMOPC,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoMOPC,
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


