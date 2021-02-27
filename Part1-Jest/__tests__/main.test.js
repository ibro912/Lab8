const formatVolumeIconPath = require('../assets/scripts/main');

describe('Volume Icon Path', () => {
    test('level 3', () => {
        expect(formatVolumeIconPath(67)).toContain('3');
    });
    test('level 3', () => {
        expect(formatVolumeIconPath(34)).toContain('2');
    });
    test('level 3', () => {
        expect(formatVolumeIconPath(1)).toContain('1');
    });
    test('level 3', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
});