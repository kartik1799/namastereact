import { fireEvent, render, screen } from "@testing-library/react"
import MainContainer from "../MainContainer"
import MOCK_DATA from "../mocks/MainContainerMockData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should render the Main Container with Search Restaurant Cards with pizza input",async ()=>{

    await act(async ()=>render(
        <BrowserRouter>
            <MainContainer/>
        </BrowserRouter>
    ));
    const cardsBeforeSearch=screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn=screen.getByRole("button",{name:"Search"})

    const searchInput=screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value:"pizza"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch=screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(3);
})

it("Should filter Top Rated Restaurant",async ()=>{
    await act(async () =>render(
        <BrowserRouter>
            <MainContainer/>
        </BrowserRouter>
    ));

    const topRatedButton=screen.getByRole("button",{name:"Top Rated Restaurant"});

    fireEvent.click(topRatedButton);

    const topRatedCards=screen.getAllByTestId("resCard");

    expect(topRatedCards.length).toBe(18);
})