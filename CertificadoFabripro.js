var NombreFormularioLog="";
var parpadeo2= 1;
var NumeroDeCaracteres=0;



    var Prenderparpadeo= function(){ 
    
    var parpadeointervalo2=setInterval(function(){
           
        
        if(parpadeo2==1){
             $('.tiburon').css({"opacity":"0.2"});
            parpadeo2=2;
            
        }else if(parpadeo2==2){
            $('.tiburon').css({"opacity":"1"});
            parpadeo2=1;
        }
          $('.tiburon').click(function(){    
                   $('.tiburon').css({"opacity":"1"});         
             clearInterval(parpadeointervalo2); 
             
                                      });
    
        
        },700);
        
    }
    Prenderparpadeo();

var barraDeProgreso=function(){
    
     var Barra=setInterval(function(){
           
            $('.barradeprogreso').css({"width":"100%"});
        
        },1000);
}
barraDeProgreso();


$('.clicActovodad').click(function(){
    /*incrustar video------------------------*/
            
    $(location).attr('href','../../../Simboles/contenidoSimboles/htmls/SimbolesMundos.html');
            /*fin incrustar video----------------*/
})



/*-------------------------------Certificado formulario--------------------*/

$('.EnviarFormulario').click(function(){   
    
          NombreFormularioLog=$('.NombreCertificado').val();
        NumeroDeCaracteres= NombreFormularioLog.length;
    
    if(NombreFormularioLog==""){
        
    }else{
        $('.FormularioCertificado').remove(); 
        $('.padreCertificado').css({"top":"0px"});
        $('.NombreEstudiante').remove();   
        $('.CodigoSecreto').remove();
        $('.cajaCertificado').append(' <p class="NombreEstudiante">'+NombreFormularioLog+' <p class="CodigoSecreto">'+" "+' '+"("+''+NumeroDeCaracteres+''+")"+''+"Web"+'</p>')
       if(window.innerWidth>900 && window.innerWidth<1350  ){
           $('.NombreEstudiante').css({"font-size":"40px"});
           $('.NombreEstudiante').css({"top":"43%"});
           
           
       }
        
        
         }
     
    }) 


/*-------------------Gernerar pdf Certificado------------------*/
$('.Guardar').click(function(){
    if(window.innerWidth>900 && window.innerWidth<1350   ){
           $('.NombreEstudiante').css({"font-size":"40px"});
           $('.NombreEstudiante').css({"top":"47%"});
           
           
       }
const $elementoParaConvertir = document.getElementById('PdfAutplay'); // <-- Aquí puedes elegir cualquier elemento del DOM
html2pdf()
    .set({
        margin: 1,
        filename: 'Certificado Aut-Play.pdf',
        image: {
            type: 'jpeg',
            quality: 0.98
        },
        html2canvas: {
            scale: 3, // A mayor escala, mejores gráficos, pero más peso
            letterRendering: true,
        },
        jsPDF: {
            unit: "in",
            format: "a3",
            orientation: 'landscape' // landscape o portrait
        }
    })
    .from($elementoParaConvertir)
    .save()
    .catch(err => console.log(err));
    
    $('.padreCertificado').remove();
})