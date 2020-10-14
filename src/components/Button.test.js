import { render, getByText, fireEvent } from "@testing-library/react";
import React from "react";
import Button from "components/Button";
import { TestScheduler } from "jest";

describe("Button", () => {
    test("should display text", () => {
        const { container } = render(<Button text="Success!" />);

        getByText(container, "Success!");
    });

    test("should handle click events", () => {
        const onClickMock = jest.fn();
        const { container } = render(
            <Button text="Click me" onClick={onClickMock} />
        );

        const component = container.firstChild;

        fireEvent.click(component);

        expect(onClickMock).toBeCalled();
    });

    test("should make text uppercase", () => {
        const { container } = render(<Button text="Success!" />);
        const component = getByText(container, "Success!");

        expect(component).toHaveStyleRule("text-transform", "uppercase");
    });
});

