import { render, screen } from "@testing-library/react";
import CreateForm from "./CreateForm";
import userEvent from "@testing-library/user-event";

describe("Given a CreateForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should render one input and a submit button", () => {
      render(<CreateForm />);

      const textInput = screen.getByRole("textbox");
      const button = screen.getByRole("button");

      expect(textInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user types in the text box", () => {
    test("Then it should render a non disabled submit button", () => {
      render(<CreateForm />);

      const textInput = screen.getByRole("textbox");
      const button = screen.getByRole("button");

      userEvent.type(textInput, "Me gusta Tuitah");

      expect(button).not.toBeDisabled();
    });
  });
});
