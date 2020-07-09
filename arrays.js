    1
        var vowels = ['a', 'e', 'i','o','u'];
        var iterator1 = vowels.entries();

        console.log(iterator1.next().value);
        console.log(iterator1.next().value);
    
    2
        let numbers = [40, 16, 67, 345, 22, 23, 142, 63, 59, 283];
        let greaterThan20 = numbers.every(function(num){
            return num > 20;
        });
        console.log(greaterThan20);

        let greaterThan10 = numbers.every(function(num){
            console.log(num);
            return num > 10;
        });
        console.log('\n', greaterThan10);

    3
        var numbers = [1, -1, 2, 3, 4, -5];
        var filtered = numbers.filter(function(value) {
            return value >= 0; 
        });

        console.log(filtered);
        
    4
        var numbers = [12, 34, 56, 78, 91];
        
        var movies = ['Layer Cake', 'Star Wars', 'Star Trek', 'Jaws', 'Jurassic Park', 'Gross Pointe Blank', 'Eternal Sunshine of the Spotless Mind', 'Memento', 'Dog Soldiers', 'The Host', 'Gran Torino', 'Close Encounters of the Third Kind', 'Good Will Hunting', 'Casino Royale', 'Almost Famous'];
        
        var sum = numbers.reduce(function(passedIn, item){
            
            return passedIn + item;
        }, 0);
        console.log('Total is', sum, '\n');

        let first = movies.reduce(function(current, item){
            console.log('comparing', current, 'to', item);
            return (current < item) ? current: item;
        }, "\u0434");
        console.log('First movie is', first);

    5
        const numbers = [1, -1, 2, 3, 4, 5];

        const filtered = numbers.filter(n => n >= 0);
        
        const items = filtered.map(n => {
            const obj = { value: n };
            return obj;

        });

        console.log(items)
        
        var nombrePersonaje = "juancho";
        var nombreBarrioPersonaje = "aldea ilva";
        var nombreApellidopersonaje = "Marquez";

        alert("nombre del personaje:"+nombrePersonaje);
        alert("barrio del personaje:"+nombreBarrioPersonaje);
        alert("apellido del personaje:"+nombreApellidopersonaje);

        consol.log("nombre"+nombrePersonaje + "Aldea:"+nombreAldeaPersonaje + "Clan"+nombreClanPersonaje);


 /////strims

        
        var ciudades =["bogota", "barranquilla", "FUNDACION", "medellin"];

        alert("lungitudud de ciudades:" + ciudades.length);
        alert("posicion 2:" + ciudades[2]);
        alert("mayusculas:" + "bogota".toLocaleUpperCase ());
        alert("minusculas:" + "FUNDACION".toLowerCase());
        alert(ciudades.indexOf("medellin"));
        alert(ciudades.lastIndexOf("medellin"));
        alert("barranquilla:".substr(1,("barranquilla".length)-1));
        console.log("barranquilla".split(""));
        console.log("bogota:".concat("FUNDACION"));
        
        


         

        



