import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";

it("Should render RestaurantCard component with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name=screen.getByText("La Pino'z Pizza");

    expect(name).toBeInTheDocument();
})

