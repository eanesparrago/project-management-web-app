import styled from "styled-components";

import Logo from "components/Logo";
import AccountSetupSteps from "./AccountSetupSteps";
import AccountSetupForm from "./AccountSetupForm";
import MainLayout from "components/layouts/MainLayout";
import LogoutButton from "components/LogoutButton";
import { HeaderBlock, PageBlock } from "../../../styles";

function AccountSetupPage() {
  return (
    <PageBlock>
      <HeaderBlock>
        <ScLogo />

        <ScAccountSetupSteps />

        <ScLogoutButton />
      </HeaderBlock>

      <MainLayout as="main">
        <AccountSetupForm />
      </MainLayout>
    </PageBlock>
  );
}

const ScLogo = styled(Logo)`
  margin-right: 1.5rem;
`;

const ScAccountSetupSteps = styled(AccountSetupSteps)`
  width: 45rem;
`;

const ScLogoutButton = styled(LogoutButton)`
  margin-left: auto;
`;

export default AccountSetupPage;
