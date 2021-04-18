export default class Stadistics {
    sumatoryOf(data: number[]): number {
        let result = 0;
        data.forEach((num: number) => {
            result += num;
        });
        return result;
    }
    medianOf(data: number[]): number | number[] {
        const sorted = data.slice().sort((a: number, b: number) => { return a - b; });
        const middle = Math.floor(sorted.length / 2);
        if (sorted.length % 2 === 0) {
            return [sorted[middle - 1], sorted[middle]];
        }
        return sorted[middle];
    }
    averageOf(data: number[], notRounded?: boolean): number {
        const dataLength = data.length;
        const sumatoria = this.sumatoryOf(data);
        if (notRounded)
            return (sumatoria / dataLength);
        return Math.round(sumatoria / dataLength);
    }
}
