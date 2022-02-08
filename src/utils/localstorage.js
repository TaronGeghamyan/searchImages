export const getByKey = (key) => {
    const str = localStorage.getItem(key);
    if(str) {
        return JSON.parse(str);
    }
    return str;
}

export const setByKey = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
}