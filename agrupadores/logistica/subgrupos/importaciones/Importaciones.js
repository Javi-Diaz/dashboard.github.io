let fechasImp = [];
let registrosInformadosImp = [];
let whatsAppEnviadosImp = [];
let mailsEnviadosImp = [];
let smsEnvidadosImp = [];
let montoImp = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let importaciones = data.importaciones;
      importaciones.forEach(element=>{
        fechasImp.push(element['FECHA']);
        registrosInformadosImp.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosImp.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosImp.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosImp.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoImp.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosImp = data.totalesRegistrosInformadosImp;
      let registrosTotalesImp = document.querySelector('#registrosInformadosImp');
      registrosTotalesImp.innerHTML = totalesRegistrosInformadosImp;

      let totalesWhatsappsEnviadosImp = data.totalesWhatsappsEnviadosImp;
      let whatsappTotalesImp = document.querySelector('#whatsappEnviadoImp');
      whatsappTotalesImp.innerHTML = totalesWhatsappsEnviadosImp;

      let totalesMailsEnviadosImp = data.totalesMailsEnviadosImp;
      let mailsTotalesImp = document.querySelector('#mailsEnviadoImp');
      mailsTotalesImp.innerHTML = totalesMailsEnviadosImp;

      let totalesSmsEnviadosImp = data.totalesSmsEnviadosImp;
      let smsTotalesImp = document.querySelector('#smsEnviadosImp');
      smsTotalesImp.innerHTML = totalesSmsEnviadosImp;

      let totalesMontoImp = data.totalesMontoImp;
      let montoTotalesImp = document.querySelector('#montoImp');
      montoTotalesImp.innerHTML = totalesMontoImp;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("importaciones").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasImp,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosImp,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosImp,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosImp,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosImp,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoImp,
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


