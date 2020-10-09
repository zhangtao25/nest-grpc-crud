function deleteUndefinedAttribute(obj) {
    for (const i in obj) {
        if (obj[i]) {

        } else {
            delete obj[i];
        }
    }
    return obj;
}

function isUndefineOrNull(obj) {
    return obj === undefined || obj === null;
}

function isBlankStr(obj: string) {
    return isUndefineOrNull(obj) || obj.trim() === "";
}

function convertObject(obj, toObj) {
    // return Object.assign({ ...obj});
    for (const i in toObj) {
        for (const j in obj) {
            if (i === j) {
                toObj[i] = obj[j];
                break
            }
        }
    }
    return toObj;
}

function getPageContext(pageIndex, findAndCount: [any, number], pageSize) {
    const pageEntity = new PageEntity();
    pageEntity.pageIndex = pageIndex;
    pageEntity.pageTotal = Math.ceil(findAndCount[1] / pageSize);
    pageEntity.total = findAndCount[1];
    return pageEntity;
}

function getPageIndexAndSize(commonField) {
    let pageIndex = null;
    let pageSize = null;
    if (commonField != null) {
        pageIndex = commonField.pageIndex;
        pageSize = commonField.pageSize;
    }
    if (pageIndex === null) {
        pageIndex = 1;
    }
    if (pageSize === null) {
        pageSize = Number.MAX_SAFE_INTEGER;
    }
    return { pageIndex, pageSize };
}

export function reflectField() {
    return (target, key: string) => {
        console.log(target)
        console.log(key)
        const type = Reflect.getMetadata('design:type', target, key);
        console.log(`${key} type: ${type.name}`);
    };
}

function getIPAdress() {
    const interfaces = require('os').networkInterfaces();
    for (const devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address
            }
        }
    }
}

export default {
    deleteUndefinedAttribute,
    isUndefineOrNull,
    isBlankStr,
    convertObject,
    reflectField,
    getPageContext,
    getPageEntity: getPageIndexAndSize,
    getIPAdress
};



class PageEntity {
    public pageTotal: number;
    public total: number;
    public pageIndex: number;
}
