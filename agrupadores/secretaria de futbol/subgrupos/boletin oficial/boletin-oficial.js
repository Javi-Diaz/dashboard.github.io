let fechasBoletinOficial = [];
let registrosInformadosBolOfi = [];
let whatsAppEnviadosBolOfi = [];
let mailsEnviadosBolOfi = [];
let smsEnvidadosBolOfi = [];
let montoBolOfi = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      //Totales por subgrupo
      // Boletin oficial
      
      let boletinOficial = data.boletinOficial;
      boletinOficial.forEach(element=>{
        fechasBoletinOficial.push(element['FECHA']);
        registrosInformadosBolOfi.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosBolOfi.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosBolOfi.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosBolOfi.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoBolOfi.push(parseInt(element["Monto en ML"]));
          } else{
              montoBolOfi.push(0)
          }
      })
      


      let totalesRegistrosInformadosBolOfi = data.totalesRegistrosInformadosBolOfi;
      let registrosTotales = document.querySelector('#registrosTotalesBolOfi');
      registrosTotales.innerHTML = totalesRegistrosInformadosBolOfi;

      let totalesWhatsappsEnviadosBolOfi = data.totalesWhatsappsEnviadosBolOfi
      let whatsappTotales = document.querySelector('#whatsappTotalesBolOfi');
      whatsappTotales.innerHTML = totalesWhatsappsEnviadosBolOfi;

      let totalesMailsEnviadosBolOfi = data.totalesMailsEnviadosBolOfi;
      let mailsTotales = document.querySelector('#mailsTotalesBolOfi');
      mailsTotales.innerHTML = totalesMailsEnviadosBolOfi;

      let totalesSmsEnviadosBolOfi = data.totalesSmsEnviadosBolOfi;
      let smsTotales = document.querySelector('#smsTotalesBolOfi');
      smsTotales.innerHTML = totalesSmsEnviadosBolOfi;

      let totalesMontoBolOfi = data.totalesMontoBolOfi;
      let montoTotales = document.querySelector('#montoTotalesBolOfi');
      montoTotales.innerHTML = totalesMontoBolOfi;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("boletinOficial").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasBoletinOficial,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosBolOfi,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosBolOfi,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosBolOfi,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosBolOfi,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoBolOfi,
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


