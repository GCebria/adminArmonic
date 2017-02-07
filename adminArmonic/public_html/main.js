$(document).ready(function () {
    $("#dialog").hide();
    jQuery("#tblproductos").jqGrid({
        url: 'grid.php',

        datatype: 'json',
        mytype: 'POST',
        colNames: ['Id', 'Nombre', 'Descripcion', 'Precio', 'Imagenes', 'Videos', 'Categoria'],
        colModel: [
            {name: 'id', index: 'id',key:true, width: 50},
            {name: 'nombre', index: 'nombre', width: 100},
            {name: 'descripcion', index: 'descripcion', width: 100},
            {name: 'precio', index: 'precio', width: 50},
            {name: 'imagenes', index: 'imagenes', width: 70},
            {name: 'videos', index: 'videos', width: 100},
            {name: 'idCategoria', index: 'categoria', width: 100},
        ],
        pager: '#paginacion',
        rowNum: 10,
        rowList: [15, 30],
        sortname: 'id',
        sortorder: 'asc',
        viewrecords: true,
        caption: 'Listado de Productos'
    });

//    $('#logoutBT').on("click", logovoy a ut);
    $("#btn_nuevo").on("click", showDialog);
    $("#guardarBT").on("click", insertarTarea);
    jQuery("").click(function () {

        //Codigo para añadir una nueva tarea

    }); //fin btn_nuevo

}); // fin ready
