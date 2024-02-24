import { sum } from "../sum";

test("Sum of two numbers",()=>{

    //Querying
    const result=sum(2,3);

    //Assertion
    expect(result).toBe(5);
})