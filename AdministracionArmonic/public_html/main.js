$(document).ready(function(){
			$("#dialog").hide();
           jQuery("#tbltareas").jqGrid({
                    url:'productos.php',
                    datatype: 'json',
                    mtype: 'POST',
                    colNames:['Id','Nombre','Descripcion', 'Precio','Imagenes', 'Videos', 'idCategoria'],
                    colModel:[
                        {name:'id', index:'id', width:50},
                        {name:'nombre', index:'nombre', width:100},
                        {name:'descripcion', index:'descripcion', width:250},
                        {name:'precio', index:'precio', width:70, align:"right"},
                        {name:'imagenes', index:'imagenes', width:100},
                        {name:'videos', index:'videos', width:100},
                        {name:'idCategoria', index:'idCategoria', width:100}
                        ],
                    pager: '#paginacion',
                    rowNum:10,
                    rowList:[15,30],
                    sortname: 'id',
                    sortorder: 'asc',
                    viewrecords: true,
                    caption: 'PRODUCTOS'
                });              
            
			$('#logoutBT').on("click",logout);
			$("#btn_nuevo").on("click",showDialog);
			$("#guardarBT").on("click",insertarTarea);
			jQuery("").click( function(){ 			

							//Codigo para añadir una nueva tarea
				
				}); //fin btn_nuevo
//    			
		}); // fin ready