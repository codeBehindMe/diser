import { LineChart, Line, XAxis, YAxis, Label } from 'recharts';
const data = [
  {name: 'Page A', uv: 66},
  {name: 'Page B', uv: 68},
  {name: 'Page B', uv: 70},
  {name: 'Page B', uv: 72},
  {name: 'Page B', uv: 70},
  {name: 'Page B', uv: 72},
  {name: 'Page B', uv: 73},
  {name: 'Page B', uv: 73},
  {name: 'Page B', uv: 72},
  {name: 'Page B', uv: 71},
  {name: 'Page B', uv: 70},
  {name: 'Page B', uv: 68},
  {name: 'Page B', uv: 74},
  {name: 'Page B', uv: 74},
  {name: 'Page B', uv: 74},
  {name: 'Page B', uv: 73},
  {name: 'Page B', uv: 72},
  {name: 'Page B', uv: 71},
  {name: 'Page B', uv: 70},
  {name: 'Page B', uv: 72},
  {name: 'Page B', uv: 71},
  {name: 'Page B', uv: 64},
  {name: 'Page B', uv: 52},
  {name: 'Page B', uv: 44},
  {name: 'Page B', uv: 35},
  {name: 'Page B', uv: 36},
];

export const LineGraph = () => {
  return (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} />
      <XAxis label={"Wavelength [nm]"} tick={false} />
      <YAxis domain={[35, 80]}>
        <Label angle={-90} value='Reflectance [%]' position='insideLeft' style={{textAnchor: 'middle'}} />
      </YAxis>
    </LineChart>
  )
};
