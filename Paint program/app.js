// the core of the programm; appends the paints interface 
// DOM element given as an argument (parent)

function createPaint(parent) {
    var canvas = elt('canvas', {width: 500, height: 300});
    var cx = canvas.getContext('2d');
    var toolbar = elt('div', {class: 'toolbar'});

    // calls the every function in controls, passing in context,
    // Then appending the returned results to the toolbar

    for (var name in controls)
        toolbar.appendChild(controls[name](cx));

    var panel = elt('div', {class: 'picturepanel'}, canvas);
    parent.appendChild(elt('div',null.panel, t))
}