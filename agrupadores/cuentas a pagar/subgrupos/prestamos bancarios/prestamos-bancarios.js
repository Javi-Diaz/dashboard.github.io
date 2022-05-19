let fechasPreBan = [];
let registrosInformadosPreBan = [];
let whatsAppEnviadosPreBan = [];
let mailsEnviadosPreBan = [];
let smsEnvidadosPreBan = [];
let montoPreBan = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let prestamosBancarios = data.prestamosBancarios;
      prestamosBancarios.forEach(element=>{
        fechasPreBan.push(element['FECHA']);
        registrosInformadosPreBan.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosPreBan.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosPreBan.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosPreBan.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoPreBan.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosPreBan = data.totalesRegistrosInformadosPreBan;
      let registrosTotalesPreBan = document.querySelector('#registrosInformadosPreBan');
      registrosTotalesPreBan.innerHTML = totalesRegistrosInformadosPreBan;

      let totalesWhatsappsEnviadosPreBan = data.totalesWhatsappsEnviadosPreBan;
      let whatsappTotalesPreBan = document.querySelector('#whatsappEnviadosPreBan');
      whatsappTotalesPreBan.innerHTML = totalesWhatsappsEnviadosPreBan;

      let totalesMailsEnviadosPreBan = data.totalesMailsEnviadosPreBan;
      let mailsTotalesPreBan = document.querySelector('#mailsEnviadosPreBan');
      mailsTotalesPreBan.innerHTML = totalesMailsEnviadosPreBan;

      let totalesSmsEnviadosPreBan = data.totalesSmsEnviadosPreBan;
      let smsTotalesPreBan = document.querySelector('#smsEnviadosPreBan');
      smsTotalesPreBan.innerHTML = totalesSmsEnviadosPreBan;

      let totalesMontoPreBan = data.totalesMontoPreBan;
      let montoTotalesPreBan = document.querySelector('#montoPreBan');
      montoTotalesPreBan.innerHTML = totalesMontoPreBan;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("prestamosBancarios").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasPreBan,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosPreBan,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosPreBan,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosPreBan,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosPreBan,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoPreBan,
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


