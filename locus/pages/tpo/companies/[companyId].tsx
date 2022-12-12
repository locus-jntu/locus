import { useRouter } from "next/router";
import Company from "../../../snippets/shared/Company";

const CompanyDetails = () => {

  const router = useRouter();
  const { companyId } = router.query;

  return (
    <Company role="tpo" cid={companyId}/>
  )
}

export default CompanyDetails;