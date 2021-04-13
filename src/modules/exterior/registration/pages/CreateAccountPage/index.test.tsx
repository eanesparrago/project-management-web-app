import { render, screen, userEvent } from "test/testUtils";
import { build, fake } from "@jackfranklin/test-data-bot";
import CreateAccountPage from "./index";

type User = {
  emailAddress: string;
  password: string;
};

const userBuilder = build<User>("User", {
  fields: {
    emailAddress: fake((f) => f.internet.email()),
    password: fake((f) => f.internet.password()),
  },
});

test("submitting the form successfully sets submit button to loading", async () => {
  render(<CreateAccountPage />);

  const { emailAddress, password } = userBuilder();

  const emailInput = screen.getByTestId("emailInput");
  const passwordInput = screen.getByTestId("passwordInput");
  const submitBtn = screen.getByTestId("submitBtn");

  userEvent.type(emailInput, emailAddress);
  userEvent.type(passwordInput, password);
  userEvent.click(submitBtn);

  expect(
    await screen.findByRole("img", { name: /loading/i })
  ).toBeInTheDocument();
});
