let fechasMay30D = [];
let registrosInformadosMay30D = [];
let whatsAppEnviadosMay30D = [];
let mailsEnviadosMay30D = [];
let smsEnvidadosMay30D = [];
let montoMay30D = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let may30D = data.mayorA30Dias;
      may30D.forEach(element=>{
        fechasMay30D.push(element['FECHA']);
        registrosInformadosMay30D.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosMay30D.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosMay30D.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosMay30D.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoMay30D.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosMay30D = data.totalesRegistrosInformadosMayTD;
      let registrosTotalesMay30D = document.querySelector('#registrosInformadosMay30D');
      registrosTotalesMay30D.innerHTML = totalesRegistrosInformadosMay30D;

      let totalesWhatsappsEnviadosMay30D = data.totalesWhatsappsEnviadosMayTD;
      let whatsappTotalesMay30D = document.querySelector('#whatsappEnviadosMay30D');
      whatsappTotalesMay30D.innerHTML = totalesWhatsappsEnviadosMay30D;

      let totalesMailsEnviadosMay30D = data.totalesMailsEnviadosMayTD;
      let mailsTotalesMay30D = document.querySelector('#mailsEnviadosMay30D');
      mailsTotalesMay30D.innerHTML = totalesMailsEnviadosMay30D;

      let totalesSmsEnviadosMay30D = data.totalesSmsEnviadosMenTD;
      let smsTotalesMay30D = document.querySelector('#smsEnviadosMay30D');
      smsTotalesMay30D.innerHTML = totalesSmsEnviadosMay30D;

      let totalesMontoMay30D = data.totalesMontoMayTD;
      let montoTotalesMay30D = document.querySelector('#montoMay30D');
      montoTotalesMay30D.innerHTML = totalesMontoMay30D;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("may30D").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasMay30D,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosMay30D,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosMay30D,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosMay30D,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosMay30D,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoMay30D,
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


