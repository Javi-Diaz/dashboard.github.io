let fechasRecSer = [];
let registrosInformadosRecSer = [];
let whatsAppEnviadosRecSer = [];
let mailsEnviadosRecSer = [];
let smsEnvidadosRecSer = [];
let montoRecSer = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let recepcionDeServicios = data.recepcionDeServicios;
      recepcionDeServicios.forEach(element=>{
        fechasRecSer.push(element['FECHA']);
        registrosInformadosRecSer.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosRecSer.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosRecSer.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosRecSer.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoRecSer.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de datos mostrados
      let totalesRegistrosInformadosRecSer = data.totalesRegistrosInformadosRecSer;
      let registrosTotalesRecSer = document.querySelector('#registrosTotalesRecSer');
      registrosTotalesRecSer.innerHTML = totalesRegistrosInformadosRecSer;

      let totalesWhatsappsEnviadosRecSer = data.totalesWhatsappsEnviadosRecSer;
      let whatsappTotalesRecSer = document.querySelector('#whatsappTotalesRecSer');
      whatsappTotalesRecSer.innerHTML = totalesWhatsappsEnviadosRecSer;

      let totalesMailsEnviadosRecSer = data.totalesMailsEnviadosRecSer;
      let mailsTotalesRecSer = document.querySelector('#mailsTotalesRecSer');
      mailsTotalesRecSer.innerHTML = totalesMailsEnviadosRecSer;

      let totalesSmsEnviadosRecSer = data.totalesSmsEnviadosRecSer;
      let smsTotalesRecSer = document.querySelector('#smsTotalesRecSer');
      smsTotalesRecSer.innerHTML = totalesSmsEnviadosRecSer;

      let totalesMontoRecSer = data.totalesMontoRecSer;
      let montoTotalesRecSer = document.querySelector('#montoTotalesRecSer');
      montoTotalesRecSer.innerHTML = totalesMontoRecSer;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("recepcionDeServicios").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasRecSer,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosRecSer,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosRecSer,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosRecSer,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosRecSer,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoRecSer,
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


