let fechasMen30D = [];
let registrosInformadosMen30D = [];
let whatsAppEnviadosMen30D = [];
let mailsEnviadosMen30D = [];
let smsEnvidadosMen30D = [];
let montoMen30D = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let men30D = data.menorA30Dias;
      men30D.forEach(element=>{
        fechasMen30D.push(element['FECHA']);
        registrosInformadosMen30D.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosMen30D.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosMen30D.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosMen30D.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoMen30D.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosMen30D = data.totalesRegistrosInformadosMenTD;
      let registrosTotalesMen30D = document.querySelector('#registrosInformadosMen30D');
      registrosTotalesMen30D.innerHTML = totalesRegistrosInformadosMen30D;

      let totalesWhatsappsEnviadosMen30D = data.totalesWhatsappsEnviadosMenTD;
      let whatsappTotalesMen30D = document.querySelector('#whatsappEnviadosMen30D');
      whatsappTotalesMen30D.innerHTML = totalesWhatsappsEnviadosMen30D;

      let totalesMailsEnviadosMen30D = data.totalesMailsEnviadosMenTD;
      let mailsTotalesMen30D = document.querySelector('#mailsEnviadosMen30D');
      mailsTotalesMen30D.innerHTML = totalesMailsEnviadosMen30D;

      let totalesSmsEnviadosMen30D = data.totalesSmsEnviadosMenTD;
      let smsTotalesMen30D = document.querySelector('#smsEnviadosMen30D');
      smsTotalesMen30D.innerHTML = totalesSmsEnviadosMen30D;

      let totalesMontoMen30D = data.totalesMontoMenTD;
      let montoTotalesMen30D = document.querySelector('#montoMen30D');
      montoTotalesMen30D.innerHTML = totalesMontoMen30D;
      
      
}).then(
    data=>{
        var ctx2 = document.getElementById("men30D").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasMen30D,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosMen30D,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosMen30D,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosMen30D,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosMen30D,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoMen30D,
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


