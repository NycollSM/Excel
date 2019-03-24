(function (){
    const table = document.getElementById('matriz');
    addColumn = [
        [1,2,3,4,5,6,7],
        [1,2,3,4,5,6,7],
        [1,2,3,4,5,6,7],
        [1,2,3,4,5,6,7]
    ];
    addRow = [
        [1,2,3,4,5,6,7],
        [1,2,3,4,5,6,7],
        [1,2,3,4,5,6,7],
        [1,2,3,4,5,6,7]
    ]; 
    function tableDefault(){
        // each column
        
        let columnItems;
        for (let i = 0 ; i < 15 + 1; i++ ){
            columnItems = document.createElement('tr'); 
            columnItems.setAttribute('column', i);
            columnItems.innerText= i;
            table.appendChild(columnItems);
            addColumn.push(columnItems);
            
            const header = document.createElement('td');
            header.innerText = i;
            columnItems.appendChild(header);
             // each sell with an input
            for (let e =0; e < 15 + 1; e++){ 
                const sellItems = document.createElement('td');
                sellItems.setAttribute('sellItem', e, 'column' + i);
                const input = document.createElement('input');
                input.setAttribute('type', 'text');
                sellItems.appendChild(input);
                columnItems.appendChild(sellItems); 
                addRow.push(sellItems);
                console.log(sellItems);
            }
        }
    } tableDefault();
    function mediator (){
        const btnRow = document.getElementById('newRow');
        const btnColumn = document.getElementById('newColumn');
        function newItem(){
            const newColumn = document.createElement('td');
            newColumn.setAttribute('column', i);
            addColumn.push(newColumn);
            const input = document.createElement('input');
            newColumn.appendChild(input);
            row.appendChild(newColumn);
            console.log(newColumn);
        } 
        btnColumn.addEventListener('click', newItem);
        btn.addEventListener('click', newItem);
    } mediator();

})();