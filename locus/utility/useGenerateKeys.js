export function useGenerateKeys(fixed, company, setDefaultKeys, setOptional, setfixedUserProfileSchema) {
    const fixedKeys = fixed.map(key => key)
    const _keys = () => {
       setOptional(company.filter(key => fixedKeys.indexOf(key) === -1))
       setDefaultKeys(company.filter(key => fixedKeys.indexOf(key) != -1))
       setfixedUserProfileSchema(company.filter(key => fixedKeys.indexOf(key) != -1))
    }

  return _keys;

}