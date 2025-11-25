        const notas = [8, 7, 10, 5, 9];
        let sumaTotal = 0;
        
       
        // OBTENER ELEMENTOS DEL DOM
        const listaNotas = document.getElementById('listaNotas');
        const promedioElemento = document.getElementById('promedioFinal');
        
        // BUCLE FOR...OF
        for (const nota of notas) {
            // Acumular la suma
            sumaTotal += nota;
            
            // Crear elemento <li> para cada nota
            const itemLista = document.createElement('li');
            itemLista.textContent = `Nota: ${nota}`;
            listaNotas.appendChild(itemLista);
            
            // Mostrar en consola
            console.log(`Nota procesada: ${nota} | Suma parcial: ${sumaTotal}`);
        }
        
        // CALCULAR PROMEDIO
        const promedio = sumaTotal / notas.length;
        
        console.log("==========================================");
        console.log(`Suma Total: ${sumaTotal}`);
        console.log(`Cantidad de notas: ${notas.length}`);
        console.log(`Promedio Final: ${promedio.toFixed(2)}`);
        
        // Mostrar promedio en HTML
        promedioElemento.textContent = promedio.toFixed(2);
        
        // BONUS: Agregar color según el promedio
        if (promedio >= 7) {
            promedioElemento.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
        } else if (promedio >= 5) {
            promedioElemento.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
        } else {
            promedioElemento.style.background = 'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)';
        }