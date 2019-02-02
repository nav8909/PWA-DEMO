<?php
	$to = 'ivan.nav89@gmail.com'; // email del destinatario
	$name = $_POST["name"];
	$email= $_POST["email"];
	$phone= $_POST["phone"];
	$street= $_POST["street"];
	$streetnumber= $_POST["streetnumber"];
	$city= $_POST["city"];
	$postcode= $_POST["postcode"];
	$country= $_POST["country"];

	$arrive= $_POST["arrive"];
	$depart= $_POST["depart"];
	$people= $_POST["people"];
	$kids= $_POST["kids"];
	$rooms= $_POST["rooms"];

	$comments= $_POST["comments"];

	// fin de variables creo 


	
	$headers .= "From: " . $email . "\r\n"; // email del remitente
	$headers .= "Reply-To: ". $email . "\r\n";
	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	$subject = "Tiene una recerbacion";
	$logo = 'http://wethemez.com/test-html/consultplus/img/logo-black.png'; //cambiar por el logo de la empresa
    $link = '#';


	$message ='<table style="width:80%; border: solid #333;">
            <tbody>
              <tr>
                <th style="padding: 15px 5%; background-color: #212121; color: #fff; font-size: 18px;">BOOKING & CONTACT </th>
                <th style="padding: 15px 5%; background-color: #212121; color: #fff; font-size: 18px;"> </th></tr>
              <tr> 
                <td style="padding: 8px 5%; background-color: #eaeaea;"> <b> NOMBRE: </b></td>
                <td style="padding: 8px 5%;">'.$name.'</td></tr>
              <tr> 
                <td style="padding: 8px 5%; background-color: #eaeaea"> <b>EMAIL:</b> </td>   
                <td style="padding: 8px 5%;"> '.$email.' </td></tr>
              <tr> 
                <td style="padding: 8px 5%; background-color: #eaeaea"> <b>TELÉFONO</b> </td>   
                <td style="padding: 8px 5%;"> '.$phone.' </td></tr>
              <tr> 
                <td style="padding: 8px 5%; background-color: #eaeaea"> <b>CALLE</b> </td>    
                <td style="padding: 8px 5%;"> '.$street.' '.$streetnumber.' </td></tr>
              <tr> 
                <td style="padding: 8px 5%; background-color: #eaeaea"> <b>CIUDAD</b> </td>   
                <td style="padding: 8px 5%;"> '.$city.' '.$postcode.' '.$country.'</td></tr>
              <tr></tr>
              <tr> 
                <td style="padding: 15px 5%; background-color: #212121; color: #fff; font-size: 18px;"> DETALLES </td>
                <td style="padding: 15px 5%; background-color: #212121; color: #fff; font-size: 18px;">  </td></tr>
              <tr> 
                <td style="padding: 8px 5%; background-color: #eaeaea"> <b>LLEGADA:</b> </td>   
                <td style="padding: 8px 5%; background-color: #eaeaea"> <b>SALIDA</b> </td></tr>
              <tr> 
                <td style="padding: 8px 5%;"> '.$arrive.' </td>     
                <td style="padding: 8px 5%;"> '.$depart.' </td></tr>
              <tr> 
                <td style="padding: 8px 5%; background-color: #eaeaea"> <b>ADULTOS</b> </td>    
                <td style="padding: 8px 5%; background-color: #eaeaea"> <b>NIÑOS</b> </td></tr>
              <tr> 
                <td style="padding: 8px 5%;"> '.$peoples.' </td>    
                <td style="padding: 8px 5%;"> '.$kids.' </td></tr>
              <tr> 
                <td style="padding: 8px 5%; background-color: #eaeaea"> <b>HABITACIÓN</b> </td> 
                <td style="padding: 8px 5%; background-color: #eaeaea"> '.$rooms.' </td></tr>
              <tr> 
                <td style="padding: 15px 5%; background-color: #212121; color: #fff; font-size: 18px;"> Comentario </td>
                <td style="padding: 8px 5%;"> '.$comments.' </td></tr>
              <tr> 

        </tbody>
      </table>';



	if (@mail($to, $email, $subject, $logo, $link ,$headers, $message))
	{
	    echo 'Gracias, su mensaje se ha enviado correcamente.';
	}else{
	    echo 'Error. Verifique la informacion proporcionada.';
	}

?>
