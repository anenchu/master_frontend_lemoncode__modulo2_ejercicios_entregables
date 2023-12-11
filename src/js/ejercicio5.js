console.log("EJERCICIO 5 - Slot Machine");

// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. 
// Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios 
// que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá 
// mostrarse por consola el mensaje:
// "Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:
// "Good luck next time!!".

class SlotMachine {
    constructor() {
        this.coins = 0;
    }

    play(){
        this.coins++;

        let message = "Good luck next time!!";
        if(this.getRandomBoolean() && this.getRandomBoolean() && this.getRandomBoolean())
        {
            message = `Congratulations!!!. You won ${this.coins} coins!!`;
            this.coins = 0;
        }
        console.log(message);
    }

    getRandomBoolean = () => Math.random() < 0.5;
}

// Ejemplo
const playUntilWin = (machine) => {
    do {
        machine.play();    
    } while(machine.coins > 0);    
};
const machine1 = new SlotMachine();
playUntilWin(machine1);
playUntilWin(machine1);

console.log("**********************************************");