(function(){
    function defaultTable(){
        table = document.getElementById('tableContent');
        header = document.getElementById('header');
        row = document.createElement('tr');
        
        for (const elements of header.children){
            const line = document.createElement('td');
            const txtArea = document.createElement('input');
            txtArea.setAttribute('type', 'text');
            line.appendChild(txtArea);
            row.appendChild(line);
            table.appendChild(row);
            for (const item in elements.childNodes){
                const column = document.createElement('tr');
                const lines = document.createElement('td');
                const txtArea = document.createElement('input');
                txtArea.setAttribute('type', 'text');
                lines.appendChild(txtArea);
                column.appendChild(lines);
                line.appendChild(column);
            }     
        }     
        //mediator para eliminar y agregar 
        
        
    }   function mediator(defaultTable){ 
            const addcolum = document.getElementById('addcolum');
            const addRow = document.getElementById('addRow');
            addcolum.addEventListener('click', newColum);
            addRow.addEventListener('click', newColum);
        } mediator();
        function newColum(){
            const newColum = document.createElement('td');
            const txtArea = document.createElement('input');
            newColum.appendChild(txtArea);
            row.appendChild(newColum);
            console.log(newColum);
        }
    window.addEventListener('load', defaultTable);
}());