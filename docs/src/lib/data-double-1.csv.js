import { csvParse, autoType } from 'd3-dsv';
export default csvParse(`A,B,
1,2
4,8
8,16
16,96`, autoType)