export function getType(i) {
    if(i == 'firstName') return 'string'
    if(i == 'lastName') return 'string'
    if(i == 'gendere') return 'radio'
    if(i == 'firstName') return 'string'
    if(i == 'firstName') return 'string'
    return "null"
}

export function getValues(i) {
    if(i == 'gendere') return 'male,female,other'
    return 'null,null'
}