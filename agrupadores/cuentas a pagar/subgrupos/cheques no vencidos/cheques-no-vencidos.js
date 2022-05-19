let fechasCheNV = [];
let registrosInformadosCheNV = [];
let whatsAppEnviadosCheNV = [];
let mailsEnviadosCheNV = [];
let smsEnvidadosCheNV = [];
let montoCheNV = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let chequesNV = data.chequesNoVencidos;
      chequesNV.forEach(element=>{
        fechasCheNV.push(element['FECHA']);
        registrosInformadosCheNV.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosCheNV.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosCheNV.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosCheNV.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoCheNV.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosCheNV = data.totalesRegistrosInformadosCheNV;
      let registrosTotalesCheNV = document.querySelector('#registrosInformadosCheNV');
      registrosTotalesCheNV.innerHTML = totalesRegistrosInformadosCheNV;

      let totalesWhatsappsEnviadosCheNV = data.totalesWhatsappsEnviadosCheNV;
      let whatsappTotalesCheNV = document.querySelector('#whatsappEnviadosCheNV');
      whatsappTotalesCheNV.innerHTML = totalesWhatsappsEnviadosCheNV;

      let totalesMailsEnviadosCheNV = data.totalesMailsEnviadosCheNV;
      let mailsTotalesCheNV = document.querySelector('#mailsEnviadosCheNV');
      mailsTotalesCheNV.innerHTML = totalesMailsEnviadosCheNV;

      let totalesSmsEnviadosCheNV = data.totalesSmsEnviadosCheNV;
      let smsTotalesCheNV = document.querySelector('#smsEnviadosCheNV');
      smsTotalesCheNV.innerHTML = totalesSmsEnviadosCheNV;

      let totalesMontoCheNV = data.totalesMontoCheNV;
      let montoTotalesCheNV = document.querySelector('#montoCheNV');
      montoTotalesCheNV.innerHTML = totalesMontoCheNV;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("chequesNV").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasCheNV,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosCheNV,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosCheNV,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosCheNV,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosCheNV,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoCheNV,
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


