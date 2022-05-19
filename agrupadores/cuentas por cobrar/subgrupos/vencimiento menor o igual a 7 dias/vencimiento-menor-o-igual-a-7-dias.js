let fechasMenI7D = [];
let registrosInformadosMenI7D = [];
let whatsAppEnviadosMenI7D = [];
let mailsEnviadosMenI7D = [];
let smsEnvidadosMenI7D = [];
let montoMenI7D = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let venMenI7D = data.vencimientoMenorIgualA7Dias;
      venMenI7D.forEach(element=>{
        fechasMenI7D.push(element['FECHA']);
        registrosInformadosMenI7D.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosMenI7D.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosMenI7D.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosMenI7D.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoMenI7D.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosMenI7D = data.totalesRegistrosInformadosVenMI7D;
      let registrosTotalesMenI7D = document.querySelector('#registrosInformadosMenI7D');
      registrosTotalesMenI7D.innerHTML = totalesRegistrosInformadosMenI7D;

      let totalesWhatsappsEnviadosVenI7D = data.totalesWhatsappsEnviadosVenMI7D;
      let whatsappTotalesVenI7D = document.querySelector('#whatsappEnviadosMenI7D');
      whatsappTotalesVenI7D.innerHTML = totalesWhatsappsEnviadosVenI7D;

      let totalesMailsEnviadosVenI7D = data.totalesMailsEnviadosVenMI7D;
      let mailsTotalesVenI7D = document.querySelector('#mailsEnviadosMenI7D');
      mailsTotalesVenI7D.innerHTML = totalesMailsEnviadosVenI7D;

      let totalesSmsEnviadosVenI7D = data.totalesSmsEnviadosVenMI7D;
      let smsTotalesVenI7D = document.querySelector('#smsEnviadosMenI7D');
      smsTotalesVenI7D.innerHTML = totalesSmsEnviadosVenI7D;

      let totalesMontoVenI7D = data.totalesMontoVenMI7D;
      let montoTotalesVenI7D = document.querySelector('#montoMenI7D');
      montoTotalesVenI7D.innerHTML = totalesMontoVenI7D;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("menI7D").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasMenI7D,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosMenI7D,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosMenI7D,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosMenI7D,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosMenI7D,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoMenI7D,
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


