let {AirCondition} = require('./AC.js');

describe('AirCondition', () => {
    let airConditionerUnit;
    beforeEach(() => {
        airConditionerUnit = new AirCondition();
    });

    test('Check if AC is on', () => {
        airConditionerUnit.setAcOff(true);

        airConditionerUnit.setAcOn(true);
        expect(airConditionerUnit.getAcOn()).toBeTruthy();
    });

    test('Check if AC is off', () => {
        airConditionerUnit.setAcOn(true);

        airConditionerUnit.setAcOff(true);
        expect(airConditionerUnit.getAcOff()).toBeTruthy();
    });

    test('Set temperature with AC on', () => {
        airConditionerUnit.setAcOn(true);
        const initialTemperature = airConditionerUnit.getTemperature();

        const newTemperature = 25;
        airConditionerUnit.setTemperature(newTemperature);

        expect(airConditionerUnit.getTemperature()).toBe(newTemperature);
    });

    test('Set temperature with AC off', () => {
        airConditionerUnit.setAcOn(false);
        const initialTemperature = airConditionerUnit.getTemperature();

        const newTemperature = 25;
        airConditionerUnit.setTemperature(newTemperature);
        expect(airConditionerUnit.getTemperature()).toBe(initialTemperature);
    });

    test('Set temperature with AC on above 30', () => {
        airConditionerUnit.setAcOn(true);

        const initialTemperature = airConditionerUnit.getTemperature();

        const newTemperature = 35;
        airConditionerUnit.setTemperature(newTemperature);
        expect(airConditionerUnit.getTemperature()).toBe(initialTemperature);
    });

    test('Set temperature with AC on below 16', () => {
        airConditionerUnit.setAcOn(true);

        const initialTemperature = airConditionerUnit.getTemperature();

        const newTemperature = 14;
        airConditionerUnit.setTemperature(newTemperature);
        expect(airConditionerUnit.getTemperature()).toBe(initialTemperature);
    });

    test('Set temperature with AC off below 16', () => {
        airConditionerUnit.setAcOn(false);

        const initialTemperature = airConditionerUnit.getTemperature();

        const newTemperature = 14;
        airConditionerUnit.setTemperature(newTemperature);
        expect(airConditionerUnit.getTemperature()).toBe(initialTemperature);
        airConditionerUnit.setAcOff(true);
        expect(airConditionerUnit.getAcOff()).toBeTruthy();
    });

    test('Set temperature with AC off above 30', () => {
        airConditionerUnit.setAcOn(false);

        const initialTemperature = airConditionerUnit.getTemperature();

        const newTemperature = 32;
        airConditionerUnit.setTemperature(newTemperature);
        expect(airConditionerUnit.getTemperature()).toBe(initialTemperature);
        airConditionerUnit.setAcOff(true);
        expect(airConditionerUnit.getAcOff()).toBeTruthy();
    });

    test('Set temperature with invalid parameter', () => {
        airConditionerUnit.setTemperature('invalid');
        expect(airConditionerUnit.getTemperature()).toBe(16);
    });


});