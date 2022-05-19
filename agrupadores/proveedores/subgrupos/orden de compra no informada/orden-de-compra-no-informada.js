let fechasOrdCNI = [];
let registrosInformadosOrdCNI = [];
let whatsAppEnviadosOrdCNI = [];
let mailsEnviadosOrdCNI = [];
let smsEnvidadosOrdCNI = [];
let montoOrdCNI = [];


fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      
      
      let ordenCNI = data.ordenDeCompraNoInformada;
      ordenCNI.forEach(element=>{
        fechasOrdCNI.push(element['FECHA']);
        registrosInformadosOrdCNI.push(element['REGISTROS INFORMADOS']);
        whatsAppEnviadosOrdCNI.push(element['WHATS APP ENVIADOS']);
        mailsEnviadosOrdCNI.push(element['E-MAILS ENVIADOS']);
        smsEnvidadosOrdCNI.push(element['SMS ENVIADOS']);
        
        if (element["Monto en ML"] != "no aplica") {
            montoOrdCNI.push(parseInt(element["Monto en ML"]));
          }
      });
      

      //Totales de cada dato mostrado
      let totalesRegistrosInformadosOrdCNI = data.totalesRegistrosInformadosOrdCNI;
      let registrosTotalesOrdCNI = document.querySelector('#registrosInformadosOrdCNI');
      registrosTotalesOrdCNI.innerHTML = totalesRegistrosInformadosOrdCNI;

      let totalesWhatsappsEnviadosOrdCNI = data.totalesWhatsappsEnviadosOrdCNI;
      let whatsappTotalesOrdCNI = document.querySelector('#whatsappEnviadosOrdCNI');
      whatsappTotalesOrdCNI.innerHTML = totalesWhatsappsEnviadosOrdCNI;

      let totalesMailsEnviadosOrdCNI = data.totalesMailsEnviadosOrdCNI;
      let mailsTotalesOrd = document.querySelector('#mailsEnviadosOrdCNI');
      mailsTotalesOrd.innerHTML = totalesMailsEnviadosOrdCNI;

      let totalesSmsEnviadosOrdCNI = data.totalesSmsEnviadosOrdCNI;
      let smsTotalesOrdCNI = document.querySelector('#smsEnviadosOrdCNI');
      smsTotalesOrdCNI.innerHTML = totalesSmsEnviadosOrdCNI;

      let totalesMontoOrdCNI = data.totalesMontoOrdCNI;
      let montoTotalesOrdCNI = document.querySelector('#montoOrdCNI');
      montoTotalesOrdCNI.innerHTML = totalesMontoOrdCNI;
      
}).then(
    data=>{
        var ctx2 = document.getElementById("ordenCNI").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"line",
                data:{
                    labels:fechasOrdCNI,
                    datasets:[{
                        label:'Registros informados',
                        data:registrosInformadosOrdCNI,
                        backgroundColor:'#F5A8BD',
                        borderColor: '#FE0041'      
                    },
                    {
                        label:'WhatsApp Enviados',
                        data:whatsAppEnviadosOrdCNI,
                        backgroundColor:'#80DAF4',
                        borderColor: '#01A9DB' 
                    },
                    {
                        label:'Mails Enviados',
                        data:mailsEnviadosOrdCNI,
                        backgroundColor:'#F4F6CF',
                        borderColor: '#FFFE01'    
                    },
                    {
                        label:'SMS Enviados',
                        data:smsEnvidadosOrdCNI,
                        backgroundColor:'#A8F4F2',
                        borderColor: '#00FFFF'  
                    },
                    {
                        label:'Monto ML',
                        data:montoOrdCNI,
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


