import { csvParse, autoType } from 'd3-dsv';
export default csvParse(`A,B,C,D
2,3,4,a
1,2,1,a
4,5,15,b
9,10,80,b`, autoType)