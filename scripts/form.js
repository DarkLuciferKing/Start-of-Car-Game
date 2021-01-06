class Form{
    constructor(){

    }




    display(){
        var title = createElement('h2');
        title.position(200, 50);
        title.html("Car Racing Game");

        var input = createInput("");
        input.position(250, 150);

        var button = createButton("Play");
        button.position(275, 175);

        var greeting = createElement("h6");
        greeting.position(250, 250);

        button.mousePressed(function() {
            input.hide();
            button.hide();
            var name = input.value();
            greeting.html("Hello " + name);
        });

    }

}