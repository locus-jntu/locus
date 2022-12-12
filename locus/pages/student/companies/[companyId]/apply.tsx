import { useRouter } from "next/router";
import CompanyForm from "../../../../snippets/shared/CompanyForm";

const ApplicationForm = () => {

  const router = useRouter();
  const { companyId } = router.query;

  return (
    <CompanyForm role="student"/>
  )
}

export default ApplicationForm;