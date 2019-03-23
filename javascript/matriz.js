(function (){
    const table = document.getElementById('matriz');
    function tables (){
        let instance = null;
        function Singleton(data){
            this.data = data;
            return ! instance ? instance = this : instance;

        }   return Singleton;
    }
    function sigletonPrueba(){
        const column = [];
        const row = [];
        for (const i = 0 ; i.lenght < 15; i++ ){
            const rowItems = document.createElement('td');
            table.appendChild(rowItems);
            console.log(rowItems);
            row.push(rowItems);
        }
        
    } sigletonPrueba();
}) ();