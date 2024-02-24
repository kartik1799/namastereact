import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Component Test Cases",()=>{

    beforeAll(()=>{
        console.log("Before All");
    })

    beforeEach(()=>{
        console.log("Before Each");
    })

    test("Should load contact us component",()=>{
        render(<Contact/>);
    
        const heading=screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load button inside contact component",()=>{
        render(<Contact/>);
    
        const button=screen.getByRole("button");
        //const button=screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    })
    
    test("Should load input inside our contact component",()=>{
        render(<Contact/>);
    
        const input=screen.getByPlaceholderText("Name");
    
        expect(input).toBeInTheDocument();
    })
    
    test("Should load two input boxes insdie contact component",()=>{
        render(<Contact/>);
    
        const inputBox=screen.getAllByRole("textbox");
    
        expect(inputBox.length).toBe(2);
    })
})
