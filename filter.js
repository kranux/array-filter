export function filter(list, search, fields = []) {
    const searchVal = search.toUpperCase();

    return list.filter(el => {
        if (typeof el === 'string') { 
            return ~el.toUpperCase().indexOf(searchVal);
        } else {
            const availableFields = fields.length && fields || Object.keys(el);
            return Object.keys(el)
                .filter(key => ~availableFields.indexOf(key))
                .map(key => ~el[key].toUpperCase().indexOf(searchVal))
                .filter(found => found !== 0)
                .length > 0;
        }
    });
}