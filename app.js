const heading=React.createElement("h1",{id:"heading"},"hw from react");

// console.log(heading);
const root=ReactDOM.createRoot(document.getElementById('root'));


const parent=React.createElement(
    "div",{id:"Parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"i'm h1 tag")
    )
);
console.log(parent);
      root.render(parent)


