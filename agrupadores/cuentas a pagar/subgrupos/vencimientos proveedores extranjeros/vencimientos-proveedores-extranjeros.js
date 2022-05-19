let fechasVenPE = [];
let registrosInformadosVenPE = [];
let whatsAppEnviadosVenPE = [];
let mailsEnviadosVenPE = [];
let smsEnvidadosVenPE = [];
let montoVenPE = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let vencimientosVenPE = data.vencimientosProveedoresExtranjeros;
      vencimientosVenPE.forEach(element=>{
        fechasVenPE.push(element['FECHA']);
        registrosInformadosVenPE.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosVenPE.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosVenPE.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosVenPE.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoVenPE.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosVenPE = data.totalesRegistrosInformadosVenPE;
      let registrosTotalesVenPE = document.querySelector('#registrosInformadosVenPE');
      registrosTotalesVenPE.innerHTML = totalesRegistrosInformadosVenPE;

      let totalesWhatsappsEnviadosVenPE = data.totalesWhatsappsEnviadosVenPE;
      let whatsappTotalesVenPE = document.querySelector('#whatsappEnviadosVenPE');
      whatsappTotalesVenPE.innerHTML = totalesWhatsappsEnviadosVenPE;

      let totalesMailsEnviadosVenPE = data.totalesMailsEnviadosVenPE;
      let mailsTotalesVenPE = document.querySelector('#mailsEnviadosVenPE');
      mailsTotalesVenPE.innerHTML = totalesMailsEnviadosVenPE;

      let totalesSmsEnviadosVenPE = data.totalesSmsEnviadosVenPE;
      let smsTotalesVenPE = document.querySelector('#smsEnviadosVenPE');
      smsTotalesVenPE.innerHTML = totalesSmsEnviadosVenPE;

      let totalesMontoVenPE = data.totalesMontoVenPE;
      let montoTotalesVenPE = document.querySelector('#montoVenPE');
      montoTotalesVenPE.innerHTML = totalesMontoVenPE;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("vencimientoPE").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasVenPE,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosVenPE,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosVenPE,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosVenPE,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosVenPE,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoVenPE,
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


