let fechasProBlo = [];
let registrosInformadosProBlo = [];
let whatsAppEnviadosProBlo = [];
let mailsEnviadosProBlo = [];
let smsEnvidadosProBlo = [];
let montoProBlo = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let provBloqueado = data.proveedorBloqueado;
      provBloqueado.forEach(element=>{
        fechasProBlo.push(element['FECHA']);
        registrosInformadosProBlo.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosProBlo.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosProBlo.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosProBlo.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoProBlo.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosProBlo = data.totalesRegistrosInformadosProBlo;
      let registrosTotalesProBlo = document.querySelector('#registrosInformadosProBlo');
      registrosTotalesProBlo.innerHTML = totalesRegistrosInformadosProBlo;
      
      let totalesWhatsappsEnviadosProBlo = data.totalesWhatsappsEnviadosProBlo;
      let whatsappTotalesProBlo = document.querySelector('#whatsappEnviadosProBlo');
      whatsappTotalesProBlo.innerHTML = totalesWhatsappsEnviadosProBlo;
      
      let totalesMailsEnviadosProBlo = data.totalesMailsEnviadosProBlo;
      let mailsTotalesProBlo = document.querySelector('#mailsEnviadosProBlo');
      mailsTotalesProBlo.innerHTML = totalesMailsEnviadosProBlo;
      
      let totalesSmsEnviadosProBlo = data.totalesSmsEnviadosProBlo;
      let smsTotalesProBlo = document.querySelector('#smsEnviadosProBlo');
      smsTotalesProBlo.innerHTML = totalesSmsEnviadosProBlo;

      let totalesMontoProBlo = data.totalesMontoProBlo;
      let montoTotalesProBlo = document.querySelector('#montoProBlo');
      montoTotalesProBlo.innerHTML = totalesMontoProBlo;
      
    }).then(
    data=>{
        var ctx2 = document.getElementById("proveedorBloqueado").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasProBlo,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosProBlo,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosProBlo,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosProBlo,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosProBlo,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoProBlo,
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


