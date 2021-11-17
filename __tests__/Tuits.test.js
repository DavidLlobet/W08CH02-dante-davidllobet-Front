import { render, screen } from "@testing-library/react";
import Tuits from "../pages/Tuits";

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
          name: "Que pasa neeeeeeen",
          url: 14,
          id: 2,
        },
      ];
      render(<Tuits tuits={tuits} />);

      const list = screen.getAllByRole("article");

      expect(list).toHaveLength(tuits.length);
    });
  });
});
