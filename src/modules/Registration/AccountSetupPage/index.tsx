import styled from "styled-components";

import Logo from "components/Logo";
import AccountSetupSteps from "./AccountSetupSteps";
import AccountSetupForm from "./AccountSetupForm";

function AccountSetupPage() {
  return (
    <S.AccountSetupPage>
      <div className="AccountSetupPage__header-block">
        <Logo className="AccountSetupPage__Logo" />

        <AccountSetupSteps className="AccountSetupPage__AccountSetupSteps" />
      </div>

      <div className="AccountSetupPage__main-block">
        <AccountSetupForm />
      </div>
    </S.AccountSetupPage>
  );
}

const S = {} as any;

S.AccountSetupPage = styled.div`
  padding-bottom: 6rem;

  .AccountSetupPage__header-block {
    margin-bottom: 4rem;
    padding: 1.5rem 2rem;
    display: flex;
  }

  .AccountSetupPage__Logo {
    margin-right: 1.5rem;
  }

  .AccountSetupPage__AccountSetupSteps {
    width: 45rem;
  }

  .AccountSetupPage__main-block {
    padding-left: 6rem;
  }
`;

export default AccountSetupPage;
