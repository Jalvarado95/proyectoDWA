$(document).ready(function () {
    
    //evitar enviar los datos al dar clic al boton
    $('#butonSumit').on('click', function(e) {

        if($('#nombre').val() != "" && $('#apellido').val() != "" &&
        $('#correo').val() != "" && $('#tel').val() != "" &&
        $('#comentario').val() != ""){
            e.preventDefault();
            $('#confirmModal').modal('show')
        }      
    });
    
    //evitar enter
    $('#formContact').on('keydown', function(e) {
        if(e.keyCode == 13){
            e.preventDefault();
            return false;
        }
      });

    $('#nombre').on('keyup', function() {
        cambiarClass(this.value, "nom");
    });

    $('#apellido').on('keyup', function() {
        cambiarClass(this.value, "ape");
    });

    $('#correo').on('keyup', function() {
        cambiarClass(this.value, "email");
    });

    $('#tel').on('keyup', function() {
        cambiarClass(this.value, "phone");
    });


    //funcion para cambiar las clases de validacion
    function cambiarClass(value, input) {
        if(expReg(value, input)){
            $('.form-control.' + input).removeClass('is-invalid').addClass('is-valid');
            $('#butonSumit').attr("disabled", false);
        }else{
            $('.form-control.' + input).removeClass('is-valid').addClass('is-invalid');
            $('#butonSumit').attr("disabled", true);
        }
    }

    //funcion que valida el valor con la expresion regular
    function expReg(value, field) {
        if(field == "nom" || field == "ape"){
            const re = /^[A-Za-z _]*[A-Za-z][A-Za-z _]*$/;
		    return re.test(value);
        }else if(field == "email"){
            const re = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
		    return re.test(value);
        }else if(field == "phone"){
            const re = /^([0-9])*$/;
		    return re.test(value);
        }
    }
    
});