var cnt_anotaciones = 0;

function mostrar_mensaje(titulo, texto_mensaje)
{
    $("#txt_titulo_msj").html(titulo);
    $("#txt_mensaje").html(texto_mensaje);
    $("#modalMsj").modal();
}

function agregar_anotacion()
{
    var inp_txt_anot_nueva = document.getElementById("txt_anot_nueva");
    var txt_anot_nueva = inp_txt_anot_nueva.value;
    if(txt_anot_nueva == "") {
        mostrar_mensaje("Error", "La anotación debe contener algún texto.");
        return;
    }

    cnt_anotaciones += 1;

    var html_fila_anotacion = $("#plantilla_fila_anot").html();
    html_fila_anotacion = html_fila_anotacion.replace("id_anotacion_reemplazar", "anotacion" + cnt_anotaciones);
    html_fila_anotacion = html_fila_anotacion.replace("texto_anotacion_reemplazar", txt_anot_nueva);
    $("#filas_anotaciones").append("<tr id='anotacion" + cnt_anotaciones + "'>" + html_fila_anotacion + "</tr>");

    inp_txt_anot_nueva.value = "";
}

function eliminar_anotacion(id_anotacion)
{

    $(id_anotacion).remove();

}

function mostrar_creditos()
{

    mostrar_mensaje("Créditos", "2023, Fernando Nadal Testa.")

}
