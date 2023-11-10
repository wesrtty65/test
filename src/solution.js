import axios from "axios";

const url = new URL('http://numbersapi.com/random/year');

const regexp = new RegExp(/(December|January|February|March|April|May|June|July|August|September|October|November) ([1-9]|[12][0-9]|3[01])(mo|tu|we|th|fr|st|su)/gm);

const fetch = () => {
    return axios.get(url);
};

const getRandomFact = async () => {
    const res = await fetch();

    if (res.status === 200) {
        return res.data;
    }

    return null;
};

const solution = async (count = 1) => {
    const promises = [...new Array(count)].map(getRandomFact);
    const facts = await Promise.all(promises);
    const containsDates = facts.filter((fact) => fact.match(regexp));

    return containsDates;
};

export default solution;
