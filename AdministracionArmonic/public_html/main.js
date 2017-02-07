$(document).ready(function(){
			$("#dialog").hide();
           jQuery("#tbltareas").jqGrid({
                    url:'lista_tareas.php',
                    datatype: 'json',
                    mtype: 'POST',
                    colNames:['Id','Usuario','Descripcion', 'Horas','Estado'],
                    colModel:[
                        {name:'id', index:'id', width:50},
						{name:'usuario', index:'usuario', width:100},
                        {name:'descripcion', index:'descripcion', width:250},
                        {name:'horas', index:'horas', width:70, align:"right"},
                        {name:'estado', index:'estado', width:100},
                        ],
                    pager: '#paginacion',
                    rowNum:10,
                    rowList:[15,30],
                    sortname: 'id',
                    sortorder: 'asc',
                    viewrecords: true,
                    caption: 'Listado de Tareas'
                });              
            
			$('#logoutBT').on("click",logout);
			$("#btn_nuevo").on("click",showDialog);
			$("#guardarBT").on("click",insertarTarea);
			jQuery("").click( function(){ 			

							//Codigo para añadir una nueva tarea
				
				}); //fin btn_nuevo
    			
		}); // fin ready