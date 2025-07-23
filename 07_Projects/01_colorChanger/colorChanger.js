const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(button);
        console.log(e.target);
        // if (e.target.id === 'blue') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'black') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'white') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'pink') {
        //     body.style.backgroundColor = e.target.id;
        // }

        // by using switch 
        switch (e.target.id) {
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "black":
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "pink":
                body.style.backgroundColor = e.target.id;
                break;
        
            default:
                console.log("Please select a color");
                break;
        }
    });
});