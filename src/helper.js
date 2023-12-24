import convert from 'xml-js';

export const convertToJson = (xml) => {
    return convert.xml2json(xml, { compact: true, spaces: 4 });
};