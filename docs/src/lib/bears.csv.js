import { csvParse, autoType } from 'd3-dsv';
export default csvParse(`name,count
Polar,35
Brown,112`, autoType)