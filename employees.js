let idDel; 
        
        function ajaxGet() {
            let urlGet = `http://employeesintern.azurewebsites.net/api/employees`;
            $.ajax({
                method : 'GET',
                url : urlGet ,
                async : true ,
                crossDomain : true ,
                success : function(result){
                    let html = "";
                    result.forEach(element => {
                        let count = 0 ;
                        let id = 0;
                        html += "<tr>";
                        for (const key in element) {
                            if( count == 0 ){
                                id = element[key];
                                count = 1 ;
                            }
                            html += "<td>" + element[key] +"</td>";
                        }
                        html += `<td><button class="btnedit btn btn-outline-primary btn-sm"><a href="edit-employee.html?id=${id}">Edit</a></button>`
                        html += `<button class="btndel btn btn-outline-danger btn-sm" onclick="funcDel(${id});">Delete</button></td></tr>`;
                    });
                            
                    $("#tablebody").html(html) ;
                }   
            });
        }

        $(document).ready(function(){
            ajaxGet();

        });

        function confirmDel() {
            console.log("con fdel");
                if( idDel != undefined || idDel != null){
                    let urlDel = `http://employeesintern.azurewebsites.net/api/employees/${idDel}`;
                    $.ajax({
                    method : 'DELETE',
                    url : urlDel ,
                    async : true ,
                    crossDomain : true ,
                    success : function(result){
                        let html = "";
                        $("#tablebody").html(html) ;
                        idDel = undefined;
                        ajaxGet();
                    } 
                    });
                }
        }

       function funcDel(id) {
            $('#modeldel').modal({ show : true });
            idDel = id ;
            console.log(idDel);
        }