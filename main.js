const coin = {
    state: 0,
    flip: function() {
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
        return Math.floor(Math.random() * 2)
    },
    toString: function() {
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
        if (this.flip() == 0){
            return 'Heads';
        } else {
            return 'Tails';
        }
    },
    toHTML: function() {
        const image = document.createElement('img');
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        image.setAttribute('src', 'images/heads-01.png')
        image.className = 'coin'
        return image;
    }
};

const destination = document.getElementById('mainWrapper')

const displayTextOnPage = function (string, elementType){
    let text = document.createTextNode(string);
    let span = document.createElement(elementType);
    let br = document.createElement('br');
    span.appendChild(text);
    destination.appendChild(span);
    destination.appendChild(br);
}

const displayImageOnPage = function (image){
    destination.appendChild(image);
}

displayTextOnPage("Flip a coin 20 times and diplay the results as a string of text.", "h3")
for (let i = 0; i < 20; i++){
    displayTextOnPage(i + 1 +  ": " + coin.toString())
}