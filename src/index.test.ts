import * as functions from './index';

describe('index', () => {
    it('exports the correct functions and variables and types', () => {
        expect(functions.getAPIVersion).toBeDefined();
        expect(functions.getF1MVVersion).toBeDefined();
        expect(functions.discoverF1MVInstances).toBeDefined();
        expect(functions.LiveTimingAPIV1).toBeDefined();
        expect(functions.LiveTimingAPIV2).toBeDefined();
        expect(functions.LiveTimingAPIGraphQL).toBeDefined();
        expect(functions.LiveTimingClockAPIGraphQL).toBeDefined();
        expect(functions.testConnection).toBeDefined();
        expect(functions.noInstanceFounded).toBeDefined();
        expect(functions.invalidTopic).toBeDefined();
    });
});
