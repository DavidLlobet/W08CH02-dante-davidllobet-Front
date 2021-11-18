import { render, screen } from "@testing-library/react";
import Tuits from "../pages/index";

describe("Given a Tuits page component", () => {
  describe("When it's rendered with two tuits", () => {
    test("Then it should list two tuits", () => {
      const tuits = [
        {
          text: "Je ne sais rien",
          likes: 20,
          date: 2021 - 11 - 17,
        },
        {
          text: "Que pasa neeeeeeen",
          likes: 14,
          date: 2021 - 11 - 18,
        },
      ];
      render(<Tuits tuits={tuits} />);

      const list = screen.getAllByRole("article");

      expect(list).toHaveLength(tuits.length);
    });
  });
});
