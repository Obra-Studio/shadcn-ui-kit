import { csvParse, autoType } from 'd3-dsv';
export default csvParse(`name,count
35,Polar
112,Brown`, autoType)