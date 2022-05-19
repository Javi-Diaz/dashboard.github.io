// Datos sacados de la api
fetch('http://localhost:4309/mensajeria')
  .then(response => response.json())
  .then(data =>{
      //Totales
      let registros = data.registros;
      let whatsAppEnviados = data.whatsAppEnviados;
      let smsEnvidados = data.smsEnvidados;
      let emailEnviados = data.emailEnviados;
      let monto = data.montoMl;
      
      
      let registrosTotales = document.querySelector('#registrosTotales');
      registrosTotales.innerHTML = registros;
      
      let whatsappTotales = document.querySelector('#whatsappTotales');
      whatsappTotales.innerHTML = whatsAppEnviados;

      let mailsTotales = document.querySelector('#mailsTotales');
      mailsTotales.innerHTML = emailEnviados;

      let smsTotales = document.querySelector('#smsTotales');
      smsTotales.innerHTML = smsEnvidados;

      let montoTotales = document.querySelector('#montoTotales');
      montoTotales.innerHTML = monto; 
});



