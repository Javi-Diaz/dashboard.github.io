let fechasRecMP = [];
let registrosInformadosRecMP = [];
let whatsAppEnviadosRecMP = [];
let mailsEnviadosRecMP = [];
let smsEnvidadosRecMP = [];
let montoRecMP = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let recepcionMP = data.recepcionDeMateriaPrima;
      recepcionMP.forEach(element=>{
        fechasRecMP.push(element['FECHA']);
        registrosInformadosRecMP.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosRecMP.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosRecMP.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosRecMP.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoRecMP.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosRecMP = data.totalesRegistrosInformadosRecMP;
      let registrosTotalesRecMP = document.querySelector('#registrosTotalesRecMP');
      registrosTotalesRecMP.innerHTML = totalesRegistrosInformadosRecMP;

      let totalesWhatsappsEnviadosRecMP = data.totalesWhatsappsEnviadosRecMP;
      let whatsappTotalesRecMP = document.querySelector('#whatsappEnviadosRecMP');
      whatsappTotalesRecMP.innerHTML = totalesWhatsappsEnviadosRecMP;

      let totalesMailsEnviadosRecMP = data.totalesMailsEnviadosRecMP;
      let mailsTotalesRecMP = document.querySelector('#mailsEnviadosRecMP');
      mailsTotalesRecMP.innerHTML = totalesMailsEnviadosRecMP;

      let totalesSmsEnviadosRecMP = data.totalesSmsEnviadosRecMP;
      let smsTotalesRecMP = document.querySelector('#smsRecMP');
      smsTotalesRecMP.innerHTML = totalesSmsEnviadosRecMP;

      let totalesMontoRecMP = data.totalesMontoRecMP;
      let montoTotalesRecMP = document.querySelector('#montoRecMP');
      montoTotalesRecMP.innerHTML = totalesMontoRecMP;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("recepcionMP").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasRecMP,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosRecMP,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosRecMP,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosRecMP,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosRecMP,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoRecMP,
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


