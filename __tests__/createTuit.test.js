import { render } from "@testing-library/react";
import CreateTuit from "../pages/createTuit";

describe("Given a createTuit page component", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      render(<CreateTuit />);
    });
  });
});
