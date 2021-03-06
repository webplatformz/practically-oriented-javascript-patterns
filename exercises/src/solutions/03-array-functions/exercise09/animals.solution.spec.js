import { sumInDogYears } from './animals.solution.js';
import { sumInHumanYears } from './animals.solution.js';
import { ANIMALS } from '../mock-data.js';

describe("statistics", () => {

    it("should sum up the dog age of all dogs", () => {
        expect(sumInDogYears(ANIMALS)).toEqual(17);
        expect(sumInDogYears([])).toEqual(0);
    });

    it("should sum up the human age of all dogs", () => {
        expect(sumInHumanYears(ANIMALS)).toEqual(119);
        expect(sumInHumanYears([])).toEqual(0);
    });

});