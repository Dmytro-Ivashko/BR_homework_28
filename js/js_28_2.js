/* 
* Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
  * поле, которое хранит цвет маркера;
  * поле, которое хранит количество чернил в маркере (в процентах);
  * метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор,
  *  пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
  * Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
  * Продемонстрировать работу написанных методов. 
 */

class Marker {
    constructor(color, capacity){
        this.color = color;
        this.capacity = capacity;
    }

    printText(text) {
        let str = "";
        for (let i = 0;i < text.length; i++) {
            str += text[i];
            if (text[i] != " ") {
                this.capacity -= 0.5;
            }
        }
        if (this.capacity < (text.length * 0.5)){
            document.write(`<p style="color:red">Warning!!!! Not enough ink to write</p>`);
        } else {
            document.write(`<p style="color:${this.color}">${str} <b> Ink in ${this.color} marker: ${this.capacity} %</b></p>`);

        }
       
    }

}

class RefillMarker extends Marker{

    refill(addCapacity) {
        if ((this.capacity + addCapacity) > 100) {
            this.capacity = 100;
        } else {
            this.capacity += addCapacity;
        }
        document.write(`<p style="color:green">You add ${addCapacity}</p>`);
    }
}


let bluMarker = new Marker("blue", 55);
let redMarker = new Marker("blue", 35);
let greenMarker = new Marker("blue", 45);



console.log(bluMarker);


bluMarker.printText("Hello, World!!");
bluMarker.printText("Hello, World!!!");
bluMarker.printText("Hello, World!!!");
bluMarker.refill(55);
bluMarker.printText("Hello, World!!!");
console.log(bluMarker);




