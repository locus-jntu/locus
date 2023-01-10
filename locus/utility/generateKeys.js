export function similarKeys(fixed, company){
    const fixedKeys = []
    const OptionalKeys = []
    company.forEach(key => {
        const m = key.toLowerCase();
        const match = fixed.filter(k => k.toLowerCase()==m)
        if(match.length > 0){
          fixedKeys.push(key.toLowerCase().split(" ").join("_"));
        }else OptionalKeys.push(key);
    })
    return [fixedKeys, OptionalKeys]
}