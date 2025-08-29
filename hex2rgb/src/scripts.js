
export function hexToRgbString(hex) {
    hex = hex.replace(/^#/, '');
    if (!/^[0-9A-F]{6}$/i.test(hex) && !/^[0-9A-F]{3}$/i.test(hex)) {
        return ('Неверный формат HEX цвета');
    }
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
}