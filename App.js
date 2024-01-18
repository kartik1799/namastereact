const heading=React.createElement("h1",{id:"heading"},"Hello React");
        const root=ReactDOM.createRoot(document.getElementById("root"));
        //root.render(heading);
//{} -  gives attributes to your tag like ids classname.
//{id:"heading"}

//heading is a react element that is an object with type as "h1" and props as attributes and children.
//render's job is to convert this object into heading tag and put in the dom which browser will understand.
//ReactElement(Object)=>HTML(Browser Understands)

//if we want to render nested elements inside our react.

// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
// React.createElement("h1",{},"Hello ReactDOM")));
//root.render(parent)


//If we have siblings inside our child div.
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
[React.createElement("h1",{},"Hello React"),React.createElement("h2",{},"Hello ReactDOM")]));
root.render(parent)