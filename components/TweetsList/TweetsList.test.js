import { render } from "@testing-library/react";
import TweetsList from "./TweetsList";

describe("Given a TweetsList component", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      render(<TweetsList />);
    });
  });
});
