(function(){
    function defaultTable(){
        const table = document.getElementById('tableContent');
        const header = document.getElementById('header');
        const row = document.createElement('tr');

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
        function mediator(){
            
        }
        
    }
    window.addEventListener('load', defaultTable);
}());