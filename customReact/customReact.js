function customRender (reactElement, container){

    // method 1 ( if there is many attribute then ???? need loops)
//    const domElement = document.createElement(reactElement.type)
//    domElement.innerHTML = reactElement.children
//    domElement.setAttribute("href", reactElement.props.href)
//    domElement.setAttribute("target", reactElement.props.target)

//    container.appendChild(domElement);


// Method 2
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for (const prop in reactElement.props) {
    if(prop === "children") continue
    domElement.setAttribute(prop, reactElement.props[prop]); 
}
container.appendChild(domElement)
}

const reactElement = { 
    type : "a",
    props: {
        href: "http://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer)
